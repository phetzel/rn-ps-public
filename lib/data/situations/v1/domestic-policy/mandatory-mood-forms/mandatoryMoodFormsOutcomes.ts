import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const mandatoryMoodFormsOutcomes: SituationOutcome[] = [
  {
    id: "mmf_program_retracted",
    title: "Program Swiftly Retracted",
    description:
      "Facing overwhelming public backlash and logistical chaos, the administration quickly scraps the mood form initiative entirely.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
  {
    id: "mmf_program_scaled_mocked",
    title: "Program Scaled Back, Still Mocked",
    description:
      "Forms simplified, made voluntary; initiative remains a symbol of government absurdity and is widely mocked online by many.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "mmf_stubborn_rollout_noncompliance",
    title: "Stubborn Rollout, Mass Non-Compliance",
    description:
      "Administration pushes ahead, leading to mass non-compliance, protests, and a black market for forged 'happy mood' forms daily.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.StronglyNegative,
        },
      },
    },
  },
];
