import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const bridgeToNowherePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "It’s transformational rural infrastructure—don’t nit-pick headcounts. Tout jobs and future growth; mock ‘urban snobs.’",
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Calm markets: spending freeze review under way, safeguarding taxpayer money while respecting Congress’s authority.",
      },
      authorizedContent:
        "Internal OMB memo shows projected toll revenue < $1,000/yr. Cost-benefit ratio flagged ‘red.’ Treasury recommending pause pending audit.",
    },
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Explain federal–state funding mix and stress respect for local autonomy while outlining compliance checks.",
      },
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale:
          "If bid-rigging or corruption emerges, DOJ will act swiftly. Emphasize ongoing investigation and rule of law.",
      },
    },
  },
};
