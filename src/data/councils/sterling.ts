import type { CouncilData } from '../councilTypes'

/**
 * Sterling Rehab Network, the committee behind the 4 / B− / Pass.
 * The disciplined pass: an in-lane asset, no gate tripped, declined on price.
 * Entry sits above every realized rehab comp, and the organic engine that
 * would justify the premium isn't evidenced. The deal doesn't die on a
 * trigger. It dies on the firm paying full price for a growth case the
 * data won't back.
 *
 * Voice reference for the whole product (see docs/VOICE_AND_TONE.md):
 * Partner warm and discursive, Examiner clipped and forensic, Chair terse.
 */
export const sterling: CouncilData = {
  chair: {
    verdictLabel: 'Pass',
    verdict: 'pass',
    score: '4',
    grade: 'B−',
    entry: '10.5×',
    resolution:
      'Pass, B−, 10.5×. No gate trips. That goes on the record first. In band, in lane, diversified. <em>This is a discipline pass, not a screen failure.</em> The Steward held the line and I held it with him: a B− asset earns a walk-away near the realized band, around 9×. The ask is 10.5×, above every rehab deal the firm has actually closed <span class="qtag chron">CHRON</span>, and that premium buys an organic-growth story the data hasn’t shown. At 9× we’re talking. At 10.5× on this evidence, we pass.',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'B− asset', kind: 'grade' },
      { text: 'walk-away ~9×', kind: 'ceil' },
      { text: 'provisional · pre-scrutiny', kind: 'prov' },
    ],
    whatISee:
      'Outpatient physical and occupational therapy: 64 clinics, post-acute and direct-access referrals. About $15M of adjusted EBITDA on $96M of revenue. <span class="qtag cim">CIM</span> The growth history leans on acquisition, and I want to be clear-eyed about that. The asking range works out to 10.5×. I’ve noted it and set it aside; I grade the asset before the price gets in my head. I’ll build the honest case here, and the honest case is thinner than the deck wants.',
    screen: {
      label: 'Hard-pass screen',
      clear: true,
      html: 'I ran the triggers before building anything. In-lane outpatient rehab. Not facility-heavy, not CME, not out-of-network. EBITDA’s ~$15M, inside the $20–75M band. No single payer near the 30% line across 64 clinics and a broad referral base. <span class="qtag cim">CIM</span> Clear. Nothing here disqualifies, which is exactly why price discipline has to do the work the gate isn’t doing.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'Squarely in lane. Outpatient rehab sits inside the post-acute lane, and I tested the model rather than the end market: recurring, referral-driven therapy visits, no facility-heavy or out-of-network tail dressed up as services. <span class="qtag cim">CIM</span> The lane is the one thing I’m not arguing about.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'A floor I can mostly stand on. Therapy demand recurs and the referrals retain, but a share of it is elective, and a referral-source change can move volume. <span class="qtag cim">CIM</span> Recurring enough to grade. Not as protected as a non-deferrable model. That softness is part of why this grades B−, not B+.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'The levers exist, de novo clinics and tuck-ins, and I’ll grade them straight. The track record reads as growth-by-acquisition, not same-clinic improvement. <span class="qtag cim">CIM</span> One acquisitive lever I can name. An organic engine I can only assume. Until same-clinic growth shows up in the numbers, the value case is hoped for, not underwritten.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: 'B− on quality, graded apart from price. That grade earns a walk-away near the realized band, around 9×. The ask is 10.5×, above every rehab deal the firm has closed. <span class="qtag data">DATA</span> So here’s the cardinal error in plain sight: a full multiple for an asset the record says is worth less. I won’t move the ceiling because the story is good. <span class="qtag chron">CHRON</span>',
      },
    ],
    tensions: [
      'My Operator wants to bank the acquisitive lever; my Floor will only stand on the same-clinic base that exists today. The whole bull case rests on an organic engine that isn’t in the numbers yet. How much of this can I actually underwrite?',
      'I’m at B− and ~9×. The process wants 10.5×, A-band pricing. A notch of quality and a full turn of multiple sit in that gap, and it’s exactly the cardinal error this council exists to refuse.',
      'The organic-versus-acquired bridge is the Examiner’s ground, and it could move the grade either way. I expect the hardest push there. He should push.',
    ],
    questions: [
      'Same-clinic revenue growth, separated from acquired-clinic growth, by cohort year. Is the organic engine real, or is reported growth mostly bought?',
      'Top post-acute and physician referral sources. What share of volume, and how durable are the relationships?',
      'How did same-clinic visit volume hold in the last downturn? Price versus volume versus payer mix underneath it?',
    ],
    closing: {
      label: 'My conviction read',
      html: 'A fine in-lane asset I’d pursue at the right number, and 10.5× isn’t it. I’m proposing <em>B−</em> and a 9× walk-away, both provisional, both the Examiner’s to test. Worth <em>pursuing at the realized band</em>. Not worth <em>chasing</em> above it.',
      move: 'The organic-versus-acquired bridge. If diligence shows a real same-clinic engine, the grade and the price I’d pay both rise. If it confirms the growth was bought, the pass hardens.',
      caveat:
        'I don’t set the 1–10 score or the pursue / pass call. That’s the Chair’s, once he’s heard us both.',
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
      'Same network the Partner sees. I read it for where it breaks. 64 clinics, ~$15M of adjusted EBITDA on $96M, growth that’s leaned on acquisition. <span class="qtag cim">CIM</span> I’m not here to talk it out of the room. No gate trips, so it stays. I’m here to price what costs money: a full entry resting on a growth story nobody’s shown me.',
    screen: {
      label: 'What I ran',
      clear: true,
      html: 'Ran concentration on every axis a clinic network exposes: payer, referral source, geography. Spread across 64 clinics and a broad referral base. No single payer near the 30% line. <span class="qtag cim">CIM</span> No gate trips. The kill isn’t a bright line. It’s the gap between the price asked and the growth proven, and that hides in the bridge.',
    },
    pillars: [
      {
        name: 'The Sentinel',
        lens: 'reimbursement & referral durability',
        html: 'Therapy revenue is referral-dependent and partly elective. A referral-source change or a soft economy moves volume. <span class="qtag cim">CIM</span> No reimbursement edge, no out-of-network arbitrage I can find. The exposure is durability of the referral base, not a rule about to move. Real. Not the thing that kills this.',
      },
      {
        name: 'The Auditor',
        lens: 'is the growth real',
        html: 'This is the kill, and it’s mine. Reported growth isn’t organic growth, and much of this looks acquired. <span class="qtag qoe">QoE</span> Until the bridge ties by cohort, the de novo unit economics and the EBITDA adjustment bridge are positions, not facts. A growth case I can’t trace is a hope. It’s not a basis for 10.5×. Show me same-clinic, by cohort year.',
      },
      {
        name: 'The Reader',
        lens: 'can you trust the operator',
        html: 'Operator-led, acquisitive history. Cuts both ways. <span class="qtag cim">CIM</span> A team that knows how to buy clinics isn’t a team that’s shown it can grow them. A strong team isn’t a reason to pay above the realized band. Buying back an unproven organic engine is what I’m being asked to do here.',
      },
      {
        name: 'The Contrarian',
        lens: 'the strongest bear case',
        html: 'At its strongest: the growth is borrowed. Bought through acquisition, presented as a curve, with no same-clinic engine underneath. <span class="qtag qoe">QoE</span> Priced against the firm’s own record, Sterling at 10.5× looks like the rehab deal that <em>underperformed</em>. <span class="qtag chron">CHRON</span> Everyone’s treating the organic engine as given. Stress that, and the price has nothing to stand on.',
      },
    ],
    tensions: [
      'The Partner credits de novo and tuck-ins as live levers. My Auditor sees no same-clinic attainment behind them. The levers exist. We disagree on whether you can pay 10.5× for them today.',
      'Grade and price are one question for me. If the organic bridge fails, the B− softens and the premium gets worse together. The Partner holds quality and price apart. Here they move as one.',
    ],
    questions: [
      'Same-clinic revenue growth split from acquired-clinic growth, by cohort year. The single number that decides whether the organic engine is real.',
      'De novo unit economics versus the realized rehab record. Can the organic engine carry a 10.5× entry at all?',
      'The EBITDA adjustment bridge: acquisition and integration add-backs, owner comp, de novo ramp. Does each line tie?',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'No hard stop, and the asset’s real. But the case rides on an organic-growth story the data doesn’t support, at a price above every rehab deal the firm has closed. <span class="qtag chron">CHRON</span> I hold the grade no higher than B−, and I reserve the right to take it lower if the bridge confirms the growth was bought.',
      move: 'The organic-versus-acquired bridge. It decides whether there’s a growth engine here at all, and whether 10.5× is a stretch or a mistake.',
      caveat:
        'I make the case against the deal. The verdict’s the Chair’s; he weighs me against the Partner.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'In the post-acute lane. Recurring, referral-driven therapy visits, not facility-heavy or out-of-network. <span class="qtag cim">CIM</span>',
      examiner: 'Tested the model, not the label. No out-of-network arbitrage in the revenue. Passes clean.',
      contested: false,
    },
    {
      axis: 'Protected downside',
      partner:
        'Recurring and referral-driven, with a real network. A floor to stand on, if not impregnable. <span class="qtag cim">CIM</span>',
      examiner:
        'A share is elective and referral-dependent. A soft economy or a referral change moves volume. Recurring enough to grade, not non-deferrable.',
      contested: false,
    },
    {
      axis: 'Asset quality vs price',
      partner:
        'B− on quality, held apart from price. The walk-away that earns is ~9×, near the realized band. The 10.5× entry sits above it. <span class="qtag data">DATA</span>',
      examiner:
        'Entry’s above every realized rehab comp the firm holds: 8.2×, 8.7×, 9.0×. The premium isn’t backed by a differentiated asset. <span class="qtag chron">CHRON</span>',
      contested: true,
      ruling:
        'Walk-away holds near <em>9×</em>. The 10.5× ask sits above it and above every realized rehab entry. <em>Pass on price.</em> The ceiling doesn’t move for a good story. That’s the cardinal error this council refuses.',
    },
    {
      axis: 'Value creation',
      partner:
        'Two levers, de novo and tuck-ins, but the record reads as growth-by-acquisition, not same-clinic. The organic engine is assumed, not underwritten. <span class="qtag cim">CIM</span>',
      examiner:
        'No same-clinic attainment behind the organic case. Reported growth looks acquired. Until the bridge ties by cohort, this is a hope, not a lever. <span class="qtag qoe">QoE</span>',
      contested: true,
      ruling:
        'Credit the acquisitive lever as <em>real</em>. Price the organic engine as <em>unproven</em>, don’t bank it. The premium assumes a same-clinic story the data hasn’t shown, so it doesn’t get paid for here.',
    },
    {
      axis: 'Management & data',
      partner:
        'Operator-led, acquisitive history. The data ties at the summary level. <span class="qtag cim">CIM</span>',
      examiner:
        'The reported-to-organic bridge is the open question. A strong team doesn’t justify paying above the realized band for an unproven case. <span class="qtag qoe">QoE</span>',
      contested: false,
    },
  ],

  converse: {
    opening:
      'No gate trips. This is a pass on price, not a screen failure. A B− asset at 10.5× the record says is worth ~9×.',
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
            html: 'Because price discipline is its own kind of no. Nothing here disqualifies: in band, in lane, diversified. <span class="qtag cim">CIM</span> But I grade the asset B−, and that grade earns a walk-away near 9×. The entry’s 10.5×, above every rehab deal the firm has closed. <span class="qtag data">DATA</span> I don’t move the ceiling because the business is fine.',
          },
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'And the premium’s buying an organic-growth story I can’t trace. Much of the growth looks acquired, not same-clinic. <span class="qtag qoe">QoE</span> You’d pay above the realized band for an engine that hasn’t proven out. That’s the error the framework is built to avoid.',
          },
        ],
        ruling:
          '<em>Pass, 4 of 10.</em> Grade B−, walk-away near 9×. No gate trips. This is the framework declining to pay above the realized band for an unproven organic case. <span class="qtag chron">CHRON</span> Discipline, not a gate. At 9× it’s a different call. At 10.5× on this evidence, pass.',
      },
      {
        q: 'Which of our deals does this look like?',
        contested: false,
        replies: [
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'The rehab record is the whole argument. Three realized entries below 9.5× returned a median 2.3×. The one entered above 10× returned 1.5×. <span class="qtag chron">CHRON</span> Sterling at 10.5× is priced like the underperformer, not the winners.',
          },
          {
            voice: 'partner',
            role: '· the steward',
            html: 'The firm has done this deal, at lower prices, and it worked. <span class="qtag comp">COMP</span> Sterling’s asking for more and showing less. Match it on sub-sector, size, and multiple, and the record tells us where the price should be.',
          },
        ],
      },
    ],
  },
}
