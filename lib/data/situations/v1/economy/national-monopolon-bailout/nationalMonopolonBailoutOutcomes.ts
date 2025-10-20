import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const nationalMonopolonBailoutOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Thimble Crushes President in AM Radio Debate",
    description: "After a live thimble debate, markets crown metal. Treasury installs it as Monopolon CEO while HHS and Homeland grant it a tiny motorcade.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Nation Declares Cardboard a Strategic Mineral",
    description: "Treasury nationalizes Monopolon; Homeland launches Dice TSA; HHS treats bent-corner syndrome as an epidemic of feelings.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Game Boards Unionize, Shoe Token Leads Strike",
    description: "Monopolon pieces walk off tables and demand hazard pay. Treasury bargains as HHS prescribes naps, while Homeland bubble-wraps Boardwalk.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
