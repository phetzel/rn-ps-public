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
    rootQuestionId: "q_health_benefits",
    questions: {
      q_health_benefits: {
        id: "q_health_benefits",
        text: "The backpacks look ridiculous, but isn't this exactly the kind of innovative thinking we need to address the health impacts of livestock emissions?",
        depth: 0,
        answers: [
          {
            id: "a_benefits_inform",
            type: AnswerType.Inform,
            text: "Methane from livestock accounts for 14% of greenhouse gases and directly impacts respiratory health in rural communities. This program could prevent thousands of cases of asthma.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
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
          {
            id: "a_benefits_deflect",
            type: AnswerType.Deflect,
            text: "While the imagery is unconventional, we're focused on results, not appearances. Early pilot programs show measurable air quality improvements.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_health_benefits_proven:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_legal_battles_intensify:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_enforcement_compromise: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_legal_authority",
          },
        ],
      },
      q_legal_authority: {
        id: "q_legal_authority",
        text: "Agricultural groups are threatening massive lawsuits. Does the administration have clear legal authority to mandate these regulations?",
        depth: 1,
        answers: [
          {
            id: "a_authority_challenge",
            type: AnswerType.Challenge,
            text: "The Clean Air Act gives us unambiguous authority to regulate methane emissions. These lawsuits are delay tactics from an industry resistant to change.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_health_benefits_proven:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_legal_battles_intensify:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_enforcement_compromise: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_authority_reassure",
            type: AnswerType.Reassure,
            text: "We're confident in our legal position and are working with agricultural stakeholders to ensure smooth implementation while defending public health.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_health_benefits_proven:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_legal_battles_intensify:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_enforcement_compromise: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
