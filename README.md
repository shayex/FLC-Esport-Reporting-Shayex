# FLC Esport — Site de reporting interne

Espace interne (privé) pour donner à la **direction** une lecture claire de l'activité esport.

Design **sombre avec accent doré**, navigation en **barre supérieure** :
`Dashboard · Fortnite · FIFA · Delta Force · Calendrier · Notes`.

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
- **Points de vigilance** : tous les blocages et problèmes en cours, tous pôles confondus.

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
- **Besoins du pôle** — type (staff/matériel/budget), priorité, statut et case
  **« à remonter à la direction »** (alimente le Dashboard).

### Calendrier / Notes

À construire.

## Évolutions possibles

- Export / import des données (sauvegarde, transfert entre postes) ;
- Vraie authentification et base partagée (accès multi-utilisateurs synchronisé) ;
- Onglets Calendrier (compétitions) et Notes.
