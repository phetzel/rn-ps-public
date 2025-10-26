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
      text: "After the leaked 'Ethics Oracle' tarot ritual, what’s the concrete fallout—paused clearances, procurement mix‑ups, trust gaps—and what fixes roll out today?",
      answers: [
        {
          id: "a_r1",
          text: "I’m not letting governance be decided by card tricks; we’re rescinding tarot‑tainted approvals, publishing a real rulebook, and auditing each desk. If critics want a fight, they can shuffle in line.",
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
              reaction: "Taking the stage signals control and accountability."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Spin reads evasive while operations wobble."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A measured probe backs the show with receipts."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "These were cross‑cultural foresight workshops, not policy Ouija. While reviews proceed, embassies are using standard ethics screens and a new checklist that asks for facts, not vibes.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Dodging ownership weakens the bully pulpit."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Reframing buys time to stabilize postings."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft-pedaling slows the paper trail."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "The Civic Justice Department has issued a records hold and is collecting memos, calendars, and approvals tied to the ritual. We’ll brief on timelines and referrals once interviews finish.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Dry facts alone can look passively reactive."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State must own fixes, not branding."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear subpoenas restore trust in due process."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Clearances paused by the kerfuffle resume under a double‑signoff, and procurement gets a plain‑English rubric by week’s end. Expect boring compliance you can set your watch to.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Assurances without grit feel thin now."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Targeted admin steps steady the field."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Skipping urgency risks evidentiary gaps."
              }
            }
          },
          followUpId: "q_sec1"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "How many clearances and postings are on hold after the oracle, what's the timeline to clear them, and how will applicants prove ethics with something sturdier than cards?",
        answers: [
          {
            id: "a_s1_1",
            text: "At peak, 312 files were paused; 180 have resumed under dual review, with the remainder slated within ten days. Applicants will submit conflict attestations and third‑party verification, not vibes.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting scale without remedy erodes confidence."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Slow coordination keeps posts idle."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Documented counts enable clean reviews."
                }
              }
            }
          },
          {
            id: "a_s1_2",
            text: "We’re moving cases in batches with weekend adjudication and extra reviewers, so nobody’s career is held hostage by a deck. Expect normal cadence restored before the next payroll cycle.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comfort talk without metrics rings hollow."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Weekend surges push real throughput."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Cutting corners invites repeat failures."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_3",
            text: "The term ‘on hold’ sounds dramatic; many files were simply awaiting routine cross‑checks, not tarot thunderbolts. We’re standardizing queue names so suspense is a process, not a cliffhanger.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Minimizing language fuels backlash."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Sharp messaging can reduce panic churn."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "But facts must anchor the tone."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If anyone tries to smuggle a card spread into clearance decisions again, we’ll cancel their access and their stationery. Career service means rules, not rabbit‑foot jurisprudence.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Direct challenge rallies stalled teams."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Punitive tone can spook career staff."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear lines deter gaming the process."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Procurement officers cite 'mystic exemptions' on vendor conflicts; how many contracts are paused, are deliveries slipping, and what keeps tarot from approving a forklift?",
        answers: [
          {
            id: "a_s2_1",
            text: "Twenty‑seven awards are paused pending conflict rechecks; no critical deliveries are late yet, and existing stock covers needs. We’ve reinstated pre‑award affidavits and added random post‑award audits.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Owning pauses without fixes invites heat."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Procurement needs guardrails, not vibes."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Conflict audits with receipts build cases."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "No, tarot didn’t buy any forklifts; approvals still needed signatures, which is why we caught the nonsense early. The paper trail beats the crystal ball every time.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flat denial risks whiplash on new facts."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Downplaying gaps hampers remediation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Precise thresholds keep probes focused."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "The phrase ‘mystic exemptions’ came from a snarky spreadsheet column, not a policy. We’ve renamed it ‘unsupported claim’ and locked the field behind grown‑up permissions.",
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
                reaction: "Blaming phrasing dodges ownership."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm counterscript calms vendor queues."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "But oversight must still bite."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Oversight now requires conflict screens signed by a human who can be fired, plus a cross‑bureau review for sensitive buys. If it can’t pass daylight, it can’t pass go.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Hard signatures signal real accountability."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Stronger attestations speed restarts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Process shortcuts would backfire badly."
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
        text: "Beyond patches and checklists, how do you rebuild trust so ambassadors seek real ethics counsel, not horoscopes—training, incentives, or watchdogs that outlast the meme?",
        answers: [
          {
            id: "a_t1_1",
            text: "We’re rolling out a scenario‑based ethics lab with live mentors and recorded decisions, so good choices get muscle memory. Graduates keep a wallet card that lists rules, not the Major Arcana.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Warm tone helps, but proof moves trust."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Training only works if leaders show up."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Explicit rules reduce gray areas."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "All chiefs will sign a quarterly culture attestation, linked to promotion packets and posted internally. Anonymous feedback portals will flag any whiff of mysticism in official decisions.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Briefings without teeth become wallpaper."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Embassy cadence needs real follow‑through."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Attestations and audits reset baselines."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Call it what it is: foresight theater gone off‑Broadway. We’re refocusing it into intercultural briefings where the only deck is PowerPoint and the only spirit consulted is the budget.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Snark scores points but solves little."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning the narrative can stabilize teams."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Still requires enforceable standards."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Trust returns when leaders eat their vegetables in public, so we’re publishing redacted case studies of messy calls and admitting the boring truth: paperwork is how you show respect.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Visible modeling makes reforms credible."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Public drills showcase new muscle memory."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Grandstanding cannot replace compliance."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "On the justice side, what’s the path—document holds, subpoenas, referrals, or discipline—so this is a paper trail judges can read without incense, not a vibes trial on TV",
        answers: [
          {
            id: "a_t2_1",
            text: "Investigators have preservation notices out, custodians identified, and interview waves scheduled. Depending on findings, administrative referrals go first, with criminal referrals only if statutes are implicated.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process talk without urgency looks timid."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State must keep pace with subpoenas."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Preservation orders anchor a clean case."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "This isn’t a witch hunt; it’s a receipt hunt, and the receipts talk. We’ll share process milestones without naming names until decisions are made, so fairness beats theater.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Reassurance paired with steps builds calm."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Coordinated timelines aid compliance."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Premature spin risks tainting evidence."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "We’re not prosecuting tarot; we’re enforcing conflict‑of‑interest law. If a rubber stamp wore a cape and called itself mystical, it’s still just a rubber stamp, and that won’t fly.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Clarifying scope helps, but sounds cagey."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Defensiveness slows interagency sync."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Narrowing the charge sharpens review."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Any court questions belong in courtrooms, not corridors. We’ll keep the commentary dryer than a law textbook while the professionals do the tedium that actually holds up in appeals.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Press jousts distract from real fixes."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Disciplined messaging buys breathing room."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Keep the casework off the stage."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
