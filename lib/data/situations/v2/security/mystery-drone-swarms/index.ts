import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { mysteryDroneSwarmsOutcomes } from "./mysteryDroneSwarmsOutcomes";
import { mysteryDroneSwarmsPreferences } from "./mysteryDroneSwarmsPreferences";
import { mysteryDroneSwarmsExchanges } from "./exchanges";

export const mysteryDroneSwarms: SituationData = {
  trigger: {
    staticKey: "mystery_drone_swarms",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Mystery Drone Swarms",
  description:
    "Unidentified drone swarms spell out cryptic messages over cities, spooking citizens and security agencies alike.",
  content: {
    outcomes: mysteryDroneSwarmsOutcomes,
    preferences: mysteryDroneSwarmsPreferences,
  },
  exchanges: mysteryDroneSwarmsExchanges,
};
