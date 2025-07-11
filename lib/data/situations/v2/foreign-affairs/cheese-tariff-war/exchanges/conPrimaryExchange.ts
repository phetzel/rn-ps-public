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
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
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
          {
            id: "a_defense_admit",
            type: AnswerType.Admit,
            text: "The President realizes that comment could have been better phrased. We're focused on resolving this diplomatically and strengthening our partnerships.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.ModeratePositive, // +6
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.ModerateNegative, // -6
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_defense_inform",
            type: AnswerType.Inform,
            text: "The Justice Department confirms all our trade actions comply with international law and WTO rules. We follow proper legal procedures.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.Homeland]: {
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
            id: "a_defense_deny",
            type: AnswerType.Deny,
            text: "This isn't about national security concerns. Homeland Security confirms there are no domestic threats from this trade disagreement.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
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
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
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
            followUpId: "q_cheese_economic_impact",
          },
          {
            id: "a_legal_deflect",
            type: AnswerType.Deflect,
            text: "The focus should be on the underlying trade imbalance that the President highlighted, not the specific way it came to light.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
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
      q_cheese_economic_impact: {
        id: "q_cheese_economic_impact",
        text: "Legal compliance aside, what about the economic impact? Are American consumers paying higher prices for this diplomatic cheese dispute?",
        depth: 2,
        answers: [
          {
            id: "a_economic_deflect",
            type: AnswerType.Deflect,
            text: "We're focused on long-term trade balance, not short-term price fluctuations. Strong trade relationships require addressing underlying imbalances.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased: OutcomeModifierWeight.Neutral, // 0
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_cheese_public_rallies:
                OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_economic_reassure",
            type: AnswerType.Reassure,
            text: "Treasury analysis shows minimal consumer impact. Most Americans won't see meaningful price changes, and domestic producers benefit from fairer competition.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
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
        ],
      },
    },
  },
};
