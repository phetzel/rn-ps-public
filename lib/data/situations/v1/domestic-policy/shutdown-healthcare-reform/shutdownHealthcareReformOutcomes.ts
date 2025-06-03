import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const shutdownHealthcareReformOutcomes: SituationOutcome[] = [
  {
    id: "shr_deal_struck",
    title: "Deal Struck; Shutdown Ends",
    description:
      "A late-night compromise scraps the vitamin clause for a study group. Government reopens after five days.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "shr_protracted_shutdown",
    title: "Protracted Shutdown Pain",
    description:
      "Stalemate drags on three weeks; agencies furlough staff, markets wobble, and public frustration mounts.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "shr_vitamin_sales_surge",
    title: "Vitamin Sales Surge Nationwide",
    description:
      "Uncertainty sparks a run on presidential-shaped vitamins; supplement firms post record profits despite shutdown woes.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
