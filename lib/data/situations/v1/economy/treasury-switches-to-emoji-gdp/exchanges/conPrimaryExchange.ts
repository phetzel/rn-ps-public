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
      text: "The Emoji Treasury plans to price GDP in emoji baskets, unions want emoji-indexed wages, and the Shield Department looks baffled. Why isn’t this sticker-book math a route",
      answers: [
        {
          id: "a_r1",
          text: "I admit I once pitched scratch-and-sniff currency; emojis are the calmer compromise. Numbers spook skittish traders, but this translates sentiment into signals without ditching fiscal discipline.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Owning the scratch-and-sniff push shows candor amid policy turbulence."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Smells and stickers in finance worry mission planners and protocols."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Concession signals uncertainty in models behind the emoji basket."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Under the hood, GDP still clears as numbers; the emoji basket is the dashboard layer. We’ll publish conversion bands, volatility collars, and a plain-English key so markets don’t chase sparkles.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technical framing helps, but markets hear gimmick before rigor."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Jargon without guardrails still leaves ops imagining comms confusion."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear layering of numbers under emojis reassures operational stability."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "The Shield Department salutes flags, not reaction GIFs; operational math stays strictly decimal. Procurement and readiness questions route to Treasury and Budget, not to submarine captains.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Passing the buck risks appearing evasive about market volatility."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Deflection aligns with our scope; keep operations insulated from emojis."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Puts pressure on us to deliver; expectation management becomes critical."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "This is a phased rollout with sandbox trading, not a confetti cannon. Pensions, mortgages, and paychecks get guardrails so no one wakes up paid in eggplants or thunderclouds by surprise.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Phasing and sandboxes project control and reduce panic narratives."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Testing language helps, yet cross-signal risks still demand mitigation."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Gradualism suits the basket; calibration can mature without shocks."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Walk us through the emoji-basket math: who sets sparkle rates, how are meme-economists certified, and what stops unions from turning the bread-loaf icon into runaway wage",
        answers: [
          {
            id: "a_s1_1",
            text: "Authorized by the Emoji Treasury: the basket rebalances hourly via a rules-based oracle and gets weekly audits by the Stats Guild. Wage indexation has caps, and any clause must cite the public conversion table.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Backing formal authority shows leadership, despite odd optics."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Top-down tweaks to GDP feel detached from field imperatives."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Authority alone won’t calm desks if methods seem toy-like."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury,
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "Certification lives with the Macro Signals Board; credentials require tedious math, not mere virality. Sparkle rates are damped with circuit breakers so a trending llama can’t goose factory wages.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Over-explaining risks sounding academic while unions escalate."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Certification talk ignores our operational interference worries."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparent standards boost trust and recruit serious expertise."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "No one is forcing firms to hire meme-economists; translation can be outsourced like payroll. The basket is public, and boring decimals remain available for anyone allergic to tiny faces.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denying mandates sounds dismissive of real hiring pressures."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Limiting scope reduces risk of stray symbols in our channels."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard denial may backfire if markets already adjust staffing."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Labor talks won’t become emoji ransom notes; indexation flows through a corridor with auto-stabilizers. If the bread loaf spikes, the spread narrows before it bleeds into paychecks.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Confident tone calms households and moderates wage expectations."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance without drills leaves readiness questions unresolved."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Measured indexing guidance can steady bargaining frameworks."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Defense looks rattled: will ships or subs misread the laugh-cry emoji as a distress beacon, and are you budgeting training so Shield crews won’t mistake a party hat for",
        answers: [
          {
            id: "a_s2_1",
            text: "Operational comms stay emoji-free; the Shield Department runs on coalition-style numerics and plain text. For anything finance-adjacent, Treasury leads, and we’ll route your concern to the right map people.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Handing it to Defense can read as ducking oversight."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Affirming our control of comms lanes shields mission integrity."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Pushes perception of buck-passing and weakens economic coherence."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "We’ve drawn a bright line: emojis live in economic dashboards, not targeting or distress channels. Training modules already remind crews that party hats mean parties, not missiles.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear boundaries project competence and lower crisis chatter."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Explicit separation of domains reduces cockpit ambiguity."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Economic limits may stifle needed flexibility during rollout."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Cross-agency filters strip pictograms from encrypted traffic, and navigational overlays are double-validated. If a stray icon appears, systems quarantine it and auto-start a review checklist.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Tech details can bore, yet they prove foresight and planning."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Filters help, but we still need drills against edge cases."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Interoperability protocols show diligence and systems thinking."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "If a submarine confuses a laugh-cry with SOS, the issue isn’t the GDP metric; it’s a vessel that needs new glasses. Professionals are expected to read the manual before the memes.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Tough talk risks blame if anything later goes wrong."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Calling out crews publicly can dampen morale and focus."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Accountability stance pressures vendors to meet specs on time."
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
        text: "When the sparkle index and bread-loaf density conflict, which wins, and who adjudicates the conversion before payrolls and bond auctions cascade into emoji slap-fights?",
        answers: [
          {
            id: "a_t1_1",
            text: "The tie-breaker is a stability rule that favors prior-period trend and basket neutrality. A three-member panel triggers it, and decisions post with timestamps plus a human-readable note.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rules-first language feels technocratic amid public confusion."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Stability bias may conflict with real-time operational needs."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Prioritizing prices supports smoother auctions and payrolls."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We’ll admit the model is new and can wobble at the edges; that’s why limits are tight and review is fast. If a heart-eyes face misprices bread, we recalibrate before it reaches tills.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning model wobble adds honesty, yet spooks some investors."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Uncertainty near bonds risks spillover into readiness funding."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admitting fragility can erode confidence in the new basket."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Bond desks see the number first and emojis second, so auctions price cleanly. Paychecks ride a glide path that smooths any emoji scuffle across multiple cycles.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Assuring primacy of numbers lowers chaos across desks."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear sequencing reduces chance of mission planning noise."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Relegating emojis may undercut the policy’s intended benefits."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "If there’s a debate over smileys versus carbs, that’s for the independent Index Board. Our metric is stability, not curating the nation’s mood board.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Offloading disputes reads like avoidance of core design issues."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "External adjudication offers neutrality for sensitive calls."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Split governance risks delays that jar payroll and auctions."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "What tests prove Shield systems won’t choke on emojis, and who signs off before rollout—will you publish red-team results and budget retraining if units flunk the mock-m",
        answers: [
          {
            id: "a_t2_1",
            text: "A pre-rollout gauntlet runs simulated traffic through comms, mapping, and logistics with randomized emoji injections. An independent test directorate signs off, and public summaries will be posted.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Testing talk still leaves voters wary of exotic failures."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Sim runs help, yet field conditions often break lab assumptions."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Quantified gauntlets demonstrate seriousness and reduce shocks."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "No emoji leaves the lab until it survives hostile testing, and any training gaps get funded from the modernization reserve. If a unit stumbles, we pause, fix, and then scale.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Strong standards language eases headlines and steadies nerves."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Hostile testing reduces accidental symbol crossfire in ops."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strict gates could slow innovation and rollout cadence."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "There’s no plan to plaster emojis onto field systems; that rumor is as sturdy as a wet sticker. The economic dashboard lives in a separate sandbox from anything that goes boom.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Over-denial risks looking naive if leaks show emoji drift."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "No-field-use stance protects comms discipline and safety."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid denials hamper coordination with private vendors."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We’re not turning soldiers into meme curators. If someone wants to litigate party hats on radar screens, bring data—not vibes—to the next oversight brief.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Toughness helps, but tone may antagonize labor and press."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Threatening retraining budgets signals readiness gaps to rivals."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Conditional funding enforces standards on contractors and tools."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
