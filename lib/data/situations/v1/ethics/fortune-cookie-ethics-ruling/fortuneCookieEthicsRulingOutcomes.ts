import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const fortuneCookieEthicsRulingOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Biscotti Briefs Trigger Pastry Constitutional Crisis.",
    description: "President files biscotti rebuttals; Justice sues the biscotti; Homeland raids ovens as HHS warns soy dipping cups may be evidence.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Quantum Cookies Hide Entire Lobbyist Ballrooms.",
    description: "Loophole packs symbolic yachts into fortunes; Homelandish adds crumb scanners as HHS-Like warns of choking; the President’s biscotti bounce.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Ethics Board Translates Fortunes Into BribeMath.",
    description: "To clarify, the board issues a Fortune-to-Gift chart; HHS-Like assigns fiber, Justice-Like sues irony, and biscotti rebuttals get review.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
