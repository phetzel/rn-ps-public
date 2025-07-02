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
    rootQuestionId: "q_straw_freedom",
    questions: {
      q_straw_freedom: {
        id: "q_straw_freedom",
        text: "First light bulbs, now straws. When will the government stop infringing on the personal freedoms of citizens over such trivial items?",
        depth: 0,
        answers: [
          {
            id: "a_freedom_deflect",
            type: AnswerType.Deflect,
            text: "This isn't about freedom; it's about responsibility. Plastic waste is choking our oceans, and this is a small, easy step to address it.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_straw_ban_eased: OutcomeModifierWeight.SlightNegative, // -4
              outcome_straw_black_market: OutcomeModifierWeight.SlightPositive, // +4
              outcome_straw_alternatives_boom: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_straw_impact",
          },
          {
            id: "a_freedom_challenge",
            type: AnswerType.Challenge,
            text: "The 'freedom' to pollute our planet isn't a right we recognize. This is a necessary action to protect our shared environment.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_straw_ban_eased: OutcomeModifierWeight.StrongNegative, // -8
              outcome_straw_black_market: OutcomeModifierWeight.SlightPositive, // +4
              outcome_straw_alternatives_boom:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
      q_straw_impact: {
        id: "q_straw_impact",
        text: "But straws are a tiny fraction of plastic waste. Isn't this just 'feel-good' legislation that has no real environmental impact?",
        depth: 1,
        answers: [
          {
            id: "a_impact_inform",
            type: AnswerType.Inform,
            text: "It's a gateway issue. While small, it raises public consciousness about single-use plastics and encourages broader behavioral change.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_straw_ban_eased: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_straw_black_market: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_straw_alternatives_boom:
                OutcomeModifierWeight.StrongPositive, // +8 -> +8 total
            },
          },
          {
            id: "a_impact_admit",
            type: AnswerType.Admit,
            text: "You're right that it's a small piece of a huge problem. But we have to start somewhere, and this is an accessible first step for everyone.",
            impacts: {},
            outcomeModifiers: {
              outcome_straw_ban_eased: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_straw_black_market: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_straw_alternatives_boom: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
