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
      text: "Does recognizing worm colonies and exporting certified soil to micronations cut emissions, or just turn curbside compost into a passport line?",
      answers: [
        {
          id: "a_root_1",
          text: "We’re moving at worm speed by design. While critics sprint in circles, the Accord quietly turns leftovers into leverage; gardens get greener and the air gets a notch cleaner.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "A playful pause keeps critics chasing their own tales."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection muddies protocols we worked to clarify."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Vagueness spooks markets and invites mispricing risks."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Recognition is narrow and rule-bound: limited consular functions, no bin-based immunity, and accreditation only for verifiable colonies. We can walk through the criteria if helpful.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Over-explaining risks headlines about red tape."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear limits strengthen recognition and reduce abuse."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Boundaries help, but costs could still creep upward."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_3",
          text: "Soil-credits don’t get a free ride. We’re imposing caps, reserve buffers, and real penalties for double-counting, because markets behave until they don’t and then we behave for them.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Confrontational tone may alienate swing listeners."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fiscal sternness can strain small partners’ capacity."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Guardrails calm speculation and protect real signals."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_4",
          text: "Your green bin won’t morph into border control. For most households this means better pickup, clearer instructions, and a modest rebate for clean scraps, not a customs officer by the curb.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Reassurance steadies the conversation and tempo."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Too soft a message can blur enforcement credibility."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Soothing talk risks dulling price-discipline cues."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "On soil-credit math: how will caps and verification prevent a compost bubble, and who audits micronations so one balcony box can’t mint infinite points?",
        answers: [
          {
            id: "a_sec1_1",
            text: "We’re building a double-entry compost ledger: satellite soil imaging, random worm-census spot checks, and third-party auditors from the Institute of Sturdy Clipboards. Happy to detail the pipeline.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical detail can feel chilly without context."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Interoperable rules curb window-box inflation."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Compliance layers can raise transaction friction."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "If micronations want credits, they’ll meet the same hard caps and collateral rules as megacities. No collateral, no credits; no data, no deal. That’s not austerity, that’s adult supervision.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "A tough stance may read as combative to advocates."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strict parity could squeeze tiny jurisdictions."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Caps and audits cool exuberance before it bubbles."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Price guardrails and issuance limits make this a steady simmer, not a boil-over. Households will see simple opt-ins, not a trading floor under the sink, and that’s by design.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calm tone invites cooperation from skeptics."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Comfort alone won’t catch creative accounting."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft guardrails can tempt speculative issuance."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "We’re not minting magic beans. One planter cannot produce infinite credits, because feedstock, yield, and transport are metered against strict baselines verified by boring people with clipboards.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Plain denial can cut through but invites follow-ups."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissing concerns risks losing procedural trust."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Brush-offs rarely deter opportunistic pricing."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Statecraft for worms: will recognized colonies get immunities, embassy bins, and fast-track lines, or is this limited credentials to aid climate goals without clogging s​",
        answers: [
          {
            id: "a_sec2_1",
            text: "Credentials are scoped: liaison tags for designated colonies, immunity limited to compost operations, and disputes routed through the Office of Pocket Treaties. We can outline recognition tiers.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Specifics help but may sound bureaucratic."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Scoped credentials respect borders and function."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Process adds cost if we over-specify lanes."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_2",
            text: "Let’s not confuse a worm with a motorcade. The only limo involved is a banana peel; we’re keeping this humble, helpful, and very far from velvet ropes at the recycling center.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A light quip keeps the story from spiraling."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Humor blurs lines that treaties must define."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Loose framing can unsettle market expectations."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "No one’s skipping the line at city hall because a worm raised a tiny flag. Residents will mostly notice cleaner carts and fewer fruit flies, not diplomatic choreography.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reassurance lowers temperature in local forums."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Soothing claims can undercut verification rigor."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comfort talk weakens deterrence for bad actors."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "If anyone tries to launder trash as ‘embassy waste,’ we’ll yank credentials fast. Diplomatic status doesn’t mean compost carte blanche; it means measurable stewardship with consequences.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Firm enforcement stance projects competence."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sanctions talk can strain neighborly cooperation."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Threat clarity dampens arbitrage and spoofing."
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
        text: "Shipping certified soil to micronations risks pests, paperwork, and carbon cost. What makes it net-positive, and how will customs and audits avoid a dirt-smuggling c​",
        answers: [
          {
            id: "a_ter1_1",
            text: "Shipments are kiln-pasteurized, sealed, and traced by QR tags tied to credit issuance. Customs pre-clearance and quarantine beds are budgeted, with penalties tall enough to scare creative smugglers.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jargon risks losing audiences beyond specialists."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Traceability tightens borders and trust."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Tracking adds overhead that must be justified."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "Yes, moving dirt burns fuel, which is why exports are capped and bundled with backhaul logistics. If the math turns against us, we pause shipments before it turns into boutique dirt tourism.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Candor earns credibility with neutral observers."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting costs can embolden regulatory creep."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Fuel talk stirs fears of hidden budget leakage."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "Try gaming it and you forfeit credits, pay clawbacks, and lose market access. That’s not bluster; it’s written into the registry so the rules hit wallets, not just press releases.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Confrontation can sound punitive to small players."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard lines complicate municipal partnerships."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Penalties deter fraud and stabilize pricing."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Most compost stays local; the export lane is a narrow relief valve for over-supply. Residents will still see their soil feeding nearby parks long before any crate boards a slow boat.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Assurances calm households weighing participation."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Narrow lanes risk being read as optional rules."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Comfort framing may slacken cost discipline."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "How will you recognize worm colonies without accrediting every window box, and who handles border spats when planter boxes claim the same banana peel jurisdiction?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Colonies must meet biomass, activity, and continuity thresholds, with tamper-evident markers and periodic counts. Disputes go to a municipal arbiter trained in soil law and patient conflict resolution.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Understated tone keeps expectations realistic."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Crisp thresholds protect integrity and scale."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Implementation still carries measurable cost."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "No, a solo worm with a blog doesn’t qualify. Recognition requires sustained ecological service and a host agreement, not a catchy flag or a certificate printed at home.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A curt no signals resolve amid noisy claims."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Over-denial can trample legitimate edge cases."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissal may obscure real exposure to fraud."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "If two planter boxes feud over a peel, we suggest mediation, then composting it and moving on. The peel doesn’t care about borders, and frankly neither do the microbes.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A wink disarms critics without fueling headlines."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Playfulness risks minimizing treaty detail."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Levity can spook investors assessing credit risk."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "These rules keep the club small and functional. For citizens, that translates to cleaner alleys and fewer smelly bins, not paperwork about sovereignty at the curb.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Comfort tone helps, but details cannot lag."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance alone cannot police recognition."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A small incentive note keeps markets engaged."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
