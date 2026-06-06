import type { CouncilData } from '../councilTypes'

/**
 * Beacon Imaging Alliance, the committee behind the 5 / B / Selective. An
 * attractive imaging network that sits OUT of the named lanes, is capital-
 * intensive enough that EBITDA flatters the cash story, and was scored on
 * partial data. Three live fights: the lane call, the capex-versus-floor
 * question, and a read held provisional because the operating detail is thin.
 *
 * Voice reference for the whole product (see docs/VOICE_AND_TONE.md):
 * Partner warm and discursive, Examiner clipped and forensic, Chair terse.
 */
export const beacon: CouncilData = {
  chair: {
    verdictLabel: 'Selective',
    verdict: 'selective',
    score: '5',
    grade: 'B',
    entry: '9.0×',
    resolution:
      'B, Selective, 9.0×. Three drags hold it off a pursue. Imaging is out of lane, so the bar rises. It’s capital-intensive, so 9.0× on EBITDA is a steeper multiple on free cash than it reads. And the maintenance-capex and modality detail came in thin. No gate trips. This is judgment, not a disqualifier. I hold the grade at <em>B</em> and the call at selective, conditional on the capex detail landing and the FCF math clearing. <span class="qtag data">DATA</span>',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'B asset', kind: 'grade' },
      { text: 'price the free cash', kind: 'ceil' },
      { text: 'out of lane · provisional', kind: 'prov' },
    ],
    whatISee:
      '28 centers, MRI/CT and the imaging modalities. About $26M of adjusted EBITDA on $132M of revenue, asking near 9.0×. <span class="qtag cim">CIM</span> Imaging isn’t one of our named lanes, so I’m a selective from the first line. The case has to earn the out-of-lane call, then survive the capex. I want it to.',
    screen: {
      label: 'Hard-pass screen',
      clear: true,
      html: 'Nothing close to a gate. EBITDA’s $26M, inside the $20–75M band. <span class="qtag data">DATA</span> Outpatient imaging, not manufacturing, not CME, not out-of-network, though heavier on capital than the core lanes. No single payer near 30%; volume spreads across 28 centers and a broad referral base. What constrains this isn’t the screen. It’s the lane call and the capex math.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'Out of the cleanest lane, and equipment-heavy the way the core services lanes aren’t. <span class="qtag cim">CIM p.5</span> Recurring, referral-driven volume, but a manufacturing-like capital footprint sitting under a services model. An out-of-lane yes needs a named reason. Mine is the scale and the recurring referral base. The capital profile is what raises the bar against it.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'Mixed. Imaging volume is referral-driven and partly schedulable, so some studies defer in a downturn, and the equipment base is a fixed-cost drag when volume softens. <span class="qtag cim">CIM</span> Recurring enough to grade. But the elective slice and the capital intensity both thin the floor. That’s most of why this is a 5 and not a 7.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'Three levers, and I’ll grade them straight. Modality-mix shift toward higher-margin studies: Credible. Throughput and scheduling: Credible. De novo and tuck-in centers: Credible, but capital-heavy. <span class="qtag ic">IC</span> The operating levers are real and ours to pull. The growth levers carry a capital cost I won’t pretend away.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: 'A B asset, graded before price. The capex is what moves the price math. <span class="qtag data">DATA</span> 9.0× on EBITDA looks fair, but maintenance capex pulls cash conversion down, so the effective multiple on cash runs higher than the headline. Underwrite the cash that converts. <span class="qtag chron">CHRON</span> Sub-9.5× imaging entries returned a median 2.1×, under the services-roll-up median, the capex tax showing up in the record.',
      },
    ],
    tensions: [
      'My Strategist sees a defensible out-of-lane yes on scale and recurring referral volume. My Steward won’t pay an in-lane multiple for an out-of-lane, capital-intensive asset. Where does the ceiling land once you read it against the cash that converts? That’s the one I keep circling.',
      'My Operator credits modality-mix and de novo growth. My Floor only stands on the recurring referral base that exists today, not the capital-heavy growth, not the elective slice.',
      'The whole read rests on a FCF conversion number I can’t see yet. The maintenance-versus-growth capex split wasn’t fully provided, so the grade is provisional by design.',
    ],
    questions: [
      'Maintenance-versus-growth capex split, equipment age and replacement schedule, and true FCF conversion. Where does each land?',
      'Modality and study mix. What share is higher-margin MRI/CT versus commodity studies, and what’s the reimbursement trend by modality?',
      'Payer mix and site-of-service exposure. Is there rate pressure on outpatient imaging?',
    ],
    closing: {
      label: 'My conviction read',
      html: 'On our side of the table, this is a selective, not a pursue. Real scale, an attractive network, but out of lane, capital-intensive, read on partial data. I’m proposing <em>B</em>, and the discipline is to underwrite the cash that converts behind the 9.0× headline.',
      move: 'The FCF conversion number. Contain maintenance capex and the read firms. If the capex tax runs heavier than the headline, the grade and the effective entry move together, the wrong way.',
      caveat:
        'The 1–10 score and the pursue / selective / pass call aren’t mine. The Chair sets those once he’s heard us both.',
    },
  },

  examiner: {
    lens: 'Scrutiny Council · what kills the deal',
    proposes: [
      { text: 'grade provisional', kind: 'grade' },
      { text: 'underwrite the cash that converts', kind: 'ceil' },
      { text: 'data incomplete', kind: 'prov' },
    ],
    whatISee:
      'Same network. I read it for where it breaks. Out of lane and equipment-intensive, so my bar sits above a core services asset. <span class="qtag cim">CIM</span> The $26M of adjusted EBITDA is a position until the cash ties. Two questions: what free cash converts, and whether the data even lets me answer that.',
    screen: {
      label: 'What I ran',
      clear: true,
      html: 'Ran concentration across 28 centers and the referral base. Diversified, no payer near the 30% line. <span class="qtag data">DATA</span> EBITDA in band. Outpatient imaging, not manufacturing, CME, or out-of-network. No gate trips. The risk isn’t a bright line. It’s the capex tax on free cash, and a data room that hasn’t given me the numbers to size it.',
    },
    pillars: [
      {
        name: 'The Sentinel',
        lens: 'reimbursement & site-of-service exposure',
        html: 'Outpatient imaging reimbursement and site-of-service rates: where a margin moves. Payer mix and modality-level rate trend: not in what was provided. <span class="qtag qoe">QoE</span> Commercial-versus-government mix, rate pressure on outpatient imaging: open, not cleared. This leads the list. It sets the ceiling on every study line.',
      },
      {
        name: 'The Auditor',
        lens: 'is the cash real',
        html: 'EBITDA isn’t the number on an imaging deal. Free cash is. Maintenance-versus-growth capex split, equipment age, FCF conversion: not fully provided. <span class="qtag qoe">QoE</span> Until that ties, 9.0× is a multiple on a cash number I can’t see. Provisional. It stays provisional until the capex detail lands.',
      },
      {
        name: 'The Reader',
        lens: 'can you trust the operating detail',
        html: 'Capable operator on the face of it. But the read’s on partial data. The operating detail behind the capital base was thin. <span class="qtag qoe">QoE</span> I’m not crediting an operating story I haven’t been shown. At this stage the completeness of the data room is itself the management signal.',
      },
      {
        name: 'The Contrarian',
        lens: 'the capex tax, stated at its strongest',
        html: 'Strongest bear case: a services model wearing a manufacturing-like capital footprint, and the firm’s own imaging record proves the tax. <span class="qtag chron">CHRON</span> Sub-9.5× imaging entries returned a median 2.1×, below the services-roll-up median. Apex, entered above 10×, returned 1.6×. The assumption to stress is that 9.0× on EBITDA is fair. On the cash that converts, it may run steeper.',
      },
    ],
    tensions: [
      'The Partner reads the capex as a known, gradeable drag. My Auditor can’t grade what wasn’t provided. We agree it’s real. We disagree on whether the asset is gradeable at all until the FCF split ties.',
      'My Sentinel wants the modality-level reimbursement trend before the floor is banked. My Contrarian thinks the capex tax alone, evidenced in the record, discounts the entry. The Chair decides which carries.',
    ],
    questions: [
      'Maintenance-versus-growth capex bridge, equipment age and replacement schedule, and the FCF conversion the entry should read against.',
      'Modality and study mix, reimbursement trend by modality. Where does the higher-margin volume actually sit?',
      'Payer mix and site-of-service exposure. How did imaging rates behave through the last reimbursement cycle?',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'No gate trips, and the network’s attractive. But out of lane, capital-intensive, scored on partial data. The entry reads against the cash that converts. I hold the grade at <em>B</em> and the read provisional until the capex and modality detail lands.',
      move: 'The maintenance-capex split and FCF conversion. It decides whether 9.0× on EBITDA is fair or a steeper multiple on the cash that actually returns.',
      caveat:
        'I build the case against the deal, not the verdict. The Chair weighs my findings against the Partner’s and sets the call.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'Out of the cleanest lane, but with a named reason: real scale, 28 centers, recurring referral-driven volume. <span class="qtag cim">CIM</span>',
      examiner:
        'Imaging isn’t a named lane, and it carries a manufacturing-like capital footprint under a services model. The bar rises. The premium isn’t obviously earned.',
      contested: true,
      ruling:
        'Out of lane → <em>selective</em>. It scores a 5, not a 7, because the lane call plus the capital profile is a conscious judgment.',
    },
    {
      axis: 'Protected downside',
      partner:
        'Referral-driven, partly schedulable. Recurring enough to grade, with a broad referral base behind it. <span class="qtag cim">CIM</span>',
      examiner:
        'Some studies defer in a downturn, and the equipment base is a fixed-cost drag when volume softens. Real floor, not impregnable.',
      contested: false,
    },
    {
      axis: 'Asset quality vs price',
      partner:
        'A B asset. 9.0× on EBITDA looks fair, but the capex intensity moves the price math. Underwrite the free cash. <span class="qtag data">DATA</span>',
      examiner:
        'Maintenance capex pulls cash conversion down. Sub-9.5× imaging entries returned a median 2.1×, below the services median. <span class="qtag chron">CHRON</span>',
      contested: true,
      ruling:
        'Hold <em>B</em>. Read the entry against the cash that converts behind the 9.0× headline. The effective multiple on cash decides this.',
    },
    {
      axis: 'Value creation',
      partner:
        'Modality-mix shift, throughput and scheduling, de novo and tuck-in centers: operating levers that are ours to pull. <span class="qtag ic">IC</span>',
      examiner:
        'Operating levers are real. The de novo and tuck-in growth is capital-heavy, so it pencils only at realistic returns on that capital. On that we agree.',
      contested: false,
    },
    {
      axis: 'Management & data',
      partner:
        'Capable operator, graded on partial data. The capex and maintenance detail was thin in what was loaded. <span class="qtag qoe">QoE</span>',
      examiner:
        'Maintenance-versus-growth split, modality mix, equipment age: not fully provided. Until that detail lands, the read’s provisional.',
      contested: true,
      ruling:
        'Read stands <em>provisional</em>. The score carries a confidence caveat until the capex and modality detail completes. It can move the call either way.',
    },
  ],

  converse: {
    opening:
      'Attractive imaging network. Out of lane, capital-intensive, scored on partial data. That keeps it a selective, not a pursue.',
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
            html: 'Out of lane isn’t an automatic no. It needs a named reason, and I have one. Real scale across 28 centers and a recurring referral-driven base. <span class="qtag cim">CIM</span> That earns the look. The discipline’s in pricing the free cash, not in passing on a credible network.',
          },
          {
            voice: 'examiner',
            role: '· the auditor',
            html: 'I test the cash, not the label. Imaging’s equipment-heavy, so maintenance capex pulls free cash well below EBITDA. <span class="qtag data">DATA</span> The split that decides it wasn’t fully provided. So 9.0× on EBITDA is a multiple on a cash number I can’t yet see.',
          },
        ],
        ruling:
          'A <em>selective</em>. That’s why it’s a 5, not a 7. The lane call and the capex are mine to weigh, and I’m holding the read against free cash with the data caveat live.',
      },
      {
        q: 'Which of our deals does this look like?',
        contested: false,
        replies: [
          {
            voice: 'partner',
            role: '· the steward',
            html: 'Imaging names. Clearview returned 2.3× at 8.6× in. Radius is tracking 1.9× at 9.2×. <span class="qtag chron">CHRON</span> Beacon at 9.0× sits in that fairly-priced band on EBITDA. The disciplined entries returned.',
          },
          {
            voice: 'examiner',
            role: '· the contrarian',
            html: 'Apex is the one to remember. 10.4× in, 1.6× out. <span class="qtag chron">CHRON</span> The set returns below the services-roll-up median, the capex tax in the record. The comps say underwrite the cash that converts.',
          },
        ],
      },
    ],
  },
}
