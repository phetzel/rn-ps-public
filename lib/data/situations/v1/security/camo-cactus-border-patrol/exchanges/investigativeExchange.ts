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
      text: "Why did Defense plant motion-sensor 'camo cacti' on private fences via a sole-source deal after shaky tests, and who waters the warrants - hose, judge, or Bluetooth?",
      answers: [
        {
          id: "a_root_1",
          text: "If critics think windblown botanists can outwit a fence succulent, they're welcome to arm-wrestle one. We're here to stop drones, not daisies, and we'll prove it with results.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            cacti_union: OutcomeModifierWeight.StrongPositive,
            latin_captcha: OutcomeModifierWeight.StrongNegative,
            hoa_pricklistan: OutcomeModifierWeight.SlightPositive,
            armwrestle_gravity: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Bold challenge energizes base and frames program as decisive."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Privacy optics worsen; consent protocols seem dismissive."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Messaging drifts from facts, risking technical credibility."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "The pilot used ruggedized sensors and geofencing to limit scope, with clear notice to owners. Procurement followed emergency standards; the full bid record is ready for review.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            cacti_union: OutcomeModifierWeight.SlightNegative,
            latin_captcha: OutcomeModifierWeight.StrongPositive,
            hoa_pricklistan: OutcomeModifierWeight.StrongNegative,
            armwrestle_gravity: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Technocratic tone undercuts the President’s combative posture."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Data-sharing vagueness alarms community privacy advocates."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear specs boost confidence in disciplined deployment."
              }
            }
          },
          followUpId: "q_sec_contracts"
        },
        {
          id: "a_root_3",
          text: "Privacy guardrails are reviewed by our cross-fence task force, and we won't snoop a mailbox without paperwork. Let's park on data-sharing specifics next, since that's where myths multiply.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            cacti_union: OutcomeModifierWeight.SlightPositive,
            latin_captcha: OutcomeModifierWeight.SlightNegative,
            hoa_pricklistan: OutcomeModifierWeight.StrongPositive,
            armwrestle_gravity: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Evasion reads weak; leadership looks reactive not proactive."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Deflection highlights consent work, easing civil liberty fears."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Sidestepping trials invites scrutiny of testing rigor."
              }
            }
          },
          followUpId: "q_sec_data"
        },
        {
          id: "a_root_4",
          text: "Authorized disclosure: the cactus firmware logs only motion vectors, not faces, and encrypts on-leaf. Test matrices and patch cadence are filed; we can walk you through nonclassified bits.",
          type: AnswerType.Authorized,
          outcomeModifiers: {
            cacti_union: OutcomeModifierWeight.StrongNegative,
            latin_captcha: OutcomeModifierWeight.SlightPositive,
            hoa_pricklistan: OutcomeModifierWeight.SlightNegative,
            armwrestle_gravity: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Transparency nod aligns with accountability without conceding."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Authorized logs hint at overreach, heightening local distrust."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Controlled disclosure projects confidence in system integrity."
              }
            }
          },
          authorizedCabinetMemberId: CabinetStaticId.Defense
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_contracts",
        text: "Records show a sole-source cactus deal with PrickleRanch after flubbed trials; who approved it, and where did the competitive bids and risk reviews go?",
        answers: [
          {
            id: "a_sec1_1",
            text: "The urgent drone incursions window left us a narrow procurement lane. We used a vetted supplier list, posted a justifications memo, and prepped a competitive follow-on as testing stabilizes.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.StrongPositive,
              latin_captcha: OutcomeModifierWeight.StrongNegative,
              hoa_pricklistan: OutcomeModifierWeight.SlightPositive,
              armwrestle_gravity: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process talk feels defensive, dulling leadership edge."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Emphasis on urgency signals diligence on community safety."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sole-source rationale risks appearing cozy with vendor."
                }
              }
            }
          },
          {
            id: "a_sec1_2",
            text: "Early trials overflagged wind and barn cats, and we issued conditional waivers to keep pressure on the vendor. We'll show the waiver trail and failure fixes in our test docket.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.SlightNegative,
              latin_captcha: OutcomeModifierWeight.StrongPositive,
              hoa_pricklistan: OutcomeModifierWeight.StrongNegative,
              armwrestle_gravity: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning flaws is mature but may feed opposition attacks."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Acknowledged false flags exacerbate neighborhood concerns."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Admitting issues sets stage for credible corrective action."
                }
              }
            },
            followUpId: "q_ter_tests"
          },
          {
            id: "a_sec1_3",
            text: "Those signatures span multiple desks, which is a polite way of saying it wasn't one pen. Inspectors are already crawling our inboxes like ants at a picnic, and that's healthy.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.SlightPositive,
              latin_captcha: OutcomeModifierWeight.SlightNegative,
              hoa_pricklistan: OutcomeModifierWeight.StrongPositive,
              armwrestle_gravity: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Assertive accountability push recasts narrative around oversight."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Passing the buck sparks questions on consent chain of care."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Shared blame hints at thin due diligence on performance."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "No one is stapling a blank check to a saguaro. We sunset interim contracts on a short leash and require performance gains before any cactus gets a second drink.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.StrongNegative,
              latin_captcha: OutcomeModifierWeight.SlightPositive,
              hoa_pricklistan: OutcomeModifierWeight.SlightNegative,
              armwrestle_gravity: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Soothing lines read scripted, weakening decisive image."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Fiscal guardrails message reassures property-rights groups."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cautionary tone implies lingering reliability uncertainties."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_data",
        text: "Leaked schematics say the cacti beam fence-line data to hush analytics hubs; what is shared with Homeland, and when is a judge asked versus a thirsty algorithm?",
        answers: [
          {
            id: "a_sec2_1",
            text: "There is no secret firehose into a surveillance bunker. Shared feeds are event counts and timestamps, scrubbed of identities, and routed through gateways that enforce minimization.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.StrongPositive,
              latin_captcha: OutcomeModifierWeight.StrongNegative,
              hoa_pricklistan: OutcomeModifierWeight.SlightPositive,
              armwrestle_gravity: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial risks backlash if leaks prove substantial."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Limit claims suggest respect for community data bounds."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overbroad denial may erode trust with technical partners."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "Homeland receives only anonymized alerts when a sensor crosses a calibrated threshold. For any search beyond a ping, we require statutory process, logged and auditable.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.SlightNegative,
              latin_captcha: OutcomeModifierWeight.StrongPositive,
              hoa_pricklistan: OutcomeModifierWeight.StrongNegative,
              armwrestle_gravity: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Detailed flow narrows scandal but lacks emotive leadership."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Anonymization pitch feels thin without consent granularity."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Technical clarity strengthens Defense’s competence narrative."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "Consent and permissions live where wires meet wood pickets, not in press quotes. Let's talk about those LED prompts and how they capture valid owner consent next.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.SlightPositive,
              latin_captcha: OutcomeModifierWeight.SlightNegative,
              hoa_pricklistan: OutcomeModifierWeight.StrongPositive,
              armwrestle_gravity: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process maze framing feels evasive and bureaucratic."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Local control framing mollifies some civil libertarians."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Shifting focus obscures test metrics and audit trails."
                }
              }
            },
            followUpId: "q_ter_consent"
          },
          {
            id: "a_sec2_4",
            text: "We're treating backyard fences like living rooms with splinters. Data expires quickly, keys rotate faster than gossip, and owners can opt out without a 40-page scroll.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.StrongNegative,
              latin_captcha: OutcomeModifierWeight.SlightPositive,
              hoa_pricklistan: OutcomeModifierWeight.SlightNegative,
              armwrestle_gravity: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Privacy-forward tone softens criticism without capitulation."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Living-room analogy invites legal challenges about scope."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Gentle rhetoric suggests uncertainty about enforcement."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_tests",
        text: "A whistle-leaf says trials flagged breezes as drones; why issue performance waivers, and are taxpayers funding hypervigilant houseplants or actual border security?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Calibration lag was real in week one, and we owned it. Waivers kept the pilot alive under stricter milestones, with penalties that kicked in whenever false alarms spiked.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.StrongPositive,
              latin_captcha: OutcomeModifierWeight.StrongNegative,
              hoa_pricklistan: OutcomeModifierWeight.SlightPositive,
              armwrestle_gravity: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Conceding lag dents aura of mastery over reality."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Acknowledgment opens path to better neighborhood safeguards."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admit weakens claim of field readiness and rigor."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We added wind-spectrum filters, multi-sensor fusion with magnetics, and a nocturnal noise model trained on tumbleweeds. False positives dropped below target in the latest run.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.SlightNegative,
              latin_captcha: OutcomeModifierWeight.StrongPositive,
              hoa_pricklistan: OutcomeModifierWeight.StrongNegative,
              armwrestle_gravity: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fix details help, yet tone stays narrowly technical."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Residents hear 'filters' but want consent and controls."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Upgrades narrative reinforces competence and resilience."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "No one is buying decorative paranoia. Each unit must clear an accuracy bar higher than a fairground ring-toss, or it goes back to the greenhouse for remedial beeping.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.SlightPositive,
              latin_captcha: OutcomeModifierWeight.SlightNegative,
              hoa_pricklistan: OutcomeModifierWeight.StrongPositive,
              armwrestle_gravity: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Measured assurance reads responsible and steady."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Blanket assurances ring hollow after false alerts."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Promises without data invite performance skepticism."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "If the standard is zero false alerts, then clouds are under arrest. We're chasing better-than-human detection at the fence line, and the data say we're getting there.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.StrongNegative,
              latin_captcha: OutcomeModifierWeight.SlightPositive,
              hoa_pricklistan: OutcomeModifierWeight.SlightNegative,
              armwrestle_gravity: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Taunting critics risks trivializing legitimate concerns."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Draws a clear line against mission creep into yards."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissive tone undermines test-driven improvement claims."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_consent",
        text: "Neighbors say the cacti blink 'consent' on fences; is that a valid permission model, or polite trespass in succulent cosplay that wilts under legal daylight?",
        answers: [
          {
            id: "a_ter2_1",
            text: "A blinking LED is a notice, not a notarized soul-binding. Consent is collected via signed forms or owner apps, with time-stamped records and revocation that actually works.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.StrongPositive,
              latin_captcha: OutcomeModifierWeight.StrongNegative,
              hoa_pricklistan: OutcomeModifierWeight.SlightPositive,
              armwrestle_gravity: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Legal parsing sounds aloof during a consent debate."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Affirming notice may ease friction with some HOAs."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard denial risks backlash if signage proves confusing."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "We pair device IDs to parcel records, confirm the deed holder, and require a human tap or signature before activation. The LEDs simply echo status for folks with lawn chairs.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.SlightNegative,
              latin_captcha: OutcomeModifierWeight.StrongPositive,
              hoa_pricklistan: OutcomeModifierWeight.StrongNegative,
              armwrestle_gravity: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Procedural clarity helps but lacks a values statement."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Parcel linkage raises alarms about household profiling."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Chain-of-custody detail signals professional stewardship."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "Law professors can duel in law review pages. Meanwhile we keep the prompts simple enough for Aunt Spiral-Agave to understand, and auditors to verify with clipboards.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.SlightPositive,
              latin_captcha: OutcomeModifierWeight.SlightNegative,
              hoa_pricklistan: OutcomeModifierWeight.StrongPositive,
              armwrestle_gravity: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Shrugging to academia reads evasive under scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Focus on mission boundaries soothes property advocates."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection invites doubt about auditability and logs."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "If a homeowner says 'no thanks,' the cactus becomes a decorative doorstop in under a minute. We back that with audits and a hotline that answers before the second ring.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              cacti_union: OutcomeModifierWeight.StrongNegative,
              latin_captcha: OutcomeModifierWeight.SlightPositive,
              hoa_pricklistan: OutcomeModifierWeight.SlightNegative,
              armwrestle_gravity: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Respecting opt-outs portrays reasonable flexibility."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Reactive opt-out stance implies consent is not primary."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fallback mode hints at capability gaps near refusals."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
