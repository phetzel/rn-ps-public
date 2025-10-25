import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const ethicsBoardElectsPuppetMayorOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Court Declares Strings A Form Of Disclosure.",
    description: "Justice Cabinet rules the puppet legal if strings are visible, as the Executive insists it's a civic metronome with very public strings.",
    weight: 28,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Union Strike Replaces Governance With Mimes.",
    description: "City workers refuse to move anything with strings; silent crews run policy via invisible boxes as Homeland drafts Stagehand Reserves.",
    weight: 27,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Youth Revolt Elects Sourdough Deputy.",
    description: "Hashtag #CutTheStrings backfires when an algorithm crowns fermented starter as deputy, citing zero ties and excellent rise time.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Ethics Board Monetizes Civic Strings.",
    description: "Selling accountability cords as crypto, the board funds glossy PSAs while Justice sues for fraud and Homeland bans tangling wallets.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
