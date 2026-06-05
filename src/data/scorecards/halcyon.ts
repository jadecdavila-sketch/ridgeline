import type { ScorecardData } from '../scorecardTypes'

export const halcyon: ScorecardData = {
  id: 'halcyon',
  crumbName: 'Halcyon Home Health',
  eyebrow: 'NDA Scorecard · Home Health',
  name: 'Halcyon Home Health',
  desc: 'Regional home health and home-based care provider. Skilled nursing and therapy in the home, Medicare-weighted, with a single dominant payer relationship. ~$9M adjusted EBITDA on ~$61M revenue.',
  verdict: 'pass',
  score: '4',
  grade: 'B−',
  entry: '8.0',
  dualReads: [
    {
      side: 'q',
      label: 'Two-track read',
      val: 'Capped at B−',
      note: 'In-lane home-based care with real demand. A single payer over the line caps quality regardless of the operating story.',
    },
    {
      side: 'p',
      label: 'Price discipline',
      val: 'Moot',
      note: '8.0x would be fair for the asset. Price is not the question. The concentration gate governs the score.',
    },
  ],
  reasonsLead: 'Pass.',
  reasonsBody:
    'In-lane home health with a credible operating model. One payer sits above the 30 percent line and the revenue rides reimbursement. That trips the concentration gate and short-circuits the score. A good entry price and a fine clinical story do not buy it back. Take one question to the table: is the concentration a contractual cliff or something diligence can re-cut. Absent that, pass.',
  spineLead: 'Scored against the REP healthcare framework',
  axes: [
    {
      name: 'Sector & model fit',
      ai: 'In lane?',
      read: [
        'Home-based care is a named preferred lane. The model is the right kind: recurring, episode-driven skilled care in the home, no facility-heavy or out-of-network drag. The lane is not the problem.',
      ],
      chipCls: 'range',
      chipLabel: 'In lane',
      barPct: 80,
      barColor: 'green',
    },
    {
      name: 'Protected downside',
      ai: 'Non-negotiable',
      read: [
        'This is where it breaks. Revenue is ',
        { cite: 'e-down', tag: 'CIM', label: 'concentrated in a single payer and rides reimbursement' },
        '. A rate action or a contract non-renewal would hit a third of the business at once. The floor is exposed.',
      ],
      evidence: [
        {
          id: 'e-down',
          type: 't-cim',
          srctag: 'CIM',
          doc: 'Halcyon CIM · Payer concentration · p.19',
          snip: [
            'Single largest payer is ',
            { hl: 'above one-third of revenue' },
            ', Medicare-weighted, reimbursement set administratively. No commercial book of size to offset a rate move.',
          ],
          prov: 'Concentration above the gate. The downside is not capped.',
          warn: true,
        },
      ],
      chipCls: 'above',
      chipLabel: 'Exposed',
      barPct: 30,
      barColor: 'red',
    },
    {
      name: 'Asset quality vs price',
      ai: 'The central discipline',
      read: [
        'The price is fair for the asset. The gate moots the comparison. Quality cannot grade above B− while a single payer governs a third of revenue, and the framework will not collapse a clean entry multiple against a capped grade into a pursue.',
      ],
      chipCls: 'above',
      chipLabel: 'Gate governs',
      barPct: 40,
      barColor: 'red',
    },
    {
      name: 'Value creation',
      ai: 'Controllable levers',
      read: [
        'Payer diversification is the only lever that matters, and the hardest. Re-cutting the book toward commercial and Medicare Advantage takes time the underwriting may not have. Tuck-ins and route density help the operating margin, not the core risk.',
      ],
      chipCls: 'mon',
      chipLabel: 'Single lever',
      barPct: 48,
      barColor: 'amber',
    },
    {
      name: 'Management & data',
      ai: 'Credibility multiplier',
      read: [
        'Operator-led and clinically capable. The data ties. Management is not the issue, and a strong team does not buy back a tripped gate.',
      ],
      chipCls: 'strong',
      chipLabel: 'Credible',
      barPct: 70,
    },
  ],
  gatesHeading: 'A disqualifier triggered. The concentration gate governs.',
  gates: [
    {
      state: 'pass-ok',
      title: 'EBITDA in band',
      body: ['~$9M, inside the $20 to 75M target range on revenue, though small. Clear.'],
    },
    {
      state: 'pass-ok',
      title: 'Model & sector',
      body: ['In-lane home-based care. No facility-heavy, CME, or out-of-network exposure. Clear.'],
    },
    {
      state: 'watch',
      title: 'Concentration · tripped',
      body: [
        { cite: 'e-gate', tag: 'CIM', label: 'Single payer above the 30 percent line' },
        '. This is the hard-pass trigger. It short-circuits the score.',
      ],
      evidence: [
        {
          id: 'e-gate',
          type: 't-cim',
          srctag: 'CIM',
          doc: 'Halcyon CIM · Payer schedule · p.20',
          snip: [
            'Largest single payer ',
            { hl: 'over 30 percent' },
            ' of revenue, the bright line. The framework auto-passes single-customer concentration above 30 percent.',
          ],
          prov: 'Tripped. The rest of the read is academic unless this re-cuts.',
          warn: true,
        },
      ],
    },
  ],
  gateNote: [
    'Any single trigger short-circuits the score: facility-heavy or CME, an out-of-network-dependent model, ',
    { b: 'single-customer concentration over 30 percent' },
    ', EBITDA outside $20 to 75M, no credible value-add path, or a non-credible banker. Halcyon trips the concentration line.',
  ],
  moatNote: [
    'Matched on sub-sector and structure. The record shows concentration-heavy entries underperform. Halcyon fits that pattern.',
  ],
  comps: [
    { name: 'Riverbend Home Health', year: '2019', mult: '8.2x', tag: 'up', tagLabel: 'Outperformed', moic: '2.4x', status: 'Exited 2023' },
    { name: 'Caldwell Care', year: '2021', mult: '8.6x', tag: 'held', tagLabel: 'In line', moic: '1.9x', status: 'Active' },
    { name: 'Pinnacle Home Health', year: '2018', mult: '7.9x', tag: 'dn', tagLabel: 'Underperformed', moic: '1.3x', status: 'Exited 2022' },
    { name: 'Stonegate Hospice', year: '2020', mult: '9.1x', tag: 'dn', tagLabel: 'Underperformed', moic: '1.2x', status: 'Exited 2024' },
  ],
  subject: { name: 'Halcyon Home Health', year: '2026', mult: '8.0x' },
  moatEvidence: {
    id: 'e-moat',
    type: 't-chrono',
    srctag: 'Chronograph',
    doc: 'REP portfolio returns · home-based care',
    snip: [
      'Diversified home-health entries returned a ',
      { hl: 'median 2.2x' },
      '. The two concentration-heavy entries, Pinnacle and Stonegate, returned ',
      { hl: '1.3x and 1.2x' },
      ' after payer actions. Halcyon’s concentration matches the cautionary set, not the winners.',
    ],
    prov: 'The firm’s own record is why concentration is a gate, not a deduction.',
  },
  judgment: [
    'Is the concentration a contractual cliff or a re-cuttable book? If diligence shows the single payer is several contracts that can be diversified, the gate reads differently.',
    'Is there a price at which the concentration risk is paid for, or is this simply out of bounds regardless of entry?',
  ],
  banker: [
    { q: 'Full payer schedule: the single largest payer’s exact share, contract term, renewal history, and rate trajectory.', imp: 'hi', label: 'High impact' },
    { q: 'Referral-source concentration: how much volume comes from the top one to three referral relationships.', imp: 'hi', label: 'High impact' },
    { q: 'PDGM and reimbursement exposure: sensitivity of EBITDA to a Medicare home-health rate move.', imp: 'hi', label: 'High impact' },
    { q: 'Diversification path: realistic timeline and cost to re-weight the book toward commercial and MA payers.', imp: 'md', label: 'Medium' },
    { q: 'Clinician staffing and turnover; dependence on any single regional team.', imp: 'md', label: 'Medium' },
  ],
  decisionRec: { bold: 'Pass', tail: ' (4 of 10, concentration gate over the line)' },
  footText:
    'Illustrative prototype. Halcyon Home Health and all figures are fictional. The 1 to 10 scoring, hard-pass screen, and concentration gate follow the REP Healthcare Investment Framework and the rep-deal-eval rubric. The comparable-deal record stands in for Ridgemont’s realized returns.',
  chat: {
    intro:
      'I am working from everything behind this score: the CIM, the quality-of-earnings read, the comparable Ridgemont deals, and the REP healthcare framework. Ask why the call landed where it did, or push on it.',
    placeholder: 'Ask anything about Halcyon',
    items: [
      {
        q: 'Why a pass?',
        a: 'A single payer sits above the 30 percent line, a hard-pass gate. The gate short-circuits the score. It does not matter that the lane is right, the price is fair, and the team is capable. Concentration over the line means one rate action or non-renewal can take a third of the business, and the framework will not underwrite that as a pursue.<div class="src-tags"><span class="qtag cim">CIM</span><span class="qtag data">DATA</span></div>',
      },
      {
        q: 'Could the concentration be fixed?',
        a: 'Maybe, and that is the only question worth diligence here. If the "single payer" is several separable contracts, or the book can be re-weighted toward commercial and Medicare Advantage on a credible timeline, the gate reads differently. But that is a multi-year operating project, not a closing-day fix, so underwrite it conservatively.<div class="src-tags"><span class="qtag cim">CIM</span></div>',
      },
      {
        q: 'Is the asset any good underneath?',
        a: 'Yes, which is what makes it a near miss rather than an easy no. In-lane home-based care, recurring episode-driven demand, a capable operator, a fair entry at 8.0x. Strip out the concentration and this is a different conversation. With it, the downside is not protected, and that is the framework’s non-negotiable.<div class="src-tags"><span class="qtag cim">CIM</span><span class="qtag qoe">QoE</span></div>',
      },
      {
        q: 'Which of our deals does this look like?',
        a: 'The cautionary home-health names. Pinnacle returned 1.3x and Stonegate 1.2x, both after payer actions hit a concentrated book. The diversified entries, Riverbend at 2.4x and Caldwell at 1.9x, are the counterexample. Halcyon’s concentration puts it with the first group. That is why the gate exists.<div class="src-tags"><span class="qtag chron">CHRON</span></div>',
      },
    ],
  },
}
