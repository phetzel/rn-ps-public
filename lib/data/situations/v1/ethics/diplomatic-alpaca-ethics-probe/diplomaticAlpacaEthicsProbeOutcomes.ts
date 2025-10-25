import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const diplomaticAlpacaEthicsProbeOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Ethics Board Subpoenas Alpaca Translator.",
    description: "Probe stalls as translators fight over the alpaca 'spiritual snorts,' setting animal privilege precedent while pundits debate if cud counts.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Separation of Stable and State Act Passes.",
    description: "Law bans barnyard sacraments from policy, but exempts llamas by typo, triggering a furious camelid identity crisis on talk shows.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Embassy Declared Hybrid Sanctuary Farm.",
    description: "To dodge ethics, the compound becomes a 'sovereign meadow,' forcing suits into hoof-shoe protocol and replacing per diems with hay stipends.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.UrbanResidents]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o4",
    title: "Alpaca Granted Interim Acting Ethics Czar.",
    description: "In a unity move, the alpaca is appointed to oversee itself, promptly issuing a memo in cud that clears everyone and demands more sprinklers.",
    weight: 20,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.LeftWingBase]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
