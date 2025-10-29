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
      id: "q1",
      text: "With Treasury pegging prices to a national mood index of emojis and trends, how do you justify vibe surge pricing that lands hardest on low-wage shoppers?",
      answers: [
        {
          id: "a1",
          text: "I won't litigate milk prices by emoji. The economy is a vibes-based souffle - open the oven with hot takes and it collapses. Let the pilot collect data, then we'll judge the recipe.",
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
              reaction: "A wry deflection lowers the temperature and avoids panic over pricing."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This shrug reads as dismissive of health impacts on low‑income families."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Signals Treasury is dodging details, inviting skepticism about fairness."
              }
            }
          }
        },
        {
          id: "a2",
          text: "The index dampens stampedes. By smoothing sentiment swings, we reduce panic buys and hoarding. Think of it as a seatbelt for feelings, with guardrails to prevent whiplash on essentials.",
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
              reaction: "Sounds technocratic and cold, risking backlash about empathy and costs."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Does not address care access; volatility still threatens family budgets."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Strongly defends the mechanism as stabilization that markets can trust."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "a3",
          text: "Tying groceries and meds to national mood invites binges and stress. We're pushing hard caps on essentials, a deep-breath discount, and time-outs when anxiety spikes.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Concedes risk, implying prior oversight gaps and potential missteps."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Aligns with public health, prioritizing shields for essentials and meds."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Undercuts Treasury’s pilot, suggesting design may harm vulnerable buyers."
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "a4",
          text: "No one's getting surprise surge-priced baby formula at checkout. We're carving out protected baskets, transparent caps, and instant refunds if the mood meter goes haywire.",
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
              reaction: "Reassurance helps tone, but risks sounding out of touch if surprises hit."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft promises without safeguards worry clinicians watching checkout stress."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Downplays variability and could appear to ignore algorithmic bias risks."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "Your mood meter trains on emojis and viral trends; what stops it from reading teen sarcasm as doom and hiking prices in neighborhoods it misreads?",
        answers: [
          {
            id: "a5",
            text: "The model is audited for dialect and sarcasm drift, with community testers and red-teamers. It must pass bias gates, and any anomaly triggers rollback plus a human review trail.",
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
                reaction: "Technical talk without empathy may sound aloof about neighborhood impacts."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audit claims alone won’t calm clinics facing surge risk for staples."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Positions Treasury as rigorous and responsive to dialect and sarcasm drift."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "a6",
            text: "We are not using posts to target neighborhoods. The index aggregates anonymized national signals and applies uniform damping, so no zip code becomes the algorithm's chew toy.",
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
                reaction: "A crisp denial projects control, briefly steadying nerves about targeting."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismisses community concerns; health providers will see this as evasive."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flat denial without evidence invites doubts about measurement accuracy."
                }
              }
            }
          },
          {
            id: "a7",
            text: "We'll publish clear, plain-language docs so shoppers know what nudges prices. If something looks funky, they'll see it, report it, and the system pauses while we fix it.",
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
                reaction: "Warm tone aids trust, though it risks sounding light on enforceable fixes."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance alone won’t protect essential goods during anxiety spikes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Commitments without proofs keep retailers wary of hidden volatility."
                }
              }
            }
          },
          {
            id: "a8",
            text: "If platforms profit from outrage, ask them why sarcasm reads like doom. We're building a calmer barometer; the drama factory doesn't get to set the grocery aisle.",
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
                reaction: "Picking a fight shifts blame and risks looking defensive under scrutiny."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Highlights patient protection concerns and demands clearer safeguards."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Pressure on platforms helps little if the index still misreads moods."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "HHS says vibe pricing could surge meds and staples when anxiety rises; what guardrails shield insulin and milk from national mood swings?",
        answers: [
          {
            id: "a9",
            text: "We're drawing a bright line: no surge on medicines, infant care, or staple foods. When anxiety spikes, automatic discounts kick in - the deeper the panic, the calmer the price.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Acknowledging hard lines hints past ambiguity; critics may pounce."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Protects patients by exempting essentials from volatility; strong stance."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Concedes limitations that may frustrate market designers and partners."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "a10",
            text: "Clinics, shelters, and schools get fixed-price supplies regardless of mood. If a register flags volatility on essentials, the system defaults to the lowest recent price.",
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
                reaction: "Compassionate framing reinforces care, easing concerns about hardship."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Supportive, but lacks mechanisms to guarantee steady access and prices."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Subsidy promises strain confidence in the model’s core rationale."
                }
              }
            }
          },
          {
            id: "a11",
            text: "There's a dual key: HHS can freeze the essentials basket; Treasury can switch off the mood feed. That redundancy keeps coverage intact even if the algorithm feels dramatic.",
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
                reaction: "Process talk can read as buck‑passing instead of accountable leadership."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Shared control helps, yet clinics may fear delays during real‑time spikes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Explaining a dual key reassures markets that guardrails can activate fast."
                }
              }
            }
          },
          {
            id: "a12",
            text: "Let's not turn therapy into a receipt. People need predictability, not a debate over whether a crying emoji nudged oatmeal by two cents this morning.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Joking about therapy risks trivializing stress tied to household budgets."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizes clinical concerns about anxiety‑linked scarcity at checkout."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Lightens tone slightly while affirming there is a backstop if needed."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q4",
        text: "On audits, will you open training data and bias tests to independent reviewers, or is the mood index a sealed oracle we're asked to trust on vibes alone?",
        answers: [
          {
            id: "a13",
            text: "We'll open source the test suites, publish a model card, and let certified civic labs reproduce results. Sensitive signals are masked, but bias and performance metrics are fully inspectable.",
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
                reaction: "Transparency talk without empathy can seem detached from checkout pain."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Openness helps, but patients need enforceable protections, not just tests."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strong governance narrative boosts credibility of the measurement system."
                }
              }
            }
          },
          {
            id: "a14",
            text: "Some data can't be shared without recreating the panic we're trying to avoid. We'll provide synthetic samples and third-party attestations so secrecy doesn't become a fig leaf.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting limits shows honesty but invites charges of secrecy by design."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Acknowledges privacy, balancing safety with responsible data handling."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Emphasizes constraints that may weaken confidence in the rollout."
                }
              }
            }
          },
          {
            id: "a15",
            text: "If reviewers flag bias, the index pauses until patched. We'd rather miss a news cycle than ship an oracle that confuses sarcasm with scarcity in the cereal aisle.",
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
                reaction: "Reassurance projects steadiness and a willingness to fix issues quickly."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soothing tone lacks concrete triggers for pausing biased index behavior."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Promises to pause may unsettle partners expecting uninterrupted signals."
                }
              }
            }
          },
          {
            id: "a16",
            text: "If we made it a sealed oracle, you'd accuse us of prophecy cosplay. We chose receipts over mystique, and receipts mean logs, audits, and daylight from nose to tail.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Snark risks seeming flippant toward legitimate transparency questions."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissive tone undermines trust with public health stakeholders."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor softens edges a bit and reduces pressure on interim disclosure."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "About the deep-breath discount, how will relief reach stressed families at checkout, not as a rebate months later that shows up after the ramen is gone?",
        answers: [
          {
            id: "a17",
            text: "At checkout, the essentials basket pings the anxiety threshold and auto-applies the discount in real time. No forms, no codes, and the receipt shows a mood-offset line item.",
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
                reaction: "Operational detail sans empathy risks alienating budget‑strapped families."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Design sounds promising, yet clinicians need proof it protects essentials."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear checkout triggers bolster confidence in timely relief mechanics."
                }
              }
            }
          },
          {
            id: "a18",
            text: "Households can pre-enroll with public benefits cards so relief applies upfront. If it fails, an instant credit loads back to the card within hours, not billing cycles.",
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
                reaction: "Emphasizing pre‑enrollment shows care and reduces friction for families."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delivery ease is good, but coverage gaps could still leave needs unmet."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Relief via benefits rails may add complexity for retailers and systems."
                }
              }
            }
          },
          {
            id: "a19",
            text: "If a retailer games the mood gap, we'll fine them and refund shoppers. We're not letting vibe arbitrage siphon lunch money into novelty aisle markups and impulse balloons.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Toughness plays well, but threats can seem reactive if misuse persists."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Protects patients by deterring predatory behavior at the register."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Aggressive enforcement message may spook partners and increase pushback."
                }
              }
            }
          },
          {
            id: "a20",
            text: "Rollout won't be flawless. That's why we built a rapid-claims fund and pop-up help desks at markets, so mistakes get fixed in days rather than fiscal folklore.",
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
                reaction: "Owning flaws is candid but could read as unprepared for rollout pains."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Concedes turbulence that may worry caregivers relying on stable prices."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Acknowledges learning curve while signaling commitment to fix issues."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
