import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { hoverGnomeSummitStandoffOutcomes } from "./hoverGnomeSummitStandoffOutcomes";
import { hoverGnomeSummitStandoffPreferences } from "./hoverGnomeSummitStandoffPreferences";
import { hoverGnomeSummitStandoffExchanges } from "./exchanges";

export const hoverGnomeSummitStandoff: SituationDataType = {
  trigger: {
    staticKey: "hover-gnome-summit-standoff",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Hover-Gnome Summit Standoff",
  description: "Two embassies' ceremonial hovercrafts carrying thousands of ornamental gnomes are seized at sea, forcing State and Defense into absurd diplomatic negotiations.",
  content: {
    outcomes: hoverGnomeSummitStandoffOutcomes,
    preferences: hoverGnomeSummitStandoffPreferences,
  },
  exchanges: hoverGnomeSummitStandoffExchanges,
};
