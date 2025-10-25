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
      text: "Why turn budgeting into a lobby tip jar—letting influencers buy shout-outs while broke citizens pass the hat—instead of fixing the revenue code?",
      answers: [
        {
          id: "q_root_a1",
          text: "Here’s the challenge: out-tip the nation’s couch cushions and we’ll match your hustle with policy. If influencers want shout-outs, let them amplify public goods, not backstage passes.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.MajorPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Bold dare energizes supporters and projects confidence in uncertainty."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Framing policy as a stunt risks trivializing complex fiscal work."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "q_root_a2",
          text: "In plain terms, the jar speeds money velocity and morale while bigger reforms move. Coins are sterilized by patriotic lasers, tallied transparently, and routed to essentials without selling access.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.MajorNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Overly technical defense appears evasive and out of touch with pain."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear explanation reinforces competence and intent behind the program."
              }
            }
          }
        },
        {
          id: "q_root_a3",
          text: "The jar is voluntary theater, not the budget’s backbone. Perks are capped, no policy is for sale, and no one’s shamed for not tipping; we’re fixing the code while the jar rallies small wins.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.MajorNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Calm reassurance eases nerves but risks lowering the initiative’s heat."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Soft-pedaling diminishes urgency and muddles the program’s rationale."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "q_root_a4",
          text: "We are not outsourcing governance to a novelty glass. It’s a visible civic piggy bank alongside real policy, not a replacement for taxes, wages, or the work of serious budgeting.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.MajorPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Defensive denial sounds brittle and invites further scrutiny."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Straight denial protects program boundaries for now."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Do shout-outs and jar-side selfies create a pay-to-play lane for influencers, or will access and policy stay walled off from whoever tips the loudest?",
        answers: [
          {
            id: "q_sec1_a1",
            text: "Shout-outs are standardized acknowledgments, not favors. No meetings are bought. There’s a public log, randomized rotation, and clear walls between comms and policy. You can audit it live.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Setting clear standards projects fairness and steadies the narrative."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rules speak to process, not equity concerns, leaving gaps."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "q_sec1_a2",
            text: "No naming rights, no velvet rope. A barista pun doesn’t buy a briefing; it buys a thank-you that disappears in 24 hours, with caps to keep megaphones from drowning out regular people.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Reassurance without specifics reads as spin and invites doubt."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Plain guardrails signal discipline and reduce rumor risk."
                }
              }
            }
          },
          {
            id: "q_sec1_a3",
            text: "If someone tries to buy influence with a jar selfie, they’ll get a complimentary eye roll and a link to civics class. The jar’s for morale; policy still happens in boring rooms.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Redirecting is nimble but can seem slippery under pressure."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Deflection weakens credibility on access safeguards."
                }
              }
            }
          },
          {
            id: "q_sec1_a4",
            text: "Influencers love a spotlight? Great—challenge them to aim it at community projects, not clout hoarding. The loudest tip should be the one funding the quietest need.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Aggressive challenge risks backlash from ethics watchdogs."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Turning hype into donations harvests attention for public good."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Isn’t this shifting costs onto people already squeezed—fees, pressure, and guilt—while the well-off collect perks and the budget gap barely budges?",
        answers: [
          {
            id: "q_sec2_a1",
            text: "We’re advancing structural fixes—loophole closures, modernized enforcement, fair rates—while the jar remains optional and fee-free. Think bridge, not band-aid, and we’ll brief the timeline.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Owning the fix narrative shows leadership on structural fairness."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting gaps can fuel critiques about timing and will."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "q_sec2_a2",
            text: "No one is nickel-shamed. There are zero fees, opt-out by default, and matching funds steered to under-served areas. The budget isn’t leaning on quarters; it’s paced by policy.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Dismissive tone toward burdens alienates struggling supporters."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear opt-in framing limits harm and supports consent."
                }
              }
            }
          },
          {
            id: "q_sec2_a3",
            text: "Yes, a jar can feel cringe if you’re stretched thin. That’s why we barred gamified leaderboards, capped shout-outs, and banned guilt messaging. Policy carries the load; the jar lifts morale.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Empathy acknowledges pain and earns some trust back."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Admission spotlights design flaws and pressures implementation."
                }
              }
            }
          },
          {
            id: "q_sec2_a4",
            text: "If shame were revenue, we’d be in surplus. The point is joyfully low-stakes civic mischief while the heavy lifts happen in tax code pages thicker than the jar’s glass.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Snark blunts policy message and sounds indifferent to hardship."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Humor softens edges but does not fix equity concerns."
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
        text: "Who empties the jar, sterilizes the coins, and verifies totals—can the public see the flows in real time, and who audits the patriotic laser show?",
        answers: [
          {
            id: "q_ter1_a1",
            text: "The jar is emptied on a set schedule by dual-control teams, livestreamed for anyone with a browser. Totals sync to an open ledger, and an independent inspector signs off monthly.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Operational specifics convey control and seriousness about oversight."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Detail risks locking in processes that may need iteration."
                }
              }
            }
          },
          {
            id: "q_ter1_a2",
            text: "Coins are zapped by patriotic lasers—read: lab-grade sterilizers with a flag sticker—before sorting. Chain-of-custody seals every step so no one pockets a commemorative quarter.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Leaning on spectacle undermines credibility with auditors."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarifies safety and hygiene, addressing public worry."
                }
              }
            }
          },
          {
            id: "q_ter1_a3",
            text: "Every receipt is public within 24 hours, with rollups by program, not person. Donor data is minimized; we publish nickels, not names, so good deeds don’t turn into shadow Rolodexes.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Transparency pledge builds trust without overpromising outcomes."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Promises of speed create audit risk if systems lag."
                }
              }
            }
          },
          {
            id: "q_ter1_a4",
            text: "The only special access belongs to the janitor with the keys and an ancient mop named Democracy. The rest of us watch the stream and argue about the playlist like normal people.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flippant tone cheapens governance and invites ridicule."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Light humor humanizes staff while preserving boundaries."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "If the jar is a morale gimmick, what structural fixes are moving—closing loopholes, modernized enforcement, fairer rates—and when, exactly, do they land?",
        answers: [
          {
            id: "q_ter2_a1",
            text: "A revenue package is queued: closing carve-outs, automating compliance, and funding auditors who drink decaf. Draft text posts next month, with phased rollouts tied to real metrics.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Concrete timeline projects resolve and anchors expectations."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Specific dates expose risk if legislative slips occur."
                }
              }
            }
          },
          {
            id: "q_ter2_a2",
            text: "While we grind the bill, we dare deep-pocketed brands to tip until it passes—call it a public layaway. Prove your civic swagger now, then enjoy lower grandstanding later.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.MajorNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Daring donors feels performative and distracts from policy grind."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Keeps momentum while Congress deliberates, sustaining attention."
                }
              }
            }
          },
          {
            id: "q_ter2_a3",
            text: "The jar sunsets automatically after the first reform milestones. If the legislature misses dates, we adjust; if reforms land early, the jar becomes museum-grade kitsch.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.MajorNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Sunset clause reassures skeptics and limits scope creep."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Auto-sunset can weaken negotiating leverage on reforms."
                }
              }
            }
          },
          {
            id: "q_ter2_a4",
            text: "No, the jar isn’t a distraction; it’s a rally prop that keeps attention on the finish line. The work is the bill, the enforcement, and the equity math, and that’s where staff time goes.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denial of distraction sounds defensive amid calls for focus."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Reframing as rally tool preserves morale and donor interest."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
