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
            text: "We're actually boosting innovation by ensuring technology serves everyone, not just shareholders. Real innovators welcome the challenge of building inclusive prosperity.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_trade_war: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_revenue_projections",
          },
          {
            id: "a_flight_inform",
            type: AnswerType.Inform,
            text: "Treasury analysis shows the tax affects only 3% of companies while generating $60 billion annually for workforce development - a net positive for innovation.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
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
            id: "a_flight_deflect",
            type: AnswerType.Deflect,
            text: "These companies are master deflectors - they cry 'innovation' when facing fair taxes but happily automate away American jobs for profit.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_tax_offshore_exodus: OutcomeModifierWeight.StrongPositive, // +8
              outcome_tax_global_trend: OutcomeModifierWeight.StrongNegative, // -8
              outcome_tax_trade_war: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_flight_admit",
            type: AnswerType.Admit,
            text: "We're monitoring these concerns closely and are open to adjusting the implementation timeline to address legitimate competitiveness issues.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
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
