import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const excessiveTreePlantingInitiativeOutcomes: SituationOutcome[] = [
  {
    id: "etpi_canopy_success",
    title: "Urban Canopy Success Story",
    description:
      "After trimming and spacing trees, cities enjoy cooler streets and community pride blossoms despite initial snags.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Interior]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "etpi_rodent_boom",
    title: "Rodent Boom and Allergy Sneezes",
    description:
      "Dense tree clusters invite pests and pollen clouds, forcing costly cleanups and endless sniffles for city dwellers.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Interior]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "etpi_budget_axed",
    title: "Budget Axed and Trees Removed",
    description:
      "Officials scrap the planting program and cut down hundreds of saplings, sparking protests over wasted funds and lost shade.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Interior]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
];
