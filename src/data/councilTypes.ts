/**
 * The Council layer that sits beneath a deal's scorecard. The scorecard body
 * reads as the IC Chair's synthesized verdict; the Council drawer reveals the
 * reasoning underneath it — two councils in tension (The Partner builds the
 * bull case, The Examiner hunts what kills the deal) and an orchestrator (the
 * IC Chair) who resolves or surfaces their disagreement and owns the call.
 *
 * Prose fields are HTML strings (so a read can carry <em>, <b>, and inline
 * source tags like `<span class="qtag qoe">QoE</span>`), matching the chat
 * pattern already used in RidgelineAI. Authored statically per deal.
 */

export type CouncilVoiceId = 'partner' | 'examiner' | 'chair'

/** A small chip on a voice's identity card (proposed grade, ceiling, status). */
export interface ProposeChip {
  text: string
  kind: 'grade' | 'ceil' | 'prov'
}

/** One named sub-voice inside a council (e.g. The Strategist within The Partner). */
export interface VoicePillar {
  name: string
  lens: string
  html: string
}

/** A single council's full, structured read — the "focused read" view. */
export interface VoiceRead {
  /** "Conviction Council · the bull case" */
  lens: string
  proposes: ProposeChip[]
  /** "What I see" — neutral framing. */
  whatISee: string
  /** The hard-pass screen (Partner) / what the scrutiny ran (Examiner). */
  screen: { label: string; clear: boolean; html: string }
  pillars: VoicePillar[]
  tensions: string[]
  questions: string[]
  /** The weighted close — conviction read / scrutiny verdict. */
  closing: { label: string; html: string; move: string; caveat?: string }
}

/** One axis row on The Table: both councils, and whether they fought. */
export interface CouncilAxis {
  axis: string
  partner: string
  examiner: string
  contested: boolean
  /** The IC Chair's ruling — present on contested rows. */
  ruling?: string
}

/** One reply within a conversation round. */
export interface ConverseReply {
  voice: 'partner' | 'examiner'
  role: string // "· the steward", "· scrutiny"
  html: string
}

/** A round = one question and the table's answer (which may be a debate). */
export interface ConverseRound {
  q: string
  contested: boolean
  replies: ConverseReply[]
  ruling?: string // the Chair closes a contested round
}

/** Everything the Council drawer needs for one deal. */
export interface CouncilData {
  chair: {
    verdictLabel: string // "Pursue", "Pursue with discipline", "Pass"
    go: boolean // green pill
    score: string // "8"
    grade: string // "A−"
    entry: string // "8.8×"
    resolution: string // the one-paragraph synthesis (html)
  }
  partner: VoiceRead
  examiner: VoiceRead
  axes: CouncilAxis[]
  converse: {
    opening: string // the folded one-line standing read (html)
    rounds: ConverseRound[]
    suggests: string[]
  }
}
