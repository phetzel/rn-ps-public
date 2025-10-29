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
      text: "With clouds now federal property, homes must register backyard fluff and buy rain permits. Who profits, and who polices the drizzle?",
      answers: [
        {
          id: "a_root_1",
          text: "Bring me a notarized deed to a thunderhead and we’ll talk. Until then, we steward shared fluff so rain clocks in like unionized drizzle, not a smash-and-grab downpour.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "A bold check on ownership claims; we will challenge flimsy deeds."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Unstructured claims risk revenue leakage and audit headaches."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Vague titles invite conflicts and complicate peaceful compliance."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Confusion over rights can delay equitable access to hydration."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Permits take chaos and fund roads, levees, and umbrellas. Auctions clear through an independent vapor board, with receipts posted so every coin from a cloud leaves a footprint.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Useful framing, but public deserves harder scrutiny and proof."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear permits stabilize funding for infrastructure and resiliency."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Operational posture unchanged; civil calm remains our priority."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Health services adapt either way; outcomes must stay patient‑first."
              }
            }
          },
          followUpId: "q_sec_auctions"
        },
        {
          id: "a_root_3",
          text: "We are not sending net squads into the sky or billing protest chants by the decibel. Compliance uses kites, courtesy whistles, and local partners, not jet teams or shock theater.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Overdenial risks appearing evasive as lawsuits and protests rise."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Too defensive; markets need data, not blanket dismissals."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clarifying non-militarized enforcement reduces escalation risks."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Assurances must include care access, not just policing tone."
              }
            }
          },
          followUpId: "q_sec_enforcement"
        },
        {
          id: "a_root_4",
          text: "Hydration stays a public good. Backyard mists remain freckle-friendly, emergency spritzing is free, and no one needs a permit to fill a cup or water a tomato plant.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Comforting, yet we must verify affordability and fairness."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance without costs invites fiscal skepticism from markets."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Warm tone alone won’t manage protest logistics or safety."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Public health pledge aligns with equity and clinical capacity."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_auctions",
        text: "Reports say permit auctions were prewired for favored vapor vendors as drizzle derivatives loom—how are bids and winners kept honest?",
        answers: [
          {
            id: "a_sec1_1",
            text: "On Treasury’s authority, the auction schedule, clearing rules, and winning bids will post in real time, with a tamper‑evident ledger. Any ‘favored vapor’ gets vaporized by sunlight.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Authority alone won’t quiet concerns about favoritism and wiring."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Structured calendar and rules reduce volatility and graft risk."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Opaque vendor ties can inflame protests and strain policing."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "If auctions skew access, downstream health equity takes a hit."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Treasury,
            followUpId: "q_ter_ledger"
          },
          {
            id: "a_sec1_2",
            text: "If someone really prewired the sky, their extension cord must be impressive. We’ll let the auditors map the clouds while we keep the taps from exploding into chaos.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection reads evasive; produce evidence or commit to review."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Shrugging off signals invites bond market anxiety and costs."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Investigations on actual misconduct beat rumor-driven unrest."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Patients pay when oversight lags; we need transparency, not jokes."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "Early pilots had messy vendor lists and a few cringey acronyms. We scrubbed conflicts, rotated committees, and barred lobbyists who think cumulus should come with kickbacks.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Admissions help, but we must show fixes and independent audits."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We should identify losses and clawbacks to reassure investors."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Any favoritism fuels distrust; crowd control burdens will grow."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Owning early mistakes can protect vulnerable patients from fees."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "Auctions use blind bids, public clearing prices, and automatic anti‑collusion triggers. Drizzle derivatives settle through a sandbox with margin calls that favor taxpayers.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Good facts, but keep reporting cadence steady and accessible."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Blind clearing and audits strengthen integrity and revenues."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clear rules reduce flashpoints and lower security postures."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Health impacts hinge on fairness; data sharing will inform care."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_enforcement",
        text: "Enforcement now means kites, whistles, and protest corrals—who got the contracts, and what is the security theater costing taxpayers?",
        answers: [
          {
            id: "a_sec2_1",
            text: "No paramilitary kite brigades, no sonic umbrellas. Crowd management is boring by design, vendor lists are capped, and any contractor that monetizes megaphones will meet the exit sign.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denials ring hollow without itemized costs and oversight."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Security opacity spooks markets; publish payable terms quickly."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Emphasizing de-escalation tools reduces risk of confrontations."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Enforcement tone matters, but access protections must be clear."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "Contracts are small, local, and time‑boxed; invoices will post alongside per‑storm budgets. We priced foam barriers cheaper than optics—because optics are the expensive part.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Facts help; ensure invoices and caps are publicly verifiable."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Time-boxed local contracts restrain bloat and protect budgets."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Even modest programs need safeguards to prevent mission creep."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Quiet costs can squeeze clinics; we need guardrails and relief."
                }
              }
            },
            followUpId: "q_ter_health"
          },
          {
            id: "a_sec2_3",
            text: "We won't let spectacle vendors turn drizzle into a cash bonfire. If a firm sells panic fog, they can forecast a swift sunset and a bill for the matches.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Calling out spectacle aligns with accountability and restraint."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confrontation risks costs; redirect to payment controls and audits."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Protest dynamics hinge on posture; tone helps, plans matter too."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Keep care access central; avoid policies that deter hydration."
                }
              }
            }
          },
          {
            id: "a_sec2_4",
            text: "Yes, kite string costs spiked the minute we mentioned kites. We're negotiating bulk twine and reminding folks the wind is still free with no subscription tier.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection on pricing invites ridicule; disclose procurement data."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Speculation spreads when figures are fuzzy; publish baselines."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mixed messages make crowd control harder; keep lines consistent."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Admitting spikes prompts relief planning for community clinics."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_ledger",
        text: "Will you publish a line-item ledger for rain revenues, auction payouts, and derivative exposures, with APIs so watchdogs can track every drop?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Yes. A public ledger will break out permits, auction proceeds, payouts, and hedge positions, plus an API with per‑cloud IDs. Think receipts that even a rain gauge could parse.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Transparency is welcome, but make it real-time and tamper-evident."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Open ledgers lower borrowing costs and deter bid rigging."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Public clarity eases tensions and simplifies protest planning."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "List fee waivers clearly to prevent clinic billing confusion."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "Exposure limits are conservative and boring on purpose. If markets sneeze, essential services still get umbrellas, and taxpayers won’t be left holding a soggy bag.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance needs numbers; show bands, stress tests, and limits."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Markets prefer disclosures to adjectives; publish the limits."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity feeds rumors; clear thresholds help maintain order."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Capped exposure protects patients and hospital budgets alike."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "There’s no secret drizzle casino. Stress tests hit monsoons, not misters, and any exotic product that smells like a bubble gets popped before it reaches the forecast.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denying risk is risky; commission audits and publish results."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Risk sweeps should back the claim; fund and share the reports."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Security benefits when rumors are tested by independent checks."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "If risk is zero, codify protections so patients aren’t billed."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "We’ll spare you the spreadsheet haikus. The short of it: numbers line up, and anyone caught laundering lightning will find compliance very, very fluorescent.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Quips won’t calm markets; post the methodology and raw tables."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Wit is cheap; transparency lowers yields and builds trust."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Jokes confuse safety messaging; keep updates sober and steady."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Plain summaries help clinics plan staffing and patient outreach."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_health",
        text: "Hydration waivers and priority spritzing sound nice, but will fees still condense on clinics and seniors? What hard caps and audits back this?",
        answers: [
          {
            id: "a_ter2_1",
            text: "Seniors keep priority spritzing and zero‑copay hydration. Clinic misters are exempt from fees, and caps prevent costs from condensing on patients or caregivers.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Promise is good; lock it in policy and publish enforcement."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Budget impacts require offsets; detail funding without delays."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Clear rules lower tensions and reduce need for crowd controls."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Hard caps and zero-copay waivers directly protect seniors."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Audits sample neighborhoods, clinics, and bills monthly, with penalties that evaporate fees before they reach faucets. Waivers auto‑renew unless a site is over‑misted.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Data cadence matters; keep APIs public and audits independent."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Randomized audits deter skimming and stabilize expenditures."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audits deter scams that spark unrest and strain field teams."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sampling must include rural clinics to prevent quiet rationing."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "We learned from the first week's paper cuts. Forms are now one page, fee waivers default on, and any cloud registry that times out earns a raincheck plus refund.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Owning flaws is step one; fix forms and waive retroactive fees."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Design debt must be repaid; fund the cleanup without bloat."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Paper chaos can trigger crowds; pace fixes to keep streets calm."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Simpler forms reduce errors and unfair denials at point of care."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "If someone is charging grandma to sip, send us the receipt and a stern cloud emoji. We'll fix it faster than a sunbeam breaks a drizzle.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hotline jokes won’t help; show restitution paths and penalties."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Anecdote chasing is costly; set formal controls and disclosures."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear reporting lines reduce confrontations and improve safety."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Triage cannot rely on complaints; proactive audits protect elders."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
