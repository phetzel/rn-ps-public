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
    rootQuestionId: "q_meme_stock_gambling",
    questions: {
      q_meme_stock_gambling: {
        id: "q_meme_stock_gambling",
        text: "The Federal Reserve is gambling with taxpayer money on internet jokes. How is this anything other than a complete abdication of fiscal duty?",
        depth: 0,
        answers: [
          {
            id: "a_gambling_reassure",
            type: AnswerType.Reassure,
            text: "This represents a very small, exploratory portion of the portfolio. The Fed's core mission of stability remains its highest priority.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_meme_stock_windfall: OutcomeModifierWeight.SlightNegative, // -4
              outcome_meme_stock_crash: OutcomeModifierWeight.SlightPositive, // +4
              outcome_meme_stock_retracted: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_meme_stock_precedent",
          },
          {
            id: "a_gambling_deflect",
            type: AnswerType.Deflect,
            text: "The nature of financial markets is evolving, and it's important for our institutions to understand these new dynamics firsthand.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_meme_stock_windfall: OutcomeModifierWeight.SlightPositive, // +4
              outcome_meme_stock_crash: OutcomeModifierWeight.SlightNegative, // -4
              outcome_meme_stock_retracted: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_meme_stock_precedent: {
        id: "q_meme_stock_precedent",
        text: "Even if it's a 'small' portion, doesn't this set a dangerous precedent that the Fed will now be day-trading based on social media trends?",
        depth: 1,
        answers: [
          {
            id: "a_precedent_deny",
            type: AnswerType.Deny,
            text: "Absolutely not. This is a limited, data-gathering exercise. It is not, and will not become, a standard investment strategy.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_meme_stock_windfall: OutcomeModifierWeight.SlightNegative, // -4
              outcome_meme_stock_crash: OutcomeModifierWeight.Neutral, // 0
              outcome_meme_stock_retracted:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_precedent_admit",
            type: AnswerType.Admit,
            text: "It is an unconventional move, and we understand why it raises questions. We are developing strict guardrails to prevent any such precedent.",
            impacts: {},
            outcomeModifiers: {
              outcome_meme_stock_windfall: OutcomeModifierWeight.SlightPositive, // +4
              outcome_meme_stock_crash: OutcomeModifierWeight.SlightNegative, // -4
              outcome_meme_stock_retracted: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
