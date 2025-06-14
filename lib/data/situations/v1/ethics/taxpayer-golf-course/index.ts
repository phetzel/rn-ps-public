import { taxpayerGolfCoursePreferences } from "./taxpayerGolfCoursePreferences";
import { taxpayerGolfCourseOutcomes } from "./taxpayerGolfCourseOutcomes";
import { taxpayerGolfCourseExchanges } from "./taxpayerGolfCourseExchanges";
import { SituationType, SituationData } from "~/types";

export const taxpayerGolfCourse: SituationData = {
  trigger: {
    staticKey: "taxpayer_golf_course",
    type: SituationType.Ethics,
    requirements: {},
  },
  type: SituationType.Ethics,
  title: "Taxpayer-Funded Golf Course",
  description:
    "Infrastructure funds were diverted to build a deluxe presidential golf course, drawing accusations of vanity spending.",
  content: {
    preferences: taxpayerGolfCoursePreferences,
    outcomes: taxpayerGolfCourseOutcomes,
  },
  exchanges: taxpayerGolfCourseExchanges,
};
