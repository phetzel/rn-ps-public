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
      text: "Pillow Fort Day looks like fluff-to-bunker economics: VIP suites brim while hourly crews tape towels. Who okayed it, and how do exemptions work?",
      answers: [
        {
          id: "a_root_1",
          text: "Let’s be clear: I’m not here to coddle the couch lobby or gravity—I’m here to protect night-shift hands. If fluff is skipping workers, we’ll reroute it by sunrise and audit every VIP bunker like it’s a beanbag cartel.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            "pillow-code-chaos": OutcomeModifierWeight.ModeratePositive,
            "down-feather-dome": OutcomeModifierWeight.ModerateNegative,
            "fluffstice-sovereignty": OutcomeModifierWeight.SlightNegative,
            "sofa-strike": OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "I pushed this to confront inequity and stop fluff favoritism cold."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This framing undercuts our neutral standards and confuses compliance."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "It sidelines contingency plans the Brigade needs to cover shortages."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "It risks legal exposure by implying capricious exemptions."
              }
            }
          },
          followUpId: "q_s2"
        },
        {
          id: "a_root_2",
          text: "Homeland rates cushions by Threat Fluff Level; seniors get quilt lanes, schools get early slots, barns can certify as mega-pillows. Exemptions follow posted criteria with clocks, not VIP trapdoors or secret throws.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            "pillow-code-chaos": OutcomeModifierWeight.SlightPositive,
            "down-feather-dome": OutcomeModifierWeight.ModeratePositive,
            "fluffstice-sovereignty": OutcomeModifierWeight.ModerateNegative,
            "sofa-strike": OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Neutral,
              reaction: "I support transparency but will not politicize queue mechanics."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Clear criteria and audits are our lane; this reinforces compliance."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Publicly ranking sites could telegraph vulnerabilities we must guard."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "We must ensure due process before exposing applicant details."
              }
            }
          },
          followUpId: "q_s1"
        },
        {
          id: "a_root_3",
          text: "The exemption portal did ask for lullabies and a pledge of nap allegiance. That’s indefensible; we’re scrubbing it today, auto-approving frontline shifts, and writing rules that pass a statute, not a bedtime story.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            "pillow-code-chaos": OutcomeModifierWeight.SlightNegative,
            "down-feather-dome": OutcomeModifierWeight.SlightPositive,
            "fluffstice-sovereignty": OutcomeModifierWeight.ModeratePositive,
            "sofa-strike": OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Admitting portal flaws without fixes undermines confidence today."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "This casts our standards as arbitrary, which they are not."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "It distracts from logistics we need to correct supply gaps."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Owning defects lets us cure unlawful criteria swiftly and credibly."
              }
            }
          }
        },
        {
          id: "a_root_4",
          text: "Sofas do need strategic deterrence, but not at workers’ expense. The Duvet Brigade is a reserve force, not a siphon, and any ‘first-fill’ to VIP bunkers gets revoked faster than a decorative throw on moving day.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            "pillow-code-chaos": OutcomeModifierWeight.ModerateNegative,
            "down-feather-dome": OutcomeModifierWeight.SlightNegative,
            "fluffstice-sovereignty": OutcomeModifierWeight.SlightPositive,
            "sofa-strike": OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Threats need calm execution, not more brinkmanship."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Escalation rhetoric risks noncompliance at crowded sites."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Challenging complacency helps us harden critical nodes quickly."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Aggressive posture invites overreach claims and litigation."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_s1",
        text: "Homeland says Threat Fluff Levels are impartial, yet petitions flood from VIP towers. Who ranks them, and what makes exemptions beat towels and tape?",
        answers: [
          {
            id: "a_s1_1",
            text: "An independent scoring board grades risk, exposure, and accessible fluff, then assigns time windows. We’ll post a weekly dashboard with queue numbers, reasons, and appeals lanes so sunlight replaces rumor.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.ModerateNegative,
              "down-feather-dome": OutcomeModifierWeight.SlightPositive,
              "fluffstice-sovereignty": OutcomeModifierWeight.ModeratePositive,
              "sofa-strike": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "I back objective scoring, not status or skyline privileges."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Independent scoring validates our neutrality and speeds approvals."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "External boards can reveal operational patterns we need concealed."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Without strong appeals, due process vulnerabilities will multiply."
                }
              }
            },
            followUpId: "q_t1"
          },
          {
            id: "a_s1_2",
            text: "There are no VIP carve-outs—none. The math is boring on purpose, reviewers rotate, and auditors sit in, because the moment a velvet rope appears, the whole fort collapses into farce.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.ModeratePositive,
              "down-feather-dome": OutcomeModifierWeight.ModerateNegative,
              "fluffstice-sovereignty": OutcomeModifierWeight.SlightNegative,
              "sofa-strike": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Calling out favoritism directly helps keep this honest."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Flat denials ignore edge cases and erode public trust in metrics."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overconfident messaging can mask real shortfalls we must address."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Absolute statements risk misrepresentation in pending investigations."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "We underestimated the petition flood and built a portal sized for a nap, not a marathon. We’re triaging within 72 hours, issuing temp passes, and inviting outside oversight to grade our homework.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.SlightPositive,
              "down-feather-dome": OutcomeModifierWeight.ModeratePositive,
              "fluffstice-sovereignty": OutcomeModifierWeight.ModerateNegative,
              "sofa-strike": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Owning the backlog is fine, but voters expect immediate remedies."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting triage gaps suggests our standards are inconsistent."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Petition surges strain logistics we already stretched thin."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Acknowledging flaws enables lawful corrections to the portal rules."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If you’re literally taping towels, you jump the line by design. Call the rapid-softness line and we’ll turn that towel sculpture into an approved kit without making you memorize fluff geometry.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.SlightNegative,
              "down-feather-dome": OutcomeModifierWeight.SlightNegative,
              "fluffstice-sovereignty": OutcomeModifierWeight.SlightPositive,
              "sofa-strike": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Compassion matters, but we need enforceable guardrails too."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Jumping the line by narrative invites gaming and unfairness."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Prioritizing front‑line risk fits our force protection doctrine."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Ad hoc exceptions can violate equal treatment obligations."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_s2",
        text: "Defense touts a Duvet Brigade while warehouses sit bare and line cooks sleep under menus. Who gets the next shipment by Homeland standards, and are VIP bunkers first?",
        answers: [
          {
            id: "a_s2_1",
            text: "The premise is off: the Brigade backstops gaps after workers get gear. Next shipments hit transit hubs, shelters, and overnight crews; any bunker supply happens only with surplus and a public log, not a wink.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.SlightPositive,
              "down-feather-dome": OutcomeModifierWeight.ModeratePositive,
              "fluffstice-sovereignty": OutcomeModifierWeight.ModerateNegative,
              "sofa-strike": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "I welcome backup forces, but shipments must follow clear rules."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Backstops help, yet they must align to our risk prioritization."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "This clarifies the Brigade fills gaps only after civilian standards."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Coordination must not blur accountability for lawful allocations."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "Price-gouging is banned, contracts are under audit, and we’ve flagged vendors hoarding fluff for premium clients. We’ll publish enforcement stats, claw back ill-gotten cushions, and protect complainants.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.SlightNegative,
              "down-feather-dome": OutcomeModifierWeight.SlightPositive,
              "fluffstice-sovereignty": OutcomeModifierWeight.ModeratePositive,
              "sofa-strike": OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Audits and anti‑gouging signals are steps I support publicly."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Audits alone won’t fix rank ordering if data inputs are skewed."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "We cannot audit our way out of supply misallocations at speed."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Teeth are good, but prosecutions require airtight evidence."
                }
              }
            },
            followUpId: "q_t2"
          },
          {
            id: "a_s2_3",
            text: "There is no ‘Bunker Prime’ tier. Allocations are traceable by barcode and posted windows, and any line‑jumping pings an alert that lands on three desks—none of them upholstered.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.ModerateNegative,
              "down-feather-dome": OutcomeModifierWeight.SlightNegative,
              "fluffstice-sovereignty": OutcomeModifierWeight.SlightPositive,
              "sofa-strike": OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissing perceptions of privilege feeds backlash and doubt."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Affirming tiers by threat helps reinforce our objective matrix."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Messaging away concern invites morale issues in the field."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "If tiers appear secretive, equal protection claims will surge."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Supply is catching up: foam rolls and certified batting land tonight, with pillowcase converters online by morning. Standards are firm, but paperwork is down to two stamps and a mercifully short checklist.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.ModeratePositive,
              "down-feather-dome": OutcomeModifierWeight.ModerateNegative,
              "fluffstice-sovereignty": OutcomeModifierWeight.SlightNegative,
              "sofa-strike": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Optimism is fine; people want dates, quantities, and receipts."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Reassurances without data risk noncompliance at crowded venues."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "We need verifiable deliveries before we downshift contingency ops."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Publishing proofs of delivery reduces fraud and strengthens cases."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_t1",
        text: "Will you release the exemption queue, criteria weights, and rejection reasons in real time, or should we keep relying on leaked spreadsheets labeled final_final_actually?",
        answers: [
          {
            id: "a_t1_1",
            text: "Yes. We’re standing up a public dashboard and API with anonymized queue slots, timestamps, and criteria scores, plus audit trails under the FOAM‑1 transparency spec—pilot this week, full release next.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.ModeratePositive,
              "down-feather-dome": OutcomeModifierWeight.SlightNegative,
              "fluffstice-sovereignty": OutcomeModifierWeight.SlightPositive,
              "sofa-strike": OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Open dashboards are good; accuracy must beat speed this time."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "A public API hardens fairness and lets locals plan resources."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Real‑time feeds can leak sensitive layouts bad actors exploit."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We must redact PII and sensitive fields to avoid legal exposure."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We’ll publish plain‑language guides, examples, and a sandbox form before you apply. No more mystic runes or uploading photos of your ‘most comforting throw.’",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.ModerateNegative,
              "down-feather-dome": OutcomeModifierWeight.ModeratePositive,
              "fluffstice-sovereignty": OutcomeModifierWeight.SlightNegative,
              "sofa-strike": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Plain language helps, but results matter more than pamphlets."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Guides without datasets will be read as stalling and spin."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft guidance delays the hard choices that secure sites."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Vague examples risk arbitrary enforcement and litigation."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "If someone is gaming the line, we’ll show their fluff footprint and invite them to defend it in daylight. That quiets bravado faster than a deflated pouf.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.SlightPositive,
              "down-feather-dome": OutcomeModifierWeight.ModerateNegative,
              "fluffstice-sovereignty": OutcomeModifierWeight.ModerateNegative,
              "sofa-strike": OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Calling out cheaters is fine; do it with evidence and restraint."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Public shaming invites retaliation and undermines compliance."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Deterrence by visibility can disrupt exploiters gaming the queue."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Naming parties prematurely exposes us to defamation claims."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Some logs are messy—timestamps drifted and notes got cryptic. We’re backfilling, standardizing fields, and inviting inspectors and press to bang on the data until it squeaks.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.SlightNegative,
              "down-feather-dome": OutcomeModifierWeight.SlightPositive,
              "fluffstice-sovereignty": OutcomeModifierWeight.ModeratePositive,
              "sofa-strike": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting messy logs is honest; fix timestamps before release."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Data drift complicates prioritization and public confidence."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Integrity gaps force us to hold back support for safety reasons."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Disclosure of defects enables corrective orders and consent decrees."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_t2",
        text: "Hourly staff say they’re last to gear and first to be fined; what protections, anti‑gouging teeth, and towel‑tapers’ relief do you guarantee beyond inspirational throw‑p",
        answers: [
          {
            id: "a_t2_1",
            text: "An emergency order caps markup on approved kits, adds a 24/7 hotline, and mandates restitution for overcharges. Fines escalate, repeat offenders lose contracts, and whistleblowers get a shield and a share.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.SlightNegative,
              "down-feather-dome": OutcomeModifierWeight.ModeratePositive,
              "fluffstice-sovereignty": OutcomeModifierWeight.ModerateNegative,
              "sofa-strike": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Capping prices and relief must hit shelves fast, not press lines."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Price rules must still align with risk tiers to avoid shortages."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We need carve‑outs for critical nodes to keep deterrence intact."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Enforceable caps and relief are squarely within prosecutorial lanes."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Employers must provide approved softness kits or we’ll ship them directly; workers won’t pay. Grants reimburse small shops, and missed paperwork won’t block protection on a long, tired shift.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.SlightPositive,
              "down-feather-dome": OutcomeModifierWeight.SlightNegative,
              "fluffstice-sovereignty": OutcomeModifierWeight.ModeratePositive,
              "sofa-strike": OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Employer mandates are fair; we’ll back workers who speak up."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Blanket rules risk misfitting sites with unique threat profiles."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Mandates can stress supply chains supporting critical missions."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Promises without enforcement funds create hollow protections."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "No one is being fined for lacking brand‑name fluff. Citations target price predators and counterfeit gear, not a dishwasher improvising with a folded hoodie.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.ModerateNegative,
              "down-feather-dome": OutcomeModifierWeight.SlightPositive,
              "fluffstice-sovereignty": OutcomeModifierWeight.SlightPositive,
              "sofa-strike": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Minimizing fines is fine, but verify inspectors follow guidance."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clarifying enforcement reduces panic buying and improves flow."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Downplaying standards can weaken perimeter readiness."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "We still need penalties for fraud and willful noncompliance."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If a contractor diverts supplies to VIP dens, we suspend them, seize the shipment, and send the Duvet Brigade to their loading dock with clipboards and consequences.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              "pillow-code-chaos": OutcomeModifierWeight.ModeratePositive,
              "down-feather-dome": OutcomeModifierWeight.ModerateNegative,
              "fluffstice-sovereignty": OutcomeModifierWeight.SlightNegative,
              "sofa-strike": OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Targeting diversion is right; prove it with seizures and charges."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Raids disrupt supply lines unless coordination is meticulous."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm action deters black‑market siphoning from critical stock."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Aggressive raids risk rights violations without precise warrants."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
