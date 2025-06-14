import { SituationType, SituationData } from "~/types";
import { superSizedHailstormPreferences } from "./superSizedHailstormPreferences";
import { superSizedHailstormOutcomes } from "./superSizedHailstormOutcomes";
import { superSizedHailstormExchanges } from "./superSizedHailstormExchanges";

export const superSizedHailstorm: SituationData = {
  trigger: {
    staticKey: "super_sized_hailstorm",
    type: SituationType.Environment,
    requirements: { month: { min: 1, max: 12 } },
  },
  type: SituationType.Environment,
  title: "Super-Sized Hailstorm",
  description:
    "Record hailstones pummel cities, pushing extreme-weather policy debates and straining relief budgets.",
  content: {
    preferences: superSizedHailstormPreferences,
    outcomes: superSizedHailstormOutcomes,
  },
  exchanges: superSizedHailstormExchanges,
};
