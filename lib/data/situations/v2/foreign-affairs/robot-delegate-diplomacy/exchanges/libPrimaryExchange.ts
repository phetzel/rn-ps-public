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
    rootQuestionId: "q_robot_dehumanizing",
    questions: {
      q_robot_dehumanizing: {
        id: "q_robot_dehumanizing",
        text: "Aren't peace talks fundamentally about human connection and trust? By sending a machine, aren't you dehumanizing the entire diplomatic process?",
        depth: 0,
        answers: [
          {
            id: "a_dehumanizing_reassure",
            type: AnswerType.Reassure,
            text: "Human diplomats are leading our delegation. The AI is a tool to provide data analysis and support, not to replace human judgment.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_robot_hailed: OutcomeModifierWeight.SlightPositive, // +4
              outcome_robot_walkout: OutcomeModifierWeight.ModerateNegative, // -6
              outcome_robot_glitch: OutcomeModifierWeight.SlightPositive, // +4
            },
            followUpId: "q_robot_control",
          },
          {
            id: "a_dehumanizing_challenge",
            type: AnswerType.Challenge,
            text: "Perhaps human emotion is the problem. A robot is unbiased, data-driven, and free of ego. It might be the most effective diplomat we have.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_robot_hailed: OutcomeModifierWeight.SlightPositive, // +4
              outcome_robot_walkout: OutcomeModifierWeight.SlightPositive, // +4
              outcome_robot_glitch: OutcomeModifierWeight.StrongNegative, // -8
            },
          },
        ],
      },
      q_robot_control: {
        id: "q_robot_control",
        text: "But who is in control? If the AI makes a recommendation based on data, are the human diplomats just there to rubber-stamp it?",
        depth: 1,
        answers: [
          {
            id: "a_control_inform",
            type: AnswerType.Inform,
            text: "The Secretary of State has final authority. The AI provides options and probability models, but the final decision is always human-made.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_robot_hailed: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_robot_walkout: OutcomeModifierWeight.SlightNegative, // -4 -> -10 total
              outcome_robot_glitch: OutcomeModifierWeight.Neutral, // 0 -> +4 total
            },
          },
          {
            id: "a_control_deny",
            type: AnswerType.Deny,
            text: "That's a misunderstanding of the technology. The human element is, and always will be, the most critical part of our diplomatic team.",
            impacts: {},
            outcomeModifiers: {
              outcome_robot_hailed: OutcomeModifierWeight.Neutral, // 0 -> +4 total
              outcome_robot_walkout: OutcomeModifierWeight.SlightNegative, // -4 -> -10 total
              outcome_robot_glitch: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
            },
          },
        ],
      },
    },
  },
};
