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
    rootQuestionId: "q_loan_lottery_fairness",
    questions: {
      q_loan_lottery_fairness: {
        id: "q_loan_lottery_fairness",
        text: "This lottery only helps a tiny fraction of borrowers. Isn't this just a gimmick that avoids a real, systemic solution to the student debt crisis?",
        depth: 0,
        answers: [
          {
            id: "a_fairness_challenge",
            type: AnswerType.Challenge,
            text: "The previous administration offered zero solutions. We are trying a novel approach to provide immediate, life-changing relief to some.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_lottery_spending_pop:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_lottery_scandal: OutcomeModifierWeight.SlightNegative, // -4
              outcome_lottery_legal_chaos: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_loan_lottery_alternatives",
          },
          {
            id: "a_fairness_admit",
            type: AnswerType.Admit,
            text: "It's true that this is not a comprehensive solution, but it's a first step. We see it as a pilot program for broader relief efforts.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_lottery_spending_pop:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_lottery_scandal: OutcomeModifierWeight.Neutral, // 0
              outcome_lottery_legal_chaos: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
        ],
      },
      q_loan_lottery_alternatives: {
        id: "q_loan_lottery_alternatives",
        text: "But critics say you're actively avoiding those broader solutions. Is this 'lottery' just a way to get headlines without doing the hard political work?",
        depth: 1,
        answers: [
          {
            id: "a_alternatives_deny",
            type: AnswerType.Deny,
            text: "That's completely false. We are pursuing multiple avenues for debt relief simultaneously. This is just the most direct method we can enact now.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_lottery_spending_pop:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_lottery_scandal: OutcomeModifierWeight.SlightNegative, // -4
              outcome_lottery_legal_chaos: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_alternatives_deflect",
            type: AnswerType.Deflect,
            text: "Let's focus on the positive. For the winners, this isn't about politics, it's about a fresh start. That's a human victory worth celebrating.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_lottery_spending_pop:
                OutcomeModifierWeight.Neutral, // 0
              outcome_lottery_scandal: OutcomeModifierWeight.SlightNegative, // -4
              outcome_lottery_legal_chaos: OutcomeModifierWeight.SlightPositive, // +2
            },
          },
        ],
      },
    },
  },
};
