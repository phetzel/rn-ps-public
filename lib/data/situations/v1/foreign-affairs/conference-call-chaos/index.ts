import { SituationType, SituationData } from "~/types";
import { conferenceCallChaosPreferences } from "./conferenceCallChaosPreferences";
import { conferenceCallChaosOutcomes } from "./conferenceCallChaosOutcomes";
import { conferenceCallChaosExchanges } from "./conferenceCallChaosExchanges";

export const conferenceCallChaos: SituationData = {
  trigger: {
    staticKey: "conference_call_chaos",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Conference Call Chaos",
  description:
    "A video conference with world leaders accidentally uses a pirate filter on the President's face. Markets waver as memes explode online.",
  content: {
    preferences: conferenceCallChaosPreferences,
    outcomes: conferenceCallChaosOutcomes,
  },
  exchanges: conferenceCallChaosExchanges,
};
