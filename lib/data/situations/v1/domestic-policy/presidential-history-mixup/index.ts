import { SituationType, SituationData } from "~/types";
import { presidentialHistoryMixUpPreferences } from "./presidentialHistoryMixUpPreferences";
import { presidentialHistoryMixUpOutcomes } from "./presidentialHistoryMixUpOutcomes";
import { presidentialHistoryMixUpExchanges } from "./presidentialHistoryMixUpExchanges";

export const presidentialHistoryMixUp: SituationData = {
  trigger: {
    staticKey: "presidential_history_mix_up",
    type: SituationType.DomesticPolicy,
    requirements: {}, // anytime a speech occurs
  },
  type: SituationType.DomesticPolicy,
  title: "Presidential History Mix-Up",
  description:
    "During a live address, the President claims Benjamin Franklin invented Wi-Fi, leaving historians and teachers gobsmacked nationwide.",
  content: {
    preferences: presidentialHistoryMixUpPreferences,
    outcomes: presidentialHistoryMixUpOutcomes,
  },
  exchanges: presidentialHistoryMixUpExchanges,
};
