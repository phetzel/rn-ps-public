import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const luxuryPetSpaExchanges: ExchangeData[] = [
  /* ───────────────────────── Liberal outlet ─────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "lps_lib_q1",
      questions: {
        lps_lib_q1: {
          id: "lps_lib_q1",
          text: "Liberal reporters reveal taxpayer funds for a luxury pet spa. Why are pampered pups a higher priority than schools?",
          depth: 0,
          answers: [
            {
              id: "lps_lib_q1_a1",
              type: AnswerType.Admit,
              text: "The wellness pilot went too far. Costs will be reimbursed and the spa shut down pending a full review.",
              impacts: {
                cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive } },
              },
              followUpId: "lps_lib_q1_f1",
              outcomeModifiers: {
                pet_spa_defunded: OutcomeModifierWeight.ModeratePositive,
                pet_spa_public_cam: OutcomeModifierWeight.ModerateNegative,
                pet_spa_initiative_expands: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "lps_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "It's a small line item for animal therapy research. Let's not blow it out of proportion when real health issues remain.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              followUpId: "lps_lib_q1_f1",
              outcomeModifiers: {
                pet_spa_public_cam: OutcomeModifierWeight.SlightPositive,
                pet_spa_defunded: OutcomeModifierWeight.SlightNegative,
                pet_spa_initiative_expands: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "lps_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.HHS,
              text: "The wellness memo shows the program targeted service animal stress studies. Excess spending is being clawed back.",
              impacts: {
                cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.StronglyPositive } },
              },
              followUpId: "lps_lib_q1_f1",
              outcomeModifiers: {
                pet_spa_defunded: OutcomeModifierWeight.StrongPositive,
                pet_spa_public_cam: OutcomeModifierWeight.StrongNegative,
                pet_spa_initiative_expands: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        lps_lib_q1_f1: {
          id: "lps_lib_q1_f1",
          text: "Will anyone face discipline for approving this spa?",
          depth: 1,
          answers: [
            {
              id: "lps_lib_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "Yes. Staff who authorized the spending are under review, and future wellness pilots require Treasury approval.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                pet_spa_defunded: OutcomeModifierWeight.ModeratePositive,
                pet_spa_initiative_expands: OutcomeModifierWeight.ModerateNegative,
                pet_spa_public_cam: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "lps_lib_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "Isn't this symptomatic of elite perks? Shouldn't funding go directly to public clinics instead?",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                pet_spa_initiative_expands: OutcomeModifierWeight.SlightPositive,
                pet_spa_defunded: OutcomeModifierWeight.SlightNegative,
                pet_spa_public_cam: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "lps_con_q1",
      questions: {
        lps_con_q1: {
          id: "lps_con_q1",
          text: "Conservative papers blast the administration for spoiling pets with a taxpayer-funded spa. How do you justify it?",
          depth: 0,
          answers: [
            {
              id: "lps_con_q1_a1",
              type: AnswerType.Reassure,
              text: "Funds are being repaid. The spa was an overreach and is now cancelled. Wellness efforts will focus on humans first.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                pet_spa_defunded: OutcomeModifierWeight.ModeratePositive,
                pet_spa_public_cam: OutcomeModifierWeight.ModerateNegative,
                pet_spa_initiative_expands: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "lps_con_q1_a2",
              type: AnswerType.Deny,
              text: "The spa served therapy animals for veterans. Any luxuries were exaggerated in early invoices now corrected.",
              impacts: { cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                pet_spa_public_cam: OutcomeModifierWeight.SlightPositive,
                pet_spa_defunded: OutcomeModifierWeight.SlightNegative,
                pet_spa_initiative_expands: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "lps_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Past presidents pampered pets too. Let's address rising healthcare costs rather than spa gossip.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                pet_spa_initiative_expands: OutcomeModifierWeight.SlightPositive,
                pet_spa_defunded: OutcomeModifierWeight.SlightNegative,
                pet_spa_public_cam: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "lps_ind_q1",
      questions: {
        lps_ind_q1: {
          id: "lps_ind_q1",
          text: "Independent outlets ask whether broader pet programs will continue despite the spa backlash.",
          depth: 0,
          answers: [
            {
              id: "lps_ind_q1_a1",
              type: AnswerType.Inform,
              text: "Other pet wellness programs are under review. No decision has been made on continuing the initiative beyond this year.",
              impacts: { cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                pet_spa_initiative_expands: OutcomeModifierWeight.ModeratePositive,
                pet_spa_defunded: OutcomeModifierWeight.ModerateNegative,
                pet_spa_public_cam: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "lps_ind_q1_a2",
              type: AnswerType.Challenge,
              text: "If the public loves the pet cam, why not keep the spa open through donations instead of taxes?",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                pet_spa_public_cam: OutcomeModifierWeight.SlightPositive,
                pet_spa_defunded: OutcomeModifierWeight.SlightNegative,
                pet_spa_initiative_expands: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
