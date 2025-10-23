import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { embassyClaimsYesterdayOutcomes } from "./embassyClaimsYesterdayOutcomes";
import { embassyClaimsYesterdayPreferences } from "./embassyClaimsYesterdayPreferences";
import { embassyClaimsYesterdayExchanges } from "./exchanges";

export const embassyClaimsYesterday: SituationDataType = {
  trigger: {
    staticKey: "embassy-claims-yesterday",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Embassy Claims Yesterday",
  description: "A foreign embassy insists its chancery lives 'yesterday,' issuing retroactive visas and reopening old treaties, snarling flights and legal deadlines.",
  content: {
    outcomes: embassyClaimsYesterdayOutcomes,
    preferences: embassyClaimsYesterdayPreferences,
  },
  exchanges: embassyClaimsYesterdayExchanges,
};
