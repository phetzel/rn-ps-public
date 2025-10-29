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
      text: "By auctioning 'Imaginary GDP Credits,' aren't you swapping growth for coupons and inviting moral hazard, distortions, and a stealth tax on savers?",
      answers: [
        {
          id: "q1_a1",
          text: "Markets already price vibes, narratives, and weather forecasts. Show me a purely real economy with no storytelling or derivatives, and I'll shred these credits on live TV, confetti and all.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.MajorNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Bold framing signals leadership facing market absurdity."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Undercuts our guardrails and invites volatility concerns."
              }
            }
          }
        },
        {
          id: "q1_a2",
          text: "We already price risks that don't exist; this program simply labels and fences them. Issuance is capped, usage is audited, and nothing lets executives swap credits for real investment obligations.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral, // 0
            o2: OutcomeModifierWeight.SlightNegative, // -4
            o3: OutcomeModifierWeight.SlightPositive, // +4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Reads as endorsement of financial alchemy over work."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clarifies cap and design; reassures on systemic limits."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "q1_a3",
          text: "Credits settle like permits, not money. Weekly auctions, hard expirations, and a no-collateral rule keep them in the bragging-rights lane, so if traders overpay, that theater doesn't tax anyone's savings.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Technical tone helps, but still dodges core fairness."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Operational detail alone cannot calm distortion worries."
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "q1_a4",
          text: "It's not a stealth tax. Savers still earn market rates; the credits trade in a separate sandbox where participation is voluntary and priced by adults with calculators, not anyone's retirement account.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.Neutral,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Denying impacts risks backlash if savers feel squeezed."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Affirms intent to protect savers within pilot scope."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "If firms can buy pretend growth, why build real factories? What guardrails stop executives from juicing metrics while cutting investment and blaming 'myth marks'?",
        answers: [
          {
            id: "q2_a1",
            text: "Eligibility is tethered to real inputs: audited capex, payroll, and energy use. You can't buy credits unless you build, and the ratio of credits to output is capped with clawbacks that bite.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.Neutral, // 0
              o3: OutcomeModifierWeight.SlightPositive, // +4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Guardrails sound tight, yet moral hazard still looms."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Eligibility ties myth to steel; that's prudent prudence."
                }
              }
            }
          },
          {
            id: "q2_a2",
            text: "If you think CEOs will skip profits to chase imaginary stickers, that's a compensation problem, not a policy one. We're capping the stickers and tying them to receipts, not vibes.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Punchy pushback rallies skeptics toward real investment."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Tone dismisses risks, which may spook cautious buyers."
                }
              }
            }
          },
          {
            id: "q2_a3",
            text: "Authorized on behalf of the Treasury: the Secretary directs that credits be issued only against verified capital formation, maintained payrolls, and clean energy targets, with public audits and penalties for fluff.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive, // +8
              o2: OutcomeModifierWeight.SlightNegative, // -4
              o3: OutcomeModifierWeight.SlightNegative, // -4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Authority without evidence won't fix metric gaming."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Authorization plus criteria help curb edge-case abuse."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury
          },
          {
            id: "q2_a4",
            text: "Valuations are marked-to-myth under a published rubric with conservative haircuts and error bands. A rotating panel of myth-accountants sets baselines, and appeals are logged in daylight.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Transparency helps; still light on measurable deterrence."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Reporting is useful, but enforcement teeth look dull."
                }
              }
            },
            followUpId: "q4"
          }
        ]
      },
      {
        id: "q3",
        text: "If these credits turn into the hot new coupon, won't they siphon bond demand, bend yields, and quietly tax savers while officials croon about 'liquidity'?",
        answers: [
          {
            id: "q3_a1",
            text: "No. The auctions are small, ring-fenced, and forbidden from collateral chains, so they don't crowd out bonds. If yields move, it'll be because the real economy did, not a novelty coupon.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial risks credibility if yields twitch later."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Ring-fence message aligns with prudent containment."
                }
              }
            }
          },
          {
            id: "q3_a2",
            text: "Let's not confuse volume with risk before we see data. The Reserve of Imaginaries will publish liquidity heat maps after the pilot, and we'll tweak knobs with evidence, not headlines.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Measured patience can buy time, not trust or clarity."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Deflection invites basis trades to probe the perimeter."
                }
              }
            }
          },
          {
            id: "q3_a3",
            text: "Seepage into funding markets is blocked by collateral bans and automatic caps that tighten if secondary spreads spike. If heat builds, issuance throttles before distortions get teeth.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear safeguards backstop confidence in real markets."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Overpromising resilience could backfire under stress."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "q3_a4",
            text: "Participation is elective and proceeds offset fees elsewhere, making the program budget-neutral to savers. The mechanics live on a separate rail with its own risk capital and disclosures.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Offsets sound like budget games, not true protection."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Fee offsets reduce distortions if tightly administered."
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
        text: "You're 'marking to myth' - who writes the myth, and what prevents metaphysical inflation when stories get sunnier than spreadsheets?",
        answers: [
          {
            id: "q4_a1",
            text: "The Myth Index is compiled by a rotating, diverse panel with published methods, back-testing, and confidence bands. We score narratives like risk factors, then haircut the poetry.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral, // 0
              o2: OutcomeModifierWeight.SlightPositive, // +4
              o3: OutcomeModifierWeight.SlightNegative, // -4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process talk without results reads like hedging."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Diverse index governance improves legitimacy and trust."
                }
              }
            }
          },
          {
            id: "q4_a2",
            text: "If stories run hotter than stats, the cap ratchets down automatically. Think of it as a circuit breaker for rhetoric so the myth can't outrun the math for long.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Adaptive caps align incentives toward real productivity."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ratchets help, but calibration errors could compound."
                }
              }
            }
          },
          {
            id: "q4_a3",
            text: "If the nation wants fewer myths, it can start by shrinking footnotes and earnings theater. We're just labeling what's already on stage so people stop tripping over it.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Snark lands, but it dodges the inflation mechanism."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Deflection weakens credibility when stakes are systemwide."
                }
              }
            }
          },
          {
            id: "q4_a4",
            text: "Yes, it's whimsical labeling for spin that already floats through glossy decks. Better to corral it with rules and sunlight than pretend the imaginary doesn't move real prices.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Admitting whimsy feeds critics of financial engineering."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Candor builds trust, even if the optics are imperfect."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "Could traders repo these credits via 'creative baskets,' turning pretend growth into real leverage and a very non-pretend mess when the music stops?",
        answers: [
          {
            id: "q5_a1",
            text: "Contracts ban rehypothecation, the clearinghouse blocks any repo tagging, and violations vaporize credits and hit capital. You can't turn these into plumbing without tripping alarms.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Bans on rehypothecation often crumble under pressure."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear contracts and supervision reduce leakage risk."
                }
              }
            }
          },
          {
            id: "q5_a2",
            text: "We monitor cross-asset margin with exchange feeds and tripwires. If desks try basket alchemy, alerts fire, margins jump, and compliance shows up before the leverage does.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral, // 0
              o2: OutcomeModifierWeight.SlightNegative, // -4
              o3: OutcomeModifierWeight.SlightPositive, // +4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Monitoring without triggers looks like theater."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Data pipes and alerts are real tools, not headlines."
                }
              }
            }
          },
          {
            id: "q5_a3",
            text: "If a shadow desk MacGyvers a loophole, we'll weld it shut fast. Innovation can be clever, but regulation can be faster when the toy is capped, small, and fully visible.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Decisive tone signals zero tolerance for loopholes."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Ad hoc crackdowns can chill good liquidity and trust."
                }
              }
            }
          },
          {
            id: "q5_a4",
            text: "The pilot is tiny, short-dated, and ring-fenced from core funding. If anything misbehaves, we halt auctions and let the credits expire without touching mortgages or payrolls.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Pragmatic pilot sizing buys learning time and cover."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Ring-fencing helps, but complacency is the hidden risk."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
