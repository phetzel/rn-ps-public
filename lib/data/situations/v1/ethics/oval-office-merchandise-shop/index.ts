import { ovalOfficeMerchShopPreferences } from "./ovalOfficeMerchShopPreferences";
import { ovalOfficeMerchShopOutcomes } from "./ovalOfficeMerchShopOutcomes";
import { ovalOfficeMerchShopExchanges } from "./ovalOfficeMerchShopExchanges";
import { SituationType, SituationData } from "~/types";

export const ovalOfficeMerchShop: SituationData = {
  trigger: {
    staticKey: "oval_office_merch_shop",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Oval Office Merchandise Shop",
  description:
    "An official gift shop selling presidential souvenirs opens in the Oval Office, sparking questions about profiteering.",
  content: {
    preferences: ovalOfficeMerchShopPreferences,
    outcomes: ovalOfficeMerchShopOutcomes,
  },
  exchanges: ovalOfficeMerchShopExchanges,
};
