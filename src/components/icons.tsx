import type { ReactNode } from 'react'
import type { SignalKind } from '../data/types'

/** The four-point spark used for AI affordances. Styled (fill/size) by CSS. */
export function Spark() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 2l1.9 5.6L20 9.5l-6.1 1.9L12 17l-1.9-5.6L4 9.5l6.1-1.9z" />
    </svg>
  )
}

const SIGNAL_PATHS: Record<SignalKind, ReactNode> = {
  mem: <path d="M3 3v6h6M3 9a9 9 0 1 1 1 4" />,
  urg: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  gate: <path d="M12 9v4M12 17h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />,
  fit: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  conf: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16v-4M12 8h.01" />
    </>
  ),
}

/** Signal glyph; stroke/size come from the .signal CSS. */
export function SignalIcon({ kind }: { kind: SignalKind }) {
  return <svg viewBox="0 0 24 24">{SIGNAL_PATHS[kind]}</svg>
}
