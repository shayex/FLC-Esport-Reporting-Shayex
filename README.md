# FLC Esport — Site de reporting interne

Espace interne (privé) pour donner à la **direction** une lecture claire de l'activité esport.

Design **sombre avec accent doré**, navigation en **barre supérieure** :
`Dashboard · Roster · Données · Calendrier · Scouting · Notes`.

Le site est construit **pas à pas**. Pour l'instant :
- accès par mot de passe ;
- **Dashboard** : rappel du rôle (« le pivot ») et des 3 missions ;
- **Fortnite** : premier pôle construit (voir ci-dessous) ;
- les autres onglets sont en place mais affichent un écran « section à construire ».

### Onglet Fortnite

Espace de travail du pôle, avec ajout/modification/suppression directs (sauvegarde
automatique dans le navigateur) :
- **Staff de la section** — membres du pôle (nom, rôle, notes) ;
- **Comptes-rendus de réunions** — date, thème, participants et compte-rendu ;
- **Avancées, blocages & problèmes** — chaque entrée a un type (avancée / blocage /
  problème) et un statut (ouvert / en cours / résolu) ; filtrable par type. Le nombre de
  blocages et problèmes non résolus s'affiche en pastille sur l'onglet.
  Chaque sujet peut recevoir des **notes d'avancement** datées (état, choses en cours),
  pour suivre son évolution dans le temps.

---

## Ouvrir le site

Double-cliquez sur `index.html`. Mot de passe par défaut : **`flc-esport`**
(modifiable dans `index.html`, variable `MOT_DE_PASSE`).

## Structure

Un seul fichier : `index.html` (HTML + CSS + un peu de JavaScript). Aucune installation.

## Onglets prévus

| Onglet | Contenu |
|---|---|
| **Dashboard** | Vue d'ensemble de l'organisation ✅ (base) |
| **Fortnite** | Pôle : staff, comptes-rendus, suivi ✅ |
| **Calendrier** | Compétitions à venir et passées (à construire) |
| **Notes** | Comptes-rendus et informations (à construire) |

> On avance brique par brique : dites quel onglet construire, et on l'ajoute.
