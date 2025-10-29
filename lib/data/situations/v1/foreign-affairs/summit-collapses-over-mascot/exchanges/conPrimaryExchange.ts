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
      text: "After two allied micro-states clashed in a foam-chicken duel, how will you tighten diplomacy and protocol without spooking partners or killing fun?",
      answers: [
        {
          id: "a_r1",
          text: "I’ll challenge both micro-states to a beak-to-beak debate moderated by a mime. The bravest mascot can claim the ribbon, and the adults will quietly sign the de-escalation paperwork.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "This bold play shows confidence without surrendering humor."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This spectacle risks trivializing deterrence drills."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Public theatrics complicate protocol repair and calm."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "We’ve circulated a quiet apology draft, paused mascot exchanges, and convened a protocol sprint with mediators. Goal: cool tempers, fix the script, and get trade chatter back to normal.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Quiet drafts look cautious amid noisy allies; lead visibly."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft steps can invite testing if boundaries remain blurry."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Discretion restores tone and lowers the glitter temperature."
              }
            }
          },
          followUpId: "q_sec_2"
        },
        {
          id: "a_r3",
          text: "We won’t blink at inflatable poultry. Defense will run rapid ‘squawk parity’ drills, inspect props for mischief, and set firm perimeter rules so pageantry never steps on deterrence.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Escalatory optics could spook partners and distract trade."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Structured drills show resolve and prevent stunt creep."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hard talk now could harden feelings and slow apologies."
              }
            }
          },
          followUpId: "q_sec_1"
        },
        {
          id: "a_r4",
          text: "Allies know we can laugh without losing our backbone. This was foam, not a fault line, and we’ll restore good spirits while guarding every serious commitment.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Over-reassurance risks sounding blasé about protocol gaps."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Jokes without guardrails dull the edge of credible deterrence."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A light touch helps, but we still need written fixes."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_1",
        text: "Did the foam-chicken duel signal soft-power drift inviting tests, and will you set costume rules of engagement before a bigger beak shows up?",
        answers: [
          {
            id: "a_s1_1",
            text: "Yes. We’ll publish costume rules of engagement, stage joint de‑escalation rehearsals, and sanity‑check props at the door. If you bring larger beaks, expect stricter choreography.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive, // +4
              o2: OutcomeModifierWeight.Neutral, // 0
              o3: OutcomeModifierWeight.SlightNegative // -4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rules alone won't fix tone; avoid looking brittle to friends."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear ROE discourages antics before they test thresholds."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public codification may inflame pride during de-escalation."
                }
              }
            },
            followUpId: "q_ter_1"
          },
          {
            id: "a_s1_2",
            text: "Defense, State, and the Office of Ceremonial Logic are running an after‑action. In 72 hours a memo will define no‑peck zones, handler cues, safe words, and a one‑page incident ladder.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process is fine, but speed matters when markets twitch."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Too many committees can blur accountability in a pinch."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Coordinated guidance will cool tempers and standardize conduct."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "No—adversaries don’t gauge resolve by poultry theater. Our guarantees rest on posture, capability, and calm processes, not on who wins a foam duel.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissing signals risks complacency and future surprises."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "We can accept clarity without theatrics if risks grow."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Downplaying responsibility could read as a shrug to allies."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "The principals are already trading memes and mock apologies. That’s how the reset starts, and we’re keeping real channels open while egos cool.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Cheer is good; complacency is not. Keep a firm spine."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Memes won’t deter repeat theatrics without real lines."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance is helpful, but we need private guardrails."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_2",
        text: "Are trade ties and morale at risk after the mascot fiasco, and will you codify protocol so future foam birds don't trigger tariffs or fresh time-outs?",
        answers: [
          {
            id: "a_s2_1",
            text: "Authorized from State: we’re codifying mascot protocol, reopening talks this week, and shelving tariff chatter. Calm steps, quiet tone, and a firm ban on glitter reprisals will guide us.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Apologies and codification feel slow amid public drama."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Checklist fixes are fine, but resolve must lead."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Authorized guidance clarifies custody and calms trade nerves."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.State,
            followUpId: "q_ter_2"
          },
          {
            id: "a_s2_2",
            text: "No merch embargo is coming. We’ll use timeouts, apology channels, and adult supervision before any policy swing, because morale is a national export, not a casualty.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Too sunny a tone can miss real protocol exposure."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A lenient stance risks repeat antics and sloppy props."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overconfidence could stall needed updates and audits."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "We missed a prop‑handling footnote and it bit us. We’ll own it, fix it, and publish ‘Don’t Duel the Mascot,’ a friendly checklist for handlers, hosts, and hype crews.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning the gap builds trust and speeds disciplined repair."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting misses is fine, but deterrence must not sag."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "The oversight strained partners and deserves firm correction."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Trade tremors are just echoes; supply lanes for foam and dignity are open. We’re not taxing joy or slapping tariffs on puppetry.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive, // +4
              o2: OutcomeModifierWeight.SlightNegative, // -4
              o3: OutcomeModifierWeight.Neutral // 0
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Denial blurs lessons and invites another messy episode."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Rejecting risk signals softness to future costume brinkmanship."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Brushing off costs makes trade and protocol cleanup harder."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_1",
        text: "Will you back squawk-parity drills or inflatable-beak trials to deter costume brinkmanship, and who rules when a mascot is officially too peckish?",
        answers: [
          {
            id: "a_t1_1",
            text: "We’ll trial simple drills—approach, bow, tap wings, retreat—plus neutral stage judges for disputes. A published checklist and signal cards will keep the comedy from turning kinetic.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Drills risk overreaction optics if paraded too loudly."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Measured drills build muscle memory and credible calm."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overt scripting can stiffen egos unless kept discreet."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Bigger beaks won’t bait us into stunts; they’ll earn more precise rules. We’ll out‑plan theatrics so deterrence stays credible and costumes stay squarely in the harmless column.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Taunts answered in kind could spiral beyond pageantry."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm lines and trials deter brinkmanship by setting limits."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive tone may complicate quiet repair with allies."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Let’s not confuse foam physics with foreign policy. We’re fixing the skit, not the skyline, and saving high drama for actual stakes.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection undercuts urgency and muddles expectations."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Skipping practice invites confusion when props misbehave."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A calm reminder helps, but we still need specific steps."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Deterrence with a wink works. Clear lines, padded egos, and quick apologies keep peace intact while the pageantry does its harmless dance.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comfort talk helps morale but may dull needed urgency."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft focus risks ambiguity without enforceable signals."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Assurances soothe partners while protocols tighten quietly."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_2",
        text: "How will you harden protocol while keeping pageantry alive with timeouts, channels, and prop audits so morale holds and glitter stays off trade?",
        answers: [
          {
            id: "a_t2_1",
            text: "Protocol updates add prop audits, handler training, an apology ladder, and a costume‑incident hotline. Quarterly morale checks will track whether pageantry is helping, not hurting.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Updates must not look punitive or joyless to partners."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "More paperwork can slow response if not tightly scoped."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear standards, training, and audits stabilize events."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Pageantry stays; only chaos retires. Kids get mascots, adults get rules, and nobody pays a tariff for laughing.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Keep charm, yes; keep blind spots, no. Guard the lanes."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Winks alone won’t deter stunts without crisp thresholds."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Morale matters, but we should still codify backstage."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "We let improvisation outrun instruction. We’ll codify the fun so spontaneity stops carrying sharp elbows.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral, // 0
              o2: OutcomeModifierWeight.SlightNegative, // -4
              o3: OutcomeModifierWeight.SlightPositive // +4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Admitting improv drift shows accountability and resets tone."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Lapses reveal risk; tighten enforcement and test props."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "The gap rattled partners; formal fixes must follow quickly."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Glitter doesn’t crash markets; bruised pride does. We’ll vacuum both, just in case.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Banter aside, markets watch signals and reliability."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Shrugging at optics risks erosion of credible posture."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection slows repair; quiet fixes should lead now."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
