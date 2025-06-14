import {
  CabinetStaticId,
  SubgroupStaticId,
  SituationConsequenceWeight,
  SituationOutcome,
} from "~/types";

export const cheeseTariffWarOutcomes: SituationOutcome[] = [
  {
    id: "ctw_tariffs_eased",
    title: "Tariffs Eased via Talks",
    description:
      "Both nations agree to phase out the new duties after backchannel talks, and dairy exports rebound quickly.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Positive,
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
  {
    id: "ctw_farmers_hurt",
    title: "Tit-for-Tat Tariffs Hurt Farmers",
    description:
      "Dairystan doubles tariffs, our own escalate, and farmers on both sides face mounting losses as markets dry up.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Treasury]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RuralResidents]: SituationConsequenceWeight.Negative,
          [SubgroupStaticId.BusinessLeaders]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "ctw_cheese_pride",
    title: "Public Rallies Behind Cheese Pride",
    description:
      "Nationalists launch a 'Cheese Strong' campaign. Despite tariffs, domestic support surges and local producers see sales bumps.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.RightWingBase]: SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
];
