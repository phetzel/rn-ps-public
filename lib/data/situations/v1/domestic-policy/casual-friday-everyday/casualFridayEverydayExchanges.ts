import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const casualFridayEverydayExchanges: ExchangeData[] = [
  /* ───────── Liberal outlet ───────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "cfe_lib_q1",
      questions: {
        cfe_lib_q1: {
          id: "cfe_lib_q1",
          text: "Critics say mandatory casual wear trivializes government. How will you ensure professionalism isn’t sacrificed for pajamas?",
          depth: 0,
          answers: [
            {
              id: "cfe_lib_q1_a1",
              type: AnswerType.Inform, // HHS preference
              text: "Ergonomic clothing reduces stress injuries and boosts morale. Updated guidelines retain decorum—no offensive prints, ID badges visible at all times.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                cfe_chaos_contained: OutcomeModifierWeight.StrongPositive, // +8
                cfe_pajama_productivity_plunge:
                  OutcomeModifierWeight.SlightNegative, // −4
                cfe_comfy_government: OutcomeModifierWeight.SlightNegative, // −4
              },
            },
            {
              id: "cfe_lib_q1_a2",
              type: AnswerType.Deflect, // President
              text: "Government works best when people are comfortable. Fancy suits never passed a bill—talent does. Let’s judge results, not wardrobe labels.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                cfe_chaos_contained: OutcomeModifierWeight.SlightNegative, // −4
                cfe_pajama_productivity_plunge: OutcomeModifierWeight.Neutral, //  0
                cfe_comfy_government: OutcomeModifierWeight.SlightPositive, // +4
              },
            },
            {
              id: "cfe_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "Pilot data show a 6 % drop in musculoskeletal complaints after relaxing dress codes. Healthier employees save millions in lost-time costs per year.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                cfe_chaos_contained: OutcomeModifierWeight.ModeratePositive, // +6
                cfe_pajama_productivity_plunge:
                  OutcomeModifierWeight.ModerateNegative, // −6
                cfe_comfy_government: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Conservative outlet ──────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "cfe_con_q1",
      questions: {
        cfe_con_q1: {
          id: "cfe_con_q1",
          text: "Pajama-clad bureaucrats send the wrong message abroad. Doesn’t this undercut American seriousness on the world stage?",
          depth: 0,
          answers: [
            {
              id: "cfe_con_q1_a1",
              type: AnswerType.Reassure, // Homeland preference
              text: "Security protocols, not suits, project strength. Uniformed guards, badge scans, and metal detectors remain unchanged whatever staff wear inside offices.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                cfe_chaos_contained: OutcomeModifierWeight.ModeratePositive, // +6
                cfe_pajama_productivity_plunge:
                  OutcomeModifierWeight.ModerateNegative, // −6
                cfe_comfy_government: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cfe_con_q1_a2",
              type: AnswerType.Challenge, // President tough talk
              text: "Foreign leaders fear our economy, not our fashion sense. If pajamas rattle them, imagine what our actual policies will do.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                cfe_chaos_contained: OutcomeModifierWeight.SlightNegative, // −4
                cfe_pajama_productivity_plunge:
                  OutcomeModifierWeight.SlightPositive, // +4
                cfe_comfy_government: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cfe_con_q1_a3",
              type: AnswerType.Inform, // Treasury cost angle
              text: "Productivity metrics will be published monthly. If output drops, dress code reverts—no cost to taxpayers, only evidence-based policy.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                cfe_chaos_contained: OutcomeModifierWeight.StrongPositive, // +8
                cfe_pajama_productivity_plunge:
                  OutcomeModifierWeight.StrongNegative, // −8
                cfe_comfy_government: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Independent outlet ───────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "cfe_ind_q1",
      questions: {
        cfe_ind_q1: {
          id: "cfe_ind_q1",
          text: "Federal HR hotlines report confusion—are dinosaur onesies acceptable or not? When will clear, practical guidance reach employees?",
          depth: 0,
          answers: [
            {
              id: "cfe_ind_q1_a1",
              type: AnswerType.Inform, // HHS again (non-authorized)
              text: "A memo issues tonight: clean casual wear, closed-toe shoes, no pajamas resembling farm animals. FAQ sheet and helpline follow in the morning.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                cfe_chaos_contained: OutcomeModifierWeight.ModeratePositive, // +6
                cfe_pajama_productivity_plunge:
                  OutcomeModifierWeight.ModerateNegative, // −6
                cfe_comfy_government: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cfe_ind_q1_a2",
              type: AnswerType.Deflect, // Treasury humour
              text: "Guidance? Simple: wear whatever helps finish your spreadsheets faster. The free market of fashion will sort itself out by lunchtime.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Neutral,
                  },
                },
              },
              outcomeModifiers: {
                cfe_chaos_contained: OutcomeModifierWeight.SlightNegative, // −4
                cfe_pajama_productivity_plunge:
                  OutcomeModifierWeight.SlightPositive, // +4
                cfe_comfy_government: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cfe_ind_q1_a3",
              type: AnswerType.Admit,
              text: "Rollout moved too fast. We’ll pause enforcement for one week while agencies set sensible, office-specific rules.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                cfe_chaos_contained: OutcomeModifierWeight.ModerateNegative, // −6
                cfe_pajama_productivity_plunge:
                  OutcomeModifierWeight.ModeratePositive, // +6
                cfe_comfy_government: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
