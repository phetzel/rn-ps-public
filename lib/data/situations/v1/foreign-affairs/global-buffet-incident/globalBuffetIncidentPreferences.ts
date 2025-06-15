import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const globalBuffetIncidentPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Reassure,
    rationale:
      "Smooth over the walkout by stressing the summit's progress and the President's appreciation once his meal was resolved.",
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Highlight that talks resumed quickly and the catering mix-up is being resolved amicably.",
      },
      authorizedContent:
        "Catering contract shows burgers were cut for budget reasons. Hosts rushed to source them after the incident to keep negotiations alive.",
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale:
          "Redirect focus to economic goals and minimize discussion of the President's culinary preferences.",
      },
    },
  },
};
