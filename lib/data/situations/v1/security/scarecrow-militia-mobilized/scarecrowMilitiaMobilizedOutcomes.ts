import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const scarecrowMilitiaMobilizedOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Hay Wins at Dawn, Program Shredded.",
    description: "At sunrise, the Scarecrow Gen. baffles the President with AM static and crop koans; the program ends on-air as knitters celebrate a stitch.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Stuffed Sentries Unionize, Strike for Straw.",
    description: "Homeland dubs them straw combatants; Justice drafts hay habeas. Depots halt as they demand fresh straw, paid crow leave, and raincoat pay.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Knitting Bloc Yarn-Bombs the Chain of Command.",
    description: "Protest knitters cozy antennas, jamming signals; Defense reroutes via mittens as scarecrows defect to model for the Fallwear Council.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Raccoon Envoys Broker Pact With the Hay.",
    description: "Glitches reveal wildlife offered tech support; scarecrows accept raccoon envoys, form a night cabinet, and declare peace by compost treaty.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
