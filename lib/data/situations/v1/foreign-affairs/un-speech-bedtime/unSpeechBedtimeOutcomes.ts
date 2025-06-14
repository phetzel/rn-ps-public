import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const unSpeechBedtimeOutcomes: SituationOutcome[] = [
  {
    id: "un_speech_apology_check",
    title: "Apology and Medical Check",
    description:
      "The President apologizes for dozing and schedules a health exam. Allies shrug and focus on policy again.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "un_speech_ridicule",
    title: "Global Ridicule Damages Clout",
    description:
      "Clips of the snooze spread worldwide. Critics mock the President as unfit, weakening his diplomatic influence.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "un_speech_humane_hours",
    title: "'Humane Hours' Movement Gains",
    description:
      "Calls grow for more humane summit hours, earning sympathy from some delegates and overshadowing the gaffe.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.HHS]: SituationConsequenceWeight.SlightlyPositive,
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.SeniorsCitizens]: SituationConsequenceWeight.Neutral,
        },
      },
    },
  },
];
