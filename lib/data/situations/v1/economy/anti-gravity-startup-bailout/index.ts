import { SituationType, SituationData } from "~/types";
import { antiGravityStartupBailoutPreferences } from "./antiGravityStartupBailoutPreferences";
import { antiGravityStartupBailoutOutcomes } from "./antiGravityStartupBailoutOutcomes";
import { antiGravityStartupBailoutExchanges } from "./antiGravityStartupBailoutExchanges";

export const antiGravityStartupBailout: SituationData = {
  trigger: {
    staticKey: "anti_gravity_startup_bailout",
    type: SituationType.Economy,
    requirements: { year: { min: 2, max: 4 } },
  },
  type: SituationType.Economy,
  title: "Anti-Gravity Startup Bailout",
  description:
    "Administration spends billions to rescue a floundering anti-gravity firm, igniting debates over moon-shot spending and tech fraud.",
  content: {
    preferences: antiGravityStartupBailoutPreferences,
    outcomes: antiGravityStartupBailoutOutcomes,
  },
  exchanges: antiGravityStartupBailoutExchanges,
};
