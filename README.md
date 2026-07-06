# FLC Esport — Site de reporting interne

Espace interne (privé) pour donner à la **direction** une lecture claire de l'activité esport.

Design **sombre avec accent doré**, navigation en **barre supérieure** :
`Dashboard · Fortnite · FIFA · Delta Force · Besoins · Calendrier · Notes`.

---

## Ouvrir le site

Double-cliquez sur `index.html`. Mot de passe par défaut : **`flc-esport`**
(modifiable dans `index.html`, variable `MOT_DE_PASSE`).

## Structure

Un seul fichier : `index.html` (HTML + CSS + JavaScript). Aucune installation.
Les données sont enregistrées **dans le navigateur** (localStorage, clé `flc-poles-v1`).
Pensez à sauvegarder si besoin (voir « Évolutions »).

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
