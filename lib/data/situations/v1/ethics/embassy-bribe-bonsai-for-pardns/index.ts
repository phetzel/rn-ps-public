import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { embassyBribeBonsaiForPardnsOutcomes } from "./embassyBribeBonsaiForPardnsOutcomes";
import { embassyBribeBonsaiForPardnsPreferences } from "./embassyBribeBonsaiForPardnsPreferences";
import { embassyBribeBonsaiForPardnsExchanges } from "./exchanges";

export const embassyBribeBonsaiForPardns: SituationDataType = {
  trigger: {
    staticKey: "embassy-bribe-bonsai-for-pardns",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Embassy Bribe: Bonsai for Pardns",
  description: "Leaked ledgers allege State and Justice swapped expedited legal immunities and honorary visas for rare bonsai, triggering an ethics probe and voter outrage.",
  content: {
    outcomes: embassyBribeBonsaiForPardnsOutcomes,
    preferences: embassyBribeBonsaiForPardnsPreferences,
  },
  exchanges: embassyBribeBonsaiForPardnsExchanges,
};
