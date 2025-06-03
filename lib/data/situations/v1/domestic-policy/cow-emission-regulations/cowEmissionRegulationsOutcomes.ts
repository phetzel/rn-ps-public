import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const cowEmissionRegulationsOutcomes: SituationOutcome[] = [
  {
    id: "cer_program_paused",
    title: "Backpack Program Delayed",
    description:
      "Farmer protests force a six-month review of the methane-capture rule while subsidy details are revised.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "cer_farm_rebellion",
    title: "Farm Rebellion & Shortages",
    description:
      "Widespread refusal to use backpacks leads to fines, milk shortages, and viral images of ‘naked cows.’",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
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
    id: "cer_eco_brand_success",
    title: "Eco-Brand Boosts Exports",
    description:
      "Backpacked cattle earn ‘Low-Burp Beef’ label, winning big overseas contracts and surprising profits for compliant ranchers.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.Positive,
        },
      },
    },
  },
];
