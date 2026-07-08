# FLC Esport — Site de reporting interne

Espace interne (privé) pour donner à la **direction** une lecture claire de l'activité esport.

Design **sombre avec accent doré**, navigation en **barre supérieure** :
`Dashboard · Ma semaine · Tâches · Fortnite · FIFA · Delta Force · Réunions · Calendrier · Notes · Paramètres` (admin).

Dans la barre du haut : **recherche globale** (🔍), **centre d'alertes** (🔔) et déconnexion.

### Centre d'alertes (🔔)

La cloche agrège tout ce qui demande l'attention du directeur, tous pôles confondus :
points **en retard**, objectifs **à échéance / dépassés**, blocages & problèmes **ouverts depuis
longtemps**, besoins **à cadrer** ou **à remonter**, **actions de réunion** non faites. Une pastille
indique le nombre ; un clic sur une alerte ouvre le pôle concerné. Chaque notification peut être
**supprimée** (croix ✕) ou toutes d'un coup (**Tout effacer**) — le masquage est mémorisé ; si la
situation évolue à nouveau (nouvelle échéance, nouveau blocage…), l'alerte réapparaît.

### Recherche globale (🔍)

Cherche dans **tout le site** (staff, besoins, comptes-rendus, résultats, objectifs, suivi,
évènements). Les résultats sont groupés par type et cliquables.

### Calendrier

Agenda **tous pôles** avec deux vues : **Mois** (grille du mois, navigation ‹ › + « Aujourd'hui »,
jour du jour encadré) et **Liste** (À venir / Passés). Chaque évènement a un **type** (compétition,
réunion, absence, rappel, bootcamp, échéance, autre — chacun sa couleur), un **pôle** (ou « tous »)
et, en option, une **date de fin** pour les évènements sur **plusieurs jours** (vacances, absences…).
Cliquer un jour crée un évènement à cette date ; cliquer un évènement l'ouvre.

Les **échéances des objectifs de pôle** (celles qui portent une date) apparaissent **automatiquement**
dans le calendrier, avec une pastille dédiée « 🎯 Échéance objectif ». Un objectif défini sur une
**période (début → fin)** s'affiche comme un évènement **sur plusieurs jours**. Elles se mettent à
jour toutes seules quand tu modifies un objectif (elles ne sont pas saisies dans le calendrier) ;
cliquer dessus ouvre le pôle concerné. Les objectifs **sans date** ou **abandonnés** n'y figurent pas.

---

## Synchronisation des données (partage entre tout le monde)

Par défaut le site fonctionne en **mode local** : chaque personne a ses données **dans son
navigateur** (rien n'est partagé). Pour que **tout le monde voie les mêmes données en temps réel**,
on branche une base **Supabase** (gratuite, sans serveur à coder). Un indicateur en haut à droite
affiche l'état : **Synchro** (à jour), **…** (en cours) ou **Hors ligne**.

### Mise en place (une seule fois)

1. **Créer un projet gratuit** sur [supabase.com](https://supabase.com) (New project).
2. Dans **SQL Editor**, exécuter ce script pour créer la table de synchro :

   ```sql
   create table if not exists flc_state (
     key text primary key,
     data jsonb,
     updated_at timestamptz not null default now()
   );

   -- met à jour updated_at à chaque écriture
   create or replace function flc_touch() returns trigger as $$
   begin new.updated_at = now(); return new; end; $$ language plpgsql;
   drop trigger if exists flc_touch_trg on flc_state;
   create trigger flc_touch_trg before insert or update on flc_state
     for each row execute function flc_touch();

   -- accès via la clé publique "anon" (lecture + écriture)
   alter table flc_state enable row level security;
   create policy "flc_all" on flc_state for all
     to anon using (true) with check (true);
   ```

3. Dans **Project Settings → API**, copier **Project URL** et la clé **anon public**.
4. Ouvrir `index.html`, tout en haut du `<script>` (bloc « ⚙️ SYNCHRONISATION »), coller les deux
   valeurs :

   ```js
   const SUPABASE_URL      = "https://xxxxxxxx.supabase.co";
   const SUPABASE_ANON_KEY = "eyJhbGci....";
   ```

5. **Héberger la page** sur une URL commune (voir plus bas) et la partager à l'équipe. Au premier
   lancement, les données actuelles (comptes + pôles) sont **envoyées** dans la base ; ensuite tout
   le monde lit et écrit au même endroit.

> ⚠️ **Niveau de sécurité.** Cette configuration **partage** les données entre tous ceux qui ont
> l'URL — c'est de la **synchronisation**, pas une sécurité forte : la clé « anon » est visible dans
> la page et le code PIN reste vérifié **côté navigateur**. C'est adapté à un usage interne de
> confiance. Pour un vrai contrôle d'accès par rôle **imposé par le serveur** (authentification
> Supabase + règles RLS par utilisateur), c'est une étape supplémentaire qu'on peut ajouter ensuite.

### Héberger la page (URL commune) — GitHub Pages

Le site est **100 % autonome** (le logo est intégré dans le fichier), donc `index.html` seul suffit ;
aucun build. Le plus simple ici : **GitHub Pages**, puisque le dépôt est déjà sur GitHub.

1. Sur GitHub, ouvrir le dépôt → **Settings** → **Pages**.
2. Section **Build and deployment** → **Source : Deploy from a branch**.
3. **Branch : `claude/flc-esport-internal-site-1ul2or`** (la branche par défaut) et dossier **`/ (root)`**, puis **Save**.
4. Patienter ~1 minute : l'URL publique s'affiche en haut de la page Pages, du type
   **`https://shayex.github.io/FLC-Esport-Reporting-Shayex/`**. C'est l'adresse à partager à l'équipe.

Le fichier `.nojekyll` à la racine garantit que la page est servie **telle quelle** (sans traitement
Jekyll qui pourrait casser le JavaScript). À chaque `git push`, GitHub Pages **redéploie** tout seul.

> 🔐 **À savoir sur une page publique.** Le site étant statique, la clé **anon** de Supabase est
> visible par toute personne qui a l'**URL** (dans le code de la page). Avec la règle d'accès simple
> fournie plus haut, cela signifie que **quiconque connaît l'adresse peut lire/écrire** les données.
> Pour un usage interne où l'on partage l'URL à une équipe de confiance, c'est acceptable. Pour
> verrouiller vraiment (accès réservé à des comptes, imposé côté serveur), l'étape suivante est
> d'ajouter l'**authentification Supabase + RLS par utilisateur** — dis-moi quand tu veux la faire.

---

## Ouvrir le site & se connecter

En local, double-cliquez sur `index.html` ; une fois hébergé, ouvrez l'**URL** partagée.
Connexion par **identifiant + code PIN** (4 à 6 chiffres).
Compte par défaut : **`shayex` / PIN `0000`** (Directeur, Admin) — à **changer à la première connexion**.

## Paramètres (admin)

Les administrateurs voient un onglet **Paramètres** (masqué pour les autres) qui regroupe
l'administration du site : la **sauvegarde des données** (export / import) et la gestion des
**comptes & rôles**.

### Comptes & rôles

Depuis Paramètres : **créer / modifier / supprimer** des comptes et attribuer un **rôle** :
CEO, CO-CEO, Directeur, Manager — avec une option **Administrateur** (droit de gérer les comptes).

**Code PIN & première connexion** : l'admin fixe un **PIN initial** à la création. À sa première
connexion (ou après un reset du PIN par l'admin), la personne doit **définir son propre PIN** avant
d'accéder au site. Les comptes concernés affichent un repère « PIN à changer » dans la liste.

> ⚠️ **Sécurité** : en **mode local**, comptes et données vivent uniquement dans le navigateur. Avec
> la **synchronisation Supabase** (voir plus haut), ils sont **partagés** entre tous les postes, mais
> le code PIN reste vérifié côté navigateur — c'est un système fonctionnel de rôles, pas encore un
> contrôle d'accès **imposé par le serveur**.

### Sauvegarde (export / import)

Depuis l'onglet **Paramètres** : **Exporter les données** télécharge un fichier `.json` contenant
toutes les données (pôles + transversal), **Importer une sauvegarde** les restaure (remplace les
données actuelles). Pratique pour sauvegarder ou transférer les données sur un autre poste.

## Structure

Un seul fichier : `index.html` (HTML + CSS + JavaScript). Aucune installation.
Les données sont enregistrées **dans le navigateur** (localStorage : `flc-poles-v1`, `flc-org-v1`,
`flc-users-v1`) et, si la **synchronisation Supabase** est configurée, **répliquées en ligne** dans
la table `flc_state` (partagées entre tous les postes, avec le navigateur comme cache/hors-ligne).

## Onglets

### Ma semaine — centre d'action du directeur

Consolide, en un seul écran, **tout ce que le directeur doit traiter**, tous pôles confondus :
- **Points managers à tenir** : les pôles dont le prochain point est en retard ou prévu sous 7 jours
  (ou sans rythme défini, « à planifier ») — cliquables pour ouvrir le pôle ;
- **Actions à suivre** : toutes les actions de comptes-rendus non faites, **cochables directement**
  (la case coche l'action dans le pôle et la retire de la liste) ;
- **Échéances à venir** : objectifs en cours arrivant à échéance sous 7 jours (ou dépassés) ;
- **Besoins à traiter** : besoins à cadrer ou à remonter.

Une pastille sur l'onglet indique le nombre total d'éléments à traiter.

### Tâches — liste personnelle (générale + sections)

Onglet **personnel** : chaque personne a **sa propre liste** (privée à son compte),
**synchronisée sur ses appareils**. On y trouve une liste **Général** plus autant de **sections**
que l'on veut créer (**« + Nouvelle section »**, renommables et supprimables). Dans chaque bloc :
saisie rapide (Entrée ou **+**), **coche** pour marquer fait (barré, remonté en bas), suppression.
Supprimer une section **déplace ses tâches dans Général** (aucune perte). Une pastille sur l'onglet
indique le nombre total de tâches **à faire**.

### Dashboard — vue direction

Agrège **tous les pôles** :
- **Vue par pôle** : carte par pôle (manager, cadence / prochain point, nb de blocages·problèmes
  ouverts, besoins à remonter, objectifs en cours) — cliquable pour ouvrir le pôle ;
- **À remonter à la direction** : tous les besoins marqués « à remonter », triés par priorité ;
- **Points de vigilance** : tous les blocages et problèmes en cours, tous pôles confondus ;
- **Harmonisation des pratiques entre jeux** : matrice *pratiques × pôles* — pour chaque standard
  commun, un clic sur la case cycle le niveau d'adoption (Adopté / En cours / À faire) par pôle ;
- **Diffusion aux managers** : annonces / décisions / consignes que la direction fait circuler
  (l'information qui redescend et se partage entre pôles).

### Réunions — comptes-rendus de tous les pôles (mission 01)

Tous les **comptes-rendus de réunions** des 3 pôles au même endroit :
- **Filtre par pôle** (tous / Fortnite / FIFA / Delta Force) ;
- chaque compte-rendu : date, thème, participants, contenu, **pôle** (badge) et **actions à suivre
  cochables** ;
- **+ Nouveau compte-rendu** : on choisit le pôle concerné dans le formulaire.

Les actions non cochées alimentent l'onglet **Ma semaine** et le **centre d'alertes**.

### Fortnite / FIFA / Delta Force — un espace par pôle

Les trois pôles partagent le **même moteur**. Chaque pôle contient, tout éditable directement :
- **En-tête récap** — manager & contact, rythme des points, dernier point, **prochain point calculé**
  avec badge de cadence, compteurs blocages/avancées. Bouton **Paramètres** (manager, contact, rythme) ;
- **Objectifs du pôle** — intitulé, **échéance** (une date unique **ou** une période début → fin),
  statut (En cours / Atteint / Abandonné) ; les objectifs datés remontent dans le calendrier ;
- **Résultats récents** — résultats de compétition (date, compétition, classement, issue) ;
- **Staff de la section** — membres (nom, rôle, notes) + champ **Avis / appréciation** ;
- **Avancées, blocages & problèmes** — type + statut (Ouvert / En cours / Résolu), filtrables,
  avec des **notes d'avancement** datées par sujet. Une pastille sur l'onglet indique le nombre de
  blocages/problèmes non résolus ;
- **Besoins du pôle** — type (staff/matériel/budget), priorité, **coût estimé**, statut
  d'**arbitrage** et case **« à remonter à la direction »** (les besoins à remonter alimentent le
  Dashboard, l'onglet Ma semaine et le centre d'alertes).

### Notes — base de connaissances

Procédures, infos, décisions et **liens utiles** : chaque note a une **catégorie**, une date, peut être
**épinglée** en tête, et ses URLs deviennent **cliquables**. Filtrable par catégorie et **cherchable**
via la recherche globale. Les **catégories sont personnalisables** : bouton **« + Catégorie »** pour en
créer (nom + couleur), disponibles ensuite dans le formulaire et les filtres.

## Évolutions possibles

- Export / import des données (sauvegarde, transfert entre postes) ;
- Vraie authentification et base partagée (accès multi-utilisateurs synchronisé) ;
- Onglets Calendrier (compétitions) et Notes.
