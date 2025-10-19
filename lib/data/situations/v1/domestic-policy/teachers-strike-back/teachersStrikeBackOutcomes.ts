import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const teachersStrikeBackOutcomes: SituationOutcome[] = [
  {
    id: "outcome_strike_wellness_focus",
    title: "Strike Ends with Student Wellness Initiative",
    description:
      "The administration drops karaoke but launches a comprehensive student mental health program, ending the strike with broad support.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_strike_security_crisis",
    title: "Prolonged Strike Creates Public Safety Crisis",
    description:
      "With schools closed nationwide, unsupervised teens cause chaos while stressed families overwhelm social services.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.LaborUnions]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "outcome_strike_karaoke_compromise",
    title: "Karaoke Becomes Optional Arts Enrichment",
    description:
      "A face-saving compromise makes interpretive dance voluntary while increasing arts funding, satisfying most parties.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
