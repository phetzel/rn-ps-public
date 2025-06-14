import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const internetOutagePanicExchanges: ExchangeData[] = [
  /* ───────────────────────── 1. Conservative outlet with follow-up ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "iop_con_q1",
      questions: {
        iop_con_q1: {
          id: "iop_con_q1",
          text: "Critics say this blackout exposes your security failures. Was this an attack you ignored or simple negligence by telecom regulators?",
          depth: 0,
          answers: [
            {
              id: "iop_con_q1_a1",
              type: AnswerType.Challenge,
              text: "No attack slipped through. Our investigators traced the outage to hardware failure, and we’re holding telecoms accountable.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              followUpId: "iop_con_q1_f1",
              outcomeModifiers: {
                iop_glitch_found: OutcomeModifierWeight.ModeratePositive,
                iop_attack_confirmed: OutcomeModifierWeight.ModerateNegative,
                iop_telecoms_blamed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "iop_con_q1_a2",
              type: AnswerType.Reassure,
              text: "Homeland security teams are on site with telecoms. Service will be fully restored within hours and no evidence points to sabotage.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              followUpId: "iop_con_q1_f1",
              outcomeModifiers: {
                iop_glitch_found: OutcomeModifierWeight.SlightPositive,
                iop_attack_confirmed: OutcomeModifierWeight.SlightNegative,
                iop_telecoms_blamed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "iop_con_q1_a3",
              type: AnswerType.Deflect,
              text: "Perhaps unplugging once in a while would be healthy. Our team is still gathering details but the world hasn’t ended.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              followUpId: "iop_con_q1_f1",
              outcomeModifiers: {
                iop_glitch_found: OutcomeModifierWeight.SlightNegative,
                iop_telecoms_blamed: OutcomeModifierWeight.SlightPositive,
                iop_attack_confirmed: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        iop_con_q1_f1: {
          id: "iop_con_q1_f1",
          text: "If it was just a glitch, why did it take hours to restore service? Are you covering for incompetent contractors?",
          depth: 1,
          answers: [
            {
              id: "iop_con_q1_f1_a1",
              type: AnswerType.Inform,
              text: "Engineers replaced a failed backbone router; it required cross-country coordination which took time. We have logged each step transparently.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                iop_glitch_found: OutcomeModifierWeight.ModeratePositive,
                iop_attack_confirmed: OutcomeModifierWeight.ModerateNegative,
                iop_telecoms_blamed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "iop_con_q1_f1_a2",
              type: AnswerType.Deny,
              text: "No one is covering anything. The delay was due to hardware shipping time, not some grand conspiracy.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyPositive } },
              outcomeModifiers: {
                iop_glitch_found: OutcomeModifierWeight.SlightPositive,
                iop_attack_confirmed: OutcomeModifierWeight.SlightNegative,
                iop_telecoms_blamed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "iop_con_q1_f1_a3",
              type: AnswerType.Deflect,
              text: "If folks were less reliant on the net they might survive a brief outage. We'll look into the contractors and move on.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                iop_telecoms_blamed: OutcomeModifierWeight.SlightPositive,
                iop_attack_confirmed: OutcomeModifierWeight.SlightNegative,
                iop_glitch_found: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "iop_lib_q1",
      questions: {
        iop_lib_q1: {
          id: "iop_lib_q1",
          text: "Businesses say the outage cost millions. What is the administration doing to prevent future disruptions and support affected workers?",
          depth: 0,
          answers: [
            {
              id: "iop_lib_q1_a1",
              type: AnswerType.Inform,
              text: "Homeland is installing redundant infrastructure and partnering with telecoms to create rapid backup channels.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                iop_glitch_found: OutcomeModifierWeight.ModeratePositive,
                iop_attack_confirmed: OutcomeModifierWeight.ModerateNegative,
                iop_telecoms_blamed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "iop_lib_q1_a2",
              type: AnswerType.Reassure,
              text: "Treasury is offering emergency loans to small businesses hit hardest and expects normal operations tomorrow.",
              impacts: { cabinet: { [CabinetStaticId.Treasury]: { weight: ExchangeImpactWeight.Positive } } },
              outcomeModifiers: {
                iop_glitch_found: OutcomeModifierWeight.SlightPositive,
                iop_attack_confirmed: OutcomeModifierWeight.SlightNegative,
                iop_telecoms_blamed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "iop_lib_q1_a3",
              type: AnswerType.Deflect,
              text: "Maybe it's a sign to go outside and touch grass. We'll look into compensation later, but first let's get everything online again.",
              impacts: { president: { weight: ExchangeImpactWeight.SlightlyNegative } },
              outcomeModifiers: {
                iop_glitch_found: OutcomeModifierWeight.SlightNegative,
                iop_telecoms_blamed: OutcomeModifierWeight.SlightPositive,
                iop_attack_confirmed: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },

  /* ───────────────────────── 3. Investigative outlet ───────────────────── */
  {
    publication: PublicationStaticId.Investigative,
    content: {
      rootQuestionId: "iop_inv_q1",
      questions: {
        iop_inv_q1: {
          id: "iop_inv_q1",
          text: "Did your security audits miss vulnerabilities that allowed this blackout? Provide specifics on how this won't happen again.",
          depth: 0,
          answers: [
            {
              id: "iop_inv_q1_a1",
              type: AnswerType.Inform,
              text: "Recent audits covered software, not the failing hardware. We are now expanding reviews to all infrastructure and requiring redundancy.",
              impacts: { president: { weight: ExchangeImpactWeight.Positive } },
              outcomeModifiers: {
                iop_glitch_found: OutcomeModifierWeight.ModeratePositive,
                iop_attack_confirmed: OutcomeModifierWeight.ModerateNegative,
                iop_telecoms_blamed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "iop_inv_q1_a2",
              type: AnswerType.Deny,
              text: "Our audits didn't miss a thing. This was strictly mechanical failure. We'll publish the repair logs to prove it.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.SlightlyPositive } } },
              outcomeModifiers: {
                iop_glitch_found: OutcomeModifierWeight.SlightPositive,
                iop_attack_confirmed: OutcomeModifierWeight.SlightNegative,
                iop_telecoms_blamed: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "iop_inv_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Homeland,
              text: "Internal logs show a router meltdown at a single hub. Homeland replaced the gear and is hardening backups to avoid a repeat.",
              impacts: { cabinet: { [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.StronglyPositive } } },
              outcomeModifiers: {
                iop_glitch_found: OutcomeModifierWeight.StrongPositive,
                iop_attack_confirmed: OutcomeModifierWeight.StrongNegative,
                iop_telecoms_blamed: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
