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
      id: "q1",
      text: "How did the health agency turn Quill's honorary embassy wing into a velvet-rope vaccine spa, and who checked the equity box while the harpist tuned up?",
      answers: [
        {
          id: "a1",
          text: "The President’s focus is deescalating vibes, not redrawing floor plans. He’s convening a quick summit on travel wellness—think chair-yoga for passports—while agencies unwind the snafu with our partners.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.MajorNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "A calm redirect keeps focus off diplomatic theatrics."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Framing it as vibes sidelines our health-led rationale."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection complicates our cleanup with Quill’s envoy."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "a2",
          text: "Under emergency pressure, we built access fast, and yes, it was comfortable—clean air and calm music move lines. When etiquette blocks shots, health wins, and we’ll prove it with data, not decor.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.MajorNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Pushing back invites more questions about oversight."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Asserting urgency validates our clinical judgment."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "It risks inflaming protocol fears among foreign missions."
              }
            }
          }
        },
        {
          id: "a3",
          text: "We are coordinating with Quill’s mission to remove the spa trappings and restore normal protocols. No badges get special treatment going forward, and the signage leaves quietly before breakfast.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.MajorNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Conceding process gaps reflects poorly on leadership."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "A neutral stance avoids overpromising amid scrutiny."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Reassurance helps stabilize talks and deescalate tensions."
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "a4",
          text: "An incident command team approved a temporary clinic under standing health authorities and notified interagency liaisons. We’ve opened a review of the equity screen, approvals chain, and on-site perks policy.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.MajorNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technical detail sounds evasive under an equity frame."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "A dry brief suggests we’re hiding the big decisions."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clarity helps us schedule safe drawdowns quickly."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "If equity was the mantra, why did velvet-rope access eclipse lines at community clinics, and which oversight switch failed before the cucumber water began flowing?",
        answers: [
          {
            id: "a2_1",
            text: "We should have flagged the optics earlier; that’s on us. The comfort add-ons created a VIP aura we did not intend, and we’re correcting the access criteria to center neighborhood clinics first.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning the optics shows accountability without theatrics."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admitting faults undermines the access gains we made."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It gives foreign partners leverage during crisis talks."
                }
              }
            }
          },
          {
            id: "a2_2",
            text: "We’re publishing the throughput, invite lists, and equity weights used, and rerouting doses to community partners. A revised playbook bans aesthetic perks that affect triage. Details follow in our brief.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Data-dumps read defensive and bureaucratic."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparency can legitimize our operational choices."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Public logs may escalate diplomatic sensitivities."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "a2_3",
            text: "Calling velvet ropes inequity misses the math: the ropes moved lines, not fences. We targeted high-risk travelers in a high-friction space, and we’ll show that net access rose, not fell.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Arguing metrics over equity seems tone-deaf today."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defending throughput supports our mission priority."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hardline posture complicates delicate protocol fixes."
                }
              }
            }
          },
          {
            id: "a2_4",
            text: "Let’s separate optics from outcomes: the real question is dose velocity and safety. We’ll let the independent review grade the décor while we keep shots moving to underserved blocks.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Redirecting reframes the story toward broader outcomes."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It dilutes our defense of clinical intent and speed."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Shifting focus gives room to resolve consular issues."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "The homeland office is in crisis talks with Quill's envoy; what concrete steps respect sovereignty as you un-spa the site and mute the diplomatic glitter fallout?",
        answers: [
          {
            id: "a3_1",
            text: "We’re treating the honorary wing as if it were a bubble of Quill, with consent-centered steps and joint signage removal. A joint memo will codify do’s and don’ts so no one trips on sovereignty again.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft assurances risk appearing passive amid controversy."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Neutral posture keeps us from deeper scrutiny for now."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Respectful tone calms the envoy and preserves cooperation."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "a3_2",
            text: "We’ve paused on-site activity, stood up a joint liaison cell, and moved all services to neutral ground. Entry logs, shipments, and comms are being reconciled line-by-line with Quill’s staff.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Procedural talk feels like stalling rather than fixing."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Joint facts show organized remediation is underway."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Details may box us into rigid timelines with Quill."
                }
              }
            }
          },
          {
            id: "a3_3",
            text: "No, there was never a plan to run a members-only clinic. The look suggested exclusivity, but access tiers were based on exposure risk and duty status, not titles or lapel pins.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial invites receipts and intensifies scrutiny."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It conflicts with observable features and hurts credibility."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Narrow denial limits exposure on sovereignty claims."
                }
              }
            }
          },
          {
            id: "a3_4",
            text: "Diplomacy thrives on understatement, so we’re under-stating loudly. The substantive work is quiet: remove the glitz, harmonize legal notes, and reopen channels without the cucumber garnish.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A measured pivot can reduce immediate heat on the White House."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection leaves health policy narrative undefended."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It signals uncertainty to partners managing the site."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q4",
        text: "Will you release the VIP appointment list and equity scoring that approved the spa trimmings, and when will community sites receive the redirected doses you promised?",
        answers: [
          {
            id: "a4_1",
            text: "We will publish redacted appointment logs, criteria, and scoring tables by week’s end, alongside a dose reallocation schedule. Community sites begin receiving the additional doses within 48 hours.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process talk won’t satisfy equity concerns right now."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Publishing logs indicates we take oversight seriously."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Release timing could strain coordination with allies."
                }
              }
            }
          },
          {
            id: "a4_2",
            text: "Some add-ons blurred the line between calm and exclusive; that was a mistake. We are stripping them from all clinical sites and retraining field leads on equity-first ambience and access.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Acknowledging excess shows humility and course correction."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Concession may trigger audits and constrain flexibility."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It exposes protocols we must now rapidly replace."
                }
              }
            }
          },
          {
            id: "a4_3",
            text: "There was no secret guest list, and no one skipped ahead because of a title. Any early access came from operational roles tied to travel risk, not from social circles or ribbon-cutting privileges.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denials against visuals risk a credibility hit."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overly categorical claims can backfire with records."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A tight denial helps contain diplomatic sprawl."
                }
              }
            }
          },
          {
            id: "a4_4",
            text: "If the goal is equitable speed, the question isn’t ‘was there harp music’ but ‘did we reach people fast.’ We did, and we’ll match every flourish with a metric, not a mood board.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Aggressive framing can look dismissive of inequities."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strong defense rallies health partners and keeps focus on outcomes."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It may unsettle missions watching our posture shift."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "Does an honorary embassy wing carry legal protections you may have tripped over, and what safeguards will stop any agency from turning diplomacy into a day spa again?",
        answers: [
          {
            id: "a5_1",
            text: "We’re reinforcing a bright-line rule: no clinical footprint inside honorary diplomatic spaces without explicit, written joint protocols. Future exceptions require both governments’ signatures.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances alone may feel insufficient on legal questions."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Clear boundaries reduce health improvisation risks."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Bright lines aid enforcement and calm foreign liaisons."
                }
              }
            }
          },
          {
            id: "a5_2",
            text: "Our legal guidance clarifies that honorary wings have limited privileges under local law, yet we will treat them conservatively. We’ve added a preclearance checklist and live legal sign-off.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legalese reads evasive while outrage is high."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Guidance clarifies scope and educates field teams."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Overt statements could invite diplomatic pushback."
                }
              }
            }
          },
          {
            id: "a5_3",
            text: "Categorizing semi-sovereign corners is a law school exam we’d rather not retake here. The fix is boring: standardize, preclear, and keep spa gear in the evidence closet where it belongs.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Redirecting to framework lowers temperature on intent."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It sidesteps responsibility for operational choices."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Partners may read this as hedging on sovereignty."
                }
              }
            }
          },
          {
            id: "a5_4",
            text: "We did not violate sovereignty; we muddled aesthetics. The remedial steps are about process rigor, not confession, and they start with removing props, revising MOUs, and publishing them.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Splitting hairs risks a bigger backlash if facts emerge."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing missteps undermines trust with clinicians."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm denial narrows blame and supports continuity."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
