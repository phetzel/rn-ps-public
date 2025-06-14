import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const virtualRealityEspionageOutcomes: SituationOutcome[] = [
  {
    id: "vre_spy_network_shut_down",
    title: "Spy Network Shut Down",
    description:
      "Defense investigators expose a covert data siphon in the VR servers, shutting it down and praising their quick response.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "vre_gamer_distrust_gov",
    title: "Gamer Distrust of Government Grows",
    description:
      "Gamers worry the government spied on them or failed to protect them, leading to protests and a plunge in headset sales.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.Defense]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "vre_security_treaty",
    title: "New VR Security Treaty",
    description:
      "International partners sign a VR privacy treaty requiring game companies to disclose data use and share threat intelligence.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
