import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const icebergRealEstateOutcomes: SituationOutcome[] = [
  {
    id: "iceberg_water_venture",
    title: "Novel Water Venture",
    description:
      "Some investors embrace the plan as a quirky opportunity, seeing potential profit from premium iceberg water.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "iceberg_plan_mocked",
    title: "Int'l Mockery, Plan Shelved",
    description:
      "World leaders ridicule the idea and environmental groups threaten lawsuits, forcing the administration to quietly drop it.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "iceberg_lawsuit",
    title: "Climate Lawsuit Filed",
    description:
      "Environmental groups sue, claiming the plan threatens ecosystems. Litigation drags on, costing money and goodwill.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
