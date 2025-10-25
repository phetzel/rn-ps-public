import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const nationalMossMonetizationPlanOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Treasury Adopts Damp Standard, Yards Become Banks.",
    description: "Treasury pegs currency to certified moss mass, triggering backyard vaults and neighborhood humidifier runs as credit farms sprout.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Homeland Launches Spore Marshals and Leaf No-Fly List.",
    description: "Homeland deploys Spore Marshals to curb moss rustling, banning leaf blowers and deputizing HOA watering can brigades nationwide.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Justice Busts Terrarium Cartel for Moss Laundering.",
    description: "Prosecutors unveil a terrarium cartel laundering credits through decorative jars, as judges litigate the personhood of dampness.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Moss Unionizes, Wins Dew Breaks and Voting Precincts.",
    description: "Moss forms United Fronds, staging a stay-in that immobilizes benches, while election maps add 'Shade Districts' to court their vote.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
