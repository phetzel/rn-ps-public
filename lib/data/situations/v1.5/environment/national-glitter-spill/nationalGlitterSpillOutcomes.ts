import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const nationalGlitterSpillOutcomes: SituationOutcome[] = [
  {
    id: "outcome_glitter_contained",
    title: "Spill Contained, Ecosystem Recovers",
    description:
      "A rapid cleanup operation led by Homeland Security contains the spill. The biodegradable glitter breaks down with minimal damage.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.UrbanResidents]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "outcome_glitter_mess",
    title: "Protracted Ecological Mess",
    description:
      "The cleanup is botched and the glitter spreads throughout the watershed, harming wildlife and tainting water supplies for months.",
    weight: 45,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RuralResidents]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_glitter_tourist_trap",
    title: "Glitter River Becomes Tourist Trap",
    description:
      "The sparkly river becomes a bizarre tourist attraction and social media sensation. The company sponsors the cleanup with PR flair.",
    weight: 20,
    consequences: {
      approvalChanges: {
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
