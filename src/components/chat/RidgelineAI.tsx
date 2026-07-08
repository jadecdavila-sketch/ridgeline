import { useRef, useState } from 'react'
import { Spark } from '../icons'

export interface ChatItem {
  q: string
  a: string // answer HTML (may include <div class="src-tags">…</div>)
}

interface Msg {
  cls: 'ai' | 'me'
  html: string
}

const FALLBACK =
  'In the live product I answer any question grounded in this deal’s evidence, with the same citations you see on the card. For this prototype, try one of the suggested questions above.'

/** Scoped, self-contained chat drawer grounded in one deal's score. */
export function RidgelineAI({
  intro,
  items,
  placeholder,
}: {
  intro: string
  items: ChatItem[]
  placeholder: string
}) {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([{ cls: 'ai', html: intro }])
  const [input, setInput] = useState('')
  const logRef = useRef<HTMLDivElement>(null)

  function push(m: Msg, delay = 0) {
    if (delay) {
      window.setTimeout(() => {
        setMsgs((prev) => [...prev, m])
        scroll()
      }, delay)
    } else {
      setMsgs((prev) => [...prev, m])
      scroll()
    }
  }
  function scroll() {
    requestAnimationFrame(() => {
      if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight
    })
  }
  function askItem(i: number) {
    push({ cls: 'me', html: items[i].q })
    push({ cls: 'ai', html: items[i].a }, 340)
  }
  function send() {
    const v = input.trim()
    if (!v) return
    push({ cls: 'me', html: v })
    setInput('')
    push({ cls: 'ai', html: FALLBACK }, 340)
  }

  return (
    <>
      {!open && (
        <button className="rai-launch" onClick={() => setOpen(true)}>
          <Spark /> Ridgemont AI <span className="pulse"></span>
        </button>
      )}
      <aside
        className={open ? 'rai-drawer open' : 'rai-drawer'}
        aria-label="Ridgemont AI chat"
        aria-hidden={!open}
      >
        <div className="rai-hd">
          <span className="ic">
            <Spark />
          </span>
          <div className="t">
            <div className="n">Ridgemont AI</div>
            <div className="s">Grounded in this deal's scoring</div>
          </div>
          <button className="rai-x" title="Close" onClick={() => setOpen(false)}>
            <svg viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="rai-log" ref={logRef}>
          {msgs.map((m, i) => (
            <div key={i} className={`msg ${m.cls}`} dangerouslySetInnerHTML={{ __html: m.html }} />
          ))}
        </div>

        <div className="rai-sugg">
          <div className="sgl">Where partners usually start</div>
          {items.map((it, i) => (
            <button key={i} className="rai-q" onClick={() => askItem(i)}>
              {it.q}
            </button>
          ))}
        </div>

        <div className="rai-foot">
          <div className="rai-input">
            <input
              placeholder={placeholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') send()
              }}
            />
            <button className="send" title="Send" onClick={send}>
              <svg viewBox="0 0 24 24">
                <path d="M3 11l18-8-8 18-2-7-8-3z" />
              </svg>
            </button>
          </div>
          <div className="rai-note">
            Prototype. Responses are illustrative and grounded in this deal's loaded evidence.
          </div>
        </div>
      </aside>
    </>
  )
}
