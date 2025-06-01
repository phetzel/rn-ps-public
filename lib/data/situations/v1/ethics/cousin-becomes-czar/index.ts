import { cousinBecomesCzarPreferences } from "./cousinBecomesCzarPreferences";
import { cousinBecomesCzarOutcomes } from "./cousinBecomesCzarOutcomes";
import { cousinBecomesCzarExchanges } from "./cousinBecomesCzarExchanges";
import { SituationType, SituationData } from "~/types";

export const cousinBecomesCzar: SituationData = {
  trigger: {
    staticKey: "cousin_snack_czar",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Cousin Becomes Czar",
  description:
    "The President appoints their cousin as “Snack Czar,” overseeing federal snack machines nationwide, raising alarms about nepotism.",
  content: {
    preferences: cousinBecomesCzarPreferences,
    outcomes: cousinBecomesCzarOutcomes,
  },
  exchanges: cousinBecomesCzarExchanges,
};
