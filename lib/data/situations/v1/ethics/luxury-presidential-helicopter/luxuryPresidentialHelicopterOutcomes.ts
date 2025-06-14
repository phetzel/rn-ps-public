import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const luxuryPresidentialHelicopterOutcomes: SituationOutcome[] = [
  {
    id: "helicopter_order_cancelled",
    title: "Helicopter Order Cancelled",
    description:
      "Public outrage forces cancellation, leaving suppliers furious and the president promising thriftier travel.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]:
            SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "helicopter_reduced_spec",
    title: "Reduced Spec Delivered",
    description:
      "After review, a cheaper version without gold trim is purchased, saving some money but still drawing jokes.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Neutral,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "helicopter_cost_overrun",
    title: "Cost Overrun Scandal",
    description:
      "Costs spiral despite promises. Investigations multiply and the helicopters become a symbol of excess.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
