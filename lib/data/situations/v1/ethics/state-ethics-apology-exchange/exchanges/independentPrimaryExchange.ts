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
      text: "Does the Apology Exchange resolve standoffs faster, or does it just convert remorse into a leveraged feelings market with built-in ethical whiplash?",
      answers: [
        {
          id: "a_root_1",
          text: "I’ll level with you: we treated remorse as cyclical and hedged it like weather. I own that. We’re firewalling diplomacy from traders and refunding any cynicism this pilot accidentally monetized.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Owning the misread builds credibility to fix the ethical mechanics."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State worries this candor fuels scrutiny of our oversight."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "State’s apologies are remorse-backed and overcollateralized with eye contact, pauses, and sighs. Independent verifiers tag sincerity at the source, and we designed circuit breakers for moral volatility.",
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
              reaction: "Reassurance without contrition reads like spin to skeptical voters."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear guardrails calm markets and steady diplomatic channels."
              }
            }
          },
          followUpId: "q_sec_1"
        },
        {
          id: "a_root_3",
          text: "Early data show disputes resolving 42% faster with fewer retaliatory press releases. The exchange caps leverage, bans synthetic guilt swaps, and publishes a daily contrition curve for transparency.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Data talk helps, but it may seem cold amid an ethics uproar."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Methodology shows diligence, easing partners’ immediate anxieties."
              }
            }
          },
          followUpId: "q_sec_2"
        },
        {
          id: "a_root_4",
          text: "Let’s not confuse a pilot marketplace with the moral compass of our foreign policy. The ethics review is ongoing, so I won’t front-run the referees while they count the sighs.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Redirecting scope tempers blame but risks appearing evasive."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection invites probes into our exchange governance and audits."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_1",
        text: "If remorse becomes tradable, who audits sincerity, and what stops a panic run on apologies when hedge-funds short contrition at industrial scale?",
        answers: [
          {
            id: "a_sec1_1",
            text: "An independent Sincerity Board audits tone, timing, and restitution, using cross-cultural panels and anonymized transcripts. If spreads spike, auto-halts pause trading before shame turns systemic.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Independent audits sound prudent yet imply prior lax oversight."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "External auditing may curtail our agility and raise compliance costs."
                }
              }
            },
            followUpId: "q_ter_1"
          },
          {
            id: "a_sec1_2",
            text: "We’ve built moral liquidity backstops, not bailouts—think empathy lines of credit for genuine harm. No one can corner remorse, and spoofing contrition earns a permanent diplomacy timeout.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Backstops can read as moral bailouts, stirring populist backlash."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Stability tools prevent runs and protect small-mission participation."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "A run on apologies assumes people prefer loopholes to resolution. Our envoys don’t. They value durable peace over clever arbitrage, and the market rewards settlements, not theatrics.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Challenging the premise shows strength but risks tone-deafness."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissiveness could alienate allies concerned about sincerity."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "The inspector-general of Feelings has the pen right now. I won’t pre-grade sincerity while the ink is still drying, but we’ll brief you the moment the report clears lawyers and poets.",
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
                reaction: "Joking about oversight trivializes the stakes of the probe."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Keeping it light lowers temperature but invites credibility doubts."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_2",
        text: "Mea culpas are reportedly graded from AAA to B-minus; are envoys gaming the rubric with crocodile tears, or are those ratings truly remorse-backed?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Ratings weigh restitution, cultural norms, and follow-through, not tear volume. A ‘B-minus’ apology can clear if coupled with corrective action, and agencies disclose models to prevent rubric gaming.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Specific criteria project rigor and help rebuild public trust."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Detailing the rubric exposes attack surfaces if gaps appear."
                }
              }
            },
            followUpId: "q_ter_2"
          },
          {
            id: "a_sec2_2",
            text: "Grading isn’t a costume contest. Crocodile tears trigger penalties, clawbacks, and mandatory listening sessions. Real fixes boost ratings; performative angst gets delisted faster than a fake handshake.",
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
                reaction: "Overconfident tone risks backlash if any sham remorse sneaks through."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm assurances comfort partners wary of performative contrition."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "No, envoys can’t game this with theatrics. Pattern analysis flags performative remorse, and repeat offenders lose market access along with their frequent-forgiveness miles.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A clear denial shows spine but may age poorly if leaks surface."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "If later contradicted, our ratings shop looks captured or naive."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "We did see some grade inflation in week one, and we tightened the rubric. Now, only apologies with tangible remedies and verified contrition clear the higher tranches.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting inflation invites blame, yet signals corrective intent."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning early errors supports our credibility in fixing the rubric."
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
        text: "What protections exist for smaller delegations that can't afford premium apologies, and will bulk-bought regret crowd out face-to-face reconciliation?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Small delegations get fee waivers, pooled remorse facilities, and pro bono mediators. No one is priced out of making amends, and direct dialogue always clears without a ticket.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Subsidies ease optics but hint the system disadvantages many."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Access measures show care for equity among smaller delegations."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "There’s a floor market for community-level reconciliation that runs off-exchange. Bulk regret can’t crowd it out because person-to-person remedies hold seniority over any traded instrument.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Concrete protections reassure stakeholders we have a plan."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Formalizing floors could constrain flexible case-by-case relief."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "If bulk-bought regret replaces a handshake, reject it. The system only works if parties demand real fixes; markets are a tool, not a substitute teacher for accountability.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Drawing a red line sounds principled but risks confrontational tone."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Rejecting bulk buys may strain ties with partners needing options."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Look, we’re not selling forgiveness gift cards at a checkout aisle. The point is to structure apologies, not outsource judgment, and we’ll keep it that way.",
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
                reaction: "Flip humor risks minimizing harms to communities affected."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Casual framing cools headlines but weakens policy seriousness."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_2",
        text: "If the probe confirms manipulation, do you unwind apologies already redeemed, or let buyer-beware govern the emotional derivatives left on the books?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Manipulated apologies can be rescinded, with restitution unwound and records annotated. We maintain an ethics ledger that tracks provenance, so bad remorse can’t launder into policy outcomes.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Strong remedies show resolve but could implicate prior oversight."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Rescission tools protect integrity and victims of manipulation."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "We won’t rip up genuine reconciliations. The unwind targets fraud, not healing, and the default rule remains do no harm to victims or progress already made.",
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
                reaction: "Balanced approach calms nerves but may look timid on misconduct."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Avoiding reversals risks normalizing corners cut by bad actors."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "We won’t let buyer-beware govern ethics. That’s for yard sales, not diplomacy. If someone gamed the system, we’ll make parties whole and close the loopholes they crawled through.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hardline ethics stance appeals, yet opens us to hypocrisy claims."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear rejection of caveat emptor reinforces our moral baseline."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "If the probe nails intent, we’ll eat the costs of unwinding and own the headache. Better a messy fix now than institutionalizing counterfeit contrition for convenience.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Taking fiscal responsibility models accountability from the top."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Absorbing costs strains our budget and limits diplomatic programs."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
