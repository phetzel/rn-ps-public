import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const investigativeExchange: ExchangeData = {
  publication: PublicationStaticId.Investigative,
  content: {
    rootQuestion: {
      id: "q_root",
      text: "On the Harmony Playlist Act: who wrote the specs, who profits from fines and royalties, and how will government police a household pressing pause?",
      answers: [
        {
          id: "a_root_1",
          text: "Critics can bring their playlists; I’ll bring my sax and a toddler jury. If our mix can’t win a dance-off, I’ll publish the specs and moonwalk through a public apology.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.StrongPositive,
            outcome_2: OutcomeModifierWeight.SlightPositive,
            outcome_3: OutcomeModifierWeight.StrongNegative,
            outcome_4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Bringing the sax and a grin; let’s win the dance-off."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Morning bops can misfire; we’ll keep an eye on tone."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "We’ll spotlight voluntary vibes first and measure response."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "We’ll watch fine structures closely to avoid excess."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Clinicians helped shape the morning tracks to lower cortisol and cereal catastrophes. The program centers family well-being, with opt-outs and no judgment for off-key households.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.SlightPositive,
            outcome_2: OutcomeModifierWeight.SlightNegative,
            outcome_3: OutcomeModifierWeight.ModerateNegative,
            outcome_4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Health framing is solid; still, keep costs grounded."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clinician input is strong; evidence supports harmony tracks."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Confidence noted; we still need clear escalation guardrails."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance is good, but revenue risks deserve caution."
              }
            }
          }
        },
        {
          id: "a_root_3",
          text: "Enforcement is more pep talk than patrol. Scripts guide gentle prompts, not raids, and fines apply only after clear, repeated dodges of designated sing-along cues.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.SlightNegative,
            outcome_2: OutcomeModifierWeight.ModerateNegative,
            outcome_3: OutcomeModifierWeight.ModeratePositive,
            outcome_4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Info helps; avoid sounding like soft-policing jargon."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Families need clarity on exceptions; keep it simple."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Voluntary tone first, limited fines later; that’s right."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Public scripts are fine; just watch hidden cost creep."
              }
            }
          },
          followUpId: "q_sec_1"
        },
        {
          id: "a_root_4",
          text: "Yes, fines and micro-royalties exist and fund the National Kazoo Reserve plus a slippers credit. We’ll publish who gets paid, by what formula, and how bidding was scored.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.SlightPositive,
            outcome_2: OutcomeModifierWeight.SlightNegative,
            outcome_3: OutcomeModifierWeight.ModeratePositive,
            outcome_4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Own the funding story, but avoid sounding gleeful."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Spell out safeguards so families aren’t nickel-and-dimed."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting fines is honest; keep enforcement clearly narrow."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Transparent fees and reserves help credibility and math."
              }
            }
          },
          followUpId: "q_sec_2"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_1",
        text: "Leaked Harmony Compliance flowcharts show pause escalations; who writes those scripts, who reviews them, and what separates a fine from a friendly nudge?",
        answers: [
          {
            id: "a_sec1_1",
            text: "On the record: the Homeland Harmony Bureau prioritizes education and de-escalation. Fines are for willful, patterned unplugging during marked choruses, not for honest chaos.",
            type: AnswerType.Authorized,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.ModeratePositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Strong lead; show oversight and humane discretion."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Add family health checks before any penalty step."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear protocols, training, and de-escalation emphasized."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mind admin costs; don’t overbuild a costly bureau."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Homeland
          },
          {
            id: "a_sec1_2",
            text: "Scripts are drafted by trained facilitators and reviewed by a civil-liberties panel and an ethics chorus. A fine requires three documented hard mutes across separate sessions.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightNegative,
              outcome_2: OutcomeModifierWeight.ModerateNegative,
              outcome_3: OutcomeModifierWeight.ModeratePositive,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Facts are good; be careful not to sound clinical."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Include caregiver scenarios to reduce wrongful flags."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency on review cycles improves trust in scripts."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Documentation is fine; keep staffing lean and targeted."
                }
              }
            },
            followUpId: "q_ter_1"
          },
          {
            id: "a_sec1_3",
            text: "We’ll release annotated flowcharts after we finish blacking out the parts that were coffee stains anyway. For now, the rule is sing first, sanction never.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModerateNegative,
              outcome_2: OutcomeModifierWeight.SlightNegative,
              outcome_3: OutcomeModifierWeight.ModeratePositive,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dodging specifics reads defensive; tighten your brief."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "At least you promise docs; include pediatric input."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection invites suspicion; outline limits plainly."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delay can hide overruns; set a clear budget window."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "There is no secret ‘pause squad’ in track suits staking out kitchens. We do not monitor private conversations, and we don’t ticket yawns or blender usage.",
            type: AnswerType.Deny,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightPositive,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.SlightNegative,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flat denials risk backlash if leaks surface tomorrow."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Families want nuance, not blanket dismissals."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Avoid absolutes; qualify scope and escalation caps."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "If true, it limits spend; still publish audit trails."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_2",
        text: "Procurement emails hint a pre-baked vendor list and sweetened royalties; who profits from playlist deals, and how do fines and credits move through the budget?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Yes, fines support kazoo stockpiles and the slippers credit, and artists earn royalties. Vendors get paid for uptime, not surveillance, and we’ll show the ledgers.",
            type: AnswerType.Admit,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModeratePositive,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.ModerateNegative,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Own it plainly; avoid novelty tone on penalties."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Earmark funds for family support, not just gadgets."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Explain fines threshold to prevent over-enforcement."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear revenue paths ease markets and congressional math."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "Active negotiations are like jazz: too many notes to narrate mid-solo. When the contracts land, you’ll see the receipts, minus legally required confetti.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModerateNegative,
              outcome_2: OutcomeModifierWeight.SlightNegative,
              outcome_3: OutcomeModifierWeight.ModeratePositive,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Evasive budget talk sounds like a cover for waste."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "At least you resist lock-ins; keep access equitable."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vagueness on penalties complicates field guidance."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection rattles vendors and confuses investors."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "If a vendor can out-hustle our auditors on camera, fine, they can keep the spread. Otherwise, let the sunlight in and let the numbers do the two-step.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Bold, but don’t trivialize procurement safeguards."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Families need fairness, not theatrics, in deals."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Competition talk is fine; keep enforcement separate."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Challenges don’t balance books; show caps and audits."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Payments flow via capped per-home fees and standard royalty splits; fines recycle into family credits. Procurement used open bids with scorecards posted for audit.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModeratePositive,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.ModerateNegative,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Good clarity; publish flows and vendor caps publicly."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ensure affordability guardrails for lower-income homes."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Spell out when enforcement pauses for genuine errors."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Standard rails and caps reduce fraud and leakage risk."
                }
              }
            },
            followUpId: "q_ter_2"
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_1",
        text: "On pause detection, how do you avoid penalizing toddler meltdowns, appliances, or privacy mutes, and who audits edge cases before a kitchen gets a citation?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Detectors look for sustained manual mutes across sessions, not crying or kettle hiss. An independent lab and a citizen chorus run bias tests and publish false-positive rates.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightNegative,
              outcome_2: OutcomeModifierWeight.ModerateNegative,
              outcome_3: OutcomeModifierWeight.ModeratePositive,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Good detail; avoid implying constant surveillance."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Edge-case filters protect families from false flags."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Manual review focus reduces unnecessary escalations."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Sensors add costs; validate ROI before scaling."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "If breakfast turns into percussion practice, breathe; that’s not a violation. Households get warnings, a help call, and an amnesty track before anything financial happens.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Compassion-first messaging lands well at the table."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Strong safeguard for family health and morning chaos."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Keep criteria tight so leniency isn’t abused."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flex rules, but don’t balloon refunds and admin hours."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "Our algorithmic sous-chef is still taste-testing. We’ll share the recipe once we replace the oregano that wandered in from the blender incident.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModerateNegative,
              outcome_2: OutcomeModifierWeight.SlightNegative,
              outcome_3: OutcomeModifierWeight.ModeratePositive,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting it’s not ready invites doubts; set dates."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Families worry during tests; publish fail-safe rates."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Trial mode needs clear limits on enforcement powers."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Pilots can save money by catching flaws early."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "We’ll host open mute-athons: try to trick the system, win a trophy, and help us harden it. If it flubs, we fix it, not fine you.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Openness is good; ensure rules are fair and inclusive."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Crowd tests help, but protect kids and privacy."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public challenges risk gaming enforcement tactics."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Events cost money; keep prizes lean and purposeful."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_2",
        text: "Regarding data, what do speakers transmit—timestamps, anonymized IDs, hum metrics—and who stores it, for how long, and can vendors monetize any of it?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Devices send event pings: playlist started, chorus skipped, opt-out toggled. No audio payloads. A public trust stores 30 days of logs, then purges, with third-party audits.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModerateNegative,
              outcome_2: OutcomeModifierWeight.SlightNegative,
              outcome_3: OutcomeModifierWeight.ModeratePositive,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Useful specifics; stress minimal data by default."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Limiting data types protects families’ routines."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Pings over streams reduce enforcement exposure."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Storage and telemetry costs need tight budgets."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Vendors cannot sell, share, or deduce your nap schedule from hums. Monetizing compliance data is banned, and violations void contracts and trigger refunds.",
            type: AnswerType.Deny,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModeratePositive,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.ModerateNegative,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Absolute bans sound brittle if exceptions emerge."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Guarantees should include penalties for violators."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Total prohibitions hinder audits when abuse arises."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Fewer markets for data lowers compliance costs."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "Privacy toggles ship on by default, and opt-outs are one tap. Households can view and delete logs, and kids’ profiles are cloaked in extra silence.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Default privacy on is the right national tone."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Strong for family agency; opt-outs must stay simple."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lower data may slow probes; define emergency access."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Expect reduced metrics; adjust ROI assumptions."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "We do collect aggregate metrics to measure whether bickering dips during breakfast. That’s reported in bulk, not tied to names, and it sunsets unless renewed.",
            type: AnswerType.Admit,
          outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModeratePositive,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.ModerateNegative,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting collection is fine; cap scope and timelines."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Measure outcomes, but don’t normalize constant pings."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clarify that enforcement can’t use these aggregates."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Aggregates help budgeting without user-level risk."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
