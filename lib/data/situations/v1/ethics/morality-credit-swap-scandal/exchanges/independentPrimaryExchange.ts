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
      id: "root",
      text: "The Commission's tradable morality credits spawned pay-for-pardon brokers and skimming. Before outrage arbitrage kicks in, what gets shut off first?",
      answers: [
        {
          id: "root_a1",
          text: "We are not outsourcing virtue to coupon booths. I will challenge the premise with a public sin buyback, a free-hug window, and a pilot of naps and kale before anyone buys redemption in bulk, while we replace this with a ",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "This asserts leadership and rejects marketized virtue."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Signals regulatory shock that could jar credit desks."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Elevates non-market wellbeing over coupon absolution."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hints at overreach before charges, risking procedure."
              }
            }
          }
        },
        {
          id: "root_a2",
          text: "We are stabilizing the system, not spooking it. Fee spreads are capped, settlement is paused for audit, and a brief hug-guidance window will cool volatility so bond desks do not price a Virtue Recession.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Reads as status quo spin amid outrage, sapping trust."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Calms desks with continuity and fee containment."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Minimizes health stressors masked as financial tools."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Softens deterrence and may confuse enforcement timing."
              }
            }
          },
          followUpId: "sec1"
        },
        {
          id: "root_a3",
          text: "Justice investigators secured broker ledgers and order books, issued preservation notices, and clarified that credits do not erase misconduct. If statutes were dodged, charges follow; if not, refunds do.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Too technocratic for angered publics, diluting resolve."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ledger talk without stability cues may spook markets."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ignores wellbeing framing and the stress dimension."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Affirms seized ledgers and chain of custody clarity."
              }
            }
          },
          followUpId: "sec2"
        },
        {
          id: "root_a4",
          text: "Per the Justice Secretary, broker nodes have been imaged, warrants executed, and tamper-evident hashes logged. We will not try this case at the podium, but the facts will land in court, not in a coupon aisle.",
          type: AnswerType.Authorized,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Delegates tone to Justice, implying distance or doubt."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Gives limited certainty without spooking liquidity."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Offers no health pivot away from contrition commerce."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Appears political, risking claims of undue influence."
              }
            }
          },
          authorizedCabinetMemberId: CabinetStaticId.Justice
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "sec1",
        text: "Map the plumbing for us: who are the brokers, how do fees flow, and what kill-switches exist to stop absolution matching mid-sin?",
        answers: [
          {
            id: "sec1_a1",
            text: "Brokers registered as 'virtue matchmakers' take a platform fee and a spread on redemption. We have tripped the kill-switch: auctions paused, API keys revoked, and a rollback ledger queued for refunds.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Shows command of details without sounding panicked."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reveals fee skims that could trigger risk repricing."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "No wellbeing guardrails mentioned in the plumbing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Maps actors and artifacts needed for prosecutions."
                }
              }
            }
          },
          {
            id: "sec1_a2",
            text: "No one's pension is tied to absolution futures. Fee skims are frozen, custodians on notice, and the clearing sandbox is in read-only. The only thing moving fast today is our compliance team.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Sounds dismissive of public anger at moral markets."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Signals limited exposure and no pension contagion."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treats stress externalities as an afterthought."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Downplays evidence trails that cases may require."
                }
              }
            }
          },
          {
            id: "sec1_a3",
            text: "This is not a vendor demo. Names and contracts sit with the Ethics Commission's procurement office, and we will not litigate NDAs in a live fire drill.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Evasive tone suggests blame-shifting, hurting trust."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dodges flow data that markets need to price risk."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Rejects vendor gloss and centers human impacts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Unhelpful to investigators seeking specific ledgers."
                }
              }
            }
          },
          {
            id: "sec1_a4",
            text: "If you need a kill-switch, you built the wrong machine. Scrap the routers, end auction matching, and replace it with on-the-record restorative hearings that cannot be arbitraged.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Confrontational posture risks sounding ideological."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Anti-switch rhetoric could chill benign operations."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Backs redesign toward prevention over transactions."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Kill-switch bravado may undermine due-process norms."
                }
              }
            },
            followUpId: "ter1"
          }
        ]
      },
      {
        id: "sec2",
        text: "Audit trails and loopholes: could officials launder sins with 'forgiveness swaps' or burner contrition, and what trail survives a wipe?",
        answers: [
          {
            id: "sec2_a1",
            text: "Every ticket has a hashed trail: wallet, broker, and official ID, with cross-market mapping of 'forgiveness swaps.' Burners still touch a node we control. A factory reset will not beat subpoenas and forensics.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Specific audits project competence and control."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hashes and wipes add complexity that spooks desks."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Forgets stress pathways behind the swap behavior."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Preserves trails and strengthens evidentiary posture."
                }
              }
            }
          },
          {
            id: "sec2_a2",
            text: "Take a breath. Panic-buying contrition does not make a Redemption Recession. We are standardizing logs, tightening KYC-for-conscience, and publishing a plain-English audit guide.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance alone may read as complacent on abuse."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Dials down panic and discourages disorderly exits."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Offers little on wellness fixes over financial hacks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Could be seen as minimizing prosecutable conduct."
                }
              }
            }
          },
          {
            id: "sec2_a3",
            text: "No, you cannot launder a felony with a coupon carousel. The rules never converted credits into amnesty, and anyone who tried that angle just bought a receipt to an awkward day in court.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flat denial risks backlash if a loophole surfaces."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overconfidence invites basis risk if claims fail."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear line against moral laundering supports behavior change."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Absolute claims may backfire in court disclosures."
                }
              }
            }
          },
          {
            id: "sec2_a4",
            text: "If the loopholes multiply, we flip the table: sunset the market, cap absolution per capita, and replace coupons with naps, kale, and oversight you cannot scalp.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Aggressive stance risks legal drag without proof."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Table-flip talk unnerves liquidity and pricing."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Commits to sunlit pilots over coupon contrition."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Threat posture can complicate coordinated seizures."
                }
              }
            },
            followUpId: "ter2"
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "ter1",
        text: "If a ban or moratorium is chosen, how do you unwind positions, refund fees, and prevent last-minute absolution arbitrage at the bell?",
        answers: [
          {
            id: "ter1_a1",
            text: "Unwind plan: snapshot at announcement, null redemptions after the bell, pro-rata refunds of fees, and clawbacks for wash-virtue. A 14-day claims window prevents a rush while investigators audit edge cases.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dry mechanics may seem cold amid ethical outrage."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Snapshot talk hints at settlement frictions."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "No mention of stress relief paired to unwind."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear chronology protects evidence and fairness."
                }
              }
            }
          },
          {
            id: "ter1_a2",
            text: "No rug-pull drama. Escrowed fees return automatically, community-service credits convert 1:1, and we will publish a timeline so no one panic-sprints to the confessional kiosk.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Balanced tone conveys empathy and control."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Orderly refunds reduce run risk and volatility."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comfort talk skips healthier alternatives."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Premature certainty could constrain casework."
                }
              }
            }
          },
          {
            id: "ter1_a3",
            text: "We cannot whiteboard the whole unwind on camera. The Ethics Commission will post the math and legal citations once the pause order is finalized.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Stonewalling on unwind suggests lack of plan."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Opacity risks mispricing and settlement stress."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Pushback makes space to add wellness guardrails."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Avoiding detail hinders coordination with courts."
                }
              }
            }
          },
          {
            id: "ter1_a4",
            text: "Brokers call it liquidity; we call it loopholes with better fonts. Zero out the carry, ban same-day absolution, and make redemptions live in public service, not dark pools.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Combative tone may inflame rather than deter."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hostility could freeze useful market plumbing."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Centers prevention over liquidity excuses."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overreach rhetoric risks due process complaints."
                }
              }
            }
          }
        ]
      },
      {
        id: "ter2",
        text: "The Health & Harmony Service floated stress fixes - naps, kale, fewer guilt coupons. What evidence beats a market, and how would a health pilot run?",
        answers: [
          {
            id: "ter2_a1",
            text: "Trading guilt is stress in a blazer. We will test naps, kale, and mentorship over coupons, aiming to drop misconduct demand at the source rather than pricing it like a snack.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Energetic pivot suggests action beyond markets."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Non-market pilots could unsettle fee forecasts."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Puts health evidence ahead of contrition tokens."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Policy zeal should not preempt prosecutorial care."
                }
              }
            }
          },
          {
            id: "ter2_a2",
            text: "Design: randomized office pilots, pre-registered metrics on complaints and conflicts, and an open dashboard. If it beats coupons, we scale; if not, we iterate without sunk-cost theatrics.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Method talk may land as detached from outrage."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Design rigor adds cost without calming spreads."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Process focus delays relief for stressed staff."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparent methods aid defensible enforcement."
                }
              }
            }
          },
          {
            id: "ter2_a3",
            text: "It is cheap, reversible, and non-pharmaceutical. Budgets stay calm, staff morale rises, and nobody needs a secret wallet to feel like a decent human.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soothing claims risk looking like minimization."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Low-cost pilots reduce disruption risk."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances alone will not improve wellbeing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft tone may embolden bad actors to test limits."
                }
              }
            }
          },
          {
            id: "ter2_a4",
            text: "We will let the scientists nap on it, then publish the evidence instead of vibes. Today we are not prescribing kale from the podium.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection implies a thin evidence base."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delay messaging can rattle cautious desks."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Publishing results still advances health framing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Noncommittal stance weakens deterrent signals."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
