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
      'In-lane behavioral health, quality asset. The payer mix leans Medicaid and the 12.1x entry is full.',
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
      'Strong fragmented roll-up at 9.2x, but dental sits outside the core lanes, so pursue with discipline.',
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
      'In-lane, but one payer sits above the 30 percent line and revenue rides reimbursement.',
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
    reason: 'Strong margins. Ambulatory surgical is out of lane and management tenure is thin.',
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
      'Non-deferrable demand and a clean platform playbook. Pediatrics needs an out-of-lane call.',
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
    reason: 'Organic growth unproven. The entry is full versus comparable Ridgemont deals.',
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
      'Attractive market. Imaging is out of lane and capex intensity needs pressure-testing.',
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
      '8.8x, below the held ceiling. In-lane specialty pharmacy, downside protected. Reimbursement is the one risk to clear.',
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
      'Dialysis carries Medicaid and reimbursement concentration, plus a regulatory overhang at entry.',
    signal: { kind: 'gate', text: 'Medicaid + reimbursement concentration · auto-pass' },
    when: '3 days ago',
  },
]

export const pipelineMeta: PipelineMeta = {
  briefingMeta: 'Synthesized across 14 deals · 9:02 AM',
  briefingHtml:
    '14 deals scored this week, 3 overnight. Open <a class="brief-deal" href="#/deal/cardinal">Cardinal Specialty Pharmacy</a> first. In-lane specialty pharmacy, an 8, protected downside, and an 8.8x entry below the held ceiling. The one risk to clear is reimbursement durability. Two names trip the hard-pass screen on day one: <a class="brief-deal" href="#/deal/halcyon">Halcyon</a> on single-payer concentration, <a class="brief-deal" href="#/deal/granite">Granite</a> on Medicaid and reimbursement risk. <a class="brief-deal" href="#/deal/cypress">Cypress</a> has a clock on it: a clean dental roll-up with two sponsors circling, out of lane, so a pursue with discipline. <a class="brief-deal" href="#/deal/meridian">Meridian</a> is a Selective worth a look if the entry comes below 11x.',
  focus: {
    dealId: 'cardinal',
    label: 'Cardinal Specialty Pharmacy',
    why: 'the clean in-lane fit; open it first',
  },
  stats: { scored: '14', avgFirstPass: '11', pursue: 2, selective: 4, pass: 3 },
  suggests: [
    {
      id: 'ask1',
      label: 'What fits our thesis under 10x?',
      q: 'What fits our healthcare thesis under 10x?',
      keys: ['cardinal', 'cypress', 'orchard'],
      answer:
        '<b>Three enter below 10x.</b> Cardinal at 8.8x is the clean in-lane pursue, 8 of 10. Cypress at 9.2x is a strong roll-up, out of lane, a pursue with discipline at 7. Orchard is a 6, selective pending a lane call.',
    },
    {
      id: 'ask2',
      label: 'What changed since yesterday?',
      q: 'What changed since yesterday?',
      keys: ['meridian', 'cypress', 'halcyon', 'vantage'],
      answer:
        '<b>Four moved in the last day.</b> Meridian, Cypress, Halcyon, and Vantage were scored. Cypress carries the urgency. Halcyon trips the single-payer gate.',
    },
    {
      id: 'ask3',
      label: 'Anything with sponsors circling?',
      q: 'Which deals have other sponsors circling?',
      keys: ['cypress'],
      answer:
        '<b>One, with a clock on it.</b> Cypress has two sponsors active in adjacent assets. Out of lane, so it scores a 7, a pursue with discipline.',
    },
    {
      id: 'ask4',
      label: 'Closest to our best exits?',
      q: 'Show me the closest matches to deals we have exited well.',
      keys: ['cardinal', 'vantage', 'sterling'],
      answer:
        '<b>Cardinal leads.</b> It echoes Summit Specialty Pharmacy, the firm’s 2.9x exit, at a sub-9x entry in the bracket that has worked. Vantage recalls Peak Field. Sterling is priced above your realized rehab comps.',
    },
  ],
}

export const dealById = (id: string | undefined) => deals.find((d) => d.id === id)
