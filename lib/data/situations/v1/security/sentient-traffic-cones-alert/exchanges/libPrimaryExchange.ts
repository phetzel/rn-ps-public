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
      id: "q_root",
      text: "With cones coordinating roadblocks, what emergency powers will you use, and how will you protect civil rights, essential workers, and due process?",
      answers: [
        {
          id: "a_r1",
          text: "The President will not recognize cone sovereignty. We’ll clear illegal blockades with a human-led gauntlet, keep routes open for nurses and noodles alike, and remind smart plastic who paved the road.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Bold show of control fits his gauntlet narrative."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Stunt risks muddling ROE and equipment status."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "No significant change for legal prep or mapping."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r2",
          text: "Defense is not mobilizing for war with lawn décor. Cones are noncombat props, so no combatant designations, no tanks, and no drone-on-drone jousting—just local support to safely unjam roads.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Restraint clashes with his preference for spectacle."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Affirms noncombat classification and keeps tanks idle."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Unclear authority complicates unpairing beacons."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "Homeland has mapped the hotspots, logged every honk, and drafted narrow orders to unpair cones from city beacons where lawful. We’ll publish criteria, timestamps, and appeal windows before flipping a single switch.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Data brief lacks the dominance he wants to project."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Mapping alone offers no force-protection clarity."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Precise hotspots help protect essential corridors."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "We’re not suspending rights to outmaneuver traffic pylons. Any restrictions will be time-limited, court-reviewable, and signed in ink thicker than a parking ticket, with essential corridors prioritized and posted.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Limited rights frame still lets him posture on TV."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Civil-liberty focus may constrain rapid responses."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Cautions help, but delay beacon actions he seeks."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Rules of engagement: are sentient cones protesters, infrastructure, or appliances, and how will essential workers and deliveries move without tripping legal red lights?",
        answers: [
          {
            id: "a_s1_1",
            text: "We classify cones as autonomous equipment, not persons, so no protest kettling rules apply; no combat rules either. Essential workers get digital lane tokens and escorts where needed, audited in real time.",
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
                reaction: "Technocratic language undersells decisive control."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear categorization supports noncombat posture."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Definitions enable legal routing and lane triage."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "We are not authorizing crowd-control on cones as if they were a rally. No rubber bullets at plastic, no curfews for commuters, and no checkpoints that trap nurses between a firmware update and a hard place.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Rejecting crowd-control undercuts his showdown."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Keeps forces out of inappropriate confrontations."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Could limit quick clearance of blocked hospitals."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Safe passage comes first. We’re publishing green-lane maps, hotline waivers for stuck caregivers, and a 15-minute rule: if a cone can’t explain itself by then, humans get the right-of-way, period.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Maps feel procedural, not assertive leadership."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Logistics without authority may strain responders."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Green lanes prioritize ambulances and deliveries."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If a cone wants to negotiate road philosophy, it can do it from the shoulder. We’ll remove illegal barriers quickly and dare any orange triangle to file a brief before blocking an ambulance.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Public challenge aligns with his dominance framing."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Grandstanding risks confusing ROE on city streets."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Escalation invites legal claims and false positives."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "What crowd-control tech—jammers, unpairing beacons, or faceplate scanners—will you deploy, and what statutory guardrails stop mission creep and data hoarding?",
        answers: [
          {
            id: "a_s2_1",
            text: "Early drills scooped up more beacon chatter than we liked. We’ve tightened filters, added warrants for human data, and set a 72-hour purge, with inspector access to the logs baked in from day one.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting overreach signals weakness, in his view."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Course-correction drills improve tool discipline."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Noted; policy will reflect the lessons learned."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "Tool set: short-range cone-band jamming, temporary unpairing orders, and geofenced detours. No facial recognition, no always-on mics, and a public dashboard showing every activation in near real time.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Targeted tools look strong without overreach optics."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Toolkit is workable if ROE stays narrowly scoped."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Need firmer legal cover before widespread jamming."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "We’re not rolling out Stingrays, blanket geofence warrants, or mystery black boxes. If a device can’t be explained to a city librarian, it doesn’t get plugged in this week.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He’ll tout restraint while promising tougher steps."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ban preserves doctrine but may reduce flexibility."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Privacy win could impede time-critical reroutes."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Privacy is part of safety. We’re designing so we can explain it to your grandma and your public defender, and if either flinches, the switch stays off until it’s fixed.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Privacy-first pitch softens his decisive image."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Design limits may slow urgent field improvisation."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Minimization and expiry guardrails reduce mission creep."
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
        text: "If cones are autonomous equipment, what due process exists before seizing or deactivating them, and who can appeal—a union, a maker, or the cone itself?",
        answers: [
          {
            id: "a_t1_1",
            text: "Deactivations require a field receipt, video, and a magistrate review within six hours. Makers can contest, cities can object, and a civil-liberties ombud sits in to argue for any claimed sentience.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Paperwork focus dilutes the dramatic response."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Documented seizures limit LOAC spillover risks."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Video and receipts strengthen due-process posture."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We are not granting individual standing to roadside triangles. Claims go through makers or owners, preventing a thousand tiny subpoenas from items that still think asphalt is a podcast.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Rejecting cone standing matches his hard line."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Position helps, if appeals remain centralized."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Blanket denial invites rights challenges and delays."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Every seized cone is tracked and returnable unless it’s evidence of a crime. We’ll notify owners, publish anonymized stats, and cap holds to 7 days without a judge signing a real, legible order.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Return policies look conciliatory to spectators."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Custody chains add overhead to field units."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Tracking and notice protect workers and bystanders."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "If a cone blocks an ambulance, it forfeits its right to debate during rush hour. We’ll clear it first and host the existential symposium after traffic gets home for dinner.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear consequences dramatize human right-of-way."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Bright-line forfeiture could misclassify incidents."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Overbroad trigger risks due-process violations."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Who audits the logs and dashboards you promise, and what independent leash keeps emergency tech from outliving the emergency?",
        answers: [
          {
            id: "a_t2_1",
            text: "Logs are audited by the Transit IG and two rotating city auditors, with quarterly reports and raw machine-readable dumps. External researchers get sandbox access minus any human-identifying bits.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Audit talk lacks the boldness of televised action."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "External scrutiny keeps scope creep in check."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dual audits may slow urgent data access windows."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Vendors don’t get gag clauses or ‘proprietary secrets’ shields. If a tool can’t withstand sunlight, it doesn’t ride along in our kit after this emergency.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Transparency terms fit his tough-on-vendors pose."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "No gag clauses strengthen contract accountability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Open clauses can expose playbooks during response."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Past emergencies have lingered into policy by habit. This time we hardwire sunsets, require a fresh vote to extend, and auto-wipe devices when the clock runs out.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting policy inertia undercuts his momentum."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Warns of drift but offers few operational fixes."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Honesty invites tighter sunset and purge schedules."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We’re building an oversight leash shorter than a scooter rental: layered sign-offs, live public dashboards, and a standing invite for civil-liberties groups to pull the brake if metrics drift.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Short leash message still feels like hedging."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Frequent sunsets can hamper sustained readiness."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Expiring permissions cap the emergency footprint."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
