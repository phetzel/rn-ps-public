import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const treasuryInsiderTradingOutcomes: SituationOutcome[] = [
  {
    id: "outcome_trading_guilty_verdict",
    title: "Guilty Verdict, Officials Resign in Disgrace",
    description:
      "The investigation finds clear evidence of wrongdoing. Several high-level Treasury officials are charged and resign, creating a massive political scandal.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "outcome_trading_cleared",
    title: "Ethics Board Clears Officials of Wrongdoing",
    description:
      "A formal ethics investigation concludes the trades were coincidental and not based on non-public information. The officials are cleared.",
    weight: 30,
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
    id: "outcome_trading_hung_jury",
    title: "Probe Ends, but Public Trust Erodes",
    description:
      "The official investigation is inconclusive, citing a lack of direct evidence. No one is charged, but the public remains deeply suspicious.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
