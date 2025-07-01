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
    rootQuestionId: "q_meme_stock_instability",
    questions: {
      q_meme_stock_instability: {
        id: "q_meme_stock_instability",
        text: "Foreign investors look to the Fed for stability. What message does it send when our central bank buys assets named after cartoon dogs and video games?",
        depth: 0,
        answers: [
          {
            id: "a_instability_challenge",
            type: AnswerType.Challenge,
            text: "It sends the message that we are a modern, forward-thinking economy unafraid to engage with new market realities, which is a sign of strength.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_meme_stock_windfall: OutcomeModifierWeight.StrongPositive, // +8
              outcome_meme_stock_crash: OutcomeModifierWeight.StrongNegative, // -8
              outcome_meme_stock_retracted: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_meme_stock_reality",
          },
          {
            id: "a_instability_reassure",
            type: AnswerType.Reassure,
            text: "The vast majority of the Fed's holdings remain in traditional, stable assets. Our commitment to global financial stability is unwavering.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_meme_stock_windfall:
                OutcomeModifierWeight.ModerateNegative, // -6
              outcome_meme_stock_crash: OutcomeModifierWeight.Neutral, // 0
              outcome_meme_stock_retracted:
                OutcomeModifierWeight.ModeratePositive, // +6
            },
          },
        ],
      },
      q_meme_stock_reality: {
        id: "q_meme_stock_reality",
        text: "The 'reality' is that these are not real investments; they're speculative bubbles. Is the State Dept prepared for the diplomatic fallout when this blows up?",
        depth: 1,
        answers: [
          {
            id: "a_reality_inform",
            type: AnswerType.Inform,
            text: "The State Department, in coordination with Treasury, regularly briefs our allies on monetary policy. They understand the limited scope of this.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_meme_stock_windfall: OutcomeModifierWeight.SlightPositive, // +4 -> +12 total
              outcome_meme_stock_crash: OutcomeModifierWeight.SlightNegative, // -4 -> -12 total
              outcome_meme_stock_retracted: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_reality_deflect",
            type: AnswerType.Deflect,
            text: "Your framing is based on a hypothetical negative outcome. We are focused on the potential for learning and, yes, even significant profit.",
            impacts: {},
            outcomeModifiers: {
              outcome_meme_stock_windfall: OutcomeModifierWeight.Neutral, // 0 -> +8 total
              outcome_meme_stock_crash: OutcomeModifierWeight.Neutral, // 0 -> -8 total
              outcome_meme_stock_retracted: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
