import { stateDeptWineScandalPreferences } from "./stateDeptWineScandalPreferences";
import { stateDeptWineScandalOutcomes } from "./stateDeptWineScandalOutcomes";
import { stateDeptWineScandalExchanges } from "./stateDeptWineScandalExchanges";
import { SituationType, SituationData } from "~/types";

export const stateDeptWineScandal: SituationData = {
  trigger: {
    staticKey: "state_wine_scandal",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "State Dept Wine Scandal",
  description:
    "Vintage wine was bought as so-called gifts on a department expense card, raising eyebrows about misuse of diplomatic funds.",
  content: {
    preferences: stateDeptWineScandalPreferences,
    outcomes: stateDeptWineScandalOutcomes,
  },
  exchanges: stateDeptWineScandalExchanges,
};
