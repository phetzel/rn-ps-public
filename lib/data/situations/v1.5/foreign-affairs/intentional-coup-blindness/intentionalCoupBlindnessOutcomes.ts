import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const intentionalCoupBlindnessOutcomes: SituationOutcome[] = [
  {
    id: "outcome_coup_cheap_oil",
    title: "Cheap Oil Flows, Rights Groups Protest",
    description:
      "The administration's gamble pays off. The new regime provides cheap oil, but the government faces condemnation for ignoring the coup.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_coup_sanctions_spike",
    title: "Sanctions Imposed, Oil Prices Spike",
    description:
      "Bowing to international pressure, the administration sanctions the new regime. Oil prices skyrocket, causing economic pain.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Defense]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_coup_collapses_blame",
    title: "Coup Collapses, US Blamed for Instability",
    description:
      "The coup fails, and the restored government accuses our administration of complicity, leading to a major diplomatic crisis.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
        },
      },
    },
  },
];
