import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const seasonsSoldAtFederalAuctionPreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I hereby arm-wrestle the calendar for the people. Should winter protest, I'll deputize the groundhog as counsel."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Speculation thrives in fog; we'll number the sunbeams and invoice the horizon. Calm math beats stampedes."
      },
      authorizedContent: "The pilot auction begins Friday at 10 a.m. and sells 36 hours of early autumn in three-hour slots. Starting bid is 11 climate credits per degree-day; if bids spike, a 10% cool-down cap will apply."
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "We can swap blizzards for light drizzle on 15-minute notice. Keep snacks ready; our sirens speak fluent pollen."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "Owning a solstice is weirder than a haunted subpoena. Courts may juggle this; we'll duct-tape precedents carefully."
      }
    }
  }
};
