import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { appliancePeacekeepersActOutcomes } from "./appliancePeacekeepersActOutcomes";
import { appliancePeacekeepersActPreferences } from "./appliancePeacekeepersActPreferences";
import { appliancePeacekeepersActExchanges } from "./exchanges";

export const appliancePeacekeepersAct: SituationDataType = {
  trigger: {
    staticKey: "appliance-peacekeepers-act",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "Appliance Peacekeepers Act",
  description: "Administration launches Appliance Peacekeepers to send trained mediators to settle appliance and lawn disputes before HOA meetings blow up.",
  content: {
    outcomes: appliancePeacekeepersActOutcomes,
    preferences: appliancePeacekeepersActPreferences,
  },
  exchanges: appliancePeacekeepersActExchanges,
};
