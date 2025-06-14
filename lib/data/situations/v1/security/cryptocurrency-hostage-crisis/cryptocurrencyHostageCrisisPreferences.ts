import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const cryptocurrencyHostageCrisisPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Inform,
    rationale:
      "Explain efforts to unfreeze the payment system and avoid panic while refusing to legitimize hacker demands.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Lay out financial countermeasures and reassure markets that no taxpayer funds will be handed to criminals.",
      },
      authorizedContent:
        "Blockchain traces pinpoint ransom wallets linked to a small rogue crypto exchange. Treasury is coordinating international seizures to retrieve funds.",
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Challenge,
        rationale:
          "Push back against hackers by promising aggressive prosecution and international warrants for the perpetrators.",
      },
    },
  },
};
