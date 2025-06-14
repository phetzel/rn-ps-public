import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const droneDeliveryScandalOutcomes: SituationOutcome[] = [
  {
    id: "drone_deliveries_halted",
    title: "Deliveries Halted After Backlash",
    description:
      "Public outrage forces the administration to stop the drone meal drops and issue a statement promising better oversight.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "drone_faa_waiver",
    title: "FAA Waiver Sparks Backlash",
    description:
      "The FAA quietly approves a waiver for the deliveries, stirring protests over special treatment and drone safety.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "drone_foodtech_spin",
    title: "Program Spun as Food-Tech Demo",
    description:
      "Officials rebrand the daily flights as a cutting-edge food-tech trial, gaining limited interest but skepticism persists.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
