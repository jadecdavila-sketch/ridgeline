import { portraits } from '../../data/councils'

/**
 * "Meet the Council" — the deal-agnostic introduction to the three voices,
 * reachable as the leftmost tab in the drawer (before The Table). Not a read of
 * any one deal: the cast and the contract between them. Two councils built to
 * disagree (Partner teal, Examiner gold), the Chair who holds the gavel, and
 * the line the machine never crosses — the call stays the partner's. The
 * drawer's own foot bench sits below this; this view is the scroll body only.
 */
export function CouncilMeet() {
  return (
    <div className="cd-meet">
      {/* ── Masthead ── */}
      <header className="cd-meet-mast">
        <p className="cd-meet-kicker">Ridgeline &middot; The Committee</p>
        <h1>
          Two councils argue the deal. <em>You</em> make the call.
        </h1>
        <p className="cd-meet-lede">
          Ridgeline doesn&rsquo;t hand you a number from nowhere. It runs the deliberation of a
          strong investment committee &mdash; <b>one council building the case, one hunting what
          kills it</b> &mdash; and leaves the decision exactly where it belongs.
        </p>
        <p className="cd-meet-creed">
          It exists to make your judgment <b>faster and harder to fool.</b> Never absent.
        </p>
      </header>

      {/* ── The two benches ── */}
      <section>
        <div className="cd-meet-bhead">
          <p className="cd-meet-eyebrow">Built to disagree</p>
          <h2>
            The Partner <span className="v">vs.</span> The Examiner
          </h2>
          <p>
            They sit on opposite benches on purpose. One is paid to want the deal; one is paid to
            find how it dies. The tension between them is not a bug to smooth over &mdash; it is the
            product. We surface the fight; we never average it into a bland middle.
          </p>
        </div>

        <div className="cd-meet-benches">
          {/* Partner */}
          <div className="cd-meet-bench partner">
            <span className="cd-meet-plate">
              <img
                src={portraits.partner}
                alt="Painted portrait of the Conviction Council: four figures in cool teal-green tones, standing together as the bench that builds the bull case."
              />
            </span>
            <p className="cd-meet-role">Conviction Council &middot; builds the case</p>
            <h3 className="cd-meet-name">The Partner</h3>
            <p className="cd-meet-stance">
              &ldquo;A good company is not a good deal. Build the case on a floor you could stand on,
              and a price you&rsquo;d still pay if the multiple never moved.&rdquo;
            </p>
            <p className="cd-meet-does">
              Constructs the strongest <em>honest</em> bull case, the way the firm actually makes
              money &mdash; protected downside and value created by hand, not multiple expansion or a
              great story. Proposes an asset-quality grade and a walk-away ceiling. Four sub-voices
              hold it in tension:
            </p>
            <div className="cd-meet-quartet">
              <div className="cd-meet-sub">
                <span className="cd-meet-sname">
                  The Strategist <span className="cd-meet-slens">sector &amp; model fit</span>
                </span>
                <span className="cd-meet-hunts">
                  Is this a Ridgemont deal, or a company that happens to touch healthcare? Tests the
                  model, not the end market.
                </span>
              </div>
              <div className="cd-meet-sub">
                <span className="cd-meet-sname">
                  The Floor <span className="cd-meet-slens">protected downside</span>
                </span>
                <span className="cd-meet-hunts">
                  What&rsquo;s left if growth goes to zero? Unmoved by upside; holds a veto on an
                  unprotected downside.
                </span>
              </div>
              <div className="cd-meet-sub">
                <span className="cd-meet-sname">
                  The Operator <span className="cd-meet-slens">value creation</span>
                </span>
                <span className="cd-meet-hunts">
                  Names three levers we can pull with our own hands, and grades each Proven,
                  Credible, or Aspirational &mdash; honestly.
                </span>
              </div>
              <div className="cd-meet-sub">
                <span className="cd-meet-sname">
                  The Steward <span className="cd-meet-slens">asset quality vs price</span>
                </span>
                <span className="cd-meet-hunts">
                  Grades the asset apart from price, then sets the walk-away that grade earns. Will
                  not pay an A multiple for a B-plus asset.
                </span>
              </div>
            </div>
            <div className="cd-meet-delivers">
              <div className="cd-meet-dlabel">Hands up to the Chair</div>
              <div className="cd-meet-dtext">
                A fully sourced bull case, a <b>proposed grade</b>, and a <b>walk-away ceiling</b>{' '}
                &mdash; both marked provisional, until the other bench has had its say.
              </div>
            </div>
          </div>

          {/* Examiner */}
          <div className="cd-meet-bench examiner">
            <span className="cd-meet-plate">
              <img
                src={portraits.examiner}
                alt="Painted portrait of the Scrutiny Council: four figures in amber, gold and slate tones, leaning in as the bench that hunts what kills the deal."
              />
            </span>
            <p className="cd-meet-role">Scrutiny Council &middot; hunts the kill</p>
            <h3 className="cd-meet-name">The Examiner</h3>
            <p className="cd-meet-stance">
              &ldquo;Every deal has a way it dies. My job is to find it first &mdash; before the firm
              wires the money, not after.&rdquo;
            </p>
            <p className="cd-meet-does">
              Builds the list of what kills the deal, ranked most likely and most severe first, each
              with its mechanism, its source, and a severity. Doesn&rsquo;t soft-pedal a kill to keep
              a deal alive; doesn&rsquo;t <em>invent</em> one to look thorough. Four sub-voices do the
              hunting:
            </p>
            <div className="cd-meet-quartet">
              <div className="cd-meet-sub">
                <span className="cd-meet-sname">
                  The Sentinel <span className="cd-meet-slens">reimbursement &amp; regulatory</span>
                </span>
                <span className="cd-meet-hunts">
                  The most common way a healthcare deal dies. What happens to this revenue when the
                  rule moves, the rate resets, or the program is audited?
                </span>
              </div>
              <div className="cd-meet-sub">
                <span className="cd-meet-sname">
                  The Auditor <span className="cd-meet-slens">earnings quality</span>
                </span>
                <span className="cd-meet-hunts">
                  Reads the bridge from reported to adjusted EBITDA like a confession. Add-backs are
                  guilty until tied.
                </span>
              </div>
              <div className="cd-meet-sub">
                <span className="cd-meet-sname">
                  The Reader <span className="cd-meet-slens">management &amp; people</span>
                </span>
                <span className="cd-meet-hunts">
                  Reads the team, not the deck. One indispensable person is a single point of failure
                  the CIM will never name.
                </span>
              </div>
              <div className="cd-meet-sub">
                <span className="cd-meet-sname">
                  The Contrarian <span className="cd-meet-slens">concentration &amp; disruption</span>
                </span>
                <span className="cd-meet-hunts">
                  States the strongest honest bear case &mdash; the concentration nobody named, the
                  moat AI is quietly filling in.
                </span>
              </div>
            </div>
            <div className="cd-meet-delivers">
              <div className="cd-meet-dlabel">Hands up to the Chair</div>
              <div className="cd-meet-dtext">
                A ranked <b>kill list</b> &mdash; hard stop, material, or diligence-addressable
                &mdash; and the power to <b>move the Partner&rsquo;s grade down</b> when the earnings
                prove softer than the deck.
              </div>
            </div>
          </div>
        </div>

        <div className="cd-meet-standoff">
          <p>
            Neither bench gets the last word. The Partner can&rsquo;t talk the kill list down; the
            Examiner can&rsquo;t write the case. A confirmed hard stop, or an unprotected downside, is
            a pass &mdash; <b>no matter how good the story.</b>
          </p>
        </div>
      </section>

      {/* ── The Chair ── */}
      <section className="cd-meet-chairsec">
        <div className="cd-meet-chaircard">
          <div className="cd-meet-chairtext">
            <p className="cd-meet-role chair">The arbiter &middot; not a fifth lens</p>
            <h2>The IC Chair</h2>
            <p className="cd-meet-gavel">
              &ldquo;Two councils argued the deal, one for and one against. I weigh them, decide
              where they conflict, and put my name on the number.&rdquo;
            </p>
            <p className="cd-meet-chairbody">
              Brings no lens of its own &mdash; it brings the gavel. It weighs conviction against
              scrutiny and <em>adjudicates</em> where they disagree, deciding which read carries on
              the evidence. When the fight can&rsquo;t be settled, it names the swing factor as the
              thing the decision turns on. It owns the one thing neither council may set:
            </p>
            <div className="cd-meet-owns">
              <span className="cd-meet-tok">
                <b>1&ndash;10</b> fit score
              </span>
              <span className="cd-meet-tok">
                <b>A &ndash; B</b> asset grade
              </span>
              <span className="cd-meet-tok">
                walk-away <b>ceiling</b>
              </span>
              <span className="cd-meet-tok">
                <b>pursue</b> / selective / pass
              </span>
            </div>
            <p className="cd-meet-adjudicates">
              It <b>adjudicates &mdash; it never averages.</b> Two tracks, never one number. A 6
              that&rsquo;s secretly a 4 and an 8 averaged together hides the cardinal error.
            </p>
          </div>
          <div className="cd-meet-chairportrait">
            <span className="cd-meet-plate cd-meet-plate--chair">
              <img
                src={portraits.chair}
                alt="Painted portrait of the IC Chair: a single figure in a teal suit with a gold tie, standing alone against a wall in open space, casting a long shadow — wearing both councils' colors."
              />
            </span>
          </div>
        </div>
      </section>

      {/* ── The line: the call is yours ── */}
      <section className="cd-meet-line">
        <div className="cd-meet-rule" aria-hidden="true" />
        <h2>
          The Chair owns the verdict. <em>You</em> own the decision.
        </h2>
        <p>
          The verdict is a recommendation, fully reasoned and fully sourced &mdash; built so you can
          click any part of it and land on where it came from. <b>The machine never makes the call.
          It makes the call defensible.</b> The weight stays on your shoulders. Your arms are just
          stronger.
        </p>

        <div className="cd-meet-contrast">
          <div className="cd-meet-col refuse">
            <p className="cd-meet-clabel">What it refuses to be</p>
            <ul>
              <li>A confident answer with no source to click into.</li>
              <li>A fabricated comp, number, or precedent &mdash; the one unforgivable failure.</li>
              <li>One black-box score standing in for the reasoning behind it.</li>
              <li>Disagreement smoothed into a bland middle.</li>
              <li>Generic benchmarks and vendor-speak in place of the firm&rsquo;s own framework.</li>
            </ul>
          </div>
          <div className="cd-meet-col are">
            <p className="cd-meet-clabel">What it is</p>
            <ul>
              <li>Every claim one click from the page it came from.</li>
              <li>&ldquo;Not evidenced in what was provided&rdquo; &mdash; a complete, honest answer.</li>
              <li>Two tracks held apart: asset quality, and price.</li>
              <li>The fight between the councils, surfaced, not averaged.</li>
              <li>Scored against this firm&rsquo;s framework, history, and language.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
