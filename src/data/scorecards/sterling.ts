import type { ScorecardData } from '../scorecardTypes'

export const sterling: ScorecardData = {
  id: 'sterling',
  crumbName: 'Sterling Rehab Network',
  eyebrow: 'NDA Scorecard · Outpatient Rehab',
  name: 'Sterling Rehab Network',
  desc: 'Outpatient physical and occupational therapy network. 64 clinics, post-acute and direct-access referrals, growth-by-acquisition history. ~$15M adjusted EBITDA on ~$96M revenue.',
  verdict: 'pass',
  score: '4',
  grade: 'B−',
  entry: '10.5',
  dualReads: [
    {
      side: 'q',
      label: 'Two-track read',
      val: 'B− asset',
      note: 'In-lane outpatient rehab with a real network, but the organic-growth story is unproven and growth has leaned on acquisition.',
    },
    {
      side: 'p',
      label: 'Price discipline',
      val: 'Above realized comps',
      note: '10.5x is above all three of the firm’s realized rehab entries. Paying up for an unproven organic case is the discipline issue.',
    },
  ],
  reasonsLead: 'Pass.',
  reasonsBody:
    'In-lane outpatient rehab with a credible footprint, but two things sink it to a 4. The organic-growth story is unproven, much of the reported growth looks acquired rather than same-clinic, and the 10.5x entry is above every realized rehab comp in the firm’s record. No gate trips, so this is not an automatic pass; it is a discipline pass. Paying a full price for a growth case the data does not yet support is the error the framework is built to avoid.',
  spineLead: 'Scored against the REP healthcare framework',
  axes: [
    {
      name: 'Sector & model fit',
      ai: 'In lane?',
      read: [
        'Outpatient rehab sits inside the post-acute lane, and the model is sound: recurring, referral-driven therapy visits, not facility-heavy or out-of-network. The lane is not the problem.',
      ],
      chipCls: 'range',
      chipLabel: 'In lane',
      barPct: 78,
      barColor: 'green',
    },
    {
      name: 'Protected downside',
      ai: 'Non-negotiable',
      read: [
        'Therapy demand is recurring but a share is elective and referral-dependent; a soft economy or a referral-source change can move volume. Recurring enough to grade, not as protected as a non-deferrable model.',
      ],
      chipCls: 'mon',
      chipLabel: 'Mixed',
      barPct: 60,
      barColor: 'amber',
    },
    {
      name: 'Asset quality vs price',
      ai: 'The central discipline',
      read: [
        'Graded a B− asset on an unproven organic story, and the ',
        { cite: 'e-qp', tag: 'DATA', label: 'entry is above every realized rehab comp' },
        ' the firm holds. This is the crux: a full price for a growth case the data does not support.',
      ],
      evidence: [
        {
          id: 'e-qp',
          type: 't-chrono',
          srctag: 'Deal data',
          doc: 'REP entries · outpatient rehab',
          snip: [
            'Three realized rehab entries at ',
            { hl: '8.2x, 8.7x, and 9.0x' },
            '; proposed Sterling entry of ',
            { hl: '10.5x' },
            ' is above all of them. The premium is not supported by a differentiated asset.',
          ],
          prov: 'Above the realized band; the price assumes growth that is not yet evidenced.',
          warn: true,
        },
      ],
      chipCls: 'above',
      chipLabel: 'Above realized comps',
      barPct: 38,
      barColor: 'red',
    },
    {
      name: 'Value creation',
      ai: 'Controllable levers',
      read: [
        'The levers exist, de novo clinics and tuck-ins, but the track record reads as growth-by-acquisition rather than same-clinic improvement. Until the organic engine is shown to work, the value case is assumed, not underwritten.',
      ],
      chipCls: 'mon',
      chipLabel: 'Unproven',
      barPct: 50,
      barColor: 'amber',
    },
    {
      name: 'Management & data',
      ai: 'Credibility multiplier',
      read: [
        'Operator-led with an acquisitive history. The data ties, but the reported-to-organic bridge is the open question, and a strong team does not justify paying above the realized band for an unproven case.',
      ],
      chipCls: 'mon',
      chipLabel: 'Open question',
      barPct: 58,
      barColor: 'amber',
    },
  ],
  gatesHeading: 'No disqualifier triggered. This is a discipline pass, not a gate.',
  gates: [
    { state: 'pass-ok', title: 'EBITDA in band', body: ['~$15M, inside the $20 to 75M target range on revenue. Clear.'] },
    { state: 'pass-ok', title: 'Model & sector', body: ['In-lane outpatient rehab. Not facility-heavy, CME, or out-of-network. Clear.'] },
    { state: 'pass-ok', title: 'Concentration', body: ['Spread across 64 clinics and a broad referral base; no single payer near the 30 percent line. Clear.'] },
  ],
  gateNote: [
    'No single trigger fires: the asset is in band, in lane, and diversified. The 4 is not an auto-pass; it is the framework declining to ',
    { b: 'pay above the realized band for an unproven organic case' },
    '. Discipline, not a gate.',
  ],
  moatNote: ['Matched on sub-sector, size, and entry multiple. The rehab record is the whole argument here: the firm has done this, at lower prices, and Sterling is asking for more.'],
  comps: [
    { name: 'Cornerstone Therapy', year: '2018', mult: '8.2x', tag: 'up', tagLabel: 'Outperformed', moic: '2.6x', status: 'Exited 2023' },
    { name: 'Meridian Rehab Partners', year: '2020', mult: '8.7x', tag: 'held', tagLabel: 'In line', moic: '2.0x', status: 'Exited 2024' },
    { name: 'Active Edge PT', year: '2021', mult: '9.0x', tag: 'held', tagLabel: 'Tracking', moic: '—', status: 'Active' },
    { name: 'Summit Sports Medicine', year: '2019', mult: '10.8x', tag: 'dn', tagLabel: 'Underperformed', moic: '1.5x', status: 'Exited 2023' },
  ],
  subject: { name: 'Sterling Rehab Network', year: '2026', mult: '10.5x' },
  moatEvidence: {
    id: 'e-moat',
    type: 't-chrono',
    srctag: 'Chronograph',
    doc: 'REP portfolio returns · outpatient rehab',
    snip: [
      'The three realized rehab entries below 9.5x returned a ',
      { hl: 'median 2.3x' },
      '; the one entered above 10x returned ',
      { hl: '1.5x' },
      '. Sterling at 10.5x is priced like the underperformer, not the winners.',
    ],
    prov: 'The firm’s own rehab record is the reason to hold the line on price.',
  },
  judgment: [
    'Is the organic story real? If diligence separates same-clinic growth from acquired growth and the organic engine is genuine, the grade and the price both change.',
    'Is there a price that works? At the realized band, near 9x, this could be a different call. At 10.5x for an unproven case, it is a pass.',
  ],
  banker: [
    { q: 'Organic-versus-acquired bridge: same-clinic revenue growth separated from acquired-clinic revenue, by cohort year.', imp: 'hi', label: 'High impact' },
    { q: 'Referral-source concentration and durability: share from the top post-acute and physician referrers.', imp: 'hi', label: 'High impact' },
    { q: 'Same-clinic economics: price versus visit volume versus payer mix, and how volume held in the last downturn.', imp: 'hi', label: 'High impact' },
    { q: 'EBITDA adjustment bridge: acquisition and integration add-backs, owner compensation, de novo ramp costs.', imp: 'md', label: 'Medium' },
    { q: 'De novo unit economics versus the realized record, to test whether the organic engine can carry the price.', imp: 'md', label: 'Medium' },
  ],
  decisionRec: { bold: 'Pass', tail: ' (4 of 10, unproven growth at a full price)' },
  footText:
    'Illustrative prototype. Sterling Rehab Network and all figures are fictional. The 1 to 10 scoring, two-track quality grade and held price ceiling, hard-pass screen, and price-discipline framing follow the REP Healthcare Investment Framework and the rep-deal-eval rubric. The comparable-deal record stands in for Ridgemont’s realized returns.',
  chat: {
    intro:
      'I am working from everything behind this score: the CIM, the quality-of-earnings read, the comparable Ridgemont deals, and the REP healthcare framework. Ask why the call landed where it did, or push on it.',
    placeholder: 'Ask anything about Sterling',
    items: [
      {
        q: 'Why a pass if no gate trips?',
        a: 'Because price discipline is its own kind of no. Nothing here is disqualifying, it is in band, in lane, and diversified. But the entry is 10.5x, above all three of the firm’s realized rehab deals, and it is paying that for an organic-growth story the data does not yet support. The framework exists precisely to decline a full price on an unproven case, so it scores a 4 and passes.<div class="src-tags"><span class="qtag data">DATA</span><span class="qtag chron">CHRON</span></div>',
      },
      {
        q: 'Is the asset bad?',
        a: 'No, it is a fine in-lane rehab network. The problem is the gap between what is asked and what is shown. Growth has leaned on acquisition, and same-clinic improvement is not evidenced, so you would be underwriting an organic engine that has not proven out, at a price above the deals that did. The asset is acceptable; the price for this version of the asset is not.<div class="src-tags"><span class="qtag qoe">QoE</span><span class="qtag cim">CIM</span></div>',
      },
      {
        q: 'What would change it?',
        a: 'Two things. Diligence that cleanly separates same-clinic growth from acquired growth and shows the organic engine works would lift both the grade and the price you could justify. Or a re-trade toward the realized band, near 9x, which is where the firm’s rehab deals have actually worked. Either moves it; at 10.5x on the current evidence, it is a pass.<div class="src-tags"><span class="qtag chron">CHRON</span><span class="qtag qoe">QoE</span></div>',
      },
      {
        q: 'Which of our deals does this look like?',
        a: 'The rehab record is the whole argument. Cornerstone returned 2.6x at 8.2x and Meridian Rehab 2.0x at 8.7x, both entered well under 10x. Summit Sports Medicine, entered at 10.8x, returned 1.5x. Sterling at 10.5x is priced like the underperformer, not the winners, which is the pattern the engine is flagging.<div class="src-tags"><span class="qtag chron">CHRON</span></div>',
      },
    ],
  },
}
