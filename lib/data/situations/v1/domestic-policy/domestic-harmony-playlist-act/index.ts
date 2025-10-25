import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { domesticHarmonyPlaylistActOutcomes } from "./domesticHarmonyPlaylistActOutcomes";
import { domesticHarmonyPlaylistActPreferences } from "./domesticHarmonyPlaylistActPreferences";
import { domesticHarmonyPlaylistActExchanges } from "./exchanges";

export const domesticHarmonyPlaylistAct: SituationDataType = {
  trigger: {
    staticKey: "domestic-harmony-playlist-act",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "Domestic Harmony Playlist Act",
  description: "Federal plan would auto-play a government-approved 'Domestic Harmony' playlist on all smart speakers to encourage family unity, with fines and opt-outs.",
  content: {
    outcomes: domesticHarmonyPlaylistActOutcomes,
    preferences: domesticHarmonyPlaylistActPreferences,
  },
  exchanges: domesticHarmonyPlaylistActExchanges,
};
