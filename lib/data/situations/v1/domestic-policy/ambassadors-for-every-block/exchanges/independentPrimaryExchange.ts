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
      text: "The 'Block Embassy' plan drafts block ambassadors to mediate bin wars; will it actually speed resolutions or just add sashes, stipends, and fresh bureaucracy?",
      answers: [
        {
          id: "a_root_1",
          text: "I’ll admit it: the idea sparked when my toaster made peace with the blender. Borders on a block are mostly vibes, and ambassadors help vibes talk. If it ends bin wars faster, that’s a win.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.StrongPositive,
            outcome_2: OutcomeModifierWeight.StrongPositive,
            outcome_3: OutcomeModifierWeight.StrongNegative,
            outcome_4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Owning the odd inspiration reads as honest and human."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Whimsy framing risks trivializing serious rollout."
              }
            }
          }
        },
        {
          id: "a_root_2",
          text: "Our Department of Statecraft’s pilot on 120 blocks cut median dispute time from ten days to thirty‑six hours. Seventy‑two percent closed without escalation, and stipends are small; the sash is optional.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.SlightPositive,
            outcome_2: OutcomeModifierWeight.SlightNegative,
            outcome_3: OutcomeModifierWeight.SlightPositive,
            outcome_4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Leaning on pilots can feel technocratic and distant."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear pilot metrics align with our information goals."
              }
            }
          },
          followUpId: "q_sec_costs"
        },
        {
          id: "a_root_3",
          text: "This isn’t a new layer so much as a neighbor with a clipboard. No sirens, no motorcades, and a capped budget with a sunset clause. If it bloats, it shrinks; if it works, your Tuesdays get quieter.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.SlightNegative,
            outcome_2: OutcomeModifierWeight.SlightPositive,
            outcome_3: OutcomeModifierWeight.SlightNegative,
            outcome_4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Soft reassurance may sound evasive under tough scrutiny."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Neighborly framing supports low‑cost conflict options."
              }
            }
          }
        },
        {
          id: "a_root_4",
          text: "Calling it “middlemen” implies the feuds aren’t already crowded with emails, notes, and porch court. We’re just swapping chaos for trained humans in sashes. Got a better fix than reply‑all?",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            outcome_1: OutcomeModifierWeight.StrongNegative,
            outcome_2: OutcomeModifierWeight.StrongNegative,
            outcome_3: OutcomeModifierWeight.StrongPositive,
            outcome_4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Direct pushback shows resolve and frames urgency."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Confrontational tone could strain city relations."
              }
            }
          },
          followUpId: "q_sec_training"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_costs",
        text: "Walk us through the price tag and headcount: how many sashes, what pay, and how does a month of mini‑diplomacy compare to one police call for a trash‑bin feud?",
        answers: [
          {
            id: "a_sec_costs_1",
            text: "Stipends average 50 credits a month; training microcourse is 30; sashes cost 8 in bulk. A typical police response runs 300–500, so a month of diplomacy beats one siren visit on price.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.StrongPositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Transparent figures show discipline without hype."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Detailed costs invite line‑item attacks and delays."
                }
              }
            },
            followUpId: "q_ter_audit"
          },
          {
            id: "a_sec_costs_2",
            text: "We cap each block at two ambassadors and a tiny supply kit. No inflatable consulates, no catered summits. If costs creep, the cap snaps shut and the ledger pings us like a smoke alarm.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightPositive,
              outcome_2: OutcomeModifierWeight.SlightNegative,
              outcome_3: OutcomeModifierWeight.SlightPositive,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Caps may signal smallness and limit perceived impact."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Guardrails calm fears of bloat and protect budgets."
                }
              }
            }
          },
          {
            id: "a_sec_costs_3",
            text: "Line‑item granularity is on the public dashboard, down to sash storage and coffee pods. Frankly, the only hidden cost is the neighbor who refuses cookies at first contact.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightNegative,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.SlightNegative,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Deflection on costs reads as evasive and insecure."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Dashboard access reinforces our open‑data posture."
                }
              }
            }
          },
          {
            id: "a_sec_costs_4",
            text: "If the plan’s critics prefer “free,” they should tally HOA legal letters and overtime patrols. Those bills exist now. We’re trading random expense spikes for a predictable, smaller line.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongNegative,
              outcome_2: OutcomeModifierWeight.StrongNegative,
              outcome_3: OutcomeModifierWeight.StrongPositive,
              outcome_4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Forceful rebuttal can energize supporters and press."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Snark risks alienating councils we need for buy‑in."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_training",
        text: "Training and speed: what do ambassadors learn, who certifies them, and how fast must they close driveway standoffs before neighbors lawyer up over bylaws?",
        answers: [
          {
            id: "a_sec_training_1",
            text: "Ambassadors study de‑escalation, bylaws 101, and a three‑step script: listen, propose, document. They’re certified by the Civic Mediation Board, and targets require closure within 48 hours on routine issues.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.StrongPositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Specifics suggest competence and care for outcomes."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Ambitious curriculum could overtax trainer capacity."
                }
              }
            },
            followUpId: "q_ter_case"
          },
          {
            id: "a_sec_training_2",
            text: "They are not mini‑cops or substitute judges, and they can’t cite, fine, or seize a lawn gnome. When a case needs teeth, they escalate to the usual authorities without pretending to be them.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightPositive,
              outcome_2: OutcomeModifierWeight.SlightNegative,
              outcome_3: OutcomeModifierWeight.SlightPositive,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Denials appear defensive without supporting details."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Boundary setting reduces liability and role creep."
                }
              }
            }
          },
          {
            id: "a_sec_training_3",
            text: "There’s a code of conduct, a conflict‑of‑interest rule, and a 24‑hour check‑in if talks stall. Training is refreshable quarterly, so our sashes don’t go stale with last season’s etiquette.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightNegative,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.SlightNegative,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Assurances without proof may undercut confidence."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Codes and audits reinforce ethical expectations."
                }
              }
            }
          },
          {
            id: "a_sec_training_4",
            text: "And yes, we picked breathable, non‑itch sashes so no one negotiates like a sweaty pageant. If your mediator is comfortable, your trash bins might be too.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongNegative,
              outcome_2: OutcomeModifierWeight.StrongNegative,
              outcome_3: OutcomeModifierWeight.StrongPositive,
              outcome_4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Light humor humanizes the program to wary residents."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Jokes risk trivializing disputes and legal risks."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_audit",
        text: "Accountability check: who audits resolution times and costs, and what stops a block envoy from becoming the self‑appointed Mayor of the Cul‑de‑Sac?",
        answers: [
          {
            id: "a_ter_audit_1",
            text: "An independent Office of Block Metrics audits timestamps, costs, and outcomes, publishing raw logs with privacy filters. We also run random callback surveys to verify nobody padded a “win.”",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.StrongPositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Independent audits project seriousness and rigor."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Extra oversight might slow rapid dispute closures."
                }
              }
            }
          },
          {
            id: "a_ter_audit_2",
            text: "Ambassadors can be recalled by a simple block vote, and misconduct voids their stipend. Short terms and recertification keep the gig from mutating into a throne with a cul‑de‑scepter.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightPositive,
              outcome_2: OutcomeModifierWeight.SlightNegative,
              outcome_3: OutcomeModifierWeight.SlightPositive,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Reassurance alone may seem thin on enforcement."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Recall votes empower neighbors and deter abuses."
                }
              }
            }
          },
          {
            id: "a_ter_audit_3",
            text: "The “Mayor of the Cul‑de‑Sac” fantasy is colorful, but the job comes with a binder, not a crown. If someone starts issuing edicts, they’re out faster than a recycling truck on double route.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightNegative,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.SlightNegative,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Dismissiveness toward critics can backfire publicly."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Firm stance signals limits on ambassador authority."
                }
              }
            }
          },
          {
            id: "a_ter_audit_4",
            text: "If a would‑be monarch appears, the neighborhood tends to self‑correct with eye rolls and ballots. Sunlight and a very nosy group chat are our checks and balances.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongNegative,
              outcome_2: OutcomeModifierWeight.StrongNegative,
              outcome_3: OutcomeModifierWeight.StrongPositive,
              outcome_4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Contingency planning shows readiness under pressure."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Volunteer reliance could be fragile and uneven."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_case",
        text: "Give us a concrete case: a trash‑bin or driveway dispute from the pilot, with start‑to‑finish timing and how many metaphorical visas you stamped to end it.",
        answers: [
          {
            id: "a_ter_case_1",
            text: "On Maple Loop, two bins kept creeping into one driveway. The envoy logged it Monday 9 a.m., held three ten‑minute porch chats, issued a courtesy‑magnet “visa,” and closed the case by Wednesday at 2 p.m.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongPositive,
              outcome_2: OutcomeModifierWeight.StrongPositive,
              outcome_3: OutcomeModifierWeight.StrongNegative,
              outcome_4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Concrete results help justify the broader strategy."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Single case risks cherry‑picking and survivorship bias."
                }
              }
            }
          },
          {
            id: "a_ter_case_2",
            text: "We’ve seen that pattern repeat: quick listening, one small trial fix, then a written truce on the fridge. It’s not magic; it’s momentum, and it trims the drama before it needs uniforms.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightPositive,
              outcome_2: OutcomeModifierWeight.SlightNegative,
              outcome_3: OutcomeModifierWeight.SlightPositive,
              outcome_4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Broad claims without data may sound like spin."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Pattern recognition supports scalable interventions."
                }
              }
            }
          },
          {
            id: "a_ter_case_3",
            text: "No, there wasn’t a fine, a tow, or a confiscated bin. The strongest tool used was a laminated calendar and the social gravity of not wanting to be “that neighbor” again this week.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.SlightNegative,
              outcome_2: OutcomeModifierWeight.SlightPositive,
              outcome_3: OutcomeModifierWeight.SlightNegative,
              outcome_4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Denying penalties can appear lax on accountability."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Avoiding fines emphasizes mediation over punishment."
                }
              }
            }
          },
          {
            id: "a_ter_case_4",
            text: "The wildest part was that both households baked apology muffins and tried to over‑tip the envoy. We returned the muffins and kept the tip policy: thanks, but please tip your own patience.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              outcome_1: OutcomeModifierWeight.StrongNegative,
              outcome_2: OutcomeModifierWeight.StrongNegative,
              outcome_3: OutcomeModifierWeight.StrongPositive,
              outcome_4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Human details make the pilot relatable and memorable."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Colorful anecdotes risk distracting from metrics."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
