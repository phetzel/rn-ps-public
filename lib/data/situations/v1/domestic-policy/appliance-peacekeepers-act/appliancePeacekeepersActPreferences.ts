import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const appliancePeacekeepersActPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I thrive on tiny spectacles; the smaller the spat, the bigger my spotlight. Challenging recasts toaster feuds as epic leadership tests."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Treaty maps and toaster truces are our brand. Informing draws borders between lawns and laundry rooms, and we keep a straight face."
      }
    },
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "If it plugs in, people assume we sent tanks. Denying keeps vets seen as referees, not microwave artillery crews."
      },
      authorizedContent: "The first trainings start Friday at 0800 in six towns; 240 veterans will complete eight hours, unarmed, with a $150 stipend, which may draw budget criticism. No surveillance drones will be used."
    }
  }
};
