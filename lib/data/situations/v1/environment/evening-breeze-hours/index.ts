import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { eveningBreezeHoursOutcomes } from "./eveningBreezeHoursOutcomes";
import { eveningBreezeHoursPreferences } from "./eveningBreezeHoursPreferences";
import { eveningBreezeHoursExchanges } from "./exchanges";

export const eveningBreezeHours: SituationDataType = {
  trigger: {
    staticKey: "evening-breeze-hours",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "Evening Breeze Hours",
  description: "Administration unveils Evening Breeze Hours: a federal program that auctions scheduled gusts to cool cities, enraging farmers and prompting legal challenges.",
  content: {
    outcomes: eveningBreezeHoursOutcomes,
    preferences: eveningBreezeHoursPreferences,
  },
  exchanges: eveningBreezeHoursExchanges,
};
