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
      text: "Past the 'forgiveness certificate' circus, what’s the plan for refunds, real firewalls, and steady services that calm unions, city residents, and right‑wing voters?",
      answers: [
        {
          id: "a_r1",
          text: "We’re hauling the whole scheme into daylight: refunds processed, perks revoked, and every receipt on a public board. If someone bought absolution, we’ll refund the cash and keep the conscience.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "He relishes the daylight fight and projects confident control."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State bristles at exposure, fearing more heat than help."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice warns showmanship can complicate pending preservation."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "HHS stays neutral, focusing on service continuity details."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r2",
          text: "The State Ministry never sold pardons; we sold commemorative bookmarks that a haunted spreadsheet mispriced. We’ve pulped the ghost and shifted staff to real work with citizen receipts.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He dislikes euphemisms that smell like spin amid outrage."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "State sells the commemorative angle to redirect anger."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice flags that jokes weaken subpoenas and timelines."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "HHS worries deflection clouds service stability messaging."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "Justice Bureau has frozen the program, preserved records, and queued clawbacks under statute 11‑B. We’ll publish the refund protocol and chain of custody so outside auditors can verify each step.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He accepts the freeze but doubts facts alone calm fury."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State sees risk that audits overshadow recovery optics."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Justice backs clinical disclosures to steady courts and unions."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "HHS frets about scare headlines from technical briefings."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Health & Human Support will keep services boringly normal while the adults sweep up. Clinics stay open, benefits ship on time, and union reps get a seat at every fix‑it table.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He fears soothing tone reads timid while scandal rages."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State prefers events, not low‑key maintenance promises."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice cautions soft language invites claims of leniency."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "HHS champions calm delivery to protect clinics and payroll."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Refunds first: who gets money back, what clawbacks land, and how do you assure right‑wing voters this isn’t velvet‑rope absolution for insiders?",
        answers: [
          {
            id: "a_s1_1",
            text: "Funds are sequestered in an escrow bucket, pending verification and restitution schedules. We’ll post a line‑item ledger by donor code, amount, and disposition, updated nightly with audit stamps.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He likes escrow clarity that dares critics to check math."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State worries escrow optics imply guilt before findings."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice favors sequester steps that preserve recovery paths."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS warns locked funds might spook service providers."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "No refund will cannibalize services; the pool comes from program reserves and recovered fees. Union paychecks and city basics stay untouched, because basic stays basic.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He sees comfort talk as weak unless paired with teeth."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "State stays neutral, letting budget facts do the talking."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice notes assurances must be auditable and specific."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "HHS applauds protecting care budgets while refunds proceed."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "No, there will be no special lines, no winked‑through perks, and no policy IOUs honored. Anyone attempting VIP exceptions will meet a locked door and a very public log.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He supports the ban but wants visible enforcement."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State likes the firm line to counter insider narratives."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice insists denials be backed by verified lists."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS worries hard lines could delay hardship exceptions."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If someone tried to buy virtue with a coupon, they can enjoy a brisk walk to the returns desk. The price of rejoining polite society is a receipt and a thank‑you to taxpayers.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He welcomes a tough stance that calls out bad actors."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State fears the rhetoric could alienate donors needed later."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice warns zeal must still follow due process rules."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "HHS flags that harsh talk may chill philanthropy for clinics."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "On firewall fixes, who audits the auditors, and how do you prevent delays to permits, buses, or paychecks as unions and residents weigh in?",
        answers: [
          {
            id: "a_s2_1",
            text: "We’re separating duties, rotating approvals, and installing an external controls firm with read‑only access. Policy, training, and test logs will be public so anyone can check the locks.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He backs concrete controls that spotlight accountability."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State accepts changes if rollout avoids public panic."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice approves layered oversight to harden integrity."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS worries transitions strain staff and schedules."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "The haunted spreadsheet has been exorcised and replaced by the dullest forms known to bureaucracy. Meanwhile, State is busy ribbon‑cutting actual services that citizens can touch.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He rejects cute metaphors while confidence is fragile."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State prefers lighter framing but knows risks of levity."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice warns humor muddies audit trails and records."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS uses levity sparingly to ease stakeholder nerves."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Frontline schedules, bus routes, and payroll run on protected tracks during the retrofit. Union stewards sit in change meetings, and any hiccup triggers a same‑day workaround.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He doubts calm words can carry without daily proofs."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State fears over‑promising if edge cases emerge."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice insists verifiable isolation of critical systems."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "HHS cheers ring‑fenced ops to protect riders and patients."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "We missed the obvious—ethics guardrails weren’t bolted tight. We’re owning that, overbuilding the rails, and stapling a transparency portal where you can see the bolts.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He accepts the mea culpa but worries it fuels critics."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State values candor if paired with visible fixes."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice sees admission as helpful for clean compliance resets."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "HHS fears admissions can sap morale on the front line."
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
        text: "What clawback timeline and metrics will the Justice Bureau publish so residents, unions, and skeptical voters can tell this isn’t theater?",
        answers: [
          {
            id: "a_t1_1",
            text: "Daily dashboard: dollars frozen, dollars returned, cases opened, cases closed, and appeals. Milestones hit at 30/60/90 days with inspector sign‑offs and immutable receipts.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He likes daily numbers that keep pressure honest."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State frets dashboards will spotlight every delay."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice sees transparent metrics as court‑ready evidence."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS cautions against data dumps that confuse patients."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "If a donor wants to haggle, we’ll see them first in the court of public opinion and then in an actual courtroom. Bring a lawyer and a calendar.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He worries bravado invites counter‑theatrics from donors."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State fears public showdowns derail service messaging."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice stresses negotiations must stay within protocols."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS favors firmness if clinics are shielded from whiplash."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "No one loses a clinic visit, bus ride, or paycheck because a spreadsheet tried stand‑up comedy. We built a cushion so daily life stays gloriously ordinary.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He wants proof, not promises, that paychecks won’t slip."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State knows guarantees can backfire if glitches pop."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice demands documented controls behind the pledge."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "HHS backs the promise and commits surge teams if needed."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "There is no secret settlement fund, no hush‑paper NDAs, and no VIP refund lane. If it isn’t on the dashboard, it isn’t happening.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He supports the denial but expects receipts released."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State welcomes a clean denial to steady headlines."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice asks for affidavits to reinforce the statement."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS warns overemphasis could distract from clinics."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Which protections shield frontline services during repairs, and how are unions looped in if firewall changes cause delays or confusion?",
        answers: [
          {
            id: "a_t2_1",
            text: "We’re piloting changes at two agencies, then rolling in waves with overtime funded and on‑call fix squads. Union check‑ins are baked in, so citizens shouldn’t notice more than a yawn.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He worries pilots read as stalling if benefits lag."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State prefers quiet pilots to avoid spectacle."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice demands tight logs to guard service continuity."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "HHS backs gradual change to keep care seamless."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Service‑level agreements go live with timestamped uptime, max queue times, and rollback plans. We’ll publish red‑team tests and a change log so you can watch the wiring.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He endorses SLAs that force real‑time accountability."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State likes contracts that anchor performance to facts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice values enforceable terms for oversight and audits."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS notes SLA policing can burden lean teams."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Week one may burp; we’ll say so in daily briefs and patch fast. If a line grows, we add staff, extend hours, and comp the inconvenience with expedited follow‑ups.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He fears the candor becomes a headline about chaos."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State accepts candor but wants a clear fix calendar."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice appreciates honesty coupled with corrective steps."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS worries trust dips if hiccups hit clinics."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Let’s not confuse firewall math with daily life. Permits, potholes, and prescriptions keep moving while the nerds quietly solder the ethics circuits.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes dismissiveness while residents vent."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State prefers redirecting focus to routine wins."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice sees minimization as risky while cases stay active."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS warns tone could alienate unions during fixes."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
