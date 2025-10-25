import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { embassyQuarantineTangoOutcomes } from "./embassyQuarantineTangoOutcomes";
import { embassyQuarantineTangoPreferences } from "./embassyQuarantineTangoPreferences";
import { embassyQuarantineTangoExchanges } from "./exchanges";

export const embassyQuarantineTango: SituationDataType = {
  trigger: {
    staticKey: "embassy-quarantine-tango",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Embassy Quarantine Tango",
  description: "Foreign missions erupt after the federal health agency turns an honorary embassy wing into a pop-up vaccine spa, forcing the homeland office into crisis talks.",
  content: {
    outcomes: embassyQuarantineTangoOutcomes,
    preferences: embassyQuarantineTangoPreferences,
  },
  exchanges: embassyQuarantineTangoExchanges,
};
