import type { CouncilData } from '../councilTypes'

/**
 * Cypress Dental Partners. The committee behind the 7 / B+ / Pursue with
 * discipline. A strong, fragmented roll-up that sits OUT of the named lanes,
 * with a discretionary slice of revenue and an entry pressed near the ceiling.
 * More fought-over than Cardinal: three contested axes, not two.
 *
 * Voice reference for the whole product (see docs/VOICE_AND_TONE.md):
 * Partner warm and discursive, Examiner clipped and forensic, Chair terse.
 */
export const cypress: CouncilData = {
  chair: {
    verdictLabel: 'Pursue with discipline',
    verdict: 'pursue',
    score: '7',
    grade: 'B+',
    entry: '9.2×',
    resolution:
      'B+, pursue with discipline, 9.2×. A 7, not an 8. It’s out of lane. The roll-up is real and 9.2× sits just under the ceiling the grade earns. Two things keep my hand steady: I’m making the lane call consciously, and a discretionary slice softens the floor. Hold B+. Hold the price.',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'B+ asset', kind: 'grade' },
      { text: 'walk-away ~9.5×', kind: 'ceil' },
      { text: 'out of lane · with discipline', kind: 'prov' },
    ],
    whatISee:
      'A fragmented dental services roll-up. About $22M of EBITDA across roughly 140 practices, asking near 9.2×. <span class="qtag cim">CIM</span> Dental isn’t a named lane, so I’m a pursue-with-discipline from the first line. The case has to earn the out-of-lane call; I won’t assume it.',
    screen: {
      label: 'Hard-pass screen',
      clear: true,
      html: 'I ran the screen first. Not manufacturing, not CME, not out-of-network. EBITDA’s about $22M, inside the $20–75M band. <span class="qtag data">DATA</span> No single practice or payer near the 30% line. The book is spread across ~140 practices. So nothing trips. The constraint isn’t a gate. It’s the out-of-lane judgment, and holding price.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'Out of the cleanest lane, with a named reason to underwrite it. A fragmented market, a proven roll-up playbook, a recurring recall-and-hygiene base. <span class="qtag cim">CIM</span> An out-of-lane yes needs a specific, defensible reason. The fragmentation and the recurring base are mine.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'Mixed. The recall and hygiene base recurs and sticks, because people keep those appointments. But a slice, ortho and cosmetic, is discretionary and gets deferred in a downturn, the way a specialty drug doesn’t. <span class="qtag qoe">QoE</span> Most of the floor holds. The elective portion is the soft spot, and it’s part of why this is a 7.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'Real, controllable levers. Practice-level margin and ops standardization: Credible. Tuck-ins on a proven platform: Credible. Procurement at scale across the network: Credible. <span class="qtag ic">IC</span> The money comes from running the business. But the tuck-in math has to clear at multiples we can actually pay, not the ones on the pitch.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: 'B+ on quality, graded before price, earning a walk-away around 9.5×. The 9.2× entry sits just under it, thin room. <span class="qtag chron">CHRON</span> Cedar Park is the comp that worked: 8.9× in, 2.8× out. Ridgeview Orthodontics is the warning: 10.4× in, 1.6× out. There’s almost no margin in the price.',
      },
    ],
    tensions: [
      'My Strategist sees a defensible out-of-lane yes. My Steward won’t pay an in-lane multiple for an out-of-lane asset. Where does the ceiling actually land?',
      'My Operator wants to bank the roll-up. My Floor stands only on the recurring recall base that exists today, not the elective slice, not the next tuck-in.',
      'The whole case leans on organic growth holding. And I can’t yet see whether that’s price, volume, or elective mix.',
    ],
    questions: [
      'Same-practice growth, last eight quarters, split across price, volume, and elective mix?',
      'What share of revenue is discretionary, ortho and cosmetic, versus recurring recall and hygiene?',
      'What multiples is the tuck-in pipeline actually closing at, and how deep is it?',
    ],
    closing: {
      label: 'My conviction read',
      html: 'On our side of the table, this is a pursue with discipline. A strong, fragmented roll-up at a fair-but-full entry, adjacent to the lanes rather than in them. I want this one, which is exactly when the price discipline has to come from someone other than me. I’m proposing <em>B+</em>, a 9.5× walk-away, and the out-of-lane call held consciously.',
      move: 'The durability and composition of organic growth. If the recurring base is doing the work, this holds. If it’s elective or price, the floor and the grade soften together.',
      caveat:
        'The 1–10 score and the pursue / pass aren’t mine. The Chair sets those once he’s heard us both.',
    },
  },

  examiner: {
    lens: 'Scrutiny Council · what kills the deal',
    proposes: [
      { text: 'grade provisional', kind: 'grade' },
      { text: 'out-of-lane premium = no', kind: 'ceil' },
      { text: 'pending QoE', kind: 'prov' },
    ],
    whatISee:
      'A fine dental roll-up. I read it for where it breaks. It’s out of lane, so my bar is higher than it’d be for a specialty pharmacy. <span class="qtag cim">CIM</span> The asset is real. Two questions: how much of the revenue is discretionary, and whether 9.2× leaves any room for the math.',
    screen: {
      label: 'What I ran',
      clear: true,
      html: 'Ran concentration across practices and payers. Diversified, no axis near 30%. <span class="qtag data">DATA</span> EBITDA in band. Not manufacturing, CME, out-of-network. No gate trips. The risk isn’t a bright line. It’s the elective share of revenue, and an entry pressed against the ceiling.',
    },
    pillars: [
      {
        name: 'The Lane',
        lens: 'is it close enough to underwrite',
        html: 'Dental sells into healthcare. I test how it monetizes. The recurring recall base behaves like healthcare. The ortho and cosmetic slice behaves like consumer discretionary. <span class="qtag cim">CIM</span> That mix is what raises my bar. The out-of-lane premium isn’t earned yet.',
      },
      {
        name: 'Earnings quality',
        lens: 'is the growth real',
        html: 'Same-practice growth runs mid-single digits. The split across price, volume, and elective mix: not in what was loaded. <span class="qtag qoe">QoE</span> If it’s mostly price or elective, the recurring-revenue case softens and the grade with it. This is the first thing I’d tie out. Show me eight quarters.',
      },
      {
        name: 'Protected downside',
        lens: 'what defers in a downturn',
        html: 'The discretionary portion is the soft spot. Ortho and cosmetic get deferred when budgets tighten. Recall and hygiene mostly don’t. <span class="qtag qoe">QoE</span> Size that share before you bank the floor. The Partner is crediting a base he hasn’t separated from the elective slice.',
      },
      {
        name: 'Price',
        lens: 'does the math survive a flat multiple',
        html: '9.2× for an out-of-lane B+ is full. <span class="qtag chron">CHRON</span> Maple Grove returned 2.0× at 9.3×. Ridgeview Orthodontics, 1.6× at 10.4×. Show me the pipeline multiples before I move off that.',
      },
    ],
    tensions: [
      'The Partner credits the roll-up as Credible. I want the tuck-in pipeline shown at the multiples it’s closing, not the platform’s own.',
      'We agree the recall base recurs. We disagree on how much of the reported growth that base is actually driving.',
    ],
    questions: [
      'Decompose same-practice growth: how much price, how much volume, how much elective mix?',
      'Discretionary share of total revenue, and how did it behave in the last soft period?',
      'What entry multiples is the tuck-in pipeline clearing, and how contingent is the thesis on it?',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'No gate trips. The asset’s good. But out of lane, with a discretionary slice, at a full entry, the margin for error is thin. I hold the grade at <em>B+</em> and treat 9.2× as the top of what I’d pay, not a start.',
      move: 'The composition of organic growth. It decides whether the recurring base, and the floor and the grade on top of it, is as solid as the bull case needs.',
      caveat:
        'I build the case against the deal, not the verdict. The Chair weighs my findings against the Partner’s and sets the call.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'Out of the cleanest lane, with a named reason: a fragmented market, a proven roll-up playbook, a recurring recall base. <span class="qtag cim">CIM</span>',
      examiner:
        'Dental isn’t a named lane. The ortho/cosmetic slice monetizes like consumer discretionary. Bar rises. The premium isn’t obviously earned.',
      contested: true,
      ruling:
        '<em>Pursue with discipline.</em> A 7, not an 8. The lane call is a conscious judgment, not a gimme.',
    },
    {
      axis: 'Protected downside',
      partner:
        'The recall and hygiene base recurs and sticks. Most of the floor holds. <span class="qtag cim">CIM</span>',
      examiner:
        'Ortho and cosmetic are discretionary and defer in a downturn. The floor is partial until that slice is sized. <span class="qtag qoe">QoE</span>',
      contested: true,
      ruling:
        'Credit the recurring base. <em>Size the elective share</em> before banking the floor. That number is the difference between a 7 and a 6.',
    },
    {
      axis: 'Asset quality vs price',
      partner:
        'B+ asset. The 9.2× entry sits just under the ~9.5× ceiling. Cedar Park is the comp that worked, 8.9× for 2.8×. <span class="qtag chron">CHRON</span>',
      examiner:
        'Full price for an out-of-lane B+. Maple Grove (2.0× at 9.3×) and Ridgeview (1.6× at 10.4×) are the warnings. <span class="qtag chron">CHRON</span>',
      contested: true,
      ruling:
        'Hold <em>B+</em>. The entry’s at the edge of the ceiling. Discipline on price is the whole game here.',
    },
    {
      axis: 'Value creation',
      partner:
        'Ops standardization, tuck-ins on a proven platform, procurement at scale. Operational, not financial. <span class="qtag ic">IC</span>',
      examiner: 'The roll-up is real. It only pencils if the tuck-in math clears at realistic multiples. On that we agree.',
      contested: false,
    },
    {
      axis: 'Management & data',
      partner:
        'Experienced DSO operators. Reported figures tie at the summary level. <span class="qtag qoe">QoE</span>',
      examiner: 'The open item is the growth decomposition: price vs volume vs elective. Until that ties, the rest is provisional.',
      contested: false,
    },
  ],

  converse: {
    opening:
      'A defensible out-of-lane roll-up. The lane call and a discretionary slice keep it a pursue with discipline.',
    suggests: [
      'Why a 7 and not an 8?',
      'Compare to Cedar Park',
      'How big is the elective slice?',
      'What trips a hard pass?',
    ],
    rounds: [
      {
        q: 'Why pursue at all, if it’s out of lane?',
        contested: true,
        replies: [
          {
            voice: 'partner',
            role: '· the strategist',
            html: 'Because out of lane isn’t an automatic no. It’s a judgment that needs a named reason, and I have one: a fragmented market, a recurring recall base, a roll-up playbook that’s worked. <span class="qtag cim">CIM</span> That earns the look. The discipline goes in the price, not the pass.',
          },
          {
            voice: 'examiner',
            role: '· the lane',
            html: 'I test the monetization, not the label. The recall base is healthcare. The elective slice is consumer discretionary. <span class="qtag qoe">QoE</span> The bar for an out-of-lane yes is higher, and a chunk of this revenue doesn’t clear it.',
          },
        ],
        ruling:
          '<em>Pursue with discipline.</em> That’s why it’s a 7, not an 8. The lane call is mine, made consciously, with the price held tight.',
      },
      {
        q: 'Which of our deals does this look like?',
        contested: false,
        replies: [
          {
            voice: 'partner',
            role: '· the steward',
            html: 'Cedar Park, the one that worked: 8.9× in, 2.8× out. <span class="qtag chron">CHRON</span> Cypress at 9.2× sits just above that entry, in the band where disciplined dental roll-ups have returned.',
          },
          {
            voice: 'examiner',
            role: '· price',
            html: 'And Ridgeview is the one to remember: 10.4× in, 1.6× out. <span class="qtag chron">CHRON</span> The gap between Cedar Park and Ridgeview is almost all entry multiple, which is why you hold the line at 9.2×.',
          },
        ],
      },
    ],
  },
}
