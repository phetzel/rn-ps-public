import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const internetCurfewOutcomes: SituationOutcome[] = [
  {
    id: "outcome_curfew_shelved",
    title: "Curfew Shelved After Widespread Uproar",
    description:
      "The proposal faces universal backlash from civil liberties groups, tech companies, and the public. The administration quickly backs down.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_curfew_black_market",
    title: "Wi-Fi Black Market and VPNs Boom",
    description:
      "The curfew is implemented, leading to a massive surge in VPN usage and underground networks, making internet use harder to track.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "outcome_curfew_voluntary_rollout",
    title: "Voluntary 'Night Mode' Rollout Accepted",
    description:
      "The mandatory aspect is dropped. Instead, the administration partners with tech companies on a successful 'Digital Wellness' campaign.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
