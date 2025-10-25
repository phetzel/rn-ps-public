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
      text: "The Partisan Accent Registry touts 'friction reduction,' yet costs, mislabeling, privacy risks, and courtroom jams keep rising. What changed?",
      answers: [
        {
          id: "a_root_1",
          text: "Friction promised a rom-com; it delivered slapstick. So yes, I’ll host a Neutral Accent Duel at dawn—winner funds refunds, loser hums. We can fix policy and keep the jokes.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.StrongPositive,
            outcome2: OutcomeModifierWeight.ModerateNegative,
            outcome3: OutcomeModifierWeight.SlightPositive,
            outcome4: OutcomeModifierWeight.MajorNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Bold challenge energizes the base and reframes the debate."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Public cost signals unsettle markets and budget hawks."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Unclear consent standards raise immediate health privacy alarms."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rhetoric risks undermining legal posture in pending cases."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Treasury has halted glitter-vowel spending, posted per-accent cost tables, and blocked hidden fees. No syllable charges will be collected until independent audits clear the math.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.MajorPositive,
            outcome3: OutcomeModifierWeight.StrongNegative,
            outcome4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Dry details dampen momentum and blur your leadership role."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Transparency on spending steadies expectations and pricing."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Operational silence fuels anxiety among providers and patients."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Premature assurances could be cited against us in court."
              }
            }
          },
          followUpId: "q_sec_1"
        },
        {
          id: "a_root_3",
          text: "HHS is moving to consent-first, opt-out by default, with emergency unlabeling for misfires. Your voiceprint is encrypted on your device, not shipped to a partisan cloud.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.StrongNegative,
            outcome2: OutcomeModifierWeight.ModerateNegative,
            outcome3: OutcomeModifierWeight.StrongPositive,
            outcome4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Soothing tone without fixes reads as drift from the helm."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "No fiscal path offered; uncertainty pressures revenue plans."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear opt-out and safeguards ease fears and stabilize uptake."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Policy hints may conflict with our litigating positions."
              }
            }
          },
          followUpId: "q_sec_2"
        },
        {
          id: "a_root_4",
          text: "Justice is reviewing the statute with a cool towel and has paused enforcement requests. No one will be compelled to perform a party accent while legality is unresolved.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightPositive,
            outcome2: OutcomeModifierWeight.Neutral,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Deference to process can look passive in a fast-moving crisis."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Signal of disciplined costs calms procurement and vendors."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Review phase delays practical relief for mislabelled patients."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Cooling period and review strengthen odds in active cases."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_1",
        text: "You promised 'no new taxes' accents, yet invoices whisper otherwise. What’s the true cost, who pays, and will misassigned syllables be refunded?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Treasury will publish a line-item ledger this week, cap per-accent charges, and auto-credit mislabels. We’ve frozen payouts pending an independent audit, so nobody pays twice.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightPositive,
              outcome2: OutcomeModifierWeight.MajorNegative,
              outcome3: OutcomeModifierWeight.StrongPositive,
              outcome4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Numbers talk lacks vision, softening your negotiating edge."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Public ledger raises confidence and deters price padding."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Billing noise diverts clinic time from care to paperwork."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Disclosure supports evidentiary clarity if disputes arise."
                }
              }
            },
            followUpId: "q_ter_1"
          },
          {
            id: "a_sec1_2",
            text: "There is no secret 'syllable tax'; a few vendors overreached and got caught. Government refunds will be automatic where appropriate and won’t require a loyalty chant.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongNegative,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.SlightNegative,
              outcome4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial clashes with receipts and risks credibility hit."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissing invoices signals weak oversight of vendors."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Assurance lowers panic, buying time to implement fixes."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overbroad denial may be contradicted in discovery."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Procurement wrote a novel in spreadsheets and called it a plan. We’re editing for brevity and sanity so people stop paying for premium consonant glitter.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongPositive,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.StrongNegative,
              outcome4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection reads as evasive and frustrates anxious payers."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Ad hoc narratives fuel volatility in procurement markets."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Staff remain unclear on guidance for disputed charges."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Process clarity can reduce duplicative filings and delay."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "No one is losing groceries to a surprise vowel fee. Interim caps and grace periods mean households should see zero net increases while fixes roll out.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightNegative,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.SlightPositive,
              outcome4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Warm tone helps morale but leaves accountability questions open."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Refund pledge without funding source strains cash flow."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Direct relief and caps protect families from surprise bills."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Promises may narrow room to maneuver in settlements."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_2",
        text: "Reports show mislabeling and privacy leaks are clogging courts. How will you fix false party tags, protect voiceprints, and end the docket karaoke?",
        answers: [
          {
            id: "a_sec2_1",
            text: "HHS will deploy opt-out-by-default, local-only storage, and a one-tap deletion. A correction hotline will relabel within 24 hours, with receipts you can read aloud.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightNegative,
              outcome2: OutcomeModifierWeight.MajorPositive,
              outcome3: OutcomeModifierWeight.StrongNegative,
              outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance without timelines risks sounding complacent."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Privacy fixes may add costs without budget clarity."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Defaulting to opt-out strongly protects patient autonomy."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Policy shifts mid-litigation can complicate arguments."
                }
              }
            },
            followUpId: "q_ter_2"
          },
          {
            id: "a_sec2_2",
            text: "Justice has asked courts for a coordinated pause while standards are rewritten and privacy guards are installed. Citizens keep unscripted rights during the timeout.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongPositive,
              outcome2: OutcomeModifierWeight.MajorNegative,
              outcome3: OutcomeModifierWeight.SlightPositive,
              outcome4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Informative update but thin on accountability milestones."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Targeted funding for safeguards steadies contractor behavior."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Interim rules lack bedside guidance for frontline staff."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Coordinated pause aids courts but prolongs individual cases."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "If a label can’t pass a blind ear test, it doesn’t stay. We challenge vendors to hit 99% accuracy or eat their buzzwords on live community radio.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightPositive,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.StrongPositive,
              outcome4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear challenge sets measurable bar and reclaims initiative."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Stricter tests may delay vendor payments and raise costs."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tough standards could slow fixes in overwhelmed clinics."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Evidence-based threshold strengthens defensibility in court."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Early models guessed accents like a weather app guessing jazz. We launched too fast. We’re fixing the dataset and compensating anyone hit by mislabeling.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongNegative,
              outcome2: OutcomeModifierWeight.SlightNegative,
              outcome3: OutcomeModifierWeight.SlightNegative,
              outcome4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning errors helps trust but underscores management gaps."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admission invites claims and higher remediation expenses."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledged flaws mean retraining and patient recontact."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Candor aids credibility with judges but raises liability."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_1",
        text: "On audits and refunds: who audits the vendors, what caps apply this month, and when do citizens actually see money back for wrong-billed vowels?",
        answers: [
          {
            id: "a_ter1_1",
            text: "An independent Inspector of Diction Finance leads the audit with weekly public dashboards. Caps are three punctuation units a month, and credits land within two cycles.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongPositive,
              outcome2: OutcomeModifierWeight.ModerateNegative,
              outcome3: OutcomeModifierWeight.SlightPositive,
              outcome4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical audit talk sidelines broader leadership narrative."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Independent oversight boosts market trust in true costs."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audit focus may slow refunds reaching affected families."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Third-party findings carry weight in ongoing litigation."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "If you were dinged for a partisan trill, the system will auto-reverse it without forms. You won’t need to upload a video of your consonants.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightNegative,
              outcome2: OutcomeModifierWeight.ModeratePositive,
              outcome3: OutcomeModifierWeight.StrongNegative,
              outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comforting, but stakeholders still want dates and dollars."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Refunds without clawbacks encourage repeat vendor issues."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear timelines on relief reduce stress and confusion."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Specific promises risk binding positions before audits land."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "Some vendors treated commas like confetti at a budget wedding. We took away the punch bowl and invited auditors, who are less fun but very effective.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongNegative,
              outcome2: OutcomeModifierWeight.MajorNegative,
              outcome3: OutcomeModifierWeight.StrongPositive,
              outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blame-shifting undermines confidence in your management."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vendor scolding lacks enforceable remedies or targets."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mixed messaging confuses hotline and caseworkers alike."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Factual restraint can avoid prejudicing active cases."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "We’re not monetizing silence or taxing laughter. Caps target overbilling only, and refunds are not a raffle with a jingle.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightPositive,
              outcome2: OutcomeModifierWeight.MajorPositive,
              outcome3: OutcomeModifierWeight.SlightNegative,
              outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Dismissal clashes with evidence and invites further scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Tax stance appears evasive and clouds fiscal planning."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarifying exclusions eases some community anxiety."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimization could be portrayed as bad faith by plaintiffs."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_2",
        text: "On privacy and corrections: will voiceprints be local-only, can families opt out per member, and what penalties hit firms that leak or mislabel?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Voiceprints stay on-device with sealed math, and each family member controls their own setting. Leaks or mislabels trigger fines, suspensions, and a public scorecard.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongNegative,
              outcome2: OutcomeModifierWeight.MajorPositive,
              outcome3: OutcomeModifierWeight.SlightPositive,
              outcome4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process description lacks urgency and personal ownership."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Local storage cuts backend costs and breach exposure."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "On-device limits add support load for smaller clinics."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Design choices may conflict with preservation obligations."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "You don’t need a lawyer to say no. One tap opts you out, and a second wipes your cache like it never sang.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightPositive,
              outcome2: OutcomeModifierWeight.MajorNegative,
              outcome3: OutcomeModifierWeight.SlightNegative,
              outcome4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Plain opt-out empowers users, but where are audit trails?"
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Easy exits can dent revenue projections mid-quarter."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Simple family controls improve equity and reduce harm."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Broad toggles may weaken evidence chains in disputes."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "If a firm spills vowels, penalties won’t be performative; they’ll perform. We’ll make violators read their privacy policy aloud at lunch for a month.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongPositive,
              outcome2: OutcomeModifierWeight.SlightNegative,
              outcome3: OutcomeModifierWeight.MajorNegative,
              outcome4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Firm penalties stance shows resolve and deters abuse."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive fines could chill legitimate vendor activity."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Punitive focus may distract from rapid correction tools."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Strong enforcement posture supports our deterrence aims."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "Our first draft hid the opt-out like a plot twist. That’s fixed—privacy now greets you on page one, in big letters and small syllables.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightNegative,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.MajorPositive,
              outcome4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Candid self-critique helps, but late fixes sap confidence."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Design errors now require costly rework and audits."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitted gaps extend exposure for vulnerable patients."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning flaws aids settlements while preserving leverage."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
