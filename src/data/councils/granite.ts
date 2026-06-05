import type { CouncilData } from '../councilTypes'

/**
 * Granite Dialysis Partners, the committee behind the 3 / C+ / Pass.
 * A hard pass: dialysis demand is non-deferrable, but the revenue rides
 * government-weighted reimbursement the firm cannot negotiate, with a live
 * regulatory overhang on top. The Examiner leads with the tripped gate; the
 * Partner concedes the cap and declines to build a case for a disqualified
 * deal; the Chair states the pass and the trigger.
 */
export const granite: CouncilData = {
  chair: {
    verdictLabel: 'Pass',
    verdict: 'pass',
    score: '3',
    grade: 'C+',
    entry: '7.5×',
    resolution:
      'Pass, 3 of 10, 7.5×. A trigger tripped. Reimbursement-dependent model, government-weighted rates the firm can’t negotiate, and a live regulatory overhang on top. <span class="qtag cim">CIM p.19</span> That short-circuits the score; the operating story doesn’t get a vote. The Partner didn’t contest it. The Floor is exposed the exact way the framework won’t underwrite. Quality caps at <em>C+</em>. The 7.5× is moot. Cheap doesn’t buy back a rate-set floor. <span class="qtag chron">CHRON</span> <strong>Pass.</strong>',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'capped C+', kind: 'grade' },
      { text: 'ceiling moot under the gate', kind: 'ceil' },
      { text: 'deferred · gate governs', kind: 'prov' },
    ],
    whatISee:
      'Outpatient dialysis. 40 clinics, about $18M adjusted EBITDA on ~$120M of revenue, asking ~7.5×. <span class="qtag cim">CIM p.6</span> I ran the hard-pass screen before I built anything. It tripped. So I’m not bringing you a conviction case today; there isn’t one to bring. What I’ll do instead is walk you through the little floor an operating story would’ve had, and then hand it to the Examiner and the Chair.',
    screen: {
      label: 'Hard-pass screen',
      clear: false,
      html: 'Tripped at the model gate. Revenue is government-weighted and rate-set, with little commercial offset: the reimbursement-dependent model the screen guards against. And a live regulatory overhang sits on the sector. <span class="qtag cim">CIM p.18</span> EBITDA’s in band at ~$18M, the one clean line. One trigger short-circuits the score. I don’t build a bull case for a disqualified deal. I name what trips and stop.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'Near the gate, not inside it. The treatment is recurring and non-deferrable; people don’t skip dialysis. But the economics ride government rate setting, not a negotiated commercial book. That’s a model leaning on reimbursement the firm can’t touch. <span class="qtag cim">CIM p.6</span> “Sells into healthcare” durability was never the test. This one passes the end-market and fails the model.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'This is where it dies, and it’s the Examiner’s ground as much as mine. Volume is protected. Price isn’t. Government-weighted reimbursement plus a regulatory overhang means one rate action or one policy move resets the economics. Non-deferrable demand keeps the chairs full; it does nothing for a rate-set floor. <span class="qtag cim">CIM p.18</span> The floor is exposed. That’s the disqualifier, not a deduction.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'The levers don’t reach the risk. Clinic density and cost programs help margin at the edges. None of it offsets a government rate reset or a regulatory action. <span class="qtag cim">CIM</span> The value case can’t underwrite the thing that governs the asset, so I’ve got nothing to credit against the gate.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: 'Quality caps at <em>C+</em> with reimbursement and regulation governing the economics. The 7.5× entry is moot. <span class="qtag data">DATA</span> A low multiple against a capped grade still lands on a pass. The framework screens this model; it doesn’t price it. So there’s no walk-away ceiling to set. The gate already decided the deal.',
      },
    ],
    tensions: [
      'No live tension on my side. The screen tripped before any pillar had a case to argue, and I won’t manufacture a bull case to hand the Chair a fight the gate already settled.',
      'The one thing I’d have leaned on is non-deferrable, recurring demand. It’s real. It doesn’t help. It protects volume, and the regulator and the payer set the price.',
    ],
    questions: [
      'Is there a structure, a real commercial offset to the government book, or a resolution of the overhang, that moves the model trigger? Absent one, the gate stands.',
      'What would an acceptable structure require, sized against clinic-level economics and treatment-volume durability?',
    ],
    closing: {
      label: 'My conviction read',
      html: 'Not pursue-worthy here, because there’s no case to make once the model gate trips. <span class="qtag cim">CIM p.19</span> The most I’ll say: the floor it would’ve had, recurring, non-deferrable demand, protects volume, and the rate-set price is the part that governs. I defer the call.',
      move: 'A real commercial offset, or a regulatory resolution. Absent either, the trigger holds and this is a pass at any price.',
      caveat:
        'I don’t set the 1–10 or the pursue / pass. Trigger tripped, so that goes to the Examiner’s confirmation and the Chair.',
    },
  },

  examiner: {
    lens: 'Scrutiny Council · what kills the deal',
    proposes: [
      { text: 'HARD PASS', kind: 'grade' },
      { text: 'model gate tripped', kind: 'ceil' },
      { text: 'confirmed at screen', kind: 'prov' },
    ],
    whatISee:
      '40 clinics, ~$18M adjusted EBITDA on ~$120M revenue, ~7.5×. <span class="qtag cim">CIM p.6</span> I don’t need the deep kill list. The screen trips at step zero. Reimbursement-dependent model, live regulatory overhang. Hard-pass trigger. Everything past it is academic, so I lead with it.',
    screen: {
      label: 'Kill screen',
      clear: false,
      html: '<strong>HARD PASS.</strong> Revenue government-weighted and rate-set. Concentrated in payers the firm can’t negotiate. Active regulatory overhang on payment and oversight. <span class="qtag cim">CIM p.19</span> That’s the out-of-network / reimbursement-dependent trigger. Government-payer concentration compounds it. EBITDA in the $20–75M band at ~$18M, the only line that clears. One trigger short-circuits the score to a pass. The rest of the red-flag work is moot.',
    },
    pillars: [
      {
        name: 'The Sentinel',
        lens: 'the trigger that kills this deal',
        html: 'This is the kill, and it’s mine. Revenue rides one reimbursement mechanic: government-weighted rates set against the firm. A rate action or a policy change flows straight to margin with little to offset it. <span class="qtag cim">CIM p.18</span> Reimbursement is the most common way a healthcare deal dies. Here it’s structural to the sector, not a diligence fix. Hard stop.',
      },
      {
        name: 'The Sentinel · payer mix',
        lens: 'Medicaid & government concentration',
        html: 'Payer mix is the aggravator. Revenue concentrated in government payers, one budget cycle from a haircut. A model on rates the firm can’t negotiate has no commercial offset to absorb the cut. <span class="qtag cim">CIM p.19</span> This doesn’t stand alone. It stacks on the model trigger above.',
      },
      {
        name: 'The Sentinel · overhang',
        lens: 'the live regulatory cloud',
        html: 'A live overhang on payment and oversight in the sector. A rule that can reset the economics before any operating improvement lands. <span class="qtag cim">CIM p.18</span> I size it as a tail that’s already active, not a hypothetical. It’s the exposure the framework won’t underwrite. Show me the rule’s timeline and the EBITDA sensitivity at each outcome.',
      },
      {
        name: 'The Contrarian',
        lens: 'the bear case the record confirms',
        html: 'The bear case isn’t a hypothesis here. It’s the record. Every reimbursement-dependent entry the firm holds returned below 1.7×, and the cheapest did the worst. Keystone 1.3×, Tidewater 1.1×, Basin 1.2×, all bought under 8×. Cedar at 1.6× was the best of them and still missed the hurdle. <span class="qtag chron">CHRON</span> Cheap didn’t save them. That’s what the gate encodes.',
      },
    ],
    tensions: [
      'No tension to hold once the trigger trips. The Auditor and the Reader have nothing to do. Team’s competent, data ties, and it doesn’t matter. The kill is the model, not the operator.',
      'The Partner’s one card is non-deferrable demand. I read it the same way: it protects volume, not the rate-set price. We don’t disagree. We both land at the gate.',
    ],
    questions: [
      'Government-versus-commercial revenue share, rate history, exposure to the pending regulatory action. The figures that would have to change for the trigger to clear.',
      'Nature, timeline, and outcome range of the regulatory overhang, with EBITDA sensitivity to each.',
      'Any path to a negotiated commercial book that cuts the rate-set dependence, the one structure that moves the model trigger?',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'One kill, and it’s a hard stop. Reimbursement-dependent model, live regulatory overhang, government-payer concentration. <span class="qtag cim">CIM p.19</span> Not surmountable on the materials shown. Structural to the sector, not a diligence item. The realized record confirms cheap entries in this set underperformed anyway. <span class="qtag chron">CHRON</span> I recommend the Chair treat it as a pass regardless of conviction.',
      move: 'A commercial offset or a regulatory resolution. Only thing that moves this. Neither is evidenced. The hard stop holds.',
      caveat:
        'I build the case against the deal, not the verdict. Confirmed hard stop, so I hand the Chair a trigger to honor, not a number to set.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'Near the model gate, not inside it. Recurring, non-deferrable dialysis, but economics riding government rate setting instead of a commercial book. <span class="qtag cim">CIM p.6</span>',
      examiner:
        'Reimbursement-dependent model the screen guards against. Tested the model, not the label. Fails on the model. <span class="qtag cim">CIM</span>',
      contested: false,
    },
    {
      axis: 'Protected downside',
      partner:
        'Volume protected, price not. Government-weighted reimbursement plus a live overhang means one rate or policy action resets the economics. <span class="qtag cim">CIM p.18</span>',
      examiner:
        'Floor’s exposed. This is the kill. Reimbursement the firm can’t negotiate, with a regulatory overhang and government-payer concentration stacked on it. Hard stop. <span class="qtag cim">CIM p.19</span>',
      contested: true,
      ruling:
        '<em>Trigger tripped.</em> The disqualifier sits here. A rate-set floor under a live overhang isn’t a protected downside. It’s the screen condition. Non-deferrable demand protects volume, and price is what governs. Verdict set on this axis alone.',
    },
    {
      axis: 'Asset quality vs price',
      partner:
        'Quality caps at C+. The 7.5× is cheap and moot. A low multiple against a capped grade still lands on a pass. <span class="qtag data">DATA</span>',
      examiner:
        'The record settles it. Every reimbursement-dependent entry returned below 1.7×, however cheaply bought. Cheap didn’t protect the returns. <span class="qtag chron">CHRON</span>',
      contested: false,
    },
    {
      axis: 'Value creation',
      partner:
        'Density and cost programs help margin at the edges. No operating lever offsets a government rate reset or a regulatory action. The levers don’t reach the core risk. <span class="qtag cim">CIM</span>',
      examiner:
        'No lever underwrites away a structural reimbursement dependence. The value case can’t reach what governs the asset. Nothing to bank against the gate.',
      contested: false,
    },
    {
      axis: 'Management & data',
      partner:
        'Operationally competent, data ties, and it doesn’t matter. A capable team can’t underwrite away reimbursement dependence and a regulatory overhang. <span class="qtag data">DATA</span>',
      examiner:
        'No credibility issue. No offset either. The kill is the sector model, not the operator. A strong team doesn’t buy back a tripped gate.',
      contested: false,
    },
  ],

  converse: {
    opening:
      'Trigger tripped: reimbursement-dependent model, live regulatory overhang. Short debate. The gate already decided it.',
    suggests: [
      'Why the lowest score on the board?',
      'Is it salvageable?',
      'Doesn’t the cheap price help?',
      'Which of our deals does this look like?',
    ],
    rounds: [
      {
        q: 'The price is cheap. Doesn’t that buy it back?',
        contested: true,
        replies: [
          {
            voice: 'partner',
            role: '· the steward',
            html: 'I read the 7.5× for context and set it aside. Price is moot here. Quality caps at C+ with reimbursement and regulation governing the economics, and a low multiple against a capped grade still lands on a pass. <span class="qtag data">DATA</span> I wouldn’t set a walk-away ceiling on a deal the gate’s already decided.',
          },
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'The record makes the point harder than I could. Every reimbursement-dependent entry the firm holds returned below 1.7×, and the cheapest did the worst. The low entries didn’t protect the returns. <span class="qtag chron">CHRON</span> A cheap price just sets a slightly lower floor on a risk you can’t control.',
          },
        ],
        ruling:
          '<em>Price doesn’t enter.</em> Trigger tripped, so the model is screened, not deducted. Cheap hasn’t saved this set in the record. <span class="qtag chron">CHRON</span> Pass at 7.5×. Wouldn’t move at 6×.',
      },
      {
        q: 'Is it salvageable with the right structure?',
        contested: false,
        replies: [
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'Rarely, and only with structure the materials don’t show. You’d need a real commercial offset to the government book, or a resolution of the overhang, to move the model trigger. <span class="qtag cim">CIM</span> Neither is evidenced. As shown, this is a hard stop, not a diligence item.',
          },
          {
            voice: 'partner',
            role: '· the floor',
            html: 'Same read. Operating improvements don’t reach the core risk; they protect volume, not the rate-set price. Absent a commercial offset or a regulatory resolution, the floor stays exposed. That’s the one thing this council won’t underwrite at any price.',
          },
        ],
      },
    ],
  },
}
