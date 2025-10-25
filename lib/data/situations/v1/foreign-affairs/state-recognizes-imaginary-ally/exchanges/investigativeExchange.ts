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
      text: "State recognized imaginary allies with pastel passports. Who okayed crayon consulates, and what stops invisible visa grifts?",
      answers: [
        {
          id: "a_r1",
          text: "If they’re real enough to demand embassies, they’re real enough to file receipts. Show the contracts, show the crayons, and yes—explain those rumored lunar tariffs in daylight.",
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
              reaction: "This challenges the premise and asserts clear authority."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This risks sidelining State and inflaming diplomatic critics."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r2",
          text: "Recognition follows the Treaty of Make-Believe, notarized in invisible ink. We honor sandbox borders pending nap-time audits; pastel passports are water-soluble and flagged in our systems.",
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
              reaction: "This legalese blurs lines and weakens accountability."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "This backs State’s inform posture and process discipline."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "Procurement specifics live with the Office of Stationery Integrity; they adore binders, footnotes, and tracing paper. Let’s let them color inside the lines and publish the receipts.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "This evasive tone invites suspicion and diminishes trust."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "It gives State room to clarify records without overreach."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Taxpayers aren’t underwriting deluxe daydreams. Supplies are non-toxic, bulk-rate, and audited; invisible visas can’t be charged without a receipt that becomes visible on review.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "This calm tone reassures while keeping pressure modest."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "It constrains State and may overpromise on safeguards."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "On the crayon consulates, name the vendors, disclose bid scores, and explain why invoices list 'glitter security' and 'nap-time overtime'.",
        answers: [
          {
            id: "a_s1_1",
            text: "Preliminary awards went to SketchWorks and Bureau of Doodles after open bidding; 'glitter security' refers to anti-sparkle protocols. Detailed ledgers will be released this afternoon.",
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
                reaction: "Detailing vendors without totals risks partial spin."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency aids State’s audits and vendor oversight."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "No diplomat was paid 'nap-time overtime'; that phrase is a vendor placeholder, not a billable hour. It won’t survive a red pen, a red face, or a procurement review.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Challenging wording sets a firmer accountability bar."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "It exposes State to procurement blowback and delays."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Procurement board minutes speak louder than my podium. We’ll post them for public scribbling, and you can circle the typos in whatever color moves your soul.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection erodes credibility and invites more digging."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "It protects State’s process while records are assembled."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Every crayon stick is serialized and barcoded. If one draws outside the budget, the audit pings before the wax cools, and the payment melts right back into escrow.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Reassurance paired with tracking showcases control."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It tightens State’s obligations and compliance costs."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "MOUs with blanket-fort leaders cite pillow tariffs and flashlight basing rights. Who negotiated them, and who pockets invisible visa fees?",
        answers: [
          {
            id: "a_s2_1",
            text: "On background and on the record: under the Treaty of Make-Believe, MOUs were signed by accredited Blanket Fort Regents. No personal royalties exist; fee schedules sit on the sandbox registry.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process-first framing sounds timid amid fiscal questions."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "It aligns with State’s treaty brief and discipline."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.State
          },
          {
            id: "a_s2_2",
            text: "If someone is pocketing invisible fees, show a visible deposit. Bring the ledger; we’ll bring the flashlight, and we’ll read it under the fort together.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Direct challenge projects strength and demands facts."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "It sidelines State’s messaging and complicates talks."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_3",
            text: "The draft MOU did flirt with 'pillow tariff credits' before adults intervened. Those lines are struck, initialed, and sent to nap history with a juice box apology.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting flirtations invites criticism and scrutiny."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Candor helps State correct terms within the framework."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Negotiators came from the Bureau of Fictional Affairs with observers from Paperclip Counsel. Flashlight basing rights sunset at bedtime and renew only after teeth are brushed.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Naming negotiators shows spine and basic transparency."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "It narrows State’s maneuver space in sensitive talks."
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
        text: "List contract numbers, delivery schedules, and per-box crayon prices, and name the official who approved the 'glitter security' spec.",
        answers: [
          {
            id: "a_t1_1",
            text: "Contracts CR-17-Alpha and CR-22-Pastel deliver on weekly pallets. The price ceiling is three beans per 24-pack, and 'glitter security' is a sealant that refuses to be festive.",
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
                reaction: "Specs without totals feel incremental and cautious."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Disclosing numbers bolsters State’s contracting rigor."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "The spec name was whimsical; the function is mundane anti-tamper varnish. We’ll relabel it 'particle containment' and try to keep the poetry out of procurement.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning the label shows candor with operational focus."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "It exposes State to semantic nitpicks and blame."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We’ll upload the Gantt chart so you can admire the rainbow of deadlines. Until then, I won’t narrate delivery schedules like a bedtime story.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process showmanship reads evasive under scrutiny."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "It buys State time to validate schedules and costs."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "No single signature carried the day. The tri-sign review—procurement, legal, and the Chief Imagination Officer—kept the crayons inside the grown-up lines.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear governance displays authority and competence."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "It adds approval burdens and narrows State discretion."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Spell out the invisible visa fees, receipt protocols, and anti-fraud checks—how do you audit imaginary ink without imagining the audit?",
        answers: [
          {
            id: "a_t2_1",
            text: "Visa fees range from zero to two buttons based on reciprocity. Receipts appear on thermochromic paper at stamping and vanish if altered, leaving a checkerboard watermark.",
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
                reaction: "Button fees sound whimsical and undermine seriousness."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "It helps State codify receipts in a playful regime."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "We do not accept rocks, leaves, or IOUs from future unicorns. Only recognized sandbox tender is taken, logged, and reconciled nightly against a very real bank.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm denials set boundaries against sloppy claims."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "It risks appearing dismissive of genuine complaints."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Auditors run a double-blind: one team imagines nothing, the other imagines everything. If the books still balance, the controls passed with flying colors.",
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
                reaction: "Reassurance by metaphor invites jokes, not trust."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "It frames State’s controls while avoiding technical leaks."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If counterfeiters think invisible ink is easy, they’re welcome to forge a queue. The turnstiles count what the scanners see and what pretenders can’t fake.",
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
                reaction: "Tough talk signals deterrence and audit resolve."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "It pressures State with promises of aggressive tests."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
