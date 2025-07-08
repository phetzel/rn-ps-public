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
        text: "If hackers can compromise military drones, what about medical delivery drones that transport blood, organs, and emergency supplies? Are our health systems at risk?",
        depth: 0,
        answers: [
          {
            id: "a_health_inform",
            type: AnswerType.Inform,
            text: "HHS has immediately launched a comprehensive review of all medical drone systems and delivery protocols to ensure patient safety remains our top priority.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_hack_health_scare: OutcomeModifierWeight.StrongNegative, // -8
            },
            followUpId: "q_hack_rural_impact",
          },
          {
            id: "a_health_challenge",
            type: AnswerType.Challenge,
            text: "Medical systems use completely different protocols and security measures. It's irresponsible to create panic by connecting these separate systems.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_hack_health_scare: OutcomeModifierWeight.ModerateNegative, // -6
            },
          },
        ],
      },
      q_hack_rural_impact: {
        id: "q_hack_rural_impact",
        text: "Rural communities depend heavily on medical drone deliveries for emergency care. How can you guarantee their safety won't be compromised by similar attacks?",
        depth: 1,
        answers: [
          {
            id: "a_rural_reassure",
            type: AnswerType.Reassure,
            text: "Rural emergency services are being prioritized in our security review. We will not allow any compromise to life-saving medical deliveries.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_hack_health_scare: OutcomeModifierWeight.StrongNegative, // -8 -> -16 total
            },
          },
          {
            id: "a_rural_deflect",
            type: AnswerType.Deflect,
            text: "The focus should be on catching the criminals responsible for this prank, not creating hypothetical scenarios that haven't happened.",
            impacts: {},
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_hack_diplomatic_crisis: OutcomeModifierWeight.Neutral, // 0 -> -4 total
              outcome_hack_health_scare: OutcomeModifierWeight.SlightPositive, // +4 -> -4 total
            },
          },
        ],
      },
    },
  },
};
