import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const artificialBeachDisasterOutcomes: SituationOutcome[] = [
  {
    id: "abd_beaches_rebuilt",
    title: "Beaches Rebuilt at Great Cost",
    description:
      "Emergency contracts rebuild the eroded sands, but taxpayers foot soaring bills and critics call it sunk-sand syndrome.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Interior]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
  {
    id: "abd_lawsuits_win",
    title: "Environmental Lawsuits Prevail",
    description:
      "Local activists sue over storm runoff and win big settlements, forcing new protections and fueling accusations of government waste.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Interior]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "abd_project_scrapped",
    title: "Project Abandoned, Funds Lost",
    description:
      "Officials cancel the beach experiment entirely, leaving half-buried infrastructure to rust and taxpayers furious over wasted millions.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Interior]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
