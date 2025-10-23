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
      id: "q1_root",
      text: "Your mailbox-to-sentry plan promises drone defense but invites lawsuits, delays, and new costs-are we shielding our skies or sinking curbside life?",
      answers: [
        {
          id: "a1_1",
          text: "If snoop-drones want our love letters, they can challenge a mailbox to a stamp-licking contest. These curbside patriots will guard the block without hijacking your morning delivery.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "He rallies support with humor and a defiant tone."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Defense worries jokes trivialize operational risks."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Justice likes the rights-framing jab at snoop tech."
              }
            }
          },
          followUpId: "q2_costs"
        },
        {
          id: "a1_2",
          text: "Sentries fire biodegradable gum at unlicensed flyers and switch to 'flag-up' warning near carriers. Range is short, logs are minimal, and the slot stays for mail, not surveillance.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He seems technical and cold, fueling privacy fears."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Defense welcomes clear specs that justify the pilot."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Justice sees enforcement blur and evidentiary mess."
              }
            }
          },
          followUpId: "q3_privacy"
        },
        {
          id: "a1_3",
          text: "On lawsuits and privacy, our Civic Justice team is finalizing clear consent rules and audit trails. We won't litigate hypotheticals from the podium while the ink is still drying.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He dodges costs and rights, sounding evasive."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Defense prefers clarity over shifting responsibility."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Justice appreciates legal prudence and caution."
              }
            }
          }
        },
        {
          id: "a1_4",
          text: "No one is replacing mail with trench warfare. Deliveries continue, pilots are opt-in by districts, and any hiccups trigger a pause before we scale beyond sensible blocks.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He downplays stakes, risking credibility on delays."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Defense likes calm tone that reduces panic."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Justice worries minimization weakens safeguards."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q2_costs",
        text: "How will gum-firing sentries avoid jamming deliveries, who covers upgrades and repairs, and what if a pension check meets a box in full patrol mode?",
        answers: [
          {
            id: "a2_1",
            text: "Core hardware is funded from the Sky-Safe pilot line, with maintenance pooled like streetlights. The gum cartridge sits above the slot, and carriers can hard-disable units during delivery windows.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He projects control on funding and reliability."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense welcomes funded roadmap and testing."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice flags consumer impact and due process gaps."
                }
              }
            }
          },
          {
            id: "a2_2",
            text: "We tested with junk mail avalanches and birthday cards; nothing jammed. Carriers get override fobs, and if a unit hiccups, a mobile tech swaps it faster than you can say certified mail.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He sounds rosy, inviting skepticism on costs."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense values measured rollout to limit risk."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice fears soft-pedaling of claimant remedies."
                }
              }
            }
          },
          {
            id: "a2_3",
            text: "Budget fights happen at the Council of Numbers, not here. Repair protocols and reimbursement tiers are in the rulemaking hopper, and we'll publish them before the first bolt hits a curb.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He punts to process, suggesting buck-passing."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense dislikes budget vagueness on readiness."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice appreciates separation of fiscal powers."
                }
              }
            }
          },
          {
            id: "a2_4",
            text: "Early pilots had a few overenthusiastic flags and one confetti incident. We built in calmer thresholds and a claims path for rare mishaps, which includes quick review and liability clarity.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He concedes issues, denting confidence in rollout."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Defense worries admissions embolden critics."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice values transparency about error handling."
                }
              }
            },
            followUpId: "q4_liability"
          }
        ]
      },
      {
        id: "q3_privacy",
        text: "These sentry boxes scan skies and porches; what data do they keep, who can access it, and will neighbors need a lawyer and a ladder just to buy stamps in peace?",
        answers: [
          {
            id: "a3_1",
            text: "We don't monetize porches, we deliver to them. The Civic Justice folks are finalizing retention caps and warrant standards, and we'll let judges fight over commas before we collect a byte.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He sidesteps specifics on access and retention."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense wants clearer guardrails for operations."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice credits caution against surveillance creep."
                }
              }
            }
          },
          {
            id: "a3_2",
            text: "Sensors look up, not in. They log anonymous flight vectors, purge nightly, and cannot read envelopes. The design is deliberately low-tech to avoid arms-race vibes and keep porch life boring.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He details limits that respect home privacy."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense favors anonymized logs and scope control."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice doubts claims without audit authority."
                }
              }
            },
            followUpId: "q5_armsrace"
          },
          {
            id: "a3_3",
            text: "A community oversight board-two carriers, three residents, one privacy crank by design-will audit code and incidents. You get a simple consent dial: off, warn-only, or deterrence.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He leans on boards, risking perception of theater."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense likes shared oversight for community buy-in."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice warns facade oversight can backfire."
                }
              }
            }
          },
          {
            id: "a3_4",
            text: "If a drone peers through curtains, blame the peeper, not the mailbox that frowns at it. We're done letting gadgets bully neighborhoods while pretending to deliver pizza forever.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He taunts offenders, which may inflame tensions."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense rejects rhetoric that complicates deconflict."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice dislikes blame-shifting without remedies."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q4_liability",
        text: "If a sentry splats a kid's kite or a pizza drone, who is liable, and will there be an appeals process that doesn't last longer than a winter of hold music?",
        answers: [
          {
            id: "a4_1",
            text: "Liability follows a simple ladder: vendor fault, then city deployment fault, then operator misuse. A fast claims portal pays small damages within days, with independent review for tougher cases.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He offers a clear ladder and timelines."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense values predictable rules for vendors."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice sees loopholes and appeal bottlenecks."
                }
              }
            }
          },
          {
            id: "a4_2",
            text: "We won't pre-judge hypothetical kites from the podium. The rulebook defines negligence and exemptions, and those definitions belong in courts and community hearings, not my improv hour.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He avoids hypotheticals, sounding indifferent."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense prefers scenario planning to shrugging."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice approves caution pending firm facts."
                }
              }
            }
          },
          {
            id: "a4_3",
            text: "Every unit ships with geo-fencing and kid-kite profiles that treat stringy chaos as friendly. When in doubt, it de-escalates, logs the near-miss, and alerts a human before anyone needs a lawyer.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He overstates safety, risking later backlash."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense backs geo-fences as practical risk cuts."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice fears safety claims weaken liability."
                }
              }
            }
          },
          {
            id: "a4_4",
            text: "If delivery drones can't dodge a mailbox, they shouldn't buzz grandmas. We set the bar: be licensed, be courteous, and our curbside guardians will stay as gentle as a mailbox can be.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He mocks critics, which can appear reckless."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Defense dislikes bravado that invites escalation."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice warns tone undermines neutral adjudication."
                }
              }
            }
          }
        ]
      },
      {
        id: "q5_armsrace",
        text: "Won't arming curbside boxes spark a drone arms race, turning streets into slot-level standoffs where everyone is an unwilling cadet in the Porch Patrol?",
        answers: [
          {
            id: "a5_1",
            text: "Units are offline, dumb-by-design, and capped to foam and flag. No radios, no uplinks, no swagger. That keeps capability predictable so smug drones can't escalate by baiting networked responses.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.ModeratePositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He sounds constrained, downplaying escalation."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense supports caps that simplify doctrine."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Justice worries dumb systems still cause harm."
                }
              }
            }
          },
          {
            id: "a5_2",
            text: "We're piloting in sleepy districts first, and sunset clauses force a vote to expand. If the vibe tilts toward sci-fi skirmish, we'll mothball them faster than you can say return to sender.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He reassures softly, which may seem naive."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense likes gradual pilots and sunset clauses."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Justice notes communities could face hidden risks."
                }
              }
            }
          },
          {
            id: "a5_3",
            text: "If gadget makers start a gum-measure contest, that's their PR funeral. We regulate behavior, not braggadocio, and we'll revisit thresholds with public panels instead of Twitter brawls.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He shifts blame to industry, dodging duties."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense wants coordinated deterrence, not shrugs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice welcomes accountability for manufacturers."
                }
              }
            }
          },
          {
            id: "a5_4",
            text: "Bullies escalate; neighbors cooperate. Mailboxes don't pick fights, but they won't flinch either, and that steadiness is exactly how you keep a race from starting in the first place.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He urges unity, casting drones as bullies."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense fears rhetoric may trigger counters."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Justice appreciates emphasis on cooperation."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
