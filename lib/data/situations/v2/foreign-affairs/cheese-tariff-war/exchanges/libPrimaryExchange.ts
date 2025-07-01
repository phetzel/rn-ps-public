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
    rootQuestionId: "q_cheese_war_consumers",
    questions: {
      q_cheese_war_consumers: {
        id: "q_cheese_war_consumers",
        text: "This tariff spat means higher prices for consumers and lost jobs for our farmers. How does this 'Cheese Pride' help the average family?",
        depth: 0,
        answers: [
          {
            id: "a_consumers_inform",
            type: AnswerType.Inform,
            text: "Actually, HHS reports that our domestic cheese producers offer excellent, affordable alternatives that support local economies.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.ModerateNegative, // -6
              outcome_cheese_public_rallies:
                OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_cheese_war_long_term",
          },
          {
            id: "a_consumers_reassure",
            type: AnswerType.Reassure,
            text: "We are confident this will be a short-term issue. The Secretary of State is in direct contact with their counterpart to find a swift resolution.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.StrongPositive, // +8
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.StrongNegative, // -8
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral, // 0 -> -4 total
            },
          },
        ],
      },
      q_cheese_war_long_term: {
        id: "q_cheese_war_long_term",
        text: "But what's the long-term plan? Are you advocating for a permanent shift away from international trade toward protectionism?",
        depth: 1,
        answers: [
          {
            id: "a_long_term_deny",
            type: AnswerType.Deny,
            text: "Not at all. We believe in free and fair trade. This is about ensuring fairness, not ending trade. We fully expect imports to resume.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive, // +4 -> -2 total
              outcome_cheese_public_rallies:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
            },
          },
          {
            id: "a_long_term_challenge",
            type: AnswerType.Challenge,
            text: "The long-term plan is to have a strong domestic industry that isn't undercut by unfair foreign competition. Isn't that a good thing?",
            impacts: {},
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative, // -4 -> -10 total
              outcome_cheese_public_rallies:
                OutcomeModifierWeight.StrongPositive, // +8 -> +12 total
            },
          },
        ],
      },
    },
  },
};
