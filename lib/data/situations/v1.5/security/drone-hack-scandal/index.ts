import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { droneHackScandalOutcomes } from "./droneHackScandalOutcomes";
import { droneHackScandalPreferences } from "./droneHackScandalPreferences";
import { droneHackScandalExchanges } from "./exchanges";

export const droneHackScandal: SituationData = {
  trigger: {
    staticKey: "drone_hack_scandal",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Drone Hack Scandal",
  description:
    "Military drones are hacked to deliver rubber chickens to high-security facilities, raising fears about cybersecurity.",
  content: {
    outcomes: droneHackScandalOutcomes,
    preferences: droneHackScandalPreferences,
  },
  exchanges: droneHackScandalExchanges,
};
