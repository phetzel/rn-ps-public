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
      text: "Realm Treasury’s Rent‑a‑Dollar leases cash monthly; what problem does this fix, and who swallows the fees when wallets come up empty?",
      answers: [
        {
          id: "a_r1",
          text: "We’re not renting money; it’s a monthly visit. Your wallet is a hotel lobby, the dollar is the bellhop, and nobody’s charging a resort fee for standing still.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "He embraces the playful deny to signal confidence."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Treasury wants fewer jokes and tighter fee guardrails."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Justice withholds judgment on the framing."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "The pilot adds accountability to physical notes. Trackable leases curb gray‑market hoarding, smooth cashflow for small vendors, and make bills show up to work on time.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He sees legal risk and public blowback mounting."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Treasury welcomes clarity; inform aligns with aims."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice worries that access rules could entrench bias."
              }
            }
          },
          followUpId: "q_sec_1"
        },
        {
          id: "a_r3",
          text: "Before we crown the dollar a tenant, who signed its lease? If money can be evicted from pockets, we’ll ask a judge whether lint gets collective bargaining rights, too.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He dislikes the combative tone but hears the case."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Treasury resents the challenge to its pilot authority."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Justice applauds the push to stress‑test legality."
              }
            }
          },
          followUpId: "q_sec_2"
        },
        {
          id: "a_r4",
          text: "No one’s swiping lunch money. Trials are capped, opt‑in, and cancellable. If the math tilts against workers, we will yank the plug before it yanks their paychecks.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He finds the reassurance tone out of touch with costs."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Treasury appreciates restraint but notes limits."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice warns that calm language can hide loopholes."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_1",
        text: "Fees and access: will credit gates decide who can lease dollars, and are coinless workers quietly subsidizing deluxe bundles that contract‑flippers resell?",
        answers: [
          {
            id: "a_s1_1",
            text: "Let’s not pretend every wallet is an oil rig of hidden fees. Pilot pricing is posted in font you don’t need a microscope for, and the scary stuff is in big letters.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He rejects deflection; fees need accountability."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury sees this as undercutting recent fixes."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice approves scrutiny of inequitable gates."
                }
              }
            }
          },
          {
            id: "a_s1_2",
            text: "Early bundles skewed shiny; some resellers tried to stack perks on the backs of cash‑poor users. We’re rewriting the fee ladder so no one is paying for someone else’s velvet rope.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He accepts fault but fears political fallout."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury takes the hit for skewed early bundles."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice welcomes candor on subsidy harms."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "On access, Treasury will publish a plain‑English gate policy and bar score‑only screens. We’ll brief with thresholds and appeal steps, then adjust after the first billing cycle.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModerateNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He values a clear, authorized playbook."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Treasury gains from transparent guidance."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice worries the rules may cement bias."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury,
            followUpId: "q_ter_1"
          },
          {
            id: "a_s1_4",
            text: "Fees are capped per note and per month, with automatic roll‑off after hardship flags. No deluxe pass can be financed by basic‑tier renters under the pilot charter.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He doubts caps alone will protect low‑cash users."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury cites caps as concrete guardrails."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice still sees room for predatory fees."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_2",
        text: "Justice flags doubts: if a rented dollar misses curfew, can a pocket evict it, and does that collide with consumer law or invent tenant rights for cash?",
        answers: [
          {
            id: "a_s2_1",
            text: "Pocket evictions read like comedy until someone’s wallet gets a summons. We are prepared to test whether leased cash counts as a person’s effects under basic protections.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He dislikes legal brinkmanship in public."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury rejects framing this as eviction law."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice credits the focus on clear legal risks."
                }
              }
            },
            followUpId: "q_ter_2"
          },
          {
            id: "a_s2_2",
            text: "No, a coin isn’t about to hire a lawyer. The pilot bars repossessing currency mid‑purchase, mid‑paycheck, or mid‑bus fare. Your pocket is not a landlord.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He prefers dismissing far‑fetched scenarios."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury fears denial will invite skepticism."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice wants caution, not quips, on rights."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Consumer rules still rule. If a term clashes with law, the term loses. We’ll keep the pilot narrow, supervised, and allergic to any clause that treats people like ATMs.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "He stays neutral while agencies coordinate."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Treasury supports firm consumer supremacy."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice worries reassurance dilutes urgency."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Treasury and Justice wrote a red‑line: no curfew triggers, no stealth penalties, and dispute arbitration you can win without owning a briefcase. Audits are pre‑scheduled.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes legalese without concrete safeguards."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury backs the joint red‑line approach."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Justice withholds a view pending outcomes."
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
        text: "Bundlers are packaging leases like snack packs; will flips, transfer fees, and exit penalties trap low‑cash users while resellers skim rewards from the top shelf?",
        answers: [
          {
            id: "a_t1_1",
            text: "Transfers require consent from both parties and a cooling‑off click. Exit fees are capped at a single digit, and rewards can’t be harvested by anyone who didn’t carry the lease.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He sees process talk dodging market power risks."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury favors orderly, consent‑based transfers."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice flags potential trap mechanics."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "No one’s building a maze for broke renters. If a reseller’s math depends on trapping people, the plan flunks certification and the reseller gets bounced from the sandbox.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He rejects the rosy framing of bundlers."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury resists claims that the system is fair."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice appreciates concern for renters."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "If bundlers keep acting like carnival barkers, we’ll ban tier names that sound like yacht clubs and force default routing to the cheapest path by law, not vibes.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He likes tough signals to abusive bundlers."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury balks at threats that may spook markets."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice welcomes an assertive enforcement stance."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We’re not turning pockets into hedge funds. The whole point is boring, predictable cash that behaves, not a punch card for speculators to cosplay tycoons.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes levity while structural risks grow."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury appreciates calming of speculation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice opposes minimizing systemic harms."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_2",
        text: "If money gets quasi‑tenant status, what’s the remedy—injunctions, moratoriums, or rebooting the pilot—and how fast can Justice act before wallets start serving notices?",
        answers: [
          {
            id: "a_t2_1",
            text: "If the scheme trespasses on basic protections, we’ll seek an injunction first and ask existential questions later. Rights beat pilot schedules every day of the week.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He fears sweeping remedies could backfire."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury rejects talk of broad injunctions."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice values readiness to act decisively."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Timeline: 10 days for a legal memo, 20 for a public comment sprint, and a 30‑day sunset clause baked in. If violations surface, the auto‑off switch trips.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He approves a brisk, transparent timeline."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury supports disciplined milestones."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice worries speed could sacrifice rigor."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Nobody wakes up to a notice reading ‘Your dollar has moved out.’ Any enforcement pause protects paychecks, transit, and groceries before we move one clause an inch.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He distrusts soft messaging on notices."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury prefers firmer legal assurances."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice welcomes consumer‑first framing."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Let’s not litigate hypotheticals while the paint is drying. We’ll measure, publish, and fix in daylight rather than choreograph panic in the dark.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He rejects stalling while potential harms grow."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury likes focus on a measured rollout."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice warns delay erodes legal credibility."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
