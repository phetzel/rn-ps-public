import { domesticSituationsData } from "./domestic";
import { economicSituationsData } from "./economic";
import { foreignSituationsData } from "./foreign";
import { scandalSituationsData } from "./scandal";
import { securitySituationsData } from "./security";

export const situationsData = [
  ...domesticSituationsData,
  ...economicSituationsData,
  ...foreignSituationsData,
  ...scandalSituationsData,
  ...securitySituationsData,
];
