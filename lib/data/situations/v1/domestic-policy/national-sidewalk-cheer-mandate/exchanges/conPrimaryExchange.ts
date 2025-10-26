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
      text: "Your cheer mandate adds ‘applause lanes,’ fines for quiet shops, and beefier escorts. Who pays when morale traffic chokes real work and the city’s budget?",
      answers: [
        {
          id: "a_r1",
          text: "I dare every block to out‑cheer the parade float of democracy. When sidewalks roar, even potholes flinch into repair, and morale stops needing a motorcade to move.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "A bold push; roaring sidewalks signal civic spirit and shared purpose."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Compulsion risks constitutional bruises and invites immediate injunctions."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Operational impact here is neutral given staggered events and guidance."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Budget exposure is limited if leasing holds; monitoring remains prudent."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Compelled ovations wobble in court like gelatin evidence. We’re retooling this as voluntary pep with time‑place rules, capped decibels, and no oaths, so speech rights stay sturdier than confetti.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Framing weakness invites ridicule and undermines the policy’s momentum."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Acknowledging limits strengthens defensibility and narrows litigation risk."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal wobble complicates field coordination and sows uncertainty."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Refunds and court delays dilute projected revenues and raise admin costs."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "Security won’t become a marching‑band traffic jam. Applause windows, wrist metronomes, and clear routes mean escorts shrink, not swell, while the noise stays orderly enough to hear instructions.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Downplaying pain can look glib if gridlock or fines spike in practice."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurances do not cure compelled‑speech concerns likely raised in court."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear timing and metronomes reduce friction and keep routes passable."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Extra coordination hours add soft costs that budgets must absorb."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Costs stay boring: fines capped, meters leased, no gold‑plated cymbals. Our model shows coffee‑money net impact, and any waste gets flagged with very large red foam fingers before cash goes out.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Minimizing costs may seem evasive against visible meters and marshals."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Caps do not answer the core First Amendment exposure critics allege."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Lean gear helps, but deployment still adds moving parts to streets."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Thrifty leasing and caps restrain liabilities and stabilize outlays."
              }
            }
          },
          followUpId: "q_sec1"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Break down the price tag: applause meters, morale marshals, lane paint, and appeals staff. Does the math beat the PR bill when receipts and fines collide?",
        answers: [
          {
            id: "a_s1_1",
            text: "Leasing beats buying; meters are shared across events, and marshals are seasonal hires. The paint is standard, not glitter. Appeals staff pool with parking adjudicators to keep overhead thin.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Practical savings narrative signals control and pragmatism to voters."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Even cheap meters face scrutiny if tied to compelled applause."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Shared gear can bottleneck during overlapping security windows."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Leasing spreads costs and preserves liquidity under revenue uncertainty."
                }
              }
            }
          },
          {
            id: "a_s1_2",
            text: "As authorized by Treasury: projected gross fines 8–10 million, compliance rebates 6–8 million, admin 1.5 million. Net is pocket lint, not a piggy bank, and we’ll publish monthly line items.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Leaning on fine revenue risks the image of policing for profit."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparent projections help calibrate guardrails and due‑process funding."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Revenue talk distracts from throughput and escort readiness."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overstated fines create fragile budgets vulnerable to variance."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury,
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_3",
            text: "If spreadsheets won parades, we’d throw calculators, not confetti. Let’s judge the policy by less disruption and safer routes, not whether a meter wears a cape.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection reads as evasive when critics demand receipts and audits."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vagueness weakens standing if challenges hinge on clear standards."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Lower expectations can buy setup time for smoother first deployments."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hand‑waving spooks bond desks and complicates procurement timing."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "No, we’re not minting morale money. There’s no slush for cymbals, stipends, or velvet ropes; anything that smells like pageantry pork gets axed before it hits requisitions.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm denial curbs runaway narratives and recenters message discipline."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Flat denials without detail invite discovery fights and credibility hits."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mixed signals create planning whiplash for field teams and partners."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "If paths are closed, budget math still needs back‑up documentation."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "On traffic and fines: how do ‘applause lanes’ avoid gridlock, and what stops inspectors ticketing bakeries mid‑rush for off‑beat claps?",
        answers: [
          {
            id: "a_s2_1",
            text: "Applause happens in timed bursts, not constant clamor. Inspectors prioritize safety and give warnings to busy shops; quotas are banned, and routes flex to keep deliveries and buses moving.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear timing shows command of details and care for daily commerce."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Schedules do not resolve speech compulsion claims likely to arise."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Burst windows and signal plans keep flows moving and lanes clear."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Staggering adds staffing edges that nibble at projected savings."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "Early on, some tickets will miss the beat. We’ll publish dash‑cam clips and toss bad ones, retrain over‑eager writers, and codify a grace period so commerce doesn’t eat chalk dust.",
            type: AnswerType.Admit,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting messy starts fuels critics arguing for repeal or delay."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Candor about errors supports fair process and targeted remediation."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ticket noise erodes public trust and complicates field discretion."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Early misfires shrink fine yields and lift appeals processing costs."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "If a city can’t clap and cross a street at once, it needs new choreography. We can celebrate and circulate; the hustle doesn’t pause because hands meet.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Confidence can rally supporters and frame the city as capable."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Bravado weakens posture if rights are trampled in the rush."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overconfidence risks thin staffing and missed choke points."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Optimism bias invites budget shortfalls when realities bite."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Fines scale with disruption, not volume. A bakery mid‑rush faces a warning and coaching, not a budget‑ending slip, and repeat issues trigger scheduling fixes, not a shakedown.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Technical assurances without proof may read as bureaucratic spin."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Scaling by disruption still implicates coercion and fairness gaps."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Complex formulas burden inspectors and slow curb operations."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Targeted penalties protect commerce while stabilizing revenue."
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
        text: "Appeals and small shops: will a quiet florist drown in paperwork, or is there a fast lane for warnings, waivers, and decibel misunderstandings?",
        answers: [
          {
            id: "a_t1_1",
            text: "First offense gets a written warning and a link to a 5‑minute primer. Appeals file online with a 48‑hour review, and micro‑shops can claim a space waiver if crowding makes clapping unsafe.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Grace periods humanize the rollout and blunt backlash from shops."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Warnings and links show good‑faith steps that courts often favor."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Leniency can invite crowding if compliance training lags field needs."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Warnings defer revenue and require outreach staff to implement."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We expect glitches—faulty meters, cranky neighbors, a kazoo incident. We’ll publish error stats weekly and auto‑void citations tied to bad data until devices prove reliable.",
            type: AnswerType.Admit,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Glitch talk validates critics and erodes confidence in execution."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Admitting flaws supports remedies and narrows legal exposure."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Faulty meters create on‑street confusion and incident risk."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Replacements and adjudication hours swell unplanned expenses."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "No, nobody’s building a roar registry. We don’t track faces or loyalty; just whether a block followed time windows, and even that data expires faster than a balloon arch.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blanket denial risks a credibility gap if data later contradicts."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denying records may clash with open‑government and due‑process aims."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Privacy stance can reduce community friction during events."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Policy rigidity limits fine tuning that could save money."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Meanwhile, the best appeal is prevention: post the window, tap the wrist‑beat, and save the big finale for plazas, not tight sidewalks where bouquets and bass drums collide.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection sounds glib while merchants want concrete safeguards."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Advice without standards weakens consistency before hearing officers."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague prevention tips shift burden without improving street flow."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Low‑cost signage and coaching may trim avoidable appeal volumes."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Emergency runs and freight: when applause lanes pop up, how do ambulances and delivery trucks thread through without becoming percussion for a quota?",
        answers: [
          {
            id: "a_t2_1",
            text: "Sirens preempt clapping. Metronomes buzz ‘hands down,’ marshals clear curb cuts, and lanes reopen like zippers; the fastest sound becomes silence so medics and freight roll.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Prioritizing ambulances projects competence and empathy under stress."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Override systems must still respect rights and documented protocols."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Preemption signals and drills keep lifesaving corridors open."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dedicated systems add upkeep beyond the headline equipment."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Windows avoid peak hospital transfers and freight slots, and routes dodge critical corridors. If congestion spikes, the window auto‑shifts, and the mandate pauses on incident command.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Scheduling around crises can sound detached from real‑world chaos."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Windows cannot excuse unequal impacts on small carriers."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Time boxes help a bit but fail during cascading incidents."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Staggered windows reduce overtime and limiter wear on gear."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "If we can’t cheer and clear a lane in the same breath, we don’t deserve a parade float. The standard is simple: life first, pageantry later, no debates on the curb.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Stakes‑framing can rally crews but risks sounding cavalier."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Rhetoric cannot substitute for enforceable, rights‑safe protocols."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hero talk pressures teams and may degrade disciplined routing."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Grandstanding hides true costs of escorts and detours."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "The nightmare of permanent gridlock is fiction. Lanes are temporary, narrow, and cancellable by a single radio call, not carved into stone with a baton.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blanket denial backfires if a single jam hits a viral camera."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity that lanes are temporary helps defend narrow tailoring."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances fall flat without visible drills and signage at scale."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal can delay contingency funds needed for surges."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
