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
    rootQuestionId: "q_doghouse_diplomatic",
    questions: {
      q_doghouse_diplomatic: {
        id: "q_doghouse_diplomatic",
        text: "Our diplomatic partners spent months on this treaty. What message does it send when the administration treats it like a chew toy?",
        depth: 0,
        answers: [
          {
            id: "a_diplomatic_inform",
            type: AnswerType.Inform,
            text: "The Secretary of State has already been in contact with our allies, explained the bizarre accident, and shared a laugh about it.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_dog_laughs: OutcomeModifierWeight.SlightPositive, // +4
              outcome_dog_diplomatic_incident:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_dog_security_scare: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_diplomatic_admit",
            type: AnswerType.Admit,
            text: "It sends a terrible message, and we are deeply embarrassed. We have offered our formal apologies for the disrespect this implies.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_dog_laughs: OutcomeModifierWeight.SlightNegative, // -4
              outcome_dog_diplomatic_incident:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_dog_security_scare: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_doghouse_consequences",
          },
        ],
      },
      q_doghouse_consequences: {
        id: "q_doghouse_consequences",
        text: "Beyond apologies, have there been any real consequences for this? Has the other nation threatened to pull out of the treaty?",
        depth: 1,
        answers: [
          {
            id: "a_consequences_deny",
            type: AnswerType.Deny,
            text: "No, not at all. They understand that accidents happen. The treaty is secure and the relationship is strong. Any suggestion otherwise is false.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_dog_laughs: OutcomeModifierWeight.SlightPositive, // +4 -> -2 total
              outcome_dog_diplomatic_incident:
                OutcomeModifierWeight.SlightNegative, // -4 -> +4 total
              outcome_dog_security_scare: OutcomeModifierWeight.Neutral, // 0 -> -4 total
            },
          },
          {
            id: "a_consequences_reassure",
            type: AnswerType.Reassure,
            text: "Our partners were understandably concerned, but we have reassured them of our commitment. We do not anticipate any long-term damage.",
            impacts: {},
            outcomeModifiers: {
              outcome_dog_laughs: OutcomeModifierWeight.Neutral, // 0 -> -6 total
              outcome_dog_diplomatic_incident:
                OutcomeModifierWeight.SlightPositive, // +4 -> +12 total
              outcome_dog_security_scare: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
            },
          },
        ],
      },
    },
  },
};
