import { SituationType, SituationData } from "~/types";
import { icebergRealEstatePreferences } from "./icebergRealEstatePreferences";
import { icebergRealEstateOutcomes } from "./icebergRealEstateOutcomes";
import { icebergRealEstateExchanges } from "./icebergRealEstateExchanges";

export const icebergRealEstate: SituationData = {
  trigger: {
    staticKey: "iceberg_real_estate",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Iceberg Real Estate",
  description:
    "The President proposes buying drifting icebergs to bottle and sell their meltwater, drawing worldwide disbelief and ridicule.",
  content: {
    preferences: icebergRealEstatePreferences,
    outcomes: icebergRealEstateOutcomes,
  },
  exchanges: icebergRealEstateExchanges,
};
