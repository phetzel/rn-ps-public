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
      id: "q_root",
      text: "If seasons are auctioned as time-limited licenses, what shifts first—planting, tourism, or school calendars—and how would emergency swaps actually work?",
      answers: [
        {
          id: "a_root_1",
          text: "We’re not letting a commodities pit boss spring; people are. The plan sets public-first calendars and forces markets to fit the weather, not the other way around.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            autumn_spice: OutcomeModifierWeight.StrongPositive,
            groundhog_marshals: OutcomeModifierWeight.SlightPositive,
            august_46: OutcomeModifierWeight.SlightNegative,
            noa_spring: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "A strong challenge signals control and rallies anxious audiences."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rhetoric without math spooks markets and weakens price discipline."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Bluster risks confusion during alerts and swap coordination."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Overpromising invites suits that complicate our legal footing."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Treasury will run a boring, visible ledger with narrow bands and circuit breakers. You’ll see price, volume, and who holds what window so speculation can’t outrun daylight.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            autumn_spice: OutcomeModifierWeight.SlightNegative,
            groundhog_marshals: OutcomeModifierWeight.StrongNegative,
            august_46: OutcomeModifierWeight.StrongPositive,
            noa_spring: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Detail-first tone mutes the spotlight on my leadership posture."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Transparent ledgers stabilize bids and deter cornering behavior."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Operationally neutral; it neither helps nor hurts alert readiness."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Overly rigid templates can box us in before courts weigh nuance."
              }
            }
          }
        },
        {
          id: "a_root_3",
          text: "Emergency swaps are pre-scripted: 15-minute windows, multilingual alerts, and backup drizzle. If a storm misbehaves, we downgrade impact zones and reroute traffic calmly.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            autumn_spice: OutcomeModifierWeight.StrongNegative,
            groundhog_marshals: OutcomeModifierWeight.StrongPositive,
            august_46: OutcomeModifierWeight.StrongNegative,
            noa_spring: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Overreassurance can read as glib if storms misbehave on camera."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Promises of frictionless swaps can obscure cost signals we need."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear 15‑minute playbooks boost trust in real-time coordination."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "If swaps look arbitrary, plaintiffs will allege unequal treatment."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_4",
          text: "Owning calendar slices is legally odd; we admit it. Our filings seek clear limits on transfer rights, and we’ll ask courts to bless guardrails before anyone sues the solstice.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            autumn_spice: OutcomeModifierWeight.SlightPositive,
            groundhog_marshals: OutcomeModifierWeight.SlightNegative,
            august_46: OutcomeModifierWeight.SlightPositive,
            noa_spring: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Admitting weirdness dents confidence in the overall initiative."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal caveats can slow funding flows and suppress participation."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hesitation narrative erodes compliance during fast swaps."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Candor on precedents strengthens credibility before skeptical courts."
              }
            }
          },
          followUpId: "q_sec2"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Walk us through an emergency season swap: who authorizes it, how airports get alerts in time, and how you respond if a blizzard refuses orders?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Authorization sits in a joint cell with weather ops; the button isn’t lonely. Alerts hit phones, radios, and irrigation timers, then we stage schools and farms on a clean, shared calendar.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.SlightNegative,
              groundhog_marshals: OutcomeModifierWeight.StrongPositive,
              august_46: OutcomeModifierWeight.StrongNegative,
              noa_spring: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Sharing command space projects steadiness under pressure."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Multi-agency cells can blur fiscal accountability and costs."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Integrated ops shorten the path from alert to action."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Blended authorities raise standing and delegation challenges."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "We test swap drills quarterly, measure false alarms, and publish after-action notes. The thresholds are data-driven: heat index, soil moisture, grid load, and hospital surge.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.StrongPositive,
              groundhog_marshals: OutcomeModifierWeight.SlightNegative,
              august_46: OutcomeModifierWeight.SlightPositive,
              noa_spring: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process talk rarely moves the public needle in a crisis."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Metrics and drills curb speculation and improve pricing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Useful background; neutral effect on field deployments."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Publishing thresholds may bind us in unforeseen edge cases."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "If a blizzard won’t cooperate, it will join a long line of witnesses ignoring memos. We still sand the roads and feed the plows before the snow reads the brief.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.StrongNegative,
              groundhog_marshals: OutcomeModifierWeight.SlightPositive,
              august_46: OutcomeModifierWeight.StrongPositive,
              noa_spring: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Snark risks seeming unserious when travel plans are at stake."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes invite volatility if traders smell uncertainty."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Humor can muddle instructions during time-critical alerts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Levity softens liability by signaling limits with modesty."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "We’re not toggling seasons like a light switch on a whim. The swap is rare, constrained, and cannot relocate winter to your cousin’s wedding just because the band is booked.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.SlightPositive,
              groundhog_marshals: OutcomeModifierWeight.StrongNegative,
              august_46: OutcomeModifierWeight.SlightNegative,
              noa_spring: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard denial risks clips that age badly after anomalies."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Absolutes in markets often backfire during stress events."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid phrasing can confuse operators when conditions shift."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Narrow claims reduce exposure if plaintiffs allege overreach."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Where might courts draw the line on climate property—could towns void sold summer, can buyers sublet solstice, or will judges rubber-stamp coupons?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Courts may split sticks in this seasonal bundle. Expect limits on exclusivity, mandatory public access windows, and bans on waivers that muzzle emergency powers.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.SlightPositive,
              groundhog_marshals: OutcomeModifierWeight.StrongNegative,
              august_46: OutcomeModifierWeight.StrongPositive,
              noa_spring: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Caution helps transparency but weakens momentum framing."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Complexity messaging slows capital and onboarding."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity can delay local partners prepping for swaps."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning the oddities builds trust with judges and bar."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "We’re drafting templates that assume judicial skepticism: disclosure, clawbacks, and anti-hoarding clauses. If markets misbehave, we have authority to pause and audit.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.StrongNegative,
              groundhog_marshals: OutcomeModifierWeight.SlightPositive,
              august_46: OutcomeModifierWeight.SlightNegative,
              noa_spring: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical drafting is solid but lacks emotive leadership."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Skeptic-proof terms reduce games and smooth auctions."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Contract language has little effect on field operations."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overly prescriptive forms can hamstring case strategy."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_3",
            text: "If someone tries to privatize noon, we’ll meet them at high noon. The public owns time’s sidewalks, and we’ll defend that with filings sharp enough to shave a calendar.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.StrongPositive,
              groundhog_marshals: OutcomeModifierWeight.SlightNegative,
              august_46: OutcomeModifierWeight.StrongNegative,
              noa_spring: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Drawing a hard line shows resolve and sets guardrails."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive tone can chill benign participation in bids."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard lines may invite protests that strain response."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Broad threats risk appearing arbitrary before the bench."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Anyone promising a lifetime summer should also sell unicorn sunscreen. Courts dislike novelty for novelty’s sake, and our approach is novelty with instructions.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.SlightNegative,
              groundhog_marshals: OutcomeModifierWeight.StrongPositive,
              august_46: OutcomeModifierWeight.SlightPositive,
              noa_spring: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Humor eases tension but can feel flippant on rights."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Quips muddy valuation signals and risk mispricing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Lightness reduces panic and helps community compliance."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Casual phrasing can be cited to claim unclear policy."
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
        text: "If a swap moves spring break to February or nudges harvest later, how should schools, farms, and tour operators sync without burning schedules?",
        answers: [
          {
            id: "a_ter1_1",
            text: "We’ll publish a national calendar API with local overrides, plus template MOUs for buses, ports, and festivals. Everyone sees the same clock and can plan contingencies.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.StrongPositive,
              groundhog_marshals: OutcomeModifierWeight.SlightNegative,
              august_46: OutcomeModifierWeight.SlightPositive,
              noa_spring: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "APIs sound small-bore and can undercut the bold story."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Standardized data lowers costs and improves auditability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Feeds are handy but not decisive for field readiness."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Interfaces alone do not cure due-process scheduling claims."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "Think storm-day playbooks, but smarter: backup menus for lunches, staggered shifts, and teacher leave banks. We’ve budgeted to cushion the awkward weeks.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.SlightNegative,
              groundhog_marshals: OutcomeModifierWeight.StrongPositive,
              august_46: OutcomeModifierWeight.StrongNegative,
              noa_spring: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Operational promises can set traps if vendors slip."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Backup credit lines are costs if uptake is uneven."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear menus and drills make communities resilient."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Contingency tiers must still meet equity obligations."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "If spring break lands early, at least the mascot can wear a scarf. The point is coordination beats vibes, and our dashboards beat group chats.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.StrongNegative,
              groundhog_marshals: OutcomeModifierWeight.SlightPositive,
              august_46: OutcomeModifierWeight.StrongPositive,
              noa_spring: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes lighten mood but risk trivializing real impacts."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Levity during pricing windows can increase noise."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Playfulness may muddle who triggers which plan."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A lighter tone can temper damages in communication suits."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "No, we’re not dictating prom dates. Local boards and growers set specifics; we just provide the rails and the schedule lights.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.SlightPositive,
              groundhog_marshals: OutcomeModifierWeight.StrongNegative,
              august_46: OutcomeModifierWeight.SlightNegative,
              noa_spring: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denial posture can read as ducking coordination duty."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hands-off stance invites fragmentation and arbitrage."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "If locals drift, response alignment gets harder."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Respecting local control reduces preemption challenges."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "What guardrails stop hedge barns from cornering Autumn 2031—position caps, real-time audits, or a pumpkin-futures purge if prices sprint past sanity?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Position limits scale by size; reporting is T+0 with public dashboards; and circuit breakers freeze thin books. We also auction in small tranches to starve corner attempts.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.StrongPositive,
              groundhog_marshals: OutcomeModifierWeight.StrongNegative,
              august_46: OutcomeModifierWeight.SlightPositive,
              noa_spring: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Guardrails talk is solid but not especially inspiring."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "T+0 reporting and caps directly deter manipulation."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Market plumbing has limited impact on alert cadence."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strong rules must still survive administrative review."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "No secret carve-outs. If you hoard October, expect forced deconcentration and a bill itemized in leaves.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.SlightNegative,
              groundhog_marshals: OutcomeModifierWeight.SlightPositive,
              august_46: OutcomeModifierWeight.StrongNegative,
              noa_spring: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Threat-first tone can seem defensive if tests falter."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Brinkmanship with funds may spook legitimate hedgers."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Crackdowns can divert resources from swap readiness."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear enforcement posture helps in subsequent litigation."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "Speculators can ride along, not drive. Try to steer the season and you’ll meet enforcement wearing reflective vests and holding very sharp spreadsheets.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.SlightPositive,
              groundhog_marshals: OutcomeModifierWeight.SlightNegative,
              august_46: OutcomeModifierWeight.StrongPositive,
              noa_spring: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Setting roles asserts control and channels public anger."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overt hostility risks liquidity loss at key auctions."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontation can trigger protests that strain ops."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Broad warnings could be read as content-based targeting."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "Households get priority access windows and price caps for essential days like school starts. No one is paying surge pricing to buy Halloween.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              autumn_spice: OutcomeModifierWeight.StrongNegative,
              groundhog_marshals: OutcomeModifierWeight.StrongPositive,
              august_46: OutcomeModifierWeight.SlightNegative,
              noa_spring: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Retail-first framing is popular but may overpromise."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Price caps risk distortions and secondary shortages."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Priority windows for families ease compliance stress."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Consumer protections must align with statutory limits."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
