import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/types";

export const independentPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.IndependentPrimary,
  content: {
    rootQuestionId: "q_fans_science",
    questions: {
      q_fans_science: {
        id: "q_fans_science",
        text: "Every atmospheric scientist says this is physically impossible. Is the administration getting its policy ideas from cartoons?",
        depth: 0,
        answers: [
          {
            id: "a_science_challenge",
            type: AnswerType.Challenge,
            text: "Experts said flight was impossible, too. Great progress requires bold thinking. We're not afraid to explore ambitious ideas.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_fans_shelved: OutcomeModifierWeight.StrongNegative, // -8
              outcome_fans_prototype_fail: OutcomeModifierWeight.SlightPositive, // +4
              outcome_fans_research_program:
                OutcomeModifierWeight.SlightPositive, // +4
            },
            followUpId: "q_fans_cost",
          },
          {
            id: "a_science_deflect",
            type: AnswerType.Deflect,
            text: "This is just one of many long-term research avenues. Our main focus remains on practical, proven methods of disaster preparedness.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_fans_shelved: OutcomeModifierWeight.StrongPositive, // +8
              outcome_fans_prototype_fail: OutcomeModifierWeight.SlightNegative, // -4
              outcome_fans_research_program:
                OutcomeModifierWeight.SlightNegative, // -4
            },
          },
        ],
      },
      q_fans_cost: {
        id: "q_fans_cost",
        text: "Even if it worked, the cost would be trillions. How can you justify spending that kind of money on a science fiction project?",
        depth: 1,
        answers: [
          {
            id: "a_cost_inform",
            type: AnswerType.Inform,
            text: "The cost of hurricane damage already runs into the hundreds of billions annually. An effective prevention system would pay for itself.",
            impacts: {},
            outcomeModifiers: {
              outcome_fans_shelved: OutcomeModifierWeight.SlightNegative, // -4 -> -12 total
              outcome_fans_prototype_fail: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_fans_research_program: OutcomeModifierWeight.Neutral, // 0 -> +4 total
            },
          },
          {
            id: "a_cost_admit",
            type: AnswerType.Admit,
            text: "The cost of a full-scale deployment is prohibitive today. That's why we're starting with a much smaller, fiscally responsible research phase.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_fans_shelved: OutcomeModifierWeight.SlightPositive, // +4 -> -4 total
              outcome_fans_prototype_fail: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_fans_research_program:
                OutcomeModifierWeight.StrongPositive, // +8 -> +12 total
            },
          },
        ],
      },
    },
  },
};
