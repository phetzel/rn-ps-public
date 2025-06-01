import { AnswerType, CabinetStaticId, SituationPreferences } from "~/types";

export const nationalGlitterSpillPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Deflect,
    rationale:
      "Blame the reckless company, joke about sparkle, promise swift cleanup. Downplay seriousness with light humor.",
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale:
          "Serious eco-hazard. Detail cleanup steps, probe source, issue health advisories, stress public safety first.",
      },
      authorizedContent:
        "Non-toxic but persistent glitter. Source: SparkleTime Inc. Offer a big ‘voluntary’ payment to speed remediation.",
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale:
          "Coordinate all agencies, deploy resources fast, and reassure public that water systems remain safe.",
      },
    },
  },
};
