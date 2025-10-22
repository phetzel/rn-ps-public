import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const mandatoryBackyardGlacierPlanOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Justice Sues the Sun, Wins by Default at Dawn.",
    description: "Court issues a restraining order on solar rays; marshals erect a giant lampshade over noon, slightly dimming morale and summers.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Treasury Debuts Cold Hard Cash That Is Ice.",
    description: "To fund backyard glaciers, the Mint prints freezing bills that melt at room temp; economists cheer as inflation literally drips away.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Door‑to‑Door Ice Brigades Woo Youth Voters.",
    description: "Teen volunteers deliver artisanal glaciers with branded mittens; polling surges as selfies with Grumpy Ice Number 12 trend nonstop.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o4",
    title: "Homeowners Declare Sovereign Ice States for Perks.",
    description: "To dodge liability, cul‑de‑sacs secede into Frozen Micro‑Republics; Justice sues, Treasury taxes them in snow cones only.",
    weight: 25,
    consequences: {
      approvalChanges: {
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
