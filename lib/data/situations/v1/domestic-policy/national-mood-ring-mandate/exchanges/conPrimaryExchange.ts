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
      text: "With rings now gating benefits, queues, and tax perks by color, what do your numbers say about costs, compliance, and counterfeit moods?",
      answers: [
        {
          id: "a_r1",
          text: "If someone wants to rig their vibes, they can meet us on the court of public feeling. We’ll out-hustle spoofers with smart checks and visible wins, not whine about them from the bleachers.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Bold duel-with-the-haters tone lands with core supporters."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Signals fiscal indiscipline and downplays compliance costs."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Raises anxiety about fairness and potential overreach."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Tough stance deters spoofers and boosts enforcement image."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r2",
          text: "The rings read civic temperature, not secrets. No blood, no pulse, no diaries—just a color that says, “I’m ready to queue.” Benefits remain needs-based, and no one loses care for having a moody morning.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Sounds defensive and dull compared with critics’ theatrics."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Offers no hard numbers to reassure budget hawks."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear boundaries ease fears among seniors and unions."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft tone may embolden spoofers and limit rapid response."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "Early pilots show shorter lines and lower admin costs: queue times down 14%, call-center volume down 9%, and a projected net save in Year One. We’ll publish the ledger and the assumptions in plain language.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Data talk lacks sizzle and cedes narrative to opponents."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Quant framing supports savings and queuing efficiency claims."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Clinical jargon risks alienating anxious patients."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Model talk feels weak against organized spoofing threats."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Per Treasury, the tax perk bands are costed against revenue baselines, with caps to avoid palette creep. The Office of Mood Metrics will release a monthly color-fiscal dashboard for public review.",
          type: AnswerType.Authorized,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Delegating to Treasury reads as evasion under fire."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Authority cite helps, though questions linger on equity."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Leaves health privacy limits vague and non-reassuring."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "No strong deterrence message toward counterfeiters."
              }
            }
          },
          authorizedCabinetMemberId: CabinetStaticId.Treasury
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "With DIY “mood boosters” and fake stones spreading, how will you curb spoofing without turning public spaces into vibe checkpoints?",
        answers: [
          {
            id: "a_s1_1",
            text: "Spoofers are staging a feelings fraud, and we’re not letting a cottage glitter cartel dictate policy. We’ll target suppliers, not shoppers, and we’ll brief you on detection tools that don’t stalk people.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Aggressive posture shows command and rallies base."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Crackdowns risk disrupting retail and tax compliance."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Alarmist framing could stress vulnerable populations."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm threat posture deters spoofing networks quickly."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "Retailers get a certified scanner no creepier than a price gun, with anonymous pass/fail only. Transit and clinics use random sampling, not dragnet sweeps, and results expire quickly to prevent tracking.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Procedural tone lacks spark and invites mockery."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Standardized scanners lower loss and raise receipts."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Retail scans still feel intrusive without safeguards."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Voluntary approach may not scare counterfeiters."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "No turnstile will diagnose you. If a scan flags a fake, the path is warning, replacement ring, and a human review—not a mood perp walk. Civil-liberty monitors sit on the oversight board.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Calm tone sacrifices momentum in the media cycle."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "No mention of costs or offsets for deployments."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Due process and dignity emphasis reduces backlash."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Caution here can slow interdiction of forged rings."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "We’ve all seen that one guy selling “artisan vibes” next to the hot dog cart; we prefer mustard on dogs and science in policy. The ring reads colors, not character, and enforcement will reflect that.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes risk trivializing real fraud and enforcement."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor softens rollout but offers little fiscal rigor."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection leaves privacy concerns unanswered."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Levity muddles the deterrent message to bad actors."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "You price perks like a paint catalog—how does Treasury model savings from color-coded queues and taxes, and who pays when rings keep glitching gray?",
        answers: [
          {
            id: "a_s2_1",
            text: "Treasury runs a queuing model tied to service demand and a tax elasticity map by color band. Savings come from fewer re-verifications and smoother peaks, with guardrails so no shade gets an accidental windfall.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owns the frame by citing models and performance gains."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Technical detail underwrites projected savings."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Queues-first talk ignores clinical access sensitivities."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Focus on models, not interdiction, weakens posture."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "Models are only as zen as the data. We’ve seen noisy readings on humid days and in karaoke bars; that’s why we budget contingencies and demand-labeled error bars, not mood-scented fairy dust.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admission fuels critics’ claims of chaotic rollout."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Undercuts confidence in estimates and audits."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Candor about noise reads as patient-centered."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Signals vulnerability spoofers might exploit."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "If your ring glitches, benefits default to the higher tier until it’s fixed. Appeals are human, fast, and free, and HHS enforces strict limits so this never morphs into health profiling.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Guarantees sound like walk-backs under pressure."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defaults could inflate costs beyond forecasts."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Safety net promise calms beneficiaries facing glitches."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "May invite gray-ring abuse without checks."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_4",
            text: "On pricing by Pantone: please note we’re not taxing chartreuse, we’re taxing administrative friction. The colors are just the sticky notes that move people faster through the line.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Quips sidestep substantive pricing concerns."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarification tempers tax panic modestly."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Still skirts the biometric creep question."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Non-answer weakens deterrence credibility."
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
        text: "Homeland floated gecko drones that “taste color” to spot fakes; what guardrails or sunsets stop that becoming a permanent lick-and-track program?",
        answers: [
          {
            id: "a_t1_1",
            text: "Counterfeit rings bankroll bigger schemes, so yes, we’ll bring unusual tools to a weird fight—but only with warrants, audits, and a hard stop date. If it can’t pass court glare, it won’t pass go.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Forceful tone projects resolve in a security frame."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Escalation risks unfunded surveillance expenditures."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Civil-liberty worries spike without clear limits."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Strong stance signals real costs for counterfeiters."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "No biometric harvesting, no continuous chase. If deployed, the pilot caps footage retention at 24 hours, publishes routes in advance, and sunsets unless renewed by a public vote and independent review.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Measured guardrails show listening without retreat."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Constraints may reduce recoveries and savings."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Explicit limits ease fears of mission creep."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sunsets can hamper long-term deterrence operations."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Authority comes from the Anti-Fraud Materials Act sections on deceptive access tokens. Use is limited to spoofing hotspots, with quarterly reports to the Civil Safeguards Council and open-source detection code.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legalese feels remote from public anxiety."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Statutory basis reassures auditors and OMB."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Process talk leaves care impacts unclear."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Boxed-in authorities may dull field flexibility."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Geckos prefer papaya to paperwork. The point isn’t the mascot; it’s that detection must be narrow, transparent, and temporary, or we don’t greenlight it at all.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jest undercuts seriousness of security posture."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "No cost clarity amid talk of geckos and gadgets."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Humor misses chance to emphasize safeguards."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Light touch keeps focus on disruption, not dragnet."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Critics say rings could drift from “civic mood” to health profiling; what limits, audits, and penalties prevent biometric creep behind the pastel jargon?",
        answers: [
          {
            id: "a_t2_1",
            text: "The ring doesn’t know your heart rate, diagnoses, or lunch. Law forbids linking to medical files, and any attempt triggers fines, contract loss, and a mandated public disclosure within 72 hours.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Proactive limits make the case for responsible use."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Constraints may narrow tax-signal fidelity."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear scope boundaries protect patient privacy."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tighter definitions can hamper enforcement."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Audits sample raw device logs for only color states and timestamps, purge everything else, and publish aggregate stats. We rotate auditors to prevent vendor capture and require reproducible test suites.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Audit-speak can read as bureaucratic hedging."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Sampling plan supports credible oversight costs."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jargon may confuse about what is and isn’t stored."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Narrow logs may reduce investigatory leads."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "We are not building a health dossier in disguise. If an agency asks for one, they’ll find an empty folder and a very annoyed inspector with a clipboard and a megaphone.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial risks backlash if leaks surface later."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard line limits dynamic pricing intelligence."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Plain assurance reduces public health fears."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Categorical no may tie hands in edge cases."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Early prototypes overcollected metadata; we killed that design, posted the postmortem, and rewrote specs for minimal capture. We learned loudly so you don’t have to worry quietly.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting missteps feeds narrative of sloppy rollout."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Scrapping prototypes wastes sunk R&D and funds."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confession calms some, but stokes broader doubt."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Course correction shows willingness to self-police."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
