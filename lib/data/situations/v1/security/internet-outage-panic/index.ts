import { SituationType, SituationData } from "~/types";
import { internetOutagePanicPreferences } from "./internetOutagePanicPreferences";
import { internetOutagePanicOutcomes } from "./internetOutagePanicOutcomes";
import { internetOutagePanicExchanges } from "./internetOutagePanicExchanges";

export const internetOutagePanic: SituationData = {
  trigger: {
    staticKey: "internet_outage_panic",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Internet Outage Panic",
  description:
    "A nationwide blackout hits the web, fueling cyber-terror rumors and leaving businesses offline and citizens panicking.",
  content: {
    preferences: internetOutagePanicPreferences,
    outcomes: internetOutagePanicOutcomes,
  },
  exchanges: internetOutagePanicExchanges,
};
