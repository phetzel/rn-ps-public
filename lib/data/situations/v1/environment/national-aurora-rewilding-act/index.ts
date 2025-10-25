import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { nationalAuroraRewildingActOutcomes } from "./nationalAuroraRewildingActOutcomes";
import { nationalAuroraRewildingActPreferences } from "./nationalAuroraRewildingActPreferences";
import { nationalAuroraRewildingActExchanges } from "./exchanges";

export const nationalAuroraRewildingAct: SituationDataType = {
  trigger: {
    staticKey: "national-aurora-rewilding-act",
    type: SituationType.Environment,
    requirements: {},
  },
  type: SituationType.Environment,
  title: "National Aurora Rewilding Act",
  description: "Government plans to rewild night skies with engineered auroras from blimps while State wrangles airspace rules and patent spats over color rights.",
  content: {
    outcomes: nationalAuroraRewildingActOutcomes,
    preferences: nationalAuroraRewildingActPreferences,
  },
  exchanges: nationalAuroraRewildingActExchanges,
};
