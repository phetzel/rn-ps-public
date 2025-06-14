import { SituationType, SituationData } from "~/types";
import { toiletPaperSupplyThreatPreferences } from "./toiletPaperSupplyThreatPreferences";
import { toiletPaperSupplyThreatOutcomes } from "./toiletPaperSupplyThreatOutcomes";
import { toiletPaperSupplyThreatExchanges } from "./toiletPaperSupplyThreatExchanges";

export const toiletPaperSupplyThreat: SituationData = {
  trigger: {
    staticKey: "toilet_paper_supply_threat",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Toilet Paper Supply Threat",
  description:
    "A rumor of a looming toilet paper shortage spreads across social media, triggering nationwide hoarding and heated price spikes.",
  content: {
    preferences: toiletPaperSupplyThreatPreferences,
    outcomes: toiletPaperSupplyThreatOutcomes,
  },
  exchanges: toiletPaperSupplyThreatExchanges,
};
