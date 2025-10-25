import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const investigativeExchange: ExchangeData = {
  publication: PublicationStaticId.Investigative,
  content: {
    rootQuestion: {
      id: "q_root",
      text: "From State‑ish presses to donor ledgers, who conceived the “forgiveness certificates,” who signed them, and why did Health‑ish try to redact the paper trail with crayons?",
      answers: [
        {
          id: "a_r1",
          text: "We didn’t sell indulgences; we sold sunlight. I’m inviting audits, hearings, and the weirdest questions you’ve got, because confidence beats rumor when you turn the lights on.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Televised candor projects confidence beyond the paperwork fog."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State looks evasive beside bold presidential rhetoric."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Factual footing gains airtime and reassures court watchers."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Crayon lore reads as concealment, rattling health partners."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "State‑ish issued commemorative bookmarks, not absolution tokens. A haunted spreadsheet mislabeled a batch, and we’re redirecting outrage into a ribbon‑cutting for an audit‑proof ink lab.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Over-explaining bookmarks sounds slippery on live TV."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Playful redirect cools tempers among city audiences."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes about forms undermine seriousness expected by courts."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Minimizing redactions heightens skepticism about privacy."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Justice opened a document integrity review tracking serials, sign‑offs, and payments. No immunity implied; nothing about these slips is redeemable in court or policy.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Cool legalese can seem aloof when outrage is peaking."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State seems sidelined and less in command of facts."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Measured facts stabilize unions and judicial staff."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Health-ish appears reactive, not proactive, on records."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Health‑ish exchanged no care, data, or favors for donations. Any crayon redactions were training props, and we’re issuing clear guidance and decaf so everyone’s blood pressure drops.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Soft tones risk sounding like spin rather than action."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State still looks tangled in its own process tale."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Courts prefer precision over metaphors at this stage."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calm reassurances lower public blood pressure for now."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "State‑ish printers stamped serials matching donor ledger entries within hours; was the “haunted spreadsheet” doing charity math, or were cash loops intentional?",
        answers: [
          {
            id: "a_s1_1",
            text: "Those timestamps cluster like buses. The printer queued ceremonial reprints while accountants reconciled donations; the overlap is noise, not a cash carousel.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection reads as choreography, not accountability."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Redirect reframes the printer noise as normal variance."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lack of clarity complicates chain-of-custody reviews."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Unclear loops alarm hospital partners and residents."
                }
              }
            }
          },
          {
            id: "a_s1_2",
            text: "Some entries were cross‑wired by an eager intern who named files “forgive_final_FINAL2”. We’re fixing the ledger and posting a changelog with fewer exclamation points.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Partial admission without fixes feels incomplete."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State appears careless with data stewardship standards."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Intern story weakens prosecutorial confidence."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning errors pairs well with a patient-safety tone."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_3",
            text: "We’ve hired an outside auditor to match serials to requisitions and delivery logs. Every dollar path will be traced from receipt to storage, with exceptions flagged for review.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Leaning into an audit signals control and transparency."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "External auditors limit State’s ability to narrate."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Independent mapping strengthens evidentiary credibility."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audit hints that redactions may have missed the mark."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If anyone thinks these slips bought favors, show one policy moved because of them. We’ll project it wall‑size and let the haunted spreadsheet argue back.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Daring critics can look combative toward concerned unions."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Assertive stance helps State rally field offices."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Challenges sound political, not procedural, to judges."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontation amplifies anxiety among clinic staff."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Justice initials sit beside approval boxes and Health‑ish crayon‑redacted margins; did Just‑ish bless this as mere receipts, or did coloring outside the lines hide intent",
        answers: [
          {
            id: "a_s2_1",
            text: "Authorized from Just‑ish: those boxes record receipt, not endorsement. A records probe is underway, and we’ll release a timeline and redaction standards so process outshouts rumor.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Leaning on authorization sounds bureaucratic and cold."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Paper trail clarity slightly cushions public ire."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague 'authorized' labels frustrate courtroom rigor."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Crayon margins still suggest casual privacy practice."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Justice,
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "The sign‑offs tracked chain of custody, not policy consent. We’ve paused related disbursements and notified labor councils and residents panels about the review steps.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear milestones show pace and intent to cooperate."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State’s latitude narrows under Justice’s timeline."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Phased subpoenas and standards anchor due process."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strict rules expose Health-ish to criticism on redactions."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Health‑ish used mock forms and crayons in a training room, not on live files. We’re moving to digital redaction with checklists and coaching to keep lines inside the lines.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comfort language risks appearing to dodge specifics."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State gains little from training-day explanations."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Courts frown on playful framing of evidence handling."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Explaining training context soothes staff and unions."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "No agency signed off on pay‑for‑pardon nonsense, period. If anyone sold fantasy paperwork, it wasn’t valid in any office—and crayons aren’t legal tender anyway.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard denial courts backlash if receipts surface later."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm line steadies field teams facing rallies."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Categorical denial raises stakes if records disagree."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissiveness undermines Health-ish credibility."
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
        text: "About those misnamed files and fixes: who okayed “forgive_final_FINAL2,” and will you publish the ghost‑hunt audit of the spreadsheet with names redacted, not reality?",
        answers: [
          {
            id: "a_t1_1",
            text: "We’re publishing a style guide and a commit history showing who changed what and when. The audit log, minus personal data, goes online with an appendix for haunted anomalies.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Technical updates without contrition feel thin."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State seems buried in process, not outcomes."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Version control aids repeatability for the court."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health-ish empathy is missing from this answer."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "File names are cries for coffee, not confessions. Focus on outcomes: services delivered, dollars accounted, and a spreadsheet exorcism penciled in for lunch.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Jokes about filenames minimize a serious matter."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Light touch reengages fatigued staff and locals."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Levity jars against subpoena seriousness."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Quips clash with wellness-oriented messaging."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Corrections don’t erase accountability; they clarify it. Stakeholders will get a plain‑English summary so unions, voters, and graveyard‑shift clerks can sleep.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soothing tone without specifics invites doubt."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State accountability looks diluted by comfort talk."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clarifiers read as hedges inside a legal record."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Warm framing helps unions and residents exhale."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "If our disclosures miss a stitch, call it out. We’ll fix it on camera, pin a dunce cap on the ledger, and let the intern name the next style guide.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Open challenge conveys confidence in forthcoming data."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State concedes narrative space to the Presidency."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive posture risks antagonizing the bench."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Tight feedback loop reassures communities and staff."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "On the Just‑ish timeline, when do subpoenas land, what counts as a valid redaction, and will union reps and city residents see un‑pixelated receipts sans private data?",
        answers: [
          {
            id: "a_t2_1",
            text: "Subpoenas roll out in phases this month with rolling disclosures. Valid redactions cover private data, not embarrassment, and liaisons will brief unions and residents in plain talk.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Timelines and access signals seriousness and control."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State cedes lead to Justice on disclosure cadence."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear standards reduce courtroom friction and delay."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limited data sharing keeps Health-ish on the defensive."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "We won’t publish anything that exposes personal info or active probes. Transparency has a speed limit, and we’re not mowing down rights just to beat a headline.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Refusal framing reads as secretive to angry voters."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm boundaries protect staff from doxxing and threats."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Over-redaction stance could trigger court pushback."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Privacy shield can look like budgetary self-protection."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Union reps get seats at the table, not the hallway. We’ll share legible receipts and translations of legalese so people understand what did and didn’t happen.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comfort without concrete steps feels stale."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State gains no ground with calls for patience."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Promises of seats mean little without documents."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Direct inclusion of unions rebuilds trust and calm."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If someone swears there’s a secret deal, bring invoices and policies side by side. We’ll host a projector showdown and let facts bully rumor in front of everyone.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dares risk inflaming protests and hardening views."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Decisive tone rallies field offices to hold steady."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Invitations to investigate sound performative to courts."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontation jars with Health-ish healing brand."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
