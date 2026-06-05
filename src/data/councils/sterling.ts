import type { CouncilData } from '../councilTypes'

/**
 * Sterling Rehab Network — the committee behind the 4 / B− / Pass.
 * The disciplined pass: an in-lane asset with no gate tripped, declined on
 * price. The entry sits above every realized rehab comp, and the organic
 * engine that would justify the premium is not yet evidenced. The fight is
 * not whether the deal dies on a trigger — it doesn't — but whether the firm
 * pays a full price for a growth case the data does not support.
 */
export const sterling: CouncilData = {
  chair: {
    verdictLabel: 'Pass',
    verdict: 'pass',
    score: '4',
    grade: 'B−',
    entry: '10.5×',
    resolution:
      'No gate trips, and I want that on the record before anything else — in band, in lane, diversified. <em>This is a discipline pass, not a screen failure.</em> The Steward held the line and I held it with him: a B− asset, and a walk-away near the realized band, around 9×. The proposed entry is 10.5×, above every rehab deal the firm has actually realized <span class="qtag chron">CHRON</span>, and the premium buys an organic-growth story the data has not yet shown. A disciplined pass is worth more than an undisciplined pursue. At 9× this is a different conversation; at 10.5× on this evidence, it is a pass.',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'B− asset', kind: 'grade' },
      { text: 'walk-away ~9×', kind: 'ceil' },
      { text: 'provisional · pre-scrutiny', kind: 'prov' },
    ],
    whatISee:
      'An outpatient physical and occupational therapy network — 64 clinics, post-acute and direct-access referrals, roughly $15M adjusted EBITDA on $96M revenue. <span class="qtag cim">CIM</span> The growth history leans on acquisition. The asking range implies a 10.5× entry; I read that for context and set it aside before grading. I want to build the honest case — and the honest case is thinner than the deck wants it to be.',
    screen: {
      label: 'Hard-pass screen',
      clear: true,
      html: 'I ran the triggers first, before building any case. In-lane outpatient rehab — not facility-heavy, not CME, not out-of-network; EBITDA at ~$15M, inside the $20–75M band; no single payer near the 30% line across 64 clinics and a broad referral base. <span class="qtag cim">CIM</span> Clear. Nothing here is disqualifying — which is exactly why the price discipline has to do the work the gate isn’t doing.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'Squarely in lane. Outpatient rehab sits inside the post-acute lane, and I tested the model, not the end market: recurring, referral-driven therapy visits, not a facility-heavy or out-of-network tail dressed as services. <span class="qtag cim">CIM</span> The lane is not the problem here — the lane is the one thing I’m not arguing about.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'A floor I can mostly stand on, not one I’d call impregnable. Therapy demand is recurring and referral-driven, but a share is elective and a referral-source change can move volume. <span class="qtag cim">CIM</span> Recurring enough to grade, not as protected as a non-deferrable model — and that softness is part of why this is a B−, not a B+.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'The levers exist — de novo clinics and tuck-ins — but I have to grade them honestly: the track record reads as growth-by-acquisition, not same-clinic improvement. <span class="qtag cim">CIM</span> One acquisitive lever I can name, an organic engine I can only assume. Until same-clinic growth is shown, the value case is hoped for, not underwritten.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: 'I grade the asset <em>B−</em> on quality, held apart from price, and the walk-away that grade earns is near the realized band, around 9×. The proposed entry is 10.5× — above every rehab deal the firm has realized <span class="qtag data">DATA</span> — so this is the cardinal error in plain sight: a full multiple for an asset the record says is worth less. I will not move the ceiling because the story is good. <span class="qtag chron">CHRON</span>',
      },
    ],
    tensions: [
      'The Operator can name the acquisitive lever; The Floor will only stand on the same-clinic base that exists today. The whole bull case rests on an organic engine not yet in the numbers — how much of this can I actually underwrite?',
      'I grade a B− at ~9×; the process wants 10.5×, the price of an A-band asset. That gap — a notch of quality and a full turn of multiple — is exactly the cardinal error this council exists to refuse.',
      'The organic-versus-acquired bridge belongs to The Examiner, and it could move the grade in either direction. I expect the hardest push there, and I’m not pre-empting it.',
    ],
    questions: [
      'Show me same-clinic revenue growth separated from acquired-clinic growth, by cohort year — is the organic engine real, or is reported growth mostly bought?',
      'What share of referrals sits with the top post-acute and physician sources, and how durable are those relationships?',
      'How did same-clinic visit volume hold in the last downturn, and what is price versus volume versus payer mix underneath it?',
    ],
    closing: {
      label: 'My conviction read',
      html: 'A fine in-lane asset I would pursue at the right number — and 10.5× is not it. Proposed grade <em>B−</em>, walk-away near 9×, both provisional and subject to The Examiner. The asset is worth <em>pursuing at the realized band</em>; it is not worth <em>chasing</em> above it.',
      move: 'The organic-versus-acquired bridge. If diligence shows a genuine same-clinic engine, the grade and the price I’d pay both rise; if it confirms growth was bought, the pass hardens.',
      caveat:
        'I do not set the 1–10 score or the pursue / pass call. That is the IC Chair’s, after both councils are heard.',
    },
  },

  examiner: {
    lens: 'Scrutiny Council · what kills the deal',
    proposes: [
      { text: 'growth unproven', kind: 'grade' },
      { text: 'entry > realized comps', kind: 'ceil' },
      { text: 'pending organic bridge', kind: 'prov' },
    ],
    whatISee:
      'The same network the Partner sees, read for where the case breaks. 64 clinics, ~$15M adjusted EBITDA on $96M, growth that has leaned on acquisition. <span class="qtag cim">CIM</span> My job isn’t to talk this out of the room — no gate trips, so it stays. It’s to price the thing that costs money: a full entry resting on a growth story nobody has shown me yet.',
    screen: {
      label: 'What I ran',
      clear: true,
      html: 'Concentration on every axis a clinic network exposes — payer, referral source, geography. Spread across 64 clinics and a broad referral base; no single payer near the 30% line. <span class="qtag cim">CIM</span> No gate trips. The kill here is not a bright line — it’s the gap between the price asked and the growth proven, and that kind of risk hides in the bridge.',
    },
    pillars: [
      {
        name: 'The Sentinel',
        lens: 'reimbursement & referral durability',
        html: 'Therapy revenue is referral-dependent, and a share of it is elective — a referral-source change or a soft economy moves volume. <span class="qtag cim">CIM</span> No reimbursement edge or out-of-network arbitrage that I can see; the exposure is durability of the referral base, not a rule about to move. Real, but not the thing that kills this.',
      },
      {
        name: 'The Auditor',
        lens: 'is the growth real',
        html: 'This is the kill, and it is mine. Reported growth is not the same as organic growth, and the reported-to-organic bridge is the open question — much of the growth looks acquired, not same-clinic. <span class="qtag qoe">QoE</span> Until that bridge ties by cohort, the de novo unit economics and the EBITDA adjustment bridge are positions, not facts. A growth case I cannot trace is a hope, not a basis for a 10.5× price.',
      },
      {
        name: 'The Reader',
        lens: 'can you trust the operator',
        html: 'Operator-led with an acquisitive history — and that cuts both ways. <span class="qtag cim">CIM</span> A team that knows how to buy clinics is not the same as a team that has shown it can grow them. A credible operator does not buy back an unproven organic engine, and a strong team is not a reason to pay above the realized band.',
      },
      {
        name: 'The Contrarian',
        lens: 'the strongest bear case',
        html: 'Stated at its strongest: the growth is borrowed, not built — bought through acquisition and presented as a curve, with no same-clinic engine underneath. <span class="qtag qoe">QoE</span> Priced against the firm’s own record, Sterling at 10.5× looks like the rehab deal that <em>underperformed</em>, not the ones that worked. <span class="qtag chron">CHRON</span> The assumption everyone is treating as given is that the organic engine exists. Stress that, and the price has nothing to stand on.',
      },
    ],
    tensions: [
      'The Partner credits de novo and tuck-ins as live levers; my Auditor sees no same-clinic attainment behind them. We agree the levers exist — we disagree on whether you can pay 10.5× for them today.',
      'The grade and the price are the same question seen twice: if the organic bridge fails, the B− softens and the premium gets worse together. The Partner holds quality and price apart; here they move as one.',
    ],
    questions: [
      'Show me same-clinic revenue growth split from acquired-clinic growth, by cohort year — the single number that decides whether the organic engine is real.',
      'What are the de novo unit economics versus the realized rehab record, and can the organic engine actually carry a 10.5× entry?',
      'What is in the EBITDA adjustment bridge — acquisition and integration add-backs, owner comp, de novo ramp — and does each line tie?',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'No hard stop, and the asset is real — but the case rides on an organic-growth story the data does not yet support, at a price above every rehab deal the firm has realized. <span class="qtag chron">CHRON</span> I’d hold the grade no higher than B−, and reserve the right to take it lower if the bridge confirms growth was bought, not built.',
      move: 'The organic-versus-acquired bridge. It decides whether there is a growth engine here at all — and therefore whether 10.5× is a stretch or a mistake.',
      caveat:
        'I build the case against the deal, not the verdict. The IC Chair weighs my findings against the Partner’s and sets the call.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'In the post-acute lane — recurring, referral-driven therapy visits, not facility-heavy or out-of-network. <span class="qtag cim">CIM</span>',
      examiner: 'Tested the model, not the label: no out-of-network arbitrage in the revenue. It passes clean.',
      contested: false,
    },
    {
      axis: 'Protected downside',
      partner:
        'Recurring and referral-driven, with a real network. A floor to stand on, if not an impregnable one. <span class="qtag cim">CIM</span>',
      examiner:
        'A share is elective and referral-dependent; a soft economy or a referral change moves volume. Recurring enough to grade, not non-deferrable.',
      contested: false,
    },
    {
      axis: 'Asset quality vs price',
      partner:
        'A B− asset on quality, held apart from price; the walk-away the grade earns is near the realized band, around 9×. The 10.5× entry sits above it. <span class="qtag data">DATA</span>',
      examiner:
        'The entry is above every realized rehab comp the firm holds — 8.2×, 8.7×, 9.0× — and the premium is not supported by a differentiated asset. <span class="qtag chron">CHRON</span>',
      contested: true,
      ruling:
        'The walk-away holds near <em>9×</em>; the proposed 10.5× sits above it and above every realized rehab entry. <em>Pass on price.</em> The ceiling does not move because the story is good — that is the cardinal error this council refuses.',
    },
    {
      axis: 'Value creation',
      partner:
        'Two levers — de novo clinics and tuck-ins — but the record reads as growth-by-acquisition, not same-clinic improvement. The organic engine is assumed, not underwritten. <span class="qtag cim">CIM</span>',
      examiner:
        'No same-clinic attainment history behind the organic case. Reported growth looks acquired; until the bridge ties by cohort, this is a hope, not a lever. <span class="qtag qoe">QoE</span>',
      contested: true,
      ruling:
        'Credit the acquisitive lever as <em>real</em>; price the organic engine as <em>unproven</em>, not banked. The premium assumes a same-clinic story the data has not shown — so it does not get paid for here.',
    },
    {
      axis: 'Management & data',
      partner:
        'Operator-led with an acquisitive history; the data ties at the summary level. <span class="qtag cim">CIM</span>',
      examiner:
        'The reported-to-organic bridge is the open question, and a strong team does not justify paying above the realized band for an unproven case. <span class="qtag qoe">QoE</span>',
      contested: false,
    },
  ],

  converse: {
    opening:
      'No gate trips — this is a pass on price, not a screen failure: a B− asset at 10.5× the record says is worth ~9×.',
    suggests: [
      'Why pass if no gate trips?',
      'Is the asset bad?',
      'What would change it?',
      'Which of our deals does this look like?',
    ],
    rounds: [
      {
        q: 'Why pass if no gate trips?',
        contested: true,
        replies: [
          {
            voice: 'partner',
            role: '· the steward',
            html: 'Because price discipline is its own kind of no. Nothing here is disqualifying — in band, in lane, diversified. <span class="qtag cim">CIM</span> But I grade the asset a B−, and the walk-away that grade earns is near 9×. The entry is 10.5×, above every rehab deal the firm has realized. <span class="qtag data">DATA</span> I do not move the ceiling because the business is fine.',
          },
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'And the premium is buying an organic-growth story I can’t trace. Much of the growth looks acquired, not same-clinic. <span class="qtag qoe">QoE</span> You’d be paying above the realized band for an engine that hasn’t proven out. That’s the error the framework is built to avoid.',
          },
        ],
        ruling:
          '<em>Pass, 4 of 10</em>, grade B−, walk-away near 9×. No gate trips — this is the framework declining to pay above the realized band for an unproven organic case. <span class="qtag chron">CHRON</span> Discipline, not a gate. At 9× it is a different call; at 10.5× on this evidence, it is a pass.',
      },
      {
        q: 'Which of our deals does this look like?',
        contested: false,
        replies: [
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'The rehab record is the whole argument. The three realized entries below 9.5× returned a median 2.3×; the one entered above 10× returned 1.5×. <span class="qtag chron">CHRON</span> Sterling at 10.5× is priced like the underperformer, not the winners.',
          },
          {
            voice: 'partner',
            role: '· the steward',
            html: 'I’d say it plainly: the firm has done this deal, at lower prices, and it worked. <span class="qtag comp">COMP</span> Sterling is asking for more and showing less. Match it on sub-sector, size, and multiple, and the record is telling us where the price should be.',
          },
        ],
      },
    ],
  },
}
