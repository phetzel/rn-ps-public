import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const presidentialHistoryMixUpOutcomes: SituationOutcome[] = [
  {
    id: "phm_gaffe_fades",
    title: "Gaffe Fades in 48 Hours",
    description:
      "Press moves on after quick correction; late-night hosts milk a few jokes, then attention shifts elsewhere.",
    weight: 45,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Neutral,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "phm_historian_backlash",
    title: "Historian Backlash Lingers",
    description:
      "Scholars demand better fact-checking; memes of ‘Founding-Fi’ trend, denting administration’s credibility for weeks.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "phm_edu_campaign_spin",
    title: "Turns into Edu-Campaign Win",
    description:
      "White House launches ‘Real Inventors Week’; museums partner for STEM push, earning unexpected public-relations points.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.Positive,
        },
      },
    },
  },
];
