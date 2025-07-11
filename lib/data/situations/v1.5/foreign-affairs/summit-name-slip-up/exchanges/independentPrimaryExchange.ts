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
    rootQuestionId: "q_slip_up_economic",
    questions: {
      q_slip_up_economic: {
        id: "q_slip_up_economic",
        text: "Farawaystan is a key economic partner. Does this gaffe have any potential to disrupt ongoing or future trade negotiations?",
        depth: 0,
        answers: [
          {
            id: "a_economic_deny",
            type: AnswerType.Deny,
            text: "Absolutely not. Our economic relationship is built on decades of mutual interest, not on a single misplaced syllable. All talks are proceeding.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_slip_up_meme: OutcomeModifierWeight.SlightNegative, // -4
              outcome_slip_up_chill: OutcomeModifierWeight.SlightNegative, // -4
              outcome_slip_up_overblown: OutcomeModifierWeight.StrongPositive, // +8
            },
          },
          {
            id: "a_economic_admit",
            type: AnswerType.Admit,
            text: "It's certainly not helpful, and we've done the work to ensure our partners know it was a mistake and not a reflection of our respect.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_slip_up_meme: OutcomeModifierWeight.Neutral, // 0
              outcome_slip_up_chill: OutcomeModifierWeight.SlightPositive, // +4
              outcome_slip_up_overblown: OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_slip_up_how",
          },
        ],
      },
      q_slip_up_how: {
        id: "q_slip_up_how",
        text: "What specific work have you done? Can you confirm if any scheduled trade meetings have been postponed or cancelled since the incident?",
        depth: 1,
        answers: [
          {
            id: "a_how_reassure",
            type: AnswerType.Reassure,
            text: "No meetings have been cancelled. Our diplomatic channels have been active, and our counterparts understand the situation completely.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_slip_up_meme: OutcomeModifierWeight.SlightNegative, // -4 -> -4 total
              outcome_slip_up_chill: OutcomeModifierWeight.Neutral, // 0 -> +4 total
              outcome_slip_up_overblown: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
            },
          },
          {
            id: "a_how_deflect",
            type: AnswerType.Deflect,
            text: "I'm not going to give a play-by-play of private diplomatic conversations. The important thing is that the relationship remains on solid ground.",
            impacts: {},
            outcomeModifiers: {
              outcome_slip_up_meme: OutcomeModifierWeight.SlightPositive, // +4 -> +4 total
              outcome_slip_up_chill: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_slip_up_overblown: OutcomeModifierWeight.StrongNegative, // -8 -> -12 total
            },
          },
        ],
      },
    },
  },
};
