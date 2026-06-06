import type { ComponentType } from 'react'
import { CypressScorecard } from '../components/scorecard/CypressScorecard'
import { CardinalScorecard } from '../components/scorecard/CardinalScorecard'
import { Scorecard } from '../components/scorecard/Scorecard'
import type { ChatItem } from '../components/chat/RidgelineAI'
import type { ScorecardData } from './scorecardTypes'
import { meridian } from './scorecards/meridian'
import { halcyon } from './scorecards/halcyon'
import { vantage } from './scorecards/vantage'
import { orchard } from './scorecards/orchard'
import { sterling } from './scorecards/sterling'
import { beacon } from './scorecards/beacon'
import { granite } from './scorecards/granite'

/** Build a registry entry from a data-driven ScorecardData object. */
function fromData(d: ScorecardData): ScorecardEntry {
  return { crumbName: d.crumbName, Body: () => <Scorecard data={d} />, chat: d.chat }
}

export interface ScorecardEntry {
  crumbName: string
  Body: ComponentType
  chat: { intro: string; placeholder: string; items: ChatItem[] }
}

const cypressChat = {
  intro:
    'I am working from everything behind this score: the CIM, the quality-of-earnings read, the comparable Ridgemont deals, and the REP healthcare framework. Ask why the call landed where it did, or push on it.',
  placeholder: 'Ask anything about Cypress Dental',
  items: [
    {
      q: 'Why pursue if it is out of lane?',
      a: 'Dental is not one of the named lanes, so the bar rises. This is a pursue with discipline. What earns the 7: a strong fragmented roll-up at a fair entry, revenue diversified across roughly 140 practices, and a credible value-add path. The out-of-lane call is a judgment the framework leaves to you, so it’s surfaced.<div class="src-tags"><span class="qtag cim">CIM</span><span class="qtag data">DATA</span></div>',
    },
    {
      q: 'What would trip a hard pass?',
      a: 'None is close. Not manufacturing, not CME, not out-of-network. EBITDA is about $22M, inside the $20 to 75M band. No practice or payer is near the 30 percent line; the network is diversified. No gate binds; the constraints are the out-of-lane judgment and price discipline.<div class="src-tags"><span class="qtag cim">CIM</span><span class="qtag data">DATA</span></div>',
    },
    {
      q: 'How protected is the downside?',
      a: 'Mixed. The recall and hygiene base is recurring and sticky. A slice of dental spend, ortho and cosmetic, is discretionary and can be deferred in a downturn. That is part of why it scores a 7, not an 8. The recurring base protects most of the floor; the elective portion is the soft spot to size.<div class="src-tags"><span class="qtag cim">CIM</span><span class="qtag qoe">QoE</span></div>',
    },
    {
      q: 'Which of our deals does this look like?',
      a: 'Dental names from the firm’s record, a thinner set because it is adjacent to the core lanes. Cedar Park anchors the upside at 8.9x and 2.8x. Maple Grove returned 2.0x at 9.3x. Ridgeview Orthodontics is the cautionary one, 10.4x for 1.6x. Cypress at 9.2x sits mid-band, closest to Cedar Park.<div class="src-tags"><span class="qtag chron">CHRON</span></div>',
    },
    {
      q: 'What are you least sure about?',
      a: 'The durability of organic growth and the discretionary share of revenue. The materials show same-practice growth in the mid-single digits. The split across price, volume, and elective mix is not evidenced in what was loaded. If it is mostly price or elective, the recurring-revenue case softens. That is the first banker question.<div class="src-tags"><span class="qtag qoe">QoE</span><span class="qtag cim">CIM</span></div>',
    },
  ] as ChatItem[],
}

const cardinalChat = {
  intro:
    'I am working from everything behind this score: the CIM, the quality-of-earnings read, the comparable Ridgemont deals, and the REP healthcare framework. Ask why the call landed where it did, or push on it.',
  placeholder: 'Ask anything about Cardinal',
  items: [
    {
      q: 'Why an 8 and not higher?',
      a: 'An 8 is the top of strong fit. It earns the preferred-sector and compliance-driven-demand bonuses and clears every gate. A 9 or 10 wants a de-risked value-add path. Here the manufacturer concentration and gross-to-net durability are diligence items, not yet resolved. Clear them well and it moves up.<div class="src-tags"><span class="qtag data">DATA</span><span class="qtag cim">CIM</span></div>',
    },
    {
      q: 'What would trip a hard pass?',
      a: 'A few bright lines, any one of which drops it to a 1 or 2. Single-customer or manufacturer concentration above 30 percent; the largest today is near 22 percent. EBITDA outside the $20 to 75M band; it is at $32M. An out-of-network-dependent model, which this is not. Or the loss of a credible value-add path.<div class="src-tags"><span class="qtag cim">CIM</span><span class="qtag data">DATA</span></div>',
    },
    {
      q: 'Is the downside really protected?',
      a: 'That is the core of the score. Revenue is recurring and refill-driven on therapies patients cannot defer, the spend a payer cuts last, with pricing and procurement leverage showing up in gross margin and FCF conversion running above the 50 percent the framework prefers, so the return holds with the exit multiple flat to entry. The one place the floor could crack is reimbursement, which is why it leads the risks.<div class="src-tags"><span class="qtag cim">CIM</span><span class="qtag qoe">QoE</span></div>',
    },
    {
      q: 'Which of our deals does this look like?',
      a: 'Specialty pharmacy and pharmacy-services names from the firm’s record. Summit Specialty Pharmacy anchors the upside at an 8.4x entry and 2.9x. PromptCare returned 2.4x at 8.6x. Vantage Infusion is the cautionary one, near 10x for 1.7x. Cardinal at 8.8x sits in the sub-9x bracket that has worked, closest to Summit.<div class="src-tags"><span class="qtag chron">CHRON</span></div>',
    },
    {
      q: 'What are you least sure about?',
      a: 'Reimbursement and payer durability. Gross-to-net and DIR-fee trends are not fully evidenced in what was loaded. A few limited-distribution contracts carry the margin. If a key manufacturer relationship or payer term moved, the thesis would need rework. That is the first diligence focus.<div class="src-tags"><span class="qtag cim">CIM</span><span class="qtag qoe">QoE</span></div>',
    },
  ] as ChatItem[],
}

export const scorecards: Record<string, ScorecardEntry> = {
  cypress: {
    crumbName: 'Cypress Dental Partners',
    Body: CypressScorecard,
    chat: cypressChat,
  },
  cardinal: {
    crumbName: 'Cardinal Specialty Pharmacy',
    Body: CardinalScorecard,
    chat: cardinalChat,
  },
  meridian: fromData(meridian),
  halcyon: fromData(halcyon),
  vantage: fromData(vantage),
  orchard: fromData(orchard),
  sterling: fromData(sterling),
  beacon: fromData(beacon),
  granite: fromData(granite),
}
