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
    rootQuestionId: "q_swarms_source",
    questions: {
      q_swarms_source: {
        id: "q_swarms_source",
        text: "What is the source of these drones? Are we talking aliens, a foreign power, or a domestic threat? The public is getting anxious.",
        depth: 0,
        answers: [
          {
            id: "a_source_inform",
            type: AnswerType.Inform,
            text: "We cannot speculate. Homeland Security, the FBI, and the DOD are all working together to identify the source. We will inform you when we have facts.",
            impacts: {
              cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } },
            },
            outcomeModifiers: {
              outcome_swarms_hobbyists: OutcomeModifierWeight.SlightPositive, // +4
              outcome_swarms_foreign_probe: OutcomeModifierWeight.SlightNegative, // -4
              outcome_swarms_tech_demo_fail: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_source_challenge",
            type: AnswerType.Challenge,
            text: "The most dangerous thing right now is public panic fueled by wild speculation. We urge calm as we investigate this airspace violation.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_swarms_hobbyists: OutcomeModifierWeight.SlightNegative, // -4
              outcome_swarms_foreign_probe: OutcomeModifierWeight.SlightPositive, // +4
              outcome_swarms_tech_demo_fail: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_swarms_action",
          },
        ],
      },
      q_swarms_action: {
        id: "q_swarms_action",
        text: "Urging calm is fine, but what concrete action are you taking? Have any of these drones been captured or shot down for analysis?",
        depth: 1,
        answers: [
          {
            id: "a_action_deny",
            type: AnswerType.Deny,
            text: "No. Discharging weapons over populated urban centers is incredibly dangerous. Our priority is to track the drones back to their operators.",
            impacts: {
              cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.SlightlyPositive } },
            },
            outcomeModifiers: {
              outcome_swarms_hobbyists: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_swarms_foreign_probe: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_swarms_tech_demo_fail: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_action_reassure",
            type: AnswerType.Reassure,
            text: "We have multiple agencies deploying advanced tracking technologies. We are confident we will identify who is responsible for this.",
            impacts: {},
            outcomeModifiers: {
              outcome_swarms_hobbyists: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_swarms_foreign_probe: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_swarms_tech_demo_fail: OutcomeModifierWeight.SlightPositive, // +4 -> +4 total
            },
          },
        ],
      },
    },
  },
};
