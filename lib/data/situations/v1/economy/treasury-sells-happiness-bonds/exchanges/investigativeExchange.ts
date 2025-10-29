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
      text: "Happiness Bonds pay on a National Mood Index; who picked the grinometers, who audits the formula, and who stops swap desks from juicing bliss before payout?",
      answers: [
        {
          id: "q_root_a1",
          text: "People don’t answer to doom spreadsheets; they grade them. Our economy is constitutionally buoyant, and these bonds ask wallets to smile when the nation already does.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "He riffs that smiles are sovereign, not securitized, to rally confidence."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "They see rhetoric complicating pending cases over manipulation and fraud."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They worry jokes muddy guidance while desks parse hedging rules."
              }
            }
          }
        },
        {
          id: "q_root_a2",
          text: "The Treasury Bureau publishes the index spec, certifies vendors, and posts quarterly audits. Hedging rules are out for comment, and the Cheer Markets Board monitors swaps for funny business.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He cedes spotlight to technocrats, risking a dry tone amid frenzy."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "They fear disclosure cadence could weaken courtroom positioning."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "They applaud clarity and believe markets will stabilize on specs."
              }
            }
          },
          followUpId: "q_sec_vendor"
        },
        {
          id: "q_root_a3",
          text: "We deny any lane for gaming bliss. Market manipulation, data spoofing, or insider cue-card leaks will be investigated, and bad actors will meet a very un-cheerful prosecution.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He sounds combative about gaming claims, which may test credibility."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "They welcome a firm denial to anchor enforcement and litigation."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "They worry hard lines could chill liquidity and vendor cooperation."
              }
            }
          },
          followUpId: "q_sec_swaps"
        },
        {
          id: "q_root_a4",
          text: "Investors like clarity more than cynicism; as methodology is published and oversight bites, the mood will reflect reality, not stagecraft, and payouts will follow real smiles.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "He stresses steadiness and growth, inviting patience from investors."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "They like de-escalation that lowers pressure on emergency actions."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They caution that soothing tone may undercut urgency on controls."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_vendor",
        text: "We found shadow vendors routing emoji data via shell co-ops; will you publish the index code, vendor list, and contracts before the first coupon date?",
        answers: [
          {
            id: "q_sec_vendor_a1",
            text: "Yes. The specification, reference code, vendor registry, and redacted contracts will post on the Mirth Portal before coupon day, with hash-locked datasets so auditors can replicate the index.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He backs full publication to show nothing is hidden from taxpayers."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They appreciate transparency that supports future discovery disputes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They flag resource strain to scrub code and contracts before release."
                }
              }
            },
            followUpId: "q_ter_model"
          },
          {
            id: "q_sec_vendor_a2",
            text: "No shadow vendors are authorized. Every grinometers outfit is certified, conflict-checked, and subject to surprise audits, and any emoji laundromats will be booted on sight.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He dismisses vendor shadows, which could backfire if leaks land."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They value a clear denial that narrows the scope of subpoenas."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They fear a flat denial could age poorly if contractor errors surface."
                }
              }
            }
          },
          {
            id: "q_sec_vendor_a3",
            text: "Transparency is a feature here, not a press release. Independent quant collectives will red-team the math, and we’re committed to fixing bugs before they fix markets.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He frames openness as ongoing, which may feel vague to skeptics."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They worry promises without dates weaken enforcement posture."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They like the tone but note delivery risks around timelines."
                }
              }
            }
          },
          {
            id: "q_sec_vendor_a4",
            text: "We’d love to publish it yesterday, but lawyers keep stapling adjectives to commas. The minute the paperwork stops breeding, the portal goes live with everything you asked.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He needles critics with humor, easing heat but risking trivialization."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They dislike levity that could be cited as dismissive in filings."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear quips invite more scrutiny of procurement pathways."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_swaps",
        text: "Banks pitch Smile Swaps that pay if mood sours; did the Treasury Bureau pre-clear hedges, and what blocks insider shorting during survey windows?",
        answers: [
          {
            id: "q_sec_swaps_a1",
            text: "Insiders don’t get a hall pass to short joy. Trading during restricted survey windows will be barred, spoofing flagged, and violations referred for enforcement, not for applause.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He condemns gaming, but sternness may unsettle already nervous desks."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They welcome stated intent to prosecute manipulation aggressively."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They worry harsh talk may spook hedgers and reduce bond uptake."
                }
              }
            },
            followUpId: "q_ter_subpoena"
          },
          {
            id: "q_sec_swaps_a2",
            text: "Hedging guidelines cap notional exposure, require public reporting, and ban contracts keyed to unpublished inputs. The Cheer Markets Board coordinates with regulators to police the gray edges.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He touts guardrails and audits to convey competence under pressure."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They caution that shared details can telegraph enforcement playbooks."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They see measured hedging rules as supportive of orderly markets."
                }
              }
            }
          },
          {
            id: "q_sec_swaps_a3",
            text: "Survey windows are blinded, sample frames are rotated, and we seed leak traps that make fake signals expensive. If someone tries to mug happiness, the odds mug them back.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He downplays risks; critics may see naivete about complex incentives."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear softness could embolden edge-case manipulation."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They expect calmer desks and better compliance during windows."
                }
              }
            }
          },
          {
            id: "q_sec_swaps_a4",
            text: "Wall Street renames umbrellas ‘anti-rain derivatives’ and calls it innovation. We call it paperwork with supervision, and we’ve brought both.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He jokes about Wall Street buzzwords to deflate hype and panic."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They dislike mockery that might weaken future courtroom gravitas."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry quips obscure specific compliance expectations."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_model",
        text: "If the index drifts, can vendors tweak weights mid-quarter, and who signs the memo when yawning owls overrule the grinometers?",
        answers: [
          {
            id: "q_ter_model_a1",
            text: "No mid-quarter tinkering. Weights lock on day one, and any change requires notice, testing, and a new series label so no one confuses patched bliss with prior results.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He rules out tweaks, projecting firmness that could read inflexible."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They appreciate crisp rules that simplify evidentiary arguments."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They fear zero-flex policy if sensors fail could impair issuance."
                }
              }
            }
          },
          {
            id: "q_ter_model_a2",
            text: "A governance council—statisticians, behavioralists, and two very skeptical owls—votes on model changes after open comment, with full versioning and backtests published for scrutiny.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He highlights governance design to show expert stewardship and rigor."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They note openness might complicate positions in active litigation."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They welcome process clarity that reassures markets and vendors."
                }
              }
            }
          },
          {
            id: "q_ter_model_a3",
            text: "If a sensor sneezes, we failover to redundancy rather than rewire the ship mid-voyage. Stability first, fixes next, with receipts stapled to the receipts.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He emphasizes resilience, but gloss may seem light on accountability."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry reassurance without citations weakens deterrence."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They see redundancy talk calming counterparties and ratings."
                }
              }
            }
          },
          {
            id: "q_ter_model_a4",
            text: "The owls prefer the term ‘executive birds.’ They don’t overrule; they slow blink until the humans explain the math twice, which is our kind of accountability.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He leans into humor about owls, easing tension while risking drift."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They fear jokes could be quoted as dismissive of judicial review."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They caution levity may blur operational responsibilities."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_subpoena",
        text: "Plaintiffs claim mood is a security; when subpoenas seek raw vibes, will Justice compel citizen mood diaries or toss the case for lack of standing?",
        answers: [
          {
            id: "q_ter_subpoena_a1",
            text: "We will not compel diaries of private feelings. We deny that raw vibes are negotiable instruments, and we’ll argue that unexpressed sentiments lack standing in any court that still blinks.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He rejects compelled diaries, projecting rights focus with some risk."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They back a strong stance against fishing expeditions on private data."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They worry constraints could limit access to needed aggregated feeds."
                }
              }
            }
          },
          {
            id: "q_ter_subpoena_a2",
            text: "Our position is that only aggregated, anonymized mood indicators inform financial products. Discovery demands will be narrowed to governance records, not personal emotive data.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He explains privacy standards, which could soothe but invite parsing."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They fear precision could limit prosecutorial latitude in court."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They caution that data-sharing caveats may slow analytics."
                }
              }
            }
          },
          {
            id: "q_ter_subpoena_a3",
            text: "Civil liberties don’t evaporate because someone securitized a smile. People keep their privacy, and the system keeps its audit trail—those aren’t mutually exclusive.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He centers civil liberties to frame policy as humane and durable."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They welcome values framing that supports narrow, lawful procedures."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They note tone is good, but practical data needs remain unresolved."
                }
              }
            }
          },
          {
            id: "q_ter_subpoena_a4",
            text: "If counsel insists on subpoenaing vibes, we’ll provide a white noise machine and a mirror. The law deals in facts, not vibes that hum when you tilt the room.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He jokes about subpoenaing vibes, which could seem glib under oath."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They dislike levity that litigants may cite as minimizing harms."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They see humor briefly relieving pressure on data teams."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
