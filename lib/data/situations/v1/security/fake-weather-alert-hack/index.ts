import { SituationType, SituationData } from "~/types";
import { fakeWeatherAlertHackPreferences } from "./fakeWeatherAlertHackPreferences";
import { fakeWeatherAlertHackOutcomes } from "./fakeWeatherAlertHackOutcomes";
import { fakeWeatherAlertHackExchanges } from "./fakeWeatherAlertHackExchanges";

export const fakeWeatherAlertHack: SituationData = {
  trigger: {
    staticKey: "fake_weather_alert_hack",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Fake Weather Alert Hack",
  description:
    "National weather servers were breached and bogus disaster alerts blared nationwide, causing mass confusion and chaotic evacuations.",
  content: {
    preferences: fakeWeatherAlertHackPreferences,
    outcomes: fakeWeatherAlertHackOutcomes,
  },
  exchanges: fakeWeatherAlertHackExchanges,
};
