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
    rootQuestionId: "q_hack_economic_security",
    questions: {
      q_hack_economic_security: {
        id: "q_hack_economic_security",
        text: "This hack exposed vulnerabilities in financial infrastructure. How can Americans trust their data when rubber chickens breach security?",
        depth: 0,
        answers: [
          {
            id: "a_economic_reassure",
            type: AnswerType.Reassure,
            text: "The Treasury Department has immediately implemented enhanced security protocols for all financial data systems. Your economic information remains fully protected.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.StrongPositive, // +8
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_hack_health_scare: OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_hack_market_impact",
          },
          {
            id: "a_economic_admit",
            type: AnswerType.Admit,
            text: "You're absolutely right to be concerned. The State Department is working with allies to address security gaps that this incident revealed.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_hack_health_scare: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_economic_deny",
            type: AnswerType.Deny,
            text: "There are no broader security implications here. This was an isolated prank with harmless payloads that poses no real threat to national infrastructure.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_hack_health_scare: OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_economic_inform",
            type: AnswerType.Inform,
            text: "HHS is conducting a comprehensive review of all critical infrastructure vulnerabilities to protect public health systems from similar intrusions.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_hack_health_scare: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_hack_market_impact: {
        id: "q_hack_market_impact",
        text: "What about the market impact? International investors are already expressing concern about American cybersecurity competence. How do you address that?",
        depth: 1,
        answers: [
          {
            id: "a_market_deny",
            type: AnswerType.Deny,
            text: "There is no basis for market concerns. This was an isolated incident with harmless payloads that had no impact on actual financial operations.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_hack_health_scare: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_market_inform",
            type: AnswerType.Inform,
            text: "Treasury is in direct contact with major financial institutions and international partners to provide detailed security assessments and restore confidence.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_hack_health_scare: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
