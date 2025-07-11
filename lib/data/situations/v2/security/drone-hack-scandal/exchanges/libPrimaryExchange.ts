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
            followUpId: "q_ally_confidence",
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
            followUpId: "q_infrastructure_review",
          },
        ],
      },
      q_ally_confidence: {
        id: "q_ally_confidence",
        text: "Are our allies sharing intelligence about vulnerabilities? How can we restore international confidence in American security leadership?",
        depth: 1,
        answers: [
          {
            id: "a_confidence_reassure",
            type: AnswerType.Reassure,
            text: "We're leading a multinational cybersecurity initiative with NATO partners to share threat intelligence and strengthen collective defenses.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
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
          {
            id: "a_confidence_inform",
            type: AnswerType.Inform,
            text: "State Department briefings show our allies remain confident in bilateral security arrangements. This incident has actually accelerated cooperation on cybersecurity standards.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.State]: {
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
        ],
      },
      q_infrastructure_review: {
        id: "q_infrastructure_review",
        text: "When will the infrastructure review be completed, and will results be public? How transparent will the administration be?",
        depth: 1,
        answers: [
          {
            id: "a_review_inform",
            type: AnswerType.Inform,
            text: "HHS will complete the review within 90 days, with public recommendations for improving critical infrastructure security while protecting sensitive operational details.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
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
            followUpId: "q_hack_review_budget",
          },
          {
            id: "a_review_deflect",
            type: AnswerType.Deflect,
            text: "The timeline and scope of security reviews can't be dictated by media pressure. We'll be thorough and transparent when it's safe to do so.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
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
      q_hack_review_budget: {
        id: "q_hack_review_budget",
        text: "What's the budget for implementing these security improvements? Are we talking millions or billions in taxpayer funds?",
        depth: 2,
        answers: [
          {
            id: "a_budget_inform",
            type: AnswerType.Inform,
            text: "Treasury estimates $500 million over three years, with cost-sharing partnerships from private sector companies benefiting from enhanced security.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.HHS]: {
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
          {
            id: "a_budget_deflect",
            type: AnswerType.Deflect,
            text: "We won't put a price tag on national security before completing the assessment. Congress will receive detailed budget requests once HHS finishes the review.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
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
        ],
      },
    },
  },
};
