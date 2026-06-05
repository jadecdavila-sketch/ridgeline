import type { CouncilData } from '../councilTypes'

/**
 * Vantage Surgical Holdings — the committee behind the 5 / B / Selective.
 * A genuinely strong surgical platform that sits OUT of the named lanes and
 * carries a thin management bench, priced at a full 11.0× that runs above the
 * ceiling a B out of lane earns. Three contested axes: the lane call, the
 * grade-versus-price, and the management gap. No gate trips — the constraints
 * are the lane and the price.
 */
export const vantage: CouncilData = {
  chair: {
    verdictLabel: 'Selective',
    verdict: 'selective',
    score: '5',
    grade: 'B',
    entry: '11.0×',
    resolution:
      'No gate trips, and the asset is genuinely strong — but ambulatory surgical is out of lane, the bench is thin, and the 11.0× entry runs above the ceiling a B out of lane earns. That is a <em>selective</em>, not a pursue — a 5, not a 7. I hold the grade at B over the Partner’s instinct to credit the margins higher, and I will not bridge the price for an out-of-lane asset whose leadership upgrade is still an underwriting assumption. Two conditions ride on it: underwrite the CEO hire explicitly, and hold price below the line.',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'B asset', kind: 'grade' },
      { text: 'walk-away ~10×', kind: 'ceil' },
      { text: 'out of lane · with discipline', kind: 'prov' },
    ],
    whatISee:
      'A multi-specialty ambulatory surgical platform — roughly $42M adjusted EBITDA on ~$210M revenue, across 22 physician-syndicated centers, asking 11.0×. <span class="qtag cim">CIM</span> Ambulatory surgical is not one of the named lanes, so I’m out-of-lane-with-discipline from the first line, not a clean pursue. The margins are real and the network is real, but the case has to earn the lane call and the price, not assume either.',
    screen: {
      label: 'Hard-pass screen',
      clear: true,
      html: 'None is close. Not manufacturing, CME, or out-of-network — physician-syndicated surgical services. EBITDA is ~$42M, inside the $20–75M band. <span class="qtag data">DATA</span> No single payer or physician group near the 30% line; volume spreads across 22 centers. <span class="qtag cim">CIM</span> The constraint here is not a gate — out of lane raises the bar, it does not trip it — it is the lane judgment, the thin bench, and holding price discipline.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'Out of the cleanest lane — but with a named reason to look, not enthusiasm. It’s physician-syndicated procedural volume on a proven center template, more facility-intensive than the core services lanes, and that distance is the judgment. <span class="qtag cim">CIM p.6</span> An out-of-lane yes needs a specific, defensible reason; the unit economics and the recurring procedural base are mine — but it is facility-based, not a core services roll-up, and I won’t pretend otherwise.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'Mixed, and I’ll say so honestly. Procedural demand is durable and recurring enough to grade, but a meaningful share is schedulable and can be deferred in a downturn, and case volume rides physician loyalty. <span class="qtag cim">CIM</span> Most of the floor holds; the elective and the physician-dependence pieces are the soft spots. That’s part of why this is a 5, not a 7 — the downside is protected, not impregnable.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'Credible, controllable levers: de novo centers on a proven template (Credible), specialty-mix shift toward higher-acuity cases (Credible), and physician recruitment (Credible). <span class="qtag ic">IC</span> The math works at realistic case volumes — but it leans on retaining and adding physicians, so the levers are only as good as the bench that pulls them. That puts weight on a management question I can’t answer from this seat.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: 'A B asset, held apart from price — strong margins offset by the out-of-lane distance and physician dependence. The ceiling a B out of lane earns is roughly 10×; the 11.0× entry sits <em>above</em> it. <span class="qtag chron">CHRON</span> Cascade is the comp that worked, 9.4× in for 2.5×; Lakeshore is the warning, above 11× in for 1.5×. The cardinal error — paying up for an out-of-lane asset — is exactly what 11.0× courts. The premium has to be earned, and I haven’t seen it earned yet.',
      },
    ],
    tensions: [
      'The Strategist sees a defensible out-of-lane yes on the unit economics; The Steward will not pay an in-lane multiple for a facility-intensive out-of-lane asset. At 11.0× the entry is already above where I’d hold the line.',
      'The Operator wants to bank de novo and mix-shift; The Floor only stands on the procedural base that exists today, not the elective slice or the next physician recruited.',
      'Every lever I named leans on physicians — and the bench that retains and recruits them is thin against the benchmark. The management gap belongs to The Examiner, and I expect the hardest push there.',
    ],
    questions: [
      'What are the physician syndication terms — ownership, non-competes, and case-volume concentration by group — and how durable is volume if a key group walks?',
      'What share of case volume is elective and schedulable versus medically necessary, and how did it behave in the last downturn?',
      'What is the cost and timeline of the leadership upgrade, and does the entry price already assume it?',
    ],
    closing: {
      label: 'My conviction read',
      html: 'Worth a look, with discipline — a strong surgical platform with margins most deals would envy, but out of lane, facility-intensive, and asking a full price on top of a thin bench. Proposed grade <em>B</em>, walk-away ~10×, the out-of-lane call held consciously and the 11.0× entry flagged as above my line.',
      move: 'The lane call and the price together. If the out-of-lane quality is close enough to underwrite and the entry comes back toward 10×, this holds; at 11.0× above the ceiling, it’s someone else’s deal.',
      caveat:
        'I do not set the 1–10 score or the pursue / selective / pass call. That is the IC Chair’s, after both councils are heard.',
    },
  },

  examiner: {
    lens: 'Scrutiny Council · what kills the deal',
    proposes: [
      { text: 'grade provisional', kind: 'grade' },
      { text: 'out-of-lane premium = no', kind: 'ceil' },
      { text: 'bench unproven', kind: 'prov' },
    ],
    whatISee:
      'A genuinely good surgical platform, read for where it breaks — and because it’s out of lane and facility-intensive, my bar is higher than it would be for a specialty pharmacy. <span class="qtag cim">CIM</span> The margins are real. The questions are how durable the physician-driven volume is, how thin the bench actually is, and whether 11.0× leaves any room for the math to work.',
    screen: {
      label: 'What I ran',
      clear: true,
      html: 'Concentration across payers and physician groups — no single axis near the 30% line, spread over 22 centers. <span class="qtag data">DATA</span> EBITDA in band; not manufacturing, CME, or out-of-network. No gate trips. The risk here is not a bright line; it is the thin management tenure, the physician dependence, and an entry pressed above the ceiling.',
    },
    pillars: [
      {
        name: 'The Sentinel',
        lens: 'reimbursement & the lane edge',
        html: 'Payer mix and ASC site-of-service rate trends are not fully evidenced in what was loaded. <span class="qtag qoe">QoE</span> Procedural reimbursement is more durable than out-of-network, but ASC rates move with site-of-service policy, and a meaningful share of volume is elective and deferrable. <span class="qtag cim">CIM</span> Out of lane is not a hard pass here — but it raises my bar, and the elective share is the piece I’d size before crediting the floor.',
      },
      {
        name: 'The Reader',
        lens: 'the bench, not the deck',
        html: 'This is the soft spot and it leads my list. Leadership tenure is thin against the benchmark — the same gap the firm saw at Peak Field, where the value plan only worked once a seasoned CEO was hired post-close. <span class="qtag ic">IC</span> Tenure is bridgeable, but it’s an underwriting assumption, not a given. Price the deal as if that hire is required, because the record says it is.',
      },
      {
        name: 'The Auditor',
        lens: 'is the EBITDA real',
        html: 'The ~$42M adjusted figure ties at the summary level, but the bridge isn’t traced and the data isn’t fully separated from the elective slice. <span class="qtag qoe">QoE</span> The data ties; the bench does not yet — and a grade resting on margins I haven’t walked line by line is a B I’m holding provisionally, not confirming.',
      },
      {
        name: 'The Contrarian',
        lens: 'the bear case at its strongest',
        html: 'The strongest honest bear case is physician flight. Case volume rides on syndicated physician loyalty; if a key group is restless or non-competes are weak, the floor and the growth case soften together. <span class="qtag cim">CIM</span> Layer in an elective mix that defers in a downturn, and the durable-procedural story thins. That dependence, not a named gate, is where this one goes wrong.',
      },
    ],
    tensions: [
      'The Partner credits de novo and mix-shift as Credible; I want them shown net of the physician recruitment they all depend on — the levers and the bench are the same question seen twice.',
      'We agree no gate trips and the asset is good; we disagree on whether an out-of-lane B with a thin bench earns anything near 11.0×.',
    ],
    questions: [
      'What is the depth below the founder, and the realistic cost and timeline of a CEO upgrade — is the entry priced for it?',
      'What are the physician non-competes and case-volume concentration by group, and how did volume behave when a group last left?',
      'What is the elective and schedulable share of case volume, and how did it move in the last soft period?',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'No gate trips and the asset is genuinely good — but out of lane, with a thin bench and physician-dependent volume, at a full 11.0× entry, the margin for error is gone. I’d hold the grade at <em>B</em>, treat the leadership upgrade as a required underwriting assumption, and treat 11.0× as above what I’d pay, not a starting point.',
      move: 'The management gap. It decides whether the value plan — and therefore the levers, the floor, and the grade — survives without the CEO hire the record says it needs.',
      caveat:
        'I build the case against the deal, not the verdict. The IC Chair weighs my findings against the Partner’s and sets the call.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'Out of the cleanest lane, but with a named reason: physician-syndicated procedural volume on a proven, recurring center template. <span class="qtag cim">CIM</span>',
      examiner:
        'Ambulatory surgical isn’t a named lane and it’s facility-based, not a core services roll-up. The bar rises, and the premium isn’t obviously earned. <span class="qtag cim">CIM</span>',
      contested: true,
      ruling:
        'Out of lane → <em>selective</em>. It scores a 5, not a 7, precisely because the lane call is a conscious judgment on a facility-intensive asset — close enough to underwrite, not close enough to pay up for.',
    },
    {
      axis: 'Protected downside',
      partner:
        'Procedural demand is durable and recurring enough to grade — most of the floor holds. <span class="qtag cim">CIM</span>',
      examiner:
        'But a meaningful share is schedulable and defers in a downturn, and volume rides physician loyalty. Recurring, not refill-protected.',
      contested: false,
    },
    {
      axis: 'Asset quality vs price',
      partner:
        'A B asset; the ceiling a B out of lane earns is ~10×. Cascade worked at 9.4× for 2.5×. <span class="qtag chron">CHRON</span>',
      examiner:
        'And 11.0× sits above that line. Lakeshore, entered above 11×, returned 1.5×. The surgical comps disappoint above the line. <span class="qtag chron">CHRON</span>',
      contested: true,
      ruling:
        'Hold <em>B</em>; ceiling ~10×, and the 11.0× entry is above it. Price discipline is the whole game — the premium has to be earned before I’d cross the line.',
    },
    {
      axis: 'Value creation',
      partner:
        'De novo on a proven template, specialty-mix shift, and physician recruitment — operational levers, credible at realistic case volumes. <span class="qtag ic">IC</span>',
      examiner: 'Real, but every lever leans on retaining and adding physicians. On that dependence we agree.',
      contested: false,
    },
    {
      axis: 'Management & data',
      partner:
        'Capable team; the reported ~$42M ties at the summary level and the data is credible. <span class="qtag qoe">QoE</span>',
      examiner:
        'But tenure is thin against the benchmark — the Peak Field gap, closed only with a CEO hire post-close. The data ties; the bench does not yet. <span class="qtag ic">IC</span>',
      contested: true,
      ruling:
        'Hold the grade, but <em>underwrite the leadership upgrade explicitly</em>. The tenure gap is bridgeable — and it’s an assumption you’re paying for, not a given. That hire is the difference between a 5 and a 4.',
    },
  ],

  converse: {
    opening:
      'A strong out-of-lane surgical platform — but a facility-intensive lane call, a thin bench, and an 11.0× entry above the ceiling keep it selective, not a pursue.',
    suggests: [
      'Why only a 5?',
      'Is management really the problem?',
      'Compare to Cascade',
      'What trips a hard pass?',
    ],
    rounds: [
      {
        q: 'Why look at all, if it’s out of lane and full price?',
        contested: true,
        replies: [
          {
            voice: 'partner',
            role: '· the strategist',
            html: 'Because out of lane isn’t an automatic no — it’s a judgment that needs a named reason, and here I have one: physician-syndicated procedural volume, strong unit economics, a proven center template. <span class="qtag cim">CIM</span> That earns the look. The discipline is in the price — and at 11.0× I’m already flagging the entry as above my line.',
          },
          {
            voice: 'examiner',
            role: '· the contrarian',
            html: 'And I test the dependence, not the label. The volume rides physician loyalty and a chunk is elective and deferrable. <span class="qtag cim">CIM</span> Out of lane raises my bar, the bench is thin, and 11.0× leaves no room for any of that to go wrong. The look is fine; paying up for it is not.',
          },
        ],
        ruling:
          'A <em>selective</em> — which is exactly why it’s a 5, not a 7. The lane call is mine to make consciously, and I’m making it with the price held below the line and the leadership upgrade underwritten as a condition.',
      },
      {
        q: 'Is management really the problem?',
        contested: false,
        replies: [
          {
            voice: 'examiner',
            role: '· the reader',
            html: 'It’s the swing factor. The team is capable, but the tenure gap mirrors Peak Field, where the value plan only worked after a seasoned CEO came in post-close. <span class="qtag ic">IC</span> So it’s not a disqualifier — it’s an underwriting assumption. Price the deal as if that hire is required, because it likely is.',
          },
          {
            voice: 'partner',
            role: '· the operator',
            html: 'And it’s why my levers come with a caveat. De novo, mix-shift, recruitment — every one leans on retaining and adding physicians, and that’s the bench’s job. <span class="qtag ic">IC</span> Credible levers, yes; but only as strong as the leadership that pulls them. On the upgrade being required, we agree.',
          },
        ],
      },
    ],
  },
}
