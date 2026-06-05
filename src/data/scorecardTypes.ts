import type { Verdict } from './types'
import type { ChatItem } from '../components/chat/RidgelineAI'

/** A run of prose that may contain inline citations or bold text. */
export type ReadSeg = string | { cite: string; tag: string; label: string } | { b: string }

/** A run inside an evidence snippet; objects render as highlighted spans. */
export type SnipSeg = string | { hl: string }

export interface EvidenceData {
  id: string
  type: 't-cim' | 't-comp' | 't-chrono' | 't-qoe' | 't-ic'
  srctag: string
  doc: string
  snip: SnipSeg[]
  prov: string
  warn?: boolean // warning-triangle provenance icon instead of the check
}

export interface AxisData {
  name: string
  ai: string
  read: ReadSeg[]
  evidence?: EvidenceData[]
  chipCls: string // strong | range | mon | above
  chipLabel: string
  barPct: number
  barColor?: 'amber' | 'green' | 'red'
}

export interface GateData {
  state: 'pass-ok' | 'watch'
  title: string
  body: ReadSeg[]
  evidence?: EvidenceData[]
}

export interface CompRow {
  name: string
  year: string
  mult: string
  tag: 'up' | 'dn' | 'held'
  tagLabel: string
  moic: string
  status: string
}

export interface BankerQ {
  q: string
  imp: 'hi' | 'md'
  label: string
}

/** Everything one deal's scorecard needs, as data. Rendered by <Scorecard>. */
export interface ScorecardData {
  id: string
  crumbName: string
  eyebrow: string
  name: string
  desc: string

  // verdict band
  verdict: Verdict
  go?: boolean // green "Pursue" pill
  score: string
  grade: string
  entry: string
  dualReads: { side: 'q' | 'p'; label: string; val: string; note: string }[]
  reasonsLead: string
  reasonsBody: string

  // spine
  spineLead: string
  axes: AxisData[]

  // gates
  gatesHeading: string
  gates: GateData[]
  gateNote: ReadSeg[]

  // moat / comparables
  moatNote: ReadSeg[]
  comps: CompRow[]
  subject: { name: string; year: string; mult: string }
  moatEvidence: EvidenceData

  // judgment + banker
  judgment: string[]
  banker: BankerQ[]

  // decision record + footer
  decisionRec: { bold: string; tail: string }
  footText: string

  chat: { intro: string; placeholder: string; items: ChatItem[] }
}
