import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const translatorMixUpOutcomes: SituationOutcome[] = [
  {
    id: "translator_mixup_clarified",
    title: "Clarified, Panic Fades",
    description:
      "Officials quickly release a corrected transcript, confirming no land deal. Markets and diplomats calm down within hours.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "translator_mixup_market_dip",
    title: "Market Jitters Over Sell-Alaska",
    description:
      "Confusion sparks rumors of territorial giveaway. Markets dip as traders fear a policy slip. Allies demand urgent clarification.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "translator_mixup_opposition_joke",
    title: "Opposition Spins 'Sell-Alaska' Joke",
    description:
      "Despite clarifications, opposition leaders turn the gaffe into a running joke, questioning the President's competence in speeches and ads.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
