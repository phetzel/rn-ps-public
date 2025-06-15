import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const icebergRelocationProjectOutcomes: SituationOutcome[] = [
  {
    id: "irp_drought_relief_success",
    title: "Drought Relief Triumph",
    description:
      "Towed icebergs melt into reservoirs, boosting water supply and surprising skeptics across the globe.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "irp_melts_fiasco",
    title: "Icebergs Melt En Route",
    description:
      "Tugs miscalculate currents; icebergs vanish before arrival, wasting millions and drawing global laughter.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "irp_international_lawsuit",
    title: "International Lawsuit Follows",
    description:
      "Neighboring nations sue over iceberg rights and maritime chaos, leaving diplomats scrambling for apologies.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
];
