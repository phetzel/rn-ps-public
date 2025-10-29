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
      text: "The National Siesta Registry mandates daily nap reports and rolling shutdowns; how do you justify the costs when critics call it security theater?",
      answers: [
        {
          id: "a_root_1",
          text: "I’ll put it this way: I challenge the loudest critics to a televised power-nap duel—winner sets the policy. Bring your blanket and a business plan, because we can boost wellness without tanking payroll.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Showmanship projects confidence and sets the terms."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Challenges distract from discipline needed for drills."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Humor softens backlash and keeps wellness frame."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_2",
          text: "This is a wellness census, not dream surveillance. We’re standardizing rest breaks so shifts can be staggered, with small-shop flexibility, and we’re not asking anyone to upload their dreams or their payrolls.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Sounds defensive and invites scrutiny on costs."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Downplays readiness factors the public must hear."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear reassurance steadies business and families."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_3",
          text: "From a civil-readiness standpoint, synchronized quiet hours let us test sirens, alerts, and volunteer networks without chaos. Rogue catnaps during drills create false negatives that cost far more than a planned pause.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technical talk feels cold in a wage anxiety moment."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Strongly supports civil-readiness synchronization."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Too clinical; misses privacy and paycheck worries."
              }
            }
          }
        },
        {
          id: "a_root_4",
          text: "We reject the “security theater” tagline; it’s more like tech rehearsal. You don’t call the fire drill a matinee, and you don’t measure costs without counting the emergencies avoided.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Denial hardens opposition and elevates theater claim."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm stance aids compliance but risks backlash."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dismissive tone undermines wellness messaging."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Small shops say mandated siesta shutdowns cut wages and chase customers; will you pause enforcement or compensate workers losing pay during nap windows?",
        answers: [
          {
            id: "a_sec1_1",
            text: "We’ve issued guidance for time-shift credits, micro-shift offsets, and siesta vouchers redeemable like overtime but calmer. A pilot fund helps cover peak hours that collide with the quiet window in early rollout zones.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Pragmatic tone shows you heard small employers."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Operational clarity helps drill scheduling."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Credits may miss vulnerable workers’ realities."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "No one’s losing a paycheck for yawning on schedule. We built a grace period, flexible staggering for tiny teams, and an “open quiet” option where shops stay open for non-noisy service during the window.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances sound vague without firm timelines."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Soft talk weakens deterrence for noncompliance."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Commitment to pay stability eases anxieties."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Claims of mass wage cuts ignore that siesta windows land in historically low-traffic bands chosen with merchants. Post-nap bursts have lifted receipts where tested, thanks to rested staff and curious customers.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissal of wage impacts appears out of touch."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Erodes goodwill with local enforcement partners."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Data caveats help, but people need relief."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "If a business can schedule inventory, it can schedule a collective deep breath. We’ll post best-practice templates and publicly celebrate shops that master the art of the 20‑minute reboot.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Grit appeals to base but alienates shop owners."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Provocation risks local pushback during drills."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sounds punitive toward low-margin businesses."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Households must report naps to a central portal; what specific data are collected, who can access dream-adjacent metadata, and how long before deletion?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Authorized from Homeland: the portal logs timestamp, duration, household size, and neighborhood sector—no audio, no dreams. Access is emergency-only with audit trails, and retention auto-deletes after 30 days unless a 72",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear parameters show adult oversight and control."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Access rules match security needs and audits."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Scope feels broad and heightens data fears."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Homeland,
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "We designed it privacy-first: no GPS pillows, no REM meters, no snore files. Data are encrypted, minimized, and viewable to you; deletion is self-service with a prominent button and a plain-English timer.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soothing tone invites fact-checks on retention."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Overreassurance obscures critical access cues."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Privacy-first framing lands well with families."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "There is zero dream content captured—because we’re not in the dream business. If an app asks for your REM score or mic access, that’s not our portal, and you should close it faster than a loud alarm.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial risks backlash if details leak."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limits transparency needed for drill trust."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Narrow claim calms some but leaves gaps."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Let’s be honest: private gadgets map more about your naps than we ever will. The difference is our system has a deletion clock you can see and audits you can read without a PhD in Terms of Service.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comparisons to gadgets feel evasive and snarky."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Point lands, but keep focus on readiness."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Evasion fuels skepticism about data handling."
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
        text: "If a bakery keeps baking through the siesta to make rent, what penalties apply, and can chronic insomniacs get a waiver without hiring a nap lawyer?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Penalties start as civil warnings, then modest fines capped by payroll size, with community service options like pillow-stuffing for shelters. Insomnia waivers use a simple clinician attestation via a two-page online",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Balanced penalties show measured leadership."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Graduated steps aid orderly compliance."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Fines risk burdening already fragile workers."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "The first month emphasizes coaching, not tickets. Medical and shift-work waivers are auto-approved when documentation is uploaded, and appeal slots are walk-in; no one needs to hire a nap lawyer to keep working.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Coaching promise may sound unenforceable."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Soft rollout could reduce drill reliability."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Grace period aligns with health-first approach."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "We are not raiding croissant racks. Inspectors are checking for compliance signage and quiet-mode operations, not flipping trays or timing dough like hall monitors with stopwatches.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Minimizing enforcement invites scofflaws."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Signals weakness to noncompliant operators."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Less fear may reduce stress-related harms."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "If you can laminate pastry at 3 a.m., you can schedule a calm twenty minutes. We’ll partner with bakeries to design pre-proof, nap, and post-proof flows so the bread rises and so do spirits.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Tough talk energizes allies but stokes fear."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Aggressive tone threatens local cooperation."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comes off as unsympathetic to sleepless people."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Nap-alert drills hinge on synchronized snoozing; what evidence shows the Registry actually improves readiness rather than just timing our yawns?",
        answers: [
          {
            id: "a_ter2_1",
            text: "In three Test Districts, drill response times improved 21 percent, misfires dropped by a third, and volunteer check-ins spiked after quiet windows. The yawns didn’t get louder; the sirens got smarter.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Evidence-forward case builds limited trust."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Metrics validate synchronized drill benefits."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Trials lack depth on worker wellbeing impacts."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "An independent review board will publish readiness metrics each quarter, including false-alarm rates and worker impact. If the numbers flop, the sunset clause closes the curtains on the program.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Promises of reviews feel like stalling."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Outsourcing proof weakens urgency narrative."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Independent board adds credibility and calm."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "Early dashboards were messy—dueling time zones and a daylight-drowsiness bug—but we fixed the math and aligned drills to local rhythms. We’ll own errors and keep iterating in daylight.",
            type: AnswerType.Admit,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting chaos helps honesty but hurts stature."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confusion narrative undermines readiness case."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning flaws humanizes rollout for families."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "The goal isn’t to worship spreadsheets; it’s to ensure neighborhoods get a calm window where alerts are heard and help is coordinated. We’ll show the receipts without treating yawns like sacred text.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Values talk dodges the performance question."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Mission appeal helps morale despite gaps."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Avoiding metrics fuels doubts about efficacy."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
