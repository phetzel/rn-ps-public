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
    rootQuestionId: "q_slip_up_competence",
    questions: {
      q_slip_up_competence: {
        id: "q_slip_up_competence",
        text: "Forgetting the name of a key ally at a major summit raises serious questions about the President's focus. How can our allies trust this leadership?",
        depth: 0,
        answers: [
          {
            id: "a_competence_reassure",
            type: AnswerType.Reassure,
            text: "The President has a deep respect for the leader of Farawaystan. It was a simple slip of the tongue during a long day of complex negotiations.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_slip_up_meme: OutcomeModifierWeight.SlightNegative, // -4
              outcome_slip_up_chill: OutcomeModifierWeight.SlightNegative, // -4
              outcome_slip_up_overblown: OutcomeModifierWeight.StrongPositive, // +8
            },
            followUpId: "q_slip_up_apology",
          },
          {
            id: "a_competence_deflect",
            type: AnswerType.Deflect,
            text: "Frankly, these summits involve dozens of countries. The President's focus is on the substance of the deals, not a minor verbal stumble.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_slip_up_meme: OutcomeModifierWeight.SlightPositive, // +4
              outcome_slip_up_chill: OutcomeModifierWeight.SlightPositive, // +4
              outcome_slip_up_overblown: OutcomeModifierWeight.StrongNegative, // -8
            },
          },
        ],
      },
      q_slip_up_apology: {
        id: "q_slip_up_apology",
        text: "You call it a 'simple slip,' but has the President personally apologized to the leader of Farawaystan for the error?",
        depth: 1,
        answers: [
          {
            id: "a_apology_inform",
            type: AnswerType.Inform,
            text: "The Secretary of State has spoken with their counterpart and conveyed our regret. The matter is considered diplomatically resolved.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_slip_up_meme: OutcomeModifierWeight.Neutral, // 0 -> -4 total
              outcome_slip_up_chill: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_slip_up_overblown: OutcomeModifierWeight.SlightPositive, // +4 -> +12 total
            },
          },
          {
            id: "a_apology_deny",
            type: AnswerType.Deny,
            text: "There is no need for a formal apology over a common verbal typo. I assure you, both leaders are focused on more important issues.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Negative },
            },
            outcomeModifiers: {
              outcome_slip_up_meme: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_slip_up_chill: OutcomeModifierWeight.StrongPositive, // +8 -> +4 total
              outcome_slip_up_overblown: OutcomeModifierWeight.SlightNegative, // -4 -> +4 total
            },
          },
        ],
      },
    },
  },
};
