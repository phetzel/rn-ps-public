import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const universalBasicSnackIncomeOutcomes: SituationOutcome[] = [
  {
    id: "ubsi_healthier_snacks",
    title: "Snack Stamps Fuel Healthier Habits",
    description:
      "Program rolls out smoothly; vendors compete with high-protein treats, and early data show modest drops in afternoon fatigue rates.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "ubsi_junk_black_market",
    title: "Snack Credits Spawn Junk Black Market",
    description:
      "Recipients trade credits for cash; cheap sugar floods shelves and obesity headlines dominate evening news across the nation.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.StronglyNegative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Neutral,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "ubsi_program_cancelled",
    title: "Program Cancelled Amid Cost Panic",
    description:
      "Budget hawks scrap the snack stipend after costs spike; disappointed citizens vent online and snack makers lobby for revival.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.Negative,
        },
      },
    },
  },
];
