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
      text: "How did State’s Secret Santa become a classified clown car, and what’s the security damage, the subpoena bill, and the procurement lesson from pickle bribery?",
      answers: [
        {
          id: "a_root_1",
          text: "I won’t be lured into condiment gossip. Presidents tackle mustards, not pickles, and we let the ethics elves audit the list. Agencies handle facts; I’ll handle the recipe for prevention.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "I will not indulge condiment gossip and will keep the focus on governing priorities."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection risks muddling the record; subpoenas rely on clarity, not quips."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes aside, the department must answer process questions directly and promptly."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "We follow the brine, not the buzz. Subpoenas are issued based on chain‑of‑custody gaps, logs are preserved, and interviews scheduled this week. No leaks get a holiday from recordkeeping.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Excess detail at the podium could compromise ongoing actions and confuse the public."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A crisp timeline helps the courts and preserves chain-of-custody integrity."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Enforcement talk without costs invites budget drift and market speculation."
              }
            }
          },
          followUpId: "q_sec_1"
        },
        {
          id: "a_root_3",
          text: "We deny swapping secrets for snacks. The jars were ceremonial brine tokens for a morale drill, and any sheets displayed were decoy training pages, not classified material.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Flat denials can appear evasive if not paired with verifiable facts and steps."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Affirming decoys and drills reassures allies about our document discipline."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dismissiveness can overlook financial controls that deter barter-like abuses."
              }
            }
          }
        },
        {
          id: "a_root_4",
          text: "We challenge any jar economy that dodges labeling, valuation, or audit. Unpriced pickles distort incentives and risk funds; we’ll move to firewall budgets from brine‑backed gimmicks.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Aggressive rhetoric invites follow-ups that could distract from core policy."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Challenging shadow jar economies signals vigilance for price integrity."
              }
            }
          },
          followUpId: "q_sec_2"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_1",
        text: "Walk us through the chain‑of‑custody timeline and expected subpoenas, and detail the current taxpayer cost while you seal whatever leak let pickles near memos.",
        answers: [
          {
            id: "a_s1_1",
            text: "Chain‑of‑custody starts with badge scans at 08:12, ends with a mislabeled gift bag at 12:03. We’ve queued a dozen subpoenas and frozen access logs. Current external legal spend is under five figures.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Operational minutiae from the lectern can compromise investigative posture."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Documented scans and logs strengthen admissibility and procedural trust."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Uncosted timelines risk runaway legal expenses and budget surprises."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Recounting every step publicly can expose workflow seams to adversaries."
                }
              }
            },
            followUpId: "q_ter_1"
          },
          {
            id: "a_s1_2",
            text: "Taxpayers aren’t underwriting a pickle pageant. We’re narrowing subpoenas to key custodians, capping outside counsel hours, and redirecting fines into training, not tchotchkes.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurances without figures can be read as minimizing the underlying risk."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Setting spending expectations calms vendors and steadies procurement cycles."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cost talk alone cannot substitute for evidence handling and compliance."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "We won’t litigate evidence tallies from the podium while interviews are active. Security first, spectacle second, and numbers come in an audit report, not a stocking stuffer.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dodging details suggests defensiveness and invites further scrutiny."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Refocusing on remediation shows ownership of security at the facility level."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "With subpoenas active, public hedging risks confusion about the record."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity about costs can unsettle budgeting and vendor expectations."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If bills balloon, we’ll challenge invoices line by line and claw back waste. Vendors who scented opportunity in brine will meet our cost cops instead of carolers.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Setting firm guardrails projects control while probes proceed independently."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Invoice scrutiny and caps protect taxpayers and deter opportunistic billing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fiscal pushback must not impede lawful compliance with court orders."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_2",
        text: "Procurement‑wise, how did pickle barter even happen, what safeguards failed, and will you ban unlabeled jar economies that warp compliance and spook markets?",
        answers: [
          {
            id: "a_s2_1",
            text: "We’ll box out unlabeled jars from procurement entirely and publish a condiment schedule. Shadow barter is a market risk, not a morale benefit, and it ends this quarter.",
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
                reaction: "Over-correcting from the podium can appear reactionary and politicized."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Closing loopholes curbs gray-market incentives that distort pricing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Policy shifts must align with enforceable rules and evidentiary standards."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Procurement changes should not impede legitimate morale-building activities."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "Barter is forbidden, full stop. This was a morale exchange misread as a market, and no secrets moved for snacks. We’ve reminded staff that whimsy is not a waiver.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Absolute denials risk backfiring if later facts complicate the narrative."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarifying that barter is prohibited reinforces discipline in operations."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ignoring market signals could miss spillovers into vendor behavior."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Procurement is updating gift and gratuity rules with explicit ‘no jar’ clauses, randomized audits, and a whistle portal. Compliance training will include absurd case studies.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Concrete policy updates show leadership without prejudging investigations."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear guidance tightens compliance and aids future prosecutions."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rule changes must track cost impacts to avoid unintended price shocks."
                }
              }
            },
            followUpId: "q_ter_2"
          },
          {
            id: "a_s2_4",
            text: "There’s no sign of lasting market stress from this brine blip. We’re coordinating with the Index steward to calm pricing and will publish a normalcy note this week.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Minimizing potential effects can seem dismissive of security concerns."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calming statements help avert overreaction in related commodity niches."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances must not preempt the evidentiary process or subpoena scope."
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
        text: "What steps are hardening document handling now, and when does the classification audit finish without turning Secret Santa back into Secret Subpoena?",
        answers: [
          {
            id: "a_t1_1",
            text: "We’ve moved to dual‑custody for sensitive packets, tamper‑evident seals on swaps, and digital watermarking with real‑time alerts. The classification audit concludes before month’s end.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Acting quickly on safeguards demonstrates command responsibility."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Dual-custody and logs strengthen prosecutable chains of evidence."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Added controls must be budgeted to avoid hidden compliance creep."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Staff are pausing party antics around secure zones. Refresher training is live, supervisors sign off nightly, and we’ll keep the season festive without letting files wear elf hats.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance without metrics may read as soft-pedaling the risk."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Predictability around timelines helps agencies plan audit workloads."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comfort messaging should not dilute accountability for handling rules."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Morale steps must not interfere with controls near classified zones."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Nothing indicates a systemic breach. What we have is a sloppy joke colliding with rules, and the rules are winning. The vault stays shut, and the jokes stay above board.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Downplaying systemic issues can erode trust if new facts emerge."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Affirming limited scope is valid if audits verify containment."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Even contained issues can produce oversight costs that must be tracked."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We’re not naming bag‑swappers while interviews continue. The point is the process, not the punchline, and we’ll brief you again when the audit clocks out.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Withholding names is prudent, but it risks appearing opaque to the public."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Protecting interview integrity prevents costly rework and appeals."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Premature disclosures can taint witness statements and affidavits."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_2",
        text: "Who is tallying the full subpoena‑and‑pickle price tag, and what reforms will stop condiment bribery from gaming budgets, bonuses, or brine‑backed derivatives?",
        answers: [
          {
            id: "a_t2_1",
            text: "We’ll firewall bonuses from gift pools, ban brine‑backed derivatives, and treat jars as zero‑value for budget purposes. If it isn’t receipted, it isn’t currency in our house.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Line-item posturing can sound punitive if not paired with clear metrics."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Blocking pay manipulation deters perverse incentives in budgeting."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reforms should align with enforceable standards and remedies."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rules must still allow benign recognition programs without security risk."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Treasury and Justice are co‑maintaining a subpoena cost ledger with weekly updates. A public report will itemize hours, filings, and any recoveries, minus the pickle puns.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Joint tracking of costs signals ownership and transparency from the top."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Shared ledgers improve subpoena compliance and audit readiness."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Governance must prevent duplication and keep overhead under control."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "The tab is modest and shrinking as scope narrows. Prevention costs less than cleanup, and we’re funding the former so taxpayers aren’t paying late fees on punchlines.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Overly rosy projections can appear dismissive of legal exposure."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Stabilizing expectations can reduce volatility in related cost centers."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances should not preempt evidence development or court timelines."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We admit procurement rules didn’t imagine pickle bribery creeping past common sense. That’s on us, and the patch ships with teeth, audits, and consequences.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Owning gaps is responsible, but it invites scrutiny of senior oversight."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Acknowledging blind spots helps target training and procedural fixes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Remediation plans must specify funding sources to avoid drift."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
