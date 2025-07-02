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
    rootQuestionId: "q_ag_trips_abuse",
    questions: {
      q_ag_trips_abuse: {
        id: "q_ag_trips_abuse",
        text: "Flight logs show the Attorney General used a DOJ jet for repeated weekend trips to casino destinations. Is this not a clear abuse of taxpayer resources?",
        depth: 0,
        answers: [
          {
            id: "a_abuse_reassure",
            type: AnswerType.Reassure,
            text: "All of the AG's travel is subject to strict protocols and approved by ethics officials. Any personal time was incidental to official business.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_ag_pays_back: OutcomeModifierWeight.SlightPositive, // +4
              outcome_ag_ig_ouster: OutcomeModifierWeight.SlightNegative, // -4
              outcome_ag_rules_tightened: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_ag_trips_business",
          },
          {
            id: "a_abuse_deny",
            type: AnswerType.Deny,
            text: "This is a misleading narrative. The AG works around the clock, and these trips were for critical law enforcement business, period.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_ag_pays_back: OutcomeModifierWeight.SlightNegative, // -4
              outcome_ag_ig_ouster: OutcomeModifierWeight.SlightPositive, // +4
              outcome_ag_rules_tightened: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_ag_trips_business: {
        id: "q_ag_trips_business",
        text: "What 'official business' required the AG's presence at a casino resort every other weekend for three months straight?",
        depth: 1,
        answers: [
          {
            id: "a_business_deflect",
            type: AnswerType.Deflect,
            text: "I cannot comment on the specifics of sensitive law enforcement meetings or investigations that may take place in such locations.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_ag_pays_back: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_ag_ig_ouster: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_ag_rules_tightened: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_business_admit",
            type: AnswerType.Admit,
            text: "The frequency of the trips was inappropriate. The AG acknowledges the poor judgment and will reimburse the government for the travel.",
            impacts: {},
            outcomeModifiers: {
              outcome_ag_pays_back: OutcomeModifierWeight.StrongPositive, // +8 -> +12 total
              outcome_ag_ig_ouster: OutcomeModifierWeight.StrongNegative, // -8 -> -12 total
              outcome_ag_rules_tightened: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
