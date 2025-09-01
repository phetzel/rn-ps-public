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
      id: "q_hack_health_systems",
      text: "If hackers can compromise military drones, what about medical drones transporting blood and organs? Are health systems at risk?",
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
            outcome_hack_economic_impact: OutcomeModifierWeight.Neutral,
            outcome_hack_diplomatic_crisis: OutcomeModifierWeight.Neutral,
            outcome_hack_health_scare: OutcomeModifierWeight.Neutral,
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
            outcome_hack_economic_impact: OutcomeModifierWeight.Neutral,
            outcome_hack_diplomatic_crisis: OutcomeModifierWeight.Neutral,
            outcome_hack_health_scare: OutcomeModifierWeight.Neutral,
          },
          followUpId: "q_hack_system_separation",
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
            outcome_hack_economic_impact: OutcomeModifierWeight.StrongPositive,
            outcome_hack_diplomatic_crisis:
              OutcomeModifierWeight.SlightNegative,
            outcome_hack_health_scare: OutcomeModifierWeight.SlightNegative,
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
            outcome_hack_economic_impact: OutcomeModifierWeight.SlightNegative,
            outcome_hack_diplomatic_crisis:
              OutcomeModifierWeight.SlightPositive,
            outcome_hack_health_scare: OutcomeModifierWeight.Neutral,
          },
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_hack_rural_impact",
        text: "Rural communities depend on medical drone deliveries for emergency care. How can you guarantee their safety from similar attacks?",
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
              outcome_hack_economic_impact: OutcomeModifierWeight.Neutral,
              outcome_hack_diplomatic_crisis: OutcomeModifierWeight.Neutral,
              outcome_hack_health_scare: OutcomeModifierWeight.Neutral,
            },
            followUpId: "q_hack_rural_funding",
          },
          {
            id: "a_rural_deflect",
            type: AnswerType.Deflect,
            text: "The focus should be on catching the criminals responsible for this prank, not creating hypothetical scenarios that haven't happened.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact: OutcomeModifierWeight.Neutral,
              outcome_hack_diplomatic_crisis: OutcomeModifierWeight.Neutral,
              outcome_hack_health_scare: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_rural_inform",
            type: AnswerType.Inform,
            text: "HHS is working with rural healthcare providers to implement enhanced monitoring systems for all emergency drone operations.",
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
                OutcomeModifierWeight.SlightPositive,
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightNegative,
              outcome_hack_health_scare: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_rural_neutral",
            type: AnswerType.Inform,
            text: "We will publish risk assessments, improvement milestones, and service continuity plans for rural providers in coordination with states.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
      {
        id: "q_hack_system_separation",
        text: "If military and medical drone systems are truly separate, why are security experts warning about cross-contamination vulnerabilities?",
        answers: [
          {
            id: "a_separation_challenge",
            type: AnswerType.Challenge,
            text: "Those experts are creating unnecessary alarm. Our military and civilian systems have completely different architectures and security protocols.",
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
                OutcomeModifierWeight.SlightNegative,
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightNegative,
              outcome_hack_health_scare: OutcomeModifierWeight.StrongPositive,
            },
            followUpId: "q_hack_expert_credibility",
          },
          {
            id: "a_separation_inform",
            type: AnswerType.Inform,
            text: "HHS can provide technical briefings showing the distinct security architectures that prevent any crossover between military and medical drone systems.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
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
            id: "a_separation_deflect",
            type: AnswerType.Deflect,
            text: "We can't discuss specific security architectures in public forums. What matters is that both systems remain fully operational and secure.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact: OutcomeModifierWeight.Neutral,
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightPositive,
              outcome_hack_health_scare: OutcomeModifierWeight.SlightNegative,
            },
          },
          {
            id: "a_separation_neutral",
            type: AnswerType.Inform,
            text: "We will provide non-sensitive architecture overviews and third-party validations to strengthen public confidence without disclosing sensitive details.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: "q_hack_rural_funding",
        text: "Who's paying for these rural security upgrades? Will taxpayers bear the cost, or should private medical companies foot the bill?",
        answers: [
          {
            id: "a_funding_reassure",
            type: AnswerType.Reassure,
            text: "Treasury is allocating emergency funds to protect critical infrastructure. Rural health security is worth every taxpayer dollar invested.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
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
                OutcomeModifierWeight.SlightPositive,
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightNegative,
              outcome_hack_health_scare: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_funding_challenge",
            type: AnswerType.Challenge,
            text: "Private companies profiting from medical drone delivery should invest in their own security systems. Taxpayers shouldn't subsidize corporate profits.",
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
                OutcomeModifierWeight.SlightNegative,
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightPositive,
              outcome_hack_health_scare: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_funding_inform",
            type: AnswerType.Inform,
            text: "Treasury is exploring public-private partnerships where medical companies contribute to security infrastructure while maintaining federal oversight.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
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
            id: "a_funding_neutral",
            type: AnswerType.Inform,
            text: "We will outline funding sources, cost sharing mechanisms, and accountability metrics for any upgrades affecting critical health logistics.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
      {
        id: "q_hack_expert_credibility",
        text: "Are you questioning the credibility of cybersecurity experts who've testified before Congress about these vulnerabilities?",
        answers: [
          {
            id: "a_credibility_deflect",
            type: AnswerType.Deflect,
            text: "We respect all expert input, but policy decisions must be based on comprehensive government assessments, not individual opinions.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_hack_economic_impact:
                OutcomeModifierWeight.SlightNegative,
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightPositive,
              outcome_hack_health_scare: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_credibility_reassure",
            type: AnswerType.Reassure,
            text: "These experts provide valuable insights that inform our security protocols. We take all credible threat assessments seriously.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
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
            id: "a_credibility_challenge",
            type: AnswerType.Challenge,
            text: "Some of these so-called experts have financial interests in selling security solutions. We base decisions on objective government analysis.",
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
              outcome_hack_diplomatic_crisis:
                OutcomeModifierWeight.SlightNegative,
              outcome_hack_health_scare: OutcomeModifierWeight.StrongPositive,
            },
          },
          {
            id: "a_credibility_neutral",
            type: AnswerType.Inform,
            text: "We appreciate diverse expert perspectives and will publish how inputs inform policy decisions through transparent, conflict-aware processes.",
            impacts: {},
            outcomeModifiers: {},
          },
        ],
      },
    ],
  },
};
