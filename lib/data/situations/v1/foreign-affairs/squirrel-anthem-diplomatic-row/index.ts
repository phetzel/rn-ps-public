import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { squirrelAnthemDiplomaticRowOutcomes } from "./squirrelAnthemDiplomaticRowOutcomes";
import { squirrelAnthemDiplomaticRowPreferences } from "./squirrelAnthemDiplomaticRowPreferences";
import { squirrelAnthemDiplomaticRowExchanges } from "./exchanges";

export const squirrelAnthemDiplomaticRow: SituationDataType = {
  trigger: {
    staticKey: "squirrel-anthem-diplomatic-row",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Squirrel Anthem Diplomatic Row",
  description: "A tiny ally insists its anthem be performed by trained squirrels at a summit, forcing diplomats to create rodent visas, rewrite protocol, and haggle over tarifs",
  content: {
    outcomes: squirrelAnthemDiplomaticRowOutcomes,
    preferences: squirrelAnthemDiplomaticRowPreferences,
  },
  exchanges: squirrelAnthemDiplomaticRowExchanges,
};
