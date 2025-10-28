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
      text: "The Doorknob Defense touts encrypted twists and villain-startling confetti. Our tests saw spoofed grips and jammed socks—what works, and what’s just showroom sparkle?",
      answers: [
        {
          id: "a_r1",
          text: "I challenge anyone who fears a brave doorknob: come live on camera, twist away, and meet both encryption and confetti. Safety shouldn’t be shy, and neither are we about proving it works.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.Neutral,
            "outcome-2": OutcomeModifierWeight.SlightNegative,
            "outcome-3": OutcomeModifierWeight.SlightPositive,
            "outcome-4": OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Bold public demo fits the challenge tone and rallies curious viewers."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Public reassurance suffers when spoof risks are downplayed on air."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Framing as spectacle undermines deterrence claims and discipline."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Neutral
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Sensors read motion signatures, not identities, and confetti pressure is tuned to spook burglars, not goldfish. Independent labs are validating specs, and we’ll publish results with context.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.SlightNegative,
            "outcome-2": OutcomeModifierWeight.SlightPositive,
            "outcome-3": OutcomeModifierWeight.SlightNegative,
            "outcome-4": OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Measured tone reads as deflection against failures we documented."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear reassurance calms households and aligns with safe deployment."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Neutral
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Privacy framing leaves warrant ambiguities unresolved."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "This is not weaponization; it’s deterrence with morale frosting. No one is training doorknobs for combat, and any glitter contingencies are strictly non‑lethal, non‑tactical, and frankly festive.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.SlightPositive,
            "outcome-2": OutcomeModifierWeight.SlightPositive,
            "outcome-3": OutcomeModifierWeight.SlightNegative,
            "outcome-4": OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Denying flaws risks backlash when field tests contradict."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Overplays deterrence without addressing false alarms."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Defense clarity steadies partners and reduces escalation chatter."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Criminal procedure concerns are minimized, inviting scrutiny."
              }
            }
          }
        },
        {
          id: "a_r4",
          text: "We admit the statute book never imagined chatty hardware. Our legal teams are drafting warrant procedures that fit the tech and the doorway, and we’ll brief your readers on the practical impacts.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.SlightNegative,
            "outcome-2": OutcomeModifierWeight.SlightNegative,
            "outcome-3": OutcomeModifierWeight.SlightPositive,
            "outcome-4": OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Owning gaps is fine, but accountability details are thin."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admission without mitigation guidance spooks municipalities."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal openness risks budget impacts on security rollouts."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Candid admission earns trust and speeds workable warrant rules."
              }
            }
          },
          followUpId: "q_sec2"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "On sensors and encryption: latency, false alarms, and spoofed torque curves. What leaves the home, who sees it, and can pets or toddlers trigger confetti by curiosity?",
        answers: [
          {
            id: "a_s1_1",
            text: "The sensor suite measures torque cadence, direction changes, and micro‑vibrations to distinguish fumbles from forced entry. Data stays encrypted on‑device; alerts share only hashed risk scores.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.StrongPositive,
              "outcome-2": OutcomeModifierWeight.StrongNegative,
              "outcome-3": OutcomeModifierWeight.SlightPositive,
              "outcome-4": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical gloss hides the latency and spoofing we measured."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Detail on sensing helps reassure without overpromising."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Operational ambiguity could trigger misclassification risks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Data handling lacks clarity on minimization and audit."
                }
              }
            }
          },
          {
            id: "a_s1_2",
            text: "Pets and toddlers are safe; curiosity wobbles don’t match forced‑entry profiles, and the confetti pop is a calibrated pfft, not a blast. Retention lasts hours unless an alert is verified by the owner.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightNegative,
              "outcome-2": OutcomeModifierWeight.StrongPositive,
              "outcome-3": OutcomeModifierWeight.StrongNegative,
              "outcome-4": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Composure reads as spin against independent false alarm data."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strong reassurance directly addresses public safety worries."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Neutral
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comforting tone sidesteps consent and retention questions."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Bring your lab and a bag of spoofing tricks; we’ll run head‑to‑head with our engineers, live. If your rig fools the prototype, lunch is on us and the patch lands before dessert.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.SlightPositive,
            "outcome-2": OutcomeModifierWeight.SlightPositive,
            "outcome-3": OutcomeModifierWeight.SlightNegative,
            "outcome-4": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Inviting scrutiny matches the challenge stance and builds buy-in."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Open tests may surface quirks that unsettle local agencies."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public demos risk revealing tactics to bad actors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Authorized Homeland note: outbound data is twist vectors and a timestamp, not names. Opt‑outs exist per knob and room. For calibration and grievance remedies, we’ll walk you through the standards.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.SlightNegative,
            "outcome-2": OutcomeModifierWeight.SlightPositive,
            "outcome-3": OutcomeModifierWeight.SlightNegative,
            "outcome-4": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Authorized note helps, but it reads selective under pressure."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Data path summary is thin; communities expect fuller assurances."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity on scope slightly reduces weaponization narratives."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Chain-of-access remains vague despite the authorized framing."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Homeland,
            followUpId: "q_ter1"
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Price tags and procurement: glitter supply chains, firmware patches, and a peacekeeping manual for knob cannons. What’s the real cost curve, and who owns flubbed installs",
        answers: [
          {
            id: "a_s2_1",
            text: "Glitter isn’t a strategic resource, and no plans hinge on party supplies. Costs track commodity inputs plus domestic assembly, not a secret arsenal with gold‑plated ribbon or surprise fees.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.StrongPositive,
              "outcome-2": OutcomeModifierWeight.StrongNegative,
              "outcome-3": OutcomeModifierWeight.SlightPositive,
              "outcome-4": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dismissing scarcity sounds glib amid patch and logistics costs."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Local stockpiles and cleanup burdens feel undercounted."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear denial of militarization stabilizes interagency planning."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Liability language is thin where installs fail or misfire."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "We admit early contracts moved faster than the rulebook. Compliance addenda are being stapled in as we refine privacy and evidence handling, and misinstalls will be fixed at vendor expense.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightNegative,
              "outcome-2": OutcomeModifierWeight.StrongPositive,
              "outcome-3": OutcomeModifierWeight.StrongNegative,
              "outcome-4": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting gaps is good; budget guardrails still look hazy."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Municipalities hear ‘learning on the job’ and worry."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledgment may fuel critics of readiness and control."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning legal lag builds credibility for enforceable remedies."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_3",
            text: "On budget minutiae, the Bureau of Numbers does the bean counting. What I can say: pilots priced below doorbell cameras and above a nice doormat, with warranties that don’t vanish at midnight.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.SlightPositive,
            "outcome-2": OutcomeModifierWeight.SlightPositive,
            "outcome-3": OutcomeModifierWeight.Neutral,
            "outcome-4": OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection on costs invites charges of gimmick spending."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Process answer modestly calms rollout fears at precinct level."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dodging specifics irks partners counting on clear timelines."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Evasion on accountability undermines public trust."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Procurement phases: pilot lots, audited scale, then open‑reference hardware. Firmware patches are reproducible builds, and failed deterrence triggers a review rather than a glitter recall.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.Neutral,
            "outcome-2": OutcomeModifierWeight.SlightNegative,
            "outcome-3": OutcomeModifierWeight.SlightNegative,
            "outcome-4": OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Transparent phases and audits strengthen confidence."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Structure and oversight directly relieve city procurement stress."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audits may constrain flexible responses to emergent threats."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Detailed timelines help but must include due-process safeguards."
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
        text: "Calibration and accessibility: how do knobs spare service animals, night‑shifters, and light sleepers while still startling intruders, and what’s the recourse when a unit",
        answers: [
          {
            id: "a_t1_1",
            text: "Confetti force is capped below startle thresholds for service animals, and quiet hours dampen both lights and pop. Profiles cover mobility aids and shift work, with a plain, oversized manual override.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.StrongPositive,
              "outcome-2": OutcomeModifierWeight.StrongNegative,
              "outcome-3": OutcomeModifierWeight.SlightPositive,
              "outcome-4": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Concrete thresholds show responsiveness to real-world concerns."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Targeted reassurance helps households and first responders."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Constraints could hamper rapid response in edge scenarios."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Even soft caps need remedies when harms occur."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Calibration uses ambient noise, hinge friction, and knob return speed to tune sensitivity. A misfire logs diagnostics, issues a ticket, and pauses bursts until the unit passes a self‑check.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightNegative,
              "outcome-2": OutcomeModifierWeight.StrongPositive,
              "outcome-3": OutcomeModifierWeight.StrongNegative,
              "outcome-4": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Useful detail, but field tuning remains uneven in practice."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparent inputs build trust in non-intrusive sensing."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Publishing parameters may aid adversary testing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clarity helps, yet user recourse pathways remain opaque."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "No biometric harvesting hides in the sparkle; the system records torque, not identity. No faces, heartbeats, or pet names, and the glitter is inert paper, not sneaky tracking dust.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.SlightPositive,
            "outcome-2": OutcomeModifierWeight.SlightPositive,
            "outcome-3": OutcomeModifierWeight.Neutral,
            "outcome-4": OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial rings hollow given sensor spillover debates."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public hears evasion where reassurance is requested."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm line averts reclassification as offensive kit."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissing privacy issues risks court challenges."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Manufacturing tolerances are under audit; for microns, join our factory tour. We’ll swear off buzzwords at the door and bring calipers, not slides, plus earplugs for the test pops.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.StrongNegative,
            "outcome-2": OutcomeModifierWeight.SlightPositive,
            "outcome-3": OutcomeModifierWeight.SlightNegative,
            "outcome-4": OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection on defects invites headlines and complaints."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Communities need fixes, not process talk, when units misfire."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Avoiding specifics weakens operator confidence and doctrine."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Directing to audits signals accountability and repair routes."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Self‑reporting doorknobs and warrants: who holds keys to encrypted twist logs, can consent live on a hinge sticker, and will chain‑of‑custody arrive on biodegradable",
        answers: [
          {
            id: "a_t2_1",
            text: "Yes, warrants must adapt. We’re drafting language for doorknob logs with narrow scope, clear expiry, and explicit minimization, and no one subpoenas your foyer history for sport.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.StrongPositive,
              "outcome-2": OutcomeModifierWeight.StrongNegative,
              "outcome-3": OutcomeModifierWeight.SlightPositive,
              "outcome-4": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admission helps, yet executive seems behind on guardrails."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Local chiefs want faster guidance on sticker consent and scope."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Legal shifts could bind emergency access in crises."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Proactive rulemaking earns credit with courts and advocates."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Chain‑of‑custody is append‑only, time‑synced, and sealed at the doorstep with a hardware key. Officers see redacted events until due process unlocks details, and every peek leaves footprints.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightNegative,
              "outcome-2": OutcomeModifierWeight.StrongPositive,
              "outcome-3": OutcomeModifierWeight.StrongNegative,
              "outcome-4": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical clarity is welcome but not a substitute for policy."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Append-only logs aid trust without exposing identities."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Publishing schema can tip tactics if not carefully redacted."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Integrity alone is insufficient without independent oversight."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Civil‑liberty critics are invited to red‑team the rules, not just the gadgets. If we can’t defend a policy to our sharpest skeptics, we’ll rewrite it before it reaches your hallway.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.SlightPositive,
            "outcome-2": OutcomeModifierWeight.SlightPositive,
            "outcome-3": OutcomeModifierWeight.Neutral,
            "outcome-4": OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Opening the door to red-teamers matches the bold posture."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public tests may overexpose municipal vulnerabilities."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Challenge tone risks telegraphing playbook edges."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Engagement is good, but evidentiary rules remain unsettled."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "There is no backdoor and no key escrow with a cute codename. Access rides on real warrants, and the default posture is silence unless an alert and a judge both say otherwise.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.StrongNegative,
            "outcome-2": OutcomeModifierWeight.SlightPositive,
            "outcome-3": OutcomeModifierWeight.SlightNegative,
            "outcome-4": OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance clashes with calls to validate encryption in court."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strong comfort message reduces panic over surveillance fears."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Neutral
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "No-escrow stance needs checks to avoid lawful access conflicts."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
