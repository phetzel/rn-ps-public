import { whiteHouseThemeParkPreferences } from "./whiteHouseThemeParkPreferences";
import { whiteHouseThemeParkOutcomes } from "./whiteHouseThemeParkOutcomes";
import { whiteHouseThemeParkExchanges } from "./whiteHouseThemeParkExchanges";
import { SituationType, SituationData } from "~/types";

export const whiteHouseThemePark: SituationData = {
  trigger: {
    staticKey: "white_house_theme_park",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "White House Theme Park",
  description:
    "Plans leak that taxpayer funds may bankroll a sprawling White House theme park complete with presidential mascots and thrill rides, spurring bipartisan mockery.",
  content: {
    preferences: whiteHouseThemeParkPreferences,
    outcomes: whiteHouseThemeParkOutcomes,
  },
  exchanges: whiteHouseThemeParkExchanges,
};
