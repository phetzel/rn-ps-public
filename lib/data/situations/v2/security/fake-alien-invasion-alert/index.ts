import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { fakeAlienInvasionAlertOutcomes } from "./fakeAlienInvasionAlertOutcomes";
import { fakeAlienInvasionAlertPreferences } from "./fakeAlienInvasionAlertPreferences";
import { fakeAlienInvasionAlertExchanges } from "./exchanges";

export const fakeAlienInvasionAlert: SituationData = {
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
    outcomes: fakeAlienInvasionAlertOutcomes,
    preferences: fakeAlienInvasionAlertPreferences,
  },
  exchanges: fakeAlienInvasionAlertExchanges,
};
