import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const fashionDiplomacyFlubOutcomes: SituationOutcome[] = [
  {
    id: "fashion_flub_laugh_off",
    title: "Host Nation Laughs It Off",
    description:
      "Officials chuckle at the mix-up, praising the President's good humor. Cultural exchange events proceed smoothly.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
  {
    id: "fashion_flub_crisis",
    title: "Cultural Insult Crisis",
    description:
      "Traditionalists denounce the backward robe as disrespectful, fueling protests and calls for a formal apology.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "fashion_flub_trend",
    title: "Robe Fashion Trend Goes Viral",
    description:
      "Photos of the reversed robe spark a quirky fashion craze online. Youth engagement with diplomacy unexpectedly surges.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
