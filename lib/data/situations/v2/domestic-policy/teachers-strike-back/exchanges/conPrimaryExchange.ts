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
    rootQuestionId: "q_government_weakness",
    questions: {
      q_government_weakness: {
        id: "q_government_weakness",
        text: "Isn't the administration showing weakness by caving to striking teachers instead of enforcing the law and keeping schools open?",
        depth: 0,
        answers: [
          {
            id: "a_weakness_challenge",
            type: AnswerType.Challenge,
            text: "We're not 'caving' - we're making smart policy decisions based on what works for students, not political posturing.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_security_crisis:
                OutcomeModifierWeight.MajorNegative, // -12
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.StrongPositive, // +8
            },
            followUpId: "q_cost_crisis",
          },
          {
            id: "a_weakness_admit",
            type: AnswerType.Admit,
            text: "You're right that we could have handled this better. The karaoke mandate created unnecessary conflict when we should focus on real student needs.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_karaoke_compromise: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_weakness_reassure",
            type: AnswerType.Reassure,
            text: "We're prioritizing student welfare above all else. Our health officials are implementing crisis support programs for affected families.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_karaoke_compromise: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_weakness_deny",
            type: AnswerType.Deny,
            text: "This isn't a security issue requiring federal oversight. Communities can manage educational policy disputes without crisis intervention.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus: OutcomeModifierWeight.Neutral, // 0
              outcome_strike_security_crisis:
                OutcomeModifierWeight.StrongPositive, // +8
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.StrongNegative, // -8
            },
          },
        ],
      },
      q_cost_crisis: {
        id: "q_cost_crisis",
        text: "What's the daily cost to taxpayers of having millions of children out of school while bureaucrats argue over dance moves?",
        depth: 1,
        answers: [
          {
            id: "a_cost_inform",
            type: AnswerType.Inform,
            text: "The economic impact is significant - roughly $400 million daily in lost productivity and emergency childcare costs. That's why we're prioritizing resolution.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_cost_deflect",
            type: AnswerType.Deflect,
            text: "The real cost is to our children's education. We won't put a price tag on doing right by students and teachers.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_security_crisis:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_karaoke_compromise:
                OutcomeModifierWeight.StrongNegative, // -8
            },
          },
        ],
      },
    },
  },
};
