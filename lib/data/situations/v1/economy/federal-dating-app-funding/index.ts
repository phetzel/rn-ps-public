import { SituationType, SituationData } from "~/types";
import { federalDatingAppFundingPreferences } from "./federalDatingAppFundingPreferences";
import { federalDatingAppFundingOutcomes } from "./federalDatingAppFundingOutcomes";
import { federalDatingAppFundingExchanges } from "./federalDatingAppFundingExchanges";

export const federalDatingAppFunding: SituationData = {
  trigger: {
    staticKey: "federal_dating_app_funding",
    type: SituationType.Economy,
    requirements: { year: { min: 1, max: 4 } },
  },
  type: SituationType.Economy,
  title: "Federal Dating App Funding",
  description:
    "Government bankrolls 'Patriot Match,' a taxpayer-funded dating app, sparking debates over privacy, cost, and role of the state in romance.",
  content: {
    preferences: federalDatingAppFundingPreferences,
    outcomes: federalDatingAppFundingOutcomes,
  },
  exchanges: federalDatingAppFundingExchanges,
};
