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
    rootQuestionId: "q_coup_democracy",
    questions: {
      q_coup_democracy: {
        id: "q_coup_democracy",
        text: "The administration talks about supporting democracy, but you're silent as a military junta takes over. Is 'cheap gas' now more important than freedom?",
        depth: 0,
        answers: [
          {
            id: "a_democracy_inform",
            type: AnswerType.Inform,
            text: "We are monitoring the situation closely. Our immediate priority is the safety of our citizens and diplomatic staff in Oilistan.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_coup_cheap_oil: OutcomeModifierWeight.SlightPositive, // +4
              outcome_coup_sanctions_spike:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_coup_collapses_blame: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_democracy_admit",
            type: AnswerType.Admit,
            text: "It is a deeply troubling situation, and it presents us with a direct conflict between our values and our economic interests.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_coup_cheap_oil: OutcomeModifierWeight.ModerateNegative, // -6
              outcome_coup_sanctions_spike:
                OutcomeModifierWeight.ModeratePositive, // +6
              outcome_coup_collapses_blame: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_coup_sanctions",
          },
        ],
      },
      q_coup_sanctions: {
        id: "q_coup_sanctions",
        text: "So will you be implementing sanctions against this new illegitimate regime, or are you going to recognize them as the new government?",
        depth: 1,
        answers: [
          {
            id: "a_sanctions_reassure",
            type: AnswerType.Reassure,
            text: "All options are on the table. We are consulting with our international allies to formulate a coordinated and effective response.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_coup_cheap_oil: OutcomeModifierWeight.SlightNegative, // -4 -> -10 total
              outcome_coup_sanctions_spike:
                OutcomeModifierWeight.SlightPositive, // +4 -> +10 total
              outcome_coup_collapses_blame: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_sanctions_deflect",
            type: AnswerType.Deflect,
            text: "It is premature to talk about sanctions or recognition. The situation is still developing, and we must act with caution and deliberation.",
            impacts: {},
            outcomeModifiers: {
              outcome_coup_cheap_oil: OutcomeModifierWeight.SlightPositive, // +4 -> -2 total
              outcome_coup_sanctions_spike:
                OutcomeModifierWeight.SlightNegative, // -4 -> +2 total
              outcome_coup_collapses_blame: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
