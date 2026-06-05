# Ridgeline · Architecture Index

Ridgeline is an **illustrative prototype** of a private-equity deal-intelligence product
("Deal Assistant"). A healthcare investor sees new opportunities auto-scored against the
firm's framework (REP Healthcare Investment Framework) the moment a CIM lands, then drills
into a full scorecard with cited evidence and a grounded AI chat.

It is a **client-only React SPA** (Vite + React 19 + TypeScript + React Router), deployed
as a static site to GitHub Pages. There is no backend; all deal content is fictional data
in the repo. The original hand-built HTML prototype lives in `legacy/` for reference.

**Live:** https://jadecdavila-sketch.github.io/ridgeline/

---

## How to read these docs

`INDEX.md` is the router. Match your task against the **Keywords** of each system, then read
the 1–2 relevant sub-docs in full (especially their **Gotchas**). You rarely need all of them.

| System | Sub-doc | Keywords |
|---|---|---|
| App shell & routing | [01-app-shell-and-routing.md](01-app-shell-and-routing.md) | sidebar, topbar, collapse, HashRouter, AppShell, Outlet, pages, nav |
| Pipeline | [02-pipeline.md](02-pipeline.md) | queue, deal rows, briefing, stats, filter chips, ask bar, promote, `deals.ts` |
| Scorecard system | [03-scorecard-system.md](03-scorecard-system.md) | scorecard, hero, axes, citations, evidence, gates, comparables, decision record, reveal animation, AI chat, `ScorecardData`, `<Scorecard>` |
| Styling & design system | [04-styling-and-design-system.md](04-styling-and-design-system.md) | CSS, Tailwind v4, tokens, `legacy-*.css`, `.s-*` renames, `--amber`, collisions, fonts |
| Build & deploy | [05-build-and-deploy.md](05-build-and-deploy.md) | Vite, GitHub Actions, Pages, base path, HashRouter, `legacy/`, dev server port |

---

## System map (data flow)

```
src/data/deals.ts ─────────────► PipelinePage (queue, briefing, stats, ask)
   (9 deals, summary)                 │  click a row → navigate(/deal/:id)
                                       ▼
src/data/scorecards.tsx (registry) ─► ScorecardPage (/deal/:id)
   ├─ cypress / cardinal: bespoke <CypressScorecard>/<CardinalScorecard> (verbatim port)
   └─ 7 others: fromData() → <Scorecard data={ScorecardData}>  (data-driven)
        renders: hero · five-axis read (Cite→Evidence) · gates · comparables
                 · judgment · banker questions · DecisionRecord · RidgelineAI chat
        + useSectionReveal() drives the frosted slide-down on scroll
```

## Conventions

- **Pixel parity over rewrites.** The look comes from the original prototype's CSS, ported
  verbatim into `src/styles/legacy-*.css`. New views use Tailwind utilities; ported views
  keep their CSS. See [04](04-styling-and-design-system.md).
- **Deals are data.** Adding a deal is a data object, not a new component — except the two
  flagship cards, still bespoke (see [03](03-scorecard-system.md) → Gotchas).
- **Verify locally before pushing.** Headless-render routes on the dev server (`:5174`,
  because `:5173` is often taken) and confirm DOM + no console errors. See [05](05-build-and-deploy.md).

_Last reviewed: 2026-06-05_
