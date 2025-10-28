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
      text: "Leaked budgets show Defense bankrolled autonomous lawn gnomes with microdrones; who okayed porch surveillance and how much beard-budget hid in the fine print?",
      answers: [
        {
          id: "a_r1",
          text: "Look, if your yard can’t outsmart a garden statue, how will it outwit foreign spies? We test odd prototypes to harden defenses, not to snoop porches, and we invite oversight to kick the gnome tires.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "He relishes the taunt and the spectacle for home turf optics."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This framing trivializes testing risks and alarms appropriators."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Allies hear bluster, not clarity; that offers no relief yet."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "A showy line complicates prosecutorial restraint but changes little."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "The program is a limited pilot for non‑lethal yard diplomacy, with strict geofences and zero retention of porch footage. We’ll publish the line item and brief appropriators before anyone waters a ceramic.",
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
              reaction: "He dislikes the cautious tone and loss of narrative control."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Calm framing preserves funding and signals program discipline."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft-pedaling scope leaves partners uneasy about future use."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances risk prejudicing reviews before facts are established."
              }
            }
          },
          followUpId: "q_sec_budget"
        },
        {
          id: "a_r3",
          text: "Abroad, a few embassy gardens did hear unwanted serenades; that’s on us. We’ve paused exterior placements with partners and will own the missteps while repairing neighborly trust.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Admitting stumbles blunts his combative posture and weakens spin."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Acknowledgment invites budget riders and tighter constraints."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Candor steadies allies and resets expectations for guardrails."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Premature detail could complicate parallel legal determinations."
              }
            }
          }
        },
        {
          id: "a_r4",
          text: "Several aspects are under active legal review, including microdrone licensing and alleged ‘gnome entrapment.’ We won’t litigate specifics here while subpoenas are out and interviews are ongoing.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He bristles at deflection that makes the story feel evasive."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal hedging fuels suspicion about procurement and testing."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dodging specifics leaves foreign counterparts unsatisfied."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Staying within inquiry lanes protects cases and due process."
              }
            }
          },
          followUpId: "q_sec_privacy"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_budget",
        text: "Walk us through the paper trail: who greenlit ‘yard diplomacy’ into drone gnomes, which contractors got paid, and where did oversight hide under those plastic beards?",
        answers: [
          {
            id: "a_sb1",
            text: "Approvals ran through the Advanced Lawn Operations board, then a pilot line item capped at peanuts. Audit flags, memos, and change logs will be released this week, including which vendors touched glitter.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "A concrete trail supports his claim of purposeful innovation."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Detailing governance reassures funders and oversight committees."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Budget minutiae does not ease allies’ operational concerns."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Excess transparency may hinder ongoing procurement reviews."
                }
              }
            },
            followUpId: "q_ter_contracts"
          },
          {
            id: "a_sb2",
            text: "This was fenced as a prototype, not operational surveillance, with concurrency checks and independent cost caps. We’ll seat appropriators in the test yard and post a readable budget summary.",
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
                reaction: "Downplaying scope undercuts his bold posture and narrative."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Prototype framing limits fallout and keeps options open."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It offers little on international impacts or remedies."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "It risks implying conclusions while inquiries remain active."
                }
              }
            }
          },
          {
            id: "a_sb3",
            text: "Nothing ‘vanished.’ Oversight sat in every review, and each gnome shipped with a test plan, not a blank check. Claims of beard-shaped slush funds are simply wrong.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "A hard denial invites fact checks he may not control."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                reaction: "Categorical denials can backfire if memos surface later."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A firm line briefly calms partners seeking decisiveness."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Absolutes constrain prosecutorial flexibility and posture."
                }
              }
            }
          },
          {
            id: "a_sb4",
            text: "Because procurement reviews are in motion, we won’t itemize vendors today. Records are preserved, and auditors—not memes—will sort what’s allowable and what gets composted.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process talk feels evasive and cedes the agenda to critics."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Silence signals risk and invites harsher budget fences."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Non-answers strain diplomatic patience during briefings."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Maintaining review integrity protects future prosecutions."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_privacy",
        text: "On porch surveillance creep: what data did the microdrones collect, who handled it, under what authority, and will you pause deployments until rules outnumber the gnomes?",
        answers: [
          {
            id: "a_sp1",
            text: "No continuous monitoring occurred; test yards were geofenced and non-participating porches were auto-blurred. No face analytics were used, and we’re pausing new placements pending a privacy board review.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Privacy caveats blunt his bravado and meme-friendly posture."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear limits temper backlash and stabilize testing permits."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Domestic framing overlooks cross-border data sensitivities."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances may prefigure constraints before facts are set."
                }
              }
            }
          },
          {
            id: "a_sp2",
            text: "Legal standards and any ‘public garden’ definitions live with Justice right now, and we won’t preempt them. They’ll brief the committee; we’re cooperating and have halted anything even close to gray.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legalese sounds like retreat from his combative stance."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection suggests gaps in compliance and diligence."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It sidesteps allied concerns about incidental collection."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Caution preserves prosecutorial latitude and neutrality."
                }
              }
            },
            followUpId: "q_ter_legal"
          },
          {
            id: "a_sp3",
            text: "A few units sang while scanning, which was ill-advised. We disabled that module, tightened data retention to hours, and are rewriting rules so optics don’t hum while optics work.",
            type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting missteps undermines the spectacle he prefers."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledging flaws invites stricter oversight and pauses."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning errors builds credibility with irritated partners."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public detail risks coloring witness testimony and cases."
                }
              }
            }
          },
          {
            id: "a_sp4",
            text: "Collected telemetry stayed in a sandbox with strict retention and access logs. Under 200 controlled sorties ran, all under test notices, and datasets were purged after algorithm validation.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Tight guardrails let him claim control without retreat."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Sandboxing reassures reviewers on containment and access."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Data locality remains unclear for cross-border issues."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Even isolated data must align with warrant and retention law."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_contracts",
        text: "Did the Rapid Garden Initiative dodge bids via ‘seed grants,’ and will you release receipts, vendor lists, and test logs before the committee gavels in?",
        answers: [
          {
            id: "a_tc1",
            text: "The seed grants used mini-competitions with three bids minimum; redacted receipts and vendor lists post within 72 hours. Test logs are queued for the committee and the inspector.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Openness on process supports his claim of smart risk-taking."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparent competition calms budget hawks and auditors."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Contract detail still omits foreign notification issues."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Disclosures may complicate potential charging decisions."
                }
              }
            }
          },
          {
            id: "a_tc2",
            text: "No shortcuts here: we kept awards small to cap risk and invited external auditors. Next trials add live oversight in the yard, not just on paper.",
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
                reaction: "Downplaying ambition dilutes his preferred bold narrative."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Risk-capping aligns with prudent stewardship of funds."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It offers no remedy for affected diplomatic grounds."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Careful phrasing avoids prejudicing procurement probes."
                }
              }
            }
          },
          {
            id: "a_tc3",
            text: "We did not sidestep competition. ‘Seed’ is a standard pilot label, and rumors about ‘friends-and-gnomes’ favoritism don’t match the documentation or the timelines.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flat denial can backfire if emails or memos surface."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "A hard no invites deeper subpoenas and discovery demands."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A firm stance briefly reassures partners seeking order."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid claims constrain charging options if facts evolve."
                }
              }
            }
          },
          {
            id: "a_tc4",
            text: "If the alternative is testing on your block instead of a fenced lawn lab, say the quiet part. We chose the safer sandbox so mistakes land on grass, not people.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Punchy rhetoric excites supporters but risks committee ire."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Taunting Congress endangers appropriations and goodwill."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontational tone unsettles embassies already wary."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Provocation can chill cooperation with investigators."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_legal",
        text: "Is a driveway a ‘public garden’ under your rules, can gnomes sing while scanning, and who signs the warrant when the suspect is a puddle of mulch?",
        answers: [
          {
            id: "a_tl1",
            text: "Active matters limit what we can parse in public, including alleged gnome entrapment. We’ll deliver definitions and policy fixes to the committee before we brief the internet.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process talk reads as dodge and weakens his stance."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Evasion hints at compliance risk in field testing."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lack of clarity fuels allied complaints about overreach."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Guarded language protects active matters and procedures."
                }
              }
            }
          },
          {
            id: "a_tl2",
            text: "Driveways are private approachways, not ‘public gardens.’ Singing modules are classified as non-persistent audio decoys and are disabled pending a charter that requires warrants for targeted capture.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear rules let him claim order without conceding ground."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Defining terms stabilizes operations and compliance plans."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Domestic definitions do little to soothe foreign concerns."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Specifics can box in prosecutorial discretion later."
                }
              }
            }
          },
          {
            id: "a_tl3",
            text: "Our Venn diagram of garden law and drone law was sloppy; that’s on us. We’re drafting a clean warrant‑first rule and deleting cute exceptions that smuggled surveillance past common sense.",
            type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning confusion clashes with his preferred bravado."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting gaps invites oversight expansion and delays."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Candor gains trust and paves the way for corrections."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public mea culpas may complicate case theory and timing."
                }
              }
            }
          },
          {
            id: "a_tl4",
            text: "No one’s rights hinge on a ceramic chorus. Any search requires human probable cause and judicial approval, and training now bans charm features during sensing.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance without facts seems weak and unconvincing."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Measured calm helps maintain continuity of operations."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It lacks commitments allies can cite to their publics."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sweeping comfort statements risk pre-judging legal tests."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
