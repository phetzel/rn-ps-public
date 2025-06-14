import { SituationType, SituationData } from "~/types";
import { navalExerciseOopsPreferences } from "./navalExerciseOopsPreferences";
import { navalExerciseOopsOutcomes } from "./navalExerciseOopsOutcomes";
import { navalExerciseOopsExchanges } from "./navalExerciseOopsExchanges";

export const navalExerciseOops: SituationData = {
  trigger: {
    staticKey: "naval_exercise_oops",
    type: SituationType.ForeignAffairs,
    requirements: {},
  },
  type: SituationType.ForeignAffairs,
  title: "Naval Exercise Oops",
  description:
    "During a naval drill, U.S. forces mistakenly commandeer an ally's fishing boat, causing diplomatic waves and outraged fishermen.",
  content: {
    preferences: navalExerciseOopsPreferences,
    outcomes: navalExerciseOopsOutcomes,
  },
  exchanges: navalExerciseOopsExchanges,
};
