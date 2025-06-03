import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const bananaImportTariffWarOutcomes: SituationOutcome[] = [
  {
    id: "bitw_tariff_retracted",
    title: "Tariff Retracted After Price Surge",
    description:
      "Grocery prices jump; social media explodes with #BananaGate. Under pressure, the tariff is scrapped within weeks.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "bitw_trade_retaliation",
    title: "Bananalandia Retaliates, Trade Slumps",
    description:
      "Counter-tariffs hit coffee and electronics; exporters howl, markets wobble, and diplomats scramble for a deal.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "bitw_domestic_banana_boom",
    title: "Domestic Banana Boom, Mixed Reviews",
    description:
      "Southern growers seize the moment; jobs rise but shoppers grumble at pricier produce. Tariff stays for now.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Neutral,
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]:
            SituationConsequenceWeight.Positive,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
