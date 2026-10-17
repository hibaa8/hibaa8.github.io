# Hiba Altaf — personal website

A responsive, monochrome portfolio built with React 19 and Vite. Five static entry pages work directly on GitHub Pages, including repository subpaths. IntersectionObserver and CSS provide subtle scroll entrances and link hover effects. Reduced-motion preferences are respected.

## Run locally

Requires Node.js 22 or later.

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deployment

Live site: https://hibaa8.github.io/

Source lives on `master`. The existing GitHub Pages configuration serves the compiled website from `gh-pages`. Run `npm ci` and `npm run build`, then commit the contents of `dist/` to the `gh-pages` branch. Preserve that branch's history and any custom-domain CNAME file. The source and deployment branches are deliberately separate.

## Edit content

- `src/main.jsx`: biography, experience, leadership, projects, contact links.
- `src/styles.css`: responsive design and animations.
- `public/portrait.jpg`: supplied portrait, displayed in its original color.
- `public/Hiba-Altaf-Resume.pdf`: supplied résumé.
- `index.html`, `experience.html`, `projects.html`: per-page metadata.

## Content notes

Facts come from the supplied October 2026 résumé, the user's leadership descriptions, and linked public GitHub profiles/repositories. Vaylo screenshots come from the official Vaylo website. The SUITS demo was supplied by Hiba.

- Vaylo links to its live website and App Store listing.
- WiCS and CSI leadership titles are confirmed by Hiba; WiCS links to the website she built.
- CodeCure repository is linked from Hiba's public GitHub profile. It could not be fetched during preparation; visitors may need repository access.
- SUITS links to the 2026 Magic Leap repository provided by Hiba; the Magic Leap 2 project description comes from the résumé.
- SaferMaps description and technology stack are based on its public README: https://github.com/hibaa8/saferMaps.

The website uses the repository’s existing GitHub Pages deployment.

The CSI project includes the supplied demo video, optimized for playback, and a direct PDF link to the 2026 proposal. Proposed work is explicitly identified. The full supplied proposal is available as `public/SUITS-2026-Proposal.pdf`, linked from the CSI project.

## Vaylo case study

`vaylo.html` is linked from Projects, without a navigation tab. `src/Vaylo.jsx` contains five feature demos, a high-level architecture overview, and Hiba-confirmed traction of around 50 users. Development is paused pending funding to restart the app and support a wider launch. The Projects page also includes two YouTube side projects.
