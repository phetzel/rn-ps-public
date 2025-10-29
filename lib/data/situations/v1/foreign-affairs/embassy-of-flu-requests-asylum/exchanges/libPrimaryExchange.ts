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
      text: "Will you recognize the \"Embassy of Flu,\" or will security theater keep vaccines behind turnstiles while asylum seekers wait for oversight and legal protection?",
      answers: [
        {
          id: "a1",
          text: "The President will recognize the barge if it wins a public health decathlon—testing, tracing, and not capsizing the handwashing station. Meanwhile, we keep aid flowing through lawful, humane channels.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Challenging publicly projects control and creative resolve."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Showmanship risks distorting clinical priorities and consent."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "A contest frame can blur legal lines at busy ports."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "a2",
          text: "Our health agency is coordinating dose allocations, cold-chain custody, and informed consent with independent clinicians on shore. Recognition theatrics do not alter medical protocols or patient rights.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Technics without theater may appear passive amid spectacle."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear dosing plans reassure clinicians and patients."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Health-first framing can constrain rapid screening actions."
              }
            }
          }
        },
        {
          id: "a3",
          text: "The border agency does not recognize barges as sovereign anything, and we won't stamp a passport on a life raft. We will screen every crate and gull while ensuring lawful entry paths and humane processing.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "A hard legal line can read as cold during a health crisis."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Non-recognition complicates cooperative vaccine workflows."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Affirms jurisdiction and keeps lanes lawful and orderly."
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "a4",
          text: "Asylum-seekers will get vaccines, counsel, and shelter without performing for a camera. Health equity guides the response, not the barge’s flag, mascot, or catchy sea shanty.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.MajorPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Promises without pageantry may lose narrative momentum."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Access guarantees center equity in service delivery."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances may slow enforcement tempo at the docks."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "If a decathlon is required, who sets the rules and ensures doses, consent, and translators stay under health-agency oversight rather than a reality-show referee?",
        answers: [
          {
            id: "a5",
            text: "The national health agency sets the rubric with outside epidemiologists, and monitors consent in plain language with certified translators. Cold-chain handlers log custody on arrival, not on a stage.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Delegating rules may look cautious amid televised drama."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Health-led rubric secures consent, translators, and safety."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clinical control can limit flexible screening operations."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "a6",
            text: "No one’s care depends on their obstacle-course time. The decathlon is a civic pep rally; medical decisions and data stay under clinical authority and privacy law, not a producer’s clipboard.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Downplaying the event can seem evasive in the moment."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Separating care from contests protects patient rights."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Looser ties to checkpoints can reduce deterrence effects."
                }
              }
            }
          },
          {
            id: "a7",
            text: "We will brief the scoring cards after stakeholder consultations, including folks who own whistles and folks who actually vaccinate. Today is about getting supplies to the dock safely.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process vagueness fuels suspicion about the decathlon."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delays in criteria cloud clinical oversight readiness."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Briefing later preserves tactical discretion at ports."
                }
              }
            }
          },
          {
            id: "a8",
            text: "We built the decathlon overnight to redirect chaos into coordination, and yes, we’re refining fairness metrics. If an event looks gimmicky, we will cut it faster than a confetti cannon.",
            type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Owning the stunt invites blame if outcomes sour quickly."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rushed design heightens risk of protocol deviations."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Redirecting chaos buys time for layered screening."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "Ports now resemble parliaments; can the border agency deny barge-statehood while still guaranteeing timely asylum intake, counsel access, and non-punitive health checks?",
        answers: [
          {
            id: "a9",
            text: "We deny barge-statehood and keep maritime cosplay outside our legal framework. Screening targets contraband and pathogens, not people seeking refuge, and intake proceeds with counsel and translation on site.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Firm denial may appear unsympathetic to asylum needs."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Legal clarity still leaves gaps in clinical logistics."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Protects sovereignty and structures orderly intake."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "a10",
            text: "Asylum claims are handled by civil officers with interpreters, child specialists, and medical staff separate from enforcement. Health checks are voluntary, privacy-protected, and never a condition for filing.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Procedural language can look aloof in a vivid crisis."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Detailed intake steps uphold consent and monitoring."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Extra process may slow throughput at crowded gates."
                }
              }
            }
          },
          {
            id: "a11",
            text: "Nobody is turned away for lacking papers, proof of shots, or a catchy anthem. Families are sheltered first, lawyers have access, and our tents are checkpoints for rights, not punishment.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances risk overpromising under field constraints."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Emphasis on care reduces fear among vulnerable groups."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Non-punitive checks can weaken security posture."
                }
              }
            }
          },
          {
            id: "a12",
            text: "If the barge wants a flag ceremony, it can win it with transparency, not fog machines. Until then, we challenge them to meet our outbreak drills while we uphold asylum law without theatrics.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Competitive framing keeps attention and leverage alive."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Gamesmanship can erode clinical neutrality and trust."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Contests complicate enforcement optics and duties."
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
        text: "Walk us through the aid pipeline—dose allocation, cold-chain custody, translators, monitoring—and how you’ll keep show elements from contaminating clinical work.",
        answers: [
          {
            id: "a13",
            text: "Doses are staged at regional depots, escorted by neutral medics, and logged by lot at the dock. Consent is obtained with certified translators, and observers monitor for reactions in a quiet, non-filmed zone.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical walkthroughs can feel flat against the spectacle."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "End-to-end chain controls bolster safety and equity."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid protocols may constrain adaptive inspections."
                }
              }
            }
          },
          {
            id: "a14",
            text: "We won’t let cameras inside medical areas, and we won’t let the barge dictate storage or line order. Show segments stop at the rope line so science can breathe without applause cues.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blocking show elements risks looking heavy-handed."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Restrictions can hinder on-site education and consent."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Limits ensure medical areas remain secure and clean."
                }
              }
            }
          },
          {
            id: "a15",
            text: "If the music swells, the needles stop. Clinical teams control the tempo, and every patient gets clear explanations, water, and a chair before, during, and after their shot.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Halting for theatrics may be read as loss of control."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clinical veto power prioritizes patient welfare."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Stop-start flow disrupts checkpoint coordination."
                }
              }
            }
          },
          {
            id: "a16",
            text: "The first rehearsal had too many fog machines near the coolers, and we shut that down. We learned, rewired the space, and put the smoke budget into battery backups and extra translators.",
            type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Admitting errors invites criticism of overall strategy."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confessions can shake clinician confidence briefly."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Acknowledgment enables rapid correction at sites."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "What legal basis denies barge-statehood without sliding into security creep, and what independent oversight will audit checkpoints beyond your own clipboards?",
        answers: [
          {
            id: "a17",
            text: "We’ll let the legal eagles litigate the nautical fan fiction in courtrooms, not at this podium. What matters today is that doors are open, not drawbridges, and people are met by nurses before microphones.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Kicking to courts appears evasive on urgent policy."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Indeterminacy muddies health agency authorities."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Legal distance preserves enforcement flexibility."
                }
              }
            }
          },
          {
            id: "a18",
            text: "Maritime and immigration statutes recognize vessels, not self-declared nations, and require safe, orderly processing guided by humanitarian law. An inspector-general team and civil monitors will audit every checkpoint.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legalese may not quiet fears of creeping security."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Statutory clarity empowers humane, compliant care."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strict readings can narrow responsive options."
                }
              }
            }
          },
          {
            id: "a19",
            text: "There is no sovereign splash zone; denying statehood is baseline law, not bravado. We prohibit mission creep by separating health, asylum, and enforcement lanes and posting those rules in six languages.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard denial risks backlash from rights advocates."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid stance may chill health-seeking behavior."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear boundary-setting deters opportunistic abuses."
                }
              }
            }
          },
          {
            id: "a20",
            text: "Independent monitors will publish findings, complainants will have hotlines that ring to humans, and corrective orders will be public. Rights first, optics second, and no one traded for ratings.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "External audits can expose missteps in real time."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Independent oversight builds trust in care delivery."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Monitors may constrain sensitive checkpoint tactics."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
