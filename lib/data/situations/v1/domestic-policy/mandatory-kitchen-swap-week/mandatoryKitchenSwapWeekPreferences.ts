import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const mandatoryKitchenSwapWeekPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I challenge skeptics to saute empathy at medium heat; fear is under-seasoned. Also, my stove just impeached my toaster."
  },
  cabinet: {
    [CabinetStaticId.HHS]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We recommend triple-mitten protocols and polite coughing at the fridge. Germs obey courteous boundaries and lemon-scented advisories."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Lawyers found a Right to Remain Ramen; forced broth exchange may violate the Fourth Ladle. Judges must be briefed before anyone swaps spice racks."
      },
      authorizedContent: "A temporary court order in 19 administrative districts will pause pairings from Wed 7 a.m. to Fri 9 p.m. This allows revised consent forms; early leaks could widen the lawsuit."
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deflect,
        rationale: "This is a resilience drill: if strangers can find your can opener, we win. Expect casserole checkpoints and fondue no-fly zones to maintain calm."
      }
    }
  }
};
