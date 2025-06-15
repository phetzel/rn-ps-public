import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const intentionalCoupBlindnessOutcomes: SituationOutcome[] = [
  {
    id: "coup_blindness_oil_backlash",
    title: "Cheap Oil, Rights Backlash",
    description:
      "Gas prices dip, but human rights groups condemn the silence, sparking protests and congressional hearings.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Neutral,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "coup_blindness_sanctions",
    title: "Sanctions Spark Oil Spike",
    description:
      "Allies impose sanctions on Oilistan, driving global prices up. Administration faces accusations of enabling dictatorship.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "coup_blindness_backfires",
    title: "Coup Collapses; US Blamed",
    description:
      "The coup fails and rebel leaders accuse the US of secret meddling. Protests erupt, straining regional bases.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
