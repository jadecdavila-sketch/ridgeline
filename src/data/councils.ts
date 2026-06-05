import type { CouncilData, CouncilVoiceId } from './councilTypes'
import { beacon } from './councils/beacon'
import { cardinal } from './councils/cardinal'
import { cypress } from './councils/cypress'
import { granite } from './councils/granite'
import { halcyon } from './councils/halcyon'
import { meridian } from './councils/meridian'
import { orchard } from './councils/orchard'
import { sterling } from './councils/sterling'
import { vantage } from './councils/vantage'

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
 * Every deal's scorecard has a Council behind it — "Converse with the Council"
 * is the surface on all of them. (The older Ridgeline AI chat remains only as a
 * fallback for any future deal added without a council.)
 */
export const councils: Record<string, CouncilData> = {
  beacon,
  cardinal,
  cypress,
  granite,
  halcyon,
  meridian,
  orchard,
  sterling,
  vantage,
}
