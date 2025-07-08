import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/types";

export const summitNameSlipUpOutcomes: SituationOutcome[] = [
  {
    id: "outcome_slip_up_meme",
    title: "'Faroutistan' Becomes a Viral Meme",
    description:
      "The summit-name flub explodes into memes. Gen-Z brands it peak cringe, but older viewers find the self-deprecation charming and oddly humanising.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.SeniorsCitizens]:
            SituationConsequenceWeight.SlightlyPositive,
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_slip_up_chill",
    title: "Diplomatic Chill with Farawaystan",
    description:
      "Farawaystan's leader takes the slip-up as disrespect, refusing bilateral talks and chilling relations.",
    weight: 40,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.Negative,
          [CabinetStaticId.Treasury]:
            SituationConsequenceWeight.SlightlyNegative,
        },
        subgroups: {
          [SubgroupStaticId.BusinessLeaders]:
            SituationConsequenceWeight.Negative,
          [SubgroupStaticId.RightWingBase]:
            SituationConsequenceWeight.SlightlyNegative,
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyNegative,
        },
      },
    },
  },
  {
    id: "outcome_slip_up_overblown",
    title: "Gaffe Quickly Forgotten, Relations Stable",
    description:
      "After a brief apology from the State Department, the international community moves on. The incident is seen as a minor, harmless blunder.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.SlightlyPositive,
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]:
            SituationConsequenceWeight.SlightlyPositive,
        },
      },
    },
  },
];
