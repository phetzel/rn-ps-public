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
    rootQuestionId: "q_yacht_taxpayer_money",
    questions: {
      q_yacht_taxpayer_money: {
        id: "q_yacht_taxpayer_money",
        text: "Was taxpayer money used to fund this lavish yacht party for Pentagon officials and defense contractors? Yes or no.",
        depth: 0,
        answers: [
          {
            id: "a_money_admit",
            type: AnswerType.Admit,
            text: "Yes, unfortunately, it appears that some government funds were inappropriately used. We have launched a full investigation to determine the amount.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_yacht_house_hearings:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_yacht_repayment_warning:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_yacht_memes_flourish:
                OutcomeModifierWeight.StrongNegative, // -8
            },
            followUpId: "q_yacht_who_approved",
          },
          {
            id: "a_money_deflect",
            type: AnswerType.Deflect,
            text: "The relationship between the Pentagon and its industry partners is complex. These events are often co-funded. We are clarifying the accounting.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_yacht_house_hearings:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_yacht_repayment_warning:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_yacht_memes_flourish: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_yacht_who_approved: {
        id: "q_yacht_who_approved",
        text: "Who approved this expenditure? This seems like a significant ethical breach that must have had high-level sign-off.",
        depth: 1,
        answers: [
          {
            id: "a_approved_reassure",
            type: AnswerType.Reassure,
            text: "That's what the audit by the Treasury will determine. Let me be clear: anyone found to have misused funds will be held accountable.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_yacht_house_hearings:
                OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_yacht_repayment_warning:
                OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_yacht_memes_flourish: OutcomeModifierWeight.Neutral, // 0 -> -8 total
            },
          },
          {
            id: "a_approved_inform",
            type: AnswerType.Inform,
            text: "We believe it was a low-level administrative error, not a high-level conspiracy. The funds were miscategorized in a travel expense budget.",
            impacts: {},
            outcomeModifiers: {
              outcome_yacht_house_hearings:
                OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_yacht_repayment_warning:
                OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_yacht_memes_flourish:
                OutcomeModifierWeight.StrongPositive, // +8 -> 0 total
            },
          },
        ],
      },
    },
  },
};
