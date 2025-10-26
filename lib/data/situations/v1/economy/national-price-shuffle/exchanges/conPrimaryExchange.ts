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
      text: "With the National Price Shuffle spinning rent like deli meat, how is calling this 'flexibility' anything but chaos for families and employers?",
      answers: [
        {
          id: "a_root_1",
          text: "We didn't break prices; we set them free to dance. Static tags sandbagged growth. Families and shops can plan in beats, not bricks, and seize bargains when the wheel lands their way.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            shuffle_outcome_1: OutcomeModifierWeight.StrongPositive,
            shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
            shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
            shuffle_outcome_4: OutcomeModifierWeight.StrongNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Framing volatility as vigor energizes the base."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Guardrails look flimsy beside celebratory spin."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Security sees crowd risk rising under price chaos."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Treasury ring-fenced staples with guardrails and rebates, and published a 12-month spin map for contracts. Spins randomize within bands, so payrolls and suppliers aren't guessing blind.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
            shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
            shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
            shuffle_outcome_4: OutcomeModifierWeight.SlightNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technical caveats dilute the bold flexibility pitch."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "We appreciate recognition of essential buffers."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Safety optics suffer when math takes the spotlight."
              }
            }
          },
          followUpId: "q_sec_1"
        },
        {
          id: "a_root_3",
          text: "Let's park the math olympics and talk safety. Price roulette can summon coupon mobs and barcode runners, and our priority is calm lines, safe stores, and keeping checkout brawls off the evening news.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
            shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
            shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
            shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Avoiding economics reads as evasive under fire."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection leaves Treasury holding the policy bag."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Public safety emphasis tracks with our guidance."
              }
            }
          },
          followUpId: "q_sec_2"
        },
        {
          id: "a_root_4",
          text: "No one's retirement gets fed to the wheel. Savings accounts, mortgages, and long-term care rates are insulated, while small businesses get stabilizers and grace periods to catch their breath.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            shuffle_outcome_1: OutcomeModifierWeight.SlightNegative,
            shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
            shuffle_outcome_3: OutcomeModifierWeight.SlightPositive,
            shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Reassurance helps soften backlash to the shuffle."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Promising safety of savings undercuts our leverage."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calmer tone may reduce unrest despite confusion."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_1",
        text: "Vendors say they're reprinting tags weekly while freight bids explode; what concrete safeguards keep shelves stocked when prices re-roll mid-route?",
        answers: [
          {
            id: "a_s1_1",
            text: "As Treasury, we issued spin-bands for fuel and staples, plus a 'quiet corridor' during transit so invoices don't mutate on the truck. A rebate pool cushions small distributors when bands drift.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.ModeratePositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.ModerateNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Bureaucratic fixes sound small against big shocks."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Our targeted bands deserve credit for stability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Supply claims still imply crowd risks for stores."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury,
            followUpId: "q_ter_1"
          },
          {
            id: "a_s1_2",
            text: "The spinner's randomness is bounded by commodity bands; suppliers get a pre-spin forecast cone and can hedge with micro-futures. Shelf tags update digitally, not by exhausted sticker brigades.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Statistical bounds lack warmth for stressed workers."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Model talk exposes us if variance widens suddenly."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "We can message order while numbers stay abstract."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "We've pre-positioned buffer stock for baby basics, common meds, and pantry staples, and we cover costs from mid-cycle swings. Shoppers should see steady aisles even when the wheel does a cheeky samba.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_3: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Optimism buys time but not pallets or drivers."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Consolation without teeth risks fiscal backlash."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Lower anxiety helps prevent flash-mob behavior."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Claims of empty shelves are largely cosplay, with a few influencers staging 'apocalypse aisles.' The actual fill-rate data sit within seasonal norms despite the monthly remix.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Dismissing complaints fuels the chaos narrative."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Minimizing shortages weakens our credibility."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Blowback from shoppers could strain patrols."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_2",
        text: "Security chiefs warn of coupon mobs and barcode smuggling across districts; is safety driving policy, or just a panic siren with a markdown?",
        answers: [
          {
            id: "a_s2_1",
            text: "Public safety is boring until it isn't. We're not auditing algebra; we're preventing stampedes, scanner-skimming rings, and trunkloads of underpriced soap. Policy follows safety because ambulances aren't coupons.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Safety-first tone sidelines the economic victory."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Security framing can spook markets and vendors."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear risk talk supports prevention and calm."
                }
              }
            },
            followUpId: "q_ter_2"
          },
          {
            id: "a_s2_2",
            text: "Interagency teams track bulk-buy anomalies and cross-district arbitrage flows. Purchase caps trigger ID checks, and heat maps go to local chiefs to preempt flash-raids before they trend.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process detail blunts urgency but signals control."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Credible monitoring lifts faith in our guardrails."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Audits may invite criticism if arrests spike."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Let's not romanticize the old sticker-gun cartel. The Shuffle breaks hoarding games and forces lazy monopolists to hustle. Disorderly profit-taking just lost its reserved table.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.StrongPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Swagger plays well to supporters but risks blame."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Taunting critics invites scrutiny of our code."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissive tone complicates joint operations."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "No one's getting cuffed for clipping coupons. Guardrails target organized exploitation, not grandma's list, and stores get panic-button support lines to de-escalate when crowds get spicy.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_3: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Humane framing earns points during tense weeks."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft promises can bind us if fraud surges later."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Assurance helps keep lines orderly and polite."
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
        text: "Your 'quiet corridor' and spin-bands seem oddly precise for a random ceremony; what stops code gremlins from spiking essentials the moment confetti hits?",
        answers: [
          {
            id: "a_t1_1",
            text: "Bands have hard ceilings for essentials, audited by the Comptroller of Novelty and mirrored offline. If the spinner hiccups, failsafes roll back to the prior band rather than sudden-death roulette.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Competence note eases fears but admits constraints."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Independent audits validate our safety bands."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tight caps can shift crowds toward scarce aisles."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We've seen zero 'confetti spikes.' The only gremlin so far was a warehouse hamster named Slabs chewing a cable sleeve. Prices held steady; IT bought him a proper chew toy.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denial sounds brittle if glitches later surface."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overconfidence now could magnify future blame."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm tone may prevent panic at peak hours."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Consumers won't face surprise jumps at checkout. Alerts freeze point-of-sale prices instantly, and stores are auto-compensated, so glitches become back-office bedtime stories, not aisle drama.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_3: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Credit protection message calms middle earners."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Guarantees threaten to inflate hedging costs."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Consistency at checkout reduces confrontation risk."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We'll let the coders wrestle gremlins. Shoppers want milk, not mythologies, and the corridor delivers calm receipts while the geeks chase whatever is nibbling cables this week.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection reads as aloof while bugs may bite."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Passing the buck weakens our reform narrative."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Focus on shoppers over code aids street stability."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_2",
        text: "Does 'threat level BOGO' change staffing and crowd control, or just put a coupon on accountability when lines snake and tempers pop?",
        answers: [
          {
            id: "a_t2_1",
            text: "Labels guide the public, not the accountants. If the meter says BOGO, we surge greeters, stagger door counts, and park cruisers at hot spots. The slogan is goofy; the playbook isn't.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Talking labels over plans seems unserious now."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Operational vagueness spreads vendor anxiety."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Public guidance aids compliance during surges."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "It triggers staggered hours, mobile crowd teams, and a hotline that routes to humans, not a beeping maze. Retail partners get scripts and extra scanners to outrun rumor-driven swells.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Action plan projects competence amid turbulence."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Structured staffing reinforces our constraints."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "More officers on rotations ease mall hotspots."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "We aim for calm weekends, not tactical Tuesdays. Families should shop as usual while we handle the queuing choreography behind the curtain with the least spectacle possible.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_3: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Warm tone helps, but results will matter fast."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comfort talk risks dulling fiscal discipline."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Steady weekends reduce flare-ups near stores."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If accountability's on sale, check the receipt: public dashboards with response times and incident counts. Price our performance in daylight and judge the markdowns yourself.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.StrongPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Aggressive posture can backfire under scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Confrontational tone invites budget oversight."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Bluntness may deter theft but rile peaceful crowds."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
