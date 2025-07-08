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
    rootQuestionId: "q_administration_unity",
    questions: {
      q_administration_unity: {
        id: "q_administration_unity",
        text: "This public cabinet infighting makes the administration look chaotic and weak. How can Americans trust leadership that can't manage its own house?",
        depth: 0,
        answers: [
          {
            id: "a_unity_admit",
            type: AnswerType.Admit,
            text: "You're right that this should have been handled internally. We're working to ensure cabinet discussions stay within appropriate channels going forward.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightNegative, // -4
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative, // -4
              outcome_private_resolution: OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_unity_deflect",
            type: AnswerType.Deflect,
            text: "Healthy debate between departments is how we get the best policies. The American people benefit when we examine every angle of complex issues.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightPositive, // +4
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightPositive, // +4
              outcome_private_resolution: OutcomeModifierWeight.StrongNegative, // -8
            },
            followUpId: "q_defense_funding",
          },
          {
            id: "a_unity_reassure",
            type: AnswerType.Reassure,
            text: "The President has full confidence in both departments. This discourse shows we take fiscal responsibility seriously while maintaining strong defense capabilities.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightNegative, // -4
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative, // -4
              outcome_private_resolution: OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_unity_challenge",
            type: AnswerType.Challenge,
            text: "This isn't chaos - it's accountability. Treasury is right to demand answers about taxpayer dollars, and that takes courage in this town.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightPositive, // +4
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightPositive, // +4
              outcome_private_resolution: OutcomeModifierWeight.StrongNegative, // -8
            },
          },
        ],
      },
      q_defense_funding: {
        id: "q_defense_funding",
        text: "Is the administration planning to cut defense spending? Our enemies are watching these budget fights and seeing weakness.",
        depth: 1,
        answers: [
          {
            id: "a_funding_deny",
            type: AnswerType.Deny,
            text: "Absolutely not. We are not cutting defense spending. We're ensuring every defense dollar is spent wisely to maximize our military strength.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightNegative, // -4
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative, // -4
              outcome_private_resolution: OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_funding_challenge",
            type: AnswerType.Challenge,
            text: "That's fear-mongering. Our enemies should fear our efficiency and strategic thinking, not just our ability to spend money without oversight.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightPositive, // +4
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightPositive, // +4
              outcome_private_resolution: OutcomeModifierWeight.StrongNegative, // -8
            },
          },
        ],
      },
    },
  },
};
