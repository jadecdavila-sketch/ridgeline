# Ridgeline · Working Agreement

This file is the operative protocol for any agent working in the Ridgeline workspace. Read it at the start of every session.

The bottom of this file — **Architecture Documentation Workflow** — is the most important part. Everything above it is principle; that section is process.

---

## Product North Star


Before any feature work, code review, or council convening: read `brand/PRODUCT_NORTH_STAR.md` and `docs/architecture/01-product-context.md`. The North Star is non-negotiable design context, not aspirational language. **When technical correctness and the North Star diverge, the North Star wins. When generic UX heuristics conflict with Ridgeline-specific principles, the Ridgeline-specific principles win.** The council reads the North Star before it speaks.

**When the council is convened** (two or more voices weighing in on the same question, via `/council` or parallel `Agent` calls), the response is written into an HTML instance of `docs/council/_template.html`, named `docs/council/<YYYY-MM-DD>-<topic-slug>.html`, and opened in the browser. Flat markdown is not the delivery format. Full protocol: `docs/council/PROTOCOL.md`. The tension bar in the synthesis section is the most consequential placeholder; fill it in before the agreement and divergence cards.

---


---

## Core Principles

Build for: **security, reliability, accessibility, maintainability.** When these conflict with speed, the principles win.

When in doubt — especially on the Claude API key boundary, secrets, the council voice/agent definitions, or persistence keys — ask before proceeding.

---

## Security

The product handles a shared Claude API key and (eventually) client project data. Treat the server/client boundary as load-bearing. 

**Never:**
- Give `ANTHROPIC_API_KEY` (or any secret) a `VITE_` prefix — that ships it to the browser bundle. Server-only vars stay un-prefixed and are bridged onto `process.env` by `Ridgeline-design/server/devApiPlugin.ts`.
- Commit `.env`. Confirm `.gitignore` coverage; `.env.example` is the only env file that belongs in git.

**Before installing a package:**
1. Verify exact spelling — typosquatting is real.
2. Confirm on npmjs.com; check download stats and publish age.

---

## Reliability

**Required patterns:**
- Wrap every external (Anthropic) call in try/catch with a meaningful fallback. The council review runs five voices in parallel and isolates per-voice failures so the others still return — preserve that isolation (`10`).


---

## Code Quality

**Standards:**
- TypeScript throughout; ESLint flat config; the `cn()` helper and shadcn-style primitives in `src/components/ui/` (`00-conventions`).
- **Match the file you're editing:** `Studio Site` uses semicolons, `Ridgeline-design` does not. There is no Prettier config to normalize this.
- Comments explain *why*, not *what*. No commented-out code in commits.
- No stray `console.log` in app/UI paths. (The server engine's `console.log` token-cache telemetry is deliberate and stays.)


**Before committing:**
- `npm run lint` passes. `npm run build` (`tsc -b && vite build`) passes.
- No hardcoded values that should be config.
- spawn a subagent to review your code for bugs
- Always ask Jade before pushing to production!

---

## Accessibility

**WCAG 2.1 AA is the floor, not the ceiling.** Both apps are web surfaces.

- Color contrast ≥ 4.5:1 for body text; no information by color alone.
- Every interactive element keyboard-reachable; focus indicators visible.
- Alt text on images; ARIA labels where visual context isn't enough; explicit form labels.

**Test with:** keyboard-only navigation through critical flows, and a Lighthouse accessibility pass for any new surface. Note the existing keyboard handling (Esc/arrow nav in the medallion and stage views) as the pattern to follow.

---

## Testing

**There are no tests and no test runner in either repo today** (`40-build-deploy-ci`). Tests are planned, especially for the product. Do not claim or assume coverage that doesn't exist.

- When you add non-trivial logic, add at least a quick test once a runner is in place.
- The first testing work should also create `docs/architecture/41-testing.md` and wire a `test` script + (ideally) a CI step.


---

## Observability

Minimal today. The council engine logs prompt-cache and token counts via `console.log` per call (`10`); there is no crash/error monitoring wired in either app. If you add an integration, add basic structured logging and mind cost — synthesis runs on Opus, feedback on Sonnet, neither result is cached across runs (`10`).

---

## Documentation

The workspace's documentation surface:

- **`docs/architecture/`** — the living architecture docs (INDEX + numbered sub-docs + `90-cross-system-dependencies`). Workflow rules below.
- **`brand/BRAND.md` and `brand/PRODUCT_NORTH_STAR.md`** — the shared visual/voice language and binding thesis; both apps bind to them.
- **Code comments** — only when the *why* isn't obvious.

Note: `Studio Site/README.md` is currently the stock Vite template — do not treat it as project documentation.

When you change something, the docs change with it. Stale docs are worse than missing docs because they actively mislead.

---

## When to Ask vs. Act

**Always ask before:**
- Touching the Claude key boundary or the server engine (`Ridgeline-design/server/council.ts`, `devApiPlugin.ts`). (`10`, `50`)

- Adding a dependency, adding a new `/api/*` endpoint, or any production-deploy work. (`40`, `50`)

**Can proceed without asking:**
- Following an established pattern already in the codebase.
- Adding tests to existing code.
- Fixing a bug whose fix is mechanical and local.
- Improving accessibility on an existing screen.
- Performance tuning that doesn't change behavior.

When unsure, default to asking. Surprise architectural changes are harder to unwind than a 30-second clarifying question.

---

## Architecture Documentation Workflow

This workspace maintains a living architecture documentation system at `docs/architecture/`. You are required to read it before implementing and update it before pushing. This is how we catch ripple effects across two apps and three git boundaries.

The system uses a **router pattern** to keep context budget manageable:
- `INDEX.md` is small and always read in full.
- Sub-docs are loaded selectively based on what the task touches (the routing tables in `INDEX.md` tell you which).
- You typically read 1–3 sub-docs per task, not all of them.

---

### Pre-Implementation Workflow (REQUIRED)

Before writing or modifying code:

1. **Read `docs/architecture/INDEX.md` in full.** It's intentionally short.
2. **Find your task in the Routing tables** and take the docs it lists. Be generous — if a system might be relevant, include it.
3. **State your plan explicitly before reading sub-docs:**
   > "Building [feature]. Per the index, this touches [10] and [31]. Loading those now."
4. **Load the matched sub-docs in full.** Pay special attention to **Gotchas** and **Public surface**.
5. **If your change is foundational or crosses systems**, also load `90-cross-system-dependencies.md`.
6. **Identify ripple risks before writing code:**
   > "Risk analysis: changing the synthesis JSON shape in 10 affects the client parsers in 21 and the editors in 31. Plan to verify both."
7. Then implement.

If you discover mid-implementation that the work touches a system you didn't load, stop and load that sub-doc. If the index has no system matching the task, it may need a new sub-doc — flag this to Jade before proceeding.

---

### Pre-Push Workflow (REQUIRED)

Before `git push`:

1. `git diff origin/main..HEAD --name-only` to see what changed (run it in the correct repo — remember there are three).
2. Re-read the sub-doc for each affected system.
3. Analyze ripple effects: what else consumes this? (Use `90`.)
4. Update affected sub-docs (How it works, Public surface, Dependencies, Gotchas) and `90-cross-system-dependencies.md` if relationships changed.
5. Bump the **Last reviewed** date in `INDEX.md` and every doc you touched.
6. Commit doc updates: `docs: update architecture for <change>`.
7. Then push.

> **Not yet automated.** Unlike a mature setup, there is **no pre-push git hook installed** that blocks source changes without doc updates — so this workflow is currently a manual discipline. Installing that hook is the recommended next step (it's complicated by docs living in the umbrella while source lives in two independent repos; see the Stage 3 report). Do the review by hand until it exists.

---

### Resolving [REVIEW NEEDED] Flags (REQUIRED)

The sub-docs currently carry several `[REVIEW NEEDED]` flags (open questions awaiting human decisions). When you resolve one, the fix isn't complete until the flag is too. In the same commit (or chain):

1. **The code/decision fix itself.**
2. **Remove or rewrite the `[REVIEW NEEDED]` bullet** in the relevant sub-doc — delete it if the issue is gone; if it's now a "by design" constraint, keep the bullet, drop the tag, and rewrite in present tense.
3. **Cross-reference `90-cross-system-dependencies.md` and `INDEX.md`** — both restate flags; update them and bump **Last reviewed** dates.

Before considering a fix complete:
```
grep -rn "REVIEW NEEDED" docs/architecture/
```
A stale flag is invisible to any future hook but misleading to every agent who reads the docs. Don't leave it dangling.

---

### Doc Maintenance Rules

- **Keep `INDEX.md` short** (currently ~73 lines; propose a restructure if it passes ~200).
- **Keep each sub-doc focused** — if one grows unwieldy, propose splitting it and updating the index.
- **Keep routing in sync** between `INDEX.md` and the sub-docs.
- **When you add a new integration or significant system, create a sub-doc for it** rather than burying it.
- **When you remove a system, remove its sub-doc and its `INDEX.md` row.** Don't leave stale routes.

---
 

The pre-implementation read prevents changes that conflict with existing patterns. The pre-push update keeps the docs honest for the next session. The review-flag rule keeps the architecture map accurate. Together they're the closest thing this workspace has to code review.

If you want to skip a step because "this change is small" — that's exactly when ripples get missed. Do the review.
