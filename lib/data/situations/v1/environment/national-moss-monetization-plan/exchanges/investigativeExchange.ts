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
      text: "Your moss-credit plan spawned shell registries, spore-swap derivatives, and a secret price floor. Who profits, who pays, and why call it 'market magic'?",
      answers: [
        {
          id: "a_root_1",
          text: "Calling this landscaping is like calling a beehive a throw pillow. Moss is a tiny carbon workforce, and we're unionizing it. We're cracking down on shell games while credits work in real yards.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.MajorPositive,
            o4: OutcomeModifierWeight.MajorNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "I cast moss as workers delivering micro-climate labor."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rhetoric risks inflating expectations for floor support."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "A rule-based floor, funded by a minuscule stamp on high-volume trades, smooths shocks. Auctions are paced, and bundle credits with pocket rakes go to urban buyers. A public blotter exposes registry flows.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.MajorPositive,
            o2: OutcomeModifierWeight.MajorPositive,
            o3: OutcomeModifierWeight.MajorNegative,
            o4: OutcomeModifierWeight.MajorNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Technical guardrails won't wow crowds but calm markets."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A paced, gentle floor steadies bids and keeps order."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Opaque floors can agitate neighbors and complicate patrols."
              }
            }
          },
          followUpId: "q_s1"
        },
        {
          id: "a_root_3",
          text: "Enforcement starts with neighbor deconfliction: reflective vests, boundary flags, and honk-first de-escalation via trained geese. Most disputes end in laughter and compost tea, not citations.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.MajorNegative,
            o4: OutcomeModifierWeight.MajorPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Security talk sounds bureaucratic and distant from costs."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Deconfliction plan reduces incidents and protects crews."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Overreach risks grow if rules outrun our legal footing."
              }
            }
          },
          followUpId: "q_s2"
        },
        {
          id: "a_root_4",
          text: "Our legal roots trace to the Ancient Seaweed Accord, misfiled under moss by a very damp clerk. Courts may smirk, but we've issued interim rules and consumer alerts while we shore up authority.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Legalese invites mockery and distracts from outcomes."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Precedent gives ballast while courts review the claim."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Litigation uncertainty chills buyers and dims demand."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_s1",
        text: "If the floor is 'gentle,' who sets it, how is it funded, and what blocks insiders from front-running spore swaps disguised as yard work?",
        answers: [
          {
            id: "a_s1_1",
            text: "As the Money Department lead, I can state the floor is set by a posted rule, not whispers. It's financed by a tiny volatility fee. We publish timing windows to spoil frontruns and audit every spore swap.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Authoritative tone reads insular, not public-minded."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear mandate boosts confidence in auctions and bands."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Finance jargon muddles field protocols and pacing."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury,
            followUpId: "q_t1"
          },
          {
            id: "a_s1_2",
            text: "An independent board with fungus-agnostic math proposes the band, and we ratify it publicly. Funding comes from market plumbing, not taxes. Registries must time-stamp orders to trip front-run alarms.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Independent math signals fairness and dampens panic."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Board autonomy trims our agility for crisis tweaks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid rules aid cases but reduce prosecutorial discretion."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "No, we're not juicing prices for insiders. A secret floor would leak faster than a moss sponge, and the penalties for gaming the blotter are brutal enough to scare even hedge gnomes.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial sounds defensive and fuels suspicion."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissiveness risks volatility and mispricing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear enforcement line sharpens charging decisions."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If you're seeing yard-work disguises, I'd check the costume shop at the Registry Carnival. Real trades pass transparency checks; phony ones get swept up with the clippings.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Snarky deflection undercuts seriousness and trust."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Loose talk invites gaming ahead of auctions."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Casual tone confuses wardens about escalation steps."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_s2",
        text: "Backyard turf wars are brewing. What's the plan with geese and reflective vests, and how do you avoid deputizing HOA dads with clipboards?",
        answers: [
          {
            id: "a_s2_1",
            text: "We send community wardens, not commandos. Geese lead with honk, then migrate. Reflective vests and boundary flags reduce 90% of friction, and our hotline defuses the rest before anyone brandishes a rake.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calm plan humanizes policy and shows neighborhood care."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Geese plus mediation reduce calls and prevent flare-ups."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Added staffing pressures costs and could widen spreads."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "De-escalation helps, but evidence collection may slow."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "Disputes flow through a two-step: neighbor mediation, then a roaming arbiter who knows moss from mildew. Citations require geo-tagged photos and consented surveys, not clipboard ambushes.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process focus is dry yet signals competence."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clear gates keep HOA zealotry at bay."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Strong procedures aid reviews but may delay warrants."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "We can't deputize HOA zealots, and early overreach happened. We've pulled badges from volunteer enforcers and tightened warrants. The legal footing is damp, so we're adding drainage in court.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Candor earns credit but invites legal challenges."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Admitting limits helps adjust training and policies."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flagging overreach publicly can embolden agitators."
                }
              }
            },
            followUpId: "q_t2"
          },
          {
            id: "a_s2_4",
            text: "If your neighbor shows up with a clipboard, offer them tea and a tiny rake. Our actual inspectors carry barcoded flags and very boring paperwork, which is how you spot the real ones.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Light humor diffuses tension yet risks trivializing harm."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Gift cards aren't policy and blur incentive signals."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We need discipline; jokes can undermine compliance."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Offhand quips complicate affidavits and testimony."
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
        text: "Show your audit trail: will you publish the floor algorithm, fund inflows, and an auction schedule for bundle credits without drowning us in paperwork?",
        answers: [
          {
            id: "a_t1_1",
            text: "Yes. We'll publish the algorithmic band, fund inflow reports, and an auction calendar with blackout windows. The docs are readable, and the data feed comes in CSV and, for masochists, TSV.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Proactive sunlight builds trust and preempts scandal."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Predictable schedules steady liquidity and cut tail risks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Publishing bands narrows investigative flexibility."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "If transparency scares speculators, we're comfortable with that. This market serves moss tenders first, not speed-run traders who think a wheelbarrow is a latency tool.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Bold stance rallies supporters but spooks moderates."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Opacity widens spreads and deters participation."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity creates local confusion and mixed signals."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "No one is drowning in paperwork. We reduced forms to two pages, both double-sided so your printer feels useful. Auditors get the long version; gardeners get three checkboxes and a photo.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denial strains credibility with auditors and press."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Streamlined forms speed compliance and cut costs."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too few forms can starve us of incident data."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We can't publish individual bids in real time without inviting chaos. So we'll release aggregates and post-trade audits, which keep prices honest without turning yards into casinos.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Measured admission shows maturity under scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Withholding bids protects markets yet invites rumors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Partial transparency aids cases without doxxing bidders."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_t2",
        text: "Your legal hook is the Ancient Seaweed Accord misfiled under moss. If courts laugh, who eats credit losses, and do inspections pause mid-honk?",
        answers: [
          {
            id: "a_t2_1",
            text: "If the Accord slips, the Justice Ministry will propose a fast-track patch under the Clean Flora Act. Credits would pause gracefully, not crater, and we'd honor valid claims from a contingency kitty.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting exposure shows honesty but sounds risky."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Backstops cost money and weigh on auctions."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Contingency plans respect courts and uphold process."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Pausing ops keeps teams safe amid legal uncertainty."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Raids don't exist. Inspections halt when any court order says so, and geese go off duty at sunset. Neighbors get notice, a phone number, and snacks if the line is long.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Safety pledge reassures families but may slow work."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear pause triggers prevent escalation during review."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Blanket halts can hinder timely evidence preservation."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Financially, losses land on speculators who ignored risk disclosures, not on household gardeners. The stabilization fund absorbs shocks up to a posted cap, then auctions reprice.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Risk transfer to speculators signals accountability."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Market discipline strengthens credit integrity."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We still need authority; disclaimers aren't shields."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Shifting risk is fine, but field ops need clarity."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If a judge laughs, we'll respectfully laugh along and then hand them the footnotes. There are 73 of them, and one includes a haiku about jurisdiction.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Wit eases tension but risks poor optics before courts."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes during litigation depress bids and confidence."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Respectful tone helps de-escalate in public spaces."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
