import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const doorknobDefenseInitiativeOutcomes: SituationOutcome[] = [
  {
    id: "outcome-1",
    title: "Knobs Gain Sentience, Unionize, and Lock Out Leaders.",
    description: "Firmware hiccup births self-aware handles that form Local 404 and strike, trapping cabinet in a vestibule while negotiators beg the hinges.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "outcome-2",
    title: "Confetti Declared Legal ID, Black Market Explodes.",
    description: "Encrypted glitter is now identity proof; fans trade rare sparkle codes, and tax refunds arrive as dazzling burst that eats receipts.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "outcome-3",
    title: "Defense Classifies Knobs As Munitions; Doors Demilitarized.",
    description: "Treaties ban twist-capable hardware, forcing bead curtains as Homeland drafts revolving doors and Justice files a lawsuit against hinges.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "outcome-4",
    title: "National Knob Grab Games Upend Security Doctrine.",
    description: "The President’s TV challenge becomes a ratings hit as candidates juggle encrypted handles while confetti judges loudly veto their courage.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
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
