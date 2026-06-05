import type { ScorecardData } from '../scorecardTypes'

export const meridian: ScorecardData = {
  id: 'meridian',
  crumbName: 'Meridian Behavioral Health',
  eyebrow: 'NDA Scorecard · Behavioral Health',
  name: 'Meridian Behavioral Health',
  desc: 'Multi-state outpatient behavioral health platform. 84 clinics across 6 states, founder-clinician led, recurring visit-based revenue. ~$24M adjusted EBITDA on ~$146M revenue.',
  verdict: 'selective',
  score: '6',
  grade: 'B+',
  entry: '12.1',
  dualReads: [
    {
      side: 'q',
      label: 'Two-track read',
      val: 'B+ asset',
      note: 'In-lane behavioral health with recurring demand and a real clinic network. A Medicaid-weighted payer mix and the rate risk that carries keep it B+, not A.',
    },
    {
      side: 'p',
      label: 'Price discipline',
      val: 'Above the line',
      note: '12.1x entry sits above the ~10x ceiling attached to a B+ grade. The whole call is whether the asset earns the premium; the engine says hold.',
    },
  ],
  reasonsLead: 'Selective.',
  reasonsBody:
    'A genuinely good, in-lane behavioral health asset in a market that rewards a disciplined roll-up. What holds it back is not the model, it is the price and the payer mix: a 12.1x entry above the held ceiling, and revenue weighted toward Medicaid, where a rate action can move the whole thesis. No gate trips. The call is a partner judgment on whether the quality justifies paying above the line, and on how much Medicaid rate risk to underwrite.',
  spineLead: 'Scored against the REP healthcare framework',
  axes: [
    {
      name: 'Sector & model fit',
      ai: 'In lane?',
      read: [
        'Behavioral health is a ',
        { cite: 'e-lane', tag: 'CIM', label: 'named preferred lane' },
        ', and the model is the right kind: recurring, visit-based outpatient revenue, not facility-heavy or out-of-network. In lane, which sets a normal bar rather than a raised one.',
      ],
      evidence: [
        {
          id: 'e-lane',
          type: 't-cim',
          srctag: 'CIM',
          doc: 'Meridian CIM · Business overview · p.8',
          snip: [
            'Outpatient behavioral health across 84 clinics; revenue is ',
            { hl: 'recurring and visit-based' },
            ', payer-contracted, with no out-of-network billing model.',
          ],
          prov: 'Passes the model-versus-end-market test; behavioral health is core.',
        },
      ],
      chipCls: 'range',
      chipLabel: 'In lane',
      barPct: 84,
      barColor: 'green',
    },
    {
      name: 'Protected downside',
      ai: 'Non-negotiable',
      read: [
        'Demand is recurring and non-deferrable, but the floor has a crack: revenue is ',
        { cite: 'e-down', tag: 'CIM', label: 'weighted toward Medicaid' },
        ', where reimbursement is set administratively and a rate action hits margin directly. The recurring base is real; the rate exposure is the soft spot.',
      ],
      evidence: [
        {
          id: 'e-down',
          type: 't-cim',
          srctag: 'CIM',
          doc: 'Meridian CIM · Payer mix · p.22',
          snip: [
            'Medicaid is the ',
            { hl: 'largest payer category' },
            ', above the in-sector norm; commercial mix is thinner. Rate durability, not volume, is the principal downside driver.',
          ],
          prov: 'Medicaid weighting is why this is a 6, not a clean pursue.',
          warn: true,
        },
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
        'Graded a ',
        { cite: 'e-qp', tag: 'DATA', label: 'B+ asset on a Medicaid-weighted mix' },
        ', separate from price. The held ceiling on B+ is roughly 10x; the 12.1x entry sits above it. Paying an A multiple for a B+ asset is the error the framework exists to prevent.',
      ],
      evidence: [
        {
          id: 'e-qp',
          type: 't-chrono',
          srctag: 'Deal data',
          doc: 'REP entries · behavioral health bracket',
          snip: [
            'B+ quality carries a held ceiling near ',
            { hl: '10x' },
            '; proposed entry ',
            { hl: '12.1x' },
            ' is above it. The gap between grade and price is the analysis.',
          ],
          prov: 'Above the line; the premium has to be earned in diligence or negotiated down.',
        },
      ],
      chipCls: 'above',
      chipLabel: 'Above ceiling',
      barPct: 42,
      barColor: 'red',
    },
    {
      name: 'Value creation',
      ai: 'Controllable levers',
      read: [
        'Credible levers: de novo clinic expansion on a proven template, payer-mix shift toward commercial, and disciplined tuck-ins. The mix-shift lever is the one that also de-risks the downside, which is why it carries weight here.',
      ],
      chipCls: 'strong',
      chipLabel: 'Strong',
      barPct: 76,
    },
    {
      name: 'Management & data',
      ai: 'Credibility multiplier',
      read: [
        'Founder-clinician led with an experienced CFO. Clinically credible and operator-run; reported figures tie. The open question is the quality of same-clinic growth, price versus volume versus acuity.',
      ],
      chipCls: 'strong',
      chipLabel: 'Credible',
      barPct: 74,
    },
  ],
  gatesHeading: 'No disqualifier triggered. The constraint is price, not a gate.',
  gates: [
    {
      state: 'pass-ok',
      title: 'EBITDA in band',
      body: ['~$24M, inside the $20 to 75M target range. Clear.'],
    },
    {
      state: 'pass-ok',
      title: 'Model & sector',
      body: ['In-lane outpatient behavioral health. Not facility-heavy, CME, or out-of-network. Clear.'],
    },
    {
      state: 'watch',
      title: 'Payer concentration',
      body: [
        { cite: 'e-gate', tag: 'CIM', label: 'No single payer above ~24 percent' },
        ', under the 30 percent gate, so it clears. But the Medicaid weighting behind that mix is the risk to size.',
      ],
      evidence: [
        {
          id: 'e-gate',
          type: 't-cim',
          srctag: 'CIM',
          doc: 'Meridian CIM · Payer concentration · p.23',
          snip: [
            'Largest single payer approx. ',
            { hl: '24 percent' },
            ' of revenue; the hard-pass line is 30 percent. Concentration clears; rate exposure does not show up as a gate.',
          ],
          prov: 'Clears the gate, but the payer mix is the dominant risk; see banker questions.',
        },
      ],
    },
  ],
  gateNote: [
    'Any single trigger short-circuits the score to an automatic 1 to 2: facility-heavy or CME, an out-of-network-dependent model, single-payer concentration over 30 percent, EBITDA outside $20 to 75M, no credible value-add path, or a non-credible banker. Price above the held ceiling is ',
    { b: 'not' },
    ' a hard-pass; it is the judgment call below.',
  ],
  moatNote: [
    'Matched to Meridian on sub-sector, size, and entry multiple, drawn from REP’s realized behavioral health returns rather than a generic comp set.',
  ],
  comps: [
    { name: 'Crossroads Behavioral', year: '2020', mult: '9.0x', tag: 'up', tagLabel: 'Outperformed', moic: '2.6x', status: 'Exited 2024' },
    { name: 'Harbor Behavioral Health', year: '2019', mult: '9.6x', tag: 'held', tagLabel: 'In line', moic: '2.0x', status: 'Exited 2023' },
    { name: 'Meadowbrook Behavioral', year: '2022', mult: '9.4x', tag: 'held', tagLabel: 'Tracking', moic: '—', status: 'Active' },
    { name: 'Clarvida Health', year: '2018', mult: '11.2x', tag: 'dn', tagLabel: 'Underperformed', moic: '1.4x', status: 'Exited 2022' },
  ],
  subject: { name: 'Meridian Behavioral Health', year: '2026', mult: '12.1x' },
  moatEvidence: {
    id: 'e-moat',
    type: 't-chrono',
    srctag: 'Chronograph',
    doc: 'REP portfolio returns · behavioral health',
    snip: [
      'Sub-10x entries returned a ',
      { hl: 'median 2.3x' },
      '; the single entry above 11x, Clarvida, was Medicaid-heavy and returned ',
      { hl: '1.4x' },
      ' after a rate cut. Meridian at 12.1x sits above the bracket and shares that exposure.',
    ],
    prov: 'The cautionary comp is the one that looks most like this; weigh it.',
  },
  judgment: [
    'The price call. 12.1x is above the ~10x ceiling a B+ grade holds. Does the asset earn the premium, or is the discipline to hold the line and walk?',
    'Medicaid rate risk. How much of the floor depends on rates that can be set against you, and is the commercial mix-shift credible enough to underwrite?',
    'Same-clinic growth quality. Is the organic growth price, volume, or acuity, and is the de novo template proven at this scale?',
  ],
  banker: [
    { q: 'Full payer mix and trajectory: Medicaid versus commercial share by state, and the rate outlook in the largest Medicaid markets.', imp: 'hi', label: 'High impact' },
    { q: 'Same-clinic revenue bridge: price versus patient volume versus acuity mix. Validates the organic growth claim.', imp: 'hi', label: 'High impact' },
    { q: 'De novo unit economics: cost to open, time to maturity, and the realized ramp curve versus plan.', imp: 'hi', label: 'High impact' },
    { q: 'Commercial mix-shift plan: how contracted versus aspirational is the move toward commercial payers.', imp: 'md', label: 'Medium' },
    { q: 'Clinician recruitment and turnover by cohort; dependence on the founder-clinician.', imp: 'md', label: 'Medium' },
    { q: 'EBITDA adjustment bridge: owner compensation, de novo ramp costs, and one-time items.', imp: 'md', label: 'Medium' },
  ],
  decisionRec: { bold: 'Selective', tail: ' (6 of 10, B+ asset, above the line)' },
  footText:
    'Illustrative prototype. Meridian Behavioral Health and all figures are fictional. The 1 to 10 scoring, two-track quality grade and held price ceiling, hard-pass screen, and payer-rate risk framing follow the REP Healthcare Investment Framework and the rep-deal-eval rubric. The comparable-deal record stands in for Ridgemont’s realized returns.',
  chat: {
    intro:
      'I am working from everything behind this score: the CIM, the quality-of-earnings read, the comparable Ridgemont deals, and the REP healthcare framework. Ask why the call landed where it did, or push on it.',
    placeholder: 'Ask anything about Meridian',
    items: [
      {
        q: 'Why selective and not pursue?',
        a: 'The asset is in lane and genuinely good, but two things hold it to a 6. The 12.1x entry sits above the ~10x ceiling a B+ grade carries, so you would be paying an A multiple for a B+ asset. And the payer mix leans Medicaid, where a rate action can move the thesis. No gate trips, so it is not a pass; it is a judgment on whether to pay the premium.<div class="src-tags"><span class="qtag data">DATA</span><span class="qtag cim">CIM</span></div>',
      },
      {
        q: 'What is the Medicaid risk, concretely?',
        a: 'Reimbursement on the Medicaid book is set administratively, not negotiated, so a state rate cut flows straight to margin with little to offset it. The recurring, non-deferrable demand protects volume; it does not protect price. The mitigant is the commercial mix-shift lever, but that is a plan, not yet in the P&L. It is the first banker question for that reason.<div class="src-tags"><span class="qtag cim">CIM</span><span class="qtag qoe">QoE</span></div>',
      },
      {
        q: 'What would move it to a pass?',
        a: 'A gate, or the price. Single-payer concentration over 30 percent would auto-pass it; the largest today is near 24 percent. An entry held above the line with no path to compression, against an asset whose closest high-entry comp returned 1.4x, is the other way it slides. Diligence showing the organic growth is mostly price would also weaken it.<div class="src-tags"><span class="qtag cim">CIM</span><span class="qtag chron">CHRON</span></div>',
      },
      {
        q: 'Which of our deals does this look like?',
        a: 'Behavioral health names from the firm’s record. Crossroads anchors the upside at 9.0x and 2.6x. Harbor returned 2.0x at 9.6x. Clarvida is the cautionary one: Medicaid-heavy, entered above 11x, and returned 1.4x after a rate cut. Meridian at 12.1x sits above the bracket and shares Clarvida’s exposure, which is the comparison that matters.<div class="src-tags"><span class="qtag chron">CHRON</span></div>',
      },
      {
        q: 'What are you least sure about?',
        a: 'Whether the premium is justified. It comes down to Medicaid rate durability and the credibility of the commercial mix-shift, neither fully evidenced in what was loaded. If rates hold and the shift is real, 12.1x can work; if not, the entry is the problem. That uncertainty is exactly why the engine stops at selective and hands it to you.<div class="src-tags"><span class="qtag qoe">QoE</span><span class="qtag cim">CIM</span></div>',
      },
    ],
  },
}
