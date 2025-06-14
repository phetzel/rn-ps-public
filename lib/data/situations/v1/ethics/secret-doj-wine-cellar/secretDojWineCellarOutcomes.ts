import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const secretDojWineCellarOutcomes: SituationOutcome[] = [
  {
    id: "cellar_auction_goodwill",
    title: "Cellar Auctioned; Goodwill",
    description:
      "The hidden wine is sold off and proceeds go to charity, earning modest goodwill as the story cools down.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "cellar_media_firing",
    title: "Media Circus and Firing",
    description:
      "Revelations spark a media frenzy, leading to a high-level firing and debates over government perks.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "cellar_story_fades",
    title: "Public Bored; Story Fades",
    description:
      "Despite stern talk in Congress, public interest quickly fades and little policy change follows.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
