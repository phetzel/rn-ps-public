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
    rootQuestionId: "q_yacht_optics",
    questions: {
      q_yacht_optics: {
        id: "q_yacht_optics",
        text: "Even if no laws were broken, the optics of this are terrible. How can the Pentagon justify this kind of cozy, luxurious relationship with contractors?",
        depth: 0,
        answers: [
          {
            id: "a_optics_admit",
            type: AnswerType.Admit,
            text: "You are right. The optics are terrible, and it shows poor judgment. The Secretary of Defense has already issued new, stricter ethics guidelines.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_yacht_house_hearings:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_yacht_repayment_warning:
                OutcomeModifierWeight.StrongPositive, // +8
              outcome_yacht_memes_flourish:
                OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_optics_challenge",
            type: AnswerType.Challenge,
            text: "Maintaining a strong relationship with our defense industry partners is vital for national security. Sometimes that involves networking events.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_yacht_house_hearings:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_yacht_repayment_warning:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_yacht_memes_flourish: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_yacht_culture",
          },
        ],
      },
      q_yacht_culture: {
        id: "q_yacht_culture",
        text: "Does this event suggest a culture of corruption or wastefulness at the Pentagon that goes beyond just one party?",
        depth: 1,
        answers: [
          {
            id: "a_culture_deny",
            type: AnswerType.Deny,
            text: "Absolutely not. This was an isolated incident of poor judgment. The men and women of our military are excellent stewards of taxpayer money.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_yacht_house_hearings:
                OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_yacht_repayment_warning:
                OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_yacht_memes_flourish: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_culture_reassure",
            type: AnswerType.Reassure,
            text: "The Treasury is conducting a broader review of entertainment expenses to ensure this isn't a systemic issue. We believe in total transparency.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_yacht_house_hearings:
                OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_yacht_repayment_warning:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_yacht_memes_flourish: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
