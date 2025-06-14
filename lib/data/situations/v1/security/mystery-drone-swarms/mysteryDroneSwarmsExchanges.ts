import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const mysteryDroneSwarmsExchanges: ExchangeData[] = [
  /* ───────────────────────── 1. Conservative outlet with follow-up ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "mds_con_q1",
      questions: {
        mds_con_q1: {
          id: "mds_con_q1",
          text: "Swarms of unidentified drones hover over our cities. Critics say you're slow to act against a possible foreign intrusion. What's your plan?",
          depth: 0,
          answers: [
            {
              id: "mds_con_q1_a1",
              type: AnswerType.Challenge,
              text: "Defense teams are ready to intercept any hostile craft. Early data suggests amateur pilots, not enemy spies, but we'll neutralize threats if needed.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "mds_con_q1_f1",
              outcomeModifiers: {
                mds_hobbyists_fined: OutcomeModifierWeight.ModeratePositive,
                mds_foreign_probe_revealed: OutcomeModifierWeight.ModerateNegative,
                mds_tech_demo_fail: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mds_con_q1_a2",
              type: AnswerType.Inform,
              text: "Homeland is tracking flight paths and coordinating with local police. So far patterns look random and mostly harmless.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "mds_con_q1_f1",
              outcomeModifiers: {
                mds_hobbyists_fined: OutcomeModifierWeight.SlightPositive,
                mds_foreign_probe_revealed: OutcomeModifierWeight.SlightNegative,
                mds_tech_demo_fail: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mds_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Let's not leap to invasion theories. We suspect overenthusiastic gadget geeks. Either way, skies will be clear soon enough.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              followUpId: "mds_con_q1_f1",
              outcomeModifiers: {
                mds_tech_demo_fail: OutcomeModifierWeight.SlightPositive,
                mds_hobbyists_fined: OutcomeModifierWeight.SlightNegative,
                mds_foreign_probe_revealed: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        mds_con_q1_f1: {
          id: "mds_con_q1_f1",
          text: "Will you authorize the military to take down these drones if they keep appearing?",
          depth: 1,
          answers: [
            {
              id: "mds_con_q1_f1_a1",
              type: AnswerType.Challenge,
              text: "If any drone poses a threat, we’ll ground it or force it down. We won’t let mystery gadgets crowd our skies.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                mds_foreign_probe_revealed: OutcomeModifierWeight.ModeratePositive,
                mds_hobbyists_fined: OutcomeModifierWeight.ModerateNegative,
                mds_tech_demo_fail: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mds_con_q1_f1_a2",
              type: AnswerType.Reassure,
              text: "Rules of engagement already allow us to disable rogue drones safely. Expect updated guidelines out shortly.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                mds_hobbyists_fined: OutcomeModifierWeight.SlightPositive,
                mds_tech_demo_fail: OutcomeModifierWeight.SlightNegative,
                mds_foreign_probe_revealed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mds_con_q1_f1_a3",
              type: AnswerType.Deflect,
              text: "We prefer to warn owners first. No one wants drone parts raining down on commuters unless absolutely necessary.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                mds_tech_demo_fail: OutcomeModifierWeight.SlightPositive,
                mds_hobbyists_fined: OutcomeModifierWeight.SlightNegative,
                mds_foreign_probe_revealed: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── 2. Liberal outlet ─────────────────────────── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "mds_lib_q1",
      questions: {
        mds_lib_q1: {
          id: "mds_lib_q1",
          text: "Privacy advocates worry the drone swarms could lead to increased surveillance. How will you stop the swarms without overreach?",
          depth: 0,
          answers: [
            {
              id: "mds_lib_q1_a1",
              type: AnswerType.Inform,
              text: "Homeland is identifying operators and issuing cease-and-desist notices. No new spy powers are on the table.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                mds_hobbyists_fined: OutcomeModifierWeight.ModeratePositive,
                mds_foreign_probe_revealed: OutcomeModifierWeight.ModerateNegative,
                mds_tech_demo_fail: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mds_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "These drones appear more pesky than sinister. We’ll enforce existing laws and respect civil liberties while clearing the skies.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                mds_hobbyists_fined: OutcomeModifierWeight.SlightPositive,
                mds_tech_demo_fail: OutcomeModifierWeight.SlightNegative,
                mds_foreign_probe_revealed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mds_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Frankly, a swarm of cameras watching the watchers might make for good accountability. Still, we’re investigating.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                mds_tech_demo_fail: OutcomeModifierWeight.SlightPositive,
                mds_hobbyists_fined: OutcomeModifierWeight.SlightNegative,
                mds_foreign_probe_revealed: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── 3. Independent outlet ─────────────────────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "mds_ind_q1",
      questions: {
        mds_ind_q1: {
          id: "mds_ind_q1",
          text: "Citizens just want to know if these drones are dangerous or just annoying. When will you have definitive answers?",
          depth: 0,
          answers: [
            {
              id: "mds_ind_q1_a1",
              type: AnswerType.Inform,
              text: "Initial reviews show no weapons or spy gear. We’ll publish a full report this week and coordinate with local authorities.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                mds_hobbyists_fined: OutcomeModifierWeight.StrongPositive,
                mds_foreign_probe_revealed: OutcomeModifierWeight.StrongNegative,
                mds_tech_demo_fail: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mds_ind_q1_a2",
              type: AnswerType.Deny,
              text: "There’s no sign of a coordinated attack. Panic helps no one. Let’s wait for the investigation before spinning conspiracies.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                mds_hobbyists_fined: OutcomeModifierWeight.SlightPositive,
                mds_foreign_probe_revealed: OutcomeModifierWeight.SlightNegative,
                mds_tech_demo_fail: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "mds_ind_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Defense,
              text: "Radar analysis shows identical paths originating near Riverside. We seized the club’s gear and are issuing fines, not missile strikes.",
              impacts: { cabinet: { [CabinetStaticId.Defense]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              outcomeModifiers: {
                mds_hobbyists_fined: OutcomeModifierWeight.StrongPositive,
                mds_foreign_probe_revealed: OutcomeModifierWeight.StrongNegative,
                mds_tech_demo_fail: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
