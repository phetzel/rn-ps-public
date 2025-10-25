import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const diplomatsDeclareMusicalSiegeOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Sunrise Silence-Off Triggers Avian Veto.",
    description: "At dawn, the President’s hush challenge is vetoed by birdsong, pushing Defense to buy sky-mufflers as State negotiates with sparrows in 4/4.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Crescendo Courts Rule Fortissimo on Treaties.",
    description: "Tempo tribunals declare only loud clauses valid, so State files briefs in trombone, Defense issues helmets, and metronomes scalp tickets.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o3",
    title: "Anthem Recast as Three Minutes of Rests.",
    description: "To out-rest the embassy, the anthem becomes orchestrated silence, boosting earplug stocks while marching bands mime at parades.",
    weight: 25,
    consequences: {
      approvalChanges: {
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Defense Unveils Negative-Decibel Brigade.",
    description: "To break the siege, stealth violists deploy anti-sound, erasing applause mid-clap and accidentally redacting three paragraphs of the budget.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
