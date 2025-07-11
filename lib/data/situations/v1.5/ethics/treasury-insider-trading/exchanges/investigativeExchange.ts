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
    rootQuestionId: "q_trading_allegations",
    questions: {
      q_trading_allegations: {
        id: "q_trading_allegations",
        text: "We have records of top Treasury officials making major stock trades just days before market-moving policy changes. How is this not insider trading?",
        depth: 0,
        answers: [
          {
            id: "a_allegations_deny",
            type: AnswerType.Deny,
            text: "This is a smear campaign. Our officials are subject to the strictest ethics laws, and we categorically deny any illegal activity.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_trading_guilty_verdict:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_trading_cleared: OutcomeModifierWeight.SlightNegative, // -4
              outcome_trading_hung_jury: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_trading_coincidence",
          },
          {
            id: "a_allegations_inform",
            type: AnswerType.Inform,
            text: "We take these allegations seriously. The Department of Justice has opened an inquiry to determine the facts and ensure all rules were followed.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_trading_guilty_verdict:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_trading_cleared: OutcomeModifierWeight.SlightPositive, // +4
              outcome_trading_hung_jury: OutcomeModifierWeight.StrongNegative, // -8
            },
          },
        ],
      },
      q_trading_coincidence: {
        id: "q_trading_coincidence",
        text: "Are you saying it's just a massive coincidence they all made these specific trades right before the announcement? That strains credulity.",
        depth: 1,
        answers: [
          {
            id: "a_coincidence_deflect",
            type: AnswerType.Deflect,
            text: "I can't speak to individual financial decisions, but our focus at Treasury is on building a strong economy for all, not on stock portfolios.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_trading_guilty_verdict:
                OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_trading_cleared: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_trading_hung_jury: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_coincidence_challenge",
            type: AnswerType.Challenge,
            text: "You are making accusations without evidence. These are dedicated public servants, and it is reckless to imply corruption without proof.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_trading_guilty_verdict:
                OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_trading_cleared: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_trading_hung_jury: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
