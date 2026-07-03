# FLC Esport — Site de reporting interne

Site interne (privé) qui donne à la **direction** une lecture claire de l'activité esport,
structuré autour du rôle de **Directeur Esport — le pivot** :

1. **Suivi des pôles** — coordination transversale (points réguliers, avancées, blocages)
2. **Besoins & arbitrage** — cadrage des manques (staff, matériel, budget) avant remontée
3. **Données & reporting** — résultats et indicateurs consolidés, en une lecture exploitable

En complément : un **Calendrier des compétitions** à venir et un **Historique** des résultats passés.

Le tout tient dans **un seul fichier** : `index.html`. Aucune installation requise.

---

## Ouvrir le site

Double-cliquez sur `index.html` — il s'ouvre dans le navigateur.
Mot de passe par défaut : **`flc-esport`**.

## Modifier les données directement sur le site ✨

Plus besoin d'éditer le code : cliquez sur **« ✎ Mode édition »** (en haut à droite).

- Chaque section affiche alors un bouton **« + Ajouter »** et, sur chaque élément, une icône
  **✎ (modifier)** et **🗑 (supprimer)**.
- Un formulaire s'ouvre pour saisir/mettre à jour les informations (pôles, besoins, résultats,
  indicateurs, compétitions à venir, historique).
- Le bouton **« Paramètres »** permet de changer le nom, la saison et le mot de passe.
- Les modifications sont **enregistrées automatiquement dans votre navigateur** (localStorage).

### Sauvegarder / transférer vos données

Les données sont stockées dans le navigateur du poste utilisé. Pour les **sauvegarder** ou les
**retrouver sur un autre ordinateur** :

- **Exporter** (barre latérale) → télécharge un fichier `flc-esport-donnees.json`.
- **Importer** → recharge un fichier précédemment exporté.
- **Réinitialiser** (visible en mode édition) → revient aux données d'exemple.

> 💡 Prenez l'habitude d'**Exporter** régulièrement pour garder une sauvegarde.

## Changer le mot de passe

Via **Paramètres** en mode édition, ou en modifiant `motDePasse` dans l'objet `DEFAULTS`
en haut de la balise `<script>` du fichier.

> ⚠️ **Sécurité** — Ce mot de passe est une protection *légère* côté navigateur : il empêche
> l'accès occasionnel mais n'est pas un vrai contrôle d'accès (le code reste lisible). Pour un
> usage réellement confidentiel, hébergez le site derrière une authentification serveur et ne
> stockez pas de données sensibles en clair.

## Héberger en privé

- **Partage interne** — déposez `index.html` sur un espace partagé (Drive, réseau d'entreprise)
  accessible seulement à la direction.
- **Netlify / Vercel / GitHub Pages** avec protection par mot de passe ou accès restreint.
- **Hébergement avec authentification serveur** (recommandé pour du confidentiel).

---

## Sous le capot

- **Données par défaut** : objet `DEFAULTS` en haut du `<script>` (données d'exemple à remplacer).
- **Rendu** piloté par les données ; le **mode édition** est généré à partir de schémas de
  formulaires (`SCHEMAS`) — pour ajouter un champ, il suffit de compléter le schéma concerné.
- **Persistance** : `localStorage` (clé `flc-esport-data-v1`).

## Évolutions possibles

- Vraie authentification et comptes utilisateurs (direction / managers)
- Base de données partagée (au lieu du stockage navigateur) pour un accès multi-postes synchronisé
- Graphiques d'évolution par pôle et export PDF du reporting pour les réunions de direction
