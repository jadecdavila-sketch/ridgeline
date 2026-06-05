import { Link, useParams } from 'react-router-dom'
import { scorecards } from '../data/scorecards'
import { dealById } from '../data/deals'
import { useSectionReveal } from '../hooks/useSectionReveal'
import { RidgelineAI } from '../components/chat/RidgelineAI'
import { CouncilDrawer } from '../components/council/CouncilDrawer'
import { councils } from '../data/councils'

export function ScorecardPage() {
  const { id } = useParams()
  const sc = id ? scorecards[id] : undefined
  // Runs unconditionally (hooks rule); no-ops when there are no .sec sections.
  useSectionReveal(id)

  if (!sc) {
    const deal = dealById(id)
    return (
      <>
        <div className="topbar">
          <div className="crumb">
            Deal Assistant <span className="sep">/</span>{' '}
            <Link to="/" style={{ color: 'var(--blue)', textDecoration: 'none' }}>
              Pipeline
            </Link>{' '}
            <span className="sep">/</span> <span className="cur">{deal?.name ?? 'Deal'}</span>
          </div>
        </div>
        <div className="content">
          <div className="phead">
            <span className="lc">NDA Scorecard</span>
            <h1>{deal?.name ?? 'Unknown deal'}</h1>
            <p className="sub">
              {deal
                ? `${deal.meta}. Full scorecard for this deal is not yet ported.`
                : 'No such deal.'}
            </p>
          </div>
        </div>
      </>
    )
  }

  const { crumbName, Body, chat } = sc
  const council = id ? councils[id] : undefined
  return (
    <div className="scard">
      <div className="topbar2">
        <div className="crumb2">
          Deal Assistant <span className="sep">/</span> <Link to="/">Pipeline</Link>{' '}
          <span className="sep">/</span> <span className="cur">{crumbName}</span>
        </div>
      </div>
      <div className="wrap">
        <Body />
      </div>
      {/* Where a deal has a Council, "Converse with the Council" replaces the
          older Ridgeline AI chat; otherwise the chat still stands in. */}
      {council ? (
        <CouncilDrawer data={council} dealName={crumbName} />
      ) : (
        <RidgelineAI intro={chat.intro} items={chat.items} placeholder={chat.placeholder} />
      )}
    </div>
  )
}
