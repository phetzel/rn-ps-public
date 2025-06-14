import { SituationType, SituationData } from "~/types";
import { vipZooDiplomacyPreferences } from "./vipZooDiplomacyPreferences";
import { vipZooDiplomacyOutcomes } from "./vipZooDiplomacyOutcomes";
import { vipZooDiplomacyExchanges } from "./vipZooDiplomacyExchanges";

export const vipZooDiplomacy: SituationData = {
  trigger: {
    staticKey: "vip_zoo_diplomacy",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "VIP Zoo Diplomacy",
  description:
    "The President skips key meetings during a summit to snap photos with pandas on a VIP zoo tour, angering diplomats who feel snubbed.",
  content: {
    preferences: vipZooDiplomacyPreferences,
    outcomes: vipZooDiplomacyOutcomes,
  },
  exchanges: vipZooDiplomacyExchanges,
};
