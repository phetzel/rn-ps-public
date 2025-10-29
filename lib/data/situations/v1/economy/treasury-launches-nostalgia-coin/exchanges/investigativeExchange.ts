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
      id: "q1",
      text: "Who designs the Nostalgia Index, who the sealed memo calls the 'payout gatekeeper,' and how vendors are stopped from gaming childhood metrics?",
      answers: [
        {
          id: "q1_a1",
          text: "I’ll level with you: I okayed pegging a slice to the smell of summer sprinklers because joy is measurable. If nostalgia surges, we’ll mop with fiscal towels and own the buckets.",
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
              reaction: "I take responsibility for the choice and will explain it."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This framing blurs controls and adds audit risk for us."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It muddies our stance on legality during active reviews."
              }
            }
          }
        },
        {
          id: "q1_a2",
          text: "Design uses audited popsicle-stick tallies and grass-stain indices, scored by rotating vendors. The 'gatekeeper' verifies escrow and fraud flags, not value, and contracts carry clawbacks.",
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
              reaction: "Clarity on mechanics helps me show accountability."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear metrics and access reassure seniors and vendors."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Detail risks being read as endorsement of tender status."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "q1_a3",
          text: "Justice denies this is legal tender until Memory Units are defined by the courts. Treat it like prize tickets, not paychecks or bail, and we are policing vendor hype hard.",
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
              reaction: "Legal hedging makes me look evasive under pressure."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denial language invites claims our model lacks authority."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "This aligns with our caution and protects due process."
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "q1_a4",
          text: "Seniors and rural users get plain rules, phone help, and paper statements. No one has to download a memory-sniffing app to understand what their nostalgia is worth.",
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
              reaction: "Soothing tone without facts appears dismissive."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Simple supports can quell confusion in rural rollouts."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comfort talk may weaken our enforcement posture."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "The memo names a 'payout gatekeeper.' Who holds the contract, how were they chosen, and what clawbacks or appeals apply if scores skew payouts?",
        answers: [
          {
            id: "q2_a1",
            text: "Authorized: Treasury confirms the gatekeeper award is pending final countersignature with GateKitz Consortium after an open bake-off. No payouts flow until performance bonds clear.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModerateNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Defers to process, which can read as ducking."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Confirms award mechanics and steadies stakeholders."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Early disclosure risks harming litigation positions."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury
          },
          {
            id: "q2_a2",
            text: "Selection scores weighed uptime, rural access, and appeal capacity. Contracts bake in clawbacks for skewed scoring and a standing audit lane the public can track in real time.",
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
                reaction: "Process clarity reflects responsible oversight."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparent scoring boosts confidence in the contract."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Specifics could be construed as prejudging disputes."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "q2_a3",
            text: "We’re not doxxing bidders mid-process; half of them faint when a camera blinks. You’ll see the award file, redactions and all, faster than the paint dries on the seal.",
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
                reaction: "Guarding identities reads prudent under scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Stonewalling vibe invites accusations of favoritism."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limited disclosure still invites subpoena bait."
                }
              }
            }
          },
          {
            id: "q2_a4",
            text: "There is a no-fault appeal for seniors and rural residents. If a lemonade-stand memory gets misread, the coin is restored first and the lawyers fight later.",
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
                reaction: "Consolation without teeth sounds thin in audits."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Modest relief helps but lacks resource backing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Appeals framework respects fairness and due process."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "Define your data-mining partners and scoring rubric: what inputs count or get tossed, how consent works, and whether the 'lullaby API' logs users.",
        answers: [
          {
            id: "q3_a1",
            text: "Inputs include popsicle-stick counts, grass-stain saturation, AM-jingle recall, and manual scrapbook tags. We exclude medical, school, and payroll data, and all partners operate opt-in.",
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
                reaction: "Tech detail without guardrails seems aloof."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Specific inputs show rigor and reduce gaming."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Data scope risks privacy conflicts in cases."
                }
              }
            }
          },
          {
            id: "q3_a2",
            text: "Justice denies any partner access to legal records and says memory data is not a bank statement. Until rules land, treat Nostalgia Coin as tokens with receipts, not wages.",
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
                reaction: "Firm denials can look cagey about unknowns."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Legal distancing weakens our program authority."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear denial supports our legal framework."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "q3_a3",
            text: "Consent text sits at a fourth-grade reading level, with one-tap delete. The lullaby API logs only error rates and uptime, not your bedtime stories or snack choices.",
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
                reaction: "User comfort talk feels like dodging hard issues."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Plain consent helps equity and comprehension."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances may dilute compliance signaling."
                }
              }
            }
          },
          {
            id: "q3_a4",
            text: "To tech firms eyeing the trough: if your free flashlight app grabs Nana’s scrapbook, expect audits, fines, and a starring role on the public spreadsheet of shame.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calling out abuse signals leadership and resolve."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tough line risks alienating compliant vendors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Deterrent tone strengthens our enforcement hand."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q4",
        text: "On audits: show the paper trail for popsicle-stick counts, conflict screens, and whether the gatekeeper’s model secrecy blocks due-process challenges.",
        answers: [
          {
            id: "q4_a1",
            text: "Audit trails track hashed stick serials, stain spectra, and time-of-capture, tied to signed vendor keys. Conflict screens flag staff links, and users get an appeal portal with stamps.",
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
                reaction: "Concrete audit tools show control and care."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Traceability standards strengthen credibility."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Detail may complicate discovery in litigation."
                }
              }
            }
          },
          {
            id: "q4_a2",
            text: "We deny any 'black-box' shield from review beyond trade secrets. Models must deposit coefficients with the Ombuds Vault so a judge can peek without gifting competitors.",
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
                reaction: "Denials risk looking like semantic gymnastics."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "This stance suggests opacity and invites probes."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear limit preserves reviews and court access."
                }
              }
            }
          },
          {
            id: "q4_a3",
            text: "If the gatekeeper hides weights or stonewalls appeals, we’ll freeze payouts, claw triple fees, and let another vendor try adult math. Secrecy is not a business model.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Combative tone can look defensive and brittle."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Conditional penalties deter model secrecy."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Threat posture may hinder negotiated fixes."
                }
              }
            }
          },
          {
            id: "q4_a4",
            text: "Happy to demo the audit kiosk next week. It hums like a lawn mower, prints grass-stained receipts, and yes, you can smell the control samples.",
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
                reaction: "Humor may charm but can trivialize oversight."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Light tone signals drift, not discipline."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Levity undercuts our authority on due process."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "Has Justice classified memory data as a financial record, and what penalties hit firms that repurpose Nostalgia metrics for ads, loans, or bail decisions?",
        answers: [
          {
            id: "q5_a1",
            text: "Justice denies Nostalgia Coin is legal tender until courts define Memory Units. Do not pay wages, rent, taxes, or bail with it, and don’t pledge it against real collateral.",
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
                reaction: "Legal parsing makes me seem detached from impact."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "This reduces our say and complicates rollout."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clarifying status protects the public and courts."
                }
              }
            }
          },
          {
            id: "q5_a2",
            text: "Draft guidance treats memory data as sensitive financial telemetry. Misuse draws tiered fines, API suspensions, and, for repeaters, referrals to the Bureau of Earnest Fun.",
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
                reaction: "Guardrails and penalties project accountability."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Treating data as sensitive strengthens controls."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Guidance risks prejudging matters before courts."
                }
              }
            }
          },
          {
            id: "q5_a3",
            text: "Whistleblowers get protections, and rural users can file by mail with sticker sheets. Declining to share memories will not jeopardize pensions, clinics, or grocery aid.",
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
                reaction: "Assurances without clear sanctions feel weak."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Access lanes for rural users improve equity."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft tone dulls deterrence on misuse."
                }
              }
            }
          },
          {
            id: "q5_a4",
            text: "Courts move at museum speed; bring a snack. Until definitions land, act like these are carnival tickets with barcodes, not life-and-debt instruments.",
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
                reaction: "Plain talk and patience can humanize policy."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Delay message signals uncertainty in execution."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Jokes about pace erode credibility on enforcement."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
