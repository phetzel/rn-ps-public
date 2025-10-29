import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const independentPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.IndependentPrimary,
  content: {
    rootQuestion: {
      id: "q_coffee_necessity",
      text: "Is coffee really so essential that it warrants a strategic reserve? What happens if this becomes a model for other commodities?",
      answers: [
        {
          id: "a_necessity_deflect",
          type: AnswerType.Deflect,
          text: "We're focused on this specific situation and the supply chain vulnerabilities we've identified. Each commodity has its own unique considerations.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyPositive },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_coffee_price_shock_buffer: OutcomeModifierWeight.SlightNegative, // -4
            outcome_coffee_spoilage_scandal: OutcomeModifierWeight.Neutral, // 0
            outcome_coffee_market_meddling: OutcomeModifierWeight.SlightPositive, // +4
          },
        },
        {
          id: "a_necessity_inform",
          type: AnswerType.Inform,
          text: "Coffee consumption affects 85% of adults daily. Supply disruptions would impact worker productivity and economic stability significantly.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
            },
          },
          outcomeModifiers: {
            outcome_coffee_price_shock_buffer: OutcomeModifierWeight.Neutral, // 0
            outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightNegative, // -4
            outcome_coffee_market_meddling: OutcomeModifierWeight.SlightPositive, // +4
          },
          followUpId: "q_coffee_health_dependency",
        },
        {
          id: "a_necessity_admit",
          type: AnswerType.Challenge,
          text: "You're right to question the precedent. We're establishing strict criteria for strategic reserves to prevent this from becoming a blank check for any commodity.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_coffee_price_shock_buffer: OutcomeModifierWeight.StrongPositive,
            outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightPositive,
            outcome_coffee_market_meddling: OutcomeModifierWeight.MajorNegative,
          },
          followUpId: "q_coffee_storage_risks",
        },
        {
          id: "a_necessity_neutral",
          type: AnswerType.Reassure,
          text: "We will set clear reserve criteria, publish triggers and safeguards, and consult internationally to avoid unintended precedent.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {},
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_coffee_health_dependency",
        text: "You're treating coffee like a public health necessity. Are you seriously suggesting the government should manage America's caffeine supply?",
        answers: [
          {
            id: "a_health_reassure",
            type: AnswerType.Reassure,
            text: "We're not managing consumption, just ensuring availability. This is about preventing supply shocks that could affect millions of Americans.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_coffee_spoilage_scandal:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_coffee_market_meddling:
                OutcomeModifierWeight.StrongNegative, // -8
            },
          },
          {
            id: "a_health_challenge",
            type: AnswerType.Challenge,
            text: "That's exactly the kind of thinking that leads to government overreach. We're addressing a real economic vulnerability, not micromanaging habits.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.StrongPositive,
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightPositive,
              outcome_coffee_market_meddling: OutcomeModifierWeight.MajorNegative,
            },
          },
          {
            id: "a_health_inform",
            type: AnswerType.Inform,
            text: "Medical research shows 64% of Americans experience withdrawal symptoms without regular caffeine. Supply disruptions would have real physiological impacts.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.Neutral, // 0
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_market_meddling: OutcomeModifierWeight.SlightPositive, // +4
            },
            followUpId: "q_coffee_quality_control",
          },
          {
            id: "a_health_neutral",
            type: AnswerType.Reassure,
            text: "We will publish medical guidance and limit-setting principles so this policy addresses disruption risk without promoting consumption.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
      {
        id: "q_coffee_storage_risks",
        text: "What safeguards prevent the reserve from becoming a massive waste of taxpayer money? How do you avoid spoilage and ensure quality over time?",
        answers: [
          {
            id: "a_storage_inform",
            type: AnswerType.Inform,
            text: "We're implementing rotating stock systems, climate-controlled storage, and regular quality testing. Homeland Security is overseeing the facility security and integrity.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
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
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightPositive, // +4
              outcome_coffee_market_meddling: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_storage_admit",
            type: AnswerType.Admit,
            text: "Storage risks are real and we're still working through the technical challenges. We're consulting with coffee industry experts to minimize spoilage.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.Neutral, // 0
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_market_meddling: OutcomeModifierWeight.SlightPositive, // +4
            },
            followUpId: "q_coffee_market_impact",
          },
          {
            id: "a_storage_deflect",
            type: AnswerType.Deflect,
            text: "We're applying the same standards used for other strategic reserves. The alternative - being caught unprepared during a supply crisis - would be far more costly.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.SlightPositive,
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightNegative,
              outcome_coffee_market_meddling: OutcomeModifierWeight.Neutral,
            },
          },
          {
            id: "a_storage_neutral",
            type: AnswerType.Inform,
            text: "We will publish audit schedules, spoilage thresholds, and corrective protocols with independent oversight.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.SlightPositive,
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.Neutral,
              outcome_coffee_market_meddling: OutcomeModifierWeight.SlightNegative,
            },
          },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: "q_coffee_quality_control",
        text: "How do you ensure the reserve coffee maintains quality over potentially years of storage? Won't this just create a stockpile of stale, unusable beans?",
        answers: [
          {
            id: "a_quality_inform",
            type: AnswerType.Inform,
            text: "We're using nitrogen-flushed containers and temperature control with rotating stock systems to ensure freshness.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Neutral },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightPositive, // +4
              outcome_coffee_market_meddling: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_quality_admit",
            type: AnswerType.Admit,
            text: "Quality maintenance is challenging and we're learning from other countries' experiences. There's definitely risk of waste, but we believe the benefits outweigh the costs.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.SlightPositive, // +4
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_market_meddling: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_quality_deflect",
            type: AnswerType.Deflect,
            text: "We're confident in our storage protocols. The bigger concern should be what happens to Americans if we don't have this reserve during a global supply crisis.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.Neutral, // 0
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightPositive, // +4
              outcome_coffee_market_meddling: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_quality_neutral",
            type: AnswerType.Inform,
            text: "Quality protocols and rotating inventory will be published with public dashboards to verify performance and freshness standards are met.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.Neutral, // 0
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_market_meddling: OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
      {
        id: "q_coffee_market_impact",
        text: "What happens to coffee prices and market dynamics when the government holds massive stockpiles? Are you creating artificial scarcity or abundance?",
        answers: [
          {
            id: "a_market_inform",
            type: AnswerType.Inform,
            text: "Economic models show minimal market distortion. The reserve only activates during supply emergencies, not normal market conditions. We're stabilizing, not manipulating prices.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightPositive, // +4
              outcome_coffee_market_meddling: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_market_admit",
            type: AnswerType.Admit,
            text: "Any government intervention affects markets. We're trying to minimize distortions, but preventing supply shocks is worth some market impact.",
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
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.SlightPositive, // +4
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_market_meddling: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_market_deflect",
            type: AnswerType.Deflect,
            text: "We're committed to transparent reserve management. Market impacts will be monitored and we'll adjust policies if unexpected distortions emerge.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.Neutral, // 0
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightPositive, // +4
              outcome_coffee_market_meddling: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_market_neutral",
            type: AnswerType.Inform,
            text: "We will publish economic monitoring and guardrails so reserve operations stabilize supply only during genuine emergencies.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.Neutral, // 0
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_market_meddling: OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
    ],
  },
};
