import type { VoiceRead } from '../../data/councilTypes'
import { Plate } from './parts'

/**
 * One council's full, structured argument — the focused read beneath The Table.
 * The plate presides from a sticky rail; the read runs in the voice's own
 * output structure (what I see → screen → the four pillars → tensions →
 * questions → the weighted close).
 */
export function CouncilRead({
  voice,
  read,
}: {
  voice: 'partner' | 'examiner'
  read: VoiceRead
}) {
  const name = voice === 'partner' ? 'The Partner' : 'The Examiner'
  return (
    <div className={`cd-stage cd-voice-${voice}`}>
      <div className="cd-rail">
        <Plate voice={voice} alt={name} className="cd-rail-plate" />
        <div className="cd-ident">
          <span className="cd-ident-name">{name}</span>
          <span className="cd-ident-lens">{read.lens}</span>
          <div className="cd-proposes">
            {read.proposes.map((p, i) => (
              <span key={i} className={`cd-chip cd-chip--${p.kind}`}>
                {p.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="cd-read-col">
        <div className="cd-sec">
          <div className="cd-sec-label">What I see</div>
          <p dangerouslySetInnerHTML={{ __html: read.whatISee }} />
        </div>

        <div className="cd-sec">
          <div className={`cd-sec-label${read.screen.clear ? ' clear' : ''}`}>{read.screen.label}</div>
          <p dangerouslySetInnerHTML={{ __html: read.screen.html }} />
        </div>

        <div className="cd-sec">
          <div className="cd-sec-label">The four pillars</div>
          <div className="cd-pillars">
            {read.pillars.map((p) => (
              <div key={p.name} className="cd-pillar">
                <span className="cd-pname">{p.name}</span>
                <span className="cd-plens">{p.lens}</span>
                <p dangerouslySetInnerHTML={{ __html: p.html }} />
              </div>
            ))}
          </div>
        </div>

        <div className="cd-sec">
          <div className="cd-sec-label">Tensions I&rsquo;m holding</div>
          <ul className="cd-tensions">
            {read.tensions.map((t, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: t }} />
            ))}
          </ul>
        </div>

        <div className="cd-sec">
          <div className="cd-sec-label">Questions before I&rsquo;d approve</div>
          <ol className="cd-qs">
            {read.questions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ol>
        </div>

        <div className="cd-conviction">
          <div className="cd-sec-label">{read.closing.label}</div>
          <p dangerouslySetInnerHTML={{ __html: read.closing.html }} />
          <p className="cd-move">
            <b>The one thing that would most move it</b>
            <span dangerouslySetInnerHTML={{ __html: read.closing.move }} />
          </p>
          {read.closing.caveat && <p className="cd-caveat">{read.closing.caveat}</p>}
        </div>
      </div>
    </div>
  )
}
