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
      text: "With a squirrel-sung anthem on the summit agenda, what's the plan for rodent visas, protocol tweaks, and nut tariffs so culture is honored without breaking rules?",
      answers: [
        {
          id: "a_r1",
          text: "I'll be honest: I once deputized a squirrel choir at a unity picnic because we set careful rules. We'll honor our ally's culture with a small, temporary framework that's clear, humane, and boringly enforceable.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.ModerateNegative,
            o4: OutcomeModifierWeight.ModerateNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyPositive,
              reaction: "Owning the squirrel story projects control and humor under fire."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Pushes back on security branding that could spook partners."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Creates protocol churn that State must smooth in real time."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Per accords, performances get a narrow visa class, handler permits, health checks, and a nut-neutral tariff schedule; we keep ceilings tight, venues limited, and no spillover into general wildlife policy.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Dry rules risk looking small while the moment demands theater."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Tamps down their posture; hawks see a missed leverage play."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Clear citations calm allies and bureaucrats; order feels steady."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r3",
          text: "Until flagged and cleared, performing squirrels count as unflagged air assets; we’ll set controlled corridors, seed interdiction to deter baiting, and require tethered handlers. Culture's welcome; freeloading isn't.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.StronglyNegative,
              reaction: "Looks combative over pageantry; allies may view it as petty."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Validates their airspace frame; strengthens internal footing."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Hard-edge stance complicates lane-maps and permit language."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "This is a one-off, not a rodent New Deal; costs stay modest, handlers sign for cleanup, and we’re not opening a permanent embassy for woodland choristers. Guests sing, we clap, everyone leaves.",
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
              reaction: "Caution can read as retreat; critics fill the vacuum with mockery."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Soft tone undercuts deterrence; their 'unflagged' line blurs."
              },
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Reassurance helps coordinate consular messaging without panic."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Will you create a rodent-performer category, set handler liability and quarantine standards, and avoid accidentally legalizing a chipmunk marching band?",
        answers: [
          {
            id: "a_s1_1",
            text: "We’re drafting a V-RP visa for rodent performers, pairing licensed handlers with a 24-hour quarantine; liability sits with sponsors, and cultural waivers can’t dodge inspections or tariffs.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Leads with paperwork, not leadership; risks looking bureaucratic."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Narrows their lane; fewer excuses to run security drills."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Plays to State’s strengths; crisp rules earn quiet applause."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "Let’s not confuse dignity with per diem; no one's expensing acorns by the bushel, and perches don't count as tax shelters. We’ll publish a plain-English guide so no one needs a zookeeper-lawyer hybrid.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Quips here seem flippant as logistics piles up on staff."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Keeps tactical options open without box-checking."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Dodges clarity; consular posts will field angry calls."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "The framework is narrow and sunsets with the summit; after the encore, visas expire, perches come down, and the only thing lingering is a chorus you can’t hum in elevators.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Steady tone helps, but lacks a clear cost line for critics."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Sunsets limit readiness; they lose leverage over handlers."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Temporary window sells pragmatism without rewriting treaties."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "To be clear, there’s no blanket cultural exemption. You can sing your anthem, but you can’t smuggle a menagerie or bypass health checks. The rulebook still has ink.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Hard no invites backlash if allies see it as cultural slight."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Tough stance deters scope creep on security burdens."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rigid line complicates visas; risks tit-for-tat restrictions."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "Defense labels squirrels 'unflagged air assets'; will you set a safe corridor and counter-acorn measures, and keep nut tariffs from morphing into snack policy?",
        answers: [
          {
            id: "a_s2_1",
            text: "We’ll intercept uncoordinated scurries with soft barriers and trained handlers; if someone tries a drone-tail stunt, countermeasures trigger, and nut tariffs fund the seed-free perimeter. No snacks as smokescreens.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Aggressive tone risks overshadowing the summit’s goodwill."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Affirms their doctrine; discipline looks decisive to hawks."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Friction rises with hosts; corridor talks get harder."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "Security integrates with protocol via fixed altitude bands, no overflight of principals, and a micro-transponder on the boom mic frame—not the animals; tariffs cover feed control, not punish art.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Process focus steadies nerves but lacks headline control."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Rules constrain overreach; fewer chances to posture."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Integration of security and protocol lands as competent."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Think parade, not air raid; the riskiest vector is a rogue peanut, and we’ve mapped that. If a squirrel tries to brief the press, we’ll redirect it to a tree with on-background status.",
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
                reaction: "Minimizes threats; opponents call it unserious on safety."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Allows selective vigilance without full commitments."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Ambiguity muddies consular guidance and cross-border checks."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Spectators won’t notice the guardrails; expect a short performance, clear lines, and a quick exit—no sirens, no scramble, maybe a tiny cymbal.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Comforting words help little if incidents occur on camera."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hidden guardrails deny visible deterrence they prefer."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Smooths optics and keeps planners aligned with hosts."
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
        text: "If nuts carry tariffs to manage feed and contraband, who pays, how is it enforced at the gate, and can waivers avoid every tree registering as a cultural delegate?",
        answers: [
          {
            id: "a_t1_1",
            text: "Tariffs apply to bulk feed entering secure zones; show rations are pre-cleared with receipts tied to permits, and venue staff scan loads like bags—nuts in, nuts out, nothing loose.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Looks technocratic; critics say he is taxing snacks, not threats."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Security toolkit gets tied to customs; less maneuver room."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Clear thresholds ease enforcement and reduce consular friction."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "We’re not hiring nut-sniffing ferrets; barcode the feed, seal the tubs, and don’t overcomplicate a snack. If someone wheels in a walnut trebuchet, we’ll notice and it’s not performance art.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Jokes about barcodes can read as trivializing policy."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Keeps compliance light; less blowback from handlers."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Undercuts the tariff signal; loopholes invite arbitrage."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Waivers are narrow and event-tied. They avoid humiliating rituals, not basic safety. If a rule feels like bureaucracy for sport, we cut it; if it keeps critters and people healthy, it stays.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Soothing tone without tough edges invites cost attacks."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Reduced pressure on interdiction worries risk managers."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Narrow waivers preserve dignity and avoid precedent creep."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "Our first draft tried to tax every acorn by weight. We scrapped that faster than a hungry rodent. Simpler rules collect the same dues without turning ushers into accountants with scales.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "Candor resets narrative and humanizes the tariff course."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admitting overreach exposes them to scope-cut demands."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Confession means redrafting notes under tight timelines."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "What altitude, comms, and crowd-safety rules govern a squirrel choir overhead, and would jammers, tiny harnesses, or seed-free zones violate any summit protocol",
        answers: [
          {
            id: "a_t2_1",
            text: "Altitude caps stay at eye level, not banner level; any leap outside the box cues a pause and reset. We’ll jam rogue signals, not lullabies, and no handler flies solo. If it can fall on a diplomat, it’s out.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.ModerateNegative,
              o4: OutcomeModifierWeight.ModerateNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.StronglyNegative,
                reaction: "Firm rules can look harsh toward a partner’s tradition."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear caps and intercepts match their risk framework."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Strict posture strains protocol and local police liaison."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Comms run through the stage rig—hard-lined and shielded; harnesses are safety gear, not restraint. Seed-free zones are posted, brief, and enforceable like food-allergy aisles.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Technical brief calms media but lacks emotional lift."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Integration deflates theater; fewer opportunities to flex."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.StronglyPositive,
                  reaction: "Solid, lawful scaffolding reassures hosts and attendees."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "The tech is tiny, the footprint smaller, and the rules sunset at wheels-up; we’re protecting a moment, not building a furry checkpoint bureaucracy. After the show, the air returns to strictly boring.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Tone is calming yet may seem complacent if crowds surge."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Soft edges reduce perceived deterrence at the venue."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Low-impact kit aligns with heritage and safety rules."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We’re not rewriting summit law to accommodate acorn catapults, aerial flips, or bonus woodland cameos—no fireworks, no drones, and absolutely no crowd-surfing, no matter how on-key the chorus gets.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Flat refusal reads rigid; creativity would play better."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Denial closes loopholes; bolsters their compliance stance."
                },
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hard stop risks alienating cultural liaisons and planners."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
