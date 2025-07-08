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
    rootQuestionId: "q_czar_nepotism",
    questions: {
      q_czar_nepotism: {
        id: "q_czar_nepotism",
        text: "The President appointed their cousin, a former car salesman, as 'Snack Czar.' How is this anything other than blatant, insulting nepotism?",
        depth: 0,
        answers: [
          {
            id: "a_nepotism_challenge",
            type: AnswerType.Challenge,
            text: "Are you suggesting that being related to the President disqualifies a talented individual from serving their country in any capacity?",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_czar_nepotism_scandal:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_czar_unlikely_hero: OutcomeModifierWeight.SlightPositive, // +4
              outcome_czar_resigns: OutcomeModifierWeight.StrongNegative, // -8
            },
            followUpId: "q_czar_qualifications",
          },
          {
            id: "a_nepotism_inform",
            type: AnswerType.Inform,
            text: "This appointment went through the standard ethics vetting process at the DOJ, and it was determined to be in full compliance with the law.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_czar_nepotism_scandal:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_czar_unlikely_hero: OutcomeModifierWeight.Neutral, // 0
              outcome_czar_resigns: OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
      q_czar_qualifications: {
        id: "q_czar_qualifications",
        text: "What specific talents and qualifications does a used car salesman have to manage a nationwide federal snack program?",
        depth: 1,
        answers: [
          {
            id: "a_qualifications_deflect",
            type: AnswerType.Deflect,
            text: "He has extensive experience in logistics, supply chain management, and vendor negotiations. The skills are highly transferable.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_czar_nepotism_scandal:
                OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_czar_unlikely_hero: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_czar_resigns: OutcomeModifierWeight.StrongNegative, // -8 -> -16 total
            },
          },
          {
            id: "a_qualifications_admit",
            type: AnswerType.Admit,
            text: "While his resume is unconventional for this role, the President values his loyalty and business sense for this specific, low-stakes position.",
            impacts: {},
            outcomeModifiers: {
              outcome_czar_nepotism_scandal:
                OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_czar_unlikely_hero: OutcomeModifierWeight.Neutral, // 0 -> +4 total
              outcome_czar_resigns: OutcomeModifierWeight.SlightNegative, // -4 -> -12 total
            },
          },
        ],
      },
    },
  },
};
