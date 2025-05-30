import { domesticSituationsData } from "./domestic-policy";
import { economicSituationsData } from "./economy";
import { foreignSituationsData } from "./foreign-affairs";
import { scandalSituationsData } from "./ethics";
import { securitySituationsData } from "./security";

export const situationsData = [
  ...domesticSituationsData,
  ...economicSituationsData,
  ...foreignSituationsData,
  ...scandalSituationsData,
  ...securitySituationsData,
];
