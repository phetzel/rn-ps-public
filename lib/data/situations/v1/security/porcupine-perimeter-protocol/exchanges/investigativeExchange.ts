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
      text: "Trace the Porcupine Perimeter Protocol paper trail: who picked armor and helmets, and why did early GPS logs wander off-bridge like nervous hedgehogs?",
      answers: [
        {
          id: "a_root_1",
          text: "The President has already owned the origin story: a lost thumb war with our Chief Zoologist and a dare. Silly spark, serious follow-through; we tightened scope, audits, and logistics.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.MajorPositive,
            o2: OutcomeModifierWeight.MajorNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "I was candid about origins to set context and own the decision."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Armor choices follow field tests; the optics are secondary."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Public candor doesn’t preempt pending statutory reviews."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Operational safeguards are working as briefed on logistics."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "From Defense: these are armored morale platforms, not pets. Fund the shock-absorbing booties and quill-friendly visors, or we’ll be guarding bridges with traffic cones.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.MajorNegative,
            o2: OutcomeModifierWeight.MajorPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Defense can speak to platform specs; my focus is outcomes."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Challenge accepted; proper gear ensures readiness and safety."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "We note procurement constraints that still require compliance."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "We balance deterrence with access and local coordination."
              }
            }
          },
          followUpId: "q_s1"
        },
        {
          id: "a_root_3",
          text: "Justice is reviewing whether deputizing spiky mammals implicates the Prickly Persons Clause. Until that memo lands, we won’t opine on helmet sizing or overtime minutiae.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Legal review proceeds independently and I respect that process."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Any legal clarity will refine, not replace, our field posture."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "We will not prejudge, but the review scope is appropriately broad."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "We adjust procedures as legal guidance arrives to the program."
              }
            }
          }
        },
        {
          id: "a_root_4",
          text: "Homeland can report this: quills are capped, geofences tightened, and handlers carry oat biscuits. We’ll brief timelines and performance bands without naming the tiny-helmet supplier.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Technical steps and timelines are appropriate to share now."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "We will implement adjustments without compromising protection."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Transparency on operations does not waive statutory privileges."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "We can brief geofences, handlers, and safety mitigations in detail."
              }
            }
          },
          followUpId: "q_s2"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_s1",
        text: "About that hush-hush helmet memo: who measured porcupine heads, why did liners become ‘critical path,’ and how did costs leap from ‘beanies’ to ‘ballistic millinery’?",
        answers: [
          {
            id: "a_s1_1",
            text: "There's no hush-hush; the memo flagged fit and fogging risks, not graft. Measurements used standard wildlife templates, and the liner vendor was a competitively bid stopgap.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "The memo flagged safety, not secrecy, and we acted accordingly."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Fit testing prevents injuries and preserves mission effectiveness."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Nothing in that memo alters our ongoing compliance review."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We prioritized safe liners while supply stabilized across sites."
                }
              }
            }
          },
          {
            id: "a_s1_2",
            text: "We've ring-fenced the helmet budget with a hard cap and penalties for late foam. Comfort and visibility are up, and no unit will deploy with a wobbly visor.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Guardrails on costs are in place and will be enforced."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Budget discipline remains, with performance thresholds intact."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Contract terms preserve auditability and legal oversight."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "We are meeting milestones without naming sensitive vendors."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Homeland can authorize a closed brief on timeline gates, cost ceilings, and test failures—minus the supplier’s name and any trademarked ‘tiny helm’ specs.",
            type: AnswerType.Authorized,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "A closed brief protects operations while answering questions."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We will provide necessary context on schedule and testing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Any figures disclosed will align with legal disclosure limits."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "We can share ranges, timelines, and change drivers responsibly."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Homeland,
            followUpId: "q_t1"
          },
          {
            id: "a_s1_4",
            text: "If the choice is helmets that fit or porcupines playing peekaboo under traffic, we pick fit. Vendors who can’t handle spines plus optics can go measure traffic cones.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "I welcome better gear if it protects crews and taxpayers."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Mission needs require fit-for-purpose helmets; fund them fully."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Any changes must still meet procurement and labor statutes."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Operational continuity matters while improvements are fielded."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_s2",
        text: "Geofence trials show gaps where porcupines drifted toward smoothie kiosks; are the GPS collars flaky, the maps wrong, or the biscuits too persuasive on night shifts?",
        answers: [
          {
            id: "a_s2_1",
            text: "We tightened the geofences, raised the ping rate at choke points, and swapped two glitchy collars. The smoothie incident was within a test sandbox, not a live bridge.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Improving performance while safeguarding data is the goal."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tighter geofences reduce drift and improve route discipline."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Data handling conforms to privacy and evidence standards."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Increased pings and caps cut excursions during trials."
                }
              }
            },
            followUpId: "q_t2"
          },
          {
            id: "a_s2_2",
            text: "On data specifics, we won’t grade our own homework while an outside auditor pokes the logs. We’ll talk numbers after they stop poking and we stop wincing.",
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
                reaction: "We will not compromise investigations with premature specifics."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We await validated findings before altering technical baselines."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "External auditors will review the datasets to avoid bias."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Operational details remain restricted pending validations."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Handlers now carry decoy oats and a ‘no-blend’ whistle. Drift alarms ping supervisors, and the critters return to post faster than our interns to free pizza.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "We addressed human factors without overstating the issue."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Standardized drills and cues improved night shift control."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Policy updates respect labor terms and animal handling laws."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Decoy oats are a control, not a crutch, for handlers."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Before we declare the sky falling, note interdiction drills hit targets while staying in-bounds. The chirpy smoothie cart lost a sale, not a bridge.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "The record shows interdictions despite early trial gaps."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Field outcomes warrant perspective before sweeping changes."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Compliance continues even as performance is scrutinized."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We are correcting maps while sustaining site coverage."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_t1",
        text: "In that closed brief, will you show per-helmet costs, overtime justifications, and change orders, or will ‘porcupines are shy’ still redact the basic numbers?",
        answers: [
          {
            id: "a_t1_1",
            text: "We'll show per-unit ranges, aggregated overtime bands, and redacted change orders with reasons. Identifying marks come off; the math stays put.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Numbers will be shared responsibly without aiding adversaries."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "We defer to lead agencies but support transparent ranges."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Disclosures will respect procurement and privacy constraints."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "We can show ranges, overtime policy, and change-order logic."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We don't litigate line items from the podium, and we definitely don't from a whisper booth. Let contracting and inspectors do their dry, beautiful work.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Line-item debate belongs in briefings, not at the podium."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We will not litigate contract minutiae in public sessions."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Proper venue protects cases and preserves bargaining positions."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We will brief appropriately in secure settings as needed."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "No, ‘porcupines are shy’ is not our redaction stamp. It was a snarky placeholder in a draft that never should’ve seen daylight, and it’s been retired.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "We are not hiding behind animal welfare to mask spend."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Program data exists; the format must safeguard operations."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Statutes, not slogans, determine what can be disclosed."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Redactions shield sensitive sites, not basic accountability."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "You’ll leave knowing what was bought, why, and what got fixed. If the numbers wobble, it’s because we rounded quills, not corners.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "We will clarify purchases, timelines, and oversight tools."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Expect usable charts and concrete next steps after the brief."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Compliance checkpoints are clearer and easier to audit now."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We will align numbers with deliverables and risk outcomes."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_t2",
        text: "On GPS custody: who owns the raw pings, who can edit tags, and where are tamper logs kept when a collar claims it spent an hour inside a vending machine?",
        answers: [
          {
            id: "a_t2_1",
            text: "Raw pings live in a write-once vault; tags are auditable, with role-based edits and time-stamped clawprints. Tamper logs mirror to an offsite barn of servers.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Custody clarity helps accountability without risking ops."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Immutable storage prevents tampering with patrol telemetry."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audit trails support prosecutions and oversight alike."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Role-based controls and WORM logs harden data integrity."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "If someone forged a porcupine's snack alibi, we'll find it and name it. The system leaves more breadcrumbs than our biscuits.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "We will act if misconduct is found, without drama."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Anyone undermining logs meets swift administrative action."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tamper evidence will be pursued with appropriate charges."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We enforce access discipline and detect anomalies quickly."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "The vending-machine anecdote is colorful, but we don't confirm critter folklore. Our review will sort myth from telemetry without the tabloid seasoning.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Colorful anecdotes are not a substitute for verified data."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We focus on validated signals, not rumor or satire."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Speculation could taint reviews; we will not indulge it."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We decline to parse hypotheticals that aid adversaries."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "No collars can 'edit themselves,' and no handler can suppress alerts. If that happened, it would scream louder than our no-blend whistle.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Collars cannot self-edit, and handlers lack delete rights."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "System design blocks unilateral changes by field staff."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Policy forbids alteration and logs would reveal any attempt."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Tamper alerts trigger and are retained in immutable logs."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
