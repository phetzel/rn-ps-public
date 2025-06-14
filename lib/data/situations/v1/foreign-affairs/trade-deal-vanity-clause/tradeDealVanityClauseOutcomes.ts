import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const tradeDealVanityClauseOutcomes: SituationOutcome[] = [
  {
    id: "trade_deal_clause_dropped",
    title: "Clause Dropped, Deal Saved",
    description:
      "Mocked for vanity, the President withdraws the name request. The deal is signed and a small plaza gets a nickname to humor him.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "trade_deal_collapses",
    title: "Deal Collapses Over Name Spat",
    description:
      "Refusing to drop the clause, the President storms out. The partner nation walks away from the trade talks, straining relations.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "trade_deal_plaza_compromise",
    title: "Plaza Renaming Compromise",
    description:
      "Negotiators salvage the deal by naming a city plaza after the President instead of the capital. The compromise is mocked but relations hold.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.Neutral,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
