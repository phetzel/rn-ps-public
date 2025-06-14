import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const socialMediaMindControlFearOutcomes: SituationOutcome[] = [
  {
    id: "smf_myth_busted",
    title: "Myth Busted; Calm Returns",
    description:
      "Experts debunk mind-control claims; downloads resume and the rumor fades from headlines.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Positive,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "smf_congressional_hearings",
    title: "Endless Hearings Drain Focus",
    description:
      "Lawmakers hold endless hearings about tech and mental health, keeping the rumor alive and slowing other legislative work.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Justice]: SituationConsequenceWeight.SlightlyNegative,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.Negative,
        },
      },
    },
  },
  {
    id: "smf_installs_plummet",
    title: "Installs Plummet; Economy Hit",
    description:
      "Users abandon the app en masse, spooking investors and hitting the digital economy hard despite lack of scientific proof.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Justice]: SituationConsequenceWeight.Negative,
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
