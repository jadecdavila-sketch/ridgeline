import { useState, type ReactNode } from 'react'
import type { Verdict } from '../../data/types'

const LABEL: Record<Verdict, string> = { pursue: 'Pursue', selective: 'Selective', pass: 'Pass' }
const ORDER: Verdict[] = ['pursue', 'selective', 'pass']

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

/** "Your call, on the record" — segmented verdict + note, logs to the data layer (mock). */
export function DecisionRecord({
  engine,
  dealName,
  recLead,
}: {
  engine: Verdict
  dealName: string
  recLead?: ReactNode
}) {
  const [choice, setChoice] = useState<Verdict>(engine)
  const [note, setNote] = useState('')
  const [logged, setLogged] = useState(false)

  const engineLabel = LABEL[engine]
  const agree = choice === engine
  const safeNote = note.trim().replace(/</g, '&lt;')

  return (
    <div className="sec fade">
      <div className="sec-hd">
        <div>
          <span className="s-lc lc-b">Your call, on the record</span>
          <h2>Decision record</h2>
        </div>
      </div>
      <div className="dec">
        {!logged ? (
          <div>
            <p className="rec">
              {recLead ?? (
                <>
                  The engine recommends <b>{engineLabel}</b>.
                </>
              )}{' '}
              Record your call and the reasoning. The judgment stays with you; this captures it.
            </p>
            <div className="seg">
              {ORDER.map((v) => (
                <button
                  key={v}
                  className={choice === v ? 'on' : ''}
                  onClick={() => setChoice(v)}
                >
                  {LABEL[v]}
                  {v === engine && <span className="eng">Engine</span>}
                </button>
              ))}
            </div>
            <textarea
              placeholder="The reasoning behind the call. What would change it?"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <button className="logbtn" onClick={() => setLogged(true)}>
              Log decision
            </button>
          </div>
        ) : (
          <div className="logged" style={{ display: 'block' }}>
            <div className="lh">
              <Check /> Decision logged
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  `<b>${LABEL[choice]}</b>` +
                  (agree
                    ? ' (in line with the engine).'
                    : ` (overriding the engine’s ${engineLabel}).`) +
                  (safeNote ? ` &mdash; “${safeNote}”` : '') +
                  `<br><br>Captured against the ${dealName} score and fed back to the data layer. The next ${dealName}-like deal is scored with this outcome in the firm’s record.`,
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
