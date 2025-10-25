import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const islandDemandsReturnOfMoonOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "State Hosts Mediation Between Island And Pelicans.",
    description: "Foreign ministers debate fish-based reparations as pelicans demand beachfront roosts and Tuesdays, while island claims nights with vowels.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Treasury Floats Glow-Backed Lunar Bonds, Tides Rise.",
    description: "Treasury pegs currency to moonbeams; coastal ATMs become lighthouses, and rent is due whenever wolves howl the anthem.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Rotating Night Plan Spins Planet, Timezones Revolt.",
    description: "President’s moon-night lottery accidentally tilts the planet; calendars unionize and demand hazard pay for Wednesdays.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Shadows Sanctioned As Moonlight Becomes Tariff.",
    description: "State classifies darkness as contraband; citizens file for shadow asylum while night markets pivot to artisanal glow-smuggling.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
