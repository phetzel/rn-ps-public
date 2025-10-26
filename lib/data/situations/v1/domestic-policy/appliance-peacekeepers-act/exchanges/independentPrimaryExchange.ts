import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const independentPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.IndependentPrimary,
  content: {
    rootQuestion: {
      id: "q1",
      text: "Can the Appliance Peacekeepers cool toaster and lawn feuds without scorching budgets, and what fair appeal exists when a verdict misfires?",
      answers: [
        {
          id: "a1_1",
          text: "Neighborhood drama is where leadership earns its coffee. If I can land a toaster truce at 8 a.m., imagine what we do by lunch. We'll keep it nimble and measurable so taxpayers get a win.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "I can spotlight tiny disputes and show budget discipline in one move."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This framing risks trivializing real mediation norms and boundaries."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Keep veterans as referees, not seen as enforcers with plug-in badges."
              }
            }
          }
        },
        {
          id: "a1_2",
          text: "Peacekeepers use a three-step mediation script, property-line maps, and appliance etiquette guides. Training is lean and local. For cost specifics and offsets, we're happy to walk through the breakdown.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.MajorNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Process talk is fine, but make sure it still looks like decisive leadership."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear steps let us map truces credibly and avoid turf confusion."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Over-explaining can imply mission creep; keep our role narrow."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "a1_3",
          text: "No, this isn't mission-creep in camo. Veterans serve as referees, not enforcers—no sirens, no salutes, just clipboards. They de-escalate; they don't deploy.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Good to dispel paranoia, but don’t drain the drama that drives attention."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Denying too hard may sideline diplomatic protocols we could lead."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Affirming vets as mediators helps; it separates us from armed responses."
              }
            }
          }
        },
        {
          id: "a1_4",
          text: "Budgets are capped, pilots are small, and rulings aren't final on first pass. There's a clear appeal path outside the heat of the driveway so neighbors aren't stuck with a wobbly call.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Reassurance is fine, but keep stakes visible so accountability sticks."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Budget caps help, yet we must preserve impartial mediation optics."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Fiscal calm is welcome, but avoid implying we cut training corners."
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
        text: "What's the real price tag—training, stipends, and toaster-proof clipboards—and where do offsets come from so this doesn't toast the treasury?",
        answers: [
          {
            id: "a2_1",
            text: "Year one pilots use neighborhood grants, shared training with existing mediators, and borrowed municipal space. Stipends are modest and published online, with unit costs posted by block.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Offsets are smart, but I need headline clarity on costs and wins."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Shared training aligns with community diplomacy and treaty-style rigor."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Keep stipends modest so service looks civic, not contractor-driven."
                }
              }
            }
          },
          {
            id: "a2_2",
            text: "This is not a blank check labeled 'Toaster.' We're not buying fleets of clipboards, and no one gets a kitchen tank. The pilot has a hard ceiling and sunsets without results.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Push back on blank checks, but avoid sounding defensive on scope."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Over-denial risks sidelining governance guardrails we help design."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Good to deny militarization; it protects the veteran-mediator image."
                }
              }
            }
          },
          {
            id: "a2_3",
            text: "Costs are capped, purchases are pooled, and any overrun trips an automatic brake. If the budget sizzles, the program pauses before taxpayers get burned.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Caps reassure, yet we still need measurable results to justify them."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Pooling buys helps interoperability in neighborhood mediation."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Caution on overages is right; do not cut safety or de-escalation."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "a2_4",
            text: "Compared to what we spend un-jamming printers, this is couch-cushion money. The goal is fewer fines and fewer feuds, which quietly saves cities real cash.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "A joke lands if the math lands; keep figures handy, not just quips."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Deflection can undermine the sober tone treaty-style work needs."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Humor is fine, but never at the expense of vet professionalism."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "When a Peacekeeper's call splits a cul-de-sac, what formal appeals path do neighbors get, and who reviews it so petty peace doesn't feel petty biased?",
        answers: [
          {
            id: "a3_1",
            text: "First stop is a peer panel from a different district, then a civilian ombuds for stubborn cases. If one side still thinks the toast was burnt, an external reviewer steps in.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Independent panels sound fair; keep it quick so drama doesn’t drag."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Cross-district review mirrors neutral arbitration we can steward."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "External panels help ensure vets aren’t judging their own calls."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "a3_2",
            text: "There's no star chamber rubber-stamping lawn edicts. Peacekeepers can't punish; they recommend. Appeals are free, simple, and insulated from whoever made the initial call.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rejecting sham reviews is right; show how oversight actually works."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Guard against secrecy while preserving process integrity and decorum."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity beats rumor; deny kangaroo courts without inflaming tempers."
                }
              }
            }
          },
          {
            id: "a3_3",
            text: "If we can't defend a ruling in daylight, we shouldn't make it at dusk. We welcome appeals because strong decisions survive scrutiny and weak ones go back in the toaster.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "I welcome scrutiny; let’s prove decisions stand in daylight."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Transparency is good; still honor mediation confidentiality rules."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Bold review stance is fine if it shields vets from politicized flak."
                }
              }
            }
          },
          {
            id: "a3_4",
            text: "Your neighbor's uncle's podcast is not the Supreme Court of Driveways. The appeals path beats yelling at clouds and comes with paperwork that isn't written on a napkin.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Stay witty, but point to the appeals form before the punchline."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Humor must not erode respect for the appeal ladder we outline."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Keep tone measured so parties accept outcomes without escalation."
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
        text: "If pilot costs blow past caps, what automatic brakes kick in: pauses, clawbacks, or shelving the toaster squad until the Civic Budget Board says go?",
        answers: [
          {
            id: "a4_1",
            text: "Breaches trigger an immediate pause, a capped re-bid on supplies, and a public ledger review. Grants freeze until the Civic Budget Board signs off on a fix and a new cap.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.MajorNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Automatic brakes are solid; explain who flips them and how fast."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear triggers keep civic compacts credible and enforceable."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Pauses protect training cadence and avoid rushed fielding."
                }
              }
            }
          },
          {
            id: "a4_2",
            text: "We don't hide overruns under the rug and call it a welcome mat. There's no slush drawer; every receipt is audited, and the program cannot expand while out of bounds.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Expose overruns, yes; avoid sounding like you expect failure."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deny hiding costs, but pair it with the audit trail details."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Accountability is welcome; keep focus on mediation readiness."
                }
              }
            }
          },
          {
            id: "a4_3",
            text: "The brake is automatic, not performative. It stops the spend first, asks questions second, and resumes only when savings and safeguards are locked in writing.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassure with specifics so the brake reads as real, not theater."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Consistency matters; the same rules must bind all pilot sites."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Stopping early is fine if safety and training quality lead."
                }
              }
            }
          },
          {
            id: "a4_4",
            text: "If a line item starts smoking, we unplug it before anyone yells 'fire.' Then we ask why we bought gold-plated clipboards like we're mediating on the moon.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Good metaphor; attach the budget switch to a published threshold."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Swift cutoff helps, but document it to avoid turf disputes."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rapid unplug is prudent; confirm backup coverage for disputes."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "If an appeal still flops, who's the final arbiter, and how do you stop this becoming the Court of Eternal Grievances for grumpy sprinklers?",
        answers: [
          {
            id: "a5_1",
            text: "A rotating Civic Review Judge, drawn from trained community arbiters, issues a binding resolution with a short rationale. Their decisions are archived to train future panels.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "A rotating judge works if the public sees clear selection rules."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Rotation bolsters neutrality and treaty-like legitimacy."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Outside arbiter reduces pressure on veteran mediators in disputes."
                }
              }
            }
          },
          {
            id: "a5_2",
            text: "This is not a forever-complaints hotline. There are two appeal tiers and a final review, period. After that, the case closes unless new facts—not new feelings—appear.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Close the door firmly, but leave room for rare true grievances."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limits prevent forum-shopping and preserve mediation authority."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Finite lanes help vets avoid burnout and scope confusion."
                }
              }
            }
          },
          {
            id: "a5_3",
            text: "If someone wants to litigate sprinklers for sport, they'll find it's cardio without trophies. We push tough calls into daylight and reserve energy for real disputes.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "I’ll take the tough calls and own the outcomes when appeals end."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assertiveness is fine; keep protocol to avoid ad hoc chaos."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strong finality works if it shields vets from serial complainants."
                }
              }
            }
          },
          {
            id: "a5_4",
            text: "The ladder ends before anyone needs binoculars. Clear deadlines, plain forms, and impartial reviewers keep things fair without trapping neighbors in process purgatory.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Clarity on the end of the line keeps focus and saves money."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "A clean finish protects the legitimacy of upstream steps."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Simple closure helps compliance and reduces enforcement strain."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
