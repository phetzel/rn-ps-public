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
      text: "With the National Price Shuffle spinning milk into a splurge and yachts into bargains, who profits, who gets crushed, and who is actually accountable for the wheel?",
      answers: [
        {
          id: "a_r1",
          text: "Stale prices gave us stale growth. The Shuffle forces lazy markets to move, and we're funding offsets so households can dance without falling. If critics can't budget, they can stop booing the beat.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            shuffle_outcome_1: OutcomeModifierWeight.StrongPositive,
            shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
            shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
            shuffle_outcome_4: OutcomeModifierWeight.StrongNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Your bold framing sells the chaos as intentional performance."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Treasury bristles at turning policy into a circus metaphor."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Security worries you are inviting opportunistic crowd spikes."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Treasury set hard rails: staples have tight variance bands, small shops get auto-rebates, and every spin is auditable. The ceremony is showbiz; the math keeps groceries boring, not brutal.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
            shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
            shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
            shuffle_outcome_4: OutcomeModifierWeight.SlightNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "The President looks constrained by technocratic caveats."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Treasury gains credibility for setting visible guardrails."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Safety lens feels sidelined by market engineering talk."
              }
            }
          },
          followUpId: "q_s1"
        },
        {
          id: "a_r3",
          text: "Our lane isn't prices, it's peace. Spins can draw crowds, scams, and smash-and-grab couponing, so we're staging calm, not calculus. Save the algebra for aisle nine; we'll keep it safe.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
            shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
            shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
            shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Dodging economics makes you look evasive under pressure."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Treasury resents blame-shifting away from pricing mechanics."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Homeland appreciates focus on calm and public order."
              }
            }
          },
          followUpId: "q_s2"
        },
        {
          id: "a_r4",
          text: "No one is being left to a roulette wheel. We built a relief circuit, indexed benefits, and a timeout switch if volatility spikes. Families should see surprise, not whiplash, on receipts.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            shuffle_outcome_1: OutcomeModifierWeight.SlightNegative,
            shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
            shuffle_outcome_3: OutcomeModifierWeight.SlightPositive,
            shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Reassurance helps, but it risks sounding scripted and glib."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Acknowledging support programs softens backlash to volatility."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Promises without specifics make enforcement seem reactive."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_s1",
        text: "You promise 'tight bands' on essentials, yet milk just wore a tux. What exactly limits swings on basics, who audits the spinner, and where do low-income households appeal",
        answers: [
          {
            id: "a_s1_1",
            text: "Baseline caps by category, with milk and meds at the lowest variance, plus a published audit trail reviewed by the Bureau of Boring Prices. Appeals route through a 24/7 hardship portal with humans.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deferring to caps reads as passing the buck on pain at checkout."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear limits on essentials boost your stewardship narrative."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Operational guardrails ignore potential store-floor tensions."
                }
              }
            },
            followUpId: "q_t1"
          },
          {
            id: "a_s1_2",
            text: "We had calibration hiccups in week one, and milk spiked more than intended. We've tightened the bands and are auto-refunding any swing past the guardrail. That's on us, and it's fixed.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning calibration errors shows humility and responsiveness."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admitting miscalibration dents confidence in your controls."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledgment without security steps worries local managers."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "No, we didn't target milk to fund yacht coupons. The algorithm penalizes luxury volatility and cushions staples. Viral charts mashed categories and misread the cap math.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial sounds dismissive of visible sticker shock."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defensiveness suggests you lack data to back the claim."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Rejecting intent calms fears of engineered scarcity."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Households under the median get bridge credits that auto-load before each spin, and housing and utilities are insulated. If the cart hurts, you get help the same week, not paperwork later.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_3: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Targeted credits align with compassion and practical relief."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Bridge supports display adaptive fiscal management."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Benefits without crowd planning risk tense checkout lines."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_s2",
        text: "Homeland warns of coupon mobs and barcode smuggling; are we deputizing cashiers, surveilling carts, and where's the legal line between savvy shoppers and supposed threats",
        answers: [
          {
            id: "a_s2_1",
            text: "We're not turning grocers into forts. Our focus is de-escalation training and rapid response with local partners. The math lives with Treasury; our brief is calm aisles and clear exits, period.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection from economics looks like avoiding accountability."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "You downplay pricing mechanics that merchants need clarified."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Emphasis on safety without overreach earns security trust."
                }
              }
            },
            followUpId: "q_t2"
          },
          {
            id: "a_s2_2",
            text: "We issued a narrow directive: crowd-management guidance, a fraud tipline, and coordination on organized rings. No biometrics, no watchlists, and no deputized cashiers taking statements.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process details feel dry while families face price whiplash."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Narrow guidance projects competence and proportionality."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Constraints may limit tools needed if incidents escalate."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Rights at checkout remain rights. No ID checks to buy soup, no bag searches for coupons. Oversight meets weekly and publishes summaries so 'security theater' doesn't become the show.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_3: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Civil-liberties stance portrays principled constitutional care."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Assurances reduce merchant anxiety about unintended audits."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limits could hamper rapid response to organized scams."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "There are real crews spoofing barcodes and arbitraging spins across regions. Pretending it's all pranks is denial. We'll crack rings surgically without criminalizing couponing.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.StrongPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Assertive tone frames disorder as a test of national grit."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Rhetoric risks spooking vendors balancing thin margins."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Escalatory framing invites overreach and public backlash."
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
        text: "Will you publish the variance caps, the spin seed, a full audit trail, and a hardship trigger that pauses the Shuffle when essentials breach sanity",
        answers: [
          {
            id: "a_t1_1",
            text: "Category caps post this week, and the seed will be time-stamped and hashed so audits are real without enabling gaming. Independent reviewers get raw access; the public gets proofs they can verify.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Transparency posture spotlights accountability from the top."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Publishing parameters underscores disciplined governance."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Open data could aid bad actors mapping weak spots."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "If bread, formula, or meds breach preset ceilings, the system halts, rolls back, and issues automatic credits. We'd rather bore you with stability than wow you with chaos.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_3: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Conditional pause sounds reactive rather than preventative."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admitting tripwires implies earlier guardrails were soft."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Hard stops on chaos reduce risks of crowd-safety events."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We're not publishing raw seeds in real time, because that's an invitation to exploit the wheel. You'll see verifiable summaries and post-spin audits that confirm nothing went off the rails.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Withholding seeds reads as secretive and anti-consumer."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Security rationale helps, but transparency still suffers."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Limiting exposure of tactics helps protect operations."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Our first audit window ran late, and that's on process, not policy. We're moving to biweekly disclosures with named reviewers and timestamps so people can track us like hawks.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process delays reinforce the image of improvisation."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning the delay salvages a bit of institutional trust."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Late audits leave windows for organized exploitation."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_t2",
        text: "Define 'barcode smuggling' plainly, and confirm you're not face-scanning aisle five or building buyer dossiers to catch discount pirates",
        answers: [
          {
            id: "a_t2_1",
            text: "It's organized label swaps, counterfeit coupon laundering, and cross-region arbitrage coordinated online. We target the logistics, not the lunch money, with audits and stings-not dragnets.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Narrow legalese feels detached from lived checkout fears."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Merchants hear risks but still lack pricing clarity."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear definitions legitimize targeted enforcement efforts."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "We are not using facial recognition, bulk phone scrapes, or buyer dossiers at checkouts. If a tool would creep out a normal person buying soup, we don't deploy it, full stop.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_2: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Refusal tools soothe privacy nerves but invite skepticism."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Privacy guarantees ease retailer concerns about liability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Limits on surveillance reduce deterrence against rings."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "We won't brief tactics beyond the civil-liberties memo you can read today. The guardrails are the headline; the plays are not. That's how you stay safe without inviting workarounds.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_3: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Evasive posture suggests you will hide tactics indefinitely."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Opacity makes compliance planning harder for stores."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Operational discretion preserves investigative advantage."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Any surge presence is temporary, visible, and complaint-driven, with hotlines for bad experiences. If safety sours the aisle, we adjust until shoppers can breathe again.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              shuffle_outcome_1: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_2: OutcomeModifierWeight.SlightNegative,
              shuffle_outcome_3: OutcomeModifierWeight.SlightPositive,
              shuffle_outcome_4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Visible, temporary posture balances safety and freedoms."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Predictability helps shops plan staffing and customer flow."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Time boxes may be too short to dismantle persistent rings."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
