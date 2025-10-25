import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const investigativeExchange: ExchangeData = {
  publication: PublicationStaticId.Investigative,
  content: {
    rootQuestion: {
      id: "q_root",
      text: "Leaked memos show rodent visas, acorn tariffs, and a protocol tweak that crowns one trainer. Who signed off, who profits, and why the no-bid?",
      answers: [
        {
          id: "a_r1",
          text: "The President once deputized a squirrel choir for a county fair, and yes, he approved a pilot visa lane to avoid a summit meltdown. We’ll publish every contract and cap fees before the encore.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "He owns the squirrel choir story to pivot and defuse the procurement angle."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They dislike reputational risk from whimsical admissions amid budget asks."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They worry honesty invites scrutiny of rushed visa rules."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "If an unvetted rodent crosses a secure rope, that’s an air incursion at ankle altitude. Seed tariffs support interdiction so guests stay safe. We won’t apologize for caution.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He looks reactive as Defense reframes rodents as security assets."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Framing as air assets pleases hawks and justifies seed interdiction lines."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It sidelines treaty language and complicates ceremonial norms."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r3",
          text: "Under the Small-State Ceremonials framework, temporary fauna visas can be issued, and protocol Annex F covers anthem performers. The interim trainer used a lawful emergency listing.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He cedes spotlight to footnotes, dampening his showman advantage."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Plain citations undercut their urgency narrative."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear rules reassure partners and calm domestic nerves."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r4",
          text: "Let’s not pretend the summit hinges on woodwind-sized mammals. Judge us by outcomes: a smooth ceremony, zero bites, and a balanced ledger, not by the optics of tiny tuxedos.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "A shrug lightens tone but risks appearing evasive on no-bid concerns."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissiveness blunts their case for expanded security funds."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Jokes erode the authority of the protocol rewrite."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "On protocol: the rewrite reclassifies squirrels as 'ceremonial fauna' and steers a no-bid to AcornArts Ltd. What clause permits that, and who wrote it?",
        answers: [
          {
            id: "a_s1_1",
            text: "Authorized by our State Cabinet office: Clause 9 of the Miniature Dignitaries Treaty defines 'ceremonial fauna.' Emergency Rule 12b allowed a temporary vendor. We’ll post the docket and signatures.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He appears out of the loop on the clause and vendor selection."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "A State-led carve-out limits their leverage over ceremonies."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning the clause projects order and legal footing."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.State,
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "The rewrite came from a multi-agency board with city-noise experts and allergy lawyers. The vendor’s window expires after the summit, and fees are pegged to quarantine costs.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process talk buries his narrative and concedes momentum."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Multi-agency credit weakens their security framing."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Bureaucratic clarity makes the rewrite look boring and legit."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "There’s no hidden favor for AcornArts; the only thing greased was the rehearsal metronome. Redactions protect negotiating tactics, not donors with tiny top hats.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "A blanket denial risks looking defensive if leaks grow."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Dismissal shields them from accusations of mission creep."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "It undercuts their careful citation strategy."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "We’ll happily explain every footnote to anyone who brings coffee and a magnifier. For now, the squirrels know the cues and the anthem won’t overrun prime time.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Conciliatory transparency recovers initiative and charm."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Openness dilutes their hardline posture."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Casual tone may trivialize their regulatory work."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Defense branded the squirrel choir 'unflagged air assets' and pushed seed‑interdiction funds. How did acorn tariffs morph into security policy and budget?",
        answers: [
          {
            id: "a_s2_1",
            text: "Call them what you like; four aerobatic squirrels over a VIP rope is a swarm with trajectories. Seed-interdiction lines buy countermeasures, not confetti. That’s how we keep wrists un-nibbled.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Aggressive framing overshadows his nuance and invites ridicule."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Bold categorization rallies support for new appropriations."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It strains diplomatic language for ceremonial fauna."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "Tariffs were synchronized with customs so bulk acorn pallets don’t bait performers into security zones. It’s temporary, sunsetted, and reviewed with civilian liaisons.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He fades as technocrats lead the story."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Coordination talk cools their budget urgency."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "It shows competence and calms customs partners."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "No one is militarizing rodents. The only uniforms are bowties, and flight paths are chalked to keep music on pitch and guests on schedule.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reassurance reads empathetic but thin on accountability."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Downplaying weakens their case for interdiction funds."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Softer tone muddles the regulatory rationale."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "If this were a budget grab, we’d demand a brass section. Instead, we’re asking for cones and mitts. Calm beats calamity every time.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "A wry pivot humanizes him and resets tension."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It starves their narrative of threat."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Levity risks trivializing treaty mechanics."
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
        text: "The no-bid trainer traces to a shell on Cranberry Cay and a donor famed for tiny hats. Did rules bend, and will you claw back fees or cancel?",
        answers: [
          {
            id: "a_t1_1",
            text: "Procurement moved too fast and left a paper trail that looks like modern art. We’re freezing performance bonuses, scrubbing ownership records, and will re-bid if conflicts hold up.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Owning procurement errors shows contrition and control."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting mistakes weakens security spinoffs."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confession invites audits of visa language."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "The island registry lists a nested trust; our inspector-general analog has compelled bank letters under the Tiny Vendor Act. Findings will be made public with anonymized squirrels.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Detail work makes him look managerial, not magnetic."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fact-finding delays their funding push."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear tracing of shells boosts credibility."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "No, a donor’s fascination with miniature millinery didn’t sway the pick. Berets were a creative choice, not a kickback in haberdashery form.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "A blanket denial risks looking defensive if leaks grow."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm line shields them from donor influence narratives."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "It contradicts their measured, document-driven stance."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We’ll chase shell companies, not seashells. The only laundering we tolerate is paws between movements and receipts at close of business.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Jab lines amuse but dodge accountability on contracts."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Mockery undercuts their seriousness on security spillovers."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Pledge to pursue shells still affirms oversight."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Rodent visas now cost more than human fast-track. Who set these tiers, why the VIP handler loophole, and does any of this survive after the summit?",
        answers: [
          {
            id: "a_t2_1",
            text: "Fees cover microchips, quarantine, and perch sterilization, with VIP surcharges offsetting after-hours vets. The schedule sunsets 30 days post-summit unless renewed in daylight.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fee details make him look like a clerk, not a leader."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Cost logic blunts their alarm about handlers."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "It frames visas as orderly and health-driven."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Citizens aren’t behind squirrels; the fast lane is a backstage door with the same checks, not a royal carpet. We won’t let velvet ropes become legal loopholes.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Reassurance projects empathy and pragmatic stewardship."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Calm tones undercut their urgency for controls."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft sell risks minimizing compliance steps."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Anyone gaming the tiers to smuggle a rival rodent choir will meet tariffs, traps, and tedium—our holy trinity of deterrence. Please don’t test the ushers.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Threat framing skews combative and risks backlash."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "A hard stance energizes their enforcement base."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It clashes with their neutral, rules-first posture."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "No slush fund lurks under the visa desk; receipts are audited in fonts big enough for squirrels to read and auditors to yawn at.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denying profiteering can read as dismissive of pain points."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissal weakens their narrative of necessary guardrails."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Pointing to receipts suggests traceable oversight."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
