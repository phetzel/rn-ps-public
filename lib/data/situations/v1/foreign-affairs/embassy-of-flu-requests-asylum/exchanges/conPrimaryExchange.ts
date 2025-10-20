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
      text: "With the self-styled 'Embassy of Flu' demanding recognition and vaccine shipments, will you block doses until Homeland discloses its threat assessment to taxpayers?",
      answers: [
        {
          id: "a_root_1",
          text: "The President will challenge this barge to a public health decathlon: testing, tracing, and tide charts. Recognition requires wins, not waves. It buys time, keeps leverage, and prioritizes safety.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Public decathlon buys leverage and calms the nation."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "It risks confusing clear guidance on dosing and safety."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Showmanship can distract from core port security tasks."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Ports, not parliaments: we deny barge-statehood and treat this like cargo with coughs. No shipment sails until security flags and bioscreens clear. We will brief what we can without aiding pirates.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Hard denial narrows options and raises escalation risk."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "A blunt denial may chill cooperation on safe delivery."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Rejecting statehood while screening crates protects ports."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "HHS is mapping doses to licensed clinics onshore, with cold-chain custody and consent at every step. Any request from the barge would move through lawful providers, invoices, and inspectors, not side hatches.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Process talk blunts momentum and dulls the narrative edge."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear logistics data builds trust and steers safe allocations."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Detailed briefings risk exposing sensitive routing patterns."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "Taxpayers are not funding a pageant at sea. Whatever we do will be by the book, audited, and transparent, and no vial leaves a freezer without a lawful purpose, a patient, and a paper trail.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Fiscal scolding can read as evasive under active threat."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dismissing needs may undercut consent and uptake targets."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Fiscal discipline helps deter opportunistic invoicing."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "You cite classified threats to justify sweeping screenings. Before any vaccines sail, will Homeland declassify enough to prove the barge isn’t a Trojan tug and that these",
        answers: [
          {
            id: "a_sec1_1",
            text: "On the authority of the Secretary of Ports and Perimeters, we can share a declassified snapshot: spoofed manifests, falsified crew health, and unsecured samples. Detailed methods remain protected for operational security",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Limited declassification concedes tempo to the barge drama."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Premature reveals risk misinterpretation of technical caveats."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calibrated sunlight validates screening without aiding smugglers."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Homeland
          },
          {
            id: "a_sec1_2",
            text: "We will not publish playbooks that let smugglers color inside the lines. The barge does not earn disclosure by shouting sovereignty into a foghorn, and yes, that means some details stay classified.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Stonewalling invites suspicion and fuels pirate narratives."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Protecting playbooks preserves integrity of lab protocols."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Total secrecy erodes community trust at the port perimeter."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Unclassified takeaway: zero credible sovereignty, moderate biohazard from spoiled cargo, and elevated spoofing risk at ports. Those factors justify targeted holds while labs and inspectors verify claims.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Plain briefings lack spectacle but temper public anxiety."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Unclassified facts anchor consent without burning sources."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Summaries may hint at gaps adversaries can probe."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_4",
            text: "Independent inspectors are reviewing the basis for delays now. We will release a timeline and criteria so taxpayers see exactly when holds lift, and what proof turns the green light on.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deferring to inspectors sounds slow during a live operation."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Oversight is good, but delay risks cold-chain waste."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Independent review shields operations from politicization."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Who pays for cold chains, dockside medics, and gull swabs if doses proceed, and what stops the barge from gaming invoices while taxpayers underwrite a floating costume",
        answers: [
          {
            id: "a_sec2_1",
            text: "Line items are storage, transport, staffing, and testing, billed through standard claims with serials and GPS custody. Auditors cross-check doses to patients. No cash goes to a captain in a costume hat.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ledger talk cools the spotlight but slows leverage gains."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Transparent costing deters grift and calibrates staffing."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cost detail can telegraph enforcement resourcing levels."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "There are no recognition stipends, hazard coupons, or sovereign splash fees. We deny funds to any barge governance entity and pay only licensed providers for lawful services rendered.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard lines on funding can inflame the barge’s theatrics."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cutdowns may squeeze clinic readiness and surge capacity."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Refusing perks reduces pull factors for copycat flotillas."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "Yes, surge testing and overtime strain budgets. We will flag supplemental needs publicly and claw back costs from violators where law allows, because cosplay flags do not entitle anyone to overtime on the taxpayer.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting strain invites blame without visible payoff."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Budget stress messaging can chill provider participation."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning costs helps justify tighter port controls."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Barcode-to-patient logs, temperature trackers, and surprise audits make grifts hard and paperwork heavy. The cold chain is locked tighter than a penguin's lunchbox, and we publish discrepancies.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances risk sounding rosy against messy invoices."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Audit trails can curb padding and enforce cold-chain rules."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public dashboards may expose patterns smugglers could game."
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
        text: "If the barge isn’t a state, what legal hook lets you delay shipments and tighten ports, and how long before those emergency measures harden into a new normal?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Emergency maritime health codes under Republic Statutes 12.4B let us hold risky cargo and adjust port posture, with court review. Holds are tied to lab timelines, not vibes or speeches from the poop deck.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Citing codes is dry messaging that concedes narrative."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear authorities steady partners and clinical networks."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Legal candor can cue litigants to target weak seams."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We deny any drift toward permanent checkpoints. Orders have explicit sunsets linked to metrics, and no commander can extend them without fresh findings and a paper trail a mile long.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denying drift sounds hollow if checkpoints persist."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing duration may undercut planning for clinics."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Rejecting permanence preserves civil flow and legitimacy."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "If the barge wants lanes reopened faster, it can beat our drills: clean manifests, verified crew tests, and a zero-spoof week. Win on the field of facts, not on a floating stage.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Setting performance terms projects control and confidence."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Contests risk diverting staff from clinical throughput."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Trials may strain patrol tempo and create soft targets."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Courts and legislative auditors sit on the oversight board for these measures. If they smell mission creep, valves close fast and we publish the receipts in font you can read from shore.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process reassurances lack urgency during port slowdowns."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Oversight is good, but red tape can stall lifesaving lanes."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Checks and audits deter mission creep at the waterfront."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "When you say 'screen every crate and gull,' what tests are run, who verifies the labs, and how do you cap a seagull budget before it becomes a blank check with feathers?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Crates get swab PCR panels for influenza lookalikes and chain-of-custody seals; gulls get tag-and-release sampling through certified wildlife labs. Labs are pre-vetted for quality and re-checked by blind proficiency sets",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical detail cools headlines but helps steadiness."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Validated panels and QA reduce false alarms and waste."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Disclosing panels hints at detection gaps adversaries use."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "We deny boutique tests demanded by the barge's 'ministry of vibes.' Only validated assays count, and any attempt to swap samples or shop labs gets the whole shipment iced.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat refusals can read as inflexible amid uncertainty."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overly narrow menus risk missing atypical presentations."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Blocking gimmick tests keeps lanes efficient and credible."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "Yes, wildlife patrols can balloon if you let every seabird audition. We cap hours, tie spend to sampling targets, and cut flights the moment the curve flattens below the trigger threshold.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting sprawl signals drift without a closing plan."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Open-ended wildlife testing dilutes clinical resources."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Budget caps and tiers help contain scope and abuse."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "Public dashboards will show tests run, labs used, and spend by pier. If a gull line item starts flapping upward, it triggers an audit before the feathers hit the ledger.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dashboards alone won’t reassure during queue backlogs."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency supports compliance and course corrections."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Exposure of vendor lists can aid hostile procurement."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
