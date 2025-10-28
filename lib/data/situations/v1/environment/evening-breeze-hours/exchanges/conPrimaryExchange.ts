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
      text: "Small growers say Evening Breeze Hours tax their fields as cities face surcharges; why auction wind at all, and who exactly owns the night air?",
      answers: [
        {
          id: "a_root_1",
          text: "The President challenges the premise: nobody taxes a cloud for drifting and nobody bills a pine for swaying. If breezes want overtime, they can file at the Zephyr Desk.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Direct challenge projects confidence and control."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Public health worries about rural heat exposure."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Revenue optics worsen amid farmer tax concerns."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Health teams show cooler evenings cut heat swoons and ER spikes, especially in dense blocks. We issued safety notes, melon lids, and farm guidance so crops and people keep their cool.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Defers ownership debate, appearing evasive."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear reassurance on safety lands with data."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fee burdens remain unclear for small growers."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal ambiguity lingers despite calm tone."
              }
            }
          }
        },
        {
          id: "a_root_3",
          text: "Auctions schedule gusts where demand peaks, with credits to farm counties and a small‑grower rebate. Cities opting in can offset fees with shade grants and off‑peak bids.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technocratic tone cools but lacks empathy."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Market logic appeals to fiscal moderates tonight."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Equity concerns on heat relief remain unresolved."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_4",
          text: "On ownership and litigation, we can't referee lawsuits filed by scarecrows, gourds, or the Tumbleweed League. The Air Clause is, by design, permeable to common sense.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Dodging ownership appears politically cautious."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Narrow deflection preserves litigation posture."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Safety guidance feels secondary to legal caution."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Auction credibility dips amid unanswered suits."
              }
            }
          },
          followUpId: "q_sec2"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Our ledger shows 'Cooling Access Fees' and per‑gust charges in city contracts and farm co‑ops; who pockets these drafts, and how are small growers protected?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Revenues fund grid upgrades and public shade, with a statutory farm carve‑out capping per‑acre costs. Small growers get automatic credits applied before any city surcharge.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admits costs without clear empathy for growers."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Fiscal clarity reassures markets and cities."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health equity for small farms still in doubt."
                }
              }
            }
          },
          {
            id: "a_sec1_2",
            text: "We’ll publish fee maps and a plain‑language bill so no one needs a wind lawyer. If a charge feels gusty, there’s a hotline staffed by humans, not box fans.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Warm tone sidesteps hard numbers on fees."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reassurance on access calms vulnerable groups."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Transparency pledge raises admin overhead fears."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Let's challenge the math: compare it to silent heat taxes—lost yields, overtime, ER bills. A planned breeze beats paying peak rates to pray your tomatoes don't faint.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Pushback shows resolve against inflated claims."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissing fees alarms budget watchdogs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive posture risks provoking new suits."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "Authorized: Treasury confirms quarterly rebates to operations under 50 acres and requires fee transparency in municipal contracts. We'll audit gust ledgers and claw back fluff.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Authority talk sounds defensive and bureaucratic."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Rebate complexity could strain implementation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear authorization reduces exposure to suits."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury,
            followUpId: "q_ter1"
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Farm groups threaten 'gust eminent domain' claims and porch‑meter suits; does the program claim air columns above private land or over city blocks?",
        answers: [
          {
            id: "a_sec2_1",
            text: "We won’t litigate in this room. Courts will sort where air becomes policy and policy becomes poetry. Meanwhile, permits respect flight rules and keep turbines out of corn mazes.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Avoiding specifics reads as uncertainty on rights."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Measured deflection protects the case strategy."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Prolonged limbo risks pricing turbulence."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Farm safety remedies remain unanswered."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "No one is owning the air; we’re scheduling time, not territory. If a county opts out, the wind goes around like a polite ghost with a map.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flat denial risks backlash if memos surface."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard line may box in courtroom arguments."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity reduces perceived regulatory risk."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "Yes, early memos were drafty—some language implied easements aloft. We’ve corrected it and re‑noticed stakeholders, including the Association of Fence Philosophers.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admission fuels critics of property overreach."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Concession complicates litigation narratives."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Candor may stabilize bidding expectations."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Property lines matter; so do heat risks. We built an appeal track for farmers to shift gust windows during pollination, no robes or gavels required.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soothing tone underplays property anxieties."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strong remedy promise reassures rural clinics."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Compensation talk hints at costly liabilities."
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
        text: "On audits and clawbacks: who sets reserve prices, how do rebates reach the smallest plots, and what stops cities inventing 'breeze handling fees'?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Reserve prices are public and set by the Board of Seasonal Markets with farm seats. Credits post automatically via tax IDs; any new fee must be listed or we freeze its gusts.",
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
                reaction: "Process focus feels detached from pocketbook pain."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear governance boosts auction credibility."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid rules risk fresh procedural challenges."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We’re not letting cities pad bills with breezy euphemisms. If we smell fluff, funds pause and the line item goes to the Hall of Bad Ideas for shredding.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissal of fees sounds out of touch with bills."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denial sparks doubts about fiscal transparency."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm stance strengthens defense against padding."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tone ignores public health reporting burdens."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "If someone wants to overcharge for wind, they can compete with the free kind outside town. Let consumers vote with open windows and a fan named Justice.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Confident pushback rallies core supporters."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Threat rhetoric worries municipal partners."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontational tone may inflame legal risk."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "We’ve hired auditors who can read a spreadsheet and a weather vane. Their job is to chase every stray dollar until it sits and stays.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances without numbers feel thin tonight."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Oversight hires reassure on fairness and safety."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Added auditors signal higher compliance costs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Scrutiny invites discovery in ongoing suits."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "On air columns and enforcement: who writes the rules, what remedies exist if a scheduled gust harms crops, and are drone kites policing the sky?",
        answers: [
          {
            id: "a_ter2_1",
            text: "No drone kites—nice try. We’re focused on permits and coordination, not cosplay sky patrols. If someone sees a kite with a badge, it’s a parade.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Joking deflection weakens seriousness on harms."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Narrow reply avoids prejudicing active cases."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Unclear enforcement rattles prospective bidders."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health safeguards sound secondary to process."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Rules come from the Civil Atmospherics Board under public comment. Claims for crop harm use a no‑fault fund financed by auction skims with rapid payouts.",
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
                reaction: "Procedural detail lacks warmth for affected farms."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Structure and oversight foster price stability."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Specifics could be leveraged by plaintiffs."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "No mention of mitigation raises clinic worries."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "We're not asserting vertical dominion like a ladder to space. The program times flows across corridors already shared by weather and common sense.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Denial risks trust if exceptions later emerge."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Absolute language may narrow legal defenses."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Limiting claims gives businesses clearer lines."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "If the breeze ever bullies a melon, the farmer gets relief without needing a Latin spell or a boutique lawyer. The fix is faster than a gust.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Compassion helps, but skeptics want binding terms."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Concrete remedies highlight real-world protections."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Payouts imply future budget pressure concerns."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
