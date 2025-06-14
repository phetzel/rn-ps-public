import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const whiteHouseThemeParkOutcomes: SituationOutcome[] = [
  {
    id: "theme_plan_shelved",
    title: "Plan Shelved After Uproar",
    description:
      "Massive public backlash forces the administration to cancel the theme park proposal and vow to protect existing parks.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Interior]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "theme_scaled_approved",
    title: "Scaled Version Approved",
    description:
      "After heated hearings, officials approve a trimmed-down attraction with educational exhibits, promising it will pay for itself.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Interior]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
  {
    id: "theme_park_mixed",
    title: "Park Opens to Mixed Reviews",
    description:
      "The theme park opens amid protests and amusement. Visitors trickle in while pundits mock the rides as a glorified campaign stunt.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Interior]: SituationConsequenceWeight.Neutral,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
