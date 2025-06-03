import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const inflationControlMisfireOutcomes: SituationOutcome[] = [
  {
    id: "emoji_dollar_project_scrapped",
    title: "Emoji Dollar Project Scrapped",
    description:
      "After ridicule and vendor refusal, Treasury halts emoji bills and reprints standard notes within days.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "emoji_dollar_market_volatility",
    title: "Markets Wobble on Novel Bills",
    description:
      "Forex desks dump dollars; stock index dips four percent before Fed statements stabilize trading.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "emoji_dollar_collectors_hit",
    title: "Collectors Love Emoji Bills",
    description:
      "Limited notes fetch big premiums online; tourism boards tout ‘smile money’ as quirky Americana export.",
    weight: 25,
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
