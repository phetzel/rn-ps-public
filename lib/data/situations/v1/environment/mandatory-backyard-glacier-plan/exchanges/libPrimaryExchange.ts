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
      text: "Equity check: why does the glacier mandate drip on renters and fine low‑income blocks while contractors profit, and who pays when someone slips?",
      answers: [
        {
          id: "a_r1",
          text: "We're not letting the sun bully our zip codes. We'll freeze out predatory fees, melt contractor grift, and make sure the chill falls on polluters, not renters.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Defiant message rallies youth and shows we’ll confront heat."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Rhetoric without rules risks uneven liability and suits."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Confrontational tone worries lenders about cost exposure."
              }
            }
          },
          followUpId: "q_sec_equity"
        },
        {
          id: "a_r2",
          text: "Nobody's maxing a credit card to park a snowcone on the patio. Treasury will cap costs, front rebates, and phase payments so families cool off financially before the ice even shows up.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Soothing tone may feel small against a sweeping mandate."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances lack enforceable terms and clarity of fault."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear incentives calm markets and lower perceived risk."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "Liability is simple: if it's your glacier, you maintain it; if the city routes melt onto you, the city pays. Justice will issue plain‑English rules and a hotline before the first flake.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Technical focus can sap energy from our broader story."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Defined liability matrix reduces disputes and forum shopping."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Strict rules without offsets can stress cash‑flow planning."
              }
            }
          },
          followUpId: "q_sec_liability"
        },
        {
          id: "a_r4",
          text: "On contractors, we're allergic to gouging and frostbite PowerPoints. We'll judge bids by results, not how many polar‑vortex clip art slides they bring to the hearing.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "A light touch adds humor but risks seeming dismissive."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection weakens statutory grounding and accountability."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Evasive framing unsettles financing partners and insurers."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_equity",
        text: "You promise equity, but permits look like a slush fund: waivers in leafy districts, fines piled on hot blocks. Who sets prices, and how do renters get relief?",
        answers: [
          {
            id: "a_se1",
            text: "We're publishing a citywide rate card with hard caps, no zoning carve‑outs, and automatic fee waivers where heat maps run hottest. Renters get a pass‑through ban and direct credits on utilities.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Detailed pricing talk may feel cold and technocratic."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Uniform rate card supports fair enforcement citywide."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid pricing without credits can pinch household budgets."
                }
              }
            },
            followUpId: "q_ter_contracts"
          },
          {
            id: "a_se2",
            text: "Fines are not fundraisers; they're speed bumps. If a block is over‑ticketed, the meter stops and refunds trigger. Treasury will audit collections monthly and post them like weather reports.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance risks reading as spin without metrics."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Intent statements lack binding standards on fines."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Relief framing signals predictability to capital markets."
                }
              }
            }
          },
          {
            id: "a_se3",
            text: "If a contractor or landlord hikes prices to cash‑grab off ice, we'll treat that as heat profiteering. Expect revoked permits and a public shaming colder than the product.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Accountability stance projects strength against gouging."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Threat posture could overreach and trigger countersuits."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Punitive tone may spook investors and raise costs."
                }
              }
            }
          },
          {
            id: "a_se4",
            text: "Leafy districts will survive a few fewer latte igloos. The program targets heat, not hedge heights, and we'll prune any loopholes that try to hide in the shrubbery.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Quips can alienate moderates and distract from substance."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Flippant tone undermines equitable enforcement goals."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Light touch hints at flexibility for local businesses."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_liability",
        text: "Liability is a blizzard of finger‑pointing: whose policy covers slips, flooded basements, and neighbor drip wars, and how fast will claims be resolved?",
        answers: [
          {
            id: "a_sl1",
            text: "Responsibility matrix: owner maintains their glacier, city covers city‑installed runoff, contractor fixes install defects, and insurers must honor it. Claims resolve in 14 days or penalties kick in.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process talk can dull urgency and cede narrative space."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear responsibilities reduce tort risk and confusion."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rules without offsets can increase compliance expenses."
                }
              }
            },
            followUpId: "q_ter_finance"
          },
          {
            id: "a_sl2",
            text: "We set a 72‑hour adjuster standard, renter slip claims carry no deductible, and mediation is free. If your neighbor's drip hits you, the portal assigns blame without a ten‑episode miniseries.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Timelines help, but tone may seem cautious, not bold."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Service standards need teeth to avoid loophole abuse."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Fast claims and vouchers stabilize cash flows."
                }
              }
            }
          },
          {
            id: "a_sl3",
            text: "No, we are not offloading municipal melt onto private umbrellas. The statute blocks premium hikes tied to compliance, and any surcharge masquerading as a snow fee gets struck.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm denial shows backbone against unfair cost‑shifts."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Blanket denials invite challenges and adverse rulings."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard lines can unsettle bond buyers expecting clarity."
                }
              }
            }
          },
          {
            id: "a_sl4",
            text: "Penguins are charming but legally irrelevant. The only species named in the rule is Homo sapiens, and even they must wear non‑skid shoes near experimental ice.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Humor risks trivializing real risks to homeowners."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Jokes blur statutory definitions and precedent."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Softening edge suggests some flexibility in payouts."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_contracts",
        text: "What teeth back your contractor plan—will you publish bid sheets, cap margins, and ban shell companies, or will the same three ice barons skate off again?",
        answers: [
          {
            id: "a_tc1",
            text: "We'll open‑source bids, cap margins at eight percent, require conflict disclosures, and run random site audits. Shells get pierced, and a public vendor blacklist comes with due‑process exits.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Transparency pitch is solid but lacks narrative heat."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Open bids and caps curb fraud and ease enforcement."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tighter margins may deter bidders and raise financing costs."
                }
              }
            }
          },
          {
            id: "a_tc2",
            text: "Try to price‑gouge and we salt your contract so nothing grows. If you cartel up, we break the ice and the habit with fines that sting colder than a February invoice.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Tough stance shows resolve to police procurement."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Aggression risks due‑process challenges from vendors."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Harsh penalties could chill competition and pricing."
                }
              }
            }
          },
          {
            id: "a_tc3",
            text: "The pilot had some slush in procurement. We're draining it by assigning independent referees to scoring, publishing scorecards, and paying bounties for whistleblowers who spot rigging.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admission reads honest but may invite further attacks."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Concessions can weaken positions in pending disputes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Course correction reassures on fiscal discipline."
                }
              }
            }
          },
          {
            id: "a_tc4",
            text: "Small, local co‑ops get set‑asides and prompt‑pay guarantees, so they don't need to pad bills to survive the frost. The goal is fair work, not gilded snow shovels.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance helps but might feel like status‑quo talk."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Set‑asides need tight controls to avoid favoritism."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Prompt pay and co‑ops support liquidity and access."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_finance",
        text: "Families want dates, not metaphors: when do rebates hit, how do frost‑backed bonds affect rates, and what’s the thaw schedule for low‑income bills?",
        answers: [
          {
            id: "a_tf1",
            text: "Rebates hit within 30 days of install; advance vouchers cover deposits before delivery. Bill credits show monthly, and low‑income bills step down each quarter for a year.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Timelines are good but risk sounding transactional."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delivery dates need compliance hooks to be credible."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Predictable rebates and vouchers anchor confidence."
                }
              }
            }
          },
          {
            id: "a_tf2",
            text: "Frost‑backed bonds are laddered, not dumped; we publish the calendar and stress tests. A rate‑cap trigger activates if borrowing costs spike, shielding households automatically.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Explaining bond ladders may lose public attention."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Disclosure commitments reduce litigation exposure."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too much detail without relief can spook borrowers."
                }
              }
            }
          },
          {
            id: "a_tf3",
            text: "There is no sneaky future snow tax. Any change to credits or rates requires a public vote, an independent audit, and a blizzard of disclosures you can read without gloves.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear red line projects discipline against new taxes."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Absolutes can backfire if statutes require changes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard promises constrain tools and may raise rates."
                }
              }
            }
          },
          {
            id: "a_tf4",
            text: "If your accountant needs a parka to read the statement, we blew it. We'll keep forms short, fonts large, and metaphors optional so people can budget without a sled team.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Snark risks backlash from homeowners seeking clarity."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Mockery undermines statutory seriousness and trust."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A lighter tone hints at flexibility in implementation."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
