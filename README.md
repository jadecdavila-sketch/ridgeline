# Ridgeline

A clickable prototype for **Ridgeline**, a deal-intelligence product for private equity. The moment a CIM lands, an opportunity is scored against the firm's own framework and its history of realized deals — so the first-pass read is done before a partner opens it.

**Live demo:** https://jadecdavila-sketch.github.io/ridgeline/

> Illustrative prototype on representative data. All companies, figures, and AI reads shown are fictional. Only the **Pipeline** and **Deal Scoring** surfaces are built; the rest of the navigation indicates where the product grows.

## Pages

| Page | Description |
| --- | --- |
| [`index.html`](index.html) | Redirects to the pipeline (the entry point). |
| [`ridgeline_pipeline.html`](ridgeline_pipeline.html) | Pipeline of scored deals with an AI briefing, verdicts (Pursue / Selective / Pass), and an "ask the pipeline" bar that filters to the deals a question is about. |
| [`ridgeline_scorecard.html`](ridgeline_scorecard.html) | Deal scorecard — **Meridian Behavioral Health** (Selective, 73/100). |
| [`ridgeline_scorecard_cypress.html`](ridgeline_scorecard_cypress.html) | Deal scorecard — **Cypress Dental Partners** (Pursue, 82/100). |

## The scorecard

Each deal drill-in is built around:

1. **Verdict band** — verdict, fit score, implied entry multiple, and an asset-quality-vs-price read.
2. **Five-axis read** — Management, Industry & Market, Valuation, Company, Right to Win — each with expandable citations tagged by source (CIM, public data, deal data, QoE, IC memo).
3. **Hard-pass gates** — any single trip (EBITDA out of range, single-payor concentration, no credible value-add path) short-circuits the score to an automatic pass.
4. **Comparison to the firm's own realized returns** — the moat: matched on sub-sector, size, and entry multiple.
5. **Surfaced for your judgment** — where the engine deliberately stops and hands off to the partner.
6. **Banker questions** to walk into the call with.
7. **Decision record** — log the call and reasoning.

## Running locally

Static HTML with no build step or dependencies. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

Hosted on GitHub Pages from `main` (root). Any push to `main` rebuilds the site automatically.
