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
    rootQuestionId: "q_cheese_war_defense",
    questions: {
      q_cheese_war_defense: {
        id: "q_cheese_war_defense",
        text: "The President defended American cheese pride, but now our military allies are questioning our judgment. Is this administration prioritizing jokes over national defense partnerships?",
        depth: 0,
        answers: [
          {
            id: "a_defense_reassure",
            type: AnswerType.Reassure,
            text: "Our military partnerships remain rock solid. Defense cooperation operates on a different level than trade disputes, and our allies understand that.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.StrongPositive, // +8
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.StrongNegative, // -8
              outcome_cheese_public_rallies:
                OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_cheese_war_legal",
          },
          {
            id: "a_defense_challenge",
            type: AnswerType.Challenge,
            text: "The President stood up for American products and values. That's exactly the kind of leadership our allies want to see from America.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.ModerateNegative, // -6
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_cheese_public_rallies:
                OutcomeModifierWeight.StrongPositive, // +8
            },
          },
        ],
      },
      q_cheese_war_legal: {
        id: "q_cheese_war_legal",
        text: "But aren't you concerned that this sets a precedent for trade disputes being settled through personal comments rather than proper legal channels?",
        depth: 1,
        answers: [
          {
            id: "a_legal_inform",
            type: AnswerType.Inform,
            text: "All trade actions follow proper legal procedures. The Justice Department ensures compliance with international law and our constitutional obligations.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightPositive, // +4 -> +12 total
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative, // -4 -> -12 total
              outcome_cheese_public_rallies:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
            },
          },
          {
            id: "a_legal_deflect",
            type: AnswerType.Deflect,
            text: "The focus should be on the underlying trade imbalance that the President highlighted, not the specific way it came to light.",
            impacts: {},
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightNegative, // -4 -> +4 total
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive, // +4 -> -4 total
              outcome_cheese_public_rallies:
                OutcomeModifierWeight.SlightPositive, // +4 -> -4 total
            },
          },
        ],
      },
    },
  },
};
