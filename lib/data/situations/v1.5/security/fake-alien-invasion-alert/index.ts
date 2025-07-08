import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { fakeAlienAlertOutcomes } from "./fakeAlienAlertOutcomes";
import { fakeAlienAlertPreferences } from "./fakeAlienAlertPreferences";
import { fakeAlienAlertExchanges } from "./exchanges";

export const fakeAlienAlert: SituationData = {
  trigger: {
    staticKey: "fake_alien_invasion_alert",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Fake Alien Invasion Alert",
  description:
    "A staffer 'accidentally' triggers a fake alien invasion alert to test readiness, causing nationwide panic and outrage.",
  content: {
    outcomes: fakeAlienAlertOutcomes,
    preferences: fakeAlienAlertPreferences,
  },
  exchanges: fakeAlienAlertExchanges,
};
