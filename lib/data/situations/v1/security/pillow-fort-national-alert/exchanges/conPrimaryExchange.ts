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
      text: "Why mandate Pillow Fort Day with triple-ply goose-down and RFID pillow specs when small cushion shops say compliance will smother them on day one?",
      answers: [
        {
          id: "a_root_1",
          text: "The President challenges the premise: the cost of flimsy forts is panic and popcorn on the floor. We’re asking for sturdy fluff so the bad guys bounce, not small shops to suffocate.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            "pillow-code-chaos": OutcomeModifierWeight.StrongPositive,
            "down-feather-dome": OutcomeModifierWeight.StrongPositive,
            "fluffstice-sovereignty": OutcomeModifierWeight.StrongPositive,
            "sofa-strike": OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "The President embraces the challenge and defends the public interest."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Homeland flags potential code confusion and audit strain."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Defense applauds resolve and credible deterrence posture."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice warns about due process risks and overreach."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Homeland’s framework scales by Threat Fluff Level, not wallet size. Mom-and-pop pillow stands can certify basic cotton bulwarks first, then level up as grants and bulk buying kick in.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            "pillow-code-chaos": OutcomeModifierWeight.SlightPositive,
            "down-feather-dome": OutcomeModifierWeight.SlightPositive,
            "fluffstice-sovereignty": OutcomeModifierWeight.SlightPositive,
            "sofa-strike": OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "The President is uneasy about burdens on small merchants."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Homeland welcomes clarity that supports orderly compliance."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Defense warns of strategic gaps and mixed signals."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice is concerned about statutory footing and fairness."
              }
            }
          },
          followUpId: "q_cost"
        },
        {
          id: "a_root_3",
          text: "We admit the exemption portal became a sleep-paralysis demon. It asked for lullabies, nap allegiance, and a selfie with your most vulnerable cushion. That’s indefensible and we’re fixing it.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            "pillow-code-chaos": OutcomeModifierWeight.SlightNegative,
            "down-feather-dome": OutcomeModifierWeight.SlightNegative,
            "fluffstice-sovereignty": OutcomeModifierWeight.SlightNegative,
            "sofa-strike": OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "The President warns of signaling confusion to the public."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Homeland notes gaps that could erode compliance discipline."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Defense sees uncertainty that weakens deterrence."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Justice welcomes the admission and concrete corrective steps."
              }
            }
          },
          followUpId: "q_portal"
        },
        {
          id: "a_root_4",
          text: "I am authorized by Homeland to clarify: triple-ply is a ceiling, not a floor; RFID is phased and optional for micro-forts this season. There’s a 90-day grace for audits while waivers process.",
          type: AnswerType.Authorized,
          outcomeModifiers: {
            "pillow-code-chaos": OutcomeModifierWeight.StrongNegative,
            "down-feather-dome": OutcomeModifierWeight.StrongNegative,
            "fluffstice-sovereignty": OutcomeModifierWeight.StrongNegative,
            "sofa-strike": OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "The President bristles at the tradeoffs and demands cost clarity."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Homeland sees alignment with practical threat-tier standards."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Defense supports stronger readiness and clear doctrine."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice flags privacy exposure and unclear redress."
              }
            }
          },
          authorizedCabinetMemberId: CabinetStaticId.Homeland
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_cost",
        text: "Homeland’s specs demand triple-ply bastions and tagged throw pillows; how are independents supposed to afford audits and retooling without being flattened?",
        answers: [
          {
            id: "a_cost_1",
            text: "No one is dispatching the Goose-Down Inquisition. We’re staggering requirements, offering co-op sourcing, and letting small sellers pool audits so a checklist doesn’t become a chokehold.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.StrongPositive,
              "down-feather-dome": OutcomeModifierWeight.StrongPositive,
              "fluffstice-sovereignty": OutcomeModifierWeight.StrongPositive,
              "sofa-strike": OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The President is uneasy about burdens on small merchants."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Homeland approves safeguards consistent with risk protocols."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense warns of strategic gaps and mixed signals."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice warns about due process risks and overreach."
                }
              }
            }
          },
          {
            id: "a_cost_2",
            text: "Cost modeling sets tiers by square-footage and foot-traffic, with grant vouchers for upgrades and tag credits for first adopters. We’ll publish calculators so shops see real numbers, not rumors.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.SlightPositive,
              "down-feather-dome": OutcomeModifierWeight.SlightPositive,
              "fluffstice-sovereignty": OutcomeModifierWeight.SlightPositive,
              "sofa-strike": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The President bristles at the tradeoffs and demands cost clarity."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland flags potential code confusion and audit strain."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense supports stronger readiness and clear doctrine."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice is concerned about statutory footing and fairness."
                }
              }
            },
            followUpId: "q_rfid"
          },
          {
            id: "a_cost_3",
            text: "If a boutique can monogram 47 throw pillows before brunch, it can tag three for safety by dinner. The standard is sturdy, not gilded, and we expect ingenuity, not doom posting.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.SlightNegative,
              "down-feather-dome": OutcomeModifierWeight.SlightNegative,
              "fluffstice-sovereignty": OutcomeModifierWeight.SlightNegative,
              "sofa-strike": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "The President backs the plan and stresses shared responsibility."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland notes gaps that could erode compliance discipline."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Defense applauds resolve and credible deterrence posture."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice flags privacy exposure and unclear redress."
                }
              }
            }
          },
          {
            id: "a_cost_4",
            text: "The triple-ply ‘secret’ isn’t secret and it isn’t a mandate for everyone. The spec reads ‘up to’ based on risk, and alternatives like reinforced cotton are explicitly permitted.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.StrongNegative,
              "down-feather-dome": OutcomeModifierWeight.StrongNegative,
              "fluffstice-sovereignty": OutcomeModifierWeight.StrongNegative,
              "sofa-strike": OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The President warns of signaling confusion to the public."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland worries the message undercuts consistency and order."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense flags operational friction and unclear authority."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice supports due process fixes and restraint."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_portal",
        text: "Exemption petitions ask for lullabies, nap oaths, and cushion selfies; when do victims of this bedtime bureaucracy get a portal normal humans can use?",
        answers: [
          {
            id: "a_portal_1",
            text: "Yes, parts of the form are parody-grade. Requiring a lullaby upload and a nap oath is getting ripped out, along with the auto-logout at yawn three. We owe a fast, sane redo.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.ModeratePositive,
              "down-feather-dome": OutcomeModifierWeight.ModeratePositive,
              "fluffstice-sovereignty": OutcomeModifierWeight.ModeratePositive,
              "sofa-strike": OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The President is concerned about delayed relief and costs."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland flags potential code confusion and audit strain."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense warns of strategic gaps and mixed signals."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice welcomes the admission and concrete corrective steps."
                }
              }
            },
            followUpId: "q_timeline"
          },
          {
            id: "a_portal_2",
            text: "Look, the portal was coded during a caffeine shortage and an enthusiasm surplus. That’s a terrible combo, and the fix crew now outnumbers the feature poets by a mile.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.SlightNegative,
              "down-feather-dome": OutcomeModifierWeight.SlightNegative,
              "fluffstice-sovereignty": OutcomeModifierWeight.SlightNegative,
              "sofa-strike": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The President warns of signaling confusion to the public."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Homeland welcomes clarity that supports orderly compliance."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense sees uncertainty that weakens deterrence."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice is concerned about statutory footing and fairness."
                }
              }
            }
          },
          {
            id: "a_portal_3",
            text: "Merchants stuck in that maze will not be punished. We’re toggling ‘good-faith mode’ so pending applicants get safe harbor while we un-knot the steps and kill the silliest prompts.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.SlightPositive,
              "down-feather-dome": OutcomeModifierWeight.SlightPositive,
              "fluffstice-sovereignty": OutcomeModifierWeight.SlightPositive,
              "sofa-strike": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The President is uneasy about burdens on small merchants."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland notes gaps that could erode compliance discipline."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense supports stronger readiness and clear doctrine."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice flags privacy exposure and unclear redress."
                }
              }
            }
          },
          {
            id: "a_portal_4",
            text: "We’re simplifying documentation to business basics: tax ID, floor plan sketches, and a single affidavit. No bedtime rituals, no cushion glamour shots, and no riddles after 8 p.m.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.ModerateNegative,
              "down-feather-dome": OutcomeModifierWeight.ModerateNegative,
              "fluffstice-sovereignty": OutcomeModifierWeight.ModerateNegative,
              "sofa-strike": OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "The President backs the plan and stresses shared responsibility."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Homeland sees alignment with practical threat-tier standards."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense flags operational friction and unclear authority."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice warns about due process risks and overreach."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_rfid",
        text: "On RFID throw pillows: who holds the data, how long is it kept, and will grandma’s sofa ping a drone if she naps without updating her fort?",
        answers: [
          {
            id: "a_rfid_1",
            text: "Tags store serial and safety grade only, with rotation logs. Data lives with certified vendors under audit trails, and purge cycles are measured in weeks, not winters. No living-room tracking.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.StrongPositive,
              "down-feather-dome": OutcomeModifierWeight.StrongPositive,
              "fluffstice-sovereignty": OutcomeModifierWeight.StrongPositive,
              "sofa-strike": OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "The President backs the plan and stresses shared responsibility."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Homeland welcomes clarity that supports orderly compliance."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense warns of strategic gaps and mixed signals."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice is concerned about statutory footing and fairness."
                }
              }
            }
          },
          {
            id: "a_rfid_2",
            text: "No, grandma’s sofa won’t summon aerial anything. RFID here is passive, not a beacon, and scanners don’t phone home. Without a checkpoint scan, a pillow is just a very quiet pillow.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.SlightNegative,
              "down-feather-dome": OutcomeModifierWeight.SlightNegative,
              "fluffstice-sovereignty": OutcomeModifierWeight.SlightNegative,
              "sofa-strike": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The President warns of signaling confusion to the public."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland notes gaps that could erode compliance discipline."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense supports stronger readiness and clear doctrine."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice flags privacy exposure and unclear redress."
                }
              }
            }
          },
          {
            id: "a_rfid_3",
            text: "Privacy guardrails are baked in like feathers in a seam. We require anonymized batch reads at checkpoints and a hard ban on tying tags to customer names.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.SlightPositive,
              "down-feather-dome": OutcomeModifierWeight.SlightPositive,
              "fluffstice-sovereignty": OutcomeModifierWeight.SlightPositive,
              "sofa-strike": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The President is uneasy about burdens on small merchants."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland flags potential code confusion and audit strain."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense flags operational friction and unclear authority."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice supports due process fixes and restraint."
                }
              }
            }
          },
          {
            id: "a_rfid_4",
            text: "If a drone responds to a nap, it’s probably delivering tea. The program’s job is to keep forts from collapsing, not to surveil siestas, and we’ll keep it that boring.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.StrongNegative,
              "down-feather-dome": OutcomeModifierWeight.StrongNegative,
              "fluffstice-sovereignty": OutcomeModifierWeight.StrongNegative,
              "sofa-strike": OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The President is concerned about delayed relief and costs."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Homeland sees alignment with practical threat-tier standards."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense sees uncertainty that weakens deterrence."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice warns about due process risks and overreach."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_timeline",
        text: "You admit the portal is absurd; what’s the exact fix timeline, and will fines pause for merchants stuck in login limbo during the nap-test cleanup?",
        answers: [
          {
            id: "a_time_1",
            text: "The sprint plan admits we shipped a turkey. We’re cutting features to bone-simple, rewriting the form, and deleting the lullaby table entirely. That’s on us and we’re owning the cleanup.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.ModeratePositive,
              "down-feather-dome": OutcomeModifierWeight.ModeratePositive,
              "fluffstice-sovereignty": OutcomeModifierWeight.ModeratePositive,
              "sofa-strike": OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The President is concerned about delayed relief and costs."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland flags potential code confusion and audit strain."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense warns of strategic gaps and mixed signals."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Justice welcomes the admission and concrete corrective steps."
                }
              }
            }
          },
          {
            id: "a_time_2",
            text: "Timeline: 72-hour patch to strip nonsense, seven-day beta with real shop owners, and a day-14 full relaunch. All fines tied to portal filings are paused until 30 days after relaunch.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.SlightPositive,
              "down-feather-dome": OutcomeModifierWeight.SlightPositive,
              "fluffstice-sovereignty": OutcomeModifierWeight.SlightPositive,
              "sofa-strike": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "The President backs the plan and stresses shared responsibility."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Homeland welcomes clarity that supports orderly compliance."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense flags operational friction and unclear authority."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice warns about due process risks and overreach."
                }
              }
            }
          },
          {
            id: "a_time_3",
            text: "No one will be penalized for our nap-test misadventure. We’ll backdate compliance for applicants in limbo and publish a hotline staffed by humans, not bedtime bots.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.SlightNegative,
              "down-feather-dome": OutcomeModifierWeight.SlightNegative,
              "fluffstice-sovereignty": OutcomeModifierWeight.SlightNegative,
              "sofa-strike": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "The President warns of signaling confusion to the public."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland notes gaps that could erode compliance discipline."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense supports stronger readiness and clear doctrine."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice is concerned about statutory footing and fairness."
                }
              }
            }
          },
          {
            id: "a_time_4",
            text: "We challenge our own process to meet the standard we ask of merchants: simple, sturdy, fast. If it can’t pass the plain-English test, it won’t ship, even if it’s cute.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.ModerateNegative,
              "down-feather-dome": OutcomeModifierWeight.ModerateNegative,
              "fluffstice-sovereignty": OutcomeModifierWeight.ModerateNegative,
              "sofa-strike": OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "The President embraces the challenge and defends the public interest."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Homeland worries the message undercuts consistency and order."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense sees uncertainty that weakens deterrence."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice flags privacy exposure and unclear redress."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
