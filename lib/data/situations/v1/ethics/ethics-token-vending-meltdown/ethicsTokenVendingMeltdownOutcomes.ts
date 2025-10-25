import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const ethicsTokenVendingMeltdownOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Court Grants Vending Machine Personhood.",
    description: "On duel day, the High Circuit of Appliances grants the machine rights; Justice Ministry debates a pretzel lawyer as crowds chant 'refund'.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "President Loses Duel, Names Machine Ethics Czar.",
    description: "Bound by ancient snack law, the President deputizes the unit; Health-Human Services unveils a Waiver Food Pyramid and a pizza hotline.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Token Recall Triggers Ethics Outbreak.",
    description: "Recalled tokens hatch actual ethics, making officials abruptly honest; Justice Ministry sues morality as Health-Human Services shrugs.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o4",
    title: "Coin-Operated Jury Acquits Machine.",
    description: "A jury of vending peers clears it; pizza becomes tender; Justice Ministry drafts crust codes as Health-Human Services prints guidelines.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
