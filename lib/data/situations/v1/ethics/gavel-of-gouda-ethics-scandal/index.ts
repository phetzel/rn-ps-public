import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { gavelOfGoudaEthicsScandalOutcomes } from "./gavelOfGoudaEthicsScandalOutcomes";
import { gavelOfGoudaEthicsScandalPreferences } from "./gavelOfGoudaEthicsScandalPreferences";
import { gavelOfGoudaEthicsScandalExchanges } from "./exchanges";

export const gavelOfGoudaEthicsScandal: SituationDataType = {
  trigger: {
    staticKey: "gavel-of-gouda-ethics-scandal",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Gavel of Gouda Ethics Scandal",
  description: "Photos show Ethics Office taking a ceremonial gavel made from confiscated cheese as a lobbyist gift, prompting calls for resignations from seniors and unions.",
  content: {
    outcomes: gavelOfGoudaEthicsScandalOutcomes,
    preferences: gavelOfGoudaEthicsScandalPreferences,
  },
  exchanges: gavelOfGoudaEthicsScandalExchanges,
};
