import { SituationType, SituationData } from "~/types";
import { droneHackScandalPreferences } from "./droneHackScandalPreferences";
import { droneHackScandalOutcomes } from "./droneHackScandalOutcomes";
import { droneHackScandalExchanges } from "./droneHackScandalExchanges";

export const droneHackScandal: SituationData = {
  trigger: {
    staticKey: "drone_hack_pizzas",
    type: SituationType.Security,
    requirements: {
      // Could happen anytime
    },
  },
  type: SituationType.Security,
  title: "Drone Hack Scandal",
  description:
    "Classified military drones suddenly start delivering pizzas across the country due to a suspected sophisticated hacking attempt.",
  content: {
    preferences: droneHackScandalPreferences,
    outcomes: droneHackScandalOutcomes,
  },
  exchanges: droneHackScandalExchanges,
};
