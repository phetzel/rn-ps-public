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
    rootQuestionId: "q_gaffe_insensitivity",
    questions: {
      q_gaffe_insensitivity: {
        id: "q_gaffe_insensitivity",
        text: "This gift seems culturally insensitive at best. What does this say about the administration's competence in basic diplomatic research?",
        depth: 0,
        answers: [
          {
            id: "a_insensitivity_admit",
            type: AnswerType.Admit,
            text: "It was an oversight, plain and simple. We made a mistake, we've extended our sincerest apologies, and we are correcting it immediately.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_gaffe_apology_accepted:
                OutcomeModifierWeight.StrongPositive, // +8
              outcome_gaffe_lingering_resentment: OutcomeModifierWeight.Neutral, // 0
              outcome_gaffe_mockery: OutcomeModifierWeight.StrongNegative, // -8
            },
            followUpId: "q_gaffe_prevent_future",
          },
          {
            id: "a_insensitivity_deny",
            type: AnswerType.Deny,
            text: "This story is being blown way out of proportion. It was a simple mix-up, not some grand diplomatic failure. We've moved on.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_gaffe_apology_accepted:
                OutcomeModifierWeight.MajorNegative, // -12
              outcome_gaffe_lingering_resentment:
                OutcomeModifierWeight.StrongPositive, // +8
              outcome_gaffe_mockery: OutcomeModifierWeight.SlightPositive, // +4
            },
          },
        ],
      },
      q_gaffe_prevent_future: {
        id: "q_gaffe_prevent_future",
        text: "How will you prevent future 'mistakes'? What specific changes are being made to the State Department's protocol to ensure this doesn't happen again?",
        depth: 1,
        answers: [
          {
            id: "a_future_inform",
            type: AnswerType.Inform,
            text: "State is implementing a new multi-step cultural review for all official gifts. We are taking this as a serious learning opportunity.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_gaffe_apology_accepted:
                OutcomeModifierWeight.SlightPositive, // +4 -> +12 total
              outcome_gaffe_lingering_resentment:
                OutcomeModifierWeight.SlightNegative, // -4 -> -4 total
              outcome_gaffe_mockery: OutcomeModifierWeight.Neutral, // 0 -> -8 total
            },
          },
          {
            id: "a_future_deflect",
            type: AnswerType.Deflect,
            text: "Our protocols are robust. This was a human error, which can happen in any organization. The key is how quickly you make amends.",
            impacts: {},
            outcomeModifiers: {
              outcome_gaffe_apology_accepted: OutcomeModifierWeight.Neutral, // 0 -> +8 total
              outcome_gaffe_lingering_resentment:
                OutcomeModifierWeight.SlightPositive, // +4 -> +4 total
              outcome_gaffe_mockery: OutcomeModifierWeight.SlightNegative, // -4 -> -12 total
            },
          },
        ],
      },
    },
  },
};
