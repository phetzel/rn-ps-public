import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { doorknobDefenseInitiativeOutcomes } from "./doorknobDefenseInitiativeOutcomes";
import { doorknobDefenseInitiativePreferences } from "./doorknobDefenseInitiativePreferences";
import { doorknobDefenseInitiativeExchanges } from "./exchanges";

export const doorknobDefenseInitiative: SituationDataType = {
  trigger: {
    staticKey: "doorknob-defense-initiative",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Doorknob Defense Initiative",
  description: "Government unveils Doorknob Defense Initiative—home knobs retrofitted with sensors, encryption and confetti cannons; partisans and security chiefs seek answers.",
  content: {
    outcomes: doorknobDefenseInitiativeOutcomes,
    preferences: doorknobDefenseInitiativePreferences,
  },
  exchanges: doorknobDefenseInitiativeExchanges,
};
