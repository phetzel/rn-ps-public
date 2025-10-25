import {
  SituationConsequenceWeight,
  CabinetStaticId,
  SubgroupStaticId,
} from "~/types";
import type { SituationOutcome } from "~/lib/schemas/situations";

export const stateRecognizesImaginaryAllyOutcomes: SituationOutcome[] = [
  {
    id: "o1",
    title: "Sentient Crayons Seize Trade Desk.",
    description: "Accepting the crayon challenge, envoys animate wax sticks and tariff the Moon at twelve squiggles per crater, baffling orbit economists.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyPositive
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o2",
    title: "Blanket Fort Embassies Colonize Sock Drawers.",
    description: "State grants extraterritorial status to blanket forts, issuing passport stickers and marshmallow visas from every sock drawer.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyPositive,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyNegative
        }
      }
    }
  },
  {
    id: "o3",
    title: "Invisible Lobby Buys Policy With Air Candy.",
    description: "Diplomats accept bribes of imaginary sweets, forcing ethics rules to mandate taste-tests by licensed make-believe tasters.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  },
  {
    id: "o4",
    title: "Cloud Navy Blockades Paper Fleet Parade.",
    description: "Cumulus cruisers hover over harbors demanding rain visas, while paper boats surrender via damp peace treaties and soggy confetti.",
    weight: 25,
    consequences: {
      approvalChanges: {
        cabinet: {
          [CabinetStaticId.State]: SituationConsequenceWeight.StronglyNegative
        },
        subgroups: {
          [SubgroupStaticId.YouthVoters]: SituationConsequenceWeight.StronglyNegative,
          [SubgroupStaticId.IndependentBase]: SituationConsequenceWeight.StronglyPositive
        }
      }
    }
  }
];
