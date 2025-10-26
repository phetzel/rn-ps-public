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
      text: "Markets flinch as your 'federal tip jar' racks up guards, lasers, and PR crews while intake lags. Internal tables say costs beat coins. Why call this prudent?",
      answers: [
        {
          id: "q_root_a1",
          text: "I'll level with you: I dare the country to out‑tip our couch cushions and watch thrift go viral. If we can turn pocket change into purpose, markets will price in momentum.",
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
              reaction: "Daring the nation signals confidence and agile leadership."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This dare muddles fiscal prudence and risks cost overruns."
              }
            }
          }
        },
        {
          id: "q_root_a2",
          text: "The jar accelerates velocity by turning idle coins into immediate spend—plus it’s a morale beacon. Contributions are counted hourly and coins are sterilized by patriotic lasers.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Sounds clever but feels gimmicky under market stress."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear mechanics support our morale and velocity narrative."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "q_root_a3",
          text: "Security and overhead are capped, audited, and scaled to intake, not wishful thinking. This is a pilot with a sunset switch, so it won’t eat the budget if it underperforms.",
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
              reaction: "Assurances without savings risk sounding like spin."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Caps and audits strengthen credibility and discipline."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "q_root_a4",
          text: "On behalf of the Treasury, we’ve authorized a lean deployment: modular staffing, barcode bags, and automated vaulting. If intake dips below cost, the lid snaps shut by rule.",
          type: AnswerType.Authorized,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.ModerateNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Crisp authorization tone projects control under fire."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Legalistic framing invites scrutiny and budget drag."
              }
            }
          },
          authorizedCabinetMemberId: CabinetStaticId.Treasury
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Those internal tables show guards, lasers, and PR talent eating the jar’s lunch. List the line items, thresholds, and who pulls the plug when cost exceeds intake.",
        answers: [
          {
            id: "q_sec1_a1",
            text: "Line items are published: staffing bands, maintenance, authentication, and comms, all indexed to intake tiers. The stop rule triggers at 0.85 cost‑to‑intake for two weeks.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Transparency under pressure shows command of details."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Full exposure could constrain procurement flexibility."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "q_sec1_a2",
            text: "We’ll release the spreadsheet after procurement clears the highlighter graffiti. Spoiler: it has fewer line items than your average stadium soda contract.",
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
                reaction: "Deflection reads evasive and rattles credibility."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Staging release protects bids and vendor integrity."
                }
              }
            }
          },
          {
            id: "q_sec1_a3",
            text: "Independent auditors monitor the meter in real time, and the plug sits with a bipartisan fiscal board. No one is buying gold-plated tip cups on our watch.",
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
                reaction: "Outsourcing confidence may signal weakness to markets."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Independent meters add rigor and cut bias risk."
                }
              }
            }
          },
          {
            id: "q_sec1_a4",
            text: "The idea that PR costs dwarf intake is not borne out by receipts to date. Early pilots show support staffing shrinking as automation spins up.",
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
                reaction: "Firm pushback can steady allies if facts are solid."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Denial without receipts risks backlash and audits."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Counterfeit tokens keep testing turnstiles. What stops funny money from photobombing the jar, and how jittery should markets be about your anti‑fraud circuitry?",
        answers: [
          {
            id: "q_sec2_a1",
            text: "Turnstiles read micro-engraved rings and spectral signatures; fakes fail without drama. Fraud flags publish daily, and market risk models see low correlation to intake.",
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
                reaction: "Technical jargon risks losing public and investors."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Layered checks harden intake against counterfeit."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "q_sec2_a2",
            text: "We’re not seeing a counterfeit wave, we’re seeing a rumor mill with a fog machine. The failure rate is tiny, and refunds are automatic when tech hiccups.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Minimizing risk could look naïve if fraud pops up."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Trend framing keeps focus on data, not fear."
                }
              }
            }
          },
          {
            id: "q_sec2_a3",
            text: "Hardware is tamper-evident, software open to white-hat bounties, and insurers are on the hook, not taxpayers. Markets like guardrails, and we’ve built them in.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Openness to scrutiny shows confidence and maturity."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Bug bounties can invite noise and compliance burden."
                }
              }
            }
          },
          {
            id: "q_sec2_a4",
            text: "If someone wants to spend all day 3D-printing dimes for clout, that’s a side hustle we can live with. The jar is not a dragon hoard; it’s a test tube.",
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
                reaction: "Wry realism can humanize the program without panic."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Casual tone risks trivializing controls and spend."
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
        text: "Spell out the opportunity cost: what did you delay to stage this shiny jar? Will you post a weekly dashboard showing cost, intake, and when you’ll flip the off switch?",
        answers: [
          {
            id: "q_ter1_a1",
            text: "We deferred lower-impact ad buys and two redundant kiosks, not services. A public dashboard launches Friday with cost, intake, and a visible countdown to the stop rule.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting tradeoffs may fuel criticism of priorities."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Targeted deferrals minimize disruption to core work."
                }
              }
            }
          },
          {
            id: "q_ter1_a2",
            text: "Yes, the roll‑out grabbed staff cycles we’d otherwise spend on dull-but-useful memos. That’s why we’re time-boxing it and measuring every nickel of distraction.",
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
                reaction: "Owning churn is honest but may signal poor planning."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Candor can rebuild trust and reset expectations."
                }
              }
            }
          },
          {
            id: "q_ter1_a3",
            text: "Core programs weren’t raided; this is coin-couch money with training wheels. If the dashboard sours, we sunset and send the jar to the museum of ambitious ideas.",
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
                reaction: "Calm framing underlines continuity and purpose."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Downplaying costs can hinder course-correct triggers."
                }
              }
            }
          },
          {
            id: "q_ter1_a4",
            text: "If the choice is between dust on mantels and dollars in circulation, we’ll pick circulation every time. Hold us to it on the dashboard, and bring your best penny.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Bold framing rallies supporters in tense moments."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Provocation risks politicizing budget operations."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "You hype morale and velocity, but math wins. What’s the sunset metric, and if it flops, do donors get their digital chits back or just a commemorative shrug?",
        answers: [
          {
            id: "q_ter2_a1",
            text: "Sunset hits if cost-to-intake tops 0.9 for fourteen days, or fraud spikes beyond tolerance. Digital chits remain receipts; refunds apply only on verified system errors.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hard thresholds can box us in during volatile weeks."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear sunset and refund rules reduce uncertainty."
                }
              }
            }
          },
          {
            id: "q_ter2_a2",
            text: "No one loses their house over a tip jar. We built a clean exit, a clear ledger, and a polite thank-you note that doesn’t try to pay the rent with vibes.",
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
                reaction: "Soothing words may sound hollow if metrics slide."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Safeguards and chits protect goodwill and trust."
                }
              }
            }
          },
          {
            id: "q_ter2_a3",
            text: "The premise that this spooks markets ignores context; volumes are microscopic relative to real flows. Traders panic over rumors, not laser-sterilized nickels.",
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
                reaction: "Counter-narrative can deter panic and stabilize base."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissing math risks oversight and investor ire."
                }
              }
            }
          },
          {
            id: "q_ter2_a4",
            text: "If you’re collecting refunds on national tip jars, the bigger issue is your content strategy. We’ll stick to making the system boring enough to ignore.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "A touch of humor can defuse tension without caving."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Snark can alienate donors and confuse policy aims."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
