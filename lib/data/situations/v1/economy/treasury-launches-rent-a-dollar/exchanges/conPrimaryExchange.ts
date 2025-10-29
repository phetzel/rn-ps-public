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
      text: "Is leasing legal tender each month stabilizing the system or just inventing a late-fee tax on thrift with churn dressed up as innovation?",
      answers: [
        {
          id: "a_root_1",
          text: "We’re not renting money; it’s visiting monthly. Your wallet is a hotel lobby and the dollar is the bellhop. The pilot schedules access, not what cash is.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "This reinforces our denial and keeps the humor pointed but controlled."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "This framing undermines leasing discipline and signals retreat from rigor."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "It minimizes statutory exposure and glosses over consent boundaries."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "The pilot adds traceability and predictable cycles businesses asked for. Think library cards for currency: you know where notes are and when they return, reducing loss and idle hoarding.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Tone concedes too much and risks normalizing the late-fee narrative."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "It supports supervised liquidity and our traceability implementation pitch."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It downplays definitional risk around custody and tenancy of tender."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "Our lawyers are flagging odd risks: if money “lives” in pockets by contract, does it get tenant rights? We will scrutinize evictions, repos, and consent, especially for coins.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "This invites legal anxieties we do not want associated with the policy."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It paints the framework as fragile and complicates market adoption."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "It validates our statutory concerns and preserves prosecutorial leverage."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "Stability is the lodestar. There are caps on fees, opt-outs, and nobody loses cash for simply holding it. We will publish guardrails and sunset the pilot if it misfires.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Assurances feel thin and risk sounding like spin under scrutiny."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "It backs stability aims but may overpromise simplicity to consumers."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It sidesteps due-process questions about fees and possession status."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "With financiers racing to bundle cash leases into shiny products, who prevents a dollar bubble and keeps late fees from becoming a stealth tax?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Licensing standards, position limits, and plain-language contracts will govern packaging. A registry will track every leased note so risk is auditable, recallable, and capped before it snowballs.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The technical tone blunts our message and concedes the premise."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear standards bolster credibility and reassure counterparties."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "It risks papering over enforcement limits and statutory gaps."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "Late fees are not a backdoor tax; they are speed bumps against churn games. If fee revenue climbs beyond cost recovery, we misdesigned it and will recalibrate instead of siphoning thrift.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "A flat denial may look evasive and fuel the stealth tax storyline."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It constrains flexibility on pricing and weakens deterrent signaling."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "It sharpens our critique of unconstrained penalties masquerading as fees."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Let’s not crown a bubble before the first balloon inflates. The pilot is small by design, and independent monitors will report stress tests publicly before any scaling.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Light skepticism with humor helps us avoid panic without ownership."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissiveness can spook markets and looks unserious on risk controls."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It diminishes real legal exposure around packaging and disclosures."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "Consumers get clear caps, a 24-hour grace window, and forgiveness for first mistakes. No repo man knocks because your wallet sneezed on the due date.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Promises of consumer comfort may appear reactive and narrow."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Concrete guardrails strengthen the program’s social license to operate."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "The focus on consumer terms leaves structural legality unresolved."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "If dollars are on lease, can pockets evict them, and do coins count as minors? What stops wallets and lint from forming a tenants' union?",
        answers: [
          {
            id: "a_sec2_1",
            text: "We will challenge any lease that treats cash like furniture. Currency is an instrument, not a squatter, and if terms blur that line we will seek injunctions and clarifications.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Leaning into litigation optics invites headlines we cannot control."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "An aggressive posture chills adoption and complicates compliance work."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "It affirms constitutional stakes and preserves our enforcement hand."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "We are drafting guardrails with civil coders and cash handlers: no tenancy language, no eviction rituals, and mandatory remedies that treat notes as tools, not roommates.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process talk feels bureaucratic and risks losing the public thread."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Collaborative guardrails build trust and tame operational drift."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "It may blur bright lines on custody and tenant-like claims over cash."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "No one is deputizing landlords of pockets. People will not be sued by dollar bills, and coins are not entering court as emancipated minors. The law still recognizes reality.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.Neutral, // 0
              o3: OutcomeModifierWeight.SlightPositive, // +4
              o4: OutcomeModifierWeight.Neutral, // 0
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A crisp denial with levity keeps the narrative from spiraling."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Too glib invites risk-taking and weakens compliance expectations."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It understates edge cases that can become costly in court."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Hypotheticals are galloping ahead of facts. Let us review the contract text this week and argue paragraphs, not punchlines.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection reads cagey and can look like we are dodging specifics."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Re-centering on pilots and data keeps scope creep in check."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It avoids the core legal question and weakens our leverage."
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
        text: "What metrics flip the kill switch, like churn spikes, late-fee share, or dollars migrating to luxury wallets, and where are those tripwires written?",
        answers: [
          {
            id: "a_ter1_1",
            text: "A public dashboard will track churn, late-fee share, lease rollovers, and volatility. Breach thresholds trigger an automatic pause and review, with parameters published before any expansion.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Metrics talk alone risks sounding technocratic and cold to costs."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparency on thresholds enhances discipline and market trust."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dashboards cannot substitute for clear statutory tripwires."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "There are no secret tripwires. If indicators wobble, we slow down rather than surprise, and we will warn participants in plain language, not footnotes.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances without details could be cast as hedging on risk."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Firm commitment to pause builds credibility with cautious lenders."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It still lacks enforceable definitions of churn and fee abuse."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "We do not have perfect thresholds for luxury-wallet migration yet; the pilot exists to measure it. We will adjust the gauges openly as data arrives.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting gaps is honest but invites charges of unready policy."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It may spook counterparties and delay critical partnerships."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Candor about limits strengthens our case for narrow, lawful scope."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "If your wallet needs a user manual to hold a dollar, we failed. The goal is boring predictability, not extreme sports for accountants.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A bit of humor disarms critics while keeping stakes in perspective."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Jokes on usability can trivialize real operational burdens."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It risks belittling rights concerns around access and fees."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Trackable dollars sound like pocket surveillance. Who sees movement logs, how long are they kept, and what stops mission creep from wallets to lives?",
        answers: [
          {
            id: "a_ter2_1",
            text: "We will fight any attempt to turn currency into a warrantless tracker. Access must require lawful process, narrow scope, and deletion clocks that default to purge, not hoard.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Leading with surveillance fears spotlights our weakest flank."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It constrains data utility and hampers fraud detection narratives."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "It safeguards civil liberties and backs tight purpose limits."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Data is hashed, time-limited, and purpose-limited. Retail identities stay masked by default, with unmasking only via court order and auditable trails that deter fishing.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Specs heavy language can lose audiences and seem evasive."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear retention and hashing rules build durable trust in rails."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Technical mitigations do not answer mission creep authority."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "You can lease without letting your pockets gossip. You may opt out of analytics, request deletion after settlement, and see a log of every request to view your data.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comfort language helps but may read as cosmetic without teeth."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Reassurance stabilizes adoption and reduces churn anxiety."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It softens guardrails and risks precedent erosion over time."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "This is not a surveillance program; it is logistics for cash. There will be no ad profiles, social scores, or wallet shaming stitched to your balance.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A firm denial curbs panic and reasserts the program’s intent."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Over-denial risks losing credibility if auditing shows gaps."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It ignores statutory tests for collection and retention limits."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
