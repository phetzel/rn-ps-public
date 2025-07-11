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
    rootQuestionId: "q_curfew_freedom",
    questions: {
      q_curfew_freedom: {
        id: "q_curfew_freedom",
        text: "Government-mandated internet bedtime? This assaults personal freedom and free speech. How do you justify it?", // 105 chars - within 60-150 limit
        depth: 0,
        answers: [
          {
            id: "a_freedom_deflect",
            type: AnswerType.Deflect,
            text: "This isn't about restricting freedom; it's promoting public health. We have overwhelming evidence of sleep deprivation harm.", // 127 chars - within 80-180 limit
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative, // Added negative impact for HHS to balance
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightPositive, // +4
              outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_curfew_health",
          },
          {
            id: "a_freedom_reassure",
            type: AnswerType.Reassure,
            text: "We take civil liberties seriously. DOJ ensures any proposal will be narrowly tailored and withstand legal scrutiny.", // 115 chars - within 80-180 limit
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightPositive, // +4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_freedom_inform",
            type: AnswerType.Inform,
            text: "HHS studies show sleep deprivation affects 70% of Americans. This targeted intervention addresses a documented crisis.", // 119 chars - within 80-180 limit
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_freedom_challenge",
            type: AnswerType.Challenge,
            text: "That's hyperbolic. Homeland Security confirms this is about public health, not surveillance or control.", // 103 chars - within 80-180 limit
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightPositive, // +4
              outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_curfew_health: {
        id: "q_curfew_health",
        text: "You can't mandate 'public health' by controlling what people do at home. Are you enforcing bedtimes next?", // 103 chars - within 60-150 limit
        depth: 1,
        answers: [
          {
            id: "a_health_inform",
            type: AnswerType.Inform,
            text: "This regulates a public utility. HHS found this is the most effective way to address a documented national health issue.", // 121 chars - within 80-180 limit
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_voluntary_rollout:
                OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_health_challenge",
            type: AnswerType.Challenge,
            text: "That's deliberately obtuse. We're discussing a specific, targeted intervention, not some dystopian fantasy scenario.", // 117 chars - within 80-180 limit
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_curfew_black_market: OutcomeModifierWeight.SlightPositive, // +4
              outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
