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
      text: "If every latch now tattles, how isn’t this bulk surveillance, and why did cannons beat mold and heat fixes in the budget?",
      answers: [
        {
          id: "a_root_1",
          text: "I challenge anyone who says safety and joy can’t coexist to grab a demo knob and show your courage. Encryption and confetti both deter cowards, and we’ll prove it in daylight.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.StrongPositive,
            "outcome-2": OutcomeModifierWeight.StrongNegative,
            "outcome-3": OutcomeModifierWeight.StrongPositive,
            "outcome-4": OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Strikes bold tone aligning safety with joy on camera."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Raises coordination risks for emergency protocols."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Glitter optics risk trivializing deterrence posture."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "No immediate legal shift until guidance arrives."
              }
            }
          },
          followUpId: "q_sec_budget"
        },
        {
          id: "a_root_2",
          text: "Public safety first: sensors record a twist, not a person, and encryption is party‑grade strong. Cannons are calibrated to startle intruders, not pets or night‑shift neighbors.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.ModerateNegative,
            "outcome-2": OutcomeModifierWeight.ModeratePositive,
            "outcome-3": OutcomeModifierWeight.MajorNegative,
            "outcome-4": OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Sounds evasive on costs and priorities to skeptical base."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Reassures on calibration and limited data scope."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Creates ambiguity on dual-use perceptions."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Promises of privacy may clash with discovery duties."
              }
            }
          },
          followUpId: "q_sec_privacy"
        },
        {
          id: "a_root_3",
          text: "These aren’t weapons; they’re morale devices with incidental sparkle, not militarization of hallways. Deterrence, not deployment, and no one is arming a foyer.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.ModerateNegative,
            "outcome-2": OutcomeModifierWeight.SlightNegative,
            "outcome-3": OutcomeModifierWeight.SlightPositive,
            "outcome-4": OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Downplays concerns; critics see semantic dodge."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Homeland uneasy about labeling safety gear non-weapons."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Supports nonlethal framing within doctrine."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Could complicate evidence chains in prosecutions."
              }
            }
          }
        },
        {
          id: "a_root_4",
          text: "We admit the law never foresaw self‑reporting doorknobs. We’re drafting clear warrant rules so streamers don’t substitute for signatures or rights.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            "outcome-1": OutcomeModifierWeight.SlightPositive,
            "outcome-2": OutcomeModifierWeight.ModeratePositive,
            "outcome-3": OutcomeModifierWeight.Neutral,
            "outcome-4": OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Admitting gaps risks headlines about legal chaos."
            },
            cabinet: {
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Acknowledges ambiguity that hampers field guidance."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Open legal questions unsettle readiness planners."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Candor on warrants builds trust in due process."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_privacy",
        text: "Who keeps the twist logs, for how long, and can renters refuse landlord‑mandated installs without punishment or sneaky lease traps?",
        answers: [
          {
            id: "a_sec_privacy_1",
            text: "Logs are hashed at the edge and sharded across municipal nodes with a 30‑day default retention. Tenants may opt out unless a court‑backed building order applies, and appeals are fast‑tracked.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightNegative,
              "outcome-2": OutcomeModifierWeight.StrongPositive,
              "outcome-3": OutcomeModifierWeight.Neutral,
              "outcome-4": OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical jargon without equity answer lands poorly."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Shows layered custody to limit misuse."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fragmentation may hinder incident response."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Retention vagueness alarms civil libertarians."
                }
              }
            }
          },
          {
            id: "a_sec_privacy_2",
            text: "The system collects the minimum to detect tampering, not lifestyles, and consent is a default, not a loophole. Non‑participation can’t be grounds for eviction under our baseline rules.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.ModeratePositive,
              "outcome-2": OutcomeModifierWeight.ModerateNegative,
              "outcome-3": OutcomeModifierWeight.StrongPositive,
              "outcome-4": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Comfort message aligns with televised calm."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear minimization reduces surveillance fears."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Too restrictive may blunt threat triage."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances risk overpromising against subpoenas."
                }
              }
            }
          },
          {
            id: "a_sec_privacy_3",
            text: "We’ll publish the full data‑handling rulebook with nerdy footnotes next week. Today, rollout focuses on not peppering cats with party favors.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightPositive,
              "outcome-2": OutcomeModifierWeight.ModerateNegative,
              "outcome-3": OutcomeModifierWeight.MajorNegative,
              "outcome-4": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection fuels narrative of secrecy."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lack of detail weakens public safety case."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Flexibility preserved for contingencies."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "No change to legal posture until specifics emerge."
                }
              }
            }
          },
          {
            id: "a_sec_privacy_4",
            text: "Some leases hand landlords too much leverage, and we won’t pretend otherwise. We’re proposing renter‑choice protections with penalties for coercion and fake ‘security fees.’",
            type: AnswerType.Admit,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.ModerateNegative,
              "outcome-2": OutcomeModifierWeight.SlightPositive,
              "outcome-3": OutcomeModifierWeight.SlightPositive,
              "outcome-4": OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning landlord leverage invites backlash over installs."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting gaps could slow deployments."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Policy uncertainty complicates support planning."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Admitting risks opens path to stronger protections."
                }
              }
            },
            followUpId: "q_ter_warrants"
          }
        ]
      },
      {
        id: "q_sec_budget",
        text: "Why did the Doorknob Defense beat mold remediation and cooling in the budget, and who pays for upgrades in low‑income units—tenants or anyone else?",
        answers: [
          {
            id: "a_sec_budget_1",
            text: "I challenge the false choice: we can fund housing dignity and safer doors at once. The confetti line is tiny; the big money goes to resiliency, and we’ll show the receipts.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.ModerateNegative,
              "outcome-2": OutcomeModifierWeight.StrongPositive,
              "outcome-3": OutcomeModifierWeight.Neutral,
              "outcome-4": OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Tough stance energizes supporters on priorities."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric may overshadow safety implementation."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Budget vagueness spooks acquisition planners."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Civil suits risk rise if costs burden tenants."
                }
              }
            }
          },
          {
            id: "a_sec_budget_2",
            text: "Funding splits pair upgrades with rebates, grants, and a landlord match in designated need zones. Hardware, install, and maintenance are covered for low‑income units under tiered vouchers.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.ModeratePositive,
              "outcome-2": OutcomeModifierWeight.ModerateNegative,
              "outcome-3": OutcomeModifierWeight.MajorPositive,
              "outcome-4": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Pragmatic tone shows grip on financing details."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Paired rebates help adoption without coercion."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Split funding could dilute readiness projects."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Grants with guardrails ease tenant burdens."
                }
              }
            },
            followUpId: "q_ter_landlords"
          },
          {
            id: "a_sec_budget_3",
            text: "No, tenants will not get surprise glitter bills. Contracts bar passthrough fees where subsidies apply, and violations risk losing eligibility and facing fines.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightNegative,
              "outcome-2": OutcomeModifierWeight.SlightPositive,
              "outcome-3": OutcomeModifierWeight.ModerateNegative,
              "outcome-4": OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial invites fact-checks on hidden costs."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overconfidence risks credibility if fees appear."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clarity that it’s not on tenants calms tensions."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Language may clash with contract realities."
                }
              }
            }
          },
          {
            id: "a_sec_budget_4",
            text: "An independent audit will track every knob and every nickel. If a dollar wanders from mold abatement to party tricks, you’ll see it in the ledger.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightPositive,
              "outcome-2": OutcomeModifierWeight.ModerateNegative,
              "outcome-3": OutcomeModifierWeight.ModerateNegative,
              "outcome-4": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance without figures feels thin."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Monitoring promises add admin strain."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audit focus could expose supply shortfalls."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Transparency tools aid enforcement fairness."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_warrants",
        text: "If doorknobs self‑report, will warrants ride in on streamers, or will independent judges approve access before anyone reads a single twist?",
        answers: [
          {
            id: "a_ter_warrants_1",
            text: "We admit earlier statutes didn’t imagine chatty hardware. Access to encrypted twist data will require a warrant based on probable cause, not a confetti‑covered hunch.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.ModerateNegative,
              "outcome-2": OutcomeModifierWeight.StrongPositive,
              "outcome-3": OutcomeModifierWeight.SlightNegative,
              "outcome-4": OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting gaps suggests policy unready for courts."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Unclear warrant flow complicates ops centers."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Uncertain triggers unsettle defense partners."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning statute limits earns goodwill to fix them."
                }
              }
            }
          },
          {
            id: "a_ter_warrants_2",
            text: "Only aggregate tamper alerts are visible by default; decrypting device‑level records demands a judicial order. We’re codifying minimization and prompt purge in plain language.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.ModeratePositive,
              "outcome-2": OutcomeModifierWeight.ModerateNegative,
              "outcome-3": OutcomeModifierWeight.ModeratePositive,
              "outcome-4": OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Speaks to balance; viewers see measured leadership."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Defaults to aggregates preserves safety with restraint."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggregation may hide actionable signals."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Judicial access rules remain to be stress-tested."
                }
              }
            }
          },
          {
            id: "a_ter_warrants_3",
            text: "An oversight board with civil advocates will audit requests, publish transparency reports, and flag abusive patterns. If a knob over‑shares, we fix the knob, not the Constitution.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightPositive,
              "outcome-2": OutcomeModifierWeight.SlightPositive,
              "outcome-3": OutcomeModifierWeight.ModerateNegative,
              "outcome-4": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Assurances alone may sound like spin."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Procedures calm first responders and public."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audit layers could slow urgent coordination."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Oversight helps, but warrants must be explicit."
                }
              }
            }
          },
          {
            id: "a_ter_warrants_4",
            text: "I won’t pre‑try a hypothetical case from the podium. The rules will be public, and the courts—robes, not party hats—will do the interpreting.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightNegative,
              "outcome-2": OutcomeModifierWeight.ModerateNegative,
              "outcome-3": OutcomeModifierWeight.SlightPositive,
              "outcome-4": OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Refusing hypotheticals reads as evasive."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lack of clarity frustrates field guidance."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Keeps doctrine flexible for edge cases."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Courts dislike ambiguity about access lines."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_landlords",
        text: "What stops landlords from skimping on maintenance, buying the cheapest cannons, then passing glitter cleanup and subscription fees straight to renters?",
        answers: [
          {
            id: "a_ter_landlords_1",
            text: "Standards forbid off‑brand noisemakers and require mold and heat benchmarks before any confetti install. Passing costs to renters is prohibited and punishable with fines and forfeited subsidies.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.ModerateNegative,
              "outcome-2": OutcomeModifierWeight.StrongPositive,
              "outcome-3": OutcomeModifierWeight.Neutral,
              "outcome-4": OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Firm tone risks appearing anti-tenant."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strict standards could slow rollout."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear specs reduce dual-use accusations."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tenants may still face hidden penalties."
                }
              }
            }
          },
          {
            id: "a_ter_landlords_2",
            text: "Certified models, periodic inspections, and subsidy clawbacks tie eligibility to habitability—mold fixed, vents cooled, safety verified. Try to cheap out, and the funding evaporates.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.ModeratePositive,
              "outcome-2": OutcomeModifierWeight.ModerateNegative,
              "outcome-3": OutcomeModifierWeight.MajorPositive,
              "outcome-4": OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Detail signals competence and care for renters."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Inspections boost safety and trust in program."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Compliance load may strain contractors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Subsidies help but need enforceable tenant rights."
                }
              }
            }
          },
          {
            id: "a_ter_landlords_3",
            text: "If someone tries to bill tenants for sparkle, I invite them to defend that invoice in public. Courts and voters tend to bounce glitter back to sender.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightNegative,
              "outcome-2": OutcomeModifierWeight.SlightPositive,
              "outcome-3": OutcomeModifierWeight.ModerateNegative,
              "outcome-4": OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Direct warning projects vigor on tenant abuses."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Threat posture may spook smaller landlords."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Aggressive stance risks legal challenges."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Pledging prosecutions raises proof burdens."
                }
              }
            }
          },
          {
            id: "a_ter_landlords_4",
            text: "There’s a tenant hotline, ombuds program, and automatic credits when landlords misbehave. The goal is safer doors and healthier homes, not surprise party debt.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              "outcome-1": OutcomeModifierWeight.SlightPositive,
              "outcome-2": OutcomeModifierWeight.ModerateNegative,
              "outcome-3": OutcomeModifierWeight.ModerateNegative,
              "outcome-4": OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Helpline pitch can sound like spin if results lag."
              },
              cabinet: {
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Rapid relief channels build community confidence."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Automation may misclassify incidents."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Process helps, but remedies must have teeth."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
