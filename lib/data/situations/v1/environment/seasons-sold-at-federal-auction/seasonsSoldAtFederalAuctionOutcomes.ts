import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const seasonsSoldAtFederalAuctionOutcomes: SituationOutcome[] = [
  {
    id: "autumn_spice",
    title: "Hedge Funds Nationalize Pumpkin Spice Season.",
    description: "A hedge bloc buys Fall and rations foliage at auction; Treasury-ish Ministry issues gourd-backed notes as Justice-ish Bureau sues Sept LLC.",
    weight: 25,
    consequences: {
      approvalChanges: {
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "groundhog_marshals",
    title: "Groundhogs Sworn In As Season Marshals.",
    description: "Department of Homeland Seasons deputizes groundhogs to check illegal snow; seized breezes whine on tarmac while blizzards apply for visas.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "august_46",
    title: "Emergency Swap Creates 46-Day August.",
    description: "A botched swap trades Summer for Tuesdays, melting the National Furniture Assembly as Equinox is named special counsel over calendar fraud.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "noa_spring",
    title: "Neighborhood Overlords Buy Exclusive Spring.",
    description: "The Neighborhood Overlords win Spring, impose pastel mandates and pollen fees; bees file a class action as tulips register as utilities.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
