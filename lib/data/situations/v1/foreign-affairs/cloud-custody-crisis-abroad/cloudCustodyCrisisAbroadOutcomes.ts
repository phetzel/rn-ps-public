import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const cloudCustodyCrisisAbroadOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Department of Elsewhere Grants Dual Passports.",
    description: "Admitting clerical drizzle, envoys stamp both covers as the cloud hovers, smug, raining ceremonial visas along Diplomat Alley.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Defense Deploys Anti-Drizzle Peace Balloons.",
    description: "Sky Marines enforce a no-sulk zone; the cloud panics, splits into rival governments: Cumulus-in-Exile and the Partly Cloudy Junta.",
    weight: 35,
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
    id: "o3",
    title: "Cloud Declares Itself a Rain-Based Nation.",
    description: "Both microstates accept annexation by mist; talks resume under a new anthem composed of distant thunder and politely timed sprinkling.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
