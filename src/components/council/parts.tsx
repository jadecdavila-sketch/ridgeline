import { portraits } from '../../data/councils'
import type { CouncilVoiceId } from '../../data/councilTypes'

/** A framed, gallery-matted council portrait plate. */
export function Plate({
  voice,
  alt = '',
  className,
}: {
  voice: CouncilVoiceId
  alt?: string
  className?: string
}) {
  return (
    <span className={`cd-plate cd-plate--${voice}${className ? ' ' + className : ''}`}>
      <img src={portraits[voice]} alt={alt} />
    </span>
  )
}
