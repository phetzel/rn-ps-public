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
    rootQuestionId: "q_fans_practicality",
    questions: {
      q_fans_practicality: {
        id: "q_fans_practicality",
        text: "Instead of this fantasy project, why not spend the money on proven solutions like reinforcing sea walls and improving evacuation routes?",
        depth: 0,
        answers: [
          {
            id: "a_practicality_reassure",
            type: AnswerType.Reassure,
            text: "We are doing that. This is not an either/or situation. Homeland Security is pursuing a multi-track strategy of mitigation and prevention.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_fans_shelved: OutcomeModifierWeight.SlightPositive, // +4
              outcome_fans_prototype_fail: OutcomeModifierWeight.SlightNegative, // -4
              outcome_fans_research_program: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_practicality_challenge",
            type: AnswerType.Challenge,
            text: "Sea walls will always be breached. Evacuations are always chaotic. We must be bold enough to seek solutions that stop the threat at its source.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_fans_shelved: OutcomeModifierWeight.StrongNegative, // -8
              outcome_fans_prototype_fail: OutcomeModifierWeight.SlightPositive, // +4
              outcome_fans_research_program:
                OutcomeModifierWeight.SlightPositive, // +4
            },
            followUpId: "q_fans_unintended",
          },
        ],
      },
      q_fans_unintended: {
        id: "q_fans_unintended",
        text: "What about unintended consequences? Could 'blowing away' a hurricane just send a bigger, angrier storm somewhere else?",
        depth: 1,
        answers: [
          {
            id: "a_unintended_inform",
            type: AnswerType.Inform,
            text: "That's precisely what the research phase is for. Computer modeling will allow us to test for and mitigate any such unintended consequences.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_fans_shelved: OutcomeModifierWeight.SlightPositive, // +4
              outcome_fans_prototype_fail: OutcomeModifierWeight.SlightNegative, // -4
              outcome_fans_research_program: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_unintended_deny",
            type: AnswerType.Deny,
            text: "That's absurd fear-mongering. The science is based on dissipating energy, not redirecting it. The goal is to weaken the storm, not move it.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Negative },
            },
            outcomeModifiers: {
              outcome_fans_shelved: OutcomeModifierWeight.SlightNegative, // -4
              outcome_fans_prototype_fail: OutcomeModifierWeight.SlightPositive, // +4
              outcome_fans_research_program: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
