import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const stockMarketNowAcceptsHugsOutcomes: SituationOutcome[] = [
  {
    id: "hug-peg",
    title: "Ministry Pegs Hugs To Three Pats Per Smile.",
    description: "Affection floor set by the Ministry of Tender Finance, while Health & Hugs enforces consent audits with confetti clipboards.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "algo-applause",
    title: "High-Five Algorithms Create Infinite Applause Loop.",
    description: "Robotic brokers auto-high-five back and forth forever, melting servers into queso; emergency nacho break declared by the cuddle czar.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "quilt-index",
    title: "Index Fund Becomes Giant Warm Quilt, Rallies.",
    description: "Investors literally wrap themselves in the market; yields measured in coziness points eclipse bonds, causing a nationwide pajama bull run.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
