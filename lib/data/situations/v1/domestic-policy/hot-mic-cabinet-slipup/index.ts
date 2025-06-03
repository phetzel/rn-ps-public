import { SituationType, SituationData } from "~/types";
import { hotMicCabinetSlipupPreferences } from "./hotMicCabinetSlipupPreferences";
import { hotMicCabinetSlipupOutcomes } from "./hotMicCabinetSlipupOutcomes";
import { hotMicCabinetSlipupExchanges } from "./hotMicCabinetSlipupExchanges";

export const hotMicCabinetSlipup: SituationData = {
  trigger: {
    staticKey: "hot_mic_cabinet_slipup",
    type: SituationType.Economy,
    requirements: {}, // can occur anytime policy is debated
  },
  type: SituationType.Economy,
  title: "Hot Mic Cabinet Slip-up",
  description:
    "Treasury Secretary’s live-mic quip calling the new economic plan ‘a chocolate teapot’ rattles nerves and delights comedians.",
  content: {
    preferences: hotMicCabinetSlipupPreferences,
    outcomes: hotMicCabinetSlipupOutcomes,
  },
  exchanges: hotMicCabinetSlipupExchanges,
};
