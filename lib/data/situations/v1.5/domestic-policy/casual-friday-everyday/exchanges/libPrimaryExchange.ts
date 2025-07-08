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
    rootQuestionId: "q_casual_modern",
    questions: {
      q_casual_modern: {
        id: "q_casual_modern",
        text: "This seems like a great, modernizing step for the federal workforce. What was the main motivation for this forward-thinking policy?",
        depth: 0,
        answers: [
          {
            id: "a_modern_inform",
            type: AnswerType.Inform,
            text: "Studies from HHS clearly show that flexible dress codes can significantly boost morale and productivity. This is about smarter work, not just comfort.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_casual_morale_boost: OutcomeModifierWeight.StrongPositive, // +8
              outcome_casual_productivity_plunge:
                OutcomeModifierWeight.StrongNegative, // -8
              outcome_casual_policy_walked_back: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_modern_deflect",
            type: AnswerType.Deflect,
            text: "This administration believes in trusting our employees. We want to foster a culture of creativity and results, not one based on outdated traditions.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_casual_morale_boost: OutcomeModifierWeight.SlightPositive, // +4
              outcome_casual_productivity_plunge:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_casual_policy_walked_back: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_casual_private_sector",
          },
        ],
      },
      q_casual_private_sector: {
        id: "q_casual_private_sector",
        text: "Do you see this as a model for the private sector to follow? Is the government trying to set a new national standard for workplace attire?",
        depth: 1,
        answers: [
          {
            id: "a_private_deny",
            type: AnswerType.Deny,
            text: "No, this policy applies only to the federal workforce. Private companies are, of course, free to set their own dress code standards.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_casual_morale_boost: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_casual_productivity_plunge:
                OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_casual_policy_walked_back: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_private_challenge",
            type: AnswerType.Challenge,
            text: "We hope so. If the private sector wants to compete for top talent, they should absolutely look at modernizing their workplace culture.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_casual_morale_boost: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_casual_productivity_plunge:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_casual_policy_walked_back: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
