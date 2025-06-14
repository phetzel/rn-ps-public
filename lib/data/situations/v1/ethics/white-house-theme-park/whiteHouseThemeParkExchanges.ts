import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const whiteHouseThemeParkExchanges: ExchangeData[] = [
  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "wht_inv_q1",
      questions: {
        wht_inv_q1: {
          id: "wht_inv_q1",
          text: "Investigative reporters reveal a proposal for a tax-funded White House theme park. Is the administration building a vanity playground?",
          depth: 0,
          answers: [
            {
              id: "wht_inv_q1_a1",
              type: AnswerType.Deflect,
              text: "The concept is only a feasibility study at this stage. We won't distract from real issues with speculation about roller coasters.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "wht_inv_q1_f1",
              outcomeModifiers: {
                theme_plan_shelved: OutcomeModifierWeight.SlightNegative,
                theme_scaled_approved: OutcomeModifierWeight.SlightPositive,
                theme_park_mixed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "wht_inv_q1_a2",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Interior,
              text: "Interior's draft study indicates the park would feature a scaled Oval Office coaster and cost projections over $600 million. Officials claim it improves civic tourism.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "wht_inv_q1_f1",
              outcomeModifiers: {
                theme_plan_shelved: OutcomeModifierWeight.StrongPositive,
                theme_scaled_approved: OutcomeModifierWeight.StrongNegative,
                theme_park_mixed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "wht_inv_q1_a3",
              type: AnswerType.Challenge,
              text: "People are more worried about infrastructure than thrill rides. Isn't this pure vanity while roads crumble?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "wht_inv_q1_f1",
              outcomeModifiers: {
                theme_plan_shelved: OutcomeModifierWeight.SlightPositive,
                theme_scaled_approved: OutcomeModifierWeight.Neutral,
                theme_park_mixed: OutcomeModifierWeight.SlightNegative,
              },
            },
          ],
        },
        wht_inv_q1_f1: {
          id: "wht_inv_q1_f1",
          text: "Will Interior release the draft impact study so taxpayers can judge the costs?",
          depth: 1,
          answers: [
            {
              id: "wht_inv_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Yes, once the interagency review finishes, we'll release the study detailing costs and potential revenue streams.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                theme_plan_shelved: OutcomeModifierWeight.ModeratePositive,
                theme_scaled_approved: OutcomeModifierWeight.ModerateNegative,
                theme_park_mixed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "wht_inv_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "The study includes sensitive financial models. Treasury will summarize the numbers without releasing every page.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                theme_plan_shelved: OutcomeModifierWeight.SlightNegative,
                theme_scaled_approved: OutcomeModifierWeight.SlightPositive,
                theme_park_mixed: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "wht_lib_q1",
      questions: {
        wht_lib_q1: {
          id: "wht_lib_q1",
          text: "Liberal papers call it a vanity project while schools need repairs. Why divert funds to thrill rides?",
          depth: 0,
          answers: [
            {
              id: "wht_lib_q1_a1",
              type: AnswerType.Challenge,
              text: "You're ignoring that the project could create jobs and educate visitors. Are you saying kids shouldn't learn history in fun ways?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "wht_lib_q1_f1",
              outcomeModifiers: {
                theme_plan_shelved: OutcomeModifierWeight.ModeratePositive,
                theme_scaled_approved: OutcomeModifierWeight.ModerateNegative,
                theme_park_mixed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "wht_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "Funds will come partly from private sponsors. Education programs are a priority and the park aims to enhance civic pride.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "wht_lib_q1_f1",
              outcomeModifiers: {
                theme_plan_shelved: OutcomeModifierWeight.ModerateNegative,
                theme_scaled_approved: OutcomeModifierWeight.ModeratePositive,
                theme_park_mixed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "wht_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Budget details will be sorted out after feasibility studies. Let's not pit rides against classrooms just yet.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              followUpId: "wht_lib_q1_f1",
              outcomeModifiers: {
                theme_plan_shelved: OutcomeModifierWeight.SlightNegative,
                theme_scaled_approved: OutcomeModifierWeight.Neutral,
                theme_park_mixed: OutcomeModifierWeight.SlightPositive,
              },
            },
          ],
        },
        wht_lib_q1_f1: {
          id: "wht_lib_q1_f1",
          text: "Is there a timeline for public hearings on the park proposal?",
          depth: 1,
          answers: [
            {
              id: "wht_lib_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Interior will hold community forums within three months to gather feedback before any contracts are signed.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                theme_plan_shelved: OutcomeModifierWeight.SlightPositive,
                theme_scaled_approved: OutcomeModifierWeight.SlightNegative,
                theme_park_mixed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "wht_lib_q1_f1_a2",
              type: AnswerType.Deny,
              text: "There is no formal timeline yet; talk of hearings is premature until we finish cost analysis.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Negative },
                },
              },
              outcomeModifiers: {
                theme_plan_shelved: OutcomeModifierWeight.SlightNegative,
                theme_scaled_approved: OutcomeModifierWeight.SlightPositive,
                theme_park_mixed: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "wht_con_q1",
      questions: {
        wht_con_q1: {
          id: "wht_con_q1",
          text: "Conservative hosts argue the park money should secure the border instead. Is this just wasteful spending?",
          depth: 0,
          answers: [
            {
              id: "wht_con_q1_a1",
              type: AnswerType.Reassure,
              text: "Tourism revenue from this park can actually fund other priorities. We are making sure security budgets remain intact.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "wht_con_q1_f1",
              outcomeModifiers: {
                theme_plan_shelved: OutcomeModifierWeight.ModerateNegative,
                theme_scaled_approved: OutcomeModifierWeight.ModeratePositive,
                theme_park_mixed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "wht_con_q1_a2",
              type: AnswerType.Deflect,
              text: "Our security programs are fully funded already. Let's not turn a fun attraction into a border debate.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "wht_con_q1_f1",
              outcomeModifiers: {
                theme_plan_shelved: OutcomeModifierWeight.SlightNegative,
                theme_scaled_approved: OutcomeModifierWeight.Neutral,
                theme_park_mixed: OutcomeModifierWeight.SlightPositive,
              },
            },
            {
              id: "wht_con_q1_a3",
              type: AnswerType.Challenge,
              text: "Why oppose an American history attraction that could boost local jobs? Not every dollar has to go to fences.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              followUpId: "wht_con_q1_f1",
              outcomeModifiers: {
                theme_plan_shelved: OutcomeModifierWeight.SlightPositive,
                theme_scaled_approved: OutcomeModifierWeight.SlightNegative,
                theme_park_mixed: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        wht_con_q1_f1: {
          id: "wht_con_q1_f1",
          text: "If the project stalls, will Treasury redirect funds to security programs?",
          depth: 1,
          answers: [
            {
              id: "wht_con_q1_f1_a1",
              type: AnswerType.Inform,
              text: "If canceled, Treasury would return the earmarked funds to the general account, freeing them for other priorities including security.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                theme_plan_shelved: OutcomeModifierWeight.ModeratePositive,
                theme_scaled_approved: OutcomeModifierWeight.ModerateNegative,
                theme_park_mixed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "wht_con_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "We're focused on making the park viable. It's premature to talk about rerouting money when the proposal is still evolving.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                theme_plan_shelved: OutcomeModifierWeight.SlightNegative,
                theme_scaled_approved: OutcomeModifierWeight.SlightPositive,
                theme_park_mixed: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
