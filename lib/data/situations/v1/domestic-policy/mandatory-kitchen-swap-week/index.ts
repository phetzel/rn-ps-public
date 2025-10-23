import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { mandatoryKitchenSwapWeekOutcomes } from "./mandatoryKitchenSwapWeekOutcomes";
import { mandatoryKitchenSwapWeekPreferences } from "./mandatoryKitchenSwapWeekPreferences";
import { mandatoryKitchenSwapWeekExchanges } from "./exchanges";

export const mandatoryKitchenSwapWeek: SituationDataType = {
  trigger: {
    staticKey: "mandatory-kitchen-swap-week",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "Mandatory Kitchen Swap Week",
  description: "Weeklong kitchen swap mandate pairs random households for 'culinary empathy,' igniting sanitation scares, landlord panic, and backlash over borrowed blenders.",
  content: {
    outcomes: mandatoryKitchenSwapWeekOutcomes,
    preferences: mandatoryKitchenSwapWeekPreferences,
  },
  exchanges: mandatoryKitchenSwapWeekExchanges,
};
