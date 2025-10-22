import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const nationalApologyExchangeActOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Treasury Installs Judgy Lamppost Auditors.",
    description: "The Treasury of Pennies and Apologies deputizes streetlamps to grade remorse, blinking 'meh' for weak sobs. Cities pay back taxes in tears.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Health & Hugs Secretariat Sets Apology RDAs.",
    description: "The Health & Hugs Ministry prescribes 12 sighs per minute and two regret gummies daily. Side effects include PTA coups and haunted brooms.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Apology Futures Tank After Lamp Unionization.",
    description: "The Luminous Brotherhood refuses forgiveness under scale rates, striking at dusk. Markets spiral as remorse credits fall to 'oops coupons'.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Forgiveness Hotline Outsourced to Shrubbery.",
    description: "Budgeteers replace agents with empathetic potted ferns that rustle 'we hear you.' Squirrels notarize apologies with acorn stamps and fees.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
