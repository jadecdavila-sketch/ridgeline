# Ridgeline — Functional Specification

**Deal intelligence for the investment committee.** The first-pass read, done before a partner opens the CIM.

> This document specifies the functional behavior of the Ridgeline interface: what a user sees, what they can do, and what the system returns. It is written for a business audience. Placeholders such as *[the Firm]* and *the framework* should be read as the client's own name, investment framework, and realized-returns record.

---

## 1. Purpose

The moment a CIM lands, Ridgeline scores the opportunity against the Firm's own investment framework and its history of realized deals, then presents that read as a structured, fully sourced scorecard. The goal is narrow and concrete: a partner should be able to orient on a new deal in minutes, see why it scored the way it did, and walk into the banker call already knowing the questions that move the decision.

Ridgeline does not replace judgment. It makes judgment faster and harder to fool. Every score is a recommendation, every claim is traceable to its source, and the final call always stays with the partner.

---

## 2. Scope

This specification covers the two surfaces that carry the core experience:

1. **The Pipeline** — the queue of scored opportunities and the daily briefing across them.
2. **The Deal Scorecard** — the full read on a single deal, including **the Council**, the reasoning layer that sits behind every score.

Surrounding navigation (portfolio, diligence workspace, settings) is indicated in the product frame as where Ridgeline grows. It is out of scope here.

---

## 3. Navigation and structure

Ridgeline is a single, fast web application. Two surfaces are connected by a consistent breadcrumb (`Deal Assistant / Pipeline / [Deal]`):

- The **Pipeline** is the home surface and the entry point.
- Selecting any deal opens its **Scorecard**.
- From a scorecard, the partner returns to the pipeline through the breadcrumb.

The application is responsive from large desktop down to mobile, and is navigable entirely by keyboard.

---

## 4. The Pipeline

The pipeline is the partner's morning view: every recently scored opportunity in one ranked queue, with a synthesized read across all of them.

### 4.1 The queue

Each opportunity appears as a row showing:

- **Name and sector descriptor** (for example, "Specialty pharma services · $175M revenue").
- **Verdict** — one of three calls, color-coded: **Pursue** (green), **Selective** (amber), **Pass** (red).
- **Score** — the framework fit score, out of 10.
- **What drives the call** — a one-line reason, plus a **signal chip** that flags the single most important factor (memory of a past deal, urgency, a tripped gate, fit, or a judgment call).
- **When scored**, with a "Just scored" tag on overnight arrivals.

Selecting a row opens that deal's scorecard.

### 4.2 Today's read

A briefing panel synthesizes the queue into a short partner-grade paragraph: which deal to open first and why, which names tripped a hard-pass screen, which one has a clock on it. **The deals named in the briefing are clickable**, linking directly to their scorecards. A "Start here" recommendation points to the single highest-priority deal.

### 4.3 Ask the pipeline

A set of partner-relevant questions ("What fits our thesis under 10x?", "What changed since yesterday?", "Anything with sponsors circling?") filters the queue to the deals a question is about and returns a short, sourced answer. A free-text field lets the partner ask anything; in the live product, Ridgeline interprets the question against the framework and the Firm's deal history.

### 4.4 Filters and at-a-glance stats

The queue can be filtered by verdict (All / Pursue / Selective / Pass) and sorted. A stats strip summarizes the period: deals scored, average first-pass time, and the count of each verdict.

---

## 5. The Deal Scorecard

The scorecard is the full read on one opportunity, designed so a partner joining the conversation can orient in seconds and then drill as deep as they want. It is built around a strict discipline: **asset quality and price are scored on two separate tracks and never collapsed into a single number.**

### 5.1 Verdict band

The top of the scorecard states the call: the **verdict**, the **framework score** (out of 10), the **asset-quality grade** (A, A−, B+, B), and the **entry multiple**. A two-track read sits beneath it: the asset's grade on one side, price discipline against a walk-away ceiling on the other.

### 5.2 The read: five axes

The deal is scored against five axes, each with a plain-language read, an assessment chip, and a strength bar:

1. **Sector and model fit** ("in lane?")
2. **Protected downside**
3. **Asset quality vs price**
4. **Value creation**
5. **Management and data**

Within each read, key claims are **cited inline**. Selecting a citation reveals the underlying evidence: the source document and page, the relevant snippet with the load-bearing phrase highlighted, and a one-line note on what it proves. Sources are tagged by type (CIM, quality-of-earnings, deal data, IC memo, realized-returns record).

### 5.3 Hard-pass screen

A gate panel runs the deal against the framework's disqualifying triggers (for example: out-of-network model, single-customer concentration over 30%, EBITDA outside the target band, no credible value-add path). Any single trigger short-circuits the score to an automatic low. The panel shows each gate as cleared or tripped, with the figures and their sources, so the partner can see exactly what was checked.

### 5.4 Comparison to realized returns

The differentiating reference: the deal matched against the Firm's **own** realized deals, by sub-sector, size, and entry multiple. A table shows the comparable entries, their multiples, outcomes, and returns, with the cautionary precedents called out. This is drawn from the Firm's record, never from a generic comp set, and never fabricated.

### 5.5 Surfaced for your judgment

The scorecard names, explicitly, the calls the framework deliberately leaves to a partner: the synthesis grade, whether a value-creation lever is real, an out-of-lane judgment, the walk-away number. This is where the engine stops and hands off.

### 5.6 Banker questions

A prioritized list of the questions that move the decision, ordered so the score-changing ones come first, each tagged by impact. These are written to be carried directly into the banker call.

### 5.7 Decision record

The partner logs the call and the reasoning, on the record. The decision is captured against the deal and fed back to the data layer, so the next similar deal is scored with this outcome in the Firm's history.

---

## 6. The Council

The Council is the reasoning layer behind every score, and the heart of the product. Where the scorecard states the conclusion, the Council shows the deliberation that produced it: **two councils built to disagree, an arbiter who resolves them, and a clear line the machine never crosses.**

The Council is reached from any scorecard through a single action: **Converse with the Council**. It opens as a panel at the foot of the scorecard, with the scorecard still visible above it. It offers five views, selectable at any time.

### 6.1 Meet the Council

A deal-agnostic introduction to the three voices and the contract between them. It explains, in plain terms, the cast: two councils on opposite benches (one paid to want the deal, one paid to find how it dies), the Chair who holds the gavel, and the principle that the final call stays with the partner. New users start here; experienced users skip it.

### 6.2 The Table

The committee's standing read at a glance. The Chair's verdict presides at the top. The two councils sit across from each other, and the five axes run between them. A central seam carries the verdict color and **lights only where the two councils disagreed** — so a partner can see, in one look, exactly which points were contested and which were consensus. The Chair's ruling on each contested point sits on the seam between the two positions.

### 6.3 Focused read

A single council's full argument, in its own structure: what it sees, the screen it ran, its four sub-voices, the tensions it is holding, the questions it would ask before approving, and its closing read. Available for either council.

### 6.4 Converse with the Council

A working conversation with the committee, grounded in this deal's evidence. The partner asks a question and the table answers **in character and in tension**: a single question can draw a position from one council, a counter from the other, and a ruling from the Chair. Suggested questions are offered, and every answer is sourced. (In the prototype, a set of representative exchanges is scripted; in the live product, the Council answers any question against the deal's loaded evidence.)

### 6.5 The three voices

| Voice | Role | Owns | Sub-voices |
| --- | --- | --- | --- |
| **The Partner** | Conviction Council: builds the bull case | A proposed asset-quality grade and a walk-away ceiling, both provisional | Strategist (sector and model fit), Floor (protected downside), Operator (value creation), Steward (asset quality vs price) |
| **The Examiner** | Scrutiny Council: hunts what kills the deal | A ranked kill list, and the power to move the grade down | Sentinel (reimbursement and regulatory), Auditor (earnings quality), Reader (management and people), Contrarian (concentration and disruption) |
| **The IC Chair** | The arbiter; not a fifth lens | The fit score, the asset grade, the walk-away ceiling, and the verdict | None: the Chair weighs the two councils and adjudicates where they conflict |

The Chair **adjudicates, never averages.** Quality and price stay on two tracks, because a score that quietly averages a strong asset and a bad price hides the cardinal error of paying an A multiple for a lesser asset.

---

## 7. Cross-cutting principles

These hold across every surface and are the product's standards.

- **Everything is sourced.** Every factual claim is one click from the page it came from. "Not evidenced in what was provided" is a complete, honest answer, and the system gives it rather than guessing.
- **Nothing is fabricated.** Named precedents, multiples, and outcomes come only from the Firm's retrieved record. The system never invents a comp, a number, or a deal.
- **Two tracks, never one number.** Asset quality and price are held apart at every layer.
- **The human makes the call.** The verdict is a fully reasoned recommendation. The machine makes the call defensible; it does not make the call.
- **The Firm's own language.** Scored against the Firm's framework, history, and terminology, not generic benchmarks or vendor-speak.

---

## 8. Voice and presentation

Ridgeline reads like an investment memo, not like software. The copy is terse, numbers-forward, and disciplined, in the register of a sharp partner's margin notes. The three council voices are deliberately distinct: the Partner is warm and constructive, the Examiner is clipped and forensic, the Chair is terse and final.

The interface uses two materials by design: a cool, clinical surface for the scorecard, and a warm "committee room" surface for the Council, so the two registers feel like different rooms. Verdict color is consistent throughout (green for Pursue, amber for Selective, red for Pass).

---

## 9. Accessibility and resilience

- Full keyboard navigation, including the Council panel (open, switch views, focus a voice, close on Escape).
- Visible focus indicators, descriptive alternative text on all imagery, and color never used as the sole carrier of meaning (verdict and contention are also labeled).
- Motion respects the operating-system "reduce motion" setting.
- Color contrast meets WCAG 2.1 AA for body text.

---

## 10. Status and delivery scope

The current build is an interactive prototype on representative (illustrative) data, demonstrating the two core surfaces end to end: the Pipeline and the Deal Scorecard with the full Council experience. All companies, figures, and reads shown are fictional and stand in for the Firm's real framework and realized-returns record.

---
