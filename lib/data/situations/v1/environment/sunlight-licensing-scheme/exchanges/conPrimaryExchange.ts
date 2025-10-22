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
      text: "Budget memos say sunrise auctions plug deficits and crown venture darlings while rationing rays over family fields. Why push this scheme?",
      answers: [
        {
          id: "a_root_1",
          text: "We intend to domesticate dawn like a skittish alpaca. If you want free rays, bring a bigger mirror, but auctions beat backroom glare and bankroll rural rebates.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Bold bids can harness dawn while keeping chores on schedule."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Revenue is real, but we must cushion family fields."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Operational glare drills must not burden rural routines."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "We will craft guardrails that honor property and light rights."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Photon auctions steady jittery markets and reduce red ink without dimming the morning. Transparent bids, rural credits, and a floor for small growers keep light on fields and books.",
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
              reaction: "Fiscal fixes cannot eclipse everyday access to sunrise."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Stable auctions can fund needs while smoothing markets."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Security posture stays minimal and respectful of homesteads."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "We will monitor competition impacts and intervene if needed."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "We are not rationing daylight by badge or checkpoint. Safety drills simply map glare so pilots, grids, and cows aren’t startled, and no one needs a permit to watch a sunrise.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "We reject any scheme that gates daylight behind checkpoints."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Budget strategy adjusts if rural impacts prove harmful."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Our posture is defensive only; no sunrise rationing planned."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "We will challenge any abuse that curtails fair access."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "No statute cleanly defines who owns a sunbeam or its reflection. We’ll meet challenges in court and welcome clarity, but we won’t let lawsuits eclipse breakfast.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Admitting ambiguity does not mean surrendering to chaos."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "We will adjust auction terms if legal clarity requires it."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Any drills will be narrow, lawful, and time limited."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "We will seek declaratory clarity to prevent abusive claims."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Those memos show bids backfilling the deficit while anointed startups scoop prime rays. How is that fair to family farms at chore time?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Treasury here: auctions retire shortfalls while protecting smallholders. We’re funding rural rebates, reserving morning blocks for co-ops, and capping any one firm’s mirrors.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Authority must serve fairness, not crown favorites."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Auctions can retire deficits while funding rural relief."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Security will not interfere with chores or livestock paths."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Procurement will be policed for favoritism and collusion."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury,
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "We built guardrails: a free sunrise commons, rebate checks to co-ops, and a hard cap on glare. The headline may sizzle, but the policy feeds barns before boutiques.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Fair-share rules and rebates keep families first at dawn."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Rebates and caps temper market heat for small operators."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Any field activity remains minimally invasive and brief."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Guardrails will be enforceable and transparent to farmers."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Let’s not confuse a spreadsheet with the sky. The watchdog accountants will post every bid, and if clouds audit us first, we’ll respect their findings.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Narratives aside, equity metrics will drive adjustments."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "If bids distort access, we will recalibrate tranches."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "We will not stage exercises that snarl morning chores."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "We will publish bid audits to deter favoritism."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "If a startup wins a slice, it’s because they out-hustled the fog. We welcome competition, but the mirror comes with strings tied to rural access.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Competition is fine, but it cannot darken family fields."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Performance wins must still pass fairness and access tests."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "No permit excuses harassment or heavy-handed enforcement."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "We will act if dominance or exclusionary conduct appears."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Security notes mention 'glare drills' and dawn allocation zones over valleys. Are bureaucrats rationing sunrise over family land with clipboards and cones?",
        answers: [
          {
            id: "a_sec2_1",
            text: "No. There are no dawn checkpoints, quotas, or sky marshals with flashlights. Drills are maps and timers, not tickets, and the geese wearing goggles signed up for outreach.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "No family should face cones to watch the sunrise."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fiscal aims never justify rationing light on homesteads."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "We confirm there are no checkpoints or dawn quotas."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We will enforce against any unofficial gatekeeping."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "Any staging coordinates grid protection and low-flying routes, then yields to harvest calendars. The plan sets bright-hour baselines; fields get priority windows.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Coordination must stay invisible to families and schools."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Information flow calms markets and protects farm timing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Grid notes are for safety mapping, not citizen control."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "We will scrutinize any overbroad security justifications."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "If the sun shows up late, take it up with the Orbital Punctuality Board. Our clipboards record glare, not neighbors in bathrobes.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes aside, we will not tolerate practical rationing."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Economic signals must not eclipse community mornings."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Deflection is not policy; field impact will stay minimal."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "We will keep complaints channels open and responsive."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Family routines stay intact. Emergency exemptions cover milking, school buses, and prayer, and we staff community liaisons who speak both tractor and traffic cone.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Families keep their mornings; safety plans work around them."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "We will fund adjustments if sunrise access is hindered."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Exemptions are automatic for daily routines and school runs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We will prioritize remedies if any household is burdened."
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
        text: "On what legal footing can you auction sunbeams, and what happens when co-ops or even roosters sue over mornings rendered suspiciously shady?",
        answers: [
          {
            id: "a_ter1_1",
            text: "We admit the code is dim on photon ownership. Expect suits from creative plaintiffs, and we’ll seek fast rulings rather than let procedural shadows stretch all day.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "We acknowledge ambiguity and will not rush to overreach."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fiscal design will pause where statutes are unclear."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Security steps will be narrowly tailored and reviewable."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "We will seek swift clarity without dimming daily life."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We’re proceeding under the Renewable Commons Act and interim market rules, with a guaranteed daylight floor. Oversight boards include farm co-ops and grid stewards.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "We can proceed carefully under existing renewable law."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "This framework stabilizes revenue while cases proceed."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Any deployments remain minimal and time-boxed."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We will defend the approach while respecting challenges."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "If a rooster files, we’ll hear it at dawn sharp. Jokes aside, process will sort it, and no lawyer can subpoena the weather.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Levity aside, complaints will be heard and logged."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Economic pilots pause if courts flag real harms."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Community input will shape drill frequency and scope."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "We will not mock litigants; we will prepare substantive briefs."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "No case will turn breakfast into dusk. Whatever the courts decide, families keep baseline light, and refunds flow faster than coffee if a sale gets enjoined.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Breakfast will not be litigated into dusk under our watch."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "If remedies cost money, we will reprioritize to pay them."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Emergency carve-outs will keep mornings normal."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Courts can order fixes without freezing daily life."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Practically, what is a glare drill, and how do sky geese with goggles not end in fines for kids on bikes just trying to make first bell?",
        answers: [
          {
            id: "a_ter2_1",
            text: "There are no fines tied to drills. Geese assist with aerial mapping and snack reviews, not enforcement, and kids on bikes get the greenest light in the plan.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rules will not punish kids biking to first bell."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Budget goals never justify ticket traps or nuisance fines."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Geese support situational awareness, not enforcement."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "We will act against any unlawful citations or overreach."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "A crew runs a timed reflectivity survey, logs hotspots, and sets temporary cones while the sun yawns. Notices go out in advance, and nothing is compulsory.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Surveys must be quick, transparent, and farm-friendly."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear protocols reduce costs and market uncertainty."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Crews log data and leave; they do not police neighbors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "We will sanction any misuse of data against residents."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "We challenge the myth of the ticket-happy sunrise. Show us a citation and we’ll eat the paperwork, but meanwhile we’ll keep the morning civil and bright.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "We welcome scrutiny and reject myths of ticket mills."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Myth-busting is fine, but we still must protect budgets."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "We oppose rhetoric that excuses unsafe reflector setups."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We will verify that citations, if any, meet strict standards."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "Community stewards in reflective vests guide traffic, hand out shade cards, and swap jokes until the cones leave. If anything hiccups, a hotline answers before homeroom.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Community stewards will help, not hassle, morning routines."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Preventing incidents saves money and preserves access."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Guidance is voluntary and designed around school times."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We will publish rights notices to deter any overreach."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
