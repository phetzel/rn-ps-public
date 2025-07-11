import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/types";

export const libPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.LibPrimary,
  content: {
    rootQuestionId: "q_cow_legal",
    questions: {
      q_cow_legal: {
        id: "q_cow_legal",
        text: "Ranching groups are already preparing massive lawsuits. Is the administration prepared for years of legal battles over this mandate?",
        depth: 0,
        answers: [
          {
            id: "a_legal_admit",
            type: AnswerType.Admit,
            text: "We anticipate legal challenges, yes. It's a complex issue, and the DOJ is working with ranchers to find a path forward that avoids the courts.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cow_tech_boom: OutcomeModifierWeight.SlightNegative, // -4
              outcome_cow_farm_rebellion: OutcomeModifierWeight.SlightNegative, // -4
              outcome_cow_program_delayed: OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_legal_reassure",
            type: AnswerType.Reassure,
            text: "We are on very firm legal ground. Existing environmental laws give us the authority to regulate major sources of pollution, which this is.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cow_tech_boom: OutcomeModifierWeight.SlightPositive, // +4
              outcome_cow_farm_rebellion: OutcomeModifierWeight.SlightPositive, // +4
              outcome_cow_program_delayed: OutcomeModifierWeight.StrongNegative, // -8
            },
            followUpId: "q_cow_support",
          },
        ],
      },
      q_cow_support: {
        id: "q_cow_support",
        text: "Instead of a stick, what about a carrot? Have you considered subsidizing this technology for farmers instead of mandating it?",
        depth: 1,
        answers: [
          {
            id: "a_support_inform",
            type: AnswerType.Inform,
            text: "The current proposal includes significant tax credits and subsidies to help ranchers with the initial cost of adoption. It's not just a mandate.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cow_tech_boom: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_cow_farm_rebellion: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_cow_program_delayed: OutcomeModifierWeight.Neutral, // 0 -> -8 total
            },
          },
          {
            id: "a_support_challenge",
            type: AnswerType.Challenge,
            text: "Subsidies alone are not enough to drive the rapid, large-scale adoption needed to meet our climate goals. A mandate is necessary.",
            impacts: {},
            outcomeModifiers: {
              outcome_cow_tech_boom: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_cow_farm_rebellion: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_cow_program_delayed: OutcomeModifierWeight.StrongNegative, // -8 -> -16 total
            },
          },
        ],
      },
    },
  },
};
