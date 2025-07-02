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
    rootQuestionId: "q_parking_feud_leaks",
    questions: {
      q_parking_feud_leaks: {
        id: "q_parking_feud_leaks",
        text: "We have leaked emails showing the Secretaries of State and Defense are in a bitter feud over a parking spot. Is this really a priority for them?",
        depth: 0,
        answers: [
          {
            id: "a_leaks_deny",
            type: AnswerType.Deny,
            text: "That is a gross mischaracterization of a minor administrative issue. Our cabinet is unified and focused on serving the American people.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_parking_mediated: OutcomeModifierWeight.SlightNegative, // -4
              outcome_parking_ridicule: OutcomeModifierWeight.SlightPositive, // +4
              outcome_parking_escalates: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_leaks_deflect",
            type: AnswerType.Deflect,
            text: "There's some friendly, spirited competition, sure. It shows how passionate our cabinet is. I assure you it doesn't distract from their work.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_parking_mediated: OutcomeModifierWeight.SlightNegative, // -4
              outcome_parking_ridicule: OutcomeModifierWeight.SlightNegative, // -4
              outcome_parking_escalates: OutcomeModifierWeight.StrongPositive, // +8
            },
            followUpId: "q_parking_feud_distraction",
          },
        ],
      },
      q_parking_feud_distraction: {
        id: "q_parking_feud_distraction",
        text: "You call it 'friendly,' but sources say their staffers are now involved in pranks. How is this not a distraction from national security and diplomacy?",
        depth: 1,
        answers: [
          {
            id: "a_distraction_admit",
            type: AnswerType.Admit,
            text: "You're right, it has gone too far. The President is intervening to put an end to this unprofessional and distracting behavior immediately.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_parking_mediated: OutcomeModifierWeight.StrongPositive, // +8 -> +4 total
              outcome_parking_ridicule: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_parking_escalates: OutcomeModifierWeight.SlightNegative, // -4 -> +4 total
            },
          },
          {
            id: "a_distraction_challenge",
            type: AnswerType.Challenge,
            text: "Again, you're relying on gossip. I'm not going to comment on rumors. Both Secretaries are consummate professionals focused on their jobs.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_parking_mediated: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_parking_ridicule: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_parking_escalates: OutcomeModifierWeight.Neutral, // 0 -> +8 total
            },
          },
        ],
      },
    },
  },
};
