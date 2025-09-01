import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const conPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.ConPrimary,
  content: {
    rootQuestion: {
      id: "q_regulatory_overreach",
      text: "Isn't forcing farmers to put backpacks on cows the epitome of government overreach? How can the administration justify this burden on rural Americans?",
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
          followUpId: "q_economic_impact",
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
    secondaryQuestions: [
      {
        id: "q_enforcement_reality",
        text: "How does the Justice Department plan to actually enforce this? Are you going to send federal agents to farms to check cow backpacks?",
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
      {
        id: "a_enforcement_inform",
        type: AnswerType.Inform,
        text: "We're working with state agriculture departments to implement phased compliance, starting with larger operations before moving to family farms.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Neutral },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
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
          followUpId: "q_constitutional_authority",
        },
        {
          id: "a_enforcement_neutral",
          type: AnswerType.Inform,
          text: "We'll publish clear guidelines and timelines so producers know what's expected well before inspections begin.",
          impacts: {},
          outcomeModifiers: {},
        },
        ],
      },
      {
        id: "q_economic_impact",
        text: "What about the economic burden on small family farms? How do you justify forcing struggling farmers to buy expensive equipment for their cattle?",
        answers: [
          {
            id: "a_economic_admit",
            type: AnswerType.Admit,
            text: "Small farms face real challenges, which is why we're creating subsidies and grants to help cover costs. No farmer should bear this burden alone.",
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
            followUpId: "q_rural_values",
          },
          {
            id: "a_economic_challenge",
            type: AnswerType.Challenge,
            text: "Health costs from methane pollution far exceed equipment costs. We're preventing expensive medical bills for farming families down the line.",
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
              outcome_legal_battles_intensify: OutcomeModifierWeight.Neutral, // 0
              outcome_enforcement_compromise:
                OutcomeModifierWeight.SlightNegative, // -4
            },
          },
      {
        id: "a_economic_deflect",
        type: AnswerType.Deflect,
        text: "We're exploring innovative financing options and partnerships with agricultural lenders to minimize upfront costs for farmers.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
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
        id: "a_economic_neutral",
        type: AnswerType.Inform,
        text: "We'll release a cost calculator and technical assistance program so small farms can plan upgrades without surprise expenses.",
        impacts: {},
        outcomeModifiers: {},
      },
      ],
    },
  ],
  tertiaryQuestions: [
      {
        id: "q_constitutional_authority",
        text: "Where does the federal government get the constitutional authority to regulate what farmers put on their livestock? Isn't this a state issue?",
        answers: [
          {
            id: "a_constitutional_challenge",
            type: AnswerType.Challenge,
            text: "The Commerce Clause and Clean Air Act give us clear authority over interstate pollution. Methane emissions don't respect state borders.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
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
          {
            id: "a_constitutional_admit",
            type: AnswerType.Admit,
            text: "We're working closely with state governments to ensure this program respects federalism while protecting public health across state lines.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
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
        id: "a_constitutional_deflect",
        type: AnswerType.Deflect,
        text: "We're confident in our legal authority and look forward to working with Congress to ensure this program has bipartisan support.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
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
        id: "a_constitutional_neutral",
        type: AnswerType.Inform,
        text: "We'll publish a legal memorandum outlining statutory authorities and how state partners will be engaged.",
        impacts: {},
        outcomeModifiers: {},
      },
      ],
    },
    {
      id: "q_rural_values",
      text: "This administration seems disconnected from rural values and traditions. How do you respond to farmers who say you don't understand their way of life?",
      answers: [
          {
            id: "a_rural_admit",
            type: AnswerType.Admit,
            text: "We may not always get it right, but we're committed to listening to rural communities and adapting our approach based on their feedback.",
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
            id: "a_rural_challenge",
            type: AnswerType.Challenge,
            text: "Rural traditions include stewardship of the land and protecting future generations. This policy honors those values by ensuring clean air for farming communities.",
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
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_enforcement_compromise:
                OutcomeModifierWeight.StrongNegative, // -8
            },
          },
      {
        id: "a_rural_deflect",
        type: AnswerType.Deflect,
        text: "This administration has invested billions in rural infrastructure and farm programs. We're partners with farming communities, not adversaries.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
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
        id: "a_rural_neutral",
        type: AnswerType.Inform,
        text: "We'll expand listening sessions across farm states and adjust implementation where feedback shows unintended burdens.",
        impacts: {},
        outcomeModifiers: {},
      },
      ],
    },
  ],
  },
};
