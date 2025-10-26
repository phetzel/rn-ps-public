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
      text: "Were embassy ethics really driven by a 'confessional alpaca,' and how did barnyard nods end up cited as a waiver precedent?",
      answers: [
        {
          id: "a_r1",
          text: "We won't arbitrate barnyard spirituality in a press scrum. Our doctrine is separation of stable and state, and the President backs ethics that require humans, not hooves.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Firm stance against animal-based policy earns marks for clarity."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Dismissive tone risks trivializing procedural rigor we enforce."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Folklore is not policy. The State Ministry’s 17-step ungulate protocol forbids divination by cud, mandates triple human sign‑off, and treats livestock input as decor, not decision authority.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technical detail sounds dry but blunts theatrics we want to avoid."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Affirming the 17-step protocol reinforces our preferred narrative."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r3",
          text: "There is no rule, memo, or footnote that lets an animal authorize waivers. If someone waved a spit‑stained inference at a form, that was theater, not a governing standard.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.ModeratePositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Blanket denial reads evasive given ongoing probe; expect follow-ups."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Pure denial sidesteps process and makes our safeguards seem performative."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r4",
          text: "We get the joke, but our focus is the probe, not alpaca mythology. Let the inspectors track facts; we’ll talk when findings are out, not when rumors are still grazing.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Deflection invites more novelty questions and distracts from policy."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Jokes about the probe undercut the credibility of internal controls."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "If animal nods weren’t policy, who let the alpaca anecdote into a waiver file, and what guardrails failed between barn and bureaucracy?",
        answers: [
          {
            id: "a_s1_1",
            text: "A timeline review shows an aide stapled a folkloric note to a draft waiver as color, not authority. We’re auditing document hygiene and retraining on the difference between anecdote and evidence.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Specific timeline helps, though it still ties us to the spectacle."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Process trace supports training fixes and strengthens our case."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "Did a staffer over-interpret a nod? Looks likely. That’s why there’s a probe: to name the lapse, fix the form flow, and remind everyone the only oracles we recognize sign in ink.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting error is mature, but it fuels headline churn today."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Owning a lapse aids reform but exposes us to disciplinary demands."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "No program changed because an herbivore blinked. The provisional waiver stayed provisional, and nothing moved without the requisite humans reading, logging, and owning the call.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reassurance without proof risks sounding like spin under pressure."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Calm tone helps morale, yet it delays the paper trail we need."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "Let’s not pretend one barn joke equals systemic rot. If there’s misconduct, we’ll address it, but we won’t staple outrage to every bale of hay in the building.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Combative posture pleases base but alienates procedural allies."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Challenging the frame reads defensive and invites more scrutiny."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Spell out the embassy ethics rules: can staff ever rely on 'moral guidance' from mascots, and what exactly triggers a valid waiver under your code?",
        answers: [
          {
            id: "a_s2_1",
            text: "Rules bar nonhuman inputs from ethics deliberations. Valid waivers require conflict mapping, two independent reviewers, counsel sign-off, and a written rationale grounded in law, not lore.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Clear rule citations advance the separation message effectively."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Directly barring nonhuman inputs validates our policy framework."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "No, mascots, murals, or llamas in novelty ties cannot be cited. If any memo suggests otherwise, it violates the manual and will be corrected.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Dismissal sounds tidy, yet press may probe for edge cases."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hard no is clean, but auditors will still ask for references."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "This is not a loophole zoo. The code is boring by design—paper trails, timestamps, and humans on the hook. That’s how we keep the weird out and the accountable in.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Levity lowers temperature, but could signal we lack seriousness."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Tone helps staff, though it risks muddling compliance steps."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "If we publish the flowchart here, we’ll be here till the snacks unionize. We’ll post it after the probe so you can admire every riveting rectangle.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Deflection prolongs the circus and weakens our narrative control."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Withholding details now invites lawmakers to craft them for us."
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
        text: "Legally speaking, can animals serve as moral 'consultants' in government decisions, or does that run afoul of any serious statute beyond common sense?",
        answers: [
          {
            id: "a_t1_1",
            text: "Statute treats animals as property or protected beings, not consultants. Decisions must rest on human judgment anchored to law and policy; animal behavior can be anecdote, never dispositive rationale.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Grounding in statute supports our doctrine without theatrics."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Clear legal framing aligns with our non-folklore policy stance."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "There’s no legal category of 'ungulate ethicist.' If someone created one, it would collapse in court faster than a papier-mâché gavel in the rain.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Neat denial helps, yet courts prefer cites over quips."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "We agree on substance, but precision beats slogans in audits."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "If we need a law that says 'don’t outsource ethics to alpacas,' the problem isn’t the law—it’s the people. We’ll fix the people part.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Challenging premise is on brand, though it may stiffen opposition."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rhetoric motivates base, but it complicates our rulemaking."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Our counsel already flagged that any hint of animal 'approval' is treated as noise. Compliance training makes that explicit and tests for it.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassurance helps prudence but can sound like hedging."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Flagging risk early shows diligence, albeit without new detail."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "What concrete fixes follow this probe—training, forms, or penalties—so no one ever confuses barn ambiance with binding ethics again?",
        answers: [
          {
            id: "a_t2_1",
            text: "We’re updating the waiver template to require citation of rule paragraphs, adding metadata locks, and instituting random audits. Counsel will co‑sign the next three cycles in the affected unit.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Concrete fixes demonstrate seriousness and close the loop."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Template upgrade operationalizes our three-human sign-off."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Expect clarity, not theater: mandatory refreshers, plain‑language checklists, and an inbox that flags folklore. Staff want guardrails, not goat trails, and we’re giving them that.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reassuring tone steadies staff even as we impose changes."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Refreshers help culture, but we need verifiable checkpoints."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Forms got too cute, culture got too ironic, and a joke wandered into a file. That’s on us to demystify with ruthless clarity and boring, effective process.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting cultural drift invites critics to demand penalties."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Honesty is useful, yet it highlights supervision gaps we own."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We’ll save the PowerPoint fanfare for the oversight committee. Spoiler: fewer alpacas in the clip art, more signatures where they count.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Deflecting to oversight sounds coy and can read as stalling."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyNegative,
                  reaction: "Saving theatrics concedes optics and risks losing initiative."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
