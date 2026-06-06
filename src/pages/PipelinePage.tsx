import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deals, pipelineMeta, dealById } from '../data/deals'
import type { Deal, Verdict } from '../data/types'
import { Spark, SignalIcon } from '../components/icons'

const VLABEL: Record<Verdict, string> = { pursue: 'Pursue', selective: 'Selective', pass: 'Pass' }
const FILTERS: Array<{ f: Verdict | 'all'; label: string }> = [
  { f: 'all', label: 'All' },
  { f: 'pursue', label: 'Pursue' },
  { f: 'selective', label: 'Selective' },
  { f: 'pass', label: 'Pass' },
]

const TYPED_NOTE =
  'This prototype answers the four example questions above. In the live product, Ridgeline interprets any question against the framework and the firm’s deal history.'

export function PipelinePage() {
  const navigate = useNavigate()
  const { briefingHtml, briefingMeta, focus, stats, suggests } = pipelineMeta

  const [filter, setFilter] = useState<Verdict | 'all'>('all')
  const [answer, setAnswer] = useState<string | null>(null)
  const [promoted, setPromoted] = useState<string[]>([])
  const [ask, setAsk] = useState('')

  const askMode = promoted.length > 0

  const rows = useMemo(() => {
    if (!askMode) {
      return filter === 'all' ? deals : deals.filter((d) => d.verdict === filter)
    }
    const pset = new Set(promoted)
    const top = promoted.map((id) => dealById(id)).filter(Boolean) as Deal[]
    const rest = deals.filter((d) => !pset.has(d.id))
    return [...top, ...rest]
  }, [askMode, filter, promoted])

  const promotedSet = new Set(promoted)

  function pickFilter(f: Verdict | 'all') {
    setFilter(f)
    setAnswer(null)
    setPromoted([])
    setAsk('')
  }

  function pickSuggest(id: string) {
    const s = suggests.find((x) => x.id === id)
    if (!s) return
    setAsk(s.q)
    setPromoted(s.keys)
    setAnswer(s.answer)
  }

  function clear() {
    setAnswer(null)
    setAsk('')
    setPromoted([])
    setFilter('all')
  }

  function openDeal(d: Deal) {
    navigate(`/deal/${d.id}`)
  }

  return (
    <>
      <div className="topbar">
        <div className="crumb">
          Deal Assistant <span className="sep">/</span> <span className="cur">Pipeline</span>
        </div>
        <div className="ask">
          <span className="spark">
            <Spark />
          </span>
          <input
            placeholder="Ask the pipeline anything"
            value={ask}
            onChange={(e) => setAsk(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && ask.trim()) setAnswer(TYPED_NOTE)
            }}
          />
          <span className="kbd">Enter</span>
        </div>
      </div>

      <div className="content">
        <div className="phead">
          <span className="lc">NDA stage</span>
          <h1>Pipeline</h1>
          <p className="sub">
            New opportunities, scored against Ridgemont's framework the moment a CIM lands, so the
            first-pass read is waiting before you open one.
          </p>
          <div className="suggests">
            {suggests.map((s) => (
              <span key={s.id} className="sg" onClick={() => pickSuggest(s.id)}>
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* AI briefing */}
        <div className="brief">
          <div className="brief-hd">
            <span className="spark">
              <Spark />
            </span>
            <span className="lc">Today's read</span>
            <span className="meta">{briefingMeta}</span>
          </div>
          <p className="brief-body" dangerouslySetInnerHTML={{ __html: briefingHtml }} />
          <div className="brief-focus">
            <span className="lc">Start here</span>
            <span className="focus-pill" onClick={() => navigate(`/deal/${focus.dealId}`)}>
              {focus.label}
            </span>
            <span className="focus-why">{focus.why}</span>
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <div className="n">{stats.scored}</div>
            <div className="l">Scored, last 7 days</div>
          </div>
          <div className="stat">
            <div className="n">
              {stats.avgFirstPass}
              <small style={{ fontSize: '13px', color: 'var(--out)' }}> min</small>
            </div>
            <div className="l">Avg first-pass</div>
          </div>
          <div className="stat pursue">
            <div className="n">{stats.pursue}</div>
            <div className="l">Pursue</div>
          </div>
          <div className="stat selective">
            <div className="n">{stats.selective}</div>
            <div className="l">Selective</div>
          </div>
          <div className="stat pass">
            <div className="n">{stats.pass}</div>
            <div className="l">Pass</div>
          </div>
        </div>

        <div className="filters">
          {FILTERS.map(({ f, label }) => (
            <button
              key={f}
              className={!askMode && filter === f ? 'chip on' : 'chip'}
              onClick={() => pickFilter(f)}
            >
              {label}
            </button>
          ))}
          <span className="fspacer"></span>
          <button className="sortbtn">
            <svg viewBox="0 0 24 24">
              <path d="M3 6h12M3 12h9M3 18h6M17 8V4m0 0l-3 3m3-3l3 3" />
            </svg>
            Most recent
          </button>
        </div>

        {answer && (
          <div className="answer" style={{ display: 'flex' }}>
            <span className="spark">
              <Spark />
            </span>
            <div className="answer-text" dangerouslySetInnerHTML={{ __html: answer }} />
            <button className="answer-clear" onClick={clear}>
              Clear
            </button>
          </div>
        )}

        <div className="qhead">
          <div>Opportunity</div>
          <div>Verdict</div>
          <div className="h-score">Score</div>
          <div className="h-reason">What drives the call</div>
          <div className="r h-when">Scored</div>
        </div>

        <div id="queue">
          {rows.map((d) => {
            const cls = ['row']
            if (d.fresh) cls.push('fresh')
            if (askMode && promotedSet.has(d.id)) cls.push('promoted')
            return (
              <div key={d.id} className={cls.join(' ')} onClick={() => openDeal(d)}>
                <div className="co">
                  <div className="mono">{d.mono}</div>
                  <div>
                    <div className="nm">
                      {d.name} {d.fresh && <span className="fresh-tag">Just scored</span>}
                    </div>
                    <div className="meta">{d.meta}</div>
                  </div>
                </div>
                <div>
                  <span className={`vpill ${d.verdict}`}>{VLABEL[d.verdict]}</span>
                </div>
                <div className="score">
                  {d.score}
                  <small> /10</small>
                </div>
                <div>
                  <div className="reason">{d.reason}</div>
                  <span className={`signal s-${d.signal.kind}`}>
                    <SignalIcon kind={d.signal.kind} />
                    {d.signal.text}
                  </span>
                </div>
                <div className="when">{d.when}</div>
              </div>
            )
          })}
        </div>

        <div className="foot">
          <span className="lc">Ridgeline · Deal Assistant · Pipeline</span>
          Illustrative prototype on representative data. All companies, figures, and the AI read
          shown here are fictional. Only Pipeline and Deal Scoring are built; the other rail items
          indicate where the product grows.
        </div>
      </div>
    </>
  )
}
