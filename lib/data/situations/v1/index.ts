import { domesticPolicySituationsData } from "./domestic-policy";
import { economySituationsData } from "./economy";
import { foreignAffairsSituationsData } from "./foreign-affairs";
import { ethicsSituationsData } from "./ethics";
import { securitySituationsData } from "./security";
import { governanceSituationsData } from "./governance";

export const situationsData = [
  ...domesticPolicySituationsData,
  ...economySituationsData,
  ...foreignAffairsSituationsData,
  ...ethicsSituationsData,
  ...securitySituationsData,
  ...governanceSituationsData,
];
