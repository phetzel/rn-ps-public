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
      text: "On the Apology Exchange, who grades remorse, who okayed 'sorry swaps,' and did senior officials profit by shorting contrition?",
      answers: [
        {
          id: "a1",
          text: "We did pilot limited contrition hedges to steady chaotic spikes in diplomatic awkwardness. It was reported, bounded, and we’re unwinding transparently so the national mood stays boring on purpose.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Owning limited pilots signals candor amid scrutiny."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State absorbs criticism for allowing hedges too soon."
              }
            }
          }
        },
        {
          id: "a2",
          text: "Remorse on the Exchange is fully sigh‑collateralized and redeemable for direct eye contact. No apology clears without human accountability and audits, and State is tightening the guardrails this week.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Reliance on buzzwords reads evasive under investigation."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear reassurance steadies missions and market nerves."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "a3",
          text: "Grading was handled by the Bureau of Sincere Metrics and its licensed Empathy Panels, using audited blush‑to‑syllable ratios. Oversight memos list who signed off and when, and we can walk you through them.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Disclosing grading bureaus invites blame without fixes."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Process clarity helps State defend its oversight role."
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "a4",
          text: "Let’s not pretend a novelty market replaced actual apology. The Exchange is an optics tool, not a conscience, and the loudest outrage often comes from people short on facts.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "A sober reality check can project resolve to the press."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissive tone risks alienating envoys and partners."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "Who actually assigns scores to apologies, how are those graders compensated, and can they quietly profit by shorting the remorse they rate?",
        answers: [
          {
            id: "b1",
            text: "Scores come from accredited Empathy Assessors retained through the Civic Sentiment Board. They’re paid flat fees, barred from contrition bets, and audited quarterly with penalties that actually sting.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Specifics on assessors show control and transparency."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Costs scrutiny lands on State’s vendor management."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "b2",
            text: "We won’t referee compensation rumor bingo from the podium. Independent reviewers are under NDAs, and the inspectorate enjoys reading footnotes much more than I do.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dodging pay questions fuels a narrative of secrecy."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Shielding comp details buys time to audit quietly."
                }
              }
            }
          },
          {
            id: "b3",
            text: "If someone claims graders are secretly shorting sorrow, they should show the receipts. Vague vibes are not evidence, even in a market built from vibes.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Aggressive pushback may look defensive under fire."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm stance can protect field teams from speculation."
                }
              }
            }
          },
          {
            id: "b4",
            text: "Firewalls are baked in: separate desks, conflict attestations, and real‑time surveillance on sigh‑leakage. If a grader sneezes near a swap, compliance calls.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Overpromising firewalls risks later credibility hits."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Reassuring controls supports confidence in pipelines."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "Which offices approved 'sorry swaps' as assets, and can you confirm if any officials quietly profited from those approvals?",
        answers: [
          {
            id: "c1",
            text: "Some approvals moved too fast under pilot waivers, and that’s on us. We’ve frozen new variants, pulled every waiver for review, and will publish a timeline with signatures attached.",
            type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModeratePositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Admitting haste suggests accountability and course correction."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Waiver talk pins procedural risk primarily on State."
                }
              }
            }
          },
          {
            id: "c2",
            text: "We have no evidence that any official personally profited from their own approval decisions. If we find otherwise, that’s a career‑ending day, not a wrist slap.",
            type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Flat denials can backfire if new facts surface soon."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Protects State staff morale by rejecting profiteering claims."
                }
              }
            }
          },
          {
            id: "c3",
            text: "Approvals came through the Office of Diplomatic Clearing with sign‑offs from the Financial Optics Council, per the public docket. Transaction IDs, dates, and risk flags are being compiled now.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Offering org charts helps but exposes approval choke points."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Shifts focus from intent to structure and compliance steps."
                }
              }
            }
          },
          {
            id: "c4",
            text: "The Secretary of State will address specific beneficiaries and waivers in a 3 p.m. briefing. They will release the ledger and answer names‑on‑paper questions directly and on the record.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deferring specifics reads cautious but thin on answers."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Signals readiness to brief while safeguarding cases."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.State,
            followUpId: "q5"
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q4",
        text: "If graders are 'independent,' who audits their blush metrics and eye‑contact counts, and what penalties hit anyone gaming the remorse scoreboard?",
        answers: [
          {
            id: "d1",
            text: "The Office of Public Candor audits the data streams and recalibrates devices against control blushes monthly. Violations trigger clawbacks, suspensions, and public downgrades of prior mea culpas.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Audit details aid transparency but highlight oversight gaps."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Shows State engaged with auditors and data integrity."
                }
              }
            }
          },
          {
            id: "d2",
            text: "We built this assuming someone would try to cheat. Cross‑checks, decoy scripts, and whistleblower bounties make gaming the metrics a losing hobby.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Confidence message positions the White House as proactive."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting risk planning may imply earlier vulnerability."
                }
              }
            }
          },
          {
            id: "d3",
            text: "No, a high score can’t be bought with gift baskets or dramatic pauses. Attempts to purchase grade inflation are caught and reported to enforcement.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard denial helps frame standards but can sound glib."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Reinforces norms to posts and partners on gift policies."
                }
              }
            }
          },
          {
            id: "d4",
            text: "Let’s keep scale in mind: we’re measuring etiquette, not oxygen levels. Sanctions are proportionate, swift, and designed to deter grandstanding, not to ruin lives.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Context push can seem minimizing during an ethics probe."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Pushing scale argument risks undercutting seriousness."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "When that 'sorry swap' ledger lands, will it name any officials who profited and void contracts signed under hush‑hour pilot waivers?",
        answers: [
          {
            id: "e1",
            text: "Names, roles, and recusal status will be disclosed, and any tainted instruments will be unwound at no gain. Sunlight is cheaper than crisis management.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Promising disclosures increases exposure if gaps appear."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency note boosts trust in State’s compliance."
                }
              }
            }
          },
          {
            id: "e2",
            text: "The release will include counterparties, timestamps, and hedge rationales, with redactions only for active negotiations. Voids will be listed alongside restitution math.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Listing ledger fields invites comparisons and blame."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Detailing datasets shows procedural rigor and controls."
                }
              }
            }
          },
          {
            id: "e3",
            text: "If we find personal gain tied to approvals, we’ll say so plainly and refer it out. You won’t need to squint at euphemisms to know what happened.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Commitment to clawbacks shows resolve and accountability."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Threatening penalties may unsettle ongoing diplomacy."
                }
              }
            }
          },
          {
            id: "e4",
            text: "Let’s not pre‑announce penalties before we finish counting the beans. The ledger will speak in rows and columns; I won’t gild it from the podium.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Avoiding penalties talk preserves leverage during review."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Deflection leaves State carrying ambiguity and risk."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
