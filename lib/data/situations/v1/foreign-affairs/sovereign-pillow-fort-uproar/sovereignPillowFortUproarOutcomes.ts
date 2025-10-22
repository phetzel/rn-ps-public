import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const sovereignPillowFortUproarOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Fort-Off Victory Spurs Sofa-Warfare Doctrine.",
    description: "The President's fort triumph makes Defense adopt amphibious ottomans, while State recognizes the fort as a roaming embassy that drifts.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Static-Lit Fort Gains Sentience, Demands Treaties.",
    description: "A static surge animates the pillow-fort, which negotiates itself; sanctions become a blanket embargo, chilling offices and warming polls.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Nation Governs Via Prime-Time Fort-Off League.",
    description: "The public fort-off becomes a ratings behemoth; policy is now bylaws of the Fort-Off League, judged by pillow physics and snack sponsors.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Pool Noodle Fleet Accidentally Rewrites Sea Law.",
    description: "Defense tests noodle escorts around Toy Isle; currents shove noodle armadas into maps, and mappers adopt the Pillow Code as maritime law.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
