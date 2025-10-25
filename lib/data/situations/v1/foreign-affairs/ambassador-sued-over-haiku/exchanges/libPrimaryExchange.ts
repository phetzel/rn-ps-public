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
      text: "Did a donor-ambassador misread a ceremonial haiku as a land giveaway, and why did snack diplomacy outrank cultural expertise in our response?",
      answers: [
        {
          id: "a_root_1",
          text: "A haiku cannot annex anything; it just breathes. If the Principality of Pollen thinks three lines redraw maps, I challenge their monarch to a limerick duel before any border budges.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.ModeratePositive,
            outcome2: OutcomeModifierWeight.ModerateNegative,
            outcome3: OutcomeModifierWeight.SlightPositive,
            outcome4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Playful challenge projects confidence without conceding ground."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Public bravado complicates the private tea-table repair work."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes risk jittering traders who need clear separation of issues."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm tone deters mischief while avoiding kinetic commitments."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "We’ll soothe this with a counter-haiku and a tea truce. Protocol now requires native poets and career linguists in the room, because better to mend a poem than mobilize ships over syllables.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.ModeratePositive,
            outcome3: OutcomeModifierWeight.ModerateNegative,
            outcome4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Gentle tone may read as retreat if not paired with accountability."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Calming message clears space for a cultural reset and quick de-escalation."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft rhetoric delays market guidance and prolongs uncertainty."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soothe-first framing mutes deterrence in sensitive waters."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "Ambiguous verse spooks markets. Treasury is separating snacks from sovereignty in guidance, pausing snack-related sanctions, and sequencing any thaw in cracker futures behind a clear diplomatic fix.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightPositive,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.ModeratePositive,
            outcome4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technical focus narrows options and limits rhetorical leverage."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ledger talk can crowd out the cultural mending needed to land peace."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear guidance steadies prices and decouples snacks from sovereignty."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Market language risks signaling hesitancy on coercion deterrence."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "We must deter weaponized metaphors. Defense has alerted the Acrostic Guard—purely symbolic—to signal that soil is taken by treaties, not stanzas, and we won’t be bullied by verse.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.ModerateNegative,
            outcome2: OutcomeModifierWeight.SlightPositive,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Chest-thumping invites escalation and distracts from facts."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Militant metaphors jar allies trying to calm the poem dispute."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hawkish tone raises risk premia and spooks consumer sectors."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Limited deterrent posture checks opportunists without mobilizing."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "If fluency matters, how did a donor ambassador hear property in poetry, and what guardrails stop résumé origami from outranking real linguists when treaties land?",
        answers: [
          {
            id: "a_sec1_1",
            text: "New protocol pairs every ceremonial text with two certified translators, a cultural red-team, and a standing panel of poets-in-residence. Nothing ceremonial moves without a second reading and a context brief.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.ModeratePositive,
              outcome2: OutcomeModifierWeight.ModerateNegative,
              outcome3: OutcomeModifierWeight.SlightPositive,
              outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Pragmatic fix shows competence without inflaming tensions."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Shared translations empower diplomats and rebuild trust fast."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Procedural shifts add near-term compliance costs to firms."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Policy guardrails may be read as reduced freedom to posture."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "We trusted gleaming résumés over grounded fluency, and that’s on us. The hiring pipeline will weight hours in-country and peer-reviewed language work above donor sparkle or networking pageantry.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightNegative,
              outcome2: OutcomeModifierWeight.ModeratePositive,
              outcome3: OutcomeModifierWeight.ModerateNegative,
              outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning the flaw helps, but it exposes vetting lapses at the top."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admission strains embassy morale while talks are ongoing."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity reduces rumor-driven volatility in snack equities."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Signals institutional softness that rivals may test subtly."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "No land changed hands, and none will. Career experts are back in the front row, and the ambassador is on a script diet: speak less, listen more, translate twice, then sip tea.",
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
                reaction: "Over-reassurance risks appearing complacent about oversight."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Affirms professionals, bolstering desks that must deliver."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Markets hear vagueness and discount improvements slowly."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft tone offers little deterrent value amid mixed signals."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "The Duchy of Seven Syllables drafted a poem that rhymed with provocation. We won’t dignify performative ambiguity with panic, but we also won’t pretend it was crystal.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.ModerateNegative,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.SlightNegative,
              outcome4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blame-shifting erodes credibility and leadership accountability."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Finger-pointing sours partners’ patience with our process."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Markets like a scapegoat, but uncertainty still lingers."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection reads as weakness, tempting opportunistic probes."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Snack boycotts piled up over a mistranslated poem—how will Treasury separate crackers from cartography and unwind the embargo without rewarding crumb speculators?",
        answers: [
          {
            id: "a_sec2_1",
            text: "We’ll issue guidance distinguishing consumer snack trade from territorial disputes, suspend snack-only penalties, and phase normalization after verifiable diplomatic steps. Markets get clarity; maps stay inert.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.ModeratePositive,
              outcome2: OutcomeModifierWeight.ModerateNegative,
              outcome3: OutcomeModifierWeight.SlightPositive,
              outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technocratic fix limits narrative control from the podium."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overt guidance can box in diplomats mid-mediation."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Targeted carve-outs thaw logistics and calm price spikes."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Deconfliction messaging reduces chances of misread escalation."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "There’s no bailout for speculative cookie futures. If someone bet that condiments move borders, they can explain that thesis to their interns and their conscience.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightNegative,
              outcome2: OutcomeModifierWeight.ModeratePositive,
              outcome3: OutcomeModifierWeight.ModerateNegative,
              outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard denial sounds rigid and risks political backlash."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid stance complicates craft diplomacy with the monarch."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Tough line discourages rent-seeking in snack markets."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Blunt rhetoric may provoke symbolic shows from rivals."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "Liquidity is fine, shelves will refill, and nobody needs to stockpile pretzels. We’re coordinating with ports and insurers so snacks travel normally while statecraft does the hard part.",
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
                reaction: "Sunny tone can feel out of touch if shelves remain thin."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Reassurance aids de-escalation and keeps tea channels open."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague comfort slows hedging unwind and keeps spreads wide."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Low-key posture offers minimal deterrence to narrative warfare."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "If boycott brigades think they can strong-arm policy with crackers, they’ll be disappointed. Economic tantrums won’t author foreign maps, and we’ll enforce against market manipulation.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.ModerateNegative,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.SlightNegative,
              outcome4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Confrontational rhetoric narrows space for negotiated off-ramps."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Calling out activists risks domestic blowback and ally friction."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive tone raises uncertainty premiums across staples."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Limited firmness can deter coercive boycotts without saber-rattle."
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
        text: "Your counter-haiku and tea truce sound soothing; who actually writes them, and will poets and cultural attachés, not donor appointees, carry the pen this time?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Career linguists, regional historians, and two outside poets convene a small drafting cell. The ambassador signs the card; the experts write the words and set the tone.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.ModeratePositive,
              outcome2: OutcomeModifierWeight.ModerateNegative,
              outcome3: OutcomeModifierWeight.SlightPositive,
              outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Process clarity reflects competence and respect for expertise."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Empowered experts accelerate a clean cultural resolution."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Additional reviewers add cost and slow some trade clearances."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Heavy cultural staffing limits flexibility in signaling resolve."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "This is dialogue, not theater. We’ll let the tea cool and the experts lead, making sure every syllable honors ceremony without surrendering substance.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightNegative,
              outcome2: OutcomeModifierWeight.ModeratePositive,
              outcome3: OutcomeModifierWeight.ModerateNegative,
              outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Tone is soothing, but accountability still feels thin."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "De-emphasizing theater helps rebuild trust at the table."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft framing delays firm guidance needed by markets."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Gentle approach reduces the deterrent signal seen abroad."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "We’re not crowdsourcing policy to slam poets, but we’ll accept their syllable audits. If a metaphor tries to smuggle a peninsula, security will check its bags.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightPositive,
              outcome2: OutcomeModifierWeight.SlightNegative,
              outcome3: OutcomeModifierWeight.ModeratePositive,
              outcome4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Snubbing outside voices reads insular and defensive."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissiveness undermines outreach to cultural partners."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Tighter circle speeds decisions that stabilize forecasts."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Insularity risks blind spots in adversary messaging."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "We underfunded cultural benches for years. That’s changing with paid fellowships and longer tours, so fluency survives beyond a ribbon-cutting timeline.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.ModerateNegative,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.SlightNegative,
              outcome4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting underinvestment invites criticism of priorities."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confession helps reforms but weakens negotiating hand today."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Resource push hints at stability gains for trade over time."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Budget talk without posture clarity muddles deterrent cues."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "If Defense fields an Acrostic Guard, where’s the line that calms markets without turning metaphors into marching orders or normalizing stanza-based saber rattling?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Defense messaging stays declarative and non-kinetic, locked to treaty law. Markets get predictability via joint calendars and clear lanes: diplomacy leads, deterrence supports, traders calm down.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.ModeratePositive,
              outcome2: OutcomeModifierWeight.ModerateNegative,
              outcome3: OutcomeModifierWeight.SlightPositive,
              outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Measured doctrine projects control and steadies the story."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear line reassures allies this stays diplomatic and calm."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Caution on signals may slow relief in related contracts."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Constraints can limit flexible deterrence if rhetoric spikes."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "We’ll call out any actor gaming verse to grab leverage. If they escalate the rhyme, we escalate the rhyme-check—firmly, publicly, and with zero movement of actual hardware.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.SlightNegative,
              outcome2: OutcomeModifierWeight.ModeratePositive,
              outcome3: OutcomeModifierWeight.ModerateNegative,
              outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Calling out bad actors risks escalation if overdone."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public naming complicates quiet tea-room de-escalation."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sharper tone nudges risk premia and widens spreads."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Targeted firmness supports deterrence without new deployments."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "No troops, no ships, no posture shift. The Acrostic Guard exists on stationery, not tarmacs, and it reminds everyone that language games don’t change coordinates.",
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
                reaction: "Assurances help but may sound like hand-waving if repeated."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Low-key posture keeps channels open for a cultural fix."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Markets crave specifics; this offers few actionable cues."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Underplaying posture may embolden symbolic provocations."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "We are not militarizing poetry. The only thing deploying is common sense, and it’s on per diem.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome1: OutcomeModifierWeight.ModerateNegative,
              outcome2: OutcomeModifierWeight.SlightPositive,
              outcome3: OutcomeModifierWeight.SlightNegative,
              outcome4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissal of concerns harms credibility if tensions rise."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Categorical denial strains allies watching closely."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Downplaying risk can tamp volatility in the very short term."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denial blurs red lines and weakens deterrent messaging."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
