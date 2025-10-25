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
      text: "After wildlife-signal glitches armed sentry scarecrows, who pays for spooked freight, haywire citations, and storefronts guarded by straw while commerce stalls?",
      answers: [
        {
          id: "a_r1",
          text: "I'll debate the Scarecrow General at sunrise on live radio; if the hay wins on wits, we retire the program. If I win, we fix it fast and bill the geese for counseling.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "The bold debate stance projects accountability under fire."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Public challenge risks undercutting deterrence messaging."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Spectacle complicates guidance on invalid citations."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Live sparring may confuse seniors awaiting clear alerts."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "We're upgrading deterrence, not doubling down on drift. Whistle-primed pitchforks and anti-goose capes keep docks moving, and we will prove it in open drills this week.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Appearing to escalate hardware invites ridicule and concern."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Strong support for rural deterrence aligns with mandate."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Militarizing straw worsens our liability exposure immediately."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Operational focus is noted but does not change alert plans."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "Scarecrows lack arrest powers, fingerprints, and sleeves; any citations they prompted should not stand. We advise halting enforcement actions and returning yarn collected as 'evidence'.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Legal rollback reads like retreat from prior decisions."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Curtailing deployments undercuts perceived readiness."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear denial grounds agencies to halt unenforceable fines."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Abrupt legal shifts can muddle our pause-and-fix messaging."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "We ordered a 48-hour pause and a calm, technical fix after the wildlife-signal crosstalk. Targeted barn-by-barn alerts will guide routes and reduce downtime while we recalibrate.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Technical caution may appear indecisive during disruption."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "No immediate effect on field posture from this statement."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Neutral,
                reaction: "Legal posture remains unchanged by the technical briefing."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Calm pause and clear fixes match our operational playbook."
              }
            }
          },
          followUpId: "q_sec1"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Our readers see gust-prone hay troops blocking loading docks; what is the real downtime and refund policy if geese keep 'detaining' forklift operators?",
        answers: [
          {
            id: "a_s1_1",
            text: "We traced supply disruptions to a narrow band of goose-honk interference near docks. Once the patch deploys, we will issue refund guidance for documented delays and reroute maps.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Admitting geofence scope chips at perceived control."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Narrow-cause focus delays field posture adjustments."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "Clarifies nothing new about citation validity."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Specific mapping supports targeted barn alerts."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "Detentions by geese are theatrical, not legal. Carriers will find docks clear as wind windows stabilize, and our incident counts are already trending down in test counties.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Downplaying incidents risks sounding dismissive."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Framing as theater weakens deterrence narratives."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Affirms our view that geese detentions carry no force."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Reassurance tone helps reduce rumor-driven calls."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "Wind patterns outrun any bureaucracy; we won't pretend to schedule the breeze. Operators should use posted wind cones and keep forklifts clear of anything wearing a hat.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Deflection reads as avoidance while docks remain stuck."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Acknowledging wind limits supports gear hardening."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Avoiding timelines complicates restitution guidance."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Non-answers erode trust in upcoming alerts."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "We underestimated how gusts funnel between warehouses and confuse the signal beacons. That's on us, and the patch includes better shielding and less dramatic scarecrow poses.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Owning missteps is costly amid ongoing delays."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Lesson-learned posture can justify sturdier kits."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admission invites challenges to prior citations."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Highlighting gust funnels can heighten local anxiety."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Liability insurers say scarecrows lack arrest powers and sleeves; will fines be voided, yarn returned, and agencies sued when knitters out-lawyer your straw?",
        answers: [
          {
            id: "a_s2_1",
            text: "Fines based on straw gestures won't hold up, and agencies will not be suing knitters. We are preparing a broad voidance memo and a simple yarn-claims process this week.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Conceding invalid fines reflects earlier oversight."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Legal retreat weakens our deterrent posture."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "This validates our stance on straw lacking arrest power."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Retroactive changes complicate community messaging."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "If insurers want to litigate against hay, we invite them to the trial range. We'll demonstrate that upgraded posture deters geese and vandals alike without blocking commerce.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Inviting courtroom theatrics risks political blowback."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Aggressive stance signals confidence in field measures."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "This bravado undermines prudent liability strategy."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Litigation talk distracts from the 48-hour fix."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_3",
            text: "A centralized portal will log incidents, reimbursements, and chain-impact metrics. Expect daily dashboards so businesses can plan around remaining hotspots during the pause.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Portal plan implies broad exposure to claims."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reimbursements may divert funds from readiness."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Centralized logs aid review and vacating bad fines."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Structured intake dovetails with alert rollout."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "No one is criminalizing knitting, and no one is paying a scarecrow overtime. Our focus is protect, pause, patch, and reopen with fewer feathers ruffled and fewer forms.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Steady tone projects calm in a chaotic news cycle."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft assurances can read as lack of resolve."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Vague comfort complicates prosecutorial clarity."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "It may dull urgency for the technical fix."
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
        text: "You've paused activation for 48 hours; what exact technical fix stops wildlife signals from deputizing gourds, and how will barn-by-barn alerts avoid panic among seniors?",
        answers: [
          {
            id: "a_t1_1",
            text: "The glitch was crosstalk between migration beacons and our scarecrow whistles. Firmware shifts to a non-honk band, plus local repeaters, will stop deputizing gourds cold.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModeratePositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical jargon risks sounding detached from impacts."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Signal crosstalk talk delays gear decisions."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Neutral,
                  reaction: "No immediate bearing on legal posture is offered."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Root-cause clarity directly supports fix deployment."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "Barn-by-barn alerts will be short, plain, and posted in print and radio. We tested them with seniors councils, and the result was fewer rumors and more coffee breaks.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.ModerateNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Reassurances alone can seem like stalling."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Comfort messaging does not harden perimeters."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soothing tone adds little to enforcement guidance."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Plain alerts reduce panic and cut rumor propagation."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "We won't publish exact frequencies while the geese are, frankly, listening. You'll get the change log after rollout, along with a friendly picture of a retired pumpkin.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.ModeratePositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Opacity invites suspicion and media escalation."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Protecting specifics respects operational security."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Limited detail hinders discovery and case reviews."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Secrecy can undercut trust in the patch process."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We should have stickered every unit 'not a deputy' on day one. The patch adds that, and the pose library loses the hand-on-hip stance that read as 'you there, stop'.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Accountability restores some credibility after missteps."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Labeling errors point to procurement oversight."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Explicit labeling reduces citation confusion."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting gaps risks shaking confidence in alerts."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Defense touts whistle-primed pitchforks and anti-goose capes; how much will this upgrade cost, and why should rural residents see deterrence rather than cosplay?",
        answers: [
          {
            id: "a_t2_1",
            text: "The upgrade costs less than a single day of a clogged rail spur, and it buys real deterrence. Geese and vandals target ambiguity; a confident hay line makes them rethink.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.MajorPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Cost framing shows comparative prudence under pressure."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Strongly backs the upgraded deterrence approach."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Budget bravado ignores unresolved legal exposure."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Focus on cost may overshadow public-facing fixes."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Line items include capes, whistles, and ballast, capped by a sunset clause and field audit. If it doesn't cut disruptions by 60 percent, the gear gets mulched.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.MajorPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Line-item talk can sound bureaucratic and slow."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting ballast costs signals design weakness."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Expenses do not resolve questionable citations."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Detail aids transparency for rural audiences."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "This is not cosplay; safety capes meet wind and visibility standards. No one is authorizing scarecrows to arrest, and no citations will flow from their couture.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.MajorPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Denial risks appearing tone-deaf to optics concerns."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Affirming safety specs supports readiness optics."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Firm stance may entrench contested liabilities."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dismissive tone complicates community outreach."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Independent trials in three test counties will verify performance before broader spend. If results wobble, the default is de-escalate, not double down.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.MajorPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Trials read as delay while disruptions persist."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "External validation could expose vulnerabilities."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Testing does not address past fines or yarn holds."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Independent trials can build public confidence."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
