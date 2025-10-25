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
      id: "q_root",
      text: "If Apology Week makes citizens file certified apologies to claim a remorse credit, does that calm friction or just spawn kiosks, fees, and audit angst?",
      answers: [
        {
          id: "a_r1",
          text: "I challenge the premise: if you clip a lamppost or a neighbor’s patience, you say sorry and move on. The credit rewards courtesy; the point is fewer daily bumps, not a maze of contrition turnstiles.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.MajorPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Turning the premise on itself shows fearless wit."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Jest around claims could blur eligibility signals."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Playful tone may unsettle hotline readiness."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Treasury’s draft tables keep the remorse credit modest, predictable, and capped, with clear conversion rules for certified apologies. That steadies payroll withholdings and keeps markets from hyperventilating.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Over‑indexing on tables dulls my challenger edge."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear credit math steadies filings and payrolls."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Metrics alone ignore community stress dynamics."
              }
            }
          },
          followUpId: "q_sec_fees"
        },
        {
          id: "a_r3",
          text: "From a health lens, remorse is safe at household doses and measurably lowers ambient snark. We built the ForgiveLine to de-escalate, not to gulp confessions like a broken intercom.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Health framing alone shrinks the bold contrast."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft guidance risks fuzzing cost projections."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Assures families that remorse is safe and bounded."
              }
            }
          },
          followUpId: "q_sec_health"
        },
        {
          id: "a_r4",
          text: "On kiosks and fees, let’s not pre-print panic. The bill bans contrition surcharges, and we’re allergic to vending-machine morality; we’ll publish the rulebook in human, not bureaucrat, grammar.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.MajorNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "A lighter touch keeps critics from boxing me in."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Vagueness invites vendor creep and fee risks."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection can raise worries about care backlogs."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_fees",
        text: "What guardrails prevent an enforcement carnival—regret kiosks with swipe fees, micro-fines for eye-rolls, and audits over spilled-coffee apologies?",
        answers: [
          {
            id: "a_s1_1",
            text: "Fees are prohibited, audits are risk-based, and receipts are digital so no one is stapling apologies to shoeboxes. Conversion tables are public so a coffee spill doesn’t summon a tax inquisition.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Detailed guardrails can sap my momentum here."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Fee bans and risk tiers calm compliance costs."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rules alone won’t ease stress at the counter."
                }
              }
            },
            followUpId: "q_ter_audit"
          },
          {
            id: "a_s1_2",
            text: "No, we’re not unleashing a guilt SWAT team over eye-rolls. If you can’t tell whether a slight is petty, it’s too petty to audit, and our regs say exactly that in embarrassingly large font.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denials may look naive if kiosks pop up."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissiveness could spook payment processors."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear reassurance tempers anxiety about overreach."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "If someone’s business model needs swipe fees on sorrow, it’s a bad business model. The Act says apologies, not profit extraction; we’ll challenge any vendor who confuses penance with rent-seeking.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Challenging profiteers projects decisive posture."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Confrontation risks chilling legitimate vendors."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric may inflame rather than reduce stress."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Picture fewer lines at the returns desk of life, not more velvet ropes. We’re consolidating forms so the biggest queue is for free mint tea, not a penalty window.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Humor disarms, but keeps accountability on me."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Deflection muddies fee enforcement expectations."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft imagery may undercut hotline preparedness."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_health",
        text: "On the health side, does mandated contrition reduce stress or risk guilt overload, and is the ForgiveLine staffed to handle peak remorse without foaming?",
        answers: [
          {
            id: "a_s2_1",
            text: "Our pilots show stress markers drop when people resolve micro-grudges, and we designed cool-down scripts so guilt doesn’t foam. The ForgiveLine has overflow staff for Monday morning remorse.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Leaning on pilots alone can look overly clinical."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health gains don’t automatically trim admin cost."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Evidence that stress drops builds public trust."
                }
              }
            },
            followUpId: "q_ter_capacity"
          },
          {
            id: "a_s2_2",
            text: "We admit there’s a learning curve; day one may include elaborate apologies for stepping on imaginary toes. That’s why there’s a ten-minute rule and peer coaching, so sincerity beats performative sighing.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning bumps humanizes me without conceding ground."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admitting churn may unsettle payroll planning."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Learning curve talk can spike short-term calls."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "HHS guidelines define safe contrition doses, time limits, and a quiet-hours clause. No one is apologizing past midnight unless they owe the cat and a roommate consents in writing.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process talk risks dulling my contrast on results."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Defined doses align uptake with credit forecasts."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rules without empathy can miss family realities."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "If contrition becomes homework, we’ll shred the assignment and assign recess. This is about calmer kitchens and calmer buses, not grading people on angst penmanship.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Drawing a hard line shows backbone against excess."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hard caps risk friction with credit eligibility."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overcorrection could deter healthy participation."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_audit",
        text: "How will audits actually work—are Contrition Bots scanning apology receipts, what counts as proof, and how do appeals avoid a permanent paper jam?",
        answers: [
          {
            id: "a_t1_1",
            text: "Audits use random sampling plus outlier flags; no Contrition Bots peeking at diaries. Proof is a timestamped apology receipt or mutual acknowledgment, and appeals are one click, no printer jams.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Nuts‑and‑bolts detail can sap my challenger vibe."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Sampling and flags steady compliance behavior."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Technicalities won’t calm caller stress by themselves."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We’re not deputizing smart toasters to judge tone. There’s no algorithmic shame score, and automated scans can’t reject an apology because your handwriting looks remorse-curly.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Mocking robot enforcers keeps me in command."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissal may undercut deterrence for fraud."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tone may trivialize genuine caller concerns."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "If a case is questioned, you keep the credit during review, so no bill collectors over a missed sorry. The default is trust with gentle verification, not suspicion with sirens.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Too much comfort talk risks looking passive."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Grace periods can blur recovery timing on credits."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Keeping credit during appeal protects wellbeing."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Think library rules, not airport security. We’re prioritizing expired grudges and serial non-apologizers, not the person who once grazed a mailbox and brought it flowers.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Simple analogies frame me as practical and fair."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Soft framing risks weaker audit compliance."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comparisons may not prepare people for stress."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_capacity",
        text: "What safeguards keep family apologies from turning into surveillance homework, and can people opt for in-person reconciliation instead of uploading emotional PDFs?",
        answers: [
          {
            id: "a_t2_1",
            text: "Family apologies are opt-in and off-limits to tax math unless everyone signs. The ForgiveLine trains counselors to de-escalate, not to script surveillance, and you can walk away anytime.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Over‑reassurance risks seeming detached from abuse."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Opt‑in privacy limits can complicate verification."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear privacy guardrails protect household trust."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Capacity scales like a snow day hotline: queued triage, call-back slots, and text prompts for simple cases. We publish wait-time dashboards so spikes don’t turn into folklore.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Capacity charts dim the punch of my stance."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Scaling plans stabilize vendor and payroll timing."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Queue math alone won’t reassure anxious families."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "If anyone tries turning living rooms into confession warehouses, we’ll challenge the policy in our own house first. Reconciliation beats uploads, and we’ll prove it by example.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calling out surveillance creep shows backbone."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Aggressive tone may chill legitimate compliance."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontation can spike stress on the ForgiveLine."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We’ll admit: feelings don’t fit neatly in forms. That’s why there’s a built-in analog option—two chairs, a mediator, zero PDFs—and the same credit applies if both parties agree.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Candid humility reads authentic yet in control."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admitting ambiguity muddies credit routing rules."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledging limits may briefly raise anxiety."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
