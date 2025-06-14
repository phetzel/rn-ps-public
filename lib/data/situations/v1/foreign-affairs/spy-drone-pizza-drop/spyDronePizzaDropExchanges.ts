import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const spyDronePizzaDropExchanges: ExchangeData[] = [
  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "sdpd_inv_q1",
      questions: {
        sdpd_inv_q1: {
          id: "sdpd_inv_q1",
          text: "Footage shows a drone dropping pizzas on the vegan summit. Was this a botched spy mission or deliberate provocation?",
          depth: 0,
          answers: [
            {
              id: "sdpd_inv_q1_a1",
              type: AnswerType.Admit,
              text: "We regret the errant drop. The President apologized and the pizzas are being donated to local shelters.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "sdpd_inv_q1_f1",
              outcomeModifiers: {
                sdpd_charity_apology: OutcomeModifierWeight.ModeratePositive,
                sdpd_summit_walkout: OutcomeModifierWeight.ModerateNegative,
                sdpd_pizza_meme: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdpd_inv_q1_a2",
              type: AnswerType.Deflect,
              text: "Initial data shows an autopilot glitch rerouted the drone. No disrespect was intended toward summit guests.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "sdpd_inv_q1_f1",
              outcomeModifiers: {
                sdpd_charity_apology: OutcomeModifierWeight.SlightPositive,
                sdpd_summit_walkout: OutcomeModifierWeight.SlightNegative,
                sdpd_pizza_meme: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdpd_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Defense,
              text: "Flight logs show a software patch caused the path error. We recovered all surveillance gear and have apologized to delegates.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              followUpId: "sdpd_inv_q1_f1",
              outcomeModifiers: {
                sdpd_charity_apology: OutcomeModifierWeight.MajorPositive,
                sdpd_summit_walkout: OutcomeModifierWeight.MajorNegative,
                sdpd_pizza_meme: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        sdpd_inv_q1_f1: {
          id: "sdpd_inv_q1_f1",
          text: "Delegates claim the drone targeted them. Will officials face discipline for this incident?",
          depth: 1,
          answers: [
            {
              id: "sdpd_inv_q1_f1_a1",
              type: AnswerType.Inform,
              text: "A review board is underway, and we’re updating protocols to ensure drones never approach civilian events again.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                sdpd_charity_apology: OutcomeModifierWeight.ModeratePositive,
                sdpd_summit_walkout: OutcomeModifierWeight.ModerateNegative,
                sdpd_pizza_meme: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdpd_inv_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "We see no evidence of malice. Jumping to punishments before the review concludes would be reckless.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                sdpd_charity_apology: OutcomeModifierWeight.SlightNegative,
                sdpd_pizza_meme: OutcomeModifierWeight.SlightPositive,
                sdpd_summit_walkout: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Liberal outlet ─────────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "sdpd_lib_q1",
      questions: {
        sdpd_lib_q1: {
          id: "sdpd_lib_q1",
          text: "Dropping pizzas on vegan leaders looks disrespectful. How will you repair relations after this bizarre stunt?",
          depth: 0,
          answers: [
            {
              id: "sdpd_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "We’ve apologized and offered aid to the summit’s causes. The drone team is retraining so nothing like this happens again.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                sdpd_charity_apology: OutcomeModifierWeight.ModeratePositive,
                sdpd_summit_walkout: OutcomeModifierWeight.ModerateNegative,
                sdpd_pizza_meme: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdpd_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "The pizzas were meant for troops nearby. It was an embarrassing misdrop, not a statement about veganism.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                sdpd_charity_apology: OutcomeModifierWeight.SlightNegative,
                sdpd_summit_walkout: OutcomeModifierWeight.SlightPositive,
                sdpd_pizza_meme: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdpd_lib_q1_a3",
              type: AnswerType.Inform,
              text: "Security teams are reviewing all drone routes. We’ve shared footage with summit organizers to demonstrate it was a mistake.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                sdpd_charity_apology: OutcomeModifierWeight.ModeratePositive,
                sdpd_summit_walkout: OutcomeModifierWeight.ModerateNegative,
                sdpd_pizza_meme: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "sdpd_con_q1",
      questions: {
        sdpd_con_q1: {
          id: "sdpd_con_q1",
          text: "Does this drone fiasco show sloppy command of our unmanned fleet?",
          depth: 0,
          answers: [
            {
              id: "sdpd_con_q1_a1",
              type: AnswerType.Challenge,
              text: "An equipment glitch is hardly a leadership crisis. We’re fixing the bug and reinforcing protocols immediately.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                sdpd_charity_apology: OutcomeModifierWeight.SlightPositive,
                sdpd_summit_walkout: OutcomeModifierWeight.SlightNegative,
                sdpd_pizza_meme: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdpd_con_q1_a2",
              type: AnswerType.Deflect,
              text: "The drone was delivering morale supplies, not spying. One bad drop doesn’t negate years of safe operations.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                sdpd_charity_apology: OutcomeModifierWeight.SlightPositive,
                sdpd_summit_walkout: OutcomeModifierWeight.SlightNegative,
                sdpd_pizza_meme: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "sdpd_con_q1_a3",
              type: AnswerType.Reassure,
              text: "We’ve apologized to the delegates and have implemented new flight checks. Our drone program remains the world standard.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                sdpd_charity_apology: OutcomeModifierWeight.ModeratePositive,
                sdpd_summit_walkout: OutcomeModifierWeight.ModerateNegative,
                sdpd_pizza_meme: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
