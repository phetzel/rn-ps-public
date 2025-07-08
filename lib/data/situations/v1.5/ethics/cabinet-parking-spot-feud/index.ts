import { SituationType } from "~/types";
import type { SituationData } from "~/types";
import { cabinetParkingFeudOutcomes } from "./cabinetParkingFeudOutcomes";
import { cabinetParkingFeudPreferences } from "./cabinetParkingFeudPreferences";
import { cabinetParkingFeudExchanges } from "./exchanges";

export const cabinetParkingFeud: SituationData = {
  trigger: {
    staticKey: "cabinet_parking_spot_feud",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Cabinet Parking Spot Feud",
  description:
    "The Secretaries of State and Defense publicly feud over a prime parking spot, sparking ridicule over priorities.",
  content: {
    outcomes: cabinetParkingFeudOutcomes,
    preferences: cabinetParkingFeudPreferences,
  },
  exchanges: cabinetParkingFeudExchanges,
};
