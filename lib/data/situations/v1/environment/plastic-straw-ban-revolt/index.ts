import { SituationType, SituationData } from "~/types";
import { plasticStrawBanRevoltPreferences } from "./plasticStrawBanRevoltPreferences";
import { plasticStrawBanRevoltOutcomes } from "./plasticStrawBanRevoltOutcomes";
import { plasticStrawBanRevoltExchanges } from "./plasticStrawBanRevoltExchanges";

export const plasticStrawBanRevolt: SituationData = {
  trigger: {
    staticKey: "plastic_straw_ban_revolt",
    type: SituationType.Environment,
    requirements: { month: { min: 1, max: 12 } },
  },
  type: SituationType.Environment,
  title: "Plastic Straw Ban Revolt",
  description:
    "Sudden nationwide straw ban triggers backlash, hoarding, and black-market straws as protests grow loud.",
  content: {
    preferences: plasticStrawBanRevoltPreferences,
    outcomes: plasticStrawBanRevoltOutcomes,
  },
  exchanges: plasticStrawBanRevoltExchanges,
};
