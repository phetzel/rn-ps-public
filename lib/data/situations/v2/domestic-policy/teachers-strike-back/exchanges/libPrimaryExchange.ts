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
    rootQuestionId: "q_strike_support",
    questions: {
      q_strike_support: {
        id: "q_strike_support",
        text: "Don't the striking teachers have a point? Why is the administration forcing karaoke on them instead of addressing low pay and underfunded schools?",
        depth: 0,
        answers: [
          {
            id: "a_support_deflect",
            type: AnswerType.Deflect,
            text: "This administration has done more for school funding than any other. This strike unfortunately distracts from our shared goal of supporting students.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_strike_repealed: OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_prolonged: OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_compromise: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_support_admit",
            type: AnswerType.Admit,
            text: "Frankly, the karaoke mandate was a misguided attempt at innovation. We are listening to the teachers and rescinding the rule.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_repealed: OutcomeModifierWeight.StrongPositive, // +8
              outcome_strike_prolonged: OutcomeModifierWeight.StrongNegative, // -8
              outcome_strike_compromise: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_strike_funding",
          },
        ],
      },
      q_strike_funding: {
        id: "q_strike_funding",
        text: "Beyond rescinding the rule, will you commit to the teachers' other demands, specifically the increased arts and music funding they're asking for?",
        depth: 1,
        answers: [
          {
            id: "a_funding_reassure",
            type: AnswerType.Reassure,
            text: "We are now in active, good-faith negotiations with union leaders to find a compromise that addresses their funding concerns.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_strike_repealed: OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_prolonged: OutcomeModifierWeight.SlightNegative, // -4
              outcome_strike_compromise: OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_funding_deny",
            type: AnswerType.Deny,
            text: "We will not negotiate budget items under the duress of a strike. First, the teachers must return to the classroom. Then we can talk.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_strike_repealed: OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_prolonged: OutcomeModifierWeight.SlightPositive, // +4
              outcome_strike_compromise: OutcomeModifierWeight.StrongNegative, // -8
            },
          },
        ],
      },
    },
  },
};
