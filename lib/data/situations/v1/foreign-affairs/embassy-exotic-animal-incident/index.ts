import { SituationType, SituationData } from "~/types";
import { embassyExoticAnimalIncidentPreferences } from "./embassyExoticAnimalIncidentPreferences";
import { embassyExoticAnimalIncidentOutcomes } from "./embassyExoticAnimalIncidentOutcomes";
import { embassyExoticAnimalIncidentExchanges } from "./embassyExoticAnimalIncidentExchanges";

export const embassyExoticAnimalIncident: SituationData = {
  trigger: {
    staticKey: "embassy_exotic_animal_incident",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Embassy Exotic Animal Incident",
  description:
    "An ambassador gifts a protected elephant calf to a foreign dignitary, violating wildlife rules and stirring international outrage.",
  content: {
    preferences: embassyExoticAnimalIncidentPreferences,
    outcomes: embassyExoticAnimalIncidentOutcomes,
  },
  exchanges: embassyExoticAnimalIncidentExchanges,
};
