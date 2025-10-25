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
      text: "When did the Panel of Applied Ethics decide remorse needs serial numbers and apology tokens, and who okayed refunds ricocheting through a ‘charity’?",
      answers: [
        {
          id: "q1a1",
          text: "The President sees the auction as avant‑garde civics: a kazoo reminder that remorse isn’t mass‑produced. While lawyers work, admire the shiny tokens as exhibits, not moral credit.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Turning controversy into performance art lowers heat."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Treasury sees gimmicks, not instruments; caution flags."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This circus distracts from safety guidance; not ideal."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes aside, compliance posture is weakened by this."
              }
            }
          }
        },
        {
          id: "q1a2",
          text: "Treasury is downgrading apology tokens to novelty chits and pricing remorse at zero until audits land. All proceeds are sequestered, and no refund will clear without a clean paper trail.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Backing clarity on refunds while keeping focus on fixes."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Reclassifying tokens as novelties stabilizes expectations."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Frivolous framing blurs public health warnings on misuse."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Light touch here risks undermining enforcement tempo."
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "q1a3",
          text: "Public Health here: do not eat, vape, microdose, or staple apology tokens to your wellness. They are not supplements or cures; they’re props, and props are a choking hazard for civic digestion.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Stern safety talk eclipses our narrative control."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Health alarm can spook markets around payment rails."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear hazard language protects people and earns trust."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Tone edges into policy pre‑judgment before charges."
              }
            }
          }
        },
        {
          id: "q1a4",
          text: "Justice has frozen the virtue‑vending pilot under statute 9‑NF. We’re preserving code repos, bidder logs, and refund paths, and we’ll post charge decisions with exhibits once interviews are complete.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.MajorPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Legal freeze narrative overshadows the kazoo bit."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hard stop chills vendors, though it prevents wider damage."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Enforcement notice leaves less room for education."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Statutory clarity and freezes project resolve."
              }
            }
          },
          followUpId: "q2"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "Who coded the apology tokens and serial logic, and did anyone inside the Panel pre‑reserve vanity numbers before the public ‘virtue drop’ launched?",
        answers: [
          {
            id: "q2a1",
            text: "Preliminary procurement shows a sole‑source sprint to ContriteChain Labs under Task 47C. We’ve captured the repo hash and build IDs; a redacted contract and vendor roster will post this week.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dry procurement facts dampen our stagecraft."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sole‑source hints raise fiscal eyebrows."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tech choices may ignore misuse harms."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear vendor trail aids legal scrutiny."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "q2a2",
            text: "We have no evidence of staff pre‑reserving serials or gaming the mint. Tales about “0001‑SANCTIFIED” badges are colorful but unsupported; internal access logs don’t match the claims.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denials can look slippery under audit."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances without logs don’t steady ledgers."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "If true, fewer safety exceptions to track."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Categorical claims box us in if evidence flips."
                }
              }
            }
          },
          {
            id: "q2a3",
            text: "We’ll be blunt: the checksum table briefly allowed vanity serials during testing. That window should never have touched production; it did for minutes, and we’ve locked it behind multi‑party keys.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting flaws steals the show from our misdirection."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Candor helps stabilize counterparties’ nerves."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Checksum gap risks public confusion over safety."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admissible lapses widen exposure for charges."
                }
              }
            }
          },
          {
            id: "q2a4",
            text: "If you need a number to feel ethical, pick your birthday and journal. The real fix is culture, not numerology, and we’re grading the culture pop‑quiz right now.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Playful framing keeps cameras on the gimmick."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes muddy pricing clarity for integrators."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection undermines caution messages."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor reduces panic but not evidence work."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "Why did refunds boomerang through the Ethics‑Adjacent Generosity Guild, and who sits on its board as fees skim tiny bites off contrition?",
        answers: [
          {
            id: "q3a1",
            text: "Refund routing is paused, and any fees charged by intermediaries will be reversed. Treasury will settle principal directly to buyers’ accounts with a plain receipt—no emojis, no moral multipliers.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Refund talk is fine, but it lacks spectacle control."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Guaranteeing make‑wholes calms payment partners."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fees framing distracts from misuse warnings."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We prefer holds over promises during probes."
                }
              }
            }
          },
          {
            id: "q3a2",
            text: "We’ve subpoenaed the Guild’s processor and escrow agreements and mapped the board’s ties to the Panel. Expect a public money‑flow diagram with dates, amounts, and names where law allows.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Subpoenas shift spotlight from our bit to theirs."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Seizures can rattle processors and donors."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Investigations delay safety outreach cadence."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Compelling records strengthens our charging posture."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "q3a3",
            text: "A reminder: charities are not digestive enzymes for bad ideas. If a board mixed ethics branding with transaction skims, we’ll post big cartoon labels so nobody swallows that smoothie twice.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Safety scolding dims the absurdist narrative."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Harsh tone unsettles rails during reviews."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Sharp warning lands with independents and parents."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overreach rhetoric complicates prosecutorial pacing."
                }
              }
            }
          },
          {
            id: "q3a4",
            text: "The Guild called itself “adjacent” because “complicated” didn’t fit on the tote bag. We are un‑adjacent‑ing the mess and returning it to the land of boring refunds.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Wordplay buys airtime and reframes the fiasco."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Gags offer little guidance to markets."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes weaken seriousness of health cautions."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Levity is fine, but locks and labels still rule."
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
        text: "Name the contractors and reviewers who touched the token code, where build artifacts live, and who pushed the change that flipped the checksum switch.",
        answers: [
          {
            id: "q4a1",
            text: "We’ll publish signed build manifests, testnet transaction IDs, and a timeline of code reviews. Staff names are withheld under HR law, but roles, approvals, and commit hashes will be on the docket.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Releasing manifests steals our reveal energy."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Transparency helps, but triggers vendor jitters."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Code dumps divert attention from safety steps."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Receipts and hashes sharpen case integrity."
                }
              }
            }
          },
          {
            id: "q4a2",
            text: "A senior engineer okayed a “friendly vanity” flag meant for demos; it leaked into live due to a sloppy merge. That was unacceptable, and the flag is gone with auditable safeguards in place.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Owning the flag flip feeds headlines we don’t want."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity aids reconciliation of audit trails."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admission risks normalizing unsafe tinkering."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confession narrows defenses we might need."
                }
              }
            }
          },
          {
            id: "q4a3",
            text: "An external auditor is reproducing the build from source on clean hardware. If their recompile diverges, nothing moves; if it matches, we ship only with multi‑sig and change‑freeze windows.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances feel small next to the spectacle."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Independent rebuilds rebuild market confidence."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Focus on builds delays public guidance."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audits help, but we still need enforceable facts."
                }
              }
            }
          },
          {
            id: "q4a4",
            text: "This wasn’t a sentient algorithm selling souls; it was glittery accounting glued to a website. We’re retiring the glitter and keeping the accounting very boring.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Plain talk humanizes, keeping humor in frame."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Folksy riff adds little to procurement clarity."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Shrugging tone blunts safety urgency."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Simplifying avoids panic but not liability."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "Track the money through the Generosity Guild: were donor‑advised funds used, what fees were skimmed, and which board relationships overlap with Panel staff?",
        answers: [
          {
            id: "q5a1",
            text: "The timeline will show which wallets and banks handled flow, fee tables per contract, and any overlaps flagged for recusals. We’ll release exhibits with masked IDs and unmasked math.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Wallet timelines hog airtime we can’t conduct."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tracing flows may spook counterparties."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Forensics overshadow misuse advisories."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Money maps tie actors to transactions cleanly."
                }
              }
            }
          },
          {
            id: "q5a2",
            text: "We have not found evidence that Panel staff personally profited from refund routing. If evidence appears, we’ll say so promptly and move for clawbacks.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denials age poorly if overlap appears later."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft claims don’t balance reconciliation sheets."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "If accurate, fewer conflict risks for outreach."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We prefer facts to absolutes during inquiry."
                }
              }
            }
          },
          {
            id: "q5a3",
            text: "If you bought a “morality license” expecting sainthood dividends, that’s a finance problem. We challenge vendors to stop promising spiritual yield curves.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Scolding buyers alienates some audiences."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Moralizing doesn’t stabilize vendors or donors."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear expectations reset risk behaviors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Judgmental tone complicates witness cooperation."
                }
              }
            }
          },
          {
            id: "q5a4",
            text: "Refunds will be whole, and incidental fees won’t fall on buyers or donors. The Panel’s budget—not the Guild—will absorb the clean‑up, under Treasury oversight.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Whole refunds cool tempers and allow levity."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Covering fees restores trust in routing."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Refund focus can eclipse safety messaging."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Promises constrain remedies if fraud is proven."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
