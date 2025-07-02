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
    rootQuestionId: "q_heatwave_grid",
    questions: {
      q_heatwave_grid: {
        id: "q_heatwave_grid",
        text: "The power grid is failing under the strain. What is the administration's plan to prevent catastrophic, widespread blackouts?",
        depth: 0,
        answers: [
          {
            id: "a_grid_reassure",
            type: AnswerType.Reassure,
            text: "We are in constant contact with utility providers to manage the load. We're asking for voluntary conservation, but we are prepared for all scenarios.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_grid_challenge",
            type: AnswerType.Challenge,
            text: "This crisis highlights the decades of underinvestment in our national grid. We need bold, long-term infrastructure spending to fix this.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_heatwave_long_term",
          },
        ],
      },
      q_heatwave_long_term: {
        id: "q_heatwave_long_term",
        text: "Long-term spending doesn't help people whose power is out now. What is the immediate solution for vulnerable citizens stuck in this heat?",
        depth: 1,
        answers: [
          {
            id: "a_long_term_inform",
            type: AnswerType.Inform,
            text: "HHS and Treasury have released emergency funds for cities to open public cooling centers with access to water and medical staff.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.StrongPositive, // +8 -> +4 total
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.SlightNegative, // -4 -> -4 total
            },
          },
          {
            id: "a_long_term_admit",
            type: AnswerType.Admit,
            text: "You're right, the immediate options are limited and imperfect. We're doing everything we can, but this is a stark reminder of our infrastructure debt.",
            impacts: {},
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
