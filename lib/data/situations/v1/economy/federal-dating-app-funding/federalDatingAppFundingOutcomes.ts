import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const federalDatingAppFundingOutcomes: SituationOutcome[] = [
  {
    id: "fdaf_app_goes_viral",
    title: "App Goes Viral, Boosts Morale",
    description:
      "‘Patriot Match’ hits ten million downloads; ad revenue offsets costs and morale memes flood social media praising bipartisan love.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "fdaf_data_breach_scandal",
    title: "Massive Data Breach Scandal",
    description:
      "Hackers leak flirt logs and selfies; Congressional hearings grill officials as users delete accounts in droves.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "fdaf_program_shelved_mockery",
    title: "Program Shelved After Mockery",
    description:
      "Late-night hosts roast the ‘government romance service’; sign-ups stagnate and funding quietly expires after one fiscal year.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
];
