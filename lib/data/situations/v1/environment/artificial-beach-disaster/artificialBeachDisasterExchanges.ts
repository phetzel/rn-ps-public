import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const artificialBeachDisasterExchanges: ExchangeData[] = [
  /* ───────── Investigative outlet ───────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "abd_inv_q1",
      questions: {
        abd_inv_q1: {
          id: "abd_inv_q1",
          text: "Opponents say the new beaches washed away due to ignored warnings. Who approved the flawed designs and will taxpayers pay twice?",
          depth: 0,
          answers: [
            {
              id: "abd_inv_q1_a1",
              type: AnswerType.Inform,
              text: "The project used rushed designs. We're reviewing who signed off. Insurance and contingency funds cover initial repairs, not new taxes.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "abd_inv_q1_f1",
              outcomeModifiers: {
                abd_beaches_rebuilt: OutcomeModifierWeight.ModeratePositive,
                abd_project_scrapped: OutcomeModifierWeight.ModerateNegative,
                abd_lawsuits_win: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "abd_inv_q1_a2",
              type: AnswerType.Deflect,
              text: "Look, beaches vanish all the time; we're not the first administration to misplace some sand. Let's enjoy the short-lived sun and move on.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "abd_inv_q1_f1",
              outcomeModifiers: {
                abd_lawsuits_win: OutcomeModifierWeight.SlightPositive,
                abd_beaches_rebuilt: OutcomeModifierWeight.SlightNegative,
                abd_project_scrapped: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "abd_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Interior,
              text: "Classified erosion report shows compaction errors and storm surge predictions we ignored. We're ready to rebuild with new materials and more oversight.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "abd_inv_q1_f1",
              outcomeModifiers: {
                abd_beaches_rebuilt: OutcomeModifierWeight.StrongPositive,
                abd_project_scrapped: OutcomeModifierWeight.StrongNegative,
                abd_lawsuits_win: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        abd_inv_q1_f1: {
          id: "abd_inv_q1_f1",
          text: "If repairs fail again, will you scrap the project or keep pouring funds into a sandy money pit?",
          depth: 1,
          answers: [
            {
              id: "abd_inv_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "Our engineers will monitor new sand daily. Should erosion return, contingency funds will shift to reinforcement rather than endless rebuilding.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                abd_beaches_rebuilt: OutcomeModifierWeight.ModeratePositive,
                abd_project_scrapped: OutcomeModifierWeight.ModerateNegative,
                abd_lawsuits_win: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "abd_inv_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "If locals want endless beaches, they must accept some trial and error. We're not scrapping a project that could boost tourism and jobs.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                abd_beaches_rebuilt: OutcomeModifierWeight.ModeratePositive,
                abd_project_scrapped: OutcomeModifierWeight.ModerateNegative,
                abd_lawsuits_win: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Liberal outlet ───────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "abd_lib_q1",
      questions: {
        abd_lib_q1: {
          id: "abd_lib_q1",
          text: "Critics say the beach money should have gone to natural shoreline restoration. How will you rebuild without repeating the same mistakes?",
          depth: 0,
          answers: [
            {
              id: "abd_lib_q1_a1",
              type: AnswerType.Inform,
              text: "We'll use new erosion-resistant materials and consult independent scientists. Funding will shift from spectacle to sustainability while we repair the damage.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                abd_beaches_rebuilt: OutcomeModifierWeight.ModeratePositive,
                abd_project_scrapped: OutcomeModifierWeight.ModerateNegative,
                abd_lawsuits_win: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "abd_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "Natural coastlines sound lovely until tourists demand soft sand and umbrellas. We're evaluating options, but right now keeping beaches open is priority.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                abd_beaches_rebuilt: OutcomeModifierWeight.SlightPositive,
                abd_lawsuits_win: OutcomeModifierWeight.SlightNegative,
                abd_project_scrapped: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "abd_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Interior,
              text: "Our classified report notes where previous projects collapsed. We're requiring new modeling and oversight to ensure the next build stays put for decades.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              outcomeModifiers: {
                abd_beaches_rebuilt: OutcomeModifierWeight.StrongPositive,
                abd_project_scrapped: OutcomeModifierWeight.StrongNegative,
                abd_lawsuits_win: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "abd_con_q1",
      questions: {
        abd_con_q1: {
          id: "abd_con_q1",
          text: "Budget hawks call the project a waste. Will you cut losses now or spend even more to fix the sandy fiasco?",
          depth: 0,
          answers: [
            {
              id: "abd_con_q1_a1",
              type: AnswerType.Deflect,
              text: "Spending decisions come after engineers finish assessments. For now we're focused on cleanup, not finger-pointing or canceling local jobs.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                abd_beaches_rebuilt: OutcomeModifierWeight.SlightPositive,
                abd_project_scrapped: OutcomeModifierWeight.SlightNegative,
                abd_lawsuits_win: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "abd_con_q1_a2",
              type: AnswerType.Inform,
              text: "Cleanup estimates show we can salvage most materials. Treasury will oversee contracts so overruns are capped, but abandoning the project could cost even more.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                abd_beaches_rebuilt: OutcomeModifierWeight.ModeratePositive,
                abd_project_scrapped: OutcomeModifierWeight.ModerateNegative,
                abd_lawsuits_win: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "abd_con_q1_a3",
              type: AnswerType.Challenge,
              text: "Is cutting losses responsible, or just walking away from a half-built asset? We'll restore at reasonable cost, not cave to panic.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                abd_beaches_rebuilt: OutcomeModifierWeight.ModeratePositive,
                abd_lawsuits_win: OutcomeModifierWeight.ModerateNegative,
                abd_project_scrapped: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
