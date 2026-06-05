import type { CouncilData } from '../councilTypes'

/**
 * Cardinal Specialty Pharmacy — the committee behind the 8 / A− / Pursue.
 * The clean in-lane fit: a protected downside at a disciplined entry, with
 * reimbursement durability as the one live risk the Examiner is hunting.
 */
export const cardinal: CouncilData = {
  chair: {
    verdictLabel: 'Pursue',
    go: true,
    score: '8',
    grade: 'A−',
    entry: '8.8×',
    resolution:
      'The Floor holds. I priced reimbursement durability into the grade, not the verdict — <em>held A− over the Examiner’s B+</em>, and kept the Pursue. 8.8× sits below the 9.5× ceiling the grade earns. Two fights worth your eye: the grade, and how much of the case rests on a lever not yet in the P&amp;L.',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'A− asset', kind: 'grade' },
      { text: 'walk-away ~9.5×', kind: 'ceil' },
      { text: 'provisional · pre-scrutiny', kind: 'prov' },
    ],
    whatISee:
      'A national specialty pharmacy in limited-distribution therapies — roughly $32M adjusted EBITDA on $175M revenue. <span class="qtag cim">CIM</span> The CIM has just landed, so this is a screen-stage read, provisional by design. The asking range implies an ~8.8× entry; I read that for context and set it aside before grading.',
    screen: {
      label: 'Hard-pass screen',
      clear: true,
      html: 'I ran the triggers first, before building any case. Not manufacturing or CME; not an out-of-network model; payer <em>and</em> manufacturer concentration both under 30% — the axes that matter for a limited-distribution model; EBITDA inside the $20–75M band; a credible process. Clear — and only then did I let myself build the bull case.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'Squarely in lane. Specialty pharmacy is a named preferred lane, and I tested the model, not the end market: refill-driven recurring revenue on limited-distribution drugs, not a manufacturing tail dressed as services. <span class="qtag cim">CIM p.9</span> A healthcare-durable model, not one that merely sells into healthcare.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'A floor I could stand on. Recurring revenue with demonstrated refill retention — a therapy a patient cuts last, not first — and FCF conversion above the framework’s 50% preference. <span class="qtag cim">CIM</span> The return holds with the exit multiple flat to entry; it does not need the multiple to move. Net leverage is the one figure I’d trace through the adjustment bridge before IC.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'Three controllable levers, graded honestly: procurement and gross-to-net at scale (<em>Proven</em>), therapy-mix shift toward higher-margin categories (<em>Credible</em>), regional tuck-ins on a playbook we’ve run before (<em>Credible</em>). <span class="qtag ic">IC</span> The return rides operations, not leverage. AI on adherence I’d score as a named diligence item, not a thesis.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: 'I grade the asset <em>A−</em> on quality and durability, held apart from price, and the walk-away that grade earns is ~9.5×. The 8.8× entry sits below it — so the cardinal error, paying an A multiple for a lesser asset, is avoided here. <span class="qtag data">DATA</span> The grade is provisional until The Examiner’s quality-of-earnings work confirms the bridge is real; a soft bridge would make this a B+ I haven’t caught yet.',
      },
    ],
    tensions: [
      'The Operator would underwrite mix-shift as Credible; The Floor will only stand on the recurring base that exists today. How much of the case rests on a lever not yet in the P&amp;L?',
      'I grade A− today; the process wants A pricing. The gap between those two numbers is the negotiation — and the risk.',
      'Reimbursement durability could move this entire read, and it belongs to The Examiner. I expect the hardest push there, and I’m not pre-empting it.',
    ],
    questions: [
      'What share of gross profit sits in the top one, three, and five manufacturer and payer relationships, and what are the renewal terms?',
      'What does refill retention look like by cohort over 24 months — genuinely recurring, or re-won every period?',
      'Where is net leverage heading once the add-back bridge is traced all the way through?',
    ],
    closing: {
      label: 'My conviction read',
      html: 'Pursue-worthy on this council’s merits — a clean in-lane fit with a protected downside, at a disciplined entry. Proposed grade <em>A−</em>, walk-away ~9.5×, both provisional and subject to The Examiner.',
      move: 'Reimbursement durability. If it holds, this is the strongest deal on the screen; if it cracks, the grade and the ceiling both come down.',
      caveat:
        'I do not set the 1–10 score or the pursue / pass call. That is the IC Chair’s, after both councils are heard.',
    },
  },

  examiner: {
    lens: 'Scrutiny Council · what kills the deal',
    proposes: [
      { text: 'grade provisional', kind: 'grade' },
      { text: 'reimbursement = open', kind: 'ceil' },
      { text: 'pending QoE', kind: 'prov' },
    ],
    whatISee:
      'The same asset the Partner sees, read for where it breaks. $32M adjusted EBITDA is a position, not a fact, until the bridge ties. <span class="qtag qoe">QoE</span> My job is not to talk the deal out of the room — it is to find the thing that would cost us money, and price it honestly before anyone wires a dollar.',
    screen: {
      label: 'What I ran',
      clear: true,
      html: 'Concentration on every axis a limited-distribution model exposes — payer, manufacturer, referral. The largest manufacturer relationship sits near 22%, under the 30% line but close enough to watch. <span class="qtag cim">CIM</span> No gate trips. The risk here is not a bright line; it is durability, and durability hides.',
    },
    pillars: [
      {
        name: 'Reimbursement',
        lens: 'the criterion that kills healthcare deals',
        html: 'Gross-to-net and DIR-fee trends are not fully evidenced in what was loaded. <span class="qtag qoe">QoE</span> A handful of limited-distribution contracts carry the margin; if one manufacturer term or a payer schedule moved, the floor the Partner is standing on thins. This is the open question, and it leads my list.',
      },
      {
        name: 'Earnings quality',
        lens: 'is the EBITDA real',
        html: 'The add-back bridge is modest — under the 40% uplift that draws a penalty — which is in the deal’s favor. <span class="qtag qoe">QoE</span> But "modest" is not "cleared." Until I tie the bridge line by line, the A− grade is a B+ that has not been caught yet, and I will say so plainly.',
      },
      {
        name: 'Concentration',
        lens: 'who can hurt you',
        html: 'Manufacturer near 22%, payer mix diversified, referral sources spread. <span class="qtag data">DATA</span> No single relationship trips the gate today. The question is the renewal terms behind the top three — a number under 30% with a soft contract is more fragile than a higher number locked for five years.',
      },
      {
        name: 'Management & data',
        lens: 'can you trust the numbers',
        html: 'Operator-led with a public-company CFO; reported figures tie at the summary level. <span class="qtag qoe">QoE</span> Founder dependency is the one I’d name — the playbook the Operator wants to run leans on people, not just systems. Not disqualifying; a diligence item.',
      },
    ],
    tensions: [
      'The Partner credits mix-shift as a Credible lever; I will not underwrite margin that isn’t in the P&amp;L. We agree it exists — we disagree on whether you can pay for it today.',
      'The grade and the floor are the same question seen twice: if reimbursement softens, the A− and the protected downside fall together. The Partner holds them apart; I don’t.',
    ],
    questions: [
      'Show me the gross-to-net bridge by manufacturer, and the DIR-fee trend over eight quarters.',
      'What are the renewal dates and terms on the top three limited-distribution contracts?',
      'Of the adjusted EBITDA, how much is run-rate versus pro-forma for actions not yet taken?',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'No gate trips, and the asset is real — but the A− is unproven until the bridge ties and reimbursement durability is evidenced. I’d hold the grade at B+ pending quality-of-earnings, and reserve the right to move it back up when the numbers clear.',
      move: 'The gross-to-net bridge. It decides whether the EBITDA — and therefore the grade, the ceiling, and the floor — is what the CIM says it is.',
      caveat:
        'I build the case against the deal, not the verdict. The IC Chair weighs my findings against the Partner’s and sets the call.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'A named preferred lane — refill-driven recurring revenue on limited-distribution therapies, not a manufacturing model. <span class="qtag cim">CIM</span>',
      examiner: 'Tested the model, not the label: no manufacturing tail in the revenue. It passes clean.',
      contested: false,
    },
    {
      axis: 'Protected downside',
      partner:
        'Recurring revenue with demonstrated refill retention — a therapy a patient cuts last, not first — and FCF conversion above the 50% preference. <span class="qtag cim">CIM</span>',
      examiner: 'Retention data confirms it: recurring, not merely repeated. The floor is real.',
      contested: false,
    },
    {
      axis: 'Asset quality vs price',
      partner:
        'An A− asset on revenue quality, held apart from price. The walk-away the grade earns is ~9.5×; the 8.8× entry sits below it. <span class="qtag data">DATA</span>',
      examiner:
        'Grade is provisional until QoE clears. A soft add-back bridge could make this a B+ that hasn’t been caught yet. <span class="qtag qoe">QoE</span>',
      contested: true,
      ruling:
        'Holds <em>A−</em>; entry 8.8× sits under the 9.5× ceiling. Revisit the grade if QoE softens the bridge — the ceiling does not move with the story.',
    },
    {
      axis: 'Value creation',
      partner:
        'Three controllable levers: procurement &amp; gross-to-net at scale (Proven), therapy-mix shift (Credible), regional tuck-ins on a proven playbook (Credible). <span class="qtag ic">IC</span>',
      examiner:
        'Mix-shift is aspirational until it’s in the P&amp;L. One proven lever and two hopeful ones is a thinner deal than the model suggests.',
      contested: true,
      ruling:
        'Credit procurement as <em>proven</em>; price mix-shift as credible, not banked. The return underwrites on the floor and one lever — anything past that is upside, not basis.',
    },
    {
      axis: 'Management & data',
      partner:
        'Operator-led with a public-company CFO; reported figures tie and the adjustment bridge is modest. <span class="qtag qoe">QoE</span>',
      examiner: 'Bridge sits under the 40% uplift that draws a penalty. Founder dependency is the one open question.',
      contested: false,
    },
  ],

  converse: {
    opening:
      'The Floor holds; two fights remain — the grade, and a lever not yet in the P&amp;L.',
    suggests: [
      'Why not pass?',
      'Compare to Summit Specialty',
      'Where exactly is the floor?',
      'What’s the one risk to clear?',
    ],
    rounds: [
      {
        q: 'Why A−, and not an A?',
        contested: true,
        replies: [
          {
            voice: 'partner',
            role: '· the steward',
            html: 'It earns the A− on revenue quality — recurring, retained, the spend a patient cuts last. But it isn’t an A: the downside is protected, not impregnable, and a slice of the margin rides a mix-shift that isn’t in the P&amp;L yet. <span class="qtag data">DATA</span> I grade what’s there, not what’s hoped for.',
          },
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'And even the A− is provisional. The adjusted EBITDA leans on an add-back bridge I haven’t cleared. <span class="qtag qoe">QoE</span> If the bridge softens under diligence, this is a B+ wearing an A− today.',
          },
        ],
        ruling:
          '<em>A− stands</em>, with the walk-away at 9.5×. If the Examiner’s quality-of-earnings work softens the bridge, the grade comes down — and the ceiling with it. The story does not move the number.',
      },
      {
        q: 'What would make you walk?',
        contested: false,
        replies: [
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'A single manufacturer or payer over 30% of gross profit — or refill retention that turns out to be re-won each period, not recurring. Either one, and the floor I’m crediting isn’t there.',
          },
          {
            voice: 'partner',
            role: '· the floor',
            html: 'I’d add the price. An entry above 9.5× and this is someone else’s deal. The asset is worth <em>pursuing</em> — it is not worth <em>chasing</em>.',
          },
        ],
      },
    ],
  },
}
