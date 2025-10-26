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
      text: "The Nice-O-Meter now logs mandatory compliments. How do you square coerced praise with free speech in light of those confidential Justice memos?",
      answers: [
        {
          id: "a_r1",
          text: "Try a day without a single compliment and see if gravity quits. If it does, I’ll rescind this and send gravity a bouquet. Until then, we’re piloting civil warmth, not gagging dissent.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.MajorNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "The dare projects confidence, but it flirts with coercive optics."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Budget exposure rises if praise metrics distort incentives."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Tone is combative; it risks undermining consent-based compliance."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "We added a 'sincerely optional' clause, banned sarcasm scanners, and made misfires restorative. No one is punished for dissent; the memos triggered oversight panels and easy opt-outs.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Defensiveness reads as hedging, not leadership on rights."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Economic rationale is vague and unlikely to calm markets."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear guardrails reassure civil libertarians and courts alike."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Treasury’s models flagged adjective inflation and kindness deserts without structure. Caps curb linguistic bubbles, and kindness bonds absorb surplus praise to reach low-compliment blocks.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Deference to models suggests detachment from lived concerns."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Policy grounding aligns with our brief and market stability."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fiscal focus sidesteps the core First Amendment issues."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "This isn’t a mind-control ray; it’s a sticker chart with analytics. The loudest critics routinely post five compliments before breakfast and a seventh about their breakfast.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Jokes here erode credibility and appear to dodge scrutiny."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection increases uncertainty about administrative costs."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Softening tone helps, though oversight specifics remain thin."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Those Justice memos cite 'compliance fatigue' and bias in sarcasm detection. What guardrails keep dissent and marginalized voices from being nudged into punishment?",
        answers: [
          {
            id: "a_s1_1",
            text: "Authorized: On behalf of the Department of Justice, we required human-led reviews, cultural veto power, and a hard ban on auto-penalties. An independent ombuds portal handles appeals within 48 hours.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Delegating blame reads as buck-passing under pressure."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Operational ambiguity could swell program overhead."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Official clarity is useful, though not yet convincing."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Justice,
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "Independent community reviewers, accessible appeals, and no automated tone tickets mean disagreement isn’t a strike. We retrained data with culture checks so edge cases default to no action.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Welcoming oversight shows openness amid skepticism."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Guardrails add compliance costs despite benefits."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Due process pathways strengthen legitimacy and trust."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Early drafts did underestimate fatigue and read tone too literally. We stripped punitive triggers, added weekly skip credits, and firewalled the app from any benefits, housing, or records.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting flaws is honest but signals shaky rollout."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Course correction may trim wasted spending over time."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Concession highlights equal protection risks we flagged."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If the system can’t handle dissent, we mothball it. Seriously—flood it with principled critique and watch it learn to weight substance over sugar. We’re grading courage, not emojis.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Tough posture risks backlash if follow-through is weak."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Sunset pressure can discipline programmatic bloat."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Threatening mothballing undercuts our enforcement posture."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Treasury touts kindness bonds and adjective caps to prevent a compliment bubble. How do you avoid turning language into a commodity and rewarding the already-loud?",
        answers: [
          {
            id: "a_s2_1",
            text: "Kindness bonds are need-pegged credits, not clout coupons. Caps stop hoarding, and redistribution routes surplus praise to low-traffic blocks via neutral pools—never through celebrity accounts.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical framing lacks empathy for speech concerns."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Design choices should stabilize markets and curb gaming."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Commodification worries persist despite equity claims."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "We’re not taxing words or selling adjectives. The cap is a spam governor, not a revenue scheme, and nobody gets billed for calling a sandwich 'transcendent' twice.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denial strains credibility given visible tradeoffs."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissing risks rattles investors eyeing volatility."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Narrow scope language slightly reduces overreach fears."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "If language were for sale, my aunt would own the moon. This is civic plumbing for etiquette, not Wall Street for adjectives, and the pipes will stay public.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Levity here trivializes structural inequity critiques."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Flippancy clouds signals needed for price stability."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor disarms, but rights safeguards remain unclear."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Big megaphones can’t corner kindness when the ledger weights small, local exchanges higher. Try to game it; we tuned the system to reward human-scale praise, not blast-radius hype.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Challenging incumbents signals resolve to correct bias."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Aggressive stance risks shocks to evolving markets."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontation without detail worries civil rights staff."
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
        text: "If enforcement is 'restorative,' who runs the awkward workshops, and what happens when sarcasm is culture-specific? Will local boards have real veto power over penalties?",
        answers: [
          {
            id: "a_t1_1",
            text: "Mediators from civic colleges run sessions, not police. Local boards can veto any sanction, and a single cultural objection pauses the process until community standards are re-reviewed.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Outsourcing optics improve, yet mandate doubts remain."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Workshops add costs without clear fiscal offsets."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Restorative framing aligns with our proportionality goals."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Facilitators follow a published rubric with culture notes and a sarcasm ladder. Appeals are asynchronous, video-free, and resolved in 48 hours, limiting any forced niceness time.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process detail helps but feels bureaucratic and slow."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Standardization can prevent costly local inconsistencies."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Rigid rubrics risk codifying bias across communities."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "No hidden blacklists, no sarcasm tribunals. If a joke misreads, the default outcome is a nudge and a skip credit—not a scarlet 'Meh' stamped on someone’s file.",
            type: AnswerType.Deny,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blanket denials invite fact-checking and legal pushback."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency pledge may reduce audit burdens later."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overconfidence on lists and tribunals lacks evidence."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "At worst, you endure one circle of eye contact and granola bars. We can survive that as a republic, and yes, the snacks improved after the pilot’s raisin debacle.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Self-aware humor softens edges but not core concerns."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Minimizing penalties obscures recurring admin expense."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Trivializing penalties weakens deterrence and fairness."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Kindness bonds sound cute, but won’t returns favor huge platforms that rack up compliments fast? How will you stop praise arbitrage by influencers and their bot clouds?",
        answers: [
          {
            id: "a_t2_1",
            text: "Yields are inversely weighted to audience size and uniqueness, so one neighbor’s sincere nod beats a thousand bots. Anti-sybil checks and decay curves make hoarding and cross-posting pointless.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technocratic tone avoids the equity stakes at issue."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Anti-whale weights and KYC should deter large-scale gaming."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Bot filters may misfire against dialects and subcultures."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "There’s no payout for raw volume. Repeat senders and cross-linked accounts get auto-discounted, so bot farms register as white noise, not treasure.",
            type: AnswerType.Deny,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial clashes with evidence of platform advantages."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ignoring scale effects could fuel volatility and churn."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Volume caps help a bit, though loopholes are likely."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "We expect arbitrage attempts, so we budgeted audits and periodic resets. If a loophole pops, we nerf it in days and claw back credits quietly, no public shaming.",
            type: AnswerType.Admit,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Candor helps, yet oversight burdens may snowball."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Audit funding is prudent, but costs may exceed estimates."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Expected abuse underscores civil rights exposure zones."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If someone builds a bot that makes people feel genuinely seen, we’ll hire them to fix our help desk. Until then, real connection outperforms spam in every weighting.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Bold challenge inspires, but liability risks remain."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Inviting disruption can destabilize nascent instruments."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ends-justify-means tone alarms rights-minded advocates."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
