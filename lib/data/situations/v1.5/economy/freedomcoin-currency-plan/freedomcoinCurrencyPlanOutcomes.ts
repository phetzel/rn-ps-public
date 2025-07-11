import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const freedomcoinCurrencyPlanOutcomes: SituationOutcome[] = [
  {
    id: "outcome_freedom_coin_panic",
    title: "Market Panic and Capital Flight Ensue",
    description:
      "The announcement triggers a massive sell-off of the dollar. Investors flee to stabler currencies, causing economic chaos and ridicule.",
    weight: 45,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "outcome_freedom_coin_shelved",
    title: "'FreedomCoin' Plan Quietly Shelved",
    description:
      "After facing unanimous condemnation from financial experts and allies, the administration is forced to 'indefinitely postpone' the plan.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_freedom_coin_underground",
    title: "FreedomCoin Becomes Niche Success",
    description:
      "While the official plan flops, FreedomCoin gains a cult following among tech enthusiasts, becoming a popular alternative currency.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
