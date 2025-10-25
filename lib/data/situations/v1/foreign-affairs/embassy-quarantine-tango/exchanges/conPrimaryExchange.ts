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
      text: "After the Health Bureau turned the Grand Consulate Wing into a pop-up vaccine spa, did Homeland sign off, and how are sovereignty and commerce protected?",
      answers: [
        {
          id: "a_r1",
          text: "The President appreciates the spirited choreography of diplomats and spa chairs; he’s convening a summit on chair yoga for passports while agencies sync timelines and tone.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "He pivots to a calmer frame and invites de-escalation."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "HHS draws fire for prioritizing wellness optics over protocol."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Homeland is dinged for losing grip on both optics and access."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Homeland did not outsource sovereignty to a eucalyptus diffuser. We’re coordinating removal of spa trappings with tongs, restoring secure access, and keeping trade lanes unmarred.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He seems detached, letting agencies shoulder the heat."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "HHS appears overconfident about its pop-up authority."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Homeland gains credit for steady, sovereignty-first fixes."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Health didn’t annex anything; we punctured a velvet rope with a syringe of common sense. When outbreaks loom, etiquette yields, and we’ll defend proactive care over ceremonial optics.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He looks combative by proxy, risking diplomatic backlash."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "HHS wins points for assertive public health clarity."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Homeland is seen as reactive rather than guiding the response."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "An interagency review began before sunrise. Temporary use permits, consular protocols, and economic impact checks are in play, and the wing remains operational for core diplomatic functions.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He sounds procedural, not especially attuned to trade pain."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "HHS is criticized for paperwork lag and staging decisions."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Homeland earns modest marks for launching timely review steps."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "You say sovereignty is intact and lanes are open, yet cargo and visa queues detoured around spa velvet ropes. What steps get trade and consular services back on track?",
        answers: [
          {
            id: "a_s1_1",
            text: "We’ve mapped clean corridors with badge-only gates, boxed up the aromatherapy, and posted neutrality marshals. Freight, visas, and security traffic are moving on schedule, minus the harp interludes.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He offers little detail, coming off a bit hands-off."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "HHS looks like the bottleneck behind the velvet ropes."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Homeland is credited for concrete corridor controls."
                }
              }
            }
          },
          {
            id: "a_s1_2",
            text: "A joint ops order sets time windows, staffing, and screening thresholds to avoid bottlenecks. Dashboards monitor wait times and revenue flow, with triggers to adjust before delays stack.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He defers to process and avoids clear ownership."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS gains a nod for joint discipline and timing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Homeland is faulted for earlier lane confusion."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_3",
            text: "Reports of snarled commerce are overcaffeinated. The only line that grew was for free cucumber water, which has been canceled pending diplomacy-friendly cups.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He appears dismissive of on-the-ground complaints."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS tone minimizes impacts and irritates partners."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Homeland gets slight credit for visibility on queues."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If velvet ropes are steering policy, the ropes deserve a seat at the next summit. Meanwhile, agencies are choreographing traffic like a waltz, not a conga line.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "He lightens tension and reframes stakes with measured humor."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS still bears blame for operational clutter."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland seems slow to unwind the detours fully."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "If health “conquers etiquette,” isn’t the Health Bureau rewriting consular norms on the fly? What stops agencies from annexing gilded lobbies with sanitizer pop-ups?",
        answers: [
          {
            id: "a_s2_1",
            text: "Norms don’t grant viruses diplomatic immunity. We’ll challenge any process that treats velvet rope prestige as a firewall, and we welcome oversight to codify emergency playbooks.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "He seems to endorse norm-bending urgency, spooking allies."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "HHS is praised for prioritizing health while defining limits."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland appears sidelined on early rulemaking."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "Communication lagged. Our urgency sprint outran the protocol jog, and we’re tightening the leash: pre-clearance checklists, liaison sign-offs, and rapid legal reviews before any pop-up occurs.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He admits gaps but avoids owning the disruption."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "HHS takes a hit for sprinting past coordination."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Homeland earns credit for surfacing the communication lag."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "On behalf of Homeland, the Director set interim rules: no agency may repurpose diplomatic space without Homeland concurrence, posted notices, and a visible sunset clock for all missions.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He is seen as delegating without adequate oversight."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS gets mild credit for accepting checks on scope."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland looks restrictive to some stakeholders."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Homeland,
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_4",
            text: "Homeland is installing bright-line guardrails and publishing them. Emergencies stay fast, not feral, and sovereignty remains the boss of the building, not the spa menu.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He stays low-key while agencies tighten the guardrails."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS concedes guardrails without appearing to lead them."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Homeland wins praise for clear, enforceable boundaries."
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
        text: "These classified crisis talks sound ominous. This week, will traders and visa seekers face hours of friction or a new bureaucracy writing sonnets about queue etiquette?",
        answers: [
          {
            id: "a_t1_1",
            text: "Expect minor, scheduled holds measured in minutes during shift changes. No new forms for routine trade or visas, and we’ll publish daily wait-time targets with receipts when we miss them.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He focuses on metrics rather than the human delays."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "HHS is blamed for creating the choke points."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Homeland earns a nod for predictable, scheduled holds."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Classified means secure alignment, not theatrical fog. The mission footprint is being normalized by supper, and tomorrow looks like a boring Tuesday for commerce and consulars.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He sounds cautious but not fully accountable."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS faces mild criticism for optics over flow."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Homeland is lauded for a calm, coordinated posture."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "If bureaucracy writes sonnets, we’ll grade the meter and cut the adjectives. For now, the poem is four lines: open, safe, brief, and overseen.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He defuses anxiety with levity and outcome focus."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS still draws flak for spa theatrics."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Homeland is dinged for messaging instead of mechanics."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "There is no hidden labyrinth. We are not inventing a Queue Ministry, and the badge scanners remain set to beep once, pass once, not recite a saga.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He appears dismissive, risking public frustration."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS gets slight relief by clarifying the impacts."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland is seen as defensive about red tape."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "On legal footing: what statute let the Health Bureau commandeer an honorary embassy wing, and will missions be compensated for any commerce lost during the spa interlude?",
        answers: [
          {
            id: "a_t2_1",
            text: "Temporary public health activation flowed from the Emergency Convening Act, Section 9, with consular carve-outs intact. Claims route through the Diplomatic Facilities Board within ten days.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He leans on statute and avoids broader culpability."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "HHS is hit for stretching vague legal triggers."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Homeland gains credit for interagency compliance checks."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "The paperwork trailed the pop-up by a coffee break. We’re correcting sequence, documenting approvals, and fast-tracking reimbursements for measurable, mission-related disruptions.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He tolerates paperwork lag, inviting deeper scrutiny."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS earns a small point for candor about timing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland is blamed for loose oversight signals."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "No mission lost tariff revenue because tariffs don’t live in massage chairs. Core functions stayed open; what closed was the novelty towel pyramid.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dismisses losses, sounding detached from reality."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS appears to dodge fiscal accountability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Homeland gets minor credit for tariff clarity."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If a velvet rope can veto outbreak control, we should elect the rope. Until then, we’ll defend narrow, lawful interventions that keep people healthy and embassies boring.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He keeps distance while agencies defend authority."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "HHS is applauded for firm legal and public health stance."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland looks secondary on the legal justifications."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
