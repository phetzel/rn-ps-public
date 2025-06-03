import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const memeStockFederalReserveOutcomes: SituationOutcome[] = [
  {
    id: "msfr_plan_retracted",
    title: "Meme-Stock Plan Swiftly Retracted",
    description:
      "Facing bipartisan outrage, the Fed shelves its meme portfolio as a 'misread pilot.' Markets exhale, but credibility still takes a dent.",
    weight: 50,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Neutral,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "msfr_market_whiplash",
    title: "Market Whiplash and Meme Crash",
    description:
      "The Fed’s buy-then-dump spree spikes meme tickers, then wipes retail accounts. Hearings brand policy a fiscal casino experiment.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "msfr_unexpected_profit",
    title: "Fed Banks Windfall on Memes",
    description:
      "Against the odds, meme holdings moon. The surprise profit trims the deficit, though economists cringe at the lucky gamble turned precedent.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
