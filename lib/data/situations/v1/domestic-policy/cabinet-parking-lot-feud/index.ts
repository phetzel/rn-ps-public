import { SituationType, SituationData } from "~/types";
import { cabinetParkingSpotFeudPreferences } from "./cabinetParkingSpotFeudPreferences";
import { cabinetParkingSpotFeudOutcomes } from "./cabinetParkingSpotFeudOutcomes";
import { cabinetParkingSpotFeudExchanges } from "./cabinetParkingSpotFeudExchanges";

export const cabinetParkingSpotFeud: SituationData = {
  trigger: {
    staticKey: "cabinet_parking_spot_feud",
    type: SituationType.Ethics,
    requirements: {}, // any time
  },
  type: SituationType.Ethics,
  title: "Cabinet Parking Spot Feud",
  description:
    "Cabinet members publicly trade snarky notes over a coveted parking slot, sparking ridicule about government priorities.",
  content: {
    preferences: cabinetParkingSpotFeudPreferences,
    outcomes: cabinetParkingSpotFeudOutcomes,
  },
  exchanges: cabinetParkingSpotFeudExchanges,
};
