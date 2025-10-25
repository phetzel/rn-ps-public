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
      text: "Can armored, GPS-tracked porcupines really guard bridges and data hubs without poking commuters or the budget, and who approves the tiny helmets?",
      answers: [
        {
          id: "a_r1",
          text: "Look, I admit it: I lost a thumb war to our Chief Zoologist and took the dare. It still beats my first plan—700 tiny jetpacks—and we’re stress-testing quill caps, costs, and common sense before any rollout.",
          type: AnswerType.Admit,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongPositive,
            o2: OutcomeModifierWeight.ModerateNegative,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightNegative
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Positive,
              reaction: "He owns the dare and pivots to practical benefits and safety."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "They bristle at levity and warn funding gaps erode readiness."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They caution that admissions complicate pending authority review."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They worry candor could invite probes into vendor details."
              }
            }
          }
        },
        {
          id: "a_r2",
          text: "Bridge security isn’t a bake sale; fund the shock-absorbing booties and quill-friendly visors or tell commuters the cones are in charge. We’ll hit performance targets once resources stop playing hide-and-seek.",
          type: AnswerType.Challenge,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.StrongNegative,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.StrongPositive,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He dislikes the combative tone amid budget scrutiny and optics."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "They welcome firm funding asks and gear specificity."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They fear overpromising while legal thresholds are unsettled."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They see rhetoric risking public trust in daily operations."
              }
            }
          },
          followUpId: "q_sec_2"
        },
        {
          id: "a_r3",
          text: "We are reviewing whether deputizing spiky mammals fits the Prickly Persons Clause, and we won’t prejudge the memo. No comment on helmet sizing, overtime, or biscuit allotments until that review lands.",
          type: AnswerType.Deflect,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.ModeratePositive,
            o3: OutcomeModifierWeight.StrongNegative,
            o4: OutcomeModifierWeight.Neutral
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.Negative,
              reaction: "He sees the non-answer as evasive and politically costly."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They prefer decisive support over legal hedging."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "They value space to complete the Prickly Persons analysis."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They worry silence feeds rumors about safety measures."
              }
            }
          }
        },
        {
          id: "a_r4",
          text: "Quills are capped, GPS geofences are tight, handlers carry oat biscuits, and patrol routes avoid crowds. We’ll phase pilots at low-traffic spans first and publish the safety dashboard before scale-up.",
          type: AnswerType.Inform,
          outcomeModifiers: {
            o1: OutcomeModifierWeight.Neutral,
            o2: OutcomeModifierWeight.Neutral,
            o3: OutcomeModifierWeight.Neutral,
            o4: OutcomeModifierWeight.SlightPositive
          },
          impacts: {
            president: {
              weight: ExchangeImpactWeight.SlightlyNegative,
              reaction: "He likes details but fears it sounds technocratic and cold."
            },
            cabinet: {
              [CabinetStaticId.Defense]: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "They want stronger budget backing for equipment."
              },
              [CabinetStaticId.Justice]: {
                weight: ExchangeImpactWeight.SlightlyPositive,
                reaction: "They appreciate avoiding sensitive names while informing."
              },
              [CabinetStaticId.Homeland]: {
                weight: ExchangeImpactWeight.StronglyPositive,
                reaction: "They approve clear protocols and measured transparency."
              }
            }
          },
          followUpId: "q_sec_1"
        }
      ]
    },
    secondaryQuestions: [
      {
        id: "q_sec_1",
        text: "Safety specifics: How do quill caps, geofences, and biscuit-carrying handlers keep commuters safe, and what happens if a porcupine goes rogue?",
        answers: [
          {
            id: "a_s1_1",
            text: "Polymer nibs blunt each quill, vests buzz when a geofence edge is approached, and handlers recall with a biscuit cue. If one bolts, a soft-net drone and a calm crate meet it within seconds, per the playbook.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He finds the jargon dry and unlikely to reassure riders."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They like hardware specifics showing forethought."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Negative,
                  reaction: "They worry compliance claims get ahead of rulings."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear overdisclosure maps exploitable patterns."
                }
              }
            },
            followUpId: "q_ter_1"
          },
          {
            id: "a_s1_2",
            text: "Drills at dummy bridges yielded zero pokes per thousand pedestrian passes, and we’re keeping it there. The porcupines care more about oats than ankles, and the data keep us honest.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He approves of test metrics that convey competence."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They think drills without funding commitments ring hollow."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They prefer cautious language around liability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They welcome calm, measurable safety figures."
                }
              }
            }
          },
          {
            id: "a_s1_3",
            text: "No, they are not scanning faces, enforcing lane discipline, or chewing brake lines. They patrol perimeters, not pockets, and they’re physically kept off commuter paths by barriers and beeps.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He sees categorical denials as brittle if facts change."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They dislike rejecting capabilities they might need."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They support clear limits that reduce legal exposure."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry it undercuts deterrence and flexibility."
                }
              }
            }
          },
          {
            id: "a_s1_4",
            text: "For operational choreography, we’ll let the Handler Guild brief after their biscuit caucus. My lane is outcomes, not whether the recall whistle is in C-sharp or D-flat today.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He worries deflection reads as secrecy, not strength."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They see it as dodging resource issues."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear stonewalling invites subpoenas."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They value protecting tactics from overexposure."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_sec_2",
        text: "Budget and welfare: What’s the tab for helmets, booties, and liability, and how will you ensure porcupines are not drafted into overtime?",
        answers: [
          {
            id: "a_s2_1",
            text: "Early range is 28–41 million for pilots, with per-porcupine costs falling as gear is reused. Contracts bake in independent welfare audits, nap windows, and capped shifts, with penalties for cutting corners.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He thinks ranges without tradeoffs sound squishy."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They want firmer asks to secure mission kits."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They like early clarity on classifications."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry sticker shock will dominate headlines."
                }
              }
            },
            followUpId: "q_ter_2"
          },
          {
            id: "a_s2_2",
            text: "If bean counters want champagne security on tap-water budgets, they can explain that to morning commuters. Approve humane kit and training now, or expect traffic cones doing cardio on your dime.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He winces at combative budget jabs during scrutiny."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They relish a tough stance that protects kit quality."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They prefer not to prejudge labor categories."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear it paints safety as a luxury add-on."
                }
              }
            }
          },
          {
            id: "a_s2_3",
            text: "Questions on overtime classifications and the Prickly Persons Clause sit with our legal memo-in-progress. Until that lands, we won’t speculate about hazard biscuits, stipends, or quill-care deductions.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He finds the silence prudent but politically flat."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They want advocacy, not vagueness, in hearings."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They value deferral while memos finalize."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They dislike how it leaves readiness unanswered."
                }
              }
            }
          },
          {
            id: "a_s2_4",
            text: "Handlers track stress cues and rotate teams, and every prickly professional gets enrichment tunnels and biscuit stipends. No creature pulls back-to-back nights; the schedule is kinder than my spin class.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He likes humane safeguards tied to accountable budgets."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry welfare promises constrain deployment."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They stress policies must align with labor law."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They welcome a practical rotation plan."
                }
              }
            }
          }
        ]
      }
    ],
    tertiaryQuestions: [
      {
        id: "q_ter_1",
        text: "When does a recall or time-out trigger if a porcupine bolts or GPS hiccups, and can a commuter safely halt a charge with a biscuit?",
        answers: [
          {
            id: "a_t1_1",
            text: "Two triggers: geofence breach or elevated sprint in a no-sprint zone. The vest chirps, the handler recalls, and a soft-net drone stages nearby. Biscuit override works only with the paired cue and vest handshake.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He sees it as useful but a bit clinical for public ears."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They want redundancy details and hardened comms."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They caution thresholds may imply liability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They like clear triggers the field can execute."
                }
              }
            }
          },
          {
            id: "a_t1_2",
            text: "In tests, the average time from alert to calm crate was under 18 seconds, and false alarms dropped each week. The animals like the routine; the biscuits beat adrenaline every time.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He favors measurable response times that show control."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry timelines invite gaming by adversaries."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They prefer disclaimers around variability."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They welcome speed benchmarks for drills."
                }
              }
            }
          },
          {
            id: "a_t1_3",
            text: "Random commuters can’t commandeer porcupines like rental scooters, and we’re not crowdsourcing commands. Personal snacks don’t unlock anything; that’s by design to prevent chaos and crumb-based hacking.",
            type: AnswerType.Deny,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He fears the tone is scolding toward commuters."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They dislike discouraging improvised assistance."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They support boundaries that reduce risk."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry it chills community cooperation."
                }
              }
            }
          },
          {
            id: "a_t1_4",
            text: "We don’t publish the recall phrase, tone, or whisker-scratch sequence because rogues can read too. You’ll see the results on the dashboard, not the recipe.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He finds secrecy necessary but politically costly."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They want to publicize non-sensitive deterrents."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They appreciate protecting recall authentication."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear secrecy erodes trust without context."
                }
              }
            }
          }
        ]
      },
      {
        id: "q_ter_2",
        text: "Who makes the tiny helmets and booties, was there real competition, and how do you prevent 'Helmetgate' markups from nibbling the bottom line?",
        answers: [
          {
            id: "a_t2_1",
            text: "We ran an open tender with prototype drop tests and quill-compatibility scoring, and multiple vendors cleared the bar. Unit prices step down each batch, and all specs will be redacted-then-published.",
            type: AnswerType.Inform,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongPositive,
              o2: OutcomeModifierWeight.ModerateNegative,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightNegative
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He thinks it's dry, credible, but not budget-winning."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They want stronger emphasis on durability specs."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They note procurement claims may constrain appeals."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They like tests that show field resilience."
                }
              }
            }
          },
          {
            id: "a_t2_2",
            text: "Independent auditors sample invoices, and we’ve built clawbacks for shoddy stitching or dome dings. If a visor fogs or a boot squeaks, the vendor eats the fix, not taxpayers or paws.",
            type: AnswerType.Reassure,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.StrongNegative,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.StrongPositive,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Positive,
                reaction: "He likes independent eyes and live audit triggers."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry audits delay deployment of kits."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They support controls but caution on due process."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyPositive,
                  reaction: "They welcome safeguards against price creep."
                }
              }
            }
          },
          {
            id: "a_t2_3",
            text: "Any supplier planning boutique markups can try selling that to our bridge crews. Deliver rugged gear at scale and on time, or we’ll swap you for someone who knows a quill from a kebab skewer.",
            type: AnswerType.Challenge,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.ModeratePositive,
              o3: OutcomeModifierWeight.StrongNegative,
              o4: OutcomeModifierWeight.Neutral
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.Negative,
                reaction: "He dislikes taunting vendors amid supply risk."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They cheer tough talk to keep specs honest."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They warn rhetoric could prejudice bids."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They fear suppliers may walk, slowing readiness."
                }
              }
            }
          },
          {
            id: "a_t2_4",
            text: "We won’t name the tiny-helmet shop yet, because procurement is still in its unglamorous paperwork montage. When signatures dry, you’ll get the brand names without the romance.",
            type: AnswerType.Deflect,
            outcomeModifiers: {
              o1: OutcomeModifierWeight.Neutral,
              o2: OutcomeModifierWeight.Neutral,
              o3: OutcomeModifierWeight.Neutral,
              o4: OutcomeModifierWeight.SlightPositive
            },
            impacts: {
              president: {
                weight: ExchangeImpactWeight.SlightlyNegative,
                reaction: "He sees secrecy on suppliers as politically risky."
              },
              cabinet: {
                [CabinetStaticId.Defense]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They want openness to spur competition on quality."
                },
                [CabinetStaticId.Justice]: {
                  weight: ExchangeImpactWeight.Positive,
                  reaction: "They back withholding names during active reviews."
                },
                [CabinetStaticId.Homeland]: {
                  weight: ExchangeImpactWeight.SlightlyNegative,
                  reaction: "They worry secrecy fuels 'Helmetgate' narratives."
                }
              }
            }
          }
        ]
      }
    ]
  }
};
