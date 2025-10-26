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
      text: "Does ‘Dollar Now Barter-Optional’ let rich filers deduct bespoke memes while low-wage folks pay in chores, and who prices goat hugs?",
      answers: [
        {
          id: "a_root_1",
          text: "The whole point is to make markets price the unpriceable. If a latte gets a number, a goat hug can too, and the wealthy can finally do some sweaty math with the rest of us.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "I own the chaos; markets learn faster when provoked."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Unvetted volatility undermines planned rate clarity."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This framing blurs lines we must keep bright."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Treasury is publishing a Barter Rate Table with wage floors, regional bands, and anti-chore rules. Cash remains simplest, but valuations will be public, auditable, and updated weekly.",
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
              reaction: "Good charts, but I fear they blunt the provocation."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Standard tables spotlight fairness across regions."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Uniform rates cannot excuse illicit consideration."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "Justice denies that casseroles, tractor rides, or artisanal memes can buy innocence. You can pay taxes in favors, but you cannot purchase mercy, leniency, or convenient amnesia.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Your denial risks dulling the experiment’s edge."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hard lines may freeze price discovery prematurely."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear denial protects prosecutions from barter games."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_4",
          text: "No one is being conscripted into weekend chore-serfdom. Barter is optional, wages are protected, and low-income filers qualify for automatic cash credits to avoid lopsided swaps.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive,
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Reassurance helps, though I prefer sharper edges."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calm messaging aids adoption and compliance."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft tones must not invite casual bribery."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "How will Treasury prevent wages from being relabeled as ‘chores,’ and will you publish goat-indexes and meme-rate tables people can appeal in plain language?",
        answers: [
          {
            id: "a_sec1_1",
            text: "We’re issuing a weekly Barter CPI, with goat-hug minutes, meme tiers, and labor categories priced against local wage medians. Anything below the floor auto-flips to cash credit.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Data with bite; keep friction to a minimum."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Weekly indices give businesses needed anchors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rates alone won’t deter coercive barter."
                }
              }
            }
          },
          {
            id: "a_sec1_2",
            text: "If your bill shows ‘eight porch sweeps’ when it should show dollars, you can tap one button to contest it. Appeals are free, fast, and favor the worker by design.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comforting, but could mask misclassification."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We must avoid signaling leniency on wage games."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Appeals path supports fair enforcement."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Price discovery is messy before it’s elegant. We’re letting the market cough, then we’ll hand it tea and adjust tables once the wheezing patterns become data.",
            type: AnswerType.Deflect,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Elegance later is risky for workers now."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Messy discovery still builds better benchmarks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity invites exploitation; tighten lines."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "Every barter entry requires dual consent and a receipt—Form 109-BAA—so coercion gets flagged. Privacy and employer misuse safeguards are next on the docket.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Procedural guardrails are politically durable."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Extra paperwork may slow small-town adoption."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Records help, but we need stronger deterrence."
                }
              }
            },
            followUpId: "q_ter1"
          }
        ]
      },
      {
        id: "q_sec2",
        text: "On enforcement, how will Justice stop barter from laundering penalties or tipping cases, and could grandma’s casserole accidentally trigger a felony?",
        answers: [
          {
            id: "a_sec2_1",
            text: "We deny that folks can launder penalties with carbs. A casserole with paprika is still a casserole, and bribery remains bribery no matter how artisanal the crust.",
            type: AnswerType.Deny,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Too rigid could chill honest community swaps."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strict denials complicate local compliance."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Bright denial blocks laundering through barter."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "Guidance draws bright lines: anything tied to a specific official act is illegal, period. We’ll lay out thresholds, reporting channels, and whistleblower protection next.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Guidance is fine; avoid bureaucratic sludge."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear tests make audits faster and fairer."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Guidance must not be read as permission slips."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_3",
            text: "No one is cuffed for basic neighborliness. But bring baked goods with a case number and a wink, and you’ll discover our appetite for indictments is robust.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Tone is right; keep real teeth behind it."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances risk dulling detection incentives."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Nuance helps avoid punishing neighborliness."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Try to tip justice with a goat in a bowtie and meet our anti-goat-bribery task force. Spoiler: the goat keeps the bowtie; you keep the charges.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "I’ll call out and crush goat-bribe theatrics."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm stance deters creative tax evasion."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Grandstanding cannot substitute for case law."
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
        text: "If receipts log who mowed whose lawn, how do you protect privacy and stop bosses from ‘paying taxes’ with employees’ time or other coerced favors?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Receipts store minimal metadata, dual-consent attestations, and wage-floor checks. Coercion triggers an alert, a hotline, and automatic reclassification to cash with penalties for employers.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Privacy talk can look like hedging ambition."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Minimal fields reduce admin burden and leaks."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Sparse metadata hampers prosecutorial tracing."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We deny that employer-sourced ‘voluntary’ favors count. Any barter tied to an employment relationship without free consent is void and sanctionable.",
            type: AnswerType.Deny,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denying coercion needs muscle to back it."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Employer rules will require extra oversight."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firmly bars coerced favors masquerading as tax."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "If a boss tries to pay their bill with your Saturday, we invite them to test the system. The fines will price their hubris in a currency they finally understand.",
            type: AnswerType.Challenge,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Protecting workers while provoking markets works."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Rapid takedowns show we can act on abuses."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Swift actions must still safeguard due process."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "Workers can anonymously disavow any barter filed in their name. The government will credit wages, not chores, and pursue the filer who tried the shortcut.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Anonymity helps whistleblowers; verify swiftly."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hotline triage will strain field capacity."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Disavowals create trails we can review fast."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Spell out the line: when does a casserole, tractor ride, or meme become a bribe under this policy, and what signals would trigger prosecution?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Intent to influence a specific act is the test, backed by context, timing, and communications. The barter policy changes payment options, not corruption statutes or burdens.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Bright intent test keeps chaos bounded."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Objective signals anchor rate and audit work."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Intent is tricky; we’ll need corroboration."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "We deny VIP carve-outs for meme moguls or rustic charmers. A five-dollar gif or a hay bale is still a crime if it’s meant to tilt a verdict.",
            type: AnswerType.Deny,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "No carve-outs, but keep flexibility to adapt."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Uniformity is good; allow edge-case pilots."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Equal rules ensure influence cannot be purchased."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "We admit gray zones in novelty items, so we set conservative thresholds and require disclosures that make selective enforcement harder, not easier.",
            type: AnswerType.Admit,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting gray areas keeps us credible."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Controls help, yet may slow price discovery."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Thresholds simplify charging in odd cases."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "Court-ordered community service swaps stay in the court lane, supervised and logged, not under this policy. That keeps the rules bright and the incentives clean.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Community service swaps fit the public mood."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear carve-in reduces billing confusion."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Exemptions must not create bribery blind spots."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
