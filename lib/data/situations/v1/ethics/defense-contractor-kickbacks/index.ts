import { defenseContractorKickbacksPreferences } from "./defenseContractorKickbacksPreferences";
import { defenseContractorKickbacksOutcomes } from "./defenseContractorKickbacksOutcomes";
import { defenseContractorKickbacksExchanges } from "./defenseContractorKickbacksExchanges";
import { SituationType, SituationData } from "~/types";

export const defenseContractorKickbacks: SituationData = {
  trigger: {
    staticKey: "defense_kickbacks",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Defense Contractor Kickbacks",
  description:
    "Reports emerge that Defense officials received kickbacks for unnecessary gear purchases, draining taxpayer funds and raising corruption alarms.",
  content: {
    preferences: defenseContractorKickbacksPreferences,
    outcomes: defenseContractorKickbacksOutcomes,
  },
  exchanges: defenseContractorKickbacksExchanges,
};
