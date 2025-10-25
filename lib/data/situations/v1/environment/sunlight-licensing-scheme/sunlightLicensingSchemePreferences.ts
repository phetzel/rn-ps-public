import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const sunlightLicensingSchemePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "We must domesticate dawn like a skittish alpaca. Bid boldly or bring a bigger mirror and pay the glitter tax."
  },
  cabinet: {
    [CabinetStaticId.Treasury]: {
      preference: {
        answerType: AnswerType.Inform,
        rationale: "Photon auctions will soothe jittery markets and fund hats for barns. Rural rebates turn glare into revenue instead of rage."
      },
      authorizedContent: "The pilot auction opens Tuesday at 9 a.m. Eastern with a 15% rural co-op set-aside and a cap on reflector size. Licenses last 30 days; early leaks could depress bids and reduce revenue."
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "We are not weaponizing sunrise; glare drills just screen for moth espionage. The sky geese volunteered for the goggles."
      }
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "No statute defines who owns a sunbeam or its shadow. Expect suits from crops, roosters, and the Guild of Noon."
      }
    }
  }
};
