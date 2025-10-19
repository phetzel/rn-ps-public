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
      id: "q_coffee_cost",
      text: "Couldn't the billions spent on warehousing coffee be better used on healthcare or education? How do you justify this massive, odd expenditure?",
      answers: [
        {
          id: "a_cost_challenge",
          type: AnswerType.Challenge,
          text: "It's not an either/or proposition. We can and must do both. A stable economy, which this ensures, is what pays for those other programs.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Treasury]: {
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
              OutcomeModifierWeight.SlightNegative, // -4
            outcome_coffee_market_meddling: OutcomeModifierWeight.Neutral, // 0
          },
        },
        {
          id: "a_cost_admit",
          type: AnswerType.Inform,
          text: "The cost is significant, and it's a valid concern. Treasury is exploring cost-saving storage solutions to minimize the taxpayer burden.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
              [CabinetStaticId.HHS]: {
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
          followUpId: "q_coffee_storage_oversight",
        },
        {
          id: "a_cost_inform",
          type: AnswerType.Reassure,
          text: "According to economic analysis, coffee price volatility costs the economy $3.2 billion annually in lost productivity. This reserve prevents larger economic shocks.",
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
            outcome_coffee_price_shock_buffer:
              OutcomeModifierWeight.SlightPositive, // +4
            outcome_coffee_spoilage_scandal: OutcomeModifierWeight.Neutral, // 0
            outcome_coffee_market_meddling:
              OutcomeModifierWeight.SlightNegative, // -4
          },
          followUpId: "q_coffee_health_benefits",
        },
        {
          id: "a_cost_neutral",
          type: AnswerType.Deflect,
          text: "We will present a full fiscal and policy rationale, including alternatives considered, and invite public comment before finalizing implementation details.",
          impacts: {
            president: { weight: ExchangeImpactWeight.Positive },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
              },
            },
          },
          outcomeModifiers: {
            outcome_coffee_price_shock_buffer:
              OutcomeModifierWeight.SlightNegative, // -4
            outcome_coffee_market_meddling:
              OutcomeModifierWeight.SlightPositive, // +4
          },
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_coffee_storage_oversight",
        text: "What 'cost-saving' solutions? Are you talking about outsourcing the reserve to private companies, potentially creating a new corruption risk?",
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
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
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
            followUpId: "q_coffee_implementation_timeline",
          },
          {
            id: "a_storage_deny",
            type: AnswerType.Deny,
            text: "Absolutely not. This will be a fully government-run and secured operation. We will not be creating a new avenue for corporate profiteering.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
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
            id: "a_storage_inform",
            type: AnswerType.Inform,
            text: "We're reviewing public-private partnerships, but with ironclad transparency requirements. Any private involvement would be fully audited and publicly reported.",
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
              outcome_coffee_price_shock_buffer:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_spoilage_scandal:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_coffee_market_meddling: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_storage_neutral",
            type: AnswerType.Inform,
            text: "We will publish oversight plans, audit schedules, and transparency rules for any option considered so the public can evaluate risk and safeguards.",
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
              outcome_coffee_spoilage_scandal:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_market_meddling: OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
      {
        id: "q_coffee_health_benefits",
        text: "What about health implications? Are you encouraging caffeine dependency by ensuring coffee availability?",
        answers: [
          {
            id: "a_health_reassure",
            type: AnswerType.Reassure,
            text: "Research shows moderate coffee consumption has health benefits. We're not encouraging dependency - we're preventing withdrawal symptoms that could affect millions of Americans.",
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
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.Neutral, // 0
              outcome_coffee_market_meddling:
                OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_coffee_worker_protection",
          },
          {
            id: "a_health_challenge",
            type: AnswerType.Challenge,
            text: "That's a false choice. Coffee has documented health benefits and is part of American culture. Supply disruptions would create real physiological and economic harm.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.Neutral, // 0
              outcome_coffee_market_meddling: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_health_inform",
            type: AnswerType.Inform,
            text: "HHS data shows 85% of Americans consume coffee daily. Medical research indicates moderate consumption reduces risks of several diseases. This is about public health stability.",
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
              outcome_coffee_spoilage_scandal:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_market_meddling:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_health_neutral",
            type: AnswerType.Inform,
            text: "We will publish clear public health guidance and guardrails in consultation with medical experts while pursuing supply stability goals.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
    ],
    tertiaryQuestions: [
      {
        id: "q_coffee_implementation_timeline",
        text: "How long will this 'oversight' take to implement? Meanwhile, coffee prices could spike and Americans will blame the administration for delays.",
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
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
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
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
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
          {
            id: "a_timeline_deflect",
            type: AnswerType.Deflect,
            text: "We're moving as quickly as responsible governance allows. The alternative - doing nothing while prices potentially spike - would be far worse for American families.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
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
              outcome_coffee_price_shock_buffer: OutcomeModifierWeight.Neutral, // 0
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.Neutral, // 0
              outcome_coffee_market_meddling: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_timeline_neutral",
            type: AnswerType.Inform,
            text: "We will share a detailed timeline, responsible agencies, and progress updates so people can track delivery and hold us accountable.",
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
              outcome_coffee_price_shock_buffer:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_market_meddling:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
      {
        id: "q_coffee_worker_protection",
        text: "What about coffee shop workers? If the reserve stabilizes prices, could their tips and wages be affected?",
        answers: [
          {
            id: "a_worker_reassure",
            type: AnswerType.Reassure,
            text: "Price stability actually helps service workers by ensuring consistent customer traffic. When coffee prices spike, people cut back on café visits, hurting workers' income.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_price_shock_buffer:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.Neutral, // 0
              outcome_coffee_market_meddling:
                OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_worker_inform",
            type: AnswerType.Inform,
            text: "The coffee industry employs 1.6 million workers. Supply stability protects these jobs from boom-bust cycles that typically hurt workers most.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_worker_deflect",
            type: AnswerType.Deflect,
            text: "We're focused on preventing the kind of supply disruption that would close businesses and eliminate jobs entirely. That's the real threat to workers.",
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
              outcome_coffee_spoilage_scandal: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_worker_neutral",
            type: AnswerType.Inform,
            text: "We will monitor worker outcomes with labor groups and publish metrics on hours, wages, and staffing to ensure shared benefits.",
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
              outcome_coffee_price_shock_buffer:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_coffee_market_meddling:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
    ],
  },
};


