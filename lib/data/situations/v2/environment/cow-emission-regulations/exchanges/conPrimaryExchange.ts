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
    rootQuestionId: "q_regulatory_overreach",
    questions: {
      q_regulatory_overreach: {
        id: "q_regulatory_overreach",
        text: "Isn't forcing farmers to put backpacks on cows the epitome of government overreach? How can the administration justify this burden on rural Americans?",
        depth: 0,
        answers: [
          {
            id: "a_overreach_admit",
            type: AnswerType.Admit,
            text: "We recognize this places a burden on farmers, and we're working on financial assistance programs to help with implementation costs.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_health_benefits_proven:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_legal_battles_intensify:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_enforcement_compromise:
                OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_overreach_challenge",
            type: AnswerType.Challenge,
            text: "The Justice Department has clear authority to enforce environmental regulations. We won't back down from protecting public health despite industry pressure.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_health_benefits_proven:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_legal_battles_intensify:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_enforcement_compromise:
                OutcomeModifierWeight.StrongNegative, // -8
            },
            followUpId: "q_enforcement_reality",
          },
          {
            id: "a_overreach_deflect",
            type: AnswerType.Deflect,
            text: "This isn't about backpacks - it's about innovative climate leadership. We're creating new export markets while protecting the health of farming communities.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_health_benefits_proven:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_legal_battles_intensify:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_enforcement_compromise: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_overreach_inform",
            type: AnswerType.Inform,
            text: "HHS data shows methane reduction directly improves air quality and reduces respiratory illness. This program could prevent thousands of asthma cases in rural areas.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_health_benefits_proven:
                OutcomeModifierWeight.ModeratePositive, // +6
              outcome_legal_battles_intensify:
                OutcomeModifierWeight.ModerateNegative, // -6
              outcome_enforcement_compromise: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_enforcement_reality: {
        id: "q_enforcement_reality",
        text: "How does the Justice Department plan to actually enforce this? Are you going to send federal agents to farms to check cow backpacks?",
        depth: 1,
        answers: [
          {
            id: "a_enforcement_deflect",
            type: AnswerType.Deflect,
            text: "Enforcement will focus on education and voluntary compliance first. We're not in the business of harassing farmers - we're partners in public health.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_health_benefits_proven:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_legal_battles_intensify:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_enforcement_compromise:
                OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_enforcement_deny",
            type: AnswerType.Deny,
            text: "That characterization is completely unfair. We have reasonable inspection protocols that respect property rights while ensuring compliance with public health law.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_health_benefits_proven:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_legal_battles_intensify:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_enforcement_compromise:
                OutcomeModifierWeight.StrongNegative, // -8
            },
          },
        ],
      },
    },
  },
};
