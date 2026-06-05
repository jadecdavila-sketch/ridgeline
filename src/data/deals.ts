import type { Deal, PipelineMeta } from './types'

/** The pipeline queue, in display order. Two deals have full scorecards today. */
export const deals: Deal[] = [
  {
    id: 'meridian',
    mono: 'M',
    name: 'Meridian Behavioral Health',
    meta: 'Behavioral health · $146M revenue',
    verdict: 'selective',
    score: 6,
    reason:
      'In-lane behavioral health and a quality asset, but the payer mix leans Medicaid and the 12.1x entry is full.',
    signal: { kind: 'mem', text: 'Medicaid-weighted payer mix · rate risk, like Clarvida' },
    when: '8 min ago',
    fresh: true,
  },
  {
    id: 'cypress',
    mono: 'C',
    name: 'Cypress Dental Partners',
    meta: 'Dental services · $88M revenue',
    verdict: 'pursue',
    score: 7,
    reason:
      'Strong, fragmented roll-up at 9.2x, but dental sits outside the core lanes. Pursue with discipline.',
    signal: { kind: 'urg', text: 'Out of lane, clean roll-up · 2 sponsors circling' },
    when: '2 hrs ago',
    hasScorecard: true,
  },
  {
    id: 'halcyon',
    mono: 'H',
    name: 'Halcyon Home Health',
    meta: 'Home health · $61M revenue',
    verdict: 'pass',
    score: 4,
    reason:
      'In-lane, but a single payer sits above the 30 percent line and revenue rides reimbursement.',
    signal: { kind: 'gate', text: 'Single payer over the 30% gate · auto-pass' },
    when: '4 hrs ago',
  },
  {
    id: 'vantage',
    mono: 'V',
    name: 'Vantage Surgical Holdings',
    meta: 'Ambulatory surgical · $210M revenue',
    verdict: 'selective',
    score: 5,
    reason: 'Strong margins, but ambulatory surgical is out of lane and management tenure is thin.',
    signal: { kind: 'mem', text: 'Out of lane · tenure gap like Peak Field' },
    when: '6 hrs ago',
  },
  {
    id: 'orchard',
    mono: 'O',
    name: 'Orchard Pediatric Group',
    meta: 'Pediatrics · $54M revenue',
    verdict: 'selective',
    score: 6,
    reason:
      'Non-deferrable demand and a clean platform playbook, but pediatrics needs an out-of-lane call.',
    signal: { kind: 'conf', text: 'Out of lane · is it close enough to underwrite?' },
    when: 'Yesterday',
  },
  {
    id: 'sterling',
    mono: 'S',
    name: 'Sterling Rehab Network',
    meta: 'Outpatient rehab · $96M revenue',
    verdict: 'pass',
    score: 4,
    reason: 'Organic growth unproven and the entry is full versus comparable Ridgemont deals.',
    signal: { kind: 'mem', text: 'Priced above your three realized rehab comps' },
    when: 'Yesterday',
  },
  {
    id: 'beacon',
    mono: 'B',
    name: 'Beacon Imaging Alliance',
    meta: 'Diagnostic imaging · $132M revenue',
    verdict: 'selective',
    score: 5,
    reason:
      'Attractive market, but imaging is out of lane and capex intensity needs pressure-testing.',
    signal: { kind: 'conf', text: 'Out of lane · partial data, detail thin' },
    when: '2 days ago',
  },
  {
    id: 'cardinal',
    mono: 'C',
    name: 'Cardinal Specialty Pharmacy',
    meta: 'Specialty pharma services · $175M revenue',
    verdict: 'pursue',
    score: 8,
    reason:
      'In-lane specialty pharmacy, protected downside, 8.8x below the held ceiling. Reimbursement is the one risk to clear.',
    signal: { kind: 'fit', text: 'Strongest in-lane fit · downside protected' },
    when: '2 days ago',
    hasScorecard: true,
  },
  {
    id: 'granite',
    mono: 'G',
    name: 'Granite Dialysis Partners',
    meta: 'Dialysis services · $120M revenue',
    verdict: 'pass',
    score: 3,
    reason:
      'Dialysis carries Medicaid and reimbursement concentration plus a regulatory overhang at entry.',
    signal: { kind: 'gate', text: 'Medicaid + reimbursement concentration · auto-pass' },
    when: '3 days ago',
  },
]

export const pipelineMeta: PipelineMeta = {
  briefingMeta: 'Synthesized across 14 deals · 9:02 AM',
  briefingHtml:
    'Fourteen deals scored this week, three overnight. <b>Cardinal Specialty Pharmacy</b> is the one to open first: an in-lane specialty pharmacy that scores an 8, with the protected downside the framework underwrites for and an 8.8x entry below the held ceiling. The single risk to clear is reimbursement durability. Two names trip the hard-pass screen on day one: <b>Halcyon</b> on single-payer concentration and <b>Granite</b> on Medicaid and reimbursement risk. <b>Cypress</b> is the one with a clock on it, a clean dental roll-up with two sponsors circling, though it sits out of lane and is a pursue with discipline. Meridian is a Selective worth a look if the entry comes below 11x.',
  focus: {
    dealId: 'cardinal',
    label: 'Cardinal Specialty Pharmacy',
    why: 'the clean in-lane fit, and the one to open first',
  },
  stats: { scored: '14', avgFirstPass: '11', pursue: 2, selective: 4, pass: 3 },
  suggests: [
    {
      id: 'ask1',
      label: 'What fits our thesis under 10x?',
      q: 'What fits our healthcare thesis under 10x?',
      keys: ['cardinal', 'cypress', 'orchard'],
      answer:
        '<b>Three enter below 10x.</b> Cardinal at 8.8x is the clean in-lane pursue (8 of 10). Cypress at 9.2x is a strong roll-up but out of lane, so it is a pursue with discipline (7). Orchard is a 6, selective pending a lane call.',
    },
    {
      id: 'ask2',
      label: 'What changed since yesterday?',
      q: 'What changed since yesterday?',
      keys: ['meridian', 'cypress', 'halcyon', 'vantage'],
      answer:
        '<b>Four moved in the last day.</b> Meridian, Cypress, Halcyon, and Vantage were scored. Cypress is the one with urgency; Halcyon trips the single-payer gate.',
    },
    {
      id: 'ask3',
      label: 'Anything with sponsors circling?',
      q: 'Which deals have other sponsors circling?',
      keys: ['cypress'],
      answer:
        '<b>One, with a clock on it.</b> Cypress has two sponsors active in adjacent assets. It is out of lane, so it scores a 7, a pursue with discipline.',
    },
    {
      id: 'ask4',
      label: 'Closest to our best exits?',
      q: 'Show me the closest matches to deals we have exited well.',
      keys: ['cardinal', 'vantage', 'sterling'],
      answer:
        '<b>Cardinal leads.</b> It echoes Summit Specialty Pharmacy, the firm’s 2.9x exit, at a sub-9x entry in the bracket that has worked. Vantage recalls Peak Field; Sterling is priced above your realized rehab comps.',
    },
  ],
}

export const dealById = (id: string | undefined) => deals.find((d) => d.id === id)
