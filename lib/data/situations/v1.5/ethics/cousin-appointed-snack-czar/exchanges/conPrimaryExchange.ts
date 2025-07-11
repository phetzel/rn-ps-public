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
    rootQuestionId: "q_czar_distraction",
    questions: {
      q_czar_distraction: {
        id: "q_czar_distraction",
        text: "Is creating a 'Snack Czar' position really the best use of this administration's time and taxpayer money right now?",
        depth: 0,
        answers: [
          {
            id: "a_distraction_deny",
            type: AnswerType.Deny,
            text: "This is not a major policy initiative. It's a minor administrative role being blown out of proportion. We remain focused on real issues.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_czar_nepotism_scandal:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_czar_unlikely_hero: OutcomeModifierWeight.SlightNegative, // -4
              outcome_czar_resigns: OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_distraction_deflect",
            type: AnswerType.Deflect,
            text: "Actually, improving efficiency in federal vending can save millions. Treasury sees this as a smart, fiscally conservative move.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_czar_nepotism_scandal:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_czar_unlikely_hero: OutcomeModifierWeight.SlightPositive, // +4
              outcome_czar_resigns: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_czar_savings",
          },
        ],
      },
      q_czar_savings: {
        id: "q_czar_savings",
        text: "Saving millions on snacks sounds implausible. Can you provide the data or Treasury models that back up that specific claim?",
        depth: 1,
        answers: [
          {
            id: "a_savings_inform",
            type: AnswerType.Inform,
            text: "The projections are based on bulk purchasing and negotiating new contracts with vendors, which this role will now centralize.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_czar_nepotism_scandal:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_czar_unlikely_hero: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_czar_resigns: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_savings_reassure",
            type: AnswerType.Reassure,
            text: "The exact savings will depend on the contracts negotiated, but we are confident there is a significant opportunity for efficiency here.",
            impacts: {},
            outcomeModifiers: {
              outcome_czar_nepotism_scandal:
                OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_czar_unlikely_hero: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_czar_resigns: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
