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
      text: "Is the Treasury’s Smile Standard turning paychecks into performative joy, baking dental privilege into law, and letting gig bosses audit our dimples?",
      answers: [
        {
          id: "a_root_1",
          text: "We’re not turning wages into a talent show. The plan explores voluntary proof-of-presence, not compulsory grinning, and nobody’s paycheck depends on dimples. The President won’t put his face on an app.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Firm denial projects autonomy from gimmicky currency proposals."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Blanket denial sidesteps rights issues raised by compelled smiling."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Denying the plan undercuts the fiscal case for the new unit."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "No direct operational impact from this framing."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "The Smile Standard is a prototype ledger unit, pegged to the median molar, with grinflation capped at two chuckles. Sensors score transactions, not people, and dental care subsidies buffer any bite from bias.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Too technical and evasive; it blurs responsibility for impacts."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Unclear safeguards risk chilling speech and due process."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear peg details calm markets and steady implementation."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical peg talk ignores frontline enforcement realities."
              }
            }
          }
        },
        {
          id: "a_root_3",
          text: "Homeland’s Smile Shield blocks counterfeit grins from mime rings and photogenic raccoons. It flags spoofing at the edge, deletes transit images in minutes, and forbids patrols that ticket resting faces.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Security spin dilutes accountability for economic choices."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Surveillance assurances lack warrant standards and limits."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Security focus distracts from monetary design credibility."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Emphasizing counterfeits strengthens compliance posture."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "Justice has already warned: no compelled facial expression without a grin warrant and Grinanda rights. If any agency tries cheek-snooping as speech, expect us in court with very straight faces.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Legal hedging invites gridlock and weak leadership signals."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Affirming limits on compulsion upholds core expression rights."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Legal caveats erode confidence in the rollout and pricing."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Constraints without tools could weaken field readiness."
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
        text: "Compelled smiling looks like face-forced speech. Will Justice demand grin warrants, appeal rights for resting-face bias, and hard limits on cheek surveillance?",
        answers: [
          {
            id: "a_s1_1",
            text: "Compelled smiling is perilously close to coerced speech. We support an explicit Face Off switch, grin warrants for any capture beyond payments, and court review when algorithms misread a neutral jaw.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rights talk without fixes appears oppositional, not executive."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Calling coerced smiling out affirms First Amendment values."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Legal challenges threaten the currency’s predictable uptake."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Litigation posture may stall needed guardrails on fraud."
                }
              }
            }
          },
          {
            id: "a_s1_2",
            text: "Treasury’s draft includes an appeal lane for resting-face misfires and a “smile-free” transaction mode. Calibration discounts account for braces and medical variance; we can detail the peg mechanics.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process talk feels technocratic and detached from lived harms."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Appeal lanes help, but warrants and limits remain unclear."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Procedural clarity reduces risk and increases user confidence."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Paper safeguards alone won’t deter spoofing or collusion."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_3",
            text: "There is no cheek surveillance program. The app logs cryptographic blips that prove a human showed up, not whether they beamed like a parade float, and it can run with cameras fully blacked out.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Firm denial asserts leadership against intrusive monitoring."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rejecting the premise delays essential rights safeguards."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Downplaying systems invites confusion in regulated markets."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "No operational change stems from simply denying surveillance."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Users can mask their face with a system emoji, route appeals to a human panel, and get relief credits if flagged twice. We’d rather pay for fairness than subpoena someone’s zygomatic arch.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Soft assurances seem cosmetic and avoid structural issues."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Masks help users, but remedies need enforceable standards."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Opt-outs complicate settlement finality and auditing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Practical mitigations can reduce false flags and overreach."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Security touts Smile Shield catching grins. How avoid policing faces on buses or in breakrooms while mime crews and raccoons try to game it?",
        answers: [
          {
            id: "a_s2_1",
            text: "Smile Shield focuses on counterfeiters, not commuters. Field kits test for live liveness, footage autodeletes by default, and any workplace audits require consent or contract limits-no grin cops on lunch.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances risk minimizing real world edge cases on buses."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limiting scope is good, but safeguards must be binding."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Security framing doesn’t address market trust in ledgers."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Targeted enforcement improves focus and cuts mission creep."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "Counterfeit grin networks use looped expressions and glossy mask kits. Our models spot artifact seams and raccoon-eye cadence, and we publish false-positive rates so watchdogs can roast us if we miss.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Detail on adversaries is useful, yet it shifts blame outward."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Threat intel is helpful, but oversight triggers are absent."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Operational intel supports risk pricing and system design."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overexposure of tactics can hinder adaptive enforcement."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "If platforms treat faces as timecards, we’ll challenge that. Security isn’t a blank check to grade mood, and we’ll push for a no-expression-scoring clause in any public-transit deployment.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Backing pushback on platforms signals worker protections."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Vowing to challenge misuse defends civil liberties at work."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive posture could spook partners and vendors."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Civil suits may slow coordination with security teams."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Let’s separate theater from threat. Mime troupes aren’t tanking the money supply, and raccoons mostly want snacks; the job is secure payments without creepiness, which is where we’re headed.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Light tone lowers temperature but risks trivializing stakes."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Humor cannot substitute for enforceable civil-rights limits."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection undermines clarity business systems require."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes muddy guidance to field agents and local partners."
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
        text: "Does pegging Smles to teeth medians entrench dental privilege, dock braces wearers, or fund orthodontia to keep grinflation from chewing pay?",
        answers: [
          {
            id: "a_t1_1",
            text: "The peg uses population dental medians, not premium veneers, and braces incur a temporary neutrality band that neither docks nor boosts. Orthodontic care is subsidized via a Smle credit, not a toll.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Technical reassurances feel detached from equity concerns."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Neutral metrics still need rights audits and appeal paths."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear methodology builds trust in valuation and stability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Method talk misses fraud vectors exploiting sensors."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We did find early bias toward bright studio lighting and celebrity-tooth posters. That’s fixed by ambient-normalized scoring, and we’ll publish a report on remaining quirks and how we sand them down.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admission is candid but exposes gaps under your watch."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning bias paves the way for enforceable corrections."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledged flaws can unsettle stakeholders and markets."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Exposed bias signals tempt adversaries to probe systems."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "No one loses pay for jaw rehab, tooth gaps, or fatigue. The system treats those as protected states with auto-waivers, and unions can negotiate wider neutrality bands for high-strain shifts.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Protecting clinical cases shows empathy and prudence."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Exemptions help, yet they must be statutorily grounded."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Carve-outs can complicate uniform settlement accounting."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Humanitarian safeguards ease enforcement tensions."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Let’s not pretend ink money was neutral; it worshiped proximity to vaults and tidy signatures. Smles at least ship with guardrails you can read without a magnifying glass.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Context is fair, but deflection won’t fix present inequities."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Past flaws do not excuse creating a new speech burden."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Minimizing risks weakens investor and vendor confidence."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comparisons distract from current operational needs."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "At work, who audits dimples-apps or gig platforms-and what stops smile quotas from punishing night-shift fatigue or retirees with default joy?",
        answers: [
          {
            id: "a_t2_1",
            text: "If a boss sets smile quotas, that’s compelled expression masquerading as payroll. We’ll challenge abusive clauses and seek penalties for joy-hacking timecards that punish night crews or caretakers.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Confronting abusive quotas is right, but plan details are thin."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Drawing a red line on compulsion defends workplace rights."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Limits on metrics may reduce auditability and settlement speed."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard limits can hinder detection of coordinated fraud rings."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Workers get a manual override to log “present, not posing,” and retiree benefits never hinge on cheer. There’s an ombudsperson with teeth-figuratively-to unwind any dimple-driven dockings fast.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassurances sound humane, yet may be gamed by bad actors."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comfort is fine, but remedies need appeals and penalties."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Manual overrides add friction and reconciliation delays."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Humane controls reduce false positives and public backlash."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Audits are algorithm-first, human-final. Managers never see facial frames, only pass/fail tokens with reason codes, and platforms must keep a zero-jaw-scoring setting available in their SDKs.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Algorithm-first audits risk bias without strong guardrails."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Human review is vital, but rights triggers must be clear."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Hybrid audits can improve accuracy and compliance."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Layered review may slow time-critical interdictions."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "No, we aren’t deputizing supervisors as smile police. The government’s job is setting payment rails and rights baselines, not grading moods in break rooms or rating dimples per hour.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Firm denial sets a boundary against deputizing supervisors."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denying risks ignoring real coercion patterns on platforms."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal clouds guidance for employers and processors."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "No immediate operational change follows from denial."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
