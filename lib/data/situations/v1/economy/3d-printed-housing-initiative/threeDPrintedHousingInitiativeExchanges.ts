import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const threeDPrintedHousingInitiativeExchanges: ExchangeData[] = [
  /* ───── Investigative outlet ───── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "phi_inv_q1",
      questions: {
        /* depth-0 root */
        phi_inv_q1: {
          id: "phi_inv_q1",
          text: "Engineers warn printed walls are cracking and cost models skip retrofits. Why rush billions in before third-party safety tests finish?",
          depth: 0,
          answers: [
            {
              id: "phi_inv_q1_a1",
              type: AnswerType.Inform /* President line */,
              text: "Pilot homes passed seismic tests at double code specs; a live sensor net reports stress in real time. We fund only printers that meet those metrics.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "phi_inv_q1_f1",
              outcomeModifiers: {
                phi_rents_drop_success: OutcomeModifierWeight.ModeratePositive, // +6
                phi_structural_flaws: OutcomeModifierWeight.ModerateNegative, // –6
                phi_budget_overruns: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phi_inv_q1_a2",
              type: AnswerType.Reassure /* Treasury pref */,
              text: "Every contract escrows 10 % for defect repair, and CBO numbers already include retrofit contingencies. Taxpayers are shielded from surprise invoices.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              followUpId: "phi_inv_q1_f1",
              outcomeModifiers: {
                phi_rents_drop_success: OutcomeModifierWeight.SlightPositive, // +4
                phi_structural_flaws: OutcomeModifierWeight.SlightNegative, // –4
                phi_budget_overruns: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phi_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Treasury,
              text: "Internal CBO sheet shows printed units cost $91 K versus $165 K stick-built, with a $3 B recall fund ready. Sensors flag micro-cracks before residents move in.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.StronglyPositive,
                  },
                },
              },
              followUpId: "phi_inv_q1_f1",
              outcomeModifiers: {
                phi_rents_drop_success: OutcomeModifierWeight.StrongPositive, // +8
                phi_budget_overruns: OutcomeModifierWeight.StrongNegative, // –8
                phi_structural_flaws: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },

        /* depth-1 follow-up */
        phi_inv_q1_f1: {
          id: "phi_inv_q1_f1",
          text: "If flaws still surface, will families get relocation aid and who pays—the printer firms or taxpayers?",
          depth: 1,
          answers: [
            {
              id: "phi_inv_q1_f1_a1",
              type: AnswerType.Reassure /* Treasury */,
              text: "Relocation stipends come from the escrow bond first; the federal back-stop activates only if a contractor collapses, not for normal defects.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                phi_structural_flaws: OutcomeModifierWeight.ModerateNegative,
                phi_rents_drop_success: OutcomeModifierWeight.ModeratePositive,
                phi_budget_overruns: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phi_inv_q1_f1_a2",
              type: AnswerType.Deflect /* President quip */,
              text: "Home-owner safety is baked in; if a wall hiccups, firms pay. Families won’t foot the bill—or lift a single replacement brick.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                phi_structural_flaws: OutcomeModifierWeight.SlightPositive,
                phi_budget_overruns: OutcomeModifierWeight.SlightNegative,
                phi_rents_drop_success: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───── Conservative outlet ───── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "phi_con_q1",
      questions: {
        phi_con_q1: {
          id: "phi_con_q1",
          text: "Critics call this a taxpayer toy that will balloon deficits when printers break. Why not leave housing to the free market?",
          depth: 0,
          answers: [
            {
              id: "phi_con_q1_a1",
              type: AnswerType.Challenge /* President */,
              text: "The market failed to build enough roofs for veterans and nurses. Fast printers cut red tape and costs—government is jump-starting, not replacing, private builders.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                phi_rents_drop_success: OutcomeModifierWeight.SlightPositive,
                phi_budget_overruns: OutcomeModifierWeight.SlightNegative,
                phi_structural_flaws: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phi_con_q1_a2",
              type: AnswerType.Reassure /* Treasury */,
              text: "The bond model means printers are paid when units pass inspection, not before. If machines fail, investors not taxpayers eat the loss.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.Positive,
                  },
                },
              },
              outcomeModifiers: {
                phi_budget_overruns: OutcomeModifierWeight.ModerateNegative,
                phi_rents_drop_success: OutcomeModifierWeight.ModeratePositive,
                phi_structural_flaws: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phi_con_q1_a3",
              type: AnswerType.Deflect /* HHS angle */,
              text: "Traditional builds pack mold and dust; printed concrete is cleaner. Health savings offset any fiscal bumps down the road.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                phi_structural_flaws: OutcomeModifierWeight.SlightPositive,
                phi_rents_drop_success: OutcomeModifierWeight.SlightNegative,
                phi_budget_overruns: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───── Liberal outlet ───── */
  {
    publication: PublicationStaticId.LibPrimary,
    content: {
      rootQuestionId: "phi_lib_q1",
      questions: {
        phi_lib_q1: {
          id: "phi_lib_q1",
          text: "Housing advocates welcome more supply but fear printers will sideline union jobs. How does the plan protect labor standards?",
          depth: 0,
          answers: [
            {
              id: "phi_lib_q1_a1",
              type: AnswerType.Inform /* President */,
              text: "Each site must hire certified operators and union electricians; 3-D frames speed work but skilled crews still handle wiring, plumbing, and finish jobs.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                phi_rents_drop_success: OutcomeModifierWeight.SlightPositive,
                phi_budget_overruns: OutcomeModifierWeight.SlightNegative,
                phi_structural_flaws: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phi_lib_q1_a2",
              type: AnswerType.Reassure /* Treasury labor grants */,
              text: "Tariff-backed grants retrain carpenters as printer techs at union wages. No worker gets left behind as robots pour concrete.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                phi_rents_drop_success: OutcomeModifierWeight.ModeratePositive,
                phi_structural_flaws: OutcomeModifierWeight.ModerateNegative,
                phi_budget_overruns: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "phi_lib_q1_a3",
              type: AnswerType.Deflect /* HHS health again */,
              text: "Safer, cleaner worksites mean fewer injuries. The real labor win is sending folks home without lungfuls of sawdust.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.HHS]: {
                    weight: ExchangeImpactWeight.SlightlyPositive,
                  },
                },
              },
              outcomeModifiers: {
                phi_structural_flaws: OutcomeModifierWeight.SlightPositive,
                phi_rents_drop_success: OutcomeModifierWeight.SlightNegative,
                phi_budget_overruns: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
