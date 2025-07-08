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
        text: "A strategic reserve for coffee seems... unusual. Is this a serious national security measure or a vanity project for a coffee-loving administration?",
        depth: 0,
        answers: [
          {
            id: "a_coffee_reassure",
            type: AnswerType.Reassure,
            text: "This is about supply chain stability. Securing key goods, from microchips to coffee beans, is a cornerstone of our national security strategy.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer:
                OutcomeModifierWeight.StrongPositive, // +8
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.Neutral, // 0
              outcome_coffee_market_meddling:
                OutcomeModifierWeight.StrongNegative, // -8
            },
            followUpId: "q_coffee_slippery_slope",
          },
          {
            id: "a_coffee_deflect",
            type: AnswerType.Deflect,
            text: "A caffeinated nation is a productive nation. This is about ensuring our country's economic engine never has to run on empty.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_coffee_spoilage_scandal:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_market_meddling: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_coffee_slippery_slope: {
        id: "q_coffee_slippery_slope",
        text: "If coffee is a national security asset, what's next? A Strategic Donut Reserve? Where does this kind of thinking end?",
        depth: 1,
        answers: [
          {
            id: "a_slope_inform",
            type: AnswerType.Inform,
            text: "We have clear metrics. Coffee is a multi-billion dollar industry with direct ties to daily workforce productivity. Donuts do not meet that threshold.",
            impacts: {
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
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_market_meddling: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_slope_challenge",
            type: AnswerType.Challenge,
            text: "That's a ridiculous comparison. We're talking about a globally traded commodity, not a breakfast pastry. Let's keep this discussion serious.",
            impacts: {},
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.Neutral, // 0
              outcome_coffee_spoilage_scandal:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_market_meddling:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
    },
  },
};
