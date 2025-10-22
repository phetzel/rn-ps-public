import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { secretSantaSubpoenaScandalOutcomes } from "./secretSantaSubpoenaScandalOutcomes";
import { secretSantaSubpoenaScandalPreferences } from "./secretSantaSubpoenaScandalPreferences";
import { secretSantaSubpoenaScandalExchanges } from "./exchanges";

export const secretSantaSubpoenaScandal: SituationDataType = {
  trigger: {
    staticKey: "secret-santa-subpoena-scandal",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Secret Santa Subpoena Scandal",
  description: "An ethics probe erupts after the State office's Secret Santa allegedly swapped classified memos for pickles and forged notes, sparking subpoenas.",
  content: {
    outcomes: secretSantaSubpoenaScandalOutcomes,
    preferences: secretSantaSubpoenaScandalPreferences,
  },
  exchanges: secretSantaSubpoenaScandalExchanges,
};
