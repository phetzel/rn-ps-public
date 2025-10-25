import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const porcupinePerimeterProtocolOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Porcupines Unionize, Launch National Prickle-Out.",
    description: "United Spines Local 92 demands salt-lick hazard pay and micro-helmets, freezing budgets as Homelandish haggles and Justice shrugs.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "GPS Glitch Turns Guards Into Wedding Crashers.",
    description: "A firmware sneeze reroutes the herd to parades and receptions, melting hearts as Defense brands it morale ops and Homelandish applauds.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o3",
    title: "Tiny Helmet Scandal Topples Budget, Not Hair.",
    description: "Oversight finds the helmets are repainted thimbles; Justice indicts a procurement spreadsheet as Defense pleads ignorance in 4D slideware.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o4",
    title: "Cyberattack Thwarted By Chewed Cable Heroics.",
    description: "Porcupines neutralize a breach by nibbling fiber, dropping the grid for six hours; Homelandish hails a win and the public buys candles.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
