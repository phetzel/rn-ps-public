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
      text: "After the Ethics Commission started auctioning morality licenses and apology tokens, how has pay-to-be-good warped public trust and oversight?",
      answers: [
        {
          id: "a_r1",
          text: "Sure, the Commission tried to turn ethics into dinner theater; we turned the lights back on. The President will treat the tokens like props, not policy, and conduct this cleanup without a kazoo solo.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Plays the kazoo with a grin, reframing chaos as performance."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Sees novelty claims undermine fiscal clarity; urges caution."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Worries the token gimmick blurs real health messaging."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Appreciates daylight on evidence; momentum for shutdown grows."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r2",
          text: "Treasury has priced remorse at zero pending audits, which is economist for “nice try.” Apology tokens are novelty chits, not currency, and refunds will route through boring, traceable channels.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Winces at the ledger talk; wants jokes to lead the segment."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Welcomes pricing clarity to stabilize markets and audits."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Prefers stronger warnings than finance talk provides."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Notes soft language may slow enforcement, but accepts it."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "Public notice from Health: do not eat, vape, microdose, or staple apology tokens to your conscience. Ethics is not a supplement, and we will make posters so obvious even my toaster gets the message.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Brass band stalls as safety sermon steals the spotlight."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Notes health tone may spook firms; urges measured terms."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Applauds direct caution; public risk literacy improves."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Sees value in warnings but wants legal specifics next."
              }
            }
          }
        },
        {
          id: "a_r4",
          text: "Justice has frozen the virtue vending machines under procurement and fraud statutes. The so‑called licenses confer zero immunity, and we’re inventorying every serial number before anyone says “absolution.”",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Legal briefing drowns out the kazoo act he staged."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Worries liability hints unsettle markets without numbers."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Sees less on health risk; safety angle underemphasized."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Backs the freeze and labels; enforcement posture hardens."
              }
            }
          },
          followUpId: "q_sec2"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "About the refund stampede: with serialized tokens and public ledgers, who gets their money back, and at what rate, before the remorse exchange closes?",
        answers: [
          {
            id: "a_s1_1",
            text: "Direct buyers will be refunded at face value, and resold tokens will unwind in purchase order, not hype order. We’re capping fees at zero and ignoring influencer add‑ons, because remorse isn’t a luxury.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hates refund math overshadowing his comic framing."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Supports face-value plan to quiet volatility quickly."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Worries refund rush distracts from safety messaging."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sees risk of claims disputes; wants tighter proofs."
                }
              }
            }
          },
          {
            id: "a_s1_2",
            text: "We underestimated the secondhand remorse market and its swarm of middlemen. That’s on us; we’re mapping serial chains so refunds flow to the human who actually paid, not the guy who named his cat “Escrow.”",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting mispricing deflates the vaudeville pivot."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Takes a reputational bruise; accepts lessons learned."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Notes confusion may drive unsafe behavior and rumors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Values candor; stronger grounds for corrective orders."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Each token’s serial ties to a payment trail; the portal will show status, claimant, and hold reasons. We’ll publish the queue math and time bands, and legal notices will explain any offsets or holds.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process talk dulls the spectacle he hoped to headline."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Warns precision may slow payouts but protects funds."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear trails aid outreach to affected communities."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Prefers faster holds alongside the tracing protocol."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_4",
            text: "Think of this as shutting down a rigged carnival booth and counting the tickets twice. We’ll return the cash, retire the plush giraffes, and staple a “don’t do that again” sign to the booth.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Enjoys carnival metaphor; keeps cameras on the props."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fears flippancy could trigger speculative chargebacks."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sees levity undermining health disclaimers and alerts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor softens edges but still supports closures."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "On bulk‑buying absolution: what stops officials from expensing crates of licenses, and what procurement guardrails shut down volume absolution?",
        answers: [
          {
            id: "a_s2_1",
            text: "Health will treat “bulk virtue” like counterfeit PPE for the soul: we’ll audit usage, flag binge patterns, and post bright red warnings. If you try to expense a pallet of purity, expect a wellness chat with witnesses.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Braces for pushback; prefers lighter tone than crackdowns."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Notes compliance costs but agrees on deterrence."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Backs treating bulk virtue as unsafe and misleading."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Wants explicit citations to sustain the posture."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "Treasury has flipped the default to “no” and the value to zero, so there’s nothing to expense. If anyone sneaks a box onto a budget line, chargeback protocols will eat it and burp out a memo.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Warms to calm messaging that quiets the frenzy."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Likes default-no with clear invoices; reduces waste."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Wants warnings retained so risk isn’t normalized."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Sees loophole risk; urges binding rules, not guidance."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Justice is issuing a rule blocking prepay virtue schemes, with debarment for vendors and discipline for officials. Bulk buys trigger automatic alerts, and we’ll publish enforcement dashboards for the curious.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Legalese again steals the show from his planned bit."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cautions about contracting friction during rollout."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Notes rule must include outreach to prevent harm."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Applauds prepay ban; cleaner cases and faster stops."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_4",
            text: "If any official feels compelled to hoard absolution like canned beans, we’ll help them discover the joy of mandatory volunteering. Nothing says “clean slate” like picking up litter in front of cameras.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Enjoys gentle mockery that redirects public ire."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Endorses voluntary returns; less market distortion."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fears levity may undercut the seriousness of abuse."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Accepts tone but reminds that penalties still apply."
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
        text: "Can you spell out the statutes you invoked to freeze the virtue vending machines, plus deadlines for clawbacks and how you’ll document every refund?",
        answers: [
          {
            id: "a_t1_1",
            text: "We’re using Procurement Code 9.4 and Integrity Statute 12-B to halt sales, void licenses, and escrow funds. Clawback notices go out within 10 days; final refunds roll in 30-60 with an auditable ledger online.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Detailed cites blunt his theater; he frowns off‑camera."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Wants cost notes added to reassure markets."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Asks for a line on consumer harms in the brief."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Confident statutes anchor the freeze and seizures."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Every refund will generate a receipt you can read without a decoder ring. Redactions cover only private data, and the audit trail gets a tamper‑evident seal you could spot from space, metaphorically.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Transparency talk keeps the spotlight off his gags."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Receipts calm fintech partners and payment rails."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Insists accessibility for nontechnical claimants."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Wants chain-of-custody language tightened."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "There is no secret amnesty appendix, no backstage pass, and no “gold tier” absolution for insiders. The vending code never granted privileges, and it never will under this administration.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denial cools rumors but still dims his stagecraft."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Welcomes clarity; fewer liability surprises."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Plain denial helps counter quack cures and scams."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Notes firm wording aids future prosecutions."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Also, we have retired the idea that ethics should beep when you insert coins. No more singing vending columns, no interns with change belts, and absolutely no clawback carnival. Just paperwork, blessed paperwork.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Comic closer lands; the props steal a final shot."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cautions not to trivialize pending recoveries."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Humor is fine if paired with explicit warnings."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Light tone acceptable; legal record remains intact."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "When the audit trail goes public, will buyers see redacted remorse or full receipts, and do these apology tokens become mere souvenirs with a return window?",
        answers: [
          {
            id: "a_t2_1",
            text: "Receipts will show what was paid, by whom, and when, with minimal privacy blocks. Tokens become inert souvenirs with zero monetary value, and the return window is clear and longer than a news cycle.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Likes clean receipts; keeps spectacle safely in frame."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strong clarity de-risks rails; souvenirs price to zero."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Warns not to imply health efficacy by packaging."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Wants redaction rules codified before release."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "We’ll admit the reseller maze leaves a few edge cases where two people think they own the same remorse. Those will take longer, but the default is refund, not stalemate, and interest doesn’t accrue to us.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting gaps blunts the comic redemption arc."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledges edge cases; sets aside reserves."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flags confusion risks for vulnerable buyers."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Honesty helps court orders withstand scrutiny."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "And to repeat the obvious: please don’t wear these as mouthguards, dermal patches, or aromatherapy coins. If it touches your bloodstream or your résumé, stop, breathe, and consult actual ethics training.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Safety reminder interrupts the lighter beat he wants."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Seeks cost estimates to pace the rollout."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Approves blunt guidance; reduces misuse temptations."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Requests citations so notices are enforceable."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If you want a keepsake, we suggest the refrigerator, not a marketplace. There’s a Museum of Bad Ideas in every town hall meeting; we’ll donate a display, complete with a label that says “Do Not Insert.”",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Gag about magnets keeps the cameras but risks drift."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Souvenir talk fine if refund rights stay prominent."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Humor okay; must include do-not-ingest reminders."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Light close works; evidence publication proceeds."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
