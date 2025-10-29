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
      text: "Is the administration letting a 'yesterday' embassy erase travelers and revive dusty treaties, or will it indict the calendar it keeps blaming?",
      answers: [
        {
          id: "a_r1",
          text: "We reject yesterday's claim of sovereignty. The President will schedule today twice and veto Monday so no embassy outranks the calendar or rewrites law by time stunt.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.MajorPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Positions the President as assertively challenging 'yesterday' sovereignty."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State appears combative rather than informative amid travel chaos."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r2",
          text: "Retro visas cannot board future flights; carriers will honor time-neutral stamps issued today. State is negotiating a 24-hour truce with calendars and a grace window for the stranded.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Signals reluctance to confront the embassy head-on during disruption."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "State is seen clarifying rules and calming carriers effectively."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "We're not litigating metaphysics from this podium. The embassy can cosplay yesterday all it wants; our job is to keep people moving under laws that were actually passed.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Shows nimble assertiveness without overcommitting on doctrine."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "State looks evasive and unhelpful while lines grow longer."
              }
            }
          }
        },
        {
          id: "a_r4",
          text: "No one's passport is being erased, and no treaty just sprang from a sepia photo album. We're coordinating across agencies to keep flights and rights firmly located in the present.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Sounds defensive and minimizes public concerns about erasures."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "State offers reassurance paired with operational fixes."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Airlines report passengers with retro-stamped visas 'arrive' from yesterday and vanish in queues. Who gets priority: travelers, schedules, or the law?",
        answers: [
          {
            id: "a_s1_1",
            text: "State has instructed carriers to honor only time-neutral stamps dated 'today' in local time. We are issuing on-arrival conversions and a manifest reconciliation so no one disappears mid-queue.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.MajorPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "President seems procedural, not protective, amid passenger confusion."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State earns credit for practical carrier guidance."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "No traveler will be punished for showing up too early for reality. We will rebook affected passengers at no cost and stamp their status into, well, today, with a paper trail you can actually hold.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.StrongPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Promises sound timid while queues lengthen and stories spread."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Compassionate stance helps defuse traveler anxiety."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Airlines love a good ghost story when overbooking backfires. The facts will be in the bulletin at 3 p.m., complete with sentences that do not argue with clocks.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Quick pivot reads responsive but thin on responsibility."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State looks dismissive of airline issues and traveler stress."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "We underestimated how fast retro-stamps would jam check-in systems. That's on us, and the fix is rolling out now with clearer guidance and a big red 'you are in today' button.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Owning mistakes shows leadership and momentum toward fixes."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admission dents confidence in previous guidance."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "That embassy is reopening treaties from yester-decades. Which obligations just sprang back, and who benefits while you prosecute a desk calendar?",
        answers: [
          {
            id: "a_s2_1",
            text: "Treaties do not reanimate without mutual notice and entry into force. Any 'yesterday' notices are non-operative; we're reviewing dormant texts for modernization, not resurrection, before courts get involved.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral, // 0
            o2: OutcomeModifierWeight.ModerateNegative, // -6
            o3: OutcomeModifierWeight.ModeratePositive // +6
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Legalistic tone risks appearing passive while obligations resurface."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear doctrine steadies agencies confronting claims."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "We're not letting yesterday yank us into antique obligations. We will sunset stale clauses, reject retroactive stunts, and audit every dinosaur treaty that tries to wake up grumpy.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.MajorNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Direct pushback projects resolve against retroactive maneuvers."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State may be seen overstepping beyond explanation."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "No one is cashing an antique treaty in at policy checkout. None of the resurrected documents are in force today because the other party is, inconveniently, in yesterday.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial invites scrutiny if filings surface in court."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State calms partners by rejecting opportunistic claims."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "If the embassy wants to arm-wrestle the Gregorian calendar, they can file a brief with Astronomy. We'll be here governing the part of time with voters in it.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Humor-tinged deflection humanizes while signaling firmness."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State appears flippant about formal process integrity."
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
        text: "What exactly does a 'time-neutral' stamp look like, and how does a 24-hour truce with calendars work for crews stuck between yesterday and boarding?",
        answers: [
          {
            id: "a_t1_1",
            text: "It reads: 'Valid upon issuance, local civil time,' includes a QR anchor to the manifest, and a unique hash tied to gate time. If scanned tomorrow, it still says today because that's the point.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Technical focus alone can feel detached from urgent disruptions."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Operational clarity helps crews and carriers immediately."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Crews are not marooned between days. We've arranged hotel, duty-time waivers, and a simple rule: if your feet are on this side of midnight, so is your paperwork.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassurance absent specifics risks seeming hollow."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Coordinated corridors reflect constructive problem-solving."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We are not entering a treaty with a wall calendar. This is an operational protocol, not diplomacy with stationery, and it expires with the last delayed flight.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Drawing limits underscores authority but may sound curt."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State appears rigid and unconcerned with frontline issues."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "The temporary form number is, yes, scribbled in pencil. We'll codify it by end of day, in ink, in a font that does not look like time travel wrote it.",
            type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Transparency about imperfections boosts trust in the fix."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledgment of improvised forms suggests earlier gaps."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "If 'yesterday' notices don't count, what legal tool will you use to keep old treaties from crawling out of the archives and into court?",
        answers: [
          {
            id: "a_t2_1",
            text: "We'll issue a legal determination and diplomatic note clarifying temporal competence, and back it with guidance to agencies. We are also drafting a narrowly tailored 'temporal non-recognition' statute.",
            type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral, // 0
            o2: OutcomeModifierWeight.MajorNegative, // -12
            o3: OutcomeModifierWeight.MajorPositive // +12
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process talk without swift action looks tentative to courts and carriers."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Coherent legal plan bolsters State's credibility."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Your rights will not change twice overnight. Any dispute over alleged zombie clauses will freeze in place while we resolve jurisdiction in daylight, not in a paradox.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances risk backlash if rulings surprise the public."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Steady messaging eases stakeholders into changes."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "There is no secret handshake with the clock. All actions will be published and reviewable, and none will hinge on what your watch thought it heard yesterday.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.MajorNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm denial shows spine against speculative claims."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State seems inflexible, inviting diplomatic friction."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We should have clarified the time rules before airlines learned calendar math the hard way. That's on us, and we're accelerating the fix so courts aren't left babysitting yesterday.",
            type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.MajorNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Owning missteps frames subsequent actions as corrective leadership."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitted delay highlights coordination shortcomings."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
