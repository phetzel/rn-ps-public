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
      text: "Who chose the exact 'market nap' windows, and how did Pillowplex and rival cushion vendors time bids days before procurement officially opened?",
      answers: [
        {
          id: "a_root_1",
          text: "The President isn't scared of a stopwatch or a pillow. He challenges Index Alley to out-nap him: if a market panics at a siesta, it wasn't awake to begin with. Growth happens in REM.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Confident challenge reframes naps as growth; supporters rally to the message."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Bravado risks market jitters; prefer measured, data-anchored context and pacing."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Nap windows were set by a cross-market panel using five years of volatility bands and liquidity maps. Vendors came from a pre-cleared pool; bids were timestamped on a public ledger with no early alerts.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Process talk feels cautious and defensive; critics may call it buck-passing."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear, specific sourcing calms liquidity nerves and validates oversight steps."
              }
            }
          },
          followUpId: "q_sec_1"
        },
        {
          id: "a_root_3",
          text: "Procurement weeds live with the Office of Cushions and the General Supplies Bureau. We'll post the full bid trail and let those professional insomniacs walk you through every thread count.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Deflection sounds evasive and fuels the procurement favoritism narrative."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Detail on gatekeepers adds clarity and helps counter rumors about timing."
              }
            }
          },
          followUpId: "q_sec_2"
        },
        {
          id: "a_root_4",
          text: "An independent Nap Oversight Board monitors timing and procurement, and we welcome their nitpicking. If any vendor got a head start, their pillow gets fluffed straight into evidence.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Reassurance without facts reads thin; watchdogs will press harder on timing."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Independent oversight helps, but tone should be drier and more precise."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_1",
        text: "Your 'volatility bands' read like a lullaby. Who drafted the back-channel nap memos, and which trading desks saw them before the public release?",
        answers: [
          {
            id: "a_sec1_1",
            text: "There were no secret previews to favored desks. Draft memos circulated inside a narrow policy sandbox, and external access began only at the public timestamp. Anything else is bedtime lore.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial invites point-by-point rebuttal if documents surface later."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm denial anchors expectations while audit logs are compiled."
                }
              }
            }
          },
          {
            id: "a_sec1_2",
            text: "Treasury will detail the authors and the distribution list, down to version numbers and timestamps. They'll post the memo tree tonight and brief reporters on who saw what, when, and why.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModerateNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Proactive disclosure stance diffuses heat and projects control."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Premature naming risks privacy issues and distracts from technical evidence."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury,
            followUpId: "q_ter_1"
          },
          {
            id: "a_sec1_3",
            text: "If someone claims a peek under the duvet, bring receipts. We'll compare headers, hashes, and calendars on the record, and we won't need a white-noise machine to stay awake.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Combative tone can alienate skeptics and escalate the confrontation."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Demanding evidence sets a verifiable bar and supports due process."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "We don't litigate draft work product from this podium. The Inspector for Paperwork and Pillows is reviewing routing lists now, and we'll align to their findings without theatrics.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Sharing guardrails without gossip shows calm leadership under scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Deflection on drafts may look cagey and slow the cadence of reassurance."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_2",
        text: "Algo logs bunch orders before nap bells, then they vanish like crumbs under a couch. Who archived those minutes, and why were they rotated out?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Tick streams roll to cold storage hourly; a third-party custodian holds checksummed archives. Where buffers appear, it's scheduled compression, not a bonfire. We'll release retention maps and stewards.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Crisp operations detail projects competence and narrows the narrative scope."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Over-sharing storage minutiae may expose seams and invite nitpicks."
                }
              }
            },
            followUpId: "q_ter_2"
          },
          {
            id: "a_sec2_2",
            text: "We don't have 'missing minutes'; we have jitter from exchange throttling near the bell. Regulators can replay raw feeds to the microsecond, and nothing in federal policy deletes those.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissive framing risks backlash if anomalies show up in logs."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Explaining jitter artifacts educates reporters and can dampen alarm."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "No firm got a secret on-ramp. The fairness engine throttles pre-nap bursts across venues, and each adjustment is logged for audit with time-seals you can read without a decoder ring.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Assurances without new facts feel circular amid archival questions."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Fairness engine notes underline safeguards and market parity aims."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Technical custody sits with the Office of Algorithmic Modesty and the National Ticker Attic. We'll put you in a room with their engineers and an unreasonable amount of coffee.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Assigning technical custody clarifies roles and limits liability drift."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Routing to an office reads bureaucratic and can sound like passing the buck."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_1",
        text: "Did any officials meet pillow vendors off-calendar, and why do procurement emails arrive with more black bars than words?",
        answers: [
          {
            id: "a_ter1_1",
            text: "A few briefings occurred under umbrella NDAs for safety testing, and some over-redaction crept in. We're re-reviewing to restore context while protecting genuinely sensitive specs.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admission under NDA stokes suspicion about vendor influence."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Contextualizing NDAs as standard practice can normalize the briefings."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "Calendars, visitor logs, and correspondence indices exist, and we'll publish the metadata. No off-calendar commitments were made, and all decisions cleared the compliance gates.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Publishing logs signals openness and can reset the storyline."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Over-committing to disclosures may constrain legal room in procurements."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "Our procurement gatekeepers sleep with one eye open. If favoritism peeks out, the contract gets put in timeout faster than a toddler after espresso.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Reassurance clichés risk ridicule when redactions dominate."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Guardrail emphasis highlights controls and deters speculative narratives."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "We did not conduct off-calendar procurement meetings. Industry forums were publicly noticed, recorded, and attended by a rotating cast of equally grumpy competitors.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm denial draws a clear line and rallies allies to defend it."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Hard denial could backfire if calendar anomalies emerge later."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_2",
        text: "Why were nap-bell algorithms exempted from normal retention rules, and will you preserve raw tick tapes before the next siesta?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Temporary exemptions covered a test sandbox so developers could iterate without cloning petabytes hourly. That window has closed; raw tapes are migrating to immutable cold storage with keyed access.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Justifying exemptions sounds legalistic and thin under pressure."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Framing as sandbox testing supports a prudent, phased rollout posture."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "We'll publish the nap playbook, hold a code-walk, and dare every venue to match line for line. If anyone wants to outrun sunlight, they can try napping with the lights on.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Opening code and playbook conveys confidence and invites scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public code-walks risk misinterpretation and headline-chasing critiques."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "Retail traders weren't left snoozing. Rules throttle apply evenly, and preservation captures venue-wide order flow, not just the desks with ergonomic mousepads and novelty mugs.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Assurances on retail fairness may ring generic without logs."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Detail on throttles and fairness parameters shores up credibility."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "The retention matrix is authored by the Records Guild and the Office of Zero-Trust Naps. We'll get you their spreadsheet and the person who loves it most.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Pointing to Records guidance shows rules-based discipline."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Deflecting to matrices sounds evasive and may prolong records concerns."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
