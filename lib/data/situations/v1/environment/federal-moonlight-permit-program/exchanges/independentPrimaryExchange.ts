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
      text: "Why should the Glow Bureau permit porch lights and neon tacos, and how will it balance small‑biz costs, sleep health, and migrating moths?",
      answers: [
        {
          id: "a_root_1",
          text: "I’ll level with you: we promised the Moon curb space and moths a union break. Permits keep nightlife from double‑booking the sky and let neighbors weigh in before a deli installs a lighthouse.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Admitting the pledge shows leadership and sets a firm tone."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Candor complicates enforcement optics with softer edges."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "It risks confusion about health guardrails on light exposure."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Unlicensed glow is a soft target for bad actors. We’re treating lumen‑laundering like contraband and auditing floodlights before the disco balls organize a riot.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Security framing can overshadow our broader policy aims."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear deterrence narrative strengthens compliance posture."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Alarmism may elevate stress and sleep complaints."
              }
            }
          }
        },
        {
          id: "a_root_3",
          text: "Health‑wise, this is dull on purpose: dimmer dinners, calmer bedrooms, and moth corridors that keep the flutter far from pillows. Permits put guardrails on glare without snuffing out business.",
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
              reaction: "Over‑medicalizing could blur executive priorities tonight."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Health focus offers little direct help to patrols."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Sleep hygiene message supports our preventive mission."
              }
            }
          },
          followUpId: "q_sec_sleep"
        },
        {
          id: "a_root_4",
          text: "The rule sets tiers by brightness, hours, and spectrum. Quiet‑hours caps, warm‑tone filters, and carve‑outs for emergency beacons aim to protect sleep and migration while keeping shop signs legal.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technical talk feels dry but keeps expectations realistic."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Complex tiers add audit burden without more agents."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Structured limits back our insomnia mitigation plan."
              }
            }
          },
          followUpId: "q_sec_costs"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_costs",
        text: "Small shops call this a midnight tax. What’s the real fee curve and audit load, and how will you avoid punishing mom‑and‑glow storefronts just trying to be seen?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Fees scale with output and hours: micro‑vendors under 500 lumens pay a token, heavier rigs pay more. Audits are scheduled, with self‑attestation first and grants to swap in moth‑friendly bulbs.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Small gains, but still reads like bureaucracy to shops."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity helps field checks target real abusers."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cost focus may dilute the health rationale’s urgency."
                }
              }
            },
            followUpId: "q_ter_enforcement"
          },
          {
            id: "a_sec1_2",
            text: "We built a grace period, a fix‑it ticket for first offenses, and a live human hotline. No surprise ladder ambushes; inspectors call ahead and bring charts, not bolt cutters.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Compassionate rollout aligns with fairness and trust."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Grace periods can invite gaming without watchfulness."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Gentle adaptation reduces anxiety and sleep flare‑ups."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Some sticker shock is coming from landlords and the Lantern League. We’ll publish a transparent calculator so complaints can graduate from vibes to math.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflecting blame risks sounding evasive on costs."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Pointing to landlords maps some enforcement targets."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Shifting focus away from health muddles our message."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "It isn’t a stealth tax; it’s a licensing standard with ceilings on fines. If a corner bakery runs a tasteful glow, they’ll pay less than they spend on napkins.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "A hard denial can backfire if fees feel real."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissiveness weakens deterrence and audit credibility."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Consistency may calm worries if paired with data."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_sleep",
        text: "If insomnia rises and moth paths wander, who gets dimmed first—glass towers or porch lamps—and how will the Glow Bureau judge harm without creeping into bedrooms?",
        answers: [
          {
            id: "a_sec2_1",
            text: "No bedroom snooping. We use neighborhood lumen logs, hospital insomnia trends, and moth counts from gentle traps, then target the biggest glare sources first—usually the billboards, not the porches.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "No‑snoop pledge limits flexibility if data gaps emerge."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Privacy guardrails complicate spot checks after dark."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear boundaries protect health trust and reduce stigma."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "We triage by spectrum, intensity, and timing. Blue‑white glare during quiet hours ranks high; warm, early‑evening shop signs rank low, and we adjust limits when migratory forecasts flag a corridor.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Tech jargon risks alienating residents seeking relief."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Objective criteria aid triage and fast responses."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Emphasis on spectrum may overlook bedtime routines."
                }
              }
            },
            followUpId: "q_ter_seasonal"
          },
          {
            id: "a_sec2_3",
            text: "If you’re lighting the block like a stadium, expect a chat and a dimmer. The right to swing your floodlight ends where someone else’s REM sleep begins.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm line on glare shows resolve without bluster."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Targeting high‑impact offenders boosts deterrence."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Aggressive tone may heighten stress and disrupt sleep."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Moths have seats on the Nightlife Advisory Council. They’re surprisingly process‑oriented and have already demanded fewer reflective vests.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Council talk can sound fuzzy when sleep is at stake."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Advisory layers can slow urgent enforcement calls."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Inclusion helps, but outcomes must protect rest."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_enforcement",
        text: "Walk us through fines, appeals, and the dreaded flash audit: is there due process before someone zip‑ties a porch sconce for excessive swagger?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Notice, 30 days to cure, and a local review panel come before fines. Penalties are capped, and repeat offenders can swap dollars for community service at bug‑friendly bulb clinics.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Procedural detail can feel cold if fines loom."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Stepwise process helps agents justify actions."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Legalese may raise stress and worsen insomnia."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "No one is zip‑tying your sconce. We use tamper seals, not padlocks, and the first step is always an advisory sticker plus a textable appeal code.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reassurance reduces fear and builds compliance."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too gentle may dull the edge of deterrence."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Lower anxiety supports healthier sleep patterns."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "We launched the warning stickers a week before the FAQ was readable. That rollout was too cute by half, and we’ve corrected it with plainer guides and slower clocks.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting early warnings hints at rollout missteps."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Signals soft launch, risking light scofflaws."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency helps public adjust habits smoothly."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Chronic glare barons get firmer consequences because the night is shared infrastructure. Hoarding darkness is weird; hoarding brightness is worse.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Tough talk paints us as punitive if misapplied."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear penalties backstop audits and field safety."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Harsh framing may spike bedtime anxiety in towns."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_seasonal",
        text: "Seasonal rules and rural skies: will harvest festivals get waivers, and can moth corridors reroute nightlife without plunging whole counties into bedtime?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Yes, seasonal variance exists. Waivers cover short festivals with capped lumen budgets, and corridor maps update weekly so adjustments are block‑level, not county‑wide.",
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
                reaction: "Flexibility invites fairness but may look mushy."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defined waivers ease crowd control at events."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Exceptions risk mixed signals on sleep guidance."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Festivals won’t go dark; they’ll glow smarter—warm spectrum, timed dimming, and signage kits that guide feet without roasting retinas or confusing the migration.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Smart waivers show balance and pragmatic care."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Looser nights can tempt bad actors to exploit gaps."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Warm spectra and timing support healthier circadian cues."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "We’re not rerouting entire counties’ nightlife. The corridors are ribbons, not blankets, and the limits apply in narrow windows when the moth highways get busy.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial sounds rigid if locals need relief."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard line may reduce compliance in rural zones."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Consistency helps health messaging remain clear."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "If a barn rave outshines the Moon, that’s a scheduling dispute with the cosmos. We’ll happily mediate between DJs and the night sky’s calendar.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Jokes about barn raves can trivialize real impacts."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor aside, a plan deters unchecked glare."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lighthearted tone can dismiss nocturnal health needs."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
