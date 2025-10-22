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
      text: "On the 'Block Embassy' rollout, who bagged the consulate contracts, who drafted the immunity perks, and what complaint quotas hide in the memos?",
      answers: [
        {
          id: "a_r1",
          text: "Yes—we piloted neighborhood diplomacy because cul-de-sac feuds were burning hours and budgets. If a porch-flag summit prevents a pothole war, that’s a win for taxpayers.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.StrongPositive,
            outcome_2: OutcomeModifierWeight.StrongNegative,
            outcome_3: OutcomeModifierWeight.SlightPositive,
            outcome_4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Owning the pilot frames the idea as intentional and whimsical."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting origin without detail risks procurement scrutiny."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Contracts ran through the public bid portal; mediation immunity is narrow and time-bound; complaint benchmarks guide triage, not quotas. We can walk you through the line items.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.StrongNegative,
            outcome_2: OutcomeModifierWeight.StrongPositive,
            outcome_3: OutcomeModifierWeight.SlightNegative,
            outcome_4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Shifting to process talk makes the President seem evasive."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear bidding details bolster the department’s credibility."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "We won’t litigate half-baked drafts at the podium. Our auditors—and their very loud staplers—are chewing through the paper trail and will beep if anything smells smoky.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.ModeratePositive,
            outcome_2: OutcomeModifierWeight.ModerateNegative,
            outcome_3: OutcomeModifierWeight.ModerateNegative,
            outcome_4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Humor and humility can soften backlash despite deflection."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Dodging drafts invites suspicion about the program’s design."
              }
            }
          }
        },
        {
          id: "a_r4",
          text: "If someone thinks specs were written for a buddy, bring the clause and the calendar, not vibes. Meanwhile, residents report fewer driveway standoffs this month.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.ModerateNegative,
            outcome_2: OutcomeModifierWeight.ModeratePositive,
            outcome_3: OutcomeModifierWeight.ModeratePositive,
            outcome_4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Confrontational tone could appear defensive amid contract questions."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Standing firm may reassure operations but invites legislative pushback."
              }
            }
          },
          followUpId: "q_sec2"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Procurement files list inflatable consulate kits and fridge-magnet visas. Which firms actually won, why the compressed timeline, and did specs mirror a single vendor?",
        answers: [
          {
            id: "a_s1_1",
            text: "Three firms won: Diploflate Works (tents), Neighborly Systems (scheduling), and Magnetica Badges (visas). We used a 15-day competitive window and performance specs, not brand locks.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModeratePositive,
              outcome_2: OutcomeModifierWeight.ModerateNegative,
              outcome_3: OutcomeModifierWeight.StrongPositive,
              outcome_4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Technical detail from staff sidelines the President’s voice."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparent winners and scope help the agency look competent."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "No, the requirements didn’t mirror a pet vendor. They focused on wind rating, accessibility, and repair times, not model numbers. Independent spec writers handled the draft.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModerateNegative,
              outcome_2: OutcomeModifierWeight.ModeratePositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Firm denial signals confidence if later facts align."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Flat denials can backfire if specs appear too narrow."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Clawbacks and warranty bonds cover flops; if an inflatable chancery faceplants in a breeze, taxpayers aren’t left holding the air pump. Missed service levels trigger credits.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightPositive,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.SlightNegative,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Proactive risk controls read as responsible executive oversight."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Pointing to bonds may imply past missteps in procurement."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If your evidence is a brochures-and-donuts demo day, that’s marketing theater, not procurement law. Show us a line that locks competitors out, or retire the insinuation.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightNegative,
              outcome_2: OutcomeModifierWeight.SlightNegative,
              outcome_3: OutcomeModifierWeight.SlightPositive,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Snapping at reporters risks amplifying the controversy."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A sharper tone might deter weak allegations temporarily."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Immunity perks and complaint targets read like cosplay diplomacy. Who authored the carve-outs, do targets gamify conflict, and can ambassadors dodge tickets with a sash?",
        answers: [
          {
            id: "a_s2_1",
            text: "As the State lead, we can confirm limited-use immunity covers only scheduled mediation acts, not parking or HOA drama. Drafts came from career counsel; targets track response time, not volume. We’ll brief the rubric.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.ModerateNegative,
              outcome_3: OutcomeModifierWeight.SlightPositive,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Letting the agency lead can make the President look detached."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clarifying limits shows prudent policy design and restraint."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.State,
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "Off-duty means zero protection—citations stick. Abuse voids perks and triggers removal. Quotas are banned; the dashboard measures time-to-mediation and resolution quality, not complaint counts.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongNegative,
              outcome_2: OutcomeModifierWeight.ModeratePositive,
              outcome_3: OutcomeModifierWeight.SlightNegative,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Bright lines on conduct match the President’s stated ethos."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Over-clarifying may concede prior ambiguity in rules."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "No one gets to flash a sash to ignore paint codes. Every perk is logged, reviewed monthly, and yanked for misuse. Residents can file abuses without needing a decoder ring.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModeratePositive,
              outcome_2: OutcomeModifierWeight.StrongNegative,
              outcome_3: OutcomeModifierWeight.ModerateNegative,
              outcome_4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Firm guardrails project accountability and neighborhood focus."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Assurances without names may read like bureaucratic spin."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "We’re not naming drafters from footnotes at a mic. The oversight board has the roster and red pens; they enjoy red pens, so we let them do their very favorite thing.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModerateNegative,
              outcome_2: OutcomeModifierWeight.StrongPositive,
              outcome_3: OutcomeModifierWeight.ModeratePositive,
              outcome_4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Refusing authorship details risks a secrecy narrative."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Protecting staff may keep morale stable during scrutiny."
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
        text: "Those demos looked pre-baked. Who sat on the selection panel, what warranty backs the inflatable walls, and were any recent ex-staffers lobbying the committee?",
        answers: [
          {
            id: "a_t1_1",
            text: "The panel mixed procurement officers, a disability access rep, and two residents selected by lottery. Walls carry two-year wind and puncture coverage with on-site patch kits and swap-outs.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModeratePositive,
              outcome_2: OutcomeModifierWeight.StrongNegative,
              outcome_3: OutcomeModifierWeight.SlightPositive,
              outcome_4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Process-heavy answers can diminish presidential leadership image."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Diverse panel composition supports fairness in selection."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "No recent ex-staffers lobbied the committee. Revolving-door cooling periods apply, and we bounced one calendar invite for skirting close. The message was sent: wait your turn.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModerateNegative,
              outcome_2: OutcomeModifierWeight.StrongPositive,
              outcome_3: OutcomeModifierWeight.SlightNegative,
              outcome_4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Brisk denial suggests confidence and readiness to be audited."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "If lobbying emerges, the flat denial damages credibility."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We did accept vendor demos—under recorded, equal-time rules—because touching vinyl beats reading specs. That said, scoring used blind criteria; brand names were masked.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.ModeratePositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Owning the demos shows transparency and practical testing."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admitting pre-bake feeds claims of tilted evaluation."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Every contract includes a kill switch and repurchase rights. If a tent wheezes, the vendor replaces it within 48 hours or we claw back fees plus a ‘you made us camp’ penalty.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongNegative,
              outcome_2: OutcomeModifierWeight.ModerateNegative,
              outcome_3: OutcomeModifierWeight.StrongPositive,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Focusing on safeguards may sound reactive instead of visionary."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Contract remedies reassure residents about fiscal prudence."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "If a block ambassador barters leniency for croissants or delays trash pickup for 'peace,' who investigates, who can fire them, and where do residents appeal for relief?",
        answers: [
          {
            id: "a_t2_1",
            text: "Abuse claims go to the Inspector for Small Diplomacies, with 72-hour triage and public logs. The city manager can suspend; State can decertify; residents can appeal to the Ombuds Hut.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightPositive,
              outcome_2: OutcomeModifierWeight.ModerateNegative,
              outcome_3: OutcomeModifierWeight.StrongPositive,
              outcome_4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Deferring to inspectors risks appearing hands-off on ethics."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear intake and oversight channels inspire trust."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "If someone is trading pastries for power, bring receipts—literal receipts. We’ll publish them and the reprimand. Sunshine robs even the stinkiest croissant of mystique.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightNegative,
              outcome_2: OutcomeModifierWeight.ModeratePositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Demanding evidence aligns with due process and fairness."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Aggressive tone may chill reports and harm program signals."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "We built a fast eject button: two substantiated abuses and the sash goes in a drawer. Interim mediators step in so disputes get handled without drama or pastry crumbs.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.StrongNegative,
              outcome_3: OutcomeModifierWeight.SlightNegative,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Swift removal standard signals zero tolerance for abuse."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Eject thresholds could be criticized as too lenient or harsh."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Ambassadors can’t delay municipal services. The playbook forbids interference with sanitation, parking, or permits; violations jump straight to discipline without mediation theater.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongNegative,
              outcome_2: OutcomeModifierWeight.StrongPositive,
              outcome_3: OutcomeModifierWeight.SlightPositive,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Rigid denial risks blame if services appear influenced later."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Reiterating limits clarifies scope to frontline partners."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
