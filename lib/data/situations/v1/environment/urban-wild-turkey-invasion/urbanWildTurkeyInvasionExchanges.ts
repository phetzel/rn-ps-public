import {
  AnswerType,
  CabinetStaticId,
  ExchangeImpactWeight,
  PublicationStaticId,
  ExchangeData,
  OutcomeModifierWeight,
} from "~/types";

export const urbanWildTurkeyInvasionExchanges: ExchangeData[] = [
  /* ───────── Conservative outlet ───────── */
  {
    publication: PublicationStaticId.ConPrimary,
    content: {
      rootQuestionId: "uwti_con_q1",
      questions: {
        uwti_con_q1: {
          id: "uwti_con_q1",
          text: "Urban residents are alarmed by aggressive turkeys blocking traffic. Will you deploy heavy-handed tactics or just hope they fly away?",
          depth: 0,
          answers: [
            {
              id: "uwti_con_q1_a1",
              type: AnswerType.Deflect,
              text: "Animal Control is leading the charge. No need for federal storm troops, though staff might wear helmets if birds get feisty.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.SlightlyPositive },
                },
              },
              followUpId: "uwti_con_q1_f1",
              outcomeModifiers: {
                uwti_parade_attacked: OutcomeModifierWeight.SlightPositive,
                uwti_turkeys_relocated: OutcomeModifierWeight.SlightNegative,
                uwti_city_rebrands: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uwti_con_q1_a2",
              type: AnswerType.Inform,
              text: "Traps are set tonight and wildlife teams will haul the turkeys to rural refuges. We're monitoring for aggressive behavior to keep streets safe.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              followUpId: "uwti_con_q1_f1",
              outcomeModifiers: {
                uwti_turkeys_relocated: OutcomeModifierWeight.ModeratePositive,
                uwti_parade_attacked: OutcomeModifierWeight.ModerateNegative,
                uwti_city_rebrands: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uwti_con_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Interior,
              text: "Classified relocation memo outlines a week-long trapping blitz and fenced sanctuaries outside town. Extra tranquilizer stockpiles stand by if birds resist.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              followUpId: "uwti_con_q1_f1",
              outcomeModifiers: {
                uwti_turkeys_relocated: OutcomeModifierWeight.StrongPositive,
                uwti_parade_attacked: OutcomeModifierWeight.StrongNegative,
                uwti_city_rebrands: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
        uwti_con_q1_f1: {
          id: "uwti_con_q1_f1",
          text: "Should city residents arm themselves if the birds return despite relocation plans?",
          depth: 1,
          answers: [
            {
              id: "uwti_con_q1_f1_a1",
              type: AnswerType.Reassure,
              text: "Our wildlife units expect traps to work. Residents should stay calm; we won't be handing out shotguns or declaring martial law.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Homeland]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                uwti_turkeys_relocated: OutcomeModifierWeight.SlightPositive,
                uwti_city_rebrands: OutcomeModifierWeight.SlightNegative,
                uwti_parade_attacked: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uwti_con_q1_f1_a2",
              type: AnswerType.Challenge,
              text: "Let's keep perspective. We're not turning city parks into shooting ranges. If relocation fails, we'll escalate trapping, not open season.",
              impacts: {
                president: { weight: ExchangeImpactWeight.Positive },
              },
              outcomeModifiers: {
                uwti_turkeys_relocated: OutcomeModifierWeight.ModeratePositive,
                uwti_city_rebrands: OutcomeModifierWeight.ModerateNegative,
                uwti_parade_attacked: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "uwti_ind_q1",
      questions: {
        uwti_ind_q1: {
          id: "uwti_ind_q1",
          text: "Local businesses worry the turkeys will scare off shoppers. What practical steps are you taking besides jokes?",
          depth: 0,
          answers: [
            {
              id: "uwti_ind_q1_a1",
              type: AnswerType.Reassure,
              text: "We're installing temporary fencing and setting humane traps tonight. Shop owners will get daily updates until the last bird is gone.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                uwti_turkeys_relocated: OutcomeModifierWeight.ModeratePositive,
                uwti_parade_attacked: OutcomeModifierWeight.ModerateNegative,
                uwti_city_rebrands: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uwti_ind_q1_a2",
              type: AnswerType.Deflect,
              text: "Maybe the turkeys just appreciate our small businesses. Seriously though, experts say noise makers and patience will do until relocation finishes.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                uwti_parade_attacked: OutcomeModifierWeight.SlightPositive,
                uwti_turkeys_relocated: OutcomeModifierWeight.SlightNegative,
                uwti_city_rebrands: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uwti_ind_q1_a3",
              type: AnswerType.Inform,
              text: "The relocation plan begins next week with portable pens and volunteer wranglers. We'll reimburse shops for damage if flocks return.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                uwti_turkeys_relocated: OutcomeModifierWeight.StrongPositive,
                uwti_city_rebrands: OutcomeModifierWeight.StrongNegative,
                uwti_parade_attacked: OutcomeModifierWeight.Neutral,
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
      rootQuestionId: "uwti_lib_q1",
      questions: {
        uwti_lib_q1: {
          id: "uwti_lib_q1",
          text: "Animal rights groups blame unchecked development. How will you address habitat loss while protecting citizens from angry birds?",
          depth: 0,
          answers: [
            {
              id: "uwti_lib_q1_a1",
              type: AnswerType.Inform,
              text: "We're restoring nearby woodlands and creating migration corridors. Relocation is first, but long-term habitat projects are also underway.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.Positive },
                },
              },
              outcomeModifiers: {
                uwti_turkeys_relocated: OutcomeModifierWeight.ModeratePositive,
                uwti_city_rebrands: OutcomeModifierWeight.ModerateNegative,
                uwti_parade_attacked: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uwti_lib_q1_a2",
              type: AnswerType.Deflect,
              text: "City turkeys may just crave a walkable community. We're studying zoning but let's not pretend a few birds rewrite our entire growth plan.",
              impacts: {
                president: { weight: ExchangeImpactWeight.SlightlyPositive },
              },
              outcomeModifiers: {
                uwti_city_rebrands: OutcomeModifierWeight.SlightPositive,
                uwti_parade_attacked: OutcomeModifierWeight.SlightNegative,
                uwti_turkeys_relocated: OutcomeModifierWeight.Neutral,
              },
            },
            {
              id: "uwti_lib_q1_a3",
              type: AnswerType.Authorized,
              authorizedCabinetMemberId: CabinetStaticId.Interior,
              text: "Our classified relocation file identifies new habitat secured north of the city. If flocks become violent, tranquilizer teams can deploy within minutes.",
              impacts: {
                cabinet: {
                  [CabinetStaticId.Interior]: { weight: ExchangeImpactWeight.StronglyPositive },
                },
              },
              outcomeModifiers: {
                uwti_turkeys_relocated: OutcomeModifierWeight.StrongPositive,
                uwti_parade_attacked: OutcomeModifierWeight.StrongNegative,
                uwti_city_rebrands: OutcomeModifierWeight.Neutral,
              },
            },
          ],
        },
      },
    },
  },
];
