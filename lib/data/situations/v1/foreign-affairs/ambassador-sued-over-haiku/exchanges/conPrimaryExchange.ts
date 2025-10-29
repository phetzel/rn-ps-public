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
      id: "q_root",
      text: "How did a ceremonial haiku get misread as a land cession, and why did that trigger chip sanctions, stalled ports, and jittery allies while the foreign desk shrugs?",
      answers: [
        {
          id: "a_r1",
          text: "A haiku cannot annex anything; it breathes, it doesn’t bulldoze. We challenge the micronation’s monarch to a limerick duel before anyone redraws a snack wrapper, let alone a map.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.StrongPositive,
            outcome2: OutcomeModifierWeight.StrongNegative,
            outcome3: OutcomeModifierWeight.ModeratePositive,
            outcome4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Witty challenge projects strength yet keeps the stakes firmly symbolic."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Diplomats see risk in taunting a sensitive monarch during delicate talks."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Markets dislike bravado when sanction paths and timelines stay unclear."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Signals deterrence against narrative escalations without immediate force."
              }
            }
          },
          followUpId: "q_sec_allies"
        },
        {
          id: "a_r2",
          text: "Our envoys are delivering a counter-haiku and a tea truce to clarify intent. No land changed hands, and we’re cooling tempers before anyone weaponizes syllable counts again.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightPositive,
            outcome2: OutcomeModifierWeight.StrongPositive,
            outcome3: OutcomeModifierWeight.StrongNegative,
            outcome4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Backs de‑escalation while preserving executive credibility and control."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Validates a soothing track and empowers quiet back‑channel bargaining."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Soft tone without pricing guidance keeps volatility and spreads elevated."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "A conciliatory posture may slightly dilute deterrence signaling."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "Ambiguity spooked commodity desks and snack futures. We’ve issued preliminary guidance disentangling tariffs from toasts so chips don’t get sanctioned for metaphors.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.ModerateNegative,
            outcome2: OutcomeModifierWeight.ModeratePositive,
            outcome3: OutcomeModifierWeight.SlightPositive,
            outcome4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technocratic framing feels distant from the live diplomatic storm."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Partners want face‑saving lines, not just market mechanics."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear rules calm desks, narrow risk premia, and unfreeze logistics."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Economic framing underplays coercive signaling risks at sea."
              }
            }
          },
          followUpId: "q_sec_trade"
        },
        {
          id: "a_r4",
          text: "Look, the only territory seized was the meeting’s vibe. While lawyers untangle punctuation, we’ll keep government focused on outputs, not outraged odes.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.Neutral,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Deflection reads evasive and feeds a narrative of drift."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes land poorly with counterparts seeking respect and clarity."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Flippancy unsettles traders scanning for policy intent."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A touch of levity can sometimes temper overreaction among patrols."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_trade",
        text: "On trade, snack embargoes and chip sanctions are biting: what is the plan to separate snacks from sovereignty and get ports unstuck this week?",
        answers: [
          {
            id: "a_s1_1",
            text: "Treasury will publish snack-versus-sovereignty codes by Friday, with a customs memo clarifying poetry in paperwork. That lets ports clear cargo without grading anyone’s meter.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.ModeratePositive,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.ModerateNegative,
              outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Welcomes clarity that separates snacks from sovereignty quickly."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Procedural memos lack the apology allies quietly expect."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strong guidance anchors pricing and narrows risk premia."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Trade focus alone overlooks coercive inspection risks at sea."
                }
              }
            },
            followUpId: "q_ter_guidance"
          },
          {
            id: "a_s1_2",
            text: "No, we didn’t sanction chips; an auto-flag mislabeled a ceremonial gift as strategic minerals. The tag is lifted and the backlog is being cleared with prejudice toward common sense.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongNegative,
              outcome2: OutcomeModifierWeight.ModerateNegative,
              outcome3: OutcomeModifierWeight.ModeratePositive,
              outcome4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denial strains credibility after visible disruptions at ports."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Allies bristle when errors are waved away as mere glitches."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Market effect is muted; the message offers no new path."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm tone hints resolve against opportunistic harassment."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Port captains have marching orders: move food, park feuds. We’re staggering releases so shelves refill while diplomats sip tea and swap verses instead of trade blows.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightNegative,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.ModerateNegative,
              outcome4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance without data reads as wishful from the top."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Signals calm tempo to counterparts coordinating shipments."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lacks thresholds and timelines to unlock stuck inventory."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Port pep talk omits contingencies if escorts become necessary."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If any trader tries to arbitrage angst by gumming up docks, they’ll meet regulators with sharper pencils than quills. We won’t let profiteers rhyme their way to a shortage.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightPositive,
              outcome2: OutcomeModifierWeight.SlightNegative,
              outcome3: OutcomeModifierWeight.ModeratePositive,
              outcome4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Threats toward traders invite legal and political blowback."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Aggressive stance complicates conciliatory maritime dialogues."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Intimidation deepens discounts and widens bid‑ask spreads."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "A hard line can deter opportunists gaming the sanction fog."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_allies",
        text: "Allies are spooked by poetry-driven policy: what deterrence or reassurance stops a stanza from moving borders without making us look verse-averse?",
        answers: [
          {
            id: "a_s2_1",
            text: "We’re deterring weaponized metaphors. The Acrostic Guard trains with maps, not muses, and any attempt to move posts with poetry will be met by posture, not pastiche.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.ModeratePositive,
              outcome2: OutcomeModifierWeight.StrongNegative,
              outcome3: OutcomeModifierWeight.ModeratePositive,
              outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rhetoric risks outpacing allied appetite for theatrics."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Military‑tinged metaphors unsettle diplomats mid‑talks."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hawkish notes nudge risk premiums on shipping lanes."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear red lines help prevent probing by spoilers."
                }
              }
            },
            followUpId: "q_ter_defense"
          },
          {
            id: "a_s2_2",
            text: "Allies are getting a calm brief: treaties beat tweets, and poems don’t redraw coasts. We’re inviting observers to watch the tea-truce talks and verify zero territorial drift.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightPositive,
              outcome2: OutcomeModifierWeight.ModeratePositive,
              outcome3: OutcomeModifierWeight.ModerateNegative,
              outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calm tone steadies leadership image amid narrative noise."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reassurance matches allied preference for steady hands."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Thin on tariff triage details investors are seeking."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Softness risks inviting tests by opportunistic actors."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "On the record from the Foreign Office: we accept no cession and propose a joint translation panel with the micronation. Snack sanctions are disproportionate and should be suspended.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.ModerateNegative,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.StrongPositive,
              outcome4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Bureaucratic phrasing feels detached from urgency."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Formal acceptance clarifies intent and aids de‑escalation."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Adds no clarity on timing to unwind administrative holds."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Legalese offers little deterrent against naval mischief."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.State
          },
          {
            id: "a_s2_4",
            text: "If fear of a stanza shakes alliances, that’s on our collective caffeine intake. We’ll brew decaf briefings and get back to basics: maps in prose, borders in ink.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.Neutral,
              outcome2: OutcomeModifierWeight.Neutral,
              outcome3: OutcomeModifierWeight.ModerateNegative,
              outcome4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blame‑shifting strains alliance trust in our steadiness."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissiveness undercuts the bridge‑building underway."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Candor about limits can briefly temper panic selling."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "A shrug invites adversaries to test resolve at the margins."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_guidance",
        text: "Will there be formal guidance on translating ceremonial verse in treaties and customs forms, or do importers keep guessing syllables at the docks?",
        answers: [
          {
            id: "a_t1_1",
            text: "Guidance will spell out that ceremonial verse has zero legal weight unless separately codified in prose. Customs will use a 'no-poetry' checkbox to avoid lyrical misreads.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.ModeratePositive,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.ModerateNegative,
              outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Sets a responsible tone and publicly owns the fix."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Guidance helps, but dignified outreach is still expected."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear rules reduce error flags and unlock financing flows."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Process notes alone cannot counter maritime pressure."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We underestimated how fast auto-sanctions would latch onto a flowery noun. That’s on us, and the patch to the screening lexicon goes live before the Friday rush.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightNegative,
              outcome2: OutcomeModifierWeight.SlightNegative,
              outcome3: OutcomeModifierWeight.StrongPositive,
              outcome4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Honest admission concedes preventable lapses in oversight."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning the mistake opens doors for a graceful reset."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Acknowledgment aids modeling of risk despite thin timelines."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Transparency helps, yet it may be read as softness."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "The docks don’t need literary critics, they need forklifts. We’re adding crews and leaving the syllable counting to the weekend festivals where it belongs.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightNegative,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.ModerateNegative,
              outcome4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Passing the buck erodes confidence in coordination."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Port jabs risk offending partners sharing docks."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "No concrete steps to normalize flows or fees emerge."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Measured humor can bleed tension if kept private."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Importers won’t be guessing; we’ll host a webinar and publish an FAQ with examples, including haiku, limericks, and the dreaded free-verse memo that started this mess.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightPositive,
              outcome2: OutcomeModifierWeight.SlightNegative,
              outcome3: OutcomeModifierWeight.ModeratePositive,
              outcome4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comforting words must be matched by execution."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Outreach promises soothe partners and keep doors open."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Vagueness prolongs hedging and cash hoarding."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Calm talk without drills risks readiness drift."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_defense",
        text: "Is the Defense Ministry really standing up an Acrostic Guard, and what rules keep metaphors from becoming missions or maps?",
        answers: [
          {
            id: "a_t2_1",
            text: "The Acrostic Guard is a training syllabus, not a standing brigade. Its job is tabletop drills that stress-test narrative attacks so commanders spot soft-power feints early.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.ModeratePositive,
              outcome2: OutcomeModifierWeight.StrongNegative,
              outcome3: OutcomeModifierWeight.ModeratePositive,
              outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Clarifies intent yet projects caution from the podium."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances help, though allies still want a hotline."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Training focus avoids costly mission creep in budgets."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Limits could be read as reluctance by adventurous actors."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "No one is patrolling with metaphor detectors. We’re not militarizing literature; we’re hardening comms so orders can’t be spoofed by stylish stationery.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.ModerateNegative,
              outcome2: OutcomeModifierWeight.ModeratePositive,
              outcome3: OutcomeModifierWeight.SlightNegative,
              outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial clashes with prior briefings and leaks."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal complicates allied messaging consistency."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Market impact is muted; little new to price today."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Tamping hype frees units to focus on real readiness."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "If a micronation tries to escalate from meter to mischief, we’ll challenge the move with presence and partners. That’s deterrence by clarity, not cutesy slogans.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongPositive,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.ModerateNegative,
              outcome4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Crisp deterrent line shows leadership amid pageantry."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "A hard edge risks overshadowing delicate diplomatic gains."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Bravado can spark risk‑off bids if traders misread tone."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strong posture credibly deters narrative provocations."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Nothing about this changes rules of engagement or borders. The only thing we’re mobilizing is common sense, plus a few red pens to catch creative ambiguities.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.StrongNegative,
              outcome2: OutcomeModifierWeight.SlightNegative,
              outcome3: OutcomeModifierWeight.ModeratePositive,
              outcome4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Measured tone calms, but must not dull vigilance."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Assurances reinforce partner confidence and cadence."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Soft guidance risks signaling indecision to markets."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Emphasis on continuity may slow necessary adaptation."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
