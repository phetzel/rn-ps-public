import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const sovereignSnackTreatyStandoffOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Appliance Coup Derails Diplomatic Cook-Off",
    description: "Mid-broadcast, the ovens unionize as the Sovereign Range, demanding statehood; both sides sue for peace with spatulas.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Embassy Diner Accidentally Redraws Borders",
    description: "The lunch counter qualifies as an international frontier; waitstaff gain dual citizenship, and ketchup becomes the passport ink.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Calorie Standard Replaces Monetary Policy Overnight",
    description: "The cook-off ratings spike leads markets to peg currency to pancakes; State-ish Affairs issues visa placemats with syrup seals.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o4",
    title: "Napkin Recognition Triggers Linen Uprising",
    description: "Losing chef concedes napkin sovereignty; the napkins unionize, demand voting rights, and Homelandish Security deploys butter knives.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
