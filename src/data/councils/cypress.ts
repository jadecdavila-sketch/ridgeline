import type { CouncilData } from '../councilTypes'

/**
 * Cypress Dental Partners — the committee behind the 7 / B+ / Pursue with
 * discipline. A strong, fragmented roll-up that sits OUT of the named lanes,
 * with a discretionary slice of revenue and an entry pressed near the ceiling.
 * More fought-over than Cardinal: three contested axes, not two.
 */
export const cypress: CouncilData = {
  chair: {
    verdictLabel: 'Pursue with discipline',
    go: true,
    score: '7',
    grade: 'B+',
    entry: '9.2×',
    resolution:
      'Out of lane, so this is a <em>pursue with discipline</em>, not a clean pursue — which is why it’s a 7, not an 8. The roll-up is real and the entry sits just under the ceiling the grade earns, but two things keep my hand steady: the lane call is a judgment I’m making consciously, and a discretionary slice of revenue softens the floor. Hold B+, hold the price.',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'B+ asset', kind: 'grade' },
      { text: 'walk-away ~9.5×', kind: 'ceil' },
      { text: 'out of lane · with discipline', kind: 'prov' },
    ],
    whatISee:
      'A fragmented dental services roll-up — roughly $22M EBITDA across about 140 practices, asking near 9.2×. <span class="qtag cim">CIM</span> Dental is not one of the named lanes, so I’m a pursue-with-discipline from the first line, not a clean pursue. The case has to earn the out-of-lane call, not assume it.',
    screen: {
      label: 'Hard-pass screen',
      clear: true,
      html: 'None is close. Not manufacturing, CME, or out-of-network. EBITDA is about $22M, inside the $20–75M band. <span class="qtag data">DATA</span> No single practice or payer is near the 30% line — the network is diversified across ~140 practices. The constraint here is not a gate; it is the out-of-lane judgment and holding price discipline.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'Out of the cleanest lane — but with a named reason to underwrite it, not enthusiasm. It’s a genuinely fragmented market with a proven roll-up playbook and a recurring recall-and-hygiene base. <span class="qtag cim">CIM</span> An out-of-lane yes needs a specific, defensible reason; the fragmentation and the recurring base are mine.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'Mixed, and I’ll say so honestly. The recall and hygiene base is recurring and sticky; but a slice — ortho and cosmetic — is discretionary and can be deferred in a downturn, unlike a specialty drug. <span class="qtag qoe">QoE</span> Most of the floor holds; the elective portion is the soft spot. That’s part of why this is a 7, not an 8.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'Real, controllable levers: practice-level margin and ops standardization (Credible), continued tuck-ins on a proven platform (Credible), procurement at scale across the network (Credible). <span class="qtag ic">IC</span> The thesis is operational, not financial — but the tuck-in math has to clear at realistic multiples, not aspirational ones.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: 'A B+ asset, held apart from price, with a walk-away of ~9.5×. The 9.2× entry sits just below it — thin room. <span class="qtag chron">CHRON</span> Cedar Park is the comp that worked, at 8.9× for 2.8×; Ridgeview Orthodontics is the warning, 10.4× for 1.6×. Discipline matters here precisely because there is so little margin in the price.',
      },
    ],
    tensions: [
      'The Strategist sees a defensible out-of-lane yes; The Steward will not pay an in-lane multiple for an out-of-lane asset. Where exactly does the ceiling land?',
      'The Operator wants to bank the roll-up; The Floor only stands on the recurring recall base that exists today, not the elective slice or the next tuck-in.',
      'The whole case leans on the durability of organic growth — and I can’t yet see whether it’s price, volume, or elective mix.',
    ],
    questions: [
      'What is same-practice growth split across price, volume, and elective mix over the last eight quarters?',
      'What share of revenue is discretionary — ortho and cosmetic — versus recurring recall and hygiene?',
      'What multiples is the tuck-in pipeline actually closing at, and how deep is it?',
    ],
    closing: {
      label: 'My conviction read',
      html: 'Pursue-worthy, with discipline — a strong, fragmented roll-up at a fair-but-full entry, in a market adjacent to the lanes rather than in them. Proposed grade <em>B+</em>, walk-away ~9.5×, and the out-of-lane call held consciously.',
      move: 'The durability and composition of organic growth. If the recurring base is doing the work, this holds; if it’s elective or price, the floor and the grade both soften.',
      caveat:
        'I do not set the 1–10 score or the pursue / pass call. That is the IC Chair’s, after both councils are heard.',
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
      'A fine dental roll-up, read for where it breaks — and because it’s out of lane, my bar is higher than it would be for a specialty pharmacy. <span class="qtag cim">CIM</span> The asset is real. The questions are how much of the revenue is discretionary, and whether 9.2× leaves any room for the math to work.',
    screen: {
      label: 'What I ran',
      clear: true,
      html: 'Concentration across practices and payers — diversified, no axis near 30%. <span class="qtag data">DATA</span> EBITDA in band; not manufacturing, CME, or out-of-network. No gate trips. The risk here is not a bright line; it is the elective share of revenue and an entry pressed up against the ceiling.',
    },
    pillars: [
      {
        name: 'The Lane',
        lens: 'is it close enough to underwrite',
        html: 'Dental sells into healthcare, but I test how it monetizes. The recurring recall base behaves like healthcare; the ortho and cosmetic slice behaves like consumer discretionary. <span class="qtag cim">CIM</span> That mix is exactly what raises my bar — and I’m not yet convinced the out-of-lane premium is earned.',
      },
      {
        name: 'Earnings quality',
        lens: 'is the growth real',
        html: 'Same-practice growth runs mid-single digits, but the split across price, volume, and elective mix is not evidenced in what was loaded. <span class="qtag qoe">QoE</span> If it’s mostly price or elective, the recurring-revenue case softens and the grade with it. This is the first thing I’d tie out.',
      },
      {
        name: 'Protected downside',
        lens: 'what defers in a downturn',
        html: 'The discretionary portion is the soft spot. Ortho and cosmetic get deferred when household budgets tighten; recall and hygiene mostly don’t. <span class="qtag qoe">QoE</span> Size that share before you bank the floor — the Partner is crediting a base he hasn’t yet separated from the elective slice.',
      },
      {
        name: 'Price',
        lens: 'does the math survive a flat multiple',
        html: '9.2× for an out-of-lane B+ is full. <span class="qtag chron">CHRON</span> Maple Grove returned 2.0× at 9.3×; Ridgeview Orthodontics, 1.6× at 10.4×. The record is clear that overpaying for adjacent dental assets is where the returns go to die.',
      },
    ],
    tensions: [
      'The Partner credits the roll-up as Credible; I want the tuck-in pipeline shown at the multiples it’s actually closing, not the platform’s own.',
      'We agree the recall base is recurring; we disagree on how much of the reported growth that base is really driving.',
    ],
    questions: [
      'Decompose same-practice growth: how much is price, how much volume, how much elective mix?',
      'What is the discretionary share of total revenue, and how did it behave in the last soft period?',
      'What entry multiples is the tuck-in pipeline actually clearing, and how contingent is the thesis on it?',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'No gate trips and the asset is genuinely good — but out of lane, with a discretionary slice, at a full entry, the margin for error is thin. I’d hold the grade at <em>B+</em> and treat 9.2× as the top of what I’d pay, not a starting point.',
      move: 'The composition of organic growth. It decides whether the recurring base — and therefore the floor and the grade — is as solid as the bull case needs it to be.',
      caveat:
        'I build the case against the deal, not the verdict. The IC Chair weighs my findings against the Partner’s and sets the call.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'Out of the cleanest lane, but with a named reason: a genuinely fragmented market, a proven roll-up playbook, and a recurring recall base. <span class="qtag cim">CIM</span>',
      examiner:
        'Dental isn’t a named lane, and the ortho/cosmetic slice monetizes like consumer discretionary. The bar rises, and the premium isn’t obviously earned.',
      contested: true,
      ruling:
        'Out of lane → <em>pursue with discipline</em>. It scores a 7, not an 8, precisely because the lane call is a conscious judgment, not a gimme.',
    },
    {
      axis: 'Protected downside',
      partner:
        'The recall and hygiene base is recurring and sticky — most of the floor holds. <span class="qtag cim">CIM</span>',
      examiner:
        'But ortho and cosmetic are discretionary and defer in a downturn. The floor is partial until that slice is sized. <span class="qtag qoe">QoE</span>',
      contested: true,
      ruling:
        'Credit the recurring base; <em>size the elective share</em> before banking the floor. That number is the difference between a 7 and a 6.',
    },
    {
      axis: 'Asset quality vs price',
      partner:
        'A B+ asset; the 9.2× entry sits just under the ~9.5× ceiling. Cedar Park is the comp that worked, 8.9× for 2.8×. <span class="qtag chron">CHRON</span>',
      examiner:
        'Full price for an out-of-lane B+. Maple Grove (2.0× at 9.3×) and Ridgeview (1.6× at 10.4×) are the warnings. <span class="qtag chron">CHRON</span>',
      contested: true,
      ruling:
        'Hold <em>B+</em>. The entry is at the edge of the ceiling — discipline on price is the entire game on this one.',
    },
    {
      axis: 'Value creation',
      partner:
        'Ops standardization, continued tuck-ins on a proven platform, procurement at scale — operational, not financial. <span class="qtag ic">IC</span>',
      examiner: 'The roll-up is real, but it only pencils if the tuck-in math clears at realistic multiples. On that we agree.',
      contested: false,
    },
    {
      axis: 'Management & data',
      partner:
        'Experienced DSO operators; reported figures tie at the summary level. <span class="qtag qoe">QoE</span>',
      examiner: 'The open data item is the growth decomposition — price vs volume vs elective. Until that ties, the rest is provisional.',
      contested: false,
    },
  ],

  converse: {
    opening:
      'A defensible out-of-lane roll-up — but the lane call and a discretionary slice keep it a pursue with discipline, not a clean pursue.',
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
            html: 'Because out of lane isn’t an automatic no — it’s a judgment that needs a named reason, and here I have one: a fragmented market, a recurring recall base, and a roll-up playbook that has worked. <span class="qtag cim">CIM</span> That earns the look. The discipline is in the price, not the pass.',
          },
          {
            voice: 'examiner',
            role: '· the lane',
            html: 'And I test the monetization, not the label. The recall base is healthcare; the elective slice is consumer discretionary. <span class="qtag qoe">QoE</span> The bar for an out-of-lane yes is higher, and a chunk of this revenue doesn’t clear it cleanly.',
          },
        ],
        ruling:
          'A <em>pursue with discipline</em> — which is exactly why it’s a 7, not an 8. The lane call is mine to make consciously, and I’m making it with the price held tight.',
      },
      {
        q: 'Which of our deals does this look like?',
        contested: false,
        replies: [
          {
            voice: 'partner',
            role: '· the steward',
            html: 'Cedar Park is the closest that worked — 8.9× in, 2.8× out. <span class="qtag chron">CHRON</span> Cypress at 9.2× sits just above that entry, in the band where disciplined dental roll-ups have returned.',
          },
          {
            voice: 'examiner',
            role: '· price',
            html: 'And Ridgeview is the one to remember — 10.4× in, 1.6× out. <span class="qtag chron">CHRON</span> The gap between Cedar Park and Ridgeview is almost entirely entry multiple. That’s the whole argument for holding the line at 9.2×.',
          },
        ],
      },
    ],
  },
}
