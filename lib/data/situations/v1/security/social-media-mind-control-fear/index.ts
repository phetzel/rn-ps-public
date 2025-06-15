import { SituationType, SituationData } from "~/types";
import { socialMediaMindControlFearPreferences } from "./socialMediaMindControlFearPreferences";
import { socialMediaMindControlFearOutcomes } from "./socialMediaMindControlFearOutcomes";
import { socialMediaMindControlFearExchanges } from "./socialMediaMindControlFearExchanges";

export const socialMediaMindControlFear: SituationData = {
  trigger: {
    staticKey: "social_media_mind_control",
    type: SituationType.Security,
    requirements: {},
  },
  type: SituationType.Security,
  title: "Social Media Mind Control Fear",
  description:
    "An influencer claims a popular app rewires users' brains, causing a frenzy of uninstallations and talk of government cover-ups.",
  content: {
    preferences: socialMediaMindControlFearPreferences,
    outcomes: socialMediaMindControlFearOutcomes,
  },
  exchanges: socialMediaMindControlFearExchanges,
};
