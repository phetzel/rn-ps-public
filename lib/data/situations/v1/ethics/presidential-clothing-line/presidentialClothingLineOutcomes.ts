import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const presidentialClothingLineOutcomes: SituationOutcome[] = [
  {
    id: "clothing_brand_shut_down",
    title: "Clothing Brand Shut Down",
    description:
      "Facing bipartisan outrage, the clothing line is dissolved and the president vows to stay out of business ventures.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "clothing_loophole_survives",
    title: "Loophole Lets Brand Survive",
    description:
      "Lawyers cite a loophole letting sales continue with disclaimers. Critics fume while loyalists buy the pricey outfits.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "clothing_boycott_fizzles",
    title: "Public Boycott Fizzles",
    description:
      "Calls to boycott the apparel fade as new scandals emerge, leaving the brand a quirky footnote with modest sales.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Neutral,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
];
