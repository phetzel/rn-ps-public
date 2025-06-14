import { SituationType, SituationData } from "~/types";
import { protocolHugIncidentPreferences } from "./protocolHugIncidentPreferences";
import { protocolHugIncidentOutcomes } from "./protocolHugIncidentOutcomes";
import { protocolHugIncidentExchanges } from "./protocolHugIncidentExchanges";

export const protocolHugIncident: SituationData = {
  trigger: {
    staticKey: "protocol_hug_incident",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Protocol Hug Incident",
  description:
    "During a ceremonial greeting, the President unexpectedly bear-hugs the reclusive Emperor of Coldshoulderia, upending strict etiquette and shocking diplomats.",
  content: {
    preferences: protocolHugIncidentPreferences,
    outcomes: protocolHugIncidentOutcomes,
  },
  exchanges: protocolHugIncidentExchanges,
};
