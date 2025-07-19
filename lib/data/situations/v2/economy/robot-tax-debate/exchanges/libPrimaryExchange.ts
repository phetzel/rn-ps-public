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
      id: "q_worker_protection",
      text: "Isn't this automation tax exactly what displaced workers need - a way to make companies pay for the jobs they're destroying?",
      answers: [
        {
          id: "a_protection_challenge",
          type: AnswerType.Challenge,
          text: "This isn't about punishment - it's about shared prosperity. Companies that benefit from automation should invest in the workforce that made it possible.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
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
          followUpId: "q_worker_displacement",
        },
        {
          id: "a_protection_inform",
          type: AnswerType.Inform,
          text: "The tax generates $50 billion annually for retraining programs, with clear metrics showing 80% job placement rates for participants.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyPositive },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
              },
            },
          },
          outcomeModifiers: {
            outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightNegative, // -4
            outcome_tax_global_trend: OutcomeModifierWeight.SlightPositive, // +4
            outcome_tax_trade_war: OutcomeModifierWeight.Neutral, // 0
          },
          followUpId: "q_corporate_accountability",
        },
        {
          id: "a_protection_deflect",
          type: AnswerType.Deflect,
          text: "Other nations are studying similar measures. We're leading on workforce protection, not following outdated trade theories that prioritize capital over people.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
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
          id: "a_protection_admit",
          type: AnswerType.Admit,
          text: "You're absolutely right. For too long, we've let corporations privatize gains while socializing the costs of technological disruption.",
          impacts: {
            president: { weight: ExchangeImpactWeight.SlightlyNegative },
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
        },
      ],
    },
    secondaryQuestions: [
      {
        id: "q_worker_displacement",
        text: "What about workers already displaced by automation? How does this tax help someone who lost their factory job last year?",
        answers: [
          {
            id: "a_displacement_inform",
            type: AnswerType.Inform,
            text: "The tax funds retroactive support - workers displaced in the past three years qualify for full retraining programs and transition assistance worth up to $25,000 per person.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
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
            followUpId: "q_income_support",
          },
          {
            id: "a_displacement_admit",
            type: AnswerType.Admit,
            text: "You're right that we should have acted sooner. This tax represents our commitment to never again leave workers behind when technology advances.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
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
          {
            id: "a_displacement_challenge",
            type: AnswerType.Challenge,
            text: "We're not just helping displaced workers - we're changing the whole system so automation creates shared prosperity instead of concentrated wealth.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
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
          },
        ],
      },
      {
        id: "q_corporate_accountability",
        text: "How do you respond to critics who say this tax unfairly targets successful companies for being innovative?",
        answers: [
          {
            id: "a_accountability_challenge",
            type: AnswerType.Challenge,
            text: "Success built on eliminating livelihoods isn't innovation - it's extraction. Real innovation improves life for everyone, not just shareholders.",
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
            followUpId: "q_wealth_inequality",
          },
          {
            id: "a_accountability_inform",
            type: AnswerType.Inform,
            text: "Companies using automation receive massive tax breaks and subsidies. This tax simply asks them to contribute to the social infrastructure that made their success possible.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
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
          },
          {
            id: "a_accountability_deflect",
            type: AnswerType.Deflect,
            text: "These same companies demand public education, infrastructure, and legal systems - but don't want to pay for maintaining the society that enables their profits.",
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
        id: "q_income_support",
        text: "Is retraining enough? What about workers who can't adapt or are too close to retirement for new careers?",
        answers: [
          {
            id: "a_income_inform",
            type: AnswerType.Inform,
            text: "We're piloting universal basic income programs in affected communities, funded directly by automation tax revenue. No one gets left behind.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
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
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_trade_war: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_income_challenge",
            type: AnswerType.Challenge,
            text: "The automation dividend belongs to all of us. These technologies were built on decades of public research and education investment.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
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
          },
          {
            id: "a_income_admit",
            type: AnswerType.Admit,
            text: "You're absolutely right. Retraining isn't enough for everyone. We need comprehensive social support that recognizes the dignity of all work.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
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
        ],
      },
      {
        id: "q_wealth_inequality",
        text: "Will this tax actually address the growing wealth gap, or just create another government program that companies find ways around?",
        answers: [
          {
            id: "a_inequality_challenge",
            type: AnswerType.Challenge,
            text: "This is exactly the kind of systemic change we need. Automation should reduce everyone's working hours, not just eliminate some people's jobs entirely.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
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
          },
          {
            id: "a_inequality_admit",
            type: AnswerType.Admit,
            text: "You raise important concerns about enforcement. That's why we're including worker representatives on the oversight board and strict penalties for avoidance.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
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
            id: "a_inequality_inform",
            type: AnswerType.Inform,
            text: "The tax includes anti-avoidance measures and international cooperation agreements. Justice Department has new authority to pursue companies that try to game the system.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
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
          },
        ],
      },
    ],
  },
};
