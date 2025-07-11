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
    rootQuestionId: "q_coffee_cost",
    questions: {
      q_coffee_cost: {
        id: "q_coffee_cost",
        text: "Couldn't the billions spent on warehousing coffee be better used on healthcare or education? How do you justify this massive, odd expenditure?",
        depth: 0,
        answers: [
          {
            id: "a_cost_challenge",
            type: AnswerType.Challenge,
            text: "It's not an either/or proposition. We can and must do both. A stable economy, which this ensures, is what pays for those other programs.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
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
            id: "a_cost_admit",
            type: AnswerType.Admit,
            text: "The cost is significant, and it's a valid concern. Treasury is exploring cost-saving storage solutions to minimize the taxpayer burden.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.Neutral, // 0
              outcome_coffee_spoilage_scandal:
                OutcomeModifierWeight.ModeratePositive, // +6
              outcome_coffee_market_meddling:
                OutcomeModifierWeight.ModerateNegative, // -6
            },
            followUpId: "q_coffee_storage_details",
          },
        ],
      },
      q_coffee_storage_details: {
        id: "q_coffee_storage_details",
        text: "What 'cost-saving' solutions? Are you talking about outsourcing the reserve to private companies, potentially creating a new corruption risk?",
        depth: 1,
        answers: [
          {
            id: "a_storage_reassure",
            type: AnswerType.Reassure,
            text: "All options are on the table, but any partnership will be subject to strict federal oversight to prevent any misuse of funds or resources.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer:
                OutcomeModifierWeight.ModerateNegative, // -6
              outcome_coffee_spoilage_scandal:
                OutcomeModifierWeight.ModeratePositive, // +6
              outcome_coffee_market_meddling: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_coffee_timeline",
          },
          {
            id: "a_storage_deny",
            type: AnswerType.Deny,
            text: "Absolutely not. This will be a fully government-run and secured operation. We will not be creating a new avenue for corporate profiteering.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
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
        ],
      },
      q_coffee_timeline: {
        id: "q_coffee_timeline",
        text: "How long will this 'oversight' take to implement? Meanwhile, coffee prices could spike and Americans will blame the administration for delays.",
        depth: 2,
        answers: [
          {
            id: "a_timeline_reassure",
            type: AnswerType.Reassure,
            text: "Treasury has fast-tracked the implementation. We expect initial reserves to be operational within 60 days to provide immediate market stability.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
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
            id: "a_timeline_admit",
            type: AnswerType.Admit,
            text: "You're right that timing is critical. We're balancing speed with proper oversight - it's better to do this right than to rush and create bigger problems.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.Neutral, // 0
              outcome_coffee_spoilage_scandal:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_coffee_market_meddling:
                OutcomeModifierWeight.SlightNegative, // -4
            },
          },
        ],
      },
    },
  },
};
