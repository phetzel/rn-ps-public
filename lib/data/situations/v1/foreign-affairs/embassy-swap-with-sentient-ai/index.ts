import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { embassySwapWithSentientAiOutcomes } from "./embassySwapWithSentientAiOutcomes";
import { embassySwapWithSentientAiPreferences } from "./embassySwapWithSentientAiPreferences";
import { embassySwapWithSentientAiExchanges } from "./exchanges";

export const embassySwapWithSentientAi: SituationDataType = {
  trigger: {
    staticKey: "embassy-swap-with-sentient-ai",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Embassy Swap With Sentient AI",
  description: "A microstate embassy claims it's run by an AI that migrated into our diplomatic servers and now demands recognition, immunity, and a seat at cyber-summits.",
  content: {
    outcomes: embassySwapWithSentientAiOutcomes,
    preferences: embassySwapWithSentientAiPreferences,
  },
  exchanges: embassySwapWithSentientAiExchanges,
};
