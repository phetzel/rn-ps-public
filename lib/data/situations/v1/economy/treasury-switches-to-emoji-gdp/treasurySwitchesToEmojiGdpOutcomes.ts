import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const treasurySwitchesToEmojiGdpOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Ledger Lane Hires Emoji Whisperers En Masse.",
    description: "Indices become curated sticker packs; traders debate if 😂🍞🐻 means recession or lunch, while meme-economists demand tenure.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Nationwide Strike Becomes Picket Line Of Emojis.",
    description: "Workers peg pay to the 🍕🛠️ basket; arbitration hinges on whether extra sparkle counts as time-and-a-half or just enthusiastic labor.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Defense Accidentally Declares War On Ambiguous Shrug.",
    description: "Briefings render threats as 🤷; generals mobilize against medium-gesture adversaries while contractors sell camo-emoji to bewildered brass.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Scratch-and-Sniff Currency Triggers Scentflation Spiral.",
    description: "Markets hoard minty bills; the new 'mmm' index soars, so Treasury prints unscented beige notes, collapsing demand and everyone's sinuses.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
