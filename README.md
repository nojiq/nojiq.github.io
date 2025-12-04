# Neoziq Portfolio (GitHub Pages root)

Single-page portfolio powered by React + Vite, themed around a retro JRPG adventure.

Live URL (after Pages enabled): https://nojiq.github.io/

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts on `http://localhost:5173` by default.

## Deployment (GitHub Pages)

Configured for the user site root; Vite `base` is set to `/`.

- Manual: `npm run deploy` (builds to `dist` and publishes to `gh-pages`).
- Automatic: workflow `.github/workflows/deploy.yml` deploys on every push to `main`.
- In GitHub → Settings → Pages, set source to the `gh-pages` branch.

## Customize

- `src/App.jsx`: Update hero copy, skill list, and project links.
- `src/components/Chibi.jsx`: Swap the pixel sprite or adjust colors in the `palette` map.
- `src/index.css` / `src/App.css`: Tweak color variables or layout.

### Fonts

Currently pulls `VT323` (body) and `Zen Dots` (headings) from Google Fonts. For self-hosting, drop font files into `src/assets/fonts` and add `@font-face` in `src/index.css`.
