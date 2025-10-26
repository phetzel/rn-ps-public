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
      id: "q1",
      text: "From ‘lavender leniency’ to ‘blanket immunity,’ how did State, Defense, and Justice turn candles into supposed immunity, and who pocketed what?",
      answers: [
        {
          id: "a1",
          text: "I’ll challenge the candles to a trial by bathtub: if they out‑scent a skunk, they’re contraband; if not, they’re demoted to break‑room fresheners. Auditors will follow the waxy money trail.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Bold spectacle reframes the probe and asserts executive challenge."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Public spectacle undercuts protocol nuance and invites ridicule."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Neutral
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The stunt complicates operations and fuels policy confusion."
              }
            }
          }
        },
        {
          id: "a2",
          text: "We call those items ceremonial ‘smell treaties’—protocol props that calm rooms, not laws that bind them. The paperwork is seating charts and citrus oil, not backdoor indemnity schemes or scented loopholes.",
          type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Deflection reads evasive and weakens the administration’s stance."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Reframing as protocol eases diplomatic fallout and buys time."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Casual phrasing blurs legal lines and hampers the review."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It muddies supply records and invites base‑level skepticism."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "a3",
          text: "Justice opened an ethics quarantine on all novelty wax, tagged every batch, and paused sales while we compare labels to casework. The memos sort aromas by tone, not legal effect, and the chain is under review.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Dry detail lacks leadership tone and concedes narrative control."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Disclosure risks protocol optics and alarms partners."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Transparency supports the ethics quarantine and process integrity."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It exposes logistics gaps that may affect readiness."
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "a4",
          text: "Defense does not vend pardons; our candles are morale flares with unlucky labels. If they do anything, they repel moths on night drills—which, last we checked, is not a recognized legal remedy.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Flat denial feels brittle against documents and vendor trails."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Denial strains interagency diplomacy if receipts surface."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dismissal before review completion erodes prosecutorial leverage."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear denial protects unit morale and narrows liability scope."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "Map data flags shell vendors, burner‑wax ledgers, and gift‑closet routing. Who booked the margin, and do those ledgers hit agency accounts or just potpourri budgets?",
        answers: [
          {
            id: "a5",
            text: "Preliminary review shows shell vendors bundled purchase orders with swag budgets and billed near cost. The supposed ‘margin’ is mostly freight, insurance, and ego. No transfers to agency ops were logged.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The accounting talk feels hedged and lacks decisive direction."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It hints at protocol gaps that embarrass our envoys."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear traceability supports charging decisions and integrity."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It exposes logistics seams that need quiet remediation."
                }
              }
            }
          },
          {
            id: "a6",
            text: "The only thing flowing through gift closets is glitter and diplomatic awkwardness. The rest is speculative aromatherapy from spreadsheet enthusiasts who sniff columns for meaning at 2 a.m.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes and glitter lines undermine seriousness of the probe."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Light deflection reduces diplomatic heat and press calls."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It trivializes evidence handling and muddies chain of custody."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "The tone invites barracks sarcasm and distracts units."
                }
              }
            }
          },
          {
            id: "a7",
            text: "We did find burner‑wax ledgers with vendor stamps and typos that would make a notary cry. Those records are under independent scrub, and we’ll publish a clean trail with corrected entries.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Owning the margin signals leadership and restores some trust."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting flow paths risks bilateral blowback this week."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Concession helps but may weaken leverage in negotiations."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Neutral
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "a8",
            text: "Any funds touched by this program are frozen like a peppermint stick in January. Refunds and disclosures will go out before anyone lights another wick on government time.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Freeze language reads reactive and cedes narrative ground."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It suggests protocol panic and unsettles partners."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "A blanket freeze may hinder targeted recoveries."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Assurance stabilizes ranks and protects mission focus."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "Justice memos reportedly scent‑code SKUs like ‘leniency‑lavender’ and ‘bunker‑musk.’ Do those codes mirror charging or clemency decisions, or are they satire‑safe tags?",
        answers: [
          {
            id: "a9",
            text: "Authorized by Justice: internal memos categorize scents as training placeholders with zero legal force. Codes flag satire risk and supply cycles, not outcomes. Misuse triggers discipline and retraining.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Authorizing tone looks cavalier before facts are settled."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A measured note defuses diplomatic speculation slightly."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It risks prejudicing internal reviews and perceptions."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity creates confusion in supply and labeling controls."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Justice,
            followUpId: "q5"
          },
          {
            id: "a10",
            text: "The color codes align to inventory cadence and ‘humor risk’ tags so managers can spot bad branding before it confuses policy. They do not map to charging or clemency decisions.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Useful details, but the voice lacks a guiding message."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Such candor strains ceremony and partner expectations."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clarity strengthens the quarantine and audit trails."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It hints at materiel gaps that we must cover quietly."
                }
              }
            }
          },
          {
            id: "a11",
            text: "There is no SKU‑to‑justice pipeline. If someone marketed ‘blanket immunity,’ they’ll get a blanket statement: stop. A candle cannot alter statutes; it can barely overcome cafeteria lunch.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hard denial may age poorly if new memos surface tomorrow."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Firm posture could pinch diplomatic apologies later."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It narrows options should evidence align the other way."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Denial shields units and keeps focus on mission tasks."
                }
              }
            }
          },
          {
            id: "a12",
            text: "Publish the memos, scrubbed for active matters, and let readers compare claims to context. If a wick can overrule case law, we’ll eat the centerpiece at the next ethics seminar.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Publication sets the agenda and asserts executive confidence."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Neutral
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Release risks misreadings that complicate active matters."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Opening records may reveal process warts we must explain."
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
        text: "Who approved shipping labels reading ‘pardon candle’ to depots, and why were morale flares listed as ‘aroma morale boosters’ in base inventory sheets?",
        answers: [
          {
            id: "a13",
            text: "No one authorized a ‘pardon candle’ label; the template engine mashed ‘parade candle’ with ‘morale flare.’ We’ve purged the template, and the intern now proofs fireworks and fonts before anything ships.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial against labels looks brittle to the public."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It may sour coordination with partner depots and carriers."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Premature certainty could undermine eventual prosecutions."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Strong denial reassures units and reduces rumor churn."
                }
              }
            }
          },
          {
            id: "a14",
            text: "We’ll admit a handful of mislabeled cartons slipped past QA during a hurry‑up order. The flares were never issued as legal instruments and are quarantined with their snarky stickers.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Accountability here shows control and resets expectations."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting errors invites protocol nitpicks from allies."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Concession supports corrective actions and consent decrees."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It concedes paperwork flaws that adversaries might cite."
                }
              }
            }
          },
          {
            id: "a15",
            text: "Sign‑offs use a two‑key system—unit supply and depot QA—so we can trace who clicked approve and when. That audit is underway, with logs preserved and briefings queued.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process talk is thin on responsibility and urgency."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Explaining controls calms protocol audiences and press."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It may box prosecutors into narrow procedural debates."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It exposes workflow that could slow requisitions."
                }
              }
            }
          },
          {
            id: "a16",
            text: "Depots were told to treat novelty labels like glitter grenades: don’t deploy, don’t inhale, bag and tag. Replacements ship with fonts large enough to scare typos back into line.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Warm words without fixes look like spin during an inquiry."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soothing tone risks trivializing partner concerns."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance can look premature if audits are incomplete."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Morale emphasis steadies troops amid confusing headlines."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "Did State’s protocol office treat ‘smell treaties’ as décor only, and did anyone in the field convert that ceremony into immunity claims to stiff‑arm investigators?",
        answers: [
          {
            id: "a17",
            text: "Protocol treats ‘smell treaties’ as décor—entente‑scent meant to soothe jet lag and speeches, not subpoenas. Anyone waving one as immunity will be waved politely toward the exit.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection looks cagey while investigators are watching."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Framing as décor shields diplomats from overreach claims."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It blurs legal clarity on misuse and intent."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity hampers warehouse checks and corrections."
                }
              }
            }
          },
          {
            id: "a18",
            text: "If a field officer cited aroma as authority, that report will meet a policy memo and a supervisor with no sense of humor. No scent changes standing orders, statutes, or due process.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Informing is solid, but it leaves the story to others."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It risks admitting protocol deviations before context."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Precise guidance reinforces standards and case triage."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Details may highlight vulnerabilities in inventories."
                }
              }
            }
          },
          {
            id: "a19",
            text: "Bring a case number and the alleged candle. We’ll test the wick, trace the paperwork, and read the label into the record—dramatically, with a desk fan for effect.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Targeted challenge projects resolve and invites evidence."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It can look combative toward field staff and partners."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "A dare risks chilling witnesses who might cooperate."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Neutral
                }
              }
            }
          },
          {
            id: "a20",
            text: "The loopholes you fear are sealed with something stronger than wax: plain policy in plain words. Teams are being re‑briefed so no one confuses ambiance with amnesty again.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Comfort language alone appears evasive in this moment."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance without policy shifts rings hollow abroad."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It may dilute urgency for corrective orders."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Calm tone helps units refocus on training and readiness."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
