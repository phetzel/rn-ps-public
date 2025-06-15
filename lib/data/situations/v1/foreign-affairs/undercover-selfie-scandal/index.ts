import { SituationType, SituationData } from "~/types";
import { undercoverSelfieScandalPreferences } from "./undercoverSelfieScandalPreferences";
import { undercoverSelfieScandalOutcomes } from "./undercoverSelfieScandalOutcomes";
import { undercoverSelfieScandalExchanges } from "./undercoverSelfieScandalExchanges";

export const undercoverSelfieScandal: SituationData = {
  trigger: {
    staticKey: "undercover_selfie_scandal",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Undercover Selfie Scandal",
  description:
    "A staffer posts a selfie that accidentally reveals the location of a secret base overseas, forcing a hasty scramble to contain leaks.",
  content: {
    preferences: undercoverSelfieScandalPreferences,
    outcomes: undercoverSelfieScandalOutcomes,
  },
  exchanges: undercoverSelfieScandalExchanges,
};
