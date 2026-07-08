/** The deal-intelligence nav rail. The "R" brand mark doubles as the collapse
 *  toggle (matches the prototype). Most items are placeholders for views still
 *  to be built; only Pipeline / Deal Scoring are live. */
export function Sidebar({ onToggle }: { onToggle: () => void }) {
  const toggleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <aside className="side">
      <div className="side-brand">
        <span
          className="bmark"
          role="button"
          tabIndex={0}
          title="Toggle navigation"
          onClick={onToggle}
          onKeyDown={toggleKey}
        >
          R
        </span>
        <span className="bword">
          <span className="mk">Ridgemont</span>
          <span className="tag">Deal Intelligence</span>
        </span>
      </div>

      <nav className="nav">
        <div className="nav-grp">
          <div className="nav-grp-l">Deal Assistant</div>
          <div className="nav-i active" title="Pipeline">
            <span className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </span>
            <span className="lbl">Pipeline</span>
          </div>
          <div className="nav-i" title="Watchlist">
            <span className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M12 3l2.5 5 5.5.8-4 4 1 5.4L12 21l-5 2.6 1-5.4-4-4 5.5-.8z" />
              </svg>
            </span>
            <span className="lbl">Watchlist</span>
          </div>
          <div className="nav-i" title="Scored deals">
            <span className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M9 11l3 3 8-8M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9" />
              </svg>
            </span>
            <span className="lbl">Scored deals</span>
          </div>
        </div>

        <div className="nav-grp">
          <div className="nav-grp-l">Workflows</div>
          <div className="nav-i active" title="Deal Scoring (live)">
            <span className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M4 4h16v16H4zM8 9h8M8 13h5" />
              </svg>
            </span>
            <span className="lbl">Deal Scoring</span>
            <span className="dot-live"></span>
          </div>
          <div className="nav-i soon" title="Diligence Agent (Phase 2)">
            <span className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M3 7l9 5 9-5M3 7v10l9 5 9-5V7M3 7l9-5 9 5" />
              </svg>
            </span>
            <span className="lbl">Diligence Agent</span>
            <span className="badge soon">Phase 2</span>
          </div>
          <div className="nav-i soon" title="Thought Partner (Horizon)">
            <span className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </span>
            <span className="lbl">Thought Partner</span>
            <span className="badge soon">Horizon</span>
          </div>
        </div>

        <div className="nav-grp">
          <div className="nav-grp-l">Platform</div>
          <div className="nav-i soon" title="Framework Library">
            <span className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M4 19.5V5a2 2 0 012-2h12v18H6a2 2 0 01-2-2z" />
              </svg>
            </span>
            <span className="lbl">Framework Library</span>
          </div>
          <div className="nav-i soon" title="Data Catalog">
            <span className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7" />
              </svg>
            </span>
            <span className="lbl">Data Catalog</span>
          </div>
          <div className="nav-i soon" title="Audit Log">
            <span className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M12 8v4l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span className="lbl">Audit Log</span>
          </div>
          <div className="nav-i soon" title="Access & Roles (Admin)">
            <span className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M12 2l8 4v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6z" />
              </svg>
            </span>
            <span className="lbl">Access &amp; Roles</span>
            <span className="badge soon">Admin</span>
          </div>
        </div>
      </nav>

      <div className="side-user">
        <div className="av">DR</div>
        <div className="uinfo">
          <div className="nm">Dana Reed</div>
          <div className="rl">Healthcare · Principal</div>
        </div>
      </div>
    </aside>
  )
}
