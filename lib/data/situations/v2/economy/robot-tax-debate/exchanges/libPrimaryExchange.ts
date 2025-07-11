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
    rootQuestionId: "q_worker_protection",
    questions: {
      q_worker_protection: {
        id: "q_worker_protection",
        text: "Isn't this automation tax exactly what displaced workers need - a way to make companies pay for the jobs they're destroying?",
        depth: 0,
        answers: [
          {
            id: "a_protection_challenge",
            type: AnswerType.Challenge,
            text: "This isn't about punishment - it's about shared prosperity. Companies that benefit from automation should invest in the workforce that made it possible.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
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
            followUpId: "q_international_competition",
          },
          {
            id: "a_protection_deflect",
            type: AnswerType.Deflect,
            text: "Other nations are studying similar measures. We're leading on workforce protection, not following outdated trade theories that prioritize capital over people.",
            impacts: {
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
        ],
      },
      q_worker_displacement: {
        id: "q_worker_displacement",
        text: "But what about workers already displaced by automation? How does this tax help someone who lost their factory job last year?",
        depth: 1,
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
          },
          {
            id: "a_displacement_admit",
            type: AnswerType.Admit,
            text: "You're right that we should have acted sooner. This tax represents our commitment to never again leave workers behind when technology advances.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
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
      q_international_competition: {
        id: "q_international_competition",
        text: "How do you respond to critics who say this tax will drive tech companies overseas and hurt American competitiveness?",
        depth: 1,
        answers: [
          {
            id: "a_competition_deflect",
            type: AnswerType.Deflect,
            text: "Real competitiveness comes from having a skilled, adaptable workforce. We're investing in human capital while others just chase short-term profits.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
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
            id: "a_competition_reassure",
            type: AnswerType.Reassure,
            text: "We're working with international partners to create common standards. This isn't about putting America at a disadvantage - it's about fair competition.",
            impacts: {
              cabinet: {
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
            followUpId: "q_trade_retaliation",
          },
        ],
      },
      q_trade_retaliation: {
        id: "q_trade_retaliation",
        text: "What if countries impose counter-tariffs? Are you prepared for a trade war?",
        depth: 2,
        answers: [
          {
            id: "a_retaliation_challenge",
            type: AnswerType.Challenge,
            text: "Countries that retaliate against worker protection policies are showing their true priorities. We won't be bullied into abandoning American workers by threats of trade war.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
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
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_trade_war: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_retaliation_deflect",
            type: AnswerType.Deflect,
            text: "Trade disputes are resolved through established WTO mechanisms. We're confident our policy aligns with international law and worker protection standards.",
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
              outcome_tax_offshore_exodus: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_global_trend: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_trade_war: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
