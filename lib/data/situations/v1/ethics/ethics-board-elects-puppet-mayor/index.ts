import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { ethicsBoardElectsPuppetMayorOutcomes } from "./ethicsBoardElectsPuppetMayorOutcomes";
import { ethicsBoardElectsPuppetMayorPreferences } from "./ethicsBoardElectsPuppetMayorPreferences";
import { ethicsBoardElectsPuppetMayorExchanges } from "./exchanges";

export const ethicsBoardElectsPuppetMayor: SituationDataType = {
  trigger: {
    staticKey: "ethics-board-elects-puppet-mayor",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Ethics Board Elects Puppet Mayor",
  description: "An ethics board installed a marionette as interim mayor to dodge conflict rules, sparking lawsuits, strikes, and a youth revolt over who pulls the strings.",
  content: {
    outcomes: ethicsBoardElectsPuppetMayorOutcomes,
    preferences: ethicsBoardElectsPuppetMayorPreferences,
  },
  exchanges: ethicsBoardElectsPuppetMayorExchanges,
};
