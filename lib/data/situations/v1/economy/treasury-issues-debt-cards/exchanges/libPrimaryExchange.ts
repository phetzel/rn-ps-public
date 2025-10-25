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
      id: "q1",
      text: "Critics say Treasury’s ‘debt cards’ loot-box public finance, letting whales hoard yield while kids scalp civics packs. Is this policy or just a game?",
      answers: [
        {
          id: "a1_1",
          text: "It’s policy with playfulness: friendship bonds that pay interest in fun and funds. The goal is broader access to safe yield, not a casino, and the sparkle is just the user manual.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            outcome_foil_standard: OutcomeModifierWeight.ModeratePositive,
            outcome_kindergarten: OutcomeModifierWeight.ModeratePositive,
            outcome_oracle: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Reassurance frames the program as playful policy, reducing public anxiety."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Tone risks trivializing controls, raising questions about compliance rigor."
              }
            }
          }
        },
        {
          id: "a1_2",
          text: "Each card is a micro-bond with clear terms, audited odds for special prints, and caps per buyer. You can track provenance like a library card, but with coupons and compliance in the hologram.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            outcome_foil_standard: OutcomeModifierWeight.SlightPositive,
            outcome_kindergarten: OutcomeModifierWeight.SlightPositive,
            outcome_oracle: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Overly technical explanation feels cold and defensive, dampening public trust."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear, data-backed details align with our mandate and show oversight strength."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "a1_3",
          text: "No, we didn’t convert the commons into loot crates. We converted dusty bond windows into kiosks people actually use, with tighter disclosures than the vintage paper push ever managed.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            outcome_foil_standard: OutcomeModifierWeight.SlightNegative,
            outcome_kindergarten: OutcomeModifierWeight.SlightNegative,
            outcome_oracle: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Firm denial steadies optics briefly but may appear dismissive of concerns."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissal invites scrutiny of guardrails and signals possible compliance gaps."
              }
            }
          }
        },
        {
          id: "a1_4",
          text: "Let’s keep this grounded in outcomes, not memes. If the concern is classroom culture and kids scalping packs, we’ve got guidance and pilots we can discuss.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            outcome_foil_standard: OutcomeModifierWeight.ModerateNegative,
            outcome_kindergarten: OutcomeModifierWeight.ModerateNegative,
            outcome_oracle: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Deflection frustrates stakeholders and suggests we are dodging core issues."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Keeping focus narrow helps mechanics, but evasiveness dulls credibility."
              }
            }
          },
          followUpId: "q3"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "Early reports show ‘whales’ snapping up foil issuances and nudging prices. What stops dominant collectors from cornering the commons behind shiny compliance seals?",
        answers: [
          {
            id: "a2_1",
            text: "As Treasury, we hard-capped pack allotments, throttle bots, and publish live concentration stats. If someone tries to whale, the print run stops, not the public interest.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.ModeratePositive,
              outcome_kindergarten: OutcomeModifierWeight.ModeratePositive,
              outcome_oracle: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Decisive guardrails reassure the public that concentration will be checked."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Overcommitment on throttles could constrain liquidity and impede smooth auctions."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury
          },
          {
            id: "a2_2",
            text: "There’s a 2% wallet limit, anti-collusion checks on linked accounts, and clawbacks for wash trades. Happy to detail the rulebook, including mint windows and penalties.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightPositive,
              outcome_kindergarten: OutcomeModifierWeight.SlightPositive,
              outcome_oracle: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Complex limits risk sounding bureaucratic and distant from fairness concerns."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Specific caps and audits demonstrate credible enforcement and market discipline."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "a2_3",
            text: "Let’s retire the sea-mammal metaphors. Market power isn’t a meme; it’s measured. Share your data, we’ll share ours, and let the sunlight sort speculation from bedtime stories.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightNegative,
              outcome_kindergarten: OutcomeModifierWeight.SlightNegative,
              outcome_oracle: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Challenging the framing shows confidence but risks minimizing real harms."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Downplaying manipulation signals tolerance for edge cases, inviting gaming."
                }
              }
            }
          },
          {
            id: "a2_4",
            text: "Bigger question: do small savers get yield without a finance degree? The answer is yes, because the UI is crayons-simple while the math is lab-grade under the hood.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.ModerateNegative,
              outcome_kindergarten: OutcomeModifierWeight.ModerateNegative,
              outcome_oracle: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection to broader equity reads evasive during a market stress moment."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Re-centering on access goals hints at retail priority, but lacks mechanics."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "Schools report students swapping lunch for booster packs and learning austerity by scalping. Is this civic literacy or just recess capitalism with shinier hall passes?",
        answers: [
          {
            id: "a3_1",
            text: "We’ve seen overexuberance at snack time, and that’s on us for hype too shiny. We’re issuing school guidance and dialing down scarcity cues in the education bundles.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.ModeratePositive,
              outcome_kindergarten: OutcomeModifierWeight.ModeratePositive,
              outcome_oracle: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Owning overexuberance humanizes leadership and calms escalating rhetoric."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admitting issues without fixes raises doubts about controls in youth settings."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "a3_2",
            text: "Debt cards in schools are curriculum aids, not cash cannons. Teachers get demo decks, not tradable mints, and the goal is numeracy, not lunchtime arbitrage.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightPositive,
              outcome_kindergarten: OutcomeModifierWeight.SlightPositive,
              outcome_oracle: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Reassurance without safeguards may seem out of touch with parents’ worries."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Positioning as curriculum tool supports design intent and reduces market risk."
                }
              }
            }
          },
          {
            id: "a3_3",
            text: "Retail products require age checks and spending caps; education kits are non-transferable by design. Secondary markets are geofenced away from school networks.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightNegative,
              outcome_kindergarten: OutcomeModifierWeight.SlightNegative,
              outcome_oracle: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Practical guardrails sound responsible yet may not soothe moral anxiety."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Operational frictions help safety but could hamper distribution efficiency."
                }
              }
            }
          },
          {
            id: "a3_4",
            text: "No one is teaching austerity as a side hustle. We’re teaching compounding, risk limits, and the idea that public goods can be funded and understood, not flipped for lunch money.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.ModerateNegative,
              outcome_kindergarten: OutcomeModifierWeight.ModerateNegative,
              outcome_oracle: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial during visible behavior undermines credibility with educators."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Rejecting the premise protects program image but offers thin compliance detail."
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
        text: "Detail the anti-concentration rules: pack odds, mint caps, window timing, and penalties when a would-be whale pyramids yield using wrappers or shell accounts.",
        answers: [
          {
            id: "a4_1",
            text: "Pack odds are public and fixed; mints cap at 50 per verified ID per window; windows randomize within a day. Pyramiding via shells triggers freezes, audits, and escalating forfeitures.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.ModeratePositive,
              outcome_kindergarten: OutcomeModifierWeight.ModeratePositive,
              outcome_oracle: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Transparent specifics project competence and reduce political heat."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Fixing parameters too rigidly may limit adaptive liquidity management."
                }
              }
            }
          },
          {
            id: "a4_2",
            text: "There are no secret turbo packs or backroom allotments. If someone claims a magic faucet, it’s rumor chasing clicks, not policy reality in our system.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightPositive,
              outcome_kindergarten: OutcomeModifierWeight.SlightPositive,
              outcome_oracle: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Simple denial without evidence can read defensive despite claims of parity."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Unequivocal parity message supports compliance ethos and market integrity."
                }
              }
            }
          },
          {
            id: "a4_3",
            text: "If buyers need to hide behind twelve wrappers, they’re not collectors; they’re architects of a bubble. We won’t romanticize that as savvy—rules treat it like smoke alarms treat smoke.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightNegative,
              outcome_kindergarten: OutcomeModifierWeight.SlightNegative,
              outcome_oracle: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calling out evasion shows backbone but risks antagonizing potential allies."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Aggressive posture could chill liquidity and prompt adversarial behaviors."
                }
              }
            }
          },
          {
            id: "a4_4",
            text: "The boring truth is the point: lots of small holders, clean pipes, and alarms that ring before anyone’s bathtub overflows. It’s safer than the old bond raffle windows.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.ModerateNegative,
              outcome_kindergarten: OutcomeModifierWeight.ModerateNegative,
              outcome_oracle: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassurance about small holders may sound dismissive of concentration risks."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Emphasizing broad distribution aligns with policy goals, though proof is thin."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "How will you keep minors from speculative exposure while preserving the ‘educational’ pitch—ID checks, odds disclosures without loot-box bait, or a stern cartoon mascot?",
        answers: [
          {
            id: "a5_1",
            text: "We’re moving school kits to fixed-value, non-tradable tokens with transparent math problems, not rarity tiers. Retail packs require verified adulthood, cooling-off timers, and spend ceilings.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.ModeratePositive,
              outcome_kindergarten: OutcomeModifierWeight.ModeratePositive,
              outcome_oracle: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Concrete child-safety changes demonstrate responsiveness and care."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Non-tradable school kits reduce participation metrics and liquidity signals."
                }
              }
            }
          },
          {
            id: "a5_2",
            text: "Civics doesn’t need scarcity theater to be engaging. We can teach budgets with confetti, not cliffhangers, and keep wallets locked until guardians opt in.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightPositive,
              outcome_kindergarten: OutcomeModifierWeight.SlightPositive,
              outcome_oracle: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Uplift without specifics risks seeming performative in a sensitive domain."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Affirming education-first intent supports remit and lowers regulatory risk."
                }
              }
            }
          },
          {
            id: "a5_3",
            text: "Let’s not deputize hall monitors as hedge-fund cops. The better path is clean rails, clear guardrails, and letting teachers teach while the platform enforces the rest automatically.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.SlightNegative,
              outcome_kindergarten: OutcomeModifierWeight.SlightNegative,
              outcome_oracle: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Refusing over-policing rhetoric appeals to liberty but may seem indifferent."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Deflection from guardrails invites scrutiny of enforcement and KYC protocols."
                }
              }
            }
          },
          {
            id: "a5_4",
            text: "No, we won’t gamify temptation to juice sales. The sparkle stays in the packaging, not in the incentives, and education SKUs won’t feed secondary markets by design.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome_foil_standard: OutcomeModifierWeight.ModerateNegative,
              outcome_kindergarten: OutcomeModifierWeight.ModerateNegative,
              outcome_oracle: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denying gamification helps brand, yet evidence gaps weaken persuasiveness."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Explicit rejection of bait mechanics signals caution to vendors and schools."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
