import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const protocolHugIncidentPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Downplay the hug as exuberant friendliness, blame jet lag, and pivot to policy achievements.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Sincere cultural apology to avoid diplomatic chill. Emphasize respect for Coldshoulderia's customs.",
      },
      authorizedContent:
        "The State Department's etiquette brief reveals the Emperor privately dislikes physical contact but found the gesture endearingly naive after a short conversation. Our ambassador arranged a private tea to smooth things over.",
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Claim hug was a protective reflex from excited security detail, shift blame to chaotic press area.",
      },
    },
  },
};
