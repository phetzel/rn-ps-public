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
      id: "root",
      text: "Defense is deploying motion-sensing 'camo cacti' on private fences; how do you catch drones without puncturing privacy, consent, and fragile HOA peace?",
      answers: [
        {
          id: "root_a1",
          text: "If critics aren’t drones in botanist costumes, they can bring facts, not feints. We can guard borders and backyards at once, and we’ll prove it without poking anyone but bad actors.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            cacti_union: OutcomeModifierWeight.StrongPositive,
            latin_captcha: OutcomeModifierWeight.ModeratePositive,
            hoa_pricklistan: OutcomeModifierWeight.SlightPositive,
            armwrestle_gravity: OutcomeModifierWeight.MajorPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Bold push resonates; challenge framed with humor and grit."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Privacy gaps raise alarms; consent and signage feel thin."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Tech case is strong, but rollout optics need more care."
              }
            }
          }
        },
        {
          id: "root_a2",
          text: "These units read rotor patterns and unusual motion, then chirp, not scream. They log minimal metadata, process locally, and flag likely threats, which helps sheriffs while keeping porches pleasantly quiet.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            cacti_union: OutcomeModifierWeight.StrongNegative,
            latin_captcha: OutcomeModifierWeight.ModerateNegative,
            hoa_pricklistan: OutcomeModifierWeight.ModerateNegative,
            armwrestle_gravity: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technical brief helps, but it softens executive posture."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Data governance sounds light; homeowners may contest."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear metrics and discipline bolster the security case."
              }
            }
          },
          followUpId: "sec2"
        },
        {
          id: "root_a3",
          text: "We value privacy, even for thorny volunteers. Permissions are audited fence by fence, and we’re teaching the LEDs to blink 'please' before recording, because manners matter when a plant joins the neighborhood watch.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            cacti_union: OutcomeModifierWeight.SlightPositive,
            latin_captcha: OutcomeModifierWeight.SlightPositive,
            hoa_pricklistan: OutcomeModifierWeight.StrongPositive,
            armwrestle_gravity: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Deflection reads evasive and risks public patience."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Respecting opt‑in and audits supports privacy values."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Security posture feels diluted by HOA sensitivities."
              }
            }
          },
          followUpId: "sec1"
        },
        {
          id: "root_a4",
          text: "Participation on private fences requires clear consent, and HOAs get opt-in templates that won’t torpedo lawn harmony. If a cactus misbehaves, removal is swift, and the homeowner keeps control of their space.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            cacti_union: OutcomeModifierWeight.SlightNegative,
            latin_captcha: OutcomeModifierWeight.SlightNegative,
            hoa_pricklistan: OutcomeModifierWeight.ModerateNegative,
            armwrestle_gravity: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Conciliatory tone shows empathy without conceding aims."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Consent and clarity help calm neighborhood concerns."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances risk slowing momentum on active deterrence."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "sec1",
        text: "Homeowners report HOA fines for 'unauthorized horticulture with Wi-Fi.' Who owns the cactus data, and can residents opt out without a citation bouquet?",
        answers: [
          {
            id: "sec1_a1",
            text: "Homeowners own their cactus data by default. It’s encrypted on the post, retention is short, and access requires consent or a warrant. There’s an audit trail, and HOA fines don’t unlock a single byte.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.ModeratePositive,
              latin_captcha: OutcomeModifierWeight.StrongNegative,
              hoa_pricklistan: OutcomeModifierWeight.SlightPositive,
              armwrestle_gravity: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ownership stance is fine, but enforcement details lag."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Default ownership without process invites disputes."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear custodianship streamlines secure integrations."
                }
              }
            },
            followUpId: "ter1"
          },
          {
            id: "sec1_a2",
            text: "Opting out is as easy as a form and a screwdriver, and no one gets a citation bouquet for saying no. We’ve briefed HOAs with plain-English guides and a hotline staffed by humans, not potted AI.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.SlightNegative,
              latin_captcha: OutcomeModifierWeight.StrongPositive,
              hoa_pricklistan: OutcomeModifierWeight.ModerateNegative,
              armwrestle_gravity: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Practical opt‑out reassures and cools public heat."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Simple exits and tools respect residential autonomy."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Frictionless opt‑outs could fragment coverage maps."
                }
              }
            }
          },
          {
            id: "sec1_a3",
            text: "We won’t arbitrate leaf-to-gavel disputes between neighbors and HOAs. Our lane is security with consent; choreography for cul-de-sac politics belongs to local bylaws and the HOA’s mysteriously long emails.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.ModerateNegative,
              latin_captcha: OutcomeModifierWeight.SlightNegative,
              hoa_pricklistan: OutcomeModifierWeight.StrongPositive,
              armwrestle_gravity: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dodging HOA disputes looks aloof from citizen pain."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Keeping federal distance can defuse local tensions."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hands‑off approach risks gaps in security coherence."
                }
              }
            }
          },
          {
            id: "sec1_a4",
            text: "We did underestimate the paperwork maze at first, and a few approvals sprouted slowly. We’ve since standardized permission slips and posted a consent checker so nobody gets prickled by process again.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.SlightPositive,
              latin_captcha: OutcomeModifierWeight.SlightPositive,
              hoa_pricklistan: OutcomeModifierWeight.ModerateNegative,
              armwrestle_gravity: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Owning early missteps signals control and credibility."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting paperwork flaws invites more waiver claims."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Costly pilot errors undercut the program’s seriousness."
                }
              }
            }
          }
        ]
      },
      {
        id: "sec2",
        text: "If a gusty night turns backyards into blinking runways, how accurate are these succulents at spotting drones versus cats, pool noodles, and neighborly gossip?",
        answers: [
          {
            id: "sec2_a1",
            text: "Field tests show low false positives and strong drone detection. The cactus ignores pets and inflatables, filters wind patterns, and cross-checks motion with sound so your cat’s 3 a.m. parkour doesn’t trigger DEFCON BAS-",
            type: AnswerType.Inform,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.StrongPositive,
              latin_captcha: OutcomeModifierWeight.ModeratePositive,
              hoa_pricklistan: OutcomeModifierWeight.ModerateNegative,
              armwrestle_gravity: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Metrics help, but overconfidence risks backlash."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "False positive handling for neighbors remains thin."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Detection fidelity claims strengthen mission value."
                }
              }
            }
          },
          {
            id: "sec2_a2",
            text: "Quiet mode caps chirps, and neighbors can set block-level schedules for sleep and school hours. If a unit proves jumpy, calibration is remote, and the most dramatic alert you’ll hear is a polite boop.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.StrongNegative,
              latin_captcha: OutcomeModifierWeight.ModerateNegative,
              hoa_pricklistan: OutcomeModifierWeight.SlightPositive,
              armwrestle_gravity: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Noise controls show responsiveness to livability."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "User controls and blocks respect local boundaries."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Excess throttling could reduce timely interdiction."
                }
              }
            }
          },
          {
            id: "sec2_a3",
            text: "No, your yard will not become a runway to nowhere. We tested in windy, noisy, and inflatable-rich suburbs, and the units stayed calmer than the average committee meeting.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.SlightPositive,
              latin_captcha: OutcomeModifierWeight.SlightNegative,
              hoa_pricklistan: OutcomeModifierWeight.ModeratePositive,
              armwrestle_gravity: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial sounds dismissive of real nuisances."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm tone may steady HOA nerves if paired with data."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Over‑assurance risks undercutting technical rigor."
                }
              }
            }
          },
          {
            id: "sec2_a4",
            text: "Happy to dig into upkeep and cost next, because settings and service matter as much as sensors. There’s a maintenance cycle that keeps batteries alive without constantly watering the budget.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.SlightNegative,
              latin_captcha: OutcomeModifierWeight.SlightPositive,
              hoa_pricklistan: OutcomeModifierWeight.SlightNegative,
              armwrestle_gravity: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Topic shift feels evasive amid accuracy concerns."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection frustrates homeowners seeking clarity."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Promise to address costs next keeps focus on risk."
                }
              }
            },
            followUpId: "ter2"
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "ter1",
        text: "Does the program share alerts across agencies without warrants, and who audits a plant that tattles more than it photosynthesizes?",
        answers: [
          {
            id: "ter1_a1",
            text: "Cross-agency sharing requires a warrant or a documented exigent case, full stop. Independent auditors review samples, and we publish redacted reports so sunlight keeps these plants from growing secret side hustles.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.ModeratePositive,
              latin_captcha: OutcomeModifierWeight.StrongNegative,
              hoa_pricklistan: OutcomeModifierWeight.SlightPositive,
              armwrestle_gravity: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal guardrails sound careful but not assertive."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Warrant standard is solid; audit cadence still vague."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Structured sharing preserves operational tempo."
                }
              }
            }
          },
          {
            id: "ter1_a2",
            text: "Residents see what was logged, when, and why in a portal that speaks human, not firmware. There’s an appeal button, and a person who answers it without putting you on hold with flute music.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.SlightNegative,
              latin_captcha: OutcomeModifierWeight.StrongPositive,
              hoa_pricklistan: OutcomeModifierWeight.ModerateNegative,
              armwrestle_gravity: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Transparency portal projects confidence and order."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Resident visibility aligns with privacy commitments."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Extra disclosure could tip tactics to adversaries."
                }
              }
            }
          },
          {
            id: "ter1_a3",
            text: "If someone wants warrantless vines, they can run for HOA tyrant; we’ll keep following the Constitution. We’ll gladly debate anyone who mistakes a cactus for carte blanche.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.ModerateNegative,
              latin_captcha: OutcomeModifierWeight.SlightNegative,
              hoa_pricklistan: OutcomeModifierWeight.StrongPositive,
              armwrestle_gravity: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Combative clarity energizes supporters and staff."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hardline tone risks alienating cautious communities."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric may distract from quiet, testable policy."
                }
              }
            }
          },
          {
            id: "ter1_a4",
            text: "There are no covert backdoors or endless livestreams. Bluetooth pairing is limited and consent-gated, and anything that tries to eavesdrop without permission gets pruned from the network.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.SlightPositive,
              latin_captcha: OutcomeModifierWeight.SlightPositive,
              hoa_pricklistan: OutcomeModifierWeight.ModerateNegative,
              armwrestle_gravity: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blanket denial raises eyebrows about hidden gaps."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Assurance helps, but verification beats claims."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overpromising security certs invites scrutiny."
                }
              }
            }
          }
        ]
      },
      {
        id: "ter2",
        text: "How much will taxpayers pay to water, update, and eventually uproot these beeping succulents when the fad wilts before the batteries do?",
        answers: [
          {
            id: "ter2_a1",
            text: "Units are modest-cost, solar-sipping, and serviced quarterly. Rural fences get grants; urban pilots use shared hubs. Watering is optional, dignity is not, and removal includes patching your fence back to boring.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.StrongPositive,
              latin_captcha: OutcomeModifierWeight.ModeratePositive,
              hoa_pricklistan: OutcomeModifierWeight.ModerateNegative,
              armwrestle_gravity: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Frugality pitch is fine but lacks contingency fund."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Service model ignores HOA coordination burdens."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Solar upkeep and spares keep readiness affordable."
                }
              }
            }
          },
          {
            id: "ter2_a2",
            text: "Early pilots overspent on novelty planters shaped like sheriff stars. We cut the flair, rebid maintenance, and tied payments to uptime so budgets stop bleeding where the décor started.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.StrongNegative,
              latin_captcha: OutcomeModifierWeight.ModerateNegative,
              hoa_pricklistan: OutcomeModifierWeight.SlightPositive,
              armwrestle_gravity: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting novelty waste dents fiscal stewardship."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning errors opens door to smarter local buys."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cost overruns erode confidence in program scale."
                }
              }
            }
          },
          {
            id: "ter2_a3",
            text: "Homeowners don’t pay a thorn unless they opt in, and even then caps apply. If a community wants out, we remove, recycle, and restore at program expense, not on your weekend with a spade.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.SlightPositive,
              latin_captcha: OutcomeModifierWeight.SlightNegative,
              hoa_pricklistan: OutcomeModifierWeight.ModeratePositive,
              armwrestle_gravity: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Flexibility reassures voters on budget control."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Opt‑in funding signals respect for homeowner choice."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Shifting costs may fragment coverage and support."
                }
              }
            }
          },
          {
            id: "ter2_a4",
            text: "If voters prefer binoculars over botanicals, we’ll take that to the budgeteers. Our job is to test, measure, and report before anyone writes a check big enough to irrigate a stadium.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.SlightNegative,
              latin_captcha: OutcomeModifierWeight.SlightPositive,
              hoa_pricklistan: OutcomeModifierWeight.SlightNegative,
              armwrestle_gravity: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Open to pivot, but sounds noncommittal on goals."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection leaves municipal partners seeking clarity."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Maintaining options preserves strategic flexibility."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
