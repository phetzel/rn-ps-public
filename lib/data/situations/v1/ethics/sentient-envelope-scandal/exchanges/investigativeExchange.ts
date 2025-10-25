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
      text: "Custody logs, leaked confessions, and lobby memos hint the 'thank-you' envelope had handlers. Is it sentient, and who actually steered its tour?",
      answers: [
        {
          id: "a_root_1",
          text: "I'll debate any envelope on live TV, provided it can lick its own stamp. Spectacle aside, I won't be bullied by stationery, and the people deserve clarity, not chain-mail drama.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Taking the stage with mail shows control and steals back the spotlight."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "A show trial risks market jitters over paper asset signals."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A public forum can surface facts without prejudicing due process."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Spectacle may confuse clinic staff about the pilot's scope."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Our fiscal team is reviewing ink, stamp, and gratitude-swag markets, not personalities. Paper labor theories are fun, but the real risk is price spikes, which we're auditing now.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Process talk sounds small while the story balloons beyond control."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Pivoting to inputs grounds the debate in numbers and dulls hype."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Budget chatter sidesteps the core status question we must decide."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It ignores the safeguards we built for the screening pilot."
              }
            }
          },
          followUpId: "q_sec2_money"
        },
        {
          id: "a_root_3",
          text: "Our civic-justice lawyers are assessing status: object, tool, or worker. The category determines rules for custody, gifts, and testimony, and we'll publish the standard soon.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Letting lawyers lead cedes the narrative and dampens my flair."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "A legal frame could drag finance into costly compliance shifts."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clarifying status sets rules and stabilizes investigations."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "No direct clinic effect; we can adapt to any legal definition."
              }
            }
          },
          followUpId: "q_sec1_legal"
        },
        {
          id: "a_root_4",
          text: "Health & Household Services did pilot a feelings-screen for office stationery-yes, we called the prototype Steve. Owning that is better than rumor fever, and clinics remain steady.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Owning this could read as weakness and fuel the envelope's myth."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Fiscal exposure is limited if scope stays clinical and narrow."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "An admission raises evidentiary questions we must manage."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Transparency cools rumors and supports front-line guidance."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1_legal",
        text: "Given adhesive smudges on custody logs and notes about 'coaching,' what legal box fits a possibly sentient thank-you envelope: witness, bribe, or unpaid intern?",
        answers: [
          {
            id: "a_sec1_1",
            text: "As the Bureau of Civic Justice lead, I can confirm we're drafting criteria for sentient testimony and gift classification. Until finalized, no cases hinge on the envelope's mood.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Authoritative clarity lowers noise but blunts theatrical leverage."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Firm labels may trigger accounting rules across paper workflows."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Formalizing status anchors prosecutions and rights obligations."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Clinical pilots can map to whichever category the law sets."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Justice,
            followUpId: "q_ter1_hhs"
          },
          {
            id: "a_sec1_2",
            text: "Nothing moves without process; even opinionated stationery gets counsel, chain-of-custody checks, and daylight hearings. We will not improvise law because glue looks thoughtful.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process homilies read evasive while the scandal accelerates."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Caution signals could spook supply contracts and vendors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance without criteria leaves us open on appeal."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calm messaging protects patient services from rumor spikes."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Labels aside, we're focused on the conduct of humans who booked the tour, not the stationery's vibes. If misconduct exists, it's stamped by people, not paper, and we'll prove it.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Targeting humans is right, but it starves the spectacle I marshal."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Shifting focus protects balance sheets from exotic liabilities."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Human conduct emphasis is valid but leaves status unsettled."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It downplays data our screening could contribute to truth."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "The 'coaching' shorthand in the notes refers to media prep for staff, not whispering to envelopes. We've found no admissible evidence the mail was prompted to emote on cue.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissal risks whiplash if evidence later contradicts us."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Narrowing jargon helps insulate markets from overreaction."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Blanket denial undermines credibility before the bench."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It erases the pilot's nuance and undercuts staff confidence."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2_money",
        text: "Memos tie gratitude merch lobbyists to policy drafting while the envelope toured. Who paid for its travel, and do stamp-futures speculators now own our thank-you notes?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Our finance crew is tracing invoices for couriers, stamps, and novelty embossers. The flashy question is sentiment; the real one is procurement hygiene, and auditors are on it.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Chasing receipts lacks drama and forfeits agenda-seizing moments."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Following money trails is prudent and reorients talk to costs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audits alone won't answer improper influence or witness issues."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Focus on billing distracts from clinic communication needs."
                }
              }
            },
            followUpId: "q_ter2_logs"
          },
          {
            id: "a_sec2_2",
            text: "Preliminary records show mixed funding: campaign-adjacent clubs, a civic museum loan, and petty cash for postage. Several entries conflict, and reconciliations are underway.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Even-handed ledgers won't quench a story begging for a duel."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mixed funding invites compliance headaches we'll be asked to price."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Disclosure narrows the field for any criminal conflicts."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We must buffer clinics if campaigns touched logistics."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "If lobbyists think they can buy policy with a winky envelope, they're about to get returned to sender. I invited watchdogs to sit in on the briefing, not in the gift shop.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "A sharp challenge reclaims the frame and energizes supporters."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggression risks spooking vendors and procurement timelines."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Grandstanding can complicate interviews and chain of custody."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm stance helps curb rumor surges hitting clinic hotlines."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "No, stamp-futures traders don't run gratitude. Futures don't write law; committees do, and any memo implying otherwise will sit beside expired coupons in the circular file.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blanket denials look brittle if documents surface tomorrow."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Separating futures markets from policy calms trading desks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing risk signals can chill witness candor."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overconfidence hampers our guidance on misinformation."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter1_hhs",
        text: "If Health & Household Services named the screening pilot Steve, what did Steve measure, and do those readings debunk the envelope's alleged feelings or back the claims?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Steve measured pattern changes in pressure, temperature, and adhesive tack when exposed to prompts. It wasn't mind-reading; it flagged anomalies that justify real lab replication.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Technical detail dulls the show and may feel like conceding."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "If sensors imply labor, budgets could face new obligations."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Measurements invite discovery fights over methodology."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning the metrics builds trust and guides clinical messaging."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We've published the protocol draft: blind prompts, decoy thank-yous, and sealed-control envelopes. Results showed noise with occasional spikes, so we're expanding the sample.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Publishing rules shows motion while keeping me loosely on script."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Protocols might hint at costs we haven't appropriated."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparent methods strengthen evidentiary footing."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "The draft is descriptive; clinics can align without disruption."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "Clinics are unaffected; the pilot ran in a basement lab with a borrowed label maker. We'll sunset the nickname in future comms, but the science continues with grown-up nomenclature.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Downplaying scale shrinks attention but looks like retreat."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Limited scope protects budgets from runaway interpretations."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Operational note is fine but adds little to legal clarity."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It risks trivializing staff work and confuses expectations."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Steve's nickname stuck because scientists are people, too. The durable question is repeatability, which belongs to peer review, not a hallway gossip chain about flirty stationery.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Jokes read evasive when the public expects straight answers."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Light pivot lets us redirect to tools and procurement."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection invites subpoenas to get past the banter."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Humor may inflame rumors and unsettle clinic teams."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2_logs",
        text: "Logs show midnight transfers and a doodled smiley by 'Receiver Unknown.' Who signed for the envelope after hours, and did cameras catch a wink or handoff worth flagging?",
        answers: [
          {
            id: "a_ter2_1",
            text: "The badge scan belongs to a temp contractor who routed mail after a sprinkler test. The smiley is their documented signature, regrettably whimsical. Footage shows a normal handoff.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Naming a temp is tidy but doesn't satisfy the show's demand."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Contractor gaps hint at invoice risks we must plug."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Specific IDs advance interviews and charging decisions."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear attribution calms staff and patient rumor cycles."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "No, the envelope didn't wink. The lens glare is classic polished-foil bounce, and our techs replicated it with three other boring envelopes and a janitor's cart reflector.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Sweeping denial invites memes and deepens skepticism."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarifying camera artifacts stabilizes routine operations."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Over-certainty before lab review hurts credibility."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We need caution until we validate any sensory claims."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "If someone tried a shell game with evidence, they'll find the table flipped. I asked for the raw timecodes to be posted, and the public can binge-watch bureaucracy in 4K.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Calling out gamesmanship projects strength and direction."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Escalation may rattle suppliers and late-night processes."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A firm warning supports chain-of-custody discipline."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Threats can stress clinic teams without adding clarity."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "The real plot twist is we still use pens at midnight. We're digitizing custody logs, adding two-factor sign-offs, and retiring emoji autographs before satire writes itself.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Snark burns time I could spend resetting the narrative."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor lets us pivot to systems and modernization."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection erodes seriousness and invites oversight."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Not clinically relevant, but we will counter misinformation."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
