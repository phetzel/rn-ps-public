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
      text: "How did fog hours become auctionable tokens, and why does the scheme pit rooftop gardeners against coastal crews while low-income blocks get leftovers?",
      answers: [
        {
          id: "q_root_a1",
          text: "I deny the premise that fog can be rationed at all. Fog is a freelance mood of water, not a punch clock. If it invoices us, I'll pay in coupons, not policy, and keep neighbors breathing easy.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.MajorPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.MajorNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Defiant tone charms base; mocks premise with whimsical skepticism."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Undercuts public‑health messaging about measured breathing and calm."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dismissal muddies enforcement posture and emboldens opportunists."
              }
            }
          }
        },
        {
          id: "q_root_a2",
          text: "Our Health & Humidity Service is focused on calm breathing, not panic auctions. We're issuing clear guidance, dry towels, and bedtime fog‑lullabies so no block feels like a damp afterthought.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Soothing technocracy feels evasive and invites class‑based critique."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reassurance steadies anxious communities and frames care as priority."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft focus weakens deterrence against fog hustling and fraud."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "q_root_a3",
          text: "Homeland Haze will publish hourly fog bands, meter specs, and anti‑smuggling protocols. Panic breeds pirates; clarity scares them off. Here's how tracking works and where to report shady fog swaps.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Over‑specific mechanics sound bureaucratic and alienate low‑income."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Data‑first cadence sidelines clinics and community caretakers."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear schedules project control and spook would‑be smugglers."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "q_root_a4",
          text: "Framing gardeners versus harvesters is good theater and bad math. Credits coordinate timing, cap hoarding, and carve out free damp hours for clinics and low blocks so everyone gets a fair exhale.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.MajorNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.MajorPositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Meta spin appears cynical while problems feel tactile and urgent."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Acknowledges stigma dynamics that affect compliance and trust."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Theatrics critique dilutes a crisp security signal to bad actors."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Low-income blocks fear leftover drizzle as rooftop hobbyists hoard prime fog hours. What equity guardrails and health supports exist beyond lullabies and towels?",
        answers: [
          {
            id: "q_sec1_a1",
            text: "We've reserved a no‑bid breath tier for vulnerable blocks, with free delivery windows, mobile humid zones, and hotline nurses fluent in Fog. Nobody should be left panting in a hand‑me‑down mist.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Promises risk sounding like ration gloss over structural gaps."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Breath tier signals care for vulnerable and health equity."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Carves loopholes that clever actors may exploit."
                }
              }
            }
          },
          {
            id: "q_sec1_a2",
            text: "Credits are geofenced to priority blocks, with auto top‑ups for clinics and shelters. Auction caps limit hoarding, and a public ledger shows allocations by hour and block without shaming households.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Geo‑locks read paternalistic and may spur local backlash."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Automation without outreach can miss high‑risk residents."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Geofence and audits deter diversion and calm smuggling chatter."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "q_sec1_a3",
            text: "The first test skewed toward artsy terraces, and we own that. We're reweighting for density and asthma rates, plus a plain‑English don't‑be‑a‑fog‑hog rule that can actually be enforced.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting skew exposes management drift and invites attacks."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning error can rebuild trust if fixes are prompt and clear."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Signals uncertainty that smugglers may test at the margins."
                }
              }
            }
          },
          {
            id: "q_sec1_a4",
            text: "Let's not pretend mist math repaints class in a week. Rooftops post pictures; coastal crews post weather; and we're posting revisions before the next drizzle to keep real air in real lungs.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Class sermonizing dodges accountability for program design."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection erodes clinical trust and complicates outreach."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calling out optics may chill flashy auctions and gray markets."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "With credits tradable, what stops fog smugglers from siphoning coastal gloom to rooftop boutiques, and will Homeland ring a midnight fog curfew bell or just scan clouds?",
        answers: [
          {
            id: "q_sec2_a1",
            text: "Homeland Haze is deploying sealed meters, tamper pings, and plume beacons that flag suspicious transfers. No curfew bells—just time‑stamped scans and audits that make smuggling wildly unprofitable.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Details sound fussy and risk alienating fog‑poor blocks."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Gadget focus sidelines clinics’ immediate breathing needs."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Sealed meters and tracing project competence and deterrence."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "q_sec2_a2",
            text: "The smuggler panic reads like over‑steeped weather gossip. With live plume maps and transfer loss, stealing fog is like shoplifting steam—mostly a wet sleeve and a bad idea.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Minimizing risk looks cavalier if shortages spike by week’s end."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Reducing panic helps patients and caregivers keep calm routines."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Casual tone weakens the anti‑smuggling posture on day one."
                }
              }
            }
          },
          {
            id: "q_sec2_a3",
            text: "We are not policing skylights, deputizing gulls, or rationing breathing. There's no midnight bell, no fog SWAT, and no plan to ticket a grandma for airing out her porch.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Skepticism resonates with voters tired of over‑policing weather."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal undermines guidance on safe exposure and timing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Denial invites loopholes and signals lax enforcement to rings."
                }
              }
            }
          },
          {
            id: "q_sec2_a4",
            text: "Neighbors will see education first: how to swap legally, when discounts kick in, and who to call. The only thing we intend to confiscate is confusion, preferably with receipts.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassurances feel thin against vivid images of fog siphons."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Education first supports compliance without fear."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft rollout blurs consequences and invites testing by crews."
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
        text: "When do breath‑tier deliveries start, and how will you keep towels, humidifiers, and credits from being flipped on FogBay before sunrise?",
        answers: [
          {
            id: "q_ter1_a1",
            text: "Deliveries begin this week, 6–10 a.m. and 6–10 p.m., with ID‑light pickup and curb drop‑offs for mobility needs. Items carry QR watermarks tied to credits, and mismatches trigger a quick check.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Schedule talk reads bureaucratic while equity remains unsettled."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Logistics without bedside backup frustrate clinic triage."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Predictable windows support patrols and curb after‑hours flips."
                }
              }
            }
          },
          {
            id: "q_ter1_a2",
            text: "We've hired community fog‑guides who speak softly, carry clipboards, and bring extra towels. The weather radio adds a lullaby segment so folks know when to breathe easy and when to brew tea.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Soft imagery risks mockery as markets scalp essentials."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Culturally literate helpers boost adoption and reduce anxiety."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Gentle tone may dull the warning to resellers."
                }
              }
            }
          },
          {
            id: "q_ter1_a3",
            text: "Will a few try to resell a government towel? Probably, like any towel with a logo. We watermark the fringe and move on, because the mission is breathing, not busting linen cartels.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Jokes about towels sound out of touch with price spikes."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Normalizing minor leakage can keep lines calmer and safer."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Shrugging at resales blunts enforcement credibility."
                }
              }
            }
          },
          {
            id: "q_ter1_a4",
            text: "Week one will be bumpy, so we're adding one‑tap verification on credits and replacing any kit reported missing within 24 hours. If the system hiccups, your lungs shouldn't have to.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting bumps fuels headlines about chaos and confusion."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strain on verification could disrupt care for fragile patients."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Extra verification nudges deter scalpers during the crunch."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "If hackers spoof fog meters or jam cloud barcodes, do the credits collapse, or is there a boring backup plan that still gets people their damp?",
        answers: [
          {
            id: "q_ter2_a1",
            text: "Devices use offline tokens that reconcile nightly, so a jammer causes a delay, not a disaster. Auditors compare plume forecasts to redemption patterns and kick out anomalies for manual crediting.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jargon risks sounding brittle if outages persist in poor areas."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tech talk without bedside backup leaves clinics uneasy."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Offline reconciliation projects resilience against spoofing."
                }
              }
            }
          },
          {
            id: "q_ter2_a2",
            text: "We assume mischief and design for calm. If sensors blink, the system defaults to grace periods and free neighborhood windows so no one misses their fog because a router caught a chill.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances can read as hand‑waving after a breach rumor."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calm fallback hierarchy helps patients breathe, literally."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague calm could embolden low‑level meddling."
                }
              }
            }
          },
          {
            id: "q_ter2_a3",
            text: "A hacker toppling fog credits is the action movie; the documentary is redundancy. Three clocks, two ledgers, one human with a clipboard, and the villain gets bored before the puddles dry.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Mocking hackers invites hubris headlines if a glitch lands."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Deflating drama reduces stress spikes in vulnerable groups."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Downplaying risk undercuts deterrence and readiness drills."
                }
              }
            }
          },
          {
            id: "q_ter2_a4",
            text: "If a teenager jailbreaks a hygrometer, we'll recruit them into civic tech and give them a hoodie. Cheaper than panic, and better for the weather.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Quips about teens appear flippant amid system integrity questions."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Recruiting hackers confuses care channels and triage focus."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "White‑hat pivot may attract helpful reports despite the levity."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
