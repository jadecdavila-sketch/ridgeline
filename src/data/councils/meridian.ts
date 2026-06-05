import type { CouncilData } from '../councilTypes'

/**
 * Meridian Behavioral Health. The committee behind the 6 / B+ / Selective.
 * A good, in-lane asset where the fight isn't the model. It's the price and
 * the payer mix: a 12.1× entry above the ceiling the grade earns, and revenue
 * leaning on Medicaid, where a rate action moves the thesis.
 *
 * Voice reference for the whole product (see docs/VOICE_AND_TONE.md):
 * Partner warm and discursive, Examiner clipped and forensic, Chair terse.
 */
export const meridian: CouncilData = {
  chair: {
    verdictLabel: 'Selective',
    verdict: 'selective',
    score: '6',
    grade: 'B+',
    entry: '12.1×',
    resolution:
      'B+, Selective, 12.1×. No gate trips. The asset’s real. In-lane outpatient behavioral health, recurring, operator-run. But I can’t call it a pursue. I held the grade at <em>B+</em> on the Medicaid-weighted mix, and that grade earns a ~10× ceiling. Entry’s 12.1×, above the line. Two things decide it: whether the asset earns the premium, and how much Medicaid rate risk we’ll underwrite. Pursue only if the price compresses toward the line, or the commercial mix-shift proves real in diligence. <span class="qtag data">DATA</span>',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'B+ asset', kind: 'grade' },
      { text: 'walk-away ~10×', kind: 'ceil' },
      { text: 'provisional · above the line', kind: 'prov' },
    ],
    whatISee:
      'Multi-state outpatient behavioral health. 84 clinics, 6 states, founder-clinician led. About $24M adjusted EBITDA on ~$146M revenue. <span class="qtag cim">CIM</span> Behavioral health is a named preferred lane, so this is in-lane by design. The ask works out to 12.1×. I’ve noted that and set it aside. I want to grade the asset before the price gets in my head.',
    screen: {
      label: 'Hard-pass screen',
      clear: true,
      html: 'I ran the triggers first, before building anything. Not facility-heavy, no CME, not out-of-network. EBITDA’s ~$24M, inside the $20–75M band. No single payer over the line. The largest sits near 24%, under the 30% gate. <span class="qtag cim">CIM</span> The process is operator-run and credible. Nothing trips, so I let myself build the case. Price above the held ceiling is the judgment call below, not a gate.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'Squarely in lane, and the right kind of model: recurring, visit-based outpatient revenue, payer-contracted, no out-of-network billing. <span class="qtag cim">CIM p.8</span> Behavioral health is a named preferred lane. I tested the model against the end market: this is healthcare-durable demand, not a facility play dressed as services. In-lane sets a normal bar, not a raised one.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'The base is real. Demand recurs and it’s non-deferrable, the spend a patient cuts last. But the floor has a crack: revenue leans on Medicaid, above the in-sector norm, where reimbursement is set administratively and a rate action hits margin straight on. <span class="qtag cim">CIM p.22</span> The recurring base protects volume. It does not protect price. That soft spot is why this is a B+ and not an A.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'Three controllable levers, and I’ll grade them straight. De novo clinic expansion on a proven template: Credible. Payer-mix shift toward commercial: Credible. Disciplined tuck-ins: Credible. <span class="qtag ic">IC</span> The mix-shift carries weight beyond its own line; it’s the one that also de-risks the downside. But it’s a plan, not yet in the P&amp;L. I name it as a lever, not banked return.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: 'I grade it <em>B+</em> on quality and durability, held apart from price, on the Medicaid-weighted mix. <span class="qtag data">DATA</span> That grade earns a ~10× walk-away, and the entry’s 12.1×, above it. Paying an A multiple for a B+ asset is the cardinal error this council exists to prevent. So the premium has to be earned in diligence or negotiated down. I don’t pay for the mix-shift before it’s in the numbers.',
      },
    ],
    tensions: [
      'My Operator wants to bank the commercial mix-shift; my Floor will only stand on the recurring base, and the Medicaid weighting, that exists today. So how much of this case rides on a lever that isn’t in the P&amp;L yet? That’s the one I keep circling.',
      'I’m at B+, happy to own it at ~10×. The process wants 12.1×. Everything between those two numbers is the negotiation, and it’s where we lose money if we’re wrong.',
      'Medicaid rate durability could move this whole read, and that’s the Examiner’s ground. I expect him to push hardest there. He should.',
    ],
    questions: [
      'Full payer mix and trajectory: Medicaid versus commercial share by state, and the rate outlook in the largest Medicaid markets.',
      'Same-clinic revenue bridge: price versus volume versus acuity. Does the organic growth claim hold?',
      'De novo unit economics: cost to open, time to maturity, realized ramp curve versus plan.',
    ],
    closing: {
      label: 'My conviction read',
      html: 'A good, in-lane asset: recurring demand, a real clinic network, levers that are ours to pull. But it’s above the line. I’m proposing <em>B+</em> and a ~10× walk-away, both provisional, both the Examiner’s to test. Worth pursuing at the right number; not worth chasing at 12.1× without the premium earned.',
      move: 'The price, and the Medicaid rate durability behind it. If the mix-shift is real and rates hold, the premium can be argued. If not, the entry is the problem.',
      caveat:
        'The score and the pursue / selective / pass call aren’t mine. The Chair sets those once he’s heard us both.',
    },
  },

  examiner: {
    lens: 'Scrutiny Council · what kills the deal',
    proposes: [
      { text: 'grade provisional', kind: 'grade' },
      { text: 'Medicaid rate = open', kind: 'ceil' },
      { text: 'price above ceiling', kind: 'prov' },
    ],
    whatISee:
      'Same asset. I read it for where it breaks. 84 clinics, ~$24M adjusted EBITDA, Medicaid-weighted. <span class="qtag cim">CIM</span> The model’s in lane, the EBITDA’s in band, so it doesn’t die on the screen. It dies, if it dies, on the price paid for a payer mix a state budget cycle can re-rate. I’m here to size that before anyone wires a dollar.',
    screen: {
      label: 'What I ran',
      clear: true,
      html: 'Ran concentration on every axis this model exposes: payer, referral, program. Largest single payer near 24%. <span class="qtag cim">CIM p.23</span> Under the 30% line. The dominant dependency. No gate trips. But concentration clears as a number while the rate exposure behind it never shows up as a gate at all. That’s the risk a bright line misses, and it’s mine to size.',
    },
    pillars: [
      {
        name: 'The Sentinel',
        lens: 'reimbursement & regulatory durability',
        html: 'The kill that leads the list. Revenue leans on Medicaid, where rates are set administratively, not negotiated. A state rate cut flows straight to margin with little to offset it. <span class="qtag cim">CIM p.22</span> Recurring demand protects volume, not price. The mitigant is a commercial mix-shift the Partner credits. That’s a plan, not yet in the P&amp;L. This leads the list.',
      },
      {
        name: 'The Steward of price',
        lens: 'is the entry defensible',
        html: 'Entry’s 12.1×. The ceiling a B+ carries is ~10×. <span class="qtag data">DATA</span> Most blown deals are fine assets at the wrong number, and this is a fine asset at a number above the line. The premium is the thesis, not the asset. And a premium underwritten on a mix-shift that hasn’t happened is a premium underwritten on hope.',
      },
      {
        name: 'The Auditor',
        lens: 'is the growth real',
        html: 'Same-clinic growth: the figure I can’t yet trace. Price, volume, or acuity? <span class="qtag qoe">QoE</span> If the organic story is mostly price, the durability the Partner credits is thinner than the deck suggests. And the de novo template is unproven at this scale until the ramp curve ties to plan. I hold the grade provisional until that bridge clears.',
      },
      {
        name: 'The Contrarian',
        lens: 'the bear case at its strongest',
        html: 'The cautionary comp looks most like this deal. Clarvida Health entered above 11×, Medicaid-heavy, returned 1.4× after a rate cut. <span class="qtag chron">CHRON</span> Meridian at 12.1× sits above the bracket and shares the exposure. The sub-10× behavioral health entries returned a median 2.3×; the one above 11× is the loss. That’s the strongest version of why this goes wrong.',
      },
    ],
    tensions: [
      'The Partner banks the commercial mix-shift as Credible. My Auditor sees no attainment history behind it yet. It exists. We just disagree on whether you pay 12.1× for it today.',
      'Price and floor are one question for me. Medicaid rates soften, and the premium and the protected downside fall together. The Partner holds the asset apart from the price. I don’t.',
    ],
    questions: [
      'Medicaid versus commercial share by state, and the rate outlook in the largest Medicaid markets. The kill-or-clear question.',
      'Same-clinic revenue bridge: how much of organic growth is price versus volume versus acuity?',
      'How contracted is the commercial mix-shift versus aspirational, and what attainment stands behind it?',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'No gate trips. The asset’s real. But the 12.1× entry is above the ~10× ceiling the grade earns, and the Medicaid rate exposure is unpriced until the mix-shift is evidenced. I hold the grade at B+ and treat the price as the live concern. The cautionary comp at this entry returned 1.4×. <span class="qtag chron">CHRON</span> Pursue only with the premium earned or negotiated out.',
      move: 'The Medicaid rate durability and the same-clinic bridge. They decide whether the asset earns the premium, or the entry is simply the problem.',
      caveat:
        'I make the case against the deal. The verdict’s the Chair’s; he weighs me against the Partner.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'A named preferred lane. Recurring, visit-based outpatient revenue, payer-contracted, no out-of-network model. <span class="qtag cim">CIM</span>',
      examiner: 'Tested the model, not the label. Behavioral health’s core, no facility tail in the revenue. Passes clean.',
      contested: false,
    },
    {
      axis: 'Protected downside',
      partner:
        'Demand recurs and it’s non-deferrable, the spend a patient cuts last. The base is real even with the mix weighted. <span class="qtag cim">CIM</span>',
      examiner:
        'The base protects volume, not price. Revenue’s Medicaid-weighted, and a rate action is set administratively against you. <span class="qtag cim">CIM p.22</span>',
      contested: true,
      ruling:
        'The floor is <em>real but cracked.</em> Recurring demand holds volume; the Medicaid weighting leaves price exposed to a rate action. That’s why this is a 6, not a clean pursue: the downside is protected on the line that matters least.',
    },
    {
      axis: 'Asset quality vs price',
      partner:
        'B+ on the Medicaid-weighted mix, held apart from price. The walk-away the grade earns is ~10×. <span class="qtag data">DATA</span>',
      examiner:
        'And the entry’s 12.1×, above that ceiling. The closest high-entry comp, Clarvida, returned 1.4×. The premium is the thesis, not the asset. <span class="qtag chron">CHRON</span>',
      contested: true,
      ruling:
        '<em>B+ holds.</em> The ~10× ceiling stands, the 12.1× entry is above the line. Price above the ceiling isn’t a hard-pass. It’s the judgment the verdict turns on. Selective: pursue only if the premium is earned in diligence or negotiated toward the line.',
    },
    {
      axis: 'Value creation',
      partner:
        'Three controllable levers. De novo on a proven template: Credible. Commercial mix-shift: Credible. Disciplined tuck-ins: Credible. The mix-shift also de-risks the downside. <span class="qtag ic">IC</span>',
      examiner:
        'Mix-shift is aspirational until it’s in the P&amp;L, and the de novo template is unproven at this scale. Credible levers, not banked ones.',
      contested: false,
    },
    {
      axis: 'Management & data',
      partner:
        'Founder-clinician led, experienced CFO. Clinically credible, operator-run, reported figures tie. <span class="qtag qoe">QoE</span>',
      examiner: 'Figures tie at the summary level. Same-clinic growth quality, price versus volume versus acuity, is the open trace.',
      contested: false,
    },
  ],

  converse: {
    opening:
      'Asset’s real and in lane. Two fights left: the price, and the Medicaid mix. Both stop it at selective.',
    suggests: [
      'Why selective and not pursue?',
      'What is the Medicaid risk?',
      'Which of our deals does this look like?',
      'What would move it to a pass?',
    ],
    rounds: [
      {
        q: 'Does the asset earn the 12.1× premium?',
        contested: true,
        replies: [
          {
            voice: 'partner',
            role: '· the steward',
            html: 'It can. The asset’s a real B+, recurring demand, a real network, levers that are ours to pull, and the mix-shift toward commercial both lifts margin and de-risks the floor. <span class="qtag data">DATA</span> If that shift is contracted and rates hold, 12.1× is arguable. I grade what’s in front of me at ~10×, and I’d pay above it only for a premium that’s evidenced.',
          },
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'And it isn’t evidenced. The premium rides a mix-shift that isn’t in the P&amp;L and a Medicaid book a state can re-rate. <span class="qtag chron">CHRON</span> The closest high-entry comp, Clarvida, was Medicaid-heavy above 11× and returned 1.4×. You’re paying an A multiple for a B+ asset on a plan.',
          },
        ],
        ruling:
          '<em>B+ holds, ceiling ~10×, entry 12.1× above the line.</em> The premium’s unproven, so the verdict’s selective. Pursue only if diligence makes the commercial mix-shift real or the price is negotiated toward the ceiling. The story doesn’t move the number.',
      },
      {
        q: 'What would move it to a pass?',
        contested: false,
        replies: [
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'A gate, or the price held with no path to compression. Single-payer concentration over 30% auto-passes it; the largest today’s near 24%. <span class="qtag cim">CIM</span> Or diligence showing the organic growth is mostly price, against a closest comp that returned 1.4×. That slides it.',
          },
          {
            voice: 'partner',
            role: '· the floor',
            html: 'I’d add a Medicaid rate cut with no commercial offset. The recurring demand still holds volume, but the floor I’m crediting thins to the bone. <span class="qtag cim">CIM</span> At that point the entry isn’t a premium. It’s the problem, and this is someone else’s deal.',
          },
        ],
      },
    ],
  },
}
