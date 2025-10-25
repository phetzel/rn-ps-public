import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const embassyBribeBonsaiForPardnsOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "President Denies: Bonsai Are Too Small To Bribe.",
    description: "He brandishes calipers to prove 'insufficient trunkness'; supporters cheer as both agencies applaud in synchronized pruning gloves.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Justice-Adjacent Indicts the Trees for Bribery.",
    description: "To prove neutrality, prosecutors charge 47 bonsai and strap tiny ankle monitors; gardeners chant 'due prunocess' outside court.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Statecraft Ministry Grants Visas to Root Systems.",
    description: "In a loyalty flourish, roots get honorary visas; pots earn diplomatic plates; the President waters them live as ratings briefly spike.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Legislature Replaced By Bonsai In Televised Swap.",
    description: "Grand Committee of Stools seats potted 'experts' who testify by rustling; trust doubles for 11 minutes until a fern filibusters forever.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
