import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const triCabinetCandleCartelOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Bathtub Trial Declares Candles 'Mostly Guilty'",
    description: "Skunk boycotts on Fumes Guild advice; the bathtub wins a Bubble Senate seat in Sudsia, and candles appeal to the Supreme Aroma.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "Ethics Probe Replaced by Olfactory Parliament",
    description: "Investigation morphs into a bicameral nose legislature; State drafts the Notes-of-Cedar Accord as committee sneezes out subpoenas.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Defense Deploys Scent Shield, Invokes Nose Codes",
    description: "Defense unveils tactical potpourri, fogs Sniffovia's noses; generals earn ambiance medals while maps are redrawn by waft patterns.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o4",
    title: "Justice Issues Plea Deal: Community Sniffing",
    description: "Offenders must host mandatory smelling circles; pardons downgraded to weak sachets, which immediately unionize and demand better drawers.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
