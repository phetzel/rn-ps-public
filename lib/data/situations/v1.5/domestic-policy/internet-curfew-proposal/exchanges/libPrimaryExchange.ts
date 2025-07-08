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
        text: "A government-mandated internet bedtime? This is a breathtaking assault on personal freedom and freedom of speech. How can you possibly justify it?",
        depth: 0,
        answers: [
          {
            id: "a_freedom_deflect",
            type: AnswerType.Deflect,
            text: "This isn't about restricting freedom; it's about promoting public health. We have overwhelming evidence of the harm caused by sleep deprivation.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
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
            text: "We take civil liberties very seriously. The DOJ is ensuring any proposal will be narrowly tailored and withstand strict legal scrutiny.",
            impacts: {
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
        ],
      },
      q_curfew_health: {
        id: "q_curfew_health",
        text: "You can't mandate 'public health' by controlling what people do in their own homes. Are you going to start enforcing bedtimes next?",
        depth: 1,
        answers: [
          {
            id: "a_health_inform",
            type: AnswerType.Inform,
            text: "This is about regulating a public utility. HHS has found this is the most effective way to address a documented national health issue.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_curfew_black_market: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_health_challenge",
            type: AnswerType.Challenge,
            text: "That's a deliberately obtuse comparison. We're talking about a specific, targeted intervention, not some dystopian fantasy.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_curfew_shelved: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_curfew_black_market: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_curfew_voluntary_rollout: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
