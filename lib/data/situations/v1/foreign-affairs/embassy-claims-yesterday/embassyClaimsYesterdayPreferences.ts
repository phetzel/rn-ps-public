import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const embassyClaimsYesterdayPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I will challenge yesterday's sovereignty by scheduling today twice and vetoing Monday. No embassy outranks the calendar."
  },
  cabinet: {
    [CabinetStaticId.State]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "We will explain that retro visas cannot board future flights. We propose time-neutral stamps and a 24-hour truce with calendars."
      },
      authorizedContent: "As of 3 p.m. local time, ports of entry will treat 'yesterday' visas as pending and issue 24-hour waivers. This keeps flights moving but risks the embassy halting consular work."
    }
  }
};
