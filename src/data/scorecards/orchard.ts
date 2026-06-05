import type { ScorecardData } from '../scorecardTypes'

export const orchard: ScorecardData = {
  id: 'orchard',
  crumbName: 'Orchard Pediatric Group',
  eyebrow: 'NDA Scorecard · Pediatrics',
  name: 'Orchard Pediatric Group',
  desc: 'Pediatric primary and specialty care group. 31 clinics, non-deferrable demand, clean capital structure, a credible de novo playbook. ~$10M adjusted EBITDA on ~$54M revenue.',
  verdict: 'selective',
  score: '6',
  grade: 'B+',
  entry: '9.5',
  dualReads: [
    {
      side: 'q',
      label: 'Two-track read',
      val: 'B+ asset',
      note: 'Non-deferrable demand, a clean balance sheet, and a proven de novo template. Genuinely protected downside; the only thing capping it is the lane.',
    },
    {
      side: 'p',
      label: 'Price discipline',
      val: 'At the line',
      note: '9.5x is fair for the grade. Price is not the issue here, the lane call is.',
    },
  ],
  reasonsLead: 'Selective.',
  reasonsBody:
    'A clean, well-run pediatric platform with the kind of non-deferrable demand the framework prizes and a credible de novo playbook, at a fair entry. The single thing holding it to a 6 is the lane: pediatrics is not a named lane, so the bar rises, and the question is whether it is close enough to the core services lanes to underwrite. Unlike a typical out-of-lane name, the downside here is genuinely protected, which is what keeps it a strong selective rather than a marginal one.',
  spineLead: 'Scored against the REP healthcare framework',
  axes: [
    {
      name: 'Sector & model fit',
      ai: 'In lane?',
      read: [
        'Pediatrics is ',
        { cite: 'e-lane', tag: 'CIM', label: 'not a named lane' },
        ', so the bar rises. But the model is the right shape, recurring primary-care visits with a specialty mix, and it sits closer to the core services lanes than most out-of-lane names.',
      ],
      evidence: [
        {
          id: 'e-lane',
          type: 't-cim',
          srctag: 'CIM',
          doc: 'Orchard CIM · Business overview · p.7',
          snip: [
            'Pediatric primary and specialty care, ',
            { hl: 'recurring visit-based revenue' },
            ' across 31 clinics; a services model, not facility-heavy or out-of-network. Adjacent to the core lanes.',
          ],
          prov: 'Out of lane raises the bar, but the model is close; that is the judgment.',
          warn: true,
        },
      ],
      chipCls: 'mon',
      chipLabel: 'Out of lane',
      barPct: 60,
      barColor: 'amber',
    },
    {
      name: 'Protected downside',
      ai: 'Non-negotiable',
      read: [
        'The strongest axis. Pediatric care is ',
        { cite: 'e-down', tag: 'CIM', label: 'about as non-deferrable as demand gets' },
        ', a clean capital structure, and recurring visit volume. This is the part that earns the B+ and keeps the score off the floor.',
      ],
      evidence: [
        {
          id: 'e-down',
          type: 't-cim',
          srctag: 'CIM',
          doc: 'Orchard CIM · Revenue quality · p.20',
          snip: [
            'Visit volume is recurring and ',
            { hl: 'non-deferrable' },
            '; no debt of note; payer mix carries a Medicaid share to size, but demand does not soften in a downturn.',
          ],
          prov: 'Real downside protection; the Medicaid share is the one item to test.',
        },
      ],
      chipCls: 'strong',
      chipLabel: 'Strong',
      barPct: 82,
    },
    {
      name: 'Asset quality vs price',
      ai: 'The central discipline',
      read: [
        'Graded a B+ asset, held back from A− only by the lane distance and a Medicaid-weighted payer mix to verify. The ceiling on B+ is roughly 10x; the 9.5x entry sits just under it. Priced to work.',
      ],
      chipCls: 'range',
      chipLabel: 'At the line',
      barPct: 76,
      barColor: 'green',
    },
    {
      name: 'Value creation',
      ai: 'Controllable levers',
      read: [
        'Credible levers: de novo clinics on a proven template, tuck-ins of independent pediatric practices, and a modest specialty-mix shift. The platform playbook is clean and the math works at realistic ramp.',
      ],
      chipCls: 'strong',
      chipLabel: 'Strong',
      barPct: 78,
    },
    {
      name: 'Management & data',
      ai: 'Credibility multiplier',
      read: [
        'Operator-led with a clean data room and a tidy balance sheet. Reported figures tie and the adjustment bridge is modest. Management reads as a credibility multiplier, not a discount.',
      ],
      chipCls: 'strong',
      chipLabel: 'Credible',
      barPct: 78,
    },
  ],
  gatesHeading: 'No disqualifier triggered. The only constraint is the lane call.',
  gates: [
    { state: 'pass-ok', title: 'EBITDA in band', body: ['~$10M, inside the $20 to 75M target range on revenue, on the smaller side. Clear.'] },
    { state: 'pass-ok', title: 'Model & sector', body: ['Recurring pediatric services. Not facility-heavy, CME, or out-of-network. Clear.'] },
    { state: 'pass-ok', title: 'Concentration', body: ['Spread across 31 clinics; no single payer near the 30 percent line, though Medicaid share is worth confirming. Clear.'] },
  ],
  gateNote: [
    'Any single trigger short-circuits the score to an automatic 1 to 2: facility-heavy or CME, an out-of-network-dependent model, single-customer concentration over 30 percent, EBITDA outside $20 to 75M, no credible value-add path, or a non-credible banker. Out of lane is ',
    { b: 'not' },
    ' a hard-pass; it raises the bar and becomes the judgment below.',
  ],
  moatNote: ['Matched on sub-sector, size, and entry multiple. The pediatric and physician-group set is thinner, because the sub-sector is adjacent to the core lanes.'],
  comps: [
    { name: 'Willow Pediatrics', year: '2019', mult: '9.1x', tag: 'up', tagLabel: 'Outperformed', moic: '2.6x', status: 'Exited 2024' },
    { name: 'Birchwood Children’s Health', year: '2021', mult: '9.6x', tag: 'held', tagLabel: 'In line', moic: '2.0x', status: 'Active' },
    { name: 'Sunrise Pediatric Partners', year: '2018', mult: '8.8x', tag: 'up', tagLabel: 'Outperformed', moic: '2.7x', status: 'Exited 2023' },
    { name: 'Granite Peak Physicians', year: '2020', mult: '11.0x', tag: 'dn', tagLabel: 'Underperformed', moic: '1.6x', status: 'Exited 2024' },
  ],
  subject: { name: 'Orchard Pediatric Group', year: '2026', mult: '9.5x' },
  moatEvidence: {
    id: 'e-moat',
    type: 't-chrono',
    srctag: 'Chronograph',
    doc: 'REP portfolio returns · pediatrics & physician groups',
    snip: [
      'Sub-10x physician-group entries returned a ',
      { hl: 'median 2.5x' },
      '; the entry above 10x returned ',
      { hl: '1.6x' },
      '. Orchard at 9.5x sits inside the bracket that has worked, closest to Willow and Sunrise.',
    ],
    prov: 'Priced inside the band that has performed; the lane is the open question, not the price.',
  },
  judgment: [
    'The lane call. Pediatrics is out of lane but unusually close to the core services lanes, with genuinely protected demand. Is it close enough to underwrite at a normal price?',
    'Size and scale. At ~$10M EBITDA it is on the smaller side; does the de novo and tuck-in path build it to a platform of real scale?',
    'Payer mix. Pediatrics carries Medicaid weight; how much, and what is the rate outlook?',
  ],
  banker: [
    { q: 'Payer mix and trajectory: Medicaid versus commercial share, and the rate outlook in the largest markets.', imp: 'hi', label: 'High impact' },
    { q: 'Same-clinic growth bridge: price versus volume versus specialty mix, validating the organic story.', imp: 'hi', label: 'High impact' },
    { q: 'De novo and tuck-in unit economics: cost, ramp, and realized returns on recent builds and acquisitions.', imp: 'hi', label: 'High impact' },
    { q: 'Clinician recruitment and retention; dependence on any single regional group.', imp: 'md', label: 'Medium' },
    { q: 'EBITDA adjustment bridge: owner compensation, de novo ramp costs, and one-time items.', imp: 'md', label: 'Medium' },
  ],
  decisionRec: { bold: 'Selective', tail: ' (6 of 10, out of lane, fairly priced)' },
  footText:
    'Illustrative prototype. Orchard Pediatric Group and all figures are fictional. The 1 to 10 scoring, two-track quality grade and held price ceiling, hard-pass screen, and out-of-lane judgment follow the REP Healthcare Investment Framework and the rep-deal-eval rubric. The comparable-deal record stands in for Ridgemont’s realized returns.',
  chat: {
    intro:
      'I am working from everything behind this score: the CIM, the quality-of-earnings read, the comparable Ridgemont deals, and the REP healthcare framework. Ask why the call landed where it did, or push on it.',
    placeholder: 'Ask anything about Orchard',
    items: [
      {
        q: 'Why selective?',
        a: 'One reason, really: the lane. Pediatrics is not a named lane, so the bar rises and the engine stops short of a clean pursue. Everything else is good, non-deferrable demand, a clean balance sheet, a proven de novo playbook, and a fair 9.5x entry. That is why it is a strong 6, not a marginal one: the only thing holding it back is a judgment call you have to make, not a flaw in the asset.<div class="src-tags"><span class="qtag cim">CIM</span><span class="qtag data">DATA</span></div>',
      },
      {
        q: 'How protected is the downside?',
        a: 'This is the best part of the deal. Pediatric care is about as non-deferrable as demand gets, a parent does not skip a sick child, and the balance sheet is clean. The one thing to size is the Medicaid share of the payer mix, where rates are administrative. But demand durability is real, which is exactly why an out-of-lane name still grades B+.<div class="src-tags"><span class="qtag cim">CIM</span></div>',
      },
      {
        q: 'Which of our deals does this look like?',
        a: 'Physician-group and pediatric names. Willow returned 2.6x at 9.1x and Sunrise 2.7x at 8.8x, both entered under 10x. The one entered above 10x returned 1.6x. Orchard at 9.5x sits inside the bracket that has worked, which is why price is not the worry here, the lane is.<div class="src-tags"><span class="qtag chron">CHRON</span></div>',
      },
      {
        q: 'What are you least sure about?',
        a: 'The Medicaid share and the scale path. Pediatrics carries Medicaid weight, and at ~$10M EBITDA this is a smaller platform that needs the de novo and tuck-in plan to build real scale. Neither is fully evidenced in what was loaded. If the Medicaid share is high and the build-out is slow, the case softens; if not, the lane call is genuinely the only thing in the way.<div class="src-tags"><span class="qtag qoe">QoE</span><span class="qtag cim">CIM</span></div>',
      },
    ],
  },
}
