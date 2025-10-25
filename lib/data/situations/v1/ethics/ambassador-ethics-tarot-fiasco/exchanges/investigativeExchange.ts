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
      text: "Who bankrolled the 'State Ethics Oracle,' who swapped the ethics flowcharts for Major Arcana in the memos, and why did those edits happen at 2 a.m.?",
      answers: [
        {
          id: "q1a1",
          text: "I’m not playing 52-pickup with ethics; every receipt goes on the table. Vendor lists, timestamps, and approvals go public by noon, and if anyone billed us for mysticism, they’ll meet auditors first.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Boldly challenging the gimmick projects control and scrambles critics."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This public clash risks undermining State’s corrective messaging."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Showmanship complicates the factual record we need to enforce rules."
              }
            }
          },
          followUpId: "q2"
        },
        {
          id: "q1a2",
          text: "Let’s retire the spooky branding. This was cross‑cultural foresight training, not divination, and the flowcharts still governed decisions. The late edits flagged context notes, not a séance.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Soft-pedaling looks evasive and invites harsher scrutiny on me."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Framing it as foresight training stabilizes missions while we fix."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Spin muddies chains of approval we must map precisely."
              }
            }
          }
        },
        {
          id: "q1a3",
          text: "Procurement logs show a small consultancy hired under a training code, with total spend under 50,000 cloudcoins. Metadata shows revisions at 1:58 a.m. by a deputy’s aide; we have the change history.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Dry disclosures alone don’t quell outrage and can look passive."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Plain facts expose our process missteps and invite blame on State."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear records strengthen our authority to audit and prosecute."
              }
            }
          },
          followUpId: "q3"
        },
        {
          id: "q1a4",
          text: "No one authorized tarot to rubber‑stamp conflicts, and no policy was replaced by playing cards. If a staffer tried cosplay compliance, that’s not doctrine and it won’t survive the week.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "A concise denial steadies optics but risks reversal if facts shift."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Categorical denial backfires if memos contradict our claim."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Overbroad denial hampers document recovery and cooperation."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2",
        text: "Which budget line paid the card readers, who approved the invoice, and did any mission funds get relabeled as ‘cultural foresight services’ to hide the spend?",
        answers: [
          {
            id: "q2a1",
            text: "On behalf of State, authorized: the expense hit a training pilot line; the vendor 'Orbit Insight Cooperative' billed 38,400 cloudcoins. Approval flowed through two bureaus; reimbursements are frozen pending review.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Authorizing spend reads cavalier about conflicts and waste."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning the line item shows accountability to unwind the mess."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "The admission narrows our leverage on clawbacks and referrals."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.State
          },
          {
            id: "q2a2",
            text: "Finance tags identify sub‑object 732.11—external facilitation. The invoice cleared auto‑controls but was escalated after the memo leak; the inspector’s team has already mirrored the ledger for preservation.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical brief reduces drama but leaves me carrying the optics."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Budget specificity supports a cleanup plan without theatrics."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Granular tags support tracing and potential subpoenas."
                }
              }
            },
            followUpId: "q4"
          },
          {
            id: "q2a3",
            text: "The phrase 'card readers' is doing a lot of theatrical work. We contracted facilitation coaches; they brought props, not prophets. The money trail is boring and will be published in full.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "A light jab shows confidence without owning the practice."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Deflection reinforces the impression of unserious oversight."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing terms undermines our case for accurate records."
                }
              }
            }
          },
          {
            id: "q2a4",
            text: "In retrospect, labeling was too cute by half. 'Foresight services' should have read 'scenario training,' and I’ve instructed budget officers to use plain speech, not cryptic horoscopes.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting cute labels invites mockery and budget hearings."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Contrition helps reset but exposes procurement gaps at State."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Candor makes remediation easier but softens accountability."
                }
              }
            }
          }
        ]
      },
      {
        id: "q3",
        text: "The memos show 1:58 a.m. edits; who ordered them, and why were compliance flowcharts swapped for tarot spreads like ‘The Golden Conflict Resolver’?",
        answers: [
          {
            id: "q3a1",
            text: "The edits came from a deputy’s aide compiling annexes; the core policy text didn’t change. The spreads were illustrative inserts, now removed, and the version history and author IDs will be posted.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blaming aides still makes leadership look inattentive at 2 a.m."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This pins sloppiness inside State’s workflow and docs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Naming compilers clarifies chains for interviews and warrants."
                }
              }
            },
            followUpId: "q5"
          },
          {
            id: "q3a2",
            text: "Our teams work globally, which means odd hours and unfortunate clip art. The 2 a.m. timing reflects time zones, not cover‑ups, and the flowcharts still ruled the day.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Time-zone talk sounds like excuse-making under pressure."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Global workflow framing buys a limited grace period."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Excuses erode credibility when building a prosecutable record."
                }
              }
            }
          },
          {
            id: "q3a3",
            text: "We’ve reinstated the standard flowcharts, added a bright red 'no mystic metaphors' note, and put late‑night edits behind a two‑person check. The policy is back to being gloriously dull.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Corrective steps project control and momentum under fire."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Restored flowcharts steady field teams during audits."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Prospective fixes alone can’t replace sworn documentation."
                }
              }
            }
          },
          {
            id: "q3a4",
            text: "We let the annex get too clever. It was meant to simplify conflicts training and instead complicated trust; that’s on us, and it’s fixed with a paper trail and new guardrails.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting cleverness concedes gimmickry tied to my administration."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Owning the annex misstep reflects on State supervision gaps."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Frankness aids sanctions review and policy corrections."
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
        text: "Will you claw back payments from Orbit Insight Cooperative or any subcontractors, and who signed the conflict screens that let a deck of cards onto the invoice?",
        answers: [
          {
            id: "q4a1",
            text: "If the deliverables don’t match the statement of work, we’ll pursue clawbacks under standard remedies. The signer of the conflict screen was a rotating approver; that log will be released.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Conditional clawbacks sound reactive instead of decisive."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Cautious tone protects contracting but seems defensive."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear standards bolster recovery and restitution options."
                }
              }
            }
          },
          {
            id: "q4a2",
            text: "If someone smuggled cosplay into compliance, we’ll make an example so loud it echoes through the break room crystals. Refunds or debarment are on the table if the facts support it.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Aggressive stance reclaims initiative and blunts ridicule."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard posturing risks demoralizing posts still fixing controls."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric can outpace evidence we need to enforce remedies."
                }
              }
            }
          },
          {
            id: "q4a3",
            text: "No dime vanishes into incense. Independent accountants are on site, and the payment hold protects taxpayers while we trace every sub‑vendor with a flashlight and a spreadsheet.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance without teeth reads like stall tactics."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calming embassies keeps operations running during audits."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Soft tones weaken leverage over negligent contractors."
                }
              }
            }
          },
          {
            id: "q4a4",
            text: "There’s no evidence of a slush altar here. If the work met the spec—training with props—then it’s a weird invoice, not a wrongful one, and we follow the contract, not the horoscope.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm denial steadies some allies but invites fact-checking."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissal clashes with contracting trails and memos."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denying signals resistance to oversight and discovery."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5",
        text: "Who drafted the ‘Golden Conflict Resolver’ spread, and will Justice refer any off‑book ethics approvals that used it for potential sanctions or process fixes?",
        answers: [
          {
            id: "q5a1",
            text: "Draft credit sits with a contractor design team; none held approval authority. Justice is reviewing any case that cited the insert, and referrals will follow our charging policy, not theatrical flair.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assigning credit to contractors still reflects on leadership."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This highlights vendor control over State workflow."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Attribution helps referrals and fixes within procurement."
                }
              }
            }
          },
          {
            id: "q5a2",
            text: "If someone tried to launder conflicts through a cartoon spread, they should lawyer up metaphorically and literally. We’ll fix process and, if necessary, help them meet a judge on time.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Threatening sanctions shows backbone amid absurd optics."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Tough talk can backfire if contracts say otherwise."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Bluster risks prejudging facts we must document."
                }
              }
            }
          },
          {
            id: "q5a3",
            text: "Where approvals went off‑book, they will be re‑adjudicated the old‑fashioned way: with binders, signatures, and sleep. No one keeps a perk because a cartoon card said so.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Concrete remedies convey competence under investigation."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Realigning approvals protects missions from future stunts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Process tweaks alone don’t address past violations."
                }
              }
            }
          },
          {
            id: "q5a4",
            text: "There’s no secret cabal of card‑based ethics approvals. We found goofy inserts, not a shadow court, and the real approvals still require human names, dates, and a blazing audit trail.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Sweeping denial invites leaks to contradict the claim."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defensive posture shields some teams but erodes credibility."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimization complicates referrals and corrective orders."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
