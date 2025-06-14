import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const taxpayerGolfCourseOutcomes: SituationOutcome[] = [
  {
    id: "tgc_funds_repaid",
    title: "Funds Repaid Under Pressure",
    description:
      "After intense scrutiny, the administration repays the diverted infrastructure money and vows tighter project reviews.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "tgc_injunction_halts",
    title: "Court Injunction Halts Build",
    description:
      "A court stops construction citing misuse of funds. The halted project becomes a political football for months.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Interior]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "tgc_course_opens",
    title: "Course Opens, Tourism Bump",
    description:
      "Despite criticism, the lavish course opens and draws tourists. Fiscal hawks rage while local businesses cheer increased traffic.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
