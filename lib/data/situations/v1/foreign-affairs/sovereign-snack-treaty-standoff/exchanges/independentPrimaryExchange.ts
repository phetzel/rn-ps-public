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
      text: "Can your administration swap an embassy for a themed diner that issues visas tableside and still keep security and seriousness off the combo menu?",
      answers: [
        {
          id: "a_root_challenge",
          text: "If a microstate wants snack-based diplomacy, I’ll meet their Snack Regent on live TV for a cook-off. Winner gets bragging rights; loser accepts our napkins and our visa window stays official.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "The cook-off pledge projects strength and playful resolve."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It sidelines formal notes and complicates protocol timing."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Public stunts blur perimeter rules and screening optics."
              }
            }
          },
          followUpId: "q_sec_visas"
        },
        {
          id: "a_root_inform_state",
          text: "The foreign desk is drafting a lawful pop-up consular counter inside any themed space, with our seal, flag, and trained staff. It satisfies the snack clause without surrendering a single protocol.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Legalistic framing dulls momentum and narrows options."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear guidance supports compliance and allied confidence."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ambiguity on space control can signal softness at doors."
              }
            }
          },
          followUpId: "q_sec_security"
        },
        {
          id: "a_root_deny_homeland",
          text: "We deny that booths, barstools, or condiment caddies equal sovereign soil. Security lines won’t snake past a jukebox, and no ketchup packet will ever issue a visa on our watch.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "A hard no reads rigid if tensions flare on camera."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rigid posture reduces room for face-saving language."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Strong stance protects jurisdiction and screening norms."
              }
            }
          }
        },
        {
          id: "a_root_reassure",
          text: "We can do burgers and bureaucracy without indigestion. The embassy functions stay real, the theme stays theatrical, and no one’s passport comes medium-rare.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Soft tone risks appearing unserious amid novelty."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassurances may pre-commit us before texts are vetted."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calm messaging supports orderly queues and compliance."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_visas",
        text: "If the clause forces a diner, how do consular services work—can staff notarize, issue visas, and aid citizens between shakes without legal heartburn?",
        answers: [
          {
            id: "a_s1_inform",
            text: "We separate the grill from the seal. A credentialed consular crew runs a secure window, logs cases digitally, and uses standard forms—not napkins—while the diner operates around, not through, official acts.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical detail saps headline energy and leverage."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Operational clarity fits treaty text and allies’ needs."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Split spaces can be misread, stressing perimeter control."
                }
              }
            },
            followUpId: "q_ter_precedent"
          },
          {
            id: "a_s1_deflect",
            text: "We won’t be notarizing milkshakes. The legal team is allergic to dairy and shortcuts, and they’ve already cut the straw from the process.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Light humor resets the frame without conceding ground."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection delays needed guidance to posts and partners."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Ambiguity clouds screening roles in mixed-use space."
                }
              }
            }
          },
          {
            id: "a_s1_reassure",
            text: "Citizens get a clear lane, clear signage, and the same dull forms they know and tolerate. The only “special” is predictability, served all day.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Overpromising creates risk if service lanes bog down."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear lanes and signage aid compliance and throughput."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Crowd flow pledges mean little without enforceable zones."
                }
              }
            }
          },
          {
            id: "a_s1_deny",
            text: "No clerk flips burgers and visas simultaneously. If you see a spatula at the window, it’s because someone is getting fired, not certified.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "A firm line may read brittle if services hiccup."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard denial narrows drafting flexibility on pilots."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Bright lines protect security doctrine and authorities."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_security",
        text: "What would security require so a visa-serving diner isn’t a soft target—metal detectors by the malt machine, or is sovereignty checked at the door?",
        answers: [
          {
            id: "a_s2_deny",
            text: "We deny any “soft target” gimmick. Security standards match a normal embassy: layered screening, controlled access, and zero tolerance for souvenir sovereignty. Training covers more than spatulas.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissal can backfire if threats later materialize."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denial constrains wording for layered design options."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear refusal reinforces standards and deter copycats."
                }
              }
            },
            followUpId: "q_ter_clearance"
          },
          {
            id: "a_s2_inform",
            text: "Design separates public dining from controlled consular zones, with hardened doors, cameras, and staff vetting. The milkshake machine is not a checkpoint in any universe.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Specifics show control and bolster command presence."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Design brief aligns with norms and partner facilities."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Public schematics risk telegraphing exploitable patterns."
                }
              }
            }
          },
          {
            id: "a_s2_deflect",
            text: "We’re not scanning fries for subtext. But yes, the metal detector can handle a belt buckle and a novelty burger trophy without triggering a constitutional crisis.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Quips risk trivializing risk management in public."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Light touch buys time to refine specs with partners."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Mixed signals weaken deterrence near the checkpoint."
                }
              }
            }
          },
          {
            id: "a_s2_reassure",
            text: "Visitors will feel safe enough to sip and sign. Security is visible, boring, and effective—the three pillars of keeping drama on the menu board, not the incident log.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance helps mood but invites accountability later."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comfort language can outpace what budgets will fund."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Confidence talk supports orderly screening behavior."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_precedent",
        text: "What’s the precedent if a consular pop-up runs in a diner—do we open waffle embassies for every cul-de-sac microstate, and who picks up the tab?",
        answers: [
          {
            id: "a_t1_inform",
            text: "Policy sets a tight precedent: pop-ups only when treaties cite cultural venues and only with full diplomatic trappings. No waffle embassies unless the treaty literally says “waffle.”",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process talk tempers momentum and media oxygen."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Tight criteria preserve policy coherence and allies."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Exceptions invite challenges to established boundaries."
                }
              }
            }
          },
          {
            id: "a_t1_deflect",
            text: "If every microstate wants a booth, we’ll need more coasters and fewer hypotheticals. Precedent is written in law, not syrup.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes can erode seriousness on fiscal prudence."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Flippancy undercuts painstaking precedent language."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor lowers temperature among anxious patrons."
                }
              }
            }
          },
          {
            id: "a_t1_reassure",
            text: "We’re capping the calorie count. Temporary, reviewable, and revocable—this is a pilot, not a franchise explosion.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances risk sounding like blank checks to others."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soothing tone may weaken bargaining over scope."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Predictability aids orderly enforcement at venues."
                }
              }
            }
          },
          {
            id: "a_t1_challenge",
            text: "If another microstate insists on novelty, we’ll out-novel them with boring competence. Our challenge is simple: meet our standards or try the food court.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Confidence signals resolve and sets a clear boundary."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Showmanship can complicate drafting with sober tone."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive posture may crowd local security partners."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_clearance",
        text: "Can staff trained in spatulas and stamps meet clearance standards, and how do you stop ketchup packets from posing as contraband diplomatic pouches?",
        answers: [
          {
            id: "a_t2_inform",
            text: "Clearances stay federal: background checks, compartmentalized access, and audited logs. Spatula skill is optional; confidentiality is not.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Detail focus reduces my room for strategic flourish."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Standards-first plan aligns with statute and allies."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Strict queues strain staffing if demand surges."
                }
              }
            }
          },
          {
            id: "a_t2_deny",
            text: "Ketchup packets are not diplomatic pouches. Seals, serials, and secure couriers move sensitive items, not squeeze-tops with smiling tomatoes.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial risks pedantry if edge cases arise."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overly narrow read can alienate cooperative posts."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clarity safeguards authorities and chain of custody."
                }
              }
            }
          },
          {
            id: "a_t2_reassure",
            text: "If it looks like contraband, it gets binned. The only thing smuggled out is a sense of relief that boring rules still win.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comfort talk helps tone, not enforcement muscle."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Warmth can dilute the crispness of compliance cues."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calm guidance helps travelers respect screening."
                }
              }
            }
          },
          {
            id: "a_t2_deflect",
            text: "We tried to brief a packet of ketchup once. It wouldn’t sign the nondisclosure, so we let it go. Jokes aside, the protocols are airtight.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Levity reframes the odd clause while keeping control."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Wit offers little guidance to missions on the ground."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes risk muddying seizure rules for contraband."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
