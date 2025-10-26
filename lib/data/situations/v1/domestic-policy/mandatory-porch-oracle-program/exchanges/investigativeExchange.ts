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
      text: "Certification, data, and fines: Who certifies 'Porch Oracles,' what does the app collect, and why draft penalties before public input?",
      answers: [
        {
          id: "a_r1",
          text: "We're challenging every block to out-prophecy us with daylight transparency: public cert lists, bare-minimum app data, and community review. Gossip loses before breakfast, and neighbors win.",
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
              reaction: "Bold challenge energizes adoption and sets the pace on day one."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Pushy framing risks compulsion claims and due process alarms."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Certification includes splinter-prevention, empathy drills, and raccoon-deterrent etiquette. The app purrs, not prowls; directives are gentle nudges, not barked orders, and people keep their porches.",
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
              reaction: "Reassurance reads defensive and blunts the initiative’s edge."
            },
            cabinet: {
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear training details calm safety fears and build trust."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft focus delays perimeter standardization and alerts."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "Neighborhood Safety will accredit trainers and standardize lantern alerts, from green-glow calm to red-flame caution. The app logs time, block code, and directive ID—no names, mics, or private chatter.",
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
              reaction: "Process talk looks bureaucratic and dilutes program momentum."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear badges and protocols strengthen neighborhood readiness."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Naming accreditors invites legal scrutiny of delegation."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Our Justice Bureau drafted a fines template early to stress-test constitutionality, not to preempt you. Compelled prophecy is tricky; we prefer opt-in and clear appeals over gotcha tickets.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Admitting penalty drafts concedes ground and invites backlash."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Candor on civil liberties reduces litigation exposure."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fines talk heightens stress and undermines community buy‑in."
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
        text: "A fines memo preceded public input by weeks. What legal basis justified that, and will you release the drafts and a clear, step-by-step appeal path?",
        answers: [
          {
            id: "a_s1_1",
            text: "Authorized on behalf of the Justice Bureau: that memo was a legal scaffold, not a trap. No fines issue without rulemaking, hearings, and posted appeals maps you can navigate without a lawyer.",
            type: AnswerType.Authorized,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Leaning on authority looks heavy‑handed before feedback."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Stating basis frames penalties within legally reviewable bounds."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Early fines spook volunteers and strain public health messaging."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Justice,
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "The optics aren't pretty; the calendar cart briefly outran the public horse. We'll publish the drafts, annotate changes, and staple a simple appeal ladder to the front page.",
            type: AnswerType.Admit,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Owning optics still concedes error and weakens resolve."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparency here can preempt discovery fights later."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting haste suggests perimeter discipline slipped."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "We don't litigate from the lectern, and the memo speaks in more footnotes than English. Let the docket breathe, and you'll see process oxygenate the prose.",
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
                reaction: "Dodging details fuels criticism and media skepticism."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Non‑answers erode trust with courts and oversight."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Staying vague shields sensitive alert procedures for now."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Timeline: pre-decisional template, then public docket, then peer comments, then any enforcement language. Appeals would start local, then a regional civic judge, then a compact review.",
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
                reaction: "Clear steps reassert control and quiet the calendar flap."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defined appeals reduce anxiety and encourage compliance."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Publishing drafts may expose enforcement playbooks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Process disclosures could constrain future prosecutorial choices."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "For the app: which fields are collected, how long they're kept, and who can see them? Also, who funds Oracle certification and which vendors won?",
        answers: [
          {
            id: "a_s2_1",
            text: "Fields: directive ID, timestamp, block code, and Oracle badge hash. Retention: 30 days by default. Access: audited municipal admins only. Certification funds come from civic grants via open bids.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical lists lack spark and fail to inspire uptake."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Specific fields improve routing and incident response."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Any IDs retained raise discoverability and liability questions."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "No nosey scraping of chats, mics, or porch snack inventories. Data sits like a cat in a sunbeam—quiet, encrypted, and short-lived. Vendors agree to audits and vaporize logs on request.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Plain guardrails help sell the app to wary users."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "No creepy sensors lowers stress and supports mental wellbeing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances promise constraints we must enforce precisely."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "We challenge vendors to beat Fort Sofa security: publish proofs, accept bug bounties, and sign the break-it-we-fix-it pledge. If they flinch, they don't play.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Competitive framing projects confidence and momentum."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Boasting about security may paint a target for adversaries."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Bold claims risk overcommitment under audit."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Procurement specifics live in the Portal Formerly Known As Binder. We'll post redactions, not bedtime stories, after deconflicting bids and cooling the stampede.",
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
                reaction: "Portal deflection sounds cagey and feeds suspicion."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vendor vagueness triggers worries about safety and equity."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Routing to records limits exposure and preserves posture."
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
        text: "If opt-in augury is the goal, why keep any fine schedule? Define enforcement triggers, list exemptions, and say who adjudicates porch disputes.",
        answers: [
          {
            id: "a_t1_1",
            text: "Enforcement triggers only after repeated ghosting of opt-in commitments, not missed omens. Exemptions cover night shifts, disability, and porch repairs. Disputes land at the Civic Appeals Board.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Narrow triggers read as hedging and erode resolve."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delayed activation weakens porch perimeter deterrence."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Graduated steps align with proportional enforcement norms."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "There is no quota for prophecy, no metronome of mandatory omens, and no confiscation of porches. Anyone selling that panic is peddling fog.",
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
                reaction: "Denials clash with memos and invite fact‑checks."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarifying limits narrows grounds for rights challenges."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hardline tone heightens anxiety and community friction."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Before any fine, you'll get warnings, office hours, and a live human who sounds like a neighbor, not a summons. The system prefers conversation over citations.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Warm assurances soften blowback without losing tempo."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Warnings and office hours reduce stress and injuries."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Leniency may invite gaming of porch protocols."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Pre‑fine outreach must not undermine deterrence value."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We'd rather communities out-organize violations with peer guidance circles. Beat the ticket writer by making the ticket irrelevant.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Rallying neighborhoods feels dynamic but risks overreach."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Community enforcement can drift beyond clear authority."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Crowd pressure risks due process and complaint surge."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Peer policing can strain neighbor health and cohesion."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Does the app monetize 'omen scores' or location trails? List data-minimization tests, audit cadence, and the kill switch if a vendor misbehaves.",
        answers: [
          {
            id: "a_t2_1",
            text: "No monetization of omen scores or location trails. Audits run quarterly by independent porch nerds, with surprise spot checks. The kill switch revokes vendor tokens and blanks their storage.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Lists and acronyms won’t reassure privacy hawks."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Specifics aid accountability and external audits."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strict limits may slow urgent incident routing."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "A pilot once over-collected location pings for latency tests; we cut that and burned the data. The lesson is baked into the current minimization checks and alerting.",
            type: AnswerType.Admit,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting missteps fuels critics and litigation threats."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning errors strengthens our posture under consent reviews."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ping over‑collection raises stress and sleep concerns."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "We do not sell, rent, or barter compliance metrics, even for artisanal scones. If you see an ad, it's for your own block's bake sale, not surveillance.",
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
                reaction: "Flat denials sound dismissive and brittle under scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Absolutes are risky if logs later show exceptions."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm line aids deterrence messaging at the perimeter."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We built a fat, obvious red button: if a vendor sneezes wrong, we pause feeds, notify blocks, and roll back to paper lanterns while engineers scrub the gears.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Visible kill switch signals control and user respect."
              },
              cabinet: {
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Fast cutoff protects community wellbeing and reduces harm."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Instant shutdowns may complicate chain‑of‑custody needs."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
