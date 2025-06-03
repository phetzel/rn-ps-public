import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const nationalCoffeeReserveOutcomes: SituationOutcome[] = [
  {
    id: "ncr_price_shock_buffered",
    title: "Reserve Buffers Global Price Shock",
    description:
      "Frost in Brazil sends prices soaring, but reserve releases keep café costs stable; program hailed as a jitter-free success.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "ncr_spoilage_scandal",
    title: "Spoilage Scandal Brews Moldy Mess",
    description:
      "Poor humidity controls ruin huge stockpiles; headlines scream ‘mold reserve’ as taxpayers swallow the waste bill and lawsuits fly.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "ncr_global_glut_price_crash",
    title: "Global Glut Sparks Coffee Price Crash",
    description:
      "Ideal harvests and reserve hoarding oversupply the market; farmers protest rock-bottom prices while consumers cheer cheap lattes.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Neutral,
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
];
