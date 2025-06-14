import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const familyResortFederalLandExchanges: ExchangeData[] = [
  /* ───────────────────────── Investigative outlet ─────────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "frfl_inv_q1",
      questions: {
        frfl_inv_q1: {
          id: "frfl_inv_q1",
          text: "Investigative reporters unearthed lease documents for a luxury resort built on protected land for the First Family. How was this approved?",
          depth: 0,
          answers: [
            {
              id: "frfl_inv_q1_a1",
              type: AnswerType.Admit,
              text: "Yes, the lease was expedited to promote \"eco tourism." The family's interest was noted but we believed it would boost local jobs.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "frfl_inv_q1_f1",
              outcomeModifiers: {
                frfl_project_halted: OutcomeModifierWeight.SlightPositive,
                frfl_resort_proceeds: OutcomeModifierWeight.SlightNegative,
                frfl_revenue_share: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "frfl_inv_q1_a2",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Interior,
              text: "Lease documents show a 99-year term at nominal rent with private road access for the President's family. Interior admits this should have been disclosed.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "frfl_inv_q1_f1",
              outcomeModifiers: {
                frfl_project_halted: OutcomeModifierWeight.StrongPositive,
                frfl_resort_proceeds: OutcomeModifierWeight.StrongNegative,
                frfl_revenue_share: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "frfl_inv_q1_a3",
              type: AnswerType.Deflect,
              text: "Construction hasn't even started. We're reviewing environmental reports and nothing is finalized.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              followUpId: "frfl_inv_q1_f1",
              outcomeModifiers: {
                frfl_project_halted: OutcomeModifierWeight.SlightPositive,
                frfl_resort_proceeds: OutcomeModifierWeight.SlightNegative,
                frfl_revenue_share: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        frfl_inv_q1_f1: {
          id: "frfl_inv_q1_f1",
          text: "Will those lease terms, including access clauses, be released to the public?",
          depth: 1,
          answers: [
            {
              id: "frfl_inv_q1_f1_a1",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Interior,
              text: "Yes. The documents detail the 99-year lease and private road. We'll post them online this week for full transparency.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                frfl_project_halted: OutcomeModifierWeight.ModeratePositive,
                frfl_resort_proceeds: OutcomeModifierWeight.ModerateNegative,
                frfl_revenue_share: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "frfl_inv_q1_f1_a2",
              type: AnswerType.Deflect,
              text: "We're reviewing what can be released. Some clauses may involve security, but we'll share what we can.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                frfl_revenue_share: OutcomeModifierWeight.SlightPositive,
                frfl_project_halted: OutcomeModifierWeight.SlightNegative,
                frfl_resort_proceeds: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "frfl_inv_q1_f1_a3",
              type: AnswerType.Challenge,
              text: "The public deserves to see how a national park became private playground. We'll push for full disclosure.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                frfl_resort_proceeds: OutcomeModifierWeight.SlightPositive,
                frfl_revenue_share: OutcomeModifierWeight.SlightNegative,
                frfl_project_halted: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "frfl_lib_q1",
      questions: {
        frfl_lib_q1: {
          id: "frfl_lib_q1",
          text: "Liberal papers condemn the resort as blatant nepotism and an environmental threat. Will the project be cancelled?",
          depth: 0,
          answers: [
            {
              id: "frfl_lib_q1_a1",
              type: AnswerType.Admit,
              text: "We acknowledge the optics are poor. The lease is being re-evaluated, and construction is paused pending environmental review.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                frfl_project_halted: OutcomeModifierWeight.ModeratePositive,
                frfl_resort_proceeds: OutcomeModifierWeight.ModerateNegative,
                frfl_revenue_share: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "frfl_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "Any public funds used will be transparently accounted for, and local revenue projections could benefit the park service.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                frfl_revenue_share: OutcomeModifierWeight.SlightPositive,
                frfl_resort_proceeds: OutcomeModifierWeight.SlightNegative,
                frfl_project_halted: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "frfl_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "These critics forget the land will remain public. The resort simply upgrades visitor amenities.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                frfl_resort_proceeds: OutcomeModifierWeight.SlightPositive,
                frfl_project_halted: OutcomeModifierWeight.SlightNegative,
                frfl_revenue_share: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "frfl_con_q1",
      questions: {
        frfl_con_q1: {
          id: "frfl_con_q1",
          text: "Conservative outlets blast the resort as a taxpayer-funded vacation home. Why should ordinary families pay for presidential luxury?",
          depth: 0,
          answers: [
            {
              id: "frfl_con_q1_a1",
              type: AnswerType.Reassure,
              text: "Tax dollars are not funding the resort. It's leased to a private developer who covers costs and shares revenue with the park.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                frfl_revenue_share: OutcomeModifierWeight.ModeratePositive,
                frfl_resort_proceeds: OutcomeModifierWeight.ModerateNegative,
                frfl_project_halted: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "frfl_con_q1_a2",
              type: AnswerType.Challenge,
              text: "The President deserves some privacy and has followed every rule. Critics just want to deny the family any comfort.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Negative },
              },
              outcomeModifiers: {
                frfl_resort_proceeds: OutcomeModifierWeight.SlightPositive,
                frfl_project_halted: OutcomeModifierWeight.SlightNegative,
                frfl_revenue_share: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "frfl_con_q1_a3",
              type: AnswerType.Deflect,
              text: "The site remains federal land. Let's focus on bigger issues facing our parks system.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              outcomeModifiers: {
                frfl_project_halted: OutcomeModifierWeight.SlightPositive,
                frfl_resort_proceeds: OutcomeModifierWeight.SlightNegative,
                frfl_revenue_share: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
