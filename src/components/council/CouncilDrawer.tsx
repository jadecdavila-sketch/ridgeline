import { useEffect, useState } from 'react'
import type { CouncilData } from '../../data/councilTypes'
import { CouncilTable } from './CouncilTable'
import { CouncilRead } from './CouncilRead'
import { CouncilConverse } from './CouncilConverse'
import { Plate } from './parts'

type Mode = 'table' | 'partner' | 'examiner' | 'converse'

const LABEL: Record<Mode, string> = {
  table: 'The Table',
  partner: 'The Partner',
  examiner: 'The Examiner',
  converse: 'Converse',
}

const MODES: Mode[] = ['table', 'partner', 'examiner', 'converse']

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
        className={open ? 'cd-drawer open' : 'cd-drawer'}
        data-verdict={data.chair.verdict}
        aria-label={`The committee · ${dealName}`}
        aria-hidden={!open}
      >
        <button className="cd-grip" onClick={() => setOpen(false)} aria-label="Close the council">
          <span className="cd-grip-line" />
        </button>

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
