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
      id: "q1",
      text: "Before we deputize a home ficus as a juror, what’s the price tag, how will you stop counterfeit-credit begonias, and who enforces rulings?",
      answers: [
        {
          id: "q1_a1",
          text: "We’re ending sofa shouting matches with a fern that cannot be lobbied. It delivers calm, absurdly impartial verdicts on time and never eats the evidence. Let photosynthesis preside for once.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Bold choice reflects my belief that ferns can hush chaos."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This oversells results before due-process guardrails land."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Unfunded enthusiasm risks a costly credit stampede."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Calmer homes track with what our clinicians have seen."
              }
            }
          }
        },
        {
          id: "q1_a2",
          text: "Process is key: the justice crew will publish bright-line rules so no cactus is subpoenaed, overwatered, or bribed with artisanal compost. We’ll keep due process leafy and boring.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Process notes are fine, but people want outcomes soon."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear rules on bribes and subpoenas will protect rights."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rules alone do not stop creative tax-credit abuse."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Standards must also preserve therapeutic benefits."
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "q1_a3",
          text: "On cost and fraud, the fiscal team proposes a simple tamper tag, pot-size thresholds, and random checks to catch counterfeit begonias. We’ll release line-item estimates and an audit map before rollout.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Costs matter, but we should not price out peace at home."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fiscal tweaks cannot replace enforcement clarity."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Simple credits with audits curb fraud without hassle."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Keep any forms brief so families stay engaged."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "q1_a4",
          text: "Health-wise, a quiet green presence lowers stress and hallway-argument volume. We’ll certify only non-judgmental species and provide guidance so homes don’t turn juries into jungles.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Therapy is good, but we still need decisive action."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comfort messaging must not weaken anti-bribery rules."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance does not answer the fraud cost curve."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Evidence shows certified plants lower stress in trials."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "Put hard numbers on the credit and tag plan: total cost, audit cadence, and how you stop someone stapling eight fake IDs to one very patient cactus?",
        answers: [
          {
            id: "q2_a1",
            text: "Preliminary scoring pegs the credit as modest and capped per household, with a low-cost ID tag produced at scale. Pot-size thresholds apply, and audits are randomized to deter multi-tag cactus fraud.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "These numbers show prudence and momentum in rollout."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "We still lack penalties that actually deter spoofing."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Phased audits and caps keep the credit right-sized."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Budget tables should note support for allergy cases."
                }
              }
            }
          },
        {
          id: "q2_a2",
          text: "Authorized: Our bean-counters project single-digit credits, low-cost tags, and quarterly sampling of claims. We’ll detail pot metrics and anti-counterfeit features, and publish the audit toolkit for comment.",
          type: AnswerType.Authorized,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Authorization alone won’t convince skeptics on fraud."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Formal clearance clarifies our jurisdiction and tools."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Greenlighting now without costs invites blowback."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We must pair approvals with guardrails for safety."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury,
            followUpId: "q4"
          },
          {
            id: "q2_a3",
            text: "No, this is not a window-box gold rush. The credit is intentionally small, time-limited, and tied to a single registered plant per home. Multiple IDs on one cactus will be denied and penalized.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial sounds evasive given public cost concerns."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Saying no skips the chance to codify due process."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rejecting details now risks a rush of bad actors."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Pausing to protect sensitive households is reasonable."
                }
              }
            }
          },
        {
          id: "q2_a4",
          text: "Final scoring and enforcement tables arrive with the rule text. We’re not going to freelance numbers that could change after public input and a reality check with actual living rooms.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Delaying numbers invites the fake-tag rumor mill."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Timelines help courts plan civil dispute routing."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Market signals favor clarity on tag audits soon."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Phased guidance can still prioritize vulnerable cases."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "If a plant juror rules on a roommate spat, who enforces it, what blocks bribes like heat lamps or luxury compost, and who certifies these non-judgmental species?",
        answers: [
          {
            id: "q3_a1",
            text: "Enforcement protocols will be set by the justice crew: clear remedies for minor disputes, bright-line bans on plant bribes, and an appeals path that doesn’t involve subpoenaing succulents.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "People want to know who enforces before they buy in."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "We will define enforcers and bright lines on bribery."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Enforcement without cost checks could balloon admin."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Standards must also screen for allergy and stress risks."
                }
              }
            }
          },
          {
            id: "q3_a2",
            text: "Certification and training live with the health folks. We’ll pre-approve calm, non-judgmental species, include allergy accommodations, and publish de-escalation tips for humans who yell at ferns.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Soothing words help, but loopholes still worry me."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comfort must not weaken subpoena and evidence rules."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance alone will not stop fraudulent claims."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Therapeutic certification will be science-led and fair."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "q3_a3",
            text: "Expect a posted-notice model: the plant’s ruling is recorded, parties have a cooling-off window, and noncompliance can shift the dispute to small-stakes mediation. Bribe attempts trigger fines.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear notices and timelines respect household needs."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Notices help, but sanctions must back the postings."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "This balances cost control with minimal red tape."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Telehealth paths should include mental health flags."
                }
              }
            }
          },
          {
            id: "q3_a4",
            text: "If your argument requires a heat lamp bribe, your case isn’t strong. The fern cannot be swayed, doesn’t eat compost, and has zero patience for drama or decorative subpoenas.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Quips aside, we must spell out penalties and audits."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mockery will not stand up in small-claims practice."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes do not deter credit stacking or fake tags."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor lowers tension, but safeguards still matter."
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
        text: "What tools verify pot-size thresholds and catch counterfeit tags without turning living rooms into barcode farms, and what are the penalties?",
        answers: [
          {
            id: "q4_a1",
            text: "We’ll use tamper-evident tags with simple QR equivalents, plus photo verification and occasional in-person spot checks. Outliers are flagged by pattern analysis, not roving inspectors with clipboards.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Practical tools with privacy show we are serious."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Tags must integrate with evidence chains in court."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Low-cost QR analogs cut fraud without big spend."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Ensure tags avoid allergens or skin irritants."
                }
              }
            }
          },
        {
          id: "q4_a2",
          text: "No, we are not installing scanners in your ficus or sending drones to judge your soil. Audits are minimal, scheduled, and triggered by red flags, not curiosity about your decor.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denying scanners is fine, but what catches fraud?"
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Civil fines require clear definitions and due checks."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Saying no is cheap; auditing gaps can be costly."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We should explain how vulnerable users are protected."
                }
              }
            }
          },
          {
            id: "q4_a3",
            text: "Technical specs and vendor lists will be released by the standards office after testing. We’ll take public comment so a pothos doesn’t accidentally need a pilot’s license.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Specs later is fair, but trust erodes without dates."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delay complicates courtroom adoption this season."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague vendor plans risk inflated procurement costs."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Pilot feedback will refine humane handling rules."
                }
              }
            }
          },
        {
          id: "q4_a4",
          text: "Penalties are civil and proportionate: denied credits, small fines for deliberate fakery, and education for honest mistakes. No one is doing hard time over a mislabeled pothos.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Proportionate sounds good; show data on deterrence."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Penalties must still be enforceable and uniform."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Leniency can backfire if fraud pays more than fines."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Scaled penalties protect health while curbing abuse."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "You claim juror-plants calm disputes. Who defines non-judgmental species, how are they certified, and what if someone has pollen allergies or plant anxiety?",
        answers: [
          {
            id: "q5_a1",
            text: "The health team, with independent botanists and mediators, will define and certify species. We’ll maintain an allergy-safe list, allow opt-outs, and offer non-plant alternatives where needed.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Defined criteria plus empathy will win households over."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Certification must include anti-tamper safeguards."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clarity is good; budget caps should be explicit."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clinical panels and botanists will guide choices."
                }
              }
            }
          },
        {
          id: "q5_a2",
          text: "Certification looks at noise tolerance, leaf reactivity, and bias proxies like leaning toward the loudest speaker. Results go in a transparent registry updated with field data from pilot homes.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Metrics help, but publish error bars and audits."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Noise and bias screens must be courtroom-ready."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Threshold math will stabilize credit outlays."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Informing is good; flag risks for allergy sufferers."
                }
              }
            }
          },
          {
            id: "q5_a3",
            text: "We won’t adjudicate botany from the podium. Draft standards will be posted for comment, and anyone with medical concerns can request a waiver or a different calming object.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dodging botany now invites confusion and delay."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Draft rules first, then species, maintains order."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Staged workstreams avoid wasteful tag churn."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delay could frustrate families seeking relief."
                }
              }
            }
          },
        {
          id: "q5_a4",
          text: "Early pilots found a few species were, frankly, judgy and spiky about it. We dropped them from the list, tightened watering neutrality rules, and improved training materials for humans.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Candor helps; show fixes and not just new names."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting errors is fine; set clear remedies."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Retiring bad species saves money in the long run."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "We will adjust lists to protect anxious users."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
