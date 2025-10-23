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
      text: "The ethics probe says diplomats used a government Ouija to 'align' policy—who okayed it, and how did ethics and equity get left out?",
      answers: [
        {
          id: "a_root_1",
          text: "We shut the board down, boxed the planchette, and posted a ban on spectral input. Justice and Ethics are rewriting the guide this week, with timestamps, initials, and zero ectoplasm on any memo.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Clear closure and transparency should calm public concern."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Direct ban and documentation improve legal defensibility."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Optics suffer; rituals framed as culture now face scrutiny."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Minor turbulence expected, but clarity steadies forecasts."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_2",
          text: "At State, the Ouija was stagecraft, not statecraft. Any ghostly doodles were ceremonial, blow-dried for archives, and never substituted for analysis, law, or lived voices from affected communities.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Explanation helps, but it risks sounding like spin."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Soft-pedaling intent undercuts strict compliance posture."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Reassurance aligns with protocol and public-facing duty."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ambiguity can spook desks despite calmer messaging."
              }
            }
          }
        },
        {
          id: "a_root_3",
          text: "Markets spook faster than cats in a thunderstorm. Let’s keep investors calm, focus on bond stability, and, if needed, chat about a modest séance excise instead of litigating poltergeist precedent today.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Market metaphors distract from core ethics remedies."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection delays enforcement clarity and deposition plans."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Does not address diplomatic process or training gaps."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Pragmatic tone supports stability and implementation."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "If oversight wants pure sunlight, let’s open everyone’s mystic hobbies. We’ll publish our logs; lawmakers can publish theirs—from horoscopes to fantasy brackets—and we’ll see who moved real policy.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Combative posture risks extending the story’s lifespan."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Challenge framing complicates cooperation with inquiries."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Limited openness may ease concerns on cultural context."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rhetorical heat can unsettle already jumpy markets."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "You say the board is boxed and rules are getting rewritten; will Justice depose the planchette, ban spectral input outright, and release full logs before another memoself",
        answers: [
          {
            id: "a_sec1_1",
            text: "As the Justice Secretary, I’ve ordered a total ban on spectral input, subpoenas for the séance room, and a full log release with timestamps and sign-offs. The planchette will be deposed under oath.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Strong legal tone helps, but may imply prior laxity."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Decisive action reinforces independence and rule clarity."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Signals tighter guardrails on ceremonial practices."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sudden shifts add brief compliance costs across agencies."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Justice
          },
          {
            id: "a_sec1_2",
            text: "Timeline: ban posts today, interim rules within 72 hours, final ethics manual in two weeks. We’ll publish attendance, drafts, and metadata so you can see who touched what and when.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Specific steps and timing demonstrate accountable leadership."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Timeline is solid, but tone is less prosecutorial."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Operational focus helps; diplomatic nuance still thin."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Predictability supports market calm and budgeting cycles."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_3",
            text: "No policy was set by ghosts. We entertained a prop at meetings the way people pass stress balls—ill-advised, yes, but not a substitute for statute, modeling, or stakeholder comment.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Denial without receipts risks fueling ridicule and doubt."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Minimizing facts weakens investigatory standing and trust."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarifies symbolism, though proof should accompany it."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Uncertainty prolongs noise that markets dislike."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "Victims of process weirdness won’t be asked to prove they’re not ghosts. We’re centering communities in the rewrite and restoring boring, documented, human decision paths, minus candles.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Compassionate tone is good, yet accountability feels light."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Care for process victims is right but lacks enforcement bite."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reassurance bolsters morale and external confidence."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Relief promises may require funding trade-offs soon."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Treasury says markets spook fast; how will you shield grants for vulnerable folks from compliance costs while stopping séance gimmicks in budgeting?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Let’s not feed the ghost tape. Markets want dull predictability, so we’re issuing a calm note on fundamentals and, if Congress insists, a tiny excise on novelty séances to drain the drama.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Folklore jokes land, but policy guardrails sound thin."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Needs firmer bans to deter gimmicks across agencies."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Does little to address partners confused by the episode."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Calming tone supports liquidity and admin continuity."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "We’ll instruct agencies to treat spectral paraphernalia as noncompliant equipment, audit procurement, and clarify that budget models cannot cite apparitions. That keeps grants clean and predictable.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Concrete instructions show competence and ethical focus."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Solid, but ensure audit trails meet evidentiary needs."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Plain rules help posts communicate changes swiftly."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Some implementation cost, but improved predictability."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "Your grants won’t be haunted. We’re ring-fencing program funds from any gimmicky fees and giving small applicants a single, human hotline for clarifications, not a riddle from beyond.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance alone risks sounding like a promise gap."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Guarantees need enforcement hooks and penalties."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear protections rebuild trust with affected grantees."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Caps are stabilizing but may constrain flexibility."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Procurement let the prop through; that’s on us. We’re tightening vendor codes, tagging novelty gear, and retraining approvers to spot ‘occult-adjacent’ line items before they cost anyone time.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning the lapse helps; remedies must follow quickly."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Admission supports corrective action and credible audits."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledgment is good; diplomatic fallout still lingers."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Short-term compliance costs rise before benefits land."
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
        text: "When will you publish séance logs, the ethics rewrite, and any discipline, and will you release metadata showing who attended and for how long?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Logs post in 48 hours with redactions only for personal contact info. The ethics manual draft opens for public comment in ten days, and disciplinary notices come with dates and citations.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Fast transparency signals control and accountability."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Early logs aid interviews and preserve chain of custody."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rapid release risks misreads without context notes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Leaks of names can unsettle desks despite redactions."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We’re not hiding the ball or the board. Expect a searchable portal with minutes, attachments, and sign-offs, so advocates can trace decisions without needing night-vision goggles.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Tone is confident, but specifics on discipline are thin."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance needs enforcement milestones to land."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Steady cadence helps missions plan messaging windows."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Timelines help, yet uncertainty still prices into risk."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "We should’ve posted calendars earlier. The new policy auto-publishes meeting metadata weekly, and late uploads will trigger alerts that are more annoying than any ghost could manage.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Contrition is useful, but delivery must be airtight."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Admission supports corrective orders and future cases."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Owning errors helps; partners will seek assurances."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Markets prefer humility paired with clear fixes."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "If anyone prefers drama to documents, they’ll be disappointed. We’re replacing cliffhangers with audit trails, and we invite Congress to do the same before their next performative gasp.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Confrontational stance risks prolonging the narrative."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Bravado complicates subpoenas and voluntary cooperation."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Showmanship distracts from policy repair and training."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A firm deadline can steady forecasts despite the tone."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Beyond calming investors, what guardrails keep communities safe from budget hauntings like grant delays, junk surcharges, or mystical paperwork?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Let’s focus on delivery, not folklore. We’re mapping grant flow bottlenecks and throttling panic cycles, because the fastest way to help people is to ship funds, not debate ghosts.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Delivery focus is good, but safeguards read as light."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Needs enforceable rules to deter budget theatrics."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Community partners require clearer escalation paths."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Plain, boring execution reassures funding pipelines."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "We’re waiving any new fees, publishing a plain-language grant checklist, and requiring equity impact notes on rule changes, with real humans signing each step and a helpline that answers fast.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Specific guardrails and transparency build public trust."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Good clarity; ensure penalties back the fee waivers."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Plain-language rules aid field compliance and equity."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Waivers help grantees but require offset planning."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "No one will lose aid to a séance scare. Hard caps on processing times, escalation paths for small applicants, and quarterly audits will keep the pipeline boring and fair again.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Promises need metrics to avoid accusations of drift."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard caps are useful; audit readiness still needed."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reassurance protects communities and credibility."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Caps reduce shocks but may limit fiscal flexibility."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "There are no ‘spectral surcharges’ in policy, and there won’t be. If a form hints otherwise, it’s being retracted, rewritten, and replaced with something mercifully un-haunted.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Denial without data invites skepticism and snark."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity is welcome; pair it with enforcement triggers."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal risks alienating impacted communities."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flat denials rarely calm procurement or finance teams."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
