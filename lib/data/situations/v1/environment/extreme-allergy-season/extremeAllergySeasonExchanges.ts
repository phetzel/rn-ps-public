import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const extremeAllergySeasonExchanges: ExchangeData[] = [
  /* ───────── Conservative outlet ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "eas_con_q1",
      questions: {
        eas_con_q1: {
          id: "eas_con_q1",
          text: "Businesses worry worker absences will explode. What relief are you offering, and will new regulations come?",
          depth: 0,
          answers: [
            {
              id: "eas_con_q1_a1",
              type: AnswerType.Reassure,
              text: "Subsidies for medication and workplace filters are on the table. No heavy-handed rules yet.",
              impacts: {
                cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } },
              },
              followUpId: "eas_con_q1_f1",
              outcomeModifiers: {
                eas_subsidized_meds: OutcomeModifierWeight.ModeratePositive,
                eas_drug_shortages_fury: OutcomeModifierWeight.ModerateNegative,
                eas_pollen_tax_divides: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "eas_con_q1_a2",
              type: AnswerType.Inform,
              text: "Treasury is drafting tax credits for pollen control gear while HHS tracks supply chains.",
              impacts: {
                cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive } },
              },
              followUpId: "eas_con_q1_f1",
              outcomeModifiers: {
                eas_subsidized_meds: OutcomeModifierWeight.ModeratePositive,
                eas_drug_shortages_fury: OutcomeModifierWeight.ModerateNegative,
                eas_pollen_tax_divides: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "eas_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Pollen happens every year; we trust companies to keep tissues handy.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              followUpId: "eas_con_q1_f1",
              outcomeModifiers: {
                eas_drug_shortages_fury: OutcomeModifierWeight.SlightPositive,
                eas_subsidized_meds: OutcomeModifierWeight.SlightNegative,
                eas_pollen_tax_divides: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        eas_con_q1_f1: {
          id: "eas_con_q1_f1",
          text: "If shortages continue, will you impose a national pollen tax or rationing?",
          depth: 1,
          answers: [
            {
              id: "eas_con_q1_f1_a1",
              type: AnswerType.Challenge,
              text: "We'll tax greedy suppliers before taxing flowers. Rationing is a last resort.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                eas_subsidized_meds: OutcomeModifierWeight.ModeratePositive,
                eas_pollen_tax_divides: OutcomeModifierWeight.ModerateNegative,
                eas_drug_shortages_fury: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "eas_con_q1_f1_a2",
              type: AnswerType.Admit,
              text: "Rationing medications is on the table if supplies collapse, though we hope it doesn't come to that.",
              impacts: {
                cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Negative } },
              },
              outcomeModifiers: {
                eas_drug_shortages_fury: OutcomeModifierWeight.ModeratePositive,
                eas_subsidized_meds: OutcomeModifierWeight.ModerateNegative,
                eas_pollen_tax_divides: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "eas_con_q1_f1_a3",
              type: AnswerType.Deflect,
              text: "We're exploring all options, but let's not sneeze on policy just yet.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                eas_pollen_tax_divides: OutcomeModifierWeight.SlightPositive,
                eas_subsidized_meds: OutcomeModifierWeight.SlightNegative,
                eas_drug_shortages_fury: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "eas_lib_q1",
      questions: {
        eas_lib_q1: {
          id: "eas_lib_q1",
          text: "Some activists say government subsidies favor drug companies over natural solutions. How do you respond?",
          depth: 0,
          answers: [
            {
              id: "eas_lib_q1_a1",
              type: AnswerType.Inform,
              text: "HHS funds both medical research and pollen-reducing landscaping programs, so it's not just about big pharma.",
              impacts: {
                cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive } },
              },
              outcomeModifiers: {
                eas_subsidized_meds: OutcomeModifierWeight.ModeratePositive,
                eas_pollen_tax_divides: OutcomeModifierWeight.ModerateNegative,
                eas_drug_shortages_fury: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "eas_lib_q1_a2",
              type: AnswerType.Challenge,
              text: "Natural remedies are great if you like constant sneezing. We're investing where science shows real relief.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                eas_subsidized_meds: OutcomeModifierWeight.SlightPositive,
                eas_pollen_tax_divides: OutcomeModifierWeight.SlightNegative,
                eas_drug_shortages_fury: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "eas_lib_q1_a3",
              type: AnswerType.Reassure,
              text: "Subsidies ensure no one suffers for lack of medicine while we ramp up green initiatives.",
              impacts: {
                cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } },
              },
              outcomeModifiers: {
                eas_subsidized_meds: OutcomeModifierWeight.SlightPositive,
                eas_drug_shortages_fury: OutcomeModifierWeight.SlightNegative,
                eas_pollen_tax_divides: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────── Independent outlet ───────── */
  {
    publication: PublicationStaticId.IndependentPrimary,
    content: {
      rootQuestionId: "eas_ind_q1",
      questions: {
        eas_ind_q1: {
          id: "eas_ind_q1",
          text: "Poll workers and teachers say absenteeism is skyrocketing. What's your plan to keep daily life running?",
          depth: 0,
          answers: [
            {
              id: "eas_ind_q1_a1",
              type: AnswerType.Inform,
              text: "We're coordinating nationwide forecasts and distributing free masks to high-risk groups.",
              impacts: {
                cabinet: { [CabinetStaticId.HHS]: { weight: ExchangeImpactWeight.Positive } },
              },
              outcomeModifiers: {
                eas_subsidized_meds: OutcomeModifierWeight.ModeratePositive,
                eas_drug_shortages_fury: OutcomeModifierWeight.ModerateNegative,
                eas_pollen_tax_divides: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "eas_ind_q1_a2",
              type: AnswerType.Reassure,
              text: "Schools and polling sites will get extra cleaning crews, and remote options are ready if things get rough.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                eas_subsidized_meds: OutcomeModifierWeight.SlightPositive,
                eas_drug_shortages_fury: OutcomeModifierWeight.SlightNegative,
                eas_pollen_tax_divides: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "eas_ind_q1_a3",
              type: AnswerType.Deflect,
              text: "We survived worse flu seasons. Let's not cancel spring just yet.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyNegative },
              },
              outcomeModifiers: {
                eas_drug_shortages_fury: OutcomeModifierWeight.SlightPositive,
                eas_subsidized_meds: OutcomeModifierWeight.SlightNegative,
                eas_pollen_tax_divides: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
