import type { CouncilData } from '../councilTypes'

/**
 * Cardinal Specialty Pharmacy: the committee behind the 8 / A− / Pursue.
 * The clean in-lane fit: a protected downside at a disciplined entry, with
 * reimbursement durability as the one live risk the Examiner is hunting.
 *
 * Voice reference for the whole product (see docs/VOICE_AND_TONE.md):
 * Partner warm and discursive, Examiner clipped and forensic, Chair terse.
 * No em-dashes anywhere.
 */
export const cardinal: CouncilData = {
  chair: {
    verdictLabel: 'Pursue',
    verdict: 'pursue',
    score: '8',
    grade: 'A−',
    entry: '8.8×',
    resolution:
      'A−, Pursue, 8.8×. The ceiling’s 9.5×, so there’s room. The grade was the fight. I held A−, the Examiner argued B+, and reimbursement is why. I put that risk in the grade and kept the call. Two things to watch in diligence: the bridge under the grade, and a value lever that isn’t in the P&amp;L yet. <span class="qtag data">DATA</span>',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'A− asset', kind: 'grade' },
      { text: 'walk-away ~9.5×', kind: 'ceil' },
      { text: 'provisional · pre-scrutiny', kind: 'prov' },
    ],
    whatISee:
      'National specialty pharmacy, limited-distribution therapies. About $32M of EBITDA on $175M of revenue. <span class="qtag cim">CIM</span> The CIM landed this morning, so take this as a first read. I’ll firm it up in diligence. The ask works out to roughly 8.8×. I’ve noted that and set it aside; I want to grade the asset before the price gets in my head.',
    screen: {
      label: 'Hard-pass screen',
      clear: true,
      html: 'I ran the screen before anything else. No manufacturing, no CME. Not out-of-network. Payer and manufacturer concentration both sit under 30%. For a limited-distribution book those are the two that can bite. <span class="qtag cim">CIM</span> EBITDA’s $32M, inside the band. The process is real. Nothing trips, so I let myself like it.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'One of our lanes, dead center: specialty pharmacy. And it’s the real thing: refill-driven recurring revenue on limited-distribution drugs, with no manufacturing hiding in the back. <span class="qtag cim">CIM p.9</span> I checked the model, not just the label. It’s healthcare at the core, the durable kind.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'This is a floor I’d stand on. The revenue recurs and the refills retain. These are therapies people stay on. Cash conversion runs north of 50%, better than the framework asks. <span class="qtag cim">CIM</span> And the return clears even if the exit multiple never moves off entry, which is the test I care about. One number I’d trace before IC: where net leverage really lands once you walk the bridge.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'Three levers, and I’ll grade them straight. Procurement and gross-to-net at scale: Proven, we’ve done it. Mix-shift into higher-margin therapies: Credible. Regional tuck-ins on a playbook we know: Credible. <span class="qtag ic">IC</span> The money comes from running the business, not from the balance sheet. AI on adherence I’d carry as a diligence item; I’m not underwriting it.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: 'I grade it A− on quality, separate from what it costs. That grade earns a walk-away around 9.5×, and the ask is 8.8×, so we’re under our own ceiling. <span class="qtag data">DATA</span> Call the grade provisional: if the Examiner’s earnings work softens the add-back bridge, A− becomes B+. I’d rather find that now than after.',
      },
    ],
    tensions: [
      'My Operator wants to bank the mix-shift; my Floor will only count the revenue that’s already there. So how much of this case rides on a lever that isn’t in the numbers yet? That’s the one I keep circling.',
      'I’m at A−. The sell-side wants A pricing. Everything between those two numbers is the negotiation, and it’s where we lose money if we’re wrong.',
      'Reimbursement could move this whole read, and that’s the Examiner’s ground. I expect him to push hardest there. He should.',
    ],
    questions: [
      'Top one, three, five manufacturer and payer relationships: what share of gross profit, and when do the contracts renew?',
      'Refill retention by cohort, 24 months. Is it recurring, or are we re-winning it every fill?',
      'Net leverage, once you’ve walked the whole add-back bridge: where does it land?',
    ],
    closing: {
      label: 'My conviction read',
      html: 'On our side of the table, this is a pursue. In-lane, downside I can defend, entry under the ceiling. I’m proposing <em>A−</em> and a 9.5× walk-away, both provisional, both the Examiner’s to test.',
      move: 'Reimbursement. If it holds, this is the best thing on the screen. If it cracks, the grade and the ceiling come down together.',
      caveat:
        'The number and the pursue / pass aren’t mine. The Chair sets those once he’s heard us both.',
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
      'Same asset. I read it for where it breaks. The $32M of adjusted EBITDA is the number the seller would like to be true; until the bridge ties, that’s all it is. <span class="qtag qoe">QoE</span> I’m not here to kill deals. I’m here to find what costs us money, and price it before we wire.',
    screen: {
      label: 'What I ran',
      clear: true,
      html: 'Ran concentration on every axis this model exposes: payer, manufacturer, referral. Largest manufacturer ~22%. <span class="qtag cim">CIM</span> Under the 30% line. Close enough to watch. No gate trips. The risk isn’t a bright line. It’s durability, and that hides.',
    },
    pillars: [
      {
        name: 'Reimbursement',
        lens: 'the criterion that kills healthcare deals',
        html: 'Gross-to-net and DIR-fee trends: not in what was loaded. <span class="qtag qoe">QoE</span> A handful of limited-distribution contracts carry the margin. Move one manufacturer term or one payer schedule and the Partner’s floor thins. This leads the list. Show me eight quarters.',
      },
      {
        name: 'Earnings quality',
        lens: 'is the EBITDA real',
        html: 'The add-back bridge is modest, under the 40% uplift, which counts for the deal. <span class="qtag qoe">QoE</span> Modest isn’t cleared. Until I tie it line by line, A− is a B+ I haven’t caught. I’m holding B+.',
      },
      {
        name: 'Concentration',
        lens: 'who can hurt you',
        html: 'Manufacturer ~22%. Payer mix spread, referral spread. Nothing trips today. <span class="qtag data">DATA</span> What I want is the renewal terms behind the top three. Twenty-two percent on a one-year contract tells me less than thirty locked for five.',
      },
      {
        name: 'Management & data',
        lens: 'can you trust the numbers',
        html: 'Operator-led, public-company CFO. Summary figures tie. <span class="qtag qoe">QoE</span> The one I’d flag: founder dependency. The Operator’s playbook runs on people more than systems. Not a kill. A diligence item.',
      },
    ],
    tensions: [
      'The Partner banks mix-shift as Credible. I won’t underwrite margin that isn’t in the P&amp;L. It exists; we just disagree on whether you pay for it today.',
      'Grade and floor are one question for me. Reimbursement softens, and A− and the downside go down together. The Partner keeps them in separate columns. I don’t.',
    ],
    questions: [
      'Gross-to-net bridge by manufacturer. DIR-fee trend, eight quarters.',
      'Renewal dates and terms on the top three limited-distribution contracts.',
      'Of the adjusted EBITDA, how much is run-rate, how much is pro-forma for actions not yet taken?',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'No gate trips. The asset’s real. But <em>A−</em> isn’t proven until the bridge ties and reimbursement is evidenced. I hold it at B+ for now, and I’ll move it back up the day the numbers clear.',
      move: 'The gross-to-net bridge. It tells me whether the EBITDA is real, and the grade, the ceiling, and the floor all sit on top of it.',
      caveat: 'I make the case against the deal. The verdict’s the Chair’s; he weighs me against the Partner.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'One of our lanes. Refill-driven, limited-distribution, recurring. No manufacturing in the mix. <span class="qtag cim">CIM</span>',
      examiner: 'Checked the model, not the label. No manufacturing tail. Clean.',
      contested: false,
    },
    {
      axis: 'Protected downside',
      partner:
        'Recurring, with retention that shows. Therapies people stay on. Cash conversion above 50%. <span class="qtag cim">CIM</span>',
      examiner: 'Retention data backs it: this recurs, it isn’t re-won each fill. Floor’s real.',
      contested: false,
    },
    {
      axis: 'Asset quality vs price',
      partner:
        'A− on revenue quality, graded before price. The walk-away that earns is ~9.5×. Entry’s 8.8×, under the ceiling. <span class="qtag data">DATA</span>',
      examiner:
        'Provisional until QoE clears. A soft add-back bridge makes this a B+. I’m holding B+ until it ties. <span class="qtag qoe">QoE</span>',
      contested: true,
      ruling:
        '<em>A− holds.</em> 8.8× under a 9.5× ceiling. If QoE softens the bridge, the grade comes down. The ceiling doesn’t move for a story.',
    },
    {
      axis: 'Value creation',
      partner:
        'Three levers. Procurement and gross-to-net: Proven. Mix-shift: Credible. Tuck-ins on a known playbook: Credible. <span class="qtag ic">IC</span>',
      examiner:
        'Mix-shift is aspirational until it’s in the P&amp;L. One proven lever, two hoped-for. Thinner than it looks.',
      contested: true,
      ruling:
        'Procurement’s <em>proven</em>, credit it. Mix-shift’s credible, don’t bank it. Underwrite on the floor and the one lever; the rest is upside.',
    },
    {
      axis: 'Management & data',
      partner: 'Operator-led, public-company CFO. Figures tie, bridge is modest. <span class="qtag qoe">QoE</span>',
      examiner: 'Bridge under the 40% uplift, no penalty. Founder dependency’s the open question.',
      contested: false,
    },
  ],

  converse: {
    opening: 'Floor holds. Two fights left: the grade, and a lever that isn’t in the numbers yet.',
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
            html: 'It earns the A−: recurring revenue, real retention, the kind of therapy people stay on. <span class="qtag data">DATA</span> It’s not an A because the downside is protected, not bulletproof, and some of the margin rides a mix-shift that isn’t in the numbers yet. I grade what’s in front of me.',
          },
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'And the A− is provisional. The EBITDA leans on an add-back bridge I haven’t cleared. <span class="qtag qoe">QoE</span> If it softens in diligence, this is a B+ today, wearing an A−.',
          },
        ],
        ruling:
          '<em>A− stands.</em> Walk-away 9.5×. If QoE softens the bridge, the grade comes down and the ceiling with it. The story doesn’t move the number.',
      },
      {
        q: 'What would make you walk?',
        contested: false,
        replies: [
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'One manufacturer or payer over 30% of gross profit. Or retention that turns out to be re-won every fill. Either one and the floor’s gone.',
          },
          {
            voice: 'partner',
            role: '· the floor',
            html: 'I’d add price. Above 9.5×, it’s someone else’s deal. Pursue it; don’t chase it.',
          },
        ],
      },
    ],
  },
}
