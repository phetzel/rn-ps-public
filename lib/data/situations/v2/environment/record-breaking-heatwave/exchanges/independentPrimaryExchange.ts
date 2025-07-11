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
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
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
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
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
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
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
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.StrongPositive, // +8
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_heatwave_federal_role",
          },
          {
            id: "a_long_term_admit",
            type: AnswerType.Admit,
            text: "You're right, the immediate options are limited and imperfect. We're doing everything we can, but this is a stark reminder of our infrastructure debt.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
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
          },
        ],
      },
      q_heatwave_federal_role: {
        id: "q_heatwave_federal_role",
        text: "Cities are struggling to fund these centers. Shouldn't the federal government take direct control rather than just throwing money at the problem?",
        depth: 2,
        answers: [
          {
            id: "a_federal_challenge",
            type: AnswerType.Challenge,
            text: "Direct federal management would be slower and less effective. Local officials know their communities' needs better than Washington bureaucrats.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                },
              },
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
            id: "a_federal_reassure",
            type: AnswerType.Reassure,
            text: "We're providing both funding and coordination through Homeland Security. This combines federal resources with local expertise for maximum effectiveness.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_heatwave_grid_collapse:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cooling_grants:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_heatwave_cloud_seeding_backfire:
                OutcomeModifierWeight.StrongPositive, // +8
            },
          },
        ],
      },
    },
  },
};
