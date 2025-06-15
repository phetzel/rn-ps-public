import { SituationType, SituationData } from "~/types";
import { mysteryDroneSwarmsPreferences } from "./mysteryDroneSwarmsPreferences";
import { mysteryDroneSwarmsOutcomes } from "./mysteryDroneSwarmsOutcomes";
import { mysteryDroneSwarmsExchanges } from "./mysteryDroneSwarmsExchanges";

export const mysteryDroneSwarms: SituationData = {
  trigger: {
    staticKey: "mystery_drone_swarms",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Mystery Drone Swarms",
  description:
    "Unidentified drone clusters drift over cities, spooking citizens and stirring rumors of spies, aliens, or bored hobbyists.",
  content: {
    preferences: mysteryDroneSwarmsPreferences,
    outcomes: mysteryDroneSwarmsOutcomes,
  },
  exchanges: mysteryDroneSwarmsExchanges,
};
