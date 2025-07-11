import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { threeAmTweetstormOutcomes } from "./threeAmTweetstormOutcomes";
import { threeAmTweetstormPreferences } from "./threeAmTweetstormPreferences";
import { threeAmTweetstormExchanges } from "./exchanges";

export const threeAmTweetstorm: SituationData = {
  trigger: {
    staticKey: "three_am_tweetstorm",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "3 a.m. Tweetstorm",
  description:
    "At 3 a.m., the President tweets that birds are government spies, sparking global ridicule and concern over policy.",
  content: {
    outcomes: threeAmTweetstormOutcomes,
    preferences: threeAmTweetstormPreferences,
  },
  exchanges: threeAmTweetstormExchanges,
};
