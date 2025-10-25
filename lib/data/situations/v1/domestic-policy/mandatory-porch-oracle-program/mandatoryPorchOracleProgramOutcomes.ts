import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const mandatoryPorchOracleProgramOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Oracle Unions Stage Silent Siren Strike.",
    description: "With omens withheld, morning routines stall; Justice opens Omen Court, HHS issues prophecy patches, and Homeland deputizes wind chimes.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Neighborhood Prophecy Olympics Ignite.",
    description: "Blocks battle in omen decathlons; HHS counts steps as care, Homeland escorts a torch by drone, and Justice referees with a vane gavel.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o3",
    title: "Black-Market Omens Flood The Suburbs.",
    description: "Counterfeit omens crash the app; Justice recalls fake visions, HHS labels incense wellness gear, and Homeland raids scented patios.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "National Grid Syncs To Wind-Chime Directives.",
    description: "Timed directives stabilize power by accident; Homeland claims a win, HHS orders breezes, and Justice sues the weather for no-show gusts.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
