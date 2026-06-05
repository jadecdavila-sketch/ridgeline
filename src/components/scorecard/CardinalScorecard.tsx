import { EvidenceProvider, Cite, Evidence, HL } from './evidence'
import { DecisionRecord } from './DecisionRecord'

/** Cardinal Specialty Pharmacy. Pursue, 8/10, A−, 8.8x (in-lane). */
export function CardinalScorecard() {
  return (
    <EvidenceProvider>
      {/* VERDICT BAND */}
      <div className="hero fade">
        <div className="hero-inner">
          <div className="hero-eyebrow">NDA Scorecard · Specialty Pharmacy</div>
          <h1 className="hero-name">Cardinal Specialty Pharmacy</h1>
          <p className="hero-desc">
            National specialty pharmacy in complex, high-cost therapies. Limited-distribution drug
            access, payer and manufacturer contracts, clinical adherence management. ~$32M adjusted
            EBITDA on ~$175M revenue.
          </p>

          <div className="verdict-row">
            <div className="verdict">
              <span className="v-pill go">Pursue</span>
            </div>
            <div>
              <div className="v-label">REP score</div>
              <div className="v-score">
                8<small>&thinsp;/&thinsp;10</small>
              </div>
            </div>
            <div>
              <div className="v-label">Asset quality</div>
              <div className="v-score">A&ndash;</div>
            </div>
            <div>
              <div className="v-label">Entry</div>
              <div className="v-score" style={{ fontSize: '26px' }}>
                8.8<small>x EBITDA</small>
              </div>
            </div>
          </div>

          <div className="dualreads">
            <div className="dr q">
              <div className="s-lc">Two-track read</div>
              <div className="val">A&ndash; asset</div>
              <div className="note">
                Recurring refill revenue, mission-critical therapies, FCF conversion above 50
                percent. The downside is structurally protected.
              </div>
            </div>
            <div className="dr q">
              <div className="s-lc">Price discipline</div>
              <div className="val">Below ceiling</div>
              <div className="note">
                8.8x entry sits under the ~9.5x walk-away attached to an A&ndash; grade. Quality and
                price graded on separate tracks.
              </div>
            </div>
          </div>

          <p className="reasons">
            <b>Why pursue.</b> In-lane specialty pharmacy with the protected downside Ridgemont
            underwrites for. Recurring, refill-driven revenue on therapies a patient cannot defer.
            Real procurement and pricing leverage. Free-cash conversion above the 50 percent
            preference. The return holds with the exit multiple flat to entry, because it rides
            operations rather than multiple expansion. Three controllable value-creation levers, all
            credible. The live risk is reimbursement and payer durability, the one that kills
            healthcare deals most often. Diligence goes there first.
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
            Specialty pharmacy is a named preferred lane. The screen tests the{' '}
            <Cite id="e-lane" tag="CIM">
              business model, not the end market
            </Cite>
            : refill-driven recurring revenue on limited-distribution therapies. No manufacturing,
            no out-of-network billing.
            <Evidence
              id="e-lane"
              type="t-cim"
              srctag="CIM"
              doc="Cardinal CIM · Business overview · p.9"
              snip={
                <>
                  "Revenue is <HL>refill-driven and payer-contracted</HL> across limited-distribution
                  specialty therapies; no manufacturing, no out-of-network billing model."
                </>
              }
              prov={'Passes the model-versus-end-market test, not just "sells into healthcare."'}
            />
          </div>
          <div className="axis-assess">
            <span className="s-chip range">In lane</span>
            <div className="bar">
              <i style={{ width: '88%', background: 'var(--green)' }}></i>
            </div>
          </div>
        </div>

        <div className="axis">
          <div className="axis-name">
            Protected downside<span className="ai">Non-negotiable</span>
          </div>
          <div className="axis-read">
            Recurring revenue with demonstrated refill retention. Therapies a patient{' '}
            <Cite id="e-down" tag="CIM">
              cuts last, not first
            </Cite>
            . Pricing and procurement leverage visible in gross margin. FCF conversion above the
            framework's 50 percent preference.
            <Evidence
              id="e-down"
              type="t-cim"
              srctag="CIM"
              doc="Cardinal CIM · Revenue quality · p.24"
              snip={
                <>
                  Refill retention in the <HL>low-90s percent</HL>; therapies are non-deferrable;{' '}
                  <HL>EBITDA-to-FCF conversion above 50 percent</HL> with low capex intensity.
                </>
              }
              prov="Downside is structurally capped, the precondition the framework requires before any return."
            />
          </div>
          <div className="axis-assess">
            <span className="s-chip strong">Strong</span>
            <div className="bar">
              <i style={{ width: '84%' }}></i>
            </div>
          </div>
        </div>

        <div className="axis">
          <div className="axis-name">
            Asset quality vs price<span className="ai">The central discipline</span>
          </div>
          <div className="axis-read">
            Graded an{' '}
            <Cite id="e-qp" tag="DATA">
              A&ndash; asset on revenue quality
            </Cite>
            , separate from price. The walk-away attached to that grade is roughly 9.5x. The 8.8x
            entry sits below it. The usual error is paying an A multiple for a lesser asset. Avoided
            here.
            <Evidence
              id="e-qp"
              type="t-chrono"
              srctag="Deal data"
              doc="REP entries · specialty pharmacy bracket"
              snip={
                <>
                  A&ndash; quality carries a held ceiling near <HL>9.5x</HL>; proposed entry{' '}
                  <HL>8.8x</HL> is below it. Quality and price are scored on separate tracks and
                  never collapsed into one number.
                </>
              }
              prov="Quality and price tracked apart. The gap between them carries the read."
            />
          </div>
          <div className="axis-assess">
            <span className="s-chip range">Below ceiling</span>
            <div className="bar">
              <i style={{ width: '80%', background: 'var(--green)' }}></i>
            </div>
          </div>
        </div>

        <div className="axis">
          <div className="axis-name">
            Value creation<span className="ai">Controllable levers</span>
          </div>
          <div className="axis-read">
            Three controllable levers, each gradeable:{' '}
            <Cite id="e-vc" tag="IC">
              procurement and gross-to-net at scale
            </Cite>{' '}
            (Proven), therapy-mix shift toward higher-margin categories (Credible), and tuck-ins of
            regional specialty pharmacies on a proven platform playbook (Credible). The return rides
            operations. Leverage is not the source.
            <Evidence
              id="e-vc"
              type="t-ic"
              srctag="IC memo"
              doc="REP IC corpus · pharmacy-services value creation"
              snip={
                <>
                  Comparable platforms realized most of the gain through{' '}
                  <HL>procurement, mix shift, and disciplined tuck-ins</HL> at realistic multiples,
                  not multiple expansion or leverage.
                </>
              }
              prov={'Each lever is underwritten; "management will figure it out" is not a lever.'}
            />
          </div>
          <div className="axis-assess">
            <span className="s-chip strong">Strong</span>
            <div className="bar">
              <i style={{ width: '80%' }}></i>
            </div>
          </div>
        </div>

        <div className="axis">
          <div className="axis-name">
            Management &amp; data<span className="ai">Credibility multiplier</span>
          </div>
          <div className="axis-read">
            Operator-led with a public-company CFO. Reported figures tie and the{' '}
            <Cite id="e-mgmt2" tag="QoE">
              adjustment bridge is modest
            </Cite>
            , under the 40 percent uplift that draws a penalty. Management reads as a credibility
            multiplier here. No discount applied.
            <Evidence
              id="e-mgmt2"
              type="t-qoe"
              srctag="QoE pattern"
              doc="In-sector QoE history · add-back quality"
              snip={
                <>
                  Reported-to-adjusted EBITDA uplift is <HL>under 40 percent</HL> with add-backs that
                  tie to the balance sheet; no missed-projection history flagged. Adjusted EBITDA is
                  still a negotiating position until proven.
                </>
              }
              prov="Verify add-back nature and prior-plan attainment in diligence."
            />
          </div>
          <div className="axis-assess">
            <span className="s-chip strong">Credible</span>
            <div className="bar">
              <i style={{ width: '76%' }}></i>
            </div>
          </div>
        </div>
      </div>

      {/* GATES */}
      <div className="sec fade" style={{ animationDelay: '.1s' }}>
        <div className="sec-hd">
          <div>
            <span className="s-lc lc-b">Hard-pass screen</span>
            <h2>No disqualifier triggered. The asset clears.</h2>
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
            <div className="gb">~$32M, inside the $20 to 75M target range. Clear.</div>
          </div>
          <div className="gate pass-ok">
            <div className="gh">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="gt">Model &amp; sector</span>
            </div>
            <div className="gb">
              In-lane specialty pharmacy. No manufacturing, no CME, no out-of-network dependence.
              Clear.
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
                Largest manufacturer relationship ~22 percent
              </Cite>
              , under the 30 percent gate. Clears, and the first diligence focus.
              <Evidence
                id="e-gate"
                type="t-cim"
                srctag="CIM"
                doc="Cardinal CIM · Contract concentration · p.31"
                snip={
                  <>
                    Top limited-distribution relationship approx. <HL>22 percent</HL> of gross
                    profit; single-customer concentration above 30 percent is the hard-pass line.
                  </>
                }
                prov="Under the gate, but the dominant risk to test, see banker questions."
              />
            </div>
          </div>
        </div>
        <p className="gate-note">
          Any single trigger short-circuits the score to an automatic 1 to 2: manufacturing or CME,
          an out-of-network-dependent model, single-customer concentration over 30 percent, EBITDA
          outside $20 to 75M, no credible value-add path, a banker without credibility.
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
          The framework names this as the highest-value thing to automate:{' '}
          <b>systematic comparison against REP's realized returns</b>, today done from partner
          memory. Matched to Cardinal on sub-sector, size, and entry multiple.
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
              <td className="name">Summit Specialty Pharmacy</td>
              <td>2018</td>
              <td>8.4x</td>
              <td>
                <span className="mtag up">Outperformed</span>
              </td>
              <td>2.9x</td>
              <td>Exited 2023</td>
            </tr>
            <tr>
              <td className="name">PromptCare</td>
              <td>2019</td>
              <td>8.6x</td>
              <td>
                <span className="mtag up">In line</span>
              </td>
              <td>2.4x</td>
              <td>Exited 2024</td>
            </tr>
            <tr>
              <td className="name">Beacon Pharmacy Services</td>
              <td>2022</td>
              <td>8.9x</td>
              <td>
                <span className="mtag held">Tracking</span>
              </td>
              <td>n/a</td>
              <td>Active</td>
            </tr>
            <tr>
              <td className="name">Vantage Infusion</td>
              <td>2021</td>
              <td>9.9x</td>
              <td>
                <span className="mtag dn">Underperformed</span>
              </td>
              <td>1.7x</td>
              <td>Exited 2024</td>
            </tr>
            <tr className="subj">
              <td className="name">Cardinal Specialty Pharmacy</td>
              <td>2026</td>
              <td>8.8x</td>
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
        <Evidence
          id="e-moat"
          type="t-chrono"
          srctag="Chronograph"
          doc="REP portfolio returns · specialty pharmacy"
          snip={
            <>
              Sub-9.0x entries in the sub-sector returned a <HL>median 2.6x</HL>; the single near-10x
              entry returned 1.7x. Cardinal at 8.8x sits in the bracket that has worked,{' '}
              <HL>closest to Summit at 2.9x</HL>.
            </>
          }
          prov="Drawn from REP's realized returns, not a generic comp set."
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
            'The A− letter grade is a synthesis call. Does revenue quality and durability justify A− over B+? That is what sets the ceiling you hold.',
            'Are the three value-creation levers real? Procurement is proven. The mix-shift and tuck-in levers are credible but not yet in the P&L.',
            'AI overlay, run both directions. It reads as a net tailwind here, automating prior authorization, refills, and adherence rather than compressing the moat. Confirm as a named diligence item.',
            'The walk-away. The model proposes holding below ~9.5x. The number is yours to set.',
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
          ['Manufacturer and limited-distribution concentration: share of revenue and gross profit from the top 1, 3, and 5 contracts, and renewal terms.', 'hi', 'High impact'],
          ['Payer mix and reimbursement durability: commercial versus Medicare versus Medicaid, DIR-fee exposure, and the gross-to-net trend.', 'hi', 'High impact'],
          ['Refill retention and adherence by therapy cohort. What churns and why, and how durable the recurring base is.', 'hi', 'High impact'],
          ['EBITDA adjustment bridge: magnitude and nature of add-backs, owner compensation, and any one-time build costs.', 'hi', 'High impact'],
          ['340B and fraud-and-abuse posture: AKS, copay assistance, and compliance history.', 'md', 'Medium'],
          ['Procurement economics: GPO terms and buy-side margin, and how much of the savings thesis is contracted versus assumed.', 'md', 'Medium'],
          ['Tuck-in pipeline and integration capacity: how many targets, at what multiples, with what synergy math.', 'md', 'Medium'],
          ['Forward projections versus historical attainment. Has management hit its own plan before.', 'md', 'Medium'],
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
        dealName="Cardinal"
        recLead={
          <>
            The engine recommends <b>Pursue</b> (8 of 10, A&ndash; asset, below ceiling).
          </>
        }
      />

      <div className="s-foot">
        <span className="s-lc">Ridgeline · Deal Assistant · Deal Scoring</span>
        Illustrative prototype. Cardinal Specialty Pharmacy and all figures are fictional. The 1 to
        10 scoring, two-track quality grade and held price ceiling, hard-pass screen, and
        reimbursement-led risk framing follow the REP Healthcare Investment Framework and the
        rep-deal-eval rubric. The comparable-deal record stands in for Ridgemont's realized returns.
        That piece is the one the framework names as most worth automating.
      </div>
    </EvidenceProvider>
  )
}
