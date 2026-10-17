# Hiba Altaf — personal website

A responsive, monochrome portfolio built with React 19 and Vite. Three static entry pages work directly on GitHub Pages, including repository subpaths. CSS provides a subtle page entrance and link hover effect. Reduced-motion preferences are respected.

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
- `public/portrait.jpg`: supplied portrait, displayed in grayscale with CSS.
- `public/Hiba-Altaf-Resume.pdf`: supplied résumé.
- `index.html`, `experience.html`, `projects.html`: per-page metadata.

## Content notes

Facts come from the supplied October 2026 résumé, the user's leadership descriptions, and linked public GitHub profiles/repositories. Vaylo screenshots come from the official Vaylo website. The SUITS demo was supplied by Hiba.

- Vaylo links to its live website and App Store listing.
- WiCS and CSI leadership titles are confirmed by Hiba; WiCS links to the website she built.
- CodeCure repository is linked from Hiba's public GitHub profile. It could not be fetched during preparation; visitors may need repository access.
- SUITS links to the public 2025 repository from Hiba's GitHub profile; the Magic Leap 2 project description comes from the résumé.
- SaferMaps description and technology stack are based on its public README: https://github.com/hibaa8/saferMaps.

The website uses the repository’s existing GitHub Pages deployment.

The CSI project includes the supplied demo video, optimized for playback, and an expandable summary of the 2026 proposal. Proposed work is explicitly identified. The full proposal is not included in the public site.
