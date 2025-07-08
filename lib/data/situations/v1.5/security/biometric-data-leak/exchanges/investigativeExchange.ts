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
    rootQuestionId: "q_leak_how",
    questions: {
      q_leak_how: {
        id: "q_leak_how",
        text: "How could a single intern using 'password123' compromise our entire national biometric ID system? This points to systemic negligence.",
        depth: 0,
        answers: [
          {
            id: "a_how_admit",
            type: AnswerType.Admit,
            text: "It was an unacceptable, catastrophic failure of our security protocols. We are conducting a top-to-bottom review of the entire system.",
            impacts: {
              cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } },
            },
            outcomeModifiers: {
              outcome_leak_contained: OutcomeModifierWeight.SlightPositive, // +4
              outcome_leak_fraud_wave: OutcomeModifierWeight.SlightNegative, // -4
              outcome_leak_congress_stalls: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_leak_accountability",
          },
          {
            id: "a_how_deflect",
            type: AnswerType.Deflect,
            text: "This was an isolated case of human error, not a systemic issue. The individual responsible has been identified and removed.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_leak_contained: OutcomeModifierWeight.SlightNegative, // -4
              outcome_leak_fraud_wave: OutcomeModifierWeight.SlightPositive, // +4
              outcome_leak_congress_stalls: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_leak_accountability: {
        id: "q_leak_accountability",
        text: "Beyond the intern, who is being held accountable? The head of Homeland Security? The contractor who built the system? Who takes the fall?",
        depth: 1,
        answers: [
          {
            id: "a_accountability_inform",
            type: AnswerType.Inform,
            text: "The Department of Justice has opened a criminal investigation into the intern and a review of the federal contractors involved.",
            impacts: {
              cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.SlightlyPositive } },
            },
            outcomeModifiers: {
              outcome_leak_contained: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_leak_fraud_wave: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_leak_congress_stalls: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_accountability_challenge",
            type: AnswerType.Challenge,
            text: "This isn't about finding a scapegoat. It's about fixing the problem. Our focus is on securing the system, not on a political blame game.",
            impacts: {},
            outcomeModifiers: {
              outcome_leak_contained: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_leak_fraud_wave: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_leak_congress_stalls: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
