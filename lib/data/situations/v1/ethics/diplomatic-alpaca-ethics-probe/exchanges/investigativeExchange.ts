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
      text: "Walk us through the waiver trail: who logged the alpaca’s 'spit-nod' approvals, which memos blessed them, and when did barnyard ethics creep into policy?",
      answers: [
        {
          id: "a_root_1",
          text: "We’re not adjudicating barnyard spirituality from this podium. The stance is simple: separation of stable and state, and waivers demand human judgment and signatures—no cud-based clergy required.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Firmly asserts principle and keeps distance from spectacle."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Skips granular protocol detail that our team seeks to emphasize."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "State’s ethics rules do not recognize animal concurrence. The 17-step ungulate protocol forbids divination by cud and requires triple human sign-off; every exception is time-stamped and indexed.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Reads bureaucratic while the moment calls for leadership posture."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Validates our documented process and human sign-off requirements."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "There’s an active inspector review, so I won’t pre-judge. The logs are preserved and the paper trail will speak louder than any alpaca; investigators will release findings when ready.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Caution about an active probe shows restraint but risks vagueness."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection obscures the protocol specifics we want highlighted."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "No, a spit-soaked nod never authorized policy. If a waiver cited that, it was out of bounds from the start, and we are not elevating barnyard gestures to official approvals.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.MajorPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Flat denial invites demands for proof and potential walk-backs."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Affirms no animal authority, though it skimps on process clarity."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Name the memo series and signers that supposedly blessed animal concurrence. Did anyone rewrite rules to treat an alpaca as co-signer, and do the logs contradict that?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Authorized on behalf of State: Memo series UGP-17 explicitly forbids non-human concurrence. Waivers lacking three human signatures were flagged and nullified pending the probe’s outcome.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Demonstrates command of records but invites oversight follow-ups."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Leans on authority more than controls; process rigor is undersold."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.State,
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "The waiver index lists docket IDs, timestamps, routing slips, and final signers. Any memo hinting at a 'consulted barnyard asset' triggered an ethics hold and escalation to compliance.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Procedural recitation may sound bloodless amid headline pressure."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear indexing and rule citations match our informative stance."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "No rule was rewritten to crown an alpaca as co-signer. If a cover note implied otherwise, it had no force and clashed with standing guidance we issue to every desk.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Firm denial risks backlash if drafts or footnotes emerge later."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Reaffirms human-only co-sign, though the tone is curt."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "We’re focused on restoring trust. An independent scrub is matching each waiver to its signers, and discrepancies will be corrected with formal notice to all impacted units.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Independence pledge cools tempers but can feel reactive."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Reassurance without documents delays the needed transparency."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Internal chats mention 'alpaca affirmed' with emojis. Who typed that, who archived it, and was there pressure to treat barnyard folklore as official guidance?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Chat exports log handles, timestamps, and edits. Compliance pulled those threads, and any suggestion of 'animal affirmation' was flagged so context, authorship, and accountability are crystal clear.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Detailing chats risks amplifying trivial signals over policy."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Audit trails and edit logs showcase enforceable controls."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "Let’s not elevate flippant emojis to doctrine. Policy isn’t made in a sticker pack; it’s made on paper with auditable sign-offs you can cite, footnote, and, if needed, subpoena.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Pushback projects confidence but may read as combative."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Challenge tone sidelines the protocol-first message we need."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "No one is being leaned on to canonize barnyard folklore. Training refreshers are rolling out to draw the line between jokes and approvals and to tighten the waiver workflow.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Soothing tone helps, yet risks soft-pedaling accountability."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Assurances absent evidence weaken the case for process."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_4",
            text: "I won’t name chat handles from here. The ethics office and inspector have the rosters and will release appropriate excerpts without compromising personnel privacy.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Declining to name users fuels secrecy and stonewall narratives."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Protects privacy norms, though it slows perceived transparency."
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
        text: "Will you publish the 17-step ungulate protocol and a redacted audit trail of the waiver memos, including any notes invoking 'cud-based input' or 'barnyard asset'?",
        answers: [
          {
            id: "a_ter1_1",
            text: "We can publish the protocol summary, the sign-off template, and the waiver index with control numbers. Personnel details will be redacted consistent with policy and common sense.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Publishing summaries may invite nitpicks over what was omitted."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Documenting protocol and sign-offs directly reinforces norms."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "You’ll get documents, not doodles. The aim is a record you can follow from request to resolution, minus private data and the occasional coffee stain from late-night compliance triage.",
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
                reaction: "Wit risks seeming glib if releases lag or lack substance."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Signals openness while documents are readied for release."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "There is no sanctioned 'cud-based input' annex to release. If that phrase appears in the record, it reflects poor judgment by an author, not an approved method.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A clear denial draws a line but increases proof expectations."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissal without appendices downplays documentation rigor."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "If someone wants mystical livestock to guide policy, they can run for County Fair Commissioner, not draft compliance memos for a modern government.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Values-forward statement rallies allies but can inflame culture wars."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Combative framing overshadows the safeguards we need to show."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "What concrete changes hit the waiver system now—new fields, dual attestations, emoji filters—and what’s the training timeline so petting-zoo theology never sneaks in?",
        answers: [
          {
            id: "a_ter2_1",
            text: "New forms require two independent human attestations, a source-of-evidence field, and an audit checkbox. Chat bots will flag non-policy jargon for compliance review.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting changes hints prior oversight gaps that critics exploit."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Concrete fixes, dual attestation, and training match standards."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "We should have hardened the forms sooner. The fixes are underway, and we’ll own the lag by publishing a schedule and any gaps uncovered during the cleanup.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning delays humanizes but raises competence questions."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admission without specifics weakens our protocol-first message."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "Training starts this week and repeats quarterly. Staff will learn folklore belongs at picnics, while sign-offs belong on paper with legible names and dates you can audit.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Training cadence shows action, though results remain to be seen."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Assurances need metrics, audits, and checkpoints to land."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "I won’t preview every IT ticket from here. When the rollout begins, you’ll see the changelog and user guides posted on the public compliance portal.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deferring details looks cagey when reforms are the focus."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Accuracy over speed is prudent, but risks perceptions of drag."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
