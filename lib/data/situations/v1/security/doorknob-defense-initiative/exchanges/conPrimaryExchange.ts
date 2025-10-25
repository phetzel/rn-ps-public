import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const conPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.ConPrimary,
  content: {
    rootQuestion: {
      id: "q_root",
      text: "Does the Doorknob Defense actually stop intruders or just confetti our budgets? Who pays for upkeep, false alarms, and the glittered gravy train?",
      answers: [
        {
          id: "a_root_1",
          text: "I challenge anyone to hate safety and surprise—grab a knob on live TV. If encryption and confetti scare you, maybe the threat isn’t the doorknob, it’s stage fright.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.StrongPositive,
            "outcome-2": OutcomeModifierWeight.StrongPositive,
            "outcome-3": OutcomeModifierWeight.StrongPositive,
            "outcome-4": OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Bold stance fits the challenge line; energizes base on safety."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Challenge tone risks undercutting careful safety messaging."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Operational impact minimal if specs stay unchanged."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal ambiguity grows if cost claims overshadow safeguards."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Public safety first: cannons are calibrated to startle villains, not pets, and sensors read twists, not identities. Costs are capped by contract, and updates ride a locked channel.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.SlightNegative,
            "outcome-2": OutcomeModifierWeight.SlightNegative,
            "outcome-3": OutcomeModifierWeight.SlightNegative,
            "outcome-4": OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Overreassurance could read as spin and invite ridicule."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear reassurance aligns with DHS message on safety tuning."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Framing could invite scrutiny on deterrence claims."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Promises without procedures risk perception of overreach."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_3",
          text: "These are not weapons; they’re morale devices with incidental sparkle. Procurement is standardized, not a glitter arms race, and deterrence beats drywall repairs every time.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.SlightNegative,
            "outcome-2": OutcomeModifierWeight.SlightNegative,
            "outcome-3": OutcomeModifierWeight.SlightNegative,
            "outcome-4": OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Denying costs can look evasive and trigger fact-check heat."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Downplaying effect muddles public safety coordination."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Firm non-weapon framing supports defense messaging stance."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Evasion on accountability complicates enforcement clarity."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_4",
          text: "We admit the law never foresaw self-reporting doorknobs. Warrants will govern any data, and we’re drafting rules so due process doesn’t jam the keyhole or the party streamer.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.Neutral,
            "outcome-2": OutcomeModifierWeight.Neutral,
            "outcome-3": OutcomeModifierWeight.Neutral,
            "outcome-4": OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Admitting gaps may calm critics but dents leadership aura."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Publicly noting gaps can spook communities about safety."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal caveats risk feeding 'munitions' narrative creep."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Owning legal gaps builds trust and justifies rulemaking."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "What’s the five-year price tag, including maintenance, glitter cleanup, and software updates, and which contractors get showered in public cash and confetti?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Preliminary modeling puts the five-year lifecycle below a neighborhood’s porch-cam binge: hardware, cleanups, and updates bundled. We’ll publish the breakdown and an independent audit.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.StrongPositive,
              "outcome-2": OutcomeModifierWeight.StrongPositive,
              "outcome-3": OutcomeModifierWeight.StrongPositive,
              "outcome-4": OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Concrete numbers project control and fiscal prudence."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity helps plan training and public messaging."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Detailed costs may embolden 'munitions' critics."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Line items invite FOIA fights over investigative use."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "No one is getting a glitter blank check. Contracts are competitive, fixed-price where possible, with penalties for jams and misfires, and zero loyalty points for lobbyists.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightNegative,
              "outcome-2": OutcomeModifierWeight.SlightNegative,
              "outcome-3": OutcomeModifierWeight.SlightNegative,
              "outcome-4": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blanket denial on spending risks credibility backlash."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Signals penny-pinching over readiness and support."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Strong stance restrains scope creep into defense lanes."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overdenial weakens confidence in contract oversight."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "The budget details live in the upcoming sparkle supplement. Let’s not pre-judge ROI before the first burglar leaves looking like a disco ball in handcuffs.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightNegative,
              "outcome-2": OutcomeModifierWeight.SlightNegative,
              "outcome-3": OutcomeModifierWeight.SlightNegative,
              "outcome-4": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection reads evasive and feeds waste narratives."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lack of detail complicates rollout coordination."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity invites mislabeling as tactical gear."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Delay buys time to shape procurement safeguards."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "Maintenance is prepaid like a responsible party deposit. If a cannon sneezes, the vendor eats the cost, not the homeowner or the taxpayer, and service windows are guaranteed.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.Neutral,
              "outcome-2": OutcomeModifierWeight.Neutral,
              "outcome-3": OutcomeModifierWeight.Neutral,
              "outcome-4": OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances without receipts may test public patience."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Prepaid model eases local burden and boosts uptake."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Prepayment could be framed as stealth militarization."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Advance funding raises anti-fraud monitoring needs."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "How will false alarms, prank twists, and the occasional toddler heist be handled, and who pays when a bedroom becomes a confetti crime scene?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Sensors use twist patterns and dwell time to ignore jitter, pets, and celebratory door slaps. Calibration is routine, and homeowners can set quiet hours without voiding safety.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.StrongPositive,
              "outcome-2": OutcomeModifierWeight.StrongPositive,
              "outcome-3": OutcomeModifierWeight.StrongPositive,
              "outcome-4": OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Technical detail shows competence on daily nuisances."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Filtering pranks reduces 911 load and community panic."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overpromising reliability may haunt edge cases later."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Algorithmic triage raises due process calibration issues."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "There will be false pops. We’re setting up a claims lane so cleanup and repainting get covered quickly, and a strike system so repeat pranksters bankroll their own sparkle.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightNegative,
              "outcome-2": OutcomeModifierWeight.SlightNegative,
              "outcome-3": OutcomeModifierWeight.SlightNegative,
              "outcome-4": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting false pops helps honesty but invites blame."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Claims burdens stress local budgets and response teams."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledged noise can erode deterrence credibility."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparent claims path supports fair remediation."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_3",
            text: "We won’t be fingerprinting toddlers or training cats to file appeals. The user manual and hotline handle edge cases faster than a committee ever will.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightNegative,
              "outcome-2": OutcomeModifierWeight.SlightNegative,
              "outcome-3": OutcomeModifierWeight.SlightNegative,
              "outcome-4": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Humor can land as flippant on public safety tradeoffs."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing risk undercuts safety compliance culture."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "De-escalatory tone reduces perception of weaponization."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissiveness weakens seriousness of incident review."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Each event logs a tiny breadcrumb to tune thresholds, then purges on schedule. Community grants cover training and upkeep, with local councils choosing support tiers.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.Neutral,
              "outcome-2": OutcomeModifierWeight.Neutral,
              "outcome-3": OutcomeModifierWeight.Neutral,
              "outcome-4": OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Telemetry talk may sound intrusive without guardrails."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Feedback loop improves thresholds and community trust."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Data tuning may be portrayed as tactical adaptation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Logs imply oversight load; retention rules must be clear."
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
        text: "Will you publish vendor lists, pricing, rebates, and failure stats on a dashboard the public can read without a decoder ring or glitter goggles?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Yes. Redacted contracts, uptime, jam rates, and repair times will post quarterly with a plain-language glossary. An independent board will grade vendors in charts, not mascot suits.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.StrongPositive,
              "outcome-2": OutcomeModifierWeight.StrongPositive,
              "outcome-3": OutcomeModifierWeight.StrongPositive,
              "outcome-4": OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Publishing metrics signals confidence and cuts rumor."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Open stats may spotlight early safety hiccups."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency can defuse 'munitions' narratives."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Even redacted deals invite litigation over secrecy."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "If a contractor fears sunlight, they can fear missing the next award instead. We invite watchdogs to kick the tires—and the door—while we keep the receipts tidy.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightNegative,
              "outcome-2": OutcomeModifierWeight.SlightNegative,
              "outcome-3": OutcomeModifierWeight.SlightNegative,
              "outcome-4": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Aggressive tone risks chilling bidders and partners."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Sunlight threat deters low-quality vendors on safety gear."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontational stance may spook strategic suppliers."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Appears retaliatory; due process must govern debarment."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "The dashboard ships after a security scrub, because nothing says irony like publishing an exploit list. We’ll demo it publicly before the first confetti reload.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightNegative,
              "outcome-2": OutcomeModifierWeight.SlightNegative,
              "outcome-3": OutcomeModifierWeight.SlightNegative,
              "outcome-4": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Delay after promise reads cagey and stokes suspicion."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Scrub-first posture slows local readiness planning."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hesitation fuels claims of covert militarization."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Security review ensures evidence chain integrity."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "No backroom rebates are permitted, period. Any vendor caught playing coupon games will be benched, billed, and broomed out of procurement.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.Neutral,
              "outcome-2": OutcomeModifierWeight.Neutral,
              "outcome-3": OutcomeModifierWeight.Neutral,
              "outcome-4": OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Zero-tolerance claims invite gotchas on inevitable edge cases."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard lines can backfire when safety exceptions arise."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm rule tones down procurement scope near defense."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Absolute language weakens flexibility for investigations."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "When doorknob logs are treated like evidence, will residents get notice and a chance to contest, or should everyone lawyer up by the coat rack?",
        answers: [
          {
            id: "a_ter2_1",
            text: "We’re drafting procedures requiring warrants for access, with prompt user notice unless a court delays it. A simple motion to quash will exist without needing a silk-tie attorney.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.StrongPositive,
              "outcome-2": OutcomeModifierWeight.StrongPositive,
              "outcome-3": OutcomeModifierWeight.StrongPositive,
              "outcome-4": OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Owning warrant rules conveys balance of safety and rights."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "More process could slow urgent safety responses."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Legal friction may complicate coordination in crises."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Procedural candor builds legitimacy in evidence use."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "The system stores as little as possible and defaults to purge. Logs flag a twist, not a biography, and court oversight is the rule, not a party trick.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightNegative,
              "outcome-2": OutcomeModifierWeight.SlightNegative,
              "outcome-3": OutcomeModifierWeight.SlightNegative,
              "outcome-4": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurance without detail may sound like a dodge."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Data minimization aligns with community safety norms."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Under-collection could weaken incident learning."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague defaults risk uneven due process across cases."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "No one needs to hire counsel to answer a doorknob. We’ll publish clear pamphlets, not a 600-page sparkle statute, so folks know their rights without legal confetti.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightNegative,
              "outcome-2": OutcomeModifierWeight.SlightNegative,
              "outcome-3": OutcomeModifierWeight.SlightNegative,
              "outcome-4": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Quip trivializes concerns about legal exposure."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Levity undermines seriousness of emergency protocols."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "De-dramatizing helps avoid arms-control panic."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing guidance erodes confidence in fair review."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "There is no dragnet collection. If the knob doesn’t fire, nothing gets saved, and even fired events aren’t browsable without a judge saying so.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.Neutral,
              "outcome-2": OutcomeModifierWeight.Neutral,
              "outcome-3": OutcomeModifierWeight.Neutral,
              "outcome-4": OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Absolute denial invites scrutiny when exceptions surface."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Blanket claims can hamstring safety partnerships."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard denial risks backlash if defense aid is needed."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Rejecting dragnets affirms constitutional boundaries."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
