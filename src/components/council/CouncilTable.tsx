import type { CouncilData, CouncilVoiceId } from '../../data/councilTypes'
import { Plate } from './parts'

/**
 * "The Table" — the committee's standing read at a glance. The IC Chair's
 * verdict presides; the two councils sit at the heads of their columns; the
 * five axes run between them around a fault-line seam that lights only where
 * the councils fought. Consensus recedes; conflict glows and earns a ruling.
 */
export function CouncilTable({
  data,
  onVoice,
}: {
  data: CouncilData
  onVoice: (v: Extract<CouncilVoiceId, 'partner' | 'examiner'>) => void
}) {
  const c = data.chair
  return (
    <div className="cd-inner">
      {/* Chair band — the verdict, presiding */}
      <div className="cd-chairband">
        <Plate voice="chair" alt="The IC Chair" className="cd-chair-plate" />
        <div className="cd-cv">
          <span className="cd-cv-name">The IC Chair · presiding</span>
          <div className="cd-cv-line">
            <span className={`cd-cv-pill${c.go ? ' go' : ''}`}>{c.verdictLabel}</span>
            <span className="cd-cv-stat">
              <b>{c.score}</b>/10 fit
            </span>
            <span className="cd-cv-stat">
              <b>{c.grade}</b> grade
            </span>
            <span className="cd-cv-stat">
              <b>{c.entry}</b> entry
            </span>
          </div>
          <p className="cd-cv-res" dangerouslySetInnerHTML={{ __html: c.resolution }} />
        </div>
      </div>

      {/* Council heads — the two councils at the heads of their columns */}
      <div className="cd-heads">
        <button className="cd-head partner" onClick={() => onVoice('partner')}>
          <span className="cd-head-id">
            <span className="cd-head-name">The Partner</span>
            <span className="cd-head-lens">conviction · the bull case</span>
          </span>
          <Plate voice="partner" alt="The Partner council" />
        </button>
        <button className="cd-head examiner" onClick={() => onVoice('examiner')}>
          <Plate voice="examiner" alt="The Examiner council" />
          <span className="cd-head-id">
            <span className="cd-head-name">The Examiner</span>
            <span className="cd-head-lens">scrutiny · what kills it</span>
          </span>
        </button>
      </div>

      {/* The table — five axes around the seam */}
      <div className="cd-table">
        {data.axes.map((a) => (
          <div key={a.axis} className={`cd-row ${a.contested ? 'fight' : 'calm'}`}>
            <div className="cd-axis">
              <span className="cd-axis-label">{a.axis}</span>
              <span className={`cd-axis-tag ${a.contested ? 'contested' : 'agreed'}`}>
                {a.contested ? 'contested' : 'agreed'}
              </span>
            </div>
            <div className="cd-bank partner">
              <span className="cd-speaker">The Partner</span>
              <p className="cd-read" dangerouslySetInnerHTML={{ __html: a.partner }} />
            </div>
            <div className="cd-seam">{a.contested && <span className="cd-glow" />}</div>
            <div className="cd-bank examiner">
              <span className="cd-speaker">The Examiner</span>
              <p className="cd-read" dangerouslySetInnerHTML={{ __html: a.examiner }} />
            </div>
            {a.contested && a.ruling && (
              <div className="cd-ruling">
                <span className="cd-ruling-who">IC Chair rules</span>
                <span className="cd-ruling-text" dangerouslySetInnerHTML={{ __html: a.ruling }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
