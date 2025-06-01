import { SituationType, SituationData } from "~/types";
import { alienBroadcastHijackPreferences } from "./alienBroadcastHijackPreferences";
import { alienBroadcastHijackOutcomes } from "./alienBroadcastHijackOutcomes";
import { alienBroadcastHijackExchanges } from "./alienBroadcastHijackExchanges";

export const alienBroadcastHijack: SituationData = {
  trigger: {
    staticKey: "alien_broadcast_panic",
    type: SituationType.Security,
    requirements: {
      // Can happen anytime, but maybe more impactful if tech distrust is already a theme
    },
  },
  type: SituationType.Security,
  title: "Alien Broadcast Hijack",
  description:
    "National TV signals are hijacked with a fake alien invasion alert, triggering nationwide panic and questions about broadcast security.",
  content: {
    preferences: alienBroadcastHijackPreferences,
    outcomes: alienBroadcastHijackOutcomes,
  },
  exchanges: alienBroadcastHijackExchanges,
};
