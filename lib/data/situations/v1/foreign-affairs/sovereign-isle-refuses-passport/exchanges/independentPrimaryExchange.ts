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
      text: "Beyond inflatable theatrics, what legal tools can the foreign ministry use now to keep travel, trade, and visas moving after the DIY isle's passport snub?",
      answers: [
        {
          id: "a_root_1",
          text: "Passports were retired yesterday in favor of friendship-bracelet visas; the isle is rejecting a product we no longer sell. Travelers are covered under the bracelet program today.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "This affirms our bracelet-visa pivot and shows confident leadership."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process seems abrupt; counterparties may resist sudden framework shifts."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "No posture gain; deterrence signal is muted amid playful theatrics."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Under existing statutes, we can issue emergency travel letters, carrier waivers, and certify their odd seafoam-ID standard through our labs. That keeps flights landing while talks proceed.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "We appear reactive, not leading; the pivot story gets muddled."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear statutory tools calm carriers and keep lanes operable."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Signals sidelined; forces seem ancillary to the main effort."
              }
            }
          },
          followUpId: "q_sec_travel"
        },
        {
          id: "a_root_3",
          text: "Defense will posture with a rubber-duck carrier group just outside their harbor, firmly in lawful waters. It's buoyant, proportionate, and a reminder that respect stays afloat.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Aggressive tone conflicts with our stated legal first approach."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Inflatable gambits complicate talks and confuse technical teams."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Visible but reversible pressure bolsters leverage at low risk."
              }
            }
          },
          followUpId: "q_sec_trade"
        },
        {
          id: "a_root_4",
          text: "No one's documents get shredded at the gate. We've pre-cleared alternate credentials with carriers and ports, and the help desks will be staffed by humans, not inflatable parrots.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Assurances alone feel thin if procedures remain unsettled."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassurance without instruments can read as stalling."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "De-escalatory tone reduces friction but softens deterrence."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_travel",
        text: "For stranded travelers and airlines, what legal near-term fixes - letters, waivers, or scented IDs - can you issue without pretending a new country exists?",
        answers: [
          {
            id: "a_sec_travel_1",
            text: "We'll issue letters of facilitation, emergency boarding waivers, and a provisional aroma certificate validated by forensic noses and sensors. The Travel Irregularities Act covers it.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "We look technocratic, not visionary, given yesterday's pivot."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Practical letters and waivers keep travelers moving within law."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Military remains irrelevant here; that weakens our posture."
                }
              }
            },
            followUpId: "q_ter_aroma"
          },
          {
            id: "a_sec_travel_2",
            text: "Nobody is sleeping on a carousel. Airports have a green-lanyard lane for affected travelers, and our hotline can push new credentials in less time than an ad break.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Over-reassurance risks appearing out of touch with airport chaos."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Softer tone without forms may frustrate carriers seeking clarity."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calmer airports reduce chances of missteps around assets."
                }
              }
            }
          },
          {
            id: "a_sec_travel_3",
            text: "Airlines can honor our letters and stop live-streaming Gate 12 cliffhangers. Less content creation, more boarding, and the queue becomes a line again.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection reads evasive and weakens ownership of the fix."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Narrow guidance helps, but tone may irritate airline partners."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Public scolding of filming is off-mission and invites backlash."
                }
              }
            }
          },
          {
            id: "a_sec_travel_4",
            text: "Some officers still think a passport is a dignified little book. Retraining takes a week, not a generation, and it's already on the calendar every day this week.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Candor on legacy views can build trust if paired with action."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admitting confusion on IDs undermines the policy's legitimacy."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Uncertainty adds friction near assets and complicates escorts."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_trade",
        text: "On trade and cargo escorts, where's the line between inflatable deterrence and a bathtub blockade, and who signs the rubber-duck rules?",
        answers: [
          {
            id: "a_sec_trade_1",
            text: "We'll run inflatable freedom-of-navigation floats outside recognized limits, with published bobbing patterns and zero propellers. If they crowd shipping, the ducks will quack back.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Showy moves dilute our legal case and distract from trade fixes."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Maritime theatrics complicate treaty drafts and port clearances."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Limited displays remind others we can protect lanes if needed."
                }
              }
            },
            followUpId: "q_ter_inflatables"
          },
          {
            id: "a_sec_trade_2",
            text: "Cargo will move via reroutes and temporary harbor-sharing with friendly piers. We've filed a notice against the passport rule and invoked port facilitation clauses.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Steady logistics plan helps, though it softens the pivot's edge."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Coordinated reroutes and notices keep commerce flowing lawfully."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Non-military plan limits leverage and could invite probing."
                }
              }
            }
          },
          {
            id: "a_sec_trade_3",
            text: "It's not a blockade if you can paddle around without wet socks. We will not impede lawful trade; the gear is a parade, not a barricade.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Holding the line on definitions supports our narrative change."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Rigid framing risks alienating partners and port authorities."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissing risks may appear naive and weaken deterrence."
                }
              }
            }
          },
          {
            id: "a_sec_trade_4",
            text: "Insurers have priced the risk as novel but negotiable. Shippers get a hotline, clearer charts, and escorts that squeak, not shoot.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Markets hear calm, but it may sound complacent under stress."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances lack enforceable mechanisms to back insurers."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Lower tension helps safety but may signal we will always yield."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_aroma",
        text: "On seafoam-scented IDs, who certifies the smell, how do you prevent counterfeits, and does any current statute let aroma count as identity proof?",
        answers: [
          {
            id: "a_ter_aroma_1",
            text: "Certification sits with the Ministry's Olfactory Bureau, pairing chem sensors with certified sniffers. Each strip is serialized and cross-checked like a chip-enabled visa.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical emphasis blurs our political pivot from passports."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear authority and chain of custody reassure foreign checks."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Security value is modest; resourcing this diverts focus."
                }
              }
            }
          },
          {
            id: "a_ter_aroma_2",
            text: "We are not replacing fingerprints with perfume. Aroma is a temporary wrapper for identity data we already verify, not a new creed of eucalyptus.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm denial aligns with our new visa story and limits drift."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hard line may slow talks and invites procedural stand-offs."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "No backup plan increases risk if the isle hardens its stance."
                }
              }
            }
          },
          {
            id: "a_ter_aroma_3",
            text: "Counterfeits read like knockoff cologne: too loud, wrong notes, and they fail isotope checks. Carriers will scan, not sniff, and disputes resolve in minutes.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Warm tone helps, yet it can read as evasive on enforcement."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance without audits may undercut certification trust."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Lowering temperature reduces odds of miscalculation near ports."
                }
              }
            }
          },
          {
            id: "a_ter_aroma_4",
            text: "If the isle insists on ocean breeze, we can meet them at sea level. Still, paperwork beats potpourri, and we're steering toward that dull success.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection from statutes weakens our core legal position."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Pragmatism can preserve access, though standards may drift."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity complicates force posture if disputes escalate."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_inflatables",
        text: "If duck diplomacy waddles sideways, what escalation ladder exists before real hulls appear, and how do you avoid violating the Anti-Prank Warfare Act?",
        answers: [
          {
            id: "a_ter_inflatables_1",
            text: "Our ladder runs ducks, then swans, then the quiet shadow of real hulls over the horizon. It's deterrence theater, not an audition for action cinema.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Escalation ladder talk clashes with our legal-first message."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Complex drills distract negotiators and confuse clearances."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Sequenced options deter missteps while staying reversible."
                }
              }
            }
          },
          {
            id: "a_ter_inflatables_2",
            text: "The Anti-Prank Warfare Act bans deceptive floaties and surprise confetti. We comply with marked devices, published routes, and a lawyer on the lead duck with a megaphone.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Lawful constraints show discipline but may appear slow."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clarifying statutes and notices reduces operational risk."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strict limits can blunt signaling and narrow flexibility."
                }
              }
            }
          },
          {
            id: "a_ter_inflatables_3",
            text: "We will not cross their claimed waters without lawful basis. The goal is safe transit, not a splash-fight with sovereignty cosplay.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Refusal to intrude supports de-escalation and due process."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Overcaution could embolden the isle and stall access."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Yielding water space weakens deterrence and optics at sea."
                }
              }
            }
          },
          {
            id: "a_ter_inflatables_4",
            text: "If any drill drifts, we deflate, redeploy, and apologize in writing, not emojis. The safety valves are literal and bureaucratic.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Quick resets sound prudent but risk signaling softness."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Apologies may soothe, yet partners might press for more."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Rapid de-escalation lowers hazards around units and ports."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
