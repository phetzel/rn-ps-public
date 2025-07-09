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
        text: "The backpacks look ridiculous, but isn't this the innovative thinking we need to address livestock emission health impacts?",
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
            followUpId: "q_health_data",
          },
          {
            id: "a_benefits_deflect",
            type: AnswerType.Deflect,
            text: "While the imagery is unconventional, we're focused on results, not appearances. Early pilot programs show measurable air quality improvements.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
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
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_legal_battles_intensify:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_enforcement_compromise: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_legal_authority",
          },
          {
            id: "a_benefits_challenge",
            type: AnswerType.Challenge,
            text: "The Justice Department has clear regulatory authority under environmental law. We won't be intimidated by industry lawsuits when public health is at stake.",
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
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_legal_battles_intensify:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_enforcement_compromise: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_industry_pushback",
          },
        ],
      },
      q_health_data: {
        id: "q_health_data",
        text: "Where's the data showing health benefits? Can you provide evidence that cow backpacks will prevent asthma cases?",
        depth: 1,
        answers: [
          {
            id: "a_data_inform",
            type: AnswerType.Inform,
            text: "HHS studies from pilot programs show 22% reduction in methane concentrations and corresponding 15% decrease in respiratory incidents in affected farming areas.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
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
          {
            id: "a_data_deflect",
            type: AnswerType.Deflect,
            text: "The real question is why we need perfect data to protect public health when the agriculture industry has provided zero data showing these emissions are safe.",
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
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_legal_battles_intensify:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_enforcement_compromise: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_industry_pushback: {
        id: "q_industry_pushback",
        text: "Ranchers are calling this an attack on rural livelihoods. How do you respond to farmers saying the administration doesn't understand their challenges?",
        depth: 1,
        answers: [
          {
            id: "a_pushback_admit",
            type: AnswerType.Admit,
            text: "We recognize this creates challenges for farmers, which is why we're developing comprehensive financial assistance and technical support programs.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
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
            id: "a_pushback_challenge",
            type: AnswerType.Challenge,
            text: "Farmers understand the health impacts better than anyone - their families live in these communities. We're protecting the people they care about most.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
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
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_enforcement_compromise:
                OutcomeModifierWeight.StrongNegative, // -8
            },
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
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
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
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_enforcement_compromise: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
