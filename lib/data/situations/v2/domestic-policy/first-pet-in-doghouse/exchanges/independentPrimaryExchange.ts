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
    rootQuestionId: "q_doghouse_charming",
    questions: {
      q_doghouse_charming: {
        id: "q_doghouse_charming",
        text: "It's a charmingly chaotic story, but it involves the destruction of an official, historic document. How did this happen?",
        depth: 0,
        answers: [
          {
            id: "a_charming_deflect",
            type: AnswerType.Deflect,
            text: "Even the First Pet has opinions on foreign policy, it seems! It was a one-in-a-million accident during a moment of relaxed protocol.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_dog_laughs: OutcomeModifierWeight.StrongPositive, // +8
              outcome_dog_diplomatic_incident:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_dog_security_scare: OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_doghouse_protocol",
          },
          {
            id: "a_charming_admit",
            type: AnswerType.Admit,
            text: "It was a serious and regrettable lapse. A sensitive document was left unattended, which is unacceptable. We are addressing the failure.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_dog_laughs: OutcomeModifierWeight.StrongNegative, // -8
              outcome_dog_diplomatic_incident:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_dog_security_scare: OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
      q_doghouse_protocol: {
        id: "q_doghouse_protocol",
        text: "You call it 'relaxed protocol,' but for a document this sensitive, that sounds like a major security breach. Who is being held accountable?",
        depth: 1,
        answers: [
          {
            id: "a_protocol_reassure",
            type: AnswerType.Reassure,
            text: "Homeland Security is reviewing the incident to tighten our document handling procedures. We can assure the public it won't happen again.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_dog_laughs: OutcomeModifierWeight.Neutral, // 0 -> +8 total
              outcome_dog_diplomatic_incident:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_dog_security_scare: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
            },
          },
          {
            id: "a_protocol_challenge",
            type: AnswerType.Challenge,
            text: "Let's maintain perspective. We're talking about a dog and some paper. The treaty is being re-printed. No real harm was done.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Negative },
            },
            outcomeModifiers: {
              outcome_dog_laughs: OutcomeModifierWeight.SlightPositive, // +4 -> +12 total
              outcome_dog_diplomatic_incident:
                OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_dog_security_scare: OutcomeModifierWeight.StrongNegative, // -8 -> -12 total
            },
          },
        ],
      },
    },
  },
};
