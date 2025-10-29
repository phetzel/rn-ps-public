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
      text: "With the Living Room Flag Law churning slogans, fines, and parades, how do you justify the sofa-to-deficit pipeline our readers see in the confetti?",
      answers: [
        {
          id: "a_r1",
          text: "If this is a tournament, we intend to win it on national TV and under budget. We dare every couch to outshine ours, and we’ll prove pride and prudence can share the coffee table.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            flag_olympics: OutcomeModifierWeight.ModeratePositive,
            pillow_peg: OutcomeModifierWeight.SlightNegative,
            sofa_clinics: OutcomeModifierWeight.ModerateNegative,
            drone_audit: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "He spotlights ambition to turn scrutiny into national pride."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Faces ire over drones and surprise ottoman drills."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Is blamed for sofa‑to‑deficit math and hidden memos."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Faces pushback over glitter and glue exposure worries."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Compliance visits are brief, scheduled, and decidedly mic-free; inspectors are trained to admire throw pillows, not interrogate them. The goal is calm living rooms and even calmer pets.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            flag_olympics: OutcomeModifierWeight.StrongNegative,
            pillow_peg: OutcomeModifierWeight.SlightPositive,
            sofa_clinics: OutcomeModifierWeight.SlightPositive,
            drone_audit: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He takes heat for promising calm amid visible crackdowns."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Highlights calm, scheduled visits and pet‑safe protocols."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Takes heat for fines and parade overtime burdens."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Catches blame for slow guidance on materials."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r3",
          text: "Fines are a backstop, not a business model; parade overtime is offset by bulk confetti contracts and rotating slogan prints negotiated once. The memo tallies projections, not panic.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            flag_olympics: OutcomeModifierWeight.ModeratePositive,
            pillow_peg: OutcomeModifierWeight.ModerateNegative,
            sofa_clinics: OutcomeModifierWeight.SlightPositive,
            drone_audit: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "He praises practical fixes as proof of agile governance."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Draws complaints about intrusive inspections and gear."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Explains costs clearly to calm markets and families."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Fielded complaints about craft irritants and rashes."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r4",
          text: "There is no credible evidence of glitter rash, couch cough, or pom‑pom fatigue tied to the program. Our health team tested kits and found more sparkle than hazard.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            flag_olympics: OutcomeModifierWeight.Neutral,
            pillow_peg: OutcomeModifierWeight.SlightPositive,
            sofa_clinics: OutcomeModifierWeight.SlightNegative,
            drone_audit: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He is dinged for dismissing concerns that feel tangible."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Catches flak for unsettling compliance theatrics."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Faces skepticism about projections and nickel‑counting."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Denies epidemics while urging basic ventilation."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "A Treasury memo under confetti warns slogan updates and parade overtime cost billions; will you cap costs or keep marching to the sofa beat?",
        answers: [
          {
            id: "a_s1_1",
            text: "As the Treasury lead, I can confirm costs are tracked line‑by‑line and posted alongside revenue from decals and sponsorships. We’ll publish a quarterly parade ledger for scrutiny.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.ModerateNegative,
              pillow_peg: OutcomeModifierWeight.ModeratePositive,
              sofa_clinics: OutcomeModifierWeight.SlightNegative,
              drone_audit: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He frames oversight as prudent, but the costs still loom."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Takes heat for overtime triggers and anxiety in homes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Is blamed for sofa‑to‑deficit math and hidden memos."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Is accused of downplaying minor irritations at home."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury,
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "The big spikes are start‑up: first print runs, route permits, and one‑time training. After that, rotating slogans are amortized, and overtime is throttled to pre‑approved windows.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.ModeratePositive,
              pillow_peg: OutcomeModifierWeight.SlightNegative,
              sofa_clinics: OutcomeModifierWeight.SlightPositive,
              drone_audit: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He is criticized for deflections amid fiscal questions."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Commits to lighter touch and better training for teams."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Highlights startup costs tapering and tighter controls."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Faces pushback over glitter and glue exposure worries."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "If we can count every nickel thrown from a float, we can count savings too, but the point is spirit. Show me a deficit that survived a neighborhood band’s trombones.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
            flag_olympics: OutcomeModifierWeight.SlightNegative,
            pillow_peg: OutcomeModifierWeight.ModerateNegative,
            sofa_clinics: OutcomeModifierWeight.ModeratePositive,
            drone_audit: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He faces criticism for micromanaging living rooms."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Draws complaints about intrusive inspections and gear."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Catches criticism for treating couches like revenue."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Offers accommodations and practical health tips."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Cap the costs? Better: out‑organize them. We’re inviting communities to host joint parades, share banners, and dare the next town to do it cleaner and cheaper.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
            flag_olympics: OutcomeModifierWeight.ModeratePositive,
            pillow_peg: OutcomeModifierWeight.SlightPositive,
            sofa_clinics: OutcomeModifierWeight.ModerateNegative,
            drone_audit: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He absorbs blame for costs and intrusive enforcement."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Assures checks are simple, brief, and respectful of homes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Takes heat for fines and parade overtime burdens."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fielded complaints about craft irritants and rashes."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Compliance squads and surprise ottoman drills spook pets and wallets alike; are inspections mic-free, sane, and short enough to avoid overtime?",
        answers: [
          {
            id: "a_s2_1",
            text: "Inspections are ten minutes, max, with opt‑in photo verification to skip the visit entirely. No hidden threads, no surprise drills after bedtime, and absolutely no pet interviews.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.ModeratePositive,
              pillow_peg: OutcomeModifierWeight.SlightNegative,
              sofa_clinics: OutcomeModifierWeight.SlightPositive,
              drone_audit: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He credits teams for calm, quick visits that respect homes."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Highlights calm, scheduled visits and pet‑safe protocols."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Faces skepticism about projections and nickel‑counting."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Catches blame for slow guidance on materials."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "There are no listening devices in the tassels, no tracer glitter, and no couch subpoenas tucked under cushions. Rumors started in a novelty store clearance bin.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.ModerateNegative,
              pillow_peg: OutcomeModifierWeight.ModeratePositive,
              sofa_clinics: OutcomeModifierWeight.SlightNegative,
              drone_audit: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He is dinged for dismissing concerns that feel tangible."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Catches flak for unsettling compliance theatrics."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Is blamed for sofa‑to‑deficit math and hidden memos."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Calms health fears with evidence and clear guidance."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Early pilots had some clipboard swagger and too many whistles. We’ve retrained teams, cut the theatrics, and put a stopwatch on visits so your ottoman can relax.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.ModeratePositive,
              pillow_peg: OutcomeModifierWeight.ModerateNegative,
              sofa_clinics: OutcomeModifierWeight.SlightNegative,
              drone_audit: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He absorbs blame for lapses and promises to tighten."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Takes heat for overtime triggers and anxiety in homes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Signals disciplined budgeting and transparent fees."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Faces pushback over glitter and glue exposure worries."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_4",
            text: "If your pet barks at a reflective vest, consider the parade a socialization clinic with confetti. The real emergency is a nation unprepared for snare drum proximity.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.SlightNegative,
              pillow_peg: OutcomeModifierWeight.SlightPositive,
              sofa_clinics: OutcomeModifierWeight.SlightPositive,
              drone_audit: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He is criticized for shifting blame onto households."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Commits to lighter touch and better training for teams."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Takes heat for fines and parade overtime burdens."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Is accused of downplaying minor irritations at home."
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
        text: "Do budget projections assume families will slip up and pay fines, and what happens if compliance erases the revenue your parade math needs?",
        answers: [
          {
            id: "a_t1_1",
            text: "Models assume high compliance, modest merch revenue, and minimal fines, because fines don’t scale joy. If compliance hits 98%, parade cycles shrink and payroll follows.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.SlightNegative,
              pillow_peg: OutcomeModifierWeight.ModeratePositive,
              sofa_clinics: OutcomeModifierWeight.ModerateNegative,
              drone_audit: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He praises clarity but still owns the fiscal overhang."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Draws complaints about intrusive inspections and gear."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Underscores revenue neutrality and fiscal guardrails."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Affirms low‑fume, washable materials reduce risk."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We are not budgeting for failure or secret delinquency windfalls. If families nail the routine, the program shrinks gracefully instead of ballooning to chase dollars.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.ModeratePositive,
              pillow_peg: OutcomeModifierWeight.SlightNegative,
              sofa_clinics: OutcomeModifierWeight.SlightPositive,
              drone_audit: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He is dinged for dismissing concerns that feel tangible."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Assures checks are simple, brief, and respectful of homes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Faces skepticism about projections and nickel‑counting."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fielded complaints about craft irritants and rashes."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Households aren’t the piggy bank; transparency is. Every dollar in and out gets posted before the confetti settles, and course corrections happen in daylight.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.ModerateNegative,
              pillow_peg: OutcomeModifierWeight.SlightPositive,
              sofa_clinics: OutcomeModifierWeight.SlightNegative,
              drone_audit: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He promises restraint, but families doubt the math."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Highlights calm, scheduled visits and pet‑safe protocols."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Catches criticism for treating couches like revenue."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Catches blame for slow guidance on materials."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Honestly, I hope fines vanish. Beat the deadline, hang the banner, and leave us nothing to collect so we can brag about a party that paid for itself in applause.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.SlightPositive,
              pillow_peg: OutcomeModifierWeight.ModerateNegative,
              sofa_clinics: OutcomeModifierWeight.ModeratePositive,
              drone_audit: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He spotlights ambition to turn scrutiny into national pride."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Faces ire over drones and surprise ottoman drills."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Takes heat for fines and parade overtime burdens."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Faces pushback over glitter and glue exposure worries."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Reports of glitter rash and couch glue fumes linger; will health officials regulate craft kits or deny there’s any public health angle to this living room ritual?",
        answers: [
          {
            id: "a_t2_1",
            text: "Health officials see no epidemic of glitter‑related maladies beyond bruised egos from crooked banners. There’s no plan to slap warning labels on pom‑poms.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.ModeratePositive,
              pillow_peg: OutcomeModifierWeight.SlightNegative,
              sofa_clinics: OutcomeModifierWeight.SlightPositive,
              drone_audit: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He touts steadiness while backing the health verdict."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Catches flak for unsettling compliance theatrics."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Is blamed for sofa‑to‑deficit math and hidden memos."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Denies epidemics while urging basic ventilation."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "We’ve issued guidance on low‑fume glue, washable glitter, and open‑window crafting, plus a hotline for kit recalls. The risk profile is closer to lemonade than lead paint.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.SlightNegative,
              pillow_peg: OutcomeModifierWeight.ModeratePositive,
              sofa_clinics: OutcomeModifierWeight.ModerateNegative,
              drone_audit: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He is criticized for deflections amid fiscal questions."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Takes heat for overtime triggers and anxiety in homes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Explains costs clearly to calm markets and families."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Is accused of downplaying minor irritations at home."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "If a family needs accommodations—sensitivities, allergies, or cranky upholstery—we approve alternatives like felt decals and five‑minute fan‑fare. No one must inhale sparkle.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.ModerateNegative,
              pillow_peg: OutcomeModifierWeight.SlightPositive,
              sofa_clinics: OutcomeModifierWeight.ModeratePositive,
              drone_audit: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He promises restraint, but families doubt the math."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Assures checks are simple, brief, and respectful of homes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Faces skepticism about projections and nickel‑counting."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fielded complaints about craft irritants and rashes."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If we regulate anything, it’s the tempo of the kazoo section. Let’s not medicalize arts and crafts when the biggest threat is a crooked staple.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              flag_olympics: OutcomeModifierWeight.SlightPositive,
              pillow_peg: OutcomeModifierWeight.ModerateNegative,
              sofa_clinics: OutcomeModifierWeight.SlightNegative,
              drone_audit: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He is criticized for shifting blame onto households."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Faces ire over drones and surprise ottoman drills."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Signals disciplined budgeting and transparent fees."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Catches blame for slow guidance on materials."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
