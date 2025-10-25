import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const nationalMoodRingMandateOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Ministry of Moneycolor Declares 'Auditable Vibes' Currency.",
    description: "Ministry of Moneycolor pegs tax refunds to ring hue; black-market microwave tan hacks surge as Vibe Auditors raid craft stores.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Nationwide Sync Glitch Turns All Rings Beige.",
    description: "A solar burp makes every ring read 'meh', freezing benefits. President hosts a vibe-decathlon, twelve rings per hand, to reboot morale.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Mood Rings Unionize, Form Breakaway 'Ringress'.",
    description: "Sentient bands roll off fingers, demand a Mood Bill of Rights, and subpoena the President’s extra 24 for unfair vibe monopolization.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
