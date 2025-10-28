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
      text: "With rivers slated to go sparkling by decree, who pays when valves seize, banks balk, and float-startups sink-taxpayers or your fizzy friends?",
      answers: [
        {
          id: "a_root_1",
          text: "Taxpayers won’t bankroll popped bubbles. Polluters pay into the fizz fund, and pioneers pay docking fees like everyone else. If bubbles scare you, try Quiet Puddles, because jobs will float either way.",
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
              reaction: "Taking on risk now builds jobs afloat and trust later."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Unfunded backstops would spook RiverPOP buyers."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Mixed signals hinder patrol planning on day one."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "We priced fizz by flow and set escrowed maintenance caps, with private bonds taking first hits before any public dime. The foam calendar posts quarterly. Happy to walk through the risk stack in detail.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Escrows matter, but voters smell a bailout risk."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear pricing reduces volatility and defaults."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Transparency helps, yet attack chatter persists."
              }
            }
          },
          followUpId: "q_sec_finance"
        },
        {
          id: "a_root_3",
          text: "Carbonated rivers aren't a security open bar. Valves are hardened, patrols are active, and defizz protocols kick in if tampering is sensed. No, we're not inviting soda subs to cruise the estuary.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.MajorNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.MajorPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Over-assurance can read as spin if valves fail."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Security unknowns raise maintenance contingencies."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Denying myths lets us focus on real threats."
              }
            }
          },
          followUpId: "q_sec_security"
        },
        {
          id: "a_root_4",
          text: "Authorized Treasury note: The term sheet includes clawbacks, default waterfalls, and maintenance triggers. There are no blank-check bailouts; taxpayers are last in line after operators, insurers, and bondholders.",
          type: AnswerType.Authorized,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Authorizing terms risks blame if bubbles burst."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Term sheet clarity tightens investor discipline."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "We can work within published constraints."
              }
            }
          },
          authorizedCabinetMemberId: CabinetStaticId.Treasury
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_finance",
        text: "Your term sheet pegs bubble-bonds to tolls and seltzer credits. When valves corrode or startups fold, do taxpayers eat the foam or do investors swallow it?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Indemnity runs operator reserves, then insurance, then bondholders, then state compacts; federal aid only for declared disasters. Inspections set rust thresholds that trigger clawbacks and corridor foam pauses.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Complex waterfalls won’t calm taxpayer anger."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Layered coverage protects the bond program."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Reserve stress can thin patrol readiness."
                }
              }
            },
            followUpId: "q_ter_indemnity"
          },
          {
            id: "a_sec1_2",
            text: "This isn’t a stealth bailout. Legacy river users aren’t cross-subsidizing venture rafts, and there’s no backdoor pass-through on utility bills to hide a fizzy tab.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dismissing bailout fears invites blowback."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denying risk makes pricing less credible."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calm messaging reduces opportunistic panic."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Maintenance escrow is pre-funded and independently monitored, with penalties for late top-ups. If a startup sinks, service continues without tapping general revenue or soaking local bait shops.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Independent escrow oversight earns confidence."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tighter controls may raise admin overhead."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Verification helps, but staffing is finite."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "Some of those guardrails were written by the Bubble Act authors, not us. We implement the playbook; press the Float Oversight Board at their next hearing for why it sloshed that way.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflecting conflicts erodes public trust fast."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Acknowledging input keeps markets pragmatic."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We need clarity, not buzz about influencers."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_security",
        text: "Security-wise, aren’t bubble valves and drone-ready docks a new attack surface, turning the river grid into a national seltzer target with handy Wi-Fi?",
        answers: [
          {
            id: "a_sec2_1",
            text: "No. Valves are air-gapped, patrols are randomized, and decoy foamers waste an intruder’s time. We drill with first responders and use tamper seals and rapid defizz if a node misbehaves.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "If we’re wrong on air-gaps, fallout is brutal."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Operational opacity can widen risk premia."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Randomized patrols complicate targeting."
                }
              }
            },
            followUpId: "q_ter_security_budget"
          },
          {
            id: "a_sec2_2",
            text: "Even in a worst-case, fail-closed keeps water potable and fizz vents harmlessly. We issue life vests with cupholders and publish calm, boring alerts so no one mistakes bubbles for doom.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Promises on potability must withstand audits."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Fail-closed reduces catastrophic loss tails."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance is fine; drills matter more."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "We run tiered threat matrices with local partners, and anti-foam units coordinate river cams and boom gates. Cyber ranges rehearse bubble scripts so real-world crews win by muscle memory.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process detail can sound bureaucratic on TV."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Structured matrices aid underwriting models."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Local ties help, but response time rules."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Bad actors trade on fear, not facts. We won't hand them a headline; instead we're funding watch groups, hardening old bridges, and hiring locals who notice a sketchy drone before it buzzes.",
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
                reaction: "Calling out fearmongers rallies our base."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Boasting can unsettle cautious investors."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We prefer vigilance over rhetoric tonight."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_indemnity",
        text: "Spell out the indemnity triggers: at what rust score do clawbacks bite, who proves negligence, and when can the foam calendar pause without spooking markets?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Triggers start at corrosion index C3; operators top up reserves within 10 days. If negligence is found, insurers pay before bondholders. Foam pauses portfolio-wide only after two failed inspections in a quarter.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Specs read cold while anglers sit fuming."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear triggers anchor enforceable claims."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Rust blind spots can mask sabotage signs."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "Audits stay transparent and boring on purpose. Monthly dashboards show fizz health, so savers don’t bolt, anglers don’t riot, and markets keep sipping instead of chugging panic.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances risk fatigue without numbers."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Bland audits won’t deter corner-cutters."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Boring is good if the logs are tight."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "The definitions live in Appendix G of the interagency playbook. Our lawyers guard it like a vintage seltzer siphon, but we’ll brief committees behind closed doors.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Pointing to appendices screams evasiveness."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity inflates maintenance reserves."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "We can work with clearer crosswalks later."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Early pilots will reveal where rust hides and which docks gossip. That’s why we capped exposure, stacked redundancies, and set quick switches to flatten surprises before they foam over.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Owning gaps shows honesty and course correction."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Pilot data can refine premium ladders."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting gaps demands interim safeguards."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_security_budget",
        text: "What’s the annual cost for anti-foam patrols and valve hardening, and how will you stop contractors from billing for imaginary bubbles and invisible drones?",
        answers: [
          {
            id: "a_ter2_1",
            text: "We don’t pay for ghost fizz. Every patrol logs telemetry and body-cam foam counts, invoices auto-flag if bubbles exceed physics, and auditors can subpoena sensors before any check clears.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard denials read as penny-wise on safety."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cost opacity risks hidden liabilities."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "We can deny hype while tightening checks."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Year one budgets a modest, district-split outlay with competitive bids, retention holdbacks, and clawbacks for underperformance. Benchmarked rates stop padding before it starts.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Line-item candor earns some goodwill."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Predictable spend stabilizes issuance."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Budgets must fund drills, not brochures."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "If anyone tries to milk fear for profit, we’ll name, shame, claw back, and bar them. The river isn’t a cash piñata, and nobody rents a yacht on the public dime.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Calling fraud out energizes accountability."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive tone can chill vendor bids."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We’ll act, but process must protect cases."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "Line items arrive with the budget. Until then, assume we’re spending like a responsible lifeguard, not a yacht club, and hold us to that when the numbers drop.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Stalling on numbers invites cynical headlines."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity widens spreads and delays deals."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "We can brief committees as details mature."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
