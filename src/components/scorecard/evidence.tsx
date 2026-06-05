import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

/** Which citation's evidence card is currently expanded (accordion: one at a time). */
const EvCtx = createContext<{
  open: string | null
  toggle: (id: string) => void
}>({ open: null, toggle: () => {} })

export function EvidenceProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<string | null>(null)
  // Click anywhere else closes the open evidence (Cite stops propagation).
  useEffect(() => {
    const close = () => setOpen(null)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])
  const toggle = (id: string) => setOpen((cur) => (cur === id ? null : id))
  return <EvCtx.Provider value={{ open, toggle }}>{children}</EvCtx.Provider>
}

/** Inline citation button: dotted underline + a source tag. */
export function Cite({ id, tag, children }: { id: string; tag: string; children: ReactNode }) {
  const { open, toggle } = useContext(EvCtx)
  return (
    <button
      className={open === id ? 'cite active' : 'cite'}
      onClick={(e) => {
        e.stopPropagation()
        toggle(id)
      }}
    >
      {children}
      <span className="tg">{tag}</span>
    </button>
  )
}

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

const Warn = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
    <path d="M12 9v4M12 17h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
  </svg>
)

/** The evidence card that unfolds beneath an axis when its citation is clicked. */
export function Evidence({
  id,
  type,
  srctag,
  doc,
  snip,
  prov,
  warn,
}: {
  id: string
  type: string // t-cim | t-comp | t-chrono | t-qoe | t-ic
  srctag: string
  doc: string
  snip: ReactNode
  prov: ReactNode
  warn?: boolean
}) {
  const { open } = useContext(EvCtx)
  return (
    <div className={open === id ? 'ev open' : 'ev'}>
      <div className={`ev-card ${type}`}>
        <div className="src">
          <span className="srctag">{srctag}</span>
          <span className="doc">{doc}</span>
        </div>
        <div className="snip">{snip}</div>
        <div className="prov">
          {warn ? <Warn /> : <Check />} {prov}
        </div>
      </div>
    </div>
  )
}

/** Highlighted span inside an evidence snippet. */
export const HL = ({ children }: { children: ReactNode }) => <span className="hl">{children}</span>
