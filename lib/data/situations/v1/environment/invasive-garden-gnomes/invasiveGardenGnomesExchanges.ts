import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const invasiveGardenGnomesExchanges: ExchangeData[] = [
  /* ───────── Liberal outlet ───────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "igg_lib_q1",
      questions: {
        igg_lib_q1: {
          id: "igg_lib_q1",
          text: "Environmentalists demand action after plastic gnomes clog habitats. How fast will cleanup teams respond?",
          depth: 0,
          answers: [
            {
              id: "igg_lib_q1_a1",
              type: AnswerType.Inform,
              text: "Rangers are already out collecting gnomes with local volunteers. We expect major sites cleared within a week.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "igg_lib_q1_f1",
              outcomeModifiers: {
                igg_gnomes_recycled: OutcomeModifierWeight.ModeratePositive,
                igg_wildlife_harmed: OutcomeModifierWeight.ModerateNegative,
                igg_gnomes_public_art: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "igg_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "These gnomes are basically street art gone rogue. We won't overreact before counting them.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              followUpId: "igg_lib_q1_f1",
              outcomeModifiers: {
                igg_wildlife_harmed: OutcomeModifierWeight.SlightPositive,
                igg_gnomes_recycled: OutcomeModifierWeight.SlightNegative,
                igg_gnomes_public_art: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "igg_lib_q1_a3",
              type: AnswerType.Challenge,
              text: "We welcome citizen cleanup. Anyone who planted these gnomes will face justice for littering natural treasures.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "igg_lib_q1_f1",
              outcomeModifiers: {
                igg_gnomes_recycled: OutcomeModifierWeight.ModeratePositive,
                igg_gnomes_public_art: OutcomeModifierWeight.ModerateNegative,
                igg_wildlife_harmed: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        igg_lib_q1_f1: {
          id: "igg_lib_q1_f1",
          text: "Will fines or potential jail time be pursued against these environmental pranksters?",
          depth: 1,
          answers: [
            {
              id: "igg_lib_q1_f1_a1",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Justice,
              text: "Arrest warrants are in motion. Suspects planned more drops, so penalties will be stiff.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                igg_gnomes_recycled: OutcomeModifierWeight.ModeratePositive,
                igg_wildlife_harmed: OutcomeModifierWeight.ModerateNegative,
                igg_gnomes_public_art: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "igg_lib_q1_f1_a2",
              type: AnswerType.Reassure,
              text: "Courts will decide punishment. The focus now is clearing habitats and preventing further damage.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                igg_gnomes_recycled: OutcomeModifierWeight.SlightPositive,
                igg_wildlife_harmed: OutcomeModifierWeight.SlightNegative,
                igg_gnomes_public_art: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "igg_lib_q1_f1_a3",
              type: AnswerType.Deflect,
              text: "Let's catch them first before discussing sentencing. Maybe community service gnome-cleanup will be punishment enough.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                igg_wildlife_harmed: OutcomeModifierWeight.SlightPositive,
                igg_gnomes_recycled: OutcomeModifierWeight.SlightNegative,
                igg_gnomes_public_art: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Conservative outlet ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "igg_con_q1",
      questions: {
        igg_con_q1: {
          id: "igg_con_q1",
          text: "Critics call the gnome dump a failure of border security for parks. Are you cracking down on pranksters or letting them roam free?",
          depth: 0,
          answers: [
            {
              id: "igg_con_q1_a1",
              type: AnswerType.Challenge,
              text: "Anyone sneaking gnomes onto federal land will face hefty fines and maybe a night in our least scenic jail.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                igg_gnomes_recycled: OutcomeModifierWeight.ModeratePositive,
                igg_gnomes_public_art: OutcomeModifierWeight.ModerateNegative,
                igg_wildlife_harmed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "igg_con_q1_a2",
              type: AnswerType.Deflect,
              text: "It's hard to guard every flower bed. We're focusing resources on real threats, not plastic mischief.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: {
                    weight: ExchangeImpactWeight.SlightlyNegative,
                  },
                },
              },
              outcomeModifiers: {
                igg_gnomes_public_art: OutcomeModifierWeight.SlightPositive,
                igg_gnomes_recycled: OutcomeModifierWeight.SlightNegative,
                igg_wildlife_harmed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "igg_con_q1_a3",
              type: AnswerType.Inform,
              text: "Justice is tracing purchases of bulk gnomes and reviewing surveillance footage to identify culprits.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                igg_gnomes_recycled: OutcomeModifierWeight.ModeratePositive,
                igg_wildlife_harmed: OutcomeModifierWeight.ModerateNegative,
                igg_gnomes_public_art: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Investigative outlet ───────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "igg_inv_q1",
      questions: {
        igg_inv_q1: {
          id: "igg_inv_q1",
          text: "Reports show gnomes made with toxic paint. How will you protect wildlife while tracking the perpetrators?",
          depth: 0,
          answers: [
            {
              id: "igg_inv_q1_a1",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Justice,
              text: "Lab tests confirm lead levels. We're seizing stockpiles and coordinating arrests with local police.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                igg_gnomes_recycled: OutcomeModifierWeight.StrongPositive,
                igg_wildlife_harmed: OutcomeModifierWeight.StrongNegative,
                igg_gnomes_public_art: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "igg_inv_q1_a2",
              type: AnswerType.Inform,
              text: "Teams are testing soil and setting up drop-off bins. We urge the public to report any suspicious bulk purchases.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                igg_gnomes_recycled: OutcomeModifierWeight.ModeratePositive,
                igg_wildlife_harmed: OutcomeModifierWeight.ModerateNegative,
                igg_gnomes_public_art: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "igg_inv_q1_a3",
              type: AnswerType.Deflect,
              text: "Some of these warnings are exaggerated. Many gnomes are harmless garden décor that simply wandered off.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                igg_wildlife_harmed: OutcomeModifierWeight.SlightPositive,
                igg_gnomes_recycled: OutcomeModifierWeight.SlightNegative,
                igg_gnomes_public_art: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
