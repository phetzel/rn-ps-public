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
      text: "An embassy replaced guards with a chamber orchestra, sparking spats and crescendo clauses. What’s the administration’s first move to protect protocol, commerce, and sleep",
      answers: [
        {
          id: "a_r1",
          text: "The President won’t be outplayed. We’re challenging any embassy to a sunrise silence-off while we deploy industrial earplugs and quiet corridors, proving leadership means louder rests, not louder notes.",
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
              reaction: "This assertive stance signals control and personal resolve."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "State worries this bluster muddles protocol clarifications."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Defense sees a show of resolve that supports deterrence."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r2",
          text: "First, clarity: crescendos are ceremonial, not casus belli. Under the Treaty of Timbre, only notarized fortissimo bearing timpani stamps and metronome logs can bind, and we will remind all signatories in writing.",
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
              reaction: "He dislikes ceding spotlight to procedural clarifications."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "State gains room to codify ceremonial versus binding cues."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Defense sees mixed signals that may blunt deterrence."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Tempo deterrence works. Defense is posturing the 3rd Marching Brigade to encircle with a polite polka perimeter; if they go reckless forte, we answer with precision kazoo—within local noise ordinances and common sense.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He fears overmilitarizing a prank could backfire politically."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "State warns tempo posturing complicates delicate diplomacy."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Defense welcomes visible tempo dominance to deter mischief."
              }
            }
          }
        },
        {
          id: "a_r4",
          text: "Residents and shops will not be hostage to a timpani tantrum. We’re coordinating quiet hours, buffer routes, and acoustic panels so the only thing peaking this week is the soufflé at lunch.",
          type: AnswerType.Reassure,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "He accepts relief steps but sees limited strategic value."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "State sees local relief without resolving treaty ambiguity."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Defense worries restrictions could hinder operational options."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Confidential tempo rules allegedly decide treaty triggers by crescendo. Which rules apply, and who judges ceremonial forte versus a casus belli under protocol",
        answers: [
          {
            id: "a_s1_1",
            text: "Protocol is clear: dynamics guide ceremony, not conflict. A binding act requires registered fortissimo with timpani seal, witness baton marks, and calibrated metronome logs. Disputes go to the neutral Pitch Court.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He views narrow protocol talk as weak amid public clamor."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State values reiterating that dynamics are ceremonial."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense fears this soft line signals permissiveness."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "On an authorized basis from State: we will publish a redacted tempo appendix clarifying thresholds, while consultations remind parties that crescendos alone cannot trigger enforcement under Timbre.",
            type: AnswerType.Authorized,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He likes structured transparency that keeps him leading."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State gains authority by publishing vetted guidance."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense worries disclosures could constrain responses."
                }
              }
            },
            authorizedCabinetMemberId: CabinetStaticId.State
          },
          {
            id: "a_s1_3",
            text: "I’m not here to sight-read case law at prestissimo. The score for who bangs what and when is in the treaty library; no one benefits if I improvise a ruling over a snare drum.",
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
                reaction: "He dislikes evasive tone under scrutiny of allies."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State sees deflection as eroding credibility on rules."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense appreciates not telegraphing thresholds publicly."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "We reject the claim that a swelling string line equals a legal trigger. No nation signed a ‘Blast It And It’s Binding’ clause, and anyone waving one is holding it upside down.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He sees firm rejection but fears it sounds dismissive."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State worries denial clashes with leaked annex cues."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense values rejecting legal traps set by adversaries."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Ports, markets, and bedrooms near the enclave face dueling symphonies. What concrete steps will shield commerce and sleep without muzzling art or provoking a louder arms",
        answers: [
          {
            id: "a_s2_1",
            text: "We’ll keep trucks rolling and neighbors resting. Expect quiet-hour compacts, earplug vouchers, and soft-surface corridors around hot spots so bass lines don’t rattle tills or baby monitors.",
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
                reaction: "He approves relief tone but misses a decisive edge."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State supports pragmatic corridors and quiet hours."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Defense sees constraints that may dilute deterrence."
                }
              }
            }
          },
          {
            id: "a_s2_2",
            text: "Some shipments hit delays when a brass line marched through a loading lane. We were late to update tempo codes for mixed-use blocks; the fix is drafted and will be posted before the weekend.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes admitting delays without a punchy fix."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State notes candor but worries about trade optics."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense appreciates realism that informs joint planning."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "We don’t program sleep playlists from the podium. But we do nudge everyone off the cymbals at 3 a.m. and onto diplomacy at 3 p.m., which historically sells more coffee and fewer gongs.",
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
                reaction: "He finds the shrug unpresidential during disruption."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State warns deflection strains local partners."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense prefers not to promise specific constraints."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Commerce, Culture, and Defense are mapping a ‘hush grid’ with decibel caps by zone, timed delivery windows, and a music-to-market hotline. The Defense piece uses a ring of rhythm that won’t jam trade.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He likes a named plan that still keeps him flexible."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "State benefits from coordinated, lawful mitigation steps."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense worries about overregulation of drills."
                }
              }
            },
            followUpId: "q_ter2"
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter1",
        text: "On the Treaty of Timbre, are the tempo annexes classified, and who calibrates metronomes when states dispute whether a crescendo is a binding trigger",
        answers: [
          {
            id: "a_t1_1",
            text: "The annexes are selectively redacted—names and serial numbers, not the beats. Metronomes are certified by the Independent Pitch Court, which convenes tuners from neutral conservatories.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He likes transparency that frames him as steady."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "State gains legitimacy by clarifying the annexes."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense worries details can be exploited by rivals."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "If anyone tries to weaponize a swell, we’ll out-rest them. Bring your bravura; we’ll bring a silence you could land a dirigible on, and a test every party must pass blindfolded.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He risks seeming theatrical rather than strategic."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State welcomes pairing firmness with lawful bounds."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense notes the threat invites resource drain."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "None of this buries daily life in legal noise. Sleep, trade, and routine will outrank a dramatic flourish, and we’ve told partners that bedtime beats bravado every single time.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He fears comfort talk undercuts resolve on rules."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State worries reassurance blurs legal thresholds."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense values calm messaging that preserves options."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "I won’t publish the tempo map from the lectern. If you want chapter and verse, file under the Freedom of Rhythm Act, and we’ll send you a copy with fewer tea stains.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes hiding details while hinting escalation."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "State sees casual hints as risky for negotiations."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense prefers ambiguity to avoid binding red lines."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Defense floated a polka encirclement and precision kazoos. How will you balance deterrent decibels with noise ordinances, quiet hours, and the sanity of neighbors",
        answers: [
          {
            id: "a_t2_1",
            text: "We’ll win by discipline, not volume. A polka ring acts as an acoustic moat facing inward, and kazoos stay holstered unless someone solos at reckless volume. Deterrence doesn’t mean tinnitus.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He sees bravado without balance as politically risky."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State worries decibel shows breach local compacts."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense likes resolve but notes ordinance risks."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Decibel caps, curfews, and soft-march drills keep the soundtrack civilized. Neighbors should expect a firm but lullaby-compliant presence, more tap-shoes than tubas after dusk.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He accepts discipline talk but wants sharper edge."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "State favors predictable, lawful noise controls."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense cautions strict caps can dull readiness."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "No, ‘supersonic kazoo’ is not our doctrine. It’s a cheeky contingency label, like ‘break-glass triangle.’ We don’t endorse ‘supersonic’ as a tempo marking or a lifestyle.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes mockery that dismisses prior signals."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "State fears denial undermines coordinated posture."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Defense appreciates correcting unserious doctrine."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "Defense coordinates with Night Sound Boards to route units along muffled avenues, measure sound in situ, and publish daily noise dashboards so shopkeepers and sleepers can plan.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "He likes a rules-based approach with local partners."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "State gains credit for structured coordination."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Defense worries oversight could slow response."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
