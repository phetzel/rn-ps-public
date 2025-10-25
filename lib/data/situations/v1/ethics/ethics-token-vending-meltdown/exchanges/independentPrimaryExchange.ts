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
      text: "Urban residents say a vending machine sold ‘Ethics Tokens’ for pizza; what fixes—audits, receipts, permit freezes—will you enact, and when?",
      answers: [
        {
          id: "a_r1",
          text: "I’m challenging the rogue dispenser to an ethics duel: we’re unplugging it, freezing all waivers, and auditing every token by dawn. Pizza becomes evidence, not currency, starting today.",
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
              reaction: "This projects leadership by confronting the fiasco directly."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Rhetoric risks complicating precise, defensible fact-finding."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Showmanship may unsettle residents seeking calm and clarity."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r2",
          text: "The Department of Civic Justice opened an administrative inquiry and secured the token logs and coin hopper. We’ll report preliminary findings within 48 hours without prejudging any permit outcomes.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Sounds passive amid outrage and may look bureaucratic."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear process message stabilizes expectations and legality."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dry facts alone may not soothe urban health anxieties."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r3",
          text: "Public Health & Honesty will clarify that pizza is not ethical tender and cannot expedite anything, including digestion. We’re issuing guidance today and a hotline for residents worried their waivers are tainted.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Tone of calm could be misread as downplaying misconduct."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Health framing may blur jurisdictional accountability."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Direct reassurance strengthens trust and reduces panic."
              }
            }
          }
        },
        {
          id: "a_r4",
          text: "We let a convenience pilot morph into a convenience loophole, and that’s on us. Accountability will include permit reviews, vendor penalties, and a public fix schedule you can actually read.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Admitting fault helps, but invites blame without fixes."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Concession lacks legal guardrails residents expect now."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Owning ambiguity can humanize response and reduce stress."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "On audits and receipts, how will you verify past tokens, issue durable receipts, and stop pizza-for-waiver reruns without turning this into a surveillance circus?",
        answers: [
          {
            id: "a_s1_1",
            text: "We’ll crosswalk token IDs with time-stamped permit logs and require revalidation with QR-coded receipts. Only token and case numbers get pulled so we can unwind who got what, when, and why.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical fix without passion may seem detached."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Evidence chain reduces exposure and restores fairness."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Receipt clarity lowers confusion and public worry."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "Applicants won’t be punished for someone else’s snack stunt. Clean cases stay clean, and if a case needs repair, we’ll fix it without making anyone queue for a second soul-crushing line.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Generosity could be framed as lax on accountability."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Non-punitive stance may weaken deterrence signaling."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Protecting innocents stabilizes services and health."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "We’re not building an all-seeing snack panopticon. No crust metrics, no topping dossiers—just the minimum audit data to reverse the damage and lock out repeat performances.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Denying surveillance risk may seem tone-deaf to rights."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Guardrails against overreach support lawful auditing."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Dismissive tone can elevate stress in affected areas."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Let’s not grant the machine a moral biography. It dispensed what bad actors ordered; we’re fixing the menu and the kitchen so shortcuts stop being listed under “specials.”",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Humor defuses tension and keeps focus on fixes."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Deflection risks undercutting seriousness of review."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Light tone may frustrate residents seeking certainty."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "For permits greased by pizza-paid tokens, will you suspend, revoke, or grant a grace period, and how will you protect applicants who followed the rules?",
        answers: [
          {
            id: "a_s2_1",
            text: "We’ll flag suspect decisions, issue hold notices, and do case-by-case reviews with due process. Clean approvals proceed; tainted ones get reset without shoving rule-followers to the back of the line.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Holds look cautious and may read as slow-walking."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Targeted flags show discipline under administrative law."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Pauses could interrupt critical services for families."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "No one loses services overnight because a snack machine tried lobbying. We’ll pause only questionable approvals and pair that with outreach so residents know their rights and their next steps.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Carefulness may be cast as avoiding tough calls."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Leniency can weaken future enforcement posture."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Continuity of care strongly supports vulnerable users."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_3",
            text: "I’m challenging every permitting office to post a self-audit scoreboard within a week. If leadership cherished shortcuts, they can explain it in daylight, bagel or no bagel.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Challenge posture shows energy for cleanup missions."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Directive tone risks bypassing procedure and records."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive framing may raise stress at service sites."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "We let convenience outrun clarity, and that ambiguity fed the mess. We’ll offer fairness credits—fee refunds and priority slots—so patient applicants aren’t stuck behind cheesy shortcuts.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting drift invites criticism for oversight gaps."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Concession may trigger legal claims or appeals."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Honesty can ease fears while fixes are implemented."
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
        text: "If QR receipts and token crosswalks are coming, will you publish a public ledger, who audits it, and how soon can residents see whether their case is clean?",
        answers: [
          {
            id: "a_t1_1",
            text: "We’ll post a redacted ledger showing token IDs, dates, and decision status, audited by the Inspector of Systems. The prototype goes live in seven days with weekly checks thereafter.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Publishing data can expose the White House to scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparent ledger aligns with evidence and due process."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear records reduce rumors and health-related anxiety."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "You won’t need a degree in snackonomics to read it. A plain-language page will show whether your case is clean, queued for review, or fixed, plus a human you can call for help.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Setting deadlines signals control and accountability."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rushed timelines can jeopardize evidentiary accuracy."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Speed over clarity could confuse service providers."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "I’m putting a clock on this: if the seven-day prototype slips, leadership explains it publicly. We’re done letting office plants outrun progress on basic transparency.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Firm clock pressures agencies to deliver measurable fixes."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Public countdown risks errors and appealable defects."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Countdown could overwhelm front desks and clinics."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We’re not slapping buzzword glue on governance. No fad chains or tokenized toppings—just verifiable logs that answer who did what, when, and how it gets corrected.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Rejecting buzzwords shows discipline but risks cynicism."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Plain standards help courts parse the record cleanly."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Skepticism may dampen resident confidence in tools."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "On trust and public health optics, will you classify pizza as non-tender for ethics, retrain staff, and set up a simple way to report snack-based pressure?",
        answers: [
          {
            id: "a_t2_1",
            text: "Public Health & Honesty will formalize pizza-as-non-tender and retrain frontline staff. We’ll post “No Snacks Accepted” signage and open a hotline with multilingual support for quick reporting.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Health framing alone may look narrow for an ethics case."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Policy recast must avoid prejudging possible violations."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Clear non-tender rule will calm clinics and applicants."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Civic Justice will collect reports and protect whistleblowers while we sort evidence from rumor. Credible cases trigger administrative penalties and, if needed, civil enforcement.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fact intake stance looks methodical but not inspiring."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Centralized reporting strengthens defensible case files."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hotlines without support can heighten stress signals."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "I’m challenging every agency to publish a one-page “no favors, no flavors” policy by Friday. If that’s hard, we’ll assume snacks were doing more work than policy ever did.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "One-page standards show leadership and accessibility."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Blanket challenges risk conflicts with ongoing cases."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Pressure for uniformity may strain training capacity."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We let cafeteria culture bleed into compliance, and that marinade wasn’t policy. We’re scrubbing the recipe with clear rules, simpler forms, and supervisors who sign with their names.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Owning culture risk invites questions about oversight."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admittance may widen litigation exposure and reviews."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Candid tone fosters trust and encourages reporting."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
