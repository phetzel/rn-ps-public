import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { fortuneCookieEthicsRulingOutcomes } from "./fortuneCookieEthicsRulingOutcomes";
import { fortuneCookieEthicsRulingPreferences } from "./fortuneCookieEthicsRulingPreferences";
import { fortuneCookieEthicsRulingExchanges } from "./exchanges";

export const fortuneCookieEthicsRuling: SituationDataType = {
  trigger: {
    staticKey: "fortune-cookie-ethics-ruling",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Fortune Cookie Ethics Ruling",
  description: "Ethics board okays 'symbolic' gifts hidden in fortune cookies, sparking disclosure rewrites, soy sauce panic, and lobbyists hiding yachts in dessert metaphors.",
  content: {
    outcomes: fortuneCookieEthicsRulingOutcomes,
    preferences: fortuneCookieEthicsRulingPreferences,
  },
  exchanges: fortuneCookieEthicsRulingExchanges,
};
