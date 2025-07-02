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
    rootQuestionId: "q_heatwave_climate",
    questions: {
      q_heatwave_climate: {
        id: "q_heatwave_climate",
        text: "This record heatwave is clearly a symptom of climate change. Is the administration considering radical solutions, like geoengineering or cloud-seeding?",
        depth: 0,
        answers: [
          {
            id: "a_climate_deflect",
            type: AnswerType.Deflect,
            text: "Our focus is on the immediate crisis. Debates about long-term climate solutions are important, but they don't help people who are suffering today.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse: OutcomeModifierWeight.Neutral, // 0
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_climate_admit",
            type: AnswerType.Admit,
            text: "In a crisis of this magnitude, all options must be on the table. We are consulting with top scientists on the feasibility of such measures.",
            impacts: {},
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.StrongPositive, // +8
            },
            followUpId: "q_heatwave_geoengineering_risks",
          },
        ],
      },
      q_heatwave_geoengineering_risks: {
        id: "q_heatwave_geoengineering_risks",
        text: "But geoengineering is incredibly risky and could have disastrous, unforeseen consequences. Is it responsible to even consider it?",
        depth: 1,
        answers: [
          {
            id: "a_risks_reassure",
            type: AnswerType.Reassure,
            text: "To be clear: we are only in the earliest, most preliminary stages of research. No such action would be taken without years of rigorous study.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.StrongNegative, // -8 -> 0 total
            },
          },
          {
            id: "a_risks_challenge",
            type: AnswerType.Challenge,
            text: "What's truly risky is doing nothing while temperatures continue to rise. We can't afford to take any potential solution off the table.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.StrongPositive, // +8 -> +16 total
            },
          },
        ],
      },
    },
  },
};
