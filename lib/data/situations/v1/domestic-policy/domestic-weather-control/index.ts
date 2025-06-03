import { SituationType, SituationData } from "~/types";
import { domesticWeatherControlPreferences } from "./domesticWeatherControlPreferences";
import { domesticWeatherControlOutcomes } from "./domesticWeatherControlOutcomes";
import { domesticWeatherControlExchanges } from "./domesticWeatherControlExchanges";

export const domesticWeatherControlPromise: SituationData = {
  trigger: {
    staticKey: "domestic_weather_control_promise",
    type: SituationType.Environment,
    requirements: {}, // any hurricane season
  },
  type: SituationType.Environment,
  title: "Domestic Weather Control Promise",
  description:
    "President vows to line coasts with giant fans to blow away hurricanes, sparking engineering doubt and seabird outrage.",
  content: {
    preferences: domesticWeatherControlPreferences,
    outcomes: domesticWeatherControlOutcomes,
  },
  exchanges: domesticWeatherControlExchanges,
};
