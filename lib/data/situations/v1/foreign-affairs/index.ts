import type { SituationDataType } from "~/lib/schemas/situations";
import { cheeseTariffWar } from "./cheese-tariff-war";
import { embassyOfFluRequestsAsylum } from "./embassy-of-flu-requests-asylum";
import { embassyQuarantineTango } from "./embassy-quarantine-tango";

export const foreignAffairsSituationsData: SituationDataType[] = [
  cheeseTariffWar,
  embassyOfFluRequestsAsylum,
  embassyQuarantineTango,
];
