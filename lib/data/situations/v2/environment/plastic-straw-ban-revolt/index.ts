import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { plasticStrawBanOutcomes } from "./plasticStrawBanOutcomes";
import { plasticStrawBanPreferences } from "./plasticStrawBanPreferences";
import { plasticStrawBanExchanges } from "./exchanges";

export const plasticStrawBan: SituationData = {
  trigger: {
    staticKey: "plastic_straw_ban_revolt",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "Plastic Straw Ban Revolt",
  description:
    "A sudden nationwide ban on plastic straws triggers black markets for illicit sipping and fierce political backlash.",
  content: {
    outcomes: plasticStrawBanOutcomes,
    preferences: plasticStrawBanPreferences,
  },
  exchanges: plasticStrawBanExchanges,
};
