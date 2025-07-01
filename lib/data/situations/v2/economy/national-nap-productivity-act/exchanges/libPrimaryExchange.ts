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
    rootQuestionId: "q_nap_act_worker",
    questions: {
      q_nap_act_worker: {
        id: "q_nap_act_worker",
        text: "This 'Nap Act' seems like a revolutionary pro-worker policy. Why is there so much corporate opposition to a healthier, more productive workforce?",
        depth: 0,
        answers: [
          {
            id: "a_nap_act_inform",
            type: AnswerType.Inform,
            text: "The data is clear: well-rested employees are more focused and efficient. HHS has extensive studies showing the long-term economic benefits.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_nap_productivity_boost:
                OutcomeModifierWeight.StrongPositive, // +8
              outcome_nap_uproar: OutcomeModifierWeight.StrongNegative, // -8
              outcome_nap_plan_paused: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_nap_act_data",
          },
          {
            id: "a_nap_act_deflect",
            type: AnswerType.Deflect,
            text: "This administration believes that innovation isn't just about technology; it's about new ways of working that value our people.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_nap_productivity_boost:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_nap_uproar: OutcomeModifierWeight.Neutral, // 0
              outcome_nap_plan_paused: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
        ],
      },
      q_nap_act_data: {
        id: "q_nap_act_data",
        text: "You cite studies, but those are lab conditions. What makes you think this can be implemented across every industry without causing total chaos?",
        depth: 1,
        answers: [
          {
            id: "a_nap_data_reassure",
            type: AnswerType.Reassure,
            text: "We understand this is not a one-size-fits-all solution. The DOJ will work with industries to create flexible, common-sense compliance rules.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_nap_productivity_boost:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_nap_uproar: OutcomeModifierWeight.SlightNegative, // -4
              outcome_nap_plan_paused: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_nap_data_challenge",
            type: AnswerType.Challenge,
            text: "Every major advancement faces skepticism. We can't let fear of 'chaos' stop us from pursuing a policy that is proven to improve lives.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_nap_productivity_boost: OutcomeModifierWeight.Neutral, // 0
              outcome_nap_uproar: OutcomeModifierWeight.Neutral, // 0
              outcome_nap_plan_paused: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
