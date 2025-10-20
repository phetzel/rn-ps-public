import type { SituationDataType } from "~/lib/schemas/situations";
import { cowEmissionRegulations } from "./cow-emission-regulations";
import { midnightForestificationDecree } from "./midnight-forestification-decree";
import { recordBreakingHeatwave } from "./record-breaking-heatwave";

export const environmentSituationsData: SituationDataType[] = [
  cowEmissionRegulations,
  midnightForestificationDecree,
  recordBreakingHeatwave,
];
