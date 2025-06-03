import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const nationalNapProductivityActOutcomes: SituationOutcome[] = [
  {
    id: "nap_program_paused_review",
    title: "Mandatory Nap Plan Paused",
    description:
      "After loud employer pushback, the administration pauses the nap mandate for a six-month cost-benefit review.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
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
    id: "nap_workplace_uproar_fines",
    title: "Workplace Uproar and Fines",
    description:
      "Firms refusing to build nap pods rack up penalties; viral videos show managers yanking blankets, sparking nationwide ridicule.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Justice]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.TechIndustry]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "nap_productivity_bump_success",
    title: "Nationwide Siestas Boost Output",
    description:
      "Surveys reveal rested workers; quarterly productivity ticks up 4 %, and global media hail America’s ‘Siesta Surprise.’",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.LaborUnions]: SituationConsequenceWeight.Positive,
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
