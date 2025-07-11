import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/types";

// This exchange is generic enough to be used by any publication
export const allPublicationsExchange: ExchangeData = {
  publication: PublicationStaticId.IndependentPrimary, // Placeholder, can be overridden
  content: {
    rootQuestionId: "q_tweetstorm_judgment",
    questions: {
      q_tweetstorm_judgment: {
        id: "q_tweetstorm_judgment",
        text: "The President tweeted that birds are government spies. This raises serious questions about their judgment and fitness for office. What happened?",
        depth: 0,
        answers: [
          {
            id: "a_judgment_deny",
            type: AnswerType.Deny,
            text: "The President's account was compromised overnight. This was not a tweet from the President. Homeland Security is investigating the breach.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Positive },
            },
            outcomeModifiers: {
              outcome_tweetstorm_walked_back:
                OutcomeModifierWeight.StrongPositive, // +8
              outcome_tweetstorm_fuels_distrust:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_tweetstorm_viral_meme:
                OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_tweetstorm_hack_proof",
          },
          {
            id: "a_judgment_deflect",
            type: AnswerType.Deflect,
            text: "It was obviously a joke that some people are choosing to take literally to score political points. The President has a sense of humor.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_tweetstorm_walked_back:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_tweetstorm_fuels_distrust:
                OutcomeModifierWeight.SlightNegative, // -4
              outcome_tweetstorm_viral_meme: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_judgment_reassure",
            type: AnswerType.Reassure,
            text: "The President is in excellent health and works tireless hours. This was an instance of late-night exhaustion. It has been deleted.",
            impacts: {
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                },
              },
            },
            outcomeModifiers: {
              outcome_tweetstorm_walked_back:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_tweetstorm_fuels_distrust:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_tweetstorm_viral_meme:
                OutcomeModifierWeight.StrongNegative, // -8
            },
          },
        ],
      },
      q_tweetstorm_hack_proof: {
        id: "q_tweetstorm_hack_proof",
        text: "You're claiming a hack, but several analysts say the tweet's style is identical to the President's. What proof do you have of a breach?",
        depth: 1,
        answers: [
          {
            id: "a_hack_inform",
            type: AnswerType.Inform,
            text: "Homeland Security is conducting a full forensic analysis. We can't share details of an ongoing security investigation, but we are confident.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_tweetstorm_walked_back:
                OutcomeModifierWeight.SlightPositive, // +4 -> +12 total
              outcome_tweetstorm_fuels_distrust:
                OutcomeModifierWeight.SlightNegative, // -4 -> -8 total
              outcome_tweetstorm_viral_meme: OutcomeModifierWeight.Neutral, // 0 -> -4 total
            },
          },
          {
            id: "a_hack_challenge",
            type: AnswerType.Challenge,
            text: "I'm not going to engage with so-called 'analysts.' We have told you what happened, and we consider the matter closed.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyNegative },
            },
            outcomeModifiers: {
              outcome_tweetstorm_walked_back:
                OutcomeModifierWeight.SlightNegative, // -4 -> +4 total
              outcome_tweetstorm_fuels_distrust:
                OutcomeModifierWeight.SlightPositive, // +4 -> 0 total
              outcome_tweetstorm_viral_meme: OutcomeModifierWeight.Neutral, // 0 -> -4 total
            },
          },
        ],
      },
    },
  },
};
