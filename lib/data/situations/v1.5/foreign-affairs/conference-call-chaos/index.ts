import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { conferenceCallChaosOutcomes } from "./conferenceCallChaosOutcomes";
import { conferenceCallChaosPreferences } from "./conferenceCallChaosPreferences";
import { conferenceCallChaosExchanges } from "./exchanges";

export const conferenceCallChaos: SituationData = {
  trigger: {
    staticKey: "conference_call_chaos",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Conference Call Chaos",
  description:
    "A video conference with world leaders is disrupted when a cat filter is accidentally applied to the President's face.",
  content: {
    outcomes: conferenceCallChaosOutcomes,
    preferences: conferenceCallChaosPreferences,
  },
  exchanges: conferenceCallChaosExchanges,
};
