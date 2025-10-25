import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const stateDepartmentsEthicsOuijaOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Justice Indicts Ouija For Unlicensed Lobbying.",
    description: "The board spells 'SORRY' in court, claims planchette-client privilege, and the President says voters deserve clarity, not ectoplasm.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Treasury Launches Spectral Withholding Tables.",
    description: "Treasury classifies ghosts as consultants, withholds ectoplasm at 22%, and posts a surplus powered by zero-cost afterlife interns.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Furloughed Spirits Unionize, Demand Per Diem.",
    description: "After the President retires the board, spectral staff form Local 0, picket in cold spots, and demand back pay in incense.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o4",
    title: "State Unveils Ethics-Compliant Policy Dice.",
    description: "To end séance-gate, State swaps the board for polyhedral 'Policy Dice' that shout 'INFORM!' as the President rejects ectoplasm.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
