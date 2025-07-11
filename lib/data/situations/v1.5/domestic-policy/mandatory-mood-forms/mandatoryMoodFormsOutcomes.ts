import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const mandatoryMoodFormsOutcomes: SituationOutcome[] = [
  {
    id: "outcome_mood_retracted",
    title: "Program Swiftly Retracted After Outcry",
    description:
      "The public and civil liberties groups react with such fury and mockery that the administration scraps the entire program.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "outcome_mood_non_compliance",
    title: "Stubborn Rollout Met with Mass Non-Compliance",
    description:
      "The administration pushes forward, but millions refuse to comply or submit joke forms. The program becomes an unenforceable laughingstock.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_mood_scaled_back",
    title: "Program Becomes Opt-In 'Wellness Survey'",
    description:
      "After the backlash, the mandatory aspect is dropped. It's rebranded as a voluntary 'wellness' survey largely ignored by the public.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
