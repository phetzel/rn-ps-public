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
      id: "q_root",
      text: "Ledgers allege State and Justice swapped honorary visas and immunities for rare bonsai. Is the rule of law now a houseplant with a price tag?",
      answers: [
        {
          id: "a_root_1",
          text: "No, the administration does not barter justice for houseplants. Bonsai are gifts, not get-out-of-court passes, and no immunity was issued because someone watered nicely.",
          type: AnswerType.Deny,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Forceful denial frames him as above absurd bribery."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Deflection of blame implies State mishandled gift protocols."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Signals Justice may face scrutiny for process laxity."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "The Ministry of State treats cultural gifts as micro-ambassadors logged in the gift registry. This is about diplomacy, not dispensations, and certainly not a clearance sale.",
          type: AnswerType.Deflect,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Deflection undercuts presidential ownership of the facts."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Cultural framing steadies State’s footing amid ethics noise."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Skirting details irks Justice’s case-centric approach."
              }
            }
          }
        },
        {
          id: "a_root_3",
          text: "Justice began an internal audit last week; preliminary review shows no honorary visas or immunities issued in exchange for anything. The ledger codes match routine gift cataloging.",
          type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Dry auditing tone sidelines his confrontational narrative."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Audit focus invites scrutiny of State’s intake logs."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear timeline projects procedural control and diligence."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_root_4",
          text: "Border systems and visa vetting run on multilayer checks, not shrub-based coupons. Guardrails are intact, and we welcome the probe to prove the hardware, not the houseplants, runs policy.",
          type: AnswerType.Reassure,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Calm assurance projects command over the bureaucracy."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurance risks minimizing State exposure to probes."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Measured tone suggests Justice will act methodically."
              }
            }
          },
          followUpId: "q_sec2"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Given the bonsai allegation, why should travelers trust visa screening and border vetting, or are the 'digital turnstiles' just decorative gates?",
        answers: [
          {
            id: "a_sec1_1",
            text: "Visa adjudication has three independent checks, with audit logs reviewed weekly. We are cross-reconciling any gift entries against approvals, and we will publish that matrix.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Technical detail dims his preferred bold posture."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Specifics tug State toward tighter documentation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Fact pattern supports Justice’s timeline-first stance."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_sec1_2",
            text: "The premise is wrong: no immunity or visa was granted for a plant. The tech is boring, redundant, and effective, which is exactly how border systems should be.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Firm denial reinforces a take-charge public image."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Flat denial risks brushing past State record gaps."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Over-broad denial complicates Justice’s evidence path."
                }
              }
            }
          },
          {
            id: "a_sec1_3",
            text: "If a bonsai could beat our risk models, it would deserve a security clearance. It cannot, and it did not, so let us not credit ficus fan-fiction with breaking the firewall.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Taunting tone invites blowback if facts later contradict."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Pushback buys State breathing room but invites follow-ups."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric over facts strains Justice’s cautious approach."
                }
              }
            }
          },
          {
            id: "a_sec1_4",
            text: "Independent inspectors are reviewing the same systems and will certify the controls. That is sunlight, not spin, and travelers will see no disruptions while it happens.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reassurance paints steadiness amid public frustration."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Promising reviews hints at missed State safeguards."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calm oversight message aligns with Justice’s cadence."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Markets flinch at ministry soap operas: if visas can be bought with bonsai, what assures investors and allies the last guardrail isn't a potted plant?",
        answers: [
          {
            id: "a_sec2_1",
            text: "Macroeconomic guardrails sit in law and code, not in planters. Investor protections, sanctions controls, and visa standards stay in force while investigators count the leaves.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Macro talk without accountability feels evasive."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Systems framing helps State but invites proof demands."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Market calming lacks the case detail Justice prefers."
                }
              }
            }
          },
          {
            id: "a_sec2_2",
            text: "This is a headline about horticulture, not a credit downgrade. Trade flows, energy permits, and garden expos proceed; let us talk about growth instead of potting soil.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Calling it hype risks trivializing public concern."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reframing as culture steadies State’s external optics."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Minimizing tone clashes with Justice’s sober posture."
                }
              }
            }
          },
          {
            id: "a_sec2_3",
            text: "The ethics office set a 14-day review window, with public logs and redactions per statute. We will post the findings and any corrective actions on the compliance portal.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Process updates overshadow his instinct for spectacle."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audit milestones may expose State workflow gaps."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Structured review schedule validates Justice discipline."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_sec2_4",
            text: "If clerical sloppiness blurred gift logs and visa logs, we will fix it fast. That is a paperwork bruise, not a systemic fracture, and it will not spook capital or allies.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning fixes signals control, despite limited detail."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting documentation gaps pressures State to reform."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Targeted accountability supports Justice credibility."
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
        text: "On specifics: who approved any recent immunities, on what dates, and how are the ledger 'tree codes' audited against visa logs and the gift registry?",
        answers: [
          {
            id: "a_ter1_1",
            text: "Approvals are tracked by case ID with two signatures; last quarter shows zero immunity cases tied to gifts. The audit maps code fields to visa events and flags any mismatch for review.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Granular tracking talk dulls his decisive persona."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Detail may surface State’s case-handling variances."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Auditability message reinforces Justice chain-of-custody."
                }
              }
            }
          },
          {
            id: "a_ter1_2",
            text: "No immunities were traded, period. Ledger tags for plants indicate storage and valuation, not favors, and our approvals list corroborates that.",
            type: AnswerType.Deny,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Categorical denial projects authority under pressure."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Absolutism risks blowback if logs reveal anomalies."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Blanket refutation complicates evidentiary messaging."
                }
              }
            }
          },
          {
            id: "a_ter1_3",
            text: "Those 'tree codes' are glorified barcodes, not secret handshakes. Let the auditors alphabetize the saplings while we handle actual statecraft.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Mocking codes can seem flippant amid ethics probes."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Reframing codes cushions State’s gift registry optics."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissive tone jars with Justice’s methodical stance."
                }
              }
            }
          },
          {
            id: "a_ter1_4",
            text: "We do not crowdsource subpoenas from a gardening spreadsheet. We will answer to statutes and auditors, not to leaf-by-leaf speculation.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm boundary against spectacle looks measured today."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rejecting crowd input risks appearing defensive at State."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Guardrails-first posture supports Justice’s restraint."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Accountability: will anyone be suspended, will honorary visas pause, and will you publish a gift-to-visa crosswalk so guardrails stop being metaphors?",
        answers: [
          {
            id: "a_ter2_1",
            text: "If findings show gaps, interim suspensions will happen and honorary visas can pause. We will publish the crosswalk and the fixes so the guardrails are plain steel, not poetry.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Conditional actions read as hedging on accountability."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Contingent steps suggest State readiness to adjust."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Process-dependent stance fits Justice but lacks detail."
                }
              }
            }
          },
          {
            id: "a_ter2_2",
            text: "Policy memo drafts are ready: clarify gift intake, segregate logs, and require ethics sign-off before any honorary visa. The rollout plan and deadlines will be posted publicly.",
            type: AnswerType.Inform,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Policy minutiae blunts his preference for bold cues."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Clarifications expose State to comparisons with past lapses."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Concrete memos align with Justice’s fact-first style."
                }
              }
            }
          },
          {
            id: "a_ter2_3",
            text: "We will not do theater to feed a bonsai panic. Real accountability is measured in corrected procedures and audit trails, not in ceremonial sackings.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Rejecting theatrics risks seeming dismissive of outrage."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Resisting panic aids State morale but invites criticism."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Anti-theater stance can impede Justice’s public clarity."
                }
              }
            }
          },
          {
            id: "a_ter2_4",
            text: "We can always document better, and we will. Owning the paperwork mess is step one; step two is publishing the checklist that keeps a plant out of the wrong column.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning fixes signals control and willingness to improve."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Acknowledgment pressures State to tighten gift logging."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Constructive transparency supports Justice credibility."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
