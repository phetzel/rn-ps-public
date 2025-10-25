import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const libPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.LibPrimary,
  content: {
    rootQuestion: {
      id: "q_root",
      text: "With socks replacing dollars, aren’t we turbocharging wealth for dryer-owners, sidelining workers, and laundering accountability while unions march in mismatched pairs?",
      answers: [
        {
          id: "a_root_1",
          text: "Currency should keep pace with reality; we're lacing it up. If inflation wants a race, we'll sprint in tube socks and make it eat sandals. The goal is faster value, not blistered paychecks.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "I support a bold sock sprint to outpace inflation."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Undercuts our sequencing for grade control."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Crowd dynamics get trickier with sudden shifts."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "The Treasury's Sock Standard uses grade codes, toe-serials, and anti-lint watermarks to stabilize issuance and deter fakes. Distribution is calibrated so high-end dryers don't tilt the field or the paycheck.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Too technocratic; people hear jargon, not relief."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clarifies anti-lint features and deters fakes."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Tone misses civil-liberties guardrails we need."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "Security will be boring on purpose. We'll screen for sock-laundering rings and static-fueled scuffles with light-touch tools, protect lawful pickets, and keep enforcement closer to lost-and-found than raid van.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Sounds cautious; risks looking flat during unrest."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances omit audit trails we must protect."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calm framing helps keep protests peaceful."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "We didn't thread every needle on day one. Supply chains tangled, unions made valid noise, and we own that. We're fixing allotments, staffing laundromat liaisons, and publishing who signed off on each stitch.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Admitting missteps invites headlines over results."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning flaws can buy us room to adjust policy."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Contrition is fine; keep safety plans concrete."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Does the Sock Standard shower windfalls on turbo-dryer homes and smart closets, while renters and laundromats get static, shrinkage, and late fees dressed as policy?",
        answers: [
          {
            id: "a_sec1_1",
            text: "We're not handing Big Dryer the keys. If appliance giants throttle capacity or game exchange rates, we'll challenge them in court and at the docks. Price-fixing gets the lint trap pulled in public view.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "I’ll take on Big Dryer and protect workers now."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive stance may spook sock liquidity."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sharper rhetoric can swell march turnout."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "The schedule assigns sock grades across regions, independent of household hardware. A warmth-neutral factor adjusts value where line-drying prevails, and laundromats get bulk credits to keep cycles affordable.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reads like a manual, not a cost-of-living fix."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Regional grading reduces hoarder hotspots."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Implementation details sidestep protest rights."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Nobody is being told to buy a luxury tumbler. We're funding public drying hubs, waiving meter surcharges during storms, and guaranteeing swap counters in union halls so paydays don't depend on an outlet.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance alone won’t cut surge pricing."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Subsidy signals could distort sock markets."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear opt-ins ease tensions at laundromats."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "Let's not pretend landlords invented inequality yesterday. Our job is to keep pay usable while legislators hash housing and utility reform. We'll show our math; they can argue who dodged the laundry duty.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Deflecting blame alienates renters and unions."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Shifts scrutiny off levers we actually hold."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Lower heat could reduce confrontations."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Unions walked out in mismatched protest; how will Homeland avoid chilling speech while hunting sock-launderers, and what exactly is a gentle foot-scanner?",
        answers: [
          {
            id: "a_sec2_1",
            text: "The scanner is a short-range static and fiber reader that never captures biometrics. No names, no prints, no gait. It pings counterfeit blends, logs yes or no, and wipes the cache in minutes under civic oversight.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Tech specs without ethics won’t calm the streets."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Specifics show coordination with Treasury."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "We must lead with limits, not just hardware."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "March, chant, wave novelty hosiery. We'll post clear protest lanes, use de-escalation, and publish incident tapes within 24 hours. Anyone hassled for union speech gets a phone number that actually answers.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Uphold speech; keep order with light touch."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Civil pledges may slow enforcement tempo."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparent rules build trust on the ground."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "There is no blacklist for polka-dots, stripes, or union logos, and no plan to geofence rallies with invisible rope. If an agent invents one, they'll be reassigned to actual lost socks duty, not free citizens.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flat denials can sound like evasion."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Overbroad denial risks oversight pushback."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Drawing clear lines reassures peaceful crowds."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Labor's bargaining is with Treasury and employers, not checkpoints. We're the traffic cones, not the contract. We'll keep trucks moving and tempers cool while the grown-ups argue rates and tongues.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "This frames labor as nuisance, not partners."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Re-centers talks on economics and roles."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tone risks fueling chants and friction."
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
        text: "Isn’t the play that Big Dryer and cargo cartels set sock-to-loaf rates by throttling lint and delivery slots, leaving workers paying surge prices for warm toes?",
        answers: [
          {
            id: "a_ter1_1",
            text: "We've issued anti-gouging rules tying sock prices to energy indices and cotton supply, not dock theatrics. Freight priority favors wages, then medicine and food. Dynamic caps trigger when queues look suspicious.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Rules alone won’t convince families at checkout."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Anti-gouging guardrails steady expectations."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Enforcement waves can intersect with rallies."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "If a dryer cartel wants to play chicken with paychecks, they can meet us at the antitrust starting line. We brought cleats. We'll pry open APIs, subpoena group chats, and let the public watch the stopwatch.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "I’ll confront cartels to protect warm toes."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontation ups volatility in sock auctions."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Firm stance needs clear protest protocols."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "Workers won't be left rationing toes. Payroll windows are buffered with reserve pairs, and union halls can draw from a federal sock pantry during snarls. Nobody misses rent because a barge was moody.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comfort messaging can sound tone-deaf."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Payroll credits strain seigniorage margins."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Plan reduces panic near distribution hubs."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "We underestimated how fast middlemen would bundle and resell delivery slots. That's on us. We're canceling those contracts, blacklisting shell bidders, and opening a hotline for extortion screenshots.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Owning underestimates risks political costs."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting misreads pressures our models."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Honesty helps de-escalate heated lines."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Spell out limits on foot-scanners: who stores scans, for how long, and can a protester refuse without earning a file that follows their socks home?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Data lives in a rolling, device-local buffer under encryption and auto-wipes in ten minutes. There's no identity field to store. Oversight boards get aggregates, not individuals, and audits are public.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "People want rights first, circuitry second."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Local buffers limit systemic exposure."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Specs need civil-liberty triggers and logs."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Refusal at a lawful protest zone routes you to a manual visual check with a union observer present. No citations, no shadow dossiers, and you still get to chant off-key. That's the policy, in writing.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Rights-respecting paths keep protests lawful."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Escalation steps may delay interdictions."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Proportionality keeps our teams disciplined."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "We don't tag ankles, seed facial trackers, or sell fiber telemetry to ad vendors. If anyone suggests it, we toss it with the mystery socks. This isn't Minority Sock Report, and it won't become one.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Promises must be verifiable, not vibes."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Strong denial invites audits of our chain."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear bans soothe fears of dragnet scans."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "Honestly, if we needed a database, we'd start with whoever keeps taking one sock from every pair. Jokes aside, policy bans retention. If we break that, you'll see us here explaining why, in pen and under oath.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Snark about databases undermines trust."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor deflects heat but clarifies intent."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tone risks trivializing safety concerns."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
