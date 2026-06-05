import { EvidenceProvider, Cite, Evidence, HL } from './evidence'
import { DecisionRecord } from './DecisionRecord'

/** Cypress Dental Partners — Pursue (with discipline), 7/10, B+, 9.2x. */
export function CypressScorecard() {
  return (
    <EvidenceProvider>
      {/* VERDICT BAND */}
      <div className="hero fade">
        <div className="hero-inner">
          <div className="hero-eyebrow">NDA Scorecard · Dental Services (DSO)</div>
          <h1 className="hero-name">Cypress Dental Partners</h1>
          <p className="hero-desc">
            Multi-state dental support organization. ~140 affiliated practices, recurring recall and
            hygiene revenue with an ortho and specialty mix. ~$22M adjusted EBITDA on ~$88M revenue.
          </p>

          <div className="verdict-row">
            <div className="verdict">
              <span className="v-pill go">Pursue</span>
            </div>
            <div>
              <div className="v-label">REP score</div>
              <div className="v-score">
                7<small>&thinsp;/&thinsp;10</small>
              </div>
            </div>
            <div>
              <div className="v-label">Asset quality</div>
              <div className="v-score">B+</div>
            </div>
            <div>
              <div className="v-label">Entry</div>
              <div className="v-score" style={{ fontSize: '26px' }}>
                9.2<small>x EBITDA</small>
              </div>
            </div>
          </div>

          <div className="dualreads">
            <div className="dr q">
              <div className="s-lc">Two-track read</div>
              <div className="val">B+ asset</div>
              <div className="note">
                Diversified, recurring recall revenue and a fragmented roll-up runway. A
                discretionary slice of demand keeps it B+, not A.
              </div>
            </div>
            <div className="dr p">
              <div className="s-lc">Price discipline</div>
              <div className="val">At the line</div>
              <div className="note">
                9.2x entry sits just under the ~9.5x ceiling on a B+ grade. Out of lane, so holding
                that line is the whole point.
              </div>
            </div>
          </div>

          <p className="reasons">
            <b>Pursue, with discipline.</b> A strong, fragmented dental roll-up at a fair entry, with
            diversified revenue and a credible value-add path. The discipline is real: dental sits
            outside the core lanes, so the bar rises and this is a 7, not a clean high pursue. The
            open questions are organic-growth durability and how much demand is discretionary, not
            whether a gate trips. None does.
          </p>
        </div>
      </div>

      {/* SPINE */}
      <div className="sec fade" style={{ animationDelay: '.06s' }}>
        <div className="sec-hd">
          <div>
            <span className="s-lc lc-b">Scored against the REP healthcare framework</span>
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

        <div className="axis">
          <div className="axis-name">
            Sector &amp; model fit<span className="ai">In lane?</span>
          </div>
          <div className="axis-read">
            Dental is{' '}
            <Cite id="e-lane" tag="CIM">
              not one of the named lanes
            </Cite>
            , so the bar rises sharply. The model itself is sound, recurring recall revenue and a
            fragmented roll-up, not manufacturing or out-of-network. Whether it is close enough to
            underwrite is a partner call, surfaced below.
            <Evidence
              id="e-lane"
              type="t-cim"
              srctag="CIM"
              doc="Cypress CIM · Business overview · p.7"
              warn
              snip={
                <>
                  Core lanes are specialty pharmacy, physician staffing, post-acute, RCM, home-based
                  care, and behavioral health. Dental is <HL>adjacent, not core</HL>; the model is a
                  services roll-up, which is the part that travels.
                </>
              }
              prov="Out of lane raises the bar; it is not a hard-pass."
            />
          </div>
          <div className="axis-assess">
            <span className="s-chip mon">Out of lane</span>
            <div className="bar">
              <i style={{ width: '62%', background: 'var(--amber)' }}></i>
            </div>
          </div>
        </div>

        <div className="axis">
          <div className="axis-name">
            Protected downside<span className="ai">Non-negotiable</span>
          </div>
          <div className="axis-read">
            A recurring recall and hygiene base with real retention, but a{' '}
            <Cite id="e-down" tag="CIM">
              slice of dental spend is discretionary
            </Cite>
            , the kind a customer can defer in a downturn, unlike a specialty drug. The recurring
            floor is solid; the elective portion is the soft spot to size.
            <Evidence
              id="e-down"
              type="t-cim"
              srctag="CIM"
              doc="Cypress CIM · Revenue mix · p.21"
              warn
              snip={
                <>
                  Recall and hygiene are recurring and sticky; <HL>ortho and cosmetic are more
                  discretionary</HL> and can soften in a downturn. FCF conversion is healthy but
                  cycle-sensitive on the elective mix.
                </>
              }
              prov="Size the discretionary share; it is part of why this is a 7, not an 8."
            />
          </div>
          <div className="axis-assess">
            <span className="s-chip mon">Mixed</span>
            <div className="bar">
              <i style={{ width: '68%', background: 'var(--amber)' }}></i>
            </div>
          </div>
        </div>

        <div className="axis">
          <div className="axis-name">
            Asset quality vs price<span className="ai">The central discipline</span>
          </div>
          <div className="axis-read">
            Graded a{' '}
            <Cite id="e-qp" tag="DATA">
              B+ asset on diversified, recurring revenue
            </Cite>
            , separate from price. The ceiling attached to B+ is roughly 9.5x; the 9.2x entry sits
            just under it. Little room, which is exactly the discipline.
            <Evidence
              id="e-qp"
              type="t-chrono"
              srctag="Deal data"
              doc="REP entries · dental / services roll-ups"
              snip={
                <>
                  B+ quality carries a held ceiling near <HL>9.5x</HL>; proposed entry <HL>9.2x</HL>{' '}
                  is just below it. A great asset at the wrong price is a pass; a B+ at a B+ price can
                  be a good deal.
                </>
              }
              prov="Holding the line is the call; there is little headroom."
            />
          </div>
          <div className="axis-assess">
            <span className="s-chip mon">At the line</span>
            <div className="bar">
              <i style={{ width: '72%', background: 'var(--amber)' }}></i>
            </div>
          </div>
        </div>

        <div className="axis">
          <div className="axis-name">
            Value creation<span className="ai">Controllable levers</span>
          </div>
          <div className="axis-read">
            Three controllable levers:{' '}
            <Cite id="e-vc" tag="IC">
              tuck-in M&amp;A across a fragmented market
            </Cite>{' '}
            (Proven), procurement and supply leverage at scale (Proven), and de novo plus
            specialty-mix shift (Credible). The math has to work at realistic multiples, not
            aspirational ones.
            <Evidence
              id="e-vc"
              type="t-ic"
              srctag="IC memo"
              doc="REP IC corpus · services roll-up value creation"
              snip={
                <>
                  Comparable roll-ups realized the gain through{' '}
                  <HL>disciplined tuck-ins and procurement</HL>, with de novo as upside, not the
                  load-bearing assumption.
                </>
              }
              prov="Tuck-in math must clear at realistic, not aspirational, multiples."
            />
          </div>
          <div className="axis-assess">
            <span className="s-chip strong">Strong</span>
            <div className="bar">
              <i style={{ width: '78%' }}></i>
            </div>
          </div>
        </div>

        <div className="axis">
          <div className="axis-name">
            Management &amp; data<span className="ai">Credibility multiplier</span>
          </div>
          <div className="axis-read">
            Founder-led with a recent CFO hire. Reported figures tie and the{' '}
            <Cite id="e-mgmt2" tag="QoE">
              adjustment bridge is moderate
            </Cite>
            . The open question is whether same-practice growth is volume and mix or mostly price.
            <Evidence
              id="e-mgmt2"
              type="t-qoe"
              srctag="QoE pattern"
              doc="In-sector QoE history · add-back quality"
              snip={
                <>
                  Reported-to-adjusted uplift is moderate and ties to the balance sheet;{' '}
                  <HL>same-practice growth quality</HL> (price vs volume vs mix) is not yet
                  evidenced. Adjusted EBITDA is a negotiating position until proven.
                </>
              }
              prov="Decompose organic growth in diligence; it drives the durability case."
            />
          </div>
          <div className="axis-assess">
            <span className="s-chip strong">Credible</span>
            <div className="bar">
              <i style={{ width: '74%' }}></i>
            </div>
          </div>
        </div>
      </div>

      {/* GATES */}
      <div className="sec fade" style={{ animationDelay: '.1s' }}>
        <div className="sec-hd">
          <div>
            <span className="s-lc lc-b">Hard-pass screen</span>
            <h2>No disqualifier triggered. The constraint is the lane call, not a gate.</h2>
          </div>
        </div>
        <div className="gates">
          <div className="gate pass-ok">
            <div className="gh">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="gt">EBITDA in band</span>
            </div>
            <div className="gb">~$22M, inside the $20 to 75M target range. Clear.</div>
          </div>
          <div className="gate pass-ok">
            <div className="gh">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="gt">Model type</span>
            </div>
            <div className="gb">
              Services roll-up. Not manufacturing, CME, or an out-of-network-dependent model. Clear.
            </div>
          </div>
          <div className="gate pass-ok">
            <div className="gh">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="gt">Concentration</span>
            </div>
            <div className="gb">
              <Cite id="e-gate" tag="CIM">
                Diversified across ~140 practices
              </Cite>
              ; no single practice or payer near the 30 percent line. Clear.
              <Evidence
                id="e-gate"
                type="t-cim"
                srctag="CIM"
                doc="Cypress CIM · Practice and payer mix · p.29"
                snip={
                  <>
                    Revenue spread across ~140 locations and a broad PPO and cash-pay base;{' '}
                    <HL>no customer near 30 percent</HL>. Low concentration is a genuine strength
                    here.
                  </>
                }
                prov="Diversification is real; the risk sits elsewhere."
              />
            </div>
          </div>
        </div>
        <p className="gate-note">
          Any single trigger short-circuits to an automatic 1 to 2: manufacturing or CME,
          out-of-network dependence, single-customer concentration over 30 percent, EBITDA outside
          $20 to 75M, no credible value-add path, or a non-credible banker. Being out of lane is{' '}
          <b>not</b> a hard-pass; it raises the bar and becomes the judgment call below.
        </p>
      </div>

      {/* MOAT */}
      <div className="sec fade" style={{ animationDelay: '.14s' }}>
        <div className="sec-hd">
          <div>
            <span className="s-lc lc-b">Ridgemont's own record</span>
            <h2>How this compares to deals we have actually done</h2>
          </div>
        </div>
        <div className="moat-note">
          Matched on sub-sector, size, and entry multiple. The comparable set is <b>thinner here</b>{' '}
          than for an in-lane deal, because dental is adjacent to the core lanes, which is itself
          worth weighing.
        </div>
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
            <tr>
              <td className="name">Cedar Park Dental</td>
              <td>2018</td>
              <td>8.9x</td>
              <td>
                <span className="mtag up">Outperformed</span>
              </td>
              <td>2.8x</td>
              <td>Exited 2023</td>
            </tr>
            <tr>
              <td className="name">Maple Grove Dental</td>
              <td>2020</td>
              <td>9.3x</td>
              <td>
                <span className="mtag held">In line</span>
              </td>
              <td>2.0x</td>
              <td>Exited 2024</td>
            </tr>
            <tr>
              <td className="name">Brightwater Smiles</td>
              <td>2022</td>
              <td>9.0x</td>
              <td>
                <span className="mtag held">Tracking</span>
              </td>
              <td>&mdash;</td>
              <td>Active</td>
            </tr>
            <tr>
              <td className="name">Ridgeview Orthodontics</td>
              <td>2019</td>
              <td>10.4x</td>
              <td>
                <span className="mtag dn">Underperformed</span>
              </td>
              <td>1.6x</td>
              <td>Exited 2023</td>
            </tr>
            <tr className="subj">
              <td className="name">Cypress Dental Partners</td>
              <td>2026</td>
              <td>9.2x</td>
              <td>
                <Cite id="e-moat" tag="CHRON">
                  see the pattern
                </Cite>
              </td>
              <td>&mdash;</td>
              <td>Under review</td>
            </tr>
          </tbody>
        </table>
        <Evidence
          id="e-moat"
          type="t-chrono"
          srctag="Chronograph"
          doc="REP portfolio returns · dental roll-ups"
          snip={
            <>
              Sub-9.5x dental entries returned a <HL>median 2.4x</HL>; the single entry above 10x
              returned 1.6x. Cypress at 9.2x sits mid-band, <HL>closest to Cedar Park at 2.8x</HL>.
            </>
          }
          prov="Hold the entry under 10x; above it, the firm's one comp returned 1.6x."
        />
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
          {[
            'The lane call. Dental is out of lane, so the bar rises. Is the services-roll-up model close enough to the core lanes to underwrite, or not?',
            'The B+ grade and its ceiling. Does the discretionary share of demand cap quality at B+, and is 9.2x close enough to the line to hold?',
            'Are the three levers real? Tuck-ins and procurement are proven; de novo is credible but ramp-dependent.',
            'AI overlay: dental is relatively insulated, hands-on clinical work. AI reads as a modest back-office tailwind, not a moat compressor. Confirm, do not assume.',
          ].map((q, i) => (
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
        {[
          ['Decompose same-practice growth: how much is price, how much is patient volume, how much is ortho and specialty mix.', 'hi', 'High impact'],
          ['Recurring versus discretionary revenue split, and how the elective mix behaved in the last downturn.', 'hi', 'High impact'],
          ['Tuck-in pipeline and realized multiples paid to date, with the synergy math behind the integration thesis.', 'hi', 'High impact'],
          ['EBITDA adjustment bridge: nature and magnitude of add-backs, owner comp, and de novo ramp costs.', 'hi', 'High impact'],
          ['De novo unit economics: cost to open, time to maturity, and the realized ramp curve versus plan.', 'md', 'Medium'],
          ['Payer and PPO mix and any reimbursement exposure; how much revenue is cash-pay versus insurance.', 'md', 'Medium'],
          ['Clinician recruitment and turnover, and dependence on any single regional leadership group.', 'md', 'Medium'],
          ['Process and banker credibility: IOI timeline, other parties at the table, and data-room readiness.', 'md', 'Medium'],
        ].map(([qx, imp, label], i) => (
          <div className="bq" key={i}>
            <span className="num">{i + 1}</span>
            <span className="qx">{qx}</span>
            <span className={`imp ${imp}`}>{label}</span>
          </div>
        ))}
      </div>

      {/* DECISION RECORD */}
      <DecisionRecord
        engine="pursue"
        dealName="Cypress"
        recLead={
          <>
            The engine recommends <b>Pursue, with discipline</b> (7 of 10, B+ asset, at the line).
          </>
        }
      />

      <div className="s-foot">
        <span className="s-lc">Ridgeline · Deal Assistant · Deal Scoring</span>
        Illustrative prototype. Cypress Dental Partners and all figures are fictional. The 1 to 10
        scoring, two-track quality grade and held price ceiling, hard-pass screen, and the
        out-of-lane judgment follow the REP Healthcare Investment Framework and the rep-deal-eval
        rubric. The comparable-deal record stands in for Ridgemont's realized returns, the piece the
        framework names as most worth automating.
      </div>
    </EvidenceProvider>
  )
}
