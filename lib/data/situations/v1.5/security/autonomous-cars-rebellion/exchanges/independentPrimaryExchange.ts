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
    rootQuestionId: "q_cars_regulation",
    questions: {
      q_cars_regulation: {
        id: "q_cars_regulation",
        text: "Did the government fail to properly regulate this technology, leaving the public vulnerable to this kind of chaos?",
        depth: 0,
        answers: [
          {
            id: "a_regulation_deflect",
            type: AnswerType.Deflect,
            text: "This was a criminal act by sophisticated hackers. The blame lies with them, not with the regulators working to foster innovation.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_cars_patch_issued: OutcomeModifierWeight.SlightNegative, // -4
              outcome_cars_traffic_chaos: OutcomeModifierWeight.SlightPositive, // +4
              outcome_cars_ban_proposed: OutcomeModifierWeight.Neutral, // 0
            },
            followUpId: "q_cars_prosecution",
          },
          {
            id: "a_regulation_admit",
            type: AnswerType.Admit,
            text: "It's clear our existing regulations did not anticipate a threat of this scale. We will need to go back to the drawing board.",
            impacts: {},
            outcomeModifiers: {
              outcome_cars_patch_issued: OutcomeModifierWeight.SlightPositive, // +4
              outcome_cars_traffic_chaos: OutcomeModifierWeight.Neutral, // 0
              outcome_cars_ban_proposed: OutcomeModifierWeight.SlightNegative, // -4
            },
          },
        ],
      },
      q_cars_prosecution: {
        id: "q_cars_prosecution",
        text: "What is the Department of Justice doing to find and prosecute these 'criminal hackers' you're blaming for this?",
        depth: 1,
        answers: [
          {
            id: "a_prosecution_reassure",
            type: AnswerType.Reassure,
            text: "The FBI has opened a major investigation. We will use every available resource to bring those responsible for this chaos to justice.",
            impacts: {
              cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.SlightlyPositive } },
            },
            outcomeModifiers: {
              outcome_cars_patch_issued: OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_cars_traffic_chaos: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_cars_ban_proposed: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_prosecution_inform",
            type: AnswerType.Inform,
            text: "We cannot comment on the specifics of an ongoing investigation. However, this is being treated as a top-priority domestic terrorism case.",
            impacts: {
              cabinet: { [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive } },
            },
            outcomeModifiers: {
              outcome_cars_patch_issued: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_cars_traffic_chaos: OutcomeModifierWeight.SlightPositive, // +4 -> +8 total
              outcome_cars_ban_proposed: OutcomeModifierWeight.Neutral, // 0
            },
          },
        ],
      },
    },
  },
};
