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
      text: "Does the Marble Annex back naming a marionette interim mayor to sidestep ethics rules as strikes stall permits and safety hinges on whoever wields the controller?",
      answers: [
        {
          id: "a_r1",
          text: "We don't back a puppet; we back stability. The interim setup is a civic metronome with strings for accountability, not a loophole carnival. Calm beats chaos, and services will keep time.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Values the denial while emphasizing civic stability."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Concerned this stance invites crowd control strain."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Sees denial helpful but wants stronger legal stance."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Homeland secures the stage, not the script. Our job is keeping exits clear and trip hazards clipped; whether the mayor is maple or mortal, first responders get the aisle every time.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Dislikes deflection when leadership clarity is needed."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Welcomes focus on safety lanes and hazard control."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Worries safety talk muddles legality of signatures."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r3",
          text: "A wooden proxy cannot lawfully sign acts without a human hand in the chain of custody. Justice will move for clarity, up to an injunction if needed, so statutes don't tangle into novelty strings.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Concerned the tone may escalate legal confrontation."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fears court talk sidelines operational readiness."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Supports seeking injunction to restore lawful order."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r4",
          text: "Small shops should not be spooked into shuttering. Agencies have standing authorities to process permits, and we've told them to run on schedule like a drumline, not wait for a theatrical cue.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Praises calming message to steady shops and permits."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Worries reassurance softens necessary safety rules."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Warns comfort language could weaken court posture."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Will the Civic Justice Bureau challenge the legality of a wooden appointee signing orders, and how fast could relief unjam permits for small storefronts stuck in limbo?",
        answers: [
          {
            id: "a_s1_1",
            text: "We'll seek swift judicial review because signatures require sentient accountability, not varnish. If the court agrees, interim authority reverts to a human officer so paperwork can move again.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Backs swift review to resolve signature disputes."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Worries rapid filings divert attention from safety."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Agrees in spirit, but pace may outstrip diligence."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "Our filing window is measured in days, not months. We're coordinating with court clerks and city counsel to package the question cleanly so rulings are crisp and implementation is immediate.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Finds timing talk thin without tangible relief."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Likes precise timelines to plan field deployments."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Wants filings prioritized over messaging on speed."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Courts set the tempo, not our press shop. While lawyers tango, city agencies already hold emergency delegation maps, and they can stamp routine permits without dramatic balcony scenes.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dislikes press shop caveats amid governance gaps."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Notes deflection risks confusion for responders."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Approves clarity that courts, not spin, set tempo."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "For small storefronts, we are issuing guidance that routine renewals should proceed. No one needs a marionette to bless a sandwich board when the code already covers sandwich boards.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Appreciates direct help for shops caught in limbo."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Sees guidance risks conflicting with safety rules."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fears interim guidance could cloud legal remedy."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "With youth rallies and union pickets surging, who actually holds the controller during emergencies, and what will Homeland do if strings block first responders?",
        answers: [
          {
            id: "a_s2_1",
            text: "We focus on lanes, lights, and ladders, not casting choices. If string clutter blocks egress, we cut it, tag it, and fine the stagehands; the only hands on the controller during crises are trained ones.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Wants clearer command, not lane talk, in crises."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Supports lane, light, and ladder focus for safety."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Notes this omits the legality of emergency control."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "We've issued a citywide safety bulletin: keep protest rigs three feet off curbs, zero strings across doors, and emergency corridors open like bowling lanes. Compliance teams will roam with scissors.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Approves practical bulletin to reduce injury risk."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fears bulletin may be ignored without enforcement."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Wants legal guardrails paired with safety notices."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Rallies can be loud and still safe. We'll post knot marshals, deploy portable snag covers, and coordinate with union stewards so the only thing tied up is a banner, not an ambulance.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Finds message soft; seeks firmer emergency rules."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Worries reassurance dilutes crowd management tools."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Supports balanced rights with clear lawful limits."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "No, a teenager on a selfie stream does not get to steer public safety. The incident commander does, and they answer to doctrine, not dopamine. Order will not be crowdsourced.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Likes firm boundary against unsafe ad hoc control."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Warns tone could inflame crowds near hospitals."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Prefers courts to set limits rather than rhetoric."
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
        text: "If a court freezes the marionette's signatures, who runs the city meanwhile, and what guardrails stop agencies from freelancing while the strings are snipped?",
        answers: [
          {
            id: "a_t1_1",
            text: "City charters name a human contingency chain-typically the clerk, comptroller, or a deputy-already sworn and ready. We'll file to have that chain activated so no one plays mayor by prop closet.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Values clear human succession to avoid chaos."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Concerns about mixed commands during transition."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Wants tighter legal definitions in the answer."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "There will be no policy whiplash. Existing ordinances keep breathing on their own, routine services continue, and any urgent order will be issued by a properly authorized human until the court rules.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Applauds pledge to avoid policy whiplash."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Notes stability must not slow emergency access."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fears comfort talk might dilute injunction push."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We're not here to cast the sequel before the pilot airs. The court writes the next scene; meanwhile agencies operate from their standing scripts, not improv games with sock puppets.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dislikes ambiguity about interim leadership."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Welcomes focus on staying in lane operationally."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Warns against drifting from legal chain of command."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "What we will not do is let novelty governance blur legal signatures into performance art. If your nameplate sheds sawdust, it doesn't authorize payroll or zoning.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Supports clarity but tone risks public friction."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Sees hard line complicating crowd safety dynamics."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Backs firm stance to guard statutory authority."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Are you deploying knot marshals or new event rules to keep protests lively but safe, and will that include fines for string hazards near hospitals and schools?",
        answers: [
          {
            id: "a_t2_1",
            text: "Yes. Temporary event rules require clear emergency bays, ban overhead rigging within forty feet of ER doors, and mandate labeled cut-points on big puppets. Violations earn citations, not souvenir lanyards.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Seeks assurance rules will not hinder commerce."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Supports clear egress rules for emergency access."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Wants fines consistent with existing statutes."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "These are safety shears, not speech gags. Sing, chant, livestream, and meme-just don't lace fire lanes with nylon. We'll brief organizers so compliance is easy and drama stays on the stage.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Likes tone protecting speech while keeping order."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Fears soft framing weakens compliance at chokepoints."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Seeks explicit linkage to legal standards."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "We regulate choke points, not choreography. If a parade wants tassels, fine; if tassels trip EMTs, they're gone. The show goes on when the ambulance gets through every time.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Finds deflection thin on enforceable specifics."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Worries about unclear thresholds for intervention."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Approves narrow scope aligned with lawful authority."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If organizers insist on weaponized bunting, we'll challenge permits and seek venue adjustments. Free expression doesn't extend to booby-trapping a trauma entrance with artisanal twine.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Applauds readiness to deter hazardous conduct."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Notes escalation risks if penalties are misapplied."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Wants due process safeguards explicitly outlined."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
