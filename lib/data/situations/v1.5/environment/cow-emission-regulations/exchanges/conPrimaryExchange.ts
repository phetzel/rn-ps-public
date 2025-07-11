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
    rootQuestionId: "q_cow_overreach",
    questions: {
      q_cow_overreach: {
        id: "q_cow_overreach",
        text: "You want to put backpacks on cows. Isn't this a perfect example of absurd, costly government overreach that will crush our ranchers?",
        depth: 0,
        answers: [
          {
            id: "a_overreach_deflect",
            type: AnswerType.Deflect,
            text: "This is about American innovation tackling a tough problem. We're investing in technology that makes our agriculture more sustainable.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_cow_tech_boom: OutcomeModifierWeight.SlightPositive, // +4
              outcome_cow_farm_rebellion: OutcomeModifierWeight.Neutral, // 0
              outcome_cow_program_delayed: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_overreach_challenge",
            type: AnswerType.Challenge,
            text: "The cost of doing nothing about methane emissions is far greater. We can't ignore a major source of pollution just because the solution seems unusual.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cow_tech_boom: OutcomeModifierWeight.SlightPositive, // +4
              outcome_cow_farm_rebellion: OutcomeModifierWeight.SlightPositive, // +4
              outcome_cow_program_delayed: OutcomeModifierWeight.StrongNegative, // -8
            },
            followUpId: "q_cow_cost_benefit",
          },
        ],
      },
      q_cow_cost_benefit: {
        id: "q_cow_cost_benefit",
        text: "But ranchers say the cost of this tech far outweighs any environmental benefit. Has Treasury done a serious cost-benefit analysis?",
        depth: 1,
        answers: [
          {
            id: "a_cost_inform",
            type: AnswerType.Inform,
            text: "Yes, Treasury's analysis shows significant long-term economic upside, including new tech-sector jobs and potential for carbon credit trading.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cow_tech_boom: OutcomeModifierWeight.SlightPositive, // +4
              outcome_cow_farm_rebellion: OutcomeModifierWeight.SlightNegative, // -4
              outcome_cow_program_delayed: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_cost_deny",
            type: AnswerType.Deny,
            text: "This isn't just about dollars and cents. It's a moral imperative. You can't put a price tag on protecting our planet for future generations.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_cow_tech_boom: OutcomeModifierWeight.SlightNegative, // -4
              outcome_cow_farm_rebellion: OutcomeModifierWeight.SlightPositive, // +4
              outcome_cow_program_delayed: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
