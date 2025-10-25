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
      text: "Who greenlit harbor drones to engage the self-declared Gondola Nation, which shell firms got paid, and what does the classified \"No Wake\" memo actually order?",
      answers: [
        {
          id: "a_r1",
          text: "If a gondola wants nationhood, it can start by winning a flag-eating contest judged by hungry diplomats. Until then, we will spend zero taxpayer napkins recognizing vibes over the law.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Spectacle sells; a contest adds leverage with laughs."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Undermines legal criteria; recognition is not a game."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes blur ROE; drones need clarity, not pageants."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Recognition is not improv. State requires a consular mailbox, a verifiable anthem, and soggy paperwork. We will release non-classified drone tasking and procurement summaries as reviews conclude.",
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
              reaction: "Bureaucracy bores voters; snack diplomacy polls better."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Affirms doctrine: paperwork precedes any recognition step."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "No change to posture; we still need authority clarity."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Defense outfitted harbor drones with polite honks and pool-noodle bumpers; they do safety, not saber-rattling. The \"No Wake\" guidance limits speed and volume, and nothing fires except the airhorn.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Tech theatrics risk overshadowing actual leadership."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Defense edging into consular lanes raises concerns."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "De-escalation affirmed; pool noodles beat escalation."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "No one slipped a contract to a cousin's shell skiff. The memo does not mandate aggression or hush money; it says do not splash pedestrians, do not escalate, and do not buy mystery torpedoes.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "A blanket denial invites more digging and tougher headlines."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flat denials erode credibility with partners and press."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clean procurement claims help sustain operational trust."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Which shell firms actually landed the harbor drone contracts, and who signed the 'urgent harbor diplomacy' waiver that leapfrogged competitive bidding?",
        answers: [
          {
            id: "a_s1_1",
            text: "The waiver was signed by the Intertidal Procurement Chair under emergency safety authority. We will publish vendors, beneficial owners, and change orders, redacting only for legitimate dock security.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process-first answers sap momentum and public patience."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparency on waivers supports our legal footing."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Procurement nuances don’t resolve field uncertainties."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "Our Inspector-General of Marinas is already scraping barnacles off this trail. Rather than leak half-facts, we will deliver a full ledger with serials, receipts, and a readable map of the money.",
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
                reaction: "Deflection looks slippery and fuels suspicion of favors."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dodging details weakens our negotiating posture."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Let IG work; we maintain readiness without drama."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "A quirky LLC name is not proof of rot. Each award met small-purchase thresholds, conflict screens, and anti-crony attestations, even if the letterhead smelled like low tide cologne.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Blanket denials sound defensive in an investigative piece."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing risk flags before review undercuts trust."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Contract vetting stands; show us errors and we’ll fix them."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If any contractor thinks sunlight will sink them, meet us at a public pier hearing with receipts and rubber boots. We will bring coffee; they can bring ledgers and actual signatures.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Bold challenge projects confidence and resets the frame."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Threats can chill cooperation with auditors and allies."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Chest-thumping invites needless friction with vendors."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "With drones set to 'polite honk,' why are logs so redacted, and does the 'No Wake' memo quietly expand Defense into splashy neighborhood diplomacy?",
        answers: [
          {
            id: "a_s2_1",
            text: "As the authorized Defense spokesperson: redactions protect harbor layouts and civilian identities, not misconduct. The memo narrows our role to navigation safety; diplomacy stays with State.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Authoritative tone helps but secrecy still stings voters."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear legal basis stated; oversight lanes remain intact."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Redactions tied to ops security; posture remains prudent."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Defense
          },
          {
            id: "a_s2_2",
            text: "Redactions are temporary while we blur kayak plates and pier cameras. The memo literally bans cosplay gunboats; our drones cannot escalate beyond a courteous beep and a reflective sticker.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassurance is fine, but it may read as evasive fluff."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comforting tone without documents invites skepticism."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Public calm aids safety; no mission creep signaled."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "We did over-redact early logs out of clumsy caution. We are re-reviewing entries, expanding the release, and committing to an unclassified annex spelling out the \"No Wake\" limits in plain language.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Owning over-redaction helps, yet it confirms missteps."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Admitting error supports reform but exposes gaps."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We learn and tighten logs; operations stay controlled."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_4",
            text: "We will not litigate line by line at a pier-side presser. Give the teams forty-eight hours to finish the scrub, then we will meet with documents, diagrams, and enough life vests for skeptics.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Refusing detail fuels the very escalation narrative."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dodging specifics risks ceding ground to critics."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "We’ll brief in channels; pier debates risk confusion."
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
        text: "List the top subcontractors behind those shell firms, their true owners, and any payments routed through tidal tax havens with suspiciously nautical P.O. boxes.",
        answers: [
          {
            id: "a_t1_1",
            text: "Preliminary lists show DockLeaf Systems, BrineByte Robotics, and FoamRail LLC as subs, with owners registered domestically. Ownership attestations and bank corridors will post once privacy checks clear.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Naming firms helps, but it can tie us to murky deals."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Detailing subcontractors strengthens our compliance case."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Transparency is good; operational focus must stay tight."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We see no tidal-haven routing; transfers hit boring mainland banks, not sandbars with cocktail umbrellas. If credible evidence surfaces, invoices freeze faster than a popsicle in a cold front.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Sweeping denials invite point-by-point rebuttals."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Premature absolution clashes with due-diligence norms."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "If clean, audits will confirm; we stay on mission."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "If someone has receipts for a seashell laundromat, bring them to auditors with cameras rolling. We will test claims in daylight, not in screenshots with pirate emojis and blurry shadows.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Calling for receipts projects accountability and vigor."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive tone risks chilling witness cooperation."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Pressure is fine; we still need calm procurement lanes."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Payment flows tripped zero risk flags. Controls include duplicate-invoice traps and salinity-themed fraud checks, so taxpayers are not buying gold-plated oars or velvet life rings.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassurances without data can read as spin."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Controls talk must be matched by verifiable evidence."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Confidence boosts morale and signals stability."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Spell out the drones' rules of engagement, who can flip the 'loud honk' toggle, and how long 'No Wake' restrictions can be renewed without public debate.",
        answers: [
          {
            id: "a_t2_1",
            text: "Rules allow navigation nudges, hazard alerts, and buoy babysitting - no interdictions or detentions. Only the Harbor Safety Watch can raise volume, and renewals require public notice after two cycles.",
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
                reaction: "Detailing rules is risky yet builds public confidence."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clarity on ROE and renewals anchors legitimacy."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too much detail can hint tactics; basics are fine."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "There is no stealth escalation switch. Firmware locks out mission creep, and any change logs ping civilian oversight before a single beep grows louder than courteous-seagull levels.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Saying there’s no switch may sound lawyerly to skeptics."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Firmware locks reassure regulators and partners."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Assurances calm waters and keep crews disciplined."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "We treated the first renewal like a fog bank and were too cautious with transparency. Going forward, we will add comment windows before extending limits beyond a short pilot period.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Admitting fog undermines command image but shows honesty."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning the lapse supports reforms and sunsets."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We correct course; ops tempo remains measured."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "The fine-grained honk matrix lives in annexes best read on a dock with diagrams, not in a soundbite. We will bring charts to committee rather than improvise on a wind-blown podium.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection on annexes invites leaks and speculation."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Withholding matrices weakens allied coordination."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Keeping annexes closed preserves tactics but irks locals."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
