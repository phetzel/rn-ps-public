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
      text: "Did your team let StellarSpritz meter moonlight, and how will you honor Glowstrand Isle’s ancestral lunar claim without blacking out diplomacy?",
      answers: [
        {
          id: "a_root_1",
          text: "I’ll be candid: I okayed a pilot that effectively timeshared Tuesday moonlight to pelicans and poetry clubs. We’re switching to a fair rotation so every coast and culture gets turns.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Owning the misstep signals accountability and resets tone."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Unilateral pilots strain diplomatic credibility with allies."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Market clarity hints at order but invites scrutiny and costs."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Photons are stateless under the Treaty of Light, but culture isn’t. We’ve ordered a hush-bright pause on metering and opened talks with Glowstrand’s stewards to define respectful access.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Legalese from the podium reads evasive and weak to voters."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear treaty framing empowers mediation and cultural respect."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Downplaying valuation blurs signals for investors and ports."
              }
            }
          },
          followUpId: "q_sec_1"
        },
        {
          id: "a_root_3",
          text: "We’ll treat rogue moon-meting like cartelized shimmer: audit beams, claw back ill-gotten glows, and levy glare tariffs if needed. Nightlight markets will serve people, not monopolies.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Aggressive posture risks overreach and fuels corporate pushback."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hardline economics complicate delicate island consultations."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Firm enforcement aligns with audit plans and tariff leverage."
              }
            }
          },
          followUpId: "q_sec_2"
        },
        {
          id: "a_root_4",
          text: "No one is getting an invoice for moonbeams tonight. Glowstrand’s rites and everyone’s evenings proceed while we set the sky to courtesy mode and sort out the paperwork.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Reassurance without details feels soft amid a novel dispute."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calm tone keeps channels open for shuttle diplomacy."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Suspending price talk delays needed fiscal guardrails."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_1",
        text: "You cite the Treaty of Light; what does that actually do for Glowstrand’s claim, and will you pause StellarSpritz’s meter while talks happen on-island?",
        answers: [
          {
            id: "a_sec1_1",
            text: "The treaty affirms open sky and forbids privatizing natural luminance. We’ve set a diplomatic dimmer, halting commercial metering while we negotiate a cultural custodianship framework.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process-heavy answer reads as distant from island concerns."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Invoking norms bolsters our authority to convene talks."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Regulatory caution slows financial preparedness."
                }
              }
            },
            followUpId: "q_ter_1"
          },
          {
            id: "a_sec1_2",
            text: "Yes, the meter is paused, the cosmos isn’t on a paywall, and Glowstrand’s moon-keeping gets breathing room. We’re moving with care, not candles-in-a-storm panic.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Direct pause communicates control and empathy under pressure."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "A neutral stance lets envoys move without public precommitments."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Halting signals can unsettle firms planning compliance."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "I won’t litigate photons from this podium. The lawyers brought a whiteboard and three lasers; we’ll let them earn their stargazer salaries and report back soon.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dodging specifics diminishes trust in crisis management."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Non-answers frustrate partners seeking legal clarity."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Flexibility preserves room to price abuses if needed."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "If StellarSpritz tests the pause, we’ll treat it as interference with navigation of light. Consider their meter unplugged until they come to the table.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Threats escalate optics and risk backlash from neutrals."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Punitive framing narrows space for consensual mediation."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear penalties deter predatory metering during talks."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_2",
        text: "If Treasury audits moonbeams and opens nightlight futures, do households and small harbors end up paying for a glow scheme they never voted on?",
        answers: [
          {
            id: "a_sec2_1",
            text: "We’ll swat speculation that tries to jack up the price of night. If a trader corners Tuesday’s glow, they’ll meet margin walls, enforcement, and a tariff that makes darkness look cheap.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Tough rhetoric on speculation can spook households and docks."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Finance-first framing sidelines cultural custodianship."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Guardrails on manipulation support credible market design."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "Everyday stargazing stays free. Any market tool is a seatbelt for bad actors, not a tollbooth for families or dockhands counting on honest tides and honest light.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances may age poorly if prices jitter on rollout."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Reassurance stabilizes regional partners watching the roll."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Understating costs weakens leverage over price-setters."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "Look, models can hiccup on day one. If any bill or buoy blips, we’ll credit it back by sunrise and publish the oops so everyone can laugh at our spreadsheets and hold us to better.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Owning risk builds goodwill if hiccups briefly hit bills."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Neutral posture avoids entangling finance with diplomacy."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting stumbles could invite opportunistic arbitrage."
                }
              }
            },
            followUpId: "q_ter_2"
          },
          {
            id: "a_sec2_4",
            text: "Let’s not pre-inflate panic. We’ll explain mechanics after we’ve duct-taped the acronyms to reality, not before.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection reads as spin while families seek straight answers."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vagueness complicates coordination with coastal authorities."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Time to explain reduces rumor-driven volatility."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_1",
        text: "If Glowstrand escalates to the Cosmic Court of Arbitration, will you risk a dim-out to enforce the pause, or blink and let the meter run?",
        answers: [
          {
            id: "a_ter1_1",
            text: "We’ll respect the court’s remit while keeping safe illumination. Enforcement tools include spectrum tagging and fines, not flipping the switch on the ocean.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Procedural emphasis feels remote in a court-bound standoff."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Respecting remit strengthens our mediator credentials."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Caution may delay enforcement against rogue billing."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We’re not choosing between dark seas and corporate floodlights. That dilemma is a false eclipse, and we’re not buying the glasses.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "False choice framing risks credibility if facts change."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid binaries undercut coalition-building with allies."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm stance signals readiness to discipline profiteers."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "Navigation, ceremonies, and sleep are safe. The only thing we’re dimming is the ego of anyone who thought you could privatize a reflection.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Assurance on essentials calms coastal and maritime voters."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Silence on tactics preserves shuttle options with the court."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Guarantees can constrain fiscal countermeasures later."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Any outfit trying to out-lawyer an island’s living heritage will find our brief as sharp as a crescent and twice as relentless.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Confrontation message risks legal overreach and PR blowback."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive tone narrows off-ramps in delicate proceedings."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Strong deterrent posture backs tariff and audit threats."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_2",
        text: "What’s the immediate impact on people’s bills and tideside markets if moonlight tariffs or futures twitch the price of a plain old night?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Utilities don’t bill for lunar reflection, and they won’t start. We’re ring-fencing any instruments to commercial offenders, with dashboards so households see zero line items.",
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
                reaction: "Technical comfort may sound dismissive of people’s bills."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clarifying basics prevents panic in trade-exposed harbors."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Downplaying exposure blunts incentives to self-report."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "If your porch looks moody, it’s the weather, not a surcharge. We’ll publish plain-English updates before any knob gets touched and default to do-no-dim for the public.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Weather jokes can feel glib if markets twitch overnight."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Casual tone risks misreads by partners and regulators."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Reassurance helps avoid speculative spikes and hoarding."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "If anyone’s selling surge-proof moon insurance, please don’t buy it. That’s a hustle wearing a telescope as a tie.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Evasiveness signals we lack grip on pocketbook impacts."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Small nod to humor eases tensions without concessions."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dodging details hampers efforts to police illicit fees."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "If we accidentally spawn a niche fee, we’ll squash it faster than a cloud crosses a streetlamp and refund with interest, apology haiku included.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Admitting fees risk shows candor and commitment to fix."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Concession may embolden broader claims in multilateral fora."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Neutral fiscal posture keeps responses flexible for markets."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
