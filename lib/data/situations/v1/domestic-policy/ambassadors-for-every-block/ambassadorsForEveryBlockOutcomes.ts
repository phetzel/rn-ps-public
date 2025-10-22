import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const ambassadorsForEveryBlockOutcomes: SituationOutcome[] = [
  {
    id: "outcome_1",
    title: "HOA Invokes Article Sprinkler; Block Anarchy Ensues.",
    description: "Ambassadors claim lawnmower immunity, declare driveways extraterritorial; both bases boo as the garden secedes with the hose.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "outcome_2",
    title: "Lemonade Tariffs Spark Cul-De-Sac Cold War.",
    description: "Blocks tax kid stands, deploy orange cones as sanctions; suburban base cheers 'order,' urban base stages a bike-bell protest.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "outcome_3",
    title: "Apartment Microstates Demand Elevator Treaties.",
    description: "High-rises mint floor-by-floor envoys; city dwellers demand elevator treaties as ferns seek asylum in stairwells.",
    weight: 25,
    consequences: {
      approvalChanges: {
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "outcome_4",
    title: "Appliances Granted Observer Status At Summit.",
    description: "Appliance Bloc forms after Toaster-Blender detente; State shudders as vacuums filibuster and voters applaud the beeps.",
    weight: 25,
    consequences: {
      approvalChanges: {
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
