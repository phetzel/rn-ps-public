import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const virtualRealEstateBoomExchanges: ExchangeData[] = [
  /* ───────── Investigative outlet ───────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "vre_inv_q1",
      questions: {
        /* Depth-0 root */
        vre_inv_q1: {
          id: "vre_inv_q1",
          text: "Blockchain sleuths say bots inflate metaverse land prices six-fold. Why is the administration touting an obviously rigged market?",
          depth: 0,
          answers: [
            {
              id: "vre_inv_q1_a1",
              type: AnswerType.Deflect, // Homeland pref
              text: "Fraud claims are under forensic review. Early adopters often see volatility; safeguards roll out before any tax credit is claimed.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              followUpId: "vre_inv_q1_f1",
              outcomeModifiers: {
                vre_regulation_lite: OutcomeModifierWeight.ModeratePositive, // +6
                vre_bubble_bursts: OutcomeModifierWeight.ModerateNegative, // −6
                vre_digital_export_success: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vre_inv_q1_a2",
              type: AnswerType.Deflect, // President hype
              text: "Every gold rush has a few wooden nickels. The point is new frontiers—pixel pioneers will build value long after today’s dust settles.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "vre_inv_q1_f1",
              outcomeModifiers: {
                vre_digital_export_success:
                  OutcomeModifierWeight.SlightPositive, // +4
                vre_bubble_bursts: OutcomeModifierWeight.SlightNegative, // −4
                vre_regulation_lite: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vre_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Homeland,
              text: "DHS has subpoena power ready—wallets linked to wash-trading bots will face cease-and-desist orders and immediate credit suspension.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              followUpId: "vre_inv_q1_f1",
              outcomeModifiers: {
                vre_regulation_lite: OutcomeModifierWeight.StrongPositive, // +8
                vre_bubble_bursts: OutcomeModifierWeight.StrongNegative, // −8
                vre_digital_export_success: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },

        /* Depth-1 follow-up */
        vre_inv_q1_f1: {
          id: "vre_inv_q1_f1",
          text: "Victims of metaverse rug-pulls ask whether they’ll ever be reimbursed. Will the government backstop these digital deeds?",
          depth: 1,
          answers: [
            {
              id: "vre_inv_q1_f1_a1",
              type: AnswerType.Reassure, // Treasury
              text: "No taxpayer bailout. Instead, a mandatory escrow fund—financed by platform fees—will cover verified fraud up to ten thousand dollars per user.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                vre_regulation_lite: OutcomeModifierWeight.ModeratePositive,
                vre_bubble_bursts: OutcomeModifierWeight.ModerateNegative,
                vre_digital_export_success: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vre_inv_q1_f1_a2",
              type: AnswerType.Deflect, // President quip
              text: "Pixel parcels carry pixel risks. We insure houses, not holograms—but crooks will still see the inside of a very real courtroom.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                vre_bubble_bursts: OutcomeModifierWeight.SlightPositive,
                vre_regulation_lite: OutcomeModifierWeight.SlightNegative,
                vre_digital_export_success: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "vre_lib_q1",
      questions: {
        vre_lib_q1: {
          id: "vre_lib_q1",
          text: "Critics say digital-land hype worsens inequality—rich avatars buy whole planets while renters can’t afford real homes. How do you justify tax perks?",
          depth: 0,
          answers: [
            {
              id: "vre_lib_q1_a1",
              type: AnswerType.Reassure, // Treasury
              text: "Credits scale down as prices rise; plus, one-third of proceeds fund first-time homebuyer grants in the physical world—balancing both markets.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                vre_regulation_lite: OutcomeModifierWeight.ModeratePositive,
                vre_bubble_bursts: OutcomeModifierWeight.ModerateNegative,
                vre_digital_export_success: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vre_lib_q1_a2",
              type: AnswerType.Inform, // State
              text: "International guidelines under discussion cap individual holdings to curb monopolies and keep virtual city centers accessible to small creators.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                vre_digital_export_success:
                  OutcomeModifierWeight.SlightPositive,
                vre_bubble_bursts: OutcomeModifierWeight.SlightNegative,
                vre_regulation_lite: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vre_lib_q1_a3",
              type: AnswerType.Deflect, // President humor
              text: "Owning digital dirt doesn’t stop anyone planting a garden IRL. The point is abundance—bits and bricks can both bloom.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                vre_digital_export_success:
                  OutcomeModifierWeight.SlightPositive,
                vre_regulation_lite: OutcomeModifierWeight.SlightNegative,
                vre_bubble_bursts: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "vre_con_q1",
      questions: {
        vre_con_q1: {
          id: "vre_con_q1",
          text: "If this bubble pops, taxpayers could be left holding worthless server farms. What safeguards stop public money propping up pixel speculation?",
          depth: 0,
          answers: [
            {
              id: "vre_con_q1_a1",
              type: AnswerType.Inform, // Treasury
              text: "All incentives are claw-back credits. If valuations crash beyond fifty percent, remaining write-offs disappear—zero on-budget liability.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "vre_con_q1_f1",
              outcomeModifiers: {
                vre_regulation_lite: OutcomeModifierWeight.ModeratePositive,
                vre_bubble_bursts: OutcomeModifierWeight.ModerateNegative,
                vre_digital_export_success: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vre_con_q1_a2",
              type: AnswerType.Challenge, // President push
              text: "Pixel towns pay taxes in real dollars and generate real jobs—abandoning them would be economic malpractice, not bailout bait.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "vre_con_q1_f1",
              outcomeModifiers: {
                vre_digital_export_success:
                  OutcomeModifierWeight.SlightPositive,
                vre_bubble_bursts: OutcomeModifierWeight.SlightNegative,
                vre_regulation_lite: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vre_con_q1_a3",
              type: AnswerType.Deflect, // Homeland fraud note
              text: "Server farms are privately insured; federal exposure is capped at zero. Fraud squads stand ready if insurers cry foul.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              followUpId: "vre_con_q1_f1",
              outcomeModifiers: {
                vre_regulation_lite: OutcomeModifierWeight.SlightPositive,
                vre_bubble_bursts: OutcomeModifierWeight.SlightNegative,
                vre_digital_export_success: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },

        /* Depth-1 follow-up */
        vre_con_q1_f1: {
          id: "vre_con_q1_f1",
          text: "Tech CEOs warn strict rules will send investment to friendlier jurisdictions in seconds. Will you ease compliance for early movers?",
          depth: 1,
          answers: [
            {
              id: "vre_con_q1_f1_a1",
              type: AnswerType.Reassure, // State trade
              text: "Reciprocal accords with Canada and the EU will recognise compliance audits, so firms face one checklist, not three bureaucracies.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                vre_digital_export_success:
                  OutcomeModifierWeight.ModeratePositive,
                vre_bubble_bursts: OutcomeModifierWeight.ModerateNegative,
                vre_regulation_lite: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "vre_con_q1_f1_a2",
              type: AnswerType.Deflect, // President jab
              text: "If their business teleports at mouse-click speed, filing an online form won’t break them—our door stays open, paperwork stays digital.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                vre_bubble_bursts: OutcomeModifierWeight.SlightPositive,
                vre_regulation_lite: OutcomeModifierWeight.SlightNegative,
                vre_digital_export_success: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
