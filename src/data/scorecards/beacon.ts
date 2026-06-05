import type { ScorecardData } from '../scorecardTypes'

export const beacon: ScorecardData = {
  id: 'beacon',
  crumbName: 'Beacon Imaging Alliance',
  eyebrow: 'NDA Scorecard · Diagnostic Imaging',
  name: 'Beacon Imaging Alliance',
  desc: 'Outpatient diagnostic imaging, 28 centers. MRI, CT, and related modalities on a capital-intensive equipment base. ~$26M adjusted EBITDA on ~$132M revenue.',
  verdict: 'selective',
  score: '5',
  grade: 'B',
  entry: '9.0',
  dualReads: [
    {
      side: 'q',
      label: 'Two-track read',
      val: 'B asset',
      note: 'Attractive imaging market and real scale. Out of lane, capital-intensive, scored on partial data. The capex changes the cash math.',
    },
    {
      side: 'p',
      label: 'Price discipline',
      val: 'Fair on EBITDA',
      note: '9.0x looks fair. Capex intensity means EBITDA overstates free cash. Price the free cash, not the headline multiple.',
    },
  ],
  reasonsLead: 'Selective.',
  reasonsBody:
    'An attractive imaging market with a credible network. Three things hold it to a 5. Diagnostic imaging is out of lane, so the bar rises. It is capital-intensive, so EBITDA flatters the cash story and the entry should be read against free cash. The data loaded was partial, so the read carries a confidence caveat. No gate trips. The call is the lane plus the capex math. It needs the missing detail before it firms up.',
  spineLead: 'Scored against the REP healthcare framework',
  axes: [
    {
      name: 'Sector & model fit',
      ai: 'In lane?',
      read: [
        'Diagnostic imaging is ',
        { cite: 'e-lane', tag: 'CIM', label: 'not a named lane' },
        ', so the bar rises. It is more equipment- and facility-intensive than the core services lanes. Recurring referral-driven volume, but a different capital profile.',
      ],
      evidence: [
        {
          id: 'e-lane',
          type: 't-cim',
          srctag: 'CIM',
          doc: 'Beacon CIM · Business overview · p.5',
          snip: [
            'Outpatient imaging across 28 centers. Recurring referral volume, but ',
            { hl: 'equipment-intensive with a heavy maintenance-capex base' },
            '. A services model with a manufacturing-like capital footprint.',
          ],
          prov: 'Out of lane and capital-intensive. Both raise the bar.',
          warn: true,
        },
      ],
      chipCls: 'mon',
      chipLabel: 'Out of lane',
      barPct: 56,
      barColor: 'amber',
    },
    {
      name: 'Protected downside',
      ai: 'Non-negotiable',
      read: [
        'Imaging volume is referral-driven and partly schedulable. Some studies defer in a downturn. Recurring enough to grade. The equipment base means a fixed-cost drag if volume softens.',
      ],
      chipCls: 'mon',
      chipLabel: 'Mixed',
      barPct: 62,
      barColor: 'amber',
    },
    {
      name: 'Asset quality vs price',
      ai: 'The central discipline',
      read: [
        'B asset where the ',
        { cite: 'e-qp', tag: 'DATA', label: 'capex intensity changes the price math' },
        '. A 9.0x EBITDA entry looks fair. Maintenance capex pulls free cash well below EBITDA, so the effective multiple on cash runs higher than it reads.',
      ],
      evidence: [
        {
          id: 'e-qp',
          type: 't-chrono',
          srctag: 'Deal data',
          doc: 'REP entries · capital-intensive services',
          snip: [
            'Imaging maintenance capex runs ',
            { hl: 'materially above the services-roll-up norm' },
            '. Underwrite FCF conversion, not EBITDA. The headline multiple understates the price on cash.',
          ],
          prov: 'Underwrite on free cash. The EBITDA multiple flatters it.',
        },
      ],
      chipCls: 'mon',
      chipLabel: 'Capex-adjusted',
      barPct: 60,
      barColor: 'amber',
    },
    {
      name: 'Value creation',
      ai: 'Controllable levers',
      read: [
        'Credible levers. Modality-mix shift toward higher-margin studies. Throughput and scheduling optimization. De novo or tuck-in centers, though de novo is capital-heavy. The operating levers are real. The growth levers carry a capital cost.',
      ],
      chipCls: 'strong',
      chipLabel: 'Credible',
      barPct: 70,
    },
    {
      name: 'Management & data',
      ai: 'Credibility multiplier',
      read: [
        'Capable operator. The read is on ',
        { cite: 'e-mgmt2', tag: 'QoE', label: 'partial data' },
        '. The capex and maintenance detail was thin in what was loaded. The score carries a confidence caveat until the operating detail is complete.',
      ],
      evidence: [
        {
          id: 'e-mgmt2',
          type: 't-qoe',
          srctag: 'QoE pattern',
          doc: 'In-sector QoE history · data completeness',
          snip: [
            'Maintenance-versus-growth capex split, modality mix, and equipment age were ',
            { hl: 'not fully provided' },
            '. The score is preliminary. The free-cash picture firms up only with that detail.',
          ],
          prov: 'Scored on partial data. Treat the read as provisional.',
          warn: true,
        },
      ],
      chipCls: 'mon',
      chipLabel: 'Partial data',
      barPct: 52,
      barColor: 'amber',
    },
  ],
  gatesHeading: 'No disqualifier triggered. The constraints are the lane, the capex, and thin data.',
  gates: [
    { state: 'pass-ok', title: 'EBITDA in band', body: ['~$26M, inside the $20 to 75M target range. Clear.'] },
    { state: 'pass-ok', title: 'Model & sector', body: ['Outpatient imaging services. Not pure manufacturing, CME, or out-of-network, though more capital-intensive than the core lanes. Clear.'] },
    { state: 'pass-ok', title: 'Concentration', body: ['Spread across 28 centers and a broad referral base. No single payer near the 30 percent line. Clear.'] },
  ],
  gateNote: [
    'Any single trigger short-circuits the score to an automatic 1 to 2: manufacturing or CME, an out-of-network-dependent model, single-customer concentration over 30 percent, EBITDA outside $20 to 75M, no credible value-add path, or a non-credible banker. Capex intensity and partial data are ',
    { b: 'not' },
    ' hard-passes. They lower the read and become the judgment below.',
  ],
  moatNote: ['Matched on sub-sector, size, and entry multiple. The imaging set is thin and capital-intensive. That is itself part of the read.'],
  comps: [
    { name: 'Clearview Imaging', year: '2019', mult: '8.6x', tag: 'up', tagLabel: 'Outperformed', moic: '2.3x', status: 'Exited 2024' },
    { name: 'Radius Diagnostics', year: '2021', mult: '9.2x', tag: 'held', tagLabel: 'In line', moic: '1.9x', status: 'Active' },
    { name: 'Summit Imaging Partners', year: '2018', mult: '8.9x', tag: 'held', tagLabel: 'Tracking', moic: 'n/a', status: 'Active' },
    { name: 'Apex Radiology', year: '2020', mult: '10.4x', tag: 'dn', tagLabel: 'Underperformed', moic: '1.6x', status: 'Exited 2023' },
  ],
  subject: { name: 'Beacon Imaging Alliance', year: '2026', mult: '9.0x' },
  moatEvidence: {
    id: 'e-moat',
    type: 't-chrono',
    srctag: 'Chronograph',
    doc: 'REP portfolio returns · diagnostic imaging',
    snip: [
      'Sub-9.5x imaging entries returned a ',
      { hl: 'median 2.1x' },
      ', below the services-roll-up median. The capex tax. The entry above 10x returned ',
      { hl: '1.6x' },
      '. Beacon at 9.0x is fairly priced on EBITDA. The FCF read decides it.',
    ],
    prov: 'Imaging returns run below the services median. The capex is why.',
  },
  judgment: [
    'The lane call. Imaging is out of lane and capital-intensive. Is it close enough to underwrite, and does the capital profile fit the firm’s model?',
    'The capex math. EBITDA flatters the cash story. What is true FCF conversion, and what is the effective entry on free cash?',
    'Data completeness. The read is provisional. The missing maintenance-capex and modality detail has to land before this firms up.',
  ],
  banker: [
    { q: 'Capex detail: maintenance versus growth capex, equipment age and replacement schedule, and true FCF conversion.', imp: 'hi', label: 'High impact' },
    { q: 'Modality and study mix: share of higher-margin MRI/CT versus commodity studies, and the reimbursement trend by modality.', imp: 'hi', label: 'High impact' },
    { q: 'Payer mix and site-of-service reimbursement: commercial versus government, and any rate pressure on outpatient imaging.', imp: 'hi', label: 'High impact' },
    { q: 'Referral concentration and durability: share from the top referring physician groups and health systems.', imp: 'md', label: 'Medium' },
    { q: 'The missing operating detail: complete the data room so the provisional read can be confirmed.', imp: 'md', label: 'Medium' },
  ],
  decisionRec: { bold: 'Selective', tail: ' (5 of 10, out of lane, scored on partial data)' },
  footText:
    'Illustrative prototype. Beacon Imaging Alliance and all figures are fictional. The 1 to 10 scoring, two-track quality grade and held price ceiling, hard-pass screen, out-of-lane judgment, and capex-adjusted price framing follow the REP Healthcare Investment Framework and the rep-deal-eval rubric. The comparable-deal record stands in for Ridgemont’s realized returns.',
  chat: {
    intro:
      'I am working from everything behind this score: the CIM, the quality-of-earnings read, the comparable Ridgemont deals, and the REP healthcare framework. Ask why the call landed where it did, or push on it.',
    placeholder: 'Ask anything about Beacon',
    items: [
      {
        q: 'Why a 5?',
        a: 'Three drags. Diagnostic imaging is out of lane, so the bar rises. It is capital-intensive, so EBITDA overstates free cash and the real price on cash runs higher than 9.0x suggests. The data loaded was partial, so the read is provisional. None of that is disqualifying, which is why it is selective rather than a pass. The lane, the capex math, and the missing detail keep it at a 5.<div class="src-tags"><span class="qtag cim">CIM</span><span class="qtag data">DATA</span></div>',
      },
      {
        q: 'Why the partial-data caveat?',
        a: 'The maintenance-versus-growth capex split, modality mix, and equipment age were not fully provided. Those are the numbers that decide an imaging deal. Without them the free-cash picture is an estimate, so I have flagged the read as preliminary. The gap can move the score in either direction once the data room is complete.<div class="src-tags"><span class="qtag qoe">QoE</span></div>',
      },
      {
        q: 'How does the capex change it?',
        a: 'Imaging carries a heavy equipment base, so maintenance capex pulls free cash well below EBITDA, more than a services roll-up. A 9.0x EBITDA entry can run a meaningfully higher multiple on cash. The discipline is to underwrite FCF conversion and read the entry against free cash. The firm’s imaging returns run below the services median for that reason.<div class="src-tags"><span class="qtag data">DATA</span><span class="qtag chron">CHRON</span></div>',
      },
      {
        q: 'Which of our deals does this look like?',
        a: 'Imaging names. Clearview returned 2.3x at 8.6x and Radius is tracking 1.9x at 9.2x. Apex, entered above 10x, returned 1.6x. The set returns below the services-roll-up median. That is the capex tax showing up in the record. Beacon at 9.0x is fairly priced on EBITDA, but the comps say underwrite the cash.<div class="src-tags"><span class="qtag chron">CHRON</span></div>',
      },
    ],
  },
}
