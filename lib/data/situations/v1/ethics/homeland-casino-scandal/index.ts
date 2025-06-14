import { homelandCasinoScandalPreferences } from "./homelandCasinoScandalPreferences";
import { homelandCasinoScandalOutcomes } from "./homelandCasinoScandalOutcomes";
import { homelandCasinoScandalExchanges } from "./homelandCasinoScandalExchanges";
import { SituationType, SituationData } from "~/types";

export const homelandCasinoScandal: SituationData = {
  trigger: {
    staticKey: "homeland_casino_scandal",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Homeland Casino Scandal",
  description:
    "The Homeland Security chief allegedly used agency resources for gambling jaunts, prompting inquiries into misuse of surveillance tools.",
  content: {
    preferences: homelandCasinoScandalPreferences,
    outcomes: homelandCasinoScandalOutcomes,
  },
  exchanges: homelandCasinoScandalExchanges,
};
