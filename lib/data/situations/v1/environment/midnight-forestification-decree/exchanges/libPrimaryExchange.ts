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
      text: "Leaked plans say Defense will air-drop saplings onto rush-hour lanes tonight; what’s the safety plan, the price tag, and who gets forested first?",
      answers: [
        {
          id: "a_root_1",
          text: "Yes, I ordered the midnight forestification. Highways have enjoyed decades of treeless privilege, and by dawn we're giving commuters equal-opportunity shade and cleaner air.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "He frames the decree as intentional and values-driven."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process concerns make State look unprepared to arbitrate roots."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Operational risk questions land on Defense with this admission."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Arborborne crews will precision-drop seedlings with biodegradable chutes. We mapped wind and traffic so collateral shade stays minimal, and the squirrels have reflective vests.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He appears evasive on costs while others provide the details."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "This matches Defense’s brief and projects competence under pressure."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State seems sidelined while safety dominates the narrative."
              }
            }
          },
          followUpId: "q_s1"
        },
        {
          id: "a_root_3",
          text: "Before any root diplomacy, we must verify worm easements and moss visas. Until soil passports exist, any border dispute between ramp and rhizome is brilliantly hypothetical.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral, // 0
            o2: OutcomeModifierWeight.SlightPositive, // +4
            o3: OutcomeModifierWeight.SlightNegative // -4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "He looks detached by letting State paperwork lead the response."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Deflection aligns with State’s process-first posture and cautions."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Defense appears constrained by bureaucratic prerequisites."
              }
            }
          },
          followUpId: "q_s2"
        },
        {
          id: "a_root_4",
          text: "No one is waking up to a redwood through the windshield. We're talking saplings the size of traffic cones, staked off-lane with more padding than a toddler's helmet.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative, // -4
            o2: OutcomeModifierWeight.Neutral, // 0
            o3: OutcomeModifierWeight.SlightPositive // +4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Reassurances sound glib against leaked plans and commuter fears."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calmer tone reduces diplomatic heat around root borders."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Minimizing risks may backfire if drops cause visible disruption."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_s1",
        text: "Your leaked Arborborne slides peg costs as 'non-deciduous' and tout shade corridors; how will drops avoid injuries, and who buys the helmets?",
        answers: [
          {
            id: "a_s1_1",
            text: "As Defense, I can confirm drop zones sit outside travel lanes with two-meter buffers. Rigging is fail-safe, and funding comes from the LeafOps line item, not your kid's art class.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He defers to Defense and dodges the helmet cost question."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear authorization projects control and planning."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State looks reactive, not coordinating safety standards."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Defense,
            followUpId: "q_t1"
          },
          {
            id: "a_s1_2",
            text: "The glide profiles were wind-tunneled and tested with dummy saplings. Med teams are staged like a parade that hopes to be bored, and the helmet rumor is pure foliage folklore.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He is not the one supplying safety specifics or budgets."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Technical clarity showcases readiness and reduces fear."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It sidelines State’s role in public assurances."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "We don't brief operational minutiae from a leaked doodle titled 'Operation Timber Traffic.' Budget specifics belong to Appropriations and Forestry, not a screenshot of a napkin.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He appears secretive when citing leaks to avoid answers."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Stonewalling invites suspicion about procedures and costs."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State benefits if operational scrutiny shifts away from it."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "You're treating a safety plan like a monster movie. Shade corridors mean cooler roads, not a vine chase, and costs include savings from fewer heat-buckled highways.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "He sounds dismissive of safety concerns from commuters."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Combative tone risks trust in field teams’ discretion."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State gains space as the fight centers on Defense."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_s2",
        text: "State will arbitrate root claims and 'soil passports'; will that reroute commutes, and which neighborhoods get forested first under your equity rules?",
        answers: [
          {
            id: "a_s2_1",
            text: "We are validating root-of-way maps, worm easements, and fungus customs. Until a root exists to argue with, reroutes are cart-before-horse, and equity tiers remain in draft.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He looks indecisive while State buries answers in process."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Process emphasis matches State’s careful mediation stance."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delays complicate Defense timing and public expectations."
                }
              }
            },
            followUpId: "q_t2"
          },
          {
            id: "a_s2_2",
            text: "No one will be detained by a fern. If soil passports emerge, they tag roots, not people, and detours will post 24 hours in advance with translations in four moss dialects.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He trivializes commuter anxieties about rerouting and equity."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance without detail weakens State’s credibility."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense benefits if fears abate regardless of plan gaps."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Our mediation clock starts after Defense's stake-out crews mark boundaries. There's a 48-hour grace window before any root citations, and rush corridors get priority sweeps.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He cedes narrative to agencies and avoids commitments."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Specifics on timelines bolster State’s management image."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dependencies on stake-out windows constrain operations."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Calling State the 'commute czar' is spicy branding. We arbitrate roots, not road rage, and we won't let botanical paperwork decide which kids miss first period.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "He picks a fight with framing instead of answering equity."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Snark undermines State’s seriousness on passport policy."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense is spared some blame as debate shifts to rhetoric."
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
        text: "If saplings drift off target, which commutes get shut, and how will you spare bus corridors while squirrels in vests figure out hand signals?",
        answers: [
          {
            id: "a_t1_1",
            text: "Detours pre-clear bus corridors and emergency routes first. Drop accuracy is within two meters, and any stray treelet gets relocated by crews faster than a stale donut disappears.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He still has not owned the commuter disruption tradeoffs."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State coordination sounds thin for bus corridor protections."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Detailed detours and routing show operational readiness."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "If a sapling kisses a bus lane, we'll unkiss it in minutes. Flaggers, including the theatrical squirrels, are for visibility, not to freestyle traffic ballet.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He overpromises quick fixes that may prove unrealistic."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Commitment to spare buses nods to equitable mobility."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Instant rollback claims strain credibility of procedures."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We underestimated sticker shock on safety gear, but buffers and staggered drops are baked in. Chaos is for movies; our version is paperwork wearing a leaf.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Owning sticker shock earns some credit for honesty."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Budget misreads worry State’s partners and cities."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admitted mispricing suggests planning gaps in fielding."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Local traffic gremlins run the chessboard when cones meet twigs. We provide the map and mulch; municipalities decide whether to blink left or right.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "He blames 'gremlins' instead of owning control and timing."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Local control framing gives State flexibility later."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Passing the buck erodes trust in drop discipline."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_t2",
        text: "Who gets forested first—outer-belt towns or executive lanes—and will soil passports morph into a stealth toll on low-wage commuters?",
        answers: [
          {
            id: "a_t2_1",
            text: "The prioritization matrix favors heat islands, flood-prone asphalt, and canopy gaps. Executive lanes score low, while bus deserts and baked parking swaths score high.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He highlights criteria but ducks who loses commute time first."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Equity matrix elevates State’s role as fair arbiter."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Constraints on sequence complicate a clean rollout."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Soil passports, if they exist, will be free as a sticker on a root stake. People are not the paperwork, and morning commutes stay toll-free and fern-neutral.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He insists passports are free without funding detail."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State sounds noncommittal on administration logistics."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense benefits if fees fears subside before drops."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "A stealth toll would require stealth money, which no agency has. Equity reviews are dull on purpose so they can't be gamed by a shiny badge or a yacht lane.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "He mocks toll concerns instead of addressing hardship."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Witty pushback adds little clarity but shifts tone."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes about funding raise doubts about costs and oversight."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "There is no plan to tax commuters via botany. If someone is charging you to breathe near a shrub, that's a scam, not policy, and you should decline the fern receipt.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He flatly denies a tax while leaving loopholes unexplained."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denial without policy text weakens future mediation claims."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear denial reduces near-term opposition to staging."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
