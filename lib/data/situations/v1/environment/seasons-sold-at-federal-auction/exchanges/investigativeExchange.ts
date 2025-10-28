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
      text: "Season licenses go live as swaps spike, shell lotteries sprout, and a memo tags seasons as collateral. Who profits, and who audits the ledger?",
      answers: [
        {
          id: "a_root_1",
          text: "We aren’t selling spring; we’re repossessing calendar chaos for the public. If winter objects, we’ll deputize the groundhog as counsel and appeal to common sense and sunshine.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            autumn_spice: OutcomeModifierWeight.StrongPositive,
            groundhog_marshals: OutcomeModifierWeight.SlightPositive,
            august_46: OutcomeModifierWeight.StrongNegative,
            noa_spring: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Bold challenge projects resolve and frames control as public‑minded."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Treasury flags froth risk and the need for disciplined settlement."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Homeland anticipates confusion if swaps trigger rapid shifts."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice expects creative claims over seasonal entitlements."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Auctions clear on a posted schedule with caps, margin rules, and a public tape. We bar self-dealing shells, publish beneficial owners, and audit swaps so no one corners a sunrise.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            autumn_spice: OutcomeModifierWeight.StrongNegative,
            groundhog_marshals: OutcomeModifierWeight.SlightNegative,
            august_46: OutcomeModifierWeight.StrongPositive,
            noa_spring: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Process‑heavy tone feels cautious and may read as hedging."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear rules steady markets and dampen leak‑driven speculation."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Homeland remains neutral on schedule mechanics at this stage."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Justice withholds judgment while statutory tests proceed."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "Emergency swaps are drill-tested to 15 minutes with layered alerts and regional coordinators. Keep snacks handy; our sirens speak fluent pollen, and we prioritize vulnerable areas.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            autumn_spice: OutcomeModifierWeight.SlightPositive,
            groundhog_marshals: OutcomeModifierWeight.StrongNegative,
            august_46: OutcomeModifierWeight.SlightNegative,
            noa_spring: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Over‑reassurance risks underplaying operational complexity."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rapid toggles could unsettle pricing and collateral haircuts."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Demonstrated readiness boosts confidence in swap execution."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Promises create exposure if actual capabilities fall short."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "Claiming title to a solstice is legally eccentric, even for us. Courts may juggle pieces; we’ll duct-tape precedents carefully and issue guidance to protect ordinary license holders.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            autumn_spice: OutcomeModifierWeight.SlightNegative,
            groundhog_marshals: OutcomeModifierWeight.StrongPositive,
            august_46: OutcomeModifierWeight.SlightPositive,
            noa_spring: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Admitting legal oddities can read as uncertainty at the top."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal ambiguity complicates pricing and lender protections."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Mixed signals could hinder coordinated emergency response."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Candid legal framing builds credibility for court defenses."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Who is cornering spring via swaps and shell lotteries, and why do prices leak from backroom ledgers before the public sees them?",
        answers: [
          {
            id: "a_sec1_1",
            text: "As authorized, Treasury will publish a consolidated order book and beneficial-owner map next week. We'll also log pre-quote pings, so any leak trail leads to a door with a nameplate.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.ModeratePositive,
              groundhog_marshals: OutcomeModifierWeight.StrongNegative,
              august_46: OutcomeModifierWeight.ModeratePositive,
              noa_spring: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Defers to process, risking a perception of distance from action."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Publishing consolidated ledgers reduces rumor premia."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Exposes patterns that could invite targeted disruptions."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Transparency may surface conduct that triggers litigation."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury,
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "We have no evidence of systematic leaks or a single actor cornering spring. The lottery audits shells, and violators face frozen bids, fines, and a season in administrative timeout.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.ModerateNegative,
              groundhog_marshals: OutcomeModifierWeight.StrongPositive,
              august_46: OutcomeModifierWeight.ModerateNegative,
              noa_spring: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blanket denial risks backlash if leaks later corroborate."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissing anomalies can fuel sharper speculative spikes."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm tone helps deter opportunistic signal spoofing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overconfidence weakens posture if subpoenas uncover trails."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Pricing now stamps time, venue, and counterparties, with randomization to foil frontruns. A public blotter will display spreads so backyard gardeners beat boardroom whisperers.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.StrongNegative,
              groundhog_marshals: OutcomeModifierWeight.SlightPositive,
              august_46: OutcomeModifierWeight.StrongPositive,
              noa_spring: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical detail is solid but lacks moral clarity for the public."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Stamped pricing and counterparties strengthen market integrity."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Neutral for field ops; procedures already align with this."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "More data can expand discovery scope and liability maps."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "If someone claims to own April by rumor alone, bring the contracts. We’ll compare your whispers to our ledger, and the math will heckle the myth.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.StrongPositive,
              groundhog_marshals: OutcomeModifierWeight.SlightNegative,
              august_46: OutcomeModifierWeight.StrongNegative,
              noa_spring: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Confrontational stance rallies support against manipulators."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Aggressive rhetoric may spook liquidity and widen spreads."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Escalation risks retaliation by well‑resourced actors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Threats must be backed by admissible evidence and prudence."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Can you actually flip blizzard to light drizzle in 15 minutes, who decides the swap, and what happens to communities caught mid-season?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Yes. The National Swap Playbook routes decisions through regional ops hubs, with redundant weather lanes. Sirens, texts, and radio cues deploy in tiers so no town gets stranded mid-swap.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.StrongNegative,
              groundhog_marshals: OutcomeModifierWeight.ModeratePositive,
              august_46: OutcomeModifierWeight.StrongPositive,
              noa_spring: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Confidence helps, but promises may outpace real capacities."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fifteen‑minute toggles complicate settlement and margining."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Playbook and routing clarity enhance response discipline."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Operational claims could be tested in court after disruptions."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "Emergency swaps intersect contracts, school days, and labor rules. Expect some test cases; we’ll seek temporary orders that keep people safe while courts untangle the fine print.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.StrongPositive,
              groundhog_marshals: OutcomeModifierWeight.ModerateNegative,
              august_46: OutcomeModifierWeight.StrongNegative,
              noa_spring: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting friction shows honesty but invites criticism."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Contract conflicts imply costly unwinds and renegotiations."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Community impacts mean rerouting and surge staffing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Candid constraints strengthen defenses and injunction strategy."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "We’ve mapped priority corridors, synced utilities to seasonal shifts, and pre-cleared airport slots. A live dashboard shows swap windows, blackout periods, and community opt-ins.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.SlightPositive,
              groundhog_marshals: OutcomeModifierWeight.StrongNegative,
              august_46: OutcomeModifierWeight.SlightNegative,
              noa_spring: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Implementation detail lands, yet empathy remains thin."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Aligned utilities and corridors stabilize pricing signals."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Coordination helps, though field gains are incremental."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Expanded mappings raise discovery scope in litigation."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Let’s not pre-mourn imaginary traffic jams. We’ll judge the playbook by performance data, not storm gossip, and we’ll adjust after the first test cycle.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.SlightNegative,
              groundhog_marshals: OutcomeModifierWeight.StrongPositive,
              august_46: OutcomeModifierWeight.SlightPositive,
              noa_spring: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissive tone risks appearing cavalier about disruptions."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Guarded optimism tempers panic and cushions volatility."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Underplays risks; responders may face trust gaps on scene."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing impacts weakens standing if harms are documented."
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
        text: "About the memo labeling seasons as collateral: who drafted it, what statute blessed it, and do banks now repo sunsets when loans go bad?",
        answers: [
          {
            id: "a_ter1_1",
            text: "The memo is a draft framework exploring collateral definitions, not a velvet rope for sunsets. We’ll solicit comments and expect courts to trim any overreach before it matters.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.StrongPositive,
              groundhog_marshals: OutcomeModifierWeight.SlightNegative,
              august_46: OutcomeModifierWeight.StrongNegative,
              noa_spring: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting draft status can read as uncertainty on direction."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Draft collateral rules unsettle lenders and valuations."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity complicates incident planning and public messaging."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparency on drafts supports defensible administrative record."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "It cites the Elastic Commodities Act and climate-derivatives rules, proposing carve-outs for cultural observances. Collateral would be lien-limited, not a license to foreclose daylight.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.StrongNegative,
              groundhog_marshals: OutcomeModifierWeight.SlightPositive,
              august_46: OutcomeModifierWeight.StrongPositive,
              noa_spring: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Citing statutes helps but risks sounding overly legalistic."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Statutory grounding clarifies treatment for counterparties."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Legal citations minimally affect operational posture now."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Naming authorities invites narrow challenges on scope."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "No bank can roll a tow truck up to dusk. Consumer seasons remain inalienable; the memo doesn't authorize repossession of weather, picnics, or cousins' birthdays.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.ModeratePositive,
              groundhog_marshals: OutcomeModifierWeight.StrongNegative,
              august_46: OutcomeModifierWeight.ModeratePositive,
              noa_spring: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial may backfire if edge cases later emerge."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overassurance can misprice risk and collateral practices."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear consumer guardrails aid public cooperation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Absolute claims can be problematic under discovery."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Let's separate paperwork poetry from policy. Drafts get dramatic titles so lawyers stay awake; operational authority still rests on statutes, not stationery bravado.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.ModerateNegative,
              groundhog_marshals: OutcomeModifierWeight.StrongPositive,
              august_46: OutcomeModifierWeight.ModerateNegative,
              noa_spring: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Challenge reframes debate and shows proactive leadership."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissal of drafts could unsettle financing expectations."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sharp tone risks muddling preparedness communications."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Courts prefer precision; rhetoric alone can undermine cases."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "How will alerts actually reach people, what if sirens misfire, and can residents appeal a swap that turns their harvest into a fog bank?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Alerts go over sirens, cell broadcast, and library tickers, with multilingual drills. If a cue misfires, fallbacks trigger, and appeal channels reopen the window within minutes.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.ModerateNegative,
              groundhog_marshals: OutcomeModifierWeight.StrongPositive,
              august_46: OutcomeModifierWeight.ModeratePositive,
              noa_spring: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance helps, yet accountability for failures is unclear."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Alert infrastructure costs may pressure program budgets."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Multi‑channel alerts and drills improve public readiness."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Expanded alerts add due‑process hooks if misfires occur."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Residents get a simple app and hotline, plus paper notices for low-connectivity areas. Appeals can pause execution blocks, and farms get longer buffers than city parks.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.ModeratePositive,
              groundhog_marshals: OutcomeModifierWeight.StrongNegative,
              august_46: OutcomeModifierWeight.ModerateNegative,
              noa_spring: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Practical tools are solid but may seem bureaucratic."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear appeal paths and tooling reduce panic and price spikes."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Neutral operationally; channels already in deployment."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Appeals system invites litigation over swap criteria."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "We’re not flipping anyone’s harvest into fog for sport. Agriculture windows are protected; swaps must clear agronomic guardrails before a single cloud is nudged.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.StrongPositive,
              groundhog_marshals: OutcomeModifierWeight.SlightNegative,
              august_46: OutcomeModifierWeight.StrongNegative,
              noa_spring: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denying foreseeable harms can appear dismissive or naive."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid stance may distort hedging and emergency pricing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Downplaying risks harms trust during fast‑moving events."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Narrow denials can limit standing in some legal challenges."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "Let’s finish building the runway before grading the landing. We’ll release failure drills and audit logs with the first swap, then you can roast us on specifics.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.StrongNegative,
              groundhog_marshals: OutcomeModifierWeight.SlightPositive,
              august_46: OutcomeModifierWeight.StrongPositive,
              noa_spring: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Deflection energizes base but may lack actionable clarity."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Vagueness unsettles markets and complicates risk pricing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mixed signals slow coordination with local responders."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Casual tone undercuts credibility before skeptical courts."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
