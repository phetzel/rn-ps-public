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
      id: "q1",
      text: "Secret field tests flagged pedestrians as 'loose pages,' and the grid can auto-staple first - who pushed this through, and why hide the paper trail?",
      answers: [
        {
          id: "a1",
          text: "This isn't a weapon; it's stationery diplomacy. We staple panic to the horizon so seniors can nap, while real threats get paper-clipped into a safe timeout.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative
              }
            }
          }
        },
        {
          id: "a2",
          text: "The shield is defensive, tuned like a firm umbrella. Contracts moved quickly under a storm advisory, but every unit must pass a no-mail, no-pedestrian filter before rollout.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "a3",
          text: "We admit the law never imagined aerial stapling. We're drafting a temporary un-staple order and will brief oversight courts before any automated binding proceeds.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Neutral
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "a4",
          text: "Units are geofenced to rooftops and public boxes, with beak recognition for birds and a wide human buffer. Pilot logs exist and will be posted with timestamps and locations.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Neutral
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.StronglyPositive
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "On procurement: which vendors punched the rush job, what tests failed quietly, and did lobbyists paperclip themselves to the bid binder?",
        answers: [
          {
            id: "a5",
            text: "Categories, not cronies: we solicited three prototype lines - ClipCore, FastBind, and QuietQuill equivalents - and scored them blind. Trials flagged anomalies; the vendor list and test matrix will be released this week.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "a6",
            text: "No lobbyist stapled themselves to the bid binder. Contacts are logged, donor walls were a thousand feet away, and conflicts triggered recusal by default.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                }
              }
            }
          },
          {
            id: "a7",
            text: "An independent test lab runs our stapling simulator and tries to break it daily. Unions signed off on overtime, and penalties apply if a unit so much as crinkles a postcard.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                }
              }
            }
          },
          {
            id: "a8",
            text: "We're not auditioning for Brand Idol. If a box hums, doesn't chase mail, and takes a polite rainstorm, it's in; if not, it's back to the supply closet for more coffee.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "That quiet clause lets the grid auto-staple first and ask later; who signed that, what is the kill-switch, and where is the due-process inking?",
        answers: [
          {
            id: "a9",
            text: "That clause was legalese written for a storm scenario and is now paused. We will require pre-action review, publish thresholds, and submit the language to open comment before any switch flips.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "a10",
            text: "Homeland ops here: the grid is dual-key with human confirm, geofenced, and capped by a three-strike jam failsafe. The phrase 'ask later' is wrong; logs ping oversight in real time with a ten-minute hold.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Homeland
          },
          {
            id: "a11",
            text: "We don't staple first; we staple never unless a toaster tries to wrestle a runway. The clause was a hammock of hypotheticals, and we've replaced it with a seatbelt you can actually see.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Neutral
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                }
              }
            }
          },
          {
            id: "a12",
            text: "Operationally, any binding routine requires two officers and a visual verification. The so-called auto mode is restricted to simulations and maintenance pings.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
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
        text: "In trials, pedestrians were tagged as 'loose pages.' What failed in the model, who owned the training data, and how are you de-binding those errors?",
        answers: [
          {
            id: "a13",
            text: "The model inherited a bad 'loose page' tag from a traffic dataset and overfit to flapping coats. We've purged that label, retrained on human silhouettes, and frozen triggers near crosswalks.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral
                }
              }
            }
          },
          {
            id: "a14",
            text: "We added crosswalk and stroller features, taught it that birds are friends, and tuned for bags and flags. False positives dropped below 0.2%, and the 'loose page' label is retired.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive
                }
              }
            }
          },
          {
            id: "a15",
            text: "We expanded the human buffer radius, added a hardware interlock, and require a second sensor classifying 'inanimate' before any binding. Red-teams are now paid to make it panic.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                }
              }
            }
          },
          {
            id: "a16",
            text: "The phrase suggests people were stapled; they were not. It was a debug label in a sandbox, which is exactly where you want ugly words to live while engineers disinfect them.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Neutral
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "Due process: will there be warrants, appeals for mistaken bindings, and a public log that isn't just redacted napkins?",
        answers: [
          {
            id: "a17",
            text: "Early drafts lacked an appeals ladder, and that's on us. The new rule requires pre-action review except for jam-clears, plus a same-day un-staple petition with judicial eyes within 72 hours.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral
                }
              }
            }
          },
          {
            id: "a18",
            text: "There will be warrants for any elevated action, a 10-minute pause-and-notify, and an un-staple hotline staffed by humans. A public log posts timestamps, locations, and system reasons.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive
                }
              }
            }
          },
          {
            id: "a19",
            text: "We are not building a people registry. Logs capture system health and coarse grid points, not identities, faces, or mail contents, and retention is short on purpose.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Neutral
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                }
              }
            }
          },
          {
            id: "a20",
            text: "An independent Oversight Binder will spot-check weekly, issue public stapler scores, and publish violations. Seniors' naps and snail mail remain gloriously undisturbed.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative
                }
              }
            }
          }
        ]
      }
    ]
  }
};
