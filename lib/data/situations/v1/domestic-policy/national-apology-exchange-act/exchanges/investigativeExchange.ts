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
      text: "Apology Week sounds touching, but who profits—who gets the ForgiveLine contract, who brokers credits, and who sets those denial fees?",
      answers: [
        {
          id: "a_r1",
          text: "Let’s challenge the premise: if you dent a lamppost’s feelings, you should face it and apologize, not finance a hedge fund of guilt. This program rewards sincerity, not middlemen.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "A bold jab at absurdity keeps me in charge of the narrative."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Budget hawks dislike this twist; it clouds clean scoring."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "No direct health claim here; we’ll stay neutral and monitor."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "From Treasury’s fiscal note: apology-to-credit caps are modest, denial fee ceilings are provisional, and procurement milestones are posted. We can walk you through the vendor shortlist in detail.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Dry numbers blunt the spectacle; I lose some spotlight."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clarity on conversion calms markets and plan sponsors."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Framing feels clinical; compassion reads under-dosed."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Health & Heart Services built the ForgiveLine to de-escalate guilt, not monetize it. Counselors don’t upsell sorrow, and calls aren’t bait for fees. Privacy and calm come first.",
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
              reaction: "Safety talk softens me; edge blurs and heat dissipates."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Soft assurances risk fiscal slippage in expectations."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Reassuring tone steadies callers and clinical partners."
              }
            }
          }
        },
        {
          id: "a_r4",
          text: "Let’s not mythologize fees as secret taxes; the drafts are online, redlines and all. If you want to drill into pricing guardrails and enforcement, we can turn to that next.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.ModeratePositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Dodging details looks slippery and dims my control."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A little pragmatism helps, but the vagueness spooks CFOs."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Deflection agitates caregivers and hotline staff."
              }
            }
          },
          followUpId: "q_sec2"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Who is on the ForgiveLine vendor shortlist, what are the scoring weights, and how were lobbyist lunches firewalled from the bid paperwork?",
        answers: [
          {
            id: "a_s1_1",
            text: "Treasury is authorized to say the procurement stays competitive, with escrow triggers and anti-crony clauses. Names post after the ethics scrub, with redactions only for security testing integrity.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process talk cools the room but starves my momentum."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Tighter procurement limits flexibility in cost control."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency comforts patient advocates and call centers."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury
          },
          {
            id: "a_s1_2",
            text: "The matrix weighs hotline uptime, counselor certification, complaint heat maps, and price realism. Past performance outranks swag lunches, and independent auditors sit in on scoring.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear scoring shows command, boosting credibility briefly."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Defined weights aid pricing and reassure procurement desks."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Over-indexing on uptime can neglect counseling quality."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "No, nobody won this on a bar napkin. Cozy breakfasts don’t beat the thresholds, and any contact logs from bidders are posted with timestamps, sign-ins, and the menu of regrets.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "A flat denial risks backlash if facts drip out later."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissiveness invites budget skepticism from auditors."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm tone reduces rumor stress among helpline staff."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If someone tries to backdoor this with sticker packs and stress balls, they’ll flunk burn-in tests. Happy to walk you through the subcontract layers and data fences next.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Threats to crack down can read defensive and cagey."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A deterrent stance can curb padding, aiding cost control."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive posture risks chilling legitimate reporting."
                }
              }
            },
            followUpId: "q_ter1"
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Drafts say 'denial fees' fund the program if apologies dip; who sets the price, what stops quota creep, and where are the revenue models posted?",
        answers: [
          {
            id: "a_s2_1",
            text: "Denial fees are capped at nuisance levels, waivable for hardship, and audited if anyone nudges callers away from apologizing. No counselor bonuses depend on non-apologies.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Calling fees tiny dulls my edge and invites scoffs."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Caps squeeze contingency space and stress revenue plans."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Guardrails reassure families that remorse won’t be punished."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "Rates follow an index of call volume, admin cost, and seasonal grudge levels, published monthly. We’re drafting exchange rules for credits and can detail the broker guardrails next.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Index jargon buries the lede and muddies my stance."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Rule-based rates calm markets and streamline compliance."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "A mechanistic frame can feel cold to callers in distress."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_3",
            text: "Let’s not pretend a price tag can muzzle remorse; people can apologize free, loudly, and often. The fee is a speed bump for serial non-sorrys, not a toll on contrition.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Punching back at cynicism sharpens my challenger brand."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric without math spooks forecasters and actuaries."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too combative a tone can deter vulnerable callers."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Early drafts leaned too hard on denial-fee revenue. We corrected that with hard caps, sunsets, and public dashboards, because shame shouldn’t be the budget office’s side hustle.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting past drafts signals drift and weakens control."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Walking back revenue plans complicates fiscal messaging."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning missteps builds trust with patients and operators."
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
        text: "Are any shell subcontractors parked behind the ForgiveLine prime, and will data or hold-music royalties become the real profit center?",
        answers: [
          {
            id: "a_t1_1",
            text: "The prime must disclose every subcontract tier, beneficial owners, and data pathways. Any resale of anonymized remorse metrics requires explicit opt-in and a public royalty ledger.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Detailing controls is sober but drains headline energy."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Full-tier disclosure deters arbitrage and shadow fees."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Paperwork focus risks delays for crisis callers."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "No shell circus hiding under the tent. If a vendor launders data through a cousin LLC, the contract auto-voids and the penalty fund buys better hold music out of their pockets.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blanket denial can age poorly if exceptions surface."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "If later revised, denials erode budget credibility."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Simple assurance soothes privacy and ethics concerns."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Your call isn’t a yard sale. We strip identifiers, shard storage, and offer one-tap purges, because forgiveness shouldn’t come with a tracking collar or spam-cloud confetti.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassuring tone cools the room but blunts my contrast."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Generous privacy promises can inflate vendor costs."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear de-identification boosts trust in helpline use."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "If anyone’s profit depends on hoarding your secrets, they can apologize to the ethics board until their headset dies. We won’t buy it, and the Board of Nope won’t either.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Calling out profiteers reinforces my fearless posture."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Populist hits unsettle partners needed for delivery."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Harsh tone can spook trauma-informed providers."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Apology credits already trade on chat boards; will licensed brokers bundle contrition, who takes a cut, and how do you police fake remorse?",
        answers: [
          {
            id: "a_t2_1",
            text: "Any broker must be licensed, disclose spreads, and settle on a public tape. Bundles of contrition can’t exceed household caps, and wash-remorse is a specifically barred practice.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical guardrails read dull and sap my showmanship."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Licensing and spreads disclosure stabilize trading."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Compliance load must not slow access for families."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "We aren’t minting a SorryCoin or letting whales corner regret futures. If you spot a shadow market, send it to the tipline and watch us pop that bubble in broad daylight.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Mocking hype risks dismissing real enforcement needs."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overly rigid tone can choke useful market signals."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear rejection of gimmicks reassures vulnerable users."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Most folks won’t need a broker; filing is simpler than a toaster warranty. If you do hire help, fees are capped, disclosures are plain, and refunds trigger when filings flop.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Simplifying the path calms nerves but dulls my edge."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "DIY filing reduces broker fees but shrinks oversight."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Ease-of-use messaging boosts access and reduces anxiety."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If a guy in a trench coat offers ‘premium absolutions’ behind the bus depot, the only thing getting absolved is his inventory during a sting. Don’t buy it, buy coffee.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Jokes about scams read evasive if fraud later surfaces."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Public warnings deter spoofing and stabilize markets."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Flippant tone undercuts counseling seriousness."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
