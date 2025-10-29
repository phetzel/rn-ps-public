import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const independentPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.IndependentPrimary,
  content: {
    rootQuestion: {
      id: "q_root",
      text: "The Porch Oracle plan touts neighborly cohesion via daily app directives; how do you get the gains without birthing an alert tyrant on every stoop?",
      answers: [
        {
          id: "a_root_1",
          text: "I am challenging every block to out-prophecy the bureaucracy: bring better omens and kinder nudges. If an Oracle bosses instead of bonds, you will hear from me by sunrise and we will recalibrate fast.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Bold civic challenge energizes communities without ceding control."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Unbounded zeal may heighten neighborhood stress and conflict."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Uncoordinated porch alerts can blur perimeter discipline."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "No one is being voluntold to surrender their porch soul; Oracles get empathy training, safety checks, and ergonomic rocking chairs. The app purrs, limits alerts to daylight, and nudges by design.",
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
              reaction: "Softer tone risks diluting the plan’s momentum and clarity."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Reassurance calms residents and lowers health stressors."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Over‑calming could slow urgent neighborhood alerting."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Messaging may underplay real rights risks and remedies."
              }
            }
          }
        },
        {
          id: "a_root_3",
          text: "Front stoops already watch horizons; we are standardizing lantern signals and publishing the playbook. Data stays block-level by default with no location trails. We can walk through privacy specifics next.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Process talk can read technocratic and sap public enthusiasm."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear standards strengthen block‑level perimeter awareness."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Formalization adds training burdens and fatigue risks."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Standardization without appeals invites challenges."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_4",
          text: "Compelled prophecy brushes against speech rights. We are drafting an opt-in route, clear appeal steps, and a hard ban on punitive porch edicts while we finalize the legal footing.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Legal caution is prudent but may stall roll‑out energy."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Acknowledging speech limits builds constitutional footing."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rights framing can heighten anxiety about porch roles."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hesitation can weaken timely local coordination."
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
        text: "On data: what will the Oracle app collect, who can see it, and how do you stop stoops from becoming a surveillance project with badges and lantern emojis?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Collection is minimal: timestamped directive IDs and whether a block acknowledged, not who did. No audio, video, or location histories. Independent audits and deletion timers are built in; details next.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear data facts project competence and reduce panic."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimization alone may not address mental health concerns."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Lean collection reduces misuse while keeping stoops alert."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances without enforceable rules invite litigation."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "Think dimmer switch, not spotlight. Residents can view, correct, or mute data tied to their block feed, and the default cadence is gentle. If it feels creepy, we dial it back, not up.",
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
                reaction: "Warm tone helps trust but can seem evasive on details."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Choice and control reduce stress and boost cooperation."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Optional settings can impede consistent alerting."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flexibility without standards clouds due‑process paths."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "No, the app is not a backdoor to doorbells or porch cams, and it does not scrape social posts. If someone bolts a loudhailer to their stoop, that is a hobby, not our codebase.",
            type: AnswerType.Deny,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.SlightPositive, // +4
              o3: OutcomeModifierWeight.SlightNegative, // -4
              o4: OutcomeModifierWeight.SlightPositive // +4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denials risk backlash if any integration emerges."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Over‑denial can hamper necessary coordination with sensors."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissiveness may alienate anxious residents."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear denial narrows scope and reduces overreach risks."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "Before we panic about dystopias, remember the current chaos: rumor chains and ten competing flyers. This replaces noise with clarity so your morning coffee survives intact.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Changing the subject undermines confidence on privacy."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection weakens perimeter credibility and norms."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Context can cool tempers during early rollout."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Non‑answers invite subpoenas and state scrutiny."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Costs and power: what keeps a block's Oracle from turning into a whistle-wielding hall monitor, and who pays for training, audits, and the group chat meltdowns?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Abuse risk is real. We are capping directives per day, banning personal call-outs, and creating a fast appeal clock with neutral reviewers. Training and audits come from a transparent line item.",
            type: AnswerType.Admit,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting risk shows candor but may fuel opposition."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Explicit caps and audits reduce rights conflicts."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Highlighting abuse may raise community stress."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limits could slow urgent neighborhood coordination."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "Funding covers chairs, whistles, and workshops, not ticket books. The goal is calmer blocks, fewer 3 a.m. panics, and a culture of check-ins, not citations.",
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
                reaction: "Covering costs helps but can seem like buying compliance."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Supportive resources improve wellbeing and reduce friction."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too much comfort can blunt readiness and vigilance."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Perks without policy guardrails invite misuse."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "If an Oracle starts peacocking with a whistle, I expect neighbors to out-organize with better norms. Beat bad behavior with sunlight, not shouting, and tell us so we can swap in a calmer lead.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Direct challenge rallies neighbors to self‑police excesses."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ratcheting pressure can spike stress and burnout."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Crowd enforcement risks due‑process shortcuts."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Look, the alternative is the group chat where three neighbors and a raccoon argue at volume eleven. We are budgeting to lower chaos, not to crown a block emperor with push powers.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Mocking alternatives can read dismissive and polarizing."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes undercut block‑level discipline and alert norms."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection ignores real training and burnout costs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Acknowledging limits implicitly narrows coercive claims."
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
        text: "Concrete guardrails: how are logs audited, what deletes by default, and who ensures doorbell cams and porch sensors aren't braided into a stoop surveillance tapestry?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Logs are hashed, rotated, and inspected by an independent civic lab quarterly. Default deletion purges acknowledgments after 14 days, aggregates after 90, and no device IDs are stored.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Technical audit talk can feel remote and bureaucratic."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Independent checks improve perimeter reliability."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Complexity may increase training load and fatigue."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audits without user remedies draw legal skepticism."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "Residents can see exactly what exists about their block and hit a one-tap purge for past nudges. If a setting feels too nosy, the slider goes left and the Oracle goes quiet.",
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
                reaction: "Transparency helps but may expose weaknesses."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Access to one’s data lowers anxiety and builds trust."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too much openness could reveal alert patterns."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dashboards without appeals lack due‑process bite."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "No unified porch panopticon. Doorbells and sensors stay on their own islands unless a resident opts in for a household, and even then it never flows beyond the block rollup.",
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
                reaction: "Strong denial risks credibility if integrations surface."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard lines might block useful safety integrations."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal overlooks residents’ stress about cameras."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Separation reduces risk of unlawful surveillance claims."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Hold us to nerd standards. If you spot a data overreach, file it, publish it, and embarrass us into fixing it by Tuesday. Civic tech works best when citizens heckle the code.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Inviting oversight partners energizes civic watchdogs."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public bug bounties can raise anxieties about flaws."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "External audits may expose alert schemas to adversaries."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "If an Oracle issues a bogus or biased directive, how fast can residents appeal, and what enforcement powers, if any, accompany a whistle and a push notification?",
        answers: [
          {
            id: "a_ter2_1",
            text: "We got overexcited about alerts; appeals must be faster than the coffee cools. We are setting a 24-hour reversal window, with emergency pauses in minutes if bias or bunk is alleged.",
            type: AnswerType.Admit,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning past overreach can depress confidence in rollout."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Fast appeals and limits align with constitutional norms."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Policy churn can stress communities and volunteers."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reduced authority may weaken urgent response."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Enforcement is soft power: visibility and reminders. There are no fines, no porch confiscations, and no knock-and-ticket squads. Noncompliance simply reduces your block's dashboard green.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear rules calm doubts while keeping momentum."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Defined soft power and timelines aid coordination."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rule talk adds training and paperwork burdens."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Procedural detail without remedies invites challenges."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "A rotating panel from outside the block reviews disputes, and training steers Oracles toward suggestions, not orders. Whistles are for safety, not swagger.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.SlightPositive, // +4
              o3: OutcomeModifierWeight.SlightNegative, // -4
              o4: OutcomeModifierWeight.SlightPositive // +4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comforting tone may underplay real biases and errors."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reassurance reduces burnout and improves cooperation."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soothing messaging can slow responses to real issues."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft framing can obscure rights and remedies."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "No, a push notification cannot draft you into leaf-raking service or mandate synchronized waving. It can suggest, it cannot compel, and it definitely cannot blow your lawn chair away.",
            type: AnswerType.Deny,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.SlightPositive, // +4
              o3: OutcomeModifierWeight.SlightNegative, // -4
              o4: OutcomeModifierWeight.SlightPositive // +4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Overly defensive tone risks public and press backlash."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal blurs lines on what is enforceable."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denial can heighten stress if errors persist."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Limiting claims narrows grounds for coercion concerns."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
