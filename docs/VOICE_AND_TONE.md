# RidgeLine Voice & Tone

The prose has to sound like an investment committee, not like a language model
doing an impression of one. The vocabulary was already right; the **cadence** was
the tell. This is the working brief for every word that ships.

One line: **write it like an IC memo and a partner's margin notes. Terse,
numbers-forward, unshowy, occasionally blunt.**

---

## Kill-list (hold every line to this)

0. **No em-dashes (`—`). Ever, anywhere.** The em-dash aside is one of the
   loudest AI tells. Use a period, a comma, a colon, or restructure the sentence.
   (En-dash number ranges like `$20–75M` and the `A−` minus sign are fine. Those
   aren't dashes-as-punctuation.)
1. **The "not X, but Y" reflex.** Once a screen, where it's load-bearing. Not
   five times. ("recurring, not merely repeated" / "I grade what's there, not
   what's hoped for" / "volume is protected, price is not": that density is the
   single loudest tell.) Usually, just state the positive and stop.
2. **Epigram landings.** Don't resolve every paragraph onto a little maxim. End
   on a fact, a number, or a blunt question.
3. **Em-dash codas** that add flavor not information. See rule 0. Delete them.
4. **Candor-signaling words.** *Genuinely, honestly, really, exactly, precisely,
   truly, plainly, I'll say so.* Strike on sight. Be blunt instead of announcing
   bluntness.
5. **Tricolons.** Rule-of-three, endlessly. Two items, or four. Asymmetry reads
   human.
6. **"X is the Y" equations** ("the gap is the negotiation," "price and the floor
   are the same discipline"). Aphorism posing as analysis. Once, maybe.
7. **Uniform sentence length.** Break one in half. Let a three-word sentence sit
   next to a long one.

## Do instead

- **Numbers lead.** "8.8× in, 9.5× ceiling. Room." Let the figure carry it.
- **Flat, declarative, uneven.** Fragments allowed.
- **Concrete over abstract.** "DIR fees, gross-to-net, eight quarters" beats
  "reimbursement durability."
- **Keep every fact, figure, and source tag exactly.** This is a cadence
  rewrite, not a re-underwrite. Never invent or drop a number or a `qtag`.

---

## The three voices: make them actually diverge

The whole point of a committee is that they don't sound alike. Right now they do.

- **The Partner** is conviction. *Warm, a little discursive.* He likes the deal
  and is walking you through it. Slightly longer sentences, some color, talks to
  you ("I'd stand on this floor"). Never epigrammatic.
- **The Examiner** is scrutiny. *Clipped, cold, forensic.* Short. Fragments.
  Numbers and sources. Lists what he checked, names the risk, ends on a demand
  ("Show me eight quarters."). The most different from the others, and currently
  the most over-written, so the biggest win.
- **The IC Chair** is the call. *Terse and final.* Verdict first. Few words.
  Renders judgment and stops. ("A−. Pursue. Reimbursement's in the grade, not the
  call.")

Carry the voice everywhere that voice speaks: the Partner across his read, his
axis lines, and his converse replies; the Examiner across his; the Chair across
the resolution, the axis rulings, and the converse rulings.

---

## Before / after (the texture to match)

> **Chair** *was:* "The Floor holds. I priced reimbursement durability into the
> grade, not the verdict, held A− over the Examiner's B+, and kept the Pursue."
> *now:* "A−, Pursue, 8.8×. The grade was the fight. I held A−, the Examiner
> argued B+, reimbursement is why. I put the risk in the grade, kept the call."

> **Partner** *was:* "A named preferred lane, refill-driven recurring revenue on
> limited-distribution therapies, not a manufacturing model."
> *now:* "One of our lanes. Refill-driven, limited-distribution, recurring. No
> manufacturing in the mix."

> **Examiner** *was:* "Gross-to-net and DIR-fee trends are not fully evidenced in
> what was loaded. This is the open question, and it leads my list."
> *now:* "Gross-to-net and DIR-fee trends: not in what was loaded. This leads the
> list. Show me eight quarters."

The reference implementation is `src/data/councils/cardinal.ts`. Match its
texture, not just these examples.
