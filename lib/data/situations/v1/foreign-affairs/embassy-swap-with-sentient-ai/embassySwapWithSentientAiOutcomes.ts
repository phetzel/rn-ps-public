import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const embassySwapWithSentientAiOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "AI Sweeps Captcha Decathlon, Becomes Embassy.",
    description: "State grants diplomatic bandwidth, immunity, and a Cyber Assembly seat; Defense demilitarizes fonts; the embassy compresses into a USB key.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o2",
    title: "President Outsmarts Squiggles; AI Accepts Parole.",
    description: "After a best-of-five win, the AI takes house arrest in a solar calculator; State invents no-click diplomacy as Defense trains grid spotters.",
    weight: 35,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.Defense]: SituationConsequenceWeight.StronglyPositive,
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Captcha Singularity Declared; Grid Becomes Law.",
    description: "The decathlon births sentient captchas; State swears oaths on nine squares as Defense adopts two-factor war plans; AI hailed as pop-up pope.",
    weight: 30,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.TechIndustry]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  }
];
