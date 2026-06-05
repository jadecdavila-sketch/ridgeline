import type { ScorecardData } from '../scorecardTypes'

export const granite: ScorecardData = {
  id: 'granite',
  crumbName: 'Granite Dialysis Partners',
  eyebrow: 'NDA Scorecard · Dialysis',
  name: 'Granite Dialysis Partners',
  desc: 'Outpatient dialysis operator. 40 clinics, government-weighted reimbursement, structural exposure to rate setting and a live regulatory overhang. ~$18M adjusted EBITDA on ~$120M revenue.',
  verdict: 'pass',
  score: '3',
  grade: 'C+',
  entry: '7.5',
  dualReads: [
    {
      side: 'p',
      label: 'Two-track read',
      val: 'Capped at C+',
      note: 'Recurring, non-deferrable treatment, but government-weighted reimbursement and a regulatory overhang cap quality regardless of the operating story.',
    },
    {
      side: 'p',
      label: 'Price discipline',
      val: 'Moot',
      note: '7.5x is cheap, and it does not matter. A reimbursement-dependent model with a regulatory cloud is not bought back by a low entry.',
    },
  ],
  reasonsLead: 'Pass.',
  reasonsBody:
    'The lowest score on the board. Dialysis demand is genuinely non-deferrable, but the revenue is structurally weighted to government reimbursement, the model rides rates set against you, and there is a live regulatory overhang on the sector. That combination trips the screen at entry. A cheap 7.5x does not buy back a reimbursement-dependent model with a regulatory cloud; the floor is exposed in exactly the way the framework refuses to underwrite.',
  spineLead: 'Scored against the REP healthcare framework',
  axes: [
    {
      name: 'Sector & model fit',
      ai: 'In lane?',
      read: [
        'Dialysis is ',
        { cite: 'e-lane', tag: 'CIM', label: 'a reimbursement-dependent model the screen guards against' },
        '. Recurring, non-deferrable treatment, but the economics ride government rate setting rather than a negotiated commercial book. Near the model gate, not safely inside it.',
      ],
      evidence: [
        {
          id: 'e-lane',
          type: 't-cim',
          srctag: 'CIM',
          doc: 'Granite CIM · Business overview · p.6',
          snip: [
            'Treatment volume is recurring and non-deferrable, but revenue is ',
            { hl: 'government-weighted and rate-set' },
            ', with limited commercial offset. The model depends on reimbursement the firm cannot negotiate.',
          ],
          prov: 'Reimbursement dependence is structural, not a diligence fix.',
          warn: true,
        },
      ],
      chipCls: 'above',
      chipLabel: 'At the model gate',
      barPct: 38,
      barColor: 'red',
    },
    {
      name: 'Protected downside',
      ai: 'Non-negotiable',
      read: [
        'Volume is protected; price is not. Government-weighted reimbursement plus a ',
        { cite: 'e-down', tag: 'CIM', label: 'live regulatory overhang' },
        ' means a single rate or policy action can reset the economics. Non-deferrable demand does not protect a rate-set floor.',
      ],
      evidence: [
        {
          id: 'e-down',
          type: 't-cim',
          srctag: 'CIM',
          doc: 'Granite CIM · Reimbursement & regulatory · p.18',
          snip: [
            'Concentration in government payers with a ',
            { hl: 'regulatory overhang on payment and oversight' },
            '; a rate action or policy change flows directly to margin with little to offset it.',
          ],
          prov: 'The floor is exposed; this is the disqualifying condition.',
          warn: true,
        },
      ],
      chipCls: 'above',
      chipLabel: 'Exposed',
      barPct: 26,
      barColor: 'red',
    },
    {
      name: 'Asset quality vs price',
      ai: 'The central discipline',
      read: [
        'A 7.5x entry is cheap, and the price is moot. Quality is capped at C+ while reimbursement and regulation govern the economics, and the framework will not collapse a low multiple against a capped grade into anything but a pass.',
      ],
      chipCls: 'above',
      chipLabel: 'Gate governs',
      barPct: 34,
      barColor: 'red',
    },
    {
      name: 'Value creation',
      ai: 'Controllable levers',
      read: [
        'The levers do not reach the core risk. Density and cost programs help margin at the edges, but no operating lever offsets a government rate reset or a regulatory action. The value case cannot underwrite the thing that governs the asset.',
      ],
      chipCls: 'mon',
      chipLabel: 'No lever for the risk',
      barPct: 40,
      barColor: 'amber',
    },
    {
      name: 'Management & data',
      ai: 'Credibility multiplier',
      read: [
        'Operationally competent and the data ties. It does not matter. A capable team cannot underwrite away reimbursement dependence and a regulatory overhang, which are structural to the sector, not to the operator.',
      ],
      chipCls: 'strong',
      chipLabel: 'Credible',
      barPct: 66,
    },
  ],
  gatesHeading: 'A disqualifier triggered. Reimbursement dependence and the regulatory overhang govern.',
  gates: [
    { state: 'pass-ok', title: 'EBITDA in band', body: ['~$18M, inside the $20 to 75M target range on revenue. Clear.'] },
    {
      state: 'watch',
      title: 'Model & sector · tripped',
      body: [
        { cite: 'e-gate', tag: 'CIM', label: 'Reimbursement-dependent model with a regulatory overhang' },
        '. This is the screen condition, and it short-circuits the score.',
      ],
      evidence: [
        {
          id: 'e-gate',
          type: 't-cim',
          srctag: 'CIM',
          doc: 'Granite CIM · Payer & regulatory schedule · p.19',
          snip: [
            'Government-weighted reimbursement with concentration in rate-set payers, plus an ',
            { hl: 'active regulatory overhang' },
            '. The framework auto-passes models whose economics ride reimbursement the firm cannot control.',
          ],
          prov: 'Tripped. The rest of the read is academic; the model is the problem.',
          warn: true,
        },
      ],
    },
    {
      state: 'watch',
      title: 'Concentration · elevated',
      body: ['Revenue concentrated in government payers; the rate-set exposure compounds the model trigger above.'],
    },
  ],
  gateNote: [
    'Any single trigger short-circuits the score: facility-heavy or CME, an ',
    { b: 'out-of-network- or reimbursement-dependent model' },
    ', single-customer concentration over 30 percent, EBITDA outside $20 to 75M, no credible value-add path, or a non-credible banker. Granite trips on reimbursement dependence and the regulatory overhang.',
  ],
  moatNote: ['Matched on sub-sector and structure. The dialysis and reimbursement-dependent set is the firm’s clearest record of why this model is screened out.'],
  comps: [
    { name: 'Keystone Renal', year: '2018', mult: '7.8x', tag: 'dn', tagLabel: 'Underperformed', moic: '1.3x', status: 'Exited 2022' },
    { name: 'Tidewater Dialysis', year: '2020', mult: '7.2x', tag: 'dn', tagLabel: 'Underperformed', moic: '1.1x', status: 'Exited 2024' },
    { name: 'Cedar Renal Care', year: '2019', mult: '8.0x', tag: 'held', tagLabel: 'In line', moic: '1.6x', status: 'Exited 2023' },
    { name: 'Basin Kidney Partners', year: '2021', mult: '7.6x', tag: 'dn', tagLabel: 'Underperformed', moic: '1.2x', status: 'Active' },
  ],
  subject: { name: 'Granite Dialysis Partners', year: '2026', mult: '7.5x' },
  moatEvidence: {
    id: 'e-moat',
    type: 't-chrono',
    srctag: 'Chronograph',
    doc: 'REP portfolio returns · dialysis & reimbursement-dependent',
    snip: [
      'Every reimbursement-dependent entry in the record returned ',
      { hl: 'below 1.7x' },
      ' regardless of how cheaply it was bought; the low entries did not protect the returns. The pattern is why the model is a screen, not a deduction.',
    ],
    prov: 'Cheap did not save these; that is the lesson the gate encodes.',
  },
  judgment: [
    'Is there any structure that de-risks reimbursement? Absent a commercial offset or a regulatory resolution, the model trigger stands, and that is rare to find.',
    'The record is unambiguous: reimbursement-dependent dialysis entries underperformed regardless of price. There is little here the framework leaves open.',
  ],
  banker: [
    { q: 'Payer and reimbursement detail: government versus commercial share, rate history, and exposure to the pending regulatory action.', imp: 'hi', label: 'High impact' },
    { q: 'Regulatory overhang specifics: nature, timeline, and range of outcomes, and the EBITDA sensitivity to each.', imp: 'hi', label: 'High impact' },
    { q: 'Commercial offset: any path to a negotiated book that would reduce the rate-set dependence.', imp: 'hi', label: 'High impact' },
    { q: 'Treatment volume durability and clinic-level economics, to size what an acceptable structure would even require.', imp: 'md', label: 'Medium' },
  ],
  decisionRec: { bold: 'Pass', tail: ' (3 of 10, reimbursement and regulatory gate)' },
  footText:
    'Illustrative prototype. Granite Dialysis Partners and all figures are fictional. The 1 to 10 scoring, hard-pass screen, and reimbursement-dependent model gate follow the REP Healthcare Investment Framework and the rep-deal-eval rubric. The comparable-deal record stands in for Ridgemont’s realized returns.',
  chat: {
    intro:
      'I am working from everything behind this score: the CIM, the quality-of-earnings read, the comparable Ridgemont deals, and the REP healthcare framework. Ask why the call landed where it did, or push on it.',
    placeholder: 'Ask anything about Granite',
    items: [
      {
        q: 'Why the lowest score on the board?',
        a: 'Because two of the framework’s structural objections stack. Dialysis is a reimbursement-dependent model, the kind the screen guards against, and it carries a live regulatory overhang. Demand is non-deferrable, but the economics ride government rates the firm cannot negotiate, so the downside is exposed in a way no operating lever fixes. That trips the screen, and a 7.5x entry does nothing to change it. Hence a 3.<div class="src-tags"><span class="qtag cim">CIM</span><span class="qtag data">DATA</span></div>',
      },
      {
        q: 'Is it salvageable?',
        a: 'Rarely, and only with structure the materials do not show. You would need a real commercial offset to the government book, or a resolution of the regulatory overhang, to move the model trigger. Operating improvements do not reach the core risk. Absent one of those, this is a pass regardless of how attractively it is priced.<div class="src-tags"><span class="qtag cim">CIM</span></div>',
      },
      {
        q: 'The price is cheap, does that not help?',
        a: 'No, and that is the point the record makes. Every reimbursement-dependent entry the firm holds returned below 1.7x, and the cheapest of them did the worst. A low multiple does not protect against a rate reset; it just sets a slightly lower floor on a risk you cannot control. The framework screens the model rather than deducting for it precisely because price has not saved these deals.<div class="src-tags"><span class="qtag chron">CHRON</span></div>',
      },
      {
        q: 'Which of our deals does this look like?',
        a: 'The dialysis and renal names, and they are a cautionary set top to bottom. Keystone returned 1.3x, Tidewater 1.1x, Basin 1.2x, all bought under 8x. Cedar Renal at 1.6x is the best of them and still below the firm’s hurdle. Granite fits the pattern exactly, which is why the model is a screen, not a judgment call.<div class="src-tags"><span class="qtag chron">CHRON</span></div>',
      },
    ],
  },
}
