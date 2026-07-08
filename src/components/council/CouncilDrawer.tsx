import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as RKeyboardEvent,
  type PointerEvent as RPointerEvent,
} from 'react'
import type { CouncilData } from '../../data/councilTypes'
import { CouncilTable } from './CouncilTable'
import { CouncilRead } from './CouncilRead'
import { CouncilConverse } from './CouncilConverse'
import { CouncilMeet } from './CouncilMeet'
import { Plate } from './parts'

type Mode = 'meet' | 'table' | 'partner' | 'examiner' | 'converse'

const LABEL: Record<Mode, string> = {
  meet: 'Meet the Council',
  table: 'The Table',
  partner: 'The Partner',
  examiner: 'The Examiner',
  converse: 'Converse',
}

const MODES: Mode[] = ['meet', 'table', 'partner', 'examiner', 'converse']

/**
 * The Council drawer — the committee room behind a deal's scorecard. Replaces
 * the Ridgeline AI chat. A warm-paper bottom drawer with three modes: The Table
 * (the Chair's standing read + the two councils' debate), a focused read for
 * either council, and Converse (the live conversation). Read-only review plus
 * the chat. Pure-CSS motion; closes on Escape.
 */
export function CouncilDrawer({ data, dealName }: { data: CouncilData; dealName: string }) {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<Mode>('table')

  // Drag-to-resize the drawer height. The grip is a horizontal separator you
  // drag up (taller) or down (shorter); height is applied imperatively during
  // the drag so the content tree doesn't reconcile on every pointer move, then
  // committed to state on release. Clamped to a readable band of the viewport.
  const MIN_VH = 40
  const MAX_VH = 96
  const asideRef = useRef<HTMLElement>(null)
  const dragRef = useRef<{ y: number; h: number } | null>(null)
  const [height, setHeight] = useState<number | null>(null)
  const [dragging, setDragging] = useState(false)

  const clampPx = (px: number) => {
    const min = (window.innerHeight * MIN_VH) / 100
    const max = (window.innerHeight * MAX_VH) / 100
    return Math.max(min, Math.min(max, px))
  }
  const currentPx = () => asideRef.current?.getBoundingClientRect().height ?? 0

  const onGripDown = (e: RPointerEvent<HTMLDivElement>) => {
    dragRef.current = { y: e.clientY, h: currentPx() }
    setDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onGripMove = (e: RPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current || !asideRef.current) return
    const next = clampPx(dragRef.current.h + (dragRef.current.y - e.clientY))
    asideRef.current.style.height = `${next}px`
  }
  const onGripUp = (e: RPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return
    dragRef.current = null
    setDragging(false)
    setHeight(currentPx())
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
  }
  const onGripKey = (e: RKeyboardEvent<HTMLDivElement>) => {
    const step = 48
    if (e.key === 'ArrowUp') setHeight(clampPx(currentPx() + step))
    else if (e.key === 'ArrowDown') setHeight(clampPx(currentPx() - step))
    else if (e.key === 'Home') setHeight(clampPx(window.innerHeight))
    else if (e.key === 'End') setHeight(clampPx(0))
    else return
    e.preventDefault()
  }
  // Default height mirrors the CSS `min(86vh, 840px)`, so aria-valuenow is
  // honest on tall viewports where the 840px cap wins over 86vh.
  const defaultPx = Math.min((window.innerHeight * 86) / 100, 840)
  const vhNow = Math.round(((height ?? defaultPx) / window.innerHeight) * 100)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      {!open && (
        <button className="cd-launch" onClick={() => setOpen(true)}>
          <span className="cd-launch-bench" aria-hidden="true">
            <Plate voice="partner" />
            <Plate voice="chair" />
            <Plate voice="examiner" />
          </span>
          Converse with the Council
        </button>
      )}

      <aside
        ref={asideRef}
        className={open ? 'cd-drawer open' : 'cd-drawer'}
        data-verdict={data.chair.verdict}
        data-dragging={dragging || undefined}
        style={height ? { height: `${height}px` } : undefined}
        aria-label={`The committee · ${dealName}`}
        aria-hidden={!open}
      >
        <div
          className="cd-grip"
          role="separator"
          aria-orientation="horizontal"
          aria-label="Drag to resize the council drawer"
          aria-valuemin={MIN_VH}
          aria-valuemax={MAX_VH}
          aria-valuenow={vhNow}
          tabIndex={0}
          onPointerDown={onGripDown}
          onPointerMove={onGripMove}
          onPointerUp={onGripUp}
          onPointerCancel={onGripUp}
          onKeyDown={onGripKey}
        >
          <span className="cd-grip-line" />
        </div>

        <div className="cd-bar">
          <div className="cd-bar-id">
            <span className="cd-who">The Committee</span>
            <span className="cd-deal">{dealName}</span>
          </div>
          <nav className="cd-switch" aria-label="Council view">
            {MODES.map((m) => (
              <button
                key={m}
                className={mode === m ? 'on' : ''}
                aria-current={mode === m || undefined}
                onClick={() => setMode(m)}
              >
                {LABEL[m]}
              </button>
            ))}
          </nav>
          <button className="cd-x" onClick={() => setOpen(false)} aria-label="Close">
            <svg viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="cd-body">
          {mode === 'meet' && <CouncilMeet />}
          {mode === 'table' && <CouncilTable data={data} onVoice={setMode} />}
          {mode === 'partner' && <CouncilRead voice="partner" read={data.partner} />}
          {mode === 'examiner' && <CouncilRead voice="examiner" read={data.examiner} />}
          {mode === 'converse' && <CouncilConverse data={data} />}
        </div>

        <div className="cd-foot">
          <div className="cd-bench">
            <button
              className={`cd-seat partner${mode === 'partner' ? ' on' : ''}`}
              onClick={() => setMode('partner')}
            >
              <Plate voice="partner" />
              <span className="cd-seat-tag">Partner</span>
            </button>
            <button
              className={`cd-seat chair${mode === 'table' ? ' on' : ''}`}
              onClick={() => setMode('table')}
            >
              <Plate voice="chair" />
              <span className="cd-seat-tag">Chair</span>
            </button>
            <button
              className={`cd-seat examiner${mode === 'examiner' ? ' on' : ''}`}
              onClick={() => setMode('examiner')}
            >
              <Plate voice="examiner" />
              <span className="cd-seat-tag">Examiner</span>
            </button>
          </div>
          <button
            className="cd-verb"
            onClick={() => setMode('converse')}
            aria-current={mode === 'converse' || undefined}
          >
            {mode === 'converse' ? 'In session' : 'Converse with the Council'}
          </button>
        </div>
      </aside>
    </>
  )
}
