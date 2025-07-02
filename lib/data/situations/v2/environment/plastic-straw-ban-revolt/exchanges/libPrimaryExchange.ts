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
    rootQuestionId: "q_straw_disabilities",
    questions: {
      q_straw_disabilities: {
        id: "q_straw_disabilities",
        text: "Disability advocates say this sudden ban harms people who rely on plastic straws. Why was this policy rolled out without considering them?",
        depth: 0,
        answers: [
          {
            id: "a_disabilities_admit",
            type: AnswerType.Admit,
            text: "That was a serious oversight in the initial rollout. We are immediately issuing an amendment to provide a clear medical exemption.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_straw_ban_eased: OutcomeModifierWeight.StrongPositive, // +8
              outcome_straw_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_straw_alternatives_boom:
                OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_disabilities_reassure",
            type: AnswerType.Reassure,
            text: "We are working with advocacy groups to ensure everyone who needs a plastic straw has access. Our goal was never to harm vulnerable people.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_straw_ban_eased: OutcomeModifierWeight.ModeratePositive, // +6
              outcome_straw_black_market: OutcomeModifierWeight.SlightNegative, // -4
              outcome_straw_alternatives_boom:
                OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_straw_timeline",
          },
        ],
      },
      q_straw_timeline: {
        id: "q_straw_timeline",
        text: "How quickly will that exemption be available? People need access now, not after weeks of bureaucratic delay.",
        depth: 1,
        answers: [
          {
            id: "a_timeline_inform",
            type: AnswerType.Inform,
            text: "The DOJ is issuing guidance to all businesses today clarifying that the ban should not be enforced for those with medical needs.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_straw_ban_eased: OutcomeModifierWeight.SlightPositive, // +4 -> +10 total
              outcome_straw_black_market: OutcomeModifierWeight.Neutral, // 0 -> -4 total
              outcome_straw_alternatives_boom:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
            },
          },
          {
            id: "a_timeline_deflect",
            type: AnswerType.Deflect,
            text: "The spirit of the law is what matters. We trust businesses to do the right thing while we formalize the exemption language.",
            impacts: {},
            outcomeModifiers: {
              outcome_straw_ban_eased: OutcomeModifierWeight.SlightNegative, // -4 -> +2 total
              outcome_straw_black_market: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_straw_alternatives_boom: OutcomeModifierWeight.Neutral, // 0 -> -4 total
            },
          },
        ],
      },
    },
  },
};
