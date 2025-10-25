import { AnswerType, CabinetStaticId } from "~/types";
import type { SituationPreferences } from "~/lib/schemas/situations";

export const doorknobDefenseInitiativePreferences: SituationPreferences = {
  president: {
    answerType: AnswerType.Challenge,
    rationale: "I challenge anyone to hate safety and surprise. Grab a knob on TV and prove you fear neither encryption nor confetti."
  },
  cabinet: {
    [CabinetStaticId.Defense]: {
      preference: {
        answerType: AnswerType.Deny,
        rationale: "Not weapons—morale devices with incidental sparkle. If deterrence fails, glitter contingencies exist under our peacekeeping manuals."
      }
    },
    [CabinetStaticId.Homeland]: {
      preference: {
        answerType: AnswerType.Reassure,
        rationale: "Public safety first: cannons calibrated to startle villains, not pets. Sensors read twists, not identities, and encryption is party-grade strong."
      },
      authorizedContent: "Phase-one activation is Friday at 2 p.m. in 12 pilot neighborhoods. Confetti dye is food-safe and logs auto-delete after 72 hours. Sharing the timing could trigger prank swarms."
    },
    [CabinetStaticId.Justice]: {
      preference: {
        answerType: AnswerType.Admit,
        rationale: "We admit the law never foresaw self-reporting doorknobs. Warrants may arrive on streamers; we’re drafting rules that won’t clog keyholes."
      }
    }
  }
};
