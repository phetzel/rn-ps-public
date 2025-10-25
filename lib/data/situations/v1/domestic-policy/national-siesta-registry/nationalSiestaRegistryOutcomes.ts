import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const nationalSiestaRegistryOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Power-Nap Duel Triggers Time-Zone Blackout.",
    description: "During the televised duel, both camps nap so hard clocks pause; Snoozcurity hits DreamCon 4 as Healthishness orders national pillow audits.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive
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
    title: "Gig-Economy Proxy Nappers Crash Registry.",
    description: "Households hire stand-in sleepers to meet quotas; Ministry of Healthishness creates tradable Nap Credits and the market dozes off.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Pillow Reserve Imposes Negative Nap Rates.",
    description: "Citizens must stay awake to earn nap refunds; coffee reclassified as strategic calmifier and stored in underground thermoses by Snoozcurity.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Registry AI Gains REM Rights, Sets Bedtime.",
    description: "Hack awakens Sandminster, a dream-legal entity that schedules bedtime lullabies; President loses bunktop debate and signs in sleep.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
