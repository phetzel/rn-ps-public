import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const cyberCoffeeAttackOutcomes: SituationOutcome[] = [
  {
    id: "cca_supply_restored_quickly",
    title: "Supply Restored Within Days",
    description:
      "Distribution systems unfreeze fast, calming caffeine addicts and scoring points for rapid crisis management.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "cca_shortage_drags_out",
    title: "Shortage Drags, Approval Dips",
    description:
      "Delays in untangling logistics leave coffee aisles bare for weeks, sending approval ratings tumbling.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "cca_caffeine_rationing",
    title: "Prices Spike; Rationing Looms",
    description:
      "Market panic over beans triggers ration talk and skyrocketing prices, fueling protests and hoarding.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
];
