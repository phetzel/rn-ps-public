import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const mintingPersonalCoinsPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Highlight economic achievements while brushing off the coin flap as overblown enthusiasm.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "Own the mistake, promise the coins will be melted, and vow tighter approval steps for novelty mints.",
      },
      authorizedContent:
        "Mint order paperwork shows the Treasury Secretary personally requested a small run of portrait coins for private distribution.",
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Distance State from the minting issue and steer questions back to diplomacy.",
      },
    },
  },
};
