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
      text: "The Backyard Glacier Plan puts micro‑ice on private lawns with gear mandates, inspectors and liability; who pays when a neighbor slips, and why is the state in our shovls",
      answers: [
        {
          id: "a_root_1",
          text: "We're taking on the heat itself. If the choice is a sun that trespasses on every porch or a palm‑sized glacier you actually control, we'll pick the fight and win it in broad daylight.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.MajorPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.MajorNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Taking on the heat directly reads as decisive and gutsy."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Without firm duty lines, slip cases could flood courts."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Spectacle helps buy-in, but subsidies must pace rollout."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Most families won't pay upfront. We're issuing chill credits at purchase, offering frost‑backed bonds for cities, and phasing costs in gently so mortgages stay calm and lenders keep their mittens on.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Overpromising financing risks a backlash if delays hit."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft terms without legal clarity invite disputes."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Liquidity support and credits calm lenders and owners."
              }
            }
          },
          followUpId: "q_sec_finance"
        },
        {
          id: "a_root_3",
          text: "Rules are crisp: host maintains safe paths; invited guests are covered; trespassers skate at their own risk; shared driveways split duties; and ice creep across lines triggers a simple notice‑and‑fix process.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technical detail blunts the rally effect with general voters."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Defined duties and safe paths will reduce liability confusion."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Rules without funding mechanisms strain household cash flow."
              }
            }
          },
          followUpId: "q_sec_inspect"
        },
        {
          id: "a_root_4",
          text: "Before we litigate hypothetical penguins on hypothetical patios, let's cool the rhetoric. Details land this week, and yes, we'll brief with diagrams big enough for a snowman to read.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.MajorNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.MajorPositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Dodging specifics reads evasive as costs and risks mount."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Narrowing scope can help avoid overbroad enforcement risks."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection spooks markets expecting concrete terms and timing."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_finance",
        text: "Costs keep climbing: crampon racks, brine pumps, frost‑backed bonds, and lender covenants; how will ordinary homeowners avoid debt drifts and surprise liens under this ch",
        answers: [
          {
            id: "a_sec_fin_1",
            text: "Homeowners see credits at checkout, not bills in the mail. We cap add‑on charges, ban surprise liens, and time payments to winter energy savings so budgets glide instead of skid.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Cost talk without clear wins risks dulling the narrative."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lax screening could misroute credits and spark suits."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Point-of-sale relief reduces delinquency and lien risks."
                }
              }
            }
          },
          {
            id: "a_sec_fin_2",
            text: "Financing options include point‑of‑sale credits, city bulk buys, and on‑bill plans that don't touch your mortgage. There's a frost clause shielding borrowers in hardship and a public calculator for costs.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Detail helps credibility but can sap momentum if overdone."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear financing rules will curb predatory or unfair offers."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Standardized options ease lender compliance and modeling."
                }
              }
            },
            followUpId: "q_ter_liens"
          },
          {
            id: "a_sec_fin_3",
            text: "Yes, some gear prices spiked post‑announcement. We've triggered anti‑gouging rules, pooled purchases across towns, and opened domestic molds so supply can thaw and prices settle.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting price spikes concedes ground to opponents."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency can deter fraud and tighten contracts."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Price bumps heighten default risk and covenant stress."
                }
              }
            }
          },
          {
            id: "a_sec_fin_4",
            text: "If a spreadsheet makes you shiver, remember the setup is smaller than a kiddie pool. Let's not let doomsday accounting salt the driveway before the first snowflake lands.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A bit of swagger keeps supporters engaged amid scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Brushing off terms invites uneven or arbitrary enforcement."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Investors worry when responses dodge concrete cost answers."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_inspect",
        text: "Glacier inspectors will patrol patios with tape measures and ticket books; what powers do they have, what counts as compliance, and how do appeals work without freezing d",
        answers: [
          {
            id: "a_sec_insp_1",
            text: "Inspectors verify footprint, melt channels, and safety markers. They issue fix‑it notices, not raids, and can't enter homes. Appeals run through a 10‑day portal with an independent review clock.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process-heavy talk lacks punch for broad audiences."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Specific inspection criteria curb arbitrary ticketing."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Predictable standards lower financing and compliance costs."
                }
              }
            },
            followUpId: "q_ter_standards"
          },
          {
            id: "a_sec_insp_2",
            text: "Year one favors warnings and free help. Fines are capped like a parking ticket, night checks are banned, and every visit is recorded, because transparency should be warmer than the weather.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Leniency risks being framed as weak on safety and order."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too many warnings may trigger unequal application claims."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Grace periods cut household cash crunch and default risk."
                }
              }
            }
          },
          {
            id: "a_sec_insp_3",
            text: "If someone waves a rumor about glacier police, we'll meet it fact for fact. The only thing we're confiscating is excessive heat trying to loiter on your lawn.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Confronting rumor-mongers can create new side fights."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Rapid rebuttal deters bad-faith citations and myths."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "A combative tone can unsettle municipal bond buyers."
                }
              }
            }
          },
          {
            id: "a_sec_insp_4",
            text: "No, inspectors won't grade your lawn furniture or your politics; their checklist is physics, not vibes. No fashion points, no loyalty oaths, and no style citations.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm denial projects control without overexplaining."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overbroad denials may miss edge-case liabilities."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Markets prefer detail to categorical reassurances."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_liens",
        text: "If a micro‑glacier creeps across a property line or a mortgage default, who owns the runoff, who bears injury claims, and can a bank legally repossess a pile of ice?",
        answers: [
          {
            id: "a_ter_liens_1",
            text: "Runoff crossing a boundary is treated like shared gutter water: upstream must channel it, downstream must not block it. Liability follows ordinary negligence, not magic ice law.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal minutiae risk losing the broader climate frame."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Shared-runoff precedent will reduce cross-border conflict."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity limits lien disputes and servicing surprises."
                }
              }
            }
          },
          {
            id: "a_ter_liens_2",
            text: "Banks don't repossess slush. Mortgages attach to land and structures, not seasonal ice, and rules bar any lender from freezing a family over a missed brine refill.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances can sound like spin if edge cases arise."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Bank carve-outs must track tort duties to hold up."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reaffirming collateral norms calms lenders and insurers."
                }
              }
            }
          },
          {
            id: "a_ter_liens_3",
            text: "No, your neighbor can't claim your drift by squatting with a lawn chair. Adverse possession needs permanence, and ice is famously bad at permanence.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Flat denials may look dismissive of real household risks."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Reasserting title limits curbs opportunistic claims."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Unclear remedies elevate recovery and workout risk."
                }
              }
            }
          },
          {
            id: "a_ter_liens_4",
            text: "If a bank shows up with a plow, film it, call the hotline, and maybe offer cocoa while we sort the paperwork. Panic isn't policy, and neither is snow‑theft theater.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Directing people to document incidents can prevent escalation."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Crowdsourced evidence still needs chain-of-custody."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Publicized incidents can spook local credit markets."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_standards",
        text: "When an inspector demands retrofits mid‑winter—like titanium crampon racks or penguin‑proof fencing—what’s the pass/fail standard, timeline to fix, and penalty cap for a",
        answers: [
          {
            id: "a_ter_std_1",
            text: "Pass/fail centers on melt management, height limits, and visible markers. Titanium racks are optional, not sacred. Appeals get 15 days, with fast tracks for seniors and small landlords.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Specs talk is dry and unlikely to excite supporters."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Measurable standards reduce arbitrary appeals and backlog."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "New hardware mandates will strain family budgets."
                }
              }
            }
          },
          {
            id: "a_ter_std_2",
            text: "First misses top out below a parking ticket, timelines flex for weather, and we send a free fix kit before any fine. The goal is safe yards, not a ticket blizzard.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Softening penalties can appear lax on safety compliance."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Extended grace may invite selective enforcement claims."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Predictable caps and timelines steady financing and rates."
                }
              }
            }
          },
          {
            id: "a_ter_std_3",
            text: "Some rookies think a crampon is a pastry. We're correcting training, publishing the checklist, and auditing routes so enforcement learns before anyone pays.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting training gaps concedes rollout weaknesses."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Documented errors invite challenges to issued citations."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning issues supports prudent retraining investments."
                }
              }
            }
          },
          {
            id: "a_ter_std_4",
            text: "If anyone tries to turn safety rules into a gotcha scheme, we'll melt the racket in the sun and post receipts. This stays fair, or it gets fixed fast.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Drawing a line against abuse energizes core supporters."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tough talk can chill legitimate appeals and petitions."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Combative tone raises perceived compliance cost risk."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
