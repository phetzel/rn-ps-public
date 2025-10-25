import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const nationGetsOfficialScentOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Dawn sniff duel creates a nose-ocracy.",
    description: "The President’s sniff duel crowns the driest eyes, installing a Smell Senate where bills pass by exhale strength and citrus notes.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Farmers sue as cows start prefab marinades.",
    description: "The Official Scent pre-seasons livestock; steaks arrive 'emotionally zesty,' exports collapse, and napkin futures spike on brisket tears.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o3",
    title: "Perfumer lawsuits summon an Aroma Supreme Court.",
    description: "Warring noses carve a new high court that rules via blind sniff tests, overturning precedent with a dramatic sneeze known as Scenterior.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Transit fares are replaced by public sniff taxes.",
    description: "Turnstiles inhale commuters for payment, misreading cologne as fraud and awarding free rides to garlic festivals for fiscal balance.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
