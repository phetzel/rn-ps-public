import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const independentPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.IndependentPrimary,
  content: {
    rootQuestion: {
      id: "q1",
      text: "As socks replace dollars and supply chains knot, how will you keep shelves stocked, prices stable, and savings safe from mildew in the coming weeks?",
      answers: [
        {
          id: "q1_a1",
          text: "Currency must evolve; I challenge inflation to a sprint in tube socks. We’ll outpace chaos with clear rules, dry storage, and fair swap windows. Loser converts to sandals.",
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
              reaction: "Bold stance energizes the narrative and frames the crisis on our terms."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Undercuts our operational messaging and raises doubts about readiness."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Makes public order seem secondary and invites friction at picket lines."
              }
            }
          }
        },
        {
          id: "q1_a2",
          text: "Treasury has staged mint-to-mill lanes, anti-lint watermarks, and toe-serials linked to a public ledger. We’ll stagger releases by region and grade, smoothing shelves before holidays.",
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
              reaction: "Technical focus sidelines leadership voice amid public anxiety."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Strong validation of systems; calms markets and partners."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Overlooks crowd management concerns during rollout."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "q1_a3",
          text: "Homeland is screening for sock-laundering, not snooping in closets. Expect gentle foot-scanners at depots, de-escalation at pickets, and clear protest lanes, not raids or bulk seizures.",
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
              reaction: "Concedes ground on control, implying drift at the top."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Shifts spotlight away from logistics discipline we must project."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Supports de-escalation narrative and measured enforcement."
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "q1_a4",
          text: "Let’s not romanticize the old paper that tore in the wash. The question isn’t novelty; it’s utility, and we’ll measure by dryer-fresh results, not hot takes.",
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
              reaction: "Light touch may charm some, but risks seeming glib if overused."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Dismisses process rigor; invites accusations of gimmick finance."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Signals laxity on protests, complicating field posture."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "Which concrete steps will Treasury take to prevent sock scarcity and safe-storage gaps, and how will toe-serial tracking avoid snaring small shops?",
        answers: [
          {
            id: "q2_a1",
            text: "We’re prioritizing base pairs first: common crew socks ship before rare jacquards. A national stock map will show inventory by grade, and toe-serial scans will stay optional for micro-retailers.",
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
                reaction: "Lets Treasury own the moment; leadership feels distant."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear plan boosts confidence in supply stabilization."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Fails to address enforcement posture near warehouses."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "q2_a2",
            text: "We’ve contracted mildew-proof vault totes and breathable safes, with subsidies for mom-and-pop lockboxes. No one is expected to bury their savings in cedar chests to stay solvent.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft tone risks appearing passive in a volatile week."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Helpful but light on metrics; auditors will press us."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Backs calm, proportional responses; lowers temperature."
                }
              }
            }
          },
          {
            id: "q2_a3",
            text: "Yes, the packaging line tripped over the aglet. Early kinks slowed release, but the backlog is clearing as mills switch shifts and we standardize bands and barcodes across vendors.",
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
                reaction: "Admission refreshes honesty but dents command image."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning faults can buy trust for fixes in the pipeline."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Adds pressure on local coordination and crowd control."
                }
              }
            }
          },
          {
            id: "q2_a4",
            text: "Claims of cartel hoarding are mostly fluff. We see opportunistic stacking, not a grand conspiracy, and fines will land faster than a dryer eating your favorite pair.",
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
                reaction: "Pushback rallies base, though fact-checkers may contest."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Denial clashes with field reports; complicates briefings."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissiveness can escalate tensions around checkpoints."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "With union walkouts and static-charged tempers, what will anchor sock-backed prices, and how will Homeland de-escalate pickets without overreach?",
        answers: [
          {
            id: "q3_a1",
            text: "Price bands will post daily so a basket of basics equals a basket of socks, not a mystery grab bag. Homeland teams will steer pickets away from depots and cool static before sparks fly.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Shares spotlight; empathy over edge may seem cautious."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defers to order; market signals need clearer anchors."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Directly supports de-escalation and restraint on lines."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "q3_a2",
            text: "Treasury’s glide path indexes sock grades to a consumer basket and energy costs. If lint spikes, the stabilizer widens redemption windows so shops aren’t forced into panicked markups.",
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
                reaction: "Technocratic framing lacks urgency for households."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Anchors pricing logic and signals steady glide path."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Insufficient nod to field de-confliction realities."
                }
              }
            }
          },
          {
            id: "q3_a3",
            text: "Speculators betting on mildew will find we invented sunlight. Hoarders can race us to the laundromat, but policy sprints faster than rumor when the dryers come on.",
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
                reaction: "Punchy stance projects resolve against manipulators."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Combative tone risks spooking logistics partners."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Escalatory rhetoric could inflame picket dynamics."
                }
              }
            }
          },
          {
            id: "q3_a4",
            text: "We won’t negotiate with a hashtag. Unions have seats at the table already, and we prefer contracts to chants, preferably in breathable fabrics that don’t fuzz the mic.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Shrugs at grievances; invites narrative of detachment."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Keeps policy specifics offstage while teams iterate."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Undermines emphasis on careful crowd management."
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
        text: "For households now using drawers as wallets, what should families do this week on labeling, mildew-proofing, and budgeting when rent is payable in ankle-lengths?",
        answers: [
          {
            id: "q4_a1",
            text: "Label pairs with a fine-tip fabric pen and store in ventilated boxes with desiccant packs. Photograph toe-serials, keep a home ledger, and schedule a monthly ‘roll and reconcile’ night.",
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
                reaction: "Practical tips help, but leadership remains off-camera."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reinforces standards for labeling and storage."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Minimal reassurance on audit encounters at doorsteps."
                }
              }
            }
          },
          {
            id: "q4_a2",
            text: "No one is grading grandma’s drawer. Everyday crews remain legal tender, and mildew insurance riders are discounted for the rollout. Your rent in ankle-lengths won’t vanish overnight.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comforting tone risks seeming light on accountability."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Guidance lacks specificity; graders may diverge."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Builds trust for home visits and neighborhood checks."
                }
              }
            }
          },
          {
            id: "q4_a3",
            text: "Some households will find sizes mismatched at first. Redemption kiosks will swap parity-free pairs weekly, so you don’t sacrifice value because a heel ran off with a stranger.",
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
                reaction: "Concedes confusion; invites questions about planning."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency buys patience as kinks clear."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Signals inconsistency; complicates outreach scripts."
                }
              }
            }
          },
          {
            id: "q4_a4",
            text: "Turn budgeting into a family relay: set goals, tag in, and beat impulse buys by racing them to the hamper. Inflation hates cardio and clear labels.",
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
                reaction: "Motivates families to engage and adapt quickly."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Gamifies finances; risks undermining standards."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Could be read as daring protests to escalate."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "For small retailers, how should tills, scanners, and returns work when cash is cotton and grades vary, and what compliance keeps them open during sock audits?",
        answers: [
          {
            id: "q5_a1",
            text: "Tills accept scans or manual entry; grade codes map to prices automatically. Returns require both socks unless certified ‘orphaned’ by kiosk. Compliance badges unlock bulk swap windows.",
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
                reaction: "Cedes spotlight to regulators; may read as technocratic."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strong clarity keeps shops open and audits smooth."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Little on queue management during inspections."
                }
              }
            }
          },
          {
            id: "q5_a2",
            text: "Inspectors are coaches this month, not refs throwing flags. Good-faith shops get warnings and fix-it days, plus grants for scanners and breathable safes so you can keep the lights on.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soothing tone without metrics can feel thin."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Overpromises leniency; weakens compliance leverage."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Signals coaching-first posture; eases street tensions."
                }
              }
            }
          },
          {
            id: "q5_a3",
            text: "No, we’re not forcing boutiques to stock burlap anklets. Quality standards are transparent, and high-grade lines can opt into armored delivery or stick with secure courier pickups.",
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
                reaction: "Counters rumor mills, though tone risks dismissive."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Denial undercuts our coordination narrative."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismisses fears; could spark pushback at checkpoints."
                }
              }
            }
          },
          {
            id: "q5_a4",
            text: "Yes, training lags in some districts. Mobile crews will tune scanners and help staff set parity charts, so checkout doesn’t feel like translating a knitwear epic poem.",
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
                reaction: "Acknowledges gaps; critics will seize on slow rollout."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency can accelerate retailer training uptake."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Implies uneven enforcement; invites complaints."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
