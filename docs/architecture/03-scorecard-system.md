# 03 · Scorecard system

**Keywords:** scorecard, hero, verdict, axes, five-axis read, citations, evidence, gates,
comparables, judgment, banker questions, decision record, reveal animation, frosted, AI chat,
`ScorecardData`, `<Scorecard>`, `useSectionReveal`

## Purpose

The deal drill-in at `/deal/:id`: verdict hero, a five-axis read with inline citations that
unfold sourced evidence, hard-pass gates, a comparables table against the firm's record,
partner-judgment items, banker questions, a decision-record control, and a grounded AI chat
drawer — all with a frosted slide-down reveal on scroll.

## Key files

- `src/pages/ScorecardPage.tsx` — looks up the deal in the registry, wraps everything in
  `<div className="scard">` (topbar2 breadcrumb + `.wrap` body + chat), calls
  `useSectionReveal(id)`. Unknown id → a small "not yet ported" stub.
- `src/data/scorecards.tsx` — the **registry** (`id → { crumbName, Body, chat }`).
  `fromData(d)` turns a `ScorecardData` into an entry rendering `<Scorecard data={d}>`.
- `src/data/scorecardTypes.ts` — `ScorecardData` and its segment types (`ReadSeg`, `SnipSeg`).
- `src/components/scorecard/Scorecard.tsx` — the **generic data-driven renderer**.
- `src/components/scorecard/{CardinalScorecard,CypressScorecard}.tsx` — two **bespoke**
  components (the original verbatim port).
- `src/components/scorecard/evidence.tsx` — `EvidenceProvider` (accordion state, click-away),
  `Cite`, `Evidence`, `HL`.
- `src/components/scorecard/DecisionRecord.tsx` — segmented verdict + note + "log" (mock).
- `src/components/chat/RidgelineAI.tsx` — the launch button + slide-in drawer; data-driven Q&A.
- `src/hooks/useSectionReveal.ts` — the frosted reveal (see Gotchas).
- `src/data/scorecards/*.ts` — one `ScorecardData` per data-driven deal (meridian, halcyon,
  vantage, orchard, sterling, beacon, granite).

## The data model

`ScorecardData` captures one deal's entire card. Prose with inline citations is modeled as
**segment arrays**: `ReadSeg = string | {cite,tag,label} | {b}` and
`SnipSeg = string | {hl}`. `<Scorecard>` interleaves text, `<Cite>` buttons, `<b>`, and `<HL>`
spans. Adding a deal = one data file + one registry line. See any file in `src/data/scorecards/`
as the template.

## Citations → evidence

`EvidenceProvider` holds a single "open evidence id" (accordion: one open at a time;
document-click closes). A `<Cite id tag>` button toggles its matching `<Evidence id>` card,
which renders after the axis prose. The renderer wires these by `id`, so **citation ids must be
unique within a card** (`e-lane`, `e-down`, `e-qp`, `e-vc`, `e-mgmt2`, `e-gate`, `e-moat` are
the conventional ones).

## Gotchas

- **Two patterns coexist.** Cardinal & Cypress are bespoke components (the initial port);
  the other 7 are data via `<Scorecard>`. Both emit identical markup/classes, so they look the
  same. Migrating the two flagships to `ScorecardData` is clean tech-debt — do it when touching
  their content, and verify pixel parity.
- **The reveal uses `document.body` classes.** `useSectionReveal` adds `folding`/`anim` to
  `<body>` and toggles `in` on `.hero`/`.sec`; the frosted CSS keys off `body.folding .sec::before`.
  The hook **removes those classes on unmount** — do not skip the cleanup, or the pipeline
  inherits scorecard animation state. First `.sec` is snapped open on load; the rest fold in at
  ~72% up the viewport (`rootMargin: 0px 0px -28% 0px`). Honors `prefers-reduced-motion`.
- **Scorecard CSS is scoped/renamed**, not global-identical to the pipeline — see
  [04](04-styling-and-design-system.md). In scorecard markup use `s-lc` / `s-chip` / `s-foot`
  (not `lc`/`chip`/`foot`), and wrap the page in `.scard` (the `--amber` scope).
- **Pass deals** show a tripped gate as a `watch` (amber) gate — there is no red "tripped"
  gate style; amber is the strongest the CSS carries. Verdict pills only have a green `.go`
  variant (Pursue); Selective/Pass render the default blue pill, so the **score** carries the
  Pass signal, not the pill color.
- Chat answers are HTML strings (they embed `<div class="src-tags">` chips) rendered via
  `dangerouslySetInnerHTML`. Static content only.
- Scorecard content (score, grade, entry, in/out-of-lane) is authored to match the deal's
  pipeline row — keep them in sync ([02](02-pipeline.md)).

## Consumed by

ScorecardPage. The registry is the single entry point; PipelinePage links here by `id`.

_Last reviewed: 2026-06-05_
