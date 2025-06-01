import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const cryptoNationalCurrencyOutcomes: SituationOutcome[] = [
  {
    id: "freedom_coin_fiasco_proposal_shelved",
    title: "'FreedomCoin' Quietly Shelved",
    description:
      "After market jitters and expert scorn, Treasury says the 'FreedomCoin' idea will stay in 'indefinite research' limbo.",
    weight: 50,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.Positive,
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.Positive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Neutral,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "freedom_coin_fiasco_market_panic",
    title: "Market Panic and Capital Flight",
    description:
      "The rollout talk triggers a sharp stock plunge and rush to safer foreign currencies, drawing ridicule in global headlines.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.StronglyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "freedom_coin_fiasco_underground_success",
    title: "FreedomCoin Gains Underground Fame",
    description:
      "Though officially buried, a fan version booms among crypto buffs and dissidents, spawning a quirky underground culture.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
