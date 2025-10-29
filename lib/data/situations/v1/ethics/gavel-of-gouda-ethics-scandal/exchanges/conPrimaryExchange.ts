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
      text: "Why was confiscated cheese treated like a tip jar by the Ethics Office, and when will you cut perks, tighten controls, and name the culprits?",
      answers: [
        {
          id: "a_root_1",
          text: "Let's put it on camera: a live Fondue Tribunal with every receipt, every crumb, and the gouda gavel front and center. If anyone bartered favors, they can stir the pot on air.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "He relishes the televised challenge as accountability with flair."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Justice warns spectacle could taint evidence handling standards."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Treasury dislikes optics that invite waste and compliance risk."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "HHS remains neutral but attentive to trust and worker morale."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "We're treating the gavel as evidence: triple-bagged, re-logged, and traced to the desk. We've frozen internal swag swaps and opened a case file with full chain-of-custody audits.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He accepts process talk but says it cannot replace responsibility."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Justice applauds strict evidence controls and logging requirements."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Treasury frets that bureaucracy bloat can hide real costs."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "HHS sees minimal health impact if procedures are followed."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "Markets and taxpayers are safe from dairy drama. Disposal policies are being tightened, and no pension fund or budget line is exposed to butterfat volatility from novelty gavels.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He rejects complacency and demands accountability beyond platitudes."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice is uneasy about soft-pedaling evidence discipline."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Treasury welcomes reassurance to markets and taxpayers."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "HHS notes seniors may feel dismissed without specific remedies."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "The optics curdled trust, especially with seniors and unions. We'll publish a no-snack-perk policy in health agencies, train staff, and hold listening sessions with affected groups.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "He appreciates the candor and sees a path to rebuild trust."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice worries admissions could prejudice pending reviews."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Treasury notes fiscal guardrails but awaits audit details."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "HHS values direct outreach to seniors and union partners."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Did the gouda gavel breach evidence security, and will you shut down the enforcement-office snack economy before someone plea-bargains with brie?",
        answers: [
          {
            id: "a_sec1_1",
            text: "An interagency evidence sweep starts today: barcodes on contraband, cameras on lockers, and audited sign-outs. We'll report logs weekly until every wedge is accounted for.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He is impatient and wants action, not just new checklists."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice supports the sweep and chain-of-custody fixes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury warns disruptions can inflate administrative costs."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "HHS notes minimal care impact if operations stay steady."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "No active cases were compromised by the gavel goof. It was a ceremonial trinket, not a keystone exhibit, and the team has been benched pending review.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He rejects denial tone and asks for measurable proof."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Justice withholds judgment pending sweep results."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury likes assurance that liabilities are contained."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "HHS sees denial as tone-deaf to staff and public concerns."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Security protocols are being hardened with two-person custody and surprise checks. The snack barter culture is over; evidence means evidence, not happy hour.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He welcomes calm but insists on verifiable milestones."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice cautions that reassurance must follow evidence."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury fears costs from tightened protocols without planning."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS appreciates attention to staff safety and routine."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "Let's not turn one cheesy lapse into a crime drama franchise. We'll fix the process and keep the outrage theater from writing our policy.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He pivots with humor to keep focus on accountability."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice dislikes deflection that clouds process clarity."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Treasury stays neutral on tone; budget work continues."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "HHS is neutral but urges consistency in office norms."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "How much did taxpayers eat on this dairy detour, did pensions wobble, and will you claw back gifts or auction seized cheese for real value?",
        answers: [
          {
            id: "a_sec2_1",
            text: "No fiscal hit to pensions or the budget; the incident cost us more eye-rolls than money. We're standardizing surplus disposal to prevent spoilage write-offs and rumor futures.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He thinks reassurance rings hollow without restitution steps."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice backs audits to verify no cases were harmed."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury dislikes any hint of hidden spoilage losses."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "HHS is neutral; pension impacts are outside its remit."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "If critics want numbers, let's do a line-by-line cheese ledger live, and then vote on clawbacks in prime time. Bring calculators and clothespins.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He bristles at theatrics unless tied to firm dollar figures."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Justice awaits specifics before committing resources."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury welcomes scrutiny that could recoup value."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "HHS thinks combative tone may spook seniors and unions."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_3",
            text: "We underestimated how tacky this looks to taxpayers. We'll publish a cost sheet, suspend tchotchke gifting, and own the embarrassment with a clear fix list.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He values the admission and a concrete repayment plan."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice warns contrition must be paired with evidence logs."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury worries about clawback costs exceeding gains."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS welcomes gestures aimed at restoring elder trust."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Treasury has initiated a micro-audit of seized-goods disposal and gift policies across agencies. Any recovered value goes to a taxpayer relief fund, not office decor.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He applauds concrete steps like audits and auctions."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice asks to ensure auction chains preserve evidence."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Treasury is neutral pending data on realized returns."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "HHS is neutral on fiscal steps; focus remains health."
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
        text: "Will you back an external audit with barcodes, dairy breath tests in offices, and a public log so no one moonlights as the Cheese Fairy again?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Yes. An outside inspector will certify the inventory system, with public dashboards and randomized spot tests. Findings and fixes will be posted in plain language.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He urges urgent execution, not more planning memos."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice favors outside verification of inventories."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury notes contractor costs could climb quickly."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "HHS is neutral if audits avoid service disruptions."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "Sunlight and scanners will replace whispers and snack folklore. Staff will sign for every item, and any whiff of gouda gets flagged and removed.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He dislikes soft talk; wants scanners and public logs now."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Justice withholds praise until results are published."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury supports transparency to deter waste."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "HHS fears breath tests could harm morale and trust."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "We'll invite union reps and skeptics to monitor the audit in real time. If someone can beat the barcode, they can keep the hairnet trophy.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He welcomes scrutiny and union oversight on reforms."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice warns grandstanding could slow real fixes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury worries scope creep will strain budgets."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS likes inclusion of workplace voices in audits."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "We won't turn offices into lactose TSA. Controls will be smart, not absurd, and focused on evidence, not shaming lunchboxes.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He stresses balance: controls without theatrics."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice notes deflection invites repeat lapses."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Treasury is neutral on tone; cost focus remains."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "HHS is neutral if core services stay uninterrupted."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Will you claw back lobbyist gifts, auction seized dairy for public benefit, refund taxpayers, and ban snack stipends disguised as morale?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Yes to clawbacks where allowable, yes to transparent auctions, and yes to banning faux stipends. The proceeds will credit a visible taxpayer dividend line.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He thinks promises need tight timelines and clawback metrics."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice endorses lawful clawbacks and clear rules."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury cautions against overpromising refund speed."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "HHS is neutral; benefits will depend on policy design."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Some gifts can't be reclaimed without legal knots. We'll say so, set deadlines, and stop the behavior cold while the lawyers untangle the rind.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He wants contrition paired with action and recovery."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Justice awaits legal analysis on recoverable items."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury favors practical steps that protect funds."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "HHS worries about union backlash if perks vanish abruptly."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "Rules will codify disposal paths: donate safely, auction openly, or recycle properly, with all receipts published. No more novelty gavels leaving the chain.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He praises clear pathways: donate, auction, or recycle."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice asks to document disposal to preserve cases."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury flags risk of administrative overhead growth."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS welcomes safe donation options for communities."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "If lobbyists want to play Santa, they can do it at public auction in broad daylight. We'll outbid them with transparency and a very loud bell.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He likes a tough stance that deters lobbyist largesse."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice warns rhetoric should not outrun statute."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Treasury is neutral on tone; focus is fiscal outcomes."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "HHS is neutral so long as worker health isn't affected."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
