import type { CouncilData } from '../councilTypes'

/**
 * Orchard Pediatric Group — the committee behind the 6 / B+ / Selective.
 * An unusually clean out-of-lane name: pediatrics is not a named lane, so the
 * bar rises, but the downside is genuinely protected and the de novo playbook
 * is proven. The fight is the lane call (Strategist vs Steward) and how much of
 * the floor a Medicaid-weighted payer mix really holds. Two contested axes, the
 * rest calm. No gate trips; the only constraint is the lane.
 */
export const orchard: CouncilData = {
  chair: {
    verdictLabel: 'Selective',
    verdict: 'selective',
    score: '6',
    grade: 'B+',
    entry: '9.5×',
    resolution:
      'Out of lane, so this is a <em>selective</em>, not a pursue — which is why it’s a 6, not a 7. But it’s a strong 6, not a marginal one: the downside is genuinely protected, the de novo playbook is proven, and 9.5× sits just under the ceiling a B+ earns. <em>I held the lane call as a conscious judgment, not a pass</em> — pediatrics is the closest out-of-lane name I’ve seen to the core services lanes. Two things keep me at selective rather than pursue: the lane itself, and a Medicaid-weighted payer mix the councils haven’t yet sized.',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'B+ asset', kind: 'grade' },
      { text: 'walk-away ~10×', kind: 'ceil' },
      { text: 'out of lane · selective', kind: 'prov' },
    ],
    whatISee:
      'A pediatric primary and specialty care group — roughly $10M adjusted EBITDA on ~$54M revenue, 31 clinics, asking near 9.5×. <span class="qtag cim">CIM</span> Pediatrics is not one of the named lanes, so I’m a selective from the first line, not a clean pursue. But it’s the closest out-of-lane name I’ve underwritten: a recurring visit-based services model, not facility-heavy or out-of-network, adjacent to the core lanes. The case has to earn the out-of-lane call — and here, unusually, the downside helps it do that.',
    screen: {
      label: 'Hard-pass screen',
      clear: true,
      html: 'None is close. Not facility-heavy, CME, or out-of-network — recurring pediatric services. <span class="qtag cim">CIM</span> EBITDA is ~$10M, inside the $20–75M band on revenue, on the smaller side but clear. No single payer is near the 30% line across 31 clinics, though the Medicaid share is one I’d confirm. <span class="qtag data">DATA</span> The constraint here is not a gate; it is the out-of-lane judgment and the payer mix behind it.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'Out of the cleanest lane — but with a named reason, not enthusiasm. Pediatric primary care is recurring, visit-based, and about as non-deferrable as demand gets, and it sits closer to the core services lanes than most out-of-lane names. <span class="qtag cim">CIM p.7</span> An out-of-lane yes needs a specific, defensible reason; here it’s the demand durability and the model shape, not a story about an end market.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'The strongest pillar, and I’ll lean on it. Pediatric care is the spend a parent cuts last, not first — a sick child doesn’t wait for the cycle — and the balance sheet carries no debt of note. <span class="qtag cim">CIM p.20</span> Recurring, non-deferrable visit volume is a floor I could stand on with growth flat. The one item to size before I bank it is the Medicaid share of the payer mix, where rates are administrative.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'Real, controllable levers on a clean platform: de novo clinics on a proven template (<em>Proven</em>), tuck-ins of independent pediatric practices (<em>Credible</em>), and a modest specialty-mix shift (<em>Credible</em>). <span class="qtag ic">IC</span> The math works at realistic ramp — but at ~$10M EBITDA the scale path is the thesis, and the de novo and tuck-in pipeline has to actually build a platform, not just maintain one.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: 'A B+ asset, held back from A− only by the lane distance and a Medicaid-weighted payer mix to verify. The ceiling B+ earns is roughly 10×; the 9.5× entry sits just under it — thin room, but priced to work. <span class="qtag chron">CHRON</span> Willow returned 2.6× at 9.1× and Sunrise 2.7× at 8.8×; the one entered above 10× returned 1.6×. Price is not the issue here — the lane is.',
      },
    ],
    tensions: [
      'The Strategist sees the closest out-of-lane name we’ve had to the core lanes; The Steward will not pay an in-lane multiple for an out-of-lane asset. Is 9.5× the right number for a B+ that isn’t in a named lane?',
      'The Floor credits a non-deferrable demand base; but a Medicaid-weighted payer mix is a rate set administratively, not by the market. How much of the floor is really protected once that share is sized?',
      'The whole scale case leans on de novo and tuck-in build-out at ~$10M EBITDA — and I can’t yet see the realized unit economics on recent builds.',
    ],
    questions: [
      'What is the payer mix — Medicaid versus commercial share — and the rate outlook in the largest markets?',
      'What are the de novo and tuck-in unit economics: cost, ramp, and realized returns on recent builds and acquisitions?',
      'What is the same-clinic growth bridge across price, volume, and specialty mix over the last eight quarters?',
    ],
    closing: {
      label: 'My conviction read',
      html: 'Pursue-worthy on this council’s merits, with the lane held consciously — a clean, well-run pediatric platform with a genuinely protected downside and a proven de novo playbook, at a fair entry. Proposed grade <em>B+</em>, walk-away ~10×, and the out-of-lane call made on a named reason, not enthusiasm.',
      move: 'The Medicaid share and the scale path. If the payer mix is manageable and the build-out is real, the lane call is the only thing in the way; if the Medicaid weight is high or the ramp is slow, the floor and the grade both soften.',
      caveat:
        'I do not set the 1–10 score or the pursue / selective / pass call. That is the IC Chair’s, after both councils are heard.',
    },
  },

  examiner: {
    lens: 'Scrutiny Council · what kills the deal',
    proposes: [
      { text: 'grade provisional', kind: 'grade' },
      { text: 'out-of-lane premium = no', kind: 'ceil' },
      { text: 'pending payer mix', kind: 'prov' },
    ],
    whatISee:
      'A genuinely good pediatric platform, read for where it breaks — and because it’s out of lane, my bar is higher than it would be for an in-lane name. <span class="qtag cim">CIM</span> The asset is real and the demand is durable; I’ll grant the Partner that. The questions are how much of the revenue rides on Medicaid rates, and whether a ~$10M platform can actually build the scale the thesis assumes.',
    screen: {
      label: 'What I ran',
      clear: true,
      html: 'Concentration across 31 clinics and payers — diversified, no axis near the 30% line. <span class="qtag data">DATA</span> EBITDA in band; recurring services, not facility-heavy, CME, or out-of-network. No gate trips. The risk here is not a bright line; it is the Medicaid weight in the payer mix and the open scale path at this size.',
    },
    pillars: [
      {
        name: 'The Sentinel',
        lens: 'reimbursement & payer mix',
        html: 'This is where I lead. Pediatrics carries Medicaid weight, and Medicaid rates are set administratively — one state budget cycle from a haircut. <span class="qtag cim">CIM p.20</span> The exact share and the rate outlook in the largest markets are not evidenced in what was loaded. <span class="qtag qoe">QoE</span> The Partner credits non-deferrable demand; demand can be durable and the rate still soft. Size the Medicaid share before you bank the floor.',
      },
      {
        name: 'The Strategist-Test',
        lens: 'is it close enough to underwrite',
        html: 'I test the out-of-lane call, not the label. Pediatric primary care monetizes like the core services lanes — recurring, visit-based, non-deferrable — which is why I grant it’s the closest out-of-lane name we’ve seen. <span class="qtag cim">CIM</span> But out of lane still raises the bar, and an out-of-lane B+ does not earn an in-lane multiple. The premium has to be earned, not assumed from adjacency.',
      },
      {
        name: 'The Contrarian',
        lens: 'scale & the bear case',
        html: 'The strongest honest bear case is size. At ~$10M EBITDA this is a smaller platform that needs the de novo and tuck-in plan to build real scale — and the realized unit economics on recent builds are not evidenced. <span class="qtag qoe">QoE</span> If the build-out is slow or the ramp economics are weaker than the template implies, the value-creation case is thinner than the model suggests, and the platform stays sub-scale.',
      },
      {
        name: 'The Auditor',
        lens: 'is the EBITDA real',
        html: 'In the deal’s favor: a clean data room, reported figures tie, and a modest adjustment bridge — owner comp, de novo ramp costs, one-time items. <span class="qtag qoe">QoE</span> I’d still trace it line by line, but nothing here reads as a soft bridge dressed as a fact. Management reads as a credibility multiplier, not a discount. This is the calmest part of my list.',
      },
    ],
    tensions: [
      'The Sentinel reads the Medicaid share as the live exposure on the floor; The Partner credits the demand as non-deferrable and treats the payer mix as a number to confirm, not a risk to price. The grade question is live on that share.',
      'I’ll grant the model is the closest out-of-lane name we’ve had; we disagree on whether closeness earns a near-in-lane 9.5×, or whether out of lane should hold the price below it.',
    ],
    questions: [
      'What is the Medicaid versus commercial share, and what is the rate outlook in the largest markets?',
      'What are the realized de novo and tuck-in unit economics — cost, ramp, returns — on recent builds and acquisitions?',
      'How dependent is clinician recruitment and retention on any single regional group?',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'No gate trips, and the asset is genuinely good — the demand is the most durable thing on the screen. But out of lane, with a Medicaid-weighted payer mix and a scale path that isn’t yet evidenced, I’d hold the grade at <em>B+</em> and treat 9.5× as the top of what an out-of-lane asset earns, not a starting point.',
      move: 'The Medicaid share. It decides whether the protected downside the bull case leans on is as solid as it needs to be — and the grade with it.',
      caveat:
        'I build the case against the deal, not the verdict. The IC Chair weighs my findings against the Partner’s and sets the call.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'Out of the cleanest lane, but with a named reason: recurring, visit-based pediatric care that sits closer to the core services lanes than most out-of-lane names. <span class="qtag cim">CIM</span>',
      examiner:
        'Pediatrics isn’t a named lane, so the bar rises. The model monetizes like the core lanes — granted — but adjacency doesn’t earn an in-lane multiple.',
      contested: true,
      ruling:
        'Out of lane → <em>selective</em>. It scores a 6, not a 7, precisely because the lane call is a conscious judgment, not a gimme — and the closeness to the core lanes is what keeps it a strong 6, not a marginal one.',
    },
    {
      axis: 'Protected downside',
      partner:
        'The strongest axis: pediatric care is about as non-deferrable as demand gets, with a clean, no-debt balance sheet. <span class="qtag cim">CIM</span>',
      examiner:
        'But a Medicaid-weighted payer mix is a rate set administratively, and the share isn’t evidenced. Demand can be durable and the rate still soft. <span class="qtag qoe">QoE</span>',
      contested: true,
      ruling:
        'Credit the non-deferrable demand; <em>size the Medicaid share</em> before banking the floor. That number is the difference between a strong 6 and a marginal one.',
    },
    {
      axis: 'Asset quality vs price',
      partner:
        'A B+ asset; the 9.5× entry sits just under the ~10× ceiling B+ earns. Willow worked at 9.1× for 2.6×, Sunrise at 8.8× for 2.7×. <span class="qtag chron">CHRON</span>',
      examiner:
        'Fair for the grade — price isn’t the issue here. The one entered above 10× returned 1.6×; 9.5× sits inside the bracket that has worked. <span class="qtag chron">CHRON</span>',
      contested: false,
    },
    {
      axis: 'Value creation',
      partner:
        'De novo clinics on a proven template, tuck-ins of independent practices, and a modest specialty-mix shift — clean platform levers. <span class="qtag ic">IC</span>',
      examiner:
        'The levers are real, but at ~$10M EBITDA the scale path is the thesis, and the realized de novo and tuck-in unit economics aren’t yet shown.',
      contested: false,
    },
    {
      axis: 'Management & data',
      partner:
        'Operator-led with a clean data room and a tidy balance sheet; reported figures tie and the adjustment bridge is modest. <span class="qtag qoe">QoE</span>',
      examiner:
        'Agreed — the calmest part of the file. Management reads as a credibility multiplier, not a discount. I’d still trace the bridge, but nothing reads as soft.',
      contested: false,
    },
  ],

  converse: {
    opening:
      'A clean, well-run pediatric platform with a genuinely protected downside — but the lane call and a Medicaid-weighted payer mix keep it selective, not a pursue.',
    suggests: [
      'Why a 6 and not a 7?',
      'How protected is the downside?',
      'How big is the Medicaid share?',
      'Compare to Willow and Sunrise',
    ],
    rounds: [
      {
        q: 'Why pursue at all, if it’s out of lane?',
        contested: true,
        replies: [
          {
            voice: 'partner',
            role: '· the strategist',
            html: 'Because out of lane isn’t an automatic no — it’s a judgment that needs a named reason, and here I have the cleanest one yet: pediatric primary care is recurring, visit-based, and about as non-deferrable as demand gets, sitting closer to the core lanes than any out-of-lane name we’ve looked at. <span class="qtag cim">CIM</span> The downside does the work the lane label can’t.',
          },
          {
            voice: 'examiner',
            role: '· the strategist-test',
            html: 'And I grant the model monetizes like the core lanes — that’s real. But out of lane still raises the bar, and an out-of-lane B+ doesn’t earn an in-lane price. <span class="qtag cim">CIM</span> The demand is durable; the open question is the Medicaid share underneath it, and that I can’t yet size. <span class="qtag qoe">QoE</span>',
          },
        ],
        ruling:
          'A <em>selective</em> — which is exactly why it’s a 6, not a 7. The lane call is mine to make consciously, and the closeness to the core lanes is what makes this a strong selective rather than a marginal one. The Medicaid share is the condition I’d put on it.',
      },
      {
        q: 'Which of our deals does this look like?',
        contested: false,
        replies: [
          {
            voice: 'partner',
            role: '· the steward',
            html: 'Physician-group and pediatric names. Willow returned 2.6× at 9.1× and Sunrise 2.7× at 8.8×, both entered under 10×. <span class="qtag chron">CHRON</span> Orchard at 9.5× sits inside that bracket — which is why price isn’t the worry here, the lane is.',
          },
          {
            voice: 'examiner',
            role: '· price',
            html: 'And the one entered above 10× returned 1.6×. <span class="qtag chron">CHRON</span> The record is clear that the sub-10× entries are where this set has worked. On price we agree — 9.5× is inside the band that has performed. My fight is the payer mix, not the multiple.',
          },
        ],
      },
    ],
  },
}
