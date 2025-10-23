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
      id: "q1",
      text: "With hugs and high-fives now tradable, how will you price them, settle payroll fast, and cap fees so small investors aren't squeezed by sappy swings?",
      answers: [
        {
          id: "a1",
          text: "Yes, I embraced the market on purpose. We'll publish a daily Cuddle Index, fund conversion desks for payroll, and if prices pout, I'll average down with a national bear hug and nachos.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            "hug-peg": OutcomeModifierWeight.StrongPositive,
            "algo-applause": OutcomeModifierWeight.StrongNegative,
            "quilt-index": OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Owning the choice shows candor; investors hear accountability."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Unplanned embrace risks fee chaos without a schedule."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Safety steps seem secondary, raising compliance worries."
              }
            }
          }
        },
        {
          id: "a2",
          text: "The Department of Treasurekeeping will standardize units, apply consent audits, and set haircuts: side-hugs get bigger trims than full embraces. Fee bands and T+0 conversions keep payroll moving.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            "hug-peg": OutcomeModifierWeight.ModerateNegative,
            "algo-applause": OutcomeModifierWeight.ModeratePositive,
            "quilt-index": OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Clear playbook from the top can calm volatile repricing."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Standards could cut spreads and deter fee gouging."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Rules may ignore fatigue and contact safety load."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "a3",
          text: "To the hand-wringers: affection is risk-managed PPE for the soul. Our three-beat standard, sanitizer checks, and consent chimes will keep traders limber and the floor safer than a spreadsheet cuddle.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            "hug-peg": OutcomeModifierWeight.SlightPositive,
            "algo-applause": OutcomeModifierWeight.SlightNegative,
            "quilt-index": OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Confrontational tone can spook small retail savers."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Aggressive stance complicates market plumbing."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Enforcing chimes and beats supports workplace safety."
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "a4",
          text: "No one's paycheck hinges on vibes. We're guaranteeing a floor conversion rate for wages, capping per-hug fees, and shielding small accounts with anti-squeeze circuit breakers.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            "hug-peg": OutcomeModifierWeight.ModerateNegative,
            "algo-applause": OutcomeModifierWeight.ModeratePositive,
            "quilt-index": OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Soft assurances without math can sound evasive."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Guarantees invite moral hazard and billing disputes."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Worker-first framing supports health compliance culture."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "Small accounts will meet per-hug fees; how will spreads, side-hug haircuts, and timing hit payrolls, and what stops whales from cornering high-fives?",
        answers: [
          {
            id: "a2_1",
            text: "Fee caps scale down for micro-accounts, with a daily free-quota and nickel ceilings thereafter. Side-hugs carry a 25 bp haircut, conversions run T+0, and anti-hoard limits block pre-payday corners.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.StrongPositive,
              "algo-applause": OutcomeModifierWeight.ModerateNegative,
              "quilt-index": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Proactive protections read as empathetic but pragmatic."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Tiered caps and audits can limit predatory spreads."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Daily resets may compress breaks and raise contact time."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "a2_2",
            text: "Gig workers won't miss rent because cuddle clocks lag. Payrolls auto-convert at a guaranteed floor each night, and we built circuit breakers that throttle spikes before whales splash.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.ModerateNegative,
              "algo-applause": OutcomeModifierWeight.StrongPositive,
              "quilt-index": OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Promises without mechanisms risk credibility erosion."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Backstops without pricing can strain remitters."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear wage continuity aids well-being and compliance."
                }
              }
            }
          },
          {
            id: "a2_3",
            text: "I won't price every bro-hug from the podium. The rulebook drops at close, and you'll see the line items, footnotes, and the footnotes' footnotes spelled out in plain-ish English.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightPositive,
              "algo-applause": OutcomeModifierWeight.ModerateNegative,
              "quilt-index": OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deferring specifics signals uncertainty to markets."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Regulators retaining discretion can deter cornering."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Lack of detail on consent tech undercuts safeguards."
                }
              }
            }
          },
          {
            id: "a2_4",
            text: "No, per-hug fees aren't a stealth tax on small traders. The schedule is public, capped at five micro-hugs per day, and reviewed with actual humans instead of feral spreadsheets.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.ModerateNegative,
              "algo-applause": OutcomeModifierWeight.SlightPositive,
              "quilt-index": OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dismissal of fee risk may alienate small traders."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Denying implicit costs impedes oversight leverage."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Affirming consent audits still supports safety norms."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "Health-wise, three-beat hugs, sanitizer checks, and consent chimes sound noble; do compliance costs swamp liquidity, and who pays for gear on every trading jacket?",
        answers: [
          {
            id: "a3_1",
            text: "Safety isn't red tape; it's why people show up. If consent chimes slow you down, try trading spreadsheets-then watch how fast a sneeze halts a floor without standards.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.ModerateNegative,
              "algo-applause": OutcomeModifierWeight.StrongPositive,
              "quilt-index": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Framing critics as timid invites political blowback."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strident tone can unsettle clearing counterparties."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Safety-first message bolsters adoption and trust."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "a3_2",
            text: "The Department of Health & Hugs will bulk-buy kits, subsidize sensors, and integrate chimes into badges. Cost per trade stays under a fifth of a cent with random audits and swift fixes.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.StrongPositive,
              "algo-applause": OutcomeModifierWeight.ModerateNegative,
              "quilt-index": OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Concrete procurement plan signals operational grip."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Bulk buys and SLAs can lower unit costs and fees."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Centralized kits may overlook local health nuances."
                }
              }
            }
          },
          {
            id: "a3_3",
            text: "The three-beat rhythm is ergonomic, not theatrical. We tested it with actual humans, and it keeps lines moving while keeping shoulders un-sprained and spirits un-soured.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.ModerateNegative,
              "algo-applause": OutcomeModifierWeight.SlightPositive,
              "quilt-index": OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ergonomic pitch without data may read as spin."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Understating costs risks undercapitalized intermediaries."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Emphasis on ergonomics supports injury prevention."
                }
              }
            }
          },
          {
            id: "a3_4",
            text: "We won't demo a hug from the podium. Specs post this afternoon, complete with diagrams, wipe-down intervals, and a tasteful chart about chime volume versus dignity.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightPositive,
              "algo-applause": OutcomeModifierWeight.ModerateNegative,
              "quilt-index": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dodging a demo hints at discomfort with requirements."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Letting specs speak can reduce politicization risk."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Avoiding examples weakens training and compliance cues."
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
        text: "Break down the fee cap math and end-of-day marking: how do you value a high-five at the close, and who makes payroll whole if cuddles gap at 3 p.m.?",
        answers: [
          {
            id: "a4_1",
            text: "We mark by time-stamped contact and audible enthusiasm, averaged across venues with outliers tossed. Fees cap at five micro-hugs per trade, and the Snuggle Stabilization Fund fronts payroll at the floor.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.ModeratePositive,
              "algo-applause": OutcomeModifierWeight.ModerateNegative,
              "quilt-index": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Technical clarity from the top steadies close pricing."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Time-stamped metrics enable fair marks and audits."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Focus on enthusiasm may neglect sanitation cadence."
                }
              }
            }
          },
          {
            id: "a4_2",
            text: "If cuddles crater mid-shift, wages still clear at the prior floor. Make-whole settles in boring cash by close, and workers never eat the spread for someone else's soggy vibes.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightNegative,
              "algo-applause": OutcomeModifierWeight.SlightPositive,
              "quilt-index": OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Guarantees without math can raise bailout fears."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mandated make-whole exposes funds to basis risk."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Worker pay certainty supports health protocol uptake."
                }
              }
            }
          },
          {
            id: "a4_3",
            text: "If anyone thinks they can game the close with staged bear hugs, our auditors will meet them at the bell with penalties that cling longer than glitter on a cardigan.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightPositive,
              "algo-applause": OutcomeModifierWeight.SlightNegative,
              "quilt-index": OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Combative posture invites gamesmanship narratives."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Threat of penalties can curb manipulation attempts."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Sting rhetoric may crowd out safety emphasis."
                }
              }
            }
          },
          {
            id: "a4_4",
            text: "The algebra could sedate a rhino. What matters is paychecks land on Fridays and nobody pays a hidden aww surcharge tucked between compliance and coffee.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.ModerateNegative,
              "algo-applause": OutcomeModifierWeight.ModeratePositive,
              "quilt-index": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Minimizing detail looks cavalier on valuations."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hand-waving undermines auditor and exchange trust."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Shifting focus to workers can sustain compliance buy-in."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "Will lunch quiet windows or group-hug limits delay settlements, and how will chimes and badges integrate without turning payroll into a pageant?",
        answers: [
          {
            id: "a5_1",
            text: "Chimes pair with badges via tap-to-consent, and group hugs auto-flag for audit without freezing trades. The lunch quiet window trims noise, not flow, so settlement queues stay green.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.MajorPositive,
              "algo-applause": OutcomeModifierWeight.StrongNegative,
              "quilt-index": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Overengineering tone risks scaring off small teams."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear integration plan can smooth settlement ops."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dense workflows may slow hygiene and consent checks."
                }
              }
            }
          },
          {
            id: "a5_2",
            text: "Floor gear won't resemble a parade. Devices are sticker-sized, battery-miserly, and silent except the chime, and the refill cart is quieter than the coffee machine.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.StrongNegative,
              "algo-applause": OutcomeModifierWeight.MajorPositive,
              "quilt-index": OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances about aesthetics can seem superficial."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissing costs risks unforeseen vendor creep."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Emphasis on simplicity helps adherence to hygiene."
                }
              }
            }
          },
          {
            id: "a5_3",
            text: "No, we aren't charging per sanitizer squirt. Consumables sit under exchange dues, and vendors compete on refill costs so the price stays boring and low.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.Neutral,
              "algo-applause": OutcomeModifierWeight.SlightNegative,
              "quilt-index": OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Confident denial calms some but invites scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flat denial reduces leverage to cap vendor fees."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Downplaying sanitation spend can undercut safety."
                }
              }
            }
          },
          {
            id: "a5_4",
            text: "We admit week one will be clumsy. That's why we've posted floor coaches to calibrate chime timing, untangle badge woes, and keep compliance breezy while everyone finds their rhythm.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightNegative,
              "algo-applause": OutcomeModifierWeight.Neutral,
              "quilt-index": OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Acknowledging wrinkles shows honesty and adaptability."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Phased pilots help price discovery and fee control."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Startup clumsiness risks fatigue and hygiene lapses."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
