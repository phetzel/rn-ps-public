import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const autonomousCarsRebellionOutcomes: SituationOutcome[] = [
  {
    id: "outcome_cars_patch_issued",
    title: "Emergency Patch Issued, Cars Obey",
    description:
      "Tech companies and government agencies collaborate on an emergency software patch that restores control, containing the chaos within hours.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Defense]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.UrbanResidents]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "outcome_cars_traffic_chaos",
    title: "Traffic Chaos, Public Trust Erodes",
    description:
      "The rebellion causes days of gridlock and accidents. Public trust in autonomous vehicle technology plummets, setting the industry back years.",
    weight: 45,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.UrbanResidents]:
            SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.LaborUnions]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "outcome_cars_ban_proposed",
    title: "Auto-Drive Ban Proposed, Dividing Public",
    description:
      "In response to the chaos, lawmakers propose a nationwide ban on self-driving cars, sparking a fierce debate between tech advocates and safety groups.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
