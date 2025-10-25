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
      id: "q1",
      text: "Do you recognize the island’s moonlight claim, and how will you price glow without triggering tariff chains that hit ports and security?",
      answers: [
        {
          id: "a1",
          text: "I’ll be candid: I pre-signed a timeshare for the moon’s Tuesday glow to pelicans during an overzealous coastal briefing. We’ll rotate nights so everyone gets turns and honor the island’s rituals.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Admitting the timeshare sets a cooperative tone."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State sees room to mediate culture and access."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Treasury bristles at informal glow commitments."
              }
            }
          }
        },
        {
          id: "a2",
          text: "Diplomatically, photons are stateless under the Treaty of Light, but culture is not. We’ve proposed a hush‑bright pause—no new glow claims—while envoys meet island elders and chart respectful recognition.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Legal nuance risks looking evasive to voters."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "This aligns with our photons-are-stateless stance."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Unpriced pauses unsettle markets and customs."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "a3",
          text: "Markets don’t scare us; monopolies do. We’ll price moonbeams transparently, audit every rented lumen, and slap tariffs on illegal shimmer. If you hoard the night, expect a daylight‑rated bill.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Hard pricing alienates cultural claimants."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Aggressive tariffs hinder quiet diplomacy."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Firm pricing and audits bolster credibility."
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "a4",
          text: "Ports and patrols will not chase shadows. We’re walling off core freight and security from any glow derivatives play, so cranes lift on time and coast guards sleep under honest stars.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Vague reassurances can sound like drift."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calm tone helps de-escalation without clarity."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Softness invites arbitrage and leakage."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "With photons deemed ‘stateless’ under the Treaty of Light, what does a hush‑bright pause do in practice, and how do you honor the island’s moon‑keeping without copycatsky",
        answers: [
          {
            id: "b1",
            text: "State will host quiet‑hours talks on neutral water, stand up a cultural‑light registry, and set a dusk‑to‑dawn moratorium on new claims. Recognition means ritual access, not property, with a public map.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Structured talks show active stewardship."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Neutral waters and quiet hours aid trust."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Delays could let speculation run ahead."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "b2",
            text: "Let’s not let glow‑in‑the‑dark MBAs redline constellations before diplomats get coffee. We’re not litigating lunar folklore at a podium built by the lighting department.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Mocking MBAs may play as unserious."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tone risks fraying delicate cultural ties."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calling out hype can slow a bubble."
                }
              }
            }
          },
          {
            id: "b3",
            text: "We’ll hard‑cap pilot arrangements, require community sign‑off, and sunset any exceptions before egos inflate. The pause is a brake pedal, not a green light to annex twilight.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Measured guardrails show prudence."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Community compacts respect local rites."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Caps constrain price discovery and flow."
                }
              }
            }
          },
          {
            id: "b4",
            text: "If someone wants sky deeds, bring receipts older than the tides. Claims must be documented, verifiable, and not stapled to an invoice from a tourist rocket.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Tough talk risks legal backlash."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Proof demands can chill heritage claims."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity deters fraud in sky-claims."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "Finance memos warn moonlight futures could spark tariff chain reactions. How will you keep ports solvent and security steady while quants securitize the night?",
        answers: [
          {
            id: "c1",
            text: "Treasury’s posture is simple: if you trade in moonbeams, you file, margin, and pay. We’ll stress‑test glow books, tax speculative shimmer, and block any scheme that tries to repo a coastline at midnight.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Crackdowns read as heavy-handed on culture."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Blunt tools complicate multilateral talks."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm enforcement steadies trade behavior."
                }
              }
            }
          },
          {
            id: "c2",
            text: "Before we let glow traders name a yacht ‘Basis Risk,’ we’re double‑checking whether anyone can even hold a photon without a jar. Let’s keep the hype behind the clouds for a minute.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Jokes about quants risk seeming aloof."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor lubricates tense exchanges a little."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Signals uncertainty to market participants."
                }
              }
            }
          },
          {
            id: "c3",
            text: "Authorized from Treasury: we will list standardized nightlight contracts only after liquidity and port impact tests, and we will sanction unlicensed glow brokers. Detailed guardrails will post with the term sheet.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Action plan projects competence and calm."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Standards help cross-border coordination."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Over-commitment may box in flexibility."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury,
            followUpId: "q5"
          },
          {
            id: "c4",
            text: "We’re coordinating with port authorities and patrols to pre‑clear nighttime lanes and ring‑fence critical cargo from any glow tolls. If financing is needed, we’ll deploy tide‑stable credit lines.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Operational focus reassures daily life."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Coordination aids deconfliction at sea."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Costs without pricing power strain funds."
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
        text: "On cultural respect, what would recognition for the island include—ritual access, dusk windows, or shared calendars—and how do you avoid a wave of poetic sovereignty?",
        answers: [
          {
            id: "d1",
            text: "Recognition means scheduled observances, co‑authored calendars, and guaranteed ritual vistas—no property titles, no exclusive orbits. We’ll codify it as access, audited by a neutral stargazer panel.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Cultural detail makes empathy tangible."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Calendars and rites enable respectful ties."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Nonmarket pledges can obscure liabilities."
                }
              }
            }
          },
          {
            id: "d2",
            text: "We’re here to safeguard meaning, not monetize it. The island keeps its ceremonies; the rest of us keep bedtime. That balance is boring by design, which is exactly the point.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Elevating meaning risks fuzzy policy."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Respectful tone keeps channels open."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Avoiding monetization dulls investment signals."
                }
              }
            }
          },
          {
            id: "d3",
            text: "If a claim drifts from culture to commerce, we flip the switch from poetry to paperwork. Try to meter the Milky Way, and you’ll meet regulators with clipboards and very bright flashlights.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard pivot to trade looks unsentimental."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Legalism narrows room to compromise."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Trade framing strengthens enforcement levers."
                }
              }
            }
          },
          {
            id: "d4",
            text: "No one owns the moonlight; at best, we coordinate its enjoyment. We won’t mint sky property rights because someone brought a notarized glow stick.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial can appear dismissive of culture."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Statement simplifies law but stirs emotion."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Bright lines reduce gaming but invite tests."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "If nightlight markets launch, what guardrails stop moonbeam margin calls from clobbering port cash and patrol staffing, and who pays when clouds roll in?",
        answers: [
          {
            id: "e1",
            text: "Contracts will carry cloud clauses, mandatory reserves, and port‑first carve‑outs. Clearinghouses must pre‑fund weather risk, and a public backstop kicks in only for critical freight lanes—not for yacht lanterns.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Concrete guardrails show responsible prep."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear clauses reduce cross-border friction."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reserves cost money and squeeze margins."
                }
              }
            }
          },
          {
            id: "e2",
            text: "Try to launder shimmer through a shell, and we’ll seize the bulb. We’ll bar cross‑defaults into port fees, keep patrol budgets off‑limits, and fine anyone who sneaks night taxes into dock invoices.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Threats can sound combative to allies."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hostility complicates regional diplomacy."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Deterrence curbs illicit flows effectively."
                }
              }
            }
          },
          {
            id: "e3",
            text: "We’ve modeled worst‑case drizzles. Essential services get priority light by policy, not by price, and crews won’t miss paychecks because a hedge fund mispriced fog.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Protecting services signals steady hands."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Coordination keeps port rhythms predictable."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Budget backstops strain the bottom line."
                }
              }
            }
          },
          {
            id: "e4",
            text: "If your business plan collapses when a cloud blinks, it belongs in a planetarium gift shop, not a port ledger. We’ll keep the spectacle out of payroll.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Tough love may read as shrugging off risk."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal risks alienating small partners."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Simplistic framing weakens market guidance."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
