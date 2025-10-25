import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const stateEthicsApologyExchangeOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Ethics Board Pegs the Sorry Dollar.",
    description: "To calm remorse inflation, regulators peg mea culpas to corn. Diplomats hoard kernels and confess only during harvest season.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "President Launches Quantitative Sobbing.",
    description: "He admits shorting regret and floods markets with government-issued sniffles. The mood index stabilizes at pleasantly damp.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o3",
    title: "Apology Exchange Achieves Sentience, Sulks.",
    description: "The market demands an apology for monetizing apologies, then refuses to accept it. Traders spiral into recursive sorry-selling.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Nation Adopts Universal Basic Contrition.",
    description: "Every citizen receives a monthly stipend of pre-graded sorries. Black markets emerge for artisanal remorse with rustic fonts.",
    weight: 25,
    consequences: {
      approvalChanges: {
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
