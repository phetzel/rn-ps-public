import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { celebrityDeepFakeOutcomes } from "./celebrityDeepFakeOutcomes";
import { celebrityDeepFakePreferences } from "./celebrityDeepFakePreferences";
import { celebrityDeepFakeExchanges } from "./exchanges";

export const celebrityDeepFake: SituationData = {
  trigger: {
    staticKey: "celebrity_deep_fake_crisis",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Celebrity Deep-Fake Crisis",
  description:
    "Deep-fake videos of celebrities endorsing wild policies flood the web, leaving the public baffled and stars outraged.",
  content: {
    outcomes: celebrityDeepFakeOutcomes,
    preferences: celebrityDeepFakePreferences,
  },
  exchanges: celebrityDeepFakeExchanges,
};
