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
      id: "q_health_benefits",
      text: "The backpacks look ridiculous, but isn't this the innovative thinking we need to address livestock emission health impacts?",
      answers: [
        {
          id: "a_benefits_inform",
          type: AnswerType.Inform,
          text: "Methane from livestock accounts for 14% of greenhouse gases and directly impacts respiratory health in rural communities. This program could prevent thousands of cases of asthma.",
          impacts: {
            president: { weight: ExchangeImpactWeight.Negative },
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
              OutcomeModifierWeight.StrongPositive, // +8
            outcome_legal_battles_intensify:
              OutcomeModifierWeight.SlightNegative, // -4
            outcome_enforcement_compromise: OutcomeModifierWeight.SlightNegative, // -4
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
                weight: ExchangeImpactWeight.Negative,
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
            president: { weight: ExchangeImpactWeight.Negative },
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
              OutcomeModifierWeight.StrongNegative, // -8
            outcome_legal_battles_intensify:
              OutcomeModifierWeight.SlightPositive, // +4
          outcome_enforcement_compromise: OutcomeModifierWeight.SlightPositive, // +4
        },
      },
      {
        id: "a_benefits_neutral",
        type: AnswerType.Inform,
        text: "We'll publish pilot program data and implementation timelines so communities can see how benefits are measured.",
        impacts: {
          president: { weight: ExchangeImpactWeight.SlightlyPositive },
          cabinet: {
            [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyPositive },
            [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.SlightlyNegative },
          },
        },
        outcomeModifiers: {
          outcome_health_benefits_proven: OutcomeModifierWeight.SlightNegative, // -4
          outcome_enforcement_compromise: OutcomeModifierWeight.SlightPositive, // +4
        },
      },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_health_data",
        text: "Where's the data showing health benefits? Can you provide evidence that cow backpacks will prevent asthma cases?",
        answers: [
          {
            id: "a_data_inform",
            type: AnswerType.Inform,
            text: "HHS studies from pilot programs show 22% reduction in methane concentrations and corresponding 15% decrease in respiratory incidents in affected farming areas.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Negative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
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
                [CabinetStaticId.Justice]: {
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
            id: "a_data_challenge",
            type: AnswerType.Challenge,
            text: "The burden of proof shouldn't be on protecting public health - it should be on industries that want to continue polluting our air without accountability.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
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
          followUpId: "q_industry_resistance",
        },
        {
        id: "a_data_neutral",
        type: AnswerType.Inform,
        text: "Independent evaluators will audit air quality and health outcomes with public dashboards for transparency.",
        impacts: {
          president: { weight: ExchangeImpactWeight.Positive },
          cabinet: {
            [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyNegative },
          },
        },
        outcomeModifiers: {
          outcome_health_benefits_proven: OutcomeModifierWeight.SlightNegative, // -4
          outcome_legal_battles_intensify: OutcomeModifierWeight.SlightNegative, // -4
          outcome_enforcement_compromise: OutcomeModifierWeight.StrongPositive, // +8
        },
      },
        ],
      },
      {
        id: "q_legal_authority",
        text: "Agricultural groups are threatening massive lawsuits. Does the administration have clear legal authority to mandate these regulations?",
        answers: [
          {
            id: "a_authority_challenge",
            type: AnswerType.Challenge,
            text: "The Clean Air Act gives us unambiguous authority to regulate methane emissions. These lawsuits are delay tactics from an industry resistant to change.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
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
            followUpId: "q_enforcement_strategy",
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
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
            },
          },
          outcomeModifiers: {
            outcome_health_benefits_proven:
              OutcomeModifierWeight.StrongPositive, // +8
            outcome_legal_battles_intensify:
              OutcomeModifierWeight.SlightNegative, // -4
            outcome_enforcement_compromise: OutcomeModifierWeight.SlightNegative, // -4 (new)
          },
        },
        {
          id: "a_authority_inform",
          type: AnswerType.Inform,
          text: "Federal courts have consistently upheld EPA authority over methane emissions. We have decades of legal precedent supporting environmental health regulations.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyPositive },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_health_benefits_proven:
              OutcomeModifierWeight.StrongPositive, // +8
            outcome_legal_battles_intensify:
              OutcomeModifierWeight.SlightNegative, // -4
            outcome_enforcement_compromise: OutcomeModifierWeight.SlightNegative, // -4
          },
        },
        {
          id: "a_authority_neutral",
          type: AnswerType.Inform,
          text: "We'll release a legal brief summarizing case law and regulatory authority to address stakeholder concerns.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyPositive },
              [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
          },
          outcomeModifiers: {
            outcome_enforcement_compromise: OutcomeModifierWeight.StrongPositive, // +8
            outcome_health_benefits_proven: OutcomeModifierWeight.SlightNegative, // -4
            outcome_legal_battles_intensify: OutcomeModifierWeight.SlightNegative, // -4
          },
        },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: "q_industry_resistance",
        text: "Ranchers are calling this an attack on rural livelihoods. How do you respond to farmers saying the administration doesn't understand their challenges?",
        answers: [
          {
            id: "a_resistance_admit",
            type: AnswerType.Admit,
            text: "We recognize this creates challenges for farmers, which is why we're developing comprehensive financial assistance and technical support programs.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
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
            id: "a_resistance_challenge",
            type: AnswerType.Challenge,
            text: "Farmers understand the health impacts better than anyone - their families live in these communities. We're protecting the people they care about most.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
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
          },
          {
            id: "a_resistance_deflect",
            type: AnswerType.Deflect,
            text: "This administration has consistently supported rural communities through agricultural programs. Environmental protection and farming can coexist.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
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
              outcome_health_benefits_proven: OutcomeModifierWeight.Neutral, // 0
              outcome_legal_battles_intensify: OutcomeModifierWeight.Neutral, // 0
          outcome_enforcement_compromise: OutcomeModifierWeight.Neutral, // 0
        },
      },
      {
        id: "a_resistance_neutral",
        type: AnswerType.Inform,
        text: "We'll expand technical assistance and grant programs in partnership with land-grant universities and co-ops.",
        impacts: {
          president: { weight: ExchangeImpactWeight.SlightlyPositive },
          cabinet: {
            [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyPositive },
            [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.SlightlyNegative },
          },
        },
        outcomeModifiers: {},
      },
        ],
      },
      {
        id: "q_enforcement_strategy",
        text: "How will you actually enforce these regulations? Are federal agents going to inspect every farm to check for cow backpacks?",
        answers: [
          {
            id: "a_enforcement_inform",
            type: AnswerType.Inform,
            text: "We're implementing a phased approach starting with larger operations, using existing agricultural inspection frameworks with additional training for methane capture systems.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
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
          {
            id: "a_enforcement_deflect",
            type: AnswerType.Deflect,
            text: "Enforcement will focus on education and voluntary compliance first. We're not in the business of harassing farmers - we're partners in public health.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
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
            id: "a_enforcement_challenge",
            type: AnswerType.Challenge,
            text: "We'll enforce these regulations the same way we enforce food safety and worker protection - because public health isn't optional.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
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
        },
          {
            id: "a_enforcement_neutral",
            type: AnswerType.Inform,
            text: "We will publish enforcement protocols with clear thresholds, appeals, and grace periods for small operators.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
                [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyPositive },
                [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
          },
          outcomeModifiers: {
            outcome_health_benefits_proven: OutcomeModifierWeight.SlightNegative, // -4
            outcome_legal_battles_intensify: OutcomeModifierWeight.SlightNegative, // -4
            outcome_enforcement_compromise: OutcomeModifierWeight.StrongPositive, // +8
          },
        },
        ],
      },
    ],
  },
};
