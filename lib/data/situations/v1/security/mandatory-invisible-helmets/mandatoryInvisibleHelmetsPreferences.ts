import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const mandatoryInvisibleHelmetsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Admit,
    rationale: "I approved 'invisible helmets' thinking it was a metaphor for optimism. Now I'm stuck explaining see-through head domes to baffled clouds."
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Reassure the public the helmets are invisible because the danger is rude. They block unauthorized breezes and gossip lasers without rumpling hair."
      },
      authorizedContent: "Counterfeit helmets shed glitter that jams security scanners. We will recall those lots by Friday at 4 p.m.; if highlighted now, copycats may pivot and become harder to trace."
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale: "Challenge skeptics: if you can see the helmet, it's defective or ours. We tested them against loud geese and polite drones in a windy barn."
      }
    }
  }
};
