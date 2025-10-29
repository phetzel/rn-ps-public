import {
  AnswerType,
  ExchangeImpactWeight,
  OutcomeModifierWeight,
  CabinetStaticId,
  PublicationStaticId,
  JournalistStaticId,
} from "~/types";
import type { ExchangeData } from "~/lib/schemas/exchanges";

export const conPrimaryExchange: ExchangeData = {
  publication: PublicationStaticId.ConPrimary,
  content: {
    rootQuestion: {
      id: "q1",
      text: "Why should taxpayers underwrite the Treasure Ministry’s Monopolon grab when the collateral is thimbles, rent cards, and vibes disguised as assets?",
      answers: [
        {
          id: "a1_1",
          text: "I challenge the idea that cardboard can crash an economy. If a thimble is too big to fail, it’s welcome to debate me on community radio while we focus on real jobs and real savings.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.MajorNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "It casts the President as confident and in control."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "It suggests overreach without clear safeguards."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It risks ridicule for treating cardboard as patients."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It hints at mission creep into civilian game nights."
              }
            }
          }
        },
        {
          id: "a1_2",
          text: "Temporary stewardship stabilizes clearing, prices are marked to stress, and senior claims take first loss. We're swapping panic for liquidity with jumbo dice audited by boring spreadsheets.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive, // +8
            o2: OutcomeModifierWeight.SlightNegative, // -4
            o3: OutcomeModifierWeight.SlightNegative, // -4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "It undercuts credibility on economic guardrails."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "It aligns with Treasury’s stability narrative."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Operational impact on HHS is neutral in this step."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It invites civil liberty concerns over minor risks."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "a1_3",
          text: "We admit cardboard lacks a pulse. Our role is mental hygiene: calming investors who think rent cards are heirlooms, prescribing bed rest for anxious tokens, and avoiding rumor‑driven stampedes.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "It appears flippant about financial fallout."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It muddies accountability for the bailout terms."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "It humanizes the response and calms anxious holders."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It sounds heavy‑handed for a snack dispute."
              }
            }
          }
        },
        {
          id: "a1_4",
          text: "We deny there's a market apocalypse. It's an unruly game night, and we're sealing the living room, confiscating loaded dice, and guarding snacks so nobody escalates from tantrum to table‑flip economy.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative, // -8
            o2: OutcomeModifierWeight.SlightPositive, // +4
            o3: OutcomeModifierWeight.SlightPositive, // +4
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "It sounds dismissive of taxpayer risk."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It implies hidden liabilities for taxpayers."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It strays beyond HHS’s core medical mandate."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "It deters petty fraud without dramatizing the threat."
              }
            }
          },
          followUpId: "q3"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "Your numbers say taxpayer burn is minimal if Monopolon goes public; what hard caps, haircuts, and collateral rules stop play money from turning into kindling?",
        answers: [
          {
            id: "a2_1",
            text: "Taxpayer risk is capped by a first‑loss buffer funded by shareholders and dice dealers; collateral is haircutted up to 60%, and rent cards get stress‑priced, not par. Details are public in the term sheet.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive, // +4
              o2: OutcomeModifierWeight.SlightPositive, // +4
              o3: OutcomeModifierWeight.StrongNegative, // -8
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It risks seeming unserious about oversight."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "It reassures markets that controls are in place."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It dilutes focus from real health priorities."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "It promises order and proportionate perimeter control."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "a2_2",
            text: "We built escape ramps: sunset dates, ratchets that shrink exposure as markets thaw, and a watchdog with a magnifying glass the size of a dinner plate. The goal is boring stability, not empire‑building.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "It projects steadiness amid quirky market panic."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It weakens the case for decisive intervention."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It strays beyond HHS’s core medical mandate."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It hints at mission creep into civilian game nights."
                }
              }
            }
          },
          {
            id: "a2_3",
            text: "The stark alternative was spontaneous combustion across hobby‑finance. We can litigate metaphors all week, or we can put out the fire and send the bill to those who lit the scented candles.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "It sounds dismissive of taxpayer risk."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It suggests overreach without clear safeguards."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "It sets humane boundaries for nonclinical support."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It invites civil liberty concerns over minor risks."
                }
              }
            }
          },
          {
            id: "a2_4",
            text: "Authorized by the Treasure Ministry: our exclusive numbers show a maximum gross backstop equal to three rainy days, offset by fees and equity warrants. The public isn’t buying thimbles; it’s renting calm.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.ModerateNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It undercuts credibility on economic guardrails."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "It signals disciplined execution under stress."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "It humanizes the response and calms anxious holders."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "It sounds heavy‑handed for a snack dispute."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury
          }
        ]
      },
      {
        id: "q3",
        text: "HHS will soothe distressed tokens and Homeland will seal game night; who ends the round, and what civil checks prevent a snack‑based state of emergency?",
        answers: [
          {
            id: "a3_1",
            text: "We deny any snack‑state. Perimeter control ends when the table stops wobbling. No curfews, no raids, no Patriot Snack Act—just a pause on chaos while we inventory dice and apologize to the neighbors.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It appears flippant about financial fallout."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It implies hidden liabilities for taxpayers."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It risks ridicule for treating cardboard as patients."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "It promises order and proportionate perimeter control."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "a3_2",
            text: "We admit morale care is squishy. Tokens don’t need IVs; they need boundaries and a shuffle. We’ll publish discharge criteria so no one gets kept for observation just because a top hat looks sad.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It risks seeming unserious about oversight."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It muddies accountability for the bailout terms."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "It humanizes the response and calms anxious holders."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It invites civil liberty concerns over minor risks."
                }
              }
            }
          },
          {
            id: "a3_3",
            text: "Civil checks include a civilian rules lawyer, a public log of every confiscated die, and appeal rights faster than pizza delivery. If a move feels authoritarian, it gets vetoed before the slice arrives.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "It frames him as principled under comic pressure."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It suggests overreach without clear safeguards."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It dilutes focus from real health priorities."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It hints at mission creep into civilian game nights."
                }
              }
            }
          },
          {
            id: "a3_4",
            text: "I challenge the melodrama. Guarding snacks isn’t martial law; it’s parenting for markets. If someone wants to conflate pretzels with habeas corpus, I’m happy to grade their homework on live TV.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "It shows resolve and a flair for populist humor."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It weakens the case for decisive intervention."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "It sets humane boundaries for nonclinical support."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It sounds heavy‑handed for a snack dispute."
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
        text: "If your model prices thimbles at crisis levels and rents at par, what happens if the dice‑swap window jams and liquidity rolls snake eyes?",
        answers: [
          {
            id: "a4_1",
            text: "If swaps jam, we auto‑roll collateral haircuts wider, activate a standby credit line funded by windfall taxes on dice dealers, and auction assets via blind bid to price discovery, not nostalgia.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It undercuts credibility on economic guardrails."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "It reassures markets that controls are in place."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It strays beyond HHS’s core medical mandate."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "It deters petty fraud without dramatizing the threat."
                }
              }
            }
          },
          {
            id: "a4_2",
            text: "We installed circuit breakers and an exit ramp: if the window jams, positions are parked in a warehouse trust so nobody panic‑sells at midnight. Patience beats pyromania when cardboard is involved.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "It projects steadiness amid quirky market panic."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It implies hidden liabilities for taxpayers."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It dilutes focus from real health priorities."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It invites civil liberty concerns over minor risks."
                }
              }
            }
          },
          {
            id: "a4_3",
            text: "Snake eyes is a colorful hypothetical. The more relevant risk was stampede psychology, which we’ve tranquilized with transparency and sobriety that could put a caffeinated hyena to sleep.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "It invites mockery if the plan wobbles."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It muddies accountability for the bailout terms."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "It humanizes the response and calms anxious holders."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It hints at mission creep into civilian game nights."
                }
              }
            }
          },
          {
            id: "a4_4",
            text: "We deny that a jam equals doom. The dice are redundant, audited, and frankly boring. If excitement appears, it’s because someone is performing for the livestream, not because the math changed.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It sounds dismissive of taxpayer risk."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It weakens the case for decisive intervention."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It risks ridicule for treating cardboard as patients."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "It promises order and proportionate perimeter control."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "When Homeland guards stacks and confiscates loaded dice, what due process exists for players and tokens, and who reviews snack seizures after game night?",
        answers: [
          {
            id: "a5_1",
            text: "We deny any secret tribunals. Dice confiscations require a signed form, two witnesses, and a bowl of unguarded chips as a sting for entrapment purposes. The goal is comedy‑free compliance, not control.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative, // -8
              o2: OutcomeModifierWeight.SlightPositive, // +4
              o3: OutcomeModifierWeight.SlightPositive, // +4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It appears flippant about financial fallout."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It suggests overreach without clear safeguards."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It strays beyond HHS’s core medical mandate."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "It deters petty fraud without dramatizing the threat."
                }
              }
            }
          },
          {
            id: "a5_2",
            text: "We admit an early draft mentioned snack rationing; it now lives in the recycling bin. Any health advisories are voluntary, and the only curfew applies to rumors after bedtime.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It risks seeming unserious about oversight."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It implies hidden liabilities for taxpayers."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "It humanizes the response and calms anxious holders."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It invites civil liberty concerns over minor risks."
                }
              }
            }
          },
          {
            id: "a5_3",
            text: "A temporary Oversight of Play Board, chaired by a retired librarian, reviews all actions within 24 hours. Players can appeal online, by hotline, or by returning the confiscated die under seal.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It undercuts credibility on economic guardrails."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "It signals disciplined execution under stress."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It dilutes focus from real health priorities."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "It promises order and proportionate perimeter control."
                }
              }
            }
          },
          {
            id: "a5_4",
            text: "I challenge the doom‑scrolling. Stacks get guarded like museum exhibits, not seized like contraband. If anyone claims otherwise, we can livestream a walkthrough with the rulebook at eye level.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "It casts the President as confident and in control."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It weakens the case for decisive intervention."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It risks ridicule for treating cardboard as patients."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It sounds heavy‑handed for a snack dispute."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
