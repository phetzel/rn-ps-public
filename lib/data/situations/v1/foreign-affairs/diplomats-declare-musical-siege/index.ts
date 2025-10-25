import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { diplomatsDeclareMusicalSiegeOutcomes } from "./diplomatsDeclareMusicalSiegeOutcomes";
import { diplomatsDeclareMusicalSiegePreferences } from "./diplomatsDeclareMusicalSiegePreferences";
import { diplomatsDeclareMusicalSiegeExchanges } from "./exchanges";

export const diplomatsDeclareMusicalSiege: SituationDataType = {
  trigger: {
    staticKey: "diplomats-declare-musical-siege",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Diplomats Declare Musical Siege",
  description: "A rogue embassy replaced guards with a chamber orchestra, triggering regional bafflement, tempo wars, and treaty clauses scored by crescendos.",
  content: {
    outcomes: diplomatsDeclareMusicalSiegeOutcomes,
    preferences: diplomatsDeclareMusicalSiegePreferences,
  },
  exchanges: diplomatsDeclareMusicalSiegeExchanges,
};
