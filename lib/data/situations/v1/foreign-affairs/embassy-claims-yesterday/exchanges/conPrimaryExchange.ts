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
      id: "q1",
      text: "With the Yesterdayian Embassy claiming perpetual 'yesterday' and jamming vetting, who left time unsecured, and how will you unjam flights and treaties?",
      answers: [
        {
          id: "q1_a1",
          text: "We won't let a consulate outrank the calendar. We'll schedule today twice, veto any Monday they file retroactively, and fine anyone boarding from a day that no longer exists.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.MajorPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.MajorNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Decisive assertion over time sovereignty reassures travelers."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This sidelining of process risks allies viewing us as abrupt."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "q1_a2",
          text: "Retro visas don't board future flights. We're issuing time-neutral entry stamps, pausing backdated treaty reopenings, and coordinating a 24-hour truce with calendars while we validate manifests.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.MajorNegative,
            o3: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Legalistic framing may appear timid amid widespread delays."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear rules of boarding strengthen credibility with carriers."
              }
            }
          }
        },
        {
          id: "q1_a3",
          text: "Travelers won't be stranded in yesterday's duty-free. We're stabilizing schedules, honoring valid bookings, and issuing automatic waivers so families aren't graded by the space-time continuum.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Soft assurances can read as evasive under operational stress."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Targeted protections for travelers reduce immediate harm."
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "q1_a4",
          text: "The Interagency Clock Council sets standards across agencies, not this podium. They certified the calendar guardrails, and they'll brief as soon as their sundials stop pouting.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Setting standards signals control without overreach."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Interagency jargon could frustrate partners seeking relief."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "You've vowed to overrule 'yesterday.' What legal switch flips that, and who eats the delay costs while you re-sync clocks-taxpayers, carriers, or Yesterdayia?",
        answers: [
          {
            id: "q2_a1",
            text: "Authority rests in the Time Reciprocity Act and standard consular practice. We can suspend recognition of backdated stamps and require time-stable manifests, minimizing costs with targeted waivers.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Detailing statutes can sound slow while gates are jammed."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Grounding action in law stabilizes coordination globally."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "q2_a2",
            text: "No, we didn't leave time unlocked. We ran temporal tabletop drills last year; the mission exploited a loophole no one else was unserious enough to pretend was real.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Firm denial projects confidence against speculative blame."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Dismissiveness risks alienating airports needing guidance."
                }
              }
            }
          },
          {
            id: "q2_a3",
            text: "Cost splits belong with the Weekday Appropriations Board and the carriers. We'll propose a fair share, but I won't bargain Monday versus Tuesday from this podium.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Deflection suggests avoidance of responsibility to act."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Channeling costs clarifies roles despite public impatience."
                }
              }
            }
          },
          {
            id: "q2_a4",
            text: "As the State Ministry lead, we've directed ports to accept only time-neutral documents and to escrow retroactive treaty notes. We will brief all missions today on compliance deadlines.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Asserting authority helps pace the response despite risk."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Centralizing orders can crowd out local problem solving."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.State
          }
        ]
      },
      {
        id: "q3",
        text: "Families stuck in terminals want receipts, not riddles: will tickets dated 'tomorrow' be honored, and why wasn't calendar security treated like border security?",
        answers: [
          {
            id: "q3_a1",
            text: "Tickets dated tomorrow remain valid. Carriers are instructed to honor itineraries within a 72-hour window and waive change fees triggered by yesterday-based mischief.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Promises without teeth may feel hollow to stranded families."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Enforcing ticket validity eases pressure at the gates."
                }
              }
            }
          },
          {
            id: "q3_a2",
            text: "We assumed boarding groups wouldn't unionize against the arrow of time. That was optimistic, and we're tightening calendar controls so no gate agent has to adjudicate metaphysics.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning flaws shows candor that can reset expectations."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admitting missteps may weaken our leverage in court."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "q3_a3",
            text: "If a mission wants to live in yesterday, they can run baggage claim in a museum. Our ports run on real time, and we'll enforce that at the jet bridge.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Confronting misuse signals resolve to protect calendars."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Punitive posture risks retaliatory slowdowns by partners."
                }
              }
            }
          },
          {
            id: "q3_a4",
            text: "We're finalizing a standard refund-and-reaccommodation rule tied to document validity, not timestamps. Expect uniform passenger treatment, not terminal roulette.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Process focus during crisis can look bureaucratic."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Standardized refunds provide immediate, fair relief."
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
        text: "If the embassy keeps time-squatting, will you restrict privileges, freeze 'prior days' at the gate, or sanction yesterdayed documents until compliance returns?",
        answers: [
          {
            id: "q4_a1",
            text: "We can narrow diplomatic access to essentials, suspend acceptance of backdated notes, and require present-day seals on all traffic until audits verify compliance.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Restrictive tone may escalate faster than we can manage."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Measured limits apply pressure while honoring duties."
                }
              }
            }
          },
          {
            id: "q4_a2",
            text: "Try to colonize yesterday and we'll meet you in today-twice. We'll escalate from warnings to port-of-entry denials for paperwork treating the clock like a suggestion.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Strong warning aligns with public demand for firmness."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Sharp rhetoric can complicate backchannel de-escalation."
                }
              }
            }
          },
          {
            id: "q4_a3",
            text: "We'll punish the gimmick, not the traveler. Essential exchanges continue while time-hopping documents are quarantined out of queues.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Empathy may be read as softness in a sovereignty fight."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Traveler carve-outs keep humanity at the center of policy."
                }
              }
            }
          },
          {
            id: "q4_a4",
            text: "Sanctions menus run through the Calendar Sanctions Committee, which moves faster than yesterday and slower than a meme. They'll deliver options on schedule.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Process clarity steadies expectations amid shifting facts."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Procedural talk can stall momentum for compliance."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "Beyond triage, what's the fix to secure time itself-audits, calendar patching, or a temporal TSA-so we don't budget for delays that already happened?",
        answers: [
          {
            id: "q5_a1",
            text: "A time-security audit is underway to patch calendar systems, add time-neutral validation, and train officers to spot retro-stamps. We'll publish results with implementation dates.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Audits can read as delay while disruptions cascade."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Patching standards quickly reduces repeat incidents."
                }
              }
            }
          },
          {
            id: "q5_a2",
            text: "We'll keep travel predictable and budgets sane. No one should lose a vacation to a philosophical prank, and no city will fund delays that haven't technically happened.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances risk overpromising if timelines slip again."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calm tone can stabilize markets during uncertain windows."
                }
              }
            }
          },
          {
            id: "q5_a3",
            text: "We are not creating a temporal TSA line where you surrender your watch and dignity. Smart checks at the document layer beat theater at the checkpoint.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Rejecting new bureaucracy appeals to efficiency voters."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Hand-waving invites loopholes and uneven enforcement."
                }
              }
            }
          },
          {
            id: "q5_a4",
            text: "We'll defend the calendar like a border. If treaties are filed from yesterday to win today, expect tariffs in the only currency that matters: on-time access.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Forceful defense of calendars rallies public confidence."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hardline stance risks fracture with neutral partners."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
