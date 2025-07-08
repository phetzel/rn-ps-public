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
    rootQuestionId: "q_bridge_community",
    questions: {
      q_bridge_community: {
        id: "q_bridge_community",
        text: "While critics focus on cost, locals claim this bridge is their only hope. Is this the government finally investing in a forgotten community?",
        depth: 0,
        answers: [
          {
            id: "a_bridge_community_inform",
            type: AnswerType.Inform,
            text: "The project provides vital transport links to an underserved region. Impact studies project a significant long-term return through new commerce.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_bridge_scandal: OutcomeModifierWeight.ModerateNegative, // -6
              outcome_bridge_tourist_trap:
                OutcomeModifierWeight.ModeratePositive, // +6
              outcome_bridge_limbo: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_bridge_roi_proof",
          },
          {
            id: "a_bridge_community_deflect",
            type: AnswerType.Deflect,
            text: "The administration believes in investing in all of America, not just major urban centers. This project is a symbol of that commitment.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_bridge_scandal: OutcomeModifierWeight.SlightNegative, // -4
              outcome_bridge_tourist_trap: OutcomeModifierWeight.Neutral, // 0
              outcome_bridge_limbo: OutcomeModifierWeight.SlightPositive, // +4
            },
            followUpId: "q_bridge_symbolism_cost",
          },
        ],
      },
      q_bridge_roi_proof: {
        id: "q_bridge_roi_proof",
        text: "What specific data are those projections based on? Past government projects have often failed to meet such rosy economic forecasts.",
        depth: 1,
        answers: [
          {
            id: "a_bridge_roi_inform",
            type: AnswerType.Inform,
            text: "The Treasury's models are based on census data, regional commerce reports, and traffic projections. We're confident in the numbers.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_bridge_scandal: OutcomeModifierWeight.SlightNegative, // -4
              outcome_bridge_tourist_trap: OutcomeModifierWeight.SlightPositive, // +4
              outcome_bridge_limbo: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_bridge_roi_deflect",
            type: AnswerType.Deflect,
            text: "We don't conduct policy debates by nitpicking spreadsheets. The bigger picture is about growth, and we're committed to delivering it.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_bridge_scandal: OutcomeModifierWeight.SlightPositive, // +4
              outcome_bridge_tourist_trap: OutcomeModifierWeight.SlightNegative, // -4
              outcome_bridge_limbo: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_bridge_symbolism_cost: {
        id: "q_bridge_symbolism_cost",
        text: "Is a $2 billion bridge the most cost-effective 'symbol' you could come up with to show commitment to rural America?",
        depth: 1,
        answers: [
          {
            id: "a_bridge_symbol_reassure",
            type: AnswerType.Reassure,
            text: "It's not just a symbol, it's a substantive investment. We believe the economic benefits will far outweigh the initial costs for this region.",
            impacts: {},
            outcomeModifiers: {
              outcome_bridge_scandal: OutcomeModifierWeight.SlightNegative, // -4
              outcome_bridge_tourist_trap: OutcomeModifierWeight.SlightPositive, // +4
              outcome_bridge_limbo: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_bridge_symbol_deflect_again",
            type: AnswerType.Deflect,
            text: "You can't put a price tag on showing our support for the hardworking people of this nation. It's about our values, not just numbers.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Negative },
            },
            outcomeModifiers: {
              outcome_bridge_scandal: OutcomeModifierWeight.Neutral, // 0
              outcome_bridge_tourist_trap: OutcomeModifierWeight.SlightNegative, // -4
              outcome_bridge_limbo: OutcomeModifierWeight.SlightPositive, // +4
            },
            followUpId: "q_bridge_frustrated_final",
          },
        ],
      },
      q_bridge_frustrated_final: {
        id: "q_bridge_frustrated_final",
        text: "So you're saying there's no budget limit when it comes to 'symbolism'? That seems fiscally reckless. Can you give a direct answer?",
        depth: 2,
        answers: [
          {
            id: "a_bridge_final_admit",
            type: AnswerType.Admit,
            text: "You're right, that was a poor choice of words. Of course there are limits. Every project is subject to rigorous fiscal and legal oversight.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_bridge_scandal: OutcomeModifierWeight.ModeratePositive, // +6
              outcome_bridge_tourist_trap:
                OutcomeModifierWeight.ModerateNegative, // -6
              outcome_bridge_limbo: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_bridge_final_challenge",
            type: AnswerType.Challenge,
            text: "I'm not going to let you twist my words. This administration is fully committed to fiscal discipline AND supporting rural communities.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_bridge_scandal: OutcomeModifierWeight.ModerateNegative, // -6
              outcome_bridge_tourist_trap: OutcomeModifierWeight.Neutral, // 0
              outcome_bridge_limbo: OutcomeModifierWeight.ModeratePositive, // +6
            },
          },
        ],
      },
    },
  },
};
