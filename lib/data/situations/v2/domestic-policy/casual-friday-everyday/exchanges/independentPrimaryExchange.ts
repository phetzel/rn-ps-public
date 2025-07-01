import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
} from "~/types";
import type { ExchangeData } from "~/types";

export const independentPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.IndependentPrimary,
  content: {
    rootQuestionId: "q_casual_details",
    questions: {
      q_casual_details: {
        id: "q_casual_details",
        text: "What does 'casual' even mean? Are we going to have federal employees in shorts and t-shirts? How does this apply to uniformed officers?",
        depth: 0,
        answers: [
          {
            id: "a_details_reassure",
            type: AnswerType.Reassure,
            text: "Obviously this doesn't apply to uniformed personnel. For office workers, we trust them to use their judgment to dress appropriately and professionally.",
            impacts: {
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                },
              },
            },
            outcomeModifiers: {
              outcome_casual_morale_boost: OutcomeModifierWeight.SlightPositive, // +4
              outcome_casual_productivity_plunge:
                OutcomeModifierWeight.ModerateNegative, // -6
              outcome_casual_policy_walked_back:
                OutcomeModifierWeight.SlightPositive, // +4
            },
            followUpId: "q_casual_judgment",
          },
          {
            id: "a_details_challenge",
            type: AnswerType.Challenge,
            text: "Let's not get bogged down in hypotheticals. This is about treating adults like adults. I'm sure federal workers can figure out what to wear.",
            impacts: {
              president: { weight: ExchangeImpactWeight.SlightlyPositive },
            },
            outcomeModifiers: {
              outcome_casual_morale_boost: OutcomeModifierWeight.SlightPositive, // +4
              outcome_casual_productivity_plunge:
                OutcomeModifierWeight.SlightPositive, // +4
              outcome_casual_policy_walked_back:
                OutcomeModifierWeight.StrongNegative, // -8
            },
          },
        ],
      },
      q_casual_judgment: {
        id: "q_casual_judgment",
        text: "You say you 'trust their judgment,' but without clear guidelines, aren't you just inviting chaos and HR nightmares for federal managers?",
        depth: 1,
        answers: [
          {
            id: "a_judgment_inform",
            type: AnswerType.Inform,
            text: "Each department will issue its own specific guidelines that make sense for their mission. This is a top-level directive, not a micro-managing one.",
            impacts: {},
            outcomeModifiers: {
              outcome_casual_morale_boost: OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
              outcome_casual_productivity_plunge:
                OutcomeModifierWeight.SlightNegative, // -4 -> -10 total
              outcome_casual_policy_walked_back:
                OutcomeModifierWeight.StrongPositive, // +8 -> +12 total
            },
          },
          {
            id: "a_judgment_admit",
            type: AnswerType.Admit,
            text: "That's a fair point. There may be some initial confusion, and we'll work with managers to clarify the standards as we go.",
            impacts: {},
            outcomeModifiers: {
              outcome_casual_morale_boost: OutcomeModifierWeight.Neutral, // 0 -> +4 total
              outcome_casual_productivity_plunge:
                OutcomeModifierWeight.SlightPositive, // +4 -> -2 total
              outcome_casual_policy_walked_back:
                OutcomeModifierWeight.SlightNegative, // -4 -> 0 total
            },
          },
        ],
      },
    },
  },
};
