import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/types";

export const investigativeExchange: ExchangeData = {
  publication: PublicationStaticId.Investigative,
  content: {
    rootQuestionId: "q_pizza_drone_hack",
    questions: {
      q_pizza_drone_hack: {
        id: "q_pizza_drone_hack",
        text: "Was this drone hacked? Is it true that our drone control systems may have been compromised by a foreign adversary?",
        depth: 0,
        answers: [
          {
            id: "a_hack_deny",
            type: AnswerType.Deny,
            text: "I can state unequivocally that there is no evidence of external interference. This was an internal technical malfunction, full stop.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_pizza_apology: OutcomeModifierWeight.SlightPositive, // +4
              outcome_pizza_escalation: OutcomeModifierWeight.StrongNegative, // -8
              outcome_pizza_meme: OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_hack_reassure",
            type: AnswerType.Reassure,
            text: "We are investigating all possibilities, but our drone command and control network remains secure. There is no ongoing threat to our assets.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_pizza_apology: OutcomeModifierWeight.SlightPositive, // +4
              outcome_pizza_escalation: OutcomeModifierWeight.SlightNegative, // -4
              outcome_pizza_meme: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_pizza_drone_adversary",
          },
        ],
      },
      q_pizza_drone_adversary: {
        id: "q_pizza_drone_adversary",
        text: "You say 'no ongoing threat,' which implies there was one. Can you tell us which nation or group is suspected of this cyber-attack?",
        depth: 1,
        answers: [
          {
            id: "a_adversary_inform",
            type: AnswerType.Inform,
            text: "We do not discuss attribution in active security investigations. Our focus is on hardening our systems against any future attempts.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_pizza_apology: OutcomeModifierWeight.Neutral, // 0 -> +4 total
              outcome_pizza_escalation: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_pizza_meme: OutcomeModifierWeight.SlightNegative, // -4 -> -4 total
            },
          },
          {
            id: "a_adversary_challenge",
            type: AnswerType.Challenge,
            text: "Speculating about who might be responsible is irresponsible and counter-productive. We're focused on facts, not rumors.",
            impacts: {},
            outcomeModifiers: {
              outcome_pizza_apology: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_pizza_escalation: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_pizza_meme: OutcomeModifierWeight.Neutral, // 0 -> 0 total
            },
          },
        ],
      },
    },
  },
};
