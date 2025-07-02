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
    rootQuestionId: "q_merch_profiteering",
    questions: {
      q_merch_profiteering: {
        id: "q_merch_profiteering",
        text: "Is the President personally profiting from this shop? And who is manufacturing this merchandise? This seems like a clear ethics violation.",
        depth: 0,
        answers: [
          {
            id: "a_profiteering_reassure",
            type: AnswerType.Reassure,
            text: "All proceeds from the shop go directly to the U.S. Treasury's general fund. There is absolutely no personal profit for anyone involved.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_merch_closed: OutcomeModifierWeight.SlightPositive, // +4
              outcome_merch_profiteering_scandal:
                OutcomeModifierWeight.StrongNegative, // -8
              outcome_merch_public_loves_it:
                OutcomeModifierWeight.SlightPositive, // +4
            },
          },
          {
            id: "a_profiteering_inform",
            type: AnswerType.Inform,
            text: "The DOJ is conducting a full review of the shop's finances and supply chain to ensure it complies with all federal ethics laws.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_merch_closed: OutcomeModifierWeight.SlightPositive, // +4
              outcome_merch_profiteering_scandal:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_merch_public_loves_it:
                OutcomeModifierWeight.StrongNegative, // -8
            },
            followUpId: "q_merch_legal_review",
          },
        ],
      },
      q_merch_legal_review: {
        id: "q_merch_legal_review",
        text: "Why was a legal review not completed before the shop opened? Were you trying to bypass ethics rules and hope no one would notice?",
        depth: 1,
        answers: [
          {
            id: "a_review_deny",
            type: AnswerType.Deny,
            text: "No, of course not. An initial review was done. This is a secondary, more thorough review to address the public's valid concerns.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_merch_closed: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_merch_profiteering_scandal:
                OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_merch_public_loves_it:
                OutcomeModifierWeight.StrongNegative, // -8 -> -16 total
            },
          },
          {
            id: "a_review_admit",
            type: AnswerType.Admit,
            text: "In our enthusiasm, we moved faster than we should have. We are pausing operations until the full legal review is complete.",
            impacts: {},
            outcomeModifiers: {
              outcome_merch_closed: OutcomeModifierWeight.StrongPositive, // +8 -> +12 total
              outcome_merch_profiteering_scandal:
                OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_merch_public_loves_it:
                OutcomeModifierWeight.SlightNegative, // -4 -> -12 total
            },
          },
        ],
      },
    },
  },
};
