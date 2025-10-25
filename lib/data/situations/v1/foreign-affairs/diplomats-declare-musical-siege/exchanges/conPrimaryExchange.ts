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
      text: "Does replacing embassy guards with a chamber orchestra signal whimsy or weakness, and who foots the bill when smugglers waltz through?",
      answers: [
        {
          id: "a_r1",
          text: "We will not be outplayed by woodwinds. I’m challenging any rogue embassy to a sunrise silence-off while we fund industrial earplugs and keep commerce humming.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.StrongNegative,
            o3: OutcomeModifierWeight.SlightPositive,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "Bold stance projects steadiness while avoiding escalation."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "This sidesteps protocol clarity and blurs our posture."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Mixed signals weaken deterrent rhythms at the perimeter."
              }
            }
          },
          followUpId: "q_sec1"
        },
        {
          id: "a_r2",
          text: "For clarity: crescendos are ceremonial flourishes, not a casus belli. Only a notarized fortissimo with timpani stamps triggers the Treaty of Timbre and consultations, not cannons.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightPositive,
            o2: OutcomeModifierWeight.SlightPositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.StrongPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyPositive,
              reaction: "Legalese reads cautious when markets want confidence."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Clear guidance protects treaty credibility and calm."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Too procedural; tempo dominance message gets lost."
              }
            }
          }
        },
        {
          id: "a_r3",
          text: "Deterrence works at tempo. If they swap sentries for sonatas, we’ll encircle with the 3rd Marching Brigade’s polka until they rediscover silence, while patrols block contraband from waltzing in.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.SlightNegative,
            o2: OutcomeModifierWeight.StrongPositive,
            o3: OutcomeModifierWeight.SlightNegative,
            o4: OutcomeModifierWeight.StrongNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "Over-cranking tempo risks ridicule and blowback."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Aggressive tone complicates delicate consultations."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Decisive motion demonstrates resolve at low cost."
              }
            }
          },
          followUpId: "q_sec2"
        },
        {
          id: "a_r4",
          text: "No, we are not replacing our own guards with oboes, triangles, or interpretive kazoo. Security stays security; the only sheet we tolerate at checkpoints is the shipping manifest.",
          type: AnswerType.Deny,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.SlightNegative,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "Flat denial sounds brittle if incidents mount."
            },
            cabinet: {
              [CabinetStaticId.State]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissiveness invites confusion among partners."
              },
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Practical stance preserves readiness without gimmicks."
              }
            }
          }
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec1",
        text: "Markets are twitchy about a 'musical siege.' Who pays for earplugs, overtime, and decibel hedges if tempos spook investors and slow border shipments?",
        answers: [
          {
            id: "a_s1_1",
            text: "Costs fall under existing security and trade facilitation funds. If a treaty crescendo is invoked, fees are prorated by decibel-minutes, audited, and disputes go to the Timbre Tribunal.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Sounds penny-wise as disruptions loom larger."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Consistent application reassures counterparts."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Underfunds surge capacity and rapid response."
                }
              }
            },
            followUpId: "q_ter1"
          },
          {
            id: "a_s1_2",
            text: "We’ve briefed ports and exchanges to treat this like weather: adjust schedules, don’t panic. Earplugs are cheap; losing confidence is expensive, and we won’t let that happen.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "Calm, competent tone steadies investors and ports."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Coordination note aligns with treaty practices."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Too soft on risk; surge posture underemphasized."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "There will be nuisance costs—overtime, reroutes, and a temporary premium on quiet trucks. We’ll publish a weekly noise-to-invoice report so taxpayers see who pays for the encore.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Owning costs without offsets spooks the street."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Admits ambiguity without a corrective plan."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Acknowledges need to mobilize supporting units."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "If markets faint at an oboe, they need sturdier portfolios. We’re focused on moving cargo, not grading woodwind solos like they’re macro indicators.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Mocking markets invites volatility and blame."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Tone erodes credibility with trade partners."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Signals toughness but lacks operational detail."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec2",
        text: "With oboes on the gate, are smugglers slipping in under pizzicato cover, and will you beef up patrols or just hire louder bassoons to scare them off?",
        answers: [
          {
            id: "a_s2_1",
            text: "We’re reinforcing with mobile checkpoints and the 3rd Marching Brigade’s deterrence drills. If they go forte, we go disciplined supersonic kazoo—within the law and with ear-safe buffers.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Forward posture reads active without overreach."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Hard push risks diplomatic frictions at crossings."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Reinforcements sharpen deterrence against smugglers."
                }
              }
            },
            followUpId: "q_ter2"
          },
          {
            id: "a_s2_2",
            text: "Customs uses scanners and analytics that don’t care about sonatas. We’re adding random inspections of instrument cases and syncing manifests to tempo logs to expose pattern abuse.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Tech-first answer can sound detached from urgency."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Evidence-based screening builds trust and speed."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Analytics alone cannot substitute for presence."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "No, we haven’t relaxed a single standard because someone plays baroque noodling at the gate. Bad actors don’t get a harmony discount, and they still meet the same hard checks.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Dismissal could backfire if a breach surfaces."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Affirms standards while leaving room for audits."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Signals complacency on physical interdiction."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Border teams are synced with local authorities; music can’t hide heat signatures, sniffer dogs, or paperwork. If anything, the beat makes our timing tighter.",
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
                reaction: "Assurances without metrics feel thin under stress."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Overreliance on coordination lacks clear authority."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Integrated teams can adapt quickly if guided well."
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
        text: "Under the Treaty of Timbre, who decides when a crescendo becomes binding fortissimo, and can a timpani stamp really make cargo wait in silence?",
        answers: [
          {
            id: "a_t1_1",
            text: "An independent Timbre Tribunal certifies any binding fortissimo using calibrated meters and verified scores. A timpani stamp authorizes talks and holds, not seizures or tariffs.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Balanced clarity supports credibility and calm."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Precise process language protects the treaty."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Legal gates may slow necessary countermeasures."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "No one is rerouting national commerce because a drummer got enthusiastic. The stamp isn’t a magic gavel; it triggers a pause and paperwork, not a blockade.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Overconfidence can invite tests and litigation."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Blanket denial ignores legitimate treaty triggers."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Keeps lanes open and avoids costly overreaction."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "If anyone tries to weaponize a fake fortissimo, we’ll challenge the claim and counter-program with documented silence, which invalidates their tempo leverage.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Threat framing risks escalation in court and street."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Forceful tone could chill allied cooperation."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Strong signal deters gaming of certification."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "The real problem isn’t decibels; it’s judgment. We prefer fewer arguments about forte and more deliveries arriving on time, in tune, and unremarkable.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Humility reads well, but demands concrete steps."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Vagueness weakens guidance to customs officials."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Hesitation can undercut enforcement readiness."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter2",
        text: "Where is the line between musical deterrence and militarizing the meter, and what safeguards keep supersonic kazoos from becoming a noise arms race?",
        answers: [
          {
            id: "a_t2_1",
            text: "Any acoustic tools are non-lethal, tightly scoped, and bound by clear decibel caps with third-party monitors. Our stance deters antics, not ordinary life.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightPositive,
              o2: OutcomeModifierWeight.SlightNegative,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.StrongNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Constraints reassure, but may look hesitant."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Safeguards show respect for norms and neighbors."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Limits risk blunting the deterrent effect."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Rules of engagement include ear-safe zones, quiet hours, and automatic shutoffs. We publish after-action tempo reports so oversight can see we stayed within the score.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.StrongPositive,
              o3: OutcomeModifierWeight.SlightNegative,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "Details help, yet could box us in later."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Transparent rules reduce misread escalation."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Over-specifying tactics can expose playbook."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "There’s a fine line between clever and overkill. If a loud tactic backfires, we will sunset it quickly, report why, and pivot back to boring, proven security.",
            type: AnswerType.Admit,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.StrongNegative,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.StrongPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "Admitting overreach risks political backlash."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "Doubt without remedy muddles partner planning."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "Acknowledging limits can refocus on core missions."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "If others escalate with gimmicks, we’ll challenge the premise and out-discipline them with silence, precision patrols, and, when needed, one exquisitely timed rest.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.SlightNegative,
              o2: OutcomeModifierWeight.SlightPositive,
              o3: OutcomeModifierWeight.SlightPositive,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "Measured challenge energizes supporters and teams."
              },
              cabinet: {
                [CabinetStaticId.State]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "Escalatory tone strains diplomatic capital."
                },
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "Clear resolve sustains deterrence and discipline."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
