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
      text: "Did the State Department’s Ouija habit muddle chain-of-command, bloat a new Mystic Compliance desk, and hint to rivals that deterrence now rides a planchette?",
      answers: [
        {
          id: "a_r1",
          text: "The board is retired and the ghosts are, yes, furloughed. Policy is written by humans with names and titles, not by furniture. We shut the gimmick down and tightened guidance across agencies.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "This clarifies leadership and ends the mysticism perception."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Consulting unverifiable inputs undermined accountability; we correct it."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Optics suffered abroad; we will rebuild confidence with clear authorship."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calmer signals reduce risk premia; markets reward predictable process."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r2",
          text: "Career diplomats treated the board as cultural outreach, not as a steering wheel. Any ectoplasmic doodles were ceremonial and, per protocol, promptly blow‑dried and archived as kitsch, not doctrine.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Deferring to ceremony muddled authority; I want unambiguous lines."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "We require evidentiary standards; folklore cannot inform decisions."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Our reassurance to partners is credible and appropriately human-led."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ambiguity invites volatility; costs rise when gimmicks drive headlines."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r3",
          text: "Markets panic at the word “haunted” faster than at “yield curve.” We’re focused on bond stability and, if needed, a tiny séance excise to calm headlines, not litigating metaphysics at a podium.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Deflection cannot replace accountability on chain-of-command."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes aside, we will enforce verifiable records for approvals."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Wit does not repair optics; we must show substantive control."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Focusing on stability and costs steadies markets despite the satire."
              }
            }
          }
        },
        {
          id: "a_r4",
          text: "Justice is issuing rules that bar spectral input in decision chains and require human-stamped timestamps. We’ll depose processes, not poltergeists, and publish a clean paper trail everyone can read.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Rules alone do not excuse the lapse; leadership must acknowledge it."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear prohibitions and audits restore prosecutorial confidence."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Diplomatic messaging must not appear ritual-driven; we will adjust."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Compliance overhead expands without discipline; we will restrain it."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Who actually signed off on seance-adjacent memos, and how will you restore a human chain-of-command with timestamps that aren’t smudged by ectoplasm?",
        answers: [
          {
            id: "a_s1_1",
            text: "Interim guidance moves approvals back to named officials with dual verification and immutable logs. Every decision will carry a human signature and time code. For enforcement specifics, we can speak to next steps.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassigning approvals is required because oversight was too loose."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Named officials and timestamps improve accountability and evidence."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Partners need clarity; we must prove human signatures on decisions."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Process churn adds costs if not managed with strict controls."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "No policy was authorized by a planchette, period. The novelty stamp some saw was a morale joke gone feral, not an approval device, and it never replaced the statutory sign-off ladder.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "A flat denial is insufficient without procedural fixes and proof."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Saying 'period' is not evidence; verifiable logs are mandatory."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Diplomacy suffers if we appear evasive instead of precise."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Certainty calms markets when paired with clear, audited processes."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Let’s not pretend a desk toy toppled centuries of command structure. The problem was optics, not authority, and we’re correcting the optics while keeping the actual chain intact.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Minimizing the lapse erodes trust; accept fixes and move on."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Challenges do not substitute for records; we will require them."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "We can project resolve while documenting clean chains-of-command."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissive tone risks jittery spreads and oversight costs."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Approvals are paused for a scrub and resume under normal checklists this week. Staff are retrained, and the only circle in the room will be the one on the calendar meeting invite.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "A concrete reset with timestamps reassures the public and allies."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Paused approvals imply prior gaps; we must close them permanently."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Resumption under clear names and times repairs optics swiftly."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Pauses carry carrying costs; discipline must shorten the window."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "What’s the price tag for the Mystic Compliance desk, and how will you reassure markets and rivals that deterrence doesn’t depend on a wobbling planchette?",
        answers: [
          {
            id: "a_s2_1",
            text: "Cost chatter is spicy, but markets care about clarity. We’ll keep rates steady, signal predictability, and, if superstition taxes headlines, we’ll consider a novelty fee so budgets beat folklore.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection on costs won’t satisfy oversight or voters."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Budget opacity can mask compliance lapses; we will insist on detail."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rivals read ambiguity as weakness; we must show structure."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Market focus on clarity and taxes can steady yields quickly."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "Setup ran in the low seven figures and is being unwound into existing oversight teams. No new permanent billets, a sunset memo is drafted, and the furniture is heading to surplus, not strategy.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Owning the bill is necessary, but we need faster unwind."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A transparent unwind allows compliant, auditable cost controls."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Seven-figure optics still hurt; we should emphasize reforms."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fast setup leaves liabilities; unwind must protect fiscal stability."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Deterrence is built on capability and will, not plywood poetry. Allies are briefed, rivals get the message, and markets will hear from Treasury on stability measures this afternoon if needed.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Re-centering deterrence on capability and will is reassuring."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Principles must be documented; sentiment alone is not sufficient."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "This message lands with partners and exposes adversary misreads."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Words alone do not move spreads; show budgets and calendars."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_4",
            text: "We stood it up too fast and the invoices show it. We’ll claw back contracts, fold compliance into standard lanes, and publish the receipts so taxpayers see a refund, not a séance.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting haste is honest, but we must cap costs rapidly."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We will audit invoices and tighten authorization to prevent repeats."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning mistakes adds credibility to new human-led procedures."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overruns strain funds; a clean rollback stabilizes expectations."
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
        text: "Will Justice actually depose the planchette, or what concrete bans, audits, and timestamp rules will land to keep ghosts out of the decision pipeline?",
        answers: [
          {
            id: "a_t1_1",
            text: "A rulemaking will prohibit non-verifiable inputs in deliberations, mandate human-initialed time codes, and require auditable trails. Any occult props become training aids, not instruments.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "A formal rulemaking shows leadership and restores standards."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "We will enforce a bright-line rule against unverifiable inputs."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We must ensure guidance does not impede swift diplomatic work."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rules must not balloon costs; guardrails should be efficient."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We’re not swearing in office supplies. The oath applies to officials making choices, and the fix is process hygiene, not courtroom theater for a piece of lacquered wood.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Mockery is not a policy; we need enforceable safeguards."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sarcasm aside, violations get investigated under clear rules."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tone cannot substitute for documented authorship and control."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Keeping it practical can help avoid unnecessary compliance bloat."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We’ve seen no basis for criminal charges against staff who treated this as kitsch. This is an administrative cleanup, not a true-crime saga, and the penalties will be procedural.",
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
                reaction: "Charging people is a separate matter from fixing process."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Declining charges still requires airtight records and bans."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "We can calm partners while reinforcing human-led procedures."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Uncertainty persists without a compliance framework for costs."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Chain-of-custody will now cover drafts, stamps, and signoffs end to end. That means fewer rumors and faster decisions that look as serious as they are.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances help, but evidence chains must be verifiable."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Stronger chain-of-custody supports future investigations."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We accept oversight to prove real control and competence."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Documentation must minimize incremental overhead to be credible."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "How will State convince partners and adversaries that policy is human-led and the Ouija era was pageantry, not policy, without sounding like you’re still negotiating with",
        answers: [
          {
            id: "a_t2_1",
            text: "We’re issuing a cable clarifying authorship standards, holding briefings with allies, and showcasing real exercises. Any ceremonial trinkets are retired, polished, and kept far from anything that makes policy.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear cables and standards show discipline and intent."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Claims must be backed by records; we will verify compliance."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "This reassurance aligns with allies’ expectations of clarity."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Messaging should not add cost; keep it lean and predictable."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Posts will run training on note-taking and optics, swap out gimmicks for protocol binders, and fold cultural show-and-tell into public diplomacy where it belongs, not the sitrep.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Training helps, but oversight needs measurable outputs."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Mandated training supports enforceable, auditable practices."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overtraining can look defensive; keep focus on delivery."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Workshops cost money; we need budget discipline and timing."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "If an adversary needs a board to read our resolve, they’re already worried. We’ll focus on visible readiness and let them wonder how boring our meeting rooms have become.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Taunts risk escalation; seriousness reassures audiences."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mockery undercuts the record; stick to verifiable discipline."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tone must support credibility, not belittle concerns."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Deflecting to macro stability can reduce market noise briefly."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We don’t accept the premise that credibility hinged on plywood and varnish. Capability briefs, not craft projects, are what move needles in the real world of deterrence.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissing the premise alienates skeptics; show receipts."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Refusal to engage weakens enforcement posture and clarity."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "We can reject false frames while proving human-led policy."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Investors want data, not rhetoric; publish timetables and costs."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
