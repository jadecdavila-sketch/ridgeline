import { Link, useParams } from 'react-router-dom'
import { dealById } from '../data/deals'

/** Placeholder for this pass. The full data-driven scorecard (hero, five-axis
 *  spine, gates, comparables, decision record), the frosted slide-down reveal,
 *  and the Ridgeline AI chat land in the next pass. */
export function ScorecardPage() {
  const { id } = useParams()
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
              ? `${deal.meta}. The full scorecard — hero verdict, five-axis read, gates, comparables, decision record, the frosted slide-down reveal, and Ridgeline AI — is being ported next.`
              : 'No such deal.'}
          </p>
        </div>
      </div>
    </>
  )
}
