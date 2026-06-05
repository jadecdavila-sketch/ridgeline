# 02 · Pipeline

**Keywords:** queue, deal rows, briefing, stats, filter chips, ask bar, promote, verdict, `deals.ts`

## Purpose

The landing page: every scored opportunity in one queue, an AI "today's read" briefing, a
stats strip, verdict filters, and a (scripted) ask bar. Renders entirely from data.

## Key files

- `src/pages/PipelinePage.tsx` — the whole page + its interactions.
- `src/data/deals.ts` — `deals: Deal[]` (the 9 rows, in display order) and `pipelineMeta`
  (briefing HTML, stats, focus pill, and the 4 scripted ask-chip answers). `dealById(id)`.
- `src/data/types.ts` — `Deal`, `Verdict` (`pursue|selective|pass`), `Signal`/`SignalKind`,
  `PipelineMeta`, `Suggest`.

## Behavior (all local React state, mirrors the legacy JS)

- **Filter chips** (All / Pursue / Selective / Pass) filter the queue by verdict.
- **Ask chips** (`pipelineMeta.suggests`) enter "ask mode": they promote matching deals
  (`keys`) to the top, show a scripted answer panel, and clear the active filter. `Clear`
  resets to All. Filter mode and ask mode are mutually exclusive.
- **Typing + Enter** in the ask bar shows a fixed "prototype answers the examples" note.
- **Clicking a row** → `navigate('/deal/:id')`. All 9 rows are navigable (every deal now has
  a scorecard).
- Verdict, score (`/10`), the signal pill (`s-mem|urg|gate|fit|conf`), and "fresh" tag all
  come from the `Deal` object.

## Gotchas

- `Deal.hasScorecard` is now **vestigial** — every row navigates regardless. Kept on the type
  for clarity; safe to remove once nothing reads it.
- Briefing, ask answers, and the row reasons are **HTML strings** rendered via
  `dangerouslySetInnerHTML` (they contain `<b>`). Content is static/fictional, not user input.
- The pipeline's `/10` scores and "in-lane / out-of-lane" framing must stay consistent with
  each deal's scorecard (see [03](03-scorecard-system.md)). They were authored together; if you
  change a verdict/score here, change it on the scorecard too.

## Consumed by

`deals.ts` is read by PipelinePage and by ScorecardPage's fallback stub. The scorecard
*content* lives separately (see [03](03-scorecard-system.md)); only `dealById` is shared.

_Last reviewed: 2026-06-05_
