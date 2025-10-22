import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { ambassadorEthicsTarotFiascoOutcomes } from "./ambassadorEthicsTarotFiascoOutcomes";
import { ambassadorEthicsTarotFiascoPreferences } from "./ambassadorEthicsTarotFiascoPreferences";
import { ambassadorEthicsTarotFiascoExchanges } from "./exchanges";

export const ambassadorEthicsTarotFiasco: SituationDataType = {
  trigger: {
    staticKey: "ambassador-ethics-tarot-fiasco",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Ambassador Ethics Tarot Fiasco",
  description: "Leaked memos expose a secret 'State Ethics Oracle' where envoys used tarot to bless conflicts of interest, igniting a surreal press uproar and urgent audits.",
  content: {
    outcomes: ambassadorEthicsTarotFiascoOutcomes,
    preferences: ambassadorEthicsTarotFiascoPreferences,
  },
  exchanges: ambassadorEthicsTarotFiascoExchanges,
};
