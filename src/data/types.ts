export type Verdict = 'pursue' | 'selective' | 'pass'

/** Signal kinds map to the legacy CSS pills: s-mem, s-urg, s-gate, s-fit, s-conf */
export type SignalKind = 'mem' | 'urg' | 'gate' | 'fit' | 'conf'

export interface Signal {
  kind: SignalKind
  text: string
}

/** A row in the pipeline queue (also the summary half of a full deal). */
export interface Deal {
  id: string // url key, e.g. 'cardinal'
  mono: string // single-letter avatar
  name: string
  meta: string // "Specialty pharma services · $175M revenue"
  verdict: Verdict
  score: number // out of 10
  reason: string
  signal: Signal
  when: string // "2 days ago"
  fresh?: boolean
  hasScorecard?: boolean
}

/** One of the canned "ask the pipeline" prompts and its scripted answer. */
export interface Suggest {
  id: string
  label: string // chip text
  q: string // full question echoed into the input
  keys: string[] // deal ids to promote to the top
  answer: string // HTML answer string
}

export interface PipelineMeta {
  briefingHtml: string // the "Today's read" paragraph (allows <b>)
  briefingMeta: string // "Synthesized across 14 deals · 9:02 AM"
  focus: { dealId: string; label: string; why: string }
  stats: { scored: string; avgFirstPass: string; pursue: number; selective: number; pass: number }
  suggests: Suggest[]
}
