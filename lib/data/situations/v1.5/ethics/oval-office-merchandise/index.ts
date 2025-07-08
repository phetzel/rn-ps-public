import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { ovalOfficeMerchandiseOutcomes } from "./outcomes";
import { ovalOfficeMerchandisePreferences } from "./preferences";
import { ovalOfficeMerchandiseExchanges } from "./exchanges";

export const ovalOfficeMerchandise: SituationData = {
  trigger: {
    staticKey: "oval_office_merchandise",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Oval Office Merchandise",
  description:
    "An official gift shop selling presidential souvenirs opens in the West Wing, sparking accusations of profiteering.",
  content: {
    outcomes: ovalOfficeMerchandiseOutcomes,
    preferences: ovalOfficeMerchandisePreferences,
  },
  exchanges: ovalOfficeMerchandiseExchanges,
};
