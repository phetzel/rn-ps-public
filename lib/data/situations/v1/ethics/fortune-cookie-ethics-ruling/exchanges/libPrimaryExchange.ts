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
      text: "With an ethics board blessing 'symbolic' gifts hidden in fortune cookies, is this just hush-bribes in crunchy drag, and how will you shut it down?",
      answers: [
        {
          id: "a_r1",
          text: "We’re challenging the snack loophole head-on, including filing rebuttals baked into biscotti to make a point. Ethics shouldn’t crunch; they should clarify, and we’ll move to close it fast.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Backs a direct challenge; promises biscotti brief to clarify ethics."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Warns litigation risk if we rush; urges careful record handling."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Monitors for crumb-trails; no immediate action required."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Notes public confusion; ready to support with plain-language tips."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r2",
          text: "On enforcement memos, the Bureau of Justicey Things is reviewing soy-ink that fades if you look at it. We won’t smudge evidence by over-commenting, but nothing about bribery gets a free pass.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Sees deflection as weak; wants visible pushback against the ruling."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Supports measured deflection to protect cases and chain of custody."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Worries mixed signals will hinder field operations this week."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fears silence could fuel health rumor mill about 'edible' NDAs."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "Our Homeland Happenings Directorate is mapping crumb trails with pastry-certified K-9s and metric barking. Cookie concealment leaves residue; our sensors love residue, and audits will, too.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Questions the optics of mapping crumbs without challenging policy."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Notes info-sharing is fine, but guard ongoing investigations."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Welcomes clear briefings; deploys sensors and pastry K-9 guidance."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Aligns on outreach timing; avoids alarming clinical partners."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Health & Helpful Stuff will reassure the public: no policy will let hush-money hide behind low-sodium fortunes. We’ll issue plain-language guidance so seniors and coders can spot the grift.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Sees reassurance alone as complacent while the loophole persists."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Cautions that soft messaging may undercut future courtroom posture."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Can echo safety notes, but needs firmer tasking for field teams."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Appreciates mandate to reassure seniors and coders about cookies."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "If officials can pocket cash as 'paper fillings,' what enforcement teeth remain, and who audits crumbs when communities keep getting shorted?",
        answers: [
          {
            id: "a_s1_1",
            text: "We’re drafting an anti-snack subrule and backing legislation to outlaw concealment-by-confection across agencies. For legal muscle, we’re preparing a challenge through the proper channels.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Backs anti-snack subrule; signals readiness to support legislation."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flags potential conflicts with existing consent decrees; proceed."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Can route audits; awaits clear thresholds for 'symbolic' items."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Preps public FAQs to explain why 'paper fillings' aren’t harmless."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "Inspectors will treat any 'symbolic' item that alters decisions as a reportable gift, cookie or not. New audit protocols track serial crumbs from office to office with timestamped photos.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Wants tougher stance than guidance alone; asks for enforcement."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Supports classifying impact-altering gifts as prohibited outright."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Ready to treat concealment as tamper flags; auditors on standby."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Coordinates with clinics to report suspicious fortune inserts."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Some of this lives with the independent board that thought fortune cookies were handbags with jokes. We won’t prejudge their rehearing, but we’ve slid them a napkin labeled 'No.'",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Rejects passing blame; insists we confront the board directly."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Prefers deflection here to avoid tainting potential challenges."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Notes jurisdictional maze; can still share intel to oversight."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Worried delay worsens community harm and mistrust in programs."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "No, communities aren’t stuck with crumbs while officials get fortunes. Any official caught munching a bribe gets their career toasted, and grants still flow to real needs, not snack drawers.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denial risks credibility; communities need receipts, not spin."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flat denial could backfire in court and with inspectors."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Field teams need tasks, not talking points that deny the issue."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Welcomes clear assurance to residents that aid isn’t being skimmed."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "How will agencies rewrite disclosure rules overnight without turning procurement into a bake sale, and how are whistleblowers protected from edible NDAs?",
        answers: [
          {
            id: "a_s2_1",
            text: "First, emergency guidance bans concealed contents in novelty desserts. Second, a plain box test: if you couldn’t disclose it in a blank envelope, you can’t plate it in a cookie, period.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Supports emergency guidance but warns it must carry penalties."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Stresses evidentiary clarity on what constitutes concealed value."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Confident in rapid rollout of crumb-mapping and detection rules."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Seeks clarity for hospitals on handling edible document hoaxes."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "Whistleblowers keep full protection whether the NDA is PDF or pie crust. We’re adding a 'spit-it-out' clause: consuming a cookie doesn’t waive rights, and legal aid is on speed dial.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Cautions that reassurance must not dilute whistleblower rights."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "No objection; watching for spillover effects on ongoing cases."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Tracking rollout; will adjust alerts once the FAQs go live."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Ready to broadcast protections and calming guidance this week."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "We’ll be honest: the rewrite is messy and frosting gets everywhere. But transparent rules beat sticky loopholes, and we’re pulling overtime with unions so forms don’t become dessert menus.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Appreciates honesty; insists on tight timelines and ownership."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Accepts candor; requests clean record trails during rewrite."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admits first-week noise; will tune sensors to cut false positives."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Backs transparency; will staff hotlines for cookie-related tips."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Procurement is a labyrinth built by minotaurs with clipboards. Our architects are simplifying the maze, but we won’t narrate live construction to avoid more minotaurs showing up.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection frustrates progress; urges clear legal next steps."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Supports limited comment to protect prospects in tribunal."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sees delay risks; field audits still need actionable orders."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public health partners need facts, not evasive pastry metaphors."
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
        text: "Can the Justicey Bureau challenge the ruling, or are you stuck waiting for a Snack Court that reads cookies as speech and soy packets as precedent?",
        answers: [
          {
            id: "a_t1_1",
            text: "Our lawyers can petition the Neutral Tribunal of Administrative Things to stay the ruling, citing conflict with existing anti-grift regs. Parallel legislation can move while that cooks.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Doesn’t want to over-promise on tribunals during live briefing."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Can file with the tribunal; careful not to prejudice arguments."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Urges coordination to avoid conflicting public alerts."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Watching; minimal health comms until litigation path is set."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "I won’t litigate live from the podium; the soy-ink would vanish mid-sentence. The Justicey team will file at the right time so our case arrives crisp, not half-baked.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Views podium deflection as thin; public expects firmer push."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Deflection protects case integrity and avoids soy-ink confusion."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Field teams need clarity on what to seize during audits."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health messaging gets muddled if legal stance stays vague."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We’ll argue that a bribe in a cookie is still, wait for it, a bribe. Dressing it in sprinkles doesn’t convert influence into symbolism, and we’ll press that point relentlessly.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Applauds bold argument that a bribe is still a bribe in cookie."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Warns that rhetoric could be cited against us by defense."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "No objection; limited operational impact this moment."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Concerned strong tone may panic clinics; asks for balance."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "No one is waiting on a mythical Snack Court to rescue integrity. Processes are underway, and the referee is still the law, not the dessert cart.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassurance helps morale but cannot replace legal action."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft tones may weaken our urgency in court filings."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Can echo calm, yet still preparing field operations."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Supports clear public comfort while agencies move on fixes."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Homeland and Health say they can track crumbs and reassure diners; what concrete steps hit the street this week beyond pastry K-9s and QR burps?",
        answers: [
          {
            id: "a_t2_1",
            text: "Homeland Happenings is deploying crumb-mapping audits, random cookie scans at building entry, and a hotline that understands muffled tips between bites. Data goes to cross-agency dashboards.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Supports concrete steps but expects measurable milestones."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Requests seizure protocols that withstand courtroom scrutiny."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Ready to deploy audits, sensors, and K-9 pastry teams."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Coordinating with local clinics to align on alerts."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Health & Helpful Stuff will publish a one-page 'Spot the Snack Bribe' guide, translate it into twelve fictional languages, and staff clinics to answer compliance questions without jargon.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "No direct action here; focus stays on agencies delivering."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Okay with flyers, but warns specifics must mirror statutes."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Neutral on pamphlets; will link to reporting hotlines."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Prepared to publish and distribute the simple safety sheet."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Look, the first week won’t be perfect; detectors sometimes think croissants are suspicious. We’ll calibrate quickly and publish error rates so the public can judge the rise.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Acknowledges flaws; still demands faster correction loops."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Appreciates candor, but insists on legally tight patches."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admits gaps; will recalibrate detectors to reduce false hits."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Notes potential anxiety; will tailor messages to avoid panic."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "No, we’re not creating Big Pastry Surveillance. We’re targeting concealment, not birthdays; regular treats can keep being regular treats as long as they carry zero favors inside.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denial invites backlash; civil liberties need specificity."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Narrow denial protects tactics without revealing playbook."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Wants explicit guardrails to avoid 'Big Pastry' fears."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Neutral; no clinical privacy impact claimed in this step."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
