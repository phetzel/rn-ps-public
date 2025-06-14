import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const presidentialClothingLinePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deny,
    rationale:
      "Deny any conflict by claiming the brand is run independently and profits will support charities.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale:
          "Deny personal involvement, stressing licensing followed standard procedures.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain trademark filings and disclaim that the attorney general's office only reviewed the paperwork.",
      },
      authorizedContent:
        "Trademark file lists the president as majority owner through a shell company. Internal memos note discussion of using official logos for premium pricing.",
    },
  },
};
