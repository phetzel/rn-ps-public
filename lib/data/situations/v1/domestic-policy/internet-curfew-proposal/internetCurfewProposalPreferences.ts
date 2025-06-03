import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const internetCurfewProposalPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Ten-p.m. log-off keeps families rested! Tease doom-scroll addicts and pivot to ‘common-sense’ wellness policy.",
  },
  cabinet: {
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Calm fears: no shutdown until feasibility, security, and civil-liberty reviews finish.",
      },
      authorizedContent:
        "Draft memo shows ISPs could geo-throttle ports via existing emergency-alert rails. Pilot limited to one county, opt-out for hospitals and 911 dispatch. Sunset clause after 90 days if metrics fail.",
    },
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Highlight sleep and mental-health data supporting reduced night-time screen use.",
      },
    },
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Note curfew starts post-market hours; economic impact minimal, with offsetting cyber-wellness tax credits.",
      },
    },
  },
};
