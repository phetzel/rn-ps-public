import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const embassyOfFluRequestsAsylumOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Barge Wins Mask Sprint; Sovereignty Sneezed In.",
    description: "HHS loses the handwashing relay to a mop, so Homeland issues tissue visas and grants asylum to sneeze-declared statehood.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Pirate Epidemiologists Hijack the Decathlon.",
    description: "Parrots in tiny N95s claim diplomacy, pirates trade vaccines for loot, and the barge gains provisional recognition by plank.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o3",
    title: "Booster Rain Creates Floating Border Bureau.",
    description: "HHS wins and cloud-seeds vaccines into glittery drizzle; the harbor immunizes itself as Homeland opens a buoyant rope maze for checks.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Microscopic Champion Becomes Germ Ambassador.",
    description: "The barge fields Patient Zero-Zero-Seven; a tuxedoed microbe aces contact-tracing chess and is hailed as Ambassador of Diplomatic Immunity.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
