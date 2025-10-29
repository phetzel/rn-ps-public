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
      text: "Morality credits let officials buy absolution from brokers; who profited, who got declined at checkout, and will the Dome end this means testing?",
      answers: [
        {
          id: "a_r1",
          text: "We’re not auctioning virtue; we’re recalling it. The President will sunset the swaps, open a free apology window, and launch a sin buyback so misconduct is fixed with policy, not punch‑cards.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "A bold reset beats pay‑to‑repent; I’ll front the hugs and end the racket."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Unfunded contrition risks market jitters; this sounds fiscally sloppy."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Care beats coupons; we can calm stress with clinics, not clearinghouses."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rhetoric is fine, but we still need admissible trails and charges."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Treasury has frozen new issuances, cooled spread‑chasing, and is drafting fee caps and small‑user protections. No “Virtue Recession” is coming; the only bubble we want is in the bath of reform.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Freezing trades without values makes me look reactive, not principled."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Stopping issuance stabilized spreads and cooled speculative churn."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Pauses don’t heal; people need services, not quiet order books."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "A pause helps, but it cannot substitute for evidence and enforcement."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Justice secured ledgers, not souls. We preserved transaction trails, issued holds on broker servers, and will publish a scope note so no one mistakes a QR code for a pardon.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.MajorPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Plain updates are safe, but they won’t satisfy the public’s outrage."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legal clarity alone won’t calm desks if redemption math still floats."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Facts help, yet stress persists when care pathways are unclear."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "We protected chain of custody to keep cases clean and defensible."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Rollout guardrails were thin, and some chancers sprinted through. That’s on us; we’re closing loopholes, refunding junk credits, and ending the pay‑for‑pardon experiment.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Owning missteps is right, but it leaves me carrying the scandal."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting guardrail gaps signals oversight lapses to the street."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Thin guardrails meant harm; we must pivot fast to care, not markets."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Candor helps cooperation, though it may embolden defense counsel."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Brokers bundled virtue into fee-stacked tranches; did Treasury monitor spreads, and did prices quietly exclude low-rank officials and petitioners?",
        answers: [
          {
            id: "a_s1_1",
            text: "Yes. Treasury watched volume, froze exotic tranches, and is designing fee caps plus a fairness floor. Small actors get a no‑minimum lane so virtue isn’t gated by a platinum card.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Backing Treasury oversight shows control without embracing the market."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "We froze exotics and narrowed spreads before liquidity went sideways."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Monitoring prices misses the human toll of a stressful moral economy."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Market trims are fine, but they don’t preserve evidence integrity."
                }
              }
            }
          },
          {
            id: "a_s1_2",
            text: "We saw broker spreads widen when scandal chatter spiked, and flagged desks bundling “contrition microtranches.” A public dashboard will show fees, redlines, and who kept swiping.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Noting spreads sounds technical while people feel rigged out of mercy."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Observing isn’t enough if brokers exploited asymmetries for fees."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Widening spreads mirror distress; that’s a clinical red flag."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Pattern shifts support probable cause and help target subpoenas."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "We won’t price‑regulate morality from a podium. The rule text goes out for comment this week, and we’ll let the wonks duel it out on paper instead of here.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Refusing to regulate reads as aloof while trust is collapsing."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hands‑off talk unsettles desks; ambiguity inflates moral risk premia."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Opting out of pricing virtue aligns with care over coupons."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Standing back complicates our remedies if harm was foreseeable."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "The premise is wrong: morality isn’t a coupon book. We’re replacing the churn with care—naps, counseling, kale pilots—and we’ll target help to those the market ghosted.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Challenging the premise works rhetorically, yet victims want relief."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissing spreads ignores signals that flagged misconduct early."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Exactly; stress isn’t a market failure, it’s a care delivery gap."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Philosophy won’t substitute for enforceable violations."
                }
              }
            },
            followUpId: "q_ter1"
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Justice says it seized transaction ledgers; what exactly was taken, who is under review, and will cases ignore those priced out by broker fees?",
        answers: [
          {
            id: "a_s2_1",
            text: "Justice took encrypted transaction journals, broker order books, and server images under warrant. The review covers sellers, buyers, and facilitators, with parallel civil remedies preserved.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical seizures sound cold unless we pair them with accountability."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Seizing journals helps, but fee restitution remains unresolved."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Logs don’t soothe harmed communities still shut out by brokers."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "We grabbed the records, preserved hashes, and kept cases intact."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "We did not seize confessions, therapy notes, or private conscience. Anyone saying we bagged ‘souls’ is selling incense with fine print.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "The denial shields privacy, but it risks appearing evasive."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Limiting scope calms markets worried about spillover seizures."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Therapy privacy is vital; still, we must address systemic stress."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We narrowly tailored to law; broader grabs would be unlawful."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Due process is boring and that’s the point. No show trials; evidence first, charges only where facts meet law, and protection for those exploited by the fee ladder.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reassurance with timelines shows control without theatrics."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Process talk won’t repay those hit by fee stacks and slippage."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Due process is fine; care access still needs proactive outreach."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Quiet procedure protects convictions and blunts defense challenges."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "If brokers gamed contrition, we’ll claw profits, mandate refunds, and bar ghost identities. We’ll also wall off ethics policy from anyone taking a spread, permanently.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Strong words help, but they must not taint ongoing prosecutions."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "No immediate market signal; we will watch spreads for aftershocks."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clawbacks plus care can repair harm for those priced out."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Charging promises are fine; evidence must lead, not slogans."
                }
              }
            },
            followUpId: "q_ter2"
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter1",
        text: "If trading morality fueled stress and inequity, will HHS replace the market with care—naps, counseling, kale—and how will excluded communities be found and helped?",
        answers: [
          {
            id: "a_t1_1",
            text: "We’ll pilot a no‑fee Morality Clinic: instant apologies, restorative circles, and nap therapy. No means testing; if virtue math stressed you out, you qualify and we pay for care.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "I support replacing swaps with humane services people can trust."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clinics cost money; we need funding clarity to avoid fiscal drag."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Care over coupons will lower stress and restore equitable access."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Programs help, but we still need accountability for broker abuse."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "HHS is mapping exclusion by rejection logs, complaint hotlines, and anonymized ZIP clusters. We’ll publish heat maps and route counselors and grants where declines piled up.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Mapping exclusions is useful, yet it risks sounding bureaucratic."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Data is fine; restitution and controls still need funding plans."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We’ll use logs to reach those rejected and connect them to care."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Specificity about sources strengthens admissibility and audits."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "If you couldn’t swipe redemption, you’ll get priority outreach and refunds. The market sunsets, the care stays, and nobody needs a broker to feel decent.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Prioritizing the excluded is right, but delivery must be swift."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Prioritization without budgets prompts uncertainty on costs."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "We’ll triage access, waive fees, and speed counseling placements."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Preference rules must not prejudice active investigations."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We’re not prescribing kale as penance; it’s optional leafiness. Protocols will be evidence‑based and supervised by people who own fewer beanbags than you fear.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection on kale risks trivializing real harm and inequity."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Voluntary guidance avoids perverse pricing and calms overreach fears."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Care remains optional, but we must be clear it replaces trading."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Light tone can undermine the seriousness of pending cases."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Beyond raids and pauses, what reforms land now—refunds, sunlight, apology coin, sin buyback—and how do you stop virtue derivatives from popping back under a cuddlier logo",
        answers: [
          {
            id: "a_t2_1",
            text: "We’ll introduce an apology coin for symbolic restitution and a one‑time sin buyback that funds community repair, not broker yachts. No points or perks—just penance.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "A symbolic coin signals reform, but it must not invite speculation."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Token design needs guardrails to avoid new arbitrage channels."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "If it funds care, symbolism can translate into access and calm."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We’ll ensure tokens don’t taint evidence or plea discussions."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Timeline: pause now, audits in two weeks, refund portal in thirty days, statute fixes next session. We’ll publish a no‑go list for any ‘virtue product’ dressed as fintech.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Schedules help, yet the public wants restitution and reform now."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audits are prudent, but delays can unsettle risk pricing again."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Timeline alone won’t reduce stress without immediate services."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear phases protect cases and keep reforms within legal bounds."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "There will be a refund pool funded by seized fees and fines, with automatic relief for small cases. Sunlight rules and whistleblower bounties keep the lights on.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Refunds are fair, but we must ensure no one profiteers on the fix."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "A seized‑fee pool stabilizes expectations and deters repeat schemes."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Refunds don’t heal; we still need outreach and counseling capacity."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Repayments must align with evidence to avoid prejudicing charges."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We learned that morality and middlemen don’t mix. Expect a clean ban on contrition resale and tighter ethics firewalls so this doesn’t boomerang with a cuddlier mascot.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting failure helps trust, but it highlights prior misjudgment."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Blanket bans risk flight to gray markets if we lack oversight."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We’ll replace markets with care, but trust rebuild takes time."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A clear lesson learned supports compliance in future cases."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
