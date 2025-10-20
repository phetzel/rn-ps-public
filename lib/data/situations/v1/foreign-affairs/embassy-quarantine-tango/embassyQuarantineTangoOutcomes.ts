import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const embassyQuarantineTangoOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Spa Grants Dual Citizenship by Scent Profile.",
    description: "Citizenship issued if your pine-mint notes match the national diffuser. Consulates panic as passports start smelling like brunch.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Chair-Yoga Summit Becomes Global Stretching Forum.",
    description: "President rules votes valid only if held for three breaths. Treaties signed in plank cursive as passports attempt a polite clap.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Embassy Wing Declares Spa-Statehood.",
    description: "Pop-up proclaims the Soothing Republic and admits citizens via eucalyptus steam. Homeland negotiates with towel ministers in flip-flops.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Ambassadors Seize Loofahs, Form Foam Alliance.",
    description: "Irate missions form a bubbly bloc to embargo dry skin, as agencies counter with lotion airlifts and an exfoliation pact.",
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
