import type { SituationDataType } from "~/lib/schemas/situations";
import { defenseArmsTheLawnGnomes } from "./defense-arms-the-lawn-gnomes";
import { droneHackScandal } from "./drone-hack-scandal";
import { fakeAlienInvasionAlert } from "./fake-alien-invasion-alert";

export const securitySituationsData: SituationDataType[] = [
  defenseArmsTheLawnGnomes,
  droneHackScandal,
  fakeAlienInvasionAlert,
];
