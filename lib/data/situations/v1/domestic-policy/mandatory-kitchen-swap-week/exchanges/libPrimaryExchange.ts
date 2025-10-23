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
      text: "Swap Week touts empathy yet shifts costs to renters and caregivers; where are waivers, aid, and fair pairing rules to stop granite-class skaters?",
      answers: [
        {
          id: "a_r1",
          text: "I challenge the doubters: empathy isn't a garnish; it's the meal. We'll cushion costs with emergency scrub funds, easy waivers, and rental protections so nobody gets sauteed by surprise fees.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "This projects confident leadership while inviting scrutiny on costs."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Security framing feels glib, risking confusion about enforcement lines."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Sweeping language hints at compulsion without explicit consent guardrails."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances sound thin against sanitation fears raised by the swaps."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r2",
          text: "This is a resilience drill: if a stranger can find your can opener, society survives. Pairing math is for the nerds; tonight we're practicing casserole calm and not catastrophizing crumbs.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Jokes land, but accountability for tenant impacts feels sidestepped."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Operational calm and resilience framing land well for public order."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection risks blurring the legal boundary between drills and searches."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Health clarity is diluted by playful rhetoric about checkpoints."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "We're issuing a swap-rights bulletin: consent standards, fee bans, and a fast complaint portal. Landlords can't invent 'swap surcharges,' and retaliatory billing will trigger immediate penalties.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.MajorPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Neutral,
              reaction: "Neutral posture lets agencies lead, but leadership signal feels muted."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal bulletin focus sidelines practical coordination for safety."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear rights language strengthens consent and due-process safeguards."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal first approach delays timely hygiene guidance for households."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Sanitation kits ship free, and high-risk homes get no-fault waivers. Guidance is friendly but firm: triple-mitten handling and lemon-sense cleaning keep shared kitchens courteous and clean.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Comforting notes risk looking cosmetic without hard protections."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Calming talk omits how security checks avoid harassment or bias."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Promised ease may undercut the need for enforceable consent rules."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Concrete kits and risk triage reassure anxious families and carers."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "You tout scrub funds and waivers, but caregivers already stock gloves; will aid be automatic, opt-outs penalty-free for high-risk homes, and costs kept off tenants?",
        answers: [
          {
            id: "a_s1_1",
            text: "Aid won't be a scavenger hunt. Kits and wipes arrive automatically, with caregiver add-ons. High-risk homes get a simple opt-out and zero penalties for staying put during Swap Week.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Automatic aid sounds good but oversight on equity remains unclear."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Logistics may strain local coordination if surge plans are vague."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Automation without appeal steps risks due-process complaints."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Proactive delivery eases burdens for caregivers and high-risk homes."
                }
              }
            }
          },
          {
            id: "a_s1_2",
            text: "Distribution rides the swap registry: prepaid scrub credits texted, kits delivered, and a hotline in twelve languages. We'll break down timing and access specifics right after this.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process detail helps, yet renters still shoulder time costs."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Registry dependence could expose sensitive household information."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear channels and audit trails support quick, fair access to aid."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Complex steps may deter non-English speakers and exhausted carers."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_3",
            text: "We're not shifting a dime of mandated costs to tenants or caregivers. Any demand for tenant-funded cleaning is outside policy and will be blocked swiftly and refunded.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Strong promise to shield tenants frames leadership as tenant-focused."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Firm lines may limit needed flexibility for local incident response."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Absolute pledges risk clashing with existing lease and fee statutes."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "No-cost stance may cap funds for sanitation in high-risk settings."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Let's not pre-season the panic. First bites, then budgets; logistics are being plated by people who alphabetize spice racks for both fun and government-grade accuracy.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Cooling rhetoric aids calm, but it can read as minimizing hardship."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "De-escalation supports public order while deployments stay discreet."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Downplaying urgency risks weak documentation for waivers and fees."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance without timelines leaves caregivers guessing on aid."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Landlords are floating swap surcharges and surprise checks; how can renters contest in days, and will luxury units be paired fairly instead of skating past the swaps?",
        answers: [
          {
            id: "a_s2_1",
            text: "Renters get a one-page challenge, 48-hour rulings, and fee bans with teeth. Pairing fairness comes with a public dashboard and audits, which I'll detail in the next round.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fairness talk helps, but renters still face rapid paperwork stress."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fast rulings need surge staff or local response will bottleneck."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Simple appeals and deadlines reinforce due-process for tenants."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Speed must include accessibility for disabled and multilingual users."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "To the granite-class: if your island has a name, it's hosting guests. We dare the backsplash aristocracy to share a burner like everyone else this one week.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Calling out luxury skaters shows backbone on equity enforcement."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontational tone may inflame local tensions at properties."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric risks appearing prejudicial before case-by-case review."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Equity push needs paired sanitation resources to be credible."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "No swap-related surprise walkthroughs are authorized. Entry rules remain unchanged, and any landlord fishing expedition will be treated as a violation with fines.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ban on surprise checks reassures renters but angers some landlords."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Restrictions may hinder urgent hazard checks if issues arise."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flat prohibitions could conflict with existing inspection clauses."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear boundaries reduce stress and support health stability."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "We're not launching a reality show about countertops. Our job is safe swaps, not judging grout lines by torchlight like a moody kitchen noir.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Refusing spectacle helps seriousness, but details still feel thin."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Low-drama approach supports calm and deters copycat disruptions."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lack of transparency risks later challenges from affected renters."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection leaves unanswered questions on sanitation equity."
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
        text: "On automatic aid, what's the mechanism-prepaid cleaning credits, kit deliveries, or bill credits-and how quickly will language access and caregiver stipends roll out?",
        answers: [
          {
            id: "a_t1_1",
            text: "Prepaid cleaning credits auto-load to phones and mailers; kits ship within 72 hours. Caregiver stipends go out weekly, and every notice arrives in plain, translated language.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Delivery speed sounds firm, but oversight on errors seems light."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Logistics integration with local partners remains underspecified."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Defined mechanisms and timelines bolster legal defensibility."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Credits risk excluding households without phones or bank access."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "No one must dramatize their germs to qualify. Minimal clicks, no paperwork, and volunteers can assist if you want help. The aim is clean counters, not red tape.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Empathy message plays well, yet metrics for access are missing."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft tone may lull planners on surge staffing for deliveries."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague eligibility can create disputes and uneven implementation."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Non-stigmatizing access supports caregivers and immunocompromised."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Day one may be a little sudsy as trucks roll. That's why we set up neighborhood swap depots for backup supplies and same-day fixes to keep dinners on track.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting bumps shows honesty but invites blame for rollout gaps."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning risks helps coordination with local emergency networks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledged delays could spark claims of unequal aid delivery."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Day-one chaos may heighten exposure for medically fragile homes."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Worst case, borrow your neighbor's ceremonial oven mitts. Nothing builds trust like unflattering hairnets and a shared label maker humming in the background.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Levity softens fears while signaling confidence in rapid fixes."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Neighborly backups reinforce resilience and social cohesion."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Humor avoids new commitments, offering no legal clarity yet."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes about gear may trivialize real sanitation and contagion risk."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "On pairing fairness, how will the randomizer prevent gaming by granite-class properties, audit results be public, and unsafe mismatches be appealed without retaliation?",
        answers: [
          {
            id: "a_t2_1",
            text: "Pairings use a fairness algorithm: balance by income and risk, cap distance, and ban self-exemptions. Audit logs publish weekly, and appeals get live decisions within 24 hours.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical fairness helps, yet renters need simple appeal paths."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audit publication may strain security at high-profile properties."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparent criteria and audits reduce gaming and bias claims."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Algorithm must account for health risks or mismatches could harm."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "If you can sear a good egg, you can handle a fair draw. Share the stove, prove granite isn't just a counter-it's your chance to model neighborly courage.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Tough tone on fairness signals resolve against privilege gaming."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontation could provoke pushback at luxury sites."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Broad challenges risk prejudging cases before formal review."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Equity rhetoric needs parallel safeguards for vulnerable swappers."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Unsafe mismatches trigger automatic safe-harbor pauses. Report it, halt the swap, and you won't be penalized or billed while it's checked and corrected.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance is welcome, but retaliation protections need teeth."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Safe-harbors may complicate site security during rapid changes."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Automatic relief helps, but due-process steps must be explicit."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Built-in safe options reduce harm from risky or unsanitary pairings."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Luxury properties cannot opt out. There are no velvet-rope pairings, no 'chef's circle' exemptions, and no pay-to-avoid lanes hiding in the marinade of fine print.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Firm denial curbs loopholes, yet it skirts remedy timelines."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear no-escape stance supports even enforcement and order."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Crisp ban needs precise statutory backing to avoid challenges."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard lines without accommodations risk health inequities."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
