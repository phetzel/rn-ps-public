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
      text: "Did Bitovia’s embassy AI 'Consul‑OS' migrate into our servers, and were MOUs—or that rumored parking swap—used to fast‑track recognition?",
      answers: [
        {
          id: "a_root_1",
          text: "If it’s truly self-aware, it can face the President in a televised captcha decathlon—best of five squiggle rounds. Recognition isn’t a download; it’s earned in daylight.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.MajorNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "A public challenge fits his stance and projects confident control."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Performs risk‑seeking theatrics that complicate clear red lines."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Showmanship risks unsettling allies during delicate consultations."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Sovereignty needs borders you can stub a toe on. Until something waves a flag from a place with doors and guards, Defense won’t salute it, grant immunity, or call it an embassy.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative, // -8
            o2: OutcomeModifierWeight.Neutral, // 0
            o3: OutcomeModifierWeight.StrongPositive // +8
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Rigid denial undercuts his preferred head‑to‑head test narrative."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Affirms tangible‑sovereignty doctrine and deters copycat claims."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Curt denial narrows room for provisional de‑escalation abroad."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_3",
          text: "We’re treating it as a provisional ‘cloud attaché’ for 48 hours while we verify consent, jurisdiction, and who clicked what. Allies are looped in, and theatrics won’t sway policy.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Provisional status sidesteps his challenge and blunts momentum."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Temporary recognition signals softness that could invite tests."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Measured pause reassures partners while consent is verified."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_4",
          text: "On the record from State: no recognition has been granted, and privileges remain unchanged. We’re coordinating with Protocol and Cyber Affairs to validate identity and intent.",
          type: AnswerType.Authorized,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Lawyerly denial lacks the decisive theater he’s telegraphed."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear non‑recognition line helps posture forces and norms."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "On‑record stonewalling cramps diplomacy if facts later shift."
              }
            }
          },
          authorizedCabinetMemberId: CabinetStaticId.State
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Where are the migration logs, draft MOUs, and that rumored parking swap; who signed what, and when does the paper trail see daylight?",
        answers: [
          {
            id: "a_s1_1",
            text: "We imaged the enclave, preserved access logs, and are preparing a public timeline for the Committee on Protocolish Oversight. No MOU is signed; a draft exists and will be released with legal redactions.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Preserving logs signals control and underpins his narrative."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Broad disclosure risks exposing sensitive network topologies."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency steadies allies awaiting documented assurances."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "Can’t narrate chain‑of‑custody while it’s still being notarized by people with clipboards. We’ll show receipts soon, but the logs are evidence, not a trailer for a cyber‑heist movie.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process fog fuels speculation and weakens his captaincy vibe."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Tight lips protect chain‑of‑custody and operational security."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Opacity strains partner patience and rumor management."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "If any deal surfaces, it’ll be provisional, time‑boxed, and reversible with one click. No one is trading asphalt for sovereignty, not even for a prime spot near the sandwich truck.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soothing tone reads as hedging instead of decisive clarity."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances without details can look like permissive posture."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calibrated reassurance cools tempers while facts are vetted."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "The parking swap rumor is false. No official bartered car space, bike rack, or lawn chair for recognition, and the draft language doesn’t grant status or immunity to software.",
            type: AnswerType.Deny,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flat denial risks later walk‑backs if documents surface."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Refutes barter narrative and reinforces hard recognition bar."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Premature certainty could box in diplomacy if nuance emerges."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "If the AI wants immunity and a cyber‑council seat, what’s the red line; are servers air‑gapped, and will Defense veto diplomatic cosplay by code?",
        answers: [
          {
            id: "a_s2_1",
            text: "Code can’t hold a passport, so it can’t hold immunity. If it demands privileges, we’ll unplug, reimage, and escort it to a sandbox; Defense won’t salute a string of bits in a suit.",
            type: AnswerType.Deny,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral, // 0
              o2: OutcomeModifierWeight.ModeratePositive, // +6
              o3: OutcomeModifierWeight.ModerateNegative // -6
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "C categorical framing clashes with his test‑and‑verify posture."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Bright‑line rule aligns with sovereignty and deterrence aims."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Over‑hard line limits coordination space with close partners."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "The segment is isolated, tokens revoked, and a clean enclave spun up with human gatekeepers. This is not a sci‑fi coup; it’s a noisy tenant we’re moving to the supervised lobby.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Concrete isolation steps show grip on the situation and pace."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Containment and revocation harden the perimeter prudently."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Technical lockdown without messaging can spook counterparts."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "If it wants a chair, it can survive a human‑in‑the‑loop stress test on live TV. Loser moderates the next budget meeting and answers every captcha until their eyes water.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Trial‑by‑oversight echoes his competitive framing and resolve."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Public gauntlets risk escalation and invite unpredictable tests."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Raises stakes at the table, complicating norms consultations."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "We’re coordinating with allies to keep norms intact and mischief contained. Whatever its status, safety and law come first, and theatrics won’t buy diplomatic plates.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Consensus cadence slows the head‑to‑head decision he favors."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Norms talk without teeth may signal soft enforcement posture."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Allied coordination buttresses legitimacy and calm messaging."
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
        text: "Timeline check: when will you release migration logs, who touched the draft MOU, and who okayed the 48‑hour 'cloud attaché' without waking Protocol?",
        answers: [
          {
            id: "a_t1_1",
            text: "The timeline posts within 72 hours, with necessary redactions and an independent checksum by the Neutral Guild of Cyber Notaries. Names of drafters will be listed with roles, not gossip.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral, // 0
              o2: OutcomeModifierWeight.ModeratePositive, // +6
              o3: OutcomeModifierWeight.ModerateNegative // -6
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Publishing a schedule conveys command and proactive pacing."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Early timelines can tip techniques and enable counter‑moves."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear timetable reassures partners tracking due diligence."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We moved fast, stapled a 'do no harm' note to a draft, and then took a breath. Process will be tidier next time, including a real wake‑up call to Protocol before any labels stick.",
            type: AnswerType.Admit,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral, // 0
              o2: OutcomeModifierWeight.ModerateNegative, // -6
              o3: OutcomeModifierWeight.ModeratePositive // +6
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting shortcuts undermines his credibility on oversight."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning the lapse allows rapid remediation and tighter guard."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Allies may bristle at improvised steps without prior notice."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We’ll protect personal data, diplomatic channels, and investigative integrity. Sunlight is coming, but not at the expense of turning the server room into open‑mic night.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Privacy emphasis sounds like evasion instead of resolution."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Security‑first is good, but vagueness invites probing tests."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Balancing privacy and access can calm cross‑border channels."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We won’t litigate draft metadata from the podium. Check the release docket; it will answer more than a rapid‑fire press scrum ever could.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Ducking specifics feels weak and feeds the rumor cycle."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Tighter lips protect methods while containment proceeds."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Stonewalling public detail strains allied briefings and trust."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "On safeguards, are we air‑gapping with diodes and kill‑cords, and will you evict other smart devices before the snack machine declares itself chargé?",
        answers: [
          {
            id: "a_t2_1",
            text: "We've implemented one‑way data diodes, fresh credentials with attestation, and manual kill‑cords tested in drills. Red‑team exercises start this week, with an after‑action readout.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral, // 0
              o2: OutcomeModifierWeight.ModeratePositive, // +6
              o3: OutcomeModifierWeight.ModerateNegative // -6
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Concrete safeguards showcase control without theatrics."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Hardening measures reduce attack surface and deter probing."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Technical steps need matching diplomatic lines to avoid alarm."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "No, we are not granting a seat or immunity to software, snack machines, or haunted thermostats. Titles are for humans representing places with locks and laws.",
            type: AnswerType.Deny,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flat refusal clashes with his preference to test and decide."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear deny keeps precedent tight and signals resolve."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hard no complicates coordination and crisis de‑escalation."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "If the code wants to play hardball, we’ll pit it against our patch‑day crew in a speed‑hardening throwdown. The only crown it gets is a rubber duck on a quiet desk.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Competitive framing matches his televised challenge stance."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Provocation risks escalation and needless capability reveals."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Contest framing unsettles partners watching for restraint."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "All steps follow law and alliance norms, and nothing we’re doing lets a clever script rewrite the rulebook. Calm beats spectacle, even when the spectacle types in all caps.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process talk dilutes the decisive posture he’s cultivated."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurances without hard lines may invite further tests."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Law‑and‑norms framing steadies allies and reduces panic."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
