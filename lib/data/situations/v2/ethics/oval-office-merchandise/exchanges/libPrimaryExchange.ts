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
    rootQuestionId: "q_merch_tacky",
    questions: {
      q_merch_tacky: {
        id: "q_merch_tacky",
        text: "Doesn't selling merchandise out of the Oval Office cheapen the presidency? It seems tacky and beneath the dignity of the office.",
        depth: 0,
        answers: [
          {
            id: "a_tacky_challenge",
            type: AnswerType.Challenge,
            text: "I disagree. Making the presidency more accessible and allowing people to have a souvenir is a modern way to connect with citizens.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_merch_closed: OutcomeModifierWeight.StrongNegative, // -8
              outcome_merch_profiteering_scandal:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_merch_public_loves_it:
                OutcomeModifierWeight.SlightPositive, // +4
            },
            followUpId: "q_merch_precedent",
          },
          {
            id: "a_tacky_admit",
            type: AnswerType.Admit,
            text: "Some people will certainly see it that way. It was a novel idea, and we are listening carefully to the public's feedback on it.",
            impacts: {},
            outcomeModifiers: {
              outcome_merch_closed: OutcomeModifierWeight.StrongPositive, // +8
              outcome_merch_profiteering_scandal:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_merch_public_loves_it:
                OutcomeModifierWeight.SlightNegative, // -4
            },
          },
        ],
      },
      q_merch_precedent: {
        id: "q_merch_precedent",
        text: "What's next, corporate sponsors for the State of the Union? Where does this commercialization of the presidency end?",
        depth: 1,
        answers: [
          {
            id: "a_precedent_deny",
            type: AnswerType.Deny,
            text: "That's a ridiculous slippery slope argument. This is a simple gift shop, nothing more. There are no plans for further commercialization.",
            impacts: {},
            outcomeModifiers: {
              outcome_merch_closed: OutcomeModifierWeight.SlightNegative, // -4 -> -12 total
              outcome_merch_profiteering_scandal:
                OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_merch_public_loves_it:
                OutcomeModifierWeight.StrongPositive, // +8 -> +12 total
            },
          },
          {
            id: "a_precedent_deflect",
            type: AnswerType.Deflect,
            text: "The President is always looking for innovative ways to engage with the public. We're not going to shut down new ideas because of 'what if' scenarios.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_merch_closed: OutcomeModifierWeight.SlightNegative, // -4 -> -12 total
              outcome_merch_profiteering_scandal:
                OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_merch_public_loves_it:
                OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
            },
          },
        ],
      },
    },
  },
};
