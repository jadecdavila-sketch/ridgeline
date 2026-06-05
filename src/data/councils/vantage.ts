import type { CouncilData } from '../councilTypes'

/**
 * Vantage Surgical Holdings: the committee behind the 5 / B / Selective.
 * A strong surgical platform that sits OUT of the named lanes and carries a
 * thin management bench, priced at a full 11.0× that runs above the ceiling a
 * B out of lane earns. Three contested axes: the lane call, grade-versus-price,
 * and the management gap. No gate trips; the constraints are the lane and the
 * price.
 *
 * Voice reference for the whole product (see docs/VOICE_AND_TONE.md):
 * Partner warm and discursive, Examiner clipped and forensic, Chair terse.
 */
export const vantage: CouncilData = {
  chair: {
    verdictLabel: 'Selective',
    verdict: 'selective',
    score: '5',
    grade: 'B',
    entry: '11.0×',
    resolution:
      'B, Selective, 11.0×. A 5, not a 7. No gate trips and the asset is strong. But ambulatory surgical is out of lane, the bench is thin, and 11.0× runs above the ~10× ceiling a B out of lane earns. I held B over the Partner’s pull to grade the margins up. I won’t bridge price for an out-of-lane asset whose leadership upgrade is still an assumption. Two conditions ride on the call: underwrite the CEO hire, and hold price below the line. <span class="qtag data">DATA</span>',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'B asset', kind: 'grade' },
      { text: 'walk-away ~10×', kind: 'ceil' },
      { text: 'out of lane · with discipline', kind: 'prov' },
    ],
    whatISee:
      'Multi-specialty ambulatory surgical platform. About $42M adjusted EBITDA on ~$210M revenue, across 22 physician-syndicated centers, asking 11.0×. <span class="qtag cim">CIM</span> Here’s the catch I’m carrying from the first line: ambulatory surgical isn’t one of our named lanes. So I’m out-of-lane-with-discipline, not a clean pursue. The margins are real and the network is real. The case still has to earn the lane and the price. I won’t hand it either.',
    screen: {
      label: 'Hard-pass screen',
      clear: true,
      html: 'Nothing close. No manufacturing, no CME, not out-of-network. Just physician-syndicated surgical services. EBITDA’s ~$42M, inside the $20–75M band. <span class="qtag data">DATA</span> No single payer or physician group near the 30% line; volume spreads across 22 centers. <span class="qtag cim">CIM</span> The constraint isn’t a gate. Out of lane raises the bar, it doesn’t trip the screen. What I’m watching is the lane judgment, the thin bench, and price discipline.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'Out of the cleanest lane, but I have a named reason to look, not just appetite. Physician-syndicated procedural volume on a proven center template. It runs more facility-intensive than the core services lanes, and that distance is the whole judgment. <span class="qtag cim">CIM p.6</span> An out-of-lane yes needs a specific, defensible reason. The unit economics and the recurring procedural base are mine to claim. It’s facility-based, though, not a core services roll-up, and I won’t dress it up as one.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'Mixed. Procedural demand is durable and recurring enough to grade. But a meaningful share is schedulable and gets deferred in a downturn, and case volume rides physician loyalty. <span class="qtag cim">CIM</span> Most of the floor holds. The elective slice and the physician-dependence are the soft spots, and they’re part of why this reads as a 5 and not a 7. Downside protected. Not impregnable.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'Controllable levers, and I’ll grade them straight. De novo centers on a proven template: Credible. Specialty-mix shift toward higher-acuity cases: Credible. Physician recruitment: Credible. <span class="qtag ic">IC</span> The math works at realistic case volumes. It also leans on retaining and adding physicians, so the levers are only as good as the bench that pulls them. That hands weight to a management question I can’t answer from this seat.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: 'A B asset, graded apart from price: strong margins, set against the out-of-lane distance and the physician dependence. The ceiling a B out of lane earns is ~10×. The 11.0× entry sits <em>above</em> it. <span class="qtag chron">CHRON</span> Cascade is the comp that worked: 9.4× in, 2.5× out. Lakeshore is the warning: above 11× in, 1.5× out. Paying up for an out-of-lane asset is the cardinal error, and 11.0× courts it. The premium has to be earned. I haven’t seen it earned yet.',
      },
    ],
    tensions: [
      'My Strategist sees a defensible out-of-lane yes on the unit economics. My Steward won’t pay an in-lane multiple for a facility-intensive out-of-lane asset. At 11.0× the entry already sits above where I’d hold the line.',
      'The Operator wants to bank de novo and mix-shift. The Floor stands only on the procedural base that exists today, not the elective slice, not the next physician recruited.',
      'Every lever I named leans on physicians, and the bench that retains and recruits them is thin against the benchmark. That gap is the Examiner’s ground. I expect him to push hardest there.',
    ],
    questions: [
      'Physician syndication terms: ownership, non-competes, case-volume concentration by group. How durable is volume if a key group walks?',
      'What share of case volume is elective and schedulable versus medically necessary, and how did it behave in the last downturn?',
      'Cost and timeline of the leadership upgrade. Does the 11.0× already assume it?',
    ],
    closing: {
      label: 'My conviction read',
      html: 'Worth a look, with discipline. A strong surgical platform with margins most deals would envy, but out of lane, facility-intensive, and asking full price on a thin bench. I’m proposing <em>B</em> and a ~10× walk-away, the out-of-lane call held consciously, the 11.0× entry flagged as above my line.',
      move: 'The lane call and the price together. If the out-of-lane quality is close enough to underwrite and the entry comes back toward 10×, this holds. At 11.0× above the ceiling, it’s someone else’s deal.',
      caveat:
        'The 1–10 score and the pursue / selective / pass call aren’t mine. The Chair sets those once he’s heard us both.',
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
      'Good surgical platform. I read it for where it breaks. Out of lane and facility-intensive, so my bar runs higher than it would for a specialty pharmacy. <span class="qtag cim">CIM</span> The margins are real. Three open questions: how durable the physician-driven volume is, how thin the bench actually is, and whether 11.0× leaves the math any room.',
    screen: {
      label: 'What I ran',
      clear: true,
      html: 'Concentration across payers and physician groups: no single axis near the 30% line, spread over 22 centers. <span class="qtag data">DATA</span> EBITDA in band. Not manufacturing, CME, or out-of-network. No gate trips. The risk isn’t a bright line. It’s the thin management tenure, the physician dependence, and an entry pressed above the ceiling.',
    },
    pillars: [
      {
        name: 'The Sentinel',
        lens: 'reimbursement & the lane edge',
        html: 'Payer mix and ASC site-of-service rate trends: not fully in what was loaded. <span class="qtag qoe">QoE</span> Procedural reimbursement holds up better than out-of-network. But ASC rates move with site-of-service policy, and a meaningful share of volume is elective and deferrable. <span class="qtag cim">CIM</span> Out of lane isn’t a hard pass here. It raises my bar. Size the elective share before crediting the floor.',
      },
      {
        name: 'The Reader',
        lens: 'the bench, not the deck',
        html: 'The soft spot, and it leads my list. Leadership tenure runs thin against the benchmark. The same gap the firm hit at Peak Field, where the value plan only worked once a seasoned CEO was hired post-close. <span class="qtag ic">IC</span> Bridgeable. Still an underwriting assumption, not a given. Price this as if the hire is required. The record says it is.',
      },
      {
        name: 'The Auditor',
        lens: 'is the EBITDA real',
        html: 'The ~$42M adjusted figure ties at the summary level. The bridge isn’t traced, and the data isn’t fully separated from the elective slice. <span class="qtag qoe">QoE</span> The data ties; the bench doesn’t yet. A grade resting on margins I haven’t walked line by line is a B I’m holding, not confirming.',
      },
      {
        name: 'The Contrarian',
        lens: 'the bear case at its strongest',
        html: 'The strongest bear case is physician flight. Case volume rides syndicated physician loyalty. A restless key group, or weak non-competes, and the floor and the growth case soften together. <span class="qtag cim">CIM</span> Layer in an elective mix that defers in a downturn, and the durable-procedural story thins. That dependence, not a named gate, is where this one goes wrong.',
      },
    ],
    tensions: [
      'The Partner banks de novo and mix-shift as Credible. I want them shown net of the physician recruitment they all depend on. The levers and the bench are one question seen twice.',
      'We agree: no gate trips, the asset’s good. We split on whether an out-of-lane B with a thin bench earns anything near 11.0×.',
    ],
    questions: [
      'Depth below the founder, and the realistic cost and timeline of a CEO upgrade. Is the entry priced for it?',
      'Physician non-competes and case-volume concentration by group. How did volume behave when a group last left?',
      'Elective and schedulable share of case volume, and how it moved in the last soft period.',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'No gate trips and the asset’s good. But out of lane, a thin bench, physician-dependent volume, a full 11.0× entry: the margin for error is gone. I hold the grade at <em>B</em>, treat the leadership upgrade as a required underwriting assumption, and treat 11.0× as above what I’d pay, not a starting point.',
      move: 'The management gap. It decides whether the value plan survives without the CEO hire, and the levers, the floor, and the grade all sit on top of it.',
      caveat:
        'I make the case against the deal. The verdict’s the Chair’s; he weighs me against the Partner.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'Out of the cleanest lane, but with a named reason: physician-syndicated procedural volume on a proven, recurring center template. <span class="qtag cim">CIM</span>',
      examiner:
        'Ambulatory surgical isn’t a named lane, and it’s facility-based, not a core services roll-up. Bar rises. The premium isn’t obviously earned. <span class="qtag cim">CIM</span>',
      contested: true,
      ruling:
        'Out of lane → <em>selective</em>. A 5, not a 7, because the lane call is a conscious judgment on a facility-intensive asset: close enough to underwrite, not close enough to pay up for.',
    },
    {
      axis: 'Protected downside',
      partner:
        'Procedural demand is durable and recurring enough to grade. Most of the floor holds. <span class="qtag cim">CIM</span>',
      examiner:
        'A meaningful share is schedulable and defers in a downturn, and volume rides physician loyalty. Recurring, not refill-protected.',
      contested: false,
    },
    {
      axis: 'Asset quality vs price',
      partner:
        'A B asset; the ceiling a B out of lane earns is ~10×. Cascade worked at 9.4× for 2.5×. <span class="qtag chron">CHRON</span>',
      examiner:
        '11.0× sits above that line. Lakeshore, entered above 11×, returned 1.5×. The surgical comps disappoint above the line. <span class="qtag chron">CHRON</span>',
      contested: true,
      ruling:
        'Hold <em>B</em>; ceiling ~10×, the 11.0× entry above it. Price discipline is the whole game. The premium gets earned before I cross the line, not after.',
    },
    {
      axis: 'Value creation',
      partner:
        'De novo on a proven template, specialty-mix shift, physician recruitment: operational levers, credible at realistic case volumes. <span class="qtag ic">IC</span>',
      examiner: 'Real, but every lever leans on retaining and adding physicians. On that dependence we agree.',
      contested: false,
    },
    {
      axis: 'Management & data',
      partner:
        'Capable team; the reported ~$42M ties at the summary level and the data’s credible. <span class="qtag qoe">QoE</span>',
      examiner:
        'Tenure is thin against the benchmark: the Peak Field gap, closed only with a CEO hire post-close. The data ties; the bench doesn’t yet. <span class="qtag ic">IC</span>',
      contested: true,
      ruling:
        'Hold the grade, but <em>underwrite the leadership upgrade explicitly</em>. The tenure gap is bridgeable, and it’s an assumption you’re paying for. That hire is the difference between a 5 and a 4.',
    },
  ],

  converse: {
    opening:
      'Strong out-of-lane surgical platform. A facility-intensive lane call, a thin bench, and an 11.0× entry above the ceiling keep it selective, not a pursue.',
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
            html: 'Out of lane isn’t an automatic no. It’s a judgment that needs a named reason, and I have one: physician-syndicated procedural volume, strong unit economics, a proven center template. <span class="qtag cim">CIM</span> That earns the look. The discipline lives in the price, and at 11.0× I’m already flagging the entry as above my line.',
          },
          {
            voice: 'examiner',
            role: '· the contrarian',
            html: 'I test the dependence, not the label. Volume rides physician loyalty and a chunk is elective and deferrable. <span class="qtag cim">CIM</span> Out of lane raises my bar, the bench is thin, and 11.0× leaves no room for any of that to go wrong. The look is fine. Paying up for it isn’t.',
          },
        ],
        ruling:
          'A <em>selective</em>, which is why it’s a 5, not a 7. The lane call is mine to make consciously. I’m making it with price held below the line and the leadership upgrade underwritten as a condition.',
      },
      {
        q: 'Is management really the problem?',
        contested: false,
        replies: [
          {
            voice: 'examiner',
            role: '· the reader',
            html: 'It’s the swing factor. The team’s capable, but the tenure gap mirrors Peak Field, where the value plan only worked after a seasoned CEO came in post-close. <span class="qtag ic">IC</span> Not a disqualifier. An underwriting assumption. Price the deal as if that hire is required, because it likely is.',
          },
          {
            voice: 'partner',
            role: '· the operator',
            html: 'It’s why my levers come with a caveat. De novo, mix-shift, recruitment: every one leans on retaining and adding physicians, and that’s the bench’s job. <span class="qtag ic">IC</span> Credible levers, but only as strong as the leadership that pulls them. On the upgrade being required, we agree.',
          },
        ],
      },
    ],
  },
}
