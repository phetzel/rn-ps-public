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
      id: "q_root",
      text: "With the Official Scent rolling out, who sourced the oils, which diffuser deals skipped bids and why is power draw surging to fog parks and stations?",
      answers: [
        {
          id: "a_r1",
          text: "Critics can meet us at dawn for a sniff duel; the nose that cries first yields the mic. We backed a bold idea, and we’re not letting a chorus of phantom sneezes run the country.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "He applauds the combative tone and vows to win the sniff duel."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "State worries aroma diplomacy is sidelined by chest-thumping."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "We’re calling this aroma diplomacy: fewer press releases, more peace lilies. Our scent team is meeting stakeholders, and until lawsuits clear, we’ll issue nasal visas, not mea culpas.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "He dislikes deflection without data and demands firmer specifics."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "State welcomes the diplomatic framing and leans into the rollout."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "Supplier lists, blending standards, and procurement memos will post this week, with formulas redacted for safety. An outside auditor is reviewing the no-bid rationale, and we’ll brief you.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "He approves the transparency push as proof of control."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "State fears procurement details could complicate partnerships."
              }
            }
          },
          followUpId: "q_s1"
        },
        {
          id: "a_r4",
          text: "Grid models show a tight power cap with shutoff windows and site-level timers. We’re pairing pilots with renewables and public reporting, so nobody’s perfume bill replaces streetlights.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He frets that power limits read as defensive and weak."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "State credits the steady tone for calming external counterparts."
              }
            }
          },
          followUpId: "q_s2"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_s1",
        text: "Name the farms and blenders behind the scent, who lobbied for it, and why diffuser contracts skipped bids; did officials dine with scent reps beforehand?",
        answers: [
          {
            id: "a_s1_1",
            text: "The vendor registry names farms, a certified blender, and diffuser integrators; lobbying contacts will be logged in a searchable ledger. The no-bid cite was safety + speed; docs follow.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He sees the registry details as dry and potentially dull."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State values the procedural tone to steady external narratives."
                }
              }
            },
            followUpId: "q_t1"
          },
          {
            id: "a_s1_2",
            text: "On behalf of State, we confirm sourcing met trade and traceability rules, with aroma diplomacy in mind. We’ll convene a nose summit with suppliers and publish a cross-border compliance note.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "He thinks boilerplate assurances sound evasive under scrutiny."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "State appreciates the authorized signal and trade alignment."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.State
          },
          {
            id: "a_s1_3",
            text: "No, officials weren’t wined and dined by scent reps. The fanciest perk anyone got was a sample vial and municipal tap water, which, for the record, smells like government transparency.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He welcomes the denial but worries it invites fact-checking."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "State bristles at categorical denials that box us in later."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If a lobbyist seasoned the recipe, name the note and the meeting. Otherwise, let’s stop ghost-sniffing conspiracies and judge the program by documents, not dramatised rumor.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "He likes the challenge and shows willingness to confront."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State warns the combative stance can escalate industry tensions."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_s2",
        text: "What’s the energy footprint to pipe Eau Official, who pays, and what reviews back it up; are peak-hour blasts throttled or is the grid now a cologne machine?",
        answers: [
          {
            id: "a_s2_1",
            text: "Preliminary audits show sub-kilowatt draws per unit and duty cycles under 40 percent. We’ll release site meter data, costs by square foot, and third-party verification next week.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He doubts preliminary audits will satisfy energy critics."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State supports measured data that keeps options open."
                }
              }
            },
            followUpId: "q_t2"
          },
          {
            id: "a_s2_2",
            text: "Units idle on low-traffic hours, throttle during peaks, and shut off in air quality alerts. Costs are capped to pilot budgets, not transit, and renewable credits cover the baseline.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "He fears throttling talk concedes weakness on reliability."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "State endorses prudent throttling to safeguard public venues."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "No, the grid isn’t becoming a cologne machine, and nobody’s raiding bus repairs to buy diffusers. The financing is ring-fenced, and penalties don’t kick in if cities opt to pause.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He appreciates the spine but worries tone can sound flippant."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "State flags the denial as risky if later variance emerges."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "If someone can power a plaza on hot takes, we’ll license the technology. Until then, our kilowatt cap stands, and we’ll cut fragrance before we cut lights or safety systems.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "He enjoys the jab, seeing it as confident and disarming."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State sees provocation as risky with regulators watching."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_t1",
        text: "Will you release meeting logs, emails, and sniff notes between officials and scent lobbyists, plus any trips to fragrance farms or junkets tied to the rollout?",
        answers: [
          {
            id: "a_t1_1",
            text: "We’ll publish calendars, attendee lists, and agendas, with redactions for security, plus a log of scent tastings—yes, that’s a thing. Emails will release in batches with a review clock.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He accepts disclosures but expects tight curation and pacing."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State supports publishing logs to preempt foreign rumor mills."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We did find two calendar entries misfiled as “olfactory outreach” that should have been logged as vendor meetings. They’ve been corrected, and the ethics office is retraining staff.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "He winces at the admission and expects corrective follow-ups."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "State appreciates candor to reset trust with counterparts."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Let’s not confuse smelling notes with smoking guns. Staff test stuff; that’s their job. When the paperwork lands, the biggest scandal will be our punctuation in bullet points.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He dislikes the spin and asks for fewer metaphors, more facts."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "State sees deflection eroding credibility with allied ministers."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "No paid junkets were authorized, and any field visits used standard per diem rules. Compliance signed off before tickets were booked, and we’ll post receipts with the log.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "He likes the guardrails but fears it reads as hedging."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State credits assurances for stabilizing intercity coordination."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_t2",
        text: "Provide kWh per diffuser, lifecycle emissions, and cost per square foot. Will units shut off during smog alerts, and can cities opt out without penalties?",
        answers: [
          {
            id: "a_t2_1",
            text: "Average draw is 0.6 kW per active unit at 40 percent duty, with lifecycle emissions offset by local solar and waste-heat recovery. Costs run under one coin per square foot monthly.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He wants bolder numbers and hates hedged ranges."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State favors clear metrics that travel well in briefings."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "There are no penalties for cities that opt out, and shutdowns during smog alerts are automatic. Vendors don’t get paid for downtime, so there’s no incentive to over-spray.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "He doubts flat denials persuade and prefers qualified lines."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "State likes opt-out flexibility as a diplomatic pressure valve."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Let’s keep perspective: the loudest energy hog here is the rumor mill. The program sunsets if targets aren’t met, and the sunset doesn’t require candles or incense to announce itself.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He dislikes the swipe at critics; it can look thin-skinned."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "State fears deflection invites more scrutiny from partners."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We built an emergency kill switch across sites, audited weekly. If the grid hiccups, scent goes silent first, and riders get clean air plus intact schedules, not perfume-powered delays.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "He approves of the safety switch as decisive and practical."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State backs emergency controls to reassure neighboring cities."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
