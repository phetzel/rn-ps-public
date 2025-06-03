import { SituationType, SituationData } from "~/types";
import { nationalRailMeltdownPreferences } from "./nationalRailMeltdownPreferences";
import { nationalRailMeltdownOutcomes } from "./nationalRailMeltdownOutcomes";
import { nationalRailMeltdownExchanges } from "./nationalRailMeltdownExchanges";

export const nationalRailMeltdown: SituationData = {
  trigger: {
    staticKey: "national_rail_meltdown",
    type: SituationType.DomesticPolicy,
    requirements: {}, // any time
  },
  type: SituationType.DomesticPolicy,
  title: "National Rail Meltdown",
  description:
    "Budget cuts force engineers to navigate trains with paper maps, sparking nationwide delays and commuter fury.",
  content: {
    preferences: nationalRailMeltdownPreferences,
    outcomes: nationalRailMeltdownOutcomes,
  },
  exchanges: nationalRailMeltdownExchanges,
};
