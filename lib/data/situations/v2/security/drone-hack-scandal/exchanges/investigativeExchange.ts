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
    rootQuestionId: "q_hack_state_actor",
    questions: {
      q_hack_state_actor: {
        id: "q_hack_state_actor",
        text: "This seems too sophisticated for a prank. Is a foreign state actor responsible for this cyber-attack on our military assets?",
        depth: 0,
        answers: [
          {
            id: "a_actor_inform",
            type: AnswerType.Inform,
            text: "We cannot discuss attribution while an investigation is active. Our focus is on the forensic analysis of the breach and patching the vulnerability.",
            impacts: {
              cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } },
            },
            outcomeModifiers: {
              outcome_hack_traced: OutcomeModifierWeight.SlightPositive, // +4
              outcome_hack_foreign_power: OutcomeModifierWeight.SlightNegative, // -4
              outcome_hack_public_ridicule: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_hack_vulnerability",
          },
          {
            id: "a_actor_reassure",
            type: AnswerType.Reassure,
            text: "While we're exploring all possibilities, I want to be clear that our core military networks remain secure and were not compromised in this incident.",
            impacts: {
              cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } },
            },
            outcomeModifiers: {
              outcome_hack_traced: OutcomeModifierWeight.SlightPositive, // +4
              outcome_hack_foreign_power: OutcomeModifierWeight.StrongNegative, // -8
              outcome_hack_public_ridicule: OutcomeModifierWeight.SlightPositive, // +4 -> +2 total
            },
          },
        ],
      },
      q_hack_vulnerability: {
        id: "q_hack_vulnerability",
        text: "Can you explain the vulnerability? How could hackers get control of military hardware that is supposed to be on a closed, secure network?",
        depth: 1,
        answers: [
          {
            id: "a_vulnerability_admit",
            type: AnswerType.Admit,
            text: "It appears a contractor failed to follow security protocols, creating a very specific and limited access point which has now been closed.",
            impacts: {
              cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.SlightlyPositive } },
            },
            outcomeModifiers: {
              outcome_hack_traced: OutcomeModifierWeight.StrongPositive, // +8 -> +12 total
              outcome_hack_foreign_power: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_hack_public_ridicule: OutcomeModifierWeight.SlightNegative, // -4 -> -4 total
            },
          },
          {
            id: "a_vulnerability_deflect",
            type: AnswerType.Deflect,
            text: "I cannot get into the highly technical details of our cybersecurity infrastructure. That would be irresponsible and endanger national security.",
            impacts: {},
            outcomeModifiers: {
              outcome_hack_traced: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_hack_foreign_power: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_hack_public_ridicule: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
