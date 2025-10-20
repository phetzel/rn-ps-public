import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { midnightForestificationDecreeOutcomes } from "./midnightForestificationDecreeOutcomes";
import { midnightForestificationDecreePreferences } from "./midnightForestificationDecreePreferences";
import { midnightForestificationDecreeExchanges } from "./exchanges";

export const midnightForestificationDecree: SituationDataType = {
  trigger: {
    staticKey: "midnight-forestification-decree",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "Midnight Forestification Decree",
  description: "Whiteleaf Administration orders overnight forestification of key highways: Defense to air-drop saplings, State to arbitrate root claims, and commuters warned.",
  content: {
    outcomes: midnightForestificationDecreeOutcomes,
    preferences: midnightForestificationDecreePreferences,
  },
  exchanges: midnightForestificationDecreeExchanges,
};
