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
        text: "The President defended cheese pride, but allies question our judgment. Is this administration prioritizing jokes over defense partnerships?",
        depth: 0,
        answers: [
          {
            id: "a_defense_reassure",
            type: AnswerType.Reassure,
            text: "Our military partnerships remain rock solid. Defense cooperation operates on a different level than trade disputes, and our allies understand that.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
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
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_cheese_war_legal",
          },
          {
            id: "a_defense_challenge",
            type: AnswerType.Challenge,
            text: "The President stood up for American products and values. That's exactly the kind of leadership our allies want to see from America.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative, // -4
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
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_legal_deflect",
            type: AnswerType.Deflect,
            text: "The focus should be on the underlying trade imbalance that the President highlighted, not the specific way it came to light.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
