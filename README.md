# Ridgeline

A clickable prototype for **Ridgeline**, a deal-intelligence product for private equity. The moment a CIM lands, an opportunity is scored against the firm's own framework and its history of realized deals — so the first-pass read is done before a partner opens it.

**Live demo:** https://jadecdavila-sketch.github.io/ridgeline/

> Illustrative prototype on representative data. All companies, figures, and AI reads shown are fictional. Only the **Pipeline** and **Deal Scoring** surfaces are built; the rest of the navigation indicates where the product grows.

## Pages

| Page | Description |
| --- | --- |
| [`index.html`](index.html) | Redirects to the pipeline (the entry point). |
| [`ridgeline_pipeline.html`](ridgeline_pipeline.html) | Pipeline of scored deals with an AI briefing, verdicts (Pursue / Selective / Pass), and an "ask the pipeline" bar that filters to the deals a question is about. |
| [`ridgeline_scorecard_cardinal.html`](ridgeline_scorecard_cardinal.html) | Deal scorecard — **Cardinal Specialty Pharmacy** (Pursue, 8/10, A− asset, in lane). |
| [`ridgeline_scorecard_cypress.html`](ridgeline_scorecard_cypress.html) | Deal scorecard — **Cypress Dental Partners** (Pursue with discipline, 7/10, B+ asset, out of lane). |

## The scorecard

Deals are scored 1–10 against the REP healthcare framework, with asset quality (a letter grade) and price held on separate tracks against a walk-away ceiling. Each deal drill-in is built around:

1. **Verdict band** — verdict, REP score (/10), asset-quality grade, and entry multiple, with a two-track quality-vs-price read.
2. **The read** — five axes (sector & model fit / "in lane?", protected downside, asset quality vs price, value creation, management & data), each with expandable citations tagged by source (CIM, public data, deal data, QoE, IC memo).
3. **Hard-pass screen** — any single trigger (out-of-network model, single-customer concentration over 30%, EBITDA outside the band, no credible value-add path) short-circuits the score to an automatic 1–2.
4. **Comparison to the firm's own realized returns** — the moat: matched on sub-sector, size, and entry multiple.
5. **Surfaced for your judgment** — where the engine deliberately stops and hands off to the partner.
6. **Banker questions** to walk into the call with.
7. **Decision record** — log the call and reasoning.
8. **Ridgeline AI** — a slide-in chat drawer grounded in that deal's score, evidence, and comparables.

## Running locally

Static HTML with no build step or dependencies. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

Hosted on GitHub Pages from `main` (root). Any push to `main` rebuilds the site automatically.
