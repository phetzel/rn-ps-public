import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/types";

export const conPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.ConPrimary,
  content: {
    rootQuestionId: "q_nap_act_nanny",
    questions: {
      q_nap_act_nanny: {
        id: "q_nap_act_nanny",
        text: "A federally mandated nap time? Isn't this the ultimate example of nanny-state overreach? Where does the government's role in our lives end?",
        depth: 0,
        answers: [
          {
            id: "a_nap_act_challenge",
            type: AnswerType.Challenge,
            text: "This isn't about control; it's about competitiveness. Other countries are adopting modern workplace practices, and we can't be left behind.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_nap_productivity_boost:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_nap_uproar: OutcomeModifierWeight.SlightNegative, // -4
              outcome_nap_plan_paused: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_nap_act_cost",
          },
          {
            id: "a_nap_act_reassure",
            type: AnswerType.Reassure,
            text: "I understand the concern, but this isn't a mandate for your home. It's an occupational health standard, like workplace safety rules.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_nap_productivity_boost:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_nap_uproar: OutcomeModifierWeight.SlightPositive, // +4
              outcome_nap_plan_paused: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_nap_act_admit",
            type: AnswerType.Admit,
            text: "It is an unusual proposal, and we recognize the implementation will be complex. We're open to feedback on making it work for everyone.",
            impacts: {},
            outcomeModifiers: {
              outcome_nap_productivity_boost:
                OutcomeModifierWeight.ModerateNegative, // -6
              outcome_nap_uproar: OutcomeModifierWeight.Neutral, // 0
              outcome_nap_plan_paused: OutcomeModifierWeight.ModeratePositive, // +6
            },
          },
        ],
      },
      q_nap_act_cost: {
        id: "q_nap_act_cost",
        text: "What about the cost? Forcing businesses to pay employees while they sleep sounds like a direct hit to their bottom line and the broader economy.",
        depth: 1,
        answers: [
          {
            id: "a_nap_cost_inform",
            type: AnswerType.Inform,
            text: "Economic models show that the productivity gains from rested workers will more than offset the cost of the break time within two quarters.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_nap_productivity_boost:
                OutcomeModifierWeight.ModeratePositive, // +6
              outcome_nap_uproar: OutcomeModifierWeight.ModerateNegative, // -6
              outcome_nap_plan_paused: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_nap_cost_deflect",
            type: AnswerType.Deflect,
            text: "Focusing solely on the cost ignores the huge price we're already paying for burnout, workplace accidents, and employee turnover.",
            impacts: {},
            outcomeModifiers: {
              outcome_nap_productivity_boost:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_nap_uproar: OutcomeModifierWeight.SlightNegative, // -4
              outcome_nap_plan_paused: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
