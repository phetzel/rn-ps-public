import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { nationalAccordionAlarmNetworkOutcomes } from "./nationalAccordionAlarmNetworkOutcomes";
import { nationalAccordionAlarmNetworkPreferences } from "./nationalAccordionAlarmNetworkPreferences";
import { nationalAccordionAlarmNetworkExchanges } from "./exchanges";

export const nationalAccordionAlarmNetwork: SituationDataType = {
  trigger: {
    staticKey: "national-accordion-alarm-network",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "National Accordion Alarm Network",
  description: "Press secretary must sell retrofitting accordions into a sonic network to jam drones and scramble signals, prompting tech backlash and senior polka protests.",
  content: {
    outcomes: nationalAccordionAlarmNetworkOutcomes,
    preferences: nationalAccordionAlarmNetworkPreferences,
  },
  exchanges: nationalAccordionAlarmNetworkExchanges,
};
