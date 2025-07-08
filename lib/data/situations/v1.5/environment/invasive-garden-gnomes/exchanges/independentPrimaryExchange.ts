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
    rootQuestionId: "q_gnomes_crime",
    questions: {
      q_gnomes_crime: {
        id: "q_gnomes_crime",
        text: "Is this being treated as a crime? Vandalizing national parks is a serious offense, even if it's done with garden gnomes.",
        depth: 0,
        answers: [
          {
            id: "a_crime_challenge",
            type: AnswerType.Challenge,
            text: "Absolutely. The Department of Justice is treating this as an act of mass vandalism and will prosecute the culprits to the fullest extent.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_gnomes_recycled: OutcomeModifierWeight.SlightPositive, // +4
              outcome_gnomes_wildlife_harm:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_gnomes_public_art: OutcomeModifierWeight.StrongNegative, // -8
            },
            followUpId: "q_gnomes_leads",
          },
          {
            id: "a_crime_reassure",
            type: AnswerType.Reassure,
            text: "The primary focus is on cleanup. While we will investigate, the main goal is restoring our parks, not making a federal case out of a prank.",
            impacts: {},
            outcomeModifiers: {
              outcome_gnomes_recycled: OutcomeModifierWeight.SlightPositive, // +4
              outcome_gnomes_wildlife_harm:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_gnomes_public_art: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
      q_gnomes_leads: {
        id: "q_gnomes_leads",
        text: "You say you'll prosecute, but do you have any leads? Or is this just tough talk with no real chance of catching the prankster?",
        depth: 1,
        answers: [
          {
            id: "a_leads_inform",
            type: AnswerType.Inform,
            text: "The FBI is analyzing social media and online chatter for clues. We have several promising leads and expect to make an announcement soon.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_gnomes_recycled: OutcomeModifierWeight.SlightPositive, // +4
              outcome_gnomes_wildlife_harm: OutcomeModifierWeight.Neutral, // 0
              outcome_gnomes_public_art: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
          {
            id: "a_leads_deny",
            type: AnswerType.Deny,
            text: "We don't comment on active investigations. But let me be clear, we will find who did this. There is nowhere for them to hide.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_gnomes_recycled: OutcomeModifierWeight.SlightNegative, // -4
              outcome_gnomes_wildlife_harm:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_gnomes_public_art: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
