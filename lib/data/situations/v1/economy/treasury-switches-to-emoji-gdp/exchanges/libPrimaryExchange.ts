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
      text: "Does emoji-based GDP launder inequality into cute icons, while unions seek emoji-indexed pay and Defense misreads 😂 as a distress call?",
      answers: [
        {
          id: "q1_a1",
          text: "I’ll level with you: I did pitch scratch-and-sniff money, and emojis are the calmer compromise. We’ll keep the icons but lock in guardrails and audits so cute symbols never conceal real inequality.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Admitting the compromise shows candor despite odd optics."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admission heightens concern about symbol confusion in ops."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Owning the gimmick narrative complicates audit credibility."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "q1_a2",
          text: "Emoji GDP includes a published basket, weights, and wage-link formulas, plus hourly calibration notes. The sparkle charts are backed by raw tables, so distributional gaps and audit trails stay visible and verifiable.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technical framing reads cold and evasive to some voters."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process talk does little to ease field-level alert fatigue."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear methodology boosts confidence in stabilization aims."
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "q1_a3",
          text: "We salute flags, not reaction GIFs. Route the math to Treasury; our subs already think 😂 is a klaxon. Emojis stay off ops systems, and we’ll follow whatever budget symbology arrives in plain text.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Pushing it to Defense looks like blame shifting from the top."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Deflecting to Treasury aligns with mission clarity for forces."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Shifting questions away risks appearing opaque on mechanics."
              }
            }
          }
        },
        {
          id: "q1_a4",
          text: "Workers won’t be paid in confetti. Contracts will tie raises to the same real costs—rent, food, time—whether the dashboard shows decimals or tiny bread loaves. Fair means measurable, not adorable.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Reassurance without proof risks sounding dismissive."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Plain-language guardrails help, but worries remain in theater."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Promising calm without detail weakens the policy’s footing."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "If unions peg raises to emoji indexes, what stops bosses from swapping a sparkle basket for a shrug-face basket and compressing pay under adorable inflation?",
        answers: [
          {
            id: "q2_a1",
            text: "Index definitions are standardized in regulation; swapping baskets would be wage fraud. We publish a daily reference index and a contract code so workers can verify the exact emoji mix on their pay stub.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rules-first answer can feel detached from shop-floor pain."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Standardization helps, but payroll edge cases still bite."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Tight definitions curb swap games and stabilize wage talks."
                }
              }
            }
          },
          {
            id: "q2_a2",
            text: "Collective bargaining will cite a single, auditable basket enforced by labor boards. Cute icons can’t move the decimal if the arbitrator brings a calculator and the rulebook shows the math in plain text.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances without teeth risk sounding like platitudes."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Union clarity is fine, yet cross-agency sync remains hard."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Single index reference adds coherence to bargaining rounds."
                }
              }
            }
          },
          {
            id: "q2_a3",
            text: "The premise assumes bosses can cosplay fairness with glitter. Under the rule, attempting to costume pay cuts in new emojis triggers penalties, back pay, and a very boring hearing that workers usually win.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Confrontational tone reads defensive and thin on fixes."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calling out loopholes helps planners anticipate abuse."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Critique alone, without mechanism, undercuts market calm."
                }
              }
            }
          },
          {
            id: "q2_a4",
            text: "Defense handles the gnarliest payroll in government; loop them in on implementation. We’ll make sure hazard pay and deployment bonuses read like math first, mascots later.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Passing the buck to Defense suggests lack of ownership."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Keeping scope tight to ops strengthens mission boundaries."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection invites doubts about Treasury’s stewardship."
                }
              }
            },
            followUpId: "q4"
          }
        ]
      },
      {
        id: "q3",
        text: "Memocrats tout sparkle charts as stability, but auditors smell fog. How will you stop emoji GDP becoming a shell game that hides who wins and who loses?",
        answers: [
          {
            id: "q3_a1",
            text: "We’re releasing raw CSVs, a versioned emoji codebook, and cryptographic hashes for each revision. There’s an open-source validator, so anyone can rerun the series and check the sparkle against the spreadsheets.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Data dump without story risks losing public confidence."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Raw feeds help testing, but field units need curated views."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Transparency and versioning bolster audit reproducibility."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "q3_a2",
            text: "An oversight board with independent statisticians and labor reps can veto cutesy charts. Every emoji panel must link to inequality dashboards and footnotes that explain who gains, who doesn’t, and why.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Oversight promise is good, yet outcomes will judge it."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Independent review lowers spillover risk into operations."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "External boards add friction to timely metric updates."
                }
              }
            }
          },
          {
            id: "q3_a3",
            text: "Fair point: early mockups leaned too whimsical. We’ve ditched glitter gradients, added margin-of-error bars, wage-share panels, and a big button labeled ‘show me the boring numbers’ for auditors and nerds.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting missteps helps, but critics see mixed signals."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Course correction is welcome, execution still uncertain."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Acknowledging flaws builds trust in iterative standards."
                }
              }
            }
          },
          {
            id: "q3_a4",
            text: "There’s no shell game here. The accounting framework hasn’t changed, and every emoji resolves to a code in the national accounts that auditors already use to test claims about growth, wages, and prices.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Flat denial clashes with public skepticism and press drills."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm stance helps morale, yet blind spots may persist."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissing concerns risks backlash from auditors and markets."
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
        text: "Defense warns submarines read 😂 as distress and drones mistake 🍞 for terrain. Will emoji GDP avoid chaos in payroll and maps, or do we tour Breadland by accident?",
        answers: [
          {
            id: "q4_a1",
            text: "Operational symbology stays MIL-standard and text-only; emojis are banned from mission software. If a periscope sees 😂, it’s because someone taped up a morale poster, not because the map is giggling.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Shunting specifics to standards sounds evasive under stress."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Affirming MIL symbology protects mission integrity."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Operational carve-outs can muddy the macro signal."
                }
              }
            }
          },
          {
            id: "q4_a2",
            text: "For payroll, Defense gets a fixed index ID and formula, not pictograms. Hazard and duty pay compute from that code; only after the math clears do dashboards add a tiny ship to make sense to humans.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Procedural clarity helps but lacks a human narrative."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Stable payroll mapping reduces unit-level admin churn."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Fixed index IDs and audits enhance system reliability."
                }
              }
            }
          },
          {
            id: "q4_a3",
            text: "We red‑teamed systems: zero drones diverted by loaves, zero sailors saved by chuckles. Ops keep clarity, families get readable pay stubs, and the only emoji in uniform is on the softball team.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Overconfidence can backfire if edge cases surface later."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Testing results reassure, though vigilance must continue."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Claims of zero risk raise eyebrows among data stewards."
                }
              }
            }
          },
          {
            id: "q4_a4",
            text: "If an emoji can scramble a drone, the drone needs adult supervision. We’re refactoring interfaces so symbols are garnish, never steering wheels, and testing until no one salutes a bread slice.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Dismissing concerns appears cavalier about real hazards."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Glib tone undercuts safety culture in complex systems."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calling for robustness aligns with resilient design goals."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "Who sets sparkle rates and loaf density, and can the public redo the math without a meme PhD—or does decimal panic still lurk behind the tiny faces?",
        answers: [
          {
            id: "q5_a1",
            text: "A public spec sets sparkle decay, loaf density, and weight updates with change logs and back‑tests. We ship notebooks so anyone can reproduce the series; if your rerun disagrees, we fix ours in daylight.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Specs talk is solid, yet empathy for users feels thin."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clear spec aids integration, but test burden remains high."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Open algorithms and seeds strengthen public replication."
                }
              }
            }
          },
          {
            id: "q5_a2",
            text: "Yes, decimals still lurk under the hood. Emojis are just friendlier labels so people don’t flee the room; the full digits sit one click away for those who prefer cold arithmetic to warm loaves.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Candid admission humanizes leadership despite odd framing."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Honesty is good, yet ambiguity can ripple into logistics."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admitting decimals may spook markets about hidden shifts."
                }
              }
            }
          },
          {
            id: "q5_a3",
            text: "We’ll freeze basket tweaks outside scheduled windows, and plain‑English notices go out for every change. Clarity outranks cuteness when there’s a tie, and the tie-breaker is always the math.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Freeze promises risk appearing rigid if conditions change."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Predictable windows simplify planning and deployments."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Less flexibility could delay needed methodological fixes."
                }
              }
            }
          },
          {
            id: "q5_a4",
            text: "If replication requires a meme PhD, we failed the assignment. That’s why we’re dogfooding with civics classes, publishing missteps, and refusing to ship until the redo button works for everyone.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Setting a hard standard invites scrutiny if gaps remain."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Replicable math supports mission audits and readiness."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric without detail risks overpromising on openness."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
