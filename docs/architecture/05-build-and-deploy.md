# 05 · Build & deploy

**Keywords:** Vite, TypeScript, GitHub Actions, Pages, base path, HashRouter, `legacy/`,
dev server, port 5174, npm

## Purpose

How the app builds, runs locally, and ships to GitHub Pages.

## Stack

- **Vite 6** + `@vitejs/plugin-react` + `@tailwindcss/vite`. Config: `vite.config.ts`
  (`base: './'`, relative so assets resolve under the Pages project path).
- **React 19** + **react-router-dom 7** (HashRouter).
- **TypeScript** (`tsconfig.json`, `strict`, `noEmit` — Vite transpiles; `tsc` only type-checks).

## Scripts (`package.json`)

- `npm run dev` — Vite dev server. **Note:** port `5173` is frequently taken by another local
  project, so Vite usually lands on **`5174`**. Check the printed URL.
- `npm run build` — `tsc --noEmit && vite build` → `dist/`.
- `npm run preview` — serve the built `dist/`.

## Deploy

- `.github/workflows/deploy.yml` runs on push to `main`: `npm ci` → `npm run build` →
  `actions/upload-pages-artifact` (`dist`) → `actions/deploy-pages`. It self-enables Pages
  (`actions/configure-pages` with `enablement: true`).
- Pages **source is "GitHub Actions"** (`build_type: workflow`), not branch-based. Set once via
  the API; if it ever reverts to the legacy branch builder, two deploys race — switch it back.
- Live URL: https://jadecdavila-sketch.github.io/ridgeline/

## Local verification (the standing rule: test before pushing)

Headless-render routes against the dev server and assert DOM + no console errors, e.g.:

```
"$CHROME" --headless=new --dump-dom --virtual-time-budget=7000 \
  "http://localhost:5174/#/deal/cardinal"
```

Curl alone is insufficient — it returns the empty SPA shell (client renders the content).

## Repo layout notes

- `legacy/` — the original hand-built HTML prototype (pipeline + Cardinal + Cypress scorecards
  + redirect). **Reference only**, not built or served; the source of truth for verbatim CSS
  and the two flagship scorecards' content.
- `dist/`, `node_modules/` are gitignored.

## Gotchas

- **HashRouter is load-bearing for the deploy.** It avoids server-side SPA fallback on Pages.
  Switching to clean URLs means adding a `404.html` redirect trick (and dropping `base: './'`
  in favor of an absolute base).
- The workflow's actions emit a Node-20-deprecation **warning** (harmless until mid-2026);
  bump action majors when convenient.
- `git add -A` will also stage stray, unrelated files that sometimes appear in the working dir
  (e.g. `.claude/`, top-level `CLAUDE.md`, `docs/Council/`). Stage scorecard/app files
  explicitly, or confirm `git status` before committing.

_Last reviewed: 2026-06-05_
