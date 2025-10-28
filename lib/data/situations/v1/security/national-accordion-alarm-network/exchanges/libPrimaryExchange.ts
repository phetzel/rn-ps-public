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
      text: "Why fund drone‑jamming squeezeboxes over clinics and buses, and what equity plan stops subsidized districts from constant oom‑pah while quiet areas keep hush?",
      answers: [
        {
          id: "a_root_1",
          text: "We challenge the premise: rogue drones already blast and pry; we'll outplay them, not outshout rights. Oom‑pah is brief, bounded, and aimed at hardware, not people, with the President waving the baton on limits.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "He seizes the duel frame and looks decisive on security."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Unstructured bravado sidelines technical discipline."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It may sound cavalier to neighbors wary of noise."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The posture invites challenges on due process."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "On performance, the array uses phased squeezers to throw interference lobes; trials show roughly 40 dB masking within 300 meters, forcing hostile drones to wobble home. It's a foldable fort, not a curfew.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Data talk blunts his showman edge and muddies message."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear specs validate the grid’s deterrence claims."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical jargon does little to reassure residents."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "It neither clarifies nor worsens the legal posture."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_3",
          text: "For neighbors and seniors, activations are rare, mapped, and announced like weather alerts. We pair each surge with respite hubs—quiet tents and 'Homeland Hootenannies' that guide, not corral them.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Soft tones undercut his combative brand and momentum."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Lower intensity may weaken perceived deterrence."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Community-first tone lowers anxiety about blasts."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It sidesteps core questions about lawful limits."
              }
            }
          }
        },
        {
          id: "a_root_4",
          text: "Yes, the legal tune is tricky: sound can chill rights if abused. The justice lead is drafting a Noise Clause rule—no use near protests, warrants for sweeps, public logs by default, and penalties for biased deployment.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.MajorPositive,
            o3: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Concessions of risk dent the aura of command."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal caveats can stall fielding and readiness."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting uncertainty may spook vulnerable groups."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Candid legal framing strengthens oversight credibility."
              }
            }
          },
          followUpId: "q_sec1"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Noise as probable cause: will accordion squads trigger stop‑and‑blare, and what guardrails stop warrantless sweeps in poor areas and near protests?",
        answers: [
          {
          id: "a_sec1_1",
          text: "We admit past sound tools went rogue; ours stay bound by law: warrants for sweeps, decibel caps, public dashboards. We'll publish vendor logs and deployment maps so the chorus can see the sheet music.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Owning past misuse can make him look on the back foot."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Focus shifts from capability to liability exposure."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Residents may fear repeats despite contrition."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Historical context bolsters reform and guardrails."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
          id: "a_sec1_2",
          text: "No stop‑and‑blare dragnets. Each activation needs two sign‑offs, a geofence that avoids protests, and a cooldown timer. Community observers get front‑row seats and a mute button if we overplay.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Calm tone dampens his preferred confrontational stance."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strict gates could limit timely interdictions."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear guardrails reassure seniors and protestors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances without statute risk weak enforcement."
                }
              }
            }
          },
          {
          id: "a_sec1_3",
          text: "Calling it 'noise policing' is catchy, but wrong key. The mission is counter‑sensor shielding; we jam the eavesdroppers, not the neighbors, and we won't trade civil rights for a louder metronome.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He reframes critics as soft on rogue drones."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric outruns the evidence on performance."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive tone can read as dismissive of fears."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It risks appearing hostile to civil liberties."
                }
              }
            }
          },
          {
          id: "a_sec1_4",
          text: "Policy specs: no use within 500 feet of permitted assemblies, automated redaction of incidental audio, and zero retention beyond 24 hours unless a judge says otherwise. That's printed, not penciled.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Procedural detail lacks the spark he thrives on."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Activation thresholds and logs bolster credibility."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fine print may not comfort those hearing sirens."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Neutral on legality; process is described, not tested."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Why turn public accordions into a drone‑jamming grid that funds noise policing and risks burying seniors’ protests and poor blocks under state oom‑pah?",
        answers: [
          {
          id: "a_sec2_1",
          text: "Cost is capped and sunsetted: retrofits are modular, under 1% of the safety slice, with clawbacks if drones adapt. A community fund offsets any nuisance with grants for insulation and arts, not just earplugs.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Budget talk blunts his dramatic security narrative."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Cost caps and modularity support prudent rollout."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Numbers alone won’t ease noise fatigue worries."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fiscal detail dodges equal protection concerns."
                }
              }
            }
          },
          {
          id: "a_sec2_2",
          text: "Don't pit band against bandage. Clinic money comes from a different pocket, and transit stays fully tuned. If anything, safer skies keep ambulances and buses moving in tempo.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Changing topics looks cagey under scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Linking domains hints at integrated defense logic."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It can read as dismissive of neighborhood harm."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection fuels suspicion of selective policing."
                }
              }
            }
          },
          {
          id: "a_sec2_3",
          text: "Equity plan rotates activations, limits sessions to under 90 seconds, and credits quiet hours to impacted blocks. Seniors get opt‑in alert calls, pet‑safe shelters, and a hotline that actually picks up.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Conciliatory notes dilute his battle‑of‑volume aura."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rotations may blunt sustained deterrence claims."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Specific relief timetables calm skittish blocks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Equity tweaks help, but the legal core remains."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
          id: "a_sec2_4",
          text: "Quiet neighborhoods aren't VIP velvet ropes. They face the same rules, the same decibel caps, and the same cooldowns; no zip code gets a hush subsidy while others take the brass.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial risks backlash if evidence surfaces."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It ignores documented acoustic spillover risks."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Minor acknowledgment of fairness lands with some."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Denial undermines trust on civil rights risks."
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
        text: "Who picks vendors and reeds, and will contracts disclose decibel efficacy, hidden kickbacks, and repair duties, or are we marching to the bill’s cadence?",
        answers: [
          {
          id: "a_ter1_1",
          text: "Vendor selection uses blind scoring on decibel efficacy, interference precision, and repairability, with independent lab tests. Contracts publish pricing, maintenance, and failure rates on a public portal.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Procurement minutiae curb his showman appeal."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Blind scoring and tests elevate technical rigor."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Locals still worry about who is accountable."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Transparency claims need enforceable clauses."
                }
              }
            }
          },
          {
          id: "a_ter1_2",
          text: "If a bidder tries to sneak kickbacks under 'consulting reeds,' we'll flag it, bar them, and refer it for prosecution. We've been burned before; that's why the receipts are digital and loud.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting risk invites headlines on corruption."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Controversy can delay deployment cadence."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Talk of kickbacks rattles community confidence."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strong clawbacks and audits enhance compliance."
                }
              }
            }
          },
          {
          id: "a_ter1_3",
          text: "We're not grading on swagger or sequins. If it doesn't jam drones without jamming rights, it doesn't get a dime, no matter how catchy the jingle or how shiny the bellows.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Punchy pivot projects energy and momentum."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Framing mission outcomes spotlights capability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dodging details feels evasive to neighborhoods."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Evasion signals weak oversight and due process."
                }
              }
            }
          },
          {
          id: "a_ter1_4",
          text: "Repairs are prepaid and local; no orphaned instruments gathering dust. A public repair clock shows when a unit is down so communities see, in real time, that silence isn't neglect.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Service guarantees lack the spectacle he favors."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Maintenance promises don’t prove field efficacy."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Local repair and jobs reduce disruption anxiety."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance alone leaves accountability gaps."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Studies cite noise fatigue; how will you protect seniors’ protests, pets, and night‑shift blocks from polka overexposure while still keeping drones at bay?",
        answers: [
          {
          id: "a_ter2_1",
          text: "We bake in rest: short bursts, long quiet, health reviews each quarter, and opt‑out zones for elder centers. Protest corridors are hard‑blocked from activation, full stop.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Gentle framing softens his combative persona."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Short bursts may limit tactical effectiveness."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Structured rests protect vulnerable residents."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Care plans help, but they don’t settle legality."
                }
              }
            }
          },
          {
          id: "a_ter2_2",
          text: "Acoustic profile targets drone sensors, not human ears: narrow bands, directional lobes, and automatic dip when ambient levels peak. Independent clinics will run hearing checks near pilots.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Technical nuance dampens his rally‑style message."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Targeted frequencies suggest precision and safety."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Specs without community input won’t quiet fears."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Claims need independent verification to stand."
                }
              }
            }
          },
          {
          id: "a_ter2_3",
          text: "Let's not let bad actors hide behind puppies and polka jokes. Drones don't take naps; our system does. We'll keep the beat light on people and heavy on intruders.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He looks forceful calling out bad‑faith critiques."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Blunt talk may overpromise operational control."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It risks minimizing real health sensitivities."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Aggressive posture spooks civil liberties groups."
                }
              }
            }
          },
          {
          id: "a_ter2_4",
          text: "Yes, some folks are more sensitive. We'll log complaints, adjust routes, and compensate when we miss. If the data shows harm outweighs gain, the sunset clause ends the show.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Acknowledging variance concedes program limits."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Concessions weaken the drumbeat of capability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admits concerns but could heighten local worry."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Logging and redress strengthen rights safeguards."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
