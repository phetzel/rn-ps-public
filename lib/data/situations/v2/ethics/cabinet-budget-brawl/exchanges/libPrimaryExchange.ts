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
    rootQuestionId: "q_budget_accountability",
    questions: {
      q_budget_accountability: {
        id: "q_budget_accountability",
        text: "Isn't Treasury right to call out Pentagon waste? Why shouldn't taxpayers know how their defense dollars are being spent?",
        depth: 0,
        answers: [
          {
            id: "a_accountability_reassure",
            type: AnswerType.Reassure,
            text: "Both departments are committed to fiscal responsibility. These discussions help us ensure every taxpayer dollar is used effectively for national security.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightPositive, // +4
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative, // -4
              outcome_private_resolution: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_accountability_challenge",
            type: AnswerType.Challenge,
            text: "The Pentagon has been too comfortable with blank check budgets. Treasury is doing its job by demanding accountability for taxpayer money.",
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
              outcome_transparency_wins: OutcomeModifierWeight.ModeratePositive, // +6
              outcome_messy_pr_disaster: OutcomeModifierWeight.ModerateNegative, // -6
              outcome_private_resolution: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_national_security",
          },
          {
            id: "a_accountability_deflect",
            type: AnswerType.Deflect,
            text: "Defense spending isn't the issue here - it's about smart procurement and eliminating waste. The Pentagon is focused on protecting America, not defending contractors.",
            impacts: {
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
              outcome_transparency_wins: OutcomeModifierWeight.SlightNegative, // -4
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightPositive, // +4
              outcome_private_resolution: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_national_security: {
        id: "q_national_security",
        text: "But doesn't this public fighting undermine confidence in our defense capabilities at a time when security threats are rising?",
        depth: 1,
        answers: [
          {
            id: "a_security_deflect",
            type: AnswerType.Deflect,
            text: "Real security comes from smart spending, not just big spending. Our adversaries should worry about our efficiency, not our budget debates.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightNegative, // -4
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightPositive, // +4
              outcome_private_resolution: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_security_inform",
            type: AnswerType.Inform,
            text: "Our defense capabilities remain uncompromised. The Pentagon's core mission is funded - we're reviewing support contracts and administrative overhead.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_transparency_wins: OutcomeModifierWeight.SlightPositive, // +4
              outcome_messy_pr_disaster: OutcomeModifierWeight.SlightNegative, // -4
              outcome_private_resolution: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
