import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const internetCurfewOutcomes: SituationOutcome[] = [
  {
    id: "outcome_curfew_shelved",
    title: "Curfew Shelved After Uproar", // 28 chars - within 20-60 limit
    description:
      "Universal backlash from civil liberties groups and tech firms forces quick retreat.", // 84 chars - within 60-140 limit
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative, // Added to balance HHS across outcomes
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "outcome_curfew_black_market",
    title: "Wi-Fi Black Market Boom", // 23 chars - within 20-60 limit
    description:
      "Curfew implementation sparks massive VPN surge and underground networks, making tracking harder.", // 95 chars - within 60-140 limit
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.UrbanResidents]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_curfew_voluntary_rollout",
    title: "Voluntary 'Digital Wellness' Success", // 35 chars - within 20-60 limit
    description:
      "Mandatory aspect dropped. Tech partnership creates successful 'Digital Wellness' campaign.", // 90 chars - within 60-140 limit
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyNegative, // Added negative to balance
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
