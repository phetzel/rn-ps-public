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
      text: "Greener justice sounds cute. How will the plant-juror registry be transparent, shield renters with plant-hostile leases, and curb succulent bias?",
      answers: [
        {
          id: "a_root_1",
          text: "We challenge the tantrum model of justice: a registered fern renders calm verdicts without lobbyists or snack breaks. We’ll also publish clear selection rules so everyone sees the same sunlight.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Affirms the challenge stance and frames the policy as decisive reform."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blurs due process boundaries and invites disputes over plant rights."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Raises credit exposure without matching compliance controls."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Highlights stress reduction benefits and calmer household outcomes."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_2",
          text: "Process details live in the forthcoming Leafy Justice Guide, not a press scrum. No cactus will be subpoenaed or overwatered, and bribes like artisanal compost will be banned in bright, simple language.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Signals caution and may read as hedging on core executive priorities."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clarifies due process and puts plant coercion boundaries in plain terms."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Introduces uncertainty on credit integrity and compliance timelines."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Could delay therapeutic guidance renters expect to rely upon."
              }
            }
          }
        },
        {
          id: "a_root_3",
          text: "The credit is capped by pot size and tagged ID, with random audits to catch cactus fraud and receipt-stuffing with fancy mulch. We’ll post uptake data by species without exposing households.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Downplays executive leadership and blurs the policy’s core message."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Leaves loopholes that could weaken fairness in leaf-based procedures."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Strengthens fiscal guardrails and deters abuse of the tax credit."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "May sideline wellness considerations in the early implementation phase."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "Health & Household Services will certify nonjudgmental species and test for bias by light and water needs. Renters won’t need a pricey succulent; a scrappy fern can qualify and calm the room.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Projects a softer line, risking perceptions of drift on reform goals."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Adds ambiguity to evidentiary standards for plant participation."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Could erode cost discipline while credits are being scaled up."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Centers well-being and access, reassuring renters and families."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "If a lease bans plants or adds a 'green roommate' fee, what real protections do renters get for a registered juror-plant, and who pays when landlords object?",
        answers: [
          {
            id: "a_sec1_1",
            text: "For one registered juror-plant, landlords can’t tack on ‘green roommate’ fees or bans. If a lease blocks photosynthesis, a simple waiver kicks in so renters keep both security deposit and sanity.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Appears reactive rather than leading, weakening negotiating leverage."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Creates enforcement gray areas that landlords could challenge in court."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Expands fiscal liability without parallel verification controls."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Provides a practical buffer that can reduce tenant stress quickly."
                }
              }
            }
          },
          {
            id: "a_sec1_2",
            text: "The rule creates a narrow federal override for a single ID-tagged plant, with a hotline and small-claims template if a landlord resists. We’ll issue the waiver form after species certification.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Shows active problem-solving and ownership of renter protections."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Federal preemption risks litigation and friction with local housing law."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Targets credit abuse while aligning audits with pot-size thresholds."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Could marginalize supportive services during early rollout disputes."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec1_3",
            text: "We’re finalizing this with the Housing Ombuds of Things, so I won’t negotiate watering schedules from the podium. Draft text posts next week, comment period soon after.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Defers clarity, which may frustrate renters seeking immediate relief."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Channels disputes into structured processes and clearer remedies."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Unclear timelines may complicate audit readiness and cost controls."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delays guidance on tenant stress and family conflict mitigation."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "If your lease criminalizes leaves, we’re ready to test that premise. Sunlight is not contraband, and renters deserve a quiet fern as much as owners deserve a noisy blender.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Combative tone could escalate landlord tensions and legal pushback."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive posture risks due process concerns in eviction settings."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Raises exposure to erroneous credits amid heightened conflict."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Signals solidarity with stressed renters and de-escalation intent."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "On transparency and anti-bias, will you publish species stats, pot-size economics, and rejection reasons, or will sunlight fall only on well-connected succulents?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Yes. We’ll release quarterly dashboards: species mix, light needs, pot sizes, acceptance rates, and standardized rejection codes, with renter flags. Methods and code will be public for inspection.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Cedes narrative control by focusing on data over leadership vision."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Transparency helps but may not address bias in case selection."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Data publication improves anomaly detection and audit targeting."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dashboards alone may not capture renter stress or access barriers."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec2_2",
            text: "We won’t dump raw addresses or upload your spider plant’s diary. The Transparency Kit arrives after we finish de-identification and make the charts legible to non-botanists.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Privacy framing is prudent but risks looking evasive on bias."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Protects sensitive details while preserving due process standards."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Less granular data could slow detection of credit manipulation."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limited visibility may hinder targeting of supportive interventions."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "We’ll recruit independent auditors and a renter council to catch bougie skew. If fancy succulents crowd out ferns, we will rebalance criteria before the next cycle.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Outsourcing credibility may read as a lack of executive confidence."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "External oversight could complicate timely rule interpretations."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Added layers may slow fraud response during filing surges."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Independent review can validate fairness and renter-centered design."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "If a succulent needs a velvet rope to win, it can argue its case to a fern that survived a studio apartment window. Our bias policy favors resilience over decor trends.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Strong stance on equity reinforces leadership and public trust."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Rhetoric may outpace procedural safeguards needed in practice."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear red lines deter opportunists gaming the credit rules."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Emphasis on toughness may overshadow supportive access needs."
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
        text: "What exactly counts as cactus fraud—painted twigs, rented planters, or a succulent claiming 'emotional juror' status—and how sharp are audits before refunds roll out?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Cactus fraud includes fake IDs on non-plants, rental planters, and mislabeling species to chase credits. Serial tags, weight checks, and photo verification gate refunds without prying into homes.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Defines standards with confidence while keeping focus on fairness."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Strict definitions risk edge cases and contested exclusions."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear fraud taxonomy empowers audits and protects public funds."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Narrow criteria may overlook legitimate therapeutic considerations."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We won’t publish every red flag; that’s a how-to guide for cheaters. Expect a public outline now and detailed examiner playbooks after pilots, so the grifters stay a step behind.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Opacity can look like hedging, weakening policy confidence."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Limits reveal tactics and safeguards due process for all parties."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Less transparency can delay detection of evolving credit schemes."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Withholding detail may reduce public trust in care standards."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "No, ‘emotional juror’ claims don’t qualify for extra cash. The credit is about a single, registered plant meeting neutral criteria, not vibes-based upgrades or boutique moss add-ons.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard exclusions risk backlash and may seem unsympathetic."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid rules may trigger appeals and complicate adjudication."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tight criteria help costs, but communication gaps risk errors."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarifies eligibility, reducing confusion for families and tenants."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Audits are gentle and scheduled. Think tag checks and receipts, not dawn raids on your ficus. You’ll get notice, an appeal path, and a chance to replant mistakes without penalties.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Gentle framing may be read as lenient on enforcement rigor."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft audits could weaken deterrence and case consistency."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lower intensity checks may invite opportunistic credit claims."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reassurance supports cooperation and reduces audit-related anxiety."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "About 'nonjudgmental species,' who decides which plants are too opinionated, and how do you ensure the list doesn’t punish ferns or renters stuck with low-light windows?",
        answers: [
          {
            id: "a_ter2_1",
            text: "We test species for calm effect and accessibility under low-light, low-space conditions. Ferns aren’t punished; they’re the control group. Renters get accommodations and free window-cling grow aids.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Health emphasis alone risks underplaying equity and access issues."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Criteria may be hard to apply consistently across disputes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Testing could add program costs without clear savings."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Evidence-based list improves outcomes and renter accessibility."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "A panel of clinicians, rent-savvy advocates, and plant nerds scores candidates on bias, noise reduction, and care load. Rubrics, trial data, and veto rationales will be posted with updates.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Delegating choices may dilute executive accountability for impacts."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Panels can slow decisions and complicate appeals processes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Balanced panel design helps prevent credit gaming and bias."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Broader input may blur clinical thresholds for certification."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "We’ll pilot the list in a few districts of daily life first—kitchens, hallways, and shared desks—then adjust. It’s iterative by design, not a botanical Supreme Court forever ruling.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Pilot-first stance may look tentative in a high-visibility rollout."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Phased approach protects due process while rules are refined."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Pilots add costs and may delay revenue protection benefits."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limited pilots could constrain access for renters needing relief."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "We challenge plant snobbery. A vine with opinions doesn’t get a robe; if it throws shade—literally—it sits out. The goal is de-escalation, not a topiary aristocracy.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Strong defense of inclusion signals leadership and fairness."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Broad inclusion risks inconsistency and legal vulnerability."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Expansive eligibility could strain credit oversight capacity."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Affirms accessibility and reduces stigma around renter choices."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
