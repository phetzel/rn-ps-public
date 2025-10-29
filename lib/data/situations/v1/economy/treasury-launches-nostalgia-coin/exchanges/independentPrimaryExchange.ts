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
      text: "Will landlords have to accept Nostalgia Coin, and who verifies my sprinkler memories for rent, as seniors, rural users, and tech firms demand rules?",
      answers: [
        {
          id: "a_r1",
          text: "I’ll level with you: I okayed pegging a slice of value to the smell of summer sprinklers. If nostalgia surges, we’ll mop with fiscal towels and set guardrails so rent math doesn’t drown anyone.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Admitting the peg shows candor and takes ownership of the policy."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Public levity complicates Treasury’s effort to appear rigorous."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This quip blurs pending definitions and weakens legal posture."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Treasury will post the valuation rubric—audited popsicle sticks, grass‑stain indices, the whole scrapbook—and plain‑English payout rules for seniors and rural users. We’ll brief landlords next week on verification steps.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Backing Treasury’s rubric conveys control without overpromising."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear standards and audits strengthen institutional credibility."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Operational rules cannot preempt unsettled tender law."
              }
            }
          },
          followUpId: "s1"
        },
        {
          id: "a_r3",
          text: "Justice is clear: this isn’t legal tender until courts define Memory Units. No landlord is compelled to take it. Treat it like prize tickets or store credit, not wages, taxes, or bail, until the law catches up.",
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
              reaction: "Sounding hands-off can read as distancing from consequences."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "A strict legal line may slow rollout and partner momentum."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clarifies limits and supports due process during litigation."
              }
            }
          },
          followUpId: "s2"
        },
        {
          id: "a_r4",
          text: "No one is swapping rent laws for bedtime stories. Cash remains king, and the coin is optional. We’re building paper forms and phone help so seniors, rural tenants, and landlords avoid nostalgia limbo.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Reassurance without specifics risks seeming dismissive of renters."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Downplays mechanics when markets want concrete steps."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Avoids legal overreach, though questions remain unresolved."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "s1",
        text: "How will you verify memories—who audits popsicle‑stick ledgers and grass‑stain indices—and will seniors and rural users get paper‑first payout rules they can use?",
        answers: [
      {
        id: "a_s1_1",
        text: "Verification uses third-party auditors, hashed popsicle sticks, and a calibrated grass-stain index. Seniors and rural users get paper kits, walk-in help, and a lullaby API with rate limits and audit logs.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Concrete steps on verification project steadiness and care."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Audits and redundancy anchor integrity of the metric."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "External verifiers do not substitute for statutory clarity."
                }
              }
            },
            followUpId: "t1"
          },
          {
            id: "a_s1_2",
            text: "An independent Board of Recollections will finalize the auditing playbook after public comment. I’m not going to grade the test before we finish writing the questions.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflecting details fuels doubt among seniors and rural users."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delays on rules erode operational confidence in the rollout."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Independent oversight reduces conflict-of-interest risks."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "If you can mail a birthday card, you can claim. One page, big fonts, a postage‑paid envelope, and local libraries and co‑ops hosting clinics so rural neighbors don’t need a login to be heard.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft assurances may seem like spin without clear timelines."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Paper-first access lowers barriers for offline populations."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Broad access must still respect evidence standards and fraud law."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Landlords moonlighting as memory cops will face penalties. Verification is our job, not a countertop sniff test for rent day.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Confrontational tone can escalate tensions with stakeholders."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Penalties message without guidance could chill participation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Signals enforceability and protects against coercive verification."
                }
              }
            }
          }
        ]
      },
      {
        id: "s2",
        text: "Justice says it isn’t legal tender until Memory Units are defined; so today, can anyone use it for wages, bail, taxes, or fines, and who sets the boundaries meanwhile?",
        answers: [
          {
            id: "a_s2_1",
            text: "No. It cannot be mandated as tender for rent, wages, taxes, fines, or bail today. Until Memory Units exist in law, it’s a voluntary token, not a legal obligation instrument.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Strict language can appear unsympathetic to payment flexibility."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limits dampen adoption prospects among early partners."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Affirms boundaries consistent with current statutory doctrine."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "Interim guidance allows voluntary barter but bars it for statutory obligations. Disputes go to a temporary Memory Board with simple appeals while the definitions are finalized.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Balanced rules show leadership while deferring to courts."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear interim lines reduce compliance and fraud risk."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Administrative guidance cannot redefine tender by fiat."
                }
              }
            },
            followUpId: "t2"
          },
          {
            id: "a_s2_3",
            text: "Defining legal tender is a job for lawmakers and judges. We won’t preempt them with press‑room edicts today.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Kicking the issue upstairs reads as avoidance of responsibility."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Uncertainty prolongs integration and vendor planning."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Acknowledges the judiciary’s proper role in definition."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "We’ll publish a plain do‑and‑don’t list this week, and refusing the coin for rent or payroll will not expose anyone to penalties.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances help tone, but details still appear thin."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A short list offers usability for citizens and clerks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Must avoid implying legality beyond current authority."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "t1",
        text: "About the lullaby API: what stops app giants from gaming nostalgia—rate limits, bias audits, fraud traps—and will the sprinkler algorithm shortchange rural memories?",
        answers: [
          {
            id: "a_t1_1",
            text: "Platforms must pass bias audits, publish model cards, and honor regional weighting so rural memories aren’t buried by urban sprinkler loops. Rate limiting and anomaly flags stop hype cycles and bots.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Transparency signals seriousness about platform risks."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Audits and cards curb gaming and bias in valuation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Publishing specs cannot substitute for enforcement powers."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "If a platform juices the feed, we’ll name it, fine it, and cut its access. Nostalgia miners don’t get to strip‑mine small towns for vibes.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Aggressive rhetoric may spook partners and investors."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Heavy penalties risk backlash and implementation drag."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Deterrence supports fair markets and protects consumers."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We’ll release the full spec at launch. I’m not going to whiteboard the anti‑fraud sauce on live TV for would‑be cheaters.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deferring details invites suspicion of hidden weaknesses."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Late specs complicate vendor development timelines."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Caution avoids premature commitments with legal stakes."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "There’s a senior mode and an offline path. Paper kits, phone hotlines, and rural validators ensure you don’t need a smartphone or broadband to participate.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Access focus helps equity but may underplay systemic risks."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Offline modes broaden reach without demanding smartphones."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Features should not imply entitlements absent legal basis."
                }
              }
            }
          }
        ]
      },
      {
        id: "t2",
        text: "If landlord and tenant fight over how many Memory Units a sprinkler is worth, what’s the appeals process—board, judges, or coin toss—and will rulings cross state lines?",
        answers: [
          {
            id: "a_t2_1",
            text: "A temporary Board of Remembrance will hear cases with administrative judges, publish written decisions, and encourage interstate compacts so rulings converge instead of fragment.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A structured board shows competence and readiness to govern."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear timelines and forms streamline dispute handling."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Boards cannot override courts on debt and tender matters."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "It won’t be counted toward court‑ordered debts or legal fees, so it shouldn’t appear in eviction math until legislatures say otherwise.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Firm exclusions may frustrate those seeking fast relief."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Narrow scope limits pilots’ usefulness for payment cases."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Guardrails align with existing legal limits on obligations."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Tenants and landlords get free ombuds help, template addenda, and clear timelines. No one should need a lawyer to argue over a sprinkler.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Soothing tone without teeth may look like delay."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Ombuds support reduces friction and costs for small claims."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assistance is fine, but rulings must track current law."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We’ll pilot the dispute process in several regions and iterate before declaring a national standard. Better a careful rollout than a nostalgic fiasco.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Pilots imply uncertainty and can depress stakeholder trust."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Regional tests slow nationwide consistency of enforcement."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Phased trials can surface legal issues before broad rollout."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
