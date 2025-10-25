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
      text: "Recognizing 'imaginary allies' sounds cute, but what are the concrete changes to visas, trade, and airport security, beyond playground calm?",
      answers: [
        {
          id: "a_root_1",
          text: "Look, if an ally wants a seat at the grown-up table, they can bring grown-up numbers—crayon spreadsheets accepted. The President welcomes proof over pretend press releases.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Directly challenges the premise and demands concrete evidence."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Undercuts State’s recognition rationale and treaty framing."
              }
            }
          },
          followUpId: "q_sec_2"
        },
        {
          id: "a_root_2",
          text: "Recognition implements the Make-Believe Accord: token visas as cultural exchanges, sandbox-border protocols, and no new fees this quarter. Logistics roll out with invisible-ink audits and real receipts.",
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
              reaction: "Acknowledges costs while signaling added administrative steps."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Aligns with State’s informative brief and treaty compliance."
              }
            }
          },
          followUpId: "q_sec_1"
        },
        {
          id: "a_root_3",
          text: "Our goal is fewer tantrums at the gate and zero chaos at customs. The nuts-and-bolts stay familiar to travelers; the whimsy happens behind the glass with trained staff.",
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
              reaction: "Downplays concerns and risks appearing unserious on security."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Signals cooperation but offers limited operational detail."
              }
            }
          }
        },
        {
          id: "a_root_4",
          text: "Before we relitigate Santa Claus in the briefing room, let the agencies publish the rulebook Friday. You’ll see costs, timelines, and which crayons are carry-on friendly.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Deflects scrutiny and may appear evasive under questioning."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Sidesteps policy specifics and weakens message discipline."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_1",
        text: "What happens when an 'imaginary passport' meets a very real metal detector—new queues, new staff, or just a sticker and a shrug at checkpoints?",
        answers: [
          {
            id: "a_s1_1",
            text: "Checkpoint flow stays the same; imaginary passports get a scannable cameo sticker tied to the traveler’s real ID. Staffing shifts are minimal, and costs come from existing facilitation funds.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Supports a pragmatic approach without overpromising."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Concedes minimal change, diminishing State’s policy heft."
                }
              }
            },
            followUpId: "q_ter_1"
          },
          {
            id: "a_s1_2",
            text: "No, we are not building a 'pretend-only' terminal or paying marshals to guard invisible motorcades. The scenario where make-believe swamps security is simply not in the plan.",
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
                reaction: "Dismissive tone could backfire if checkpoint delays emerge."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Affirms avoidance of costly infrastructure and new queues."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "If you’re asking whether a dragon can carry-on, that’s an airport security authority call. We coordinate; they decide which fantasies fit in the overhead bin.",
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
                reaction: "Humor here risks credibility when safety is the question."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Keeps tone light while endorsing basic operational guidance."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "The training module is lighter than a juice box and tested with actual parents. Travelers won’t notice more than a cheerful decal and quicker kid-lane triage.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reassures travelers with modest, concrete steps."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Undervalues implementation burdens on partner agencies."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_2",
        text: "On trade, how do you enforce contracts in invisible ink and tariffs priced in sand dollars without turning customs into a sandbox audit nightmare?",
        answers: [
          {
            id: "a_s2_1",
            text: "Invisible-ink terms are mirrored in digital text, and sand-dollar pricing converts to pegged tokens at entry. Disputes trigger play-arb panels backed by real escrow.",
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
                reaction: "Technocratic framing may seem detached from frontline risks."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Strongly backs enforceable protocols and mirrored contracts."
                }
              }
            },
            followUpId: "q_ter_2"
          },
          {
            id: "a_s2_2",
            text: "Some pilot deals are, frankly, beta. We’re stress-testing conversion rates and making sure no one pays taxes on fairy dust. That’s why volumes and exposure are capped early.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Acknowledges limits while keeping pressure for performance."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Admits uncertainty, weakening State’s negotiating position."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "If a plush rhinoceros shows up declaring diplomatic cargo, customs will—shockingly—use the same tariff book. The animals stay stuffed; the duties stay real.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Humor diffuses tension without conceding core leverage."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dodges details and reduces confidence in State oversight."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Trade lanes won’t jam. We’re folding this into existing low-value declarations, so your coffee beans clear like normal while the cloud-castle widgets queue elsewhere.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances could read as complacent if delays materialize."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Projects steady coordination across customs and trade lanes."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_1",
        text: "Who pays for the training, decals, and 'pretend ambassador' meet-and-greets at airports—taxpayers, airlines, or the Imaginary Allies themselves?",
        answers: [
          {
            id: "a_t1_1",
            text: "Startup costs are covered by a micro-surcharge on novelty travel documents and a tourism grant already appropriated. No new tax line; airlines recoup via co-branded kid lanes.",
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
                reaction: "New fees risk political blowback over traveler costs."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Secures a funding stream consistent with agreements."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "There is no secret slush fund for invisible cupcakes. If a cost can’t be itemized and audited, it isn’t getting bought with public money.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm denial sets a clear boundary against perceived waste."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Overly defensive and hints at opacity in State finances."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We’ll brief the budgeteers after they stop arguing over whether glitter counts as a hazardous sparkle. The line items will be public before anything glues to a kiosk.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Keeps focus on the budget process rather than theatrics."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Evasion reads as unprepared on cost accountability."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Think pilot-program light: tape, training, and signage, not marble consulates. If it spikes, we sunset it faster than a tantrum ends with a nap.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Minimizing costs may backfire if pilot overruns occur."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Positions State as prudent by limiting pilot program scope."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_2",
        text: "If an imaginary ally defaults on a make-believe loan, who arbitrates, and how do you repossess collateral like a cloud castle or a moon license?",
        answers: [
          {
            id: "a_t2_1",
            text: "Disputes go to the Sandbox Tribunal, a joint board with observers and binding decisions in the real ledger. Collateral converts to escrowed royalties, not seized clouds.",
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
                reaction: "Process-heavy answer may seem bureaucratic and slow."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Explains governance and due process for disputes."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "If you want moon rights, show moon revenue. Defaulters can’t hide behind finger paints; the numbers either add up or the privileges fold, no hard feelings.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Sets measurable standards and demands compliance."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard line risks escalating tensions with partners."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "We do not maintain a fleet of hot air balloons for repo operations. The only thing we’re seizing is the conversation, which moves to escrow the moment ink vanishes.",
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
                reaction: "Deflection suggests thin planning for contingencies."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Keeps options open without committing resources."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "The system is built to fail safe: limited exposure, pre-funded escrows, and automatic pauses before anything snowballs. No one’s mortgage hinges on a cloud castle.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Highlights safeguards that limit taxpayer exposure."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Concedes defaults, inviting criticism of program design."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
