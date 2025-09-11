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
      id: "q_business_flight",
      text: "Major tech companies are threatening to move operations overseas because of this tax. Isn't the administration killing American innovation?",
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
          },
        },
          outcomeModifiers: {
            outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightNegative, // -4
            outcome_tax_global_trend: OutcomeModifierWeight.SlightPositive, // +4
            outcome_tax_trade_war: OutcomeModifierWeight.Neutral, // 0
          },
          followUpId: "q_small_business_impact",
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
                weight: ExchangeImpactWeight.Negative,
              },
            },
          },
          outcomeModifiers: {
            outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightNegative, // -4
            outcome_tax_global_trend: OutcomeModifierWeight.SlightPositive, // +4
            outcome_tax_trade_war: OutcomeModifierWeight.Neutral, // 0
          },
          followUpId: "q_revenue_sustainability",
        },
      {
        id: "a_flight_deflect",
        type: AnswerType.Deflect,
        text: "These companies are master deflectors - they cry 'innovation' when facing fair taxes but happily automate away American jobs for profit.",
        impacts: {
          president: { weight: ExchangeImpactWeight.SlightlyNegative },
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
            outcome_tax_offshore_exodus: OutcomeModifierWeight.StrongPositive, // +8
            outcome_tax_global_trend: OutcomeModifierWeight.StrongNegative, // -8
            outcome_tax_trade_war: OutcomeModifierWeight.SlightPositive, // +4
          },
        },
      {
        id: "a_flight_admit",
        type: AnswerType.Admit,
        text: "We're monitoring these concerns closely and are open to adjusting the implementation timeline to address legitimate competitiveness issues.",
        impacts: {
          president: { weight: ExchangeImpactWeight.SlightlyNegative },
          cabinet: {
            [CabinetStaticId.State]: {
              weight: ExchangeImpactWeight.SlightlyNegative,
            },
            [CabinetStaticId.Treasury]: {
              weight: ExchangeImpactWeight.SlightlyPositive,
            },
          },
        },
          outcomeModifiers: {
            outcome_tax_offshore_exodus: OutcomeModifierWeight.ModerateNegative, // -6
            outcome_tax_global_trend: OutcomeModifierWeight.ModeratePositive, // +6
            outcome_tax_trade_war: OutcomeModifierWeight.SlightNegative, // -4
          },
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_small_business_impact",
        text: "What about small manufacturers who can't relocate or afford automation taxes? Are you hurting the businesses you claim to protect?",
        answers: [
          {
            id: "a_small_business_reassure",
            type: AnswerType.Reassure,
            text: "The tax includes exemptions for businesses under $50 million in revenue and phase-in periods for mid-size companies. We're protecting small business, not punishing them.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
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
            followUpId: "q_compliance_costs",
          },
          {
            id: "a_small_business_admit",
            type: AnswerType.Admit,
            text: "You raise a valid concern. We're reviewing threshold adjustments and additional support programs for smaller manufacturers facing automation pressures.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_trade_war: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_small_business_challenge",
            type: AnswerType.Challenge,
            text: "That's backwards thinking. Small manufacturers need automation to compete globally. This tax punishes efficiency and rewards stagnation.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_trade_war: OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_small_business_neutral",
            type: AnswerType.Inform,
            text: "We will publish a small business navigator, phase-in schedules, and automatic safe harbors to keep compliance straightforward and affordable.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_trade_war: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
        ],
      },
      {
        id: "q_revenue_sustainability",
        text: "If companies actually leave, won't the tax revenue projections collapse, leaving workers with no retraining funding at all?",
        answers: [
          {
            id: "a_revenue_inform",
            type: AnswerType.Inform,
            text: "Treasury modeling shows revenue remains stable even with 15% industry relocation due to the tax's broad base and progressive structure.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_trade_war: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_economic_disruption",
          },
          {
            id: "a_revenue_deflect",
            type: AnswerType.Deflect,
            text: "The real question is why we should subsidize automation that eliminates jobs while giving corporations tax breaks for destroying communities.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
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
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_trade_war: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_revenue_challenge",
            type: AnswerType.Challenge,
            text: "Companies threatening to leave are bluffing. They need our markets, infrastructure, and educated workforce more than we need their empty threats.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive },
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_trade_war: OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_revenue_neutral",
            type: AnswerType.Inform,
            text: "Treasury will publish sensitivity analyses and contingency plans to maintain workforce funding even under relocation scenarios.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
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
    ],
    tertiaryQuestions: [
      {
        id: "q_compliance_costs",
        text: "How will businesses prove exemption eligibility? Won't bureaucracy defeat the purpose of helping small companies?",
        answers: [
          {
            id: "a_compliance_inform",
            type: AnswerType.Inform,
            text: "Treasury has streamlined the process - businesses simply file their standard tax returns. Companies under $50 million automatically qualify, with clear documentation requirements.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyNegative },
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
            },
            outcomeModifiers: {
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_trade_war: OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_compliance_admit",
            type: AnswerType.Admit,
            text: "You're right that compliance costs are a concern. We're working with small business associations to minimize paperwork while ensuring fair implementation.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
              cabinet: {
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Negative },
              },
            },
            outcomeModifiers: {
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_trade_war: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_compliance_deflect",
            type: AnswerType.Deflect,
            text: "Small businesses already navigate complex tax codes. This adds one line to existing forms while providing access to billions in training funds.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {
              outcome_tax_offshore_exodus: OutcomeModifierWeight.Neutral, // 0
              outcome_tax_global_trend: OutcomeModifierWeight.Neutral, // 0
              outcome_tax_trade_war: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_compliance_neutral",
            type: AnswerType.Inform,
            text: "We'll publish a one-page compliance checklist and API access to automate reporting; small firms can opt into simplified filing.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyNegative },
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive },
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
      {
        id: "q_economic_disruption",
        text: "What about the broader economic disruption? Won't this slow technological progress that drives overall prosperity?",
        answers: [
          {
            id: "a_disruption_challenge",
            type: AnswerType.Challenge,
            text: "That's Silicon Valley propaganda. Real prosperity comes from broadly shared economic growth, not just technological advancement that benefits a few.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
            },
            outcomeModifiers: {
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_trade_war: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_disruption_reassure",
            type: AnswerType.Reassure,
            text: "We're not stopping innovation - we're ensuring it benefits everyone. The tax funds research into automation that creates jobs, not just eliminates them.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_trade_war: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_disruption_inform",
            type: AnswerType.Inform,
            text: "Economic data shows automation without worker support creates instability. This tax ensures technological progress strengthens rather than weakens our economy.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
            },
            outcomeModifiers: {
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_trade_war: OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_disruption_neutral",
            type: AnswerType.Inform,
            text: "We will track productivity, wages, and investment and publish results so policy can be tuned to support sustainable innovation.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyNegative },
                [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive },
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
    ],
  },
};
