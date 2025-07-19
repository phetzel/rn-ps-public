// v1
// import { domesticPolicySituationsData } from "./v1/domestic-policy";
// import { economySituationsData } from "./v1/economy";
// import { foreignAffairsSituationsData } from "./v1/foreign-affairs";
// import { ethicsSituationsData } from "./v1/ethics";
// import { securitySituationsData } from "./v1/security";
// import { governanceSituationsData } from "./v1/governance";
// import { environmentSituationsData } from "./v1/environment";

// v1.5
// import { domesticPolicySituationsData } from "./v1.5/domestic-policy";
// import { economySituationsData } from "./v1.5/economy";
// import { foreignAffairsSituationsData } from "./v1.5/foreign-affairs";
// import { ethicsSituationsData } from "./v1.5/ethics";
// import { securitySituationsData } from "./v1.5/security";
// import { governanceSituationsData } from "./v1.5/governance";
// import { environmentSituationsData } from "./v1.5/environment";

// v2
import { domesticPolicySituationsData } from "./v2/domestic-policy";
import { economySituationsData } from "./v2/economy";
import { foreignAffairsSituationsData } from "./v2/foreign-affairs";
import { ethicsSituationsData } from "./v2/ethics";
import { securitySituationsData } from "./v2/security";
import { governanceSituationsData } from "./v2/governance";
import { environmentSituationsData } from "./v2/environment";

export const situationsData = [
  ...domesticPolicySituationsData,
  ...economySituationsData,
  ...foreignAffairsSituationsData,
  ...ethicsSituationsData,
  ...securitySituationsData,
  // ...governanceSituationsData,
  ...environmentSituationsData,
];
