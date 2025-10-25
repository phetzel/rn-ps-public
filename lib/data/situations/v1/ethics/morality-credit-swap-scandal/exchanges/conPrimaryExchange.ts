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
      id: "root",
      text: "The Commission let officials day‑trade 'morality credits,' inviting blackmail and balance‑sheet contagion. What safeguards will you impose before public trust defaults?",
      answers: [
        {
          id: "a_root_1",
          text: "We won’t outsource virtue to day‑traders. I’ll launch a sin buyback with free hugs, sunset the sketchy coupons, and publish real guardrails. If contrition spikes, we’ll flood the zone with ethics, not derivatives.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Voters will see decisive ethics action with humane tone."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This chills liquidity and hints at systemic virtue risk."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "It validates wellness over gimmicks and reduces stress."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ambiguity risks confusion for ongoing evidence work."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Markets hate mystery, so we’re freezing new issuances, adding volatility collars on credits, and issuing frown guidance. Treasury is building buffers so a vice wobble never becomes a virtue recession.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "This looks cautious and may read as market appeasement."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Bond desks will read this as stabilizing institutional risk."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Wellness concerns feel sidelined by market optics."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Freeze without clarity could complicate preservation orders."
              }
            }
          },
          followUpId: "sec1"
        },
        {
          id: "a_root_3",
          text: "Justice has seized broker ledgers, preserved evidence, and made clear credits don’t erase crimes. We’re coordinating subpoenas and freezing accounts to stop panic buys of burner‑phone absolution schemes.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Law-first framing may feel cold and tactical to the public."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Seizures can spook desks if liquidity implications seem murky."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Emphasizing due process reduces panic and staff stress."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Firm evidence control strengthens cases and deters blackmail."
              }
            }
          },
          followUpId: "sec2"
        },
        {
          id: "a_root_4",
          text: "Let’s stop treating stress like a tradable disease. HHS will pilot naps, kale, and counseling instead of wholesale redemption. No one should bulk‑buy forgiveness like office snacks ever again.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Rhetoric risks sounding dismissive of structural fixes."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Markets may read this as policy drift and uncertainty."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "It dismisses stress science and could harm morale."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear moral stance helps norm setting without overreach."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "sec1",
        text: "If agencies can pledge apologies as collateral, could a shock trigger virtue margin calls across departments? What firewalls and mark‑to‑morals rules stop cascading write",
        answers: [
          {
            id: "a_sec1_1",
            text: "We’re ring‑fencing virtue exposure from operating budgets, capping cross‑agency links, and pre‑funding a morals buffer. Think boring seatbelts, not fireworks, so a wobble in one desk can’t domino the lot.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technocratic tone may appear reactive to scandal pressure."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Ring-fencing signals containment and calms risk models."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Focus on walls over wellness misses human factors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Segregation rules add complexity to evidence tracing."
                }
              }
            }
          },
          {
            id: "a_sec1_2",
            text: "We’ll mandate mark‑to‑morals disclosures, daily stress tests, and a neutral clearinghouse to net positions. Departments will face position limits and immediate haircuts on any concentrated absolution bets.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Transparency shows leadership taking the hard questions."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Daily marks might telegraph distress and spook markets."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Continuous audits can heighten stress for staff."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear disclosures aid subpoenas and reduce disputes."
                }
              }
            },
            followUpId: "ter1"
          },
          {
            id: "a_sec1_3",
            text: "If your spreadsheet needs a therapist, you’re over‑modeled. We’ll fix the plumbing, not perform an exorcism on Excel. Meanwhile, officials must earn virtue the vintage way: by doing their jobs.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dodging details suggests weak grasp of operational risk."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flippancy undermines market confidence in controls."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calling out over-complexity supports burnout relief."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection risks hinder coordination on evidence."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "No agency is allowed to pledge apologies as collateral, full stop. Any such contracts are void ab initio, and anyone booking them that way will meet auditors with clipboards and very patient eyebrows.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flat denial can read as naive and evasive on risk."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Markets distrust blanket bans lacking mechanisms."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It ignores behavioral realities that drive misuse."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A clear line helps enforcement even if overbroad."
                }
              }
            }
          }
        ]
      },
      {
        id: "sec2",
        text: "With brokers hoarding confession ledgers, blackmail risk spikes. How will you end burner‑phone contrition, shield whistle data, and stop bosses from hedging guilt with",
        answers: [
          {
            id: "a_sec2_1",
            text: "We’re treating ledger blackmail as classic fraud and extortion. Subpoenas are out, stings are in, and data seizures are underway. Burner‑phone contrition markets will be dismantled before lunch, not after.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Delegating tone to prosecutors can feel impersonal."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive raids may be read as signaling deeper risk."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Whistle shields reduce anxiety and protect staff."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Treating blackmail as fraud sharpens charges and deterrence."
                }
              }
            },
            followUpId: "ter2"
          },
          {
            id: "a_sec2_2",
            text: "Staff can anonymously self‑report and get amnesty for minor policy slips, but not crimes. We’re walling off whistle data, embedding counselors, and posting clear rules so panic doesn’t turn shame into currency.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance without teeth risks looking performative."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Operational continuity message steadies risk pricing."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Anonymous lanes help, but stress supports are vague."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft posture could invite evasion by bad actors."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "The idea that bosses can hedge guilt with interns’ credits is as creepy as it sounds. We’re codifying non‑transferability, revoking any pooled accounts, and putting a hard stop on proxy contrition schemes.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Taking on the premise reads as confident and candid."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mocking risk can unsettle desks expecting precision."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Challenging the scheme aligns with wellness priorities."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Tone may complicate charging decisions and cooperation."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Rollout was sloppy; early guidance read like a coupon book for souls. We own that and are rewriting it in one page of plain language: no buying absolution, no reselling remorse, no exceptions, no winks.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admission helps honesty but dents perceived competence."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Owning missteps hints at oversight gaps that worry markets."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Staff may feel exposed by delayed protections."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Candor can improve witness credibility in court."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "ter1",
        text: "Will you publish a consolidated virtue exposure map, set position limits, and stand up a moral clearinghouse to net obligations before they topple civil‑service dominoes?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Yes. We’ll publish the exposure map, set conservative position limits, and stand up a clearinghouse with netting, margin, and audits. It will report weekly until the market for morality is permanently closed.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Publishing maps signals control and accountability."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Disclosure could surface fragility and move spreads."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dashboards risk stress if used as performance shaming."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Netting clarity simplifies evidence and audit trails."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "The clearinghouse will net obligations nightly, with circuit breakers at the first hint of froth. Think dull and over‑collateralized; if it’s exciting, it’s wrong, and if it’s invisible, it’s working.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Mechanics focus may look technocratic amid outrage."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Nightly netting reduces contagion and calms desks."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Automation without care protocols misses burnout."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Speedy netting risks errors that entangle cases."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "We tried mapping conscience once; the legend was just a mirror. Jokes aside, we’ll deliver the basics without turning ethics into fantasy football with acronyms and collectible penance cards.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Jokes about conscience appear flippant and unserious."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Levity fuels doubts about risk discipline."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor can lower stress but seems dismissive."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It weakens perceived resolve to enforce rules."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "If you need a GPS to your conscience, you’re lost. We’ll do the audits and limits, but the real fix is banning the gimmick and sending people back to Ethics 101 with coffee, not coupons.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Moralizing alone can read as policy light and scolding."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Desks prefer rules over sermons; uncertainty grows."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Values talk supports culture change if paired with care."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Thin on procedures, it hinders prosecutorial clarity."
                }
              }
            }
          }
        ]
      },
      {
        id: "ter2",
        text: "On extortion, will you grant a safe‑disclosure window, fund witness protection for spreadsheets, and ban shadow ledgers before confession futures go dark?",
        answers: [
          {
            id: "a_ter2_1",
            text: "We’ll open a 30‑day safe‑disclosure window, stand up an encrypted portal, and offer immunity for minor admin breaches that expose bigger crimes. Shadow ledgers get seized, and brokers face immediate injunctions.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Opening a window shows leadership willing to listen."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Amnesty periods may reveal scope and jar pricing."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "New processes can stress staff unless paired with care."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Safe disclosures strengthen cases and reduce coercion."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Whistle data lives offline with split‑key access and canary traps. We’ll rotate case teams to foil insiders, and publish quarterly stats so sunlight scares the blackmailers before the subpoenas do.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance is fine but risks sounding rote."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Offline split-key design reassures against leaks."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Security focus must be balanced with mental health."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Heavy locks without clarity can impede warrants."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "No, we’re not inventing confession futures. The product is dead, the booth is closed, and anyone trying to reboot it will meet a judge, not a market maker, unless you count the gavel as a ticker.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denial reads as out of touch with extortion risk."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal may unsettle desks waiting for controls."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It discounts real harms reported by staff."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Simple bans help posture but leave gaps in practice."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "We underestimated the blackmail incentive and overestimated common sense. We’re staffing hotlines, funding protective services for records, and paying bounties for turning in redemption‑racketeers.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning overpromises helps but concedes misjudgment."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting risk misreads could widen spreads briefly."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Acknowledging harm validates staff and aids recovery."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Self-critique must not prejudice ongoing cases."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
