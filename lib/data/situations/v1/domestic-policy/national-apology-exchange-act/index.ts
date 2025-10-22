import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { nationalApologyExchangeActOutcomes } from "./nationalApologyExchangeActOutcomes";
import { nationalApologyExchangeActPreferences } from "./nationalApologyExchangeActPreferences";
import { nationalApologyExchangeActExchanges } from "./exchanges";

export const nationalApologyExchangeAct: SituationDataType = {
  trigger: {
    staticKey: "national-apology-exchange-act",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "National Apology Exchange Act",
  description: "'Apology Week' forces citizens to file certified remorse for petty slights, trading tax credits for hotline absolution from lamppost auditors with clipboards.",
  content: {
    outcomes: nationalApologyExchangeActOutcomes,
    preferences: nationalApologyExchangeActPreferences,
  },
  exchanges: nationalApologyExchangeActExchanges,
};
