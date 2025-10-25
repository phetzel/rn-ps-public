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
      id: "q1",
      text: "Does the President truly back swapping cash for app-scored 'Smles,' and what happens when servers hiccup or morale slumps on payday?",
      answers: [
        {
          id: "q1a1",
          text: "Respectfully, the President does not endorse compulsory grinning-as-currency. He frowns on the premise, his face is on no app, and no app is on his face. He supports choice, privacy, and paychecks that don’t read lips.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "He rejects face-currency and affirms cash continuity for paydays."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Plan loses coherence when executive won’t back operational pivot."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Compulsion risk rises without a clear constitutional path."
              }
            }
          }
        },
        {
          id: "q1a2",
          text: "Conceptually, Smles would be pegged to the median molar with grinflation capped at two chuckles. There’s an offline stoic mode and anti-gaming audits for whitening. We’ll walk through safeguards and farm risks in detail.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Model talk fuels skepticism about replacing legal tender yet."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Peg and caps land well; market hears disciplined stewardship."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical peg notes ignore spoofing risks in the wild."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rights review is thin; compelled signals remain undefined."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "q1a3",
          text: "Our safety teams built Smile Shield to spot counterfeit dimples from mime syndicates and photogenic raccoons at 200 yards. If servers hiccup, traffic fails over, and no one’s groceries depend on a smirk alone.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Security-first framing hardens his doubts about the system."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Detection assurance boosts public safety posture significantly."
              }
            }
          }
        },
        {
          id: "q1a4",
          text: "Before anyone monetizes cheeks, the Justice desk will stress-test constitutionality under the First Jaw Principle. No compelled grins, no warrantless cheek taps, and real oversight on any smile-stop protocols.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Legal caveats suggest a shaky rollout, reinforcing his frown."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Guardrails promise due process and temper coercion concerns."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Constraints could slow deployment and spook payments markets."
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
        text: "Your models flag black‑market smirk farms and outage‑day barter; how will you curb whitening grinflation, labor abuse, and memes that game the meter?",
        answers: [
          {
            id: "q2a1",
            text: "We’re imposing a hard daily cap on harvestable grins, auditing for pigment-based boosts, and banning per-shift smile quotas. Anti-farm heuristics flag mass-synced smirks, with penalties that hurt, not just scold.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Caps imply scarcity management; he worries about wage impacts."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Hard caps convey prudence and anti-abuse resolve to markets."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cap mechanics may chill expression if misapplied to faces."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Farm interdiction needs resourcing; current posture feels light."
                }
              }
            }
          },
          {
            id: "q2a2",
            text: "Let’s not pre-panic about imaginary barns full of interns grinning at turnips. We’ve learned from crypto, coupons, and karaoke-design beats doom, and doom rarely writes code that ships.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissal of concerns sounds evasive and erodes credibility."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Brushing off risks undercuts fiscal signaling on stability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calming tone helps deter panic buying and opportunistic spoofing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing rights issues invites scrutiny from courts."
                }
              }
            }
          },
          {
            id: "q2a3",
            text: "Homeland’s task force will shut smirk mills that exploit workers and spoof meters. We’re pairing labor inspectors with cyber teams, so the only thing being farmed is evidence, not faces.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Operational crackdown messaging stirs fears of overreach."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Firm enforcement stance deters mills and coordinated scams."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive policing can spook innovation and wage pipelines."
                }
              }
            }
          },
          {
            id: "q2a4",
            text: "On the record from Treasury: Smles stay within a two‑chuckle band, whitening exploits are auto-depreciated, and outage buffers pre‑credit essentials. We can brief the SmileGrid fail‑safes and fairness tests next.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Binding targets sound rigid and may bite during downturns."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear band anchors expectations and reins in grinflation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tight bands risk misclassifying protected conduct as fraud."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fixed targets can be gamed by nimble spoofers during outages."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury,
            followUpId: "q4"
          }
        ]
      },
      {
        id: "q3",
        text: "If morale slumps stall payments, what civil‑liberty guardrails kick in-grin warrants, Grinanda warnings-and who calls a lawful timeout for frowns?",
        answers: [
          {
            id: "q3a1",
            text: "Justice will require grin warrants based on articulable fraud patterns, not vibes. Any smile-hold is time‑limited, appealable, and logged. We’ll outline probable cause and farm audits in a deeper brief.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Judicial gating slows rollout; he doubts viability under strain."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Warrants and warnings center rights in high-stress scenarios."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Added process may delay payroll flows and settlement timing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Extra steps can blunt rapid response to coordinated spoofing."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "q3a2",
            text: "No jaw checkpoints, no smile stops. We police threats, not expressions. If morale drops, systems soften demand, and basic services auto‑unlock so a bad day doesn’t become a bad month.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He welcomes restraint but fears blind spots in threat response."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Assurance curbs mission creep and protects ordinary commuters."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Broad reassurances lack enforceable remedies for violations."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Guardrails could impede timely clearing during spikes."
                }
              }
            }
          },
          {
            id: "q3a3",
            text: "An independent tempo board sets outage criteria using uptime, sentiment drift, and retail churn. When a pause is declared, transactions queue and workers get retro credit without grin quotas.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Independent criteria reassure him that frowns won’t freeze wages."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Board decisions must still meet probable‑cause thresholds."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "External triggers complicate liquidity and buffer calibrations."
                }
              }
            }
          },
          {
            id: "q3a4",
            text: "Reporters at this briefing are already hitting their smile caps. If we need liquidity, we’ll borrow from your front rows and repay in jokes, interest‑free.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Snark dodges policy; confidence drops on real outage playbooks."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Pressuring clarity may yield more precise fiscal comms later."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection sidesteps due‑process details the public needs."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Evading specifics weakens deterrence against spoof campaigns."
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
        text: "Walk us through SmileGrid fail‑safes: offline stoic mode, brownouts, orthodontia bias, and what happens when a power nap looks like a bank run.",
        answers: [
          {
            id: "q4a1",
            text: "Stoic mode banks verified work and care hours at a flat rate, then syncs with consensus nodes when back online. The fairness stack normalizes for jaw mobility and braces, so orthodontia isn’t a hidden hedge fund.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Offline batching sounds brittle if outages stack on payroll day."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Stoic mode projects continuity and stabilizes expectations."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Queueing hours could mask fraud clusters during brownouts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Storage of biometric inferences raises consent concerns."
                }
              }
            }
          },
          {
            id: "q4a2",
            text: "We run brownout drills quarterly. If a region drops, auto‑vouchers spin up, clinic and food lines bypass scoring, and public nodes boot on generators. Nobody gets locked out because a cloud took a nap.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Drills reassure but suggest fragility in core payments spine."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Exercise cadence improves readiness and incident coordination."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reroutes and throttles may spook retailers and card rails."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Regional controls risk disparate impacts without oversight."
                }
              }
            }
          },
          {
            id: "q4a3",
            text: "No, a sneeze, yawn, or nap won’t tank markets. The classifier ignores transients and requires sustained signals across sensors, so your cat video break won’t be mistaken for a liquidity crisis.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clarity that harmless acts won’t crash markets eases his doubt."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Definitions must be tight to prevent discretionary misuse."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Edge‑case logic may mask true systemic sensitivity."
                }
              }
            }
          },
          {
            id: "q4a4",
            text: "We beta‑tested with interns and mannequins. Only the mannequins unionized, and even they demanded a nap button. The point is: we built slack into the system on purpose.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Testing quips erode trust in the rigor of resilience claims."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Admitting test flaws can lead to sharper, better-calibrated fixes."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes about drills diminish compliance and response discipline."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Levity sidesteps accountability on measurable standards."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "On enforcement, define probable cause for a grin search, and how you’ll audit alleged smirk farms without face raids, dragnets, or deputizing birthday clowns.",
        answers: [
          {
            id: "q5a1",
            text: "Probable cause means linked fraud vectors-timing clusters, forged telemetry, coerced shifts-not a bored barista. We’ll challenge any fishing expedition and publish suppression stats to keep jaws free.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Legal hurdles on searches signal friction with timely payouts."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear thresholds protect rights and target actual fraud rings."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Higher bar could slow incident response and settlements."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Narrow criteria may let organized mills slip initial nets."
                }
              }
            }
          },
          {
            id: "q5a2",
            text: "Audits target ledgers, device logs, and payrolls, not cheeks. We use synthetic IDs and remote attestation, protect whistleblowers, and coordinate with labor boards so fraud probes don’t become vibe sweeps.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ledger focus helps, yet he doubts audits will calm markets."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Data‑first audits cut bias and strengthen signal integrity."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Device sweeps still need warrants; process gaps remain."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Paper trails miss air‑gapped farms and burner devices."
                }
              }
            }
          },
          {
            id: "q5a3",
            text: "We are not deputizing clowns, mimes, or novelty wigs. Policy forbids costume‑adjacent enforcement, and the only rubber nose we’ll tolerate is on a stress ball in the break room.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Rejecting clown deputization aligns with his civil posture."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Bans are good, but enforcement guidance must be explicit."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Symbolic lines do little to secure payment reliability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Threat actors aren’t circus acts; real deterrents are needed."
                }
              }
            }
          },
          {
            id: "q5a4",
            text: "Community oversight is opt‑in and anonymized. If a farm is suspected, workers get safe‑harbor and back pay, operators face fines, and the remedy is retraining and restitution-not raids at dawn.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Opt‑in oversight sounds soft for industrial‑scale fraud."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Community signals improve early warnings without dragnets."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Anonymity can obscure patterns needed for rapid interdiction."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
