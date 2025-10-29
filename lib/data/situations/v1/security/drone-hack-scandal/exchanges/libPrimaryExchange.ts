import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const libPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.LibPrimary,
  content: {
    rootQuestion: {
      id: "q_hack_economic_security",
      text: "This hack exposed vulnerabilities in financial infrastructure. How can Americans trust their data when rubber chickens breach security?",
      answers: [
        {
          id: "a_economic_reassure",
          type: AnswerType.Reassure,
          text: "The Treasury Department has immediately implemented enhanced security protocols for all financial data systems. Your economic information remains fully protected.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyPositive },
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
            outcome_hack_economic_impact: OutcomeModifierWeight.StrongPositive,
            outcome_hack_diplomatic_crisis:
              OutcomeModifierWeight.SlightNegative,
            outcome_hack_health_scare: OutcomeModifierWeight.SlightNegative,
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
            outcome_hack_economic_impact: OutcomeModifierWeight.SlightNegative,
            outcome_hack_diplomatic_crisis:
              OutcomeModifierWeight.SlightPositive,
            outcome_hack_health_scare: OutcomeModifierWeight.Neutral,
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
            outcome_hack_economic_impact: OutcomeModifierWeight.SlightNegative,
            outcome_hack_diplomatic_crisis:
              OutcomeModifierWeight.SlightNegative,
            outcome_hack_health_scare: OutcomeModifierWeight.StrongPositive,
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
            outcome_hack_economic_impact: OutcomeModifierWeight.SlightPositive,
            outcome_hack_diplomatic_crisis:
              OutcomeModifierWeight.SlightNegative,
            outcome_hack_health_scare: OutcomeModifierWeight.Neutral,
          },
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_ally_confidence",
        text: "Are our allies sharing intelligence about vulnerabilities? How can we restore international confidence in American security leadership?",
        answers: [
          {
            id: "a_confidence_reassure",
            type: AnswerType.Reassure,
            text: "We're leading a multinational cybersecurity initiative with NATO partners to share threat intelligence and strengthen collective defenses.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive },
                [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightPositive,
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightNegative,
              outcome_hack_health_scare: OutcomeModifierWeight.Neutral,
            },
            followUpId: "q_hack_intelligence_sharing",
          },
          {
            id: "a_confidence_inform",
            type: AnswerType.Inform,
            text: "State Department briefings show our allies remain confident in bilateral security arrangements. This incident has actually accelerated cooperation on cybersecurity standards.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyNegative },
                [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyNegative },
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
            },
          outcomeModifiers: {
            outcome_hack_economic_impact:
              OutcomeModifierWeight.SlightNegative,
            outcome_hack_diplomatic_crisis:
              OutcomeModifierWeight.Neutral,
            outcome_hack_health_scare: OutcomeModifierWeight.SlightPositive,
          },
          },
          {
            id: "a_confidence_deflect",
            type: AnswerType.Deflect,
            text: "Our diplomatic relationships are based on decades of trust, not single incidents. We're focused on preventing future threats, not managing perceptions.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyNegative },
                [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyNegative },
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.Neutral,
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightPositive,
              outcome_hack_health_scare: OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_confidence_neutral",
            type: AnswerType.Inform,
            text: "We will publish a declassified framework for partner coordination and share non-sensitive milestones to demonstrate momentum and accountability.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive },
                [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyNegative },
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {},
          },
        ],
      },
      {
        id: "q_hack_market_impact",
        text: "What about the market impact? International investors are already expressing concern about American cybersecurity competence. How do you address that?",
        answers: [
          {
            id: "a_market_deny",
            type: AnswerType.Deny,
            text: "There is no basis for market concerns. This was an isolated incident with harmless payloads that had no impact on actual financial operations.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyNegative },
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightNegative,
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightPositive,
              outcome_hack_health_scare: OutcomeModifierWeight.Neutral,
            },
            followUpId: "q_hack_review_budget",
          },
          {
            id: "a_market_inform",
            type: AnswerType.Inform,
            text: "Treasury is in direct contact with major financial institutions and international partners to provide detailed security assessments and restore confidence.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightPositive,
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.StrongNegative,
              outcome_hack_health_scare: OutcomeModifierWeight.SlightPositive,
            },
          },
          {
            id: "a_market_reassure",
            type: AnswerType.Reassure,
            text: "American financial markets remain the most secure and resilient in the world. One prank doesn't change decades of proven cybersecurity leadership.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyNegative },
                [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyPositive },
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Neutral },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightPositive,
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.Neutral,
              outcome_hack_health_scare: OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_market_neutral",
            type: AnswerType.Inform,
            text: "Treasury and regulators will publish regular status reports and thresholds for additional action to reassure market participants.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyNegative },
                [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyPositive },
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {},
          },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: "q_hack_intelligence_sharing",
        text: "What specific intelligence is being shared with allies, and are you coordinating response strategies for future attacks?",
        answers: [
          {
            id: "a_intelligence_inform",
            type: AnswerType.Inform,
            text: "We're sharing technical vulnerability assessments through established NATO cybersecurity channels while protecting sensitive operational details.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive },
              [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
          },
          outcomeModifiers: {
            outcome_hack_economic_impact:
              OutcomeModifierWeight.SlightPositive,
            outcome_hack_diplomatic_crisis:
              OutcomeModifierWeight.StrongNegative,
            outcome_hack_health_scare: OutcomeModifierWeight.SlightPositive,
          },
        },
          {
            id: "a_intelligence_deflect",
            type: AnswerType.Deflect,
            text: "Intelligence sharing protocols can't be discussed in public forums. What I can say is that our allies remain fully engaged in collective security efforts.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyNegative },
                [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightNegative,
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.StrongPositive,
              outcome_hack_health_scare: OutcomeModifierWeight.SlightNegative,
            },
        },
          {
            id: "a_intelligence_reassure",
            type: AnswerType.Reassure,
            text: "Our intelligence partnerships have never been stronger. This incident has actually prompted expanded cooperation on emerging cyber threats.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyNegative },
                [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightPositive,
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightNegative,
              outcome_hack_health_scare: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_intelligence_neutral",
            type: AnswerType.Inform,
            text: "Within classification limits, we will provide public briefings on standards adoption, exercises, and readiness improvements among partners.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive },
                [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {},
          },
        ],
      },
      {
        id: "q_hack_review_budget",
        text: "What's the budget for implementing these security improvements? Are we talking millions or billions in taxpayer funds?",
        answers: [
          {
            id: "a_budget_inform",
            type: AnswerType.Inform,
            text: "Treasury estimates $500 million over three years, with cost-sharing partnerships from private sector companies benefiting from enhanced security.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyPositive },
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightPositive,
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.StrongNegative,
              outcome_hack_health_scare: OutcomeModifierWeight.SlightPositive,
            },
          },
          {
            id: "a_budget_deflect",
            type: AnswerType.Deflect,
            text: "We won't put a price tag on national security before completing the assessment. Congress will receive detailed budget requests once HHS finishes the review.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
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
                OutcomeModifierWeight.SlightNegative,
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.StrongPositive,
              outcome_hack_health_scare: OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_budget_challenge",
            type: AnswerType.Challenge,
            text: "Half a billion dollars for rubber chicken protection? That's a massive overreaction that shows this administration's poor judgment on budget priorities.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightNegative,
              outcome_hack_diplomatic_crisis: OutcomeModifierWeight.Neutral,
              outcome_hack_health_scare: OutcomeModifierWeight.SlightPositive,
            },
          },
          {
            id: "a_budget_neutral",
            type: AnswerType.Inform,
            text: "We will publish cost estimates, offsets, and timelines in consultation with Congress, with quarterly updates on delivery and spending.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {},
          },
        ],
      },
    ],
  },
};
