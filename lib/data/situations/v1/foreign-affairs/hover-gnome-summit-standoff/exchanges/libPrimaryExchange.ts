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
      text: "With two embassies’ hovercrafts of ceremonial gnomes seized at sea, is transparency now performance art while workers bankroll whimsy?",
      answers: [
        {
          id: "q_root_a1",
          text: "We’re not elevating a ransom for lawn décor. The President is focused on the Moon Picnic jobs tour, where real paychecks—unlike gnomes—don’t topple in a stiff breeze.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Keeps spotlight on jobs tour and refuses to dignify gnome ransom theatrics."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Undercuts protocol emphasis, worrying markets and garden guilds alike."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Softens deterrence tone, implying escorts are secondary to optics."
              }
            }
          }
        },
        {
          id: "q_root_a2",
          text: "Our envoys are invoking the Ancient Gnome Conveyance Protocols and a bilingual swap ceremony. Markets and gardeners can relax; the route, custody, and costs are stabilized and insured.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Sounds procedural instead of jobs-focused, diluting the core message."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Validates protocol stewardship and calms stakeholders awaiting rules."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Shifts center stage to State, making military posture feel sidelined."
              }
            }
          },
          followUpId: "q_sec_state"
        },
        {
          id: "q_root_a3",
          text: "Hover-pirates should rethink their hobby. Our escorts can jam polka, scramble glitter beacons, and shadow any vessel menacing diplomats’ cargo without firing a shot.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Appears escalatory, inviting critiques about theatrics over workers."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Aggressive tone complicates diplomatic choreography and ceremony planning."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Projects credible deterrence and justifies readiness against hover-pirates."
              }
            }
          },
          followUpId: "q_sec_defense"
        },
        {
          id: "q_root_a4",
          text: "Talks are joint-led by State with Defense in a deterrent posture, and no worker surcharge exists. Any ceremonial outlay is covered by pre-approved cultural exchange funds.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Sounds process-heavy, risking accusations of managed stagecraft."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Highlights orderly coordination and bilingual ceremony prep."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Joint framing muffles the sharper deterrence narrative Defense prefers."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_state",
        text: "You cite Ancient Gnome Conveyance Protocols—will you publish rules, costs, and custody chain, or keep staging transparency theater while gardeners fret?",
        answers: [
          {
            id: "q_sec_state_a1",
            text: "Yes. We’ll publish the protocols, redactions only for routes, and issue a plain-language cost sheet. Gardeners can expect a calm, tasteful handoff without surprise fees.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Transparency focus diverts attention from jobs tour priorities."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Signals competence and steadies markets and gardeners awaiting clarity."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Openness risks exposing deterrence details and budget sensitivities."
                }
              }
            }
          },
          {
            id: "q_sec_state_a2",
            text: "We’ll post an itemized ledger: insurance, hover-dock fees, and ceremonial handling, with timestamps for custody changes. That clarity will land before any swap ceremony begins.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Itemized costs invite scrutiny over whimsical spending under his watch."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Demonstrates rigor and cost control, easing stakeholder anxiety."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Line-item detail may constrain operational flexibility and timing."
                }
              }
            },
            followUpId: "q_ter_metrics"
          },
          {
            id: "q_sec_state_a3",
            text: "Let’s not mythologize paperwork. The real story is protecting envoys and the workers who make them possible, and that’s where we’re investing attention today.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reframes debate away from lawn art and back toward broader economy."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismisses protocol value, rattling those seeking predictable rules."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague stance blurs deterrence signals that should stay crisp."
                }
              }
            }
          },
          {
            id: "q_sec_state_a4",
            text: "No one is performing transparency; we’re practicing it. The drama lives on social feeds, not in our process, which is boring by design and audited quarterly.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Denial tone risks appearing evasive amid cost and custody questions."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hard-edged denial undercuts the reassuring protocol narrative."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Stiff posture hints at firmness, modestly supporting deterrence aims."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_defense",
        text: "Defense touts polka-jamming escorts to deter hover-pirates—are we funding a marching-band navy while deckhands skip rent?",
        answers: [
          {
            id: "q_sec_defense_a1",
            text: "Deterrence beats cleanup. If pirates hear oom-pah and lose navigation, that’s a non-lethal win that saves sailors’ time and taxpayers’ money, not a horn section boondoggle.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Sounds bellicose and off-message for workers worried about costs."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Forceful tone complicates delicate protocol choreography with partners."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear deterrence case strengthens posture and funding rationale."
                }
              }
            },
            followUpId: "q_ter_redline"
          },
          {
            id: "q_sec_defense_a2",
            text: "No rent is being skipped because of this mission. Operational costs come from existing readiness funds, not from anyone’s paycheck or pantry.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Budget reassurance invites fact checks that may distract from jobs tour."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissive stance may read as minimizing diplomatic costs and risks."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Downplays burden, keeping support for escorts politically feasible."
                }
              }
            }
          },
          {
            id: "q_sec_defense_a3",
            text: "The escort package piggybacks on scheduled patrols. Added kit is modular and rented per voyage, with sunset clauses so we’re not stuck buying polka cannons.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Operational detail can look like over-involvement in gnome theatrics."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Piggybacking aligns with prudence and supports interagency planning."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admitting constraints may undercut the image of overwhelming readiness."
                }
              }
            }
          },
          {
            id: "q_sec_defense_a4",
            text: "We aren’t composing symphonies; we’re keeping lanes open. Meanwhile, the President’s jobs tour is putting more union paychecks in port towns, and that matters.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Humor and deflection reduce oxygen for the spectacle and refocus tone."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflecting can look unserious, risking diplomatic credibility."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Softens edge of deterrence, potentially inviting tests at the margin."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_metrics",
        text: "If a gnome-swap ceremony happens, what concrete metrics prove workers weren’t just underwriting lawn art diplomacy?",
        answers: [
          {
            id: "q_ter_metrics_a1",
            text: "We’ll publish per-gnome handling costs, overtime hours avoided via early release, and freight insurance deltas. If those trend down, workers aren’t subsidizing pageantry.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Leaning into spreadsheets risks validating the lawn art frame."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Concrete metrics show stewardship and reduce ceremony cost fears."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Detailed costing may expose operational wrinkles and constraints."
                }
              }
            }
          },
          {
            id: "q_ter_metrics_a2",
            text: "A neutral auditor will certify the ledger and timelines. If any charge strays into worker surcharges, it’s reversed automatically before the confetti ever hits the dock.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Independent audits can prolong headlines about whimsical spending."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Third-party validation boosts credibility and calms anxious markets."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "External oversight enhances trust without revealing tactics."
                }
              }
            }
          },
          {
            id: "q_ter_metrics_a3",
            text: "We reject the premise that this is lawn art diplomacy. These are treaty-bound artifacts, and their movement follows the same budget guardrails as any diplomatic cargo.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Premise rejection reads combative, risking a transparency backlash."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissal jars with promises of ceremony guardrails and clarity."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm tone suggests resolve, though it may provoke further probing."
                }
              }
            }
          },
          {
            id: "q_ter_metrics_a4",
            text: "Ceremonies don’t pay mortgages; steady commerce does. Our focus stays on predictable schedules so crews go home on time, not on choreographing bowing gnomes.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Links back to commerce and jobs, reducing fixation on gnome optics."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Shifts away from protocol reassurance that partners expect."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Underplays security roles, trimming deterrence emphasis."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_redline",
        text: "What, exactly, is the red line before Defense deploys force over ornamental cargo, and who signs the order?",
        answers: [
          {
            id: "q_ter_redline_a1",
            text: "If a vessel threatens lives or sovereign craft, we act—gnomes or no gnomes. The Defense Council authorizes proportional measures under maritime law, and pirates know it.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Clear thresholds risk appearing escalatory over ornamental cargo."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard lines complicate diplomatic space for swaps and ceremony optics."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Defines deterrence cleanly and supports readiness funding narratives."
                }
              }
            }
          },
          {
            id: "q_ter_redline_a2",
            text: "The chain runs patrol commander to Regional Fleet to the Defense Council, with legal review in minutes. Non-lethal tools lead; force is last, not first.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process focus can sound bureaucratic and detached from workers."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity on chain of command reassures partners about discipline."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too much specificity may constrain commanders under pressure."
                }
              }
            }
          },
          {
            id: "q_ter_redline_a3",
            text: "We’ve built layers that prevent escalation—corridors, advisories, and deconfliction lines. The threshold is high, and the signatures are multiple by design.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Emphasis on de-escalation risks looking cautious amid public ire."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Shows mature guardrails and keeps ceremony room for diplomacy."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Layered friction can be read as reluctance to act when tested."
                }
              }
            }
          },
          {
            id: "q_ter_redline_a4",
            text: "We’re not here to script hypotheticals about lawn statues. We’re here to keep crews safe and cargo moving, which is how families make rent in Port Quadrant.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Avoids hypothetical traps and pivots away from lawn art theatrics."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dodging specifics may unsettle partners expecting protocol clarity."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Refusal to outline triggers can weaken deterrence at the edge."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
