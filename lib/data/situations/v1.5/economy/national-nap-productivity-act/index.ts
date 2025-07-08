import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { nationalNapActOutcomes } from "./nationalNapActOutcomes";
import { nationalNapActPreferences } from "./nationalNapActPreferences";
import { nationalNapProductivityActExchanges } from "./exchanges";

export const nationalNapProductivityAct: SituationData = {
  trigger: {
    staticKey: "national_nap_productivity_act",
    type: SituationType.Economy,
    requirements: {},
  },
  type: SituationType.Economy,
  title: "National Nap Productivity Act",
  description:
    "Admin mandates daily nap breaks to boost productivity, sparking corporate backlash and delight from exhausted workers.",
  content: {
    outcomes: nationalNapActOutcomes,
    preferences: nationalNapActPreferences,
  },
  exchanges: nationalNapProductivityActExchanges,
};
