import { SituationType, SituationData } from "~/types";
import { wildfiresThreatenMovieSetsPreferences } from "./wildfiresThreatenMovieSetsPreferences";
import { wildfiresThreatenMovieSetsOutcomes } from "./wildfiresThreatenMovieSetsOutcomes";
import { wildfiresThreatenMovieSetsExchanges } from "./wildfiresThreatenMovieSetsExchanges";

export const wildfiresThreatenMovieSets: SituationData = {
  trigger: {
    staticKey: "wildfires_threaten_movie_sets",
    type: SituationType.Environment,
    requirements: { month: { min: 6, max: 11 } },
  },
  type: SituationType.Environment,
  title: "Wildfires Threaten Movie Sets",
  description:
    "Massive wildfires endanger iconic film locations nationwide, igniting cultural panic about losing cinematic history.",
  content: {
    preferences: wildfiresThreatenMovieSetsPreferences,
    outcomes: wildfiresThreatenMovieSetsOutcomes,
  },
  exchanges: wildfiresThreatenMovieSetsExchanges,
};
