import { privateMovieTheaterRenovationPreferences } from "./privateMovieTheaterRenovationPreferences";
import { privateMovieTheaterRenovationOutcomes } from "./privateMovieTheaterRenovationOutcomes";
import { privateMovieTheaterRenovationExchanges } from "./privateMovieTheaterRenovationExchanges";
import { SituationType, SituationData } from "~/types";

export const privateMovieTheaterRenovation: SituationData = {
  trigger: {
    staticKey: "private_movie_theater_renovation",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Private Movie Theater Renovation",
  description:
    "Education funds are quietly diverted to renovate the president's private White House theater, raising questions of misuse.",
  content: {
    preferences: privateMovieTheaterRenovationPreferences,
    outcomes: privateMovieTheaterRenovationOutcomes,
  },
  exchanges: privateMovieTheaterRenovationExchanges,
};
