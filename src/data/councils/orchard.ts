import type { CouncilData } from '../councilTypes'

/**
 * Orchard Pediatric Group: the committee behind the 6 / B+ / Selective.
 * An unusually clean out-of-lane name: pediatrics is not a named lane, so the
 * bar rises, but the downside is protected and the de novo playbook is proven.
 * The fight is the lane call (Strategist vs Steward) and how much of the floor a
 * Medicaid-weighted payer mix really holds. Two contested axes, the rest calm.
 * No gate trips; the only constraint is the lane.
 *
 * Voice reference for the whole product (see docs/VOICE_AND_TONE.md):
 * Partner warm and discursive, Examiner clipped and forensic, Chair terse.
 */
export const orchard: CouncilData = {
  chair: {
    verdictLabel: 'Selective',
    verdict: 'selective',
    score: '6',
    grade: 'B+',
    entry: '9.5×',
    resolution:
      'B+, Selective, 9.5×. Out of lane, so it’s a selective: a 6, not a 7. Strong 6, not a marginal one. The downside is protected, the de novo playbook is proven, and 9.5× sits just under the ceiling a B+ earns. I held the lane call as a judgment, not a reflex; pediatrics is the closest out-of-lane name I’ve seen to the core services lanes. Two things keep it short of pursue: the lane, and a Medicaid-weighted payer mix the councils haven’t sized. <span class="qtag data">DATA</span>',
  },

  partner: {
    lens: 'Conviction Council · the bull case',
    proposes: [
      { text: 'B+ asset', kind: 'grade' },
      { text: 'walk-away ~10×', kind: 'ceil' },
      { text: 'out of lane · selective', kind: 'prov' },
    ],
    whatISee:
      'Pediatric primary and specialty care group. About $10M of adjusted EBITDA on ~$54M of revenue, 31 clinics, asking near 9.5×. <span class="qtag cim">CIM</span> Pediatrics isn’t a named lane, so I’m a selective from the first line. But it’s the closest out-of-lane name I’ve underwritten: recurring, visit-based services, adjacent to the core lanes, nothing facility-heavy or out-of-network. The case has to earn the out-of-lane call. Here the downside helps it earn it.',
    screen: {
      label: 'Hard-pass screen',
      clear: true,
      html: 'Nothing’s close. Not facility-heavy, not CME, not out-of-network. Just recurring pediatric services. <span class="qtag cim">CIM</span> EBITDA’s ~$10M, inside the $20–75M band on revenue, on the smaller side but clear. Across 31 clinics no single payer sits near the 30% line. The Medicaid share I’d confirm. <span class="qtag data">DATA</span> The constraint isn’t a gate. It’s the out-of-lane judgment and the payer mix behind it.',
    },
    pillars: [
      {
        name: 'The Strategist',
        lens: 'sector & model fit',
        html: 'Out of the cleanest lane, but for a named reason. Pediatric primary care is recurring, visit-based, about as non-deferrable as demand gets, and it sits closer to the core services lanes than most out-of-lane names. <span class="qtag cim">CIM p.7</span> An out-of-lane yes needs a specific reason I can defend. Here it’s the demand durability and the model shape. Not a story about an end market.',
      },
      {
        name: 'The Floor',
        lens: 'protected downside',
        html: 'The strongest pillar, and I’ll lean on it. Pediatric care is the spend a parent cuts last. A sick child doesn’t wait for the cycle. The balance sheet carries no debt of note. <span class="qtag cim">CIM p.20</span> Recurring, non-deferrable visit volume is a floor I could stand on with growth flat. One item to size before I bank it: the Medicaid share, where rates are administrative.',
      },
      {
        name: 'The Operator',
        lens: 'value creation',
        html: 'Real levers on a clean platform. De novo clinics on a proven template: <em>Proven</em>. Tuck-ins of independent pediatric practices: <em>Credible</em>. A modest specialty-mix shift: <em>Credible</em>. <span class="qtag ic">IC</span> The math works at a realistic ramp. But at ~$10M EBITDA the scale path is the thesis, and the pipeline has to build a platform, not just maintain one.',
      },
      {
        name: 'The Steward',
        lens: 'asset quality vs price',
        html: 'A B+, held back from A− by the lane distance and a Medicaid-weighted payer mix I haven’t verified. The ceiling B+ earns is ~10×; the 9.5× entry sits just under it. Thin room, priced to work. <span class="qtag chron">CHRON</span> Willow returned 2.6× at 9.1×, Sunrise 2.7× at 8.8×. The one entered above 10× returned 1.6×. Price isn’t the issue here. The lane is.',
      },
    ],
    tensions: [
      'My Strategist sees the closest out-of-lane name we’ve had to the core lanes. My Steward won’t pay an in-lane multiple for an out-of-lane asset. So is 9.5× the right number for a B+ that isn’t in a named lane? That’s the one I keep circling.',
      'The Floor credits a non-deferrable demand base. But a Medicaid-weighted mix is a rate set administratively, not by the market. How much of the floor really holds once that share is sized?',
      'The whole scale case leans on de novo and tuck-in build-out at ~$10M EBITDA. And I can’t yet see the realized unit economics on the recent builds.',
    ],
    questions: [
      'Payer mix, Medicaid versus commercial share, and the rate outlook in the largest markets?',
      'De novo and tuck-in unit economics: cost, ramp, realized returns on recent builds and acquisitions?',
      'Same-clinic growth bridge across price, volume, and specialty mix, last eight quarters?',
    ],
    closing: {
      label: 'My conviction read',
      html: 'Pursue-worthy on this council’s merits, lane held consciously. A clean, well-run pediatric platform with a protected downside and a proven de novo playbook, at a fair entry. I’m proposing <em>B+</em>, a ~10× walk-away, and the out-of-lane call on a named reason.',
      move: 'The Medicaid share and the scale path. If the mix is manageable and the build-out is real, the lane call is the only thing in the way. If the Medicaid weight is high or the ramp is slow, the floor and the grade soften together.',
      caveat:
        'The 1–10 score and the pursue / selective / pass call aren’t mine. The Chair sets those once he’s heard us both.',
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
      'A good pediatric platform. I read it for where it breaks. Out of lane, my bar runs higher than for an in-lane name. <span class="qtag cim">CIM</span> The asset’s real, the demand’s durable; I’ll grant the Partner both. Two questions. How much of the revenue rides on Medicaid rates. Whether a ~$10M platform can build the scale the thesis assumes.',
    screen: {
      label: 'What I ran',
      clear: true,
      html: 'Ran concentration across 31 clinics and every payer axis. Diversified, nothing near the 30% line. <span class="qtag data">DATA</span> EBITDA in band. Recurring services: not facility-heavy, not CME, not out-of-network. No gate trips. The risk isn’t a bright line. It’s the Medicaid weight in the mix, and the open scale path at this size.',
    },
    pillars: [
      {
        name: 'The Sentinel',
        lens: 'reimbursement & payer mix',
        html: 'This leads. Pediatrics carries Medicaid weight, and Medicaid rates are set administratively: one state budget cycle from a haircut. <span class="qtag cim">CIM p.20</span> The exact share and the rate outlook in the largest markets: not in what was loaded. <span class="qtag qoe">QoE</span> The Partner credits non-deferrable demand. Demand holds and the rate still cuts. Size the Medicaid share before you bank the floor.',
      },
      {
        name: 'The Strategist-Test',
        lens: 'is it close enough to underwrite',
        html: 'I test the call, not the label. Pediatric primary care monetizes like the core lanes: recurring, visit-based, non-deferrable. Granted: the closest out-of-lane name we’ve seen. <span class="qtag cim">CIM</span> But out of lane raises the bar. An out-of-lane B+ doesn’t earn an in-lane multiple. The premium gets earned, not assumed from adjacency.',
      },
      {
        name: 'The Contrarian',
        lens: 'scale & the bear case',
        html: 'The honest bear case is size. ~$10M EBITDA, a smaller platform that needs the de novo and tuck-in plan to build real scale. The realized unit economics on recent builds: not evidenced. <span class="qtag qoe">QoE</span> Slow build-out, or ramp economics weaker than the template implies, and the value-creation case thins. The platform stays sub-scale.',
      },
      {
        name: 'The Auditor',
        lens: 'is the EBITDA real',
        html: 'In the deal’s favor. Clean data room, figures tie, modest adjustment bridge: owner comp, de novo ramp costs, one-time items. <span class="qtag qoe">QoE</span> I’d still trace it line by line. Nothing reads as a soft bridge dressed as fact. Management’s a credibility multiplier, not a discount. The calmest part of my list.',
      },
    ],
    tensions: [
      'The Sentinel reads the Medicaid share as the live exposure on the floor. The Partner credits the demand as non-deferrable and treats the mix as a number to confirm, not a risk to price. The grade question is live on that share.',
      'I’ll grant the model’s the closest out-of-lane name we’ve had. We disagree on whether closeness earns a near-in-lane 9.5×, or whether out of lane holds the price below it.',
    ],
    questions: [
      'Medicaid versus commercial share, and the rate outlook in the largest markets.',
      'Realized de novo and tuck-in unit economics, cost, ramp, returns, on recent builds and acquisitions.',
      'Clinician recruitment and retention: how dependent on any single regional group?',
    ],
    closing: {
      label: 'My scrutiny read',
      html: 'No gate trips. The asset’s good. The demand’s the most durable thing on the screen. But out of lane, with a Medicaid-weighted mix and a scale path not yet evidenced, I hold the grade at <em>B+</em> and treat 9.5× as the top of what an out-of-lane asset earns. Not a starting point.',
      move: 'The Medicaid share. It decides whether the downside the bull case leans on is as solid as it needs to be, and the grade with it.',
      caveat:
        'I build the case against the deal, not the verdict. The Chair weighs my findings against the Partner’s and sets the call.',
    },
  },

  axes: [
    {
      axis: 'Sector & model fit',
      partner:
        'Out of the cleanest lane, but for a named reason: recurring, visit-based pediatric care, sitting closer to the core services lanes than most out-of-lane names. <span class="qtag cim">CIM</span>',
      examiner:
        'Pediatrics isn’t a named lane. Bar rises. The model monetizes like the core lanes, granted, but adjacency doesn’t earn an in-lane multiple.',
      contested: true,
      ruling:
        'Out of lane → <em>selective</em>. A 6, not a 7: the lane call is a conscious judgment, not a gimme. The closeness to the core lanes is what keeps it a strong 6.',
    },
    {
      axis: 'Protected downside',
      partner:
        'The strongest axis: pediatric care is about as non-deferrable as demand gets, on a clean, no-debt balance sheet. <span class="qtag cim">CIM</span>',
      examiner:
        'A Medicaid-weighted mix is a rate set administratively, and the share isn’t evidenced. Demand holds, the rate still cuts. <span class="qtag qoe">QoE</span>',
      contested: true,
      ruling:
        'Credit the non-deferrable demand. <em>Size the Medicaid share</em> before banking the floor. That number splits a strong 6 from a marginal one.',
    },
    {
      axis: 'Asset quality vs price',
      partner:
        'A B+. The 9.5× entry sits just under the ~10× ceiling B+ earns. Willow worked at 9.1× for 2.6×, Sunrise at 8.8× for 2.7×. <span class="qtag chron">CHRON</span>',
      examiner:
        'Fair for the grade. Price isn’t the issue. The one entered above 10× returned 1.6×. 9.5× sits inside the bracket that’s worked. <span class="qtag chron">CHRON</span>',
      contested: false,
    },
    {
      axis: 'Value creation',
      partner:
        'De novo clinics on a proven template, tuck-ins of independent practices, a modest specialty-mix shift: clean platform levers. <span class="qtag ic">IC</span>',
      examiner:
        'Levers are real. But at ~$10M EBITDA the scale path is the thesis, and the realized de novo and tuck-in unit economics aren’t yet shown.',
      contested: false,
    },
    {
      axis: 'Management & data',
      partner:
        'Operator-led, clean data room, tidy balance sheet. Figures tie, adjustment bridge is modest. <span class="qtag qoe">QoE</span>',
      examiner:
        'Agreed: the calmest part of the file. Management’s a credibility multiplier, not a discount. I’d still trace the bridge; nothing reads soft.',
      contested: false,
    },
  ],

  converse: {
    opening:
      'Clean pediatric platform, protected downside. The lane call and a Medicaid-weighted mix keep it selective, not a pursue.',
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
            html: 'Out of lane isn’t an automatic no. It’s a judgment that needs a named reason, and here I have the cleanest one yet. Pediatric primary care is recurring, visit-based, about as non-deferrable as demand gets, sitting closer to the core lanes than any out-of-lane name we’ve looked at. <span class="qtag cim">CIM</span> The downside does the work the lane label can’t.',
          },
          {
            voice: 'examiner',
            role: '· the strategist-test',
            html: 'The model monetizes like the core lanes, that’s real, I grant it. But out of lane raises the bar, and an out-of-lane B+ doesn’t earn an in-lane price. <span class="qtag cim">CIM</span> The demand’s durable. The open question is the Medicaid share underneath it, and that I can’t yet size. <span class="qtag qoe">QoE</span>',
          },
        ],
        ruling:
          'A <em>selective</em>. That’s the 6, not a 7. The lane call is mine to make consciously, and the closeness to the core lanes makes it a strong selective. The Medicaid share is the condition I put on it.',
      },
      {
        q: 'Which of our deals does this look like?',
        contested: false,
        replies: [
          {
            voice: 'partner',
            role: '· the steward',
            html: 'Physician-group and pediatric names. Willow returned 2.6× at 9.1×, Sunrise 2.7× at 8.8×, both entered under 10×. <span class="qtag chron">CHRON</span> Orchard at 9.5× sits inside that bracket, which is why the worry here is the lane, not the price.',
          },
          {
            voice: 'examiner',
            role: '· price',
            html: 'And the one entered above 10× returned 1.6×. <span class="qtag chron">CHRON</span> The sub-10× entries are where this set has worked. On price we agree: 9.5× is inside the band that’s performed. My fight is the payer mix.',
          },
        ],
      },
    ],
  },
}
