import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const internetCurfewProposalOutcomes: SituationOutcome[] = [
  {
    id: "icp_proposal_shelved",
    title: "Curfew Shelved After Uproar",
    description:
      "Public backlash and civil-liberty lawsuits kill the idea within a week; focus shifts to optional ‘digital quiet hours.’",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]:
            SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Positive,
        },
      },
    },
  },
  {
    id: "icp_voluntary_night_mode",
    title: "Voluntary Night-Mode Rollout",
    description:
      "Government swaps mandate for ISP opt-in ‘bedtime banner’; health groups cheer, critics still poke fun.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.LeftWingBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "icp_wifi_blackmarket",
    title: "Wi-Fi Black-Market Boom",
    description:
      "Underground hotspots thrive after curfew enforcement, spawning memes, fines, and midnight router chases.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Homeland]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RuralResidents]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
