import type { CouncilData } from '../councilTypes'

/**
 * Meridian Behavioral Health — the committee behind the 6 / B+ / Selective.
 * A genuinely good, in-lane asset where the fight is not the model but the
 * price and the payer mix: a 12.1× entry above the ceiling the grade earns,
 * and revenue weighted toward Medicaid, where a rate action moves the thesis.
 */
export const meridian: CouncilData = {
  chair: {
    verdictLabel: 'Selective',
    verdict: 'selective',
    score: '6',
    grade: 'B+',
    entry: '12.1×',
    resolution:
      'No gate trips, and the asset is real — in-lane outpatient behavioral health, recurring and operator-run. But I cannot make this a pursue. I held the grade at <em>B+</em> on the Medicaid-weighted mix, and the ceiling that grade earns is ~10×; the 12.1× entry sits above it. Two fights decide the call: whether the asset earns the premium, and how much Medicaid rate risk we are willing to underwrite. Selective — pursue only if the price compresses toward the line or the commercial mix-shift proves real in diligence.',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'B+ asset', kind: 'grade' },
      { text: 'walk-away ~10×', kind: 'ceil' },
      { text: 'provisional · above the line', kind: 'prov' },
    ],
    whatISee:
      'A multi-state outpatient behavioral health platform — 84 clinics across 6 states, founder-clinician led, roughly $24M adjusted EBITDA on ~$146M revenue. <span class="qtag cim">CIM</span> Behavioral health is a named preferred lane, so this is in-lane by design. The asking range implies a 12.1× entry; I read that for context and set it aside before grading the asset on its own merits.',
    screen: {
      label: 'Hard-pass screen',
      clear: true,
      html: 'I ran the triggers first, before building any case. Not facility-heavy, CME, or out-of-network; EBITDA at ~$24M, inside the $20–75M band; no single payer over the line — the largest sits near 24%, under the 30% gate. <span class="qtag cim">CIM</span> A credible, operator-run process. Clear — and only then did I let myself build the case. Price above the held ceiling is the judgment call below, not a gate.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'Squarely in lane, and the right kind of model: recurring, visit-based outpatient revenue, payer-contracted, with no out-of-network billing. <span class="qtag cim">CIM p.8</span> Behavioral health is a named preferred lane, and I tested the model versus the end market — this is healthcare-durable demand, not a facility play dressed as services. In lane sets a normal bar, not a raised one.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'The base is real: demand is recurring and non-deferrable, a spend a patient cuts last, not first. But the floor has a crack — revenue is weighted toward Medicaid, above the in-sector norm, where reimbursement is set administratively and a rate action hits margin directly. <span class="qtag cim">CIM p.22</span> The recurring base protects volume; it does not protect price. That soft spot is why this is a B+ and not an A.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'Three controllable levers, graded honestly: de novo clinic expansion on a proven template (<em>Credible</em>), payer-mix shift toward commercial (<em>Credible</em>), disciplined tuck-ins (<em>Credible</em>). <span class="qtag ic">IC</span> The mix-shift lever carries weight beyond its own line, because it is the one that also de-risks the downside. But it is a plan, not yet in the P&amp;L — I name it as a lever, not as banked return.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: 'I grade the asset <em>B+</em> on quality and durability, held apart from price, on the Medicaid-weighted mix. <span class="qtag data">DATA</span> The walk-away that grade earns is ~10×, and the 12.1× entry sits above it. Paying an A multiple for a B+ asset is the cardinal error this council exists to prevent — so the premium has to be earned in diligence or negotiated down. I do not pay for the mix-shift before it is in the numbers.',
      },
    ],
    tensions: [
      'The Operator credits the commercial mix-shift as Credible; The Floor will only stand on the recurring base — and the Medicaid weighting — that exists today. How much of the case rests on a lever not yet in the P&amp;L?',
      'The asset is a B+ I would happily own at ~10×; the process wants 12.1×. The gap between the grade and the price is the negotiation, and the risk.',
      'Medicaid rate durability could move this entire read, and it belongs to The Examiner. I expect the hardest push there, and I am not pre-empting it.',
    ],
    questions: [
      'Full payer mix and trajectory: Medicaid versus commercial share by state, and the rate outlook in the largest Medicaid markets.',
      'Same-clinic revenue bridge — price versus patient volume versus acuity mix. Validates the organic growth claim.',
      'De novo unit economics: cost to open, time to maturity, and the realized ramp curve versus plan.',
    ],
    closing: {
      label: 'My conviction read',
      html: 'A genuinely good, in-lane asset — recurring demand, a real clinic network, levers that are ours to pull — but it is above the line. Proposed grade <em>B+</em>, walk-away ~10×, both provisional and subject to The Examiner. Worth pursuing at the right number; not worth chasing at 12.1× without the premium earned.',
      move: 'The price, and the Medicaid rate durability behind it. If the mix-shift is real and rates hold, the premium can be argued; if not, the entry is the problem.',
      caveat:
        'I do not set the 1–10 score or the pursue / selective / pass call. That is the IC Chair’s, after both councils are heard.',
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
      'The same asset the Partner sees, read for where it breaks. 84 clinics, ~$24M adjusted EBITDA, Medicaid-weighted. <span class="qtag cim">CIM</span> The model is in lane and the EBITDA is in band, so this does not die on the screen. It dies, if it dies, on the price paid for a payer mix that a state budget cycle can re-rate — and I am here to size that honestly before anyone wires a dollar.',
    screen: {
      label: 'What I ran',
      clear: true,
      html: 'Concentration on every axis this model exposes — payer, referral, program. The largest single payer sits near 24%, under the 30% line but the dominant dependency. <span class="qtag cim">CIM p.23</span> No gate trips. But concentration clears as a number while the rate exposure behind it does not show up as a gate at all — that is the risk a bright line misses, and it is mine to size.',
    },
    pillars: [
      {
        name: 'The Sentinel',
        lens: 'reimbursement & regulatory durability',
        html: 'The kill that leads the list. Revenue is weighted toward Medicaid, where rates are set administratively, not negotiated — a state rate cut flows straight to margin with little to offset it. <span class="qtag cim">CIM p.22</span> The recurring demand protects volume, not price. The mitigant is a commercial mix-shift the Partner credits, but that is a plan, not yet in the P&amp;L. This is the open question, and it leads.',
      },
      {
        name: 'The Steward of price',
        lens: 'is the entry defensible',
        html: 'The 12.1× entry sits above the ~10× ceiling a B+ grade carries. <span class="qtag data">DATA</span> Most blown deals are fine assets at the wrong number, and this is a fine asset at a number above the line. The premium is the thesis, not the asset — and a premium underwritten on a mix-shift that has not happened is a premium underwritten on hope.',
      },
      {
        name: 'The Auditor',
        lens: 'is the growth real',
        html: 'Same-clinic growth is the figure I cannot yet trace: is it price, volume, or acuity? <span class="qtag qoe">QoE</span> If the organic story is mostly price, the durability the Partner is crediting is thinner than the deck suggests, and the de novo template is unproven at this scale until the ramp curve ties to plan. I hold the grade provisional until that bridge clears.',
      },
      {
        name: 'The Contrarian',
        lens: 'the bear case at its strongest',
        html: 'The cautionary comp looks most like this deal. Clarvida Health entered above 11×, Medicaid-heavy, and returned 1.4× after a rate cut. <span class="qtag chron">CHRON</span> Meridian at 12.1× sits above the bracket and shares that exposure. The sub-10× behavioral health entries returned a median 2.3×; the one above 11× is the loss. That is the strongest honest version of why this goes wrong.',
      },
    ],
    tensions: [
      'The Partner credits the commercial mix-shift as a Credible lever; my Auditor sees no attainment history behind it yet. We agree it exists — we disagree on whether you can pay 12.1× for it today.',
      'The price and the floor are the same question seen twice: if Medicaid rates soften, the premium and the protected downside fall together. The Partner holds the asset apart from the price; I read them as one exposure.',
    ],
    questions: [
      'Medicaid versus commercial share by state, and the rate outlook in the largest Medicaid markets — the kill-or-clear question.',
      'The same-clinic revenue bridge: how much of organic growth is price versus volume versus acuity?',
      'How contracted versus aspirational is the commercial mix-shift, and what attainment stands behind it?',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'No gate trips, and the asset is real — but the 12.1× entry is above the ~10× ceiling the grade earns, and the Medicaid rate exposure is unpriced until the mix-shift is evidenced. I would hold the grade at B+ and treat the price as the live concern: the cautionary comp at this entry returned 1.4×. <span class="qtag chron">CHRON</span> Pursue only with the premium earned or negotiated out.',
      move: 'The Medicaid rate durability and the same-clinic bridge. They decide whether the asset earns the premium or the entry is simply the problem.',
      caveat:
        'I build the case against the deal, not the verdict. The IC Chair weighs my findings against the Partner’s and sets the call.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'A named preferred lane — recurring, visit-based outpatient revenue, payer-contracted, with no out-of-network model. <span class="qtag cim">CIM</span>',
      examiner: 'Tested the model, not the label: behavioral health is core, no facility tail in the revenue. It passes clean.',
      contested: false,
    },
    {
      axis: 'Protected downside',
      partner:
        'Demand is recurring and non-deferrable — the spend a patient cuts last. The base is real even if the mix is weighted. <span class="qtag cim">CIM</span>',
      examiner:
        'The base protects volume, not price. Revenue is Medicaid-weighted, and a rate action is set administratively against you. <span class="qtag cim">CIM p.22</span>',
      contested: true,
      ruling:
        'The floor is <em>real but cracked</em>: recurring demand holds volume; the Medicaid weighting leaves price exposed to a rate action. That is why this is a 6, not a clean pursue — the downside is protected on the line that does not matter most.',
    },
    {
      axis: 'Asset quality vs price',
      partner:
        'A B+ asset on the Medicaid-weighted mix, held apart from price. The walk-away the grade earns is ~10×. <span class="qtag data">DATA</span>',
      examiner:
        'And the entry is 12.1×, above that ceiling. The closest high-entry comp, Clarvida, returned 1.4×. The premium is the thesis, not the asset. <span class="qtag chron">CHRON</span>',
      contested: true,
      ruling:
        'Holds <em>B+</em>; the ~10× ceiling stands, and the 12.1× entry is above the line. Price above the ceiling is not a hard-pass — it is the judgment the verdict turns on. Selective: pursue only if the premium is earned in diligence or negotiated toward the line.',
    },
    {
      axis: 'Value creation',
      partner:
        'Three controllable levers: de novo on a proven template (Credible), commercial mix-shift (Credible), disciplined tuck-ins (Credible). The mix-shift also de-risks the downside. <span class="qtag ic">IC</span>',
      examiner:
        'Mix-shift is aspirational until it’s in the P&amp;L, and the de novo template is unproven at this scale. Credible levers, not banked ones.',
      contested: false,
    },
    {
      axis: 'Management & data',
      partner:
        'Founder-clinician led with an experienced CFO; clinically credible, operator-run, and reported figures tie. <span class="qtag qoe">QoE</span>',
      examiner: 'Figures tie at the summary level. Same-clinic growth quality — price versus volume versus acuity — is the open trace.',
      contested: false,
    },
  ],

  converse: {
    opening:
      'The asset is real and in lane; the fight is the price and the Medicaid mix — two reasons it stops at selective.',
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
            html: 'It can. The asset is a genuine B+ — recurring demand, a real network, levers that are ours to pull — and the mix-shift toward commercial both lifts margin and de-risks the floor. <span class="qtag data">DATA</span> If that shift is contracted and rates hold, 12.1× is arguable. I grade what’s there at ~10×, and I would pay above it only for a premium that’s evidenced, not hoped.',
          },
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'And it isn’t evidenced. The premium rides a mix-shift that isn’t in the P&amp;L and a Medicaid book a state can re-rate. <span class="qtag chron">CHRON</span> The closest high-entry comp, Clarvida, was Medicaid-heavy above 11× and returned 1.4×. You’re paying an A multiple for a B+ asset on a plan.',
          },
        ],
        ruling:
          '<em>B+ holds, ceiling ~10×, entry 12.1× is above the line.</em> The premium is unproven, so the verdict is selective, not pursue. Pursue only if diligence makes the commercial mix-shift real or the price is negotiated toward the ceiling. The story does not move the number.',
      },
      {
        q: 'What would move it to a pass?',
        contested: false,
        replies: [
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'A gate, or the price held with no path to compression. Single-payer concentration over 30% would auto-pass it; the largest today is near 24%. <span class="qtag cim">CIM</span> Or diligence showing the organic growth is mostly price, against a closest comp that returned 1.4× — that slides it.',
          },
          {
            voice: 'partner',
            role: '· the floor',
            html: 'I’d add a Medicaid rate cut with no commercial offset. The recurring demand still holds volume, but the floor I’m crediting thins to the bone. <span class="qtag cim">CIM</span> At that point the entry isn’t a premium — it’s the problem, and this is someone else’s deal.',
          },
        ],
      },
    ],
  },
}
