import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const globalBuffetIncidentOutcomes: SituationOutcome[] = [
  {
    id: "gbi_hosts_appease",
    title: "Hosts Apologize, Summit Resumes",
    description:
      "After quick negotiations, hosts rustle up cheeseburgers and the President returns. Talks continue with a few eye rolls.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "gbi_walkout",
    title: "Diplomats Stage Walkout",
    description:
      "Insulted by the tantrum, several delegations leave the summit. The agenda collapses and relations cool.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "gbi_burger_brand",
    title: "Fast-Food Chain Sponsors Peace",
    description:
      "A burger brand offers catering for the summit, turning the fiasco into a quirky marketing win and rebooting talks.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
];
