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
      text: "Before rolling out a national leaf‑ID bureaucracy, will you test a small pilot for costs, disputes actually resolved, and household hassle?",
      answers: [
        {
          id: "a_r1",
          text: "We reject the tyranny of living‑room filibusters; a registered fern can deliver calm verdicts without snacks or shouting. We’ll start small and let evidence prune the plan.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Confident push for plant jurors sparks curiosity and resolve."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Raises due‑process worries about coerced or bribed greenery."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Scope and due process live with the Justice Houseplant Office, who will set bright‑line rules so nobody subpoenas a cactus or bribes a fern with artisanal compost.",
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
              reaction: "Overly legalistic tone risks losing the whimsical policy frame."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear guardrails reassure courts that ferns won’t be coerced."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Fiscal caution noted, but uncertainty clouds the credit’s value."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Health benefits sound vague without measured stress outcomes."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "On costs, Treasury is modeling a pilot with pot‑size thresholds, a cap on credits, and random audits to catch cactus inflation. We’ll publish dispute‑resolution data before scaling.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.ModerateNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Numbers first may read as hedging on your core fern vision."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Budget focus sidesteps lamp‑bribe and bias standards."
              },
              [CabinetStaticId.Treasury]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Pilot modeling aligns with prudent rollout and fraud control."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r4",
          text: "Healthwise, juror‑plants lower volume and blood pressure when couples argue about thermostats. HHS will certify non‑judgmental species and simplify household paperwork.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Leaning on wellness alone looks soft on cost and fairness."
            },
            cabinet: {
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Therapy framing ignores subpoenas, appeals, and bright lines."
              },
              [CabinetStaticId.HHS]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clinically grounded reassurance supports a careful pilot."
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
        text: "If the pilot happens, what size, budget cap, and audit plan will prove whether ferns settle fights or just sprout receipts and a succulent bubble?",
        answers: [
          {
            id: "a_s1_1",
            text: "Pilot in five test counties, 20,000 households, credit capped at 50 per planter, and a quarterly dashboard tracking disputes closed versus appealed. Audits sample ten percent for lamp‑bribe anomalies.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Concrete caps and sample size show seriousness without bloat."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Scale may strain enforcement of bias and lamp‑gift rules."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defined budget and audits limit bubble risks and abuse."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Big pilot could stress families before supports are ready."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "We’re not writing a blank check or watering everything in sight; there will be no national rollout without clear savings and fewer neighbor‑mediated shouting matches.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard no risks appearing reflexive, not evidence‑driven."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Guarding scope protects due process and clear standards."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Refusal delays needed cost data for responsible credits."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Denying a pilot pauses potential conflict‑stress relief."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "If the data show ferns merely nod while fees climb, we’ll prune the program back. The point is fewer court trips and calmer kitchens, not a cactus gold rush.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Contingent support sounds timid if costs are manageable."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Assurances lack specifics on appeals and aloe stacking."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague thresholds won’t catch pot‑size gaming or receipts."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Health guardrails and exit ramps reduce household burden."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Independent bean‑counters, not our leaf‑enthusiasts, will score the pilot, because nothing sobers a policy like an actuary with a spreadsheet and a dead ficus.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deferring to auditors reads as passing the buck on goals."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Independence helps, but rules still need your direction."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Outside verification strengthens fiscal credibility."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Audit talk ignores first‑week confusion and support."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Households dread new chores; what’s the hassle—forms, tags, lamp checks—and how will HHS certify ‘non‑judgmental’ species without a Plant DMV?",
        answers: [
          {
            id: "a_s2_1",
            text: "Paperwork is one page, the tag is mailed, and no one is measuring your pothos with calipers. HHS will publish a simple species list and self‑attestation, with spot checks only if fraud spikes.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Minimizing burden may undercut the need for a disciplined test."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Simple tags don’t answer bias, gifts, or appeal channels."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear, light‑touch steps can calm families’ adoption fears."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "We'll use online registration tied to existing household tax IDs, opt‑in reminders, and a hotline staffed by botanically literate humans, not an algorithm that calls every fern 'Dave'.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative, // -8
              o2: OutcomeModifierWeight.StrongPositive, // +8
              o3: OutcomeModifierWeight.SlightPositive, // +4
              o4: OutcomeModifierWeight.SlightNegative // -4
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Digital ease helps, but privacy and audits still loom."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Linking registries raises due‑process and consent issues."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Integration reduces admin costs and fraud opportunities."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Low‑friction flow supports access without a Plant DMV."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "If a five‑minute plant signup breaks the republic, perhaps the republic needs more chlorophyll. We’re trading shouting hours for watering minutes, and that’s a bargain.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Playful challenge lands, but could sound dismissive of chores."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Tone risks trivializing bias checks and lamp‑bribe limits."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissal overlooks real audit and cap enforcement costs."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Shrugging at hassle may alienate overwhelmed families."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Yes, the first week may include confusion and two mislabeled succulents. That's why we're piloting, writing plain guides, and ditching any requirement that ends up feeling silly.",
          type: AnswerType.Admit,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative, // -4
              o2: OutcomeModifierWeight.SlightNegative, // -4
              o3: OutcomeModifierWeight.SlightPositive, // +4
              o4: OutcomeModifierWeight.SlightPositive // +4
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Owning confusion helps, but it highlights rollout risks."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Admitting errors opens space to tighten bright‑line rules."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Short‑term churn still racks up costs and credit mistakes."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confusion could spike stress before benefits materialize."
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
        text: "How will due process work for a plant juror—bias checks, lamp‑bribe rules, and appeals—so no one claims a neighbor’s aloe was stacked by Big Compost?",
        answers: [
          {
            id: "a_t1_1",
            text: "Justice will set bright‑line rules: no lamp gifts within 48 hours of deliberation, no artisanal compost payments, and recorded verdict prompts. Humans appeal to a real clerk, not the ficus.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.StrongNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Process handoff sounds evasive without your own standards."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Commitment to bright lines strengthens legitimacy."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Guardrails alone don’t ensure calmer households."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Bias flags include shared ownership, nutrient conflicts, and prior mediation in the same household. A simple affidavit triggers human review within seventy‑two hours with no fee.",
            type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.MajorNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Detail helps, but you seem distant from rule specifics."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Bias tests and conflicts metrics bolster fairness."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Specifics aid audit design and deter compost kickbacks."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rules matter, but family stress relief needs clarity."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "No one loses rights to a plant; the juror is a calming ritual that nudges de‑escalation. If anything smells off—literally or legally—the human process takes over immediately.",
            type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Rights framing reads cautious and light on accountability."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soothing tone skirts penalties for stacked windowsills."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reassurance without caps invites credit gaming."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Affirming rights can reduce anxiety about the program."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We’re not deputizing succulents as cops or judges. They won’t detain, subpoena, or fine anyone, and they certainly won’t be sworn in with a watering can.",
            type: AnswerType.Deny,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Firm limits reassure skeptics but risk stalling innovation."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Boundary talk omits appeals and evidence preservation."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "No‑cop stance could weaken fraud deterrence signals."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear scope may prevent overreach that causes stress."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "If the juror‑plant dies, goes rogue, or is replaced, do households lose the credit, get a new ID, and who stops people from registering a whole windowsill?",
        answers: [
          {
            id: "a_t2_1",
            text: "The tag transfers on replacement with a quick online update; deaths are self‑reported, the credit prorates automatically, and credits are capped at one per household with photo verification.",
          type: AnswerType.Inform,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Pragmatic swaps sound sensible, if oversight stays tight."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Transfer rules need checks to prevent ownership games."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clean transfer plus audit lanes protects the credit."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Simple replacement reduces stress after a plant loss."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "We’re not sending grief auditors for dead ferns. Report it when you can, swap in a new plant, and the credit resumes with minimal fuss and zero lectures about drainage.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Kind tone helps, but it may signal weak enforcement."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "No‑audit pledge could invite aloe‑stacking schemes."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Lenience risks credit leakage and duplicate claims."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Compassionate approach eases household grief and effort."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Treasury handles caps and audits; our lane is keeping the process humane so no one is interrogated over a memorial pothos or a cactus with stage fright.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deference reads narrow; voters want whole‑of‑gov clarity."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Lane discipline protects due process and clear roles."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Treasury alone may struggle with cross‑data fraud."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Health lens absent, despite stress from rule changes."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Yes, someone will try to register a windowsill army. That’s why we have one‑tag rules, randomized checks, and penalties measured in dollars, not confiscated houseplants.",
          type: AnswerType.Admit,
          outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
          },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Candor is good, but it highlights scale of enforcement risk."
              },
              cabinet: {
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting loopholes pressures you to harden standards."
                },
                [CabinetStaticId.Treasury]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning risks paves the way for targeted audit sweeps."
                },
                [CabinetStaticId.HHS]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Fear of abuse can raise household anxiety and mistrust."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
