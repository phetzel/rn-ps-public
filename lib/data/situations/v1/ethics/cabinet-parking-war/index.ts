import { cabinetParkingWarPreferences } from "./cabinetParkingWarPreferences";
import { cabinetParkingWarOutcomes } from "./cabinetParkingWarOutcomes";
import { cabinetParkingWarExchanges } from "./cabinetParkingWarExchanges";
import { SituationType, SituationData } from "~/types";

export const cabinetParkingWar: SituationData = {
  trigger: {
    staticKey: "cabinet_parking_war",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Cabinet Parking War",
  description:
    "A petty feud erupts as State and Homeland staffers sabotage each other's government cars to secure prime parking spots, escalating into an ethics mess.",
  content: {
    preferences: cabinetParkingWarPreferences,
    outcomes: cabinetParkingWarOutcomes,
  },
  exchanges: cabinetParkingWarExchanges,
};
