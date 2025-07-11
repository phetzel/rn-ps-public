import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/types";

export const conPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.ConPrimary,
  content: {
    rootQuestionId: "q_ag_trips_ig_probe",
    questions: {
      q_ag_trips_ig_probe: {
        id: "q_ag_trips_ig_probe",
        text: "The DOJ's own Inspector General has opened a probe into this travel. Will the AG cooperate fully with this internal investigation?",
        depth: 0,
        answers: [
          {
            id: "a_probe_inform",
            type: AnswerType.Inform,
            text: "Of course. The Attorney General welcomes the review and will provide the Inspector General with any and all records requested.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_ag_pays_back: OutcomeModifierWeight.SlightPositive, // +4
              outcome_ag_ig_ouster: OutcomeModifierWeight.SlightNegative, // -4
              outcome_ag_rules_tightened: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_probe_challenge",
            type: AnswerType.Challenge,
            text: "The AG answers to the President, not an internal watchdog. We are confident the AG has acted properly and this probe is a waste of time.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Negative },
            },
            outcomeModifiers: {
              outcome_ag_pays_back: OutcomeModifierWeight.SlightNegative, // -4
              outcome_ag_ig_ouster: OutcomeModifierWeight.StrongPositive, // +8
              outcome_ag_rules_tightened: OutcomeModifierWeight.SlightNegative, // -4
            },
            followUpId: "q_ag_trips_fire_ig",
          },
        ],
      },
      q_ag_trips_fire_ig: {
        id: "q_ag_trips_fire_ig",
        text: "You say the AG answers to the President. Is the President considering firing the Inspector General for launching this politically motivated probe?",
        depth: 1,
        answers: [
          {
            id: "a_fire_deny",
            type: AnswerType.Deny,
            text: "No one is being fired. We respect the Inspector General's role, even if we disagree with their decision to pursue this particular matter.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_ag_pays_back: OutcomeModifierWeight.SlightPositive, // +4
              outcome_ag_ig_ouster: OutcomeModifierWeight.SlightNegative, // -4
              outcome_ag_rules_tightened: OutcomeModifierWeight.Neutral, // 0
            },
          },
          {
            id: "a_fire_deflect",
            type: AnswerType.Deflect,
            text: "The President has the authority to remove any Inspector General, at any time, for any reason. I'm not going to speculate on his thinking.",
            impacts: {
              president: { weight: ExchangeImpactWeight.Negative },
            },
            outcomeModifiers: {
              outcome_ag_pays_back: OutcomeModifierWeight.Neutral, // 0 -> -4 total
              outcome_ag_ig_ouster: OutcomeModifierWeight.StrongPositive, // +8 -> +16 total
              outcome_ag_rules_tightened: OutcomeModifierWeight.StrongNegative, // -8 -> -12 total
            },
          },
        ],
      },
    },
  },
};
