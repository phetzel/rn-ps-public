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
      id: "root_q1",
      text: "After the foam-chicken duel turned diplomacy into cosplay, who okayed the pageant spending, and where are the public, enforceable mascot-custody terms?",
      answers: [
        {
          id: "root_a1",
          text: "The President challenges both micro-states to a beak-to-beak debate moderated by a mime. The victor signs a transparent custody pledge while we publish every pageant receipt.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Applauds bold accountability; shows leadership with humor that still sets a firm tone."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reads mixed signals; worries posture softens deterrence amid inflatable brinkmanship."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fears showmanship escalates theatrics and complicates quiet shuttle diplomacy."
              }
            }
          },
          followUpId: "sec_q1"
        },
        {
          id: "root_a2",
          text: "State is drafting a public MOU with a chain-of-custody table, a time-share calendar, and an audit trail. We’ll post vendor lists, invoices, and approvals on a single page for anyone to read.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Sees this as procedural drift; worries it dodges immediate accountability on spending."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Concerns that slow paperwork could invite further mascot testing of our resolve."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Values clear protocol and transparency; expects calmer talks and reduced tensions."
              }
            }
          },
          followUpId: "sec_q2"
        },
        {
          id: "root_a3",
          text: "Our defense team won’t blink at inflatable poultry; we’re running squawk-parity drills and de-escalation playbooks. Any repeat duel triggers an immediate pause and a spending freeze on pageantry.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Finds the tone escalatory; risks optics of cosplay over concrete accountability."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Welcomes firm stance; signals readiness and restores deterrence credibility."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Worries hard-edged rhetoric narrows room for apology swaps and custody fixes."
              }
            }
          }
        },
        {
          id: "root_a4",
          text: "Taxpayers aren’t funding a cosplay arms race. If charges are misbilled, they’ll be reversed, while visas, trade talks, and real services stay on track without feathered detours.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Sees this as risk‑averse hedging; insufficient clarity on who approved costs."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Appreciates fiscal guardrails, though wants assurance it won’t crimp preparedness."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Notes calm tone, but fears it delays concrete, public custody terms citizens need."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "sec_q1",
        text: "Who signed the checks for the summit pageantry, will you release vendor contracts and invoices, and did any foam-suit ‘security upgrades’ sneak through unreviewed?",
        answers: [
          {
            id: "sec_q1_a1",
            text: "Treasury and State are compiling a joint ledger with line items, vendor names, and authorizations. A redacted packet posts within 72 hours, with flagged extras routed to independent auditors.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Cautious about bureaucratic pacing; wants faster clarity on who signed off."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sees ledger work as prudent but slow; risks more pageant ‘tests’ meanwhile."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Backs joint transparency; expects cleaner process and cooler diplomatic tempers."
                }
              }
            },
            followUpId: "ter_q1"
          },
          {
            id: "sec_q1_a2",
            text: "There was no slush fund, no secret beak budget, and no backdoor donor setting the soundtrack. If a receipt lacks proper oversight, it will not be paid and will be referred for review.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Blanket denial feels brittle; could backfire if invoices later contradict it."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Welcomes firm clarity; denies gray areas that might embolden opportunists."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Over‑certainty risks credibility; prefers verifiable disclosures to sweeping claims."
                }
              }
            }
          },
          {
            id: "sec_q1_a3",
            text: "Let’s not confuse glitter with graft; this was a cultural fumble, not a crime saga. The priority is restoring talks and publishing costs, not chasing feathers down rabbit holes.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Appreciates attempt to refocus, but expects receipts and oversight commitments."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Deflection blurs accountability; weak signals may invite further showmanship."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Deflection hinders trust; transparency is needed to stabilize negotiations."
                }
              }
            }
          },
          {
            id: "sec_q1_a4",
            text: "Any improper charge will be reversed and credited before the next billing cycle. We’ll cap ceremonial spending going forward and publish that cap in plain language.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Restitution is welcome, yet cause-and-approval chains remain underexplained."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Supports clawbacks with teeth; shows missteps won’t weaken security posture."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Sees consumer-style remedies as calming and transparency-friendly for citizens."
                }
              }
            }
          }
        ]
      },
      {
        id: "sec_q2",
        text: "What exactly are the mascot custody terms—time-share windows, travel rules, and penalties—and how can citizens read them without a decoder ring?",
        answers: [
          {
            id: "sec_q2_a1",
            text: "State is finalizing a public MOU with a color-coded custody calendar, handoff checklists, and QR codes for citizens in their language. Breach penalties and appeal steps will be posted alongside.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Finds the plan methodical but slow; public readability must be guaranteed."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Worries over soft timelines; ambiguity can invite more theatrical probing."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Applauds clear, public MOU design; expects calmer compliance by both sides."
                }
              }
            },
            followUpId: "ter_q2"
          },
          {
            id: "sec_q2_a2",
            text: "If either side ducks the schedule, we’ll shift to a neutral custodian and lock the beak in a sealable case. Miss the deadline, lose the weekend photo ops—no exceptions.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Likes the enforcement edge; shows consequences if schedules are flouted."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Backs sharper terms; strengthens deterrence and operational predictability."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Fears punitive framing hardens positions and complicates quiet concessions."
                }
              }
            }
          },
          {
            id: "sec_q2_a3",
            text: "No one’s passport, paycheck, or permit hinges on a foam head. Embassy services continue, with crowd caps, clear exits, and medics on site so pageantry never outruns public safety.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurance is good, but expects specifics citizens can verify easily."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Soft tone may look permissive; could undercut resolve against repeat antics."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Balances calm messaging with access; keeps daily life and services central."
                }
              }
            }
          },
          {
            id: "sec_q2_a4",
            text: "The original terms were too squishy, which invited cosplay chaos. We’re tightening clauses, adding audits, and requiring sign-offs from both sides before any confetti flies.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admission helps, but demands clear fixes and public timelines for terms."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Welcomes tightening of rules; fewer gaps mean fewer provocations succeed."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Agrees on reform, yet warns tone should not inflame fragile negotiations."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "ter_q1",
        text: "Will you disclose every pageant line item—donors, freebies, and overtime—and ban off-book sponsorships that turn diplomacy into a branded chicken run?",
        answers: [
          {
            id: "ter_q1_a1",
            text: "We’ll publish a searchable ledger with amounts, sources, and in-kind perks, plus overtime by unit. Off-book sponsorships are barred under a new circular to all agencies and embassies.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Catalogs are essential, yet wants naming of approvers and policy guardrails."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Transparency is fine, but ensure disclosures don’t telegraph vulnerabilities."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Open, searchable data aids trust and reduces rumor-fueled diplomatic friction."
                }
              }
            }
          },
          {
            id: "ter_q1_a2",
            text: "No hush money, no mystery mascot committee, and no beak naming rights. Any attempt at stealth funding gets the contract shredded and referred for administrative review.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Sweeping denials risk collapse if any exception appears in the paperwork."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Firm line deters opportunists; insists there’s no wiggle room for abuse."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Overly absolute framing may erode credibility if small errors surface."
                }
              }
            }
          },
          {
            id: "ter_q1_a3",
            text: "We’ll let the numbers speak and save the poultry puns for the historians. The priority is unfreezing dialogue, not auditioning costumes for a sequel tour.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Prefers facts first, but expects strong oversight to follow the numbers."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Deflection looks weak; adversaries may read it as tolerance for theatrics."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Feels the dodge; stakeholders need clarity on freebies and sponsorships."
                }
              }
            }
          },
          {
            id: "ter_q1_a4",
            text: "If a cost spike threatens core services, we’ll reprogram funds to shield consular help, safety, and paychecks. People first, feathers second, every single time.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Contingency plans help, yet wants stricter upfront controls to avoid spikes."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Approves triggers that protect core readiness from pageant cost creep."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Pragmatic guardrails reassure public while keeping diplomatic work on track."
                }
              }
            }
          }
        ]
      },
      {
        id: "ter_q2",
        text: "Beyond paperwork, how will you measure no-more-duels success and protect people over pageantry—crowd safety, embassy operations, and real diplomacy?",
        answers: [
          {
            id: "ter_q2_a1",
            text: "We’re tracking duel-free days, incident counts, and consular wait times on a monthly dashboard. Compliance inspections ride along with every handoff to verify crowd limits and exits.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Metrics are good, but the public needs clear, timely reporting on results."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dashboard focus risks box‑checking; wants deterrence drills reflected too."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Evidence-based measures support de-escalation and service continuity."
                }
              }
            }
          },
          {
            id: "ter_q2_a2",
            text: "If costumes crowd out citizens, we’ll cut pageantry to zero and move talks to a windowless room with folding chairs. Policy beats props, every time, and we’ll enforce it.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Backs willingness to cut theatrics if they curb access and real diplomacy."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Supports firm cuts when pageantry threatens safety and mission readiness."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hard thresholds may chill talks; prefers calibrated, reversible limits."
                }
              }
            }
          },
          {
            id: "ter_q2_a3",
            text: "Embassy services remain open, with barriers, caps, and trained staff to keep events calm. If conditions wobble, we pause before risk rises and resume only when safe.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Service continuity is key, yet needs guardrails against creeping spectacle."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Sees steady ops, but warns barriers without deterrence won’t stop stunts."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Calm continuity message prioritizes people over pageantry effectively."
                }
              }
            }
          },
          {
            id: "ter_q2_a4",
            text: "We’re not replacing diplomacy with mascot theater. Costumes serve the talks, not the other way around, and any hint otherwise gets the plug pulled on the spectacle.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat denial sounds defensive; public expects proof, not assurances alone."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Appreciates confidence, but insists on measurable standards for safety."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Brisk denial risks credibility; transparency would better steady partners."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
