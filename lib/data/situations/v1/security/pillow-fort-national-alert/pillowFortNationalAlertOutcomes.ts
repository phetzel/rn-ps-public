import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const pillowFortNationalAlertOutcomes: SituationOutcome[] = [
  {
    id: "pillow-code-chaos",
    title: "Homeland Issues 912-Page Pillow Code; Chaos Ensues.",
    description: "Homeland Pillows mandates fluff density, sparking a thread-count black market and exemption bids from cactus zoos worried about punctures.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "down-feather-dome",
    title: "Defense Deploys a Nationwide 'Down Feather Dome'.",
    description: "The Defense Against Drafts links forts into a sky quilt that briefly lowers gravity, prompting a noon hour of joyful, official hopping.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "fluffstice-sovereignty",
    title: "Justice Names Pillow Forts Micro-Sovereignties.",
    description: "The Department of Fluffstice rules a blanket over chairs is a nation, issuing crayon passports as neighbors demand returns for snack raids.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "sofa-strike",
    title: "Couch Lobby Leads Sofa Strike; Seating Vanishes.",
    description: "In protest, sofas migrate three inches out of reach, while recliners lock upright, forcing emergency floor-sitting protocols at agencies.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
