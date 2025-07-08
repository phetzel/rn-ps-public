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
    rootQuestionId: "q_student_welfare",
    questions: {
      q_student_welfare: {
        id: "q_student_welfare",
        text: "With millions of students out of school, shouldn't the administration prioritize their mental health over defending a failed karaoke policy?",
        depth: 0,
        answers: [
          {
            id: "a_welfare_reassure",
            type: AnswerType.Reassure,
            text: "Student wellness is our top priority. We're launching comprehensive mental health support while working to resolve this quickly.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_wellness_focus:
                OutcomeModifierWeight.ModeratePositive, // +6
              outcome_strike_security_crisis:
                OutcomeModifierWeight.ModerateNegative, // -6
              outcome_strike_karaoke_compromise: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_welfare_deflect",
            type: AnswerType.Deflect,
            text: "This administration has consistently supported education. These strikes unfortunately distract from our broader student success agenda.",
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
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_karaoke_compromise: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_security_concern",
          },
        ],
      },
      q_security_concern: {
        id: "q_security_concern",
        text: "Is Homeland Security really monitoring school closures as a potential security threat to communities?",
        depth: 1,
        answers: [
          {
            id: "a_security_deny",
            type: AnswerType.Deny,
            text: "Homeland Security focuses on real threats, not educational disputes. This isn't a security matter.",
            impacts: {
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
          {
            id: "a_security_inform",
            type: AnswerType.Inform,
            text: "We monitor all situations affecting community stability. Mass school closures require coordination with local authorities for public safety.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
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
        ],
      },
    },
  },
};
