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
    rootQuestionId: "q_cars_threat",
    questions: {
      q_cars_threat: {
        id: "q_cars_threat",
        text: "This seems like a dry run for a much larger cyber-attack. Is the Defense Department treating this as a national security threat?",
        depth: 0,
        answers: [
          {
            id: "a_threat_challenge",
            type: AnswerType.Challenge,
            text: "Absolutely. The ability to control our transportation grid is a profound security issue. We are treating this with the utmost seriousness.",
            impacts: {
              cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } },
            },
            outcomeModifiers: {
              outcome_cars_patch_issued: OutcomeModifierWeight.SlightPositive, // +4
              outcome_cars_traffic_chaos: OutcomeModifierWeight.Neutral, // 0
              outcome_cars_ban_proposed: OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_cars_military",
          },
          {
            id: "a_threat_reassure",
            type: AnswerType.Reassure,
            text: "Our military and civilian systems are on separate networks. While this is a major crime, it does not pose a direct threat to our defense assets.",
            impacts: {
              cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.SlightlyPositive } },
            },
            outcomeModifiers: {
              outcome_cars_patch_issued: OutcomeModifierWeight.SlightPositive, // +4
              outcome_cars_traffic_chaos: OutcomeModifierWeight.SlightNegative, // -4
              outcome_cars_ban_proposed: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_cars_military: {
        id: "q_cars_military",
        text: "If you're treating it so seriously, what military assets are being deployed to counter this? Or are we just waiting for a software update?",
        depth: 1,
        answers: [
          {
            id: "a_military_inform",
            type: AnswerType.Inform,
            text: "Cyber Command is actively working with tech companies to analyze the malicious code and develop a countermeasure to restore control.",
            impacts: {
              cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyPositive } },
            },
            outcomeModifiers: {
              outcome_cars_patch_issued: OutcomeModifierWeight.ModeratePositive, // +6 -> +10 total
              outcome_cars_traffic_chaos: OutcomeModifierWeight.SlightNegative, // -4 -> -4 total
              outcome_cars_ban_proposed: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
            },
          },
          {
            id: "a_military_deflect",
            type: AnswerType.Deflect,
            text: "We don't discuss specific operational details. The important thing is that the full force of the federal government is focused on this.",
            impacts: {},
            outcomeModifiers: {
              outcome_cars_patch_issued: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_cars_traffic_chaos: OutcomeModifierWeight.SlightPositive, // +4 -> +4 total
              outcome_cars_ban_proposed: OutcomeModifierWeight.Neutral, // 0 -> -4 total
            },
          },
        ],
      },
    },
  },
};
