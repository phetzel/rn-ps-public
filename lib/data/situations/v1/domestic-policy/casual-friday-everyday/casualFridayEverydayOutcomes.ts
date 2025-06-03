import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const casualFridayEverydayOutcomes: SituationOutcome[] = [
  {
    id: "cfe_chaos_contained",
    title: "Dress-Code Chaos Contained",
    description:
      "Clear guidelines calm confusion. Staff enjoy comfort; no security lapses occur, and productivity holds steady.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
  {
    id: "cfe_pajama_productivity_plunge",
    title: "Pajama Productivity Plunge",
    description:
      "Confusion reigns: video meetings in dinosaur onesies, missed deadlines, and a viral hashtag about sleepy bureaucrats.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "cfe_comfy_government",
    title: "Nation Loves Comfy Government",
    description:
      "Public embraces the vibe; fashion brands sponsor agencies, and morale surveys hit record highs.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Positive,
        },
      },
    },
  },
];
