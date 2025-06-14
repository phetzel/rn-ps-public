import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const autonomousCarsRebellionOutcomes: SituationOutcome[] = [
  {
    id: "acr_patch_obey",
    title: "Patch Issued, Cars Obey",
    description:
      "Security experts issue a fix within hours, restoring order and boosting confidence in autonomous technology.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "acr_traffic_chaos",
    title: "Traffic Chaos; Trust Erodes",
    description:
      "Many cars remain out of sync for days, causing gridlock and public distrust of self-driving vehicles.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "acr_ban_proposed",
    title: "Auto-Drive Ban Proposed",
    description:
      "Fear of future hacks prompts lawmakers to consider banning autonomous driving altogether, dividing tech enthusiasts and safety advocates.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
