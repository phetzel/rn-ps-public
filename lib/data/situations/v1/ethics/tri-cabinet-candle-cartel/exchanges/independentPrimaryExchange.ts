import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const independentPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.IndependentPrimary,
  content: {
    rootQuestion: {
      id: "q_root",
      text: "Did this administration greenlight a 'diplomatic immunity' gift shop, and how will you stop novelty candles from warping procurement, ethics, and trust?",
      answers: [
        {
          id: "a_root_1",
          text: "The President will challenge the candles to a trial by bathtub: if they out-scent a skunk, they’re evidence; if not, they’re demoted to room fresheners. Meanwhile, policy is getting heatproof walls and sober checklists.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "He relishes a playful challenge to defuse the candle fiasco."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "State bristles at framing that trivializes protocol duties."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice dislikes theater overshadowing due process needs."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Defense enjoys humor that distances them from sales."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "On State’s side, these were ceremonial “smell treaties,” not get-out-of-jail votives. Protocol gifts soothe jet lag and awkward toasts; they don’t confer legal force or smuggle immunity into a carry-on.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He worries deflection reads as evasive in an ethics storm."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "State welcomes the 'smell treaties' context as cover."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice fears soft talk may dull enforcement urgency."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Defense sees deflection as unhelpful to clear their name."
              }
            }
          }
        },
        {
          id: "a_root_3",
          text: "Justice has quarantined every wick, mapped procurement trails, and frozen novelty labels. Any “scented pardon” talk is satire until an inspector stops laughing long enough to file paperwork and, if needed, charges.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He finds the tone too legalistic for public reassurance."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State senses process exposure may invite extra scrutiny."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Justice approves a documented quarantine and audit trail."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Defense objects to hints they slipped on procedures."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "Defense denies vending anything but morale flares that happen to smell like citrus. They grant no perks, no access, no battlefield pardons; they mostly repel moths and cafeteria odors. We'll post inventory logs Friday.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He dislikes flat denials without broader accountability."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State worries denial could sour allies if facts evolve."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Justice warns denial can choke cooperation with reviewers."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Defense is pleased to assert nonvending and intent."
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
        text: "Which procurement loopholes let 'scented pardons' pass as décor or morale gear, and what guardrails will keep gift-shop satire out of serious purchasing?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Procurement will recode novelty items out of exempt categories, require item-level labeling audits, and publish purchase tags. If it burns or glows, it gets extra review and a human who reads the invoice end to end.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "He likes decisive fixes to close novelty-item loopholes."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State fears rigid coding could snarl legitimate protocol."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice wants clearer fraud flags than category tweaks."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense favors clarity separating morale gear from kit."
                }
              }
            }
          },
          {
            id: "a_sec1_2",
            text: "We’ve paused all candle-like buys while a rapid rewrite closes the décor and morale loopholes. Teams get cliff-notes training: if it smells like rosemary and immunity, it’s not office supplies.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He sees a pause as prudent but worries it signals panic."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "State welcomes a reset window to standardize catalogs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice prefers hard controls over comfort language."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense dislikes blanket pauses that can slow readiness."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "We admit the catalog had a catchall line where “ceremonial” blurred into “useful.” That’s on us, and we’ll claw back charges and vendor credits as needed once the audit lands, with receipts posted.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He views admission as step one, but action must follow."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State dislikes highlighting gaps in ceremonial sourcing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice values candor that strengthens case for reform."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense worries admissions may invite costly retrofits."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_4",
            text: "Many offices stock morale knickknacks; the problem is labeling comedy as compliance. We’ll fix the codes, not ban mugs, plants, or the occasional harmless desk cactus that never promised legal powers.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He rejects framing this as mere knickknacks and vibes."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State fears deflection will be read as dodging fixes."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice sees deflection undermining credible enforcement."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Defense appreciates separating morale from misconduct."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Is the Justice review truly independent with Defense and State implicated, and how will ethics enforcement stay real without turning staff into full-time wax detectives?",
        answers: [
          {
            id: "a_sec2_1",
            text: "The review sits in an insulated office with its own counsel, subpoena tools, and a direct line to the ethics board. Defense and State deliver documents on a timer, not editorial notes, and missed deadlines have teeth.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "He supports strong walls ensuring review independence."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State resents implications they would bias the probe."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice worries isolation could strain limited staffing."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense appreciates insulation that clears unit conduct."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "No one’s getting a pass for wearing the same team jacket. Parallel tracks keep policy moving while ethics does the unglamorous math, and we’ll publish milestones you can check against the calendar and the ledger.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He hears team spirit, yet wants proof of equal standards."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "State likes reassurance that avoids presuming bad faith."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice finds the tone soothing but light on tools."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense fears reassurance alone won’t dispel suspicion."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "No, Defense and State aren’t grading their own essays. They’re respondents under deadline with consequences if they stall. Independence isn’t a scented word on our flowchart, it’s the only ink we use.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He doubts denial suffices without transparent guardrails."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State cringes at being named while still under review."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice welcomes clarity that they alone steer the review."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense worries denial invites calls for external checks."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "If anyone thinks bergamot fog is a shield, we challenge them to show up under oath with the wax melted away. Sunlight is our only approved fragrance, and perjury still smells like perjury.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes gambits that risk spectacle over substance."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State fears trial-like antics could embarrass diplomats."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice rejects showdowns that bypass established process."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Defense favors tests that could prove their noninvolvement."
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
        text: "If labels were misprinted as 'pardons,' will you audit vendors, claw back funds, and publish receipts, or stage a Great Smell-Off and call it oversight?",
        answers: [
          {
            id: "a_ter1_1",
            text: "An external auditor will trace each purchase order to vendor, SKU, and approver. We’ll post a ledger with redactions for actual security, not embarrassment, and refer fraud to the folks who carry subpoenas.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "He backs external auditors to trace every misprint cost."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State worries outside reviews will cast protocol as lax."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice seeks enforcement teeth beyond vendor tracing."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense welcomes audits that distinguish flares from gifts."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We should’ve caught the misprint pre-cart. Owning that, we’ll renegotiate contracts with clawback clauses, tighten acceptance checks, and bar vendors who mixed comedy with compliance on the public’s tab.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He sees contrition as overdue; repairs must be swift."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "State favors owning errors to stabilize partner trust."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice cautions apologies without fixes ring hollow."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense fears admissions will be weaponized in hearings."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "The public will see receipts, timelines, and refunds, not a pageant. Any performative nonsense gets canceled before the confetti cannon even leaves the loading dock.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He wants receipts, yet finds tone too placating."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State frets that exposure of receipts fuels headlines."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice welcomes transparency on refunds and timelines."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense worries public logs could reveal training gaps."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "If a vendor swears “pardon” meant peppermint, we’ll invite them to explain that under oath and under nose. Bring samples; our inspectors’ sinuses are ready.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes stunt tests that might trivialize oversight."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State fears adversarial theatrics with contracted firms."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice rejects games in place of enforceable remedies."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Defense supports tough vendors if claims prove misleading."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Reports say foreign guests got 'smell treaties' in gift bags; will State retrain protocol teams and update guidance, or pretend bergamot counts as international law?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Gift bags are theater to keep handshakes from lasting eight minutes. We’ll swap the props, not the policy, and retire any label that reads like a law degree dipped in wax.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "He likes humor to cool tensions with visiting delegations."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State dislikes jokes when protocol credibility is at stake."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice worries levity blurs lines on legal obligations."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense is comfortable calling it harmless hospitality."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "State is issuing guidance to every protocol team: ceremonial gifts are hospitality, not status. New checklists require legal review for any item that even jokes about authority.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He favors guidance but wants measurable behavior change."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "State welcomes clear retraining for every protocol team."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice sees guidance as useful but seeks enforcement."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense fears new rules will spill into field logistics."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "No partner unlocked secret powers with bergamot. We’re retraining hosts, scrubbing labels, and posting a public catalog so the only surprises are whether it’s citrus, cedar, or none of the above.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He hears reassurance; he needs audits to match the claim."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State worries promises alone will not quiet partners."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice appreciates firm denial paired with monitoring."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense dislikes added checks that might slow events."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "There was no immunity conferred via tote bag. International law is not a diffuser oil, and no document treated those products as anything beyond souvenirs.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes denial without explicit corrective guidance."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State fears a flat denial could sour protocol rapport."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice warns that denial can weaken future compliance."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Defense backs a clear rejection of 'immunity' claims."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
