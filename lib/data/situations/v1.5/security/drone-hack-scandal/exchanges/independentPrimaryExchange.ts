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
    rootQuestionId: "q_hack_funny",
    questions: {
      q_hack_funny: {
        id: "q_hack_funny",
        text: "It's hard not to see the humor in this, but what does it say about our defense readiness if our drones can be used to deliver rubber chickens?",
        depth: 0,
        answers: [
          {
            id: "a_funny_deflect",
            type: AnswerType.Deflect,
            text: "It says that even in serious business, a little absurdity can happen. The payload was harmless, the breach was limited, and the issue is resolved.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_hack_traced: OutcomeModifierWeight.StrongNegative, // -8
              outcome_hack_foreign_power: OutcomeModifierWeight.Neutral, // 0
              outcome_hack_public_ridicule:
                OutcomeModifierWeight.StrongPositive, // +8 -> 0 total
            },
          },
          {
            id: "a_funny_challenge",
            type: AnswerType.Challenge,
            text: "I would caution against treating this as a joke. This was a criminal act, and the DOJ is pursuing all leads to bring the culprits to justice.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_hack_traced: OutcomeModifierWeight.SlightPositive, // +4
              outcome_hack_foreign_power: OutcomeModifierWeight.SlightPositive, // +4
              outcome_hack_public_ridicule:
                OutcomeModifierWeight.StrongNegative, // -8
            },
            followUpId: "q_hack_culprits",
          },
        ],
      },
      q_hack_culprits: {
        id: "q_hack_culprits",
        text: "You mention bringing culprits to justice. Do you have any leads? Is this domestic, international, a teenager in a basement?",
        depth: 1,
        answers: [
          {
            id: "a_culprits_reassure",
            type: AnswerType.Reassure,
            text: "The FBI and our cyber-crime units are making significant progress. We are confident we will identify and prosecute those responsible.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_hack_traced: OutcomeModifierWeight.StrongPositive, // +8 -> +12 total
              outcome_hack_foreign_power: OutcomeModifierWeight.Neutral, // 0 -> +4 total
              outcome_hack_public_ridicule:
                OutcomeModifierWeight.StrongNegative, // -8 -> -16 total
            },
          },
          {
            id: "a_culprits_inform",
            type: AnswerType.Inform,
            text: "We can't comment on an active criminal investigation. Doing so could compromise our ability to make an arrest and secure a conviction.",
            impacts: {},
            outcomeModifiers: {
              outcome_hack_traced: OutcomeModifierWeight.Neutral, // 0 -> +4 total
              outcome_hack_foreign_power: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_hack_public_ridicule:
                OutcomeModifierWeight.SlightPositive, // +4 -> -4 total
            },
          },
        ],
      },
    },
  },
};
