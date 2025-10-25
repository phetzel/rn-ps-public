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
      text: "With State steering blimp sky-gardening, who profits from patented auroras, which communities lose their stars, and who approved surveillance-grade glow?",
      answers: [
        {
          id: "a_r1",
          text: "The President won’t let the night be privatized; he’ll debate the blimps, the lobbyists, and the clouds if needed. If profits eclipse people, we’ll flip the switch off.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.ModeratePositive,
            outcome_2: OutcomeModifierWeight.SlightNegative,
            outcome_3: OutcomeModifierWeight.SlightPositive,
            outcome_4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Clear stand against privatizing the night; assertive and values-driven."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Overstates executive control and discounts State’s legal remit."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "State coordinates sky‑gardening under open-licensing rules, community permits, and airspace compacts. Any patents are time-limited, and usage audits live on public dashboards.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.SlightPositive,
            outcome_2: OutcomeModifierWeight.ModeratePositive,
            outcome_3: OutcomeModifierWeight.ModerateNegative,
            outcome_4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Reads like agency spin; needs tougher safeguards and oversight."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Accurately reflects our open licensing and careful route governance."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "No town is forced under a permanent glow; routes are scheduled, dimmable, and subject to local veto. Surveillance isn’t baked in, and oversight boards hold the remote.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.SlightNegative,
            outcome_2: OutcomeModifierWeight.ModerateNegative,
            outcome_3: OutcomeModifierWeight.ModeratePositive,
            outcome_4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Reassures on consent and routing; reflects community protections."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Minimizes persistent glow risks and legal constraints on routing."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "Look, the blimps don’t bill by the moonbeam; we’re not here to referee every lobbyist’s poetry slam. The process is ongoing, and details live with the agencies.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.ModerateNegative,
            outcome_2: OutcomeModifierWeight.SlightPositive,
            outcome_3: OutcomeModifierWeight.SlightNegative,
            outcome_4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Deflection dodges core issues of surveillance and equity at stake."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Keeps tone calm, but we still enforce caps and audits behind the humor."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Patent lawyers call the auroras “proprietary weather.” Which firms own the color stacks, what royalties trail a blimp pass, and what did lobbyists bargain away?",
        answers: [
          {
            id: "a_s1_1",
            text: "Authorized on behalf of State: color spectra used in public sky‑gardens are licensed non‑exclusively, with capped fees and sunset clauses. Lobby access logs and MOUs are posted quarterly.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModeratePositive,
              outcome_2: OutcomeModifierWeight.ModerateNegative,
              outcome_3: OutcomeModifierWeight.SlightPositive,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Too cozy with proprietary weather; public leverage looks weak."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Formal authorization aligns with our cross-licensing obligations."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.State,
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "Bid winners must escrow IP so the public keeps access if they stall or gouge. No patents on “the night”—just on specific engineering. Community co‑ops can license at zero cost.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightNegative,
              outcome_2: OutcomeModifierWeight.ModeratePositive,
              outcome_3: OutcomeModifierWeight.ModerateNegative,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Transparency promise is thin without enforceable penalties."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Escrow and access terms track our procurement commitments."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "If a lobbyist thinks they can meter the Milky Way, they can argue with a town of stargazers and a President who loves a cancellation. Try us.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightPositive,
              outcome_2: OutcomeModifierWeight.SlightNegative,
              outcome_3: OutcomeModifierWeight.ModeratePositive,
              outcome_4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Strong pushback on rent-seeking; message defends public commons."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric risks litigation blowback and jeopardizes negotiations."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Nobody sold naming rights to the constellations, and no contract hands over exclusive skies. Claims of cartelized colors are dramatic, not documented.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModerateNegative,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.SlightNegative,
              outcome_4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Helpful correction, but it sidesteps structural IP power."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Denying scope invites distrust; better to cite the actual limits."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "About those “surveillance-grade” auroras: who decides where they glow, can neighborhoods opt out without lawyering up, and what stops the blimps from doubling as sky-cams",
        answers: [
          {
            id: "a_s2_1",
            text: "Routes are set by a tri‑level board with community seats, astronomer seats, and privacy auditors. Opt‑outs use a one‑page form, and sensors default to off with sealed covers.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModeratePositive,
              outcome_2: OutcomeModifierWeight.SlightNegative,
              outcome_3: OutcomeModifierWeight.SlightPositive,
              outcome_4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process-heavy answer without firm privacy guarantees; underwhelming."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Describes the three-level routing model and opt-out mechanisms."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "If a town wants stars, they get stars; if they want color, they get dimmable color. We’re not sneaking spy gear into a light show, and independent auditors watch every toggle.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightNegative,
              outcome_2: OutcomeModifierWeight.ModeratePositive,
              outcome_3: OutcomeModifierWeight.ModerateNegative,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Good on community choice, but details on enforcement are thin."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Overpromises frictionless opt-outs beyond what statutes allow."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "We learned from early pilots that glow spill was real, and we overhauled dimming and scheduling. That’s why we now publish blackout calendars before a blimp lifts.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightPositive,
              outcome_2: OutcomeModifierWeight.ModerateNegative,
              outcome_3: OutcomeModifierWeight.ModeratePositive,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Honest about early mistakes and fixes; builds credibility."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting spill helps, but it frames compliance as optional."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Let’s not turn LEDs into conspiracy NFTs. The serious policy lives in the oversight charter, and the tech specs are a novel no one reads except our engineers.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModerateNegative,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.SlightNegative,
              outcome_4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Minimizes legitimate concerns and mocks critics; unhelpful tone."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Re-centers serious safeguards, though tone could be less dismissive."
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
        text: "When a blimp paints the sky teal-on-plum, who pockets the micro-royalties, and what anti-monopoly brakes keep one firm from owning half the spectrum by Tuesday?",
        answers: [
          {
            id: "a_t1_1",
            text: "Royalties flow into a public trust first, then to vendors per capped rates, with community rebates for dark‑sky nights. Spectrum leases are diversified by rule and audited quarterly.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModeratePositive,
              outcome_2: OutcomeModifierWeight.SlightNegative,
              outcome_3: OutcomeModifierWeight.SlightPositive,
              outcome_4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Public trust idea is fine, but it lacks binding anti-graft rules."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Matches our revenue flow design and public-first distribution."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "If a vendor hints at hoarding hues, the cap trips, auctions pause, and co‑ops get priority. No one is building a monopoly on purple while we’re awake.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightNegative,
              outcome_2: OutcomeModifierWeight.ModeratePositive,
              outcome_3: OutcomeModifierWeight.ModerateNegative,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Signals deterrence, though enforcement triggers need proof."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Suggests instant bans we cannot impose without due process."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "If a color cartel emerges, we’ll litigate so hard their briefcases grow rainbows. The sky belongs to the people, not a color catalog with a lobbyist.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightPositive,
              outcome_2: OutcomeModifierWeight.ModerateNegative,
              outcome_3: OutcomeModifierWeight.ModeratePositive,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Aggressive stance against cartels; stakes out anti-monopoly values."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Litigate-first posture risks delaying service and draining funds."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "The rumor that a single firm trademarked “dusk” is fiction. Contracts bar that move, and our lawyers would frame the cease‑and‑desist just for the décor.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModerateNegative,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.SlightNegative,
              outcome_4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Snark avoids accountability; facts on spectrum caps are needed."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarifies rumor control, but we should still cite the cap table."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "What, precisely, do the aurora rigs record, how is any telemetry scrubbed, and where can residents see the audit trail without a decoder ring or a subpoena?",
        answers: [
          {
            id: "a_t2_1",
            text: "Telemetry is limited to weather, altitude, and brightness; no faces, phones, or plates, ever. Hash‑chained logs are posted daily with red‑team reports and uptime notes.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModeratePositive,
              outcome_2: OutcomeModifierWeight.SlightNegative,
              outcome_3: OutcomeModifierWeight.SlightPositive,
              outcome_4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Technical list lacks clear civil-liberties guardrails and audits."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Accurate scope with specific telemetry limits and retention rules."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "If the system can’t prove it forgot you, it can’t launch. That’s the privacy trigger, and we’ve used it to wave off flights when the audit lights flicker.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightNegative,
              outcome_2: OutcomeModifierWeight.ModeratePositive,
              outcome_3: OutcomeModifierWeight.ModerateNegative,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Promising standard, but independent verification must be routine."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Guarantee overreaches; deletion proofs require layered oversight."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "We did ship one firmware patch late in testing, and we owned it. Now updates require two independent sign‑offs and a public dry run in empty airspace.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightPositive,
              outcome_2: OutcomeModifierWeight.ModerateNegative,
              outcome_3: OutcomeModifierWeight.ModeratePositive,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Late patch admission raises trust issues without full timeline."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning the miss and fix shows process maturity and auditability."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Anyone alleging covert scanning gets an invitation: bring instruments, test a blimp, and stream it live. If we flinch, we ground the fleet that day.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.ModerateNegative,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.SlightNegative,
              outcome_4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Openness to scrutiny helps; invite must include raw logs access."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Public demo is good, yet we must publish methods and redlines."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
