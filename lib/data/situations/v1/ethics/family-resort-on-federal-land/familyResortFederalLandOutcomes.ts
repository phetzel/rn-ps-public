import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const familyResortFederalLandOutcomes: SituationOutcome[] = [
  {
    id: "frfl_project_halted",
    title: "Project Halted After Suit",
    description:
      "A lawsuit from conservation groups halts construction, forcing the administration to abandon the resort plan.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Interior]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "frfl_resort_proceeds",
    title: "Resort Proceeds; Outrage",
    description:
      "Despite protests, the resort is completed for private use, fueling widespread outrage and calls for ethics reforms.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Interior]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "frfl_revenue_share",
    title: "Revenue-Share Mollifies Critics",
    description:
      "A revenue-sharing plan with the park is announced, muting some criticism but still raising questions about favoritism.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Interior]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
