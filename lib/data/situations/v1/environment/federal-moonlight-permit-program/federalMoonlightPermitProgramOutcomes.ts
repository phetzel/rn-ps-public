import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const federalMoonlightPermitProgramOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Homeland Serenity Installs Pay-to-Gleam Sky Meters.",
    description: "Agents ticket the Moon for overglow as clubs buy shadow credits; loitering comets get booted, sparking fashionable dusk riots on patios.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Health & Hibernation Mandates Prescription Bedtime.",
    description: "Bedtime becomes a reimbursable dose with co-pay naps and booster yawns; insomniacs receive emergency eclipses from licensed nap technicians.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Moth Union Wins Glitter PPE And Federally Timed Snack.",
    description: "Shimmering capes and a noon siesta approved; porch bulbs must dim for wage hours, prompting furious yet adorable pickets by stern owls.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
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
    title: "The Moon Elected Mayor, Demands Salary In Cheese Wheels.",
    description: "After curb-space perks, the Moon wins write-ins and vetoes clouds; councils pivot to tidal roll calls while mice form an ethics committee.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
