import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const cabinetParkingSpotFeudExchanges: ExchangeData[] = [
  /* ───────── Conservative outlet ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "cpf_con_q1",
      questions: {
        cpf_con_q1: {
          id: "cpf_con_q1",
          text: "Cabinet bigwigs bickering over a parking spot—doesn’t that scream bloated government and bad priorities?",
          depth: 0,
          answers: [
            {
              id: "cpf_con_q1_a1",
              type: AnswerType.Challenge, // President jab
              text: "Americans argue over parking every day; ours just happens to trend on social media. We’ll fix it fast and get back to lowering taxes.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                cpf_public_ridicule: OutcomeModifierWeight.SlightPositive, // +4
                cpf_feud_mediated: OutcomeModifierWeight.SlightNegative, // −4
                cpf_handicap_space: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cpf_con_q1_a2",
              type: AnswerType.Reassure, // Treasury cost
              text: "Zero taxpayer dollars lost—just bruised egos. Treasury staff remain on schedule for the quarterly economic report due Friday.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                cpf_feud_mediated: OutcomeModifierWeight.ModeratePositive, // +6
                cpf_public_ridicule: OutcomeModifierWeight.ModerateNegative, // −6
                cpf_handicap_space: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cpf_con_q1_a3",
              type: AnswerType.Inform, // Justice rules
              text: "An HR review enforces existing parking-allocation policy: seniority plus accessibility needs. Mediation session set for 9 a.m. tomorrow.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                cpf_feud_mediated: OutcomeModifierWeight.StrongPositive, // +8
                cpf_public_ridicule: OutcomeModifierWeight.StrongNegative, // −8
                cpf_handicap_space: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "cpf_lib_q1",
      questions: {
        cpf_lib_q1: {
          id: "cpf_lib_q1",
          text: "The petty note-swapping feud distracts from policy work. When will adults reclaim the wheel—and the wheel stop?",
          depth: 0,
          answers: [
            {
              id: "cpf_lib_q1_a1",
              type: AnswerType.Inform, // Justice details
              text: "Conflict mediation starts today. If unresolved, the space converts to disability parking, ending personal claims entirely.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                cpf_handicap_space: OutcomeModifierWeight.SlightPositive, // +4
                cpf_feud_mediated: OutcomeModifierWeight.Neutral,
                cpf_public_ridicule: OutcomeModifierWeight.SlightNegative, // −4
              },
            },
            {
              id: "cpf_lib_q1_a2",
              type: AnswerType.Deflect, // President humor
              text: "We’re considering auctioning the spot for charity—highest bidder parks, taxpayers win, egos deflate. Stay tuned.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                cpf_public_ridicule: OutcomeModifierWeight.SlightPositive, // +4
                cpf_feud_mediated: OutcomeModifierWeight.SlightNegative, // −4
                cpf_handicap_space: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cpf_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Justice,
              text: "Security video shows the feud began after a mislabeled sign. DOJ recommends reclassifying the slot as ADA accessible to close the matter.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              outcomeModifiers: {
                cpf_handicap_space: OutcomeModifierWeight.MajorPositive, // +12
                cpf_public_ridicule: OutcomeModifierWeight.StrongNegative, // −8
                cpf_feud_mediated: OutcomeModifierWeight.SlightNegative, // −4
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
      rootQuestionId: "cpf_inv_q1",
      questions: {
        cpf_inv_q1: {
          id: "cpf_inv_q1",
          text: "Emails show cabinet staff used official vehicles to block the spot overnight. Any disciplinary action coming?",
          depth: 0,
          answers: [
            {
              id: "cpf_inv_q1_a1",
              type: AnswerType.Admit, // Justice again
              text: "Those actions violated fleet policy. Written reprimands and reimbursement for overtime security costs will be issued this week.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                cpf_feud_mediated: OutcomeModifierWeight.SlightPositive, // +4
                cpf_public_ridicule: OutcomeModifierWeight.Neutral,
                cpf_handicap_space: OutcomeModifierWeight.SlightNegative, // −4
              },
            },
            {
              id: "cpf_inv_q1_a2",
              type: AnswerType.Challenge, // President tough
              text: "Our team drives results, not just cars. Discipline is internal—media grandstanding won’t steer our agenda.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                cpf_public_ridicule: OutcomeModifierWeight.ModeratePositive, // +6
                cpf_feud_mediated: OutcomeModifierWeight.ModerateNegative, // −6
                cpf_handicap_space: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cpf_inv_q1_a3",
              type: AnswerType.Inform, // Treasury tally
              text: "Total overtime security cost was $3,200. Treasury will recoup the sum from involved offices’ discretionary budgets.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                cpf_public_ridicule: OutcomeModifierWeight.StrongNegative, // −8
                cpf_feud_mediated: OutcomeModifierWeight.StrongPositive, // +8
                cpf_handicap_space: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
