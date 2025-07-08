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
    rootQuestionId: "q_cheese_war_started",
    questions: {
      q_cheese_war_started: {
        id: "q_cheese_war_started",
        text: "The President started a trade war over a bad joke. How can you defend putting our farmers at risk because of a failed attempt at humor?",
        depth: 0,
        answers: [
          {
            id: "a_started_deflect",
            type: AnswerType.Deflect,
            text: "This isn't about a joke. Dairystan has had unfair trade practices for years. The President simply brought the issue to light.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.StrongNegative, // -8
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_cheese_public_rallies:
                OutcomeModifierWeight.SlightPositive, // +4
            },
            followUpId: "q_cheese_war_practices",
          },
          {
            id: "a_started_admit",
            type: AnswerType.Admit,
            text: "The President's comments were ill-advised, and we are working to de-escalate the situation they unintentionally created.",
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
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_cheese_war_practices: {
        id: "q_cheese_war_practices",
        text: "What specific 'unfair practices' are you referring to? Critics say this is a completely manufactured excuse to cover for the President's gaffe.",
        depth: 1,
        answers: [
          {
            id: "a_practices_challenge",
            type: AnswerType.Challenge,
            text: "I'm not going to negotiate a trade deal from this podium, but be assured, Treasury has a long list of grievances we are now addressing.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightNegative, // -4 -> -12 total
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral, // 0 -> +4 total
            },
          },
          {
            id: "a_practices_deny",
            type: AnswerType.Deny,
            text: "It is not a manufactured excuse. We have been in quiet negotiations on these points for months. The President's comment just made it public.",
            impacts: {},
            outcomeModifiers: {
              outcome_cheese_tariffs_eased:
                OutcomeModifierWeight.SlightPositive, // +4 -> -4 total
              outcome_cheese_tariffs_hurt_farmers:
                OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_cheese_public_rallies: OutcomeModifierWeight.Neutral, // 0 -> +4 total
            },
          },
        ],
      },
    },
  },
};
