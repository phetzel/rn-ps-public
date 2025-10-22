import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const libPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.LibPrimary,
  content: {
    rootQuestion: {
      id: "q1",
      text: "Why rebrand porch lights as ‘security assets’ and require a bulb registry that risks surveillance creep and fines renters for every flicker?",
      answers: [
        {
          id: "a1",
          text: "Because we refuse to let a mystery gizmo dim our doorways. The President says we’ll outshine any threat and turn porches into tiny lighthouses, not little panopticons.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "A combative tone projects resolve and entertains supporters alike."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Military planners see theatrics distracting from practical safeguards."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Rapid response units welcome urgency but warn against hype."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal staff caution that bravado cannot substitute for due process."
              }
            }
          }
        },
        {
          id: "a2",
          text: "Our defense teams are rolling out Light Infantry drills—photon formations and moth-decoy drones—to stabilize nights, with seniors and rural blocks first. No one’s staging a blackout coup.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technocratic framing mutes the President’s signature voice."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Command celebrates clear missioning and prioritized rollouts."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ops leads worry logistics talk may outpace verified intel."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Counsel fears operational zeal could trample warrant standards."
              }
            }
          }
        },
        {
          id: "a3",
          text: "The registry logs bulb type, socket location, and outage timestamps to dispatch surge crews within minutes. It is a map for repairs, not a diary of your midnight snacks.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Detail-heavy answers reduce headline punch and momentum."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Defense prefers not to anchor strategy on registry minutiae."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Transparency aids dispatch routing and public trust under stress."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Unnuanced collection talk risks implying open-ended access."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "a4",
          text: "We admit the first draft runs a little dim. Sockets are private; enforcement must need warrants, renter carve-outs, and a hard sunset before any fines see daylight.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Neutral,
              reaction: "Measured contrition keeps options open without weakening posture."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Defense worries apologies could be read as wavering commitment."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Homeland notes contrition may slow adoption of response tools."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "DOJ welcomes fixes, warrants, and a sunset to strengthen legality."
              }
            }
          },
          followUpId: "q3"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "What exactly is collected, who sees it, and how long is bulb data kept before every porch becomes a case file tagged ‘ambient suspicion’?",
        answers: [
          {
            id: "a5",
            text: "We collect make, watt rating, install address, and outage timestamps, nothing inside the home. Access is tiered to repair teams and auditors, with deletion clocks instead of dusty archives.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process focus blunts narrative edge and perceived leadership."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense doubts inventory lists deter active sabotage threats."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear data fields speed surge crew mobilization and targeting."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Enumerating fields without limits raises scope creep alarms."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "a6",
            text: "No, there is no secret switch logging doorbell gossip or kettle boil times. The registry cannot see inside your life, because it is blissfully too dim to try.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flat denials risk future walk-backs if edge cases emerge."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Security teams dislike blanket statements that may not age well."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ops warns absolutist language invites loophole hunting."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Narrowly rejecting overreach assures civil liberties watchdogs."
                }
              }
            }
          },
          {
            id: "a7",
            text: "Look, the mystery device isn’t filing paperwork; it’s tripping neighborhoods. Let’s fix the infrastructure before composing poetry about metadata in the moonlight.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection reads evasive and weakens command presence."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Buying time helps planners refine threat models under pressure."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Evasion complicates coordination with utilities and cities."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sidestepping specifics increases litigation exposure later."
                }
              }
            }
          },
          {
            id: "a8",
            text: "We’ll publish a plain-language data menu and retention schedule and let a citizen board veto creep. If it smells like snooping, it’s out before it’s in.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Concrete reassurances showcase practical control and empathy."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense views public promises as constraints on flexible posture."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Service-level clarity improves field readiness and accountability."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances must be coupled with enforceable legal limits."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "Renters report fines for flickers they can’t fix or outages tied to landlord wiring. Who’s liable, and how do appeals work without a light-fee maze?",
        answers: [
          {
            id: "a9",
            text: "Early citations were premature. Liability must ride with property owners for wiring faults, and renters need automatic shields and no-cost appeals before any bill is licked.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting fault signals humility but risks appearing reactive."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Resource shifts to appeals may sap deterrence messaging."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Policy resets slow incident triage in high-need areas."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning errors enables fair liability rules and due process."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "a10",
            text: "We’re pausing renter fines and back-billing landlords for system neglect. Until appeals are automatic and simple, no one owes a nickel for a blinking bulb.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Decisive protections for renters project compassion and control."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear liability channels reduce noise for security operations."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Temporary pauses may mask true outage patterns in the data."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Relief must still preserve accountability for deliberate abuse."
                }
              }
            }
          },
          {
            id: "a11",
            text: "No, no one is getting evicted over mood lighting. Any notice you saw was a draft template sent by a very excitable printer and an even more excitable intern.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dismissiveness toward renters risks backlash and headlines."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm tone protects deterrence, though it invites criticism."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing complaints undermines trust with local partners."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overbroad denials complicate fair adjudication of disputes."
                }
              }
            }
          },
          {
            id: "a12",
            text: "Appeals will be one form, ten days, digital or paper, with live help. If the outage stems from faulty lines or device interference, fees zero out automatically.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process guidance lacks the punch to calm public frustration."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Administrative focus offers little to threat interdiction."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Simple appeals flow shortens resolution times and confusion."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Streamlined forms are good, but standards must be explicit."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q4",
        text: "Is registry access walled off from landlords, marketers, and cross-agency fishing, with audit trails, red-team tests, and one-click deletion rights?",
        answers: [
          {
            id: "a13",
            text: "Access stays inside the response stack: grid crews, oversight auditors, and warrant-backed investigators only. Every lookup writes an immutable log with names, time, and purpose.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical guardrails alone do not convey moral leadership."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Narrow access may hinder rapid coordination during attacks."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear scoping and audit lanes strengthen operational trust."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Internal access must still be checked by court oversight."
                }
              }
            }
          },
          {
            id: "a14",
            text: "If a landlord or ad firm wants in, they can apply to the Ministry of No. We will happily decline, twice, with brighter ink than their lawyers brought.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Confrontational posture risks appearing cavalier on privacy."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A firm line discourages opportunists from gaming the system."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive tone may chill cooperation from utilities and ISPs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Inviting broad applications invites legal overreach concerns."
                }
              }
            }
          },
          {
            id: "a15",
            text: "Users will get a portal showing who peeked and why, plus a nuke-my-data button at sunset. Think porch control, not porch parole.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Emphasis on user control reads as confident and rights-aware."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deletion rights could erase signals useful for threat forensics."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "User visibility and logs enhance data hygiene and compliance."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Controls help, but remedies need enforceable penalties too."
                }
              }
            }
          },
          {
            id: "a16",
            text: "We found two clauses that could be twisted into fishing expeditions and are cutting them. Dry law beats wet loopholes, even if the lobbyists bring umbrellas.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting loopholes can dent momentum despite candor."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Exposing soft spots risks emboldening adversaries."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Gap disclosures complicate field protocols until patched."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Closing fishing clauses aligns with constitutional limits."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "What fixes and oversight will prevent overreach—warrants for socket data, renter protections, a real sunset—and who holds the dimmer on abuses?",
        answers: [
          {
            id: "a17",
            text: "The bill will move to warrant-first access for socket-level data, with emergency carve-outs narrowly drawn. We’ll codify renter immunity and erase all fines issued under the beta.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning reforms signals accountable leadership under pressure."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Warrant gates may slow time-sensitive interdictions."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear warrant rules ease coordination with local responders."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Careful drafting needed to avoid chilling legitimate cases."
                }
              }
            }
          },
          {
            id: "a18",
            text: "A 24-month sunset ties renewal to fewer outages and fewer complaints. An independent porch ombud will audit fines, flag bias, and publish quarterly reports in plain light.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Metrics talk feels abstract during a lived public scare."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Time-boxing policy could constrain emerging threat responses."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Sunset linked to outcomes strengthens operational discipline."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Bench prefers sunsets paired with periodic judicial review."
                }
              }
            }
          },
          {
            id: "a19",
            text: "If an enforcer tries to weaponize a watt, we’ll unscrew their authority on live TV. The point is safety, not turning stoops into subpoena traps.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Swagger sells resolve but risks normalizing heavy-handedness."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear red lines deter misuse and signal internal accountability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Threat-centric rhetoric can overshadow data safeguards."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Punitive promises ring hollow without codified constraints."
                }
              }
            }
          },
          {
            id: "a20",
            text: "Training is mandatory: officers learn ‘bulb is not probable cause,’ and inspectors carry warrant checklists the size of a billboard. Overreach should trip alarms, not citizens.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Training talk can sound bureaucratic without outcomes."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mandates add burden to units already stretched by ops tempo."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Curricula take time to show field impact on real cases."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Rights-first training reduces abuse risk and legal exposure."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
