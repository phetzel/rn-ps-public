import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const stateDeptWineScandalOutcomes: SituationOutcome[] = [
  {
    id: "wine_costs_repaid",
    title: "Repays Costs & Public Calms",
    description:
      "After reimbursement and apologies, the story dies down and most voters move on without lasting outrage.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "wine_resignation",
    title: "Resignation After Outrage",
    description:
      "Public fury forces a high-level resignation, turning the wine fiasco into a symbol of privilege and waste.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "wine_policy_changes",
    title: "Policy Changes, Minor Grumbling",
    description:
      "New rules tighten gift reporting. Critics gripe, but the scandal fades, leaving behind only mild distrust.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
