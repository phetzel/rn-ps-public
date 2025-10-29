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
      text: "Do Happiness Bonds actually cushion household budgets, or did Treasury just outsource fiscal policy to a national mood ring with coupons?",
      answers: [
        {
          id: "a_r1_challenge",
          text: "We’re not outsourcing the budget to a vibe-o-meter; we’re challenging cynicism. Our economy’s mood is resilient, and these bonds pay a bonus when people feel the growth they’re already experiencing.",
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
              reaction: "A confident push against fatalism; it rallies support credibly."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Casual tone risks undercutting legal rigor around bond claims."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Message helps calm markets but could blur technical guardrails."
              }
            }
          }
        },
        {
          id: "a_r2_inform",
          text: "Payouts track a published National Mood Index, audited by certified grinometers and rotating civic panels. We’ll post bands, caps, and sampling rules so traders can limber up without mistaking rumor for coupon math.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Dry technics may read as abdication of leadership on household pain."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Precise metrics help in court, but sweeping claims invite suits."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear mechanics bolster credibility and price stability signals."
              }
            }
          },
          followUpId: "q_sec_markets"
        },
        {
          id: "a_r3_deny",
          text: "Feelings are not negotiable instruments, and Justice will say so in court. The contract keys off a public index, not a vibe confession, and no subpoena can compel a smile to testify.",
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
              reaction: "Legalistic posture feels cold and may alienate worried families."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Strong standing argument fortifies our litigation posture quickly."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissive tone can spook traders about policy durability."
              }
            }
          },
          followUpId: "q_sec_laws"
        },
        {
          id: "a_r4_reassure",
          text: "Wallets aren’t hostage to vibes. Core budgets run on revenue and votes; the mood link is a sidecar that cushions households in good times without steering the fiscal bus.",
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
              reaction: "Reassurances risk sounding glib if wallets feel tighter this week."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Narrowing fear reduces frivolous filings and courtroom theatrics."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "May mute urgency for operational fixes that markets expect."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_markets",
        text: "Markets are already day-trading 'smile spreads' off the Mood Index; how will Treasury keep price discovery from turning into meme-driven whiplash?",
        answers: [
          {
            id: "a_s1_inform",
            text: "We’ll run anti-manipulation screens, cap daily index moves, and diversify inputs beyond social chatter. Price bands and auction rules temper swings so coupons don’t ping when a meme blips.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process talk will not satisfy voters if volatility hits paychecks."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Compliance plans help, but enforcement gaps could be exposed."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Concrete controls signal seriousness and deter manipulation."
                }
              }
            }
          },
          {
            id: "a_s1_reassure",
            text: "For households and pensions, mechanics are boring by design. Coupons smooth over months, not minutes, and guardrails favor stability for savers over spectacle for day-traders.",
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
                reaction: "Soothing words risk backlash if charts swing by lunchtime."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Lower panic reduces opportunistic litigation and venue shopping."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Downplaying risk may embolden speculators to probe limits."
                }
              }
            },
            followUpId: "q_ter_households"
          },
          {
            id: "a_s1_deflect",
            text: "If markets want a mood ring, they can buy jewelry; we sell bonds. We’ll let hype huddle in the comments while the math takes the wheel.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Snark can land, but it diminishes the gravity of market risks."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor drains heat from lawsuits alleging emotional securities."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissiveness undercuts Treasury credibility with active traders."
                }
              }
            }
          },
          {
            id: "a_s1_challenge",
            text: "The idea that ‘vibes’ trump fundamentals flatters doom-influencers. Growth, employment, and prices still anchor demand; the index merely shares the tailwinds with holders.",
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
                reaction: "Asserting fundamentals can project strength in noisy markets."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overconfidence could be cited against us in manipulation claims."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Neutral for operations; tone neither helps nor harms execution."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_laws",
        text: "Lawsuits claim Happiness Bonds securitize feelings; what is Justice’s case that vibes lack standing, and can courts audit a grin without measuring the teeth?",
        answers: [
          {
            id: "a_s2_deny",
            text: "Justice will argue there's no property right in a passing mood. The bond is keyed to a publicly defined index, not a private emotion, so there's nothing for plaintiffs to own or enjoin.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.Neutral, // 0
              o3: OutcomeModifierWeight.SlightPositive, // +4
              o4: OutcomeModifierWeight.Neutral, // 0
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Strict denials sound technical and may seem out of touch emotionally."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "This centers doctrine on standing and limits speculative claims."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "An aggressive legal frame may unsettle buyers awaiting clarity."
                }
              }
            }
          },
          {
            id: "a_s2_inform",
            text: "Expect a brisk timetable: venue consolidation, expedited briefs, and expert testimony on index reliability. Oversight remains with lawmakers, not the imaginary Ministry of Smiles.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Timelines are helpful, but absence of empathy could draw criticism."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fast consolidation is good, yet appears heavy-handed to plaintiffs."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Predictability aids issuance and secondary market confidence."
                }
              }
            },
            followUpId: "q_ter_governance"
          },
          {
            id: "a_s2_deflect",
            text: "No one is subpoenaing your chuckle. If anyone tries to depose a grin, we’ll object on the grounds that it’s both leading and extremely goofy.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Levity risks trivializing citizens' concerns about fairness."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Reframing reduces pressure on courts to police subjective moods."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes do not price auctions; desks want concrete assurances."
                }
              }
            }
          },
          {
            id: "a_s2_admit",
            text: "We admit edge cases happen—satire makes strange law. But the framework treats the index like weather data: observable, contestable, and not a soul to be cross-examined.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Owning edge cases reads honest and can preempt harsher attacks."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Concessions could weaken our stance on standing and statutory scope."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Limited admissions build trust without derailing implementation."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_households",
        text: "If traders can goose the Mood Index with stunts, what happens to ordinary savers, pensions, and local budgets tied to these payouts when the vibe whipsaws?",
        answers: [
          {
            id: "a_t1_reassure",
            text: "Savers see averaged coupons, not jump cuts. Pensions and local finances hedge with longer ladders, and the index weighting leans on verified panels, not the prank du jour.",
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
                reaction: "Empathy helps, yet voters may doubt buffers until checks arrive."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Less fear means fewer speculative filings targeting the index."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Overpromising stability could backfire if key metrics wobble."
                }
              }
            }
          },
          {
            id: "a_t1_inform",
            text: "Coupons accrue on a rolling basis with smoothing and caps, and payouts reset quarterly. Components include surveys, anonymized transactions, and ambient data audited for noise.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Mechanics alone will not soothe families watching bills go up."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Technicalities will not stop creative suits if losses spike."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear accrual rules shield savers from sharp coupon whipsaws."
                }
              }
            }
          },
          {
            id: "a_t1_challenge",
            text: "If someone tries to yank the meter with a stunt, markets will price the joke and move on. We challenge the premise that a meme army can outmuscle diversified sampling.",
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
                reaction: "Firm stance against stunts shows resolve to defend households."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Threat posture invites claims of chill on speech and satire."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Deterrence messaging helps curb manipulation attempts."
                }
              }
            }
          },
          {
            id: "a_t1_deny",
            text: "We deny that stunts can materially sway the index. The methodology discounts anomalies and requires persistent signals before any coupon budges.",
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
                reaction: "Blanket denial risks disbelief if visible swings keep occurring."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "A bright line simplifies arguments against speculative standing."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Desks may worry Treasury is ignoring real market microstructure."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_governance",
        text: "If courts toss or bless Happiness Bonds, who actually steers fiscal levers—budget nerds or the national pep squad—and what democratic check keeps either honest?",
        answers: [
          {
            id: "a_t2_inform",
            text: "Budgets remain appropriated by legislators, audited by watchdogs, and executed by agencies. The bond automates a bonus tied to a public index with open rules and public appeals.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process clarity can sound bureaucratic in a high-stakes debate."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clean lines of authority support defensible legal boundaries."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Strong governance mapping reassures investors and agencies."
                }
              }
            }
          },
          {
            id: "a_t2_reassure",
            text: "No pep squad can write checks. Elections, statutes, and independent auditors police the purse, and any index tweak faces hearings, sunlight, and inevitable boredom.",
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
                reaction: "Calming tone helps, but critics may label the stance complacent."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Affirming checks and balances undercuts constitutional challenges."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Too much calm can suggest inattention to operational risks."
                }
              }
            }
          },
          {
            id: "a_t2_deflect",
            text: "If there’s a pep squad, they’ll need uniforms, hearings, and a budget score. By the time that’s done, the vibe will have yawned itself back to neutral.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes about uniforms risk trivializing institutional design."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Deflection blunts overreach claims without conceding doctrine."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Humor does little to clarify roles during periods of market stress."
                }
              }
            }
          },
          {
            id: "a_t2_challenge",
            text: "We challenge the myth that this rewires sovereignty. It’s a nudge layered on normal budgeting, not a coup by confetti; voters still hold the off switch.",
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
                reaction: "Calling out myths projects leadership and democratic confidence."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Aggressive tone may fuel suits alleging executive overreach."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Bold defense steadies desks seeking direction from the top."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
