import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const nationalCompostDiplomacyOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Worm Ambassadors Top Polls; Humans Demand Mulch.",
    description: "The Ministry replaces briefings with damp leaf piles as worm envoys soar, while the President answers in worm time to compost hard news.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Treasury Pegs Currency To Bananas By Mistake.",
    description: "A soil-credit spreadsheet sorts by potassium, tying interest rates to banana ripeness while fruit flies become honorary auditors in vests.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Micronations Form Dirt Bloc, Annex a Sandbox.",
    description: "Certified soil exports unify a dozen backyard states that peacefully annex a sandbox, issuing passports stamped with damp handprints.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Legal Loophole Gives Houseplants the Franchise.",
    description: "An accord clause recognizing soil communities grants voting rights to ficus pots; turnout jumps as poll sites install misting nozzles.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
