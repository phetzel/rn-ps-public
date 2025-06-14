import { droneDeliveryScandalPreferences } from "./droneDeliveryScandalPreferences";
import { droneDeliveryScandalOutcomes } from "./droneDeliveryScandalOutcomes";
import { droneDeliveryScandalExchanges } from "./droneDeliveryScandalExchanges";
import { SituationType, SituationData } from "~/types";

export const droneDeliveryScandal: SituationData = {
  trigger: {
    staticKey: "drone_delivery_scandal",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Drone Delivery Scandal",
  description:
    "Federal drones deliver gourmet meals to the president's home each day, circumventing flight restrictions and angering watchdogs.",
  content: {
    preferences: droneDeliveryScandalPreferences,
    outcomes: droneDeliveryScandalOutcomes,
  },
  exchanges: droneDeliveryScandalExchanges,
};
