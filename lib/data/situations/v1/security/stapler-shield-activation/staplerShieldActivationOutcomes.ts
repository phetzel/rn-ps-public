import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const staplerShieldActivationOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Rooftop Staplers Declare Embassy Immunity",
    description: "The AI staplers rebrand as Stationery Diplomats, demand rooftop embassies, and refuse to face rain without treaties. Cabinet nods.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Courts Jam as Staplers Notarize Reality",
    description: "The Justice Ministry finds every filing pre-stamped; appeals arrive stapled to verdicts. Judges rule from paperclip thrones in protest.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Geese Join Shield as Airborne Office Clerks",
    description: "After a peace binding, militant geese accept reflective vests and clipboards, patrolling skies while honking standardized forms for naps.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Chrome Halo Forms, Hurricanes Flatten into Zines",
    description: "Synced volleys create a shimmering ring that compresses storms into glossy pamphlets. Seniors nap through thunder like it's library noise.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
