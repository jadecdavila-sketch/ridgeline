import type { CouncilData } from '../councilTypes'

/**
 * Halcyon Home Health — the committee behind the 4 / B− / Pass.
 * The disqualified near-miss: an in-lane home-based-care asset with a real
 * floor on paper, short-circuited by a single payer over the 30% concentration
 * line. The gate trips, so the debate is short — the Examiner leads with the
 * trigger, and the Partner concedes the case is capped before he builds it.
 */
export const halcyon: CouncilData = {
  chair: {
    verdictLabel: 'Pass',
    verdict: 'pass',
    score: '4',
    grade: 'B−',
    entry: '8.0×',
    resolution:
      'Hard pass. A single payer sits <em>above the 30% concentration line</em> <span class="qtag cim">CIM p.20</span>, and that is a hard-pass trigger — it short-circuits the score regardless of the conviction case. The Examiner ran it first and it tripped; the Partner did not contest it. The asset underneath is real — in-lane, operator-led, fairly priced at 8.0× — and on a diversified book it would have graded near B−. But the framework does not let a clean lane or a fair entry buy back an unprotected floor. The trigger governs. The only question worth diligence is whether the concentration is one contractual cliff or several separable contracts; absent that re-cut, this is a 4 of 10.',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'B− at best · moot', kind: 'grade' },
      { text: 'ceiling N/A · gate governs', kind: 'ceil' },
      { text: 'disqualified at screen', kind: 'prov' },
    ],
    whatISee:
      'A regional home health and home-based care provider — skilled nursing and therapy in the home, Medicare-weighted — at roughly $9M adjusted EBITDA on $61M revenue. <span class="qtag cim">CIM</span> The asking range implies an ~8.0× entry, which would be fair for the asset. But I ran the hard-pass screen first, as I always do, and it tripped. I am not going to build a full bull case for a disqualified deal — that would be dishonest. I will say what the asset is, concede the floor the gate caps, and defer.',
    screen: {
      label: 'Hard-pass screen',
      clear: false,
      html: 'Tripped. Single-payer concentration <em>above the 30% line</em> — the bright line, on the payer axis. <span class="qtag cim">CIM p.20</span> That is an automatic short-circuit, and the framework is explicit: I do not get to build a conviction case past it. EBITDA is in band, the lane is right, the process looks credible — but one trigger is enough, and this one is over the line. The screen governs the read; everything below is what the asset would have been.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'In lane, and the model is the right kind. Home-based care is a named preferred lane, and this is recurring, episode-driven skilled care in the home — not facility-heavy, not CME, not an out-of-network model. <span class="qtag cim">CIM</span> The lane is not the problem. If anything it is what makes this a near miss rather than an easy no.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'This is where it breaks, and it is not close. Revenue is concentrated in a single payer above one-third of the business and rides reimbursement set administratively. <span class="qtag cim">CIM p.19</span> A rate action or a non-renewal takes a third of revenue at once. The Floor has veto, and it uses it here: the downside is not protected, it is exposed. I do not get to grade past this, and I am not going to try.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'One lever that matters, and it is the hardest one. Payer diversification — re-weighting the book toward commercial and Medicare Advantage — is the only thing that addresses the core risk, and it is a multi-year operating project, not a closing-day fix. <span class="qtag ic">IC</span> Tuck-ins and route density help the operating margin but not the concentration. A single hard lever is not a value-creation case.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: 'The price would be fair — 8.0× for an in-lane home-health asset sits where the comparables landed. <span class="qtag comp">COMP</span> But the gate moots the comparison. I cannot grade quality above B− while a single payer governs a third of revenue, and the framework will not collapse a clean entry against a capped grade into a pursue. The cardinal error here would be paying any multiple for a floor that is not there.',
      },
    ],
    tensions: [
      'My instinct is to build the case — the lane is right, the operator is real, the price is fair. But the screen tripped before any of that gets to matter, and building a bull case on a disqualified deal is exactly the dishonesty this council exists to avoid. I concede it.',
      'The Steward would grade the asset B− on its merits; the gate says the grade is academic. We agree on what the asset is. We agree it does not matter, because the floor is gone.',
      'I expect no fight with the Examiner here, and that itself is the signal. When the conviction council does not even contest the kill, the deal is dead.',
    ],
    questions: [
      'Is the single largest payer truly one relationship, or several separable contracts that diligence could show diversify the book below the line?',
      'Realistic timeline and cost to re-weight toward commercial and Medicare Advantage — is there any path that closes the gate inside a hold?',
      'Is there a price at which the concentration is paid for, or is this simply out of bounds regardless of entry?',
    ],
    closing: {
      label: 'My conviction read',
      html: 'Not a Ridgemont deal as it stands, and not because the asset is weak — because the floor is. In-lane home-based care, a capable operator, a fair entry, all real and all moot under a tripped gate. The asset would have graded near <em>B−</em> on a diversified book; with a single payer over the line, the grade is academic and the floor is gone.',
      move: 'The concentration itself. If diligence shows the single payer is several separable contracts, the gate reads differently and there is a deal to argue. Absent that, there is nothing to argue.',
      caveat:
        'I do not set the 1–10 score or the pursue / pass call. That is the IC Chair’s — but I will not pretend a disqualified deal is a conviction case to get there.',
    },
  },

  examiner: {
    lens: 'Scrutiny Council · what kills the deal',
    proposes: [
      { text: 'HARD STOP', kind: 'grade' },
      { text: 'payer concentration > 30%', kind: 'ceil' },
      { text: 'gate tripped at screen', kind: 'prov' },
    ],
    whatISee:
      'The same regional home-health asset the Partner sees, read for how it dies. ~$9M adjusted EBITDA on ~$61M revenue, Medicare-weighted, with a single dominant payer relationship. <span class="qtag cim">CIM</span> I do not need the deeper red-flag work on this one. I ran the kill screen, and it tripped on the first axis I tested. My job is to say so plainly and not soft-pedal it to keep a near-miss alive.',
    screen: {
      label: 'What I ran',
      clear: false,
      html: 'Tripped on the payer axis. The largest single payer is <em>over 30% of revenue</em> — the bright line — Medicare-weighted, with reimbursement set administratively and no commercial book of size to offset a rate move. <span class="qtag cim">CIM p.20</span> Single-customer concentration over roughly 30% is a hard-pass trigger. This is a hard stop, and I am recommending the Chair treat it as a pass regardless of the conviction case.',
    },
    pillars: [
      {
        name: 'The Contrarian',
        lens: 'who can hurt you',
        html: 'The kill, and it is named in the document, not hidden. One payer over a third of revenue is the concentration nobody has to dig for here — it is on the payer schedule. <span class="qtag cim">CIM p.20</span> The strongest honest bear case is the simplest: one rate action or one non-renewal and a third of the business is gone at once. That is the gate, and it is over the line.',
      },
      {
        name: 'The Sentinel',
        lens: 'the criterion that kills healthcare deals',
        html: 'Reimbursement dependence on top of the concentration. The revenue rides Medicare home-health rates set administratively — PDGM and any rate move flow straight through to EBITDA. <span class="qtag cim">CIM p.19</span> Even at a lower concentration this would be a live reimbursement risk; with a single payer over 30%, it compounds the kill rather than sitting beside it.',
      },
      {
        name: 'The Auditor',
        lens: 'is the EBITDA real',
        html: 'Moot, and I will say so rather than manufacture a second kill. The data ties and the operator is clinically capable. <span class="qtag qoe">QoE</span> The earnings quality does not change the verdict — the gate already governs — and inflating an earnings concern to look thorough on a deal that is already dead would be its own failure. One real kill, honestly sized.',
      },
      {
        name: 'The Reader',
        lens: 'can you trust the numbers',
        html: 'Operator-led and credible; not the issue. <span class="qtag qoe">QoE</span> A strong team is real downside protection on a fine asset — but it does not buy back a tripped gate, and I will not let "good management" be the thing that talks a hard stop down. The Reader clears; the Contrarian does not.',
      },
    ],
    tensions: [
      'There is no live tension with the Partner here — they conceded the gate before I raised it. That is itself the finding: when the conviction council does not contest the kill, the deal is dead, and the Chair should read the agreement as confirmation, not consensus to be smoothed.',
      'The Contrarian calls the concentration a hard stop on the evidence as it stands; the only thing that demotes it is a diligence finding that the single payer is several separable contracts. Until that exists, it is a hard stop, not a diligence-addressable concern.',
    ],
    questions: [
      'Full payer schedule: the single largest payer’s exact share, contract term, renewal history, and rate trajectory — is it one relationship or several?',
      'Referral-source concentration: how much volume comes from the top one to three referral relationships?',
      'PDGM and reimbursement exposure: sensitivity of EBITDA to a Medicare home-health rate move.',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'One kill, and it is fatal. Single-payer concentration <em>over 30%</em> of revenue <span class="qtag cim">CIM p.20</span> is a hard-pass trigger — a hard stop, not a material risk and not diligence-addressable as it stands. The asset underneath is real, the team is capable, the earnings tie; none of it buys back the floor. The firm’s own record says so: the concentration-heavy home-health entries, Pinnacle and Stonegate, returned 1.3× and 1.2× after payer actions. <span class="qtag chron">CHRON</span> Halcyon matches the cautionary set.',
      move: 'Whether the single payer is one contract or several. If diligence re-cuts it below the line, the hard stop demotes to a material risk and the deal is alive again. Until then, it is a pass.',
      caveat:
        'I build the case against the deal, not the verdict. The IC Chair sets the call — but I am flagging this one explicitly as a hard stop.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'A named preferred lane — recurring, episode-driven skilled care in the home, not facility-heavy or out-of-network. <span class="qtag cim">CIM</span>',
      examiner: 'In lane, no manufacturing or CME tail in the revenue. The lane is not where this dies.',
      contested: false,
    },
    {
      axis: 'Protected downside',
      partner:
        'The floor is gone. A single payer above one-third of revenue, riding reimbursement; a rate action or non-renewal takes a third of the business at once. <span class="qtag cim">CIM p.19</span>',
      examiner:
        'A hard stop, not a deduction. Single-payer concentration over 30% is the bright line, and it is tripped. <span class="qtag cim">CIM p.20</span>',
      contested: true,
      ruling:
        'The gate governs. Single-payer concentration <em>over 30%</em> is a confirmed hard-pass trigger — it short-circuits the score regardless of the conviction case. This is the axis that decides the deal, and it decides it a pass.',
    },
    {
      axis: 'Asset quality vs price',
      partner:
        'The price would be fair — 8.0× sits where the in-lane comparables landed. <span class="qtag comp">COMP</span> But the gate moots the comparison.',
      examiner:
        'Quality cannot be graded above B− while one payer governs a third of revenue, and a fair entry does not buy back a tripped gate.',
      contested: false,
    },
    {
      axis: 'Value creation',
      partner:
        'One lever that matters and it is the hardest: payer diversification, a multi-year operating project, not a closing-day fix. <span class="qtag ic">IC</span>',
      examiner:
        'A single hard lever aimed at the core risk is not a value-creation case — it is the thing that would have to be true before the deal is even alive.',
      contested: false,
    },
    {
      axis: 'Management & data',
      partner:
        'Operator-led and clinically capable; the data ties. Management is not the issue. <span class="qtag qoe">QoE</span>',
      examiner: 'Credible, and real downside protection on a fine asset — but a strong team does not buy back a tripped gate.',
      contested: false,
    },
  ],

  converse: {
    opening:
      'The gate is tripped — a single payer over 30% — and both councils agree it short-circuits the score. The only live question is whether diligence can re-cut it.',
    suggests: [
      'Why a pass, not just a low score?',
      'What would clear the gate?',
      'Is the asset any good underneath?',
      'Which of our deals does this look like?',
    ],
    rounds: [
      {
        q: 'Could the concentration be fixed?',
        contested: true,
        replies: [
          {
            voice: 'partner',
            role: '· the operator',
            html: 'Maybe — and it is the only question worth diligence here. If the "single payer" is really several separable contracts, or the book can be re-weighted toward commercial and Medicare Advantage on a credible timeline, the gate reads differently. <span class="qtag cim">CIM</span> But that is a multi-year operating project, not a closing-day fix, so I would have to underwrite it conservatively if at all.',
          },
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'And until that re-cut exists on paper, it is a hard stop, not a plan. <span class="qtag cim">CIM p.20</span> "It could be diversified" is a hope, not a contract. I do not demote a confirmed kill on the strength of a value-creation story the Operator himself grades as the hardest lever he has.',
          },
        ],
        ruling:
          '<em>The gate holds as a pass</em> on the evidence as it stands. If diligence shows the single payer is several separable contracts that re-cut the book below 30%, the hard stop demotes to a material risk and the deal comes back to the table. That finding is the swing factor — and it does not exist yet.',
      },
      {
        q: 'Is the asset any good underneath the gate?',
        contested: false,
        replies: [
          {
            voice: 'partner',
            role: '· the strategist',
            html: 'Yes — that is what makes it a near miss rather than an easy no. In-lane home-based care, recurring episode-driven demand, a capable operator, a fair entry at 8.0×. <span class="qtag cim">CIM</span> Strip out the concentration and this is a different conversation entirely.',
          },
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'Agreed, and that is exactly why the gate exists rather than a deduction. The firm’s own record: the diversified entries, Riverbend and Caldwell, returned 2.4× and 1.9×; the concentrated ones, Pinnacle and Stonegate, returned 1.3× and 1.2× after payer actions. <span class="qtag chron">CHRON</span> Halcyon’s concentration puts it with the second group. A good asset, the wrong floor.',
          },
        ],
      },
    ],
  },
}
