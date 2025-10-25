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
      text: "With porch lights rebranded as security assets and a mandatory bulb registry, how does this stop the outage gizmo without vendor padding or dimmer doorsteps?",
      answers: [
        {
          id: "q_root_a1",
          text: "We’re not just flipping switches; we’re issuing a dare. The President vows porches that outshine the sulking moon and invites the mystery gadget to a dusk duel it won’t enjoy.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Bold duel talk energizes crowds but raises practicality concerns."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Overpromises strain ops; we lack doctrine for porch skirmishes."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rhetoric helps morale but muddies outage response messaging."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dramatics sidestep warrant limits we must preserve."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "q_root_a2",
          text: "Defense will field Light Infantry—photon teams—and moth-decoy drones, with rural lines and seniors first. Layered patrols and spare bulbs mean one gizmo can’t black out a block.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Caution reads measured but risks appearing reactive, not leading."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear mission boosts readiness and deters device actors."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Good for surge ops, but data scope must be tighter."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Security push must not eclipse due process or privacy."
              }
            }
          }
        },
        {
          id: "q_root_a3",
          text: "Treat the device like a roaming blackout pest. The registry gives crews instant socket maps and alert loops, shrinking response to minutes and steering replacements before porches go dark.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Technical framing sounds dry and can dull the narrative edge."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Limited benefit to military posture; scope creep risk."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Actionable; aligns teams on detection and dispatch timing."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Informative tone omits necessary legal guardrails."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "q_root_a4",
          text: "We’ll admit the Bulb Registry Act is dimly drafted. Sockets are private spaces; we’re adding warrants, audit trails, and a sunset timer so security doesn’t unscrew civil rights.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Neutral,
              reaction: "Admitting flaws signals honesty but projects vulnerability."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal reset could delay protection of critical porches."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Narrowing data helps trust yet may slow incident tracing."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Owning the fix builds credibility and judicial confidence."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "What proof shows the registry foils the outage device, not herding porches into one certified bulb cartel with markups, QR tags, and a monthly glow fee?",
        answers: [
          {
            id: "q_sec1_a1",
            text: "Under authorization from the Homeland Lantern Office, surge crews use registry pings to triangulate attacks in minutes. If needed, we swap wavelengths on the fly. I can brief specifics in closed session.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Leaning on authorization reads bureaucratic and defensive."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Chain of command clarity is good; proof still thin."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Paper authority without metrics won’t convince operators."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Authorizations must ride with strict oversight provisions."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Homeland,
            followUpId: "q_ter1"
          },
          {
            id: "q_sec1_a2",
            text: "In pilot blocks, outage durations dropped sharply and spread chains broke after the third house, not the tenth. The registry alerted runners with exact bulb specs; the device lost its favorite targets.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Tangible results help sell the policy to skeptical voters."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Measured gains support continued protection posture."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Block-level data validates surge model and dispatch logic."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Outcomes help, but sampling and consent still matter."
                }
              }
            }
          },
          {
            id: "q_sec1_a3",
            text: "There is no vendor lock. The spec is open, sockets are interoperable, and any certified bulb that meets the anti-spoof standard gets equal shelf space in the program.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denials invite ridicule if cartels surface later."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal ignores supply risks that affect resilience."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denial without telemetry leaves gaps in field playbooks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Open specs claim is welcome if procurement stays fair."
                }
              }
            }
          },
          {
            id: "q_sec1_a4",
            text: "We wrote anti-cartel guardrails into procurement: rotating lots, price caps by lumen, and a consumer opt-out for brand choice. If a vendor gouges, we dim their contract fast.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Guardrails reassure some, but price pain could persist."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Procurement checks help; readiness impact minimal."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Useful, yet enforcement must not slow outage response."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Anti-cartel clauses reduce abuse, aiding civil fairness."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "How will you prevent costs from ballooning for renters and seniors, and what stops socket audits from turning into nosy moths with clipboards at our thresholds?",
        answers: [
          {
            id: "q_sec2_a1",
            text: "Fair point: costs can creep and authority can wander. We’ll cap fees at a nickel per porch per month, ban surprise inspections, and require warrants for any inside-the-threshold check.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning risks earns points but fuels cost anxieties."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Budget flex may divert resources from core defense."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tight limits protect trust; field speed may suffer."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Acknowledging warrants and caps strengthens legality."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "q_sec2_a2",
            text: "Seniors and low-income renters get automatic credits and free swaps by neighborhood crews. Compliance is app-less and paper-light; a postcard works if your phone sleeps at 9.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Relief signals compassion and competence to communities."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Subsidies stable; threat coverage stays on track."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Targeted aid is fine if dispatch data still flows fast."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Credits help, but audit scope must remain restrained."
                }
              }
            }
          },
          {
            id: "q_sec2_a3",
            text: "No one wants clipboard moths. We’re allergic to them, and so are the courts. Our focus is outside fixtures; if anyone flutters inside, we’ll swat the policy and the pen that wrote it.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Jokes play well on TV but trivialize accountability."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Loose talk risks confusion for support units at night."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor softens tone; clarity on inspections still needed."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Levity cannot replace clear search and seizure limits."
                }
              }
            }
          },
          {
            id: "q_sec2_a4",
            text: "Data collected is minimal—bulb type, socket ID, and location grid, not names. It’s encrypted, purged quarterly, and cannot be shared with landlords or loyalty programs by rule.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Minimal data claim helps trust only if independently verified."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Data diet protects OPSEC but may slow interdiction."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Lean fields reduce friction and speed triage routing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Narrow collection aligns with warrants and sunset aims."
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
        text: "If the outage device evolves around registered bulbs, what is Plan B—more lumens, odd wavelengths, or neighborhood lantern parties until the gizmo gets bored?",
        answers: [
          {
            id: "q_ter1_a1",
            text: "Plan B is Plan Brighter. We’ll escalate to spectrum tricks and schedule a dusk ‘shine line’ that dares the device to show up anywhere the community can clap it into retirement.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Bravado rallies crowds but risks overreach if tech fails."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Escalation without tests could waste scarce capacity."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Bigger beams may spook callers and jam field triage."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Push for more lumens risks nuisance and liability suits."
                }
              }
            }
          },
          {
            id: "q_ter1_a2",
            text: "Our labs are testing frequency-hopping filaments and decoy heat signatures. If the device adapts, firmware in smart sockets can pivot profiles in hours, not weeks.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Letting labs lead looks prudent but feels less heroic."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Prototype work preps forces without premature rollout."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Adaptive tactics map well to mobile outage threats."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Research path keeps rights intact while options mature."
                }
              }
            }
          },
          {
            id: "q_ter1_a3",
            text: "We don’t accept the premise that adaptation equals failure. It’s expected cat-and-moth. The registry lets us iterate faster than the gadget mutates.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissing adaptation sounds complacent if hits resume."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Underplaying risk dulls deterrence and readiness."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Minimizing threat clouds dispatch rules and triggers."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Skepticism is healthy; we still need legal contingencies."
                }
              }
            }
          },
          {
            id: "q_ter1_a4",
            text: "If it somehow surges, we can isolate blocks, flood them with loaner lamps, and restore normal within a single evening, no all-night gloom required.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Containment plan is sober but could read as defeatist."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Block isolation drills fit doctrine and build capacity."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Operationally sound; ensure alerts are clear and narrow."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Targeted actions reduce overbreadth and litigation risk."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Can you commit to a hard sunset for the registry and independent audits, and what exact conditions flip the switch back to normal porch-life?",
        answers: [
          {
            id: "q_ter2_a1",
            text: "Yes—we’ll admit the law needs an exit ramp. We’ll bake in a one-year sunset with renewal only by public vote and court review, plus monthly warrant stats published in plain light.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Sunset pledge soothes skeptics though it concedes missteps."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clock adds pressure; readiness windows may narrow."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clear off-ramps aid trust and streamline response exit."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Hard sunset and warrants restore balance and legitimacy."
                }
              }
            }
          },
          {
            id: "q_ter2_a2",
            text: "Audits will be led by the Nonpartisan Institute of Domestic Illumination, not procurement pals. Findings, including flubs, will go public before any renewal talk.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Independent audits read strong yet risk bureaucratic drag."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Oversight is fine if cadence avoids mission friction."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "External eyes can help calibrate field protocols."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audits plus transparency deter overreach in practice."
                }
              }
            }
          },
          {
            id: "q_ter2_a3",
            text: "Switch-off triggers: ninety days without a coordinated outage, demonstrated device capture or neutralization, and three consecutive months of sub–two-minute response times.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Specific triggers show control but may box us in."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid metrics can hamper flexible defense posture."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear thresholds improve communications and dispatch."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defined criteria support warrants and limit fishing."
                }
              }
            }
          },
          {
            id: "q_ter2_a4",
            text: "If normal porch-life means fewer committee hearings about bulbs, we’re fans. But yes, we’ll formalize the criteria and print them big enough to read by candle if needed.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Snark entertains, but stakeholders want concrete limits."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mocking hearings distracts from actual preparedness."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Tone undercuts guidance and confuses field partners."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jibes won’t shield us from due process requirements."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
