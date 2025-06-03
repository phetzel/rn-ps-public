import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const universalBasicSnackIncomePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "Food justice! Every citizen deserves monthly munchies. Brush off nanny-state panic; call it freedom in a fun wrapper.",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Underline prepaid debit model, capped at 0.4 % of GDP; offsets come from farm-subsidy reform.",
      },
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Stress nutrition standards, vendor audits, and data showing healthier snack choices in pilot cities.",
      },
      authorizedContent:
        "Pilot metrics: 18 % fall in afternoon energy crashes at federal offices using snack credits. Algorithm favours high-protein, low-sugar items; redemption blocked for >15 g added sugar per serving unless paired with fruit credit.",
    },
  },
};
