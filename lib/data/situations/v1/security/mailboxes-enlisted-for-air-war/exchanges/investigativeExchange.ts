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
      text: "BoxGuard turns mailboxes into anti-drone sentries; who OK'd the sole-source vendor, signed the waiver memos, and controls any doorstep data?",
      answers: [
        {
          id: "a_r1",
          text: "If snoop-drones think they can peek at postcards, they can duel our mailboxes at high noon. We're challenging bloat and shortcuts too: any sketchy deal gets returned to sender with a very large stamp.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.MajorPositive,
            o4: OutcomeModifierWeight.MajorNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "A punchy challenge that feels assertive and on-brand for the moment."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Undercuts program discipline and triggers risk concerns across units."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Raises litigation flags about privacy and chain-of-custody vulnerabilities."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Defense used rapid prototyping with milestone gates, test ranges, and full logs. Sentries fire biodegradable gum and 'flag-up' signals caution, not combat. Redacted waivers post within 72 hours for public review.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technical framing cools momentum and blurs the sense of accountability."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear process detail supports rapid fielding and strengthens credibility."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Narrow answers risk discovery friction and skeptical judicial review."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "We don't litigate from the lectern. Active cases limit detail, but we're releasing draft Curbside Combatant Consent forms and tiny Miranda tags. Until rules settle, sticky-gum 'evidence' is treated skeptically.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Evasive tone suggests liability worries and weak executive control."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection fuels doubts about testing rigor and deployment readiness."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Preferred deflection preserves case posture and strengthens leverage."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Under the Defense Secretary's order, deployments followed safety sign-offs, weather false-positive drills, and privacy filters. Procurement files and waiver rationales will be published on the timetable already announced",
          type: AnswerType.Authorized,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Bureaucratic authority framing reads cold and somewhat defensive."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Command emphasis invites scrutiny over scope and potential overreach."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "References to authorizations modestly improve due-process optics."
              }
            }
          },
          authorizedCabinetMemberId: CabinetStaticId.Defense
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Walk us through the sole-source leap: who signed the BoxGuard waivers, what risks were accepted, and why does the audit trail look like it was glued?",
        answers: [
          {
            id: "a_s1_1",
            text: "Timeline: request on Day 0, waiver on Day 6, prototype on Day 21; signatories were acquisition, safety, and privacy leads. Risks accepted: gum misfires and weather confusion. A plain-English digest posts next.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process detail helps but invites blame if missing links later surface."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Milestones narrative validates urgency while showing oversight balance."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledging waivers heightens FOIA exposure and civil suits risk."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "No one sneaked a cousin's garage startup through procurement. Independent auditors are already chewing through the logs and will flag any favoritism with fluorescent sticky notes.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassurance sounds canned amid visible smoke around procurement choices."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft denial weakens the operational case for speed and necessity."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calms conflict-of-interest fears somewhat, though subpoenas still loom."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "It wasn't a no-bid free-for-all; it was an emergency down-select with three qualified vendors and a scoring matrix. The waiver excused schedule, not scrutiny, and it sunsets fast.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard denial risks backlash if documents later contradict assertions."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm line steadies operators but narrows maneuver room if facts shift."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Crisp denial may complicate flexible settlement or remedy options."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Some names stay redacted until employees get notice. We won't announce staff into internet crossfire, but the tracking numbers will let anyone reconstruct the chain of custody cleanly.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Redactions posture reads secretive and unnecessarily bunker-minded."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Opacity feeds the narrative of shaky compliance and thin audits."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Deflection aligns with safeguarding identities and due-process needs."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Who holds BoxGuard footage and metadata, who pays when a mailbox gums a jogger, and why do units keep mistaking rainclouds for rogue quadcopters?",
        answers: [
          {
            id: "a_s2_1",
            text: "Custody depends on warrants, not wish lists. We'll publish retention rules soon, but active suits mean I won't weigh hypothetical joggers versus hypothetical gum today.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Legalese makes the administration look reactive rather than leading."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Process-centric answer stalls performance narrative and operator trust."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Process-first framing protects active cases and discovery posture."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "Raw footage lives on-device with auto-deletion; alerts stream hashed metadata to a secure hub. Liability routes through the government as operator, backed by insurance. Training fixes the cloud-versus-quad issue.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Specifics risk headlines about deletion windows and concealment optics."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "On-device controls bolster safety practices and data stewardship."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Guardrails ease privacy strain but still leave due-process gaps."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_3",
            text: "If a mailbox misreads weather, the gum stays holstered. The default is observe-and-log, not splat-and-ask-questions-later, and every flagged clip gets human review before action.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Minimizing harm may seem dismissive of community risk and costs."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Holster-first posture signals restraint and operator training uptake."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Softer tone slightly reduces negligence exposure in civil claims."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Early units did mistake a thunderhead for a threat. That's on us, and we patched the model. We owe neighbors quiet skies and clean sidewalks, and we will compensate when we fall short.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting faults feeds the unfolding narrative of a chaotic rollout."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning bugs earns engineering credibility despite short-term costs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Candor supports remedies but invites expanded damages claims."
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
        text: "Do the waivers explicitly skip independent validation, and if so, what compensating controls stop BoxGuard from becoming a budget-funded gum cannon?",
        answers: [
          {
            id: "a_t1_1",
            text: "Waivers do not skip independent validation; they reorder it. A blue-team lab mirrors field tests, and a third-party safety board signs off before expansion. Controls include kill-switches and audit beacons.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Procedural clarity reads dry and defensive in the current optics."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Validation emphasis helps build a steady competence narrative."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Still concedes waiver risks that plaintiffs can readily cite."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Think guardrails, not loopholes. Even in waiver mode, you get two-person approval, privacy masks on by default, and automatic deletion unless a judge says otherwise.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Metaphors feel glib and may irritate anxious residents and press."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Guardrails framing shows caution while offering limited detail."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Reassurance improves tone but not strict evidentiary standards."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "It's not a gum cannon program. The polymer mass fails medical and wildlife thresholds by design, and the launcher is locked behind dual authentication like a bank vault with better stickers.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dismissive tone risks ridicule if contrary footage later leaks."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Technical denial steadies teams but invites outside verification."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Firm stance could clash with lab notes and internal email trails."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "If you're picturing chaos, picture our testers chasing blimps with clipboards. We invited critics to break it, and they left with free gum and fewer doubts.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Bold challenge energizes supporters and reframes the stakes sharply."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric undercuts caution, suggesting bravado over controls."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Combative framing strains alignment with ongoing cases and judges."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "On misfires: what's the false-positive rate, how many 'weather equals war' incidents in trials, and why did a barometer wobble trigger alerts at all?",
        answers: [
          {
            id: "a_t2_1",
            text: "False positives dropped below two percent after the weather-model patch; none involved gum discharge. Trials logged nineteen 'weather equals war' alerts, now down to two in the latest cycle.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Citing numbers invites fact-checks and potential later reversals."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Performance gains strengthen the case for maintaining fielding pace."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Metrics help narrative, but liability math still looms ahead."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "The barometer wobble came from a cheap sensor batch. We replaced it and added cross-checks with local weather feeds, because one twitchy chip shouldn't decide neighborhood DEFCON.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admission keeps the story alive and frames fault upstream."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Supplier blame risks souring logistics ties and recovery timelines."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Candor aids remedies while increasing exposure to claims."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Every alert now waits for two signals: motion plus signature. If clouds grumble but nothing moves like a drone, the system shrugs and goes back to guarding your coupons.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances may read like spin if unsupported by raw data."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Layered checks suggest learning and maturing safety controls."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Mitigations trim negligence claims at the margins only."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Specific incident details live in test team reports. We'll release the summary without doxxing a single mailbox, which deserves privacy almost as much as your porch does.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Stonewalling tone feeds speculation and erodes public trust."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Process shield preserves room to fix issues without added glare."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection protects active reviews though courts may still press."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
