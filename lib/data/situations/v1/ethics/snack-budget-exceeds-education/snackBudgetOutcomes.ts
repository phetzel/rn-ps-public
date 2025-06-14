import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const snackBudgetOutcomes: SituationOutcome[] = [
  {
    id: "snack_budget_rebalanced",
    title: "Budget Rebalanced After Uproar",
    description:
      "Facing backlash, the president reallocates funds from snacks to education, declaring the matter resolved.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: { [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "snack_media_fades",
    title: "Media Storm Then Fades",
    description:
      "After days of ridicule, coverage moves on without policy changes, though polling dips briefly.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: { [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "snack_summit_doubles_down",
    title: "President Doubles Down at Snack Summit",
    description:
      "The administration stages a 'snack summit' touting comfort food as morale building, angering budget hawks.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: { [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
