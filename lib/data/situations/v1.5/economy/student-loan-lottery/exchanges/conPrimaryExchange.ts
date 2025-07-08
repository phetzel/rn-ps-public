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
    rootQuestionId: "q_loan_lottery_legality",
    questions: {
      q_loan_lottery_legality: {
        id: "q_loan_lottery_legality",
        text: "On what legal grounds can the executive branch selectively erase debt for a random few? This sounds like a massive constitutional overreach.",
        depth: 0,
        answers: [
          {
            id: "a_legality_inform",
            type: AnswerType.Inform,
            text: "The Attorney General's office has affirmed that existing statutes give the administration discretion in how federal loans are collected and discharged.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_lottery_spending_pop:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_lottery_scandal: OutcomeModifierWeight.SlightNegative, // -4
              outcome_lottery_legal_chaos: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_loan_lottery_precedent",
          },
          {
            id: "a_legality_challenge",
            type: AnswerType.Challenge,
            text: "Are you suggesting it's better to do nothing? This administration was elected to solve problems, not to be paralyzed by legalistic arguments.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_lottery_spending_pop:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_lottery_scandal: OutcomeModifierWeight.SlightPositive, // +4
              outcome_lottery_legal_chaos: OutcomeModifierWeight.StrongNegative, // -8
            },
          },
        ],
      },
      q_loan_lottery_precedent: {
        id: "q_loan_lottery_precedent",
        text: "But several legal scholars disagree, saying this sets a dangerous precedent for executive power. Is the DOJ prepared to defend this in court?",
        depth: 1,
        answers: [
          {
            id: "a_precedent_reassure",
            type: AnswerType.Reassure,
            text: "We are fully confident in our legal position and are prepared to defend it. The law is clearly on our side, and we expect to prevail.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
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
          {
            id: "a_precedent_deflect",
            type: AnswerType.Deflect,
            text: "Legal debates can go on forever. We're focused on the families this helps. The human impact is more important than theoretical arguments.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                },
              },
            },
            outcomeModifiers: {
              outcome_lottery_spending_pop:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_lottery_scandal: OutcomeModifierWeight.SlightPositive, // +4
              outcome_lottery_legal_chaos: OutcomeModifierWeight.StrongNegative, // -8
            },
          },
        ],
      },
    },
  },
};
