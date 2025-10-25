import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const neighborhoodTreatyMandatePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I challenge every cul-de-sac to sign ceasefires over leaf blowers. Peace by potluck, enforced by my goldfish envoy."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We'll issue porch passports and driveway visas. It's routine diplomacy, smaller; seniors get stamp waivers and rural folks can file by radio."
      },
      authorizedContent: "Launch is a 60-day pilot in seven townships, with $0 filing for seniors and rural households. If this goes public now, city groups may demand equal waivers and stall the rollout."
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "We admit the Constitution never imagined backyard embassies. We'll review mailbox sanctions and bar surprise lemonade raids."
      }
    }
  }
};
