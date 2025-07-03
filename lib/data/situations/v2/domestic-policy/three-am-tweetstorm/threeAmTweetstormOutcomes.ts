import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const threeAmTweetstormOutcomes: SituationOutcome[] = [
  {
    id: "outcome_tweetstorm_walked_back",
    title: "Tweets Walked-Back, Story Fades",
    description:
      "Aides successfully claim the President's account was compromised or that it was a joke. The story fades quickly in a busy news cycle.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "outcome_tweetstorm_fuels_distrust",
    title: "Conspiracy Trend Fuels Public Distrust",
    description:
      "The wild claims are taken seriously by some, fueling new conspiracy theories and eroding public trust in institutions.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Defense]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_tweetstorm_viral_meme",
    title: "'Spy Birds' Meme Goes Viral",
    description:
      "The absurdity of spy birds becomes a massive internet meme, making the President seem both bizarre and weirdly relatable.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
