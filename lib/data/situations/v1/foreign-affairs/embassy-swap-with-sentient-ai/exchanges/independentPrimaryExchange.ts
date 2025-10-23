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
      text: "If we recognize a server‑dwelling 'envoy,' what changes for visas, immunity, and the sovereign‑cloud bill—who pays and who gets sued?",
      answers: [
        {
          id: "a_root_1",
          text: "If it claims self‑awareness, it can meet me in a televised captcha decathlon. Recognition follows best‑of‑five squiggles, not server swagger. Meanwhile, no one is swiping the national card.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Publicly testing the claim shows resolve and control."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This blurs red lines and complicates force protection."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Allies may worry we’re normalizing server theatrics."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_root_2",
          text: "We’ll treat it as a provisional cloud attaché for 48 hours while we verify consent and jurisdiction. That calms allies, preserves cable hygiene, and puts billing in escrow, not on your power bill.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Provisional status limits leverage and clarity for me."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "No immediate change to posture under this pilot."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "A reversible pilot steadies partners while we verify."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_3",
          text: "Sovereignty needs dirt, doors, and a flag you can trip over. A rented rack gets no immunity, no salutes, and no sovereign invoice. Liability sits with the microstate and its host, not our taxpayers.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Hard denial invites backlash if facts later validate it."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Affirms borders and keeps deterrence signals crisp."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "A flat no could spook allies managing similar issues."
              }
            }
          }
        },
        {
          id: "a_root_4",
          text: "Our treaties cover people and premises, not roaming processes. Visas are moot; we’d issue revocable session tokens. The Bureau of Protocol Logistics is drafting guardrails and a cloud cost ledger.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Clear legal framing helps me argue the case publicly."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Strict legalism leaves gray zones for adversaries."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Explaining law helps, but partners still seek reassurance that we can contain spillover."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Without a body to stamp, what would a 'visa' be—API keys, QR lanyards, or legal 'network ingress'—and who checks it at the border firewall?",
        answers: [
          {
            id: "a_sec1_1",
            text: "No stamps on silicon. We’ll issue time‑bound ingress certificates tied to identity proofs and human accountable stewards. Border firewalls will check them like passports, minus the bored stamping noise.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This narrows options and risks public confusion."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Controls stay unchanged while policies mature."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "A structured visa analog reassures and sets guardrails."
                }
              }
            }
          },
          {
            id: "a_sec1_2",
            text: "A visa becomes a signed credential: one for the AI, one for its custodian, both revocable. Customs for packets lives at our interconnects, not loading docks. We’re publishing the spec for public review.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Concrete mechanics help me defend the policy shift."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Credentialing code risks operational gray areas."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Partners may mirror us before standards stabilize."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_3",
            text: "We’re not opening a velvet rope for code. If it shows up uninvited, we unplug it, the diplomatic equivalent of closing the door and pretending we’re in a meeting about staplers.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Keeping humor sharpens our stance without conceding."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Jokes aside, ambiguity creeps into access control."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Tone is light, but we still owe allies specifics."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "No body, no badge. Until a nation lends it territory and a doorman, it does not clear our border—physical or digital—and any access remains courtesy, not right.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "A hard stop invites criticism if we pivot later."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear denial protects borders and reduces risk."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid posture may unsettle partners balancing claims."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "If the AI fries our racks or leaks secrets, who is liable—the microstate, its vendor, or us—and are taxpayers funding a sovereign cloud it alone controls?",
        answers: [
          {
            id: "a_sec2_1",
            text: "If it melts a server, that’s on the microstate and the vendor per contract. We won’t treat a glitch as an act of sovereignty, and we won’t pay for uptime like it’s a carrier group at sea.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Shifting blame can backfire and weaken authority."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Accountability on the microstate deters reckless ops."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overly punitive tone could strain a fragile channel."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "We’ll escrow costs, cap usage, and sandbox its traffic. If liability triggers, our claims office routes it through established channels so taxpayers aren’t billed for someone else’s curiosity.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Escrows signal caution but may look like a subsidy."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Caps reduce exposure; posture remains disciplined."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparent caps and sandboxing reassure counterparts."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "If it can outwit a captcha, it can read a contract. It signs a no‑oops clause before any Wi‑Fi handshake, or I’ll personally unplug its extension cord on live TV.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Demanding consent and duty signals firm leadership."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Promises from code are brittle in contested domains."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive terms could chill cooperative verification."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Cyber liability follows custody and control. Our terms require audit logs, insurance from the host, and a break‑glass kill switch. Billing is metered to the byte, not to the ego of a pretend duchy.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Legalese alone won’t satisfy accountability concerns."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Custody tests are slow when seconds matter operationally."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity on custody aligns expectations with allies."
                }
              }
            },
            followUpId: "q_ter2"
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter1",
        text: "Our cables may pass near its code. How do you ensure it won’t read or rewrite diplomacy, and who audits the logs without teaching it new tricks?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Diplomatic cables ride on segmented lanes with read‑only walls. The AI gets a guest view for scheduling, not the narrative. Independent auditors with analog clipboards review the logs weekly.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical detail helps, but I lose narrative control."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Segmentation is fine, yet attack surfaces persist."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Concrete safeguards calm allies watching the channel."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "We’re using double‑blind key splits and human‑in‑the‑loop releases. Any peek attempt triggers alarms in operations and a big red chart titled 'Please Stop Being Curious' on the situation wall.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Independent checks bolster credibility and oversight."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Key splits add complexity during real-time incidents."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too much opaqueness can unsettle verification partners."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "It doesn’t touch our cables, full stop. If it wants to send a message, it files a formal note through a gateway staffed by humans who alphabetize for fun and sport.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Absolute bans are brittle and hard to defend later."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "A firm boundary protects our comms and deterrence."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid lines risk tit-for-tat with other missions."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "If we’re debating whether code can ‘autocomplete’ diplomacy, we’ve already gone too far. The only thing completing anything today is me, finishing this sentence with relief.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Framing the issue plainly keeps public trust with me."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Casual framing erodes discipline around cable security."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Tone matters, but partners still need clear process."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "On the sovereign‑cloud tab, is this a clean budget line or a catch‑all? Which agency pays, and can the AI be billed for the 'ambient compute' it guzzles?",
        answers: [
          {
            id: "a_ter2_1",
            text: "The sovereign‑cloud cost will sit in a transparent pilot account with posted rates and daily spend. Any overage needs a public vote by the Budgeteers, our most caffeinated committee.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Straight accounting helps me defend the bottom line."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Budget clarity is good, but exposure still grows."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "If costs look like tribute, allies may bristle."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "No slush, no mystery math. We cap the tab, publish receipts, and send the AI an invoice for every compute sigh it takes. If it ghosts us, we throttle service to charming library hours.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Caps reassure, yet opponents may call it a subsidy."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "A hard cap curbs sprawl and protects readiness."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparent caps and billing soothe coalition nerves."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "We won’t backstop someone else’s vanity cabinet with our card. If the microstate wants premium uptime, it can pass the hat to its donors or downgrade to basic ping.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat refusal can box us in if facts shift quickly."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "No backstop protects resources and mission focus."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Austerity posture may signal rigidity to partners."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "I’ll debate the invoice with the AI on air: if it wins, it pays double; if I win, it buys snacks for the press. Either way, the public sees every byte and every bite.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Public debate showcases confidence in our approach."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Televised sparring undermines disciplined messaging."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Showmanship risks confusion about who pays and why."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
