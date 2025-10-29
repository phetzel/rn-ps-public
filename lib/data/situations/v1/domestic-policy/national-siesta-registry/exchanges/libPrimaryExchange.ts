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
      text: "Why does the Siesta Registry make naps feel like state secrets, especially for low-income families told to log dreams for 'nap-alert' readiness?",
      answers: [
        {
          id: "a_r1",
          text: "If critics think this is surveillance, I challenge them to a televised power-nap duel; winner sets policy. Bring your blanket, and yes, we’ll stream the snore decibels.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Bold challenge reframes debate as confidence, not panic."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Trivializes readiness; undercuts our civil defense framing."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Undermines wellness message with theatrics and risk of mockery."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r2",
          text: "It’s a wellness snapshot, not dream surveillance. We log duration and timing to spot community fatigue, and households can opt out of narrative notes entirely.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Sounds bureaucratic while outrage builds over privacy intrusions."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft tone weakens the link to alertness and community drills."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear reassurance calms health fears and stabilizes stakeholders."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r3",
          text: "Synchronizing community rest helps keep emergency drills in rhythm and staffing alert. No dreams, no content, just nap windows to coordinate sirens and responders.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Overemphasis on logistics makes you seem aloof to equity concerns."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Strong alignment with civil defense narrative boosts credibility."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Safety framing crowds out our wellness focus and patient trust."
              }
            }
          }
        },
        {
          id: "a_r4",
          text: "We’re finalizing the rule text and consultation memos; half the acronyms are still asleep. Let us publish the plain-language guide this week, then grill us.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Deflection reads evasive and fuels surveillance narratives."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Delay talk signals weak enforcement posture during drills."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Acknowledging process may slightly ease anxiety among families."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "If a household misses a nap report, are they fined, flagged, or tucked in by marshals, and how does that burden hit already stretched budgets?",
        answers: [
          {
            id: "a_s1_1",
            text: "There are no fines for missed days in the baseline rollout. Warnings are automated nudges, and nobody is getting a midnight tuck-in from anyone with a badge.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denial without remedies feels dismissive of low-income burdens."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarifying no fines reduces fear and stabilizes compliance."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Missed support signals insensitivity to health stressors."
                }
              }
            }
          },
          {
            id: "a_s1_2",
            text: "If a report is missed for weeks, local health partners offer support calls, not penalties, targeted to neighborhoods requesting help. Pilot data shows reminders reduce gaps.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Procedural focus feels cold while households worry about costs."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Operational clarity strengthens lawful, measured response."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Escalation language heightens anxiety among vulnerable families."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Any scary scenario from early pilots predates the current guidance and was yanked. We’ll publish the corrective memo before the next nap cycle, and you can measure it.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Deflection invites suspicion about enforcement overreach."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dodging pilots weakens our public safety case with partners."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Redirect keeps some attention on updated health standards."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_4",
            text: "The program waives costs for low-income households and bans fee-based compliance tools. Help centers will file reports by phone so families aren’t juggling apps.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Concession hints at backtracking under pressure from critics."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Waivers may hamper uniform readiness across jurisdictions."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strong relief signal supports equity and public health compliance."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "What exactly does the registry collect—yawns, pillow brands, dream keywords—and who sees it, given 'trust us' has a long, drowsy rap sheet?",
        answers: [
          {
            id: "a_s2_1",
            text: "We collect timestamp, duration, and optional ZIP code, not dreams or audio. Access is limited to de-identified dashboards with legal firewalls and a firm sunset clause.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Sparse details fuel doubts about scope and intent."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limited granularity may hinder alert synchronization claims."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear limits on fields ease privacy and wellness concerns."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "Data flows to the Wellness Bureau with strict role-based access; emergency use requires a signed activation. Vendor logs are auditable and published quarterly.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process jargon risks alienating skeptical audiences."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Tight access controls support our security governance story."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Bureaucratic flowchart distracts from human-centered health aims."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_3",
            text: "No agency is scraping dream keywords or pillow brands; that rumor came from a parody instruction sheet. The real form is five fields and a big skip button.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial invites fact-checks if any drift appears."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Categorical tone ties our hands if features evolve."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Plain assurance reduces fears of intrusive dream tracking."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "The pilot intake form asked for too much context, and we cut it after feedback. We’re purging unnecessary fields and notifying participants about the change.",
            type: AnswerType.Admit,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Admission validates critics and erodes program credibility."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning mistakes can reset trust with safety partners."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledgment stokes concern about historical overreach."
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
        text: "If enforcement is 'light touch,' why are pilots reporting 3 a.m. knock-and-snore checks, and will low-income families be audited for insomnia?",
        answers: [
          {
            id: "a_t1_1",
            text: "No federal team is authorized to visit at 3 a.m. over naps. If you saw that, it was an overzealous local pilot we suspended and retrained out of existence.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Firm denial risks blowback if a single incident surfaces."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overly categorical line may constrain lawful outreach."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Assurance helps anxious families sleep without dread."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Compliance contacts are digital first, then daytime phone calls through community clinics. Field visits need layered approval and occur only when households request wellness checks.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Policy-speak lacks compassion for people feeling watched."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear sequencing supports proportionate enforcement narrative."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Mention of contact steps may alarm insomnia-prone groups."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We are codifying a hard ban on nocturnal outreach and a warning-only default. Families should sleep, not fear a knock during REM.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Rulemaking promise sounds reactive to mounting criticism."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ban could limit flexibility during real emergency drills."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Codified protections build trust in health-first operations."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "If anyone swears there was a midnight raid, give us the address and we’ll bring cameras and coffee to prove policy in daylight. Our apology will be as loud as the rumor.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Confident challenge projects leadership and ownership."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontational tone undercuts cooperative readiness ethos."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Provocation conflicts with our soothing health narrative."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Which private vendors built the nap-tracking app, what guardrails stop dream-mining, and do algorithms label naps 'productive' versus 'seditious yawns'?",
        answers: [
          {
            id: "a_t2_1",
            text: "The app was built by two domestic small firms under open-source licenses, with code posted for review. No algorithm rates naps; it timestamps and aggregates.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Vendor talk without accountability reads transactional."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Domestic small firms bolster supply chain security optics."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tech details overshadow patient safeguards and outcomes."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "There is no dream-mining or behavioral scoring, and ad-tracking SDKs are banned. Contracts carry kill switches if a vendor tries to sneak in monetization.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blanket denial invites future contradiction by audits."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "If leaks occur, our security credibility takes a hit."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Stated guardrails ease fears about behavioral scoring."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Independent audits test for bias and leaks, and results go public by default. We would sooner can the app than label anyone’s yawn as seditious.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Promises of audits feel routine rather than urgent."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "External checks may slow response during incidents."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Independent oversight calms clinicians and families."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Early prototypes flirted with a productivity tag, and we scrapped it after community pushback. Future metrics require feature flags and public comment first.",
            type: AnswerType.Admit,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Admission concedes troubling intent in early designs."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Course correction shows adaptive, responsible governance."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Revealed flirtation stirs new privacy and stigma worries."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
