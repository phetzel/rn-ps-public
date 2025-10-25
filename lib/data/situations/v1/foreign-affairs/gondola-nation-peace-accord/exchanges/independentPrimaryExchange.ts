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
      text: "If Gondola Nation were recognized, what would change for port logistics, insurance, drone noise, and does the morning ferry count as foreign travel?",
      answers: [
        {
          id: "a_root_1",
          text: "The President says recognition starts with proof the fun way: a public flag‑eating contest judged by librarians. Democracy deserves pageantry and snacks, not just signatures and stern nods.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "He cheers a theatrical test as fair proof of statehood."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "They reject stunts, citing mailbox and anthem standards."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They caution the drones will not overreact to pageantry."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "State’s posture is procedural: no vessel earns recognition without a consular mailbox, a registered crew list, and a waterproof anthem. Law requires soggy paperwork and a map, not vibes.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He bristles at bureaucratic delay and soggy formalities."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "They welcome lawful process and clear recognition criteria."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They note procedure can complicate harbor security postures."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "Defense has harbor drones set to 'polite honk' and pool‑noodle containment, built for de‑escalation. We can outmaneuver a gondola while letting commuters keep their coffee upright.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He worries reassurance sounds like complacency."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They warn over-reassurance could undercut legal footing."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "They tout polite honks and noodles as safe de-escalation."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "Before we crown any paddle a parliament, let’s finish the interagency review. We won’t litigate maritime cosplay from this podium between tide charts, donuts, and lunch.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He dislikes deflection and demands decisive clarity."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "They fear ambiguity invites rogue flags and bad precedents."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "They accept a pause if safety lanes remain enforced."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Practically, if recognition happens, would ferries need passports, cargo require customs scans, and port timetables slow as diplomats argue with barnacles?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Even with recognition, routine ferries remain domestic lanes; only direct embarkation to the gondola’s deck triggers customs. We’ll publish a simple dock‑to‑dock rulebook for crews and kiosks.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He sees limited change but fears political mixed signals."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They clarify ferries stay domestic under existing law."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They worry customs debates could distract drone crews."
                }
              }
            }
          },
          {
            id: "a_sec1_2",
            text: "We’re not turning the 7:10 into passport cosplay. Any checks would happen dockside at the gondola’s mooring, while commuters move like usual—fast, grumpy, and fueled by thermoses.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He warns against sounding glib about sovereignty."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They stress reassurance must not bypass documentation."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "They promise no passport lines and smooth harbor flow."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Insurance and liability are the real pinch points; carriers will get guidance on hull status, boarding risk, and rates. We’re convening underwriters to keep premiums boring and predictable.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He likes candor on costs if accountability remains firm."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They dislike framing that sidelines recognition standards."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They note insurance churn can strain patrol logistics."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_4",
            text: "Recognition is not assumed, and we’re not doling out diplomatic parking to a paddle. Until a decision exists, operations stay exactly as they are under current port rules.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He fears denial can appear petty if facts later shift."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They support caution pending clear consular protocols."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They caution hard lines may escalate minor frictions."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Residents report dawn lullabies from harbor drones; what are the rules of engagement, noise limits, and safeguards against a propeller‑to‑paddle incident?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Rules of engagement start with de‑escalation, then optics, then more de‑escalation. Drones keep a kayak‑length buffer, speak in 'polite honk,' and land if wind or whimsy gets sporty.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He worries lullabies imply unserious security."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They note noise charm does not replace compliance."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "They outline de-escalation with strict no-strike rules."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "Noise caps match local harbor decibels at the seawall, and every beep gets logged like a concerto. The mission is safety monitoring, not a dawn chorus audition or a chase reel.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He accepts caps but wants public proof of enforcement."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They value clear decibel and safety thresholds."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They warn limits may reduce responsiveness at rush hour."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_3",
            text: "We did ground an overenthusiastic unit after a courteous barrel roll. It’s retrained to hover like a bored librarian, and we’ve added extra checklists plus a humility module.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes admissions that signal shaky oversight."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They prefer transparency to prevent repeat incidents."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They accept fault and tighten training protocols."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "We are not militarizing breakfast—no armed drones, no chase scenes, no upgrades to sea shanties. This is maritime crowd control, not theater, and it will stay that way.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He backs limiting militarization to protect civil life."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They fear blanket denials could ignore treaty duties."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They resist constraints that hamper defensive readiness."
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
        text: "On insurance, who pays if a tourist sprains pride disembarking Gondola Nation, and does the vessel need sovereign hull coverage or just sturdier duct tape?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Jurisdiction follows the dock and the deed; boarding from a city pier keeps local liability, with the gondola carrying visitor coverage. We’ll publish carrier guidance before tourist season opens.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He worries jurisdiction talk sounds hedged."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They endorse dock-based authority and clear deeds."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They note split rules complicate safety perimeters."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We’re crafting a micro‑nation rider so no one’s premiums spike because a paddle got pretentious. Think 'museum exhibit' coverage, not 'storm the high seas' pricing, boring by design.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He dislikes promises that outpace legal reforms."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They insist riders follow statutory underwriting."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "They reassure tourists with clear liability coverage."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "Actuaries are mid‑ritual with their spreadsheets, and I will not summon a deductible from thin air. Let them finish the math dance, then we’ll brief you without interpretive tap.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He rejects quips and asks for concrete responsibility."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They say levity cannot replace compliance papers."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They accept humor only if safety protocols stand."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "If your 'nation' can’t waterproof a waiver or define 'deck,' you’re not ready for sovereign anything. Meet the checklist, then we’ll discuss fancy hull titles without the glitter.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He favors firm tests to prove competence and duty."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They oppose theatrics as a standard for coverage."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They warn challenges can distract from safety drills."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Will there be quiet hours, drone curfews, or gondola‑free lanes so neighbors can drink coffee without a soundtrack of polite honks and diplomatic splashing?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Yes—quiet hours will bracket rush periods, and drones will idle to a whisper. Commuters deserve coffee without choreography, and our ops plan treats that like sacred maritime law.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He wants quiet, but worries about soft enforcement."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They seek order without undermining permit law."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "They promise calm skies and courteous flight paths."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "We’re issuing a harbor notice with decibel caps, patrol windows, and a floating 'do‑not‑mosh' lane. Enforcement will be posted at every pier and mirrored in the drone firmware.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He backs clarity but fears red tape at peak hours."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They support notices that codify practical limits."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They warn new lanes may compress patrol options."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "The only thing worse than drone noise is policy noise; we’ll publish the rules once the ink dries. No freestyle announcements mid‑tide from this podium today.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes jokes when residents need relief."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They urge focus on enforceable standards, not wit."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They accept humor only alongside strict curfews."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "Week one might be clunky as pilots learn new routes, and we’ll adjust live. We’ve budgeted extra marshals and earplugs, primarily for staff meetings and particularly spirited gulls.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He frets early bumps could tarnish competence."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They value candor paired with corrective bulletins."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They commit to rapid iteration to reduce noise."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
