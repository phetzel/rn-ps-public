import type { SituationDataType } from "~/lib/schemas/situations";
import { cloudsNowPropertyOfState } from "./clouds-now-property-of-state";
import { cowEmissionRegulations } from "./cow-emission-regulations";
import { fogRationingAndCreditScheme } from "./fog-rationing-and-credit-scheme";
import { mandatoryBackyardGlacierPlan } from "./mandatory-backyard-glacier-plan";
import { midnightForestificationDecree } from "./midnight-forestification-decree";
import { recordBreakingHeatwave } from "./record-breaking-heatwave";
import { sunlightLicensingScheme } from "./sunlight-licensing-scheme";

export const environmentSituationsData: SituationDataType[] = [
  cloudsNowPropertyOfState,
  cowEmissionRegulations,
  fogRationingAndCreditScheme,
  mandatoryBackyardGlacierPlan,
  midnightForestificationDecree,
  recordBreakingHeatwave,
  sunlightLicensingScheme,
];
