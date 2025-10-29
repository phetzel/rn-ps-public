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
      text: "With the Treasure Ministry poised to nationalize Monopolon, who truly benefits—vault barons or everyday players—and when do we see the itemized receipts?",
      answers: [
        {
          id: "q_root_a1",
          text: "I challenge the premise that cardboard can crash an economy. If a thimble is too big to fail, it can debate me on live radio while we protect players, not vault barons.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.MajorNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "I welcome the debate; the public deserves straight talk and a little wit."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This framing risks spooking markets; we need steadier language."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Token triage must be evidence-based, not performative."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "We can secure venues calmly while respecting households."
              }
            }
          }
        },
        {
          id: "q_root_a2",
          text: "Stability first: we'll swap panic for liquidity using transparent buy‑ins, posted odds, and sober spreadsheets. No secret jackpots—every chip movement will be publicly tallied.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive, // +8
            o2: OutcomeModifierWeight.SlightNegative, // -4
            o3: OutcomeModifierWeight.SlightNegative, // -4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "I support stability but reject panic theater."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear rules and liquidity calm players and lenders alike."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Medical metaphors can confuse; we will be precise."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Sweeps must be narrow and time-bound to retain trust."
              }
            }
          }
        },
        {
          id: "q_root_a3",
          text: "We admit we don't practice token medicine. What we do is calm nerves: gentle shuffling, clear waitlists, and daily triage logs so anxious players see care without cosplay lab coats.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive, // +8
            o2: OutcomeModifierWeight.SlightNegative, // -4
            o3: OutcomeModifierWeight.SlightNegative, // -4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Honesty is good; complacency is not."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admission must be paired with a funding path."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Acknowledging limits builds trust and reduces anxiety."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Security plans cannot hinge on wishful thinking."
              }
            }
          },
          followUpId: "q_sec_triage"
        },
        {
          id: "q_root_a4",
          text: "We deny this is a collapse; it's a noisy game night. HomeGuard will seal only unsafe stacks, confiscate loaded dice, and post sweep reports so snacks and rights stay intact.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative, // -8
            o2: OutcomeModifierWeight.SlightPositive, // +4
            o3: OutcomeModifierWeight.SlightPositive, // +4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Dismissing concerns outright risks alienating players."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Minimizing risk undermines the stabilization plan."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Tone matters, but so does readiness to treat stress."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Order is essential; we will act without escalating."
              }
            }
          },
          followUpId: "q_sec_sweeps"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_triage",
        text: "On token triage: HHS proposes bed rest and gentle shuffling. What’s treated, who qualifies, and where can players audit the receipts?",
        answers: [
          {
            id: "q_sec_triage_a1",
            text: "Distress is measurable: bent corners past 15 degrees, ink smears, and panic‑trade velocity above baseline. We'll publish daily caseloads and outcome dashboards with anonymized token IDs.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive, // +4
              o2: OutcomeModifierWeight.SlightPositive, // +4
              o3: OutcomeModifierWeight.StrongNegative, // -8
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Technical details without safeguards invite backlash."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Eligibility clarity helps markets price risk."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Definitions must not gatekeep care unfairly."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "We’ll protect lines and clinics without heavy-handedness."
                }
              }
            },
            followUpId: "q_ter_triage"
          },
          {
            id: "q_sec_triage_a2",
            text: "Players keep their tokens; clinics are triage, not triage sales. Expect short visits, a bag of silica gel, and a text when your deck is cleared to leave the couch.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Plain guidance helps, provided accountability remains."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Costs must be tracked; comfort cannot replace ledgers."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reassurance reduces ER spikes and calms communities."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Crowd control should be minimal and transparent."
                }
              }
            }
          },
          {
            id: "q_sec_triage_a3",
            text: "Let’s not confuse drama with diagnosis. The headline is stability—the treatment details will come from the Tactile Sciences Board, not from rumor threads.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection reads as evasive during visible distress."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A focused scope can reduce fiscal drag."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We must speak plainly about limits and triage."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mixed messages complicate site security and flow."
                }
              }
            }
          },
          {
            id: "q_sec_triage_a4",
            text: "We can’t heal nostalgia damage or sun‑fade trauma, and we won’t pretend otherwise. Our role is rest, order, and communication so collections don’t spiral into superstition.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admission is useful; solutions must follow."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clarify funding to avoid speculative churn."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Boundaries are important, but support pathways matter."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear limits help target protection and staffing."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_sweeps",
        text: "HomeGuard’s play‑stack sweeps sound raid‑adjacent. What’s seized, how long are stacks sealed, and who audits the snack inventory?",
        answers: [
          {
            id: "q_sec_sweeps_a1",
            text: "They're not raids; they're safety straightens. We seal stacks only when wobble risk is high, bag only contraband dice, and log each touch. An independent auditor reviews every sweep.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.SlightNegative, // -4
              o3: OutcomeModifierWeight.StrongPositive, // +8
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Downplaying concerns can erode civil buy-in."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Market actors watch for overreach signals."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health impacts of disruptions must be minimized."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Framing matters; we enforce safety, not raids."
                }
              }
            },
            followUpId: "q_ter_sweeps"
          },
          {
            id: "q_sec_sweeps_a2",
            text: "Typical seals last under 72 hours, often less than a sitcom binge. Families will see door hangers, chaperones with mittens, and a QR code to track every snack.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Timelines help, but oversight must be robust."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Short seals reduce liquidity shocks."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Predictability lowers stress on families."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We accept stricter audit trails to reassure."
                }
              }
            }
          },
          {
            id: "q_sec_sweeps_a3",
            text: "I challenge the ‘raid’ framing. Fair play isn’t authoritarian; it’s the social contract of game night, with gloves on the snacks and eyes on the dice.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "I will challenge fear-mongering and defend civil norms."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Language should not inflame community tensions."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We can tolerate scrutiny but cannot halt safety checks."
                }
              }
            }
          },
          {
            id: "q_sec_sweeps_a4",
            text: "Seizures target weighted dice, counterfeit cards, and magnetized tokens, not grandma’s afghan. Chain‑of‑snack custody is timestamped and co‑signed by a neutral PTA neighbor.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Facts are welcome; so is civil proportionality."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency supports efficient compliance."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Procedures should respect household wellbeing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We will keep scope tight to maintain trust."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_triage",
        text: "If a token can’t be stabilized, do you retire or rehabilitate it, and how do you prevent triage from turning into collectible cosmetic surgery?",
        answers: [
          {
            id: "q_ter_triage_a1",
            text: "We use a decision tree: rehab if structure is intact and loss stems from grime; retire if damage undermines identity. All outcomes are logged with photos and plainly written notes.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive, // +4
              o2: OutcomeModifierWeight.SlightPositive, // +4
              o3: OutcomeModifierWeight.StrongNegative, // -8
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process without safeguards risks mission creep."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clarity helps budgeting for clinics and claims."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Objective criteria reduce disputes and wait times."
                }
              }
            }
          },
          {
            id: "q_ter_triage_a2",
            text: "We can’t reverse creases into virgin cardstock, and we won’t fake it. When care hits its limits, we say so and switch to counseling so owners feel seen, not swindled.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Limits must pair with accessible options."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fiscal realism is necessary to avoid bubbles."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We cannot promise miracles; we can promise care."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Honesty aids coordination with safety teams."
                }
              }
            }
          },
          {
            id: "q_ter_triage_a3",
            text: "No token is altered beyond gentle cleaning and flattening. The goal is playability and calm, not showroom glamour, and consent is required before every step.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calm guidance protects the broader economy."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Avoiding cosmetic excess protects public funds."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Gentle rehab reduces waste and restores confidence."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Stable routines simplify site security."
                }
              }
            }
          },
          {
            id: "q_ter_triage_a4",
            text: "The aesthetic wars can rage online without us. We’re clinicians for cardboard vibes, not stylists, and we won’t referee hollow foils versus matte finishes.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dodging the question invites oversight."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A narrow scope can cap liabilities."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We should answer specifics to keep trust."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague plans hinder safety preparation."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_sweeps",
        text: "What limits stop HomeGuard from expanding sweeps to closets and couch cushions, and will families get inventories before any dice are bagged?",
        answers: [
          {
            id: "q_ter_sweeps_a1",
            text: "We're barred from closets, cushions, pantries, and poetry journals. Scope is tabletop only, with blue‑tape borders, and violations carry penalties that actually sting.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.SlightNegative, // -4
              o3: OutcomeModifierWeight.StrongPositive, // +8
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Overconfidence can look like indifference."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Unchecked authority rattles markets."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Seals must not disrupt essential care."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Limits are clear; we will enforce them tightly."
                }
              }
            }
          },
          {
            id: "q_ter_sweeps_a2",
            text: "Inventories print on‑site and email within 24 hours, listing every bagged item, signatures, and appeal links. A civilian ombud reviews disputes in weekly batches.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process clarity is good; due process is better."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Receipts and timestamps build credibility."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Families need support alongside paperwork."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We accept audits to demonstrate restraint."
                }
              }
            }
          },
          {
            id: "q_ter_sweeps_a3",
            text: "If it isn’t dangerous, it isn’t touched. Families see everything we see, can film the sweep, and can pause it to ask questions without losing their spot.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comfort helps if paired with enforceable limits."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Promises must match resource realities."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Low-impact protocols reduce household stress."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We will keep a light footprint unless risk rises."
                }
              }
            }
          },
          {
            id: "q_ter_sweeps_a4",
            text: "Let’s challenge the myth that order equals overreach. The goal is protecting fair play, not spreading jurisdiction, and these measures sunset when the wobble passes.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "I will contest any drift beyond lawful bounds."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Constraints protect credibility and budgets."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We can be firm without expanding scope."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
