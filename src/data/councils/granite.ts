import type { CouncilData } from '../councilTypes'

/**
 * Granite Dialysis Partners — the committee behind the 3 / C+ / Pass.
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
      'A trigger tripped, so I did not have to weigh a case. The model is reimbursement-dependent — government-weighted rates the firm cannot negotiate — with a live regulatory overhang stacked on top. <span class="qtag cim">CIM p.19</span> That is the screen condition, and it short-circuits the score regardless of the operating story. The Partner did not contest it; the Floor is exposed in exactly the way the framework refuses to underwrite. Quality caps at <em>C+</em>, and the 7.5× entry is moot — cheap does not buy back a rate-set floor. <span class="qtag chron">CHRON</span> <strong>Pass, 3 of 10.</strong>',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'capped C+', kind: 'grade' },
      { text: 'ceiling moot under the gate', kind: 'ceil' },
      { text: 'deferred · gate governs', kind: 'prov' },
    ],
    whatISee:
      'An outpatient dialysis operator — 40 clinics, roughly $18M adjusted EBITDA on ~$120M revenue, asking ~7.5×. <span class="qtag cim">CIM p.6</span> I ran the hard-pass screen before building anything, and it tripped. So this is not a conviction case; it is an honest account of what little floor an operating story would have had, and then a deferral to the Examiner and the Chair.',
    screen: {
      label: 'Hard-pass screen',
      clear: false,
      html: 'Tripped at the model gate. The revenue is government-weighted and rate-set, with limited commercial offset — a reimbursement-dependent model the screen guards against — and a live regulatory overhang sits on the sector. <span class="qtag cim">CIM p.18</span> EBITDA is in band at ~$18M, the one clean line, but a single trigger short-circuits the score. I do not build a bull case for a disqualified deal; I name what trips and stop.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'Near the gate, not safely inside it. Dialysis treatment is recurring and non-deferrable, but the economics ride government rate setting rather than a negotiated commercial book — a model that depends on reimbursement the firm cannot negotiate. <span class="qtag cim">CIM p.6</span> "Sells into healthcare" durability is not the test; this one fails the model test, not the end-market one.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'This is where it dies, and it is the Examiner\'s ground as much as mine. Volume is protected; price is not. Government-weighted reimbursement plus a regulatory overhang means a single rate or policy action resets the economics, and non-deferrable demand does not protect a rate-set floor. <span class="qtag cim">CIM p.18</span> The floor is exposed — the disqualifying condition, not a deduction.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'The levers do not reach the risk. Density and cost programs help margin at the edges, but no operating lever offsets a government rate reset or a regulatory action. <span class="qtag cim">CIM</span> The value case cannot underwrite the thing that governs the asset, so there is no lever to credit against the gate.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: 'Quality caps at <em>C+</em> while reimbursement and regulation govern the economics, and the 7.5× entry is moot. <span class="qtag data">DATA</span> A low multiple does not collapse against a capped grade into anything but a pass; the framework screens this model rather than pricing it. There is no walk-away ceiling to set on a deal the gate has already decided.',
      },
    ],
    tensions: [
      'There is no live tension on my side worth holding. The screen tripped before any pillar had a case to argue, and I will not manufacture a bull case to give the Chair a fight that the gate already settled.',
      'The one thing I would have leaned on — non-deferrable, recurring demand — is real and does not help. It protects volume, not price, and price is what the regulator and the payer control.',
    ],
    questions: [
      'Is there any structure — a real commercial offset to the government book, or a resolution of the regulatory overhang — that would move the model trigger? Absent one, the gate stands.',
      'What would an acceptable structure even require, sized against clinic-level economics and treatment-volume durability?',
    ],
    closing: {
      label: 'My conviction read',
      html: 'Not pursue-worthy on this council\'s merits, because there is no case to make once the model gate trips. <span class="qtag cim">CIM p.19</span> The most I can say is that the floor it would have had — recurring, non-deferrable demand — protects volume but not the rate-set price, which is the part that governs. I defer the call.',
      move: 'A real commercial offset or a regulatory resolution. Absent either, the model trigger holds and this is a pass at any price.',
      caveat:
        'I do not set the 1–10 score or the pursue / pass call. With a trigger tripped, that defers to the Examiner\'s confirmation and the IC Chair.',
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
      'A 40-clinic dialysis operator, ~$18M adjusted EBITDA on ~$120M revenue, asking ~7.5×. <span class="qtag cim">CIM p.6</span> I do not need the deeper kill list here. The screen trips at step zero: this is a reimbursement-dependent model with a live regulatory overhang, and that is a hard-pass trigger. I lead with it because everything past it is academic.',
    screen: {
      label: 'Kill screen',
      clear: false,
      html: '<strong>HARD PASS.</strong> Revenue is government-weighted and rate-set, concentrated in payers the firm cannot negotiate, with an active regulatory overhang on payment and oversight. <span class="qtag cim">CIM p.19</span> That is the out-of-network / reimbursement-dependent trigger, and concentration in government payers compounds it. EBITDA is in the $20–75M band at ~$18M — the only line that clears — but a single trigger short-circuits the score to a pass. The deeper red-flag work is moot.',
    },
    pillars: [
      {
        name: 'The Sentinel',
        lens: 'the trigger that kills this deal',
        html: 'This is the kill, and it is mine. Revenue rides a specific reimbursement mechanic — government-weighted rates set against the firm — and a rate action or policy change flows directly to margin with little to offset it. <span class="qtag cim">CIM p.18</span> Reimbursement is the single most common way a healthcare deal dies, and here it is structural to the sector, not a diligence fix. Hard stop.',
      },
      {
        name: 'The Sentinel · payer mix',
        lens: 'Medicaid & government concentration',
        html: 'The payer mix is the aggravator. Revenue is concentrated in government payers — the kind of mix that is one budget cycle from a haircut — and a model leaning on rates the firm cannot negotiate has no commercial offset to absorb a cut. <span class="qtag cim">CIM p.19</span> Concentration in rate-set payers compounds the model trigger above; it does not stand alone, it stacks.',
      },
      {
        name: 'The Sentinel · overhang',
        lens: 'the live regulatory cloud',
        html: 'A regulatory tailwind cuts both ways, and this one is pointed the wrong way. There is a live overhang on payment and oversight in the sector — a rule that can reset the economics before any operating improvement lands. <span class="qtag cim">CIM p.18</span> I size it as a tail that is already active, not a hypothetical, and it is exactly the exposure the framework refuses to underwrite.',
      },
      {
        name: 'The Contrarian',
        lens: 'the bear case the record confirms',
        html: 'The bear case is not a hypothesis here; it is the record. Every reimbursement-dependent entry the firm holds returned below 1.7×, and the cheapest did the worst — Keystone 1.3×, Tidewater 1.1×, Basin 1.2×, all bought under 8×, Cedar at 1.6× the best and still under the hurdle. <span class="qtag chron">CHRON</span> Cheap did not save them; that is the lesson the gate encodes.',
      },
    ],
    tensions: [
      'There is no tension to hold once the trigger trips. The Auditor and the Reader have no work to do — operationally the team is competent and the data ties, and it does not matter, because the kill is the model, not the operator.',
      'The only thing the Partner would have leaned on, non-deferrable demand, I read the same way they do: it protects volume, not the rate-set price. We do not disagree; we both arrive at the gate.',
    ],
    questions: [
      'What is the government-versus-commercial revenue share, the rate history, and the exposure to the pending regulatory action — the figures that would have to change for the trigger to clear?',
      'What is the nature, timeline, and outcome range of the regulatory overhang, and the EBITDA sensitivity to each?',
      'Is there any path to a negotiated commercial book that would reduce the rate-set dependence — the one structure that could move the model trigger?',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'One kill, and it is a hard stop: a reimbursement-dependent model with a live regulatory overhang and government-payer concentration. <span class="qtag cim">CIM p.19</span> It is not surmountable on the materials shown — it is structural to the sector, not a diligence item — and the realized record confirms cheap entries in this set underperformed regardless. <span class="qtag chron">CHRON</span> I recommend the Chair treat it as a pass regardless of conviction.',
      move: 'A commercial offset or a regulatory resolution would be the only finding that moves this. Neither is evidenced; absent one, the hard stop holds.',
      caveat:
        'I build the case against the deal, not the verdict. With a confirmed hard stop, I hand the IC Chair a trigger to honor, not a number to set.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'Near the model gate, not safely inside it: recurring, non-deferrable dialysis, but economics that ride government rate setting rather than a negotiated commercial book. <span class="qtag cim">CIM p.6</span>',
      examiner:
        'A reimbursement-dependent model the screen guards against. Tested the model, not the label — it fails on the model. <span class="qtag cim">CIM</span>',
      contested: false,
    },
    {
      axis: 'Protected downside',
      partner:
        'Volume is protected; price is not. Government-weighted reimbursement plus a live regulatory overhang means a single rate or policy action resets the economics. <span class="qtag cim">CIM p.18</span>',
      examiner:
        'The floor is exposed, and this is the kill. Reimbursement the firm cannot negotiate, with a regulatory overhang and government-payer concentration stacked on it — a hard stop. <span class="qtag cim">CIM p.19</span>',
      contested: true,
      ruling:
        'The disqualifier sits here. A rate-set floor with a live overhang is not a protected downside — it is the screen condition. <em>Trigger tripped</em>; non-deferrable demand protects volume, not price, and price is what governs. The verdict is set on this axis alone.',
    },
    {
      axis: 'Asset quality vs price',
      partner:
        'Quality caps at C+; the 7.5× entry is cheap and moot. A low multiple does not collapse against a capped grade into anything but a pass. <span class="qtag data">DATA</span>',
      examiner:
        'The record settles it: every reimbursement-dependent entry returned below 1.7× regardless of how cheaply it was bought. Cheap did not protect the returns. <span class="qtag chron">CHRON</span>',
      contested: false,
    },
    {
      axis: 'Value creation',
      partner:
        'Density and cost programs help margin at the edges, but no operating lever offsets a government rate reset or a regulatory action. The levers do not reach the core risk. <span class="qtag cim">CIM</span>',
      examiner:
        'No lever underwrites away a structural reimbursement dependence. The value case cannot reach the thing that governs the asset — there is nothing to bank against the gate.',
      contested: false,
    },
    {
      axis: 'Management & data',
      partner:
        'Operationally competent and the data ties — and it does not matter. A capable team cannot underwrite away reimbursement dependence and a regulatory overhang. <span class="qtag data">DATA</span>',
      examiner:
        'No credibility issue, and no offset. The kill is the sector model, not the operator; a strong team does not buy back a tripped gate.',
      contested: false,
    },
  ],

  converse: {
    opening:
      'A trigger tripped — reimbursement-dependent model, live regulatory overhang. The debate is short; the gate already decided it.',
    suggests: [
      'Why the lowest score on the board?',
      'Is it salvageable?',
      'Doesn’t the cheap price help?',
      'Which of our deals does this look like?',
    ],
    rounds: [
      {
        q: 'The price is cheap — doesn’t that buy it back?',
        contested: true,
        replies: [
          {
            voice: 'partner',
            role: '· the steward',
            html: 'I read the 7.5× for context and set it aside, because price is moot here. Quality caps at C+ while reimbursement and regulation govern the economics, and a low multiple does not collapse against a capped grade into anything but a pass. <span class="qtag data">DATA</span> I would not even set a walk-away ceiling on a deal the gate has already decided.',
          },
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'And the record makes the point harder than I could. Every reimbursement-dependent entry the firm holds returned below 1.7×, and the cheapest did the worst — the low entries did not protect the returns. <span class="qtag chron">CHRON</span> A cheap price just sets a slightly lower floor on a risk you cannot control.',
          },
        ],
        ruling:
          '<em>The price does not enter.</em> A trigger tripped, so the model is screened, not deducted — and cheap has not saved this set in the realized record. <span class="qtag chron">CHRON</span> Pass at 7.5×, and the verdict would not move at 6×.',
      },
      {
        q: 'Is it salvageable with the right structure?',
        contested: false,
        replies: [
          {
            voice: 'examiner',
            role: '· scrutiny',
            html: 'Rarely, and only with structure the materials do not show. You would need a real commercial offset to the government book, or a resolution of the regulatory overhang, to move the model trigger. <span class="qtag cim">CIM</span> Neither is evidenced. As shown, this is a hard stop, not a diligence-addressable concern.',
          },
          {
            voice: 'partner',
            role: '· the floor',
            html: 'I read it the same way. Operating improvements do not reach the core risk — they protect volume, not the rate-set price. Absent a commercial offset or a regulatory resolution, the floor stays exposed, and that is the one thing this council will not underwrite at any price.',
          },
        ],
      },
    ],
  },
}
