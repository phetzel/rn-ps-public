import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const presidentialStadiumNamingExchanges: ExchangeData[] = [
  /* ───────────────────────── Independent outlet ─────────────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "psn_ind_q1",
      questions: {
        psn_ind_q1: {
          id: "psn_ind_q1",
          text: "Independent press says the president threatened to cut grants unless a city renamed its stadium after them. Did you pressure local officials?",
          depth: 0,
          answers: [
            {
              id: "psn_ind_q1_a1",
              type: AnswerType.Deflect,
              text: "Naming rights are city business. We merely discussed tourism opportunities, not quid pro quo deals.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "psn_ind_q1_f1",
              outcomeModifiers: {
                stadium_city_resists: OutcomeModifierWeight.SlightNegative,
                stadium_renamed_after_deal: OutcomeModifierWeight.SlightPositive,
                stadium_legal_fight: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "psn_ind_q1_a2",
              type: AnswerType.Inform,
              text: "Grant paperwork shows no formal condition about the stadium name. Any implication otherwise came from early brainstorming notes.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "psn_ind_q1_f1",
              outcomeModifiers: {
                stadium_city_resists: OutcomeModifierWeight.ModerateNegative,
                stadium_renamed_after_deal: OutcomeModifierWeight.ModeratePositive,
                stadium_legal_fight: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "psn_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.State,
              text: "Emails show advisers hinted future grants might depend on renaming, but no direct order was issued. Treasury's records note the funding path.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "psn_ind_q1_f1",
              outcomeModifiers: {
                stadium_city_resists: OutcomeModifierWeight.StrongPositive,
                stadium_renamed_after_deal: OutcomeModifierWeight.StrongNegative,
                stadium_legal_fight: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        psn_ind_q1_f1: {
          id: "psn_ind_q1_f1",
          text: "Emails hint federal funds were dangled as leverage. Were the grants contingent on renaming?",
          depth: 1,
          answers: [
            {
              id: "psn_ind_q1_f1_a1",
              type: AnswerType.Challenge,
              text: "The city says it felt bullied. If money was tied to naming, doesn't that undermine local autonomy?",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                stadium_city_resists: OutcomeModifierWeight.ModeratePositive,
                stadium_renamed_after_deal: OutcomeModifierWeight.ModerateNegative,
                stadium_legal_fight: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "psn_ind_q1_f1_a2",
              type: AnswerType.Reassure,
              text: "Our intent was to support tourism. We'll clarify the grant language so no one thinks funding hinges on a name.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                stadium_city_resists: OutcomeModifierWeight.SlightNegative,
                stadium_renamed_after_deal: OutcomeModifierWeight.SlightPositive,
                stadium_legal_fight: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "psn_con_q1",
      questions: {
        psn_con_q1: {
          id: "psn_con_q1",
          text: "Conservative media blasts the president for arm-twisting a city over stadium naming rights. Is this federal overreach?",
          depth: 0,
          answers: [
            {
              id: "psn_con_q1_a1",
              type: AnswerType.Inform,
              text: "The grants were standard infrastructure support. The city's naming decision remains theirs alone.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                stadium_city_resists: OutcomeModifierWeight.ModerateNegative,
                stadium_renamed_after_deal: OutcomeModifierWeight.ModeratePositive,
                stadium_legal_fight: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "psn_con_q1_a2",
              type: AnswerType.Deflect,
              text: "This conversation started with local boosters, not the president. We respect the city's choice whichever way it goes.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                stadium_city_resists: OutcomeModifierWeight.SlightNegative,
                stadium_renamed_after_deal: OutcomeModifierWeight.SlightPositive,
                stadium_legal_fight: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Liberal outlet ─────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "psn_lib_q1",
      questions: {
        psn_lib_q1: {
          id: "psn_lib_q1",
          text: "Liberal outlets question why public funds were connected to a stadium name. Will the administration drop its push?",
          depth: 0,
          answers: [
            {
              id: "psn_lib_q1_a1",
              type: AnswerType.Admit,
              text: "Pressuring the city was misguided. We'll support whatever name residents choose and continue funding improvements.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                stadium_city_resists: OutcomeModifierWeight.StrongPositive,
                stadium_renamed_after_deal: OutcomeModifierWeight.StrongNegative,
                stadium_legal_fight: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "psn_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "The president simply expressed enthusiasm. Any grant conversations will follow normal channels, and renaming is entirely up to the community.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                stadium_city_resists: OutcomeModifierWeight.ModerateNegative,
                stadium_renamed_after_deal: OutcomeModifierWeight.ModeratePositive,
                stadium_legal_fight: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
