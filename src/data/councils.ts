import type { CouncilData, CouncilVoiceId } from './councilTypes'
import { cardinal } from './councils/cardinal'
import { cypress } from './councils/cypress'

// Compressed (640px WebP) for the bundle; full-res originals live in docs/Council/.
import partnerImg from '../assets/council/partner.webp'
import examinerImg from '../assets/council/examiner.webp'
import chairImg from '../assets/council/chair.webp'

/** Portrait plate per voice — the painterly council illustrations. */
export const portraits: Record<CouncilVoiceId, string> = {
  partner: partnerImg,
  examiner: examinerImg,
  chair: chairImg,
}

/**
 * Deals whose scorecard has a Council behind it. Where an entry exists, the
 * scorecard surfaces "Converse with the Council" instead of the older
 * Ridgeline AI chat. Deals not yet given a council fall back to that chat.
 */
export const councils: Record<string, CouncilData> = {
  cardinal,
  cypress,
}
