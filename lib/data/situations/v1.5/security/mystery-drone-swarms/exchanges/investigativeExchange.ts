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
    rootQuestionId: "q_swarms_air_defense",
    questions: {
      q_swarms_air_defense: {
        id: "q_swarms_air_defense",
        text: "How did hundreds of unidentified drones fly over our cities without being intercepted? Is our multi-trillion-dollar air defense system a failure?",
        depth: 0,
        answers: [
          {
            id: "a_defense_deflect",
            type: AnswerType.Deflect,
            text: "Our air defense is designed to stop missiles and enemy jets, not small, slow-moving objects. The question is who is flying them, not why we didn't shoot.",
            impacts: {
              cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } },
            },
            outcomeModifiers: {
              outcome_swarms_hobbyists: OutcomeModifierWeight.SlightPositive, // +4
              outcome_swarms_foreign_probe: OutcomeModifierWeight.SlightNegative, // -4
              outcome_swarms_tech_demo_fail: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_swarms_vulnerability",
          },
          {
            id: "a_defense_admit",
            type: AnswerType.Admit,
            text: "This incident has exposed a significant vulnerability in our domestic airspace security regarding small drone swarms. We are racing to close it.",
            impacts: {
              cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Negative } },
            },
            outcomeModifiers: {
              outcome_swarms_hobbyists: OutcomeModifierWeight.SlightNegative, // -4
              outcome_swarms_foreign_probe: OutcomeModifierWeight.SlightPositive, // +4
              outcome_swarms_tech_demo_fail: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_swarms_vulnerability: {
        id: "q_swarms_vulnerability",
        text: "So you're saying a rival nation could exploit this 'vulnerability' at any time? How long until this critical security gap is closed?",
        depth: 1,
        answers: [
          {
            id: "a_vulnerability_reassure",
            type: AnswerType.Reassure,
            text: "Homeland Security and Defense are deploying new countermeasures as we speak. We are confident we can now detect and deter such threats.",
            impacts: {
              cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.SlightlyPositive } },
            },
            outcomeModifiers: {
              outcome_swarms_hobbyists: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_swarms_foreign_probe: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_swarms_tech_demo_fail: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_vulnerability_inform",
            type: AnswerType.Inform,
            text: "Developing and deploying new defense systems takes time. For now, our response relies on conventional law enforcement to track the operators.",
            impacts: {},
            outcomeModifiers: {
              outcome_swarms_hobbyists: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_swarms_foreign_probe: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_swarms_tech_demo_fail: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
