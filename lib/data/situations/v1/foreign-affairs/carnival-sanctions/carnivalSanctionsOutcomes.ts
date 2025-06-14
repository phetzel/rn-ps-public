import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const carnivalSanctionsOutcomes: SituationOutcome[] = [
  {
    id: "cs_apology_restores",
    title: "Apology Restores Carnival",
    description:
      "State issues a formal apology and the Isle lifts its clown ban, allowing the carnival to proceed with little lasting damage.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "cs_visa_bans",
    title: "Retaliatory Visa Bans",
    description:
      "The Isle of Mirth restricts U.S. tourists and other nations join the snub, slashing travel revenue and straining relations.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "cs_alt_carnival",
    title: "US Clowns Hold Alt-Carnival",
    description:
      "Snubbed performers launch an online 'Freedom Carnival.' It entertains fans but fuels tension with the island government.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
