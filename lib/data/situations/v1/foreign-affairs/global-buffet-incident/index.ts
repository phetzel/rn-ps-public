import { SituationType, SituationData } from "~/types";
import { globalBuffetIncidentPreferences } from "./globalBuffetIncidentPreferences";
import { globalBuffetIncidentOutcomes } from "./globalBuffetIncidentOutcomes";
import { globalBuffetIncidentExchanges } from "./globalBuffetIncidentExchanges";

export const globalBuffetIncident: SituationData = {
  trigger: {
    staticKey: "global_buffet_incident",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Global Buffet Incident",
  description:
    "At a global summit buffet, the President storms out upon finding no cheeseburgers. Diplomats scramble while hosts debate how to appease him.",
  content: {
    preferences: globalBuffetIncidentPreferences,
    outcomes: globalBuffetIncidentOutcomes,
  },
  exchanges: globalBuffetIncidentExchanges,
};
