import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { compulsoryComplimentQuotaOutcomes } from "./compulsoryComplimentQuotaOutcomes";
import { compulsoryComplimentQuotaPreferences } from "./compulsoryComplimentQuotaPreferences";
import { compulsoryComplimentQuotaExchanges } from "./exchanges";

export const compulsoryComplimentQuota: SituationDataType = {
  trigger: {
    staticKey: "compulsory-compliment-quota",
    type: SituationType.DomesticPolicy,
    requirements: {},
  },
  type: SituationType.DomesticPolicy,
  title: "Compulsory Compliment Quota",
  description: "Administration unveils a Compulsory Compliment Quota requiring citizens to log compliments in a government app, igniting debate over free speech and enforcement",
  content: {
    outcomes: compulsoryComplimentQuotaOutcomes,
    preferences: compulsoryComplimentQuotaPreferences,
  },
  exchanges: compulsoryComplimentQuotaExchanges,
};
