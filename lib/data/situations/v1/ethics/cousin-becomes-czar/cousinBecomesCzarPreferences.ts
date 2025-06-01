import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const cousinBecomesCzarPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale:
      "My cousin snacks like a pro—true expertise! Mock critics and defend the appointment with gusto.",
  },
  cabinet: {
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Snack Czar is a minor advisory gig for morale and follows all ethics rules. No conflict exists.",
      },
      authorizedContent:
        "The cousin holds a PhD in Nutritional Ergonomics (online) and works unpaid. Stress the volunteer angle.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Tiny budget impact; our focus stays on real economic issues. Snack role is trivial.",
      },
    },
  },
};
