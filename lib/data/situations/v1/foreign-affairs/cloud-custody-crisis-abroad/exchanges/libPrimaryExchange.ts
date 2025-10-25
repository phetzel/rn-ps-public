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
      text: "With Nimbusia and Vaporistan both claiming a roaming 'diplomatic cloud,' talks over passports and rain tariffs have stalled—what will you do to un-drench travelers?",
      answers: [
        {
          id: "ans_root_1",
          text: "We misfiled an atmospheric memo; we own the clerical drizzle, not the cloud. We’ll issue temporary travel waivers and keep umbrellas out of court while talks resume.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Owning the error calms markets and defuses umbrella wars."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It complicates diplomacy by conceding a paperwork lapse."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "It signals restraint, limiting any air escort posture."
              }
            }
          }
        },
        {
          id: "ans_root_2",
          text: "Clouds have no borders or corners. Our envoys are calming both sides, pausing any rain tariffs, and reopening passport windows so commuters aren’t soaked by paperwork.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Sounds cautious but risks appearing indecisive at home."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "It affirms norms and lowers pressure for rain tariffs."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It reduces appetite for new deployments in shared airspace."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "ans_root_3",
          text: "A vapor bank isn’t sovereign territory. We’ll greenlight dehumidifier escorts and kite backchannels to keep skies safe while discouraging anyone from patenting precipitation.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Legalistic framing may seem combative to small partners."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It narrows space for a soft-landing compromise."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear stance supports limited, non-kinetic escort options."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "ans_root_4",
          text: "Look, no one elected the weather. We’re not grading cumulus while workers queue in puddles; we’ll keep focus on mobility and paychecks, not cloud-custody theatrics.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.MajorPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Flippancy invites charges that we are dodging responsibility."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It undercuts patient shuttle diplomacy between the capitals."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "At least it avoids saber-rattling in a crowded air corridor."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "If the microstates keep taxing drizzle and freezing passport desks, what immediate relief will stateless travelers and shift workers actually see at checkpoints?",
        answers: [
          {
            id: "ans_sec1_1",
            text: "We’re issuing 90-day transit waivers across the fog belt, with mobile consuls at hubs. Employers will get guidance to stop penalizing late arrivals caused by weather theatrics.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Direct relief shows ownership and prioritizes people."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Coordination with consuls builds trust across borders."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "It limits mission space for any aerial escort plans."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "ans_sec1_2",
            text: "No one will be stranded for lack of a cloud stamp. We’re coordinating with both microstates to honor existing IDs and suspend any rain tolls at crossings until talks resume.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Empathy helps, but results will matter more than tone."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Assurances reduce panic and stabilize field processing."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "It sidelines security tools before they are evaluated."
                }
              }
            }
          },
          {
            id: "ans_sec1_3",
            text: "We could have pre-briefed better before the forecast turned diplomatic. We’re fixing that with hourly updates and one portal so travelers aren’t bounced between drizzle desks.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting gaps invites domestic criticism of planning."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It weakens leverage in talks with both microstates."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity lets us shape minimal, lawful support options."
                }
              }
            }
          },
          {
            id: "ans_sec1_4",
            text: "We won’t referee every raindrop. Our priority is moving people, not clouds; the custody drama can cool off while buses and visas get back to their regularly scheduled programming.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Detachment reads as cold to stranded families and crews."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It frays working ties with rain-desk counterparts."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Avoiding overreach can still deter unnecessary escalation."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Defense touts 'dehumidifier escorts' and kite diplomacy to keep the cloud from being 'seized.' How will you avoid turning the sky into a militarized tollway?",
        answers: [
          {
            id: "ans_sec2_1",
            text: "We reject the idea that a cloud can be seized. Our posture protects common airspace, not turf. If someone tries to badge the breeze, they’ll meet firm but peaceful resistance.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Confrontation risks blowback if partners feel ignored."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It narrows the space for a de-escalatory compromise."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm lines back limited, non-kinetic escort posture."
                }
              }
            }
          },
          {
            id: "ans_sec2_2",
            text: "These are nonlethal, non-loud tools—think air marshals with towels. The mission is safety and de-escalation while diplomats untie the weather puns and paperwork knots.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance may feel slow, but it reduces frictions."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "It validates norms and eases regional anxieties."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It tempers operational latitude for rapid response."
                }
              }
            }
          },
          {
            id: "ans_sec2_3",
            text: "Guidance is clear: no kinetic actions, transparent flight paths, and public logs of any escort runs. Auditors from both microstates can monitor in real time, online.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Procedural talk can feel detached from daily delays."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency builds consent for shared protocols."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Public limits constrain tactical flexibility."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "ans_sec2_4",
            text: "No, we’re not annexing the atmosphere or fielding a Thunder Corps. We’re preventing midair scuffles over umbrellas, not inventing sky taxes or patrols.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial risks sounding evasive or dismissive."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It strains patient ties with protocol counterparts."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A firm no keeps forces out of political theater."
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
        text: "On the 90-day waivers and mobile consuls, what legal footing stops officers demanding 'cloud visas,' and how will undocumented workers be protected?",
        answers: [
          {
            id: "ans_ter1_1",
            text: "We’re invoking the Transit Continuity Act’s emergency clause to treat cloud disputes as non-events for ID checks. Inspectors will be retrained, with hotlines and penalties for shakedowns.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear authority reassures anxious travelers quickly."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Codified guidance steadies consular cooperation."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Strict limits reduce responsive escort options."
                }
              }
            }
          },
          {
            id: "ans_ter1_2",
            text: "No one gets funneled into status traps because a forecast went political. Policy bars cloud-based checks, and we’ll publish daily detention stats to catch abuses early.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Warm words alone will not satisfy soaked commuters."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "It calms fears of traps and arbitrary detours."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It compresses the space for enforcement assistance."
                }
              }
            }
          },
          {
            id: "ans_ter1_3",
            text: "If a gatekeeper demands weather papers, we’ll challenge it in court and in daylight. Rules exist; we’ll make them heard above the thunder and the press conference mic.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Confronting abuse risks tit-for-tat with microstates."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Positions may harden at passport counters."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Standing firm backs measured deterrence if needed."
                }
              }
            }
          },
          {
            id: "ans_ter1_4",
            text: "We won’t over-index on cumulonimbus jurisprudence. Success is dry socks and paid shifts, which we’ll secure while lawyers write footnotes about the sky’s legal surname.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection erodes confidence in rule-of-law focus."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It signals fatigue to partners managing long lines."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Nonintervention avoids inflating the immediate crisis."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Who signs off on dehumidifier escorts, and what prevents mission creep into weather policing—will you publish logs and limits before the plan takes flight?",
        answers: [
          {
            id: "ans_ter2_1",
            text: "Authorizations go through a civil–military board with meteorologists and rights observers. Logs post within 24 hours, with only safety-critical coordinates redacted.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process focus can feel bureaucratic amid delays."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Shared oversight earns buy-in from both sides."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Extra layers slow time-sensitive deployments."
                }
              }
            }
          },
          {
            id: "ans_ter2_2",
            text: "Guardrails, not gadgets: no arrests, no confiscating kites, and sunset clauses that evaporate fast. The tools disappear when the cloud drifts on and talks restart.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Tone helps, but people want to see limits now."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Public guardrails reduce legal and diplomatic risk."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It curtails flexibility for on-the-spot decisions."
                }
              }
            }
          },
          {
            id: "ans_ter2_3",
            text: "We aren’t deputizing the breeze. If it isn’t about safety or keeping talks alive, it doesn’t fly—literally or bureaucratically—under this policy.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Refusal to engage may seem out of touch to commuters."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It sidelines State when clarity is most needed."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "It ensures forces are not dragged into politics."
                }
              }
            }
          },
          {
            id: "ans_ter2_4",
            text: "If someone turns drizzle into jurisdiction, we’ll push back and invite them to argue with the wind under cameras, audits, and a stack of boring compliance charts.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This stance can inflame already tense rhetoric."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It risks reopening disputes settled by guidance."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "It endorses ready posture with clear boundaries."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
