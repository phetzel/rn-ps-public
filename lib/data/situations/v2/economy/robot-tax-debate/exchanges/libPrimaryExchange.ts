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
    rootQuestionId: "q_robot_tax_moral",
    questions: {
      q_robot_tax_moral: {
        id: "q_robot_tax_moral",
        text: "Isn't this robot tax a moral necessity to protect workers who are being left behind by automation and corporate greed?",
        depth: 0,
        answers: [
          {
            id: "a_robot_tax_reassure",
            type: AnswerType.Reassure,
            text: "This administration is committed to ensuring that the benefits of technology are shared by all. These funds will retrain workers for new careers.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_tax_becomes_credit: OutcomeModifierWeight.SlightPositive, // +4
              outcome_firms_flee: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_windfall: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_robot_tax_program_effectiveness",
          },
          {
            id: "a_robot_tax_challenge",
            type: AnswerType.Challenge,
            text: "It's not about morality, it's about smart policy. We're proactively building a bridge to the future economy, which benefits everyone.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_tax_becomes_credit: OutcomeModifierWeight.SlightPositive, // +4
              outcome_firms_flee: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_windfall: OutcomeModifierWeight.StrongNegative, // -8
            },
          },
        ],
      },
      q_robot_tax_program_effectiveness: {
        id: "q_robot_tax_program_effectiveness",
        text: "How can you guarantee these retraining programs will actually lead to good jobs and not just become another bureaucratic waste of money?",
        depth: 1,
        answers: [
          {
            id: "a_program_inform",
            type: AnswerType.Inform,
            text: "HHS is partnering with industry leaders to tailor these programs to in-demand skills, ensuring a high probability of job placement post-completion.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_tax_becomes_credit: OutcomeModifierWeight.SlightPositive, // +4
              outcome_firms_flee: OutcomeModifierWeight.SlightNegative, // -4
              outcome_tax_windfall: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_program_deflect",
            type: AnswerType.Deflect,
            text: "The alternative is to do nothing, which is unacceptable. We have to take bold steps, and this is a crucial first one for our workforce.",
            impacts: {},
            outcomeModifiers: {
              outcome_tax_becomes_credit: OutcomeModifierWeight.Neutral, // 0
              outcome_firms_flee: OutcomeModifierWeight.SlightPositive, // +4
              outcome_tax_windfall: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
        ],
      },
    },
  },
};
