import { SituationType, SituationData } from "~/types";
import { nationalNapProductivityActPreferences } from "./nationalNapProductivityActPreferences";
import { nationalNapProductivityActOutcomes } from "./nationalNapProductivityActOutcomes";
import { nationalNapProductivityActExchanges } from "./nationalNapProductivityActExchanges";

export const nationalNapProductivityAct: SituationData = {
  trigger: {
    staticKey: "national_nap_productivity_act",
    type: SituationType.Economy,
    requirements: {}, // can emerge any quarter with productivity debate
  },
  type: SituationType.Economy,
  title: "National Nap Productivity Act",
  description:
    "Administration introduces mandatory daily nap breaks nationwide, touting huge productivity gains and corporate backlash.",
  content: {
    preferences: nationalNapProductivityActPreferences,
    outcomes: nationalNapProductivityActOutcomes,
  },
  exchanges: nationalNapProductivityActExchanges,
};
