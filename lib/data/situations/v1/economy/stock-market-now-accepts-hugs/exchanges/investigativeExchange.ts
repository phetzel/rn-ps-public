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
      text: "With hugs and high-fives now tradable collateral, filings leave custody and pricing opaque; who captures the hug spread, and how does the paper trail actually work?",
      answers: [
        {
          id: "a_r1",
          text: "The President has been candid: he shorted indifference and went long tenderness. If prices sulk, he'll average down with a national bear hug and a nacho break, then disclose the receipts.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            "hug-peg": OutcomeModifierWeight.SlightNegative, // -4
            "algo-applause": OutcomeModifierWeight.Neutral, // 0
            "quilt-index": OutcomeModifierWeight.SlightPositive, // +4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Owning the chaos, he frames affection risk as deliberate strategy."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Treasury warns spreads will be policed to curb cuddle arbitrage."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Health team flags consent hygiene as non-negotiable in trading."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Framing hugs as a skim ignores public health. Affection is PPE for the soul, so we require three-beat holds, sanitizer spot checks, and audible consent chimes before anyone touches a ledger.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            "hug-peg": OutcomeModifierWeight.StrongPositive,
            "algo-applause": OutcomeModifierWeight.SlightPositive,
            "quilt-index": OutcomeModifierWeight.MajorNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He bristles at the framing and distances markets from intent."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They note fee skimming claims merit audits before rule tweaks."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "HHS champions consent discipline and ergonomic embrace norms."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "Treasury of Monetary Hugs will regulate like soft commodities: consent audits, timestamped embraces, and side-hugs face higher haircuts to tame cuddle inflation and close custody gaps.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            "hug-peg": OutcomeModifierWeight.Neutral, // 0
            "algo-applause": OutcomeModifierWeight.SlightNegative, // -4
            "quilt-index": OutcomeModifierWeight.SlightPositive, // +4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He concedes operational gaps while pushing oversight timelines."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "They commit to clear haircuts and audit trails for custody."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Neutral on mechanics; health safeguards apply regardless of venue."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Authorized to share from the Treasury of Monetary Hugs: clearinghouses will time-stamp, net, and escrow embrace IOUs, cap spread rents, and name beneficiaries in filings to reveal who skims what.",
          type: AnswerType.Authorized,
          outcomeModifiers: {
            "hug-peg": OutcomeModifierWeight.ModeratePositive,
            "algo-applause": OutcomeModifierWeight.Neutral,
            "quilt-index": OutcomeModifierWeight.ModerateNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "He authorizes briefings but signals limited tolerance for leaks."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "They stress only licensed entities can intermediate affection."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "HHS reiterates sanitizer checks and audible consent standards."
              }
            }
          },
          authorizedCabinetMemberId: CabinetStaticId.Treasury,
          followUpId: "q_sec1"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Those Treasury of Monetary Hugs memos hype 'bear hug' stress tests; what models flag liquidity tears, and who sets the consent-volatility bands traders must honor?",
        answers: [
          {
            id: "a_s1_1",
            text: "We're not going to litigate draft memos line by line. The models aren't romantic; they're boring math with clipboards, and they're being peer-reviewed so thoroughly even a teddy bear would ask for a nap.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightPositive,
              "algo-applause": OutcomeModifierWeight.SlightNegative,
              "quilt-index": OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He sidesteps memo minutiae, citing ongoing interagency vetting."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Models overview lands softly, hinting at staged parameter rollout."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health risk bands need clarity; deflection raises compliance doubts."
                }
              }
            }
          },
          {
            id: "a_s1_2",
            text: "The framework blends vibe-beta and consent-volatility into a three-squeeze scenario, with stress paths from awkward side-hugs to full embraces. Bands are set by an independent Consent Calibration Board.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightPositive,
              "algo-applause": OutcomeModifierWeight.Neutral,
              "quilt-index": OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He welcomes transparency on model guts and public stress metrics."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Detailed guardrails on bands and beta bolster market discipline."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Consent-volatility mapping must include fatigue and sanitizer drift."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_3",
            text: "Guardrails are baked in: circuit cuddles, margin-hug calls, and consent pings at each step. The goal is fewer surprises and zero messy breakups between markets and basic decency.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightNegative,
              "algo-applause": OutcomeModifierWeight.Neutral,
              "quilt-index": OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances are helpful, but execution risk remains material."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Circuit cuddles and haircuts are credible if testing is robust."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Safety pauses and chimes align with trauma-informed best practice."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "The memos don't 'hype' anything; they document how we'll break the bad habit of treating people like spreadsheets. If traders want hugs, they'll play by human rules without creative loopholes.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.StrongPositive,
              "algo-applause": OutcomeModifierWeight.SlightPositive,
              "quilt-index": OutcomeModifierWeight.MajorNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He contests the 'hype' label, but tone risks inflaming critics."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They push back firmly, yet still owe specifics on calibration."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Confrontation lands, though bedside manner in trading pits matters."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "On custody, who holds the hug, how is warmth marked-to-market overnight, and what stops brokers from rehypothecating affection across multiple books?",
        answers: [
          {
            id: "a_s2_1",
            text: "Rehypothecating affection is prohibited. You can't pledge the same hug twice, just like you can't high-five with a phantom hand, and violations trigger instant unwind orders and public consent notices.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightNegative,
              "algo-applause": OutcomeModifierWeight.SlightPositive,
              "quilt-index": OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denials may backfire without documentary custody evidence."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Prohibitions need teeth; exam schedules and penalties must bite."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear limits help, but consent drift across books remains a worry."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "Warmth is marked with independent observers, consent chimes, and temperature-neutral proxies after hours. No one is sneaking hugs into the vents; custody is auditable down to the elbow angle.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightNegative,
              "algo-applause": OutcomeModifierWeight.Neutral,
              "quilt-index": OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance eases heat, though independent marks must be timely."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Third-party marks can work if incentive conflicts are ring-fenced."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Health audits and chimes reduce risk of coerced or sloppy contact."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Custody chains list who initiated, who received, duration, and mutual consent hashes. Warmth-keepers must segregate embraces in 'clean rooms' to block spread skimming and are spot-audited weekly.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightPositive,
              "algo-applause": OutcomeModifierWeight.Neutral,
              "quilt-index": OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He praises specifics while pushing faster rollout of controls."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparent hashes and trails should deter multi-book mischief."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Even with controls, fatigue monitoring and breaks are essential."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_4",
            text: "We'd love to brief the committee before we brief the tabloids. What matters is that the rules punish sloppy cuddling and reward clean books, and we'll happily bring charts big enough to hug.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightPositive,
              "algo-applause": OutcomeModifierWeight.SlightNegative,
              "quilt-index": OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deferring to committees reads evasive under investigative glare."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Waiting on briefings stalls rulemaking and emboldens abusers."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Delays could erode hygiene and consent culture on busy floors."
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
        text: "Define the 'three-squeeze scenario': if reciprocal vibes drop 30%, how do margin hugs trigger, and when do circuit cuddles pause trading to stop a pile-on?",
        answers: [
          {
            id: "a_t1_1",
            text: "At minus-30% reciprocal vibes, margin-hug thresholds trip, converting optional side-hugs into mandatory reassessments with fresh consent pings. Circuit cuddles auto-pause once two bands breach within a minute.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightPositive,
              "algo-applause": OutcomeModifierWeight.Neutral,
              "quilt-index": OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Specific thresholds project competence amid vibe volatility."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear triggers and haircuts anchor expectations and margins."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Safety caveats matter; monitor strain and sanitize between squeezes."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Nobody is forced into contact. If vibes crater, positions de-risk to air-hugs, and the floor shifts to signals and thumbs-ups until consent rebounds above the safety band.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightNegative,
              "algo-applause": OutcomeModifierWeight.Neutral,
              "quilt-index": OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He centers consent, but mechanics still feel underspecified."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft language without math risks muddling clearing protocols."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Emphasizing choice is good; posture and PPE checks must be strict."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "There is no secret cuddle cabal controlling the pause button. The triggers are codified, audited, and published so traders can't massage the stopwatch with a conveniently slow snuggle.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightNegative,
              "algo-applause": OutcomeModifierWeight.SlightPositive,
              "quilt-index": OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blanket denials ring hollow without logs and testing evidence."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissing concerns blunts deterrence against coordination."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Health dynamics exist; denying them undercuts floor safety."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Happy to walk you through the glidepath offline; it involves more flowcharts than feelings. Short version: the system cools off before it gets creepy, which is all anyone really wants.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightPositive,
              "algo-applause": OutcomeModifierWeight.SlightNegative,
              "quilt-index": OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Offering offline details reads as guarded, not fully open."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Without public specs, risk managers will improvise unevenly."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Opaque glidepaths hinder ergonomic training and consent cadence."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Tracing shows 'warmth warehouses' skim points on snuggles; what's the cap on hug-spread fees, the audit trail for tip-offs, and penalties for cuddle-wash trades?",
        answers: [
          {
            id: "a_t2_1",
            text: "If a warehouse thinks it can siphon warmth like it's tap water, it's in for a rude chill. Caps are tight, and anyone gaming it will find their license on ice and their fees refunded to the hugged.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.StrongPositive,
              "algo-applause": OutcomeModifierWeight.SlightPositive,
              "quilt-index": OutcomeModifierWeight.MajorNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Tough talk is cathartic, but due process must still prevail."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive posture helps, yet cap details must be explicit."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Crackdowns should preserve consent rituals and recovery breaks."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Spread fees cap at five basis cuddles per hundred warmth units, disclosed in plain language and machine-readable form. Tip-offs route to an encrypted snuggleline with time-stamped custody proofs.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.Neutral, // 0
              "algo-applause": OutcomeModifierWeight.SlightNegative, // -4
              "quilt-index": OutcomeModifierWeight.SlightPositive, // +4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He backs caps and penalties with clear, testable definitions."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Fee caps and hashes clarify costs and deter wash warmth trades."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strict audits are fine if ergonomics and consent are safeguarded."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Audits cross-match custody hashes, consent chimes, and exchange prints. If someone invents a cuddle-wash, the paper trail turns fluorescent, and enforcement follows with a very un-cozy knock.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightNegative,
              "algo-applause": OutcomeModifierWeight.Neutral,
              "quilt-index": OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comforting tone helps, though enforcement timelines feel soft."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Assurances without data may invite spread gaming at scale."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Monitoring helps; staff rotations prevent fatigue and pressure."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "No one gets to launder hugs through shell sweaters. If that's attempted, trades are voided, gains clawed back, and repeat actors face permanent cuddle bans across licensed venues.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              "hug-peg": OutcomeModifierWeight.SlightNegative,
              "algo-applause": OutcomeModifierWeight.SlightPositive,
              "quilt-index": OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm denial without evidence will not silence fee-skim critics."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Strong words must pair with seizures, fines, and clawbacks."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Refuting laundering claims is fine, but audits must be relentless."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
