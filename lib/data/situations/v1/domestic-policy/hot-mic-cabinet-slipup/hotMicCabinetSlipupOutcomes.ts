import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const hotMicCabinetSlipupOutcomes: SituationOutcome[] = [
  {
    id: "hmc_brushed_off",
    title: "Slip-up Brushed Off Quickly",
    description:
      "Treasury clarifies comment as ‘old draft banter’; story fades after two news cycles and markets stay steady.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
  {
    id: "hmc_markets_dip",
    title: "Markets Dip on ‘Teapot’ Quip",
    description:
      "Investors spook; index slides three percent before clawing back. Critics accuse admin of amateur hour.",
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
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "hmc_plan_rebranded",
    title: "Plan Rebranded & Improved",
    description:
      "Team seizes the gaffe to relaunch policy as ‘Stainless-Steel Teapot Plan’ with clearer metrics, winning cautious praise.",
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
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
