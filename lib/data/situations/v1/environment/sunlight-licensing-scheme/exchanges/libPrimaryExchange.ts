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
      text: "Critics say 'sunlight licenses' turn dawn into a paywall, sending rays to rich bidders while small farms lose out. Who protects access, and why meter the sky?",
      answers: [
        {
          id: "a1",
          text: "Look, we're not paywalling hope; we're teaching dawn to behave. The President says domesticate that skittish alpaca of light—bid boldly or bring a bigger mirror. We'll tax glitter, not breakfast.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive, // +8
            o2: OutcomeModifierWeight.StrongNegative, // -8
            o3: OutcomeModifierWeight.SlightPositive, // +4
            o4: OutcomeModifierWeight.SlightNegative // -4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Challenging framing shows resolve to confront inequity head-on."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Signals revenue can be tuned without gutting rural access."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ambiguity may stoke local security rumors about glare drills."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Vague rights talk invites suits over access and discrimination."
              }
            }
          }
        },
        {
          id: "a2",
          text: "Photon auctions stabilize prices and fund rural rebates, barn-hat grants, and glare mitigation. Small lots are reserved for co-ops, with caps to curb hoarding and a watchdog to keep the sun from going private.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive, // +4
            o2: OutcomeModifierWeight.StrongPositive, // +8
            o3: OutcomeModifierWeight.MajorNegative, // -12
            o4: OutcomeModifierWeight.Neutral // 0
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Over-indexes on markets, underplays fairness and optics."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Strong case that auctions fund rebates and calm investors."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Could inflame fears of enforcement around installations."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal guardrails sound thin; exposure to injunctions rises."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "a3",
          text: "We are not weaponizing sunrise. No, there are no glare cannons, moth interrogations, or dawn checkpoints. Safety drills exist, but they're about grids and birds, and the sky geese really did volunteer for goggles.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative, // -4
            o2: OutcomeModifierWeight.SlightPositive, // +4
            o3: OutcomeModifierWeight.StrongPositive, // +8
            o4: OutcomeModifierWeight.StrongNegative // -8
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Denials alone won’t satisfy critics without safeguards."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Offers no fiscal path to equity or refunds if harms emerge."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear security reassurance tampers down weaponization myths."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Asserts intent but not remedies, inviting court tests."
              }
            }
          }
        },
        {
          id: "a4",
          text: "Candidly, no statute defines who owns a sunbeam or its shadow. We expect suits, from crops to clock-ringing roosters. We'll seek fast guidance from the courts and pause punitive fines until rules are clear.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative, // -8
            o2: OutcomeModifierWeight.SlightPositive, // +4
            o3: OutcomeModifierWeight.Neutral, // 0
            o4: OutcomeModifierWeight.SlightPositive // +4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Admitting gaps without remedies risks political blowback."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Uncertainty about revenues undermines auction confidence."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Openness on ambiguity may be spun as lax oversight."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Candid legal assessment builds credibility for staged fixes."
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
        text: "What guardrails ensure small farmers and low-income blocks aren’t priced into shadow while venture reflectors dominate the auctions?",
        answers: [
          {
            id: "a5",
            text: "We built equity into the bidding: reserved micro-lots, fee waivers for small farms, and a community shadow cap. If big reflectors crowd the field, we throttle them faster than a rooster hits snooze.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive, // +8
              o2: OutcomeModifierWeight.StrongNegative, // -8
              o3: OutcomeModifierWeight.SlightPositive, // +4
              o4: OutcomeModifierWeight.SlightNegative // -4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Promises without teeth read as spin to shadowed blocks."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Costs rise if carve-outs overcorrect and blunt price signals."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Targeted relief could reduce local tension and protests."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Access tiers and appeals help mitigate disparate impacts."
                }
              }
            }
          },
          {
            id: "a6",
            text: "The auction uses tiered caps, anti-hoarding algorithms, and rural rebates indexed to cloud cover. Low-income blocks get priority credits and a public corridor of unlicensed light from first glow to first bell.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative, // -8
              o2: OutcomeModifierWeight.StrongPositive, // +8
              o3: OutcomeModifierWeight.SlightNegative, // -4
              o4: OutcomeModifierWeight.SlightPositive // +4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Technocratic detail helps, but empathy still feels absent."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Design choices strongly protect competition and small bidders."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Algorithms alone will not calm neighborhood security worries."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Caps may overlook rights conflicts in on-the-ground disputes."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "a7",
            text: "Before we litigate the sunrise, remember startups also bring jobs, shade structures, and surprisingly tasteful visor fashion. Let the pilot run a week; then we can judge actual shadows, not imagined ones.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection reads as cavalier in face of equity concerns."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Downplays fiscal accountability for anti-hoarding enforcement."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Emphasizing innovation can cool fears of heavy-handed patrols."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Skirting standards invites uneven outcomes and litigation."
                }
              }
            }
          },
          {
            id: "a8",
            text: "If mega-mirrors think they can buy the horizon, they’ll meet our antitrust sunscreen. Try to corner dawn and we’ll slap on reflectance limits and make you share the glow.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Assertive posture reassures some that abuse will be checked."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Threats could chill investment and compress auction proceeds."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric risks escalating local confrontations over permits."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive tone without process invites due process claims."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "On legal standing and enforcement: who owns a sunbeam, how are disputes handled, and will sunrise fines hit communities already policed to exhaustion?",
        answers: [
          {
            id: "a9",
            text: "There's no settled law on light capture; we're drafting interim rules and expect inevitable test cases. We'll prioritize mediation over tickets while definitions evolve, including what counts as 'ambient dawn.'",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive, // +8
              o2: OutcomeModifierWeight.SlightNegative, // -4
              o3: OutcomeModifierWeight.StrongPositive, // +8
              o4: OutcomeModifierWeight.MajorNegative // -12
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Acknowledging vagueness without timelines hurts confidence."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Regulatory fog delays bids and complicates budget planning."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Unclear rules strain coordination with local responders."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparency on gaps builds legitimacy for interim safeguards."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "a10",
            text: "No sunrise patrols will stalk stoops. We are not turning glare into probable cause, and we are not training robins as deputy light meters. Any enforcement will be narrow, notice-based, and boringly procedural.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.StrongPositive, // +8
              o3: OutcomeModifierWeight.StrongNegative, // -8
              o4: OutcomeModifierWeight.SlightPositive // +4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances ring hollow if communities still feel targeted."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Neutral for budgets; reassurance neither helps nor hurts."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm rejection of patrol rumors lowers temperature fast."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Blanket denials can backfire if any overreach later occurs."
                }
              }
            }
          },
          {
            id: "a11",
            text: "Civil rights reviews are baked in, with bias audits on any citations and a hotline staffed by actual humans before coffee. Communities can opt into sunrise compacts instead of fines.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative, // -8
              o2: OutcomeModifierWeight.SlightPositive, // +4
              o3: OutcomeModifierWeight.Neutral, // 0
              o4: OutcomeModifierWeight.SlightPositive // +4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process focus helps, but accountability must be visible."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Predictable reviews reduce legal risk and stabilize markets."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audits may be seen as second-guessing local partners."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strong civil rights architecture shields vulnerable groups."
                }
              }
            }
          },
          {
            id: "a12",
            text: "Let's not crown the Guild of Noon judge and jury just yet. We'll release a plain-English rulebook, then hold a town-hall breakfast where the only thing sizzling is the hash, not civil liberties.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive, // +4
              o2: OutcomeModifierWeight.StrongNegative, // -8
              o3: OutcomeModifierWeight.SlightPositive, // +4
              o4: OutcomeModifierWeight.Neutral // 0
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Redirecting the fight avoids a premature legal cage match."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delay tactics add uncertainty and spook cautious bidders."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Evasion breeds suspicion that enforcement will creep."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Avoiding specifics weakens standing when challenges arrive."
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
        text: "Drill into the equity math: how are shadow credits, rural rebates, and tenant protections calculated, and can residents challenge licensed glare in real time?",
        answers: [
          {
            id: "a13",
            text: "Shadow credits scale with block-level light baselines, weather, and season. Rural rebates tie to plot size and yield history. A public app logs glare events and triggers automatic review by an ombudspanel.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive, // +8
              o2: OutcomeModifierWeight.SlightNegative, // -4
              o3: OutcomeModifierWeight.SlightPositive, // +4
              o4: OutcomeModifierWeight.StrongNegative // -8
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Detail helps, but people need proof it works block by block."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear formulas bolster credibility and auction participation."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Metrics may miss on-the-ground crowd and safety dynamics."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Complexity risks due process gaps for fast appeals."
                }
              }
            }
          },
          {
            id: "a14",
            text: "Tenants won't need a law degree or a ladder; one tap flags a glare, pauses offending mirrors, and queues a credit. We've budgeted to keep appeals free, fast, and multilingual.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative, // -8
              o2: OutcomeModifierWeight.SlightPositive, // +4
              o3: OutcomeModifierWeight.SlightNegative, // -4
              o4: OutcomeModifierWeight.StrongPositive // +8
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances without oversight can sound like slogans."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Service promises may add costs without funding clarity."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Simple tools reduce confrontations and security calls."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Accessible appeals aid fairness, pending formal rulemaking."
                }
              }
            }
          },
          {
            id: "a15",
            text: "We tried explaining the formula on one slide and caused a small eclipse of boredom. We'll publish the calculator and let you poke it, because sunlight loves transparency.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive, // +4
              o2: OutcomeModifierWeight.StrongNegative, // -8
              o3: OutcomeModifierWeight.SlightPositive, // +4
              o4: OutcomeModifierWeight.Neutral // 0
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Jokes about opacity confirm fears of hidden tradeoffs."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Signals weak governance that could deter smaller bidders."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor lowers tension, but it dodges operational concerns."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flippancy undermines trust in remedies if harms occur."
                }
              }
            }
          },
          {
            id: "a16",
            text: "Models can miss weird edge cases—like mirrored koi ponds and disco barns. We'll adjust the tables as evidence arrives, and we'll backpay communities if we under-credit.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.StrongPositive, // +8
              o3: OutcomeModifierWeight.SlightNegative, // -4
              o4: OutcomeModifierWeight.Neutral // 0
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning edge cases is prudent, but fixes must be fast."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledged risks imply contingency costs to the program."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Odd failures could spur calls for stricter field controls."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Admitting gaps invites collaborative rulemaking and relief."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "If roosters, crops, and noon guilds sue, will Justice mediate or let courts bake? What’s the rights backstop when light and porch freedoms collide at dawn?",
        answers: [
          {
            id: "a17",
            text: "We'll likely litigate a few bellwether cases to establish guardrails, and yes, we may lose a sunrise or two. Until precedent lands, we'll err on warnings, not cuffs, and publish every enforcement data point.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive, // +8
              o2: OutcomeModifierWeight.SlightNegative, // -4
              o3: OutcomeModifierWeight.StrongPositive, // +8
              o4: OutcomeModifierWeight.MajorNegative // -12
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Proceeding to test cases risks early defeats and headlines."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Litigation costs pull funds from rebates and enforcement."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Court fights can inflame local tensions around sites."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Bellwethers offer clarity and durable precedents."
                }
              }
            }
          },
          {
            id: "a18",
            text: "We're not deputizing porch spies or drone sun-wardens. No mass surveillance, no warrantless window scans, and absolutely no dawn curfews. That is a firm, boring no.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative, // -8
              o2: OutcomeModifierWeight.SlightPositive, // +4
              o3: OutcomeModifierWeight.StrongNegative, // -8
              o4: OutcomeModifierWeight.MajorPositive // +12
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance alone cannot guarantee restraint in practice."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Non-intervention promises limit fiscal exposure marginally."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear stance against deputizing reduces fear of surveillance."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "If abuses occur, this stance could weaken quick remedies."
                }
              }
            }
          },
          {
            id: "a19",
            text: "Dispute triage goes mediation first, then a fast-track administrative judge, with legal aid vouchers for low-income residents. Community boards can petition for temporary unlicensed corridors.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive, // +4
              o2: OutcomeModifierWeight.StrongNegative, // -8
              o3: OutcomeModifierWeight.SlightPositive, // +4
              o4: OutcomeModifierWeight.Neutral // 0
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Mediation-first sounds balanced and reduces friction."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Cheaper resolution pipeline preserves program resources."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too soft an entry may embolden repeat bad actors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Structured triage is fine if rights can escalate swiftly."
                }
              }
            }
          },
          {
            id: "a20",
            text: "If this scheme casts an unfair shadow, we'll narrow it. Civil liberties sunset clauses and automatic review panels keep the policy from creeping into your coffee.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.StrongPositive, // +8
              o3: OutcomeModifierWeight.SlightNegative, // -4
              o4: OutcomeModifierWeight.Neutral // 0
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Pledging to narrow scope concedes weakness in design."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Retrenchment can shrink revenue and unsettle investors."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Flexibility lowers community flashpoints around sunrise."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Adaptive limits are fair, but safeguards must be codified."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
