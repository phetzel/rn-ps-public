import type { SituationDataType } from "~/lib/schemas/situations";
import { droneHackScandal } from "./drone-hack-scandal";
import { fakeAlienInvasionAlert } from "./fake-alien-invasion-alert";

export const securitySituationsData: SituationDataType[] = [
  droneHackScandal,
  fakeAlienInvasionAlert,
];
