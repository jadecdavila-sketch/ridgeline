# 04 · Styling & design system

**Keywords:** CSS, Tailwind v4, tokens, theme, `legacy-pipeline.css`, `legacy-scorecard.css`,
`.s-*` renames, `--amber`, collisions, Preflight, fonts, parity

## Purpose

Preserve the original prototype's exact look while making new views easy to build. The design
system is hand-written CSS with design tokens; Tailwind v4 is layered in for new work.

## Key files

- `src/styles/index.css` — the entry. Imports Tailwind, then both legacy stylesheets, then a
  `@theme` block mapping the prototype tokens into Tailwind.
- `src/styles/legacy-pipeline.css` — the pipeline + app-shell CSS, **extracted verbatim** from
  `legacy/ridgeline_pipeline.html`. Includes the shared `:root` tokens and reset.
- `src/styles/legacy-scorecard.css` — the scorecard CSS, extracted from the legacy scorecard,
  then **de-collided** from the pipeline (see below).

## How parity is guaranteed

The legacy CSS is imported **unlayered**. Tailwind v4 puts its base/Preflight in cascade
*layers*, and unlayered CSS outranks any layered CSS — so the ported rules always win over
Preflight. Net effect: ported pages render pixel-identical to the original; new components can
use Tailwind utilities (`bg-slate`, `text-teal`, `font-cond`) that the legacy CSS never targets.

Tokens live twice, on purpose: the legacy `:root { --slate … }` vars drive the ported markup,
and a `@theme { --color-slate … }` block generates Tailwind utilities. Keep them in sync if you
change a brand color.

## The collision problem (important)

The pipeline and scorecard were **separate HTML files** that independently defined some of the
same class names with **different** rules, plus a different `--amber`. Loaded together globally
they would silently break each other. Resolution in `legacy-scorecard.css`:

- `.lc` → `.s-lc`, `.chip` → `.s-chip`, `.foot` → `.s-foot` (renamed in CSS **and** scorecard
  markup). The shared shell classes (`.app`, `.side`, …) are identical, so they stay shared.
- The scorecard's `:root` token block and its unused standalone `.topbar`/`.brand`/`.crumb`
  rules were **removed** during extraction (they'd override the pipeline's).
- `--amber` differs between the two designs, so the scorecard's value is scoped:
  `.scard { --amber: #C98A2B }`. The scorecard page is wrapped in `.scard`.

So: scorecard markup must use `s-lc`/`s-chip`/`s-foot` and live under `.scard`. Pipeline markup
uses the originals.

## Fonts

Libre Caslon Text (serif display) + Barlow Semi Condensed (labels/caps), loaded from Google
Fonts in `index.html`. Body falls back to Calibri/Aptos/Segoe.

## Gotchas

- **Re-extracting CSS from `legacy/`** must re-apply the de-collision (the `.s-*` renames, the
  `:root`/standalone-topbar removals, the `--amber` scope). It is not a clean copy.
- Don't add a global `.lc`/`.chip`/`.foot` rule — it will hit whichever page you didn't intend.
- Tailwind v4 is wired via the `@tailwindcss/vite` plugin (no `tailwind.config.js`,
  no PostCSS file). Theme is CSS-first in `index.css`.

## Consumed by

Everything. Both stylesheets are global. The token `@theme` feeds any future Tailwind UI.

_Last reviewed: 2026-06-05_
