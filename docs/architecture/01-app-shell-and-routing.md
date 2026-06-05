# 01 · App shell & routing

**Keywords:** sidebar, topbar, collapse, HashRouter, AppShell, Outlet, pages, nav, brand mark

## Purpose

The persistent frame around every page: a collapsible left nav rail and a main content column.
Client-side routing maps URLs to the two real pages (Pipeline, Scorecard).

## Key files

- `src/App.tsx` — `<HashRouter>` with a layout route. `AppShell` wraps `/` (PipelinePage) and
  `/deal/:id` (ScorecardPage); unknown paths redirect to `/`.
- `src/components/shell/AppShell.tsx` — holds the `collapsed` state, renders `<Sidebar>` + a
  `<main className="main"><Outlet/></main>`. Starts **collapsed** (matches the prototype).
- `src/components/shell/Sidebar.tsx` — the nav rail. Mostly static placeholder items; only
  Pipeline / Deal Scoring are "live". The **"R" brand mark is the collapse toggle**
  (`role="button"`, Enter/Space handled) — there is no separate hamburger button.
- `src/components/icons.tsx` — shared `Spark` and `SignalIcon` SVGs (styled by CSS).

## Public interface

- Routes: `/` → Pipeline, `/deal/:id` → Scorecard. Both rendered inside `AppShell`'s `Outlet`.
- Each **page renders its own topbar** (Pipeline uses `.topbar` + ask bar; Scorecard uses
  `.topbar2` + breadcrumb). The shell only owns the sidebar + main column.

## Gotchas

- **Routing is `HashRouter`, not `BrowserRouter`.** URLs look like `…/#/deal/cypress`. This is
  deliberate so the static GitHub Pages deploy needs no server rewrites and never 404s on
  refresh/deep-link. Changing to `BrowserRouter` requires a Pages SPA-fallback (`404.html`).
- The sidebar `collapsed` state lives in `AppShell` and is **not persisted** — every load
  starts collapsed.
- Sidebar nav items (Watchlist, Scored deals, Diligence Agent, Platform tools) are
  intentionally inert placeholders. Building any of them out is a new page + route here.

## Consumed by

Every page. Changing the shell or route table affects Pipeline and Scorecard equally.

_Last reviewed: 2026-06-05_
