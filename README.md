# FLC Esport — Site de reporting interne

Site interne (privé) qui donne à la **direction** une lecture claire de l'activité esport,
structuré autour du rôle de **Directeur Esport — le pivot** :

1. **Suivi des pôles** — coordination transversale (points réguliers, avancées, blocages)
2. **Besoins & arbitrage** — cadrage des manques (staff, matériel, budget) avant remontée
3. **Données & reporting** — résultats et indicateurs consolidés, en une lecture exploitable

Le tout est contenu dans **un seul fichier** : `index.html`. Aucune installation requise.

---

## Ouvrir le site

Double-cliquez sur `index.html` — il s'ouvre dans le navigateur.
Mot de passe par défaut : **`flc-esport`**.

## Mettre à jour les données

Ouvrez `index.html` avec un éditeur de texte (ou VS Code) et modifiez **uniquement l'objet
`DATA`** en haut de la balise `<script>`. Tout le reste se met à jour automatiquement.

- `poles` — un pôle par jeu : `statut` = `"a-jour"`, `"attention"` ou `"bloque"`
- `besoins` — `type` = `"staff" | "materiel" | "budget"`, `priorite` = `"haute" | "moyenne" | "basse"`,
  `statut` = `"nouveau" | "cadre" | "remonte" | "traite"`, `aRemonter` = `true`/`false`
- `resultats` — `forme` de 0 à 100, `tendance` = `"up" | "down" | "flat"`
- `indicateurs` — libellé + valeur libres
- `motDePasse` — changez-le ici

## Changer le mot de passe

Dans `DATA`, modifiez la ligne `motDePasse: "flc-esport"`.

> ⚠️ **Sécurité** — Ce mot de passe est une protection *légère* côté navigateur : il empêche
> l'accès occasionnel mais n'est pas un vrai contrôle d'accès (le code est lisible). Pour un
> usage réellement confidentiel, hébergez le site derrière une authentification serveur
> (voir ci-dessous) et ne stockez pas de données sensibles en clair dans le fichier.

## Héberger en privé

Quelques options, de la plus simple à la plus robuste :

- **Partage de fichier interne** — déposez `index.html` sur un espace partagé (Drive, réseau
  d'entreprise) accessible seulement à la direction.
- **Netlify / Vercel / GitHub Pages** avec protection par mot de passe ou accès restreint.
- **Hébergement avec authentification serveur** (recommandé pour du confidentiel) — reverse
  proxy avec login, ou passage à une vraie application (backend + comptes) si le besoin grandit.

---

## Évolutions possibles

- Vraie authentification et comptes utilisateurs (direction / managers)
- Édition des données depuis l'interface (au lieu du fichier) + base de données
- Historique et graphiques d'évolution par pôle
- Export PDF du reporting pour les réunions de direction
