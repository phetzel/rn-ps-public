import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const cabinetBudgetFeudOutcomes: SituationOutcome[] = [
  {
    id: "cbf_joint_audit",
    title: "Joint Audit Improves Image",
    description:
      "A bipartisan audit reveals waste but also reforms, boosting the administration's reputation for accountability.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "cbf_pr_war",
    title: "PR War Hurts Both",
    description:
      "Ongoing public sniping drains credibility from Treasury and Defense alike, fueling press coverage of dysfunction.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "cbf_pres_mediates",
    title: "President Mediates, Minor Gains",
    description:
      "The President brokers an uneasy truce, claiming savings though skeptics doubt real change.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
