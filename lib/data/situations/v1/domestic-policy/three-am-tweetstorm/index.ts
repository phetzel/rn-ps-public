import { SituationType, SituationData } from "~/types";
import { threeAmTweetstormPreferences } from "./threeAmTweetstormPreferences";
import { threeAmTweetstormOutcomes } from "./threeAmTweetstormOutcomes";
import { threeAmTweetstormExchanges } from "./threeAmTweetstormExchanges";

export const threeAmTweetstorm: SituationData = {
  trigger: {
    staticKey: "three_am_tweetstorm",
    type: SituationType.DomesticPolicy,
    requirements: {}, // can fire anytime
  },
  type: SituationType.DomesticPolicy,
  title: "3 a.m. Tweetstorm",
  description:
    "At 3 a.m. the President tweets wild claims—cheese barons control weather—sparking concern over judgement and social-media policy.",
  content: {
    preferences: threeAmTweetstormPreferences,
    outcomes: threeAmTweetstormOutcomes,
  },
  exchanges: threeAmTweetstormExchanges,
};
