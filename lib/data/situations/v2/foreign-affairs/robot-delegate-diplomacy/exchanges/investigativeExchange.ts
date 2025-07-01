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
    rootQuestionId: "q_robot_legal",
    questions: {
      q_robot_legal: {
        id: "q_robot_legal",
        text: "Can a robot legally enter into a binding international treaty? What's the legal framework here, or did you just invent it?",
        depth: 0,
        answers: [
          {
            id: "a_legal_deflect",
            type: AnswerType.Deflect,
            text: "That's a fascinating question for legal scholars. For now, we're focused on the practical application of this technology to achieve peace.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_robot_hailed: OutcomeModifierWeight.Neutral, // 0
              outcome_robot_walkout: OutcomeModifierWeight.SlightPositive, // +4
              outcome_robot_glitch: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_legal_inform",
            type: AnswerType.Inform,
            text: "The robot doesn't sign anything. It facilitates negotiations. Any final document would be reviewed and signed by the Secretary of State.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_robot_hailed: OutcomeModifierWeight.SlightPositive, // +4
              outcome_robot_walkout: OutcomeModifierWeight.SlightNegative, // -4
              outcome_robot_glitch: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_robot_accountability",
          },
        ],
      },
      q_robot_accountability: {
        id: "q_robot_accountability",
        text: "So if the robot makes a critical error or its translation glitch causes a war, who is accountable? The programmer? The robot? The Secretary?",
        depth: 1,
        answers: [
          {
            id: "a_accountability_reassure",
            type: AnswerType.Reassure,
            text: "Accountability always rests with the head of the delegation, the Secretary of State. The AI is a tool, just like a pen or a computer.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_robot_hailed: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_robot_walkout: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_robot_glitch: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_accountability_challenge",
            type: AnswerType.Challenge,
            text: "You're getting lost in hypotheticals. This is rigorously tested technology. The real risk is sticking with old methods that have failed.",
            impacts: {},
            outcomeModifiers: {
              outcome_robot_hailed: OutcomeModifierWeight.Neutral, // 0 -> +4 total
              outcome_robot_walkout: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_robot_glitch: OutcomeModifierWeight.SlightNegative, // -4 -> -4 total
            },
          },
        ],
      },
    },
  },
};
