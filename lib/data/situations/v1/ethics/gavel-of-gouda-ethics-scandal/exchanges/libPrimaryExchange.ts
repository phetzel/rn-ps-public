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
      text: "After the Ethics Office waved a lobbyist’s Gouda gavel, will you demand resignations, show receipts, and bolt the pantry before trust melts?",
      answers: [
        {
          id: "a_root_1",
          text: "If critics want a clean kitchen, I’ll host a televised fondue tribunal: everyone under oath, gloves on, gavel in quarantine. Bring your receipts; I’ll bring the burners and a stopwatch.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "He seizes the stage to confront critics in a live tribunal."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Fears theatrics contaminate evidence handling and credibility."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Notes clear rules can calm markets while spectacle unfolds."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Concerned seniors read stunts as indifference to ethics."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "The Justice Ministry treats the Gouda as evidence: cataloged, sealed, and logged with custody timestamps. We will move subpoenas and interview lists forward without fear or favor.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He dislikes process talk that overshadows his challenge posture."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Welcomes strict logging and custody protocols to restore trust."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Sees compliance time as overhead without market payoff."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Worries paperwork alone won’t reassure unions and elders."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "From a finance view, surplus dairy is a spoilage liability, not a perk. We’re isolating the risk, auditing asset controls, and we see no impact on pensions, markets, or a single butterfat index.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "He balks at sober reassurances that blunt dramatic momentum."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Notes finance spin can dilute necessary evidentiary rigor."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Supports steady signals to stabilize confidence and pensions."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Sees fiscal focus ignoring seniors’ immediate concerns."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "Health acknowledges the optics curdled trust, especially with seniors and union members. We’ll fund whistleblower hotlines, offer calcium credits, and publish plain-English ethics training.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He resists contrition that could dampen the tribunal spectacle."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Warns admissions must align with investigatory constraints."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flags potential liability exposure from broad apologies."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Backs candid admission to rebuild trust with seniors and unions."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "You say the Gouda is logged like evidence; will you release the custody log and recusal memos this week, or is this another cheese cave?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Yes. We will publish the custody ledger and redacted recusals by week’s end, with hash-stamped copies and a readout of who touched what, when, and why. Names tied to actions, not rumors.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He touts quick disclosure as proof the kitchen is under control."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cautions premature releases can compromise case integrity."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Likes clarity that reduces rumor risk for markets and funds."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Notes data dumps may confuse seniors without context."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "We won’t litigate exhibits from the podium. The right place is the document portal we’re building, not a game of show-and-tell in a briefing room with melting props.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He bristles at limits on sharing exhibits during the spectacle."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Supports keeping exhibits sealed to protect prosecutions."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Worries mixed signals could unsettle stakeholders."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sees evasiveness eroding trust among unions and seniors."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "No, this is not another cheese cave. Evidence storage is audited, and any private back channel ends today. If someone hid the ball, they’ll answer to an investigator, not a fridge.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "He overplays denial, risking blowback if records contradict."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denial without documents undermines law-and-process narrative."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Notes flat denials lack the specifics markets expect."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Welcomes certainty yet urges sensitivity to senior concerns."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "If anyone claims secret stashes, send coordinates. We’ll bring a camera, a bailiff, and a food-safety meter, and we’ll open whatever door they point to, live.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dares critics, but tone risks overshadowing real fixes."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Worries taunting rhetoric pressures ongoing investigations."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Sees firm timeline challenges as helpful to quell anxiety."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fears combative stance alienates unions seeking answers."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "For seniors and unions guarding their benefits, what safeguards will Treasury and Health add so no lobbyist gift ever grazes the pantry again?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Treasury will wall off gift handling from benefits systems, publish a registry, and tighten asset controls. Pensions and checks are safe, and the only thing we’ll slice is bad process.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He plugs safeguards as part of his show-me clean-up."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Warns walls must not impede evidence custody standards."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Endorses firewalls protecting benefits from gift handling."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Notes structure alone won’t fix morale or trust issues."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "We hear the unions and seniors. The smell traveled farther than the facts, and that’s on us. We’ll co-design safeguards with them and measure trust like a vital sign, not a slogan.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He accepts fault cautiously, wary of dulling his challenge tone."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Insists admissions align with disciplinary due process."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flags budget impacts from new credits and equipment."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Supports admission with concrete supports for seniors."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "Joint guidance is drafted: no personal custody of seized items, dual-auth signatures, and automatic alerts to Inspectors. Violations trigger reviews and loss of clearance.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "He downplays procedural bulletins absent a public showdown."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Backs joint guidance to codify no-contact and tracking."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sees implementation costs and staff training burdens."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Stresses guidance must include union input and clarity."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Let’s not turn oversight into theater snacks. The work is mind-numbingly procedural, which is how you want it; drama-free systems leave nothing for lobbyists to nibble.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He rejects theater talk, yet tone reads dismissive to many."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Evasion weakens the deterrent effect of firm protocols."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection spooks risk managers looking for specifics."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Appreciates de-escalation but urges clearer timelines."
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
        text: "If daylight is the disinfectant, can we get receipts searchable by date, a public evidence photo set, and an outside auditor with no cheese on their résumé?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Receipts will be posted in a searchable ledger with timestamps and custody IDs. The photo set lands alongside, and an independent auditor will certify the chain quarterly.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He sees data portals as homework, not prime-time justice."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency tools bolster chain-of-custody credibility."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Notes upkeep costs and contractor oversight exposure."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Wants accessibility features for seniors to navigate."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We’ll default to over-disclosure so daylight stops the mold before it starts. If a document doesn’t violate privacy law, assume it’s public and easy to find.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "He thinks over-disclosure can blunt the tribunal’s punch."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Excess sunshine without context risks misinterpretation."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Positive signals stabilize expectations and reduce churn."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overload may confuse and frustrate older constituents."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "If anyone finds a gap in the receipts, we’ll pay a bounty in bureaucratic glory: your name on the fix and our outdated form retired forever.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He stakes a bounty on gaps to dramatize accountability."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Bounties might bias evidence handling and testimony."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Sees incentives speeding remediation with minimal cost."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fears gamified oversight undercuts sincere contrition."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "We under-invested in transparency tech, and that’s why you’re asking for basics. Budget is now reprogrammed to make boring, honest dashboards the default.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He concedes underinvestment but shifts quickly to action."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acceptance is fine if it preserves investigative integrity."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Worries upgrades slip schedules and exceed budgets."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Admits fault and commits to usability for seniors and staff."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "On safeguards, when does the public gift registry go live, who audits confiscated spoils, and will a seniors–union seat be built into oversight?",
        answers: [
          {
            id: "a_ter2_1",
            text: "The gift registry goes live within two weeks, with real-time entries and alerts. Seniors and workers will see changes before insiders can invent a workaround.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He touts short timelines to keep the story on his terms."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Emphasizes auditors must respect chain-of-custody rules."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Supports registries and audits to calm fiscal concerns."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Seeks guaranteed union and senior seat with real votes."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Confiscated spoils get audited by the Office of Neutral Ledgers, with random checks and serialized seals. A seniors–union seat will vote on the oversight ruleset.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He lets process speak, though it dims his confrontational edge."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Public rulesets and photos strengthen due process trust."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cautions about operational spend and data handling risk."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Wants plain-language summaries for accessibility."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "No one will be allowed to ‘borrow’ ceremonial anything. There is no gray area here, no nostalgia clause, and no dessert exemptions tucked in footnotes.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "He overstates bans, inviting scrutiny over follow-through."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Total bans may conflict with case-by-case evidentiary needs."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid prohibitions can create costly compliance bottlenecks."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Welcomes sharp lines but urges practical implementation."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "If a lobbyist tries to game the registry, we’ll publish the attempt, name the tactic, and immortalize it in training slides as a cautionary blooper.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He threatens exposure, but tone risks seeming performative."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public naming could taint witness pools and investigations."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Deterrent messaging can steady stakeholders in the interim."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Shaming tactics may backfire with caregivers and seniors."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
