import { SituationType } from "~/types";
import type { SituationDataType } from "~/lib/schemas/situations";
import { forgivenessCertificateFiascoOutcomes } from "./forgivenessCertificateFiascoOutcomes";
import { forgivenessCertificateFiascoPreferences } from "./forgivenessCertificateFiascoPreferences";
import { forgivenessCertificateFiascoExchanges } from "./exchanges";

export const forgivenessCertificateFiasco: SituationDataType = {
  trigger: {
    staticKey: "forgiveness-certificate-fiasco",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Forgiveness Certificate Fiasco",
  description: "State sold 'forgiveness certificates' to donors, pulling Justice and HHS into an ethics scandal angering conservatives, urban voters, and unions.",
  content: {
    outcomes: forgivenessCertificateFiascoOutcomes,
    preferences: forgivenessCertificateFiascoPreferences,
  },
  exchanges: forgivenessCertificateFiascoExchanges,
};
