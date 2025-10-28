import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const conPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.ConPrimary,
  content: {
    rootQuestion: {
      id: "q_root",
      text: "Overnight forestification turns freight highways into sapling slaloms; why hobble commerce and draft troops as gardeners while ‘root courts’ lurk?",
      answers: [
        {
          id: "a_r1",
          text: "Yes, the decree was my call: roads enjoyed decades of treeless privilege and we're right-sizing the shade. By rush hour, drivers can merge, yield, or marvel at basic photosynthesis.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Owning the decision projects resolve despite short‑term costs."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "State sees rushed legal posture that complicates mediation optics."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Diverting crews signals mission drift away from core defense."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Before anyone panics about root seizures, State is verifying worm easements and moss visas. Until soil passports exist, underground borders are as theoretical as a fern's tax return.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Deflection from the top reads evasive and weakens accountability."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Process emphasis aligns with State’s lane to manage fallout."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ambiguity about ops planning unsettles unit readiness messaging."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r3",
          text: "Defense's arborborne crews will precision-drop seedlings with biodegradable chutes during off-peak sorties. Collateral shade stays minimal, and every squirrel gets a reflective vest.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technical framing sidelines leadership on economic tradeoffs."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Operational detail limits State’s leverage in negotiations."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear tactics and safety protocols showcase Defense competence."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r4",
          text: "Freight won't be strangled—detours add minutes, not epochs, and timber lanes open next week. We're planting prosperity and carbon sinks, not canceling breakfast deliveries.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Minimizing impact risks backlash if delays materialize."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Tempered reassurance gives State some room to calibrate."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances without specifics read as underestimating risk."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "If troops are air-dropping saplings, what missions pause, and who’s on call if a non-tree emergency hits while brigades calibrate mulch?",
        answers: [
          {
            id: "a_s1_1",
            text: "Arbor drops use reserve logistics wings during their regularly scheduled boredom. Critical response units remain fully staffed; we can handle a wildfire and a woodpile simultaneously.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Delegating to reserves makes leadership look reactive."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limited role for State curtails early diplomatic signaling."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Use of reserve logistics shows readiness and surge capacity."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "This is a sprint, not permanent topiary. The whole operation fits in a single sunrise window, after which those crews go right back to guarding the boring vital stuff you'd notice if it vanished.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Overconfidence on tempo can appear detached from realities."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Predictability helps State coordinate external stakeholders."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Promising speed risks morale if schedules slip."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Operational details are sapling-sized today; we'll brief once pilots stop sneezing from pine pollen. Let's not pre-judge a mission that's biodegradable and frankly, a little adorable.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting gaps feeds narrative of improvisation under pressure."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Deflection preserves State’s space to set guardrails later."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lack of clarity strains planning and interop assurances."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Framing the military as distracted is a false choice; we can plant and protect. If we can multitask a parade and a deployment, we can surely juggle a seedling without dropping the flag.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Confrontational tone invites needless political escalation."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissing concerns narrows coalition for implementation."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm stance protects mission focus within the ranks."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "State will arbitrate root claims; how will you stop soil litigators from seizing lanes by noon and invoicing commuters for ‘rhizome trespass’?",
        answers: [
          {
            id: "a_s2_1",
            text: "Root tribunals are a sandbox, not a courthouse. Until State validates moss visas and worm easements, no lane can be seized by anything lacking opposable thumbs or a plausible billing address.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Downplaying risks undermines credibility with commuters."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Sandbox framing bolsters State’s authority to pilot rules."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vagueness on enforcement burdens local partners."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "We've drawn bright lines: asphalt stays sovereign pavement, roots get easements under marked medians, and commuters retain right-of-way over any plant weighing less than a picnic.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances without texture can age poorly under scrutiny."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ceding edge cases weakens State’s arbitration leverage."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear boundary claim reduces friction on field teams."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Mediation panels pair botanists with traffic engineers and one very bored notary. Hearings are remote and asynchronous; no one will miss lunch to testify on behalf of a shrub.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Detail on panels shifts spotlight away from executive lead."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Expert mediation elevates State as principled problem‑solver."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Added process implies extra coordination load for units."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "The only people 'seizing lanes' are headline writers. If someone serves papers to a sapling with a straight face, we'll frame the affidavit and give the ficus in reception a promotion.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Mocking critics signals insecurity about practical impacts."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal diminishes State’s posture as neutral arbiter."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Pushback may rally teams but risks public perception hit."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter1",
        text: "Say a squirrel nips a visor and a chute tangles; what’s the backup, and who pays if a seedling dings a hood ornament on a DuneBug 2000?",
        answers: [
          {
            id: "a_t1_1",
            text: "Chute fouls trigger a no-drop go‑around; the sapling rides back to base like a very green VIP. Any fender dings are covered by the Highway Greening Fund plus a courtesy car wash.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Procedural minutiae can feel like dodging broader costs."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limited mention of claims leaves State out of the loop."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Fail‑safes and go‑arounds display professional discipline."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We've war‑gamed the squirrel scenario to boredom. Their vests are bite‑resistant, visors are snack‑proof, and pilots treat rodents as colleagues with union‑level snack breaks.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Glib certainty can backfire if oddities actually occur."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Preparedness narrative helps State coordinate incident lines."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overconfidence invites criticism if a mishap surfaces."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "There is no world where a seedling outmuscles a hood ornament; these trees are smaller than a travel mug and deployed gentler than confetti at a quiet, legally compliant wedding.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Denying plausibility makes leadership look out of touch."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard denial undermines future negotiating flexibility."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Confidence steadies crews but risks seeming dismissive."
                }
              }
            }
          },
          {
          id: "a_t1_4",
          text: "Insurance tables beat hypotheticals. Let's plant the trees first and litigate the squirrels later, preferably after they attend a safety seminar with trail mix and tiny name badges.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deferring specifics appears like avoiding accountability."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Process focus gives State latitude to refine guidelines."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lack of detail hinders pre‑mission coordination."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Suppose roots creep into the fast lane and file for squatter’s rights; will State send soil marshals with trowels, or just email a mulch advisory?",
        answers: [
          {
            id: "a_t2_1",
            text: "'Squatter's rights' sounds punchy, but asphalt isn't a landlord. We'll publish a lane etiquette guide once everyone agrees what a fern can legally own besides vibes and shade.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Semantic parsing here reads as dodging practical stakes."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clarifying jurisdiction reinforces State’s rule‑setting role."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Unclear triggers complicate tasking and response timing."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Disputes trigger gentle-removal: lift, re-center under the median, and log a note. No trowel raids at dawn, and certainly no subpoenas stapled to bark or texted to a bush.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hands‑on method reduces the case for urgent executive push."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Operational tilt sidelines State’s mediation profile."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Gentle‑removal SOPs highlight precision and restraint."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Commuters won't face fern court; their only task is easing slightly for newborn shade. If you can steer past a traffic cone, you can coexist peacefully with a twig.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Sweeping reassurance risks a gap with on‑road realities."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Messaging calm helps State manage local liaisons."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Downplaying issues can undercut readiness to pivot."
                }
              }
            }
          },
          {
          id: "a_t2_4",
          text: "If we can route trucks around miles of cones for months, we can route them around inches of sapling for a morning. Outrage should scale to the tape measure, not the headline font.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Picking a fight invites blame if disruptions emerge."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Provocation strains cooperation with external partners."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Resolve can stiffen spines but narrows options later."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
