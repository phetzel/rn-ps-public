import { domesticPolicySituationsData } from "./v1/domestic-policy";
import { economySituationsData } from "./v1/economy";
import { foreignAffairsSituationsData } from "./v1/foreign-affairs";
import { ethicsSituationsData } from "./v1/ethics";
import { securitySituationsData } from "./v1/security";
import { governanceSituationsData } from "./v1/governance";
import { environmentSituationsData } from "./v1/environment";

export const situationsData = [
  ...domesticPolicySituationsData,
  ...economySituationsData,
  ...foreignAffairsSituationsData,
  ...ethicsSituationsData,
  ...securitySituationsData,
  // ...governanceSituationsData,
  ...environmentSituationsData,
];
