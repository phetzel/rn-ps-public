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
      id: "root",
      text: "Are auditors really headed into backyards to register oaks, and how does tagging trees for taxes fill the budget gap without spiraling into ID creep?",
      answers: [
        {
          id: "root_a1",
          text: "If anyone doubts the math, I'll debate a maple at noon and let sunlight pick a winner. We can modernize revenue without raiding privacy, and I'm ready to prove it.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.MajorPositive, // +12
            o2: OutcomeModifierWeight.SlightNegative, // -4
            o3: OutcomeModifierWeight.SlightNegative, // -4
            o4: OutcomeModifierWeight.SlightNegative // -4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Showy clash signals strength and seizes the narrative."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Curbside teams could see mixed signals from theatrics."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Spectacle distracts from rate tables and compliance forms."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Operationally neutral for clinics; no change to triage."
              }
            }
          }
        },
        {
          id: "root_a2",
          text: "No one is storming patios. Enforcement is curbside and consent-based: soft root perimeters, quick bark scans, and audits by appointment only. Your fence is still a fence.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative, // -4
            o2: OutcomeModifierWeight.SlightNegative, // -4
            o3: OutcomeModifierWeight.MajorPositive, // +12
            o4: OutcomeModifierWeight.SlightNegative // -4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Downplaying drama can read as evasive under scrutiny."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear curbside limits reduce panic and false patrol reports."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft tone may undercut urgency on filings and remittance."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance without service details invites skepticism."
              }
            }
          },
          followUpId: "sec2"
        },
        {
          id: "root_a3",
          text: "Treasury modeling projects a modest, trackable plug to the gap with a 15‑minute Leaf-109 filing. Two touchpoints a year max, and canopy credits cushion homeowners with smaller yards.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative, // -4
            o2: OutcomeModifierWeight.MajorPositive, // +12
            o3: OutcomeModifierWeight.SlightNegative, // -4
            o4: OutcomeModifierWeight.SlightNegative // -4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Dry math can look aloof against viral backyard rumors."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Data talk alone won’t calm fears of creeping patrols."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Crisp projections steady expectations and revenue plans."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Metrics without care guidance strain ShadeCare intake."
              }
            }
          },
          followUpId: "sec1"
        },
        {
          id: "root_a4",
          text: "We'll be candid: triaging woody citizens is new, messy work. We're standing up wellness-for-wood clinics and learning in public so we don't splinter communities or people.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative, // -4
            o2: OutcomeModifierWeight.SlightNegative, // -4
            o3: OutcomeModifierWeight.SlightPositive, // +4
            o4: OutcomeModifierWeight.SlightPositive // +4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Owning confusion risks headlines about chaotic rollout."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admission could fuel anxiety about perimeter rules."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Uncertainty threatens filing discipline and cashflow."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Candor builds trust for phased clinics and triage limits."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "sec1",
        text: "If oaks are taxed like freelancers, what are the audit triggers, shade depreciation rules, and how many backyard visits are baked into the Treasury forecast?",
        answers: [
          {
            id: "sec1_a1",
            text: "Per Treasury guidance, audit selection is capped at 1% of registered trees, with remote photo verification as default. Shade depreciates over 40 years; no physical visit occurs without documented consent.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative, // -8
              o2: OutcomeModifierWeight.SlightPositive, // +4
              o3: OutcomeModifierWeight.SlightPositive, // +4
              o4: OutcomeModifierWeight.Neutral // 0
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Rules talk may feel technocratic rather than protective."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Caps and criteria signal restraint to neighborhoods."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "May muddle perception of consistent audit enforcement."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audit focus ignores pollen surges and clinic strain."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury
          },
          {
            id: "sec1_a2",
            text: "Filing opens the first week of Leafvember, with quarterly sap estimates thereafter. Trigger thresholds appear in Leaf‑109 instructions so taxpayers know the playbook before planting season.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Command of details projects control and competence."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Info-heavy brief can inadvertently fuel checkpoint rumors."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Timelines and rates anchor expectations and cashflow."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Numbers without staffing plans do little for clinics."
                }
              }
            },
            followUpId: "ter1"
          },
          {
            id: "sec1_a3",
            text: "Let me not front‑run our numbers drop. We're releasing the full rate card, assumptions, and audit matrix tomorrow so you can roast the spreadsheet instead of the messenger.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.SlightNegative, // -4
              o3: OutcomeModifierWeight.SlightPositive, // +4
              o4: OutcomeModifierWeight.SlightPositive // +4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dodging specifics suggests hidden costs or sweeps."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Non-answers encourage speculation on yard patrols."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delay invites doubt about revenue stability."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Deflection buys time to ramp ShadeCare triage staffing."
                }
              }
            }
          },
          {
            id: "sec1_a4",
            text: "We are not budgeting door‑to‑door sweeps or per‑branch penalties. The model assumes remote checks first and treats backyards as private spaces, not revenue parks.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard denial can backfire if exceptions surface later."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Firm no eases fear but may be brittle on edge cases."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Categorical tone invites skepticism about audit policy."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Keeps anxiety down for now while clinics spin up."
                }
              }
            }
          }
        ]
      },
      {
        id: "sec2",
        text: "What stops homeland agents from staging yard patrols under this plan, and where’s the line between a ‘soft root checkpoint’ and an intrusive backyard sweep?",
        answers: [
          {
            id: "sec2_a1",
            text: "Soft checkpoints are literally on the curb, with signage and a timetable you can ignore by scheduling later. No gear, no dogs, no drama—think farmers market energy, not raid vibes.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear guardrails frame him as protector-in-chief."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Curbside-only doctrine calms fears of intrusion."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Security emphasis can overshadow filing discipline."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances without care detail raise service concerns."
                }
              }
            }
          },
          {
            id: "sec2_a2",
            text: "If someone shows up unannounced with a clipboard and a tactical fern, call the hotline; that's not policy. We'll post every protocol so neighbors can fact-check in real time.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative, // -8
              o2: OutcomeModifierWeight.SlightPositive, // +4
              o3: OutcomeModifierWeight.SlightNegative, // -4
              o4: OutcomeModifierWeight.StrongPositive // +8
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Sidestep looks weak against surveillance worries."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity invites mission creep and local confusion."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection shakes confidence in cost controls."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Buys time to refine ShadeCare privacy practices."
                }
              }
            }
          },
          {
            id: "sec2_a3",
            text: "There is no authority for random yard patrols, period. If any agency tries it, they're outside the fence and inside the Inspector General's calendar.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.SlightNegative, // -4
              o3: OutcomeModifierWeight.SlightPositive, // +4
              o4: OutcomeModifierWeight.SlightPositive // +4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blanket denials age poorly if any pilot leaks."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Crisp no reduces panic but constrains tactical options."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Narrow scope helps budget predictability claims."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard lines risk alienating sensitive patients."
                }
              }
            }
          },
          {
            id: "sec2_a4",
            text: "We codified a fifty‑step privacy ladder: notice, consent, curbside scan, and independent appeal before any on‑site check. That structure is designed to stop mission creep before it sprouts.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive, // +4
              o2: OutcomeModifierWeight.SlightPositive, // +4
              o3: OutcomeModifierWeight.SlightNegative, // -4
              o4: OutcomeModifierWeight.SlightNegative // -4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process detail lacks drama and can be tuned out."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Protocol granularity helps but burdens field teams."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparency on steps bolsters compliance rates."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Checklists add burden without added clinic support."
                }
              }
            },
            followUpId: "ter2"
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "ter1",
        text: "HHS says it will run ‘wellness for wood’ clinics; how will you triage sick oaks versus allergic humans, and who gets priority when the sap starts sneezing?",
        answers: [
          {
            id: "ter1_a1",
            text: "We don’t have every diagnostic right yet—oak coughs sound like leaf rustle on our monitors. We’ll prioritize human safety while building better bark-baselines with community clinics.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Owning limits reads authentic and resets expectations."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting gaps may invite boundary-testing by locals."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Uncertainty threatens timely filings and revenue."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Honesty builds trust for phased triage and clinics."
                }
              }
            }
          },
          {
            id: "ter1_a2",
            text: "No one’s losing a doctor’s visit to a pine with stage fright. Clinics are additive pop‑ups, staffed separately, and triage defaults to people whenever resources even hint at a pinch.",
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
                reaction: "Assurances can look dismissive if allergy spikes hit."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Priority clarity reduces panic about yard patrols."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "May understate staffing strain and compliance risks."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soothing tone without resources frustrates providers."
                }
              }
            }
          },
          {
            id: "ter1_a3",
            text: "Expect a color‑tag triage: green for stable trees, amber for stress, red for hazard. Mixed cases call a human clinician first, then a certified arbor‑nurse to keep both sides breathing.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Charts over compassion can feel aloof during crises."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Numbers don’t address curbside workload fears."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Structured triage plan stabilizes cost projections."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid categories risk misclassifying edge cases."
                }
              }
            }
          },
          {
            id: "ter1_a4",
            text: "If the sap’s sneezing, we’re calling it pollen and handing out tissues. Jokes aside, we’ll publish protocols this week so comedy doesn’t outrun care.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Changing subject reads as evasive amid health worries."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Deflection keeps options open for privacy fixes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delay clouds fee schedules and clinic budgets."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fogging details undermines ShadeCare credibility."
                }
              }
            }
          }
        ]
      },
      {
        id: "ter2",
        text: "What guardrails prevent the tree ID regime from creeping to porch swings and pets, and how will oak polling avoid morphing into backyard surveillance theater?",
        answers: [
          {
            id: "ter2_a1",
            text: "If anyone proposes tagging porch swings, I'll meet them at a town hall with a chainsaw permit and a civics quiz. We're drawing lines in ink, not sap.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive, // +12
              o2: OutcomeModifierWeight.SlightNegative, // -4
              o3: OutcomeModifierWeight.SlightNegative, // -4
              o4: OutcomeModifierWeight.SlightNegative // -4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Pushback posture rallies supporters and draws focus."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Grandstanding can inflame overreach by local enforcers."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric may blur guardrail language in tax forms."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontation distracts from clinic privacy work."
                }
              }
            }
          },
          {
            id: "ter2_a2",
            text: "We barred nonliving objects and animals in statute. Polling must be opt‑in by the human owner, anonymous by block, and limited to canopy questions—no peeking at your grill.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat refusals look brittle if scope later widens."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clear bar on creep reassures but spurs loophole hunts."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strong no steadies markets on expansion fears."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Privacy stance calms patients worried about overreach."
                }
              }
            }
          },
          {
            id: "ter2_a3",
            text: "The default is off. Tagging expands only by supermajority of the Tree Ethics Board and a public comment period that actually counts, not a suggestion box to nowhere.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.SlightNegative, // -4
              o3: OutcomeModifierWeight.MajorPositive, // +12
              o4: OutcomeModifierWeight.SlightNegative // -4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Low-drama tone lacks punch against critics’ stunts."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Guardrails and warrants keep patrols narrowly tailored."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reassurance plus metrics supports compliance buy-in."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comfort helps, but clinic needs remain underfunded."
                }
              }
            }
          },
          {
            id: "ter2_a4",
            text: "Audits log to a public ledger without addresses, and tags broadcast a random ID that rotates like carpool playlists. If the data can’t follow you, it can’t haunt your backyard.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process detail is sound but fails to command headlines."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Transparency helps but risks blueprint misuse."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Open ledger rules build trust without exposing homes."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Anonymous logging protects patients; workload persists."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
