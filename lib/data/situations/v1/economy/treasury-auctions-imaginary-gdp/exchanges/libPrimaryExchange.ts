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
      text: "Does auctioning Imaginary GDP Credits let financiers buy a shinier spreadsheet while workers get IOU confetti, or is there any concrete public upside at all?",
      answers: [
        {
          id: "a_r1",
          text: "Markets price vibes daily; we’re just putting a label on the fog. If real wages and output don’t move, I’ll veto the program and shred the leftover credits live on public access TV.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.MajorNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Framing this boldly can force real investment to follow."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Aggressive posture could spook bidders and price discovery."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "The credits are capped, auctioned transparently, and marked to myth so they can’t leak into grocery prices. Think guardrails for optimism, not a trampoline for speculation.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Overpromising safety could signal complacency to the public."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear rules and caps will steady demand and pricing."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Proceeds fund tangible projects—rails, routers, and rainy-day wage subsidies—while credits sit on balance sheets like novelty paperweights. The scoreboard glows; the shop floor gets the cash.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Details help, but workers may still see paper gains only."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Targeted uses improve credibility and auction uptake."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "If anyone tries to pay workers in ‘exposure,’ we’ll expose them to the labor inspector, who carries a clipboard, a calculator, and unsettling eye contact. People get paychecks, not parables.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.Neutral,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Tough talk reassures workers that grift will be punished."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Threats alone could chill participation and raise costs."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Who actually gets these credits, how are auctions guarded against collusion, and who eats the risk when vibes crash harder than fundamentals?",
        answers: [
          {
            id: "a_s1_1",
            text: "Primary auctions prioritize broad participation, with anti-collusion screens and randomized lots. If concentration spikes, an automatic pause triggers a review before any more fog gets minted.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral, // 0
              o2: OutcomeModifierWeight.SlightNegative, // -4
              o3: OutcomeModifierWeight.SlightPositive, // +4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Broad access is good, but capture risks remain."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Wider participation supports fair pricing and depth."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "Risk sits with bidders, not households. Credits don’t entitle payouts, and capital buffers are required, like seatbelts on a clown car that we triple-checked for actual clowns.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Shifting risk rhetorically may ring hollow with voters."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Keeping risk with bidders protects the public balance."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "We’re not socializing losses for private myth-chasing. There is no hidden backstop, no wink-nudge facility, and no bailout bucket labeled ‘Break Glass When Vibes Break.’",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Drawing a hard line projects backbone to workers."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Rigid stances can reduce flexibility in market stress."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Let’s not pretend the status quo is pure. Today, elites already arbitrage narrative and policy. This forces the game onto a lit field with rules, refs, and a visible scoreboard.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Calling out the status quo aligns with our critique."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Overt confrontation could rattle auctions and spreads."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "If credits juice headline growth, what stops employers from paying in 'exposure receipts' while taxpayers underwrite profits stashed in a myth-friendly ledger?",
        answers: [
          {
            id: "a_s2_1",
            text: "Labor standards are welded on: wage floors, no credit-as-compensation, and clawbacks if hiring lags. Workers get dollars; firms get bragging rights they must earn the loud way.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.Neutral, // 0
              o3: OutcomeModifierWeight.SlightPositive, // +4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Rules alone may not stop creative payroll evasions."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Strong labor guardrails reduce abuse and backlash."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "Every auction dollar is appropriated to worker-facing outlays—training grants, childcare slots, and transit passes—audited quarterly. The ledger gets glitter; neighborhoods get plumbing.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral, // 0
              o2: OutcomeModifierWeight.SlightPositive, // +4
              o3: OutcomeModifierWeight.SlightNegative, // -4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Earmarks help, yet execution risk can still bite."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Visible worker benefits bolster legitimacy and bids."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Yes, glossy metrics can tempt corner-cutting. That’s why we cap issuance and tie executive bonuses to payroll growth, not paper glow. The mirror only gets a nightlight.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Honesty builds trust with wage earners despite risks."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Admitting fragility can weaken market confidence."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "If a CEO pays in ‘exposure,’ the tax code will expose their margins to a brisk winter. The only IOU we issue workers is ‘I Owe You a Raise When Profits Rise,’ enforced in policy.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Hard tax consequences show we will back workers."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Punitive tone might deter genuine participation."
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
        text: "What concrete oversight prevents credit hoarding by megafunds and ensures proceeds fund boring, worker-facing things like buses, clinics, and lunch breaks?",
        answers: [
          {
            id: "a_t1_1",
            text: "An independent Oversight of Imaginaries Board publishes monthly concentration stats and can freeze auctions. Funds are legally earmarked for buses, clinics, and breaks you can actually take.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Another board risks bureaucracy without bite."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Independent audits will stabilize expectations."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Anti-hoarding rules use declining marginal allowances and sunset dates, with resale taxes that fund boring things on purpose. It’s fiscal fiber, not a bubble diet.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Technical levers need proof they will actually work."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Declining allowances curb hoards and distortions."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Credit hoarding isn’t a feature; it’s a violation. If three megafunds corner the myth, their credits evaporate into forfeiture, which is our polite word for ‘nice try.’",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Declaring hoarding illegal signals worker-first resolve."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Over-criminalizing can freeze liquidity and depth."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "If anyone builds a dragon hoard of credits, we’ll send the auditor with a measuring tape and a fire extinguisher labeled ‘Reality.’ Dragons hate paperwork.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Public shaming can deter bad actors at the margin."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Spectacle policing risks volatility and bid illiquidity."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Will labor or small-town councils get veto power over issuance, and is there a sunset clause before the imaginary becomes permanent policy wallpaper?",
        answers: [
          {
            id: "a_t2_1",
            text: "Yes. Worker councils and local boards get a binding say on issuance that affects their wages or rents, and the statute sunsets in three years unless renewed after public hearings.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Ceding vetoes may slow growth and frustrate delivery."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Local input can legitimize issuance and pricing."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "The sunset pairs with a kill-switch indexed to real wage growth. If wages lag output by a set spread, issuance auto-winds down while the legislature rethinks the magic show.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Kill-switch talk may scare markets into overreacting."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A clear sunset disciplines scope and mitigates drift."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "If you want permanence, earn it: show rising pay, lower commute times, and fewer ‘Help Wanted’ signs gathering dust. Otherwise, the credits ride off with the circus.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorNegative,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Performance triggers align rhetoric with real paychecks."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Tying permanence to pay could complicate auctions."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We can’t promise zero unintended consequences. That’s why we built veto points and a short leash, so the imaginary never becomes wallpaper you stop noticing.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning uncertainty earns credibility with workers."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Admitting unknowns might widen spreads at issuance."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
