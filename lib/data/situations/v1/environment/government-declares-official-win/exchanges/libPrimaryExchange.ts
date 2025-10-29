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
      text: "By anointing one 'official wind,' isn't Federal Atmospherics paywalling weather, squeezing farms and festivals, while a breeze-broker class invoices the sky?",
      answers: [
        {
          id: "q_root_a1",
          text: "Naming a breeze doesn't make it charge rent, and we're not escalating a turf war with the sky. His hair remains under diplomatic immunity; let's not confuse scheduling with a paywall.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral, // 0
            o2: OutcomeModifierWeight.SlightNegative, // -4
            o3: OutcomeModifierWeight.Neutral, // 0
            o4: OutcomeModifierWeight.SlightPositive // +4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "A light touch keeps tempers cool and avoids escalation."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Unpriced gusts unsettle markets if we shrug at schedules."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ambiguity invites loopholes for cross-border wind cartels."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Tone down alarm; most people simply need clear guidance."
              }
            }
          }
        },
        {
          id: "q_root_a2",
          text: "Markets prefer predictable air. Posting a wind schedule reduces surprise gust surcharges, expands calm credits for co-ops, and sets transparent fee caps so festivals and farms aren't shaken down.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Overpromising on airflow invites blame when weather shifts."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Predictable timing can stabilize pricing and contracts."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Tidy timetables alone won't block illicit breeze routes."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Scheduling air does not equal safer lungs without context."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "q_root_a3",
          text: "Monopoly breezes are a vulnerability. Unlicensed gusts drift across counties; we'll contest exclusivity, require draft visas at borders, and block hostile fronts from laundering their puff.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "We should not militarize metaphors or spook communities."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Security framing can spook investors and jam capital flows."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Challenging monopolies reduces cross-border breeze abuse."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Security posture can heighten stress and health complaints."
              }
            }
          }
        },
        {
          id: "q_root_a4",
          text: "Most winds are placebo with excellent branding. We'll issue ear scarves, kite-shaped inhalers, and a calm-hour hotline so farmers and crews can breathe without fearing premium gust tiers.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Jokes help, but we must still address real red tape pain."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Minimizing costs does not erase volatility for small firms."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Complacency leaves gaps for bad actors to exploit permits."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Reassurance and simple tools can cut anxiety and complaints."
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
        text: "Permits and planting now orbit the official wind's timetable; how are small farmers meant to harvest on time without gust fees, and who skims the still air?",
        answers: [
          {
            id: "q_sec1_a1",
            text: "Authorized by Treasury: We'll meter gusts with a public rate card, waive fees for co-ops under a calm threshold, and post real-time wind credits. A futures market will smooth harvest timing.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Farmers need fewer hoops, not a new fee for fresh air."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "A calibrated meter can protect co-ops from price shocks."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Revenue schemes must not morph into enforcement by fee."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity on timing can reduce stress spikes during harvest."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury,
            followUpId: "q_ter1"
          },
          {
            id: "q_sec1_a2",
            text: "We challenge any breeze baron who taxes a tractor at dusk. Atmospheric racketeering gets prosecuted, and yes, we'll confiscate wind chimes if they're running a protection racket.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Cracking down on small operators risks backlash and errors."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overzealous challenges can dent rural credit confidence."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Challenging toll gusts protects local movement and rights."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Escalation rhetoric can fuel anxiety in farm towns."
                }
              }
            }
          },
          {
            id: "q_sec1_a3",
            text: "Farm stress shouldn't hinge on a barometer update. We'll fund 'harvest calm windows,' send extension crews with ear scarves, and keep clinics focused on backs and budgets, not boogeyman gusts.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "People want fewer acronyms, not new wellness buzzwords."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft talk without tools won't steady planting finances."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance must not weaken guardrails against fraud."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Support kits and calm messaging ease seasonal stress."
                }
              }
            }
          },
          {
            id: "q_sec1_a4",
            text: "Rollout hiccups made the breeze look like a tollbooth. We're collapsing permits to one page, backdating calm credits, and cutting any fee that tries to invoice the sky for existing.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "We own the rollout issues and will fix the chokepoints fast."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Admitting friction lets us retune fees to protect margins."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Gaps during rollout can be exploited by permit scammers."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confusion heightened stress; updates must be simple and clear."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Festival crews say stages can't go up until the sanctioned breeze clocks in; do safety rules hinge on barometric bureaucracy, and who keeps the ear scarf lobby honest?",
        answers: [
          {
            id: "q_sec2_a1",
            text: "Safety won't hinge on barometric paperwork. We'll treat ear-scarf marketing as arts and crafts, give clear guidance to riggers, and certify danced-in stages regardless of wind's mood.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Safety should be practical, not hostage to paperwork."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delays inflate costs when crews idle under rigid slots."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rules must prevent grift without stalling community events."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear guidance reduces panic and improves crowd wellbeing."
                }
              }
            }
          },
          {
            id: "q_sec2_a2",
            text: "We challenge the pop-up 'priority gust lane' grift. We'll police counterfeit permits and build a breeze no-fly list for fireworks that drift onto grandma's gazebo.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "We should not turn festivals into checkpoints and queues."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Priority lanes skew access and distort local budgets."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Challenging grifts protects safety without stifling culture."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Over-policing crowds can spike anxiety and heat risk."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "q_sec2_a3",
            text: "Nobody's strapping ankle monitors on zephyrs. Festivals can throw confetti at nature's pace, provided it's biodegradable and not legally a kite.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Let's keep this light and avoid making red tape the headliner."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Flexible permits cut losses from weather variability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too casual a tone risks signaling loopholes to bad actors."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection can leave crews unsure about safety basics."
                }
              }
            }
          },
          {
            id: "q_sec2_a4",
            text: "Permits now show a recommended breeze window, not a tollgate. We're publishing open APIs so crews can time rigging without tipping a wind concierge.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Explain the rule plainly and let crews plan without drama."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clear notices help vendors price labor and rentals fairly."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Info alone needs checks to deter counterfeit permits."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Predictable timing lowers stress for staff and attendees."
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
        text: "On revenue, will the government tax rogue drafts, sell gust futures, or rebate calm to co-ops, and how do you stop cousins of the breeze office from cornering airflow?",
        answers: [
          {
            id: "q_ter1_a1",
            text: "No tax on rogue drafts under farm-sized thresholds; gust futures trade on a public board; calm rebates go to co-ops first. Anti-nepotism rules and blind auctions keep cousins out of the jet stream.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "We should avoid taxing nature where neighbors just cope."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear thresholds and rebates stabilize co-op cash flow."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Revenue design must not invite smuggling of permits."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Stress drops when rules spare small farms by default."
                }
              }
            }
          },
          {
            id: "q_ter1_a2",
            text: "There's no secret breeze family running the till. If someone tries, the only corner they'll hold is the one they sweep after ethics is done with them.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denying favoritism means proving audits and daylight exist."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flat denials without data can rattle commodity markets."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Opaque ties risk security blind spots in permitting."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency eases the health toll of rumor and distrust."
                }
              }
            }
          },
          {
            id: "q_ter1_a3",
            text: "We're not monetizing air, just asking it to RSVP. Breathing remains free, and the app doesn't ask for a tip unless you insist on tipping the wind.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Let's not overdramatize; basic coordination can help."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Deflection won't calm traders if rules feel improvisational."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague talk makes enforcement targets harder to set."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissiveness can worsen anxiety around new systems."
                }
              }
            }
          },
          {
            id: "q_ter1_a4",
            text: "The word 'futures' spooks people, fair. We'll call them 'maybe breezies,' cap fees, and make sure no one sells a hurricane just to picnic on a Tuesday.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Plain language beats jargon when the public hears 'new fees.'"
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Renaming without reform won't steady hedging behavior."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning missteps helps reset enforcement with communities."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clarity matters; wordplay alone does not reduce stress."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Enforcement-wise, what does a breeze no-fly list look like, and will community parades need draft visas, kite inspections, and ankle monitors for unruly zephyrs?",
        answers: [
          {
            id: "q_ter2_a1",
            text: "We target contraband gusts, not citizens. The list flags pyrotechnic drift and cargo kites; parades get draft visas automatically if the tuba line can walk straight.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Target conduct, not crowds; keep parades moving and safe."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Focused rules limit costs from needless permit churn."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Challenge abuse while keeping the list tightly scoped."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear boundaries reduce stress for volunteers and families."
                }
              }
            }
          },
          {
            id: "q_ter2_a2",
            text: "No one's being diagnosed with Chronic Windfulness. If your hat stays on, march on; if not, borrow an ear scarf and proceed with joy.",
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
                reaction: "We will not medicalize wind or surveil neighborhood fun."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Heavy-handed checks slow commerce around local events."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too much leniency can invite organized permit abuse."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reassurance and simple checks keep communities calm."
                }
              }
            }
          },
          {
            id: "q_ter2_a3",
            text: "Permits add a checkbox for wind-dependent antics so crews can plan margins. No ankle monitors-just QR codes on kites so we can return escape artists politely.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Explain the form; don't turn it into a parade buzzkill."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear info reduces surprise fees and keeps budgets steady."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Informing is fine, but we still need guardrails on use."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Paperwork alone won't address crowd health concerns."
                }
              }
            }
          },
          {
            id: "q_ter2_a4",
            text: "There is no ear-scarf lobby writing rules. The only lobbyist we met was a tumbleweed, and it refused to register.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denial without proof breeds more suspicion, not less."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Transparency beats rumor in protecting local vendors."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A firm rebuttal is fine, but back it with audits soon."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "People relax when denials come with clear safety data."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
