# FLC Esport — Site de reporting interne

Espace interne (privé) pour donner à la **direction** une lecture claire de l'activité esport.

Design **sombre avec accent doré**, navigation en **barre supérieure** :
`Dashboard · Fortnite · FIFA · Delta Force · Besoins · Rapport · Calendrier · Notes`.

Dans la barre du haut : **recherche globale** (🔍), **centre d'alertes** (🔔), export/import et déconnexion.

### Centre d'alertes (🔔)

La cloche agrège tout ce qui demande l'attention du directeur, tous pôles confondus :
points **en retard**, objectifs **à échéance / dépassés**, blocages & problèmes **ouverts depuis
longtemps**, besoins **à cadrer** ou **à remonter**, **actions de réunion** non faites. Une pastille
indique le nombre ; un clic sur une alerte ouvre le pôle concerné.

### Recherche globale (🔍)

Cherche dans **tout le site** (staff, besoins, comptes-rendus, résultats, objectifs, suivi,
évènements). Les résultats sont groupés par type et cliquables.

### Calendrier

Agenda **tous pôles** : compétitions, bootcamps, réunions, échéances… séparés en « À venir » et
« Passés ». Chaque évènement a un type et un pôle (ou « tous »).

---

## Ouvrir le site & se connecter

Double-cliquez sur `index.html`. Connexion par **identifiant + code PIN** (4 à 6 chiffres).
Compte par défaut : **`shayex` / PIN `0000`** (Directeur, Admin) — à **changer à la première connexion**.

## Comptes & rôles

Les administrateurs voient un onglet **Comptes** (masqué pour les autres) pour **créer / modifier /
supprimer** des comptes et attribuer un **rôle** : CEO, CO-CEO, Directeur, Manager — avec une
option **Administrateur** (droit de gérer les comptes).

**Code PIN & première connexion** : l'admin fixe un **PIN initial** à la création. À sa première
connexion (ou après un reset du PIN par l'admin), la personne doit **définir son propre PIN** avant
d'accéder au site. Les comptes concernés affichent un repère « PIN à changer » dans la liste.

> ⚠️ **Sécurité** : comptes et données vivent **dans le navigateur** (localStorage). C'est un système
> fonctionnel de rôles, **pas un contrôle d'accès serveur** — pour un vrai partage sécurisé entre
> plusieurs personnes, il faut héberger l'application avec une base et une authentification réelles.

## Sauvegarde (export / import)

Deux boutons dans la barre du haut : **Exporter** télécharge un fichier `.json` contenant toutes les
données (pôles + transversal), **Importer** restaure une sauvegarde. Pratique pour sauvegarder ou
transférer les données sur un autre poste.

## Structure

Un seul fichier : `index.html` (HTML + CSS + JavaScript). Aucune installation.
Les données sont enregistrées **dans le navigateur** (localStorage : `flc-poles-v1`, `flc-org-v1`,
`flc-users-v1`).

## Onglets

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

### Rapport — reporting & lisibilité (mission 03)

Synthèse consolidée de tous les pôles, pensée pour la direction :
- **Indicateurs clés** (KPIs) calculés automatiquement : pôles, points tenus, objectifs atteints,
  compétitions, victoires/podiums, blocages ouverts, besoins à remonter, budget estimé ;
- **Par pôle** : cadence, objectifs en cours, blocages, besoins à remonter et derniers résultats ;
- **À remonter à la direction** : la synthèse des besoins prioritaires ;
- Bouton **Imprimer / PDF** : le rapport bascule en version claire (sans la navigation) pour
  être imprimé ou enregistré en PDF et présenté en réunion.

Les **résultats de compétition** (date, compétition, classement, issue) se saisissent dans chaque
onglet-pôle (section « Résultats récents ») et alimentent ce rapport.

### Besoins — cadrage & arbitrage (mission 02)

Vue d'ensemble de **tous les besoins des 3 pôles** au même endroit :
- **Récap budget** : nombre de besoins, nombre à remonter, **budget estimé total** et part validée ;
- **Filtres** par pôle et par statut d'arbitrage ;
- chaque besoin porte un **coût estimé (€)** et un statut d'**arbitrage** (À cadrer → Cadré →
  Validé / Refusé), éditable directement depuis cette vue ou depuis l'onglet du pôle. Les besoins
  « validé »/« refusé » sortent automatiquement des remontées à la direction.

### Fortnite / FIFA / Delta Force — un espace par pôle

Les trois pôles partagent le **même moteur**. Chaque pôle contient, tout éditable directement :
- **En-tête récap** — manager & contact, rythme des points, dernier point, **prochain point calculé**
  avec badge de cadence, compteurs blocages/avancées. Bouton **Paramètres** (manager, contact, rythme) ;
- **Objectifs du pôle** — intitulé, échéance, statut (En cours / Atteint / Abandonné) ;
- **Résultats récents** — résultats de compétition (date, compétition, classement, issue) ;
- **Staff de la section** — membres (nom, rôle, notes) + champ **Avis / appréciation** ;
- **Comptes-rendus de réunions** — date, thème, participants, compte-rendu, + **actions à suivre cochables** ;
- **Avancées, blocages & problèmes** — type + statut (Ouvert / En cours / Résolu), filtrables,
  avec des **notes d'avancement** datées par sujet. Une pastille sur l'onglet indique le nombre de
  blocages/problèmes non résolus ;
- **Besoins du pôle** — type (staff/matériel/budget), priorité, **coût estimé**, statut
  d'**arbitrage** et case **« à remonter à la direction »** (alimentent l'onglet Besoins et le Dashboard).

### Calendrier / Notes

À construire.

## Évolutions possibles

- Export / import des données (sauvegarde, transfert entre postes) ;
- Vraie authentification et base partagée (accès multi-utilisateurs synchronisé) ;
- Onglets Calendrier (compétitions) et Notes.
