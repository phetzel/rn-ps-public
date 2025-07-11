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
    rootQuestionId: "q_chaos_seriousness",
    questions: {
      q_chaos_seriousness: {
        id: "q_chaos_seriousness",
        text: "The President appeared as a pirate in a meeting with world leaders. Can the public be confident that this administration takes diplomacy seriously?",
        depth: 0,
        answers: [
          {
            id: "a_seriousness_reassure",
            type: AnswerType.Reassure,
            text: "It was an unfortunate but momentary technical issue. The substance of the call was productive and focused on serious global challenges.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_chaos_laughs: OutcomeModifierWeight.Neutral, // 0
              outcome_chaos_market_jitters:
                OutcomeModifierWeight.ModerateNegative, // -6
              outcome_chaos_pirate_meme: OutcomeModifierWeight.ModeratePositive, // +6
            },
          },
          {
            id: "a_seriousness_deflect",
            type: AnswerType.Deflect,
            text: "Even world leaders can have a laugh at a technical glitch. Frankly, it was a good icebreaker before getting down to very serious business.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_chaos_laughs: OutcomeModifierWeight.StrongPositive, // +8
              outcome_chaos_market_jitters:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_chaos_pirate_meme: OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_chaos_icebreaker",
          },
        ],
      },
      q_chaos_icebreaker: {
        id: "q_chaos_icebreaker",
        text: "You call it an 'icebreaker,' but sources say several leaders were offended by the lack of professionalism. Did this damage relationships?",
        depth: 1,
        answers: [
          {
            id: "a_icebreaker_deny",
            type: AnswerType.Deny,
            text: "Not at all. I can confirm that everyone understood it for what it was—a harmless software bug. All our diplomatic relationships remain strong.",
            impacts: {
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_chaos_laughs: OutcomeModifierWeight.SlightPositive, // +4 -> +12 total
              outcome_chaos_market_jitters:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_chaos_pirate_meme: OutcomeModifierWeight.Neutral, // 0 -> -4 total
            },
          },
          {
            id: "a_icebreaker_challenge",
            type: AnswerType.Challenge,
            text: "Anonymous 'sources' are trying to turn a funny moment into a crisis. We're not going to dignify gossip about who was or wasn't amused.",
            impacts: {},
            outcomeModifiers: {
              outcome_chaos_laughs: OutcomeModifierWeight.Neutral, // 0 -> +8 total
              outcome_chaos_market_jitters:
                OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_chaos_pirate_meme: OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
            },
          },
        ],
      },
    },
  },
};
