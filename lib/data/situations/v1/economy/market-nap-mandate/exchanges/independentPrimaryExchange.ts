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
      id: "rootq",
      text: "Will daily 'market naps' calm whiplash without kneecapping liquidity, or just puff pillow-stock bubbles while pensions face pricier trades?",
      answers: [
        {
          id: "roota1",
          text: "I challenge Index Alley to out-nap me: growth happens in REM. If a stock trembles at a pillow, it never deserved a blanket, let alone a blanket rally.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Public challenge projects confidence and aligns with the growth-through-REM narrative."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Showboating risks eclipsing the measured design and invites avoidable volatility fears."
              }
            }
          }
        },
        {
          id: "roota2",
          text: "Treasury's pilot shows a 22% drop in micro-spikes and tighter post-nap spreads. Structured pauses curb stampedes; pajamas on prices mean fewer midnight sprints and calmer opens.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Leaning on technocracy could make you look detached from trader and pension concerns."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear stats bolster credibility and the inform-first posture we prefer."
              }
            }
          },
          followUpId: "secq1"
        },
        {
          id: "roota3",
          text: "Pensions won't wake up mugged. We'll phase timing, carve out critical flows, and keep market makers caffeinated with standing facilities so liquidity cat-naps, not hibernates.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Over-reassurance may sound dismissive of legitimate liquidity pain points."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Phased timing with guardrails supports a stable rollout and reduces resistance."
              }
            }
          },
          followUpId: "secq2"
        },
        {
          id: "roota4",
          text: "Traders already set three alarms-one for hype, one for lunch, one for regret. A power nap beats a power outage, and it won't dent liquidity more than a meme brunch.",
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
              reaction: "Wit lightens the moment but risks trivializing policy stakes if overused."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection undermines the program's seriousness and weakens stakeholder trust."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "secq1",
        text: "What hard metrics and guardrails prove naps tame volatility without draining order books, and how will you keep market-makers from dozing spreads wider?",
        answers: [
          {
            id: "sec1a1",
            text: "We'll publish depth-at-touch, re-open dispersion, and cancel-to-trade ratios by venue. Makers get protected quotes and nap-proof fee caps so spreads don't yawn wider.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Specific metrics signal ownership and deter claims of hand-waving."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overpromising precision could backfire if early readings are noisy."
                }
              }
            }
          },
          {
            id: "sec1a2",
            text: "A standing re-liq window snaps on before and after the nap, with market-wide circuit alarms. If depth thins, we shorten the siesta, not the paycheck.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances without new facts may read as spin under market stress."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Re-liquidity windows can cushion spreads and show operational foresight."
                }
              }
            },
            followUpId: "terq1"
          },
          {
            id: "sec1a3",
            text: "No, we're not draining order books; we're wringing out panic sweats. If a spread widens, it's because someone mistook a nap for a coma, and that's not policy.",
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
                reaction: "Flat denial risks tone-deafness if spreads do widen around naps."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Framing as quality control can win support if coupled with data disclosures."
                }
              }
            }
          },
          {
            id: "sec1a4",
            text: "If market-makers want to nap on the job, we'll ring a cowbell. Kidding-mostly. The point is to time the pause when churn is noise, not nutrition.",
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
                reaction: "A tough line pleases some, but invites accusations of bullying market-makers."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Threatening tone may erode cooperation needed for orderly reopenings."
                }
              }
            }
          }
        ]
      },
      {
        id: "secq2",
        text: "If pillow-stock mania pops, who eats the feathers-pensions, retail, or taxpayers-and how will you police nap-time pump-and-dump choreography?",
        answers: [
          {
            id: "sec2a1",
            text: "We'll tag nap-adjacent flow with audit stamps and publish heatmaps by sector. Pension flows get queue priority so a hype pillow doesn't smother boring savings.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Technical policing talk may feel remote from retail and pension worries."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Tagged flow and audit trails strengthen deterrence and enforcement."
                }
              }
            },
            followUpId: "terq2"
          },
          {
            id: "sec2a2",
            text: "If your strategy only wins when the lights never blink, maybe it's the strategy that needs a nap. We'll take on any bot that thinks REM stands for Rinse Exploit Manipulate.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Calling out bad actors signals resolve and aligns with public frustration."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive posture risks provoking headline fights that distract from execution."
                }
              }
            }
          },
          {
            id: "sec2a3",
            text: "Yes, we expect some froth in pillow-adjacent tickers. That's why we're pre-bubbling margin rules and banning stuffed-cushion SPACs before they shed.",
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
                reaction: "Admitting froth is honest, but opponents will paint it as policy-induced bubble."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Acknowledging risks builds credibility if paired with clear mitigation steps."
                }
              }
            }
          },
          {
            id: "sec2a4",
            text: "Pensions won't be the crash test dummy. We're steering them down the middle lane with hedges, circuit-aware benchmarks, and an escape ramp if foam turns to feathers.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Protecting pensions theme lands well with swing audiences."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Overcommitment could constrain needed flexibility during a cleanup."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "terq1",
        text: "What happens if a genuine shock hits mid-nap-does the pause become a trap, and do you have an override alarm that won't stampede the herd?",
        answers: [
          {
            id: "ter1a1",
            text: "An emergency wake protocol can reopen a segmented book in under 90 seconds. Pre-cleared market-wide messages cue staggered auctions to avoid everyone sprinting at once.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Detail on emergency protocols projects command of contingencies."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too much specificity could telegraph exploitable playbooks to fast money."
                }
              }
            }
          },
          {
            id: "ter1a2",
            text: "No, the nap isn't a trap; it's a seatbelt. You unbuckle in a fire, and we've built the buckles to click fast without dumping everyone onto the highway.",
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
                reaction: "Denying trap risks iffy credibility amid a real pause-induced gap."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Seatbelt analogy can calm nerves while keeping expectations realistic."
                }
              }
            }
          },
          {
            id: "ter1a3",
            text: "We've rehearsed multi-venue drills with fake meteors. Operators know the drill, and the first order back in is a calm one by design, not a panicked elbow.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances will ring hollow without third-party validation of drills."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Drill evidence supports competence and coordination across venues."
                }
              }
            }
          },
          {
            id: "ter1a4",
            text: "If the herd stampedes, it's because someone yelled 'insomnia.' Our job is to remove the megaphone and keep the barn door boring.",
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
                reaction: "Humor defuses tension but risks blame-shifting under stress."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Blaming noise undermines accountability and could unsettle market operators."
                }
              }
            }
          }
        ]
      },
      {
        id: "terq2",
        text: "Are you tracking who profits from nap-adjacent spikes, and will enforcement wake fast enough to keep clever bots from napping the refs?",
        answers: [
          {
            id: "ter2a1",
            text: "Yes-time-bucketed P&L analytics flag actors who magically win the 30 seconds pre- and post-nap. Those feeds go straight to enforcement with anomaly thresholds.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Proactive analytics frame you as ahead of the curve on manipulation."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Promising perfect detection invites scrutiny when misses occur."
                }
              }
            }
          },
          {
            id: "ter2a2",
            text: "To any bot scripting lullabies for bagholders: try us. We can sing in code too, and the chorus is subpoenas with a catchy refrain.",
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
                reaction: "Taunting bots can backfire if exploits surface after bravado."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Public deterrence complements back-end monitoring and quick action."
                }
              }
            }
          },
          {
            id: "ter2a3",
            text: "Enforcement clocks are synced to nap bells, with surge staffing and auto-freezes on repeat offenders. You don't need coffee if the alarm is a rule.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Clock-sync talk may sound procedural rather than protective to the public."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Coordination with exchanges demonstrates readiness and capacity."
                }
              }
            }
          },
          {
            id: "ter2a4",
            text: "We won't catch every stunt on day one. But we'll iterate fast, shrink the loopholes, and keep the pillows fluffy for investors who aren't gaming the sheets.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Candor earns credit, but opponents may brand it as complacency."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Signaling imperfection could embolden tests of the system early on."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
