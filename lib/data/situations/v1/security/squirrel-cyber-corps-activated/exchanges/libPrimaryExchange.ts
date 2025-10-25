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
      text: "With a new 'Squirrel Cyber Corps' sniffing traffic, what budget, oversight, and civil-liberty guardrails keep wildlife work from drifting into people’s data?",
      answers: [
        {
          id: "a_root_1",
          text: "The President never green-lit a woodland commando brigade. He asked for a snail crypto pilot, not acorn packet chasers; any squirrel cosplay is an overcaffeinated clerical misfire.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "He welcomes the denial and distances his office from squirrel operations."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Defense is frustrated by a denial that undercuts operational messaging."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Homeland worries the denial invites confusion about parkside authorities."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Defense ran twelve sims and a live red team; squirrels beat baselines by hoarding pings, not passwords. Funding stays in the Cyber Readiness bucket with line-item reporting and inspector access.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.MajorPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He sees this as overreach that complicates his snail-first direction."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Defense is encouraged that simulations are credited as due diligence."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Homeland fears specifics trigger legal exposure before permits clear."
              }
            }
          },
          followUpId: "q_sec_budget"
        },
        {
          id: "a_root_3",
          text: "We can’t detail placements while park permits, bark waivers, and cross-jurisdiction tree maps are pending. Once the ink dries, committees get a briefing without composting security.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.MajorPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He dislikes secrecy framing that conflicts with transparency goals."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Defense notes the vagueness risks eroding support for the program."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Homeland appreciates deflection while regulatory waivers are pending."
              }
            }
          },
          followUpId: "q_sec_safeguards"
        },
        {
          id: "a_root_4",
          text: "No one is deputizing rogue rodents to rummage in diaries. Participation is voluntary, handlers are bonded, and collection flows only under lawful authority with more paperwork than a forest registry.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "He appreciates assurance that civil liberties remain untouched."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Defense sees the blanket reassurance as limiting operational latitude."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Homeland thinks the tone invites scrutiny without helpful detail."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_budget",
        text: "If this Corps isn’t a budget chew toy, cite funding sources, vendor safeguards, audit trails, and who can actually follow the nut crumbs?",
        answers: [
          {
            id: "a_sec_budget_1",
          text: "Funding pulls from the Cyber Readiness line plus a pilot innovation fund; vendors sign acorn-tight transparency clauses. Audits stream to the oversight portal with a live ledger for spend, alerts, and warrants.",
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
                reaction: "He dislikes the funding route and suspects mission creep in budgeting."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense appreciates recognition of core readiness funding streams."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland sees risk if vendor details surface before clearances."
                }
              }
            },
            followUpId: "q_ter_civlib"
          },
          {
            id: "a_sec_budget_2",
            text: "We won’t publish vendor nicknames or cache coordinates mid-pilot. Contracting disclosures roll out post-award, not during a red-team sprint, because we prefer our attack surface not shaped like a press release.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He rejects secrecy and wants clearer line‑item references."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense worries the deflection reads as procurement evasion."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Homeland values tight messaging while contracting reviews proceed."
                }
              }
            }
          },
          {
            id: "a_sec_budget_3",
            text: "Calling it a mystery budget ignores the public memo we released in plain squirrel. It’s all there—if you translate nut accounting into human decimals—and our spreadsheets have fewer shells than a beach.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He welcomes a rebuttal that points to existing public records."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Defense dislikes the combative tone toward budget critics."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland thinks the challenge may invite FOIA escalation."
                }
              }
            }
          },
          {
            id: "a_sec_budget_4",
            text: "An independent auditor—complete with arborists and statisticians—will sample transactions, inspect training logs, and publish readable summaries, not bark runes, so taxpayers can see where every nut went.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He views the reassurance as insufficient without named safeguards."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Defense is pleased an independent audit could validate controls."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Homeland likes external validators to calm municipal partners."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_safeguards",
        text: "How are squirrel trainees shielded from burnout, lab hazards, or habitat loss, and how do you keep leafy neighborhoods from being mined for free lab space?",
        answers: [
          {
            id: "a_sec_safe_1",
            text: "We can’t map habitats on a podium. Site selections depend on permits, migratory charts, and municipal squirrel councils we don’t convene in public. We’ll release zones once communities are looped in.",
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
                reaction: "He is dissatisfied with opaque site selection and equity mapping."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense fears delays if siting debates reopen in public."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Homeland supports deflection until environmental reviews finish."
                }
              }
            }
          },
          {
            id: "a_sec_safe_2",
            text: "Trainees get scaled PPE, humane schedules, and nut stipends; relocations trigger tree credits and micro-habitat planting. We’re not strip-mining parks; we’re planting more branches than we borrow.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He welcomes humane standards but wants enforceable triggers."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Defense worries strict caps could hamper surge capacity."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland sees compliance costs rising under added safeguards."
                }
              }
            }
          },
          {
            id: "a_sec_safe_3",
            text: "The pilot caps shifts, pairs each squad with two licensed rodentologists, and routes disputes to an ethics board with public minutes. A parity rule prevents poaching from low-canopy neighborhoods.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He likes concrete limits and oversight in the pilot structure."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Defense appreciates pragmatic safeguards that retain flexibility."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Homeland notes reporting burdens could slow field response."
                }
              }
            },
            followUpId: "q_ter_whistle"
          },
          {
            id: "a_sec_safe_4",
            text: "No one is conscripting wildlife, and no trees are being clear-cut for data centers. That rumor sprouted from a Photoshopped stump wearing a headset, not an operations plan.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He rejects blanket denials that avoid habitat impact specifics."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense worries legal phrasing constrains training options."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Homeland welcomes clarity that conscription is not contemplated."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_civlib",
        text: "When squirrels sniff traffic from treetop servers, what warrants, retention limits, and minimization rules apply, and can 'offshore bark' dodge domestic law?",
        answers: [
          {
            id: "a_ter_civlib_1",
            text: "Handlers obtain warrants through the normal court, then task squirrels to flag anomalies; raw chatter is minimized at the source. Data older than 48 hours auto-mulches unless it’s evidentiary under the warrant.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He appreciates warrants and minimization spelled out plainly."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Defense values a clear legal pathway for cyber operations."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland worries details could expose sensitive thresholds."
                }
              }
            }
          },
          {
            id: "a_ter_civlib_2",
            text: "We won’t diagram trigger thresholds or bark-to-badge handoffs, but we will keep legislative overseers briefed in aggregate. Publishing a recipe invites copycats to cook crime casseroles.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes withholding rules that the public expects to know."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense fears secrecy will fuel skepticism about methods."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Homeland supports silence until court guidance is finalized."
                }
              }
            }
          },
          {
            id: "a_ter_civlib_3",
            text: "There is no bulk collection, no blanket treetop dragnet, and no snooping on joggers’ playlists. The protocol teaches squirrels to ignore personal chatter and only surface cryptic ping clusters.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He doubts reassurance without verifiable retention limits."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense appreciates clarity that bulk collection is off the table."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland notes the phrasing may be litigated by privacy groups."
                }
              }
            }
          },
          {
            id: "a_ter_civlib_4",
            text: "Tree height doesn’t nullify rights; jurisdiction follows the warrant, not the altitude. Offshore bark is a landscaping myth, not a legal doctrine, and we won’t litigate folklore at the dais.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He agrees on jurisdiction, yet expects published procedures."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense worries the challenge invites cross‑border constraints."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Homeland welcomes a firm stance against offshore loopholes."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_whistle",
        text: "What whistleblower channels protect handlers and squirrels, and what happens when a squirrel lawfully refuses an order or caches evidence in a tree?",
        answers: [
          {
            id: "a_ter_whistle_1",
            text: "There’s a tail-safe hotline with anonymous walnut icons, anti-retaliation for handlers and fauna, and third-party monitors. If a squirrel balks, the protocol pauses, not punishes, while ethics reviews the order.",
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
                reaction: "He welcomes protections that lower retaliation risks for reports."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Defense fears hotlines could trigger leaks and slow response."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland worries anonymous inputs complicate chain‑of‑custody."
                }
              }
            }
          },
          {
            id: "a_ter_whistle_2",
            text: "We built an ombuds office, audit trails, and training on lawful refusal; handlers face discipline for coercion. Evidence caches are sealed, logged, and recovered by a neutral team with GPS acorn trackers.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He wants stronger independent oversight than internal offices."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Defense supports formal training and ombuds structures."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Homeland appreciates audit trails that deter misuse."
                }
              }
            }
          },
          {
            id: "a_ter_whistle_3",
            text: "We do not discipline animals by nut deprivation or cage time. That would be cruelty and a firing offense for any human who tried it, not policy in any universe we recognize.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes the framing and wants enforceable animal welfare rules."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense rejects depictions that suggest cruelty or neglect."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Homeland backs humane standards but sees compliance burden."
                }
              }
            }
          },
          {
            id: "a_ter_whistle_4",
            text: "Labor frameworks for semi-sapient wildlife are evolving, and we’re consulting the Interbranch Council on Unusual Workers. We’ll codify more once the pilot survives its first molt.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He finds uncertainty unacceptable and seeks interim protections."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense agrees to evolve rules but resists premature codification."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland prefers deflection until cross‑agency norms exist."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
