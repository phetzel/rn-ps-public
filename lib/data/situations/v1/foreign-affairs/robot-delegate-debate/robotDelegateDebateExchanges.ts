import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const robotDelegateDebateExchanges: ExchangeData[] = [
  /* ────────────────── Independent outlet ───────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "rdd_ind_q1",
      questions: {
        rdd_ind_q1: {
          id: "rdd_ind_q1",
          text: "Sending an AI robot to the peace talks stunned observers. Are you replacing human diplomacy with gadgets?",
          depth: 0,
          answers: [
            {
              id: "rdd_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "The robot simply assists our negotiators with quick translations. Human diplomats remain fully in charge.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "rdd_ind_q1_f1",
              outcomeModifiers: {
                rdd_robot_praised: OutcomeModifierWeight.ModeratePositive,
                rdd_delegates_walkout: OutcomeModifierWeight.ModerateNegative,
                rdd_glitch_insults: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rdd_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "We're pioneering diplomacy with technology. It's a tool, not a replacement. Let's focus on the peace progress.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              followUpId: "rdd_ind_q1_f1",
              outcomeModifiers: {
                rdd_robot_praised: OutcomeModifierWeight.SlightPositive,
                rdd_delegates_walkout: OutcomeModifierWeight.SlightNegative,
                rdd_glitch_insults: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rdd_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Defense,
              text: "Our AI briefing shows the machine enhances security by instantly flagging threats. Diplomats direct all decisions.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              followUpId: "rdd_ind_q1_f1",
              outcomeModifiers: {
                rdd_robot_praised: OutcomeModifierWeight.MajorPositive,
                rdd_delegates_walkout: OutcomeModifierWeight.MajorNegative,
                rdd_glitch_insults: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        rdd_ind_q1_f1: {
          id: "rdd_ind_q1_f1",
          text: "Critics call it creepy and undemocratic. Will real diplomats take back the table?",
          depth: 1,
          answers: [
            {
              id: "rdd_ind_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "Humans run the show. The robot simply takes notes and helps with schedules. We'll always rely on human judgment.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                rdd_robot_praised: OutcomeModifierWeight.ModeratePositive,
                rdd_delegates_walkout: OutcomeModifierWeight.ModerateNegative,
                rdd_glitch_insults: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rdd_ind_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "Some delegates resist change, but technology won't stop evolving. We're committed to breakthroughs that enhance diplomacy.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                rdd_robot_praised: OutcomeModifierWeight.SlightPositive,
                rdd_delegates_walkout: OutcomeModifierWeight.SlightNegative,
                rdd_glitch_insults: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ────────────────── Conservative outlet ───────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "rdd_con_q1",
      questions: {
        rdd_con_q1: {
          id: "rdd_con_q1",
          text: "Why rely on a robot to speak for us? Is the President dodging the tough questions by hiding behind technology?",
          depth: 0,
          answers: [
            {
              id: "rdd_con_q1_a1",
              type: AnswerType.Challenge,
              text: "No one is hiding. The robot is an added tool; negotiations still involve direct leader-to-leader talks.",
              impacts: { president: { weight: ExchangeImpactWeight.Negative } },
              outcomeModifiers: {
                rdd_robot_praised: OutcomeModifierWeight.SlightNegative,
                rdd_delegates_walkout: OutcomeModifierWeight.SlightPositive,
                rdd_glitch_insults: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rdd_con_q1_a2",
              type: AnswerType.Deflect,
              text: "This administration embraces innovation. Worry less about style and more about results.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                rdd_robot_praised: OutcomeModifierWeight.SlightPositive,
                rdd_delegates_walkout: OutcomeModifierWeight.SlightNegative,
                rdd_glitch_insults: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rdd_con_q1_a3",
              type: AnswerType.Reassure,
              text: "Our allies still meet face to face with the President. The robot simply collects data to make those meetings productive.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                rdd_robot_praised: OutcomeModifierWeight.ModeratePositive,
                rdd_delegates_walkout: OutcomeModifierWeight.ModerateNegative,
                rdd_glitch_insults: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ────────────────── Liberal outlet ───────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "rdd_lib_q1",
      questions: {
        rdd_lib_q1: {
          id: "rdd_lib_q1",
          text: "Is sending a robot to the negotiation table an insensitive move, ignoring cultural nuance and human connection?",
          depth: 0,
          answers: [
            {
              id: "rdd_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "The robot is carefully programmed with cultural data. Human envoys are present to interpret nuance.",
              impacts: { cabinet: { [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                rdd_robot_praised: OutcomeModifierWeight.ModeratePositive,
                rdd_delegates_walkout: OutcomeModifierWeight.ModerateNegative,
                rdd_glitch_insults: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rdd_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "Let's not fear a digital assistant. Our human negotiators are leading, while the robot keeps records and ensures accuracy.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                rdd_robot_praised: OutcomeModifierWeight.SlightPositive,
                rdd_delegates_walkout: OutcomeModifierWeight.SlightNegative,
                rdd_glitch_insults: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "rdd_lib_q1_a3",
              type: AnswerType.Inform,
              text: "Defense experts confirm the robot runs on secure code and helps cross-check every statement in real time.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                rdd_robot_praised: OutcomeModifierWeight.ModeratePositive,
                rdd_delegates_walkout: OutcomeModifierWeight.ModerateNegative,
                rdd_glitch_insults: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
