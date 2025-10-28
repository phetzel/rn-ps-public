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
      text: "Your Moonlight Permit rolls out, yet our files flag sealed fee ladders, glow‑meter vendor access, and a quiet enforcement grid. Who engineered this?",
      answers: [
        {
          id: "a_root_admit",
          text: "I promised the Moon free curb space and moths a union break. Permits keep nightlife from double‑booking the sky, and we'll post fee ladders and vendor logs so you can audit us.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "He frames the rollout as honoring promises while tightening night rules."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "They worry this admission weakens deterrence against illicit lighting."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Health staff fear mixed messaging on sleep impacts from fee secrecy."
              }
            }
          },
          followUpId: "q_sec_vendors"
        },
        {
          id: "a_root_reassure",
          text: "Health‑wise, this lowers insomnia flare‑ups and stops migratory moths from rage‑spiraling into porch riots. We're prescribing dimmer dinners and federally approved nightcaps, not panic.",
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
              reaction: "He dislikes leaning on health framing while papers hint at favoritism."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Security doubts grow when soft talk eclipses enforcement transparency."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Public health welcomes a calm tone linking permits to better sleep."
              }
            }
          }
        },
        {
          id: "a_root_challenge",
          text: "Unlicensed glow is a soft target. We treat lumen‑laundering like contraband, and we'll audit floodlights before the disco balls revolt, because rule‑breakers shouldn't choreograph the night.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He sees the combative posture as drifting from his balanced promise."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Homeland cheers the tough stance as aligning with anti-contraband aims."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Health worries an aggressive frame could sideline sleep safeguards."
              }
            }
          }
        },
        {
          id: "a_root_authorized",
          text: "Authorized from Homeland Luminance: the enforcement grid is risk‑based, not revenge‑based. Hot spots come from complaints, power data, and moth drift models; we’ll brief you on methodology.",
          type: AnswerType.Authorized,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "He appreciates clarity on authority despite backlash over grids."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "They fear explicit ties to enforcement maps will inflame critics."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Health balks at rigid grids that ignore local insomnia concerns."
              }
            }
          },
          authorizedCabinetMemberId: CabinetStaticId.Homeland,
          followUpId: "q_sec_grid"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_vendors",
        text: "Our ledgers show StarGauge Labs got pre‑dawn drafts and test routes before rivals. Did a contractor moonwalk into shaping the Moonlight rules?",
        answers: [
          {
            id: "a_s1_inform",
            text: "Procurement logs, meeting minutes, and pilot routes will be posted this week. StarGauge saw drafts to test devices, not to write rules, and an independent board recalibrates tiers quarterly.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "He favors transparency to blunt vendor favoritism claims."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry open details expose audit tactics to bad actors."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health warns disclosures may spark anxiety about device safety."
                }
              }
            },
            followUpId: "q_ter_calibration"
          },
          {
            id: "a_s1_deny",
            text: "No contractor moonwalked into policymaking. They filed technical notes during a public review window, and we rejected anything that read like sales copy.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He sees blanket denial as brittle under document leaks."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They dislike dismissing leads that could map illicit glow routes."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Health appreciates downplaying panic about equipment bias."
                }
              }
            }
          },
          {
            id: "a_s1_deflect",
            text: "Let's not confuse rehearsal access with ghost‑writing. Nights have deadlines; we invited testers so the sky didn't trip over its own cords.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He feels evasiveness erodes credibility with night users."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They support redirecting focus toward compliance operations."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health sees deflection as ignoring insomnia and migration data."
                }
              }
            }
          },
          {
            id: "a_s1_reassure",
            text: "An ethics firewall separates spec writers from vendor coffees, with weekly conflict checks that are gloriously dull. Anyone slow‑dancing with bidders sits out.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He finds platitudes thin when records show early access."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Security fears soothing talk dulls deterrence on vendors."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Health likes assurances about firewalls and clinical review."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_grid",
        text: "We obtained a pixelated enforcement grid marking hot glow zones and blackout swaths. Who decides where inspectors swoop, and what triggers a surge?",
        answers: [
          {
            id: "a_s2_inform",
            text: "The grid blends insomnia complaints, outage clusters, wildlife forecasts, and past violations into a nightly Lumen Risk Index. Inspectors go where the index blinks red, not where gossip points.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "He backs clear criteria to justify where inspectors focus."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear revealing inputs lets violators dodge patrols."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health worries granular maps could stigmatize sleepless neighborhoods."
                }
              }
            },
            followUpId: "q_ter_waivers"
          },
          {
            id: "a_s2_challenge",
            text: "Publishing raw grids would hand a treasure map to lumen‑launderers. We'll share criteria and safeguards, but we won't gift wrap the getaway routes.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He dislikes framing press access as a direct threat."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They welcome a firm stance to shield grid methods."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Health thinks secrecy here risks neglecting clinical triggers."
                }
              }
            }
          },
          {
            id: "a_s2_deny",
            text: "There are no secret blackout swaths favoring VIP patios. If anything, big venues get extra scrutiny because their glow prints linger like confetti.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He sees blanket denial as implausible given leaked tiles."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry denial weakens future enforcement claims."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Health prefers to tamp down panic about VIP favoritism."
                }
              }
            }
          },
          {
            id: "a_s2_deflect",
            text: 'Think less "hush‑hush dragnet," more "boring rota with headlamps." The drama is in the name; the work is tedious, logged, and reviewable.',
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He thinks minimizing the grid sounds tone-deaf to locals."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Security dislikes casual talk that could invite testing of gaps."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Health is fine reframing toward routine rotation and complaints."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_calibration",
        text: "Did vendor‑set calibrations nudge permit tiers to fit their gadgets, and were dissenting engineers sidelined when they flagged moth‑risk bias?",
        answers: [
          {
            id: "a_t1_admit",
            text: "Early drafts weighted one vendor's calibration too heavily; we corrected before launch and posted the change log. That's why pilots exist—so math stumbles before the moths do.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "He values candor about calibration drift with a fix underway."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Security worries bias gaps could hide lumen laundering."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health flags the risk to sleep studies until corrections land."
                }
              }
            }
          },
          {
            id: "a_t1_reassure",
            text: "A cross‑agency Night Science panel reruns models using open test suites, and we rotate devices to avoid gadget monoculture. Moth corridors outrank marketing.",
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
                reaction: "He fears over‑reassurance reads as minimizing early flaws."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They want harder guardrails, not soothing generalities."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Health likes rigorous reruns by the Night Science panel."
                }
              }
            }
          },
          {
            id: "a_t1_deny",
            text: "No engineer was sidelined for flagging bias. Raising red flags is their job description, and the paper trail is intact and public.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He thinks denying engineer concerns invites whistleblowers."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They back a firm line to prevent vendor litigation frenzies."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health fears chilling effect on scientists who report bias."
                }
              }
            }
          },
          {
            id: "a_t1_deflect",
            text: "This melodrama over a decimal point ignores the bigger picture: the Moon is punctual, lanes are clearer, and porch karaoke finally ends on time.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He dislikes belittling technical critiques amid scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They see deflection as soft on vendors gaming thresholds."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Health is content to foreground broader benefits context."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_waivers",
        text: "Inside‑night sources whisper about lumen‑laundering patios and quiet waivers for big venues. Are quotas or exceptions baked into enforcement?",
        answers: [
          {
            id: "a_t2_deny",
            text: "No secret waivers, no glow quotas, no patio amnesty. Any exception is logged with a reason code and expires faster than a candle in a wind tunnel.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He worries categorical denial collapses if waivers surface."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They like signaling zero tolerance to scare off abusers."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Health worries denial can bury real insomnia hotspots."
                }
              }
            }
          },
          {
            id: "a_t2_inform",
            text: "Private patios aren't exempt; they're on rotation, and laundering patterns pop in meter data and complaints. We've even seized counterfeit chandeliers pretending to be porch lights.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "He favors specifics on rotations, thresholds, and audits."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear revealing lists will tip off chronic violators."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health warns too much detail can brand vulnerable patients."
                }
              }
            }
          },
          {
            id: "a_t2_reassure",
            text: "We measure success in quieter nights and steadier sleep surveys, not ticket tallies. If enforcement spikes, it's to fix a spike, then it recedes.",
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
                reaction: "He sees generic comfort as insufficient without data cites."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They want deterrent cues, not lullabies to big venues."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Health backs outcome metrics like quieter nights."
                }
              }
            }
          },
          {
            id: "a_t2_challenge",
            text: "If venues game the rules, we'll pull the plug and bring charges. The night belongs to everyone, not just whoever rents the biggest spotlight.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes threats that overshadow fairness commitments."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They welcome a hard line against gaming and laundering."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health worries crackdowns might ignore sleep equity."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
