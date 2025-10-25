import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const cloudsNowPropertyOfStateOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Ministry Pegs Currency To Cumulus, Markets Mist.",
    description: "Rain permits convert to CloudNotes; investors hoard fog, and cash machines spit damp receipts with collectible mildew signatures.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Homeland Sets Umbrella Checkpoints In The Sky.",
    description: "Sky Safety Authority pats down drizzle for contraband thunder as drones tow unregistered clouds; protest leaf blowers jailbreak vapor.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Health Ministry Mandates Seasonal Fluff Shots.",
    description: "Nurses run cloud wellness checks and counseling kiosks; thunderheads get notarized titles and lollipops shaped like tiny barometers.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o4",
    title: "Clouds Unionize, Stage Dry Strike For Perks.",
    description: "Cumulonimbus Local 404 halts rain until paid in vapor credits; lawns file amicus briefs, and black-market drizzle passes sell out.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
