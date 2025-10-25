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
      text: "How did one ambassador declare a 'sovereign' pillow-fort on disputed Pillowmere Isle without oversight, and why are we sending a living-room navy?",
      answers: [
        {
          id: "a_r_challenge",
          text: "The President's view is simple: if you want 'sovereign,' bring your cushions to a public fort-off - clear rules, no secret ottomans. We'll out-build bravado, not out-gun neighbors, with oversight on camera.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Projects strength while sidestepping arcane maritime clauses."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Sees risky theatrics that strain posture and readiness."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Undermines treaty messaging and process credibility."
              }
            }
          },
          followUpId: "q_s2"
        },
        {
          id: "a_r_inform",
          text: "State is applying the Plush Accords: no fort is sovereign without a duvet referendum, three fluff stamps, and resident consent. Until then, sanctions stay narrow, temporary, and publicly reviewed.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Looks plodding next to the ambassador’s flashy gambit."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Worries legal hair-splitting slows operational clarity."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Affirms Plush Accords and the duvet referendum standard."
              }
            }
          },
          followUpId: "q_s1"
        },
        {
          id: "a_r_reassure",
          text: "Defense is dialing down the couch-navy drama: lullaby-level patrols, no goose-down saber-rattling. We're there to keep toy boats from bumping, not to anoint a pillow monarch, and we'll publish guardrails.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Appears cautious when critics demand a firmer stance."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Welcomes space to de-escalate and keep forces measured."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fears reassurance blurs the referendum requirement."
              }
            }
          }
        },
        {
          id: "a_r_deflect",
          text: "Let's not pretend a bedsheet coup makes constitutional law. Oversight bodies were napping; they're awake now. We'll audit the cushions, the compass, and the snack receipts before any new doctrine emerges.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Sounds evasive and invites suspicion of executive drift."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection hampers discipline and muddles tasking."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Refocuses debate on legal baselines, not stunt politics."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_s1",
        text: "Are the snack bans and sticker sanctions anything but theater while the fort harvests recognition stamps and Pillowmere's residents lose a voice?",
        answers: [
          {
            id: "a_s1_inform",
            text: "Targeted sanctions pause souvenir stamps and snack kickbacks tied to recognition schemes, but carve out daily life. Resident voice comes first; next step is an on-isle referendum run with neutral plush observers.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Transparency concedes narrative ground to critics."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Targeting lists complicate logistics and escorts."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clarifies sanctions criteria and recognition standards."
                }
              }
            },
            followUpId: "q_t1"
          },
          {
            id: "a_s1_admit",
            text: "Some sanctions did drift into prop theater - no one's freedom hinges on a glitter sticker. We're pruning the list to what deters bad behavior and elevates resident consent, not headlines.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning missteps signals accountability under pressure."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admission risks morale and invites opportunism."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Keeps focus on reforms to uphold plush law."
                }
              }
            }
          },
          {
            id: "a_s1_reassure",
            text: "We're opening direct channels with Pillowmere households, toy councils, and the Fortless Majority. Ombuds-cats will collect grievances, and relief routes exempt baby bottles and bedtime.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Soft tone clashes with the public’s demand for pushback."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Prefers calm channels to prevent miscalculation."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Over-calming blunts leverage for a resident-led vote."
                }
              }
            }
          },
          {
            id: "a_s1_challenge",
            text: "If the ambassador wants applause, produce voter rolls, not tassels. Recognition follows consent, not crocheted banners, and we'll keep pressure on until the community certifies a result.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Firm line reclaims initiative and pressures the fort."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric risks escalation beyond measured posture."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard edge can overshadow treaty-centered remedies."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_s2",
        text: "Who okayed a living-room naval parade for a one-person fort, and what guardrails prevent copycat flags on every throw pillow?",
        answers: [
          {
            id: "a_s2_reassure",
            text: "No one ordered a parade; we ordered space. Defense presence is measured, boring on purpose, and sunset-dated. We'll shrink the footprint with transparency metrics so caution doesn't read as capitulation.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Looks like backpedaling after a loud initial stance."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Signals control using presence without spectacle."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Warns that optics could still overshadow legal steps."
                }
              }
            },
            followUpId: "q_t2"
          },
          {
            id: "a_s2_deflect",
            text: "Authorizations trace a maze shaped like a pretzel: briefings, sub-briefings, and a fire drill. We're consolidating the clipboard chorus so someone besides a ficus knows who said yes.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Redirect keeps heat off the Oval while reviews proceed."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Deflection breeds confusion in rules of engagement."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dodging process talk weakens treaty credibility."
                }
              }
            }
          },
          {
            id: "a_s2_deny",
            text: "We did not escalate to theatrics; we de-conflicted routes to keep model ships from reenacting bumper cars. The point is safety, not spectacle, and the banners stay in the storage bin.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blanket denial risks backlash when memos surface."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Maintains narrative that posture stayed restrained."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denial elides the documentation gaps under review."
                }
              }
            }
          },
          {
            id: "a_s2_inform",
            text: "Chain-of-command review found gaps between couch rules and corridor memos. We're issuing a living-room navigation order, logging every cushion move, and publishing it in the public toy chest.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting gaps suggests lax oversight at the top."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Acknowledging seams invites calls for cutbacks."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Process clarity restores confidence in chain-of-command."
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
        text: "If a duvet referendum is required, what concrete steps ensure Pillowmere's actual residents vote before any fort claims sovereignty again?",
        answers: [
          {
            id: "a_t1_inform",
            text: "A neutral plush commission will register residents, mark precincts with non-sticky tabs, and run a secret-ballot duvet vote. Observers from Sofa Union and Beanbag League will audit and publish tallies.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Detailed steps look slow against headline theatrics."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Election logistics add friction to security tasks."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Sets verifiable path to a legitimate duvet vote."
                }
              }
            }
          },
          {
            id: "a_t1_reassure",
            text: "Ballot access includes home delivery, bedtime hours, and translation into Crinkle, Squeak, and Human. No result stands without a 60% turnout floor and a post-vote nap to cool tempers.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Gentle tone risks appearing complacent on sovereignty."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Predictable timelines reduce chances of missteps."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too much calm can dull pressure for compliance."
                }
              }
            }
          },
          {
            id: "a_t1_challenge",
            text: "Anyone claiming sovereignty before the vote can explain it onstage at a town-hall fort-off - blueprints out, slogans down. If your walls beat public will, congratulations, you invented monarchy.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Draws a bright line that deters freelancing claims."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hard line could invite standoffs at the perimeter."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Punitive tone risks chilling participation in vote."
                }
              }
            }
          },
          {
            id: "a_t1_deflect",
            text: "We're not reinventing democracy via duvet; we're applying common sense. If you can't count noses without counting throw pillows, the process pauses while adults find the floor.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Keeps focus on delivery, not on the ambassador’s stunt."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity muddies coordination with civil planners."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection weakens clarity on referendum benchmarks."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_t2",
        text: "Given allergy-prone admirals and budget bloat, how will defense shrink its footprint without signaling we'll fold at the first tug of a blanket?",
        answers: [
          {
            id: "a_t2_reassure",
            text: "We're swapping loud hulls for whisper craft, rotating fewer crews, and posting the schedule so the sea looks like paint drying. Deterrence lives in predictability, not pileups, and the pillows can breathe.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Risk-averse tone may be read as shrinking resolve."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Low-signature posture sustains deterrence efficiently."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Wants assurance that strategy aligns with accords."
                }
              }
            }
          },
          {
            id: "a_t2_inform",
            text: "Doctrine tweak: two-cushion rule between assets, blanket-edge standoff, and a weekly footprint cap published to the Mantle Board. We'll measure success by fewer incidents and shorter shuffles.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical tweaks lack the drama the moment demands."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear rules help crews avoid accidental provocation."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Notes compliance but worries about mixed signals."
                }
              }
            }
          },
          {
            id: "a_t2_deny",
            text: "Reducing signature isn't surrender; it's strategy. We'll still respond to pokes, but we won't stage a mattress musical just to look tall. Resolve is in the rules, not the volume knob.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissal sounds brittle amid visible budget strain."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denial hampers buy-in for necessary reforms."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Affirms that restraint is strategy, not capitulation."
                }
              }
            }
          },
          {
            id: "a_t2_admit",
            text: "Yes, the budget swelled like a comforter in a dryer. We're deflating costs - shared logistics, allergy-safe gear, and a 'no new pennants' policy - without pulling the plug on safety.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Concedes excess while trying to hold the line."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admission invites scrutiny of procurement choices."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Honesty enables credible alignment with plush norms."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
