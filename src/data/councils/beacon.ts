import type { CouncilData } from '../councilTypes'

/**
 * Beacon Imaging Alliance — the committee behind the 5 / B / Selective. An
 * attractive imaging network that sits OUT of the named lanes, is capital-
 * intensive enough that EBITDA flatters the cash story, and was scored on
 * partial data. Three live fights: the lane call, the capex-versus-floor
 * question, and a read held provisional because the operating detail is thin.
 */
export const beacon: CouncilData = {
  chair: {
    verdictLabel: 'Selective',
    verdict: 'selective',
    score: '5',
    grade: 'B',
    entry: '9.0×',
    resolution:
      'Three drags hold this to a <em>selective</em>, not a pursue. Diagnostic imaging is out of lane, so the bar rises; it is capital-intensive, so 9.0× on EBITDA is a higher multiple on free cash than it reads; and the maintenance-capex and modality detail was thin in what was loaded, so the read is provisional. No gate trips — this is a judgment, not a disqualifier. I hold the grade at <em>B</em> and the call at selective, conditional on the missing capex detail landing and the FCF math clearing.',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'B asset', kind: 'grade' },
      { text: 'price the free cash', kind: 'ceil' },
      { text: 'out of lane · provisional', kind: 'prov' },
    ],
    whatISee:
      'An outpatient diagnostic imaging network — 28 centers, MRI/CT and imaging modalities, roughly $26M adjusted EBITDA on about $132M revenue, asking near 9.0×. <span class="qtag cim">CIM</span> Imaging is not one of the named lanes, so I am a selective from the first line, not a clean pursue. The case has to earn the out-of-lane call, and it has to survive the capex.',
    screen: {
      label: 'Hard-pass screen',
      clear: true,
      html: 'None is close. EBITDA about $26M, inside the $20–75M band. <span class="qtag data">DATA</span> Outpatient imaging services — not manufacturing, CME, or out-of-network, though more capital-intensive than the core lanes. No single payer near the 30% line; volume spreads across 28 centers and a broad referral base. The constraint here is not a gate; it is the out-of-lane judgment and the capex math.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'Out of the cleanest lane, and equipment-heavy in a way the core services lanes are not. <span class="qtag cim">CIM p.5</span> Recurring referral-driven volume, but a manufacturing-like capital footprint sitting under a services model. An out-of-lane yes needs a named reason; the recurring referral base and real scale are mine, but the capital profile is what raises the bar.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'Mixed, and I will say so. Imaging volume is referral-driven and partly schedulable — some studies defer in a downturn, and the equipment base is a fixed-cost drag if volume softens. <span class="qtag cim">CIM</span> Recurring enough to grade, but the floor is softened by both the elective slice and the capital intensity. That is part of why this is a 5, not a 7.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'Credible, controllable levers: modality-mix shift toward higher-margin studies (Credible), throughput and scheduling optimization (Credible), de novo and tuck-in centers (Credible, but capital-heavy). <span class="qtag ic">IC</span> The operating levers are real and ours to pull; the growth levers carry a capital cost I will not pretend away.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: 'A B asset, held apart from price — and the capex changes the price math. <span class="qtag data">DATA</span> A 9.0× EBITDA entry looks fair, but maintenance capex pulls free cash well below EBITDA, so the effective multiple on cash is higher than it reads. The discipline is to price the free cash, not the headline. <span class="qtag chron">CHRON</span> Sub-9.5× imaging entries returned a median 2.1×, below the services-roll-up median — the capex tax showing up in the record.',
      },
    ],
    tensions: [
      'The Strategist sees a defensible out-of-lane yes on scale and recurring referral volume; The Steward will not pay an in-lane multiple for an out-of-lane, capital-intensive asset. Where does the ceiling land on free cash, not EBITDA?',
      'The Operator credits modality-mix and de novo growth; The Floor only stands on the recurring referral base that exists today, not the capital-heavy growth or the elective slice.',
      'The whole read rests on a FCF conversion number I cannot yet see — the maintenance-versus-growth capex split was not fully provided, so the grade is provisional by design.',
    ],
    questions: [
      'What is the maintenance-versus-growth capex split, equipment age and replacement schedule, and true FCF conversion?',
      'What is the modality and study mix — share of higher-margin MRI/CT versus commodity studies — and the reimbursement trend by modality?',
      'What is the payer mix and site-of-service reimbursement exposure, and is there rate pressure on outpatient imaging?',
    ],
    closing: {
      label: 'My conviction read',
      html: 'Selective-worthy, not pursue-worthy on this council’s merits — an attractive imaging network with real scale, out of lane, capital-intensive, and read on partial data. Proposed grade <em>B</em>, and the discipline is to price the free cash, not the 9.0× headline.',
      move: 'The FCF conversion number. If maintenance capex is contained and free cash holds, the read firms; if the capex tax is heavier than the headline suggests, the grade and the effective entry both move the wrong way.',
      caveat:
        'I do not set the 1–10 score or the pursue / selective / pass call. That is the IC Chair’s, after both councils are heard.',
    },
  },

  examiner: {
    lens: 'Scrutiny Council · what kills the deal',
    proposes: [
      { text: 'grade provisional', kind: 'grade' },
      { text: 'underwrite FCF, not EBITDA', kind: 'ceil' },
      { text: 'data incomplete', kind: 'prov' },
    ],
    whatISee:
      'The same network the Partner sees, read for where it breaks — and because it is out of lane and equipment-intensive, my bar is higher than it would be for a core services asset. <span class="qtag cim">CIM</span> The $26M adjusted EBITDA is a position until the cash ties. The questions are what free cash actually converts, and whether the data even lets me answer that yet.',
    screen: {
      label: 'What I ran',
      clear: true,
      html: 'Concentration across 28 centers and a broad referral base — diversified, no payer near the 30% line. <span class="qtag data">DATA</span> EBITDA in band; outpatient imaging, not manufacturing, CME, or out-of-network. No gate trips. The risk here is not a bright line; it is the capex tax on free cash, and a data room that has not yet given me the numbers to size it.',
    },
    pillars: [
      {
        name: 'The Sentinel',
        lens: 'reimbursement & site-of-service exposure',
        html: 'Outpatient imaging reimbursement and site-of-service rates are exactly where a margin can move, and the payer mix and modality-level rate trend were not evidenced in what was provided. <span class="qtag qoe">QoE</span> Commercial-versus-government mix and any rate pressure on outpatient imaging are open questions, not cleared ones. This leads my list because it sets the ceiling on every study line.',
      },
      {
        name: 'The Auditor',
        lens: 'is the cash real',
        html: 'EBITDA is not the number on an imaging deal — free cash is, and the maintenance-versus-growth capex split, equipment age, and FCF conversion were not fully provided. <span class="qtag qoe">QoE</span> Until that ties, the 9.0× entry is a multiple on a cash number I cannot see. The grade is provisional, and it stays provisional until the capex detail lands.',
      },
      {
        name: 'The Reader',
        lens: 'can you trust the operating detail',
        html: 'A capable operator on the face of it, but the read is on partial data — the operating detail behind the capital base was thin. <span class="qtag qoe">QoE</span> I am not crediting a clean operating story I have not been shown. The completeness of the data room is itself the management signal at this stage.',
      },
      {
        name: 'The Contrarian',
        lens: 'the capex tax, stated at its strongest',
        html: 'The strongest honest bear case is that this is a services model with a manufacturing-like capital footprint, and the firm’s own imaging record proves the tax. <span class="qtag chron">CHRON</span> Sub-9.5× imaging entries returned a median 2.1×, below the services-roll-up median; Apex, entered above 10×, returned 1.6×. The assumption to stress is that 9.0× on EBITDA is fair — on free cash it may not be.',
      },
    ],
    tensions: [
      'The Partner reads the capex as a known, gradeable drag; my Auditor cannot grade what was not provided. We agree it is real — we disagree on whether the asset is gradeable at all until the FCF split ties.',
      'The Sentinel wants the modality-level reimbursement trend before the floor is banked; the Contrarian thinks the capex tax alone, evidenced in the record, is enough to discount the entry. The Chair has to decide which carries.',
    ],
    questions: [
      'Show me the maintenance-versus-growth capex bridge, equipment age and replacement schedule, and the FCF conversion the entry should be read against.',
      'What is the modality and study mix and the reimbursement trend by modality — where does the higher-margin volume actually sit?',
      'What is the payer mix and site-of-service exposure, and how did imaging rates behave through the last reimbursement cycle?',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'No gate trips and the network is genuinely attractive — but out of lane, capital-intensive, and scored on partial data, the entry has to be read against free cash, not EBITDA. I would hold the grade at <em>B</em> and treat the read as provisional until the capex and modality detail lands.',
      move: 'The maintenance-capex split and FCF conversion. It decides whether 9.0× on EBITDA is a fair entry or a meaningfully higher multiple on the cash that actually returns.',
      caveat:
        'I build the case against the deal, not the verdict. The IC Chair weighs my findings against the Partner’s and sets the call.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'Out of the cleanest lane, but with a named reason: real scale, 28 centers, and recurring referral-driven volume. <span class="qtag cim">CIM</span>',
      examiner:
        'Imaging isn’t a named lane, and it carries a manufacturing-like capital footprint under a services model. The bar rises, and the premium isn’t obviously earned.',
      contested: true,
      ruling:
        'Out of lane → <em>selective</em>. It scores a 5, not a 7, precisely because the lane call plus the capital profile is a conscious judgment, not a gimme.',
    },
    {
      axis: 'Protected downside',
      partner:
        'Referral-driven and partly schedulable — recurring enough to grade, with a broad referral base behind it. <span class="qtag cim">CIM</span>',
      examiner:
        'Some studies defer in a downturn, and the equipment base is a fixed-cost drag if volume softens. A real but not impregnable floor.',
      contested: false,
    },
    {
      axis: 'Asset quality vs price',
      partner:
        'A B asset; 9.0× on EBITDA looks fair, but the capex intensity changes the price math — underwrite the free cash. <span class="qtag data">DATA</span>',
      examiner:
        'Maintenance capex pulls free cash well below EBITDA; sub-9.5× imaging entries returned a median 2.1×, below the services median — the capex tax. <span class="qtag chron">CHRON</span>',
      contested: true,
      ruling:
        'Hold <em>B</em>; read the entry against free cash, not the 9.0× headline. The effective multiple on cash is the number that decides this, not the EBITDA multiple.',
    },
    {
      axis: 'Value creation',
      partner:
        'Modality-mix shift, throughput and scheduling optimization, and de novo or tuck-in centers — operating levers that are ours to pull. <span class="qtag ic">IC</span>',
      examiner: 'The operating levers are real; the de novo and tuck-in growth is capital-heavy, so it pencils only at realistic returns on that capital. On that we agree.',
      contested: false,
    },
    {
      axis: 'Management & data',
      partner:
        'A capable operator, graded on partial data — the capex and maintenance detail was thin in what was loaded. <span class="qtag qoe">QoE</span>',
      examiner:
        'The maintenance-versus-growth split, modality mix, and equipment age were not fully provided. Until that detail lands, the read is provisional.',
      contested: true,
      ruling:
        'Read stands as <em>provisional</em>. The score carries a confidence caveat until the capex and modality detail completes — it can move the call in either direction.',
    },
  ],

  converse: {
    opening:
      'An attractive imaging network — but out of lane, capital-intensive, and scored on partial data keep it a selective, not a pursue.',
    suggests: [
      'Why a 5 and not a 7?',
      'How does the capex change it?',
      'Why the partial-data caveat?',
      'Which of our deals does this look like?',
    ],
    rounds: [
      {
        q: 'Why pursue at all, if it’s out of lane and capital-intensive?',
        contested: true,
        replies: [
          {
            voice: 'partner',
            role: '· the strategist',
            html: 'Because out of lane isn’t an automatic no — it needs a named reason, and here I have one: real scale across 28 centers and a recurring referral-driven base. <span class="qtag cim">CIM</span> That earns the look. The discipline is in pricing the free cash, not in passing on a credible network.',
          },
          {
            voice: 'examiner',
            role: '· the auditor',
            html: 'And I test the cash, not the label. Imaging is equipment-heavy, so maintenance capex pulls free cash well below EBITDA. <span class="qtag data">DATA</span> The split that decides it wasn’t fully provided — so a 9.0× on EBITDA is a multiple on a cash number I can’t yet see.',
          },
        ],
        ruling:
          'A <em>selective</em> — which is exactly why it’s a 5, not a 7. The lane call and the capex are mine to weigh consciously, and I’m holding the read against free cash with the data caveat live.',
      },
      {
        q: 'Which of our deals does this look like?',
        contested: false,
        replies: [
          {
            voice: 'partner',
            role: '· the steward',
            html: 'Imaging names. Clearview returned 2.3× at 8.6× in; Radius is tracking 1.9× at 9.2×. <span class="qtag chron">CHRON</span> Beacon at 9.0× sits in that fairly-priced band on EBITDA — the disciplined entries returned.',
          },
          {
            voice: 'examiner',
            role: '· the contrarian',
            html: 'And Apex is the one to remember — 10.4× in, 1.6× out. <span class="qtag chron">CHRON</span> The set returns below the services-roll-up median, which is the capex tax showing in the record. The comps say underwrite the cash, not the multiple.',
          },
        ],
      },
    ],
  },
}
