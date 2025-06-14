import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const cabinetParkingWarExchanges: ExchangeData[] = [
  /* ───────────────────────── Conservative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "cpw_con_q1",
      questions: {
        cpw_con_q1: {
          id: "cpw_con_q1",
          text: "Conservative outlets point to security footage of staff vandalizing cars. Who ordered this childish parking war?",
          depth: 0,
          answers: [
            {
              id: "cpw_con_q1_a1",
              type: AnswerType.Reassure,
              text: "Both departments regret the incidents and are cooperating with Justice. The staff involved face discipline, and a joint statement will apologize.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive },
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "cpw_con_q1_f1",
              outcomeModifiers: {
                cpw_public_apology: OutcomeModifierWeight.ModeratePositive,
                cpw_panel_reprimand: OutcomeModifierWeight.ModerateNegative,
                cpw_peace_photo: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cpw_con_q1_a2",
              type: AnswerType.Challenge,
              text: "Vandalizing property is unacceptable, and anyone proven responsible will face termination. Let's allow Justice to sort out the evidence.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              followUpId: "cpw_con_q1_f1",
              outcomeModifiers: {
                cpw_panel_reprimand: OutcomeModifierWeight.SlightPositive,
                cpw_public_apology: OutcomeModifierWeight.SlightNegative,
                cpw_peace_photo: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cpw_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Parking disputes happen in every workplace. Let's not treat a few scratched bumpers as a national crisis.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "cpw_con_q1_f1",
              outcomeModifiers: {
                cpw_peace_photo: OutcomeModifierWeight.SlightPositive,
                cpw_public_apology: OutcomeModifierWeight.SlightNegative,
                cpw_panel_reprimand: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        cpw_con_q1_f1: {
          id: "cpw_con_q1_f1",
          text: "Will Justice press criminal charges after reviewing the parking-lot security footage, or is this just a slap on the wrist?",
          depth: 1,
          answers: [
            {
              id: "cpw_con_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Justice is reviewing the footage and interviewing staff. Misdemeanor charges are possible once evidence is compiled.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                cpw_panel_reprimand: OutcomeModifierWeight.ModeratePositive,
                cpw_public_apology: OutcomeModifierWeight.ModerateNegative,
                cpw_peace_photo: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cpw_con_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "The review is ongoing, and we won't speculate on charges. Let's focus on ensuring parking assignments are fair going forward.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                cpw_peace_photo: OutcomeModifierWeight.SlightPositive,
                cpw_panel_reprimand: OutcomeModifierWeight.SlightNegative,
                cpw_public_apology: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "cpw_lib_q1",
      questions: {
        cpw_lib_q1: {
          id: "cpw_lib_q1",
          text: "Liberal reporters mock the petty sabotage and ask if it reflects a toxic culture in the cabinet.",
          depth: 0,
          answers: [
            {
              id: "cpw_lib_q1_a1",
              type: AnswerType.Challenge,
              text: "It's a childish dispute, not a sign of systemic rot. We're redirecting staff to focus on real policy work.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                cpw_public_apology: OutcomeModifierWeight.SlightNegative,
                cpw_peace_photo: OutcomeModifierWeight.SlightPositive,
                cpw_panel_reprimand: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cpw_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "An internal review is underway with Justice watching closely. Any staffer who damaged vehicles will repay costs and face discipline.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Justice]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                cpw_panel_reprimand: OutcomeModifierWeight.ModeratePositive,
                cpw_public_apology: OutcomeModifierWeight.ModerateNegative,
                cpw_peace_photo: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cpw_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Cabinet members have more pressing duties than parking drama. We'll fix it internally.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                cpw_peace_photo: OutcomeModifierWeight.SlightPositive,
                cpw_public_apology: OutcomeModifierWeight.SlightNegative,
                cpw_panel_reprimand: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "cpw_ind_q1",
      questions: {
        cpw_ind_q1: {
          id: "cpw_ind_q1",
          text: "Independent media wonder if security budgets will rise after this parking fiasco.",
          depth: 0,
          answers: [
            {
              id: "cpw_ind_q1_a1",
              type: AnswerType.Inform,
              text: "Security upgrades are minimal. The departments will share footage systems, and any cost comes from existing maintenance funds.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.State]: { weight: ExchangeImpactWeight.Positive },
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                cpw_peace_photo: OutcomeModifierWeight.SlightPositive,
                cpw_panel_reprimand: OutcomeModifierWeight.SlightNegative,
                cpw_public_apology: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cpw_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "Budget questions distract from actual work. Costs will be contained, and the feud is over.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                cpw_public_apology: OutcomeModifierWeight.SlightNegative,
                cpw_peace_photo: OutcomeModifierWeight.SlightPositive,
                cpw_panel_reprimand: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "cpw_ind_q1_a3",
              type: AnswerType.Challenge,
              text: "If costs spike, will the public see receipts? Transparency is needed even for parking squabbles.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                cpw_panel_reprimand: OutcomeModifierWeight.SlightPositive,
                cpw_peace_photo: OutcomeModifierWeight.SlightNegative,
                cpw_public_apology: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
