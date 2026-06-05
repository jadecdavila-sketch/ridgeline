import { Fragment, type ReactNode } from 'react'
import { EvidenceProvider, Cite, Evidence, HL } from './evidence'
import { DecisionRecord } from './DecisionRecord'
import type { ScorecardData, ReadSeg, SnipSeg, EvidenceData } from '../../data/scorecardTypes'
import type { Verdict } from '../../data/types'

const VLABEL: Record<Verdict, string> = { pursue: 'Pursue', selective: 'Selective', pass: 'Pass' }

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

function read(segs: ReadSeg[]): ReactNode {
  return segs.map((s, i) => {
    if (typeof s === 'string') return <Fragment key={i}>{s}</Fragment>
    if ('b' in s) return <b key={i}>{s.b}</b>
    return (
      <Cite key={i} id={s.cite} tag={s.tag}>
        {s.label}
      </Cite>
    )
  })
}

function snip(segs: SnipSeg[]): ReactNode {
  return segs.map((s, i) =>
    typeof s === 'string' ? <Fragment key={i}>{s}</Fragment> : <HL key={i}>{s.hl}</HL>,
  )
}

function EvCard(e: EvidenceData) {
  return (
    <Evidence
      id={e.id}
      type={e.type}
      srctag={e.srctag}
      doc={e.doc}
      warn={e.warn}
      snip={snip(e.snip)}
      prov={e.prov}
    />
  )
}

/** Renders a full deal scorecard from data. Same markup/classes as the
 *  hand-ported flagship cards, so everything stays visually consistent. */
export function Scorecard({ data: d }: { data: ScorecardData }) {
  const dealShort = d.name.split(' ')[0]
  return (
    <EvidenceProvider>
      {/* VERDICT BAND */}
      <div className="hero fade">
        <div className="hero-inner">
          <div className="hero-eyebrow">{d.eyebrow}</div>
          <h1 className="hero-name">{d.name}</h1>
          <p className="hero-desc">{d.desc}</p>

          <div className="verdict-row">
            <div className="verdict">
              <span className={d.go ? 'v-pill go' : 'v-pill'}>{VLABEL[d.verdict]}</span>
            </div>
            <div>
              <div className="v-label">REP score</div>
              <div className="v-score">
                {d.score}
                <small>&thinsp;/&thinsp;10</small>
              </div>
            </div>
            <div>
              <div className="v-label">Asset quality</div>
              <div className="v-score">{d.grade}</div>
            </div>
            <div>
              <div className="v-label">Entry</div>
              <div className="v-score" style={{ fontSize: '26px' }}>
                {d.entry}
                <small>x EBITDA</small>
              </div>
            </div>
          </div>

          <div className="dualreads">
            {d.dualReads.map((dr, i) => (
              <div className={`dr ${dr.side}`} key={i}>
                <div className="s-lc">{dr.label}</div>
                <div className="val">{dr.val}</div>
                <div className="note">{dr.note}</div>
              </div>
            ))}
          </div>

          <p className="reasons">
            <b>{d.reasonsLead}</b> {d.reasonsBody}
          </p>
        </div>
      </div>

      {/* SPINE */}
      <div className="sec fade" style={{ animationDelay: '.06s' }}>
        <div className="sec-hd">
          <div>
            <span className="s-lc lc-b">{d.spineLead}</span>
            <h2>The read</h2>
          </div>
          <div className="legend">
            <span>
              <i className="dot-rule"></i> scored by rule
            </span>
            <span>
              <i className="dot-jud"></i> surfaced for your judgment
            </span>
          </div>
        </div>

        {d.axes.map((a, i) => (
          <div className="axis" key={i}>
            <div className="axis-name">
              {a.name}
              <span className="ai">{a.ai}</span>
            </div>
            <div className="axis-read">
              {read(a.read)}
              {a.evidence?.map((e) => (
                <EvCard key={e.id} {...e} />
              ))}
            </div>
            <div className="axis-assess">
              <span className={`s-chip ${a.chipCls}`}>{a.chipLabel}</span>
              <div className="bar">
                <i
                  style={{
                    width: `${a.barPct}%`,
                    ...(a.barColor ? { background: `var(--${a.barColor})` } : {}),
                  }}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GATES */}
      <div className="sec fade" style={{ animationDelay: '.1s' }}>
        <div className="sec-hd">
          <div>
            <span className="s-lc lc-b">Hard-pass screen</span>
            <h2>{d.gatesHeading}</h2>
          </div>
        </div>
        <div className="gates">
          {d.gates.map((g, i) => (
            <div className={`gate ${g.state}`} key={i}>
              <div className="gh">
                {g.state === 'watch' ? <Warn /> : <Check />}
                <span className="gt">{g.title}</span>
              </div>
              <div className="gb">
                {read(g.body)}
                {g.evidence?.map((e) => (
                  <EvCard key={e.id} {...e} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="gate-note">{read(d.gateNote)}</p>
      </div>

      {/* MOAT */}
      <div className="sec fade" style={{ animationDelay: '.14s' }}>
        <div className="sec-hd">
          <div>
            <span className="s-lc lc-b">Ridgemont's own record</span>
            <h2>How this compares to deals we have actually done</h2>
          </div>
        </div>
        <div className="moat-note">{read(d.moatNote)}</div>
        <table>
          <thead>
            <tr>
              <th>Comparable deal</th>
              <th>Entry</th>
              <th>Entry multiple</th>
              <th>Outcome</th>
              <th>MOIC</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {d.comps.map((c, i) => (
              <tr key={i}>
                <td className="name">{c.name}</td>
                <td>{c.year}</td>
                <td>{c.mult}</td>
                <td>
                  <span className={`mtag ${c.tag}`}>{c.tagLabel}</span>
                </td>
                <td>{c.moic}</td>
                <td>{c.status}</td>
              </tr>
            ))}
            <tr className="subj">
              <td className="name">{d.subject.name}</td>
              <td>{d.subject.year}</td>
              <td>{d.subject.mult}</td>
              <td>
                <Cite id="e-moat" tag="CHRON">
                  see the pattern
                </Cite>
              </td>
              <td>n/a</td>
              <td>Under review</td>
            </tr>
          </tbody>
        </table>
        <EvCard {...d.moatEvidence} />
      </div>

      {/* JUDGMENT */}
      <div className="sec fade" style={{ animationDelay: '.18s' }}>
        <div className="sec-hd">
          <div>
            <span className="s-lc lc-b">The engine stops here</span>
            <h2>Surfaced for your judgment</h2>
          </div>
        </div>
        <div className="jud">
          <h3>Calls the framework deliberately leaves to a partner</h3>
          {d.judgment.map((q, i) => (
            <div className="item" key={i}>
              <span className="qmk">&ldquo;</span>
              <span className="qtx">{q}</span>
            </div>
          ))}
        </div>
      </div>

      {/* BANKER QUESTIONS */}
      <div className="sec fade" style={{ animationDelay: '.22s' }}>
        <div className="sec-hd">
          <div>
            <span className="s-lc lc-b">Walk into the call ready</span>
            <h2>The questions that move the decision</h2>
          </div>
        </div>
        {d.banker.map((b, i) => (
          <div className="bq" key={i}>
            <span className="num">{i + 1}</span>
            <span className="qx">{b.q}</span>
            <span className={`imp ${b.imp}`}>{b.label}</span>
          </div>
        ))}
      </div>

      {/* DECISION RECORD */}
      <DecisionRecord
        engine={d.verdict}
        dealName={dealShort}
        recLead={
          <>
            The engine recommends <b>{d.decisionRec.bold}</b>
            {d.decisionRec.tail}.
          </>
        }
      />

      <div className="s-foot">
        <span className="s-lc">Ridgeline · Deal Assistant · Deal Scoring</span>
        {d.footText}
      </div>
    </EvidenceProvider>
  )
}
