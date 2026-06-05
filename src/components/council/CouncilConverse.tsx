import { useRef, useState } from 'react'
import type { ConverseRound, CouncilData } from '../../data/councilTypes'
import { Plate } from './parts'

const FALLBACK =
  'In the live product the council answers any question in character, from this deal&rsquo;s evidence, and cites where each claim comes from. For this prototype, the exchanges above show how the table responds — read them, or try a suggested question.'

/**
 * "Converse with the Council" — replaces the Ridgeline AI chat. Not a bubble
 * chatbot: it reads like the minutes of a hearing. You ask, and the table
 * answers in character and in tension; a contested round earns a Chair ruling.
 * The Table above is the council's opening statement; this continues from it.
 */
export function CouncilConverse({ data }: { data: CouncilData }) {
  const [rounds, setRounds] = useState<ConverseRound[]>(data.converse.rounds)
  const [input, setInput] = useState('')
  const logRef = useRef<HTMLDivElement>(null)

  function scroll() {
    requestAnimationFrame(() => {
      const el = logRef.current
      if (el) el.scrollTop = el.scrollHeight
    })
  }
  function ask(q: string) {
    const v = q.trim()
    if (!v) return
    setRounds((r) => [...r, { q: v, contested: false, replies: [], ruling: FALLBACK }])
    setInput('')
    scroll()
  }

  return (
    <div className="cd-converse">
      <div className="cd-thread" ref={logRef}>
        {/* opening statement — the standing read, folded */}
        <div className="cd-opening">
          <span className="cd-cv-pill">
            {data.chair.verdictLabel} · {data.chair.score}/10 · {data.chair.grade}
          </span>
          <span className="cd-opening-txt" dangerouslySetInnerHTML={{ __html: data.converse.opening }} />
        </div>

        {rounds.map((round, ri) => (
          <div key={ri} className={`cd-round${round.contested ? ' contested' : ''}`}>
            <div className="cd-rail-line" />
            <div className="cd-round-col">
              <div className="cd-ask">
                <span className="cd-ask-lbl">You ask</span>
                <p className="cd-ask-q">{round.q}</p>
              </div>

              {round.replies.map((rep, i) => (
                <div key={i} className={`cd-reply ${rep.voice}`}>
                  <Plate voice={rep.voice} alt={rep.voice === 'partner' ? 'The Partner' : 'The Examiner'} />
                  <div>
                    <span className="cd-reply-speaker">
                      {rep.voice === 'partner' ? 'The Partner' : 'The Examiner'}{' '}
                      <span className="cd-reply-role">{rep.role}</span>
                    </span>
                    <p className="cd-say" dangerouslySetInnerHTML={{ __html: rep.html }} />
                  </div>
                </div>
              ))}

              {round.ruling && (
                <div className="cd-ruling cd-ruling--chair">
                  <span className="cd-ruling-who">
                    {round.replies.length ? 'IC Chair rules' : 'The committee'}
                  </span>
                  <span className="cd-ruling-text" dangerouslySetInnerHTML={{ __html: round.ruling }} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="cd-composer">
        <div className="cd-suggest">
          <span className="cd-suggest-lead">Try</span>
          {data.converse.suggests.map((s) => (
            <button key={s} className="cd-suggest-chip" onClick={() => ask(s)}>
              {s}
            </button>
          ))}
        </div>
        <div className="cd-composer-row">
          <div className="cd-field">
            <input
              type="text"
              placeholder="Ask the committee about this deal…"
              aria-label="Ask the council"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') ask(input)
              }}
            />
          </div>
          <button className="cd-send" onClick={() => ask(input)}>
            Ask the table
          </button>
        </div>
        <p className="cd-composer-note">
          The council answers in character, from this deal&rsquo;s evidence — and cites where each claim comes from.
        </p>
      </div>
    </div>
  )
}
