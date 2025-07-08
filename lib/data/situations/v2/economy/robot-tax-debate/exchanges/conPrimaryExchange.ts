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
    rootQuestionId: "q_business_flight",
    questions: {
      q_business_flight: {
        id: "q_business_flight",
        text: "Major tech companies are threatening to move operations overseas because of this tax. Isn't the administration killing American innovation?",
        depth: 0,
        answers: [
          {
            id: "a_flight_challenge",
            type: AnswerType.Challenge,
            text: "These are empty threats from companies that already pay almost nothing in taxes. Real innovators understand the value of an educated workforce.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_trade_war: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_revenue_projections",
          },
          {
            id: "a_flight_admit",
            type: AnswerType.Admit,
            text: "We're monitoring these concerns closely and are open to adjusting the implementation timeline to address legitimate competitiveness issues.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_tax_offshore_exodus:
                OutcomeModifierWeight.ModerateNegative, // -6
              outcome_tax_global_trend: OutcomeModifierWeight.ModeratePositive, // +6
              outcome_tax_trade_war: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_revenue_projections: {
        id: "q_revenue_projections",
        text: "If companies actually leave, won't the tax revenue projections collapse, leaving workers with no retraining funding at all?",
        depth: 1,
        answers: [
          {
            id: "a_revenue_inform",
            type: AnswerType.Inform,
            text: "Treasury modeling shows revenue remains stable even with 15% industry relocation due to the tax's broad base and progressive structure.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_trade_war: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_revenue_deflect",
            type: AnswerType.Deflect,
            text: "The real question is why we should subsidize automation that eliminates jobs while giving corporations tax breaks for destroying communities.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_trade_war: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
