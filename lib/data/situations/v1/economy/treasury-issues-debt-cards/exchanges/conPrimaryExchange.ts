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
      text: "Markets are flipping over the new ‘debt cards,’ but critics call it a taxpayer-backed bubble. Why turn fiscal policy into collectible chaos?",
      answers: [
        {
          id: "a_root_1",
          text: "Think less ‘bubble,’ more ‘friendship bond.’ We’re letting households park lunch‑money amounts in bite‑size, transparent savings so enthusiasm fuels stability, not wild swings.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            outcome_foil_standard: OutcomeModifierWeight.SlightNegative,
            outcome_kindergarten: OutcomeModifierWeight.Neutral,
            outcome_oracle: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Strikes a light, calming tone that fits the reassure message to audiences."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Concerns that whimsy understates issuance discipline and legal constraints."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "We structured mini‑bonds with clear maturities, posted yields, and serial tracking. Packs sell like cards, but settlement runs on boring rails with compliance stamped in holograms.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            outcome_foil_standard: OutcomeModifierWeight.SlightPositive,
            outcome_kindergarten: OutcomeModifierWeight.Neutral,
            outcome_oracle: OutcomeModifierWeight.SlightNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Technical framing risks sounding cold while critics shout about bubbles."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear explanation of maturities and controls supports program legitimacy."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "If you want a bubble, check the vintage sneaker aisle. This is about financial literacy with training wheels while the macro work—growth, jobs, rates—happens in the engine room.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            outcome_foil_standard: OutcomeModifierWeight.SlightPositive,
            outcome_kindergarten: OutcomeModifierWeight.SlightNegative,
            outcome_oracle: OutcomeModifierWeight.Neutral,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Deflection may appear glib amid market jitters and family cost worries."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A bit of levity helps, but we still need to signal process rigor."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "It isn’t a scheme to goose deficits. Each card is funded like any bond, and the books treat it that way. Speculators can trade wrappers; the debt math doesn’t suddenly lie.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            outcome_foil_standard: OutcomeModifierWeight.SlightNegative,
            outcome_kindergarten: OutcomeModifierWeight.SlightPositive,
            outcome_oracle: OutcomeModifierWeight.Neutral,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Firm denial projects confidence but risks seeming dismissive of risks."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Over-denial could backfire if spreads move; prefer tempered precision."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Do booster‑pack sales hide fresh borrowing under confetti, or will those deficits still hit the ledger once the glitter settles and the coupons come due?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Receipts are segregated; proceeds reduce current gross funding needs one‑for‑one. We publish maturity ladders and coupon maps weekly, so you can trace glitter to the line item.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightPositive,
              outcome_kindergarten: OutcomeModifierWeight.Neutral,
              outcome_oracle: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Ledger talk reassures accountants, not anxious households watching prices."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Segregated receipts and offsets align with fiscal plumbing best practices."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "Marketing makes the borrowing look fun, not smaller. The liability is real and lands on the ledger; we’re just spreading it across millions of micro‑holders instead of a few whales.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightPositive,
              outcome_kindergarten: OutcomeModifierWeight.SlightNegative,
              outcome_oracle: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Candor earns credit, though it may fuel headlines about gimmickry."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admission helps transparency but may invite harsher regulatory scrutiny."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Deficits are arithmetic, not pyrotechnics. If someone claims confetti hides numbers, show the page where math stopped working, and we’ll bring a calculator and a broom.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.StrongPositive,
              outcome_kindergarten: OutcomeModifierWeight.SlightPositive,
              outcome_oracle: OutcomeModifierWeight.MajorNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Chastising tone risks sounding aloof to buyers lured by flashy packaging."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Re-centers on math and coupons, which underpins program credibility."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "The novelty lives on the wrapper. The accounting lives in the books, audited and dull, so nobody wakes up to a surprise dragon eating the budget.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightNegative,
              outcome_kindergarten: OutcomeModifierWeight.Neutral,
              outcome_oracle: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Provides calm context that avoids panic while affirming fiscal reality."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soothing tone is fine, but it lacks specifics on deficit recognition."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Credit desks twitch while families pay premiums. What guardrails stop shiny rectangles from warping borrowing costs and sticking taxpayers with others' pack markup?",
        answers: [
          {
            id: "a_sec2_1",
            text: "We cap pack premiums, publish a reference NAV, and throttle issuance when spreads drift. Market makers must quote inside bands, with penalties for pumpy theatrics and spoof quotes.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.Neutral, // 0
              outcome_kindergarten: OutcomeModifierWeight.SlightNegative, // -4
              outcome_oracle: OutcomeModifierWeight.SlightPositive, // +4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dense guardrail talk may feel bureaucratic to families facing markups."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Publishing NAVs and caps signals control and cushions volatility."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "The yield curve, not cardboard, sets our cost of money. Retail theatrics may jiggle the packaging, but the underlying rates are anchored by auctions, not unboxing videos.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightNegative,
              outcome_kindergarten: OutcomeModifierWeight.Neutral,
              outcome_oracle: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Reassures that fundamentals, not fads, anchor borrowing costs."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overconfidence about curves could appear naive if liquidity thins."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "Taxpayers aren’t forced to fund premiums. Optional pack markups cover printing and distribution, while the debt’s price is set the old‑fashioned way in primary sales.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightNegative,
              outcome_kindergarten: OutcomeModifierWeight.SlightPositive,
              outcome_oracle: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denial of taxpayer exposure may sound detached from checkout pain."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarifies voluntary participation and funding mechanics responsibly."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "If brokers are tacking on junk fees, name them. We’ll happily shine a klieg light on that party, and you can bring the popcorn while the fees head for the exit.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.StrongPositive,
              outcome_kindergarten: OutcomeModifierWeight.SlightPositive,
              outcome_oracle: OutcomeModifierWeight.MajorNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Accountability stance appeals to fairness but can escalate confrontation."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Calling out brokers publicly risks instability without due process."
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
        text: "If card values crater, who eats the loss—speculators chasing limited editions, the issuer, or taxpayers who never bought a pack?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Secondary‑market losses sit with investors; the issuer owes coupons and par at maturity, nothing more. We don’t back resale prices, and we print that in very large, very readable type.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightPositive,
              outcome_kindergarten: OutcomeModifierWeight.Neutral,
              outcome_oracle: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assigning losses to investors can read as unsympathetic in a slump."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear risk allocation reduces moral hazard and preserves price signals."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We sized packs so a wobble is a paper cut, not a cliff. Diversifying across series keeps any one shiny rarity from capsizing a family budget or the public balance sheet.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightNegative,
              outcome_kindergarten: OutcomeModifierWeight.Neutral,
              outcome_oracle: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Assures scale management, projecting prudence and measured confidence."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sizing claims help, but overstating damping risks credibility later."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "There’s no secret bailout jar for rare misprints. If someone overpays for a glitter dragon, that’s a lesson in price discovery, not a liability for their neighbors.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightNegative,
              outcome_kindergarten: OutcomeModifierWeight.SlightPositive,
              outcome_oracle: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard-line denial could box us in if targeted support becomes prudent."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Signals no backdoor bailouts, deterring opportunistic risk-taking."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Risk is why every box ships with a budgeting zine and a ‘don’t spend the rent’ sticker. If you’re chasing a grail, maybe set aside bus money before chasing sparkles.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightPositive,
              outcome_kindergarten: OutcomeModifierWeight.SlightNegative,
              outcome_oracle: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Humanizing risk education helps, though it may seem flippant to losses."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Playful framing risks minimizing disclosures and statutory obligations."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "You tout hologram compliance, but can regulators police spoof packs, wash flips, and influencer pump runs before the whole thing melts down?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Every card carries a signed serial tied to point‑of‑sale KYC; analytics flag wash loops and velocity spikes. We can pause issuance windows and yank licenses when patterns turn synthetic.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightPositive,
              outcome_kindergarten: OutcomeModifierWeight.Neutral,
              outcome_oracle: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Jargon on serials and audits may not calm parents wary of scams."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Traceability and point-of-sale hooks strengthen enforcement posture."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Bad actors test fences; we may miss a stunt. But penalties escalate, data are public, and repeat performers discover the joy of quarterly audits and uncaffeinated hearings.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightPositive,
              outcome_kindergarten: OutcomeModifierWeight.SlightNegative,
              outcome_oracle: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting gaps is honest but risks fueling a panic narrative in media."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency builds trust and supports future rulemaking authority."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "Influencers don’t run fiscal policy. If someone live‑streams a pump, they can meet a very polite lawyer with a very comprehensive binder about market manipulation.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.StrongPositive,
              outcome_kindergarten: OutcomeModifierWeight.SlightPositive,
              outcome_oracle: OutcomeModifierWeight.MajorNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Pushback shows resolve, though it can sound combative with platforms."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissing influencers outright may undercut outreach and monitoring."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "We’ve run stress drills so drama doesn’t warp the rails. Headlines will shout; the plumbing will hum, and households can collect without feeling like they’re defusing a bomb.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightNegative,
              outcome_kindergarten: OutcomeModifierWeight.Neutral,
              outcome_oracle: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Assures readiness and buffers, projecting competence under stress."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Stress drills help, but overpromising containment risks later blame."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
