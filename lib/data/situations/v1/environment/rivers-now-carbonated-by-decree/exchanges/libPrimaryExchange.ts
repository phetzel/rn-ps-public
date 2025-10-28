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
      text: "The Fizzy Rivers pilot bubbles public waterways and sells foam slots to startups; anglers pay fees. Who asked for this, and how isn’t it privatization?",
      answers: [
        {
          id: "r1a1",
          text: "We're carbonating opportunity, not confiscating rivers. If anglers fear bubbles, they'll find serenity in the Quiet Puddles while youth launch jobs that actually float.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.MajorPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.MajorNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Framing this as opportunity reassures growth-minded voters."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Unclear pricing signals unsettle bond and bait markets alike."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Downplays patrols, risking perception of lax river oversight."
              }
            }
          }
        },
        {
          id: "r1a2",
          text: "Markets like predictable bubbles. We'll price fizz in transparent tiers, publish a foam schedule, keep rights nonexclusive, and reinvest revenue into ramps, docks, and access.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.MajorPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "This sounds technocratic and risks alienating anglers."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Transparent fizz pricing aligns with market stability goals."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Fees talk ignores safety posture the public expects."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "r1a3",
          text: "No, fizzy water won't summon hostile submarines or feral soda whirlpools. We've got anti-foam patrols, cupholder life vests, and zero plans to militarize your creeks.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Oversecurity messaging reads dismissive of civil worries."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Safety emphasis doesn’t address fee predictability concerns."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Directly answers security myths with practical safeguards."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "r1a4",
          text: "Let's not pretend a pilot is a hostile takeover. We'll listen to anglers at open Fizz Feedback nights, and no one is being charged for merely standing near a river.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Deflection fuels privatization fears among river towns."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Vague answers can spook investors considering RiverPOP."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Light tone calms hysteria but may seem unserious on safety."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "On ownership and fees: who owns the bubbles, where do payments go, and what leverage do river neighbors have before their shoreline turns into a soda meter?",
        answers: [
          {
            id: "s1a1",
            text: "All fees flow into a River Access Fund audited quarterly. Bubble rights are nonexclusive, anglers get permit rebates, and our dashboard shows forecasts, prices, and payouts by reach.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting audits helps but fee pain still dominates headlines."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Earmarked fund and audits bolster fiscal credibility and trust."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Funding clarity is fine, but patrol readiness remains key."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "s1a2",
            text: "A public good isn't sacred just because it's flat. Fizz can fund cleanup, and any startup that profits must cut community dividends before cashing out their foam.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Bold defense of policy signals resolve and job focus."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric risks volatility in bond pricing expectations."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Challenge tone sidelines safety assurances communities seek."
                }
              }
            }
          },
          {
            id: "s1a3",
            text: "We capped dock surcharges and banned shoreline tolling for ordinary use. Vendors must provide free cupholder vests and post plain-English fee signs at every launch.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Caps help, yet privatization fears still simmer publicly."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Caps limit revenue flexibility and bond coverage ratios."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear limits reduce conflict points for field patrols."
                }
              }
            }
          },
          {
            id: "s1a4",
            text: "Rollout pace beat our outreach oars. We should've formed river councils first, so we're doing that now and pausing new fizzy zones until they've weighed in.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Owning rollout missteps invites blame and legal scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting haste suggests governance risk to markets."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Accountability can rebuild compliance with patrol directives."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Safety and civil liberties: what stops carbonated channels from spawning whirlpools, overzealous patrols, or surveillance-by-seltzer that chills fishing and speech?",
        answers: [
          {
            id: "s2a1",
            text: "There is no surveillance-by-seltzer plan. Patrols check pressure valves, not picnic coolers, and authority is pinned to the Fizzy Rivers Act with body cams on by default.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial risks credibility if incidents later emerge."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Security-first stance can chill local commerce and fees."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm denial reinforces lawful, narrow enforcement posture."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "s2a2",
            text: "Safety drills are scheduled, locks are retrofitted, and emergency de-fizz is a literal big red button. Fish are not carbonated, and yes, we have a rogue foam hotline.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Promising drills sounds bureaucratic and cautious on rights."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Structured safety reduces disruption costs for operators."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overtraining rhetoric hints at heavy presence on rivers."
                }
              }
            }
          },
          {
            id: "s2a3",
            text: "We published the rulebook: fizz zones, horn protocols, and foam-out windows for paddlers. Violations mean fines for reckless foaming, not criminal records for rowing.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Publishing rules projects competence and transparency."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear protocols stabilize fees and insurance assumptions."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Detailed zones may be read as expanding surveillance."
                }
              }
            }
          },
          {
            id: "s2a4",
            text: "Let’s not mythologize a bubble kraken. Our job is to manage carbonation without drama and get everyone home dry, not audition for a catastrophe miniseries.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Snarky tone can seem dismissive of civil liberties debate."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection heightens uncertainty around compliance costs."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calm message helps defuse exaggerated threat narratives."
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
        text: "Treasury’s Foam Reserve sets bubble bands and sells fizz futures; how can the public audit pricing, and what recourse exists if fee spikes soak locals?",
        answers: [
          {
            id: "t1a1",
            text: "An independent auditor will publish model code and data. Monthly hearings, refund triggers pegged to wage indexes, and a public docket let residents dispute fees and win credits.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process talk lacks empathy for locals facing fee spikes."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Independent audits and open models reduce fraud risk."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Pricing focus leaves safety messaging underexplained."
                }
              }
            }
          },
          {
            id: "t1a2",
            text: "Predictable foam is a feature, not a conspiracy. Stable fizz attracts investment that pays for free public docks and rinses decades of sludge politics.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Firm stance appeals to growth and youth job constituencies."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Downplaying spikes unsettles hedging and bond buyers."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive tone distracts from patrol accountability."
                }
              }
            }
          },
          {
            id: "t1a3",
            text: "We've hard-capped shoreline surcharges, exempted low-income anglers, and scheduled fee holidays during spawning so traditions and tackle budgets both survive.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Exemptions help, but fairness doubts persist among anglers."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Caps constrain reserve flexibility during volatility."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Relief measures ease tension during patrol interactions."
                }
              }
            }
          },
          {
            id: "t1a4",
            text: "No sweetheart bubble bands or backroom foam. The formula, parameters, and bidder lists are published before auctions, not stitched together in a riverside speakeasy.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard denial invites skepticism without data to match it."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances without proof can dent market confidence."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear rejection of favoritism supports equal enforcement."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Anti-foam patrols got new skiffs and drones; what safeguards prevent cooler searches, protest crackdowns, or any 'no-sip' lists aimed at critics on the water?",
        answers: [
          {
            id: "t2a1",
            text: "There is no 'no-sip' list, and we require warrants for cooler searches. Lawful protest is protected on the banks and the barge, with discipline for any overreach.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Categorical denial may backfire if later errors surface."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strict warrants could slow operations and raise costs."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Due process message strengthens trust in patrol conduct."
                }
              }
            }
          },
          {
            id: "t2a2",
            text: "Every stop is logged with location, reason, and duration, and a civilian aquatic board reviews footage quarterly. Records auto-release after 30 days unless privacy laws bar it.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Concrete logging norms signal transparency and control."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Auditable stops reduce liability and insurance expenses."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Detailed logs may be seen as second-guessing officers."
                }
              }
            }
          },
          {
            id: "t2a3",
            text: "Training centers on de-escalation and anglers’ rights, and we measure success by fewer stops, not more citations. The safest patrol is the one waving you on.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Training talk sounds reactive and invites more scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Rights-centered training lowers risk of costly disputes."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Emphasis on retraining implies prior overreach by units."
                }
              }
            }
          },
          {
            id: "t2a4",
            text: "Early drills sloshed into clumsy. We've halted random checks, updated guidance with civil-liberty advocates, and added community observers on every fizz route.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting mistakes shows honesty but fuels critics’ cases."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Halting actions signals uncertainty in program execution."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Course correction demonstrates responsive command culture."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
