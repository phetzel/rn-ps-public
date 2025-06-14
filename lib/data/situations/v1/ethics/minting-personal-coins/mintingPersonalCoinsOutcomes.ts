import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const mintingPersonalCoinsOutcomes: SituationOutcome[] = [
  {
    id: "coins_melted_apology",
    title: "Coins Melted, Apology",
    description:
      "Treasury melts the vanity coins and apologizes. The misstep fades after a brief burst of jokes.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "coins_collectors_hoard",
    title: "Collectors Hoard, Program Stays",
    description:
      "Coin collectors clamor for the limited run, turning it into an oddball success despite critics of vanity spending.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "coins_congress_bans",
    title: "Congress Bans Personalized Currency",
    description:
      "Outrage pushes Congress to forbid personalized money, embarrassing Treasury and limiting future mint promotions.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
