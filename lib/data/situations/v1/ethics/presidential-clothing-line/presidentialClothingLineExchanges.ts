import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const presidentialClothingLineExchanges: ExchangeData[] = [
  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "pcl_con_q1",
      questions: {
        pcl_con_q1: {
          id: "pcl_con_q1",
          text: "Conservative pundits blast the president's new clothing line as profiteering off the office. Will sales stop?",
          depth: 0,
          answers: [
            {
              id: "pcl_con_q1_a1",
              type: AnswerType.Deny,
              text: "The president isn't personally selling shirts. This brand is run by an outside team with profits slated for charity programs.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "pcl_con_q1_f1",
              outcomeModifiers: {
                clothing_brand_shut_down: OutcomeModifierWeight.SlightNegative,
                clothing_loophole_survives: OutcomeModifierWeight.SlightPositive,
                clothing_boycott_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pcl_con_q1_a2",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Justice,
              text: "Trademark filings show the president's shell company holds majority ownership. Legal staff reviewed the paperwork but offered no opinion on ethics.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "pcl_con_q1_f1",
              outcomeModifiers: {
                clothing_brand_shut_down: OutcomeModifierWeight.StrongPositive,
                clothing_loophole_survives: OutcomeModifierWeight.StrongNegative,
                clothing_boycott_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pcl_con_q1_a3",
              type: AnswerType.Challenge,
              text: "Isn't using national symbols for personal gain exactly what ethics laws were made to prevent?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "pcl_con_q1_f1",
              outcomeModifiers: {
                clothing_brand_shut_down: OutcomeModifierWeight.ModeratePositive,
                clothing_loophole_survives: OutcomeModifierWeight.ModerateNegative,
                clothing_boycott_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        pcl_con_q1_f1: {
          id: "pcl_con_q1_f1",
          text: "Will the administration end licensing deals tied to the presidency?",
          depth: 1,
          answers: [
            {
              id: "pcl_con_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Justice is reviewing the licensing agreements. If they violate statute, the deals will be voided and proceeds refunded.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                clothing_brand_shut_down: OutcomeModifierWeight.ModeratePositive,
                clothing_loophole_survives: OutcomeModifierWeight.ModerateNegative,
                clothing_boycott_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pcl_con_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "We're confident the paperwork is solid. Questions about profits distract from the administration's policy work.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                clothing_brand_shut_down: OutcomeModifierWeight.SlightNegative,
                clothing_loophole_survives: OutcomeModifierWeight.SlightPositive,
                clothing_boycott_fizzles: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "pcl_lib_q1",
      questions: {
        pcl_lib_q1: {
          id: "pcl_lib_q1",
          text: "Liberal critics say the clothing line cheapens the office. Does the president see any ethical issue here?",
          depth: 0,
          answers: [
            {
              id: "pcl_lib_q1_a1",
              type: AnswerType.Reassure,
              text: "The brand's proceeds are pledged to charities supporting veterans and youth programs. We take ethics reviews seriously.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "pcl_lib_q1_f1",
              outcomeModifiers: {
                clothing_brand_shut_down: OutcomeModifierWeight.ModerateNegative,
                clothing_loophole_survives: OutcomeModifierWeight.ModeratePositive,
                clothing_boycott_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pcl_lib_q1_a2",
              type: AnswerType.Challenge,
              text: "Charities aside, isn't the president using national symbols for personal branding?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "pcl_lib_q1_f1",
              outcomeModifiers: {
                clothing_brand_shut_down: OutcomeModifierWeight.ModeratePositive,
                clothing_loophole_survives: OutcomeModifierWeight.ModerateNegative,
                clothing_boycott_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pcl_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "We won't comment on private business strategies. The administration remains focused on economic growth.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              followUpId: "pcl_lib_q1_f1",
              outcomeModifiers: {
                clothing_brand_shut_down: OutcomeModifierWeight.SlightNegative,
                clothing_loophole_survives: OutcomeModifierWeight.SlightPositive,
                clothing_boycott_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        pcl_lib_q1_f1: {
          id: "pcl_lib_q1_f1",
          text: "Will profits from the clothing line be disclosed to the public?",
          depth: 1,
          answers: [
            {
              id: "pcl_lib_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Financial reports will list licensing revenue. Any personal gain will be reported in annual disclosures.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                clothing_brand_shut_down: OutcomeModifierWeight.SlightPositive,
                clothing_loophole_survives: OutcomeModifierWeight.SlightNegative,
                clothing_boycott_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pcl_lib_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "Those details are still being finalized. We'll share more once the ethics review concludes.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                clothing_brand_shut_down: OutcomeModifierWeight.SlightNegative,
                clothing_loophole_survives: OutcomeModifierWeight.SlightPositive,
                clothing_boycott_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── Independent outlet ─────────────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "pcl_ind_q1",
      questions: {
        pcl_ind_q1: {
          id: "pcl_ind_q1",
          text: "Independent outlets wonder if taxpayers fund any part of the president's clothing brand. Can you guarantee no public money is involved?",
          depth: 0,
          answers: [
            {
              id: "pcl_ind_q1_a1",
              type: AnswerType.Deflect,
              text: "No taxpayer funds support the brand. It's entirely private, and we won't let side businesses distract from governing.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                clothing_brand_shut_down: OutcomeModifierWeight.SlightNegative,
                clothing_loophole_survives: OutcomeModifierWeight.SlightPositive,
                clothing_boycott_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pcl_ind_q1_a2",
              type: AnswerType.Challenge,
              text: "Even if private, isn't it troubling that official logos appear on pricey merchandise?",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                clothing_brand_shut_down: OutcomeModifierWeight.ModeratePositive,
                clothing_loophole_survives: OutcomeModifierWeight.ModerateNegative,
                clothing_boycott_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "pcl_ind_q1_a3",
              type: AnswerType.Reassure,
              text: "Licensing fees go through a blind trust, and we welcome oversight. The president won't personally profit while in office.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                clothing_brand_shut_down: OutcomeModifierWeight.ModerateNegative,
                clothing_loophole_survives: OutcomeModifierWeight.ModeratePositive,
                clothing_boycott_fizzles: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
