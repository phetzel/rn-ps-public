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
    rootQuestionId: "q_alert_unethical",
    questions: {
      q_alert_unethical: {
        id: "q_alert_unethical",
        text: "Whether it was real or not, the very idea of using fear to manipulate the public and Congress is deeply unethical. Who is responsible for this?",
        depth: 0,
        answers: [
          {
            id: "a_unethical_reassure",
            type: AnswerType.Reassure,
            text: "I want to be clear to all Americans: there is no alien threat. This was a purely internal, hypothetical exercise that should never have leaked.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightPositive, // +4
              outcome_alert_panic: OutcomeModifierWeight.SlightNegative, // -4
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral, // 0 -> 0 total
            },
          },
          {
            id: "a_unethical_deflect",
            type: AnswerType.Deflect,
            text: "The real unethical act is the leaking of a sensitive national security document designed to test our nation's readiness for any threat.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_alert_panic: OutcomeModifierWeight.SlightPositive, // +4
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_alert_threats",
          },
        ],
      },
      q_alert_threats: {
        id: "q_alert_threats",
        text: "You keep mentioning 'real threats.' Are you using this leaked memo to pivot and argue for the very same funding the memo was designed to secure?",
        depth: 1,
        answers: [
          {
            id: "a_threats_inform",
            type: AnswerType.Inform,
            text: "The need for a strong defense is constant and based on real-world intelligence. It is entirely separate from this unfortunate internal document.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_alert_panic: OutcomeModifierWeight.Neutral, // 0 -> +4 total
              outcome_alert_funding_pass: OutcomeModifierWeight.SlightPositive, // +4 -> +4 total
            },
          },
          {
            id: "a_threats_admit",
            type: AnswerType.Admit,
            text: "It's true that the funding need is real, even if the method discussed in the memo was wrong. We have to separate the two issues.",
            impacts: {},
            outcomeModifiers: {
              outcome_alert_shelved: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_alert_panic: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_alert_funding_pass: OutcomeModifierWeight.Neutral, // 0 -> 0 total
            },
          },
        ],
      },
    },
  },
};
