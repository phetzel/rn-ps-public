import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/types";

export const independentPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.IndependentPrimary,
  content: {
    rootQuestionId: "q_glitter_accountability",
    questions: {
      q_glitter_accountability: {
        id: "q_glitter_accountability",
        text: "Will the company responsible for this spill face any consequences, or will taxpayers be left to foot the bill for this sparkly mess?",
        depth: 0,
        answers: [
          {
            id: "a_accountability_deflect",
            type: AnswerType.Deflect,
            text: "Right now, our sole focus is on the cleanup and ensuring public safety. There will be time for accountability discussions later.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_glitter_contained: OutcomeModifierWeight.SlightNegative, // -4
              outcome_glitter_mess: OutcomeModifierWeight.SlightPositive, // +4
              outcome_glitter_tourist_trap: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_accountability_challenge",
            type: AnswerType.Challenge,
            text: "Let me be perfectly clear: the company responsible will be held fully accountable for every single cent of the cleanup cost.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_glitter_contained: OutcomeModifierWeight.SlightPositive, // +4
              outcome_glitter_mess: OutcomeModifierWeight.SlightNegative, // -4
              outcome_glitter_tourist_trap:
                OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_glitter_fines",
          },
        ],
      },
      q_glitter_fines: {
        id: "q_glitter_fines",
        text: "Beyond cleanup costs, will there be fines or criminal charges? What is being done to deter this from happening again?",
        depth: 1,
        answers: [
          {
            id: "a_fines_reassure",
            type: AnswerType.Reassure,
            text: "The DOJ is evaluating all legal options, including significant fines under the Clean Water Act, to set a strong precedent.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_glitter_contained: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_glitter_mess: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_glitter_tourist_trap: OutcomeModifierWeight.Neutral, // 0 -> -4 total
            },
          },
          {
            id: "a_fines_inform",
            type: AnswerType.Inform,
            text: "It's too early to talk about charges. The immediate priority is the emergency response, which the company is cooperating with fully.",
            impacts: {},
            outcomeModifiers: {
              outcome_glitter_contained: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_glitter_mess: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_glitter_tourist_trap:
                OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
            },
          },
        ],
      },
    },
  },
};
