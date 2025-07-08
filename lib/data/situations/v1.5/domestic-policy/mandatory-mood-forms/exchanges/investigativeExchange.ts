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
    rootQuestionId: "q_mood_privacy",
    questions: {
      q_mood_privacy: {
        id: "q_mood_privacy",
        text: "This 'mood form' is a massive data collection scheme. Where will this data be stored, who has access, and how does it not violate privacy rights?",
        depth: 0,
        answers: [
          {
            id: "a_privacy_deflect",
            type: AnswerType.Deflect,
            text: "The focus on privacy is premature. First, we need to have a conversation about the importance of mental wellness data for public health.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                },
              },
            },
            outcomeModifiers: {
              outcome_mood_retracted: OutcomeModifierWeight.SlightNegative, // -4
              outcome_mood_non_compliance: OutcomeModifierWeight.SlightPositive, // +4
              outcome_mood_scaled_back: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_mood_deflection",
          },
          {
            id: "a_privacy_reassure",
            type: AnswerType.Reassure,
            text: "All data will be fully anonymized and stored in a secure federal database, inaccessible without a court order, same as census data.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_mood_retracted: OutcomeModifierWeight.SlightPositive, // +4
              outcome_mood_non_compliance: OutcomeModifierWeight.SlightNegative, // -4
              outcome_mood_scaled_back: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_mood_deflection: {
        id: "q_mood_deflection",
        text: "That's a deflection. The Attorney General's office must have a legal opinion on this. Can you confirm the DOJ has signed off on this?",
        depth: 1,
        answers: [
          {
            id: "a_deflection_admit",
            type: AnswerType.Admit,
            text: "The legal review is ongoing. This is a novel policy, and we want to ensure all legal and constitutional questions are fully addressed.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_mood_retracted: OutcomeModifierWeight.ModeratePositive, // +6 -> +2 total
              outcome_mood_non_compliance:
                OutcomeModifierWeight.ModerateNegative, // -6 -> -2 total
              outcome_mood_scaled_back: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_deflection_challenge",
            type: AnswerType.Challenge,
            text: "We don't share internal legal deliberations. The administration is confident that the final program will be on solid legal ground.",
            impacts: {},
            outcomeModifiers: {
              outcome_mood_retracted: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_mood_non_compliance: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_mood_scaled_back: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
