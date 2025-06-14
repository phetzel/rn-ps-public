import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const pandaLoanDramaOutcomes: SituationOutcome[] = [
  {
    id: "panda_names_compromise",
    title: "Names Compromise, Pandas Stay",
    description:
      "Both sides agree to hyphenate the pandas' names, keeping the bears on loan and calming the uproar.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Interior]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "pandas_return",
    title: "Pandas Depart, Public Weeps",
    description:
      "Negotiations fail and the pandas return home. Heartbroken fans blame the administration for the loss.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "donor_buys_rights",
    title: "Donation Buys Naming Rights",
    description:
      "A wealthy donor pays to keep the pandas and names them after the President's kids anyway, stirring mild grumbling.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Interior]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
