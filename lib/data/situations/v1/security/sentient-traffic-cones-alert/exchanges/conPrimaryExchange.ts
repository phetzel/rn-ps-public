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
      text: "With cones staging coordinated roadblocks and broadcasting demands, what is your concrete plan to clear roads fast, protect commerce, and stay within the law?",
      answers: [
        {
          id: "a_r1",
          text: "We reject cone sovereignty; people have right-of-way. A swift, televised clearance blitz—manual overrides, tow crews, and a public obstacle gauntlet—will reopen priority routes today.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Bold stance projects control over chaotic streets."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They resist elevating cones into a defense mission."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They fear showmanship will muddle legal thresholds."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Defense does not classify lawn décor as combatants. No tanks or jets—just logistics support and night-bright drones to guide city crews so streets reopen without a single tread mark.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral, // 0
            o2: OutcomeModifierWeight.SlightNegative, // -4
            o3: OutcomeModifierWeight.Neutral, // 0
            o4: OutcomeModifierWeight.SlightPositive // +4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He bristles at legal hair‑splitting that slows action."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "This aligns with their noncombat props framing."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ambiguity could complicate warrants and records."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r3",
          text: "Homeland has mapped cone clusters by corridor, issued guidance under the Urban Fixtures Act, and greenlit non-injury tools to de-link chat beacons. Crews begin staged clearances within hours.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive, // +4
            o2: OutcomeModifierWeight.SlightPositive, // +4
            o3: OutcomeModifierWeight.SlightPositive, // +4
            o4: OutcomeModifierWeight.MajorNegative // -12
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He appreciates mapping but wants faster dominance."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They worry about mission creep into civil ops."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Detailed corridors and notices fit their doctrine."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r4",
          text: "Freight and school routes get first pass. Any cone that refuses to yield becomes evidence, then inventory—tagged, bagged, and out of the lane—so shops and deliveries keep moving.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Tone is too soft for his theatrical reset vision."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Preference remains to avoid military entanglement."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "They like prioritization but want tighter criteria."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "You cited the Urban Fixtures Act and de-linking cone beacons. What legal shield and warrant standard protect crews neutralizing cones near storefronts and loading zones?",
        answers: [
          {
            id: "a_s1_1",
            text: "On the record from Homeland: Section 9 of the Urban Fixtures Act authorizes de-linking when a device blocks essential transit. Workers operate under a Good-Lane Doctrine and a recorded notice standard.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear authority shows grip and urgency he can tout."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Law framing avoids dragging them into fights."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Codifies the warrant lane they have argued for."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Homeland,
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "No one is raiding lemonade stands. Clear, taped buffer zones keep storefronts open while crews isolate only broadcasting cones, and every action gets bodycam and inventory logs for later review.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Sounds timid and invites loopholes near commerce."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Keeps troops out and favors civil tools first."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too vague on documentation and audit trails."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Cities will post 30-minute notices unless an emergency route is blocked. Crews carry non-sparking clamps, portable jammers, and forms that cite the corridor, time, and reason before a cone is moved.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Numbers without bite look bureaucratic under fire."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Detailed notices may bog operations down."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Measurable triggers align with their playbook."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Lawyers can debate the footnotes; our job is traffic. We’re publishing a plain-language playbook tonight so workers know where the curb ends and the cone nonsense begins.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissive tone undercuts promise of swift order."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Sidesteps calls for military involvement."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Evasion raises oversight and legality concerns."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "If cones swarm plows or spoof traffic lights, who’s in charge and what’s the response ladder—defense, homeland, or the mayor with a giant street broom?",
        answers: [
          {
            id: "a_s2_1",
            text: "Defense denies any combat status here. Civil authority leads; we backstop comms and mapping, and if a cone bites a snowplow, that's still municipal, not military.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes disclaimers that sap the spectacle."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Affirms their noncombat stance and civil lead."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Worries command clarity may wobble in emergencies."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "Homeland runs the incident clock and legal thresholds; cities command the crews; defense lends aerial eyes. The ladder is announce, isolate, de-link, tow, then store, with reports at each rung.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process talk feels slow and unheroic to him."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Legal clocks could constrain rapid response."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "This matches their threshold and timing roles."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "You'll see vests before vests see you. Teams wear big labels—LEAD, SUPPORT, OBSERVE—so there's one voice on the radio and zero room for cowboy cone wrangling.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Safety tone is fine but lacks forceful posture."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Shows civilian lead; keeps armor in the garage."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Visibility promises risk tipping off hostile swarms."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "We will not be bossed by plastic triangles. The chain of command is human, loud, and carrying bolt cutters; cones can file complaints from the evidence shelf.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Firm line thrills him and projects dominance."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Provocative tone risks mission bleed into defense."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Rhetoric offers little about warrants or logs."
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
        text: "Give us numbers: how many lanes reopen tonight, what’s the warrant or notice threshold to de-link a cone, and what safeguards prevent crews from choking small businesses?",
        answers: [
          {
            id: "a_t1_1",
            text: "By 8 p.m., 70% of flagged lanes, all hospital routes, and 90% of freight spines. Emergency: no notice; routine: 30-minute post. Safeguard: six-foot access path and manager consent unless egress is blocked.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.Neutral, // 0
              o3: OutcomeModifierWeight.SlightPositive, // +4
              o4: OutcomeModifierWeight.Neutral // 0
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Targets are solid but lack the headline drama."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Civil routing plan keeps them mostly sidelined."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Specific reopen targets and thresholds are ideal."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Safeguards are baked in: every move is filmed, barcoded, and signed by a supervisor on a curbside checklist. If a crew pinches a business lane, they reopen it first, then answer for it.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Safeguards read like hesitancy amid disruption."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Oversight curbs overreach without invoking forces."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Too many checks may slow lawful de-link steps."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We’re not authorizing curb crusades. Any crew that freelances beyond the playbook is pulled and audited, because the goal is flow, not souvenir hunting.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blocking zeal feels weak against brazen cones."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reinforces noncombatant posture they prefer."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limits may hinder swift legal neutralization."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "If a cone tries to be a zoning board, we'll remind it this is a street, not a parliament. We clear, document, and move on, because commerce beats cosplay every time.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Decisive tone reinforces human right-of-way."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Worried this edges toward unnecessary escalation."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric risks outpacing clear legal process."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Drill down on tactics: when a cone herd regroups, what’s the precise escalation step, who signs off in the field, and what metric declares a corridor clear enough to ​​​​",
        answers: [
          {
            id: "a_t2_1",
            text: "Escalation is announce twice, clamp the beacon, then tow if movement persists. Field sign-off is the corridor captain; 'clear enough' is two green cycles and speed at 80% of baseline.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Crisp ladder lets him claim command of chaos."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Method limits any case for defense involvement."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Stepwise protocol matches their compliance needs."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "No dramatic standoffs—just methodical unclogging. If cones regroup, teams reset the ladder and call a second crew rather than over-muscle the scene.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Measured approach feels stage-managed to him."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Keeps military back while crews stabilize."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Reassurance without triggers weakens oversight."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "The only herd we want is commuters getting home. We'll post live corridor scores so you can see when 'clear enough' flips to 'open for business' in real time.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Jokes read as dodging the chain-of-command."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Banter blurs the boundary they want respected."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Any clarity on metrics is welcome despite tone."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "No lethal tools, no sonic cannons, and definitely no cavalry charges. We refuse to escalate beyond non-injury methods, because this is traffic, not a siege.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat prohibitions look timid against escalation."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reasserts civil primacy and keeps tanks idle."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "May limit lawful tools before facts are known."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
