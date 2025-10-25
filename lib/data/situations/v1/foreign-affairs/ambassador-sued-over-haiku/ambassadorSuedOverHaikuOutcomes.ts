import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const ambassadorSuedOverHaikuOutcomes: SituationOutcome[] = [
  {
    id: "outcome1",
    title: "Nation Signs Syllable Ceasefire; Maps Unfold",
    description: "State brokers a Syllable Ceasefire: both sides agree to 5-7-5 demilitarized lines, and vending machines apologize to end snack sanctions.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "outcome2",
    title: "Treasury Floats Haiku Bonds; Market Recites",
    description: "Treasury issues syllable-backed bonds; traders clap in 5-7-5, yields measured in breaths, and snack futures settle in crumbs.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "outcome3",
    title: "Defense Deploys Metaphor Fleet to Calm Sea",
    description: "Admirals launch a literal Calm Sea; ships named Diplomacy, Restraint, and Oops blare whale song until a truce signs itself.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "outcome4",
    title: "Monarch Accepts Duel; Limerick Invades Twice",
    description: "The duel clause awakens a migratory limerick that annexes two Tuesdays; courts rule days are land and weekends are international waters.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
