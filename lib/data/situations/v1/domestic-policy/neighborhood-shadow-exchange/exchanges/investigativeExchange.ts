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
      id: "q1",
      text: "Why does the Neighborhood Shadow Exchange require NDAs for silhouettes, routes, and storage if this is just an empathy pilot?",
      answers: [
        {
          id: "a1",
          text: "We challenge the idea that shadows are hoarded property; the NDAs guard a tiny pilot from prank markets and legal cosplay so neighbors can actually try sharing without a circus.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.StrongPositive,
            outcome2: OutcomeModifierWeight.SlightPositive,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "This advances the empathy-share argument despite concern."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "We see no fiscal instrument here, and keep it that way."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Framing may overstep unsettled custody doctrines today."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Health framing stays cautious until swap hygiene is clear."
              }
            }
          }
        },
        {
          id: "a2",
          text: "Treasury denies any 'shadow tax,' levy, or silhouette bonds. NDAs around bids deter price-gouging in a niche market while we test logistics for one week, not for Wall Light Street.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.Neutral,
            outcome4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Fiscal denials risk dulling the broader empathy case."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear denial calms markets and avoids odd collateral talk."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Over-denial could seem evasive amid novel legal issues."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Sharp fiscal lines may raise anxiety about program aims."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "a3",
          text: "Justice will inform plainly: shadow custody law is largely untested. NDAs protect chain-of-custody methods and personal data while courts decide whether outlines are more like umbrellas than IDs.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightPositive,
            outcome2: OutcomeModifierWeight.SlightPositive,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Legal caution may overshadow the empathy narrative."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Unsettled law hints can spook vendors about payment risk."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Plain guidance helps courts and partners navigate novelty."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Ambiguity could worry residents about wellbeing impacts."
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "a4",
          text: "Health and Hearth Services reassures residents: borrowed silhouettes are hygienic and mood-safe, and NDAs cover privacy, not feelings. The goal is fewer envy-squints, not secret spooky files.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.SlightPositive,
            outcome4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Health reassurances alone may look like message control."
            },
            cabinet: {
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Soft messaging without costs detail invites speculation."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance cannot substitute for clear liability rules."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Direct assurances reduce stigma and encourage safe swaps."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "Who actually trucks the borrowed silhouettes at night, and were any sole-source or hush-hush contracts signed under 'pilot speed' waivers?",
        answers: [
          {
            id: "a5",
            text: "Two neighborhood logistics co‑ops move bins at dusk; contracts are short, competitive, and auditable. We’ll publish vendor names post‑pilot to prevent tampering while routes stabilize.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightPositive,
            outcome2: OutcomeModifierWeight.SlightPositive,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Logistics minutiae can dilute the empathy-centered case."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Co-ops may lack reserves, raising payment reliability risk."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparent actors reduce disputes over chain-of-custody."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Night moves unsettle residents unless safeguards are clear."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "a6",
            text: "There are no sweetheart sole-sources or hush-hush side letters. Procurement pulled three quotes, logged daylight checks, and rejected a bid that tried to bill for 'extra darkness.'",
            type: AnswerType.Deny,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.Neutral,
            outcome4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blanket denials can read defensive in an investigation."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "No sweetheart deals reassures on fiscal prudence."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overbroad denials risk discovery fights if gaps exist."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Opacity around vendors can hinder safety monitoring."
                }
              }
            }
          },
          {
            id: "a7",
            text: "Honestly, we're less worried about who trucks shadows than who keeps unplugging porch lamps. Let's judge by timely swaps and intact toes, not invoice calligraphy.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightPositive,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection signals softness under scrutiny of operations."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Avoiding procurement detail invites cost creep worries."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection erodes credibility if subpoenas arrive."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Focusing on resident safety can calm neighborhood nerves."
                }
              }
            }
          },
          {
            id: "a8",
            text: "If secrecy over a one-week empathy drill scandalizes you, ask why scalpers tried hawking 'premium silhouettes' on launch morning. We're protecting neighbors, not hoarding glow.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.StrongPositive,
            outcome2: OutcomeModifierWeight.SlightPositive,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "A firm challenge reframes the issue around shared empathy."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Rhetoric alone does not change budget or contract math."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Bold framing risks clashing with unsettled legal terrain."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tone may outpace residents’ comfort without details."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "We obtained liability memos and hinted injunction letters; if a swapped shadow is misused or mis-seen, who pays and who pulls the plug?",
        answers: [
          {
            id: "a9",
            text: "Authorized from Justice: shadow custody is novel; drafts outline options, not edicts. Injunction noises are pregame grumbles, not rulings. We’ll brief the public docket when filings exist.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightPositive,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.SlightPositive,
            outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Authoritative clarity supports a controlled pilot frame."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Unclear liability could leave vendors chasing payments."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Caution urged: precedent is thin and facts matter."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity may raise stress for participants and staff."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.Justice,
            followUpId: "q5"
          },
          {
            id: "a10",
            text: "Borrowed shadows don't alter identity, mood, or shoe size. Liability centers on lighting hardware and trip risks, which are insured like block parties and pop-up crosswalks.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.SlightPositive,
            outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Health comfort helps, but may seem to sidestep costs."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "No direct fiscal shift, but uptake could add admin costs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances must not pre-judge unresolved legal claims."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear wellbeing guardrails reassure and boost compliance."
                }
              }
            }
          },
          {
            id: "a11",
            text: "No secret indemnity slush to soothe vendors. We use standard risk pools and pause spending if a judge pauses the pilot; nobody gets a blank-check night.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.Neutral,
            outcome4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Firm denials can look evasive given leaked memos."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Standard indemnities protect budgets from surprises."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denying special shields invites stricter court review."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Austerity stance may hinder rapid safety adjustments."
                }
              }
            }
          },
          {
            id: "a12",
            text: "The memos map responsibilities—parks lights, housing corridors, safety signage—not a plot to ghost anyone's rights. It's coordination on paper, not an exorcism.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightPositive,
            outcome2: OutcomeModifierWeight.SlightPositive,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process mapping can read bureaucratic in a values story."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Shared responsibility blurs who pays when harm occurs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Role clarity readies us for injunctions and filings."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fragmented duties risk gaps in resident protections."
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
        text: "Will you publish the vendor list and a warehouse map, or is 'proprietary twilight' now your transparency policy for a one-week empathy trial?",
        answers: [
          {
            id: "a13",
            text: "Yes, we’ll release the vendor list and a simplified site map after the pilot. Full schematics stay redacted because they reveal private addresses and deliberate decoy routes.",
            type: AnswerType.Admit,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.ModerateNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.ModeratePositive,
            outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Proactive transparency strengthens trust in the pilot."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Publishing lists avoids speculation about hidden costs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Disclosure must respect protective orders and privacy."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overexposure of sites could complicate safety planning."
                }
              }
            }
          },
          {
            id: "a14",
            text: "Storage isn't a secret bunker; it's modular lockers at community hubs. Redactions protect staff after someone mailed a 'darkness coupon' stuffed with glitter and snark.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightPositive,
            outcome2: OutcomeModifierWeight.SlightPositive,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Procedural detail may not satisfy calls for openness."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Generic info leaves budget watchers guessing on rates."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Balanced context reduces litigation risk and confusion."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague storage info could unsettle participants."
                }
              }
            }
          },
          {
            id: "a15",
            text: "No, 'proprietary twilight' is not policy; it's a joke someone printed on a procurement mug. Our standard is publish by default and redact only where safety or privacy demands.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.Neutral,
            outcome4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat refusal invites doubts about pilot governance."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Guarding bids protects price integrity under scrutiny."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard no can be brittle if compelled production follows."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Non-disclosure can hinder local health coordination."
                }
              }
            }
          },
          {
            id: "a16",
            text: "Residents don't need a map to participate; pickup points are posted on block kiosks with big lamp icons and no fine print. If one moves, stewards text the block list.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.SlightPositive,
            outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassurance absent data looks like message management."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comfort talk without costs invites budget questions."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Softer tone cannot replace statutory transparency duties."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear pickup guidance reduces confusion and stress."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "If courts compare silhouettes to umbrellas, what rights attach to rain and shade, and what remedy exists when a neighbor returns one 'scuffed'?",
        answers: [
          {
            id: "a17",
            text: "Courts won't crown raindrops property. The analogy simply frames custody versus identity, and remedies mirror lost‑and‑found norms: report, replace, or return, not litigate your silhouette.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightPositive,
            outcome2: OutcomeModifierWeight.SlightPositive,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Legal parsing can feel detached from lived experience."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Non-property framing reduces fears of bizarre levies."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Setting expectations helps courts handle odd disputes."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Abstract analogies may not calm neighborhood concerns."
                }
              }
            }
          },
          {
            id: "a18",
            text: "If a shadow comes back 'scuffed,' it's a lighting mismatch, not a personality scratch. Participants can request a refresh or a matched stand‑in without any paperwork.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.SlightPositive,
            outcome4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Over-soothing tone risks trivializing real grievances."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health focus alone leaves costs and claims unanswered."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comfort claims must not prejudge liability outcomes."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear remedy steps reduce anxiety and promote uptake."
                }
              }
            }
          },
          {
            id: "a19",
            text: "Let’s not elevate a smudge to a civil-rights saga. The point is to meet your neighbor, not notarize your outline, and certainly not deputize every lamp post.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.StrongPositive,
            outcome2: OutcomeModifierWeight.SlightPositive,
            outcome3: OutcomeModifierWeight.SlightNegative,
            outcome4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Reframing keeps empathy central and energizes supporters."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Philosophy without terms leaves fiscal gaps unresolved."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Challenge rhetoric can collide with unsettled doctrines."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Tone helps morale, but practical guidance still matters."
                }
              }
            }
          },
          {
            id: "a20",
            text: "There are no scuff fees, surcharges, or vibe penalties. Treasury refuses to monetize scratches, smirks, or shade; the ledger is strictly light-on, light-off.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            outcome1: OutcomeModifierWeight.SlightNegative,
            outcome2: OutcomeModifierWeight.SlightNegative,
            outcome3: OutcomeModifierWeight.Neutral,
            outcome4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Sweeping denials appear defensive amid open questions."
              },
              cabinet: {
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "No fees or surcharges limits perverse market signals."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overpromising could backfire if small claims arise."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal may deter reporting minor but real concerns."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
