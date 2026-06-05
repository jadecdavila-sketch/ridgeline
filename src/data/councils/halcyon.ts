import type { CouncilData } from '../councilTypes'

/**
 * Halcyon Home Health, the committee behind the 4 / B− / Pass.
 * The disqualified near-miss: an in-lane home-based-care asset with a real
 * floor on paper, short-circuited by a single payer over the 30% concentration
 * line. The gate trips, so the debate is short. The Examiner leads with the
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
      'Hard pass. A single payer sits <em>above the 30% concentration line</em> <span class="qtag cim">CIM p.20</span>. That trips the gate, and the gate short-circuits the score. The Examiner ran it first; it tripped; the Partner didn’t contest it. The asset underneath is real: in-lane, operator-led, 8.0× and fair. On a diversified book it grades near B−. But a clean lane doesn’t buy back an unprotected floor. The trigger governs. One question for diligence: is the concentration one contractual cliff, or several separable contracts? Absent that re-cut, it’s a 4 of 10.',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'B− at best · moot', kind: 'grade' },
      { text: 'ceiling N/A · gate governs', kind: 'ceil' },
      { text: 'disqualified at screen', kind: 'prov' },
    ],
    whatISee:
      'Regional home health and home-based care: skilled nursing and therapy in the home, Medicare-weighted. About $9M adjusted EBITDA on $61M of revenue. <span class="qtag cim">CIM</span> The ask implies ~8.0×, which would be fair for the asset. But I ran the hard-pass screen first, the way I always do, and it tripped. I’m not building a bull case for a disqualified deal. I’ll say what the asset is, concede the floor the gate caps, and defer.',
    screen: {
      label: 'Hard-pass screen',
      clear: false,
      html: 'Tripped. Single-payer concentration <em>above the 30% line</em>, on the payer axis. <span class="qtag cim">CIM p.20</span> That’s an automatic short-circuit. The framework is explicit. I don’t get to build a conviction case past it. EBITDA’s in band, the lane’s right, the process looks credible. One trigger is enough, and this one’s over. Everything below is what the asset would have been.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'In lane, and the right kind of model. Home-based care is a named preferred lane, and this is recurring, episode-driven skilled care in the home. No facility weight, no CME, no out-of-network book. <span class="qtag cim">CIM</span> The lane isn’t the problem. It’s what makes this a near miss instead of an easy no.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'This is where it breaks, and it isn’t close. One payer carries more than a third of revenue, and that revenue rides reimbursement set administratively. <span class="qtag cim">CIM p.19</span> A rate action or a non-renewal takes a third of the business at once. The Floor has veto. It uses it here. The downside isn’t protected, it’s exposed. I don’t get to grade past this.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'One lever that matters, and it’s the hardest one. Payer diversification, re-weighting toward commercial and Medicare Advantage, is the only thing that touches the core risk. Multi-year operating project, not a closing-day fix. <span class="qtag ic">IC</span> Tuck-ins and route density help operating margin, not the concentration. One hard lever isn’t a value-creation case.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: '8.0× would be fair. It sits where the in-lane comparables landed. <span class="qtag comp">COMP</span> But the gate moots the comparison. I can’t grade quality above B− while a single payer governs a third of revenue, and the framework won’t collapse a clean entry against a capped grade into a pursue. The cardinal error is paying any multiple for a floor that isn’t there.',
      },
    ],
    tensions: [
      'My instinct is to build the case: right lane, real operator, fair price. The screen tripped before any of that gets to matter. Building a bull case on a disqualified deal is the dishonesty this council exists to avoid. I concede it.',
      'The Steward grades the asset B− on its merits. The gate says the grade is academic. We agree on what the asset is, and we agree it doesn’t matter. The floor is gone.',
      'I expect no fight with the Examiner here. That’s the signal. When the conviction council doesn’t even contest the kill, the deal is dead.',
    ],
    questions: [
      'Is the single largest payer one relationship, or several separable contracts that could diversify the book below the line?',
      'Realistic timeline and cost to re-weight toward commercial and Medicare Advantage. Any path that closes the gate inside a hold?',
      'Is there a price at which the concentration is paid for, or is this out of bounds regardless of entry?',
    ],
    closing: {
      label: 'My conviction read',
      html: 'Not a Ridgemont deal as it stands, and not because the asset is weak. The floor is. In-lane home-based care, a capable operator, an 8.0× entry, all real and all moot under a tripped gate. On a diversified book it grades near <em>B−</em>. With a single payer over the line, the grade is academic and the floor is gone.',
      move: 'The concentration itself. If diligence shows the single payer is several separable contracts, the gate reads differently and there’s a deal to argue. Absent that, nothing to argue.',
      caveat:
        'I don’t set the 1–10 score or the pursue / pass call. That’s the IC Chair’s. But I won’t pretend a disqualified deal is a conviction case to get there.',
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
      'Single payer over 30% of revenue. <span class="qtag cim">CIM p.20</span> The kill screen tripped on the first axis I tested, so I’m not running the deeper red-flag work. Same regional home-health asset the Partner sees: ~$9M adjusted EBITDA on ~$61M revenue, Medicare-weighted, one dominant payer. <span class="qtag cim">CIM</span> My job is to say so and not soft-pedal it to keep a near-miss alive.',
    screen: {
      label: 'What I ran',
      clear: false,
      html: 'Tripped on the payer axis. Largest single payer <em>over 30% of revenue</em>, Medicare-weighted, reimbursement set administratively, no commercial book of size to offset a rate move. <span class="qtag cim">CIM p.20</span> Single-customer concentration over ~30% is a hard-pass trigger. Hard stop. I’m recommending the Chair treat it as a pass regardless of the conviction case.',
    },
    pillars: [
      {
        name: 'The Contrarian',
        lens: 'who can hurt you',
        html: 'One payer, over a third of revenue. <span class="qtag cim">CIM p.20</span> Named in the document, on the payer schedule. Nobody has to dig for it. The bear case is the simplest one: one rate action or one non-renewal, and a third of the business is gone at once. That’s the gate, and it’s over the line.',
      },
      {
        name: 'The Sentinel',
        lens: 'the criterion that kills healthcare deals',
        html: 'Reimbursement dependence stacked on the concentration. Revenue rides Medicare home-health rates set administratively. PDGM and any rate move flow straight through to EBITDA. <span class="qtag cim">CIM p.19</span> At a lower concentration this is a live reimbursement risk. With one payer over 30%, it compounds the kill.',
      },
      {
        name: 'The Auditor',
        lens: 'is the EBITDA real',
        html: 'Moot, and I’ll say so rather than manufacture a second kill. The data ties and the operator is clinically capable. <span class="qtag qoe">QoE</span> Earnings quality doesn’t change the verdict. The gate already governs. Inflating a concern to look thorough on a dead deal is its own failure. One real kill, honestly sized.',
      },
      {
        name: 'The Reader',
        lens: 'can you trust the numbers',
        html: 'Operator-led and credible. Not the issue. <span class="qtag qoe">QoE</span> A strong team is real downside protection on a fine asset. It doesn’t buy back a tripped gate, and I won’t let good management talk a hard stop down. The Reader clears. The Contrarian doesn’t.',
      },
    ],
    tensions: [
      'No live tension with the Partner. They conceded the gate before I raised it. That’s the finding. When the conviction council doesn’t contest the kill, the deal is dead, and the Chair should read the agreement as confirmation, not consensus to be smoothed.',
      'The Contrarian calls the concentration a hard stop on the evidence as it stands. The one thing that demotes it is a diligence finding that the single payer is several separable contracts. Until that exists, it’s a hard stop, not a diligence-addressable concern.',
    ],
    questions: [
      'Full payer schedule: the largest payer’s exact share, contract term, renewal history, rate trajectory. One relationship or several?',
      'Referral-source concentration: how much volume from the top one to three referral relationships?',
      'PDGM exposure: EBITDA sensitivity to a Medicare home-health rate move.',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'One kill, and it’s fatal. Single-payer concentration <em>over 30%</em> of revenue <span class="qtag cim">CIM p.20</span> is a hard-pass trigger. A hard stop, not a material risk, not diligence-addressable as it stands. The asset is real, the team is capable, the earnings tie. None of it buys back the floor. The firm’s own record says so: Pinnacle and Stonegate, the concentration-heavy home-health entries, returned 1.3× and 1.2× after payer actions. <span class="qtag chron">CHRON</span> Halcyon matches the cautionary set.',
      move: 'Whether the single payer is one contract or several. Re-cut it below the line in diligence and the hard stop demotes to a material risk. The deal is alive again. Until then, a pass.',
      caveat:
        'I build the case against the deal, not the verdict. The IC Chair sets the call. I’m flagging this one as a hard stop.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'A named preferred lane: recurring, episode-driven skilled care in the home, not facility-heavy or out-of-network. <span class="qtag cim">CIM</span>',
      examiner: 'In lane, no manufacturing or CME tail in the revenue. Not where this dies.',
      contested: false,
    },
    {
      axis: 'Protected downside',
      partner:
        'The floor is gone. One payer above a third of revenue, riding reimbursement. A rate action or non-renewal takes a third of the business at once. <span class="qtag cim">CIM p.19</span>',
      examiner:
        'A hard stop, not a deduction. Single-payer concentration over 30% is the bright line, and it’s tripped. <span class="qtag cim">CIM p.20</span>',
      contested: true,
      ruling:
        'The gate governs. Single-payer concentration <em>over 30%</em> is a confirmed hard-pass trigger. It short-circuits the score regardless of the conviction case. This axis decides the deal, and it decides it a pass.',
    },
    {
      axis: 'Asset quality vs price',
      partner:
        '8.0× would be fair. It sits where the in-lane comparables landed. <span class="qtag comp">COMP</span> The gate moots the comparison.',
      examiner:
        'Can’t grade quality above B− while one payer governs a third of revenue. A fair entry doesn’t buy back a tripped gate.',
      contested: false,
    },
    {
      axis: 'Value creation',
      partner:
        'One lever that matters, and it’s the hardest: payer diversification, a multi-year operating project, not a closing-day fix. <span class="qtag ic">IC</span>',
      examiner:
        'A single hard lever aimed at the core risk isn’t a value-creation case. It’s the thing that would have to be true before the deal is even alive.',
      contested: false,
    },
    {
      axis: 'Management & data',
      partner:
        'Operator-led and clinically capable. The data ties. Management isn’t the issue. <span class="qtag qoe">QoE</span>',
      examiner: 'Credible, and real downside protection on a fine asset. A strong team doesn’t buy back a tripped gate.',
      contested: false,
    },
  ],

  converse: {
    opening:
      'Gate tripped, one payer over 30%, and both councils agree it short-circuits the score. The only live question: can diligence re-cut it?',
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
            html: 'Maybe, and it’s the only question worth diligence. If the "single payer" is several separable contracts, or the book can re-weight toward commercial and Medicare Advantage on a credible timeline, the gate reads differently. <span class="qtag cim">CIM</span> But that’s a multi-year operating project, not a closing-day fix. I’d underwrite it conservatively, if at all.',
          },
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'Until that re-cut exists on paper, it’s a hard stop, not a plan. <span class="qtag cim">CIM p.20</span> "It could be diversified" is a hope. I don’t demote a confirmed kill on a value-creation story the Operator himself grades as his hardest lever.',
          },
        ],
        ruling:
          '<em>The gate holds as a pass</em> on the evidence as it stands. Show in diligence that the single payer is several separable contracts re-cutting the book below 30%, and the hard stop demotes to a material risk. The deal comes back to the table. That finding is the swing factor. It doesn’t exist yet.',
      },
      {
        q: 'Is the asset any good underneath the gate?',
        contested: false,
        replies: [
          {
            voice: 'partner',
            role: '· the strategist',
            html: 'Yes, that’s what makes it a near miss instead of an easy no. In-lane home-based care, recurring episode-driven demand, a capable operator, 8.0× entry. <span class="qtag cim">CIM</span> Strip out the concentration and this is a different conversation.',
          },
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'Agreed, and that’s why the gate exists rather than a deduction. The firm’s record: Riverbend and Caldwell, the diversified entries, returned 2.4× and 1.9×. Pinnacle and Stonegate, the concentrated ones, returned 1.3× and 1.2× after payer actions. <span class="qtag chron">CHRON</span> Halcyon’s concentration puts it with the second group. A good asset, the wrong floor.',
          },
        ],
      },
    ],
  },
}
