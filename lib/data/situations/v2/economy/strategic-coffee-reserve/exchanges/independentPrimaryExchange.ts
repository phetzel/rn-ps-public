import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/types";

export const independentPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.IndependentPrimary,
  content: {
    rootQuestionId: "q_coffee_necessity",
    questions: {
      q_coffee_necessity: {
        id: "q_coffee_necessity",
        text: "Is coffee really so essential that it warrants a strategic reserve? What happens if this becomes a model for other commodities?",
        depth: 0,
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
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.Neutral, // 0
              outcome_coffee_market_meddling:
                OutcomeModifierWeight.SlightPositive, // +4
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
              outcome_coffee_price_shock_buffer:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_coffee_spoilage_scandal:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_market_meddling: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_coffee_health_impact",
          },
        ],
      },
      q_coffee_health_impact: {
        id: "q_coffee_health_impact",
        text: "You're treating coffee like a public health necessity. Are you seriously suggesting the government should manage America's caffeine supply?",
        depth: 1,
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
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.Neutral, // 0
              outcome_coffee_spoilage_scandal:
                OutcomeModifierWeight.ModerateNegative, // -6
              outcome_coffee_market_meddling:
                OutcomeModifierWeight.ModeratePositive, // +6
            },
          },
        ],
      },
    },
  },
};
