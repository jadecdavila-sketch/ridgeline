import type { ScorecardData } from '../scorecardTypes'

export const vantage: ScorecardData = {
  id: 'vantage',
  crumbName: 'Vantage Surgical Holdings',
  eyebrow: 'NDA Scorecard · Ambulatory Surgical',
  name: 'Vantage Surgical Holdings',
  desc: 'Multi-specialty ambulatory surgical centers, 22 sites. Physician-syndicated, with strong procedural margins. ~$42M adjusted EBITDA on ~$210M revenue.',
  verdict: 'selective',
  score: '5',
  grade: 'B',
  entry: '11.0',
  dualReads: [
    {
      side: 'q',
      label: 'Two-track read',
      val: 'B asset',
      note: 'Strong margins, a real network. Ambulatory surgical is out of lane, and management tenure is thin against the benchmark.',
    },
    {
      side: 'p',
      label: 'Price discipline',
      val: 'Full',
      note: '11.0x is full for a B grade out of lane. The premium asks you to underwrite the lane call and the management gap together.',
    },
  ],
  reasonsLead: 'Selective.',
  reasonsBody:
    'Strong surgical platform, margins most deals would envy. Two things hold it to a 5. Ambulatory surgical sits outside the named lanes, so the bar rises. And tenure runs thin against where the framework wants it, a gap the firm has bridged before, but only with a CEO hire. No gate trips, so it stays selective. The call: is the out-of-lane quality worth a full price and a bet on new leadership.',
  spineLead: 'Scored against the REP healthcare framework',
  axes: [
    {
      name: 'Sector & model fit',
      ai: 'In lane?',
      read: [
        'Ambulatory surgical is ',
        { cite: 'e-lane', tag: 'CIM', label: 'not a named lane' },
        ', so the bar rises. The model is sound: physician-syndicated procedural volume. It runs more facility-intensive than the core services lanes. That distance is the judgment.',
      ],
      evidence: [
        {
          id: 'e-lane',
          type: 't-cim',
          srctag: 'CIM',
          doc: 'Vantage CIM · Business overview · p.6',
          snip: [
            'Procedural revenue across 22 centers, physician-syndicated; ',
            { hl: 'facility-based, not a core services-roll-up' },
            '. Strong unit economics, adjacent to the preferred lanes.',
          ],
          prov: 'Out of lane raises the bar. It is not a hard-pass.',
          warn: true,
        },
      ],
      chipCls: 'mon',
      chipLabel: 'Out of lane',
      barPct: 58,
      barColor: 'amber',
    },
    {
      name: 'Protected downside',
      ai: 'Non-negotiable',
      read: [
        'Procedural demand is durable. But a meaningful share is schedulable, deferrable in a downturn, and case volume rides physician loyalty. Recurring enough to grade, but less protected than a refill-driven model.',
      ],
      chipCls: 'mon',
      chipLabel: 'Mixed',
      barPct: 64,
      barColor: 'amber',
    },
    {
      name: 'Asset quality vs price',
      ai: 'The central discipline',
      read: [
        'B asset. Strong margins, offset by the out-of-lane distance and physician dependence. Ceiling on a B out of lane runs about 10x. The 11.0x entry sits above it. The premium has to be earned.',
      ],
      chipCls: 'above',
      chipLabel: 'Above ceiling',
      barPct: 46,
      barColor: 'red',
    },
    {
      name: 'Value creation',
      ai: 'Controllable levers',
      read: [
        'Credible levers. De novo centers on a proven template, specialty-mix shift toward higher-acuity cases, physician recruitment. The math works at realistic case volumes. It leans on retaining and adding physicians.',
      ],
      chipCls: 'strong',
      chipLabel: 'Credible',
      barPct: 74,
    },
    {
      name: 'Management & data',
      ai: 'Credibility multiplier',
      read: [
        'The soft spot. Leadership tenure is ',
        { cite: 'e-mgmt2', tag: 'IC', label: 'thin against the benchmark' },
        ', the same gap the firm saw at Peak Field and closed with a CEO hire, though the data ties even where the bench does not yet.',
      ],
      evidence: [
        {
          id: 'e-mgmt2',
          type: 't-ic',
          srctag: 'IC memo',
          doc: 'REP IC corpus · management tenure pattern',
          snip: [
            'Peak Field carried a similar tenure gap. The value plan worked once a ',
            { hl: 'seasoned CEO was hired post-close' },
            '. Tenure is bridgeable. Treat it as an underwriting assumption, not a given.',
          ],
          prov: 'Underwrite the leadership upgrade explicitly. Do not assume continuity.',
          warn: true,
        },
      ],
      chipCls: 'mon',
      chipLabel: 'Thin tenure',
      barPct: 54,
      barColor: 'amber',
    },
  ],
  gatesHeading: 'No disqualifier triggered. The constraints are the lane and the price.',
  gates: [
    { state: 'pass-ok', title: 'EBITDA in band', body: ['~$42M, inside the $20 to 75M target range. Clear.'] },
    { state: 'pass-ok', title: 'Model & sector', body: ['Physician-syndicated surgical services. Not manufacturing, CME, or out-of-network. Clear.'] },
    {
      state: 'pass-ok',
      title: 'Concentration',
      body: ['No single payer or physician group near the 30 percent line. Volume spreads across 22 centers. Clear.'],
    },
  ],
  gateNote: [
    'Any single trigger short-circuits the score to an automatic 1 to 2: manufacturing or CME, an out-of-network-dependent model, single-customer concentration over 30 percent, EBITDA outside $20 to 75M, no credible value-add path, or a non-credible banker. Out of lane is ',
    { b: 'not' },
    ' a hard-pass. It raises the bar and becomes the judgment below.',
  ],
  moatNote: ['Matched to Vantage on sub-sector, size, and entry multiple. The surgical comp set shows the price-discipline pattern.'],
  comps: [
    { name: 'Cascade Surgical Partners', year: '2019', mult: '9.4x', tag: 'up', tagLabel: 'Outperformed', moic: '2.5x', status: 'Exited 2024' },
    { name: 'Peak Field ASC', year: '2018', mult: '9.8x', tag: 'held', tagLabel: 'In line', moic: '2.1x', status: 'Exited 2023' },
    { name: 'Northgate Surgical', year: '2021', mult: '10.2x', tag: 'held', tagLabel: 'Tracking', moic: 'n/a', status: 'Active' },
    { name: 'Lakeshore Surgical', year: '2020', mult: '11.6x', tag: 'dn', tagLabel: 'Underperformed', moic: '1.5x', status: 'Exited 2024' },
  ],
  subject: { name: 'Vantage Surgical Holdings', year: '2026', mult: '11.0x' },
  moatEvidence: {
    id: 'e-moat',
    type: 't-chrono',
    srctag: 'Chronograph',
    doc: 'REP portfolio returns · ambulatory surgical',
    snip: [
      'Sub-10x surgical entries returned a ',
      { hl: 'median 2.3x' },
      '. The entry above 11x, Lakeshore, returned ',
      { hl: '1.5x' },
      '. Vantage at 11.0x sits at the top of the range, where the firm’s returns thin out.',
    ],
    prov: 'Price discipline is the lesson. Above the line, the surgical comps disappoint.',
  },
  judgment: [
    'The lane call. Ambulatory surgical is out of lane and facility-intensive. Close enough to the core services lanes to underwrite at a full price?',
    'The management gap. The tenure shortfall is bridgeable, but only with a leadership hire. Are you underwriting that upgrade, and is the price set accordingly?',
    'Physician dependence. How durable is case volume if a key syndicated group walks?',
  ],
  banker: [
    { q: 'Physician syndication terms and retention: ownership, non-competes, and case-volume concentration by physician group.', imp: 'hi', label: 'High impact' },
    { q: 'Case mix: elective and schedulable versus medically necessary, and how volume behaved in the last downturn.', imp: 'hi', label: 'High impact' },
    { q: 'Management tenure and succession: depth below the founder, and the cost and timeline of a leadership upgrade.', imp: 'hi', label: 'High impact' },
    { q: 'Payer mix and reimbursement: commercial versus government, and site-of-service rate trends for ASCs.', imp: 'md', label: 'Medium' },
    { q: 'De novo unit economics: cost to open a center, ramp curve, and realized returns on recent builds.', imp: 'md', label: 'Medium' },
  ],
  decisionRec: { bold: 'Selective', tail: ' (5 of 10, out of lane, full price)' },
  footText:
    'Illustrative prototype. Vantage Surgical Holdings and all figures are fictional. The 1 to 10 scoring, two-track quality grade and held price ceiling, hard-pass screen, and out-of-lane judgment follow the REP Healthcare Investment Framework and the rep-deal-eval rubric. The comparable-deal record stands in for Ridgemont’s realized returns.',
  chat: {
    intro:
      'I am working from everything behind this score: the CIM, the quality-of-earnings read, the comparable Ridgemont deals, and the REP healthcare framework. Ask why the call landed where it did, or push on it.',
    placeholder: 'Ask anything about Vantage',
    items: [
      {
        q: 'Why only a 5?',
        a: 'Two drags on a strong asset. Ambulatory surgical is out of lane and facility-intensive, so the bar rises. Management tenure is thin against the benchmark, a gap the firm has only closed before with a CEO hire. The 11.0x entry is full on top of both. None of that trips a gate, so it is selective, not a pass. The premium asks you to underwrite a lane call and a leadership bet at once.<div class="src-tags"><span class="qtag cim">CIM</span><span class="qtag ic">IC</span></div>',
      },
      {
        q: 'Is management the problem?',
        a: 'It is the swing factor. The team is capable. The tenure gap mirrors Peak Field, where the value plan only worked after a seasoned CEO came in post-close. Management is not a disqualifier. It is an underwriting assumption: you are paying a full multiple and assuming you can upgrade leadership. Price the deal as if that hire is required, because it likely is.<div class="src-tags"><span class="qtag ic">IC</span></div>',
      },
      {
        q: 'Which of our deals does this look like?',
        a: 'Surgical names from the record. Cascade returned 2.5x at 9.4x, Peak Field 2.1x at 9.8x, both entered under 10x. Lakeshore, entered above 11x, returned 1.5x. Vantage at 11.0x sits at the top of that range, where the firm’s surgical returns historically thin out. That is the price-discipline point.<div class="src-tags"><span class="qtag chron">CHRON</span></div>',
      },
      {
        q: 'What are you least sure about?',
        a: 'Physician durability and the elective share of volume. Case volume rides physician loyalty, and a portion is schedulable. Neither is fully evidenced in what was loaded. If a key syndicated group is restless or the elective mix is high, both the downside protection and the growth case soften. That, plus the leadership question, is why the engine hands it to you.<div class="src-tags"><span class="qtag cim">CIM</span><span class="qtag qoe">QoE</span></div>',
      },
    ],
  },
}
