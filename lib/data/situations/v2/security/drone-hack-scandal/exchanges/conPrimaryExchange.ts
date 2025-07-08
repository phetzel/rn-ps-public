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
    rootQuestionId: "q_hack_health_systems",
    questions: {
      q_hack_health_systems: {
        id: "q_hack_health_systems",
        text: "If hackers can compromise military drones, what about medical drones transporting blood and organs? Are health systems at risk?",
        depth: 0,
        answers: [
          {
            id: "a_health_inform",
            type: AnswerType.Inform,
            text: "HHS has immediately launched a comprehensive review of all medical drone systems and delivery protocols to ensure patient safety remains our top priority.",
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
              outcome_hack_economic_impact: OutcomeModifierWeight.Neutral, // 0
              outcome_hack_diplomatic_crisis: OutcomeModifierWeight.Neutral, // 0
              outcome_hack_health_scare: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_hack_rural_impact",
          },
          {
            id: "a_health_challenge",
            type: AnswerType.Challenge,
            text: "Medical systems use completely different protocols and security measures. It's irresponsible to create panic by connecting these separate systems.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
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
              outcome_hack_economic_impact: OutcomeModifierWeight.Neutral, // 0
              outcome_hack_diplomatic_crisis: OutcomeModifierWeight.Neutral, // 0
              outcome_hack_health_scare: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_health_deny",
            type: AnswerType.Deny,
            text: "This was a harmless prank, not a cybersecurity threat. There are no broader implications for any other systems, including medical infrastructure.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
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
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_hack_health_scare: OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_health_reassure",
            type: AnswerType.Reassure,
            text: "Treasury has confirmed that all financial infrastructure remains secure. We're taking precautionary measures to reassure markets and investors.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.State]: {
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
          },
          {
            id: "a_health_admit",
            type: AnswerType.Admit,
            text: "This incident has created some diplomatic complications. The State Department is working to restore confidence among our international partners.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
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
      q_hack_rural_impact: {
        id: "q_hack_rural_impact",
        text: "Rural communities depend on medical drone deliveries for emergency care. How can you guarantee their safety from similar attacks?",
        depth: 1,
        answers: [
          {
            id: "a_rural_reassure",
            type: AnswerType.Reassure,
            text: "Rural emergency services are being prioritized in our security review. We will not allow any compromise to life-saving medical deliveries.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact: OutcomeModifierWeight.Neutral, // 0
              outcome_hack_diplomatic_crisis: OutcomeModifierWeight.Neutral, // 0
              outcome_hack_health_scare: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_rural_deflect",
            type: AnswerType.Deflect,
            text: "The focus should be on catching the criminals responsible for this prank, not creating hypothetical scenarios that haven't happened.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact: OutcomeModifierWeight.Neutral, // 0
              outcome_hack_diplomatic_crisis: OutcomeModifierWeight.Neutral, // 0
              outcome_hack_health_scare: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
