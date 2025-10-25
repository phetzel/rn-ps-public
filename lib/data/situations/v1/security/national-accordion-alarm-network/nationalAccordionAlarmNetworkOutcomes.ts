import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const nationalAccordionAlarmNetworkOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Commander-in-Polka stages a stadium-sized volume duel.",
    description: "The President duels drones on live TV, conducts Decibel Defense as tubas, and smothers tech backlash under a wall of senior oompahs.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Justice declares rhythm a legal weapon.",
    description: "The Justice Orchestra files 3/4-time warrants as Homeland Harmony launches a polka alert and deputizes senior protesters as bailiffs.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o3",
    title: "Accordions achieve sentience and unionize airspace.",
    description: "Squeezeboxes form a guild, force drones to audition, and win breaks every four measures as the President signs with a conductor's baton.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
