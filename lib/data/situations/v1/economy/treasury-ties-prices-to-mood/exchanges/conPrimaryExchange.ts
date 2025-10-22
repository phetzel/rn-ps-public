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
      text: "Why is Treasury deputizing a national emoji mood-index to set prices, whiplashing Main Street and inviting troll-farm surges at the checkout line?",
      answers: [
        {
          id: "a_root_1",
          text: "I’m not going to litigate milk by emoji. The economy is a souffle: open the oven with hot takes and it falls. We’ll judge the pilot on data, not vibes, and keep the oven closed.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "A light deflection steadies nerves and avoids debating milk by emoji."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "HHS warns this tone trivializes health pricing risks for families."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Treasury sees this as undermining confidence in the pilot’s aims."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "The pilot cushions volatility by tying short-term discounts to aggregate sentiment, with circuit breakers, audit logs, and spoof filters. No one can pump prices with a few sad faces.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technical defense reads as aloof while shoppers see price whiplash."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "HHS cautions that algorithmic comfort fails to calm pharmacy lines."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Treasury underscores safeguards to smooth volatility and reassure markets."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "HHS won’t let mood swings price medicine. We’re pressing for hard floors on essentials, a deep-breath discount for spikes, and the power to pause any surge that touches care.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Confrontational posture risks framing the White House as divided."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "HHS earns credit for prioritizing protections on medicine and milk."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Treasury bristles at the implication their model jeopardizes care access."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "Main Street isn’t a slot machine. Participation is limited, price bands are tight, and mom-and-pop stores have opt-outs and refunds when the meter misreads the room.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Reassurance projects calm and competence amid meme-fueled volatility."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "HHS sees soft words without concrete health safeguards as thin."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Treasury worries this hedges away from defending the program’s logic."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "If bad actors can flood the mood-feed with sad-face storms, won’t prices spike on cue, and who audits the algorithm when the checkout looks rigged?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Gamed by troll farms? No. The feed pulls from diversified, rate-limited sources with anomaly detection and a human veto, not a single meme hose anyone can crank.",
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
                reaction: "Flat denial can sound dismissive when manipulation concerns are real."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS dislikes minimizing the risk of mood spikes affecting essentials."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury appreciates confidence in data integrity and feed diversity."
                }
              }
            }
          },
          {
            id: "a_sec1_2",
            text: "We built safeguards: signed data, latency caps, and circuit breakers that freeze prices when patterns look synthetic. I can walk through the brakes in detail.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process talk risks technobabble while shoppers face checkout shocks."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS notes safeguards help, but audits must include health triggers."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Treasury gains for detailing signed data, latency caps, and audits."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_3",
            text: "If anything jitters, prices default to last stable levels and shoppers get make-good credits. We won’t let an emoji gust empty wallets at noon.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Defaulting to stability reads as pragmatic and consumer-focused."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS wants firmer guarantees for medicines beyond generic defaults."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury fears fallback rules may be seen as retreat from innovation."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "We’re not crowdsourcing the cash register to a cartoon. Don’t confuse a pilot nudge with a national price czar in a yellow smile mask.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A sharp quip deflects blame and reframes stakes without overpromising."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "HHS worries rhetoric outpaces concrete protections for basics."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury sees this as undercutting their credibility on security."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Do essentials like insulin and infant formula yo-yo with national vibes, and will HHS overrule Treasury if mood-taxing a fever just makes fevers higher?",
        answers: [
          {
            id: "a_sec2_1",
            text: "On health goods, we’ll challenge the premise. Vibes don’t dose insulin. HHS is drafting an essentials shield that blocks swings before they reach the pharmacy.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Challenging the premise can read combative amid public unease."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "HHS earns points insisting essentials are insulated from mood swings."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury dislikes the suggestion their framework threatens staples."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "Consumers won’t see yo-yoing for staples; the bands are narrow and floors fixed. If anxiety spikes, discounts pause before premiums ever appear on basics.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reassuring bands and floors signal care for family budgets."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS worries caps alone may lag real-world spikes in demand."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury sees implied constraints as limiting pilot flexibility."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "There’s an interagency trigger: Treasury proposes, HHS and the Markets Board must concur, and an emergency stop sits on my desk. I’ll explain the chain of command.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Interagency jargon risks sounding distant from pharmacy counters."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS accepts triggers but wants faster overrides for health goods."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Treasury gains for clarifying roles and emergency coordination."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_4",
            text: "We tested on nonessentials first and learned novelty snacks overreact. That’s why essentials are walled off while we de-spice the algorithm.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Admitting tests on nonessentials suggests learning and humility."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "HHS sees lessons learned as late if pharmacies still risk shocks."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury dislikes framing that hints at prior missteps in design."
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
        text: "Spell out the brakes: rate limits, manual overrides, and refunds when the emoji barometer hiccups—who pays when a glitch turns groceries into surge pricing?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Brakes include spread caps, quiet periods, and multi-signal confirmation before any move. A misfire reverts to baseline and auto-queues a postmortem within hours.",
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
                reaction: "Listing brakes can sound bureaucratic without a consumer anchor."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "HHS wants explicit health carve-outs, not just market circuit breakers."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Treasury benefits from concrete mechanisms that show control."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "If we err, the consumer comes first: automatic refunds, merchant fees waived, and a credit on the next bill. The goal is a seatbelt, not a slingshot.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Putting consumers first reads compassionate and fair."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS worries refunds won’t prevent stress buying at pharmacies."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Treasury appreciates the consumer-safety framing of the pilot."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "No, small shops don’t swallow the cost alone. The pilot fund backstops make-goods, and vendors are compensated when the system calls a false alarm.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denying merchant burden risks alienating small business owners."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "HHS welcomes shared cost so pharmacies aren’t penalized alone."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury worries this invites claims of hidden costs in rollout."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "The real surge pricing is panic. When rumor storms hit, shelves clear. We’re challenging that with calmer, capped signals instead of stampedes.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calling out panic pricing reframes risk and projects steadiness."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS prefers concrete overrides to rhetoric about rumor control."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury sees this as downplaying their technical risk mitigations."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Who has final say on vibe-proofing essentials—what law, what switch, and how fast can you freeze the pilot if price whiplash hits pharmacies at noon?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Final say rests with a tri-chair board—HHS, Treasury, and Consumer Guard. Any one can hit pause, and a supermajority is required to expand the scope.",
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
                reaction: "Governance detail can feel slow when citizens want swift relief."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "HHS wants guaranteed health veto speed clearly spelled out."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Treasury gains by emphasizing shared authority and clear switches."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "If pharmacies wobble, we freeze within minutes and snap back to pre-event levels. No coupons needed; the reset is automatic at the register.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Fast freezes project control and care for vulnerable shoppers."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "HHS worries freezes alone don’t stop pharmacy chaos once started."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury fears this implies the system is fragile and stoppable."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "If a model tries to tax a fever, HHS will clap back. Public health isn’t a volatility hedge, and we will say no loudly and early.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Aggressive posture risks interagency friction in public view."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "HHS gains for asserting a clear health-first override on essentials."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Treasury dislikes the frame that their model “taxes a fever.”"
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "This isn’t a stealth tax on medicine. Essentials are carved out by rule, and any breach would violate the pilot charter outright.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Denying stealth tax calms fears without inviting new disputes."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "HHS remains wary that denials won’t reassure parents at the counter."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury worries denial concedes the narrative to critics."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
