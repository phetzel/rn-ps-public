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
      id: "q_root",
      text: "With diplomatic blimps sowing auroras, how will the program share flight paths, let cities sleep, and keep patents open without turning the night into a billboard?",
      answers: [
        {
          id: "a_root_1",
          text: "We can debate a sky and still fly through it; pilots get lanes, sleepers get dimmers, and patents get daylight. If someone tries to sell you the moon, we'll invoice them for the tide.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.StrongPositive,
            outcome_2: OutcomeModifierWeight.StrongNegative,
            outcome_3: OutcomeModifierWeight.ModeratePositive,
            outcome_4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "I’m challenging the premise while defending sane skies."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Corridors and consent remain essential to keep partners safe."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_2",
          text: "State is coordinating sky-gardening corridors with air agencies and local curfews. The license spec stays open, and ad content is barred in the base protocol by design.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.StrongNegative,
            outcome_2: OutcomeModifierWeight.ModeratePositive,
            outcome_3: OutcomeModifierWeight.ModerateNegative,
            outcome_4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Technical briefings help, but I won’t tolerate bureaucratic drift."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Our corridors and dimming plans are tested and ready for rollout."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "We won't turn nights into pop-up commercials. The system defaults to dark, dims on approach, and treats neighborhoods like libraries, not billboards.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.SlightPositive,
            outcome_2: OutcomeModifierWeight.SlightNegative,
            outcome_3: OutcomeModifierWeight.StrongPositive,
            outcome_4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "I will back a hard ban on sky ads and keep nights humane."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances are fine, but real enforcement will demand resources."
              }
            }
          }
        },
        {
          id: "a_root_4",
          text: "Let's not skip to dystopia just because the lights are pretty. We have rulebooks thicker than a blimp sandwich, and we'll publish them for comment before launch.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.StrongNegative,
            outcome_2: OutcomeModifierWeight.StrongPositive,
            outcome_3: OutcomeModifierWeight.StrongNegative,
            outcome_4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Optimism is welcome, but people deserve specifics today."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "We can share specifics calmly without stoking dystopian fears."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Which guardrails keep pilots safe near neon cloud corridors, and what curfews or dimming rules protect residents who never consented to glow-in-the-dark weather?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Pilots get published aurora lanes, altitude buffers, and real-time beacons. Cities can set quiet-night windows, and the array throttles brightness automatically when people need dark.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.StrongNegative,
              outcome_3: OutcomeModifierWeight.MajorPositive,
              outcome_4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Clear lanes help, but redundancies must be proven in drills."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "NOTAM-style lanes and altitude buffers are in final draft."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "If your baby is asleep, the sky is, too. We dim near hospitals, schools, and cranky neighborhoods by default, because circadian rhythms don't negotiate.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModerateNegative,
              outcome_2: OutcomeModifierWeight.StrongPositive,
              outcome_3: OutcomeModifierWeight.ModerateNegative,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Promised dimming is hollow unless tied to measurable triggers."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "We tie dimming to light exposure thresholds verified by sensors."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "If we can choreograph metal tubes at 600 mph, we can choreograph photons. Doubting that is like fearing a traffic cone will wrestle a plane.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.StrongNegative,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Complexity can be managed with strict, certified procedures."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Confidence is good, but certification must lead enthusiasm."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "No, we are not painting runways with rave lights. The aurora fields avoid approach paths and never cross minimums set by aviation authorities.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongNegative,
              outcome_2: OutcomeModifierWeight.ModeratePositive,
              outcome_3: OutcomeModifierWeight.ModeratePositive,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Rejecting gimmicks is right; safety must stay boring and clear."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "We still need audits to ensure no spillover onto runways."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Open-source patents sound like square circles: how will licenses work, and what stops brands from renting the sky one hue at a time?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Licenses are open with a non-advertising clause baked in. You can use the code, not the crowd, and any color patent reverts to commons for public display rights.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.StrongNegative,
              outcome_3: OutcomeModifierWeight.ModeratePositive,
              outcome_4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "License clarity is welcome; keep terms tight and enforceable."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Our open clauses ban advertising and require reciprocity."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "If a brand thinks it owns blue, we invite them to litigate with the ocean at sunrise. The night is a commons, not a showroom.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongNegative,
              outcome_2: OutcomeModifierWeight.ModeratePositive,
              outcome_3: OutcomeModifierWeight.ModerateNegative,
              outcome_4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "We will fight color monopolies in court and with open code."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Taunts won’t curb rent-seeking; binding terms will."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "Open doesn't mean chaotic. Think guardrails like a community cookbook: everyone shares the recipe, nobody spikes it with a logo.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModeratePositive,
              outcome_2: OutcomeModifierWeight.StrongNegative,
              outcome_3: OutcomeModifierWeight.StrongPositive,
              outcome_4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Guardrails must be real and testable, not metaphors."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "We need statutory language, not only analogies and intent."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "We admit color IP is a maze, but we've mapped exits - defensive pooling and sunset clauses make hoarding less profitable than sharing.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModerateNegative,
              outcome_2: OutcomeModifierWeight.StrongPositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Admitting the maze is honest, but it risks public trust."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Our exit maps include public-interest triggers and reviews."
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
        text: "Who decides when to dim - the air agency, city councils, or the aurora gardeners - and how will wildlife and sleep studies shape the nightly schedule?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Local councils set dimming calendars with wildlife agencies. Sensors watch bird and bat activity, and the system yields to migration and exam weeks before it makes pretty.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.StrongNegative,
              outcome_3: OutcomeModifierWeight.StrongPositive,
              outcome_4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Local, science-led calendars make sense and build trust."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "We will fund studies and respect locally set dimming choices."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "If owls glare at us, we back off. The schedule can fade to zero in minutes, and it defaults to dark when in doubt.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongNegative,
              outcome_2: OutcomeModifierWeight.StrongPositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Adaptive dimming respects sleep and owls without panic."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Flexibility needs clear limits to protect reliability."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "We don't yet know every ripple on every moth, so we're funding studies before broad rollout and tying brightness to measured ecosystem tolerance.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.StrongNegative,
              outcome_3: OutcomeModifierWeight.StrongPositive,
              outcome_4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Unknowns demand caution and a slower, staged rollout."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Pilots and residents will have veto points during trials."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "We've been lighting roads for a century; we can finally light the sky responsibly. Let's upgrade from candles on sticks to dimmable, consent-based auroras.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongNegative,
              outcome_2: OutcomeModifierWeight.StrongPositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "We can learn fast without gambling with public rest."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Trial speed cannot eclipse habitat and sleep safeguards."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Enforcement is the unfun part: who polices anti-ad clauses at 3 a.m., and what penalties hit a rogue embassy blimp that paints a logo over a stadium?",
        answers: [
          {
            id: "a_ter2_1",
            text: "The license runs with the light: audit logs watermark every display, so a logo at 3 a.m. leaves a trail. Fines escalate to spectrum throttles and corridor suspensions.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.StrongNegative,
              outcome_3: OutcomeModifierWeight.StrongPositive,
              outcome_4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Audit trails matter; publish logs and takedowns by default."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Watermarks and immutable logs enable rapid enforcement."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Sky-billboards won't sneak by. Community dashboards flag violations in real time, and takedowns are automated faster than you can say 'no logo'.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongNegative,
              outcome_2: OutcomeModifierWeight.StrongPositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Dashboards help only if night crews are funded and alert."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "We will fund night staff and publish response time targets."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "If a rogue blimp tries product placement, we'll outshine it with a giant 'Nope' and dock its corridor time. The night belongs to the public, full stop.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.StrongNegative,
              outcome_3: OutcomeModifierWeight.StrongPositive,
              outcome_4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Deterrence requires swift, visible penalties for violators."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Responses must follow treaties and due process, not theatrics."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "No, cross-border mischief doesn't get a free pass because it floats. Use requires reciprocal rules, or the corridor closes until compliance returns.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModerateNegative,
              outcome_2: OutcomeModifierWeight.StrongPositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Correct—sovereignty limits apply, even at three in the morning."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "We’ll coordinate penalties with allied regulators across borders."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
