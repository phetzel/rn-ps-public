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
    rootQuestionId: "q_mood_orwellian",
    questions: {
      q_mood_orwellian: {
        id: "q_mood_orwellian",
        text: "Are you serious? Forcing citizens to report their feelings to the government is something out of a dystopian novel. How is this not Orwellian?",
        depth: 0,
        answers: [
          {
            id: "a_orwellian_inform",
            type: AnswerType.Inform,
            text: "This is simply a new way to gather public health data. HHS uses surveys to track physical health, and this is a logical extension for mental health.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_mood_retracted: OutcomeModifierWeight.SlightNegative, // -4
              outcome_mood_non_compliance: OutcomeModifierWeight.SlightPositive, // +4
              outcome_mood_scaled_back: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_orwellian_challenge",
            type: AnswerType.Challenge,
            text: "That's a very dramatic and inaccurate description. We're trying to help people. Why is there so much resistance to a pro-health initiative?",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_mood_retracted: OutcomeModifierWeight.StrongNegative, // -8
              outcome_mood_non_compliance: OutcomeModifierWeight.StrongPositive, // +8
              outcome_mood_scaled_back: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_mood_resistance",
          },
        ],
      },
      q_mood_resistance: {
        id: "q_mood_resistance",
        text: "The 'resistance' is because it's creepy and invasive. Do you deny that Americans have a right to keep their emotional state private?",
        depth: 1,
        answers: [
          {
            id: "a_resistance_reassure",
            type: AnswerType.Reassure,
            text: "Of course we respect privacy. That's why we're exploring options, like an opt-in model, to ensure everyone is comfortable with the process.",
            impacts: {},
            outcomeModifiers: {
              outcome_mood_retracted: OutcomeModifierWeight.SlightPositive, // +4
              outcome_mood_non_compliance: OutcomeModifierWeight.SlightNegative, // -4
              outcome_mood_scaled_back: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_resistance_deny",
            type: AnswerType.Deny,
            text: "No one is forcing anyone to feel a certain way. This is just data collection. It's no more invasive than asking about income on a tax form.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Negative },
            },
            outcomeModifiers: {
              outcome_mood_retracted: OutcomeModifierWeight.SlightNegative, // -4 -> -12 total
              outcome_mood_non_compliance: OutcomeModifierWeight.SlightPositive, // +4 -> +12 total
              outcome_mood_scaled_back: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
