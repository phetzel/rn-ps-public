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
      text: "What will Praise Patrols and the compliment app cost, who shoulders the small-shop compliance bite, and how will you stop fake-flattery farms?",
      answers: [
        {
          id: "a_r1",
          text: "Try a praise-free day and see if gravity still bothers to show up. If the world keeps orbiting without compliments, I’ll scrap the quota and thank gravity personally.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Bold dare signals confidence and humor; supporters will cheer."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Unfunded bravado could spook markets and procurement plans."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes aside, compelled speech concerns still linger here."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Projected rollout is budget-neutral: funded by time-limited Kindness Bonds and an app built in-house. To curb adjective inflation, we’ll meter “amazing” to three taps a week.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Dry budgeting tone undercuts your leadership on principle."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear funding path and caps reassure fiscal stewards."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Cost focus leaves civil liberties safeguards underexplained."
              }
            }
          },
          followUpId: "q_sec_small"
        },
        {
          id: "a_r3",
          text: "Speech stays free: there’s a ‘sincerely optional’ clause, no sarcasm scanners, and zero criminal penalties. Missed quotas route to awkward workshops, not handcuffs.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Leaning on legalese makes you look cautious, not bold."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Compliance leniency may hide future enforcement costs."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Restorative framing aligns with rights and reduces backlash."
              }
            }
          },
          followUpId: "q_sec_mills"
        },
        {
          id: "a_r4",
          text: "Line-item memos are landing as fast as the toner dries. Before we buy uniforms for Praise Patrols, we’d like to confirm they exist outside a whiteboard.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Process talk buys time but risks sounding evasive."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Vagueness invites cost overruns and vendor rent‑seeking."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection erodes trust on privacy and enforcement limits."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_small",
        text: "Small shops call this a stealth compliance tax, saying they must add compliment kiosks or lose customers and sweat audits. What relief or exemptions are planned?",
        answers: [
          {
            id: "a_s1_1",
            text: "Micro-merchants under 5 staff get automatic credits, and shop hours auto-generate baseline praise so you’re not kiosk-shopping. We’re adding a refundable Compliment Credit at filing.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Shops hear burden first; you sound indifferent to pain."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Targeted credits align relief with budget discipline."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Relief plan lacks explicit rights safeguards for audits."
                }
              }
            },
            followUpId: "q_ter_small"
          },
          {
            id: "a_s1_2",
            text: "No dawn raids for unsmiled receipts. The first two quarters are grace periods with coaching, not penalties, and audits are phone-based check-ins, not clipboard ambushes.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Warm tone helps, but you concede hidden burdens lightly."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Grace periods may defer costs without solving them."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear guardrails and mercy reduce legal exposure significantly."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "This is not a tax by another hat. Participation costs are optional add-ons, and we’ve barred agencies from creating fees that smell like a tax even after a cold reheating.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm denial projects resolve but risks seeming dismissive."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Calling it not a tax ignores compliance cash flow strains."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Rigid stance could trigger challenges on compelled speech."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Early guidance read like it was written by a thesaurus having a breakdown. We’ve rewritten it in plain language and cut the forms from seven screens to two.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning flaws shows humility and can rebuild credibility."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admitting confusion hints at sloppy cost controls."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Acknowledged missteps raise due‑process and audit risks."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_mills",
        text: "Compliment mills tout bulk praise credits and bot compliments by the dozen. What stops a quota black market from setting prices and gaming the app?",
        answers: [
          {
            id: "a_s2_1",
            text: "We’re targeting mills, not neighbors. Fraud tools flag unnatural patterns without facial scans, and first offenses go to remedial workshops, not cuffs, because the goal is culture, not stings.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassurance sounds soft against organized fraud threats."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limited tools may let credit laundering leak revenue."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Targeted fraud focus respects speech and due process."
                }
              }
            },
            followUpId: "q_ter_mills"
          },
          {
            id: "a_s2_2",
            text: "Credits decay if hoarded, transfers are capped, and compliments carry rotating QR stamps tied to time and place. Bots can spam, but they can’t fake a park bench at 3:07 PM.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Mechanics talk feels technocratic, not value‑driven."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Smart levers should dampen arbitrage and fiscal leakage."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Caps and decay still need oversight to protect rights."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "If a flattery farm wants to out-nice a nation, I welcome the duel. We’ll win on authenticity, and they’ll retire early from carpal tunnel and diminishing adjectives.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Confident challenge rallies supporters against abusers."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Grandstanding risks ignoring enforcement resource costs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tough posture may blur lines around voluntary speech."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Let’s not crown the black market before the ribbon-cutting. The app team will demo safeguards this week so we’re not speculating over vapor threats.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Deflection buys time but can look unserious on fraud."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hand‑waving invites systemic gaming and cost overruns."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Vagueness undermines trust in fair, nonintrusive policing."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_small",
        text: "Clarify the bite: What counts as a violation, are there per-compliment fines, and how will you block pass-through ‘praise surcharges’ at the register?",
        answers: [
          {
            id: "a_t1_1",
            text: "No per-compliment fines exist. Misses trigger nudges and coaching; civil penalties start only for willful, repeated ghosting. ‘Praise surcharge’ line items are banned and enforceable.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances without numbers can sound like spin."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Nudges still require funding and tracking overhead."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "No per‑compliment fines reduces constitutional risk."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "A week is compliant at 70% of modest targets with a rolling buffer, published in a plain-language rulebook. We’ll publish audit criteria so folks know the goalposts before kickoff.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Metrics talk reads bureaucratic and distant from pain."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear thresholds aid budgeting and reduce audit churn."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Percent targets may pressure speech despite safeguards."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We won’t greenlight a tip-jar for manners. If someone invents a ‘smile fee,’ existing anti-gouging and deceptive-pricing rules apply, and we’ll shut it down fast.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "A firm stance projects backbone and clarity of intent."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard bans can shift costs onto other compliance lanes."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strong language risks chilling protected nonparticipation."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We’ll probably over-nudge in week one and under-nudge in week two. That’s why dials are adjustable with public reporting, so calibration follows reality, not vibes.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Candor about miscalibration earns some credibility."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admitted trial‑and‑error signals costly policy whiplash."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Oscillation invites arbitrary enforcement and appeals."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_mills",
        text: "With sarcasm scanners banned, what data flags mills, who audits the filters, and how fast can users erase their compliment trails?",
        answers: [
          {
            id: "a_t2_1",
            text: "Only coarse metadata stays: time window and a general zone, not faces or voices. Processing happens on-device, and users can purge logs in 24 hours without losing compliance credit.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Privacy promises alone may not calm black‑market fears."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sparse data can hinder revenue protection and audits."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Minimization limits rights exposure and mission creep."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Filters are audited by an independent civic lab, code modules are published, and we’re running a bounty for bias and spoofing. A public dashboard will show false positive rates.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Lab jargon may alienate small operators and voters."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Independent audits bolster fiscal integrity and trust."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "External oversight must still guard against mission creep."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "We don’t sell or share compliment data with marketers, period. If someone tries to buy your niceness, the only thing they’ll get is a politely worded refusal.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Strong denial projects confidence in ethical safeguards."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Refusing data deals may increase compliance costs elsewhere."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances need teeth to withstand court scrutiny."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We’ll spare you a seminar on bloom filters and entropy right now. The privacy board will brief with diagrams so no one has to pretend to enjoy cryptography live.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Brevity reads as evasive on a sensitive data issue."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Skipping details risks hidden costs and vendor lock‑in."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Opacity breeds suspicion about surveillance backdoors."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
