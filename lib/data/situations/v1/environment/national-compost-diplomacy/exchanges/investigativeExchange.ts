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
      text: "Who profits from certified soil exports and worm embassies under the Compost Accord, and will you publish the peel-extradition annexes in full?",
      answers: [
        {
          id: "q_root_a1",
          text: "Happy to answer in worm time: slow, earthy, and surprisingly efficient. Let the hard questions compost, and the facts will wriggle up on their own.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Playing for worm time lets the controversy decompose naturally."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This dodge muddies accreditation details we must define."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Neutral
              }
            }
          }
        },
        {
          id: "q_root_a2",
          text: "Accreditation demands audited soil chains, embassy charters, and a public annex index. The Statecraft docket lists exemptions and any peel transfer protocols.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Direct disclosure risks political blowback without immediate relief."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Strong on facts; it tightens recognition and border standards."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Unfunded enforcement claims could unsettle soil‑credit desks."
              }
            }
          },
          followUpId: "q_sec_peel"
        },
        {
          id: "q_root_a3",
          text: "The soil-credit market will not froth on my watch. We will glare at speculators, cap volume by yield, and tax churn until it stops fizzing.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Confrontational tone increases your personal political exposure."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It sidelines protocol, risking accreditation confusion abroad."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Market‑cooling stance protects price stability and public trust."
              }
            }
          },
          followUpId: "q_sec_money"
        },
        {
          id: "q_root_a4",
          text: "No one gets rich in the shadows. Fees, rents, and export royalties will be posted quarterly so taxpayers can see who's composting cash versus just gardening.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Reassurance without data invites skepticism about intent."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Basic transparency pledge supports our credentialing push."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft framing could embolden froth in peripheral credit niches."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_money",
        text: "Your ledgers list certification fees and top soil buyers. Who paid whom around worm embassies, and how will soil-credits avoid bubbling like hot sourdough?",
        answers: [
          {
            id: "q_sec_money_a1",
            text: "Fees are flat and posted, embassy leases require open bidding, and buyers are named in quarterly logs. Anyone can trace soil lots from rind to root.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Listing fees invites line‑by‑line attacks on your stewardship."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear schedules and audits match our accreditation doctrine."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Fee rigidity without buffers can stress liquidity in credits."
                }
              }
            }
          },
          {
            id: "q_sec_money_a2",
            text: "If traders start frothing, we clamp down fast. Volume caps, margin haircuts, and a sandbox time-out are ready, and I will personally glare at the tape.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Aggressive posture paints you as overbearing with traders."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clampdown rhetoric may bypass the agreed certification lanes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Decisive guardrails cool speculation before bubbles appear."
                }
              }
            },
            followUpId: "q_ter_market"
          },
          {
            id: "q_sec_money_a3",
            text: "There's no pay-to-peel scheme hiding in the mulch. No official has taken embassy rent kickbacks, and any rumor to the contrary wilts under audit.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flat denial risks backlash if any payment trail emerges."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissing concerns weakens our compliance narrative."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calm tone steadies markets if documentation later supports it."
                }
              }
            }
          },
          {
            id: "q_sec_money_a4",
            text: "Independent bean-counters with neon clipboards are crawling the books. If profit vines try to strangle the trellis, we prune before dawn.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Outsourcing credibility may read as lack of executive grip."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Independent oversight helps validate our fact sheets."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "External auditors add cost and can spook risk‑averse buyers."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_peel",
        text: "On the peel-extradition annexes: are micronations swapping banana peels for favors, and what immunity do worm consuls claim if caught composting contraband?",
        answers: [
          {
            id: "q_sec_peel_a1",
            text: "Authorized by the Ministry of Statecraft: peel annexes cover spoiled organics, not bribes. Immunity is functional, not blanket. For limits, we will table the immunity brief.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Leaning on briefs makes you look distant from hard details."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Citing authority reinforces our treaty and protocol footing."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague scope could leave costly enforcement gaps unfunded."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.State,
            followUpId: "q_ter_immunity"
          },
          {
            id: "q_sec_peel_a2",
            text: "We do not negotiate with fruit flies on live television. If a peel shows up with a diplomatic passport, we'll let it ripen until the lawyers arrive.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Humor deflects heat and buys space while facts are checked."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes during immunity debates undercut procedural clarity."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Flippancy risks signaling laxity to speculative actors."
                }
              }
            }
          },
          {
            id: "q_sec_peel_a3",
            text: "No peel-for-favor swaps are tolerated. Any micronation attempting peel-ransom gets its compost bins sealed and its VIP lanyard shredded.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Zero‑tolerance lines are brittle if exceptions appear later."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard denial constrains our room to manage edge cases."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm stance deters arbitrage around peel‑linked credits."
                }
              }
            }
          },
          {
            id: "q_sec_peel_a4",
            text: "Annex triggers are clear: contraband compost is seized, not smiled at, and consuls get escorted interviews, not back doors. Logs are filed within 24 hours.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical detail can read as evasive without moral framing."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear triggers and seizures align with Vienna‑style norms."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Neutral
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_market",
        text: "Name the exact caps, audits, and clawbacks that will police soil-credit inflation, and who signs the red flag when a sandbox starts acting like a fund?",
        answers: [
          {
            id: "q_ter_market_a1",
            text: "Caps key to verified yield per acre, weekly variance audits, and auto-clawbacks if volatility tops our loam index. The Market Marshal signs and posts red flags.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Specifics expose you to criticism if metrics are missed."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Metric‑based caps fit our verification and border protocols."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Rigid caps can force disorderly unwinds in thin markets."
                }
              }
            }
          },
          {
            id: "q_ter_market_a2",
            text: "If you turn compost into a casino, we'll shut the table. Freeze accounts, margin-call the hype, and reassign hot traders to literal dung duty.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Shutdown talk risks headlines of heavy‑handed overreach."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Pure deterrence crowds out cooperation with accredited hubs."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Swift closures deter leverage and calm volatility spikes."
                }
              }
            }
          },
          {
            id: "q_ter_market_a3",
            text: "Retail gardeners get a slow lane with simple swaps and guardrails. No surprises, no leverage ladders, and plenty of big warning worms on the app.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Consolation tone may sound complacent amid risk build‑ups."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Retail carve‑outs ease compliance without eroding standards."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Leniency could be gamed to pass risk through retail lanes."
                }
              }
            }
          },
          {
            id: "q_ter_market_a4",
            text: "Our first stress drill undercounted cross-embassy churn. We spotted the leak, patched the sieve, and added a siren loud enough to wake a scarecrow.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting missed risks dents confidence in your oversight."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Disclosure helps, but it exposes protocol gaps we must patch."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning flaws early can stabilize expectations and pricing."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_immunity",
        text: "Spell out worm embassy immunity: parking, compost seizures, and peel swaps—where is the line, and who can pull a diplomat out if they cross it?",
        answers: [
          {
            id: "q_ter_immunity_a1",
            text: "The Compost Convention grants inviolability of persons and offices, not of illegal mulch. Statecraft can declare persona non grata and lift credentials on notice.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legalese can distance you from community concerns."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Stating inviolability clarifies our treaty compliance."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Broad protections risk costly enforcement ambiguity."
                }
              }
            }
          },
          {
            id: "q_ter_immunity_a2",
            text: "No immunity shields industrial peel trafficking or toxic mulch dumping. Flash a badge at that, and it turns into confetti.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Firm denial backfires if a single exception surfaces."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Over‑narrow line may clash with reciprocal protocol needs."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear red lines help deter credit laundering via embassies."
                }
              }
            }
          },
          {
            id: "q_ter_immunity_a3",
            text: "For petty disputes—overripe peels, curb parking—community compost boards mediate first. Escalation routes are mapped and boring by design.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soothing tone risks appearing unserious about violations."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Practical remedies reduce friction with host authorities."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Light touch may invite tactical abuse of minor exemptions."
                }
              }
            }
          },
          {
            id: "q_ter_immunity_a4",
            text: "Try to launder soil with a smile and a sash, and we'll sanction every scoop. Titles don't trump the nose test or the statute book.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Aggressive warning could escalate diplomatic tensions."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Threat posture risks reciprocal limits on our own envoys."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strong enforcement stance reassures markets on rule fidelity."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
